import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { SidebarComponent } from '../sidebar/sidebar.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'testing-app';
  mediaSub:Subscription;
  mediaXs:boolean;
  constructor(public mediaObserver:MediaObserver){

  }

  @ViewChild('sideNav') sideNav:SidebarComponent;

  ngOnInit(){
    this.mediaSub = this.mediaObserver.media$.subscribe((result : MediaChange) => {
      result.mqAlias == 'xs' ? this.mediaXs = true: this.mediaXs = false;
      console.log(result.mqAlias)
    });

  }
  toggleMenuHandler(e){
    console.log(e);
    this.sideNav.toggleMenuFuncton();
  }
  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }
}
