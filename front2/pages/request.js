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
                        type={selectedButton === '구해요' ? 'primary' : 'default'}
                        onClick={() => handleButtonClick('구해요')} key='apart'>구해요
                    </Button>
                    <Button
                        type={selectedButton === '팔아요' ? 'primary' : 'default'}
                        onClick={() => handleButtonClick('팔아요')} key='villa'>팔아요
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