const localeObj = {
  "1": {
    locale: "en-US",
    language: "English",
    themeLabel: "Choose Theme",
    languageLabel: "Select Language",
    content: "Hello world!!",
    light: "Light",
    dark: "Dark"
  },
  "2": {
    locale: "pt-BR",
    language: "Português",
    themeLabel: "Escolha o tema",
    languageLabel: "Selecione a linguagem",
    content: "Olá mundo!!",
    light: "Claro",
    dark: "Escuro"
  },
  "3": {
    locale: "es-ES",
    language: "Español",
    themeLabel: "Escoge un tema",
    languageLabel: "Seleccione el idioma",
    content: "Hola Mundo!!",
    light: "Ligero",
    dark: "Oscuro"
  }
};

export const getLocaleCode = () => {
  return new Promise((resolve, reject) => {
    const locales = Object.keys(localeObj).map(loc => {
      return localeObj[loc].locale;
    });
    if (locales.length > 0) {
      resolve(locales);
    } else {
      reject("no locale found");
    }
  });
};

function filterDefaultLocale(local) {
  return local.locale === "en-US";
}

export const getlocaleByCode = code => {
  return new Promise((resolve, reject) => {
    let filterData = null;
    const locale = Object.keys(localeObj).map(loc => {
      return localeObj[loc];
    });
    if (!code) {
      filterData = locale.filter(filterDefaultLocale)[0];
    } else {
      filterData = locale.filter(local => {
        return local.locale === code;
      })[0];
    }
    if (filterData) {
      resolve(filterData);
    } else {
      reject("No data found for code: ", code);
    }
  });
};

export const getLanguageSelectionData = () => {
  return new Promise((resolve, reject) => {
    const locales = Object.keys(localeObj).reduce((acc, cur) => {
      acc.push({
        locale: localeObj[cur].locale,
        language: localeObj[cur].language
      });
      return acc;
    }, []);
    if (locales) {
      resolve(locales);
    } else {
      reject("No data found for code");
    }
  });
};
