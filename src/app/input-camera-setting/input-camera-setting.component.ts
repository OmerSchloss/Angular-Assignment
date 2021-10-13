import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../popup-window';

@Component({
  selector: 'app-input-camera-setting',
  templateUrl: './input-camera-setting.component.html',
  styleUrls: ['./input-camera-setting.component.css'],
})
export class InputCameraSettingComponent implements OnInit {
  showPortal=false;
  camera = {
    IP: '10.0.0.15',
    port: '554',
    user: 'admin',
    password: '123456',
  };

  constructor(private modalService: ModalService) { }

  ngOnInit() {}

  openModal(id: string) {
      this.modalService.open(id);
  }

  closeModal(id: string) {
      this.modalService.close(id);
  }
}

