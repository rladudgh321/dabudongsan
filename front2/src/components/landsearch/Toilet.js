import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Toilet = ({toilet='0', onChangeToilet, setToilet}) => {
  const { addLandDone } = useSelector((state) => state.land);
  const [ toil, setToil ] = useState(toilet);
  
    const items = [
        {
          label: '화 0개',
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
        setToil(e.key);
        setToilet(`화 ${e.key}개`);
    };
    const menuProps = {
        items,
        onClick: handleMenuClick,
        onChange: onChangeToilet,
    };
    useEffect(() => {
      if(addLandDone) {
        setToil(0);
      }
    },[addLandDone]);
    return (
        <>
            <Dropdown menu={menuProps}>
                <Button>
                    <Space style={{ display:'flex' }}>
                    <div>{`화 ${toil}개`}</div>
                    <DownOutlined />
                    </Space>
                </Button>
            </Dropdown>
        </>
    );
}

export default Toilet;