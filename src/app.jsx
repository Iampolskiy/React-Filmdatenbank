import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import Movie from './components/Movie';
//import LocationFinder from './components/LocationFinder';
import MoviesFinder from './components/MoviesFinder';
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<HelmetProvider>
			<MoviesFinder />
		</HelmetProvider>
	</React.StrictMode>
);