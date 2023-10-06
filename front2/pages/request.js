import React, { useCallback } from 'react';
import { Button, List, Dropdown, Space } from 'antd';
import AppLayout from '@/components/AppLayout';
const request = () => {
    const chilgok = [{
        key:'1',
        label:'지천면'
    },{
        key:'2',
        label:'왜관읍'
    },{
        key:'3',
        label:'가산면'
    },{
        key:'4',
        label:'동명면'
    },{
        key:'5',
        label:'석적읍'
    },{
        key:'6',
        label:'북삼읍'
    },{
        key:'7',
        label:'약목면'
    },{
        key:'8',
        label:'기산면'
    }];
    const onMenuClick = useCallback((e) => {
        console.log('click', e);
      },[]);
    return (
        <>
            <AppLayout>
                <List
                    bordered
                >
                    <Space direction="vertical" >
                        <List.Item>
                            <h3>거래 종류</h3>
                            <div>
                                <Button.Group>
                                    <Button>분양</Button>
                                    <Button>매매</Button>
                                    <Button>전세</Button>
                                    <Button>월세</Button>
                                </Button.Group>
                            </div>
                        </List.Item>
                        <List.Item>
                            <div>위치</div>
                            <div>
                                <div><Button>경북 칠곡군</Button></div>
                                <div>
                                <Dropdown.Button
                                    menu={{
                                        items:chilgok,
                                        onClick: onMenuClick,
                                    }}
                                    >
                                    <div>읍/면</div>
                                </Dropdown.Button>
                                </div>
                            </div>
                            
                        </List.Item>
                    </Space>
                </List>
            </AppLayout>
        </>
    );
}

export default request;

/*
import React from 'react';
import { Button, Dropdown, Space } from 'antd';
const onMenuClick = (e) => {
  console.log('click', e);
};
const items = [
  {
    key: '1',
    label: '1st item',
  },
  {
    key: '2',
    label: '2nd item',
  },
  {
    key: '3',
    label: '3rd item',
  },
];
const App = () => (
  <Space direction="vertical">
    <Dropdown.Button
      menu={{
        items,
        onClick: onMenuClick,
      }}
    >
      Actions
    </Dropdown.Button>
  </Space>
);
export default App;
*/