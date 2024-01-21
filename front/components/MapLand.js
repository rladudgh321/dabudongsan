import { Button } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const KakaoMap = ({width}) => {
  console.log('kakaoWidth', width);
  const { eumpmeon, lia, address } = useSelector((state)=>state.land);
  console.log({eumpmeon, lia, address});
  const [onMap, setOnMap] = useState(false);
  const [traffic, setTraffic] = useState(false);
  useEffect(() => {
    const kakaoMapScript = document.createElement('script')
    kakaoMapScript.async = false
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=221865f87f3f5b0bb2ac662f197e31e1&autoload=false&libraries=services`
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
      
      // 지형도 타일 이미지 추가
      traffic ? map.addOverlayMapTypeId(kakao.maps.MapTypeId.USE_DISTRICT) : map.removeOverlayMapTypeId(kakao.maps.MapTypeId.USE_DISTRICT)

      // 주소-좌표 변환 객체를 생성합니다
      var geocoder = new kakao.maps.services.Geocoder();
      
      const addressSearcha = `경상북도 칠곡군 ${eumpmeon} ${lia} ${address}`;
      console.log('addressSearcha',addressSearcha);

      // 주소로 좌표를 검색합니다
    // geocoder.addressSearch('제주특별자치도 제주시 첨단로 ', function(result, status) {
    geocoder.addressSearch(addressSearcha, function(result, status) {
    // geocoder.addressSearch(`경상북도 칠곡군 왜관읍 왜관리 293-21`, function(result, status) {

    // 정상적으로 검색이 완료됐으면
    if (status === kakao.maps.services.Status.OK) {

        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
            map: map,
            position: coords
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
            content: '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>'
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
    }
    });





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
  }, [onMap, eumpmeon, lia, address, traffic]);

  const onClickMap = useCallback(()=>{
    setOnMap(false);
    console.log(onMap);
  },[onMap]);

  const onClickWe = useCallback(()=>{
    setOnMap(true);
    console.log(onMap);
  },[onMap]);
  
  const onClickTraffic = useCallback(() => {
    console.log("traffic", traffic)
    setTraffic((prev) => !prev)
  }, [traffic])

  return (
        <div id="map" style={{ minWidth: '150px', minHeight: '120px', width:width, height:'88vh'}}>
          <Button.Group style={{float:'right', zIndex:'100'}}>
            <Button onClick={onClickTraffic}>지적도</Button>
            <Button onClick={onClickMap}>지도</Button>
            <Button onClick={onClickWe}>스카이뷰</Button>
          </Button.Group>
        </div>
  );
};

export default KakaoMap;
//221865f87f3f5b0bb2ac662f197e31e1

/*
우리나라 위도 경도 정규표현식

3[3456789]\.\d+|4[0123]\.\d+|12[456789]\.\d+13[012]\.\d+

*/