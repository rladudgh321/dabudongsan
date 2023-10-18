import React from 'react';
import { Avatar, Card, List, Space, ConfigProvider } from 'antd';
import Image from 'next/image';
import { CheckCircleOutlined, InsertRowRightOutlined, SmileOutlined } from '@ant-design/icons';

// const data = Array.from({
//     length: 23,
// }).map((_, i) => ({
//     href: 'https://ant.design',
//     title: `ant design part ${i}`,
//     avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
//     description:
//     'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//     content:
//     'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
// }));
// const IconText = ({ icon, text }) => (
//     <Space pace>
//     {React.createElement(icon)}
//     {text}
//     </Space>
// );

const Infinite = ({ landFunc }) => {


    return (
        <>
            <List.Item>
                <div style={{display:'flex'}}>
                    <Image alt='grim' width={120} height={90} src={landFunc.image.src} style={{ borderRadius:'30px', flex:'1' }} />
                    <Card style={{fontSize:'0.5rem', flex:'1', position:'relative'}}
                        actions={[<div style={{ display:'flex', cursor:'none',  width:'18vw', position:'absolute', top:0, background:'white'  }}>
                                <div style={{fontSize:'0.5rem', flex:'1'}} key='1sta'><CheckCircleOutlined /><br />{landFunc.options.landType}<br /> </div>
                                <div style={{fontSize:'0.5rem', flex:'1'}} key='2eda'><InsertRowRightOutlined /><br />{ landFunc.options.floor }</div>
                                <div style={{fontSize:'0.5rem', flex:'1'}} key='3rda'><SmileOutlined /><br />{ landFunc.options.room }</div>
                            </div>]}
                        bodyStyle={{padding:3, overflow:'hidden', width:'18vw'}}
                        >
                            <div>
                                <div>
                                <Card.Meta
                                    title={<div style={{ fontSize:'0.7rem' }}>{landFunc.title}</div>}
                                    description={<div style={{zIndex:'-1' }}>{ landFunc.description }<br />
                                    { landFunc.address }
                                    </div>
                                    }
                                />
                                </div>
                            </div>
                    </Card>
                </div>
            </List.Item>
    
        </>
    );
}

export default Infinite;


