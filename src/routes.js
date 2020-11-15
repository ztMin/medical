function Top(props) {
  return <div className="top">{props.children}</div>
}
export default {
  component: Top,
  childRoutes: [
    {
      path: '/',
      getComponent: import('./page/Index')
    },
    {
      path: '/test',
      getComponent: import('./page/Test')
    }
  ]
}