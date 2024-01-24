import { Col, Row } from 'antd';
import Link from 'next/link';

const SearchMapList = () => {
    return (
        <>
            <Row gutter={10}>
                <Col xs={24} md={0}>
                    <div style={{ margin:'15px 5px', textAlign:'center', display: 'flex' }}>
                        <Link href='/landsearch' >
                            <div style={{ maxHeight:'160px', backgroundImage:'url("/img/map_search.png")', height:'100px', width:'47vw', backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', border:'1px solid silver', marginRight:'5px'}}></div>
                        </Link>
                        <div style={{ cursor:'default' }}>&nbsp;</div>
                        <Link href='/landsearch'>
                            <div style={{ maxHeight:'160px', backgroundImage:'url("/img/list_search.png")', height:'100px', width:'47vw', backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', border:'1px solid silver', marginLeft:'5px'}}></div>
                        </Link>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default SearchMapList;