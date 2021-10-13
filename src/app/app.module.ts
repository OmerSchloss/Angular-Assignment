import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputCameraSettingComponent } from './input-camera-setting/input-camera-setting.component';
import { CameraFeedComponent } from './camera-feed/camera-feed.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    InputCameraSettingComponent,
    CameraFeedComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
