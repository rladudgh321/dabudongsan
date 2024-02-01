import Location from '@/components/request/Location';
import { Button, List } from 'antd';

const LocationInfo = () => {
  return (
    <>
      <List
        header={<div>위치정보</div>}
        bordered
      >
        <List.Item>
          <Location />
        </List.Item>
        <List.Item>
          <div>주소 공개여부</div>
          <Button.Group>
            <Button>상세주소 비공개</Button>
            <Button>상세주소 공개</Button>
            <Button>위치 숨기기</Button>
          </Button.Group>
        </List.Item>
        <List.Item>지도 위치</List.Item>
      </List>
    </>
  );
}

export default LocationInfo;