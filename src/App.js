import React from 'react';
import Router from './router/Index'
import {columns, data} from './table/Table.jsx'
import { Table } from 'antd';
import {WrappedNormalLoginForm } from './components/from/From'
// import { DragSortingTable } from './components/from/Drag'
import './App.css';


function App() {
  return (
    <div className="App">
      <Router />
      <Table columns={columns} dataSource={data} />
      <Table columns={columns} dataSource={data} />
      <WrappedNormalLoginForm ></WrappedNormalLoginForm>
      {/* <DragSortingTable ></DragSortingTable> */}
    </div>
  );
}

export default App;
