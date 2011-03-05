dojo.provide("translette.translation");

/**
 * Determines the language of the provided source text and sends it to the
 *   provided callback function.
 * 
 * @function detectLanguage
 * @param sourceText
 * @param callback
 */
translette.translation.detectLanguage = function(sourceText, callback) {;
console.debug("Trying to detect: \"" + sourceText + "\"");
  google.language.detect(sourceText, function(result) {
    if (result.error) {
      throw new Error("Unable to detect language");
    }
console.debug(result);
    if (translette.translation.languages[result.language]) {
      callback(result.language);
    } else {
      callback("unknown");
    }
  });
};

translette.translation.languages = {
    'af' : 'AFRIKAANS',
    'sq' : 'ALBANIAN',
    'am' : 'AMHARIC',
    'ar' : 'ARABIC',
    'hy' : 'ARMENIAN',
    'az' : 'AZERBAIJANI',
    'eu' : 'BASQUE',
    'be' : 'BELARUSIAN',
    'bn' : 'BENGALI',
    'bh' : 'BIHARI',
    'bg' : 'BULGARIAN',
    'my' : 'BURMESE',
    'ca' : 'CATALAN',
    'chr' : 'CHEROKEE',
    'zh' : 'CHINESE',
    'zh-CN' : 'CHINESE_SIMPLIFIED',
    'zh-TW' : 'CHINESE_TRADITIONAL',
    'hr' : 'CROATIAN',
    'cs' : 'CZECH',
    'da' : 'DANISH',
    'dv' : 'DHIVEHI',
    'nl' : 'DUTCH',
    'en' : 'ENGLISH',
    'eo' : 'ESPERANTO',
    'et' : 'ESTONIAN',
    'tl' : 'FILIPINO',
    'fi' : 'FINNISH',
    'fr' : 'FRENCH',
    'gl' : 'GALICIAN',
    'ka' : 'GEORGIAN',
    'de' : 'GERMAN',
    'el' : 'GREEK',
    'gn' : 'GUARANI',
    'gu' : 'GUJARATI',
    'iw' : 'HEBREW',
    'hi' : 'HINDI',
    'hu' : 'HUNGARIAN',
    'is' : 'ICELANDIC',
    'id' : 'INDONESIAN',
    'iu' : 'INUKTITUT',
    'ga' : 'IRISH',
    'it' : 'ITALIAN',
    'ja' : 'JAPANESE',
    'kn' : 'KANNADA',
    'kk' : 'KAZAKH',
    'km' : 'KHMER',
    'ko' : 'KOREAN',
    'ku' : 'KURDISH',
    'ky' : 'KYRGYZ',
    'lo' : 'LAOTHIAN',
    'lv' : 'LATVIAN',
    'lt' : 'LITHUANIAN',
    'mk' : 'MACEDONIAN',
    'ms' : 'MALAY',
    'ml' : 'MALAYALAM',
    'mt' : 'MALTESE',
    'mr' : 'MARATHI',
    'mn' : 'MONGOLIAN',
    'ne' : 'NEPALI',
    'no' : 'NORWEGIAN',
    'or' : 'ORIYA',
    'ps' : 'PASHTO',
    'fa' : 'PERSIAN',
    'pl' : 'POLISH',
    'pt-PT' : 'PORTUGUESE',
    'pa' : 'PUNJABI',
    'ro' : 'ROMANIAN',
    'ru' : 'RUSSIAN',
    'sa' : 'SANSKRIT',
    'sr' : 'SERBIAN',
    'sd' : 'SINDHI',
    'si' : 'SINHALESE',
    'sk' : 'SLOVAK',
    'sl' : 'SLOVENIAN',
    'es' : 'SPANISH',
    'sw' : 'SWAHILI',
    'sv' : 'SWEDISH',
    'tg' : 'TAJIK',
    'ta' : 'TAMIL',
    'te' : 'TELUGU',
    'th' : 'THAI',
    'bo' : 'TIBETAN',
    'tr' : 'TURKISH',
    'uk' : 'UKRAINIAN',
    'ur' : 'URDU',
    'uz' : 'UZBEK',
    'ug' : 'UIGHUR',
    'vi' : 'VIETNAMESE',
    'cy' : 'WELSH',
    'yi' : 'YIDDISH'
};