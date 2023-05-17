import { useState } from 'react';
import { useQuery } from 'react-query';
import { Notification, Notifications } from '../../domain/notifications';
import { SearchedTextInput } from '../SearchedTextInput';
import { Spinner } from '../Spinner';
import { NotificationCard } from '../NotificationCard';

type SearchableListProps = {
	notifications: Notifications
}

const SearchableList = ({ notifications }: SearchableListProps) => {
	const [searchedText, setSearchedText] = useState('');

	const { isLoading, data } = useQuery({
		queryKey: ['notifications', searchedText],
		queryFn: () => notifications.getBySearchedText(searchedText)
	});

	return <>
		<h1 className="mb-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
			Notifications Searcher
		</h1>

		<section>
			<>
				<div className="mb-4">
					<SearchedTextInput value={searchedText} onChange={(value) => setSearchedText(value)}/>
				</div>
				{isLoading && <Spinner/>}
				{data && data.length > 0 ? (
					data.map((notification: Notification) => (
						<NotificationCard key={notification.id} notification={notification}/>
					)))
					: <div>Aucun résultat trouvé</div>
				}
			</>
		</section>
	</>;
};

export default SearchableList;
