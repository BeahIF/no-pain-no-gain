import { Component, OnInit } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {

//  public videos: Array<Object> = []; 

  constructor(private youtube: YoutubeVideoPlayer) { 
/*    this.videos = [
      {
        "thumbnail": "https://img.youtube.com/vi/i1DiaXP9nCk/sddefault.jpg",
        "id": "i1DiaXP9nCk",
        "title": "Vídeo tal",
        "description": "Lagoa dos patos"
      },
      {
        "thumbnail": "https://img.youtube.com/vi/i1DiaXP9nCk/sddefault.jpg",
        "id": "i1DiaXP9nCk",
        "title": "Vídeo tal",
        "description": "Lagoa dos patos"
      },
      {
        "thumbnail": "https://img.youtube.com/vi/i1DiaXP9nCk/sddefault.jpg",
        "id": "i1DiaXP9nCk",
        "title": "Vídeo tal",
        "description": "Lagoa dos patos"
      },
      {
        "thumbnail": "https://img.youtube.com/vi/i1DiaXP9nCk/sddefault.jpg",
        "id": "i1DiaXP9nCk",
        "title": "Vídeo tal",
        "description": "Lagoa dos patos"
      }
    ]
*/     
  }

  ngOnInit() {
  }

  watch(idVideo){
    this.youtube.openVideo(idVideo);
  }

}


