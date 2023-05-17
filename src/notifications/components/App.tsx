import { QueryClient, QueryClientProvider } from 'react-query';
import SearchableList from './SearchableList/SearchableList';

import { APINotifications } from '../infrastructure/api-notifications';
//import { InMemoryNotifications } from '../infrastructure/in-memory-notifications';

const queryClient = new QueryClient();

const notifications = new APINotifications();
//const notifications = new InMemoryNotifications();

export function App() {
	return <QueryClientProvider client={queryClient}>
		<SearchableList notifications={notifications}/>
	</QueryClientProvider>;
}