import React, { useEffect } from 'react';

const KakaoMap = () => {
  useEffect(() => {
    // Kakao Map API 스크립트를 동적으로 로드
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=221865f87f3f5b0bb2ac662f197e31e1`;
    script.async = true;
    script.onload = () => {
      // Kakao Map API 스크립트 로드 완료 후 실행될 코드
      const mapContainer = document.getElementById('map');
          const options = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3
          };
      const map = new window.kakao.maps.Map(mapContainer, options);
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div>
      {/* 지도를 표시할 div */}
      <div id="map" style={{ width: '100%', height: '350px' }}></div>
    </div>
  );
};

export default KakaoMap;