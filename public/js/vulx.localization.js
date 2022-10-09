const loadPath = `/locales/{{lng}}/{{ns}}.json`;

$(function () {
	i18next
	  .use(i18nextBrowserLanguageDetector)
	  .use(i18nextHttpBackend)
	  .init({
		preload: ['en', 'de'],
		debug: false,
		fallbackLng: ['en', 'de'],
		ns: ["en-AU"],
		backend: {
			loadPath: loadPath
		}
	  }, (err, t) => {
		if (err) return console.error(err);
		jqueryI18next.init(i18next, $, { useOptionsAttr: true });
		$('body').localize();
	  });
  });