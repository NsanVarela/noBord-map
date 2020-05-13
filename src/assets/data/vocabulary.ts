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
  isoCode: `default`,
  sentences: FRENCH
}

export const VOCABULARY: Vocabulary[] = [
  {
    isoCode: `ar`,
    countryNameNative: `العربية السعودية`,
    countryNameFr: `Arabie Saoudite`,
    languageNameNative: `عربي`,
    languageNameFr: `Arabe`,
    flag: `SA`,
    sentences: ARABIC
  },
  {
    isoCode: `en`,
    countryNameNative: `Australia`,
    countryNameFr: `Australie`,
    languageNameNative: `English`,
    languageNameFr: `Anglais`,
    flag: `AU`,
    sentences: ENGLISH
  },
  {
    isoCode: `ar`,
    countryNameNative: `البحرين`,
    countryNameFr: `Bahreïn`,
    languageNameNative: `عربي`,
    languageNameFr: `Arabe`,
    flag: `BH`,
    sentences: ARABIC
  },
  {
    isoCode: `pt`,
    countryNameNative: `Brasil`,
    countryNameFr: `Brésil`,
    languageNameNative: `Portugues`,
    languageNameFr: `Portugais`,
    flag: `BR`,
    sentences: PORTUGUESE
  },
  {
    isoCode: `en`,
    countryNameNative: `Canada`,
    countryNameFr: `Canada`,
    languageNameNative: `English`,
    languageNameFr: `Anglais`,
    flag: `CA`,
    sentences: ENGLISH
  },
  {
    isoCode: `zh`,
    countryNameNative: `中国`,
    countryNameFr: `Chine`,
    languageNameNative: `普通话`,
    languageNameFr: `Mandarin`,
    flag: `CN`,
    sentences: MANDARIN
  },
  {
    isoCode: `ar`,
    countryNameNative: `مصر بلد`,
    countryNameFr: `Egypte`,
    languageNameNative: `عربي`,
    languageNameFr: `Arabe`,
    flag: `EG`,
    sentences: ARABIC
  },
  {
    isoCode: `ar`,
    countryNameNative: `الإمارات العربية المتحدة`,
    countryNameFr: `Emirats Arabes Unis`,
    languageNameNative: `عربي`,
    languageNameFr: `Arabe`,
    flag: `AE`,
    sentences: ARABIC
  },
  {
    isoCode: `es`,
    countryNameNative: `España`,
    countryNameFr: `Espagne`,
    languageNameNative: `Español`,
    languageNameFr: `Espagnol`,
    flag: `ES`,
    sentences: SPANISH
  },
  {
    isoCode: `fr`,
    countryNameNative: `France`,
    countryNameFr: `France`,
    languageNameNative: `Français`,
    languageNameFr: `Français`,
    flag: `FR`,
    sentences: FRENCH
  },
  {
    isoCode: `en`,
    countryNameNative: `Ghana`,
    countryNameFr: `Ghana`,
    languageNameNative: `English`,
    languageNameFr: `Anglais`,
    flag: `GH`,
    sentences: ENGLISH
  },
  {
    isoCode: `zh`,
    countryNameNative: `香港`,
    countryNameFr: `Hong-Kong`,
    languageNameNative: `普通话`,
    languageNameFr: `Mandarin`,
    flag: `HK`,
    sentences: MANDARIN
  },
  {
    isoCode: `en`,
    countryNameNative: `India`,
    countryNameFr: `Inde`,
    languageNameNative: `English`,
    languageNameFr: `Anglais`,
    flag: `IN`,
    sentences: ENGLISH
  },
  {
    isoCode: `ar`,
    countryNameNative: `العراق`,
    countryNameFr: `Irak`,
    languageNameNative: `عربي`,
    languageNameFr: `Arabe`,
    flag: `IQ`,
    sentences: ARABIC
  },
  {
    isoCode: `en`,
    countryNameNative: `Ireland`,
    countryNameFr: `Irlande`,
    languageNameNative: `English`,
    languageNameFr: `Anglais`,
    flag: `IE`,
    sentences: ENGLISH
  },
  {
    isoCode: `ar`,
    countryNameNative: `الأردن`,
    countryNameFr: `Jordanie`,
    languageNameNative: `عربي`,
    languageNameFr: `Arabe`,
    flag: `JO`,
    sentences: ARABIC
  },
  {
    isoCode: `en`,
    countryNameNative: `Kenya`,
    countryNameFr: `Kenya`,
    languageNameNative: `English`,
    languageNameFr: `Anglais`,
    flag: `KE`,
    sentences: ENGLISH
  },
  {
    isoCode: `ar`,
    countryNameNative: `الكويت`,
    countryNameFr: `Koweït`,
    languageNameNative: `عربي`,
    languageNameFr: `Arabe`,
    flag: `KW`,
    sentences: ARABIC
  },
  {
    isoCode: `ar`,
    countryNameNative: `لبنان`,
    countryNameFr: `Liban`,
    languageNameNative: `عربي`,
    languageNameFr: `Arabe`,
    flag: `LB`,
    sentences: ARABIC
  },
  {
    isoCode: `ar`,
    countryNameNative: `المغرب`,
    countryNameFr: `Maroc`,
    languageNameNative: `عربي`,
    languageNameFr: `Arabe`,
    flag: `MA`,
    sentences: ARABIC
  },
  {
    isoCode: `en`,
    countryNameNative: `Nigeria`,
    countryNameFr: `Nigeria`,
    languageNameNative: `English`,
    languageNameFr: `Anglais`,
    flag: `NG`,
    sentences: ENGLISH
  },
  {
    isoCode: `en`,
    countryNameNative: `New Zealand`,
    countryNameFr: `Nouvelle-Zélande`,
    languageNameNative: `English`,
    languageNameFr: `Anglais`,
    flag: `NZ`,
    sentences: ENGLISH
  },
  {
    isoCode: `ar`,
    countryNameNative: `عمان`,
    countryNameFr: `Oman`,
    languageNameNative: `عربي`,
    languageNameFr: `Arabe`,
    flag: `OM`,
    sentences: ARABIC
  },
  {
    isoCode: `ar`,
    countryNameNative: `فلسطين`,
    countryNameFr: `Palestine`,
    languageNameNative: `عربي`,
    languageNameFr: `Arabe`,
    flag: `PS`,
    sentences: ARABIC
  },
  {
    isoCode: `en`,
    countryNameNative: `Philippines`,
    countryNameFr: `Philippines`,
    languageNameNative: `English`,
    languageNameFr: `Anglais`,
    flag: `PH`,
    sentences: ENGLISH
  },
  {
    isoCode: `pt`,
    countryNameNative: `Portugal`,
    countryNameFr: `Portugal`,
    languageNameNative: `Portugues`,
    languageNameFr: `Portugais`,
    flag: `PT`,
    sentences: PORTUGUESE
  },
  {
    isoCode: `ar`,
    countryNameNative: `قطر`,
    countryNameFr: `Qatar`,
    languageNameNative: `عربي`,
    languageNameFr: `Arabe`,
    flag: `QA`,
    sentences: ARABIC
  },
  {
    isoCode: `ru`,
    countryNameNative: `Россия`,
    countryNameFr: `Russie`,
    languageNameNative: `русский`,
    languageNameFr: `Russe`,
    flag: `RU`,
    sentences: RUSSIAN
  },
  {
    isoCode: `en`,
    countryNameNative: `Singapore`,
    countryNameFr: `Singapour`,
    languageNameNative: `English`,
    languageNameFr: `Anglais`,
    flag: `SG`,
    sentences: ENGLISH
  },
  {
    isoCode: `en`,
    countryNameNative: `South Africa`,
    countryNameFr: `Afrique du Sud`,
    languageNameNative: `English`,
    languageNameFr: `Anglais`,
    flag: `ZA`,
    sentences: ENGLISH
  },
  {
    isoCode: `ar`,
    countryNameNative: `تونس`,
    countryNameFr: `Tunisie`,
    languageNameNative: `عربي`,
    languageNameFr: `Arabe`,
    flag: `TN`,
    sentences: ARABIC
  },
  {
    isoCode: `en`,
    countryNameNative: `United Kingdom`,
    countryNameFr: `Royaume-Uni`,
    languageNameNative: `English`,
    languageNameFr: `Anglais`,
    flag: `GB`,
    sentences: ENGLISH
  },
  {
    isoCode: `en`,
    countryNameNative: `United-States of America`,
    countryNameFr: `États-Unis d'Amérique`,
    languageNameNative: `English`,
    languageNameFr: `Anglais`,
    flag: `US`,
    sentences: ENGLISH
  },
]
