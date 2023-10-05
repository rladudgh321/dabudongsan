import { Col, Row, Card } from 'antd';
import React from 'react';

const WhatTypeLand = () => {
    return (
        <>
            <Row gutter={10} style={{margin: '15px 5px'}}>
                <Col xs={8}>
                    <Card actions={['아파트']} bodyStyle={{display:'none'}} cover={<div style={{ backgroundImage:'url("/img/1/apart.png")', height:'115px' }} ></div>} />            
                </Col>
                <Col xs={8}>
                    <Card actions={['신축빌라']} bodyStyle={{display:'none'}} cover={<div style={{ backgroundImage:'url("/img/1/villa.png")', height:'115px' }} ></div>} />            
                </Col>
                <Col xs={8}>
                    <Card actions={['원/투/쓰리룸']} bodyStyle={{display:'none'}} cover={<div style={{ backgroundImage:'url("/img/1/oneroom.png")', height:'115px' }} ></div>} />            
                </Col>
                <Col xs={8}>
                    <Card actions={['사무실']} bodyStyle={{display:'none'}} cover={<div style={{ backgroundImage:'url("/img/1/office.png")', height:'115px' }} ></div>} />            
                </Col>
                <Col xs={8}>
                    <Card actions={['상가']} bodyStyle={{display:'none'}} cover={<div style={{ backgroundImage:'url("/img/1/store.png")', height:'115px' }} ></div>} />            
                </Col>
                <Col xs={8}>
                    <Card actions={['오피스텔']} bodyStyle={{display:'none'}} cover={<div style={{ backgroundImage:'url("/img/1/officetel.png")', height:'115px' }} ></div>} />            
                </Col>
            </Row>
        </>
    );
}

export default WhatTypeLand;