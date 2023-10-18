import React from 'react';
import { Menu, Row, Col } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Image from 'next/image';
const AppLayout = () => {
const items = [
  {
    label: '관리자페이지',
    key: 'admin',
  },{
    label: '문의전화 010-456-789',
    key: 'phone',
  },{
    label: '매물검색',
    key: 'search',
  },{
    label: '매물 의뢰',
    key: 'contact',
  },{
    label: '공지사항',
    key: 'note',
  },{
    label: '회사소개',
    key: 'intro',
  },
];
    return (
        <>
            <Row>
                <Col xs={6}>
                    <Image src='/img/logo.png' alt='logo.png' layout="responsive" sizes="(max-width: 768px) 50vw,
         (max-width: 1024px) 100vw" />
                </Col>
                <Col xs={18}>
                    <MenuOutlined />
                </Col>
            </Row>
        </>
    );
}

export default AppLayout;