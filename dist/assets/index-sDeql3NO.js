import{d as e,e as a,c as t,k as s,u as l,s as n,t as i,j as o,b as u,_ as r,w as c}from"./el-icon-fEaut0vo.js";import{E as d,a as m}from"./el-tab-pane-bTRGtLlf.js";import{a as v,_ as f,u as p,M as _}from"./index-WHTFs1_C.js";import{P as g}from"./index-BRLn-6uM.js";import{f as x,s as b,r as y,j as k,w as S,l as h,an as w,o as j,c as I,A as $,z as D,x as E,y as T,K as z,a0 as M,H as R,F as U,a2 as C,J as W,_ as B,B as L,C as P,q as V,ac as q,ad as A,i as N}from"./index-YIGbLrC0.js";import{r as F}from"./index-i-FSWxrB.js";import{u as H}from"./theme-YIlMbXAK.js";import{C as J}from"./event-DkVV3hnh.js";import{t as K}from"./index-mfm2cg16.js";import{c as O}from"./index-xg2AsITB.js";import"./index-vDgv26t9.js";const Y=e({zIndex:{type:a([Number,String]),default:100},target:{type:String,default:""},offset:{type:Number,default:0},position:{type:String,values:["top","bottom"],default:"top"}}),G={scroll:({scrollTop:e,fixed:a})=>t(e)&&s(a),[J]:e=>s(e)},Q="ElAffix",X=x({name:Q});const Z=c(r(x({...X,props:Y,emits:G,setup(e,{expose:a,emit:t}){const s=e,r=l("affix"),c=b(),d=b(),m=b(),{height:v}=n(),{height:f,width:p,top:_,bottom:g,update:x}=i(d,{windowScroll:!1}),M=i(c),R=y(!1),U=y(0),C=y(0),W=k((()=>({height:R.value?`${f.value}px`:"",width:R.value?`${p.value}px`:""}))),B=k((()=>{if(!R.value)return{};const e=s.offset?o(s.offset):0;return{height:`${f.value}px`,width:`${p.value}px`,top:"top"===s.position?e:"",bottom:"bottom"===s.position?e:"",transform:C.value?`translateY(${C.value}px)`:"",zIndex:s.zIndex}})),L=()=>{if(m.value)if(U.value=m.value instanceof Window?document.documentElement.scrollTop:m.value.scrollTop||0,"top"===s.position)if(s.target){const e=M.bottom.value-s.offset-f.value;R.value=s.offset>_.value&&M.bottom.value>0,C.value=e<0?e:0}else R.value=s.offset>_.value;else if(s.target){const e=v.value-M.top.value-s.offset-f.value;R.value=v.value-s.offset<g.value&&v.value>M.top.value,C.value=e<0?-e:0}else R.value=v.value-s.offset<g.value};return S(R,(e=>t("change",e))),h((()=>{var e;s.target?(c.value=null!=(e=document.querySelector(s.target))?e:void 0,c.value||K(Q,`Target is not existed: ${s.target}`)):c.value=document.documentElement,m.value=O(d.value,!0),x()})),u(m,"scroll",(()=>{x(),t("scroll",{scrollTop:U.value,fixed:R.value})})),w(L),a({update:L,updateRoot:x}),(e,a)=>(j(),I("div",{ref_key:"root",ref:d,class:E(T(r).b()),style:z(T(W))},[$("div",{class:E({[T(r).m("fixed")]:R.value}),style:z(T(B))},[D(e.$slots,"default")],6)],6))}}),[["__file","affix.vue"]])),ee={class:"official"},ae={class:"official_name"},te={class:"official_name_list"},se={class:"track_name"},le={class:"featured_Leaderboard"},ne={class:"img"},ie={class:"text"},oe=B(x({__name:"index",setup(e){const{getOfficialListData:a}=v(),{officialListData:t}=M(v());return h((async()=>{await a()})),(e,a)=>{const s=f;return j(),I(U,null,[R(s,{title:"官方榜"}),$("div",ee,[(j(!0),I(U,null,C(T(t).slice(0,4),(e=>(j(),I("div",{class:"official_list",key:e.id},[$("div",ae,[R(g,{imgSrc:e.coverImgUrl},null,8,["imgSrc"])]),$("div",te,[$("div",null,W(e.name),1),(j(!0),I(U,null,C(e.tracks,((e,a)=>(j(),I("div",{class:"official_name_box",key:a},[$("div",null,W(a+1),1),$("div",se,W(e.first)+" - "+W(e.second),1)])))),128))])])))),128))]),R(s,{title:"特色榜"}),$("div",le,[(j(!0),I(U,null,C(T(t).slice(4),(e=>(j(),I("div",{class:"list",key:e.id},[$("div",ne,[R(g,{imgSrc:e.coverImgUrl},null,8,["imgSrc"])]),$("div",ie,W(e.name),1)])))),128))])],64)}}}),[["__scopeId","data-v-92551e6e"]]),ue=x({__name:"index",setup:e=>(e,a)=>(j(),L(oe))});const re=B({},[["render",function(e,a){return j(),I("div",null,"分类歌单")}]]),ce={class:"banner"},de=["src"],me=B(x({__name:"Banner",setup(e){const{getBanners:a}=p(),{banners:t}=M(p());return h((async()=>{await a()})),(e,a)=>(j(),I("div",ce,[(j(!0),I(U,null,C(T(F)(T(t),4),(e=>(j(),I("div",{class:"item",key:e.bannerId},[$("img",{src:e.pic,alt:""},null,8,de)])))),128))]))}}),[["__scopeId","data-v-1989013c"]]),ve={class:"exclusive"},fe={class:"list"},pe={style:{"font-size":".75rem"}},_e=B(x({__name:"Exclusive",setup(e){const{exclusiveMusicData:a}=M(v()),{getExclusiveMusicData:t}=v();return h((async()=>{await t()})),(e,t)=>{const s=f;return j(),I("div",ve,[R(s,{title:"独家放送"}),$("div",fe,[(j(!0),I(U,null,C(T(a),(e=>(j(),I("div",{class:"item",key:e.id},[R(g,{imgSrc:e.picUrl},null,8,["imgSrc"]),$("span",pe,W(e.name),1)])))),128))])])}}}),[["__scopeId","data-v-a679296a"]]),ge={class:"recommendationStation"},xe={class:"list"},be={class:"text"},ye=B(x({__name:"RecommendationStation",setup(e){const{recommendationStationData:a}=M(v()),{getRecommendationStationData:t}=v();return h((async()=>{await t()})),(e,t)=>{const s=f;return j(),I("div",ge,[R(s,{title:"推荐电台"}),$("div",xe,[(j(!0),I(U,null,C(T(a),(e=>(j(),I("div",{class:"item",key:e.id},[R(g,{imgSrc:e.picUrl},null,8,["imgSrc"]),$("span",be,W(e.name),1)])))),128))])])}}}),[["__scopeId","data-v-80e17750"]]),ke=x({__name:"index",setup:e=>(e,a)=>(j(),I(U,null,[R(me),R(_e),R(ye),R(_)],64))});const Se=B({},[["render",function(e,a){return j(),I("div",null,"歌手")}]]);const he={class:"music"},we=(e=>(q("data-v-ec9c849a"),e=e(),A(),e))((()=>$("h1",null,"音乐馆",-1))),je=B(x({__name:"index",setup(e){const{menus:a,currentMenu:t}={menus:[{label:"精选",name:"Winnow"},{label:"排行",name:"Ranking"},{label:"歌手",name:"Singer"},{label:"分类歌单",name:"ClassifiedPlaylist"}],currentMenu:y("Winnow")},s=H(),l=y();return h((()=>{"dark"==s.theme?l.value=!1:l.value=!0})),S((()=>s.getTheme),(e=>{l.value="dark"!=e})),(e,s)=>{const n=d,i=m,o=Z;return j(),I("div",he,[we,R(o,{offset:56},{default:P((()=>[$("div",{class:E(l.value?"tabs_bg1":"tabs_bg")},[R(i,{modelValue:T(t),"onUpdate:modelValue":s[0]||(s[0]=e=>N(t)?t.value=e:null)},{default:P((()=>[(j(!0),I(U,null,C(T(a),(e=>(j(),L(n,{key:e.name,label:e.label,name:e.name,class:"text-main"},null,8,["label","name"])))),128))])),_:1},8,["modelValue"])],2)])),_:1}),$("div",null,["Ranking"===T(t)?(j(),L(ue,{key:0})):V("",!0),"ClassifiedPlaylist"===T(t)?(j(),L(re,{key:1})):V("",!0),"Winnow"===T(t)?(j(),L(ke,{key:2})):V("",!0),"Singer"===T(t)?(j(),L(Se,{key:3})):V("",!0)])])}}}),[["__scopeId","data-v-ec9c849a"]]);export{je as default};
