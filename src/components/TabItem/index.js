import './index.css'

const TabItem = props => {
  const {eachtab, tabChange} = props
  const {tabId, displayText} = eachtab
  const changeTab = () => {
    tabChange(tabId)
  }
  return (
    <li className="tab-list" id={tabId}>
      <button className="button" type="button" onClick={changeTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
