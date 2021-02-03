import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> c8d4db9807b7858a8c3b3de1d28cb09b139544da
export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

const providers = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];

<<<<<<< HEAD
>>>>>>> c8d4db9807b7858a8c3b3de1d28cb09b139544da
=======
>>>>>>> c8d4db9807b7858a8c3b3de1d28cb09b139544da
if (environment.production) {
  enableProdMode();
}

<<<<<<< HEAD
<<<<<<< HEAD
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
=======
platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.log(err));
>>>>>>> c8d4db9807b7858a8c3b3de1d28cb09b139544da
=======
platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.log(err));
>>>>>>> c8d4db9807b7858a8c3b3de1d28cb09b139544da
