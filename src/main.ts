import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

window.Buffer = require('buffer/').Buffer;

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
