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
const Infinite = () => (
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
            <List.Item>
                <div style={{display:'flex'}}>
                    <Image alt='grim' width={120} height={90} src='/img/1/apart.png' style={{ borderRadius:'30px', flex:'1' }} />
                    <Card style={{fontSize:'0.5rem', flex:'1', position:'relative'}}
                        actions={[<div style={{ display:'flex', cursor:'none',  width:'18vw', position:'absolute', top:0, background:'white'  }}>
                                <div style={{fontSize:'0.5rem', flex:'1'}} key='1sta'><CheckCircleOutlined /><br />아파트<br /> </div>
                                <div style={{fontSize:'0.5rem', flex:'1'}} key='2eda'><InsertRowRightOutlined /><br />15층</div>
                                <div style={{fontSize:'0.5rem', flex:'1'}} key='3rda'><SmileOutlined /><br />방2,화1</div>
                            </div>]}
                        bodyStyle={{padding:3, overflow:'hidden', width:'18vw'}}
                        >
                            <div>
                                <div>
                                <Card.Meta
                                    title={<div style={{ fontSize:'0.7rem' }}>전세 2억 5천만 보증금 5천만</div>}
                                    description={<div style={{zIndex:'-1' }}>홍은동 전/월세 가능한 3룸 빌라! 신혼부부에게 추천해요!<br />
                                    서울 서대문구 신촌로 관리비10
                                    </div>
                                    }
                                />
                                </div>
                            </div>
                    </Card>
                </div>
            </List.Item>
            <List.Item>
                <div style={{display:'flex'}}>
                    <Image alt='grim' width={120} height={90} src='/img/1/apart.png' style={{ borderRadius:'30px', flex:'1' }} />
                    <Card style={{fontSize:'0.5rem', flex:'1', position:'relative'}}
                        actions={[<div style={{ display:'flex', cursor:'none',  width:'18vw', position:'absolute', top:0, background:'white'  }}>
                                <div style={{fontSize:'0.5rem', flex:'1'}} key='1sta'><CheckCircleOutlined /><br />아파트<br /> </div>
                                <div style={{fontSize:'0.5rem', flex:'1'}} key='2eda'><InsertRowRightOutlined /><br />15층</div>
                                <div style={{fontSize:'0.5rem', flex:'1'}} key='3rda'><SmileOutlined /><br />방2,화1</div>
                            </div>]}
                        bodyStyle={{padding:3, overflow:'hidden', width:'18vw'}}
                        >
                            <div>
                                <div>
                                <Card.Meta
                                    title={<div style={{ fontSize:'0.7rem' }}>전세 2억 5천만 보증금 5천만</div>}
                                    description={<div style={{zIndex:'-1' }}>홍은동 전/월세 가능한 3룸 빌라! 신혼부부에게 추천해요!<br />
                                    서울 서대문구 신촌로 관리비10
                                    </div>
                                    }
                                />
                                </div>
                            </div>
                    </Card>
                </div>
            </List.Item>
            <List.Item>
                <div style={{display:'flex'}}>
                    <Image alt='grim' width={120} height={90} src='/img/1/apart.png' style={{ borderRadius:'30px', flex:'1' }} />
                    <Card style={{fontSize:'0.5rem', flex:'1', position:'relative'}}
                        actions={[<div style={{ display:'flex', cursor:'none',  width:'18vw', position:'absolute', top:0, background:'white'  }}>
                                <div style={{fontSize:'0.5rem', flex:'1'}} key='1sta'><CheckCircleOutlined /><br />아파트<br /> </div>
                                <div style={{fontSize:'0.5rem', flex:'1'}} key='2eda'><InsertRowRightOutlined /><br />15층</div>
                                <div style={{fontSize:'0.5rem', flex:'1'}} key='3rda'><SmileOutlined /><br />방2,화1</div>
                            </div>]}
                        bodyStyle={{padding:3, overflow:'hidden', width:'18vw'}}
                        >
                            <div>
                                <div>
                                <Card.Meta
                                    title={<div style={{ fontSize:'0.7rem' }}>전세 2억 5천만 보증금 5천만</div>}
                                    description={<div style={{zIndex:'-1' }}>홍은동 전/월세 가능한 3룸 빌라! 신혼부부에게 추천해요!<br />
                                    서울 서대문구 신촌로 관리비10
                                    </div>
                                    }
                                />
                                </div>
                            </div>
                    </Card>
                </div>
            </List.Item>
            <List.Item>
                <div style={{display:'flex'}}>
                    <Image alt='grim' width={120} height={90} src='/img/1/apart.png' style={{ borderRadius:'30px', flex:'1' }} />
                    <Card style={{fontSize:'0.5rem', flex:'1', position:'relative'}}
                        actions={[<div style={{ display:'flex', cursor:'none',  width:'18vw', position:'absolute', top:0, background:'white'  }}>
                                <div style={{fontSize:'0.5rem', flex:'1'}} key='1sta'><CheckCircleOutlined /><br />아파트<br /> </div>
                                <div style={{fontSize:'0.5rem', flex:'1'}} key='2eda'><InsertRowRightOutlined /><br />15층</div>
                                <div style={{fontSize:'0.5rem', flex:'1'}} key='3rda'><SmileOutlined /><br />방2,화1</div>
                            </div>]}
                        bodyStyle={{padding:3, overflow:'hidden', width:'18vw'}}
                        >
                            <div>
                                <div>
                                <Card.Meta
                                    title={<div style={{ fontSize:'0.7rem' }}>전세 2억 5천만 보증금 5천만</div>}
                                    description={<div style={{zIndex:'-1' }}>홍은동 전/월세 가능한 3룸 빌라! 신혼부부에게 추천해요!<br />
                                    서울 서대문구 신촌로 관리비10
                                    </div>
                                    }
                                />
                                </div>
                            </div>
                    </Card>
                </div>
            </List.Item>
            <List.Item>
                <div style={{display:'flex'}}>
                    <Image alt='grim' width={120} height={90} src='/img/1/apart.png' style={{ borderRadius:'30px', flex:'1' }} />
                    <Card style={{fontSize:'0.5rem', flex:'1', position:'relative'}}
                        actions={[<div style={{ display:'flex', cursor:'none',  width:'18vw', position:'absolute', top:0, background:'white'  }}>
                                <div style={{fontSize:'0.5rem', flex:'1'}} key='1sta'><CheckCircleOutlined /><br />아파트<br /> </div>
                                <div style={{fontSize:'0.5rem', flex:'1'}} key='2eda'><InsertRowRightOutlined /><br />15층</div>
                                <div style={{fontSize:'0.5rem', flex:'1'}} key='3rda'><SmileOutlined /><br />방2,화1</div>
                            </div>]}
                        bodyStyle={{padding:3, overflow:'hidden', width:'18vw'}}
                        >
                            <div>
                                <div>
                                <Card.Meta
                                    title={<div style={{ fontSize:'0.7rem' }}>전세 2억 5천만 보증금 5천만</div>}
                                    description={<div style={{zIndex:'-1' }}>홍은동 전/월세 가능한 3룸 빌라! 신혼부부에게 추천해요!<br />
                                    서울 서대문구 신촌로 관리비10
                                    </div>
                                    }
                                />
                                </div>
                            </div>
                    </Card>
                </div>
            </List.Item>
            <List.Item>
                <div style={{display:'flex'}}>
                    <Image alt='grim' width={120} height={90} src='/img/1/apart.png' style={{ borderRadius:'30px', flex:'1' }} />
                    <Card style={{fontSize:'0.5rem', flex:'1', position:'relative'}}
                        actions={[<div style={{ display:'flex', cursor:'none',  width:'18vw', position:'absolute', top:0, background:'white'  }}>
                                <div style={{fontSize:'0.5rem', flex:'1'}} key='1sta'><CheckCircleOutlined /><br />아파트<br /> </div>
                                <div style={{fontSize:'0.5rem', flex:'1'}} key='2eda'><InsertRowRightOutlined /><br />15층</div>
                                <div style={{fontSize:'0.5rem', flex:'1'}} key='3rda'><SmileOutlined /><br />방2,화1</div>
                            </div>]}
                        bodyStyle={{padding:3, overflow:'hidden', width:'18vw'}}
                        >
                            <div>
                                <div>
                                <Card.Meta
                                    title={<div style={{ fontSize:'0.7rem' }}>전세 2억 5천만 보증금 5천만</div>}
                                    description={<div style={{zIndex:'-1' }}>홍은동 전/월세 가능한 3룸 빌라! 신혼부부에게 추천해요!<br />
                                    서울 서대문구 신촌로 관리비10
                                    </div>
                                    }
                                />
                                </div>
                            </div>
                    </Card>
                </div>
            </List.Item>
            <List.Item>
                <div style={{display:'flex'}}>
                    <Image alt='grim' width={120} height={90} src='/img/1/apart.png' style={{ borderRadius:'30px', flex:'1' }} />
                    <Card style={{fontSize:'0.5rem', flex:'1', position:'relative'}}
                        actions={[<div style={{ display:'flex', cursor:'none',  width:'18vw', position:'absolute', top:0, background:'white'  }}>
                                <div style={{fontSize:'0.5rem', flex:'1'}} key='1sta'><CheckCircleOutlined /><br />아파트<br /> </div>
                                <div style={{fontSize:'0.5rem', flex:'1'}} key='2eda'><InsertRowRightOutlined /><br />15층</div>
                                <div style={{fontSize:'0.5rem', flex:'1'}} key='3rda'><SmileOutlined /><br />방2,화1</div>
                            </div>]}
                        bodyStyle={{padding:3, overflow:'hidden', width:'18vw'}}
                        >
                            <div>
                                <div>
                                <Card.Meta
                                    title={<div style={{ fontSize:'0.7rem' }}>전세 2억 5천만 보증금 5천만</div>}
                                    description={<div style={{zIndex:'-1' }}>홍은동 전/월세 가능한 3룸 빌라! 신혼부부에게 추천해요!<br />
                                    서울 서대문구 신촌로 관리비10
                                    </div>
                                    }
                                />
                                </div>
                            </div>
                    </Card>
                </div>
            </List.Item>
    </List>
    </ConfigProvider>      
    </div>
);
export default Infinite;


