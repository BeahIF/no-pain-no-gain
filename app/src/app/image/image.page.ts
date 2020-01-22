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
        "vr": "'https://storage.googleapis.com/vrview/examples/coral.jpg'"
      },
      {
        "place": "TESTE2",
        "image": "https://ionicframework.com/docs/demos/api/card/madison.jpg",
        "description": "DESCR2",
        "vr": "'https://storage.googleapis.com/vrview/examples/coral.jpg'"
      },
      {
        "place": "TESTE3",
        "image": "https://ionicframework.com/docs/demos/api/card/madison.jpg",
        "description": "DESCR3",
        "vr": "'https://storage.googleapis.com/vrview/examples/coral.jpg'"
      },
      {
        "place": "TESTE4",
        "image": "https://ionicframework.com/docs/demos/api/card/madison.jpg",
        "description": "DESCR4",
        "vr": "'https://storage.googleapis.com/vrview/examples/coral.jpg'"
      }
    ]     
  }

  ngOnInit() {
  }

  view(photoUrl, title){
    this.photoViewer.show(photoUrl, title);
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

