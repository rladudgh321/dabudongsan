import React from 'react';
import { Input } from 'antd';
import useInput from '../hooks/useInput';

const Contact = () => {
    const [text, onChangeText] = useInput('');
    const [send, onChangeSend] = useInput('');
    return (
        <>
            <div style={{ backgroundImage:'url("/img/contact.png")', height:'300px', borderTop:'1px solid purple', backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}}>
                <div style={{ margin:'20px'}}>
                    <h2 style={{lineHeight:'2.5rem'}}>번호를 남기시면<br />상담해드리겠습니다!</h2>
                    <p>원하시는 매물을 못찾으셨나요?<br />번호를 남겨주시면 확인 후 <br />신속히 답변드리겠습니다</p>
                </div>
            <div style={{ margin:'10px'}}>
                <Input.TextArea style={{ width:'50%', marginBottom:'10px' }} placeholder='내용' value={text} onChange={onChangeText} />
                <Input.Search  style={{ width:'90%' }} enterButton='보내기' placeholder='휴대폰' value={send} onChange={onChangeSend} />
            </div>
            </div>
        </>
    );
}

export default Contact;