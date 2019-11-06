import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'f1.jpg',
    'f2.jpg',
    'f3.jpg',
    'f4.jpg',
    'f5.jpg',
    'f6.jpg',
    'f1.jpg',
    'f2.jpg',
    'f3.jpg',
    'f4.jpg'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[i]
      });
    }
  }

  ngOnInit() {
  }
  
}

