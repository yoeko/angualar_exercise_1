import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  // appareilName: string = 'Machine à laver';
  // appareilStatus: string = 'éteint';

  // @Input() appareils:any=[];

  @Input() appareilName: string;
  @Input() postName: string;
  @Input() postContent: string;

  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    // return this.appareilStatus;
  }

  onAllumer() {
    alert('On allume tout !');
  }

}
