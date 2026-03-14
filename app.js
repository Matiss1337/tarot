(function () {
  const DAILY_DRAW_COOKIE = "tarotDailyDraw";

  function tarotApp() {
    return {
      deck: [],
      spreadSize: 5,
      drawnCards: [],
      readingSummary: "",
      drawLocked: false,
      nextDrawAt: null,
      timeUntilNextDraw: "",
      dailyReadingMessage: "",
      countdownTimerId: null,

      init() {
        this.deck = window.TarotDeck.buildDeck();
        this.restoreSavedDraw();
        this.updateCooldownState();
        this.startCountdownTimer();
      },

      drawCards() {
        if (this.drawLocked) {
          return;
        }

        const pool = [...this.deck];
        const positions = window.TarotDeck.spreadPositions(this.spreadSize);
        const cards = [];

        for (let index = 0; index < this.spreadSize; index += 1) {
          const pickedIndex = Math.floor(Math.random() * pool.length);
          const baseCard = pool.splice(pickedIndex, 1)[0];
          const reversed = Math.random() < 0.5;

          cards.push(this.createDrawnCard(baseCard, reversed, index + 1, positions[index]));
        }

        this.applyDraw(cards, true);
      },

      clearReading() {
        this.drawnCards = [];
        this.readingSummary = "";
        this.dailyReadingMessage = "";
        this.drawLocked = false;
        this.nextDrawAt = null;
        this.timeUntilNextDraw = "";
        clearDailyDrawCookie();
      },

      scrollCards(direction) {
        const container = this.$refs.cardsCarousel;

        if (!container) {
          return;
        }

        const slide = container.querySelector("[data-card-slide]");
        const gap = 16;
        const amount = slide
          ? slide.getBoundingClientRect().width + gap
          : container.clientWidth;

        container.scrollBy({
          left: amount * direction,
          behavior: "smooth",
        });
      },

      createDrawnCard(baseCard, reversed, slot, slotLabel) {
        return {
          ...baseCard,
          slot,
          slotLabel,
          reversed,
          meaning: window.TarotDeck.getMeaning(baseCard, reversed),
          application: window.TarotDeck.getApplication(baseCard, reversed),
          keywords: window.TarotDeck.getKeywords(baseCard, reversed),
          imageUrl: window.TarotDeck.getImageUrl(baseCard),
          imageLoaded: false,
          imageError: false,
        };
      },

      applyDraw(cards, persist) {
        this.drawnCards = cards;
        this.readingSummary = window.TarotDeck.summarizeReading(cards, "");
        this.dailyReadingMessage = "This is your reading for today. You can draw again tomorrow.";

        if (persist) {
          this.nextDrawAt = getNextLocalMidnight().getTime();
          this.drawLocked = true;
          this.persistDailyDraw(cards);
          this.updateCooldownState();
        }

        this.$nextTick(() => {
          if (this.$refs.cardsCarousel) {
            this.$refs.cardsCarousel.scrollTo({ left: 0, behavior: "smooth" });
          }
        });
      },

      persistDailyDraw(cards) {
        const payload = {
          dateKey: getDateKey(new Date()),
          cards: cards.map((card) => ({
            name: card.name,
            reversed: card.reversed,
          })),
        };

        setDailyDrawCookie(payload);
      },

      restoreSavedDraw() {
        const payload = getDailyDrawCookie();

        if (!payload || payload.dateKey !== getDateKey(new Date()) || !Array.isArray(payload.cards)) {
          clearDailyDrawCookie();
          return;
        }

        const positions = window.TarotDeck.spreadPositions(this.spreadSize);
        const restoredCards = payload.cards
          .map((savedCard, index) => {
            const baseCard = this.deck.find((card) => card.name === savedCard.name);

            if (!baseCard) {
              return null;
            }

            return this.createDrawnCard(
              baseCard,
              Boolean(savedCard.reversed),
              index + 1,
              positions[index]
            );
          })
          .filter(Boolean);

        if (restoredCards.length !== this.spreadSize) {
          clearDailyDrawCookie();
          return;
        }

        this.nextDrawAt = getNextLocalMidnight().getTime();
        this.drawLocked = true;
        this.applyDraw(restoredCards, false);
        this.updateCooldownState();
      },

      updateCooldownState() {
        if (!this.nextDrawAt) {
          this.drawLocked = false;
          this.timeUntilNextDraw = "";

          if (!this.drawnCards.length) {
            this.dailyReadingMessage = "";
          }

          return;
        }

        const remainingMs = this.nextDrawAt - Date.now();

        if (remainingMs <= 0) {
          this.drawLocked = false;
          this.nextDrawAt = null;
          this.timeUntilNextDraw = "";
          this.dailyReadingMessage = "";
          this.drawnCards = [];
          this.readingSummary = "";
          clearDailyDrawCookie();
          return;
        }

        this.drawLocked = true;
        this.timeUntilNextDraw = formatTimeRemaining(remainingMs);
        this.dailyReadingMessage = "This is your reading for today. You can draw again tomorrow.";
      },

      startCountdownTimer() {
        if (this.countdownTimerId) {
          clearInterval(this.countdownTimerId);
        }

        this.countdownTimerId = window.setInterval(() => {
          this.updateCooldownState();
        }, 1000);
      },
    };
  }

  function getDateKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  function getNextLocalMidnight() {
    const nextMidnight = new Date();
    nextMidnight.setHours(24, 0, 0, 0);
    return nextMidnight;
  }

  function formatTimeRemaining(milliseconds) {
    const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  }

  function setDailyDrawCookie(payload) {
    document.cookie = [
      `${DAILY_DRAW_COOKIE}=${encodeURIComponent(JSON.stringify(payload))}`,
      `expires=${getNextLocalMidnight().toUTCString()}`,
      "path=/",
      "SameSite=Lax",
    ].join("; ");
  }

  function getDailyDrawCookie() {
    const prefix = `${DAILY_DRAW_COOKIE}=`;
    const cookie = document.cookie
      .split("; ")
      .find((entry) => entry.startsWith(prefix));

    if (!cookie) {
      return null;
    }

    try {
      return JSON.parse(decodeURIComponent(cookie.slice(prefix.length)));
    } catch {
      clearDailyDrawCookie();
      return null;
    }
  }

  function clearDailyDrawCookie() {
    document.cookie = [
      `${DAILY_DRAW_COOKIE}=`,
      "expires=Thu, 01 Jan 1970 00:00:00 GMT",
      "path=/",
      "SameSite=Lax",
    ].join("; ");
  }

  document.addEventListener("alpine:init", () => {
    window.Alpine.data("tarotApp", tarotApp);
  });

  window.tarotApp = tarotApp;
})();
