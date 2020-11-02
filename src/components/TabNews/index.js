import React from 'react';
import './style.less'

const TabNews = (props) => {
  const {tabsData} = props;
  const changeTabIndex = (v) => {
    const newData = props.tabsData.map((item, index) => {
       return item.id === v ? {...item, selected: true} : {...item, selected: false}
    })
    props.onChangeItem(newData)
  }
  return(
    <div className="tabs">
      <ul>
        {tabsData.map((item, index)=> {
          return(
            <li key={item.id} className={item.selected? 'active' : ""} onClick={()=>changeTabIndex(item.id)}>
              {item.title}
            </li>
          )
        })}
      </ul>
      <div className="content">
        {tabsData.map((item, index)=> {
          return(
            <div key={item.id} className={item.selected? 'active' : ""}>
              {item.content}
              {item.contentHtml && <p dangerouslySetInnerHTML={{ __html: item.contentHtml}} />}
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default TabNews;
