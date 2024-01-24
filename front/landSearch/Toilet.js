import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';
import { useState } from 'react';

const Toilet = ({setToilet}) => {
  const [ toil, setToil ] = useState(0);
    const items = [
        {
          label: '화',
          key: '0',
        },
        {
          label: '화 1개',
          key: '1',
        },
        {
          label: '화 2개',
          key: '2',
        },
        {
          label: '화 3개',
          key: '3',
        },
        {
          label: '화 4개',
          key: '4',
        },
        {
          label: '화 5개',
          key: '5',
        },
        {
          label: '화 6개',
          key: '6',
        },
      ];
    const handleMenuClick = (e) => {
        // message.info('Click on menu item.');
        setToil(e.key);
        console.log(e.key);
        setToilet('화 ' + e.key + '개');
    };
    const menuProps = {
        items,
        onClick: handleMenuClick,
    };
    return (
        <>
            <Dropdown menu={menuProps}>
                <Button>
                    <Space style={{ display:'flex' }}>
                    <div>{'화' + toil + '개'}</div>
                    <DownOutlined />
                    </Space>
                </Button>
            </Dropdown>
        </>
    );
}

export default Toilet;