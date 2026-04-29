(function () {
  var script = document.currentScript;
  var dataset = script && script.dataset ? script.dataset : {};
  var defaultLang = dataset.defaultLanguage || "en";
  var languageQueryParam = dataset.languageQueryParam || "lng";
  var supportedLanguages = dataset.supportedLanguages
    ? dataset.supportedLanguages
        .split(",")
        .map(function (lang) {
          return lang.trim();
        })
        .filter(Boolean)
    : ["en", "de", "fr"];

  if (!supportedLanguages.includes(defaultLang)) {
    supportedLanguages.push(defaultLang);
  }

  var url = new URL(window.location.href);
  var requestedLang = url.searchParams.get(languageQueryParam);

  if (!requestedLang || !supportedLanguages.includes(requestedLang)) {
    return;
  }

  var pathSegments = url.pathname.split("/").filter(Boolean);
  var hasLanguagePrefix =
    pathSegments.length > 0 && supportedLanguages.includes(pathSegments[0]);
  var currentLang = hasLanguagePrefix ? pathSegments[0] : defaultLang;

  if (currentLang === requestedLang) {
    url.searchParams.delete(languageQueryParam);
    var cleanUrl = "" + url.pathname + url.search + url.hash;
    var currentLocation =
      "" +
      window.location.pathname +
      window.location.search +
      window.location.hash;

    if (cleanUrl !== currentLocation) {
      window.history.replaceState({}, "", cleanUrl);
    }
    return;
  }

  if (hasLanguagePrefix) {
    pathSegments.shift();
  }
  if (requestedLang !== defaultLang) {
    pathSegments.unshift(requestedLang);
  }

  url.pathname = pathSegments.length > 0 ? "/" + pathSegments.join("/") : "/";
  url.searchParams.delete(languageQueryParam);
  window.location.replace("" + url.pathname + url.search + url.hash);
})();