import React, { useState, useCallback } from 'react';
import { Input, Button, Checkbox, List } from 'antd';
import useInput from '@/hooks/useInput';

const InfoRequest = () => {
    const [name, onName] = useInput('');
    const [title, onTitle] = useInput('');
    const [contact, onContact] = useInput('');
    const [term, setTerm] = useState(false);
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback((e)=>{
        setTerm(e.target.checked);
        setTermError(false);
    },[term]);
    return (
        <>
                <List.Item style={{ borderBlockEnd:'none' }}>
                    <div style={{ display: 'flex'}}>
                        <div style={{width:'15vw'}}>이름</div>
                        <Input style={{ width:'40vw'}} placeholder='이름' value={name} onChange={onName} />
                    </div>
                </List.Item>
                <List.Item style={{ borderBlockEnd:'none' }}>
                    <div style={{ display: 'flex'}}>
                        <div style={{width:'15vw'}}>제목</div>
                        <Input style={{ width:'70vw'}} placeholder='제목' value={title} onChange={onTitle} />
                    </div>
                </List.Item>
                    <List.Item style={{ borderBlockEnd:'none' }}>
                        <div style={{ display: 'flex'}}>
                            <div style={{width:'15vw'}}>연락처</div>
                            <Input style={{ width:'40vw'}} placeholder='연락처' value={contact} onChange={onContact} />
                        </div>
                    </List.Item>
                    <List.Item style={{ borderBlockEnd:'none' }}>
                        <div style={{ display: 'flex'}}>
                            <div style={{width:'15vw'}}>상세내용</div>
                            <Input.TextArea style={{ width:'70vw', height:'30vh'}} />
                        </div>
                    </List.Item>
                    <List.Item style={{ borderBlockEnd:'none' }}>
                        <div>
                            <h2>개인정보 수집 안내</h2>
                            <aside style={{ height:'20vh', overflowY: 'scroll', border: '1px solid silver', padding:'10px', borderRadius:'10px'}}>
                            개인정보의 수집 및 이용 동의<br /><br />
                            본사는 서비스 제공을 위해서 아래와 같이 개인정보를 수집합니다. 정보주체는 본 개인정보의 수집 및 이용에 관한 동의를 거부하실 권리가 있으나, 서비스 제공에 필요한 최소한의 개인정보이므로 동의를 해주셔야 서비스를 이용하실 수 있습니다.
                            <br /><br />
                            • 수집하려는 개인 정보 항목: 휴대폰 번호<br />
                            • 개인정보의 수집 목적: 문의신청<br />
                            • 개인정보의 보유기간: 사용 후 바로 삭제<br />
                            <br />
                            개인정보 제3자 제공 동의
                            <br />
                            본사는 서비스 제공을 위해서 아래와 같이 개 인정보를 수집합니다. 정보주체는 본 개인 정보의 수집 및 이용에 관한 동의를 거부하실 권리가 있으나, 서비 스 제공에 필요한 최소한의 개인정보이므로 동의를 해 주셔야 서비스를 이용하실 수 있습니다.
                            <br /><br />
                            • 개인정보를 제공받는 자 : 본사 중개사무소<br />
                            • 개인정보를 제공받는 자의 개인정보 이용 목적 : 매물중개목적<br />
                            • 제공하는 개인정보의 항목 : 휴대폰 번호<br />
                            • 개인정보를 제공받는 자의 개인정보 보유 및 이용기간 : 5년<br />
                            • 동의 거부권 및 불이익 : 해당 내용에 동의하지 않을 시, 매물 중개 의뢰가 불가능합니다.<br />
                            </aside>
                        </div>
                    </List.Item>
                    <List.Item style={{borderBlockEnd : 'none'}} >
                        <Checkbox style={{margin:'0 auto'}} checked={term} onChange={onChangeTerm} >동의합니다</Checkbox>
                        { termError && <div style={{color:'red'}}>동의하셔야 진행하실 수 있습니다</div> }
                    </List.Item>
                    <List.Item style={{borderBlockEnd : 'none'}}>
                        <Button style={{margin:'0 auto', width:'40vw', background:'#ddd'}}>저장</Button>
                    </List.Item>
                    
        </>
    );
}

export default InfoRequest;