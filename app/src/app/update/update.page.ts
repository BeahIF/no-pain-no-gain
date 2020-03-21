import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../services/images.service';
import { Images } from '../interfaces/images'
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  public images: Images = {};
  constructor(private imagesService: ImagesService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  async saveImages(){
    await this.imagesService.addImages(this.images)
    this.navCtrl.navigateBack('/image');
  }
}
