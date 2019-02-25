import React from 'react';
import './App.css';
import Display from './Display';

function App() {
	return (
		<div className="App">
			<div className="container">
				<Display />
			</div>
			<footer role="contentinfo" className="Footer">
				<p>
					Made with <i className="material-icons">favorite</i> for React by &nbsp;
					<a href="https://www.kushaljain.com">
						<em>Kushal Jain</em>
					</a>
				</p>
			</footer>
		</div>
	);
}

export default App;
