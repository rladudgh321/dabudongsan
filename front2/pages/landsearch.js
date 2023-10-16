import AppLayout from '@/components/AppLayout';
import MapLand from '@/components/MapLand';
import React from 'react';
import IfToolbar from '@/landSearch/IfToolbar';
import Infinite from '@/components/Infinite';
import { Row, Col, Button } from 'antd';


const landSearch = () => {
    return (
        <>
            <AppLayout>
                <IfToolbar />
                <Row gutter={8}>
                    <Col md={16} >
                        <MapLand />
                    </Col>
                    <Col md={8} >
                        <div style={{ width: '100%' }}>
                            <Button.Group style={{ width: '100%', display: 'flex' }}>
                                <Button style={{ flex:'1' }}>최신순</Button>
                                <Button style={{ flex:'1' }}>인기순</Button>
                                <Button style={{ flex:'1' }}>추천순</Button>
                                <Button style={{ flex:'1' }}>금액순</Button>
                                <Button style={{ flex:'1' }}>면적순</Button>
                            </Button.Group>
                        </div>
                            <Infinite />
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