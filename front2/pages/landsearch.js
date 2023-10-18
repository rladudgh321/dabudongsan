import AppLayout from '@/components/AppLayout';
import MapLand from '@/components/MapLand';
import React, { useCallback } from 'react';
import IfToolbar from '@/landSearch/IfToolbar';
import Infinite from '@/components/Infinite';
import { Row, Col, Button, ConfigProvider, List } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { CloudUploadOutlined } from '@ant-design/icons';
import { ADD_LAND_REQUEST } from '@/reducer/land';

const landSearch = () => {
    const dispatch = useDispatch();
    const { landFunc } = useSelector((state) => state.land);
    const onUploadData = useCallback(()=>{
        dispatch({
            type:ADD_LAND_REQUEST,
        })
    },[]);
    return (
        <>
            <AppLayout>
                
                <IfToolbar />
                <Row>
                    <Col md={16} >
                        <MapLand />
                    </Col>
                    <Col md={8} >
                        <div style={{ textAlign:'center' }}>
                            <ConfigProvider
                                theme={{
                                    token: {
                                        paddingContentHorizontal:6
                                    },
                                }}
                                >
                                            <Button.Group style={{ width:'100%', display:'flex' }}>
                                                <Button style={{ flex:'1' }} >최신순</Button>
                                                <Button style={{ flex:'1' }} >인기순</Button>
                                                <Button style={{ flex:'1' }} >추천순</Button>
                                                <Button style={{ flex:'1' }} >금액순</Button>
                                                <Button style={{ flex:'1' }} >면적순</Button>
                                            </Button.Group>
                                </ConfigProvider>
                        </div>
                        <div style={{ height:'76vh', overflowX:'hidden', overflowY:'auto' }}>
                            <ConfigProvider
                            theme={{
                                components: {
                                Card: {
                                    actionsLiMargin:'1px'
                                },
                                List: {
                                    paddingContentHorizontal:3,
                                    paddingContentVertical:9
                                }
                                },
                            }}
                            >

                                <List
                                    itemLayout="vertical"
                                    size="small"
                                    bordered
                                >
                                    <List.Item style={{ textAlign:'center' }}>
                                        <div style={{ height:'15vh', cursor:'pointer' }} onClick={onUploadData}>
                                            <CloudUploadOutlined style={{ fontSize:'2rem', color:'skyblue' }} />
                                            <br />
                                            매물 업로드
                                        </div>
                                    </List.Item>
                                    { landFunc.map((v) => ( <Infinite landFunc={v} key={v.id} /> ) ) }
                                </List>
                            </ConfigProvider>      
                        </div>
                    </Col>
                </Row>
            </AppLayout>
        </>
    );
}

export default landSearch;

/*
<조건 툴바>
<지도>
<정보메뉴>
*/