export const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

export const debounce = function (cb, ms = 100) {
  let isCooldown = false;
  return function () {
    if (isCooldown) return;
    // eslint-disable-next-line prefer-rest-params
    cb.apply(this, arguments);
    isCooldown = true;
    setTimeout(() => {
      isCooldown = false;
    }, ms);
  };
};

// eslint-disable-next-line max-len
export const isMobileOrTablet = () => (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1);

const KEYWORDS = [
  'Фотограф Санкт-Петербург',
  'Мельникова Татьяна',
  'Фотограф СПб',
  'Фотосессия СПб',
  'Портрет',
  'Love story',
  'Съёмка в Санкт-Петербурге',
];

export const createKeywordGenerator = function* () {
  let previousKeyword = '';
  while (true) {
    let keyword;
    while (!keyword || keyword === previousKeyword) {
      keyword = KEYWORDS[Math.floor(Math.random() * KEYWORDS.length)];
    }
    previousKeyword = keyword;
    yield keyword;
  }
};
