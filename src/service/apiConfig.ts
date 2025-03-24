/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

const URL_REMOTE = import.meta. env.VITE_API_URL;

console.log(URL_REMOTE);
const conf = {
  serverUrl: URL_REMOTE,
  basePath: `public`,
  redirect: URL_REMOTE,
};

export default conf;
