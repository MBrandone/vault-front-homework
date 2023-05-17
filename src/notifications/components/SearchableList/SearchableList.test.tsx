import { test, describe } from 'vitest';
import SearchableList from './SearchableList';
import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Notification, Notifications } from '../../domain/notifications';
import userEvent from '@testing-library/user-event';

export const notification1: Notification = {
	id: 'id_brm',
	type: 'test',
	data: {
		currency: '$',
		id: 'DOLLARS',
		name: 'CURRENCY'
	}
};

export const notification2: Notification = {
	id: 'id_brm_2',
	type: 'test_2',
	data: {
		currency: '$',
		id: 'DOLLARS',
		name: 'CURRENCY'
	}
};

const queryClient = new QueryClient();

describe('permet de rechercher des notifications', () => {
	test('doit afficher les notifications initiales, sans texte de recherche', async () => {
		// given
		const mockNotifications: Notifications = { getBySearchedText: () => Promise.resolve([notification1]) };
		const getBySearchedTextSpy = vi.spyOn(mockNotifications, 'getBySearchedText');

		// When
		render(
			<QueryClientProvider client={queryClient}>
				<SearchableList notifications={mockNotifications}/>
			</QueryClientProvider>);

		// Then
		await waitFor(() => {
			expect(screen.getByText('ID: id_brm')).toBeInTheDocument();
			expect(screen.getByText('Type: test')).toBeInTheDocument();
			expect(screen.getByText('currency: $')).toBeInTheDocument();
			expect(screen.getByText('id: DOLLARS')).toBeInTheDocument();
			expect(screen.getByText('name: CURRENCY')).toBeInTheDocument();
		});
		expect(getBySearchedTextSpy).toHaveBeenCalledTimes(1);
	});

	test('doit relancer une recherche quand le texte change', async () => {
		// given
		const mockNotifications: Notifications = { getBySearchedText: (searchedText) => {
			if (searchedText === '') {
				return Promise.resolve([notification1]);
			}
			return Promise.resolve([notification2]);
		} };
		const getBySearchedTextSpy = vi.spyOn(mockNotifications, 'getBySearchedText');
		render(
			<QueryClientProvider client={queryClient}>
				<SearchableList notifications={mockNotifications}/>
			</QueryClientProvider>);

		// When
		await userEvent.setup().type(screen.getByRole('searchbox'), 'a');

		// Then
		expect(screen.getByText('ID: id_brm_2')).toBeInTheDocument();
		expect(screen.getByText('Type: test_2')).toBeInTheDocument();
		expect(screen.getByText('currency: $')).toBeInTheDocument();
		expect(screen.getByText('id: DOLLARS')).toBeInTheDocument();
		expect(screen.getByText('name: CURRENCY')).toBeInTheDocument();
		expect(getBySearchedTextSpy).toHaveBeenCalledTimes(2);
	});

	test('doit afficher "Aucun résultat trouvé" quand aucune notification est trouvé', async () => {
		// given
		const mockNotifications: Notifications = { getBySearchedText: () => Promise.resolve([]) };
		const getBySearchedTextSpy = vi.spyOn(mockNotifications, 'getBySearchedText');

		// When
		render(
			<QueryClientProvider client={queryClient}>
				<SearchableList notifications={mockNotifications}/>
			</QueryClientProvider>);

		// Then
		await waitFor(() => {
			expect(screen.getByText('Aucun résultat trouvé')).toBeInTheDocument();
		});
		expect(getBySearchedTextSpy).toHaveBeenCalledTimes(1);
	});
});