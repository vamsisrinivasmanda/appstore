import './index.css'

const AppItem = props => {
  const {eachapp} = props
  const {appId, appName, imageUrl, category} = eachapp
  return (
    <li className="list-apps" id={appId}>
      <img src={imageUrl} className="app-logo" alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
