import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-camera-feed',
	template: `
  <div>
	<video id="device" controls autoplay #remote>
	</video>
  </div>
  `
})
export class CameraFeedComponent implements OnInit {
	  // @Input() IP: string;
  // @Input() port: number;
  // @Input() user: string;
  // @Input() password: string;
	constructor() { }

	ngOnInit() { }
}
