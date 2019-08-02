import { Component, OnInit } from '@angular/core';
import { PushNotificationsService } from './shared/push-notifications/push-notifications.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	constructor(private _pushNotificationsService: PushNotificationsService) { }

	ngOnInit() {
		setTimeout(() => {
			this._pushNotificationsService.subscribeToNotifications();
		}, 2000);
	}

}
