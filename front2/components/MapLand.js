import { Button } from 'antd';
import Link from 'next/link';
import React, { useState, useCallback, useEffect } from 'react';

const KakaoMap = () => {
  const [onMap, setOnMap] = useState(false);
  useEffect(() => {
    const kakaoMapScript = document.createElement('script')
    kakaoMapScript.async = false
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=221865f87f3f5b0bb2ac662f197e31e1&autoload=false`
    document.head.appendChild(kakaoMapScript)
  
    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {

        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
      mapOption = {
		        center: new kakao.maps.LatLng(35.934633, 128.556799), // 지도의 중심좌표
		        level: 3, // 지도의 확대 레벨
		        mapTypeId : onMap ? kakao.maps.MapTypeId.HYBRID : kakao.maps.MapTypeId.ROADMAP // 지도종류
      }; 
      
      // 지도를 생성한다 
      var map = new kakao.maps.Map(mapContainer, mapOption); 
      
    // 지도에 마커를 생성하고 표시한다
		var marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(35.934633, 128.556799), // 마커의 좌표
      map: map // 마커를 표시할 지도 객체
  });


    // 지도 클릭 이벤트를 등록한다 (좌클릭 : click, 우클릭 : rightclick, 더블클릭 : dblclick)
		kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
			// window.location.href = 'https://map.kakao.com/link/map/동천동용광로,35.934633, 128.556799';
		});
      })
    }
  
    kakaoMapScript.addEventListener('load', onLoadKakaoAPI)
  }, [onMap]);

  const onClickMap = useCallback(()=>{
    setOnMap(false);
    console.log(onMap);
  },[onMap]);

  const onClickWe = useCallback(()=>{
    setOnMap(true);
    console.log(onMap);
  },[onMap]);
  
  return (
    <div style={{  }}>
      <div id="map" style={{ minWidth: '150px', minHeight: '120px', width:'66vw', height:'80vh'}}>
        <Button.Group style={{float:'right', zIndex:'100'}}>
          <Button onClick={onClickMap}>지도</Button>
          <Button onClick={onClickWe}>스카이뷰</Button>
        </Button.Group>
      </div>
    </div>
  );
};

export default KakaoMap;
//221865f87f3f5b0bb2ac662f197e31e1

/*
우리나라 위도 경도 정규표현식

3[3456789]\.\d+|4[0123]\.\d+|12[456789]\.\d+13[012]\.\d+

*/