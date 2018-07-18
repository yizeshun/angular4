import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-light',
  templateUrl: './card-light.component.html',
  styleUrls: ['./card-light.component.styl']
})
export class CardLightComponent implements OnInit {
  @Input() cardTitle: string;
  @Input() isBackColor: boolean;
  constructor() {
    // 卡片header背景色默认存在
    this.isBackColor = true;
  }
  ngOnInit() {
  }

}
