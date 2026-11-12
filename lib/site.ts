// Caminho base e URL pública do site.
// GitHub Pages sem domínio: NEXT_PUBLIC_BASE_PATH=/portfoliopedrorios
// Com domínio próprio: deixe NEXT_PUBLIC_BASE_PATH vazio e troque NEXT_PUBLIC_SITE_URL.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://rios-pedro.github.io/portfoliopedrorios"
).replace(/\/$/, "");

/** Prefixa o basePath em arquivos de /public (next/image e CSS inline não fazem isso sozinhos no export). */
export const asset = (path: string) => `${BASE_PATH}${path}`;
