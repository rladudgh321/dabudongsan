(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[800],{52453:function(e,l,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/request",function(){return r(67030)}])},91813:function(e,l,r){"use strict";r.d(l,{Z:function(){return components_AppLayout}});var s=r(85893),t=r(67294),i=r(12386),n=r(55673),d=r(5789),a=r(31929),o=r(65400),c=r.n(o),x=r(89607),h=r(9473),j=r(53757),u=r(41664),p=r.n(u),mainPage_Footer=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{style:{marginTop:"15px"},children:(0,s.jsxs)("div",{style:{display:"flex",backgroundColor:"#545454",height:"150px",color:"white",fontSize:"0.8rem",padding:"10px",lineHeight:"1.2rem"},children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{src:"/img/logo.png"})}),(0,s.jsxs)("aside",{children:["회사명: 다부부동산",(0,s.jsx)("br",{}),"주소: 경북 칠곡 다부다부",(0,s.jsx)("br",{}),"대표자: 권오득 \xa0\xa0\xa0\xa0 사업자번호:123-45-67890",(0,s.jsx)("br",{}),"전화:070-1234-5678",(0,s.jsx)("br",{}),"휴대폰: 010-1234-5678",(0,s.jsx)("br",{}),"이메일: 다부@naver.com",(0,s.jsx)("br",{}),"Dabu Company, Inc. All rights reserved."]})]})})}),y=r(25675),m=r.n(y),components_AppLayout=e=>{let{children:l}=e,r=(0,h.I0)(),{me:o}=(0,h.v9)(e=>e.user),[u,y]=(0,t.useState)(!1),f=(0,t.useCallback)(()=>{y(e=>!e)},[]),b=(0,t.useCallback)(()=>{r({type:j.Xd})},[r]),[v,g]=(0,t.useState)(()=>globalThis.innerWidth<768);(0,t.useEffect)(()=>{let handleResize=()=>{g(globalThis.innerWidth<768)};return window.addEventListener("resize",handleResize),()=>{window.removeEventListener("resize",handleResize)}},[]);let[k,C]=(0,t.useState)(!1);(0,t.useEffect)(()=>{C(!0)},[]);let w=[{label:o&&k&&(0,s.jsx)(c(),{onClick:b,children:"관리자페이지 나가기"}),key:"admin"},{label:v&&k&&(0,s.jsxs)("div",{style:{lineHeight:"30px"},children:["문의전화 ",(0,s.jsx)("br",{}),"010-456-789"]}),key:"phone"},{label:(0,s.jsx)(p(),{href:"/landsearch",children:"매물 검색"}),key:"search"},{label:(0,s.jsx)(p(),{href:"/request",children:"매물 의뢰"}),key:"request"},{label:(0,s.jsx)(p(),{href:"/note",children:"공지사항"}),key:"note"},{label:(0,s.jsx)(p(),{href:"/intro",children:"회사소개"}),key:"intro"},{label:!v&&k&&(0,s.jsx)(c(),{style:{borderRadius:"15px"},children:"문의전화 010-4567-7890"}),key:"call"}];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.Z,{style:{minHeight:"50px",height:"5vh"},children:[(0,s.jsx)(d.Z,{xs:6,children:(0,s.jsx)("div",{style:{width:"100%",height:"100%",position:"relative"},children:(0,s.jsx)(p(),{href:"/",children:(0,s.jsx)(m(),{className:"img",src:"/img/logo.png",alt:"logo",fill:!0})})})}),(0,s.jsx)(d.Z,{xs:18,md:0,children:(0,s.jsx)(x.Z,{onClick:f,style:{float:"right",color:"gray",borderColor:"silver",background:"#fff",border:"1px solid gray",fontSize:"1.2rem",padding:"5px 10px 5px 10px",margin:"10px",borderRadius:"5px"}})}),u&&(0,s.jsxs)(a.default,{theme:{components:{Menu:{itemHeight:"100"}}},children:[(0,s.jsx)(i.default,{items:w,style:{position:"fixed",minWidth:"200px",top:0,right:"75vw",left:0,bottom:0,border:"1px solid gray",zIndex:"5000"}}),(0,s.jsx)("div",{style:{position:"fixed",width:"100vw",top:0,right:0,left:0,bottom:0,backgroundColor:"rgba(0,0,0,0.5)",zIndex:"10"},onClick:f})]}),(0,s.jsx)(d.Z,{xs:0,md:18,children:(0,s.jsx)(i.default,{mode:"horizontal",items:w})})]}),l,(0,s.jsx)(mainPage_Footer,{})]})}},54883:function(e,l,r){"use strict";r.d(l,{g3:function(){return i}});var s=r(67294);let t=s.createContext(),i=t.Provider;t.Consumer},81700:function(e,l,r){"use strict";var s=r(67294);l.Z=e=>{let[l,r]=(0,s.useState)(e),t=(0,s.useCallback)(e=>{r(e.target.value)},[l]);return[l,t,r]}},67030:function(e,l,r){"use strict";r.r(l);var s=r(85893),t=r(67294),i=r(56590),n=r(74048),d=r(65400),a=r.n(d),o=r(82891),c=r(51024),x=r(31059),h=r(97538),j=r(91813),u=r(9473),p=r(46366),y=r(81700),m=r(71802);r(54883),l.default=()=>{let e=(0,u.I0)(),[l,r]=(0,t.useState)(null),d=(0,t.useCallback)(e=>{r(e),console.log(e,l)},[l]),[f,b]=(0,t.useState)(null),v=(0,t.useCallback)(e=>{b(e),console.log(e)},[]),{chilgok:g,eumpmeon:k,eupArray:C,li:w}=(0,u.v9)(e=>e.location),[Z,I]=(0,t.useState)(!1),_=(0,t.useCallback)(l=>{g.map(r=>{if(r.key===parseInt(l.key,10))return I(!0),console.log("click",l,r.label,k),e({type:p.$L,data:{eup:r.label,more:r.more}})})},[k,g,e]),E=(0,t.useCallback)(l=>{C.map(r=>{if(r.key===parseInt(l.key,10))return e({type:p.Nx,data:r.label})})},[C,e]),S=(0,t.useCallback)(()=>e({type:p.Nb}),[e]),[z,B]=(0,y.Z)(""),[N,F]=(0,y.Z)(""),[R,T]=(0,t.useState)(null),A=(0,t.useCallback)(e=>{T(e),console.log(e)},[]),[L,P]=(0,y.Z)(""),[H,q]=(0,y.Z)(""),[G,W]=(0,y.Z)(""),[X,O]=(0,y.Z)(""),[D,M]=(0,t.useState)(!1),[Y,$]=(0,t.useState)(!1),J=(0,t.useCallback)(e=>{M(e.target.checked),$(!1)},[]),K=(0,t.useCallback)(()=>"읍/면"!==k&&"리"!==w&&z?D?G?void(console.log({selectedButton:l,selectedBuyTypeButton:f,eumpmeon:k,li:w,address:z,price:N,selectedLandTypeButton:R,name:L,title:H,contact:G,textDetail:X,term:D}),e({type:m.eR,data:{selectedButton:l,selectedBuyTypeButton:f,eumpmeon:k,li:w,address:z,price:N,selectedLandTypeButton:R,name:L,title:H,contact:G,textDetail:X}})):alert("연락처는 필수 기입입니다"):$(!0):alert("항목을 입력해주세요"),[e,l,f,k,w,z,N,R,L,H,G,X,D]);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(j.Z,{children:(0,s.jsx)(h.Z,{onFinish:K,children:(0,s.jsx)(i.Z,{bordered:!0,header:(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(a().Group,{children:[(0,s.jsx)(a(),{type:"구해요"===l?"primary":"default",onClick:()=>d("구해요"),children:"구해요"},"apart"),(0,s.jsx)(a(),{type:"팔아요"===l?"primary":"default",onClick:()=>d("팔아요"),children:"팔아요"},"villa")]})}),style:{padding:"10px",margin:"20px 10px 0 10px"},children:(0,s.jsxs)(n.default,{direction:"vertical",children:[(0,s.jsxs)(i.Z.Item,{style:{justifyContent:"normal"},children:[(0,s.jsx)("div",{style:{width:"15vw"},children:"거래 종류"}),(0,s.jsxs)(a().Group,{children:[(0,s.jsx)(a(),{type:"분양"===f?"primary":"default",onClick:()=>v("분양"),children:"분양"}),(0,s.jsx)(a(),{type:"매매"===f?"primary":"default",onClick:()=>v("매매"),children:"매매"}),(0,s.jsx)(a(),{type:"전세"===f?"primary":"default",onClick:()=>v("전세"),children:"전세"}),(0,s.jsx)(a(),{type:"월세"===f?"primary":"default",onClick:()=>v("월세"),children:"월세"})]})]}),(0,s.jsxs)(i.Z.Item,{style:{justifyContent:"normal"},children:[(0,s.jsx)("div",{style:{width:"15vw"},children:"위치"}),(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)("div",{children:(0,s.jsx)(a(),{onClick:S,children:"경북 칠곡군"})}),(0,s.jsx)("div",{children:(0,s.jsx)(o.default.Button,{menu:{items:g,onClick:_},children:(0,s.jsx)("span",{children:k})})}),(0,s.jsx)("div",{children:Z&&(0,s.jsx)(o.default.Button,{menu:{items:C,onClick:E},children:(0,s.jsx)("span",{children:w})})}),(0,s.jsx)("div",{children:(0,s.jsx)(c.default,{value:z,onChange:B,placeholder:"상세주소"})})]})]}),(0,s.jsxs)(i.Z.Item,{style:{justifyContent:"normal"},children:[(0,s.jsx)("div",{style:{width:"15vw"},children:"희망금액"}),(0,s.jsx)("div",{children:(0,s.jsx)(c.default,{placeholder:"미입력시 협의",value:N,onChange:F})})]}),(0,s.jsxs)(i.Z.Item,{style:{justifyContent:"normal"},children:[(0,s.jsx)("div",{style:{width:"15vw"},children:"거래 종류"}),(0,s.jsxs)(a().Group,{children:[(0,s.jsx)(a(),{type:"아파트"===R?"primary":"default",onClick:()=>A("아파트"),children:"아파트"},"apart"),(0,s.jsx)(a(),{type:"신축빌라"===R?"primary":"default",onClick:()=>A("신축빌라"),children:"신축빌라"},"villa"),(0,s.jsx)(a(),{type:"원/투/쓰리룸"===R?"primary":"default",onClick:()=>A("원/투/쓰리룸"),children:"원/투/쓰리룸"},"oneroom"),(0,s.jsx)(a(),{type:"사무실"===R?"primary":"default",onClick:()=>A("사무실"),children:"사무실"},"office"),(0,s.jsx)(a(),{type:"상가"===R?"primary":"default",onClick:()=>A("상가"),children:"상가"},"store"),(0,s.jsx)(a(),{type:"오피스텔"===R?"primary":"default",onClick:()=>A("오피스텔"),children:"오피스텔"},"officetel")]},"btn_group")]}),(0,s.jsx)(i.Z.Item,{style:{borderBlockEnd:"none"},children:(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)("div",{style:{width:"15vw"},children:"이름"}),(0,s.jsx)(c.default,{style:{width:"40vw"},placeholder:"이름",value:L,onChange:P})]})}),(0,s.jsx)(i.Z.Item,{style:{borderBlockEnd:"none"},children:(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)("div",{style:{width:"15vw"},children:"제목"}),(0,s.jsx)(c.default,{style:{width:"70vw"},placeholder:"제목",value:H,onChange:q})]})}),(0,s.jsx)(i.Z.Item,{style:{borderBlockEnd:"none"},children:(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)("div",{style:{width:"15vw"},children:"연락처"}),(0,s.jsx)(c.default,{style:{width:"40vw"},placeholder:"연락처",value:G,onChange:W})]})}),(0,s.jsx)(i.Z.Item,{style:{borderBlockEnd:"none"},children:(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)("div",{style:{width:"15vw"},children:"상세내용"}),(0,s.jsx)(c.default.TextArea,{style:{width:"70vw",height:"30vh"},value:X,onChange:O})]})}),(0,s.jsx)(i.Z.Item,{style:{borderBlockEnd:"none"},children:(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:"개인정보 수집 안내"}),(0,s.jsxs)("aside",{style:{height:"20vh",overflowY:"scroll",border:"1px solid silver",padding:"10px",borderRadius:"10px"},children:["개인정보의 수집 및 이용 동의",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"본사는 서비스 제공을 위해서 아래와 같이 개인정보를 수집합니다. 정보주체는 본 개인정보의 수집 및 이용에 관한 동의를 거부하실 권리가 있으나, 서비스 제공에 필요한 최소한의 개인정보이므로 동의를 해주셔야 서비스를 이용하실 수 있습니다.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"• 수집하려는 개인 정보 항목: 휴대폰 번호",(0,s.jsx)("br",{}),"• 개인정보의 수집 목적: 문의신청",(0,s.jsx)("br",{}),"• 개인정보의 보유기간: 사용 후 바로 삭제",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"개인정보 제3자 제공 동의",(0,s.jsx)("br",{}),"본사는 서비스 제공을 위해서 아래와 같이 개 인정보를 수집합니다. 정보주체는 본 개인 정보의 수집 및 이용에 관한 동의를 거부하실 권리가 있으나, 서비 스 제공에 필요한 최소한의 개인정보이므로 동의를 해 주셔야 서비스를 이용하실 수 있습니다.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),"• 개인정보를 제공받는 자 : 본사 중개사무소",(0,s.jsx)("br",{}),"• 개인정보를 제공받는 자의 개인정보 이용 목적 : 매물중개목적",(0,s.jsx)("br",{}),"• 제공하는 개인정보의 항목 : 휴대폰 번호",(0,s.jsx)("br",{}),"• 개인정보를 제공받는 자의 개인정보 보유 및 이용기간 : 5년",(0,s.jsx)("br",{}),"• 동의 거부권 및 불이익 : 해당 내용에 동의하지 않을 시, 매물 중개 의뢰가 불가능합니다.",(0,s.jsx)("br",{})]})]})}),(0,s.jsx)(i.Z.Item,{style:{borderBlockEnd:"none"},children:(0,s.jsx)(x.default,{style:{margin:"0 auto"},checked:D,onChange:J,children:"동의합니다"})}),Y&&(0,s.jsx)("div",{style:{color:"red",textAlign:"center"},children:"동의하셔야 진행하실 수 있습니다"}),(0,s.jsx)(i.Z.Item,{style:{borderBlockEnd:"none"},children:(0,s.jsx)(a(),{style:{margin:"0 auto",width:"40vw",background:"#ddd"},htmlType:"submit",children:"저장"})})]})})})})})}}},function(e){e.O(0,[319,24,260,59,590,538,774,888,179],function(){return e(e.s=52453)}),_N_E=e.O()}]);