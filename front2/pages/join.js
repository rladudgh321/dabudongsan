import React, { useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import useInput from '@/hooks/useInput';
import { useDispatch } from 'react-redux';
import { JOIN_REQUEST } from '@/reducer/user';
const Join = () => {
    const dispatch = useDispatch();
    const [ joinEmail, setJoinEmail ] = useInput('');
    const [ joinPwd, setJoinPwd] = useInput('');
    const onSubmit = useCallback(()=>{
        console.log({joinEmail, joinPwd});
        dispatch({
            type:JOIN_REQUEST,
            data:{joinEmail, joinPwd}
        });
    },[joinEmail, joinPwd]);
    return (
        <>
            <Form onFinish={onSubmit}>
                <Input value={joinEmail} onChange={setJoinEmail} />
                <Input value={joinPwd} onChange={setJoinPwd} />
                <Button htmlType='submit'>가입</Button>
            </Form>    
        </>
    );
}

export default Join;