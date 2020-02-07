import { Component, OnInit, NgZone } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  HtmlInfoWindow
} from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { Network } from '@ionic-native/network/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})

export class MapPage implements OnInit {
  map: GoogleMap;

  constructor(private photoViewer: PhotoViewer, private network: Network, private dialogs: Dialogs, private platform: Platform, private _ngZone: NgZone) { }

  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.platform.ready();
    await this.loadMap();
  }
  photoView(photoUrl, title){
    this.photoViewer.show(photoUrl, title);
  }
  loadMap() {
    this.network.onDisconnect().subscribe(() => {
      this.dialogs.alert('Você não possui conexão a internet!');
    });
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {lat: -32.065233, lng: -52.111842},
        zoom: 9
      },
      mapType: 'SATELLITE',
      'gestures': {
        'scroll': true,
        'tilt': true,
        'rotate': true,
        'zoom': true
      }
    });
    let markerData = [
      [-32.025278, -52.105833, "assets/image/image_2.jpg","https://i.ibb.co/6bJzD0G/image-2.jpg"],
      [-32.000556, -52.137222, "assets/image/image_5.jpg","https://i.ibb.co/0jBw2SQ/image-5.jpg"],
      [-32.069167, -52.159722, "assets/image/image_6.jpg","https://i.ibb.co/TB2BZYG/image-6.jpg"],
      [-32.181667, -52.079722, "assets/image/image_7.jpg","https://i.ibb.co/58Q0Smf/image-7.jpg"],
      [-32.149444, -52.100833, "assets/image/image_8.jpg","https://i.ibb.co/2d7XknT/image-8.jpg"],
      [-32.205833, -52.173889, "assets/image/image_9.jpg","https://i.ibb.co/zGtsVtB/image-9.jpg"],
      [-32.178889, -52.093333, "assets/image/image_10.jpg","https://i.ibb.co/KztGd9Z/image-10.jpg"],
      [-32.149444, -52.086111, "assets/image/image_11.jpg","https://i.ibb.co/4KRxWs1/image-11.jpg"],
      [-32.205833, -52.173889, "assets/image/image_12.jpg","https://i.ibb.co/KVLzZZQ/image-12.jpg"],
      [-32.170556, -52.128333, "assets/image/image_13.jpg","https://i.ibb.co/k0FNfJS/image-13.jpg"],
      [-32.016944, -52.138056, "assets/image/image_14.jpg","https://i.ibb.co/RDfpKmf/image-14.jpg"],
      [-32.161667, -52.100000, "assets/image/image_18.jpg","https://i.ibb.co/3c74M55/image-18.jpg"],
      [-32.165833, -52.097500, "assets/image/image_19.jpg","https://i.ibb.co/MfcTwmJ/image-19.jpg"],
      [-32.144444, -52.069722, "assets/image/image_20.jpg","https://i.ibb.co/fGg2rBg/image-20.jpg"],
      [-32.205833, -52.173889, "assets/image/image_21.jpg","https://i.ibb.co/zGtsVtB/image-21.jpg"]
    ];
    let markers = new Array();
    markerData.forEach(item => markers.push ({
        position: {lat: item[0], lng: item[1]},
        draggable: false,
        disableAutoPan:true,
        imgLocal: item[2],
        imgRemote: item[3]
      })
    );
    let htmlInfoWindow = new HtmlInfoWindow();
    
    markers.forEach (item => 
      this.map.addMarker(item)
      .then((marker: Marker) => {
        marker.on(GoogleMapsEvent.MARKER_CLICK)
        .subscribe(() => {
          let imgLocal = item["imgLocal"];
          let imgRemote = item["imgRemote"];
          let position = "Lat: " + item["position"]["lat"] + " / Long: " + item["position"]["lng"];
          let html = [
            '<div id="photo" style="width:200px; (click)="photoView(' + position + ', ' + imgRemote + ')"">',
            '<img src="' + imgLocal + '"/>',
            '</div>'
          ].join("");
          htmlInfoWindow.setContent(html);
          htmlInfoWindow.open(marker);
        });
        //Para iniciar o mapa com a janela de informação aberta descomente a linha abaixo
        //marker.trigger(GoogleMapsEvent.MARKER_CLICK);
      })
    );
  }
}