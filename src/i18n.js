export const DEFAULT_LANGUAGE = "lv";
export const AVAILABLE_LANGUAGES = ["lv", "en", "ru"];
export const AVAILABLE_SPREAD_SIZES = [1, 3, 5];

export const translations = {
  en: {
    siteTitle: "Daily tarot draw",
    drawCards: "Draw",
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
  },
  lv: {
    siteTitle: "Dienas taro vilkšana",
    drawCards: "Vilkt",
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
  },
  ru: {
    siteTitle: "Таро на день",
    drawCards: "Тянуть",
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

export function normalizeLanguage(language) {
  return AVAILABLE_LANGUAGES.includes(language) ? language : DEFAULT_LANGUAGE;
}

export function normalizeSpreadSize(size) {
  const value = Number(size);
  return AVAILABLE_SPREAD_SIZES.includes(value) ? value : 5;
}

export function getTranslation(language, key) {
  return translations[language]?.[key] ?? translations[DEFAULT_LANGUAGE][key] ?? key;
}

export function getSpreadOptionLabel(size, language) {
  return getTranslation(
    language,
    {
      1: "oneCard",
      3: "threeCards",
      5: "fiveCards",
    }[size]
  );
}

export function localizeArcana(card, language) {
  return getTranslation(
    language,
    card.arcana === "Major Arcana" ? "majorArcana" : "minorArcana"
  );
}

export function localizeCardName(card, language) {
  if (language === "en") {
    return card.name;
  }

  if (card.arcana === "Major Arcana") {
    return majorArcanaNames[language]?.[card.name] ?? card.name;
  }

  const localizedRank = minorRankNames[language]?.[card.rank] ?? card.rank;
  const localizedSuit = minorSuitForms[language]?.[card.suit] ?? card.suit;

  if (language === "lv") {
    return `${localizedSuit} ${localizedRank}`;
  }

  if (language === "ru") {
    return `${localizedRank} ${localizedSuit}`;
  }

  return card.name;
}

export function localizeSuit(card, language) {
  return card.suit ? getTranslation(language, `suit${card.suit}`) : "";
}

export function localizeOrientation(card, language) {
  return getTranslation(language, card.reversed ? "reversed" : "upright");
}
