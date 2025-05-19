/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  // Adicione outras variáveis aqui se quiser:
  // readonly VITE_IMG_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
