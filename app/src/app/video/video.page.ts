import { Component, OnInit } from '@angular/core';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
//import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})

export class VideoPage implements OnInit {
  videoIds = [
    'XkVayhYz9sk',
    'e9dZQelULDk',
    'MoudH-RPnEE',
    'dXpVA7IAH1o'
  ];
  videos = [];
  
  constructor(private youtube: YoutubeVideoPlayer,private http: HttpClient) { }

  ngOnInit() {
    this.videoIds
    .forEach (id => 
      this.http.get('https://www.googleapis.com/youtube/v3/videos?part=id,snippet&id=' + id + '&key=AIzaSyCztbw3brynJiPfLF0iUw_GE1AgWQOcC1A')
      .subscribe(response => 
        this.videos.push(response)//response.items[0].snippet)
      )
    );
  }

  watch(idVideo){
    this.youtube.openVideo(idVideo);
  }

}