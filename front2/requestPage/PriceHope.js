import React from 'react';
import { Input, Form } from 'antd';
import useInput from '@/hooks/useInput';

const PriceHope = () => {
    const [price, onChangePrice] = useInput('');
    return (
        <>
            <div style={{ width: '15vw'}}>희망금액</div>
            <div>
                <Input placeholder='미입력시 협의' value={price} onChange={onChangePrice} />
            </div>
        </>
    );
}

export default PriceHope;