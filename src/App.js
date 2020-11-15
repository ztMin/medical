import logo from './logo.svg';
import './style/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // useParams,
  // useRouteMatch,
  // useLocation
} from "react-router-dom";
import loadable from "@loadable/component";
import route from './routes'
const Loading = () => <div>加载中...</div>
const LoadableComponent = loadable((props) => {
  console.log('LoadableComponent', props)
  return props.getComponent ? props.getComponent : props.children
}, {
  fallback: <Loading />
});
console.log('routes', route)
function App(props) {
  let routes = Array.isArray(route) ? route : [route]
  return (
    <Router>
      <Switch>
        {/* <Route path="/"><LoadableComponent path="index" /></Route> */}
        {routes.map((item, key) => <RouterChild {...props} route={item} key={key} />)}
        <Route path="*"><div>404</div></Route>
      </Switch>
    </Router>
  );
}
function RouterChild(props) {
  let {route} = props
  return (
    <>
      {route.path ? <Route path={route.path}><RouteItem {...props} route={route} /></Route> : <RouteItem {...props} route={route} />}
    </>
  )
}
function RouteItem(props) {
  console.log('RouteItem', props)
  let {route} = props
  let Component = route.component
  let Child = (route.childRoutes || []).map((item, key) => <RouterChild {...props} route={item} key={key} />)
  return Component ? <Component {...props}>{Child}</Component> : <LoadableComponent {...route}>{Child}</LoadableComponent>
}
// function Child() {
//   // We can use the `useParams` hook here to access
//   // the dynamic pieces of the URL.
//   let { id } = useParams();
//   let { path, url } = useRouteMatch();
//   let loc = useLocation()
//   console.log('loc', loc)
//   console.log('path', path)
//   console.log('url', url)
//   console.log('id', id)
//   let Index = 'Index'
//   try {
//     let e = import(`./page/${Index}`)
//     let key = `./src/page lazy recursive ^\\.\\/.*$`
//     let keys = Object.keys(window.webpackJsonpmedical[1][1])
//     console.log('e', keys)
//     // Promise.all([import(`./page/${Index}`)]).then((...arg) => {
//     //   console.log('加载成功', arg)
//     // }).catch(error => {
//     //   console.log('加载异常', error)
//     // })
//   } catch (error) {
//     console.log('err', error)
//   }
//   return (
//     <div>
//       <h3>ID: {url}</h3>
//     </div>
//   );
// }
export default App;
