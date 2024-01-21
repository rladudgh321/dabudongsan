import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Input, Select, Space, Row, Col } from 'antd';
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
    const [address, setter] = useState('');
    const onChangeAddress = useCallback((e)=>{
        setter(e.target.value);
        setAddress(e.target.value);
    },[address]);

    
    return (
        <>
                <div style={{ width: '15vw'}}>위치</div>
                <Row>
                    <Col md={24}>
                        <Button>경북 칠곡군</Button>
                    </Col>
                </Row>
                <Row>
                    <div style={{ display:'flex' }}>
                        <Col md={12}>
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
                        </Col>
                        <Col md={12}>
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
                        </Col>
                    </div>
                    </Row>
                    <Row>
                    <Col md={24}>
                        <Input value={address} onChange={onChangeAddress} placeholder='상세주소' />
                    </Col>
                    </Row>
        </>
    );
}

export default Location;