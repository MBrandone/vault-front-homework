import { Notification } from '../domain/notifications';
import { Information } from './svg/Information';

export function NotificationCard({ notification }: { notification: Notification }) {
	return <div
		className="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400">
		<Information/>
		<div className="text-ellipsis overflow-hidden">
			<span className="font-medium">Vous avez reçu la notification suivante :</span>
			<ul className="mt-1.5 ml-4 list-disc list-inside">
				<li>ID: {notification.id}</li>
				<li>Type: {notification.type}</li>
				{Object.keys(notification.data).map(key => {
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore TODO traiter des objets + précis
					return <li key={key}>{`${key}: ${notification.data[key]}`}</li>;
				})}
			</ul>
		</div>
	</div>;
}