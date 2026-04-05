import { Card } from "./Card";

export function CardContainer({ cards, carouselId, onNextCard, onPreviousCard, t }) {
  if (!cards.length) {
    return null;
  }

  const multiple = cards.length > 1;

  return (
    <section className="space-y-4">
      <div className="relative rounded-md border border-border bg-surface shadow-card lg:mx-auto lg:w-fit">
        {multiple ? (
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-10 flex items-center justify-between px-2 lg:hidden">
            <button
              type="button"
              onClick={onPreviousCard}
              aria-label={t("previousCard")}
              className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-lg font-bold leading-none text-text transition hover:bg-panel"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={onNextCard}
              aria-label={t("nextCard")}
              className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-lg font-bold leading-none text-text transition hover:bg-panel"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        ) : null}

        <div>
          <div
            id={carouselId}
            className={[
              "gap-4 pb-2 lg:flex lg:flex-wrap lg:justify-center lg:overflow-visible",
              "lg:snap-none lg:pb-0",
              multiple ? "flex snap-x snap-mandatory overflow-hidden" : "space-y-4",
            ].join(" ")}
          >
            {cards.map((card) => (
              <Card
                key={`${card.slot}-${card.name}`}
                {...card}
                multiple={multiple}
                t={t}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
