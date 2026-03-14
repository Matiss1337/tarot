(function () {
  const LANGUAGE_COOKIE = "tarotLanguage";
  const DEFAULT_LANGUAGE = "lv";
  const translations = {
    en: {
      siteTitle: "Daily tarot draw",
      drawCards: "Draw",
      availableTomorrow: "Available again tomorrow",
      todaysReading: "This is your reading for today. You can draw again tomorrow.",
      nextDrawIn: "Next draw in",
      oneCard: "1 card",
      threeCards: "3 cards",
      fiveCards: "5 cards",
      languageEnglish: "English",
      languageLatvian: "Latviešu",
      languageRussian: "Русский",
      loadingImage: "Loading image",
      imageUnavailable: "Image unavailable",
      previousCard: "Previous card",
      nextCard: "Next card",
      keywords: "Keywords",
      upright: "Upright",
      reversed: "Reversed",
      majorArcana: "Major Arcana",
      minorArcana: "Minor Arcana",
      suitWands: "Wands",
      suitCups: "Cups",
      suitSwords: "Swords",
      suitPentacles: "Pentacles",
      switchToEnglish: "Switch to English",
      switchToLatvian: "Switch to Latvian",
    },
    lv: {
      siteTitle: "Dienas taro vilkšana",
      drawCards: "Vilkt",
      availableTomorrow: "Atkal varēsi vilkt rīt",
      todaysReading: "Šis ir tavs šodienas lasījums. Atkal varēsi vilkt rīt.",
      nextDrawIn: "Nākamā vilkšana pēc",
      oneCard: "1 kārts",
      threeCards: "3 kārtis",
      fiveCards: "5 kārtis",
      languageEnglish: "English",
      languageLatvian: "Latviešu",
      languageRussian: "Русский",
      loadingImage: "Ielādē attēlu",
      imageUnavailable: "Attēls nav pieejams",
      previousCard: "Iepriekšējā kārts",
      nextCard: "Nākamā kārts",
      keywords: "Atslēgvārdi",
      upright: "Taisna",
      reversed: "Apgriezta",
      majorArcana: "Lielie arkāni",
      minorArcana: "Mazie arkāni",
      suitWands: "Nūjiņas",
      suitCups: "Kausi",
      suitSwords: "Zobeni",
      suitPentacles: "Pentakli",
      switchToEnglish: "Pārslēgt uz angļu valodu",
      switchToLatvian: "Pārslēgt uz latviešu valodu",
    },
    ru: {
      siteTitle: "Таро на день",
      drawCards: "Тянуть",
      availableTomorrow: "Снова можно будет тянуть завтра",
      todaysReading: "Это ваше чтение на сегодня. Снова можно будет тянуть завтра.",
      nextDrawIn: "Следующее вытягивание через",
      oneCard: "1 карта",
      threeCards: "3 карты",
      fiveCards: "5 карт",
      languageEnglish: "English",
      languageLatvian: "Latviešu",
      languageRussian: "Русский",
      loadingImage: "Загрузка изображения",
      imageUnavailable: "Изображение недоступно",
      previousCard: "Предыдущая карта",
      nextCard: "Следующая карта",
      keywords: "Ключевые слова",
      upright: "Прямая",
      reversed: "Перевернутая",
      majorArcana: "Старшие арканы",
      minorArcana: "Младшие арканы",
      suitWands: "Жезлы",
      suitCups: "Кубки",
      suitSwords: "Мечи",
      suitPentacles: "Пентакли",
      switchToEnglish: "Переключить на английский",
      switchToLatvian: "Переключить на латышский",
    },
  };
  const majorArcanaNames = {
    lv: {
      "The Fool": "Muļķis",
      "The Magician": "Burvis",
      "The High Priestess": "Augstā Priesteriene",
      "The Empress": "Ķeizariene",
      "The Emperor": "Ķeizars",
      "The Hierophant": "Hierofants",
      "The Lovers": "Mīlnieki",
      "The Chariot": "Rati",
      Strength: "Spēks",
      "The Hermit": "Eremīts",
      "Wheel of Fortune": "Laimes Rats",
      Justice: "Taisnīgums",
      "The Hanged Man": "Pakārtais",
      Death: "Nāve",
      Temperance: "Mērenība",
      "The Devil": "Velns",
      "The Tower": "Tornis",
      "The Star": "Zvaigzne",
      "The Moon": "Mēness",
      "The Sun": "Saule",
      Judgement: "Spriedums",
      "The World": "Pasaule",
    },
    ru: {
      "The Fool": "Шут",
      "The Magician": "Маг",
      "The High Priestess": "Верховная Жрица",
      "The Empress": "Императрица",
      "The Emperor": "Император",
      "The Hierophant": "Иерофант",
      "The Lovers": "Влюбленные",
      "The Chariot": "Колесница",
      Strength: "Сила",
      "The Hermit": "Отшельник",
      "Wheel of Fortune": "Колесо Фортуны",
      Justice: "Справедливость",
      "The Hanged Man": "Повешенный",
      Death: "Смерть",
      Temperance: "Умеренность",
      "The Devil": "Дьявол",
      "The Tower": "Башня",
      "The Star": "Звезда",
      "The Moon": "Луна",
      "The Sun": "Солнце",
      Judgement: "Суд",
      "The World": "Мир",
    },
  };
  const minorRankNames = {
    lv: {
      Ace: "Dūzis",
      Two: "Divnieks",
      Three: "Trijnieks",
      Four: "Četrinieks",
      Five: "Piecinieks",
      Six: "Sešinieks",
      Seven: "Septiņnieks",
      Eight: "Astotnieks",
      Nine: "Deviņnieks",
      Ten: "Desmitnieks",
      Page: "Pāžs",
      Knight: "Bruņinieks",
      Queen: "Karaliene",
      King: "Karalis",
    },
    ru: {
      Ace: "Туз",
      Two: "Двойка",
      Three: "Тройка",
      Four: "Четверка",
      Five: "Пятерка",
      Six: "Шестерка",
      Seven: "Семерка",
      Eight: "Восьмерка",
      Nine: "Девятка",
      Ten: "Десятка",
      Page: "Паж",
      Knight: "Рыцарь",
      Queen: "Королева",
      King: "Король",
    },
  };
  const minorSuitForms = {
    lv: {
      Wands: "Nūjiņu",
      Cups: "Kausu",
      Swords: "Zobenu",
      Pentacles: "Pentaklu",
    },
    ru: {
      Wands: "Жезлов",
      Cups: "Кубков",
      Swords: "Мечей",
      Pentacles: "Пентаклей",
    },
  };

  function tarotApp() {
    return {
      deck: [],
      spreadSize: 5,
      drawnCards: [],
      language: getSavedLanguage(),

      init() {
        this.deck = window.TarotDeck.buildDeck();
        this.applyLanguage();
      },

      drawCards() {
        const pool = [...this.deck];
        const positions = window.TarotDeck.spreadPositions(this.spreadSize, this.language);
        const cards = [];

        for (let index = 0; index < this.spreadSize; index += 1) {
          const pickedIndex = Math.floor(Math.random() * pool.length);
          const baseCard = pool.splice(pickedIndex, 1)[0];
          const reversed = Math.random() < 0.5;

          cards.push(this.createDrawnCard(baseCard, reversed, index + 1, positions[index]));
        }

        this.applyDraw(cards);
      },

      clearReading() {
        this.drawnCards = [];
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
          meaning: window.TarotDeck.getMeaning(baseCard, reversed, this.language),
          application: window.TarotDeck.getApplication(baseCard, reversed, this.language),
          keywords: window.TarotDeck.getKeywords(baseCard, reversed, this.language),
          imageUrl: window.TarotDeck.getImageUrl(baseCard),
          imageLoaded: false,
          imageError: false,
        };
      },

      applyDraw(cards) {
        this.drawnCards = cards;

        this.$nextTick(() => {
          if (this.$refs.cardsCarousel) {
            this.$refs.cardsCarousel.scrollTo({ left: 0, behavior: "smooth" });
          }
        });
      },

      t(key) {
        return translations[this.language]?.[key] ?? translations[DEFAULT_LANGUAGE][key] ?? key;
      },

      spreadOptionLabel(size) {
        return this.t(
          {
            1: "oneCard",
            3: "threeCards",
            5: "fiveCards",
          }[size]
        );
      },

      setLanguage(language) {
        const normalizedLanguage = normalizeLanguage(language);

        if (normalizedLanguage === this.language) {
          return;
        }

        this.language = normalizedLanguage;
        saveLanguage(this.language);
        this.applyLanguage();
      },

      applyLanguage() {
        document.documentElement.lang = this.language;
        document.title = this.t("siteTitle");

        if (this.drawnCards.length) {
          const positions = window.TarotDeck.spreadPositions(this.drawnCards.length, this.language);
          this.drawnCards = this.drawnCards.map((card, index) => ({
            ...card,
            slotLabel: positions[index],
            meaning: window.TarotDeck.getMeaning(card, card.reversed, this.language),
            application: window.TarotDeck.getApplication(card, card.reversed, this.language),
            keywords: window.TarotDeck.getKeywords(card, card.reversed, this.language),
          }));
        }
      },

      localizedArcana(card) {
        return this.t(card.arcana === "Major Arcana" ? "majorArcana" : "minorArcana");
      },

      localizedCardName(card) {
        if (this.language === "en") {
          return card.name;
        }

        if (card.arcana === "Major Arcana") {
          return majorArcanaNames[this.language]?.[card.name] ?? card.name;
        }

        const localizedRank = minorRankNames[this.language]?.[card.rank] ?? card.rank;
        const localizedSuit = minorSuitForms[this.language]?.[card.suit] ?? card.suit;

        if (this.language === "lv") {
          return `${localizedSuit} ${localizedRank}`;
        }

        if (this.language === "ru") {
          return `${localizedRank} ${localizedSuit}`;
        }

        return card.name;
      },

      localizedSuit(card) {
        return card.suit ? this.t(`suit${card.suit}`) : "";
      },

      localizedOrientation(card) {
        return this.t(card.reversed ? "reversed" : "upright");
      },
    };
  }

  function normalizeLanguage(language) {
    return Object.hasOwn(translations, language) ? language : DEFAULT_LANGUAGE;
  }

  function normalizeSpreadSize(size) {
    return [1, 3, 5].includes(Number(size)) ? Number(size) : 5;
  }

  function saveLanguage(language) {
    document.cookie = [
      `${LANGUAGE_COOKIE}=${normalizeLanguage(language)}`,
      `expires=${new Date(Date.now() + 31536000000).toUTCString()}`,
      "path=/",
      "SameSite=Lax",
    ].join("; ");
  }

  function getSavedLanguage() {
    const prefix = `${LANGUAGE_COOKIE}=`;
    const cookie = document.cookie
      .split("; ")
      .find((entry) => entry.startsWith(prefix));

    if (!cookie) {
      return DEFAULT_LANGUAGE;
    }

    return normalizeLanguage(cookie.slice(prefix.length));
  }

  document.addEventListener("alpine:init", () => {
    window.Alpine.data("tarotApp", tarotApp);
  });

  window.tarotApp = tarotApp;
})();
