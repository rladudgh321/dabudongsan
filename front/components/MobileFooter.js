import { HomeOutlined, PhoneOutlined, SearchOutlined, TeamOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import Link from 'next/link';

const MobileFooter = () => {
  return (
    <Row>
      <Col xs={24} md={0}>
        <Button.Group style={{ display: 'flex', position:'fixed', bottom:0, zIndex: 5000, width: '100vw'}}>
          <Button style={{height:'60px', flexGrow:1}}><Link href='/'><HomeOutlined /><div>홈</div></Link></Button>
          <Button style={{height:'60px', flexGrow:1}}><Link href='/landsearch'><SearchOutlined /><div>매물검색</div></Link></Button>
          <Button style={{height:'60px', flexGrow:1}}><Link href='/request'><TeamOutlined /><div>의뢰하기</div></Link></Button>
          <Button style={{height:'60px', flexGrow:1}}><Link href='/'><PhoneOutlined /><div>연락하기</div></Link></Button>
        </Button.Group>
      </Col>
    </Row>
  );
}

export default MobileFooter;