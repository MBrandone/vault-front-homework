import { MagnifyingGlass } from './svg/MagnifyingGlass';

export function SearchedTextInput(props: { value: string, onChange: (value: string) => void }) {
	return <>
		<label htmlFor="default-search" id="search-notifications-label" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search notifications</label>
		<div className="relative">
			<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
				<MagnifyingGlass/>
			</div>
			<input aria-labelledby="search-notifications-label" type="search" id="default-search"
				className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="Type to filter events" value={props.value}
				onChange={(event) => props.onChange(event.target.value)}/>
		</div>
	</>;
}