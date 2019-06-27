import {NgModule} from '@angular/core';
import {Ng8ConnectionService} from './ng8-connection.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [],
  providers: [Ng8ConnectionService],
  imports: [
    HttpClientModule
  ],
  exports: []
})
export class Ng8ConnectionModule {
}
