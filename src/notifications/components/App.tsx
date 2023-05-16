import { QueryClient, QueryClientProvider } from 'react-query';
import SearchableList from './SearchableList/SearchableList';
import { APINotifications } from '../infrastructure/api-notifications';

const queryClient = new QueryClient();
const notifications = new APINotifications();

export function App() {
	return <QueryClientProvider client={queryClient}>
		<SearchableList notifications={notifications}/>
	</QueryClientProvider>;
}