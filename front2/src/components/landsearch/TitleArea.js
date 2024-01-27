import { Input } from 'antd';

const TitleArea = ({title, onChangeTitle, description, onChangeDescription}) => {
  return (
    <>
      <div style={{ display:'flex', marginTop:'5px' }}>
          <label style={{ margin:'auto 0' }} htmlFor='tit'>큰제목</label>
          <Input.TextArea style={{ width:'85%' }} id='tit' value={title} onChange={onChangeTitle} />
      </div>
      <div style={{ display:'flex', marginTop:'5px' }}>
          <label style={{ margin:'auto 0' }} htmlFor='desc'>기타사항</label>
          <Input.TextArea style={{ width:'85%' }} id='desc' value={description} onChange={onChangeDescription} />
      </div>
    </>
  );
}

export default TitleArea;