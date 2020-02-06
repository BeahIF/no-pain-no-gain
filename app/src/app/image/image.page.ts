import { Component, OnInit } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { Network } from '@ionic-native/network/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';

@Component({
  selector: 'app-image',
  templateUrl: './image.page.html',
  styleUrls: ['./image.page.scss'],
})
export class ImagePage implements OnInit {

  public cards: Array<Object> = [];

  constructor(private photoViewer: PhotoViewer, private network: Network, private dialogs: Dialogs) {

    this.network.onDisconnect().subscribe(() => {
      this.dialogs.alert('Você não possui conexão a internet!');
    });

    this.cards = [
      {
        "place": "Sem localização",
        "image": "https://i.ibb.co/wgW8PYD/image-1.jpg",
        "description": "",
        "vr": "assets/vr/vr_1.jpg"
      },
      {
        "place": "32º01'31S - 52º06'21W",
        "image": "https://i.ibb.co/6bJzD0G/image-2.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "Sem localização",
        "image": "https://i.ibb.co/k27DKTm/image-3.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "Sem localização",
        "image": "https://i.ibb.co/CB7krQP/image-4.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "32º00'02S - 52º08'14W",
        "image": "https://i.ibb.co/0jBw2SQ/image-5.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "-32º04'09S - 52º09'35W",
        "image": "https://i.ibb.co/TB2BZYG/image-6.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "32º10'54S - 52º04'47W",
        "image": "https://i.ibb.co/58Q0Smf/image-7.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "32º08'58S- 52º06'03W",
        "image": "https://i.ibb.co/2d7XknT/image-8.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "32º12'21S - 52º10'26W",
        "image": "https://i.ibb.co/zGtsVtB/image-9.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "32º10'44S- 52º05'36W",
        "image": "https://i.ibb.co/KztGd9Z/image-10.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "32º08'58S - 52º05'10W",
        "image": "https://i.ibb.co/4KRxWs1/image-11.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "32º12'21S - 52º10'26W",
        "image": "https://i.ibb.co/KVLzZZQ/image-12.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "32º10'14S - 52º07'42W",
        "image": "https://i.ibb.co/k0FNfJS/image-13.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "32º01'01S - 52º08'17W",
        "image": "https://i.ibb.co/RDfpKmf/image-14.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "Sem localização",
        "image": "https://i.ibb.co/z224g2m/image-15.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "Sem localização",
        "image": "https://i.ibb.co/kxF8dnQ/image-16.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "Sem localização",
        "image": "https://i.ibb.co/5F8hzTQ/image-17.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "32º09'42S - 52º06'00W",
        "image": "https://i.ibb.co/3c74M55/image-18.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "32º09'57S - 52º05'51W",
        "image": "https://i.ibb.co/MfcTwmJ/image-19.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "32º08'40S - 52º04'11W",
        "image": "https://i.ibb.co/fGg2rBg/image-20.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "32º12'21S - 52º10'26W",
        "image": "https://i.ibb.co/zGtsVtB/image-21.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      }
    ]     
  }

  ngOnInit() {
  }

  photoView(photoUrl, title){
    this.photoViewer.show(photoUrl, title);
  }

  vrView(vrUrl){
    window['VrView'].showPhotoFromAppFolder(vrUrl,
      {
          inputType: "TYPE_MONO",
          startDisplayMode: "DISPLAY_MODE_FULLSCREEN"
      }
    );
  }
}