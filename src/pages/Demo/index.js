import React, {useState,useEffect} from 'react';
import CheckCode from "@/components/CheckCode";

const Demo = () => {
  const [code, setCode] = useState()
  const onGetCode = (code) => {
    setCode(code)
  }
  // useEffect(()=> {
  //
  // }, [code])
  console.log(code)
  return(
    <>
      <CheckCode onGetCode={(v)=>onGetCode(v)} />
    </>
  )
}

export default Demo;
