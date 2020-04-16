import 'zone.js/dist/zone';
(window as any).process = { env: { DEBUG: undefined }, };
(window as any).global = window;
global.Buffer = global.Buffer || require('buffer').Buffer;
(window as any).process = {
  version: ''
};
