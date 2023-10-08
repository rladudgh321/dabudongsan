import AppLayout from '@/components/AppLayout';
import React, { useState } from 'react';
import { List } from 'antd';
import { useSelector } from 'react-redux';
import { Space, Table, Tag,  } from 'antd';

const note = () => {
    const { notePost } = useSelector((state) => state.post);
    const columns = [
        {
          title: '번호',
          dataIndex: 'id',
          key: 'id',
          sorter: (a, b) => a.id - b.id,
          defaultSortOrder:'descend',
          showSorterTooltip:'false',
        },
        {
          title: '제목',
          dataIndex: 'title',
          key: 'title',
          render: (text) => <a>{text}</a>,
        },
        {
          title: '작성자',
          dataIndex: 'user',
          key: 'user',
        },
        {
          title: '등록일',
          dataIndex: 'createdAt',
          key: 'createdAt',
        },
      ];
      const data = notePost.map((v) => ({
          key: v.id,
          id: v.id,
          title: v.title,
          user: '관리자',
          createdAt: v.createdAt,
      }));
      const pagination = {
        defaultCurrent:1,
        total:notePost.length,
        position: ['bottomCenter'],
      }
    return (
        <>
            <AppLayout>
                
                <List
                    bordered
                    header="공지사항"
                    style={{padding:'30px'}}
                >
                    
                        <Table 
                        pagination={pagination}
                        columns={columns} dataSource={data}>
                            <Table.Column sortOrder='descend' />
                        </Table>
                </List>
            </AppLayout>
        </>
    );
}

export default note;

/*


import React from 'react';
import { Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const App = () => <Table columns={columns} dataSource={data} />;
export default App;
*/