(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[614],{10223:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/note",function(){return r(30012)}])},91813:function(e,t,r){"use strict";r.d(t,{Z:function(){return components_AppLayout}});var i=r(85893),n=r(67294),s=r(12386),l=r(55673),d=r(5789),o=r(31929),a=r(65400),x=r.n(a),h=r(89607),c=r(9473),u=r(53757),p=r(41664),g=r.n(p),mainPage_Footer=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{style:{marginTop:"15px"},children:(0,i.jsxs)("div",{style:{display:"flex",backgroundColor:"#545454",height:"150px",color:"white",fontSize:"0.8rem",padding:"10px",lineHeight:"1.2rem"},children:[(0,i.jsx)("div",{children:(0,i.jsx)("img",{src:"/img/logo.png"})}),(0,i.jsxs)("aside",{children:["회사명: 다부부동산",(0,i.jsx)("br",{}),"주소: 경북 칠곡 다부다부",(0,i.jsx)("br",{}),"대표자: 권오득 \xa0\xa0\xa0\xa0 사업자번호:123-45-67890",(0,i.jsx)("br",{}),"전화:070-1234-5678",(0,i.jsx)("br",{}),"휴대폰: 010-1234-5678",(0,i.jsx)("br",{}),"이메일: 다부@naver.com",(0,i.jsx)("br",{}),"Dabu Company, Inc. All rights reserved."]})]})})}),j=r(25675),m=r.n(j),components_AppLayout=e=>{let{children:t}=e,r=(0,c.I0)(),{me:a}=(0,c.v9)(e=>e.user),[p,j]=(0,n.useState)(!1),f=(0,n.useCallback)(()=>{j(e=>!e)},[]),b=(0,n.useCallback)(()=>{r({type:u.Xd})},[r]),[y,k]=(0,n.useState)(()=>globalThis.innerWidth<768);(0,n.useEffect)(()=>{let handleResize=()=>{k(globalThis.innerWidth<768)};return window.addEventListener("resize",handleResize),()=>{window.removeEventListener("resize",handleResize)}},[]);let[v,w]=(0,n.useState)(!1);(0,n.useEffect)(()=>{w(!0)},[]);let _=[{label:a&&v&&(0,i.jsx)(x(),{onClick:b,children:"관리자페이지 나가기"}),key:"admin"},{label:y&&v&&(0,i.jsxs)("div",{style:{lineHeight:"30px"},children:["문의전화 ",(0,i.jsx)("br",{}),"010-456-789"]}),key:"phone"},{label:(0,i.jsx)(g(),{href:"/landsearch",children:"매물 검색"}),key:"search"},{label:(0,i.jsx)(g(),{href:"/request",children:"매물 의뢰"}),key:"request"},{label:(0,i.jsx)(g(),{href:"/note",children:"공지사항"}),key:"note"},{label:(0,i.jsx)(g(),{href:"/intro",children:"회사소개"}),key:"intro"},{label:!y&&v&&(0,i.jsx)(x(),{style:{borderRadius:"15px"},children:"문의전화 010-4567-7890"}),key:"call"}];return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(l.Z,{style:{minHeight:"50px",height:"5vh"},children:[(0,i.jsx)(d.Z,{xs:6,children:(0,i.jsx)("div",{style:{width:"100%",height:"100%",position:"relative"},children:(0,i.jsx)(g(),{href:"/",children:(0,i.jsx)(m(),{className:"img",src:"/img/logo.png",alt:"logo",fill:!0})})})}),(0,i.jsx)(d.Z,{xs:18,md:0,children:(0,i.jsx)(h.Z,{onClick:f,style:{float:"right",color:"gray",borderColor:"silver",background:"#fff",border:"1px solid gray",fontSize:"1.2rem",padding:"5px 10px 5px 10px",margin:"10px",borderRadius:"5px"}})}),p&&(0,i.jsxs)(o.default,{theme:{components:{Menu:{itemHeight:"100"}}},children:[(0,i.jsx)(s.default,{items:_,style:{position:"fixed",minWidth:"200px",top:0,right:"75vw",left:0,bottom:0,border:"1px solid gray",zIndex:"5000"}}),(0,i.jsx)("div",{style:{position:"fixed",width:"100vw",top:0,right:0,left:0,bottom:0,backgroundColor:"rgba(0,0,0,0.5)",zIndex:"10"},onClick:f})]}),(0,i.jsx)(d.Z,{xs:0,md:18,children:(0,i.jsx)(s.default,{mode:"horizontal",items:_})})]}),t,(0,i.jsx)(mainPage_Footer,{})]})}},30012:function(e,t,r){"use strict";r.r(t);var i=r(85893),n=r(91813);r(67294);var s=r(56590),l=r(9473),d=r(2307);t.default=()=>{let{notePost:e}=(0,l.v9)(e=>e.post),t=e.map(e=>({key:e.id,id:e.id,title:e.title,user:"관리자",createdAt:e.createdAt})),r={defaultCurrent:1,total:e.length,position:["bottomCenter"]};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n.Z,{children:(0,i.jsx)(s.Z,{bordered:!0,header:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{style:{fontSize:"1.5rem",marginBottom:"30px"},children:"공지사항"})}),style:{padding:"30px"},children:(0,i.jsx)(d.Z,{pagination:r,columns:[{title:"번호",dataIndex:"id",key:"id",sorter:(e,t)=>e.id-t.id,defaultSortOrder:"descend",showSorterTooltip:"false"},{title:"제목",dataIndex:"title",key:"title",render:e=>(0,i.jsx)("a",{children:e})},{title:"작성자",dataIndex:"user",key:"user"},{title:"등록일",dataIndex:"createdAt",key:"createdAt"}],dataSource:t,children:(0,i.jsx)(d.Z.Column,{sortOrder:"descend"})})})})})}}},function(e){e.O(0,[319,24,260,59,590,307,774,888,179],function(){return e(e.s=10223)}),_N_E=e.O()}]);