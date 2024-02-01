import { CompassOutlined, ReloadOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Button, Col, ConfigProvider, Input, Row } from 'antd';
import BuyType from './BuyType';
import LandType from './LandType';
import RestRoom from './RestRoom';
import Room from './Room';
import Size from './Size';
import Theme from './Theme';

const IfToolbar = ({admin}) => {
    return (
        <>
            <Row style={{ background:'#ddd', height:'120px', padding:'10px', alignItems:'center' }}>
                <Col md={20}>
                    <Input.Search enterButton style={{minWidth:'200px',width:'20vw'}} placeholder='관심지역 입력' />
                    <LandType />
                    <BuyType />
                    <Theme />
                    <Room />
                    <RestRoom />
                    <Size />
                    <Button>
                        <ReloadOutlined />
                            Reset
                    </Button>
                </Col>
                <Col md={4}>
                    <ConfigProvider
                    theme={{
                        token: {
                            paddingContentHorizontal:6
                        },
                    }}
                    >
                        {admin || <Button.Group>
                            <Button><CompassOutlined /> 지도</Button>
                            <Button><UnorderedListOutlined /> 목록</Button>
                        </Button.Group>}
                    </ConfigProvider>
                </Col>
            </Row>
        </>
    );
}

export default IfToolbar;

/*
InterestLocal 관심지역
landType
buyType
theme
room
restroom
size
reset


640 크기 미만이면 overflow 

*/