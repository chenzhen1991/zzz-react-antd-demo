import React, {useState, useEffect} from 'react';
import './style.less';

/* 这个组件主要是巧妙的利用 input以及与input输入值以后的一个双向绑定的过程 */
const initCode = [1,2,2,2,2,2];
const CheckCode = (props) => {
  const [code, setCode] = useState()
  const changeCode = (e) => {
    setCode(e.target.value)
    if(e.target.value && e.target.value.length === 6){
      props.onGetCode(e.targaet.value)
    }
  }
  useEffect(()=> {

  }, [code])

  return(
    <div className="check-code">
      <ul>
        {initCode.map((item, index) => {
          return(
            <li key={index}>{code && code[index]}</li>
          )
        })}
      </ul>
      <input type="text" maxLength="6" value={code} onChange={(e)=>changeCode(e)} />
    </div>
  )
}
export default CheckCode;
