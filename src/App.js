import React, {lazy, Suspense} from 'react';
import Header from "./components/Header";
import Home from "./containers/homeContainer";
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

const DetailLazy = lazy(() => import('./containers/detailContainer'));

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div>loading...</div>}>
            <Header />
            <Route path='/:page?' component={Home} />
            <Route path="/detail/:id" render={(props) => <DetailLazy {...props} />} />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
