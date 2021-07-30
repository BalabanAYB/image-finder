import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ImagePageContainer from './Components/ImagePage/ImagePageContainer';
import SavedImagePage from './Components/SavedImagePage/SavedImagePage';
import Nav from './Components/Nav/Nav'

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
		<Header />
		<Nav />
		<div id='content' className='content'>
			<Route exact path='/' component={ImagePageContainer} />
			<Route exact path='/search' component={ImagePageContainer} />
			<Route exact path='/save_image' component={SavedImagePage} />
		</div>
		<Footer />
    </div>
  );
}

export default App;
