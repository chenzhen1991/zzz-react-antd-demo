import React, {useState,useEffect} from 'react';
import CheckCode from "@/components/CheckCode";
import TabNews from "@/components/TabNews";
import CheckboxList from "../../components/CheckboxList";

const TabsArr = [
  {
    id:1,
    title:'标签一',
    content:"一起存在",
    contentHtml: '<p>我是用标签包裹的内容</p>',
    selected: true,
  },
  {
    id:2,
    title:'标签二',
    content: '内容二',
    selected: false,
  },
  {
    id:3,
    title:'标签三',
    content: '内容三',
    selected: false,
  },
]

const items = [
  {
    label:'苹果',
    id:1,
  },
  {
    label:'栗子',
    id:2,
  },
  {
    label:'梨子',
    id:3,
  },
];
const Demo = () => {
  const [code, setCode] = useState();
  const [tabArr,setTabArr] = useState(TabsArr)
  const onGetCode = (code) => {
    setCode(code)
  }
  // useEffect(()=> {
  //
  // }, [code])

  const onChangeItem = (v)=>{
    console.log(v)
    setTabArr(v)
  }

  const [checkeds, setCheckeds] = useState([])
  const getCheckedArrId = (v)=>{
    setCheckeds(v)
  }
  useEffect(() => {
    if(checkeds){
      getCheckedArrId(checkeds)
    }
  }, [checkeds])
  return(
    <>
      <CheckCode onGetCode={(v)=>onGetCode(v)} />
      <TabNews tabsData={tabArr} onChangeItem={(v)=>onChangeItem(v)} />
      <CheckboxList items={items} values={checkeds} onChangeInput={(v)=> getCheckedArrId(v)} />
    </>
  )
}

export default Demo;
