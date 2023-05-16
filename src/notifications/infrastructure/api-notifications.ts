import { Notification, Notifications } from '../domain/notifications';

const API_URL = 'http://localhost:5000';

export class APINotifications implements Notifications {
	async getBySearchedText(searchedText: string): Promise<Notification[]> {
		const response = await fetch(`${API_URL}/search?q=${searchedText}`);
		return await response.json();
	}
}