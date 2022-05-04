import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './presentation/Home';
import Notfound from './presentation/404';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="404" element={<Notfound />} />
			<Route path="*" element={<Navigate to="404" />} />
		</Routes>
	);
};

export default App;
