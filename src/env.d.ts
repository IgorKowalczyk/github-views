/// <reference types="astro/client" />
/// <reference types="astro/types" />

type Runtime = import("@astrojs/cloudflare").Runtime<ENV>;
declare namespace App {
  /* eslint-disable-next-line typescript/no-empty-object-type */
  interface Locals extends Runtime {}
}
