import"./el-icon-tw-CEBic.js";import{b as a,E as s,a as t}from"./el-skeleton-item-k4fntn28.js";import{E as l}from"./el-affix-NC251EU9.js";import{E as e}from"./el-scrollbar-YOPnD4NS.js";import{P as i}from"./index-kmoRY2rt.js";import{a5 as o,h as n,r as c,a2 as r,Y as m,f as d,a as v,c as u,t as g,m as p,o as f,u as k,y,z as h,Z as x,$ as b,s as _,_ as j}from"./index-qOT9rGls.js";import{u as w}from"./theme-77fyVg1w.js";import{u as q}from"./user-Pb2aHnZh.js";import"./event-DkVV3hnh.js";import"./error-lyDbv7Kx.js";import"./index-Nmyz4ihQ.js";const C={class:"radioSation"},$={class:"skelton-img"},E={class:"skelton-img1"},I={class:"song-top"},S={class:"song-img"},L=["src"],U={class:"song-right"},z={class:"song-txt"},P={class:"song-txt1"},T={class:"song-txt2"},Y={class:"skelton-box"},Z={class:"song-center"},A={class:"scrollbar-flex-content"},B=["onClick"],D={class:"skelton-img-two"},F={class:"song-bottom"},G={class:"song-bottom-list"},H=["onClick"],J={class:"text"},K=j(n({__name:"index",setup(n){let j=c("全部"),K=c([]);const M=c({}),N=c([]);let O=c(0),Q=c(!1);const R=r(),V=w(),W=c(),{skeletonLoading:X}=m(q()),aa=async()=>{Q.value=!0;let a={cat:j.value,limit:20};const s=await async function({cat:a="全部",limit:s=10,before:t=""}){return o.get(`/top/playlist/highquality?cat=${a}&limit=${s}&before=${t}`)}(a);K.value=s,M.value=K.value.playlists[0],Q.value=!1},sa=async()=>{const a=await async function(){return o.get("/playlist/highquality/tags")}();N.value=a.tags};return d((()=>V.getTheme),(a=>{W.value="dark"!=a})),v((async()=>{Q.value=!0,"dark"==V.theme?W.value=!1:W.value=!0,await aa(),await sa()})),(o,n)=>{const c=s,r=t,m=e,d=l,v=a;return f(),u("div",C,[g(v,{style:{width:"100%"},fill:""},{default:p((()=>[g(r,{class:"skelton",animated:"",loading:k(X)},{template:p((()=>[y("div",$,[g(c,{variant:"image",class:"skelton-img2"}),y("div",E,[g(c,{variant:"h3",style:{width:"100%","margin-top":"5px"}}),g(c,{variant:"h3",style:{width:"100%","margin-top":"5px"}}),g(c,{variant:"h3",style:{width:"100%","margin-top":"5px"}})])])])),default:p((()=>[y("div",I,[y("div",S,[y("img",{src:M.value.coverImgUrl,alt:""},null,8,L)]),y("div",U,[y("div",z,[y("span",null,h(k(j)),1)]),y("div",P,h(M.value.name),1),y("div",T,h(M.value.description),1)])])])),_:1},8,["loading"]),g(r,{class:"skelton",animated:"",count:1,loading:k(X)},{template:p((()=>[y("div",Y,[(f(),u(x,null,b(40,((a,s)=>y("div",{key:s},[g(c,{variant:"h3",class:"skelton-box-item"})]))),64))])])),default:p((()=>[y("div",Z,[g(d,{offset:56},{default:p((()=>[g(m,{class:_(W.value?"tabs_bg1":"tabs_bg")},{default:p((()=>[y("div",A,[(f(!0),u(x,null,b(N.value,((a,s)=>(f(),u("p",{key:a,class:_(["scrollbar-demo-item",k(O)==s?"active":""]),onClick:t=>((a,s)=>{j.value=s.name,O.value=a,aa()})(s,a)},h(a.name),11,B)))),128))])])),_:1},8,["class"])])),_:1})])])),_:1},8,["loading"]),g(r,{class:"skelton",animated:"",count:1,loading:k(X)},{template:p((()=>[y("div",D,[(f(),u(x,null,b(15,((a,s)=>y("div",{class:"",key:s},[g(c,{variant:"image",class:"skelton-img2-two"}),g(c,{variant:"h3",style:{width:"100%","margin-top":"5px"}})]))),64))])])),default:p((()=>[y("div",F,[y("div",G,[(f(!0),u(x,null,b(k(K).playlists,((a,s)=>(f(),u("div",{class:"song-bottom-item",key:a.id},[y("div",{class:"block_item",onClick:s=>(a=>{R.push({path:"/playList",query:{id:a.id}})})(a)},[g(i,{imgSrc:a.coverImgUrl},null,8,["imgSrc"])],8,H),y("div",J,h(a.name),1)])))),128))])])])),_:1},8,["loading"])])),_:1})])}}}),[["__scopeId","data-v-7a76e240"]]);export{K as default};