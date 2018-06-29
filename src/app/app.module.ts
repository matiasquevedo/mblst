import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ItinerarioPage } from '../pages/itinerario/itinerario';
import { ListPage } from '../pages/list/list';
import {ScrollingHeaderModule} from 'ionic-scrolling-header';
import { ShrinkingSegmentHeader } from '../components/shrinking-segment-header/shrinking-segment-header';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ItinerarioPage,
    ShrinkingSegmentHeader
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ScrollingHeaderModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ItinerarioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
