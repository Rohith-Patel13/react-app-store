// Write your code here
import './index.css'

const TabItem = props => {
  const {eachObjectProp, clickedTabBtnProp, isActive} = props
  const {displayText, tabId} = eachObjectProp

  const clickedTabButton = () => {
    clickedTabBtnProp(tabId)
  }

  const borderStyleStatus = isActive ? 'borderStyle' : ''
  const textStyleStatus = isActive ? 'textStyle' : ''

  return (
    <li className={`liTabItemContainer ${borderStyleStatus}`}>
      <button
        type="button"
        className={`tabItemBtn ${textStyleStatus}`}
        onClick={clickedTabButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

// console.log(<TabItem />)
/*
{$$typeof: Symbol(react.element), key: null, ref: null, props: {…}, type: ƒ, …}
$$typeof
: 
Symbol(react.element)
key
: 
null
props
: 
{}
ref
: 
null
type
: 
props => { console.log(props); return null; }
_owner
: 
null
_store
: 
{validated: false}
_self
: 
undefined
_source
: 
columnNumber
: 
13
fileName
: 
"/home/workspace/reactjs/coding-practices/appStore/src/components/TabItem/index.js"
lineNumber
: 
8
[[Prototype]]
: 
Object
[[Prototype]]
: 
Object
*/
