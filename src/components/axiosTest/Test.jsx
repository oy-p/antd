import React, { Component } from 'react';
import { getArticles } from '../../api/textList'
import { Table } from 'antd'

class Test extends Component {
    constructor () {
        super()
        this.state = {
          name: {
            id: 'id',
            title: '标题',
            author: '作者',
            amout: '阅读量',
            createAt: '时间'
          },
            dataSource : [
                {
                  key: '1',
                  name: '胡彦斌',
                  age: 32,
                  address: '西湖区湖底公园1号',
                },
                {
                  key: '2',
                  name: '胡彦祖',
                  age: 42,
                  address: '西湖区湖底公园1号',
                },
            ],
            columns : [
                {
                  title: '姓名',
                  dataIndex: 'name',
                  key: 'name',
                },
                {
                  title: '年龄',
                  dataIndex: 'age',
                  key: 'age',
                },
                {
                  title: '住址',
                  dataIndex: 'address',
                  key: 'address',
                },
              ],
              total: 0
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.getList.bind(this)}>获取文章列表</button>
                <Table 
                  columns={this.state.columns}
                  dataSource={this.state.dataSource}                  
                  pagination={{
                    total: this.state.total
                  }}
                  ></Table>
            </div>
        );
    }
    getList () {
      getArticles().then(resp => {
        const columns = Object.keys(resp.list[0]).map(item => {
          return {
            title: this.state.name[item],
            dataIndex: item,
            key: item,
          }
        })

        this.setState({
          total: resp.total,
          columns,
          dataSource: resp.list
        })
        
      })
    }
}

export default Test;