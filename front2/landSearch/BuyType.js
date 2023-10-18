import React from 'react';
import { Select, Space } from 'antd';



const BuyType = ({setBuyType}) => {
  const handleChange = (value) => {
    setBuyType(value);
  };
  return (
    <>
      <Space wrap>
        <Select
          defaultValue="매물 종류"
          style={{
            width: 120,
          }}
          onChange={handleChange}
          options={[
            {
              value: '아파트',
              label: '아파트',
            },
            {
              value: '신축빌라',
              label: '신축빌라',
            },
            {
              value: '원/투/쓰리룸',
              label: '원/투/쓰리룸',
            },
            {
              value: '사무실',
              label: '사무실',
            },
            {
              value: '상가',
              label: '상가',
            },
            {
              value: '오피스텔',
              label: '오피스텔',
            },
          ]}
        />
      </Space>
    </>
  );
}

export default BuyType;