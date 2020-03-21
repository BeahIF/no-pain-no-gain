import { Component, OnInit } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { Network } from '@ionic-native/network/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { Images } from 'src/app/interfaces/images';
import { Subscription } from 'rxjs';
import { ImagesService } from '../services/images.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.page.html',
  styleUrls: ['./image.page.scss'],
})
export class ImagePage implements OnInit {
  public images = new Array<Images>();
  private imagesSubscription: Subscription;

/*  public cards: Array<Object> = [];*/

  constructor(private photoViewer: PhotoViewer, private network: Network, private dialogs: Dialogs, private imagesService: ImagesService) {

    this.imagesSubscription = this.imagesService.getImages().subscribe(data => {
      this.images = data;
    });

    this.network.onDisconnect().subscribe(() => {
      this.dialogs.alert('Você não possui conexão a internet!');
    });

/*
    this.cards = [
      {
        "place": "Sem localização",
        "image": "assets/image/image_1.jpg",
        "imageUrl": "https://i.ibb.co/wgW8PYD/image-1.jpg",
        "description": "",
        "vr": "assets/vr/vr_1.jpg"
      },
      {
        "place": "32º01'31S - 52º06'21W",
        "image": "assets/image/image_2.jpg",
        "imageUrl": "https://i.ibb.co/6bJzD0G/image-2.jpg",
        "description": "",
        "vr": ""
      },
      {
        "place": "Sem localização",
        "image": "assets/image/image_3.jpg",
        "imageUrl": "https://i.ibb.co/k27DKTm/image-3.jpg",
        "description": "",
        "vr": ""
      },
      {
        "place": "Sem localização",
        "image": "assets/image/image_4.jpg",
        "imageUrl": "https://i.ibb.co/CB7krQP/image-4.jpg",
        "description": "",
        "vr": ""
      },
      {
        "place": "32º00'02S - 52º08'14W",
        "image": "assets/image/image_5.jpg",
        "imageUrl": "https://i.ibb.co/0jBw2SQ/image-5.jpg",
        "description": "",
        "vr": ""
      },
      {
        "place": "-32º04'09S - 52º09'35W",
        "image": "assets/image/image_6.jpg",
        "imageUrl": "https://i.ibb.co/TB2BZYG/image-6.jpg",
        "description": "",
        "vr": ""
      },
      {
        "place": "32º10'54S - 52º04'47W",
        "image": "assets/image/image_7.jpg",
        "imageUrl": "https://i.ibb.co/58Q0Smf/image-7.jpg",
        "description": "",
        "vr": ""
      },
      {
        "place": "32º08'58S- 52º06'03W",
        "image": "assets/image/image_8.jpg",
        "imageUrl": "https://i.ibb.co/2d7XknT/image-8.jpg",
        "description": "",
        "vr": ""
      },
      {
        "place": "32º12'21S - 52º10'26W",
        "image": "assets/image/image_9.jpg",
        "imageUrl": "https://i.ibb.co/zGtsVtB/image-9.jpg",
        "description": "",
        "vr": ""
      },
      {
        "place": "32º10'44S- 52º05'36W",
        "image": "assets/image/image_10.jpg",
        "imageUrl": "https://i.ibb.co/KztGd9Z/image-10.jpg",
        "description": "",
        "vr": ""
      },
      {
        "place": "32º08'58S - 52º05'10W",
        "image": "assets/image/image_11.jpg",
        "imageUrl": "https://i.ibb.co/4KRxWs1/image-11.jpg",
        "description": "",
        "vr": ""
      },
      {
        "place": "32º12'21S - 52º10'26W",
        "image": "assets/image/image_12.jpg",
        "imageUrl": "https://i.ibb.co/KVLzZZQ/image-12.jpg",
        "description": "",
        "vr": ""
      },
      {
        "place": "32º10'14S - 52º07'42W",
        "image": "assets/image/image_13.jpg",
        "imageUrl": "https://i.ibb.co/k0FNfJS/image-13.jpg",
        "description": "",
        "vr": ""
      },
      {
        "place": "32º01'01S - 52º08'17W",
        "image": "assets/image/image_14.jpg",
        "imageUrl": "https://i.ibb.co/RDfpKmf/image-14.jpg",
        "description": "",
        "vr": ""
      },
      {
        "place": "Sem localização",
        "image": "assets/image/image_15.jpg",
        "imageUrl": "https://i.ibb.co/z224g2m/image-15.jpg",
        "description": "",
        "vr": ""
      },
      {
        "place": "Sem localização",
        "image": "assets/image/image_16.jpg",
        "imageUrl": "https://i.ibb.co/kxF8dnQ/image-16.jpg",
        "description": "",
        "vr": ""
      },
      {
        "place": "Sem localização",
        "image": "assets/image/image_17.jpg",
        "imageUrl": "https://i.ibb.co/5F8hzTQ/image-17.jpg",
        "description": "",
        "vr": ""
      },
      {
        "place": "32º09'42S - 52º06'00W",
        "image": "assets/image/image_18.jpg",
        "imageUrl": "https://i.ibb.co/3c74M55/image-18.jpg",
        "description": "",
        "vr": ""
      },
      {
        "place": "32º09'57S - 52º05'51W",
        "image": "assets/image/image_19.jpg",
        "imageUrl": "https://i.ibb.co/MfcTwmJ/image-19.jpg",
        "description": "",
        "vr": ""
      },
      {
        "place": "32º08'40S - 52º04'11W",
        "image": "assets/image/image_20.jpg",
        "imageUrl": "https://i.ibb.co/fGg2rBg/image-20.jpg",
        "description": "",
        "vr": ""
      },
      {
        "place": "32º12'21S - 52º10'26W",
        "image": "assets/image/image_21.jpg",
        "imageUrl": "https://i.ibb.co/zGtsVtB/image-21.jpg",
        "description": "",
        "vr": ""
      }
    ]
*/     
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.imagesSubscription.unsubscribe();
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