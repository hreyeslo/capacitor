import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Injectable({
	providedIn: 'root'
})
export class PushNotificationsService {

	private readonly VAPID_PUBLIC_KEY = 'BOV5IZz-Z8wViMfOZ_HwD32FrfJUpUgi0u17een10UzNuPnT4dmbez8KCj2hdq2yrftbsu0XlOEDgL7rQWldRR8';

	constructor(private _swPush: SwPush) { }

	subscribeToNotifications() {
		this._swPush.requestSubscription({ serverPublicKey: this.VAPID_PUBLIC_KEY })
			.catch(err => console.error('Could not subscribe to notifications', err));
	}
}



