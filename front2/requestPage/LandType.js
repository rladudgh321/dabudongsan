import React from 'react';
import { Button } from 'antd';
const LandType = () => {
    return (
        <>
            <div>거래 종류</div>
            <div>
                <Button.Group>
                    <Button>분양</Button>
                    <Button>매매</Button>
                    <Button>전세</Button>
                    <Button>월세</Button>
                </Button.Group>
            </div>
        </>
    );
}

export default LandType;