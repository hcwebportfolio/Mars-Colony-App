import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from '@angular/router';

import { Project5AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Project5AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, ROUTER_DIRECTIVES]);

