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
        "image": "https://ionicframework.com/docs/demos/api/card/madison.jpg",
        "description": "DESCR1",
        "vr": ""
      },
      {
        "place": "TESTE2",
        "image": "https://ionicframework.com/docs/demos/api/card/madison.jpg",
        "description": "DESCR2",
        "vr": ""
      },
      {
        "place": "TESTE3",
        "image": "https://ionicframework.com/docs/demos/api/card/madison.jpg",
        "description": "DESCR3",
        "vr": ""
      },
      {
        "place": "TESTE4",
        "image": "https://ionicframework.com/docs/demos/api/card/madison.jpg",
        "description": "DESCR4",
        "vr": ""
      }
    ]     
  }

  ngOnInit() {
  }

  view(photoUrl){
    this.photoViewer.show(photoUrl);
  }

  vr(vrUrl){
    window['VrView'].showPhoto(vrUrl,
      {
          inputType: "TYPE_STEREO_OVER_UNDER",
          startDisplayMode: "DISPLAY_MODE_FULLSCREEN"
      }
    );
  }

}

/*    EXEMPLO PHOTOVIEWER
this.platform.ready().then(()=> {
  var title = "PhotoViewer";
  var photoUrl = "https://ionicframework.com/docs/demos/api/card/madison.jpg";
  var options = {
    share:true
  }
  this.photoViewer.show(photoUrl,title,options);
})
*/

/*
//Codigo da Bea com adaptações
import { Component } from '@angular/core';
import { ProviderService } from '../provider.service';
//import { NavLifeCycles} from '../../utils/ionic/nav/nav-lifecycles';
import { NavController, IonicPage, NavParams, ToastController } from 'ionic-angular';
import { Image } from '../models/Images.js';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  images: Array<Image> = new Array<Image>();
  constructor(private imageProvider: ProviderService) {
    //Não sei por que ela instanciou um objeto que deveria ser passado ao contrutor
    //imageProvider = new ProviderService()
    imageProvider.list_images().subscribe(data => {
      this.images = data;
    }, err => {

    }
    );
  }

};
*/

// ionViewDidLoad(){
//   this.imageProvider.list_image().subscribe(data => {
//     this.images = data;
//   },err=>{

//   }
//   );
// }

