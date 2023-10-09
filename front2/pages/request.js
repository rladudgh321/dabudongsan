import React, { useState, useCallback } from 'react';
import { List, Space} from 'antd';
import AppLayout from '@/components/AppLayout';
import Location from '@/requestPage/Location';
import BuyType from '@/requestPage/BuyType';
import PriceHope from '@/requestPage/PriceHope';
import LandType from '@/requestPage/LandType';
import InfoRequest from '@/requestPage/InfoRequest'
const request = () => {
    return (
        <>
            <AppLayout>
                <List
                    bordered
                    header={<>
                    <div style={{display:'flex', paddingBottom:0}}>
                        <div style={{ border:'1px solid silver', padding:'5px', borderRadius:'5px'}}>구해요</div>
                        <div style={{ border:'1px solid silver', padding:'5px', borderRadius:'5px'}}>팔아요</div>
                    </div></>}
                    style={{padding:'10px'}}
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