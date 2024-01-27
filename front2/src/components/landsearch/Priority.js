import { Button, ConfigProvider } from 'antd';

const Priority = () => {
  return (
    <div style={{ textAlign:'center'}}>
      <ConfigProvider
        theme={{
          token: {
              paddingContentHorizontal:6
          },
        }}
      >
        <Button.Group style={{ width:'100%', display:'flex' }}>
            <Button style={{ flex:'1' }} >최신순</Button>
            <Button style={{ flex:'1' }} >인기순</Button>
            <Button style={{ flex:'1' }} >추천순</Button>
            <Button style={{ flex:'1' }} >금액순</Button>
            <Button style={{ flex:'1' }} >면적순</Button>
        </Button.Group>
      </ConfigProvider>
    </div>
  );
}

export default Priority;