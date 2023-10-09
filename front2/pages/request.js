import React, { useState, useCallback } from 'react';
import { List, Space, Button} from 'antd';
import AppLayout from '@/components/AppLayout';
import Location from '@/requestPage/Location';
import BuyType from '@/requestPage/BuyType';
import PriceHope from '@/requestPage/PriceHope';
import LandType from '@/requestPage/LandType';
import InfoRequest from '@/requestPage/InfoRequest'
const request = () => {
    const [selectedButton, setSelectedButton] = useState(null);
    const handleButtonClick = useCallback((buttonName) => {
        setSelectedButton(buttonName); // 현재 선택한 버튼으로 업데이트
        console.log(buttonName)
    },[selectedButton]);
    return (
        <>
            <AppLayout>
                <List
                    bordered
                    header={<>
                    <Button.Group>
                    <Button
                        type={selectedButton === '아파트' ? 'primary' : 'default'}
                        onClick={() => handleButtonClick('아파트')} key='apart'>아파트
                    </Button>
                    <Button
                        type={selectedButton === '신축빌라' ? 'primary' : 'default'}
                        onClick={() => handleButtonClick('신축빌라')} key='villa'>신축빌라
                    </Button>
                    </Button.Group>
                    </>}
                    style={{padding:'10px', margin:'20px 10px 0 10px'}}
                >
                    <Space direction='vertical'>
                        <List.Item style={{ justifyContent:'normal' }}>
                            <BuyType />
                        </List.Item>
                        <List.Item style={{ justifyContent:'normal' }}>
                            <Location />
                        </List.Item>
                        <List.Item style={{ justifyContent:'normal' }}>
                            <PriceHope />
                        </List.Item>
                        <List.Item style={{ justifyContent:'normal' }}>
                            <LandType />
                        </List.Item>
                            <InfoRequest />
                    </Space>
                </List>
            </AppLayout>
        </>
    );
}

export default request;