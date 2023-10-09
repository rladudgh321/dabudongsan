import React, { useState, useCallback } from 'react';
import { Button } from 'antd';

const LandType = () => {
    const [selectedButton, setSelectedButton] = useState(null);
    const handleButtonClick = useCallback((buttonNumber) => {
        setSelectedButton(buttonNumber); // 현재 선택한 버튼으로 업데이트
        console.log(buttonNumber)
    },[selectedButton]);
    return (
        <>
            <div style={{ width: '15vw'}}>거래 종류</div>
            <Button.Group key='btn_group'>
                <Button
                    type={selectedButton === '아파트' ? 'primary' : 'default'}
                    onClick={() => handleButtonClick('아파트')} key='apart'>아파트</Button>
                <Button
                    type={selectedButton === '신축빌라' ? 'primary' : 'default'}
                    onClick={() => handleButtonClick('신축빌라')} key='villa'>신축빌라</Button>
                <Button
                    type={selectedButton === '원/투/쓰리룸' ? 'primary' : 'default'}
                    onClick={() => handleButtonClick('원/투/쓰리룸')} key='oneroom'>원/투/쓰리룸</Button>
                <Button
                    type={selectedButton === '사무실' ? 'primary' : 'default'}
                    onClick={() => handleButtonClick('사무실')} key='office'>사무실</Button>
                <Button
                    type={selectedButton === '상가' ? 'primary' : 'default'}
                    onClick={() => handleButtonClick('상가')} key='store'>상가</Button>
                <Button
                    type={selectedButton === '오피스텔' ? 'primary' : 'default'}
                    onClick={() => handleButtonClick('오피스텔')} key='officetel'>오피스텔</Button>
            </Button.Group>
        </>
    );
}

export default LandType;