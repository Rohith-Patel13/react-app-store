// Write your code here
import './index.css'

const AppItem = props => {
  const {eachObjectItemProp} = props
  const {imageUrl, appName} = eachObjectItemProp
  return (
    <li className="liTabContainer">
      <img src={imageUrl} alt={appName} className="tabItemImage" />
      <p className="itemName">{appName}</p>
    </li>
  )
}

export default AppItem
