/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  readonly VITE_APP_FIREBASE_DOMAIN: string;
  readonly VITE_APP_FIREBASE_DATABASE: string;
  readonly VITE_APP_FIREBASE_PROJECT_ID: string;
  readonly VITE_APP_FIREBASE_PROJECT_STORAGE_BUCKET: string;
  readonly VITE_APP_FIREBASE_MESSAGE_SENDER: string;
  readonly VITE_APP_FIREBASE_APP_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
