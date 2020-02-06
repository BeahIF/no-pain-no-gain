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
        "image": "assets/image/image_1.jpg",
        "description": "",
        "vr": "assets/vr/vr_1.jpg"
      },
      {
        "place": "32º01'31S - 52º06'21W",
        "image": "assets/image/image_2.jpeg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "Sem localização",
        "image": "assets/image/image_3.jpeg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "Sem localização",
        "image": "assets/image/image_4.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "32º00'02S - 52º08'14W",
        "image": "assets/image/image_5.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "-32º04'09S - 52º09'35W",
        "image": "assets/image/image_6.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "32º10'54S - 52º04'47W",
        "image": "assets/image/image_7.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "32º08'58S- 52º06'03W",
        "image": "assets/image/image_8.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "32º12'21S - 52º10'26W",
        "image": "assets/image/image_9.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "32º10'44S- 52º05'36W",
        "image": "assets/image/image_10.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "32º08'58S - 52º05'10W",
        "image": "assets/image/image_11.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "32º12'21S - 52º10'26W",
        "image": "assets/image/image_12.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "32º10'14S - 52º07'42W",
        "image": "assets/image/image_13.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "32º01'01S - 52º08'17W",
        "image": "assets/image/image_14.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "Sem localização",
        "image": "assets/image/image_15.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "Sem localização",
        "image": "assets/image/image_16.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "Sem localização",
        "image": "assets/image/image_17.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "32º09'42S - 52º06'00W",
        "image": "assets/image/image_18.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "32º09'57S - 52º05'51W",
        "image": "assets/image/image_19.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "32º08'40S - 52º04'11W",
        "image": "assets/image/image_20.jpg",
        "description": "",
        "button": "false",
        "vr": ""
      },
      {
        "place": "32º12'21S - 52º10'26W",
        "image": "assets/image/image_21.jpg",
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