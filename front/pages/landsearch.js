import AppLayout from '@/components/AppLayout';
import Infinite from '@/components/Infinite';
import MapLand from '@/components/MapLand';
import useInput from '@/hooks/useInput';
import BuyType from '@/landSearch/BuyType';
import Floor from '@/landSearch/Floor';
import IfToolbar from '@/landSearch/IfToolbar';
import Room from '@/landSearch/Room';
import { ADD_LAND_REQUEST, UPLOAD_IMAGE_REQUEST } from '@/reducer/land';
import Location from '@/request/Location';
import { CloudUploadOutlined } from '@ant-design/icons';
import { Button, Col, ConfigProvider, Form, Input, List, Row, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const LandSearch = () => {
    //로그인 할때마다 변하는 UI(업로드)
    const [isLoggedIn, setIsLoggedIn] = useState(true);



    const onRef = useRef();
    const dispatch = useDispatch();
    const { landFunc, imagePath } = useSelector((state) => state.land);

    console.log({imagePath, landFunc});

        const [buyType, setBuyType] = useState('');
        const [floor, setFloor] = useState(3);
        const [room, setRoom] = useState(0);
        const [title, setTitle] = useInput('');
        const [description, setDescription] = useInput('');
        const [ eumpmeon, setEumpmeon ] = useState(null);
        const [ lia, setLia ] = useState(null);
        const [ address, setAddress ] = useState(null);
        const [isfullSize, setIsfullSize] = useState(false);

        const onUploadData = useCallback(()=>{
            console.log({buyType, floor, room, title, description, eumpmeon, lia, address});
            dispatch({
                type:ADD_LAND_REQUEST,
                data: { buyType, floor, room, title, description, eumpmeon, lia, address }
            })
        },[buyType, floor, room, title, description, eumpmeon, lia, address, dispatch]);


        //upload
        const uploadProps = {
            action: 'http://127.0.0.1:4000/land/upload/image',
            listType: "picture",
            multiple: false,
            accept: "image/*",
            beforeUpload: (file) => {
                const imageFormData = new FormData();
                imageFormData.append('image', file);
                dispatch({
                    type: UPLOAD_IMAGE_REQUEST,
                    data: imageFormData
                })
                return true;
            }
            
        }

        useEffect(() => {
            function viewPoint() {
                if(window.innerWidth >= 768) {
                    setIsfullSize(false)
                } else {
                    setIsfullSize(true)
                }
                onRef.current = window.innerWidth;
            }
            viewPoint();
            window.addEventListener('resize', viewPoint);
            return () => {
                window.removeEventListener('resize', viewPoint);
            }
        },[onRef]);
    return (
        <>
            <AppLayout>
                
                <Row>
                  <Col xs={0} md={24}>
                    <IfToolbar />
                  </Col>
                </Row>
                <Row>
                    
                    <Col md={16} xs={24} sm={24}>
                        <MapLand width={(isfullSize && onRef.current < 768) ? '100vw' : '66vw'} />
                    </Col>
                    <Col md={8} xs={0} sm={0}>
                        <div style={{ textAlign:'center'}}>
                            <ConfigProvider
                                theme={{
                                    token: {
                                        paddingContentHorizontal:6
                                    },
                                }}
                                >
                                            <Button.Group style={{ width:'100%', display:'flex' }}>
                                                <Button style={{ flex:'1' }} >최신순</Button>
                                                <Button style={{ flex:'1' }} >인기순</Button>
                                                <Button style={{ flex:'1' }} >추천순</Button>
                                                <Button style={{ flex:'1' }} >금액순</Button>
                                                <Button style={{ flex:'1' }} >면적순</Button>
                                            </Button.Group>
                                </ConfigProvider>
                        </div>
                        <div style={{ height:'76vh', overflowX:'hidden', overflowY:'auto'}}>
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
                                    {isLoggedIn && <List.Item>
                                        <Form onFinish={onUploadData}>
                                            <div style={{ textAlign:'center' }}>
                                            <ImgCrop rotationSlider>
                                                <Upload.Dragger {...uploadProps}>
                                                    <div style={{ cursor:'pointer', width:'100%', textAlign:'center' }}>
                                                        <CloudUploadOutlined style={{ fontSize:'2rem', color:'skyblue' }} />
                                                        <br />
                                                        매물 업로드
                                                    </div>
                                                </Upload.Dragger>
                                                </ImgCrop>
                                            </div>
                                            <div>
                                                <BuyType setBuyType={setBuyType} />
                                                <Floor setFloor={setFloor} />
                                                <Room setRoom={setRoom} />
                                                <br />
                                                <div style={{ display:'flex', marginTop:'5px' }}>
                                                    <label style={{ margin:'auto 0' }} htmlFor='tit'>큰제목</label>
                                                    <Input.TextArea style={{ width:'85%' }} id='tit' value={title} onChange={setTitle} />
                                                </div>
                                                <div style={{ display:'flex', marginTop:'5px' }}>
                                                    <label style={{ margin:'auto 0' }} htmlFor='desc'>기타사항</label>
                                                    <Input.TextArea style={{ width:'85%' }} id='desc' value={description} onChange={setDescription} />
                                                </div>
                                                <Location setEumpmeon={setEumpmeon} setLia={setLia} setAddress={setAddress} />
                                                
                                            </div>
                                            <div>
                                                <Button htmlType='submit'>등록</Button>
                                            </div>
                                        </Form>
                                    </List.Item> }
                                    { landFunc.map((v) => ( <Infinite landFunc={v} key={v.id} /> ) ) }
                                </List>
                            </ConfigProvider>
                        </div>
                    </Col>
                </Row>
            </AppLayout>
        </>
    );
}

export default LandSearch;