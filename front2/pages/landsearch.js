import AppLayout from '@/components/AppLayout';
import MapLand from '@/components/MapLand';
import React from 'react';
import IfToolbar from '@/landSearch/IfToolbar';
import Infinite from '@/components/Infinite';
import { Row, Col, Button, ConfigProvider } from 'antd';
import { useSelector } from 'react-redux';

const landSearch = () => {
    const { landFunc } = useSelector((state) => state.land);
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
                            { landFunc.map((v) => ( <Infinite landFunc={v} key={v.id} /> ) ) }
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