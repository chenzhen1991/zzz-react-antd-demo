import React from 'react';
import { useHistory , Link } from 'react-router-dom';

import { Table} from 'antd';
// import Highlighter from 'react-highlight-words';
// import { SearchOutlined } from '@ant-design/icons';
import './style.less'

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

const ContactControll = (props) => {
  const history = useHistory()
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '20%',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '操作',
      dataIndex: 'do',
      key: 'do',
      render: (text, record, index) => {
        return(
          <div key={record.age}><Link className="do detail" to={`/control/detail/${record.key}`} style={{paddingRight: "5px"}}>详情</Link><span className="do">|</span><span className="do edit" onClick={()=>gotoEdit(record)} style={{paddingLeft: "5px"}}>编辑</span></div>
        )
      },
    },
  ];
  const gotoEdit = (record) => {
    history.push(`/control/detail/${record.key}`)
  }
  return(
    <div className="contact">
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default ContactControll;
