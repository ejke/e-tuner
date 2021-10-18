import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-tuner';

  ngAfterViewInit() {
    console.log(`ngAfterViewInit`);
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        console.log("Using the mic!")
        console.log(stream)
      })
      .catch((e) => {
        console.log("no mic: "+ e);
      })
  }
}
