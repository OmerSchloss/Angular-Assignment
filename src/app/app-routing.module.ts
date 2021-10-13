import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CameraFeedComponent } from './camera-feed/camera-feed.component';
import { InputCameraSettingComponent } from './input-camera-setting/input-camera-setting.component';

const routes: Routes = [
  {path: '', component: InputCameraSettingComponent},
  {path: 'feed', component: CameraFeedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
