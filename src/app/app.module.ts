import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputCameraSettingComponent } from './input-camera-setting/input-camera-setting.component';
import { CameraFeedComponent } from './camera-feed/camera-feed.component';
import { ModalModule } from './popup-window';/********************************************** */

@NgModule({
  imports: [BrowserModule, FormsModule,ModalModule,],
  declarations: [
    AppComponent,
    InputCameraSettingComponent,
    CameraFeedComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
