import Link from 'next/link';
import React, { useCallback, useEffect } from 'react';

const KakaoMap = () => {
  useEffect(() => {
    const kakaoMapScript = document.createElement('script')
    kakaoMapScript.async = false
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=221865f87f3f5b0bb2ac662f197e31e1&autoload=false`
    document.head.appendChild(kakaoMapScript)
  
    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        var container = document.getElementById('map')
        var options = {
          center: new window.kakao.maps.LatLng(35.934633, 128.556799),
          level: 3,
        }
  
        var map = new window.kakao.maps.Map(container, options);
        var marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(35.934633, 128.556799), // 마커의 좌표
          map: map // 마커를 표시할 지도 객체
      });

      // 마커 위에 표시할 인포윈도우를 생성한다
        var infowindow = new kakao.maps.InfoWindow({
          content : '<div style="padding:15px;">동천동 용광로</div>' // 인포윈도우에 표시할 내용
      });

      // 인포윈도우를 지도에 표시한다
      infowindow.open(map, marker);



      })
    }
  
    kakaoMapScript.addEventListener('load', onLoadKakaoAPI)
  }, []);

  const onHref = useCallback(()=>{
    window.location.href = 'https://map.kakao.com/link/map/동천동용광로,35.934633, 128.556799';
  },[]);


  
  return (
    <div>
      <div onClick={onHref} id="map" style={{ minWidth: '150px', minHeight: '120px', width:'50vw', height:'40vh' }}>
      </div>
    </div>
  );
};

export default KakaoMap;
//221865f87f3f5b0bb2ac662f197e31e1

