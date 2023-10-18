import React from 'react';
import { InputNumber, Space } from 'antd';

const Floor = ({setFloor}) => {
    const onChange = (value) => {
        setFloor(value+'층');
    };
    return (
        <Space wrap style={{ display:'flex' }}>
            <InputNumber size="middle" min={1} max={100} defaultValue={3} onChange={onChange} />
            <span>층</span>
        </Space>
    );
};
export default Floor;