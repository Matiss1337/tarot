(function () {
  function tarotApp() {
    return {
      deck: [],
      spreadSize: 5,
      drawnCards: [],
      readingSummary: "",

      init() {
        this.deck = window.TarotDeck.buildDeck();
      },

      drawCards() {
        const pool = [...this.deck];
        const positions = window.TarotDeck.spreadPositions(this.spreadSize);
        const cards = [];

        for (let index = 0; index < this.spreadSize; index += 1) {
          const pickedIndex = Math.floor(Math.random() * pool.length);
          const baseCard = pool.splice(pickedIndex, 1)[0];
          const reversed = Math.random() < 0.5;

          cards.push({
            ...baseCard,
            slot: index + 1,
            slotLabel: positions[index],
            reversed,
            meaning: window.TarotDeck.getMeaning(baseCard, reversed),
            application: window.TarotDeck.getApplication(baseCard, reversed),
            keywords: window.TarotDeck.getKeywords(baseCard, reversed),
            imageUrl: window.TarotDeck.getImageUrl(baseCard),
            imageLoaded: false,
            imageError: false,
          });
        }

        this.drawnCards = cards;
        this.readingSummary = window.TarotDeck.summarizeReading(cards, "");
        this.$nextTick(() => {
          if (this.$refs.cardsCarousel) {
            this.$refs.cardsCarousel.scrollTo({ left: 0, behavior: "smooth" });
          }
        });
      },

      clearReading() {
        this.drawnCards = [];
        this.readingSummary = "";
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
    };
  }

  document.addEventListener("alpine:init", () => {
    window.Alpine.data("tarotApp", tarotApp);
  });

  window.tarotApp = tarotApp;
})();
