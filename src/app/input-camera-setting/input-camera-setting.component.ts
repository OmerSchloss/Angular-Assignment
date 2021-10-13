import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-camera-setting',
  templateUrl: './input-camera-setting.component.html',
  styleUrls: ['./input-camera-setting.component.css'],
})
export class InputCameraSettingComponent implements OnInit {
  showPortal=false;
  camera = {
    IP: '',
    port: '',
    user: '',
    password: '',
  };
  onSubmitTemplateBased() {
    if (this.showPortal) {
      this.showPortal = false;
    } else {
      this.showPortal = true;
    }
    
  }
  constructor() {}

  ngOnInit() {}
}
