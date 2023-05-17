import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { App } from './notifications/components/App';

if (import.meta.env.DEV) {
	import('@axe-core/react').then(async axe => {
		await axe.default(React, ReactDOM, 1000);
	});
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App/>
	</React.StrictMode>,
);
