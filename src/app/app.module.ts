import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Ng8ConnectionModule} from '../../projects/ng8-connection/src/lib/ng8-connection.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Ng8ConnectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
