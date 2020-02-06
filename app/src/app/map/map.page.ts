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
    /*
    1-Sem localização-https://i.ibb.co/wgW8PYD/image-1.jpg
    2- -32.025278 -52.105833-https://i.ibb.co/6bJzD0G/image-2.jpg
    3-Sem localização-https://i.ibb.co/k27DKTm/image-3.jpg
    4-Sem localização-https://i.ibb.co/CB7krQP/image-4.jpg
    5- -32.000556  -52.137222-https://i.ibb.co/0jBw2SQ/image-5.jpg
    6- -32.069167 -52.159722-https://i.ibb.co/TB2BZYG/image-6.jpg
    7--32.181667 -52.079722-https://i.ibb.co/58Q0Smf/image-7.jpg
    8- -32.149444 -52.100833-https://i.ibb.co/2d7XknT/image-8.jpg
    9- -32.205833 -52.173889-https://i.ibb.co/zGtsVtB/image-9.jpg
    10- -32.178889 -52.093333-https://i.ibb.co/KztGd9Z/image-10.jpg
    11- -32.149444 -52.086111-https://i.ibb.co/4KRxWs1/image-11.jpg
    12- -32.205833 -52.173889-https://i.ibb.co/KVLzZZQ/image-12.jpg
    13- -32.170556 -52.128333-https://i.ibb.co/k0FNfJS/image-13.jpg
    14- -32.016944 -52.138056-https://i.ibb.co/RDfpKmf/image-14.jpg
    15-Sem localização-https://i.ibb.co/z224g2m/image-15.jpg
    16-Sem localização-https://i.ibb.co/kxF8dnQ/image-16.jpg
    17-Sem localização-https://i.ibb.co/5F8hzTQ/image-17.jpg
    18- -32.161667 -52.100000-https://i.ibb.co/3c74M55/image-18.jpg
    19- -32.165833  -52.097500-https://i.ibb.co/MfcTwmJ/image-19.jpg
    20- -32.144444  -52.069722-https://i.ibb.co/fGg2rBg/image-20.jpg
    21- -32.205833 -52.173889-https://i.ibb.co/zGtsVtB/image-21.jpg
    */
    let markerData:Array<Object>;
    markerData = [
    { position: {lat: -32.025278, lng: -52.105833}, url: "https://i.ibb.co/6bJzD0G/image-2.jpg"},
    { position: {lat: -32.000556, lng: -52.137222}, url: "https://i.ibb.co/0jBw2SQ/image-5.jpg"},
    { position: {lat: -32.069167, lng: -52.159722}, url: "https://i.ibb.co/TB2BZYG/image-6.jpg"},
    { position: {lat: -32.181667, lng: -52.079722}, url: "https://i.ibb.co/58Q0Smf/image-7.jpg"},
    { position: {lat: -32.149444, lng: -52.100833}, url: "https://i.ibb.co/2d7XknT/image-8.jpg"},
    { position: {lat: -32.205833, lng: -52.173889}, url: "https://i.ibb.co/zGtsVtB/image-9.jpg"},
    { position: {lat: -32.178889, lng: -52.093333}, url: "https://i.ibb.co/KztGd9Z/image-10.jpg"},
    { position: {lat: -32.149444, lng: -52.086111}, url: "https://i.ibb.co/4KRxWs1/image-11.jpg"},
    { position: {lat: -32.205833, lng: -52.173889}, url: "https://i.ibb.co/KVLzZZQ/image-12.jpg"},
    { position: {lat: -32.170556, lng: -52.128333}, url: "https://i.ibb.co/k0FNfJS/image-13.jpg"},
    { position: {lat: -32.016944, lng: -52.138056}, url: "https://i.ibb.co/RDfpKmf/image-14.jpg"},
    { position: {lat: -32.161667, lng: -52.100000}, url: "https://i.ibb.co/3c74M55/image-18.jpg"},
    { position: {lat: -32.165833, lng: -52.097500}, url: "https://i.ibb.co/MfcTwmJ/image-19.jpg"},
    { position: {lat: -32.144444, lng: -52.069722}, url: "https://i.ibb.co/fGg2rBg/image-20.jpg"},
    { position: {lat: -32.205833, lng: -52.173889}, url: "https://i.ibb.co/zGtsVtB/image-21.jpg"}
    ];

    let markers = new Array();
    markerData.forEach(item => 
      markers.push ({
        position: item["position"],
        draggable: false,
        disableAutoPan: false
      })
    );
    console.log(markers);
    markers.forEach (item => 
      this.map.addMarker(item).then((marker: Marker) => {
        marker.on(GoogleMapsEvent.MARKER_CLICK)
        .subscribe(() => {
            htmlInfoWindow.open(marker);
        });
        marker.trigger(GoogleMapsEvent.MARKER_CLICK);
      })
    );
  }
}
