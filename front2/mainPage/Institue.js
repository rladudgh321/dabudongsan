import React, { useEffect, useState } from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, ConfigProvider } from 'antd'; 
import { CheckCircleOutlined, InsertRowRightOutlined, SmileOutlined } from '@ant-design/icons';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Institue = () => {
    const [width, setWidth] = useState(()=>{
        return globalThis.innerWidth <768 ? 2: 6;
    });
    useEffect(()=>{
        const handleResize = () => {
            setWidth(globalThis.innerWidth < 768 ? 2:6);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    },[]);
    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        fontSize:10
                    },
                }}
                >
            <Swiper
                // install Swiper modules
                style={{margin:'10px'}}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={width}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                
                <SwiperSlide>
                        <div style={{ maxHeight:'100px', backgroundImage:'url("/img/4/1.png")', height:'100px', width:'340px', backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', border:'1px solid silver'}}></div>
                </SwiperSlide>
                <SwiperSlide>
                        <div style={{ maxHeight:'100px', backgroundImage:'url("/img/4/2.png")', height:'100px', width:'340px', backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', border:'1px solid silver'}}></div>
                </SwiperSlide>
                <SwiperSlide>
                        <div style={{ maxHeight:'100px', backgroundImage:'url("/img/4/3.png")', height:'100px', width:'340px', backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', border:'1px solid silver'}}></div>
                </SwiperSlide>
                <SwiperSlide>
                        <div style={{ maxHeight:'100px', backgroundImage:'url("/img/4/4.png")', height:'100px', width:'340px', backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', border:'1px solid silver'}}></div>
                </SwiperSlide>
                <SwiperSlide>
                        <div style={{ maxHeight:'100px', backgroundImage:'url("/img/4/5.png")', height:'100px', width:'340px', backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', border:'1px solid silver'}}></div>
                </SwiperSlide>
                <SwiperSlide>
                        <div style={{ maxHeight:'100px', backgroundImage:'url("/img/4/6.png")', height:'100px', width:'340px', backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', border:'1px solid silver'}}></div>
                </SwiperSlide>
                <SwiperSlide>
                        <div style={{ maxHeight:'100px', backgroundImage:'url("/img/4/7.png")', height:'100px', width:'340px', backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', border:'1px solid silver'}}></div>
                </SwiperSlide>
                <SwiperSlide>
                        <div style={{ maxHeight:'100px', backgroundImage:'url("/img/4/8.png")', height:'100px', width:'340px', backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', border:'1px solid silver'}}></div>
                </SwiperSlide>
                <SwiperSlide>
                        <div style={{ maxHeight:'100px', backgroundImage:'url("/img/4/9.jpg")', height:'100px', width:'340px', backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', border:'1px solid silver'}}></div>
                </SwiperSlide>
                <SwiperSlide>
                        <div style={{ maxHeight:'100px', backgroundImage:'url("/img/4/10.png")', height:'100px', width:'340px', backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', border:'1px solid silver'}}></div>
                </SwiperSlide>
                <SwiperSlide>
                        <div style={{ maxHeight:'100px', backgroundImage:'url("/img/4/11.png")', height:'100px', width:'340px', backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', border:'1px solid silver'}}></div>
                </SwiperSlide>
                <SwiperSlide>
                        <div style={{ maxHeight:'100px', backgroundImage:'url("/img/4/12.png")', height:'100px', width:'340px', backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', border:'1px solid silver'}}></div>
                </SwiperSlide>
            </Swiper>
            </ConfigProvider>
        </>
    );
}

export default Institue;