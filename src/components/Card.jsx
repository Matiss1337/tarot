import { useEffect, useState } from "react";

export function Card({
  arcanaLabel,
  application,
  imageUrl,
  keywords,
  multiple,
  name,
  orientationLabel,
  slotLabel,
  suitLabel,
  meaning,
  reversed,
  t,
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
  }, [imageUrl]);

  return (
    <article
      data-card-slide
      className={[
        "w-full rounded-md border border-border bg-panel p-4 lg:w-[300px] lg:min-w-[300px]",
        multiple ? "min-w-full snap-center" : "mx-auto",
      ].join(" ")}
    >
      <div className="space-y-4">
        <div className="border-b border-border pb-3">
          <div className="flex min-h-10 items-center">
            <h3 className="max-h-10 overflow-hidden text-base font-semibold leading-5">{name}</h3>
          </div>

          <div className="mt-2 flex min-h-8 items-center justify-between gap-4">
            <span className="inline-flex h-9 shrink-0 items-center rounded-md border border-border px-3 text-sm font-medium text-text">
              {slotLabel}
            </span>
          </div>
        </div>

        <div className="rounded-md border border-border bg-page p-3">
          <div
            className="mx-auto flex max-w-[150px] items-center justify-center overflow-hidden rounded-sm border border-border bg-paper"
            style={{ aspectRatio: "1112 / 1920" }}
          >
            <div className="relative h-full w-full">
              {!imageLoaded && !imageError ? (
                <div className="absolute inset-0 flex items-center justify-center bg-paper px-4 text-center text-sm text-ink">
                  <span>{t("loadingImage")}</span>
                </div>
              ) : null}

              {!imageError ? (
                <img
                  src={imageUrl}
                  alt={name}
                  loading="lazy"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => {
                    setImageError(true);
                    setImageLoaded(false);
                  }}
                  className={[
                    "h-full w-full object-contain transition duration-150",
                    reversed ? "rotate-180" : "",
                  ].join(" ")}
                />
              ) : null}

              {imageError ? (
                <div className="absolute inset-0 flex items-center justify-center bg-paper px-4 text-center text-sm text-ink">
                  <span>{t("imageUnavailable")}</span>
                </div>
              ) : null}
            </div>
          </div>

          <div className="mt-3 space-y-4 text-left">
            <div className="border-b border-border pb-3">
              <p className="text-sm text-muted">
                <span>{arcanaLabel}</span>
                {suitLabel ? <span> • {suitLabel}</span> : null}
                <span> • </span>
                <span>{orientationLabel}</span>
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-sm leading-6 text-text">{meaning}</p>
              <p className="text-sm leading-6 text-muted">{application}</p>
            </div>

            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.14em] text-muted">{t("keywords")}</p>

              <div className="flex flex-wrap gap-2">
                {keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-md border border-border px-2 py-1 text-xs text-muted"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
