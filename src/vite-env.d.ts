/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_FIND: string;
  readonly VITE_API_ONECALL: string;
  readonly VITE_API_IMG: string;
  readonly VITE_API_IMAGE_FLAGS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
