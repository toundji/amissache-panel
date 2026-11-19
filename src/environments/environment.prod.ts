import { firebaseConfig } from './firebase';

export const environment = {
  production: false,
  apiUrl: 'https://webservice.amissache.com',
  // Doit correspondre à API_KEY_HEADER_NAME côté API (défaut: x-api-key)
  apiKeyHeaderName: 'x-api-key',
  // Doit correspondre à API_KEY_BACK_OFFICE côté API — voir amissache-backend/.env.prod
  apiKey: 'votre_cle_back_office',
  // Config Firebase (connexion Google) — voir ./firebase.ts
  firebase: firebaseConfig,
};
