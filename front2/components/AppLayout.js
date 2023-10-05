import React, { useState, useCallback } from 'react';
import { Menu, Row, Col, ConfigProvider, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Image from 'next/image';

const AppLayout = ({children}) => {
    const [menu, setMenu] = useState(false);
    const onToggleMenuBtn = useCallback(()=>{
        setMenu((prev) => !prev);
    },[]);
const items = [
  {
    label: <Button>관리자페이지 나가기</Button>,
    key: 'admin',
  },{
    label: <div style={{lineHeight:'30px'}}>문의전화 <br />010-456-789</div>,
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
            <Row style={{ minHeight:'50px', height:'5vh' }}>
                <Col xs={6}>
                    <div style={{width: '100%', height: '100%', position: 'relative'}}>
                        <Image
                            alt='logo'
                            src='/img/logo.png'
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>
                </Col>
                <Col xs={18}>
                    <MenuOutlined onClick={onToggleMenuBtn} style={{ float:'right', color:'gray',borderColor:'silver', background:'#fff', border:'1px solid gray',fontSize:'1.2rem', padding:'5px 10px 5px 10px', margin:'10px', borderRadius:'5px'}} />
                </Col>
                { menu && (

                    <ConfigProvider
                    theme={{
                        components: {
                        Menu: {
                            itemHeight:'100'
                        },
                        },
                    }}
                    >
                        <Menu items={items} style={{ position:'fixed', top:0, right:'75vw', left:0, bottom:0, border:'1px solid gray' }} ></Menu>
                        <div style={{ position:'fixed', top:0, right:0, left:'25vw', bottom:0}} onClick={onToggleMenuBtn}></div>
                    </ConfigProvider>
                ) }
            </Row>
            {children}
        </>
    );
}

export default AppLayout;
