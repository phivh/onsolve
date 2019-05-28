import React, {lazy, Suspense} from 'react';
import Header from "./components/Header";
import Main from "./containers/main";
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

const DetailLazy = lazy(() => import('./containers/detailContainer'));

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div>loading...</div>}>
            <Header />
            <Main />
            <Route path="/detail/:id" render={(props) => <DetailLazy {...props} />} />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
