import { SecurityConfig } from "src/app/security/security.service";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  music_search: {
    api_url: "https://api.spotify.com/v1/search"
  },

  security: {
    auth_url: "https://accounts.spotify.com/authorize",
    client_id: "9e4d870f738c4b2ba22276195c79faaf",
    response_type: "token",
    redirect_uri: "http://localhost:4200/"
  } as SecurityConfig
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
