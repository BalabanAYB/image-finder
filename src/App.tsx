import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav'

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
		<Header />
		<Nav />
		<div id='content' className='content'>
		</div>
		<Footer />
    </div>
  );
}

export default App;
