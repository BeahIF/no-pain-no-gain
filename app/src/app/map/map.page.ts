import { Component, OnInit, NgZone } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  HtmlInfoWindow
} from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})

export class MapPage implements OnInit {
  map: GoogleMap;

  constructor(private platform: Platform, private _ngZone: NgZone) { }

  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.platform.ready();
    await this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {lat: -31.100825, lng: -51.315300},
        zoom: 7
      },
      mapType: 'HYBRID',
      'gestures': {
        'scroll': true,
        'tilt': true,
        'rotate': true,
        'zoom': true
      }
    });
    this.map.setMapTypeId ('HYBRID');
    let htmlInfoWindow = new HtmlInfoWindow();

    // flip-flop contents
    // https://davidwalsh.name/css-flip
    let frame: HTMLElement = document.createElement('div');
    frame.innerHTML = `
<div class="flip-container" id="flip-container">
  <div class="flipper">
    <div class="front">
    <h3>Titulo!</h3>
    <img src="https://ionicframework.com/docs/demos/api/card/madison.jpg">
  </div>
  <div class="back">
    <!-- back content -->
    Marcador legal ;)
    </div>
  </div>
</div>`;

    frame.addEventListener("click", (evt) => {
      let container = document.getElementById('flip-container');
      if (container.className.indexOf(' hover') > -1) {
        container.className = container.className.replace(" hover", "");
      } else {
        container.className += " hover";
      }
    });
    htmlInfoWindow.setContent(frame, {
      width: "170px"
    });

    this.map.addMarker({
      position: {lat: -31.100825, lng: -51.315300},
      draggable: true,
      disableAutoPan: true
    }).then((marker: Marker) => {
      marker.on(GoogleMapsEvent.MARKER_CLICK)
      .subscribe(() => {
          htmlInfoWindow.open(marker);
      });
      marker.trigger(GoogleMapsEvent.MARKER_CLICK);
    });
  }
}
