import React, { useState, useCallback } from 'react';
import { ConfigProvider, Button } from 'antd';
const LandType = () => {
    const [selectedButton, setSelectedButton] = useState(null);
    const handleButtonClick = useCallback((buttonName) => {
        setSelectedButton(buttonName); // 현재 선택한 버튼으로 업데이트
        console.log(buttonName);
    },[selectedButton]);
    return (
        <>
                <div style={{ width: '15vw'}}>거래 종류</div>
                <Button.Group>
                <Button
                    type={selectedButton === '분양' ? 'primary' : 'default'}
                    onClick={() => handleButtonClick('분양')}
                >분양</Button>
                <Button
                    type={selectedButton === '매매' ? 'primary' : 'default'}
                    onClick={() => handleButtonClick('매매')}
                >매매</Button>
                 <Button
                    type={selectedButton === '전세' ? 'primary' : 'default'}
                    onClick={() => handleButtonClick('전세')}
                >전세</Button>
                <Button
                    type={selectedButton === '월세' ? 'primary' : 'default'}
                    onClick={() => handleButtonClick('월세')}
                >월세</Button>
                </Button.Group>
        </>
    );
}

export default LandType;