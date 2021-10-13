import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Camera } from '../camera-details';
// import {JSMpeg} from 'jsmpeg-player';

@Component({
	selector: 'app-camera-feed',
	template: `
			<div>
				<!-- <h1>:</h1> -->
				<video #video width="640" height="480"  controls autoplay></video>
			</div>
			`
})
export class CameraFeedComponent implements OnInit {

	// @ViewChild('video') video:any;
	// @ViewChild('video') video: any; 
	// @Input() cam: Camera;
	@Input() camera!: Camera;
	constructor() { 
		
	}

	ngOnInit() {
		// let _video=this.video.nativeElement;
		// if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
		//   navigator.mediaDevices.getUserMedia({ video: true })
		// 						.then(stream => {
		// 						  _video.src = window.URL.createObjectURL(stream);
		// 						  _video.play();
		// 						})
		// }
		// let player = new JSMpeg.Player('ws://10.0.0.15:7681', {
		// 	video: this.video.nativeElement, autoplay: true, audio: false, loop: true
		//   })
	 }
}
