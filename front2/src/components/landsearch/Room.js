import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const Room = ({room='0', onChangeRoom, setRoom}) => {
  const { addLandDone } = useSelector((state) => state.land);
  const [rom, setRom] = useState(room);

    const items = [
        {
          label: '방 0개',
          key: '0',
        },
        {
          label: '방 1개',
          key: '1',
        },
        {
          label: '방 2개',
          key: '2',
        },
        {
          label: '방 3개',
          key: '3',
        },
        {
          label: '방 4개',
          key: '4',
        },
        {
          label: '방 5개',
          key: '5',
        },
        {
          label: '방 6개',
          key: '6',
        },
      ];
    const handleMenuClick = (e) => {
        setRom(e.key);
        setRoom(`방 ${e.key}개`);
    };
    const menuProps = {
        items,
        onClick: handleMenuClick,
        onChange: onChangeRoom,
    };
    useEffect(() => {
      if(addLandDone) {
        setRom(0);
      }
    },[addLandDone]);
    return (
        <>
            <Dropdown menu={menuProps}>
                <Button>
                    <Space style={{ display:'flex' }}>
                    <div>{`방 ${rom}개`}</div>
                    <DownOutlined />
                    </Space>
                </Button>
            </Dropdown>
        </>
    );
}

export default Room;