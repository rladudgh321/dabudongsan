import React from 'react';
import { Button } from 'antd';
const LandType = () => {
    return (
        <>
            <div style={{ width: '15vw'}}>거래 종류</div>
            <Button.Group key='btn_group'>
                <Button key='apart'>아파트</Button>
                <Button key='villa'>신축빌라</Button>
                <Button key='oneroom'>원/투/쓰리룸</Button>
                <Button key='office'>사무실</Button>
                <Button key='store'>상가</Button>
                <Button key='officetel'>오피스텔</Button>
            </Button.Group>
        </>
    );
}

export default LandType;