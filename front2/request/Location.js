import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Input, Select, Space } from 'antd';
import { UpdateEumpmeon, UpdateLi, SetLocations } from '@/reducer/location';

const Location = ({setEumpmeon, setLia, setAddress}) => {
    const dispatch = useDispatch();
    const { chilgok, eumpmeon, eupArray, lia } = useSelector((state) => state.location);
    const [ showMore, setShowMore ] = useState(false);
    const handleChange = useCallback((e)=>{
        chilgok.map((v) => {
            if(v.label === e){
                setShowMore(true);
                setEumpmeon(v.label);
                console.log(v.label);
                return dispatch({
                    type: UpdateEumpmeon,
                    data: { eup: v.label, more:v.more },
                });
            }}
        );
    },[eumpmeon]);

    const onVmoreClick = useCallback((e)=>{
        eupArray.map((v) => {
            if(v.value === e){
                setLia(v.label);
                return dispatch({
                    type: UpdateLi,
                    data: v.label,
                })
            }
        });
    },[eupArray, lia]);
    const setLocation = useCallback(()=>{
        return dispatch({
            type:SetLocations
        })
    },[]);
    const [address, setter] = useState('');
    const onChangeAddress = useCallback((e)=>{
        setter(e.target.value);
        setAddress(address);
    },[address]);

    
    return (
        <>
                <div style={{ width: '15vw'}}>위치</div>
                <div style={{ display:'flex' }}>
                    <div><Button onClick={setLocation}>경북 칠곡군</Button></div>
                    <div>
                    <Space wrap>
                        <Select
                        defaultValue="읍/면"
                        style={{
                            width: 120,
                        }}
                        onChange={handleChange}
                        options={chilgok}
                        />
                    </Space>
                    </div>
                    <div>
                        {
                            showMore && <Space wrap>
                            <Select
                            defaultValue="리"
                            style={{
                                width: 120,
                            }}
                            onChange={onVmoreClick}
                            options={eupArray}
                            />
                        </Space>
                        }
                    </div>
                    <div>
                        <Input value={address} onChange={onChangeAddress} placeholder='상세주소' />
                    </div>
                </div>
        </>
    );
}

export default Location;