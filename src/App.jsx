import { useEffect, useState } from "react";
import {
  buildDeck,
  getApplication,
  getImageUrl,
  getKeywords,
  getMeaning,
  spreadPositions,
} from "../deck";
import { CardContainer } from "./components/CardContainer";
import { Navbar } from "./components/Navbar";
import {
  DEFAULT_LANGUAGE,
  getSpreadOptionLabel,
  getTranslation,
  localizeArcana,
  localizeCardName,
  localizeOrientation,
  localizeSuit,
  normalizeLanguage,
  normalizeSpreadSize,
} from "./i18n";

const LANGUAGE_STORAGE_KEY = "tarot.language";
const SPREAD_SIZE_STORAGE_KEY = "tarot.spreadSize";
const CARDS_CAROUSEL_ID = "cards-carousel";
const deck = buildDeck();

function readStoredLanguage() {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  return normalizeLanguage(window.localStorage.getItem(LANGUAGE_STORAGE_KEY));
}

function readStoredSpreadSize() {
  if (typeof window === "undefined") {
    return 5;
  }

  return normalizeSpreadSize(window.localStorage.getItem(SPREAD_SIZE_STORAGE_KEY));
}

export default function App() {
  const [language, setLanguage] = useState(readStoredLanguage);
  const [spreadSize, setSpreadSize] = useState(readStoredSpreadSize);
  const [drawnCards, setDrawnCards] = useState([]);

  const t = (key) => getTranslation(language, key);
  const positions = spreadPositions(drawnCards.length, language) ?? [];
  const displayCards = drawnCards.map((card, index) => ({
    ...card,
    arcanaLabel: localizeArcana(card, language),
    application: getApplication(card, card.reversed, language),
    imageUrl: getImageUrl(card),
    keywords: getKeywords(card, card.reversed, language),
    meaning: getMeaning(card, card.reversed, language),
    name: localizeCardName(card, language),
    orientationLabel: localizeOrientation(card, language),
    slotLabel: positions[index] ?? "",
    suitLabel: localizeSuit(card, language),
  }));

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t("siteTitle");
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  useEffect(() => {
    window.localStorage.setItem(SPREAD_SIZE_STORAGE_KEY, String(spreadSize));
  }, [spreadSize]);

  useEffect(() => {
    const container = document.getElementById(CARDS_CAROUSEL_ID);

    if (!container) {
      return;
    }

    container.scrollTo({ left: 0, behavior: "smooth" });
  }, [drawnCards]);

  function drawCards() {
    const pool = [...deck];
    const nextCards = [];

    for (let index = 0; index < spreadSize; index += 1) {
      const pickedIndex = Math.floor(Math.random() * pool.length);
      const baseCard = pool.splice(pickedIndex, 1)[0];

      nextCards.push({
        ...baseCard,
        reversed: Math.random() < 0.5,
        slot: index + 1,
      });
    }

    setDrawnCards(nextCards);
  }

  function scrollCardBy(direction) {
    const container = document.getElementById(CARDS_CAROUSEL_ID);

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
  }

  function previousCard() {
    scrollCardBy(-1);
  }

  function nextCard() {
    scrollCardBy(1);
  }

  return (
    <div className="min-h-screen">
      <main className="mx-auto w-full px-4 py-6 sm:px-6 lg:px-8">
        <Navbar
          language={language}
          onDraw={drawCards}
          onLanguageChange={(value) => setLanguage(normalizeLanguage(value))}
          onSpreadSizeChange={(value) => setSpreadSize(normalizeSpreadSize(value))}
          spreadOptionLabel={(size) => getSpreadOptionLabel(size, language)}
          spreadSize={spreadSize}
          t={t}
        />

        <CardContainer
          cards={displayCards}
          carouselId={CARDS_CAROUSEL_ID}
          onNextCard={nextCard}
          onPreviousCard={previousCard}
          t={t}
        />
      </main>
    </div>
  );
}
