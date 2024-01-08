import{j as e,d as a,k as t,c as s,u as l,C as i,D as n,p as o,l as u,_ as r,w as c}from"./el-icon-Z3MxFt-s.js";import{E as d,a as m}from"./el-tab-pane-423FP4o3.js";import{a as v,_ as f,u as p,M as _}from"./index-I6kBMoar.js";import{P as g}from"./index-rWniCLjm.js";import{l as x,s as b,r as y,d as k,w as S,f as h,au as w,o as j,c as I,D,C as E,B as $,u as M,O as T,a9 as C,K as R,F as U,aa as z,M as W,_ as B,E as L,G as P,A as V,ak as A,al as N,i as O}from"./index-GsZzM1oS.js";import{r as q}from"./index-aUu7IP7u.js";import{u as F}from"./theme-sZWHSU17.js";import{C as G,t as K}from"./event-hiqsiK8x.js";import{c as Y}from"./index-FmlaxjgP.js";import"./index-Ij9YtUuN.js";import"./index-dbX9Ir8N.js";const H=e({zIndex:{type:a([Number,String]),default:100},target:{type:String,default:""},offset:{type:Number,default:0},position:{type:String,values:["top","bottom"],default:"top"}}),J={scroll:({scrollTop:e,fixed:a})=>t(e)&&s(a),[G]:e=>s(e)},Q="ElAffix",X=x({name:Q});const Z=c(r(x({...X,props:H,emits:J,setup(e,{expose:a,emit:t}){const s=e,r=l("affix"),c=b(),d=b(),m=b(),{height:v}=i(),{height:f,width:p,top:_,bottom:g,update:x}=n(d,{windowScroll:!1}),C=n(c),R=y(!1),U=y(0),z=y(0),W=k((()=>({height:R.value?`${f.value}px`:"",width:R.value?`${p.value}px`:""}))),B=k((()=>{if(!R.value)return{};const e=s.offset?o(s.offset):0;return{height:`${f.value}px`,width:`${p.value}px`,top:"top"===s.position?e:"",bottom:"bottom"===s.position?e:"",transform:z.value?`translateY(${z.value}px)`:"",zIndex:s.zIndex}})),L=()=>{if(m.value)if(U.value=m.value instanceof Window?document.documentElement.scrollTop:m.value.scrollTop||0,"top"===s.position)if(s.target){const e=C.bottom.value-s.offset-f.value;R.value=s.offset>_.value&&C.bottom.value>0,z.value=e<0?e:0}else R.value=s.offset>_.value;else if(s.target){const e=v.value-C.top.value-s.offset-f.value;R.value=v.value-s.offset<g.value&&v.value>C.top.value,z.value=e<0?-e:0}else R.value=v.value-s.offset<g.value};return S(R,(e=>t("change",e))),h((()=>{var e;s.target?(c.value=null!=(e=document.querySelector(s.target))?e:void 0,c.value||K(Q,`Target is not existed: ${s.target}`)):c.value=document.documentElement,m.value=Y(d.value,!0),x()})),u(m,"scroll",(()=>{x(),t("scroll",{scrollTop:U.value,fixed:R.value})})),w(L),a({update:L,updateRoot:x}),(e,a)=>(j(),I("div",{ref_key:"root",ref:d,class:$(M(r).b()),style:T(M(W))},[D("div",{class:$({[M(r).m("fixed")]:R.value}),style:T(M(B))},[E(e.$slots,"default")],6)],6))}}),[["__file","affix.vue"]])),ee={class:"official"},ae={class:"official_name"},te={class:"official_name_list"},se={class:"track_name"},le={class:"featured_Leaderboard"},ie={class:"img"},ne={class:"text"},oe=B(x({__name:"index",setup(e){const{getOfficialListData:a}=v(),{officialListData:t}=C(v());return h((async()=>{await a()})),(e,a)=>{const s=f;return j(),I(U,null,[R(s,{title:"官方榜"}),D("div",ee,[(j(!0),I(U,null,z(M(t).slice(0,4),(e=>(j(),I("div",{class:"official_list",key:e.id},[D("div",ae,[R(g,{imgSrc:e.coverImgUrl},null,8,["imgSrc"])]),D("div",te,[D("div",null,W(e.name),1),(j(!0),I(U,null,z(e.tracks,((e,a)=>(j(),I("div",{class:"official_name_box",key:a},[D("div",null,W(a+1),1),D("div",se,W(e.first)+" - "+W(e.second),1)])))),128))])])))),128))]),R(s,{title:"特色榜"}),D("div",le,[(j(!0),I(U,null,z(M(t).slice(4),(e=>(j(),I("div",{class:"list",key:e.id},[D("div",ie,[R(g,{imgSrc:e.coverImgUrl},null,8,["imgSrc"])]),D("div",ne,W(e.name),1)])))),128))])],64)}}}),[["__scopeId","data-v-92551e6e"]]),ue=x({__name:"index",setup:e=>(e,a)=>(j(),L(oe))});const re=B({},[["render",function(e,a){return j(),I("div",null,"分类歌单")}]]),ce={class:"banner"},de=["src"],me=B(x({__name:"Banner",setup(e){const{getBanners:a}=p(),{banners:t}=C(p());return h((async()=>{await a()})),(e,a)=>(j(),I("div",ce,[(j(!0),I(U,null,z(M(q)(M(t),4),(e=>(j(),I("div",{class:"item",key:e.bannerId},[D("img",{src:e.pic,alt:""},null,8,de)])))),128))]))}}),[["__scopeId","data-v-1989013c"]]),ve={class:"exclusive"},fe={class:"list"},pe={style:{"font-size":".75rem"}},_e=B(x({__name:"Exclusive",setup(e){const{exclusiveMusicData:a}=C(v()),{getExclusiveMusicData:t}=v();return h((async()=>{await t()})),(e,t)=>{const s=f;return j(),I("div",ve,[R(s,{title:"独家放送"}),D("div",fe,[(j(!0),I(U,null,z(M(a),(e=>(j(),I("div",{class:"item",key:e.id},[R(g,{imgSrc:e.picUrl},null,8,["imgSrc"]),D("span",pe,W(e.name),1)])))),128))])])}}}),[["__scopeId","data-v-a679296a"]]),ge={class:"recommendationStation"},xe={class:"list"},be={class:"text"},ye=B(x({__name:"RecommendationStation",setup(e){const{recommendationStationData:a}=C(v()),{getRecommendationStationData:t}=v();return h((async()=>{await t()})),(e,t)=>{const s=f;return j(),I("div",ge,[R(s,{title:"推荐电台"}),D("div",xe,[(j(!0),I(U,null,z(M(a),(e=>(j(),I("div",{class:"item",key:e.id},[R(g,{imgSrc:e.picUrl},null,8,["imgSrc"]),D("span",be,W(e.name),1)])))),128))])])}}}),[["__scopeId","data-v-80e17750"]]),ke=x({__name:"index",setup:e=>(e,a)=>(j(),I(U,null,[R(me),R(_e),R(ye),R(_)],64))});const Se=B({},[["render",function(e,a){return j(),I("div",null,"歌手")}]]);const he={class:"music"},we=(e=>(A("data-v-ec9c849a"),e=e(),N(),e))((()=>D("h1",null,"音乐馆",-1))),je=B(x({__name:"index",setup(e){const{menus:a,currentMenu:t}={menus:[{label:"精选",name:"Winnow"},{label:"排行",name:"Ranking"},{label:"歌手",name:"Singer"},{label:"分类歌单",name:"ClassifiedPlaylist"}],currentMenu:y("Winnow")},s=F(),l=y();return h((()=>{"dark"==s.theme?l.value=!1:l.value=!0})),S((()=>s.getTheme),(e=>{l.value="dark"!=e})),(e,s)=>{const i=m,n=d,o=Z;return j(),I("div",he,[we,R(o,{offset:56},{default:P((()=>[D("div",{class:$(l.value?"tabs_bg1":"tabs_bg")},[R(n,{modelValue:M(t),"onUpdate:modelValue":s[0]||(s[0]=e=>O(t)?t.value=e:null)},{default:P((()=>[(j(!0),I(U,null,z(M(a),(e=>(j(),L(i,{key:e.name,label:e.label,name:e.name,class:"text-main"},null,8,["label","name"])))),128))])),_:1},8,["modelValue"])],2)])),_:1}),D("div",null,["Ranking"===M(t)?(j(),L(ue,{key:0})):V("",!0),"ClassifiedPlaylist"===M(t)?(j(),L(re,{key:1})):V("",!0),"Winnow"===M(t)?(j(),L(ke,{key:2})):V("",!0),"Singer"===M(t)?(j(),L(Se,{key:3})):V("",!0)])])}}}),[["__scopeId","data-v-ec9c849a"]]);export{je as default};
