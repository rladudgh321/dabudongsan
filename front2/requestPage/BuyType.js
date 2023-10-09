import React from 'react';
import { ConfigProvider, Button } from 'antd';
const LandType = () => {
    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        colorLinkActive: (e) => {
                            console.log(e);
                        },
                    },
                }}
                >
                <div style={{ width: '15vw'}}>거래 종류</div>
                <Button.Group>
                    <Button>분양</Button>
                    <Button>매매</Button>
                    <Button>전세</Button>
                    <Button>월세</Button>
                </Button.Group>
            </ConfigProvider>
        </>
    );
}

export default LandType;