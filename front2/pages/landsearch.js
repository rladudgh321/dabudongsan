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
                        <div style={{ width:'34vw' }}>
                            <Button.Group style={{ }}>
                                <Button style={{  }}>최신순</Button>
                                <Button style={{  }}>인기순</Button>
                                <Button style={{  }}>추천순</Button>
                                <Button style={{  }}>금액순</Button>
                                <Button style={{  }}>면적순</Button>
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