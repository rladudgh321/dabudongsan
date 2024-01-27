import BuyType from '@/components/landsearch/BuyType';
import Floor from '@/components/landsearch/Floor';
import IfToolbar from '@/components/landsearch/IfToolbar';
import Infinite from '@/components/landsearch/Infinite';
import MapLand from '@/components/landsearch/kakao/MapLand';
import Priority from '@/components/landsearch/Priority';
import Room from '@/components/landsearch/Room';
import TitleArea from '@/components/landsearch/TitleArea';
import Toilet from '@/components/landsearch/Toilet';
import UploadInfo from '@/components/landsearch/UploadInfo';
import Location from '@/components/request/Location';
import useInput from '@/hooks/useInput';
import useInputElement from '@/hooks/useInputElement';
import AppLayout from '@/layout/AppLayout';
import { ADD_LAND_REQUEST } from '@/reducer/land';
import { UpdateDone } from '@/reducer/location';
import { Button, Col, ConfigProvider, Form, List, Row } from 'antd';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const LandSearch = () => {
    //로그인 할때마다 변하는 UI(업로드)
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const onRef = useRef();
    const dispatch = useDispatch();
    const { landFunc, imagePath, addLandDone } = useSelector((state) => state.land);
    const [buyType, onChangeBuyType, setBuyType] = useInputElement('');
    const [floor, onChangeFloor, setFloor] = useInputElement(1);
    const [room, onChangeRoom, setRoom] = useInputElement(0);
    const [toilet, onChangeToilet, setToilet] = useInputElement(0);
    const [title, onChangeTitle, setTitle] = useInput('');
    const [description, onChangeDescription, setDescription] = useInput('');

    const { eumpmeon, lia, address } = useSelector((state) => state.location);
    const [ eump, setEump ] = useState(eumpmeon);

    const [ li, setLi ] = useState(lia);
    const [ addre, setAddre ] = useState(address);
    const [isfullSize, setIsfullSize] = useState(false);
    const onUploadData = useCallback(()=>{
        console.log({buyType, floor, room, toilet, title, description, eumpmeon, lia, address, filename: imagePath});
        if(!buyType || buyType === '매물 종류') {
            return alert('매물 종류를 선택해주세요');
        }
        if(!eumpmeon || eumpmeon === '읍/면') {
            return alert('읍/면을 선택해주세요');
        }
        if(!lia || lia === '리') {
            return alert('리를 선택해주세요')
        };
        if(!address){
            console.log({address});
            return alert('상세주소를 입력해주세요');
        }
        if(!imagePath) {
            return alert('이미지를 삽입해주세요');
        }
        dispatch({
            type:ADD_LAND_REQUEST,
            data: { buyType, floor, room, toilet, title, description, eumpmeon, lia, address, filename:imagePath }
        })
    },[buyType, floor, room, toilet, title, description, eumpmeon, lia, address, imagePath, dispatch]);

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

    useEffect(() => {
        if(addLandDone) {
            setBuyType('매물 종류');
            setFloor(1);
            setTitle('');
            setDescription('');
            setEump(null);
            setLi(null);
            setAddre('');
            dispatch({
                type: UpdateDone,
            });
        }
    },[addLandDone]);
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
                        <Priority />
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
                                <UploadInfo />
                                <div>
                                    <BuyType buyType={buyType} setBuyType={setBuyType} onChangeBuyType={onChangeBuyType} />
                                    <Floor floor={floor} onChangeFloor={onChangeFloor} />
                                    <Room room={room} onChangeRoom={onChangeRoom} setRoom={setRoom} />
                                    <Toilet toilet={toilet} onChangeToilet={onChangeToilet} setToilet={setToilet}/>
                                    <br />
                                    <TitleArea title={title} onChangeTitle={onChangeTitle} description={description} onChangeDescription={onChangeDescription} />
                                    <Location eump={eump} setEump={setEump} li={li} setLi={setLi} addre={addre} setAddre={setAddre} />
                                    
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