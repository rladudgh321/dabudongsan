import { Button, ConfigProvider, Switch, Table } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import IfToolbar from '../landsearch/IfToolbar';
import Priority from '../landsearch/Priority';

const LandList = () => {
  const columns = [
    {
      title: '매물번호',
      dataIndex: 'landNumber',
    },
    {
      title: '공개여부',
      dataIndex: 'ispublic',
    },
    {
      title: '거래완료',
      dataIndex: 'isdone',
    },
    {
      title: '사진',
      dataIndex: 'picture',
    },
    {
      title: '거래종류',
      dataIndex: 'landtype',
    },
    {
      title: '매물종류',
      dataIndex: 'buytype',
    },
    {
      title: '테마',
      dataIndex: 'theme',
    },
    {
      title: '주소',
      dataIndex: 'address',
    },
    {
      title: '매물정보',
      dataIndex: 'landinfo',
    },
    {
      title: '금액',
      dataIndex: 'price',
    },
    {
      title: '조회',
      dataIndex: 'select',
    },
    {
      title: '등록일',
      dataIndex: 'register',
    },
    {
      title: '비고',
      dataIndex: 'etc',
    },
  ];
  const { landFunc } = useSelector((state) => state.land)
  const data = [];
  
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      landNumber: i,
      ispublic:  <Switch style={{ width:'50px' }} checkedChildren="on" unCheckedChildren="off" defaultChecked />,
      isdone: <Switch style={{ width:'50px' }} checkedChildren="on" unCheckedChildren="off" defaultChecked={landFunc[i]?.status} />,
      picture: <img src={landFunc[i]?.image?.src} width={100} />,
      landtype: landFunc[i]?.options?.landType,
      buytype: landFunc[i]?.options?.buyType,
      theme: landFunc[i]?.options.theme,
      address: landFunc[i]?.address,
      landinfo: <div style={{width:'100px' }}>
      <div>{landFunc[i]?.title}</div>
      <div>{landFunc[i]?.description}</div>
      </div>,
      price: landFunc[i]?.price,
      select: landFunc[i]?.count,
      register: new Date().toISOString().slice(0,10),
      etc: <><Button size='small'>수정</Button><br/><Button size='small'>삭제</Button></>,
    });
  }

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    columnWidth: '16px'
  };
  return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <span
          style={{
            marginLeft: 8,
          }}
        >
        </span>
      </div>
      <IfToolbar admin={true} />
      <Priority />
      <ConfigProvider
        theme={{
          components: {
            Table: {
              cellFontSize: 12,
              cellPaddingInline: 0
            },
          },
        }}
      >

      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </ConfigProvider>
    </div>
  );
};
export default LandList;