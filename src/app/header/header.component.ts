import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() mediaXs:boolean;

  @Output() menuToggle = new EventEmitter();



  constructor() { }

  ngOnInit(): void {
  }

  toggleMenuHandler(){
    this.menuToggle.emit('toggle');
  }

}
