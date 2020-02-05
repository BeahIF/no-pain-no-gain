import { Component, OnInit } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-image',
  templateUrl: './image.page.html',
  styleUrls: ['./image.page.scss'],
})
export class ImagePage implements OnInit {

  public cards: Array<Object> = [];
  
  constructor(private photoViewer: PhotoViewer) {
    this.cards = [
      {
        "place": "TESTE1",
        "image": "assets/image/image_1.jpg",
        "description": "DESCR1",
        "vr": "assets/vr/vr_1.jpg"
      },
      {
        "place": "TESTE2",
        "image": "assets/image/image_2.jpeg",
        "description": "DESCR2",
        "vr": ""
      },
      {
        "place": "TESTE3",
        "image": "assets/image/image_3.jpeg",
        "description": "DESCR3",
        "vr": ""
      },
      {
        "place": "TESTE4",
        "image": "assets/image/image_4.jpg",
        "description": "DESCR4",
        "vr": ""
      },
      {
        "place": "TESTE3",
        "image": "assets/image/image_5.jpg",
        "description": "DESCR3",
        "vr": ""
      },
      {
        "place": "TESTE3",
        "image": "assets/image/image_6.jpg",
        "description": "DESCR3",
        "vr": ""
      },
      {
        "place": "TESTE3",
        "image": "assets/image/image_7.jpg",
        "description": "DESCR3",
        "vr": ""
      },
      {
        "place": "TESTE3",
        "image": "assets/image/image_8.jpg",
        "description": "DESCR3",
        "vr": ""
      },
      {
        "place": "TESTE3",
        "image": "assets/image/image_9.jpg",
        "description": "DESCR3",
        "vr": ""
      },
      {
        "place": "TESTE3",
        "image": "assets/image/image_10.jpg",
        "description": "DESCR3",
        "vr": ""
      },
      {
        "place": "TESTE3",
        "image": "assets/image/image_11.jpg",
        "description": "DESCR3",
        "vr": ""
      },
      {
        "place": "TESTE3",
        "image": "assets/image/image_12.jpg",
        "description": "DESCR3",
        "vr": ""
      },
      {
        "place": "TESTE3",
        "image": "assets/image/image_13.jpg",
        "description": "DESCR3",
        "vr": ""
      },
      {
        "place": "TESTE3",
        "image": "assets/image/image_14.jpg",
        "description": "DESCR3",
        "vr": ""
      },
      {
        "place": "TESTE3",
        "image": "assets/image/image_15.jpg",
        "description": "DESCR3",
        "vr": ""
      },
      {
        "place": "TESTE3",
        "image": "assets/image/image_16.jpg",
        "description": "DESCR3",
        "vr": ""
      },
      {
        "place": "TESTE3",
        "image": "assets/image/image_17.jpg",
        "description": "DESCR3",
        "vr": ""
      }
    ]     
  }

  ngOnInit() {
  }

  view(photoUrl, title){
    this.photoViewer.show(photoUrl, title);
  }

  vr(vrUrl){
    window['VrView'].showPhotoFromAppFolder(vrUrl,
      {
          inputType: "TYPE_MONO",
          startDisplayMode: "DISPLAY_MODE_FULLSCREEN"
      }
    );
  }
}