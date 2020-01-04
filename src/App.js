import React from 'react';
import Router from './router/Index'
import {columns, data} from './table/Table.jsx'
import { Table } from 'antd';
import {WrappedNormalLoginForm } from './components/from/From'
import './App.css';
import { Dropdown, Icon } from 'antd';
import { menu } from './components/select/DropDown'
import Date from './components/date/Date'
import {IntegerStep } from './components/slider/Slider'



function App() {
  return (
    <div className="App">
      <Router />
      <Table columns={columns} dataSource={data} />
      <Table columns={columns} dataSource={data} />
      <WrappedNormalLoginForm ></WrappedNormalLoginForm>
      {/* <DragSortingTable ></DragSortingTable> */}
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" href="#">Hover me <Icon type="down" /></a>
      </Dropdown>
      <Date></Date>
      <IntegerStep></IntegerStep>
    </div>
  );
}

export default App;
