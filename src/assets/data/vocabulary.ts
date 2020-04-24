import { Vocabulary } from '../../app/_models/wording';
import {
  FRENCH,
  ENGLISH,
  SPANISH,
  ARABIC,
  PORTUGUESE,
  RUSSIAN,
  MANDARIN
} from './sentences';

export const VOCABULARY_DEFAULT: Vocabulary = {
  isoCode: `deault`,
  sentences: FRENCH
}

export const VOCABULARY: Vocabulary[] = [
  {
    isoCode: `ar-SA`,
    countryNameNative: `العربية السعودية`,
    countryNameFr: `Arabie Saoudite`,
    languageNameNative: `عربي`,
    languageNameFr: `Arabe`,
    flag: `SA`,
    sentences: ARABIC
  },
  {
    isoCode: `en-AU`,
    countryNameNative: `Australia`,
    countryNameFr: `Australie`,
    languageNameNative: `English`,
    languageNameFr: `Anglais`,
    flag: `AU`,
    sentences: ENGLISH
  },
  {
    isoCode: `ar-BH`,
    countryNameNative: `البحرين`,
    countryNameFr: `Bahreïn`,
    languageNameNative: `عربي`,
    languageNameFr: `Arabe`,
    flag: `BH`,
    sentences: ARABIC
  },
  {
    isoCode: `pt-BR`,
    countryNameNative: `Brasil`,
    countryNameFr: `Brésil`,
    languageNameNative: `Portugues`,
    languageNameFr: `Portugais`,
    flag: `BR`,
    sentences: PORTUGUESE
  },
  {
    isoCode: `en-CA`,
    countryNameNative: `Canada`,
    countryNameFr: `Canada`,
    languageNameNative: `English`,
    languageNameFr: `Anglais`,
    flag: `CA`,
    sentences: ENGLISH
  },
  {
    isoCode: `zh-ZH`,
    countryNameNative: `中国`,
    countryNameFr: `Chine`,
    languageNameNative: `普通话`,
    languageNameFr: `Mandarin`,
    flag: `CN`,
    sentences: MANDARIN
  },
  {
    isoCode: `ar-EG`,
    countryNameNative: `مصر بلد`,
    countryNameFr: `Egypte`,
    languageNameNative: `عربي`,
    languageNameFr: `Arabe`,
    flag: `EG`,
    sentences: ARABIC
  },
  {
    isoCode: `ar-AE`,
    countryNameNative: `الإمارات العربية المتحدة`,
    countryNameFr: `Emirats Arabes Unis`,
    languageNameNative: `عربي`,
    languageNameFr: `Arabe`,
    flag: `AE`,
    sentences: ARABIC
  },
  {
    isoCode: `es-ES`,
    countryNameNative: `España`,
    countryNameFr: `Espagne`,
    languageNameNative: `Español`,
    languageNameFr: `Espagnol`,
    flag: `ES`,
    sentences: SPANISH
  },
  {
    isoCode: `fr-FR`,
    countryNameNative: `France`,
    countryNameFr: `France`,
    languageNameNative: `Français`,
    languageNameFr: `Français`,
    flag: `FR`,
    sentences: FRENCH
  },
  {
    isoCode: `en-GH`,
    countryNameNative: `Ghana`,
    countryNameFr: `Ghana`,
    languageNameNative: `English`,
    languageNameFr: `Anglais`,
    flag: `GH`,
    sentences: ENGLISH
  },
  {
    isoCode: `zh-HK`,
    countryNameNative: `香港`,
    countryNameFr: `Hong-Kong`,
    languageNameNative: `普通话`,
    languageNameFr: `Mandarin`,
    flag: `HK`,
    sentences: MANDARIN
  },
  {
    isoCode: `en-IN`,
    countryNameNative: `India`,
    countryNameFr: `Inde`,
    languageNameNative: `English`,
    languageNameFr: `Anglais`,
    flag: `IN`,
    sentences: ENGLISH
  },
  {
    isoCode: `ar-IQ`,
    countryNameNative: `العراق`,
    countryNameFr: `Irak`,
    languageNameNative: `عربي`,
    languageNameFr: `Arabe`,
    flag: `IQ`,
    sentences: ARABIC
  },
  {
    isoCode: `en-IE`,
    countryNameNative: `Ireland`,
    countryNameFr: `Irlande`,
    languageNameNative: `English`,
    languageNameFr: `Anglais`,
    flag: `IE`,
    sentences: ENGLISH
  },
  {
    isoCode: `ar-JO`,
    countryNameNative: `الأردن`,
    countryNameFr: `Jordanie`,
    languageNameNative: `عربي`,
    languageNameFr: `Arabe`,
    flag: `JO`,
    sentences: ARABIC
  },
  {
    isoCode: `en-KE`,
    countryNameNative: `Kenya`,
    countryNameFr: `Kenya`,
    languageNameNative: `English`,
    languageNameFr: `Anglais`,
    flag: `KE`,
    sentences: ENGLISH
  },
  {
    isoCode: `ar-KW`,
    countryNameNative: `الكويت`,
    countryNameFr: `Koweït`,
    languageNameNative: `عربي`,
    languageNameFr: `Arabe`,
    flag: `KW`,
    sentences: ARABIC
  },
  {
    isoCode: `ar-LB`,
    countryNameNative: `لبنان`,
    countryNameFr: `Liban`,
    languageNameNative: `عربي`,
    languageNameFr: `Arabe`,
    flag: `LB`,
    sentences: ARABIC
  },
  {
    isoCode: `ar-MA`,
    countryNameNative: `المغرب`,
    countryNameFr: `Maroc`,
    languageNameNative: `عربي`,
    languageNameFr: `Arabe`,
    flag: `MA`,
    sentences: ARABIC
  },
  {
    isoCode: `en-NG`,
    countryNameNative: `Nigeria`,
    countryNameFr: `Nigeria`,
    languageNameNative: `English`,
    languageNameFr: `Anglais`,
    flag: `NG`,
    sentences: ENGLISH
  },
  {
    isoCode: `en-NZ`,
    countryNameNative: `New Zealand`,
    countryNameFr: `Nouvelle-Zélande`,
    languageNameNative: `English`,
    languageNameFr: `Anglais`,
    flag: `NZ`,
    sentences: ENGLISH
  },
  {
    isoCode: `ar-OM`,
    countryNameNative: `عمان`,
    countryNameFr: `Oman`,
    languageNameNative: `عربي`,
    languageNameFr: `Arabe`,
    flag: `OM`,
    sentences: ARABIC
  },
  {
    isoCode: `ar-PS`,
    countryNameNative: `فلسطين`,
    countryNameFr: `Palestine`,
    languageNameNative: `عربي`,
    languageNameFr: `Arabe`,
    flag: `PS`,
    sentences: ARABIC
  },
  {
    isoCode: `en-PH`,
    countryNameNative: `Philippines`,
    countryNameFr: `Philippines`,
    languageNameNative: `English`,
    languageNameFr: `Anglais`,
    flag: `PH`,
    sentences: ENGLISH
  },
  {
    isoCode: `pt-PT`,
    countryNameNative: `Portugal`,
    countryNameFr: `Portugal`,
    languageNameNative: `Portugues`,
    languageNameFr: `Portugais`,
    flag: `PT`,
    sentences: PORTUGUESE
  },
  {
    isoCode: `ar-QA`,
    countryNameNative: `قطر`,
    countryNameFr: `Qatar`,
    languageNameNative: `عربي`,
    languageNameFr: `Arabe`,
    flag: `QA`,
    sentences: ARABIC
  },
  {
    isoCode: `ru-RU`,
    countryNameNative: `Россия`,
    countryNameFr: `Russie`,
    languageNameNative: `русский`,
    languageNameFr: `Russe`,
    flag: `RU`,
    sentences: RUSSIAN
  },
  {
    isoCode: `en-SG`,
    countryNameNative: `Singapore`,
    countryNameFr: `Singapour`,
    languageNameNative: `English`,
    languageNameFr: `Anglais`,
    flag: `SG`,
    sentences: ENGLISH
  },
  {
    isoCode: `en-ZA`,
    countryNameNative: `South Africa`,
    countryNameFr: `Afrique du Sud`,
    languageNameNative: `English`,
    languageNameFr: `Anglais`,
    flag: `ZA`,
    sentences: ENGLISH
  },
  {
    isoCode: `ar-TN`,
    countryNameNative: `تونس`,
    countryNameFr: `Tunisie`,
    languageNameNative: `عربي`,
    languageNameFr: `Arabe`,
    flag: `TN`,
    sentences: ARABIC
  },
  {
    isoCode: `en-GB`,
    countryNameNative: `United Kingdom`,
    countryNameFr: `Royaume-Uni`,
    languageNameNative: `English`,
    languageNameFr: `Anglais`,
    flag: `GB`,
    sentences: ENGLISH
  },
  {
    isoCode: `en-US`,
    countryNameNative: `United-States of America`,
    countryNameFr: `États-Unis d'Amérique`,
    languageNameNative: `English`,
    languageNameFr: `Anglais`,
    flag: `US`,
    sentences: ENGLISH
  },
]
