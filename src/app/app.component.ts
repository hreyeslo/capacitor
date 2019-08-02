import { Component, OnInit } from '@angular/core';
import { PushNotificationsService } from './shared/push-notifications/push-notifications.service';

import 'dile-countdown-time';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	date = '31-12-2020 10:00';
	lang = 'es';

	constructor(private _pushNotificationsService: PushNotificationsService) { }

	ngOnInit() {
		setTimeout(() => {
			this._pushNotificationsService.subscribeToNotifications();
		}, 2000);
	}

}
