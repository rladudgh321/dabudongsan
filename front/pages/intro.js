import AppLayout from '@/components/AppLayout';
import { EnvironmentOutlined, MailOutlined, MobileOutlined, PhoneOutlined, ShopOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { useEffect, useState } from 'react';
import Map from '../components/Map';

const Intro = () => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true)
    }, [])
    return(
        <>
            <AppLayout>
                <div style={{marginTop:'30px'}}>
                    <div style={{margin:'0 100px 0 100px', backgroundColor:'green', color:'white', height:'30px'}}>회사소개</div>
                    <Card cover={<img src='/img/intro.png' />} style={{ border:'1px solid green', margin:'0 100px 100px 100px', padding:'10px' }}>
                        <div>
                            <h3>위치</h3>
                            <div style={{display:'flex'}}>
                                {/* { isClient && <Map /> } */}
                                <Map />
                                <div style={{ margin: '30px' }}>
                                    <div><EnvironmentOutlined /> 다부동 1동 1234</div>
                                    <div><ShopOutlined /> 다부 부동산</div>
                                    <div><PhoneOutlined /> 070-1244-8212</div>
                                    <div><MobileOutlined /> 010-1234-5678</div>
                                    <div><MailOutlined /> dabu@naver.com</div>
                                </div>    
                            </div>
                        </div>
                    </Card>
                </div>
            </AppLayout>
        </>
    );
}

export default Intro;