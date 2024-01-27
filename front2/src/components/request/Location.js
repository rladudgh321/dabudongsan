import { UpdateAddress, UpdateDone, UpdateEumpmeon, UpdateLi } from '@/reducer/location';
import { Button, Col, Input, Row, Select, Space } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Location = ({eump, setEump, li, setLi, addre, setAddre}) => {
  const dispatch = useDispatch();
    const { addLandDone } = useSelector((state) => state.land);
    const { chilgok, eumpmeon, eupArray, lia } = useSelector((state) => state.location);
    const [ showMore, setShowMore ] = useState(false);
    const handleChange = useCallback((e)=>{
        if(e === 'null') {
            setEump('읍/면');
        }
        chilgok.map((v) => {
            if(v.label === e){
                setShowMore(true);
                setEump(v.label);
                return dispatch({
                    type: UpdateEumpmeon,
                    data: { eup: v.label, more:v.more },
                });
            }}
        );
    },[eumpmeon]);

    const onVmoreClick = useCallback((e)=>{
        if(e === 'null') {
            setLia('리')
        }
        eupArray.map((v) => {
            if(v.value === e){
                setLi(v.label);
                return dispatch({
                    type: UpdateLi,
                    data: v.label,
                })
            }
        });
    },[eupArray, lia]);
    const [address, setter] = useState(addre);
    const onChangeAddress = useCallback((e)=>{

        setter(e.target.value);
        dispatch({
            type: UpdateAddress,
            data: e.target.value,
        });
    },[]);

    const reset = useCallback(() => {
        setEump(null);
        setLi(null);
        setter('');
        dispatch({
            type: UpdateDone,
        })
    },[]);

    useEffect(() => {
        if(addLandDone) {
            setter('');
        }
    },[addLandDone]);
    return (
        <>
                <div style={{ width: '15vw'}}>위치</div>
                <Row>
                    <Col md={24}>
                        <Button onClick={reset}>경북 칠곡군</Button>
                    </Col>
                </Row>
                <Row>
                    <div style={{ display:'flex' }}>
                        <Col md={12}>
                            <Space wrap>
                                <Select
                                defaultValue="읍/면"
                                style={{
                                    width: 120,
                                }}
                                value={eump || '읍/면'}
                                onChange={handleChange}
                                options={chilgok}
                                />
                            </Space>
                        </Col>
                        <Col md={12}>
                                {
                                    showMore && <Space wrap>
                                    <Select
                                    defaultValue="리"
                                    value={li || '리'}
                                    style={{
                                        width: 120,
                                    }}
                                    onChange={onVmoreClick}
                                    options={eupArray}
                                    />
                                </Space>
                                }
                        </Col>
                    </div>
                    </Row>
                    <Row>
                    <Col md={24}>
                        <Input value={address || ''} onChange={onChangeAddress} placeholder='상세주소' />
                    </Col>
                    </Row>
        </>
    );
}

export default Location;