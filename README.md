# Internet Connection Monitoring Service (Angular v8)

> Detects whether browser has an active internet connection or not in Angular application. 

## Install

You can get it on npm.

```
npm install ng8-connection-service --save
```

## Usage

1. Inject `ConnectionService` in Angular component's constructor.
2. Subscribe to `monitor()` method to get push notification whenever internet connection status is changed.

```ts
import {Component} from '@angular/core';
import {Ng8ConnectionService} from 'ng8-connection.service';

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


```
## License
