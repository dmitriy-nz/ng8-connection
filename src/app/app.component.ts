import {Component} from '@angular/core';
import {Ng8ConnectionService} from '../../projects/ng8-connection/src/lib/ng8-connection.service';

@Component({
  selector: 'ng8-connection-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ng8ConnectionLibrary';
  status = 'ONLINE';


  constructor(private connection: Ng8ConnectionService) {
    this.connection.monitor().subscribe((status: boolean) => {
      this.status = (status) ? 'ONLINE' : 'OFFLINE';
    });
  }

}
