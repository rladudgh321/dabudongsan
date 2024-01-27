import { UPLOAD_IMAGE_REQUEST, showImageFalse } from '@/reducer/land';
import { CloudUploadOutlined } from '@ant-design/icons';
import { Global, css } from '@emotion/react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const UploadInfo = () => {
const dispatch = useDispatch();
const { uploadImageDone, addLandDone } = useSelector((state) => state.land);
let [showImage, setShowImage] = useState(false);
const uploadProps = {
  crossOrigin: true,
  listType: "picture-card",
  multiple: false,
  accept: "image/*",
  beforeUpload: (file) => {
     console.log('beforeUpload', file);
      return true;
  },
  
onChange: useCallback((props) => {
  const imageFormData = new FormData();
    console.log({file: props.file, event})
      imageFormData.append('image', props.file.originFileObj);
      if(props.file.status ==="done") {
        dispatch({
          type: UPLOAD_IMAGE_REQUEST,
          data: imageFormData
        });
        setShowImage(false);
        console.log('onChange', { showImage });
      }
  },[uploadImageDone]),
  // customRequest: useCallback((file) => {
  //   console.log('********', file)
  //   },[]),
}


//.ant-upload-list
useEffect(() => {
    const list = document.querySelector('.ant-upload-list .ant-upload-list-picture-card');
    if(showImage === false) {
      showImage ? true : false;
    }
    if(showImage) {
      showImage ? list?.classList?.remove('ant-upload-wrapper') : false
    }
    
    if(addLandDone) {
      showImage ? list.classList.toggle('ant-upload-wrapper') : list?.classList?.add('ant-upload-wrapper');
      dispatch({
        type:showImageFalse,
      });
      setShowImage(true)
      console.log('dispatch', {showImage})
    }
  },[showImage, addLandDone]);

  return (
    <div style={{ textAlign:'center' }}>
      <Global 
        styles={css`
        .ant-upload-wrapper .ant-upload-list {
          display: inline-block;
        }
        `
  
        }
      />
      <ImgCrop rotationSlider>
          <Upload.Dragger {...uploadProps}
          >
              <div style={{ cursor:'pointer', width:'100%', textAlign:'center' }}>
                  <CloudUploadOutlined style={{ fontSize:'2rem', color:'skyblue' }} />
                  <br />
                  매물 업로드
              </div>
          </Upload.Dragger>
        </ImgCrop>
    </div>
  );
}

export default UploadInfo;