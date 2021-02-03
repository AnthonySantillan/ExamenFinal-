import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

<<<<<<< HEAD
=======
export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

const providers = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];

>>>>>>> c8d4db9807b7858a8c3b3de1d28cb09b139544da
if (environment.production) {
  enableProdMode();
}

<<<<<<< HEAD
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
=======
platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.log(err));
>>>>>>> c8d4db9807b7858a8c3b3de1d28cb09b139544da
