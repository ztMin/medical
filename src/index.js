import React from 'react';
import ReactDOM from 'react-dom';
import './style/reset.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // useParams,
  // useRouteMatch,
  // useLocation
} from "react-router-dom";
import loadable from "@loadable/component";
const Loading = () => <div>加载中...</div>
const LoadableComponent = loadable(({Component}) => {
  console.log('Component', Component)
  return Component
}, {
  fallback: <Loading />
});
function App(props) {
  return (
    <Router>
      <Switch>
        <Route path="/"><LoadableComponent Component={import('./page/Index')} /></Route>
        <Route path="/test"><LoadableComponent Component={import('./page/Test')} /></Route>
        <Route path="*">404</Route>
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
