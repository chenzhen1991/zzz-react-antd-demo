import React from 'react';
import { Spin } from 'antd';
const LoadingPages = () => {
  return(
    <div style={{display: 'flex',height: '100vh', alignItems: 'center','justifyContent': 'center'}}><Spin size="large" /></div>
  )
}

export default LoadingPages;
