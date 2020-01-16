import { Component } from '@angular/core';
import { ProviderService } from '../provider.service';
//import { NavLifeCycles} from '../../utils/ionic/nav/nav-lifecycles';
import { NavController, IonicPage, NavParams, ToastController} from 'ionic-angular';
import { Image } from '../models/Images.js';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  images : Array<Image> = new Array<Image>();
  constructor(private imageProvider : ProviderService) {
    //imageProvider = new ProviderService()
    imageProvider.list_images().subscribe(data => {
           this.images = data;
         },err=>{
      
         }
         );
  }

};

// ionViewDidLoad(){
//   this.imageProvider.list_image().subscribe(data => {
//     this.images = data;
//   },err=>{

//   }
//   );
// }
