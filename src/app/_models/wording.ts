export interface Vocabulary {
  isoCode: string
  countryNameNative?: string
  countryNameFr?: string
  languageNameNative?: string
  languageNameFr?: string
  flag?: string
  sentences: Sentence
}

export interface Sentence {
  // MENU
  homeNav?: string
  mapNav?: string
  chatNav?: string
  paramNav?: string
  logoutNav?: string
  appNameNav?: string
  languageNav?: string
  // HOME
  baseline?: string
  advisorName?: string
  candidateName?: string
  advPeTitle?: string
  advPeSentenceOne?: string
  advPeSentenceTwo?: string
  advPeSentenceThree?: string
  advPeSentenceFour?: string
  advCandidateTitle?: string
  advCandidateSentenceOne?: string
  advCandidateSentenceTwo?: string
  advCandidateSentenceThree?: string
  advCandidateSentenceFour?: string
  // MAP
  toggleOpenButton?: string
  toggleCloseButton?: string
  submitSidenavButton?: string
  // AUTH
  emailInputTitle?: string
  emailPlaceholder?: string
  languageInputTitle?: string
  languagePlaceholder?: string
  userTypeInputTitle?: string
  userTypePlaceholder?: string
  passwordInputTitle?: string
  passwordPlaceholder?: string
  passwordInputControl?: string
  // AUTH -> Register
  registerTitle?: string
  registerInstructionTitle?: string
  registerInstruction?: string
  registerInstructionButton?: string
  pseudoInputTitle?: string
  pseudoPlaceholder?: string
  // AUTH -> Login
  loginTitle?: string
  loginInstructionTitle?: string
  loginInstruction?: string
  loginInstructionButton?: string
  // LANGUAGE
  languageTitle?: string
  languagePlaceholderInput?: string
  translatedLanguagePlaceholder?: string
  languageCancelBtn?: string
  languageSubmitBtn?: string
  // PROFIL
  age?: string
  experience?: string
  language?: string
  header1?: string
  header2?: string
  header3?: string
  header4?: string
  advisor?: string
  meeting?: string
  updatePseudo?: string
  updatePseudoPlaceholder?: string
  updateAge?: string
  updateAgePlaceholder?: string
  updateEmail?: string
  updateEmailPlaceholder?: string
  updatePassword?: string
  updatePasswordPlaceholder?: string
  updatePhone?: string
  updatePhonePlaceholder?: string
  updateLanguage?: string
  updateLanguagePlaceholder?: string
  updateProfession?: string
  updateProfessionPlaceholder?: string
  updateExperience?: string
  updateExperiencePlaceholder?: string
  updateCountry?: string
  updateCountryPlaceholder?: string
  updateDescription?: string
  updateDescriptionPlaceholder?: string
  updateSkills?: string
  updateSkillsPlaceholder?: string
}
