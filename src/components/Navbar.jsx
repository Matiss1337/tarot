const languageButtons = [
  { value: "lv", label: "🇱🇻", ariaKey: "languageLatvian" },
  { value: "en", label: "🇬🇧", ariaKey: "languageEnglish" },
  { value: "ru", label: "🇷🇺", ariaKey: "languageRussian" },
];

export function Navbar({
  language,
  onDraw,
  onLanguageChange,
  onSpreadSizeChange,
  spreadOptionLabel,
  spreadSize,
  t,
}) {
  return (
    <section className="mb-6">
      <div className="mx-auto w-full max-w-md rounded-md border border-border bg-surface p-5 shadow-card">
        <div className="space-y-3">
          <h1 className="text-xl font-semibold text-text">{t("siteTitle")}</h1>

          <div className="flex flex-col gap-3 sm:flex-row">
            <select
              value={spreadSize}
              onChange={(event) => onSpreadSizeChange(event.target.value)}
              className="w-full rounded-md border border-border bg-page px-3 py-2 text-sm text-text outline-none transition focus:border-accent sm:w-32"
            >
              <option value="1">{spreadOptionLabel(1)}</option>
              <option value="3">{spreadOptionLabel(3)}</option>
              <option value="5">{spreadOptionLabel(5)}</option>
            </select>

            <button
              type="button"
              onClick={onDraw}
              className="w-full rounded-md bg-accent px-3 py-2 text-sm font-medium text-page transition hover:opacity-90"
            >
              {t("drawCards")}
            </button>

            <div className="flex w-full rounded-md border border-border bg-page p-1 sm:w-40">
              {languageButtons.map((button) => {
                const isActive = language === button.value;

                return (
                  <button
                    key={button.value}
                    type="button"
                    aria-pressed={isActive}
                    aria-label={t(button.ariaKey)}
                    onClick={() => onLanguageChange(button.value)}
                    className={[
                      "flex-1 rounded-sm px-3 py-2 text-lg transition",
                      isActive ? "bg-surface" : "hover:bg-surface/60",
                    ].join(" ")}
                  >
                    {button.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
