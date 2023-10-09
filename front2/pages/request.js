import React, { useState, useCallback } from 'react';
import { List, Space} from 'antd';
import AppLayout from '@/components/AppLayout';
import Location from '@/requestPage/Location';
import BuyType from '@/requestPage/BuyType';
import PriceHope from '@/requestPage/PriceHope';
import LandType from '@/requestPage/LandType';
import InfoRequest from '@/requestPage/InfoRequest'
const request = () => {
    const [btnState_Buy, setter_Buy] = useState(true);
    const [btnState_Sell, setter_Sell] = useState(true);
    const clickBtn_Buy = useCallback((e)=>{
        setter_Buy((prev)=>!prev);
        console.log(e.target.innerText, btnState_Buy);
    },[btnState_Buy]);
    const clickBtn_Sell = useCallback((e)=>{
        setter_Sell((prev)=>!prev);
        console.log(e.target.innerText, btnState_Sell);
    },[btnState_Sell]);
    return (
        <>
            <AppLayout>
                <List
                    bordered
                    header={<>
                    <div style={{display:'flex', paddingBottom:0}}>
                        {btnState_Buy ? <div style={{ border:'1px solid silver', padding:'5px', borderRadius:'5px', cursor:'pointer'}} onClick={clickBtn_Buy}>구해요</div> :<div style={{ border:'1px solid silver', padding:'5px', borderRadius:'5px', cursor:'pointer', background:'silver'}} onClick={clickBtn_Buy}>구해요</div>}
                        {btnState_Sell ? <div style={{ border:'1px solid silver', padding:'5px', borderRadius:'5px', cursor:'pointer'}} onClick={clickBtn_Sell}>팔아요</div> : <div style={{ border:'1px solid silver', padding:'5px', borderRadius:'5px', cursor:'pointer', background:'silver'}} onClick={clickBtn_Sell}>팔아요</div>}
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