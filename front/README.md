<!-- import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import React from 'react';
const props = {
  action: 'http://127.0.0.1:4000/file',
  onChange({ fileList }) {
    const imageFormData = new FormData();
    fileList.forEach((v) => {
      console.log(fileList);
      imageFormData.append('image', v);
    })
    console.log('onChange', imageFormData);
  },
  listType: 'picture',
  beforeUpload: (file) => {
    console.log({file});
    return false
  },
  accept: 'image/*',
  multiple: true
};
const App = () => {
  
  return (
    <>
      <Upload.Dragger {...props}

      >
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload.Dragger>
    </>
  );
}
export default App; -->