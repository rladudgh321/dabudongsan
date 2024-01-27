import { InputNumber, Space } from 'antd';

const Floor = ({floor, onChangeFloor}) => {
    return (
        <Space wrap style={{ display:'flex' }}>
            <InputNumber size="middle" min={1} max={100} defaultValue={1} value={floor || 1} onChange={onChangeFloor} />
            <span>층</span>
        </Space>
    );
};
export default Floor;