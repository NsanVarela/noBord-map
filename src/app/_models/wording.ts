export interface Vocabulary {
  isoCode: string;
  countryNameNative?: string;
  countryNameFr?: string;
  languageNameNative?: string;
  languageNameFr?: string;
  flag?: string;
  sentences: Sentence;
}

export interface Sentence {
  // MENU
  homeNav: string;
  mapNav: string;
  chatNav: string;
  paramNav: string;
  logoutNav: string;
  appNameNav: string;
  // HOME
  baseline: string;
  advisorName: string;
  candidateName: string;
  advPeTitle: string;
  advPeSentnceOne: string;
  advPeSentnceTwo: string;
  advPeSentnceThree: string;
  advPeSentnceFour: string;
  advCandidateTitle: string;
  advCandidateSentnceOne: string;
  advCandidateSentnceTwo: string;
  advCandidateSentnceThree: string;
  advCandidateSentnceFour: string;
  // MAP
  toggleOpenButton: string;
  toggleCloseButton: string;
  submitSidenavButton: string;
  // AUTH
  emailInputTitle: string;
  emailPlaceholder: string;
  languageInputTitle: string;
  languagePlaceholder: string;
  userTypeInputTitle: string;
  userTypePlaceholder: string;
  passwordInputTile: string;
  passwordPlaceholder: string;
  passwordInputControl: string;
  // AUTH -> Register
  registerTitle: string;
  registerInstructionTitle: string;
  registerInstruction: string;
  registerInstructionButton: string;
  pseudoInputTitle: string;
  pseudoPlaceholder: string;
  // AUTH -> Login
  loginTitle: string;
  loginInstructionTitle: string;
  loginInstruction: string;
  loginInstructionButton: string;
}
