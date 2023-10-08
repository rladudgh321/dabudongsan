import React, { useState, useCallback } from 'react';
import { Button, List, Dropdown, Space, Input, Form } from 'antd';
import AppLayout from '@/components/AppLayout';
import { useSelector, useDispatch } from 'react-redux';
import { UpdateEumpmeon, UpdateLi, SetLocations, LAND_REQUEST } from '@/reducer/location';
import useInput from '@/hooks/useInput';

const request = () => {
    const dispatch = useDispatch();
    const { chilgok, eumpmeon, eupArray, li } = useSelector((state) => state.location);
    const [ showMore, setShowMore ] = useState(false);
    const onMenuClick = useCallback((e) => {
        chilgok.map((v) => {
            if(v.key === parseInt(e.key, 10)){
                setShowMore(true);
                console.log('click', e, v.label, eumpmeon);
                return dispatch({
                    type: UpdateEumpmeon,
                    data: { eup: v.label, more:v.more },
                })
            }
        });
      },[eumpmeon]);
      const onVmoreClick = useCallback((e)=>{
        eupArray.map((v) => {
            if(v.key === parseInt(e.key, 10)){
                return dispatch({
                    type: UpdateLi,
                    data: v.label,
                })
            }
        });
      },[eupArray, li]);
      const setLocation = useCallback(()=>{
        return dispatch({
            type:SetLocations
        })
      },[]);
      const [address, onChangeAddress] = useInput('')
      const onSubmit = useCallback(()=>{
        if(eumpmeon === '읍/면' || li === '리' || !address) {
            return alert('항목을 입력해주세요')
        }
        console.log(`${eumpmeon} ${li} ${address}`);
        dispatch({
            type: LAND_REQUEST,
            data: `${eumpmeon} ${li} ${address}`
        })
      },[eumpmeon, li, address]);
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
                                <div><Button onClick={setLocation}>경북 칠곡군</Button></div>
                                <div>
                                    <Dropdown.Button
                                        menu={{
                                            items:chilgok,
                                            onClick: onMenuClick,
                                        }}
                                        >
                                        <div>{eumpmeon}</div>
                                    </Dropdown.Button>
                                </div>
                                <div>
                                    { showMore && <Dropdown.Button
                                        menu={{
                                            items:eupArray,
                                            onClick: onVmoreClick,
                                        }}
                                        >
                                        <div>{li}</div>
                                    </Dropdown.Button>}
                                </div>
                                <div>
                                    <Form onFinish={onSubmit}>
                                        <Input value={address} onChange={onChangeAddress} placeholder='상세주소' />
                                        <Button htmlType='submit'>전송</Button>
                                    </Form>
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