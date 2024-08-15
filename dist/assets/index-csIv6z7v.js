import{c as e,e as t,s as a,u as l,E as s,_ as i,o as n,w as o,t as r}from"./el-icon-Y0y_9I_M.js";import{u,E as c,a as d,b as v,c as m,_ as h,M as p}from"./index-RJyV7PxS.js";import{D as f,r as g,j as y,u as k,f as _,X as I,a as w,b as x,E as C,C as b,k as M,ah as S,h as E,o as L,c as H,y as j,l as N,m as T,s as D,M as A,ai as B,t as P,H as $,I as V,T as O,A as R,aj as z,q,n as U,Z as W,$ as X,z as Y,x as K,O as Z,ab as F,Y as G,_ as J,a2 as Q,a7 as ee,a9 as te,aa as ae}from"./index-3a7MM4_w.js";import{u as le}from"./index-D0m3356q.js";import{f as se}from"./index-QbbmOe5g.js";import{t as ie,P as ne}from"./index-SA_pidgL.js";import"./index-oZK4A4rq.js";const oe=e({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0}}),re={change:(e,a)=>[e,a].every(t)},ue=Symbol("carouselContextKey"),ce=(e,t,l)=>{const{children:s,addChild:i,removeChild:n}=le(b(),"ElCarouselItem"),o=f(),r=g(-1),u=g(null),c=g(!1),d=g(),v=g(0),m=g(!0),h=y((()=>"never"!==e.arrow&&!k(L))),p=y((()=>s.value.some((e=>e.props.label.toString().length>0)))),E=y((()=>"card"===e.type)),L=y((()=>"vertical"===e.direction)),H=y((()=>"auto"!==e.height?{height:e.height}:{height:`${v.value}px`,overflow:"hidden"})),j=ie((e=>{B(e)}),300,{trailing:!0}),N=ie((t=>{!function(t){"hover"===e.trigger&&t!==r.value&&(r.value=t)}(t)}),300);function T(){u.value&&(clearInterval(u.value),u.value=null)}function D(){e.interval<=0||!e.autoplay||u.value||(u.value=setInterval((()=>A()),e.interval))}const A=()=>{r.value<s.value.length-1?r.value=r.value+1:e.loop&&(r.value=0)};function B(t){if(M(t)){const e=s.value.filter((e=>e.props.name===t));e.length>0&&(t=s.value.indexOf(e[0]))}if(t=Number(t),Number.isNaN(t)||t!==Math.floor(t))return;const a=s.value.length,l=r.value;r.value=t<0?e.loop?a-1:0:t>=a?e.loop?0:a-1:t,l===r.value&&P(l),$()}function P(e){s.value.forEach(((t,a)=>{t.translateItem(a,r.value,e)}))}function $(){T(),e.pauseOnHover||D()}_((()=>r.value),((e,a)=>{P(a),m.value&&(e%=2,a%=2),a>-1&&t("change",e,a)})),_((()=>e.autoplay),(e=>{e?D():T()})),_((()=>e.loop),(()=>{B(r.value)})),_((()=>e.interval),(()=>{$()}));const V=I();return w((()=>{_((()=>s.value),(()=>{s.value.length>0&&B(e.initialIndex)}),{immediate:!0}),V.value=a(d.value,(()=>{P()})),D()})),x((()=>{T(),d.value&&V.value&&V.value.stop()})),C(ue,{root:d,isCardType:E,isVertical:L,items:s,loop:e.loop,addItem:i,removeItem:n,setActiveItem:B,setContainerHeight:function(t){"auto"===e.height&&(v.value=t)}}),{root:d,activeIndex:r,arrowDisplay:h,hasLabel:p,hover:c,isCardType:E,items:s,isVertical:L,containerStyle:H,isItemsTwoLength:m,handleButtonEnter:function(e){k(L)||s.value.forEach(((t,a)=>{e===function(e,t){var a,l,i,n;const o=k(s),r=o.length;if(0===r||!e.states.inStage)return!1;const u=t+1,c=t-1,d=r-1,v=o[d].states.active,m=o[0].states.active,h=null==(l=null==(a=o[u])?void 0:a.states)?void 0:l.active,p=null==(n=null==(i=o[c])?void 0:i.states)?void 0:n.active;return t===d&&m||h?"left":!!(0===t&&v||p)&&"right"}(t,a)&&(t.states.hover=!0)}))},handleButtonLeave:function(){k(L)||s.value.forEach((e=>{e.states.hover=!1}))},handleIndicatorClick:function(e){r.value=e},handleMouseEnter:function(){c.value=!0,e.pauseOnHover&&T()},handleMouseLeave:function(){c.value=!1,D()},setActiveItem:B,prev:function(){B(r.value-1)},next:function(){B(r.value+1)},PlaceholderItem:function(){var t;const a=null==(t=o.default)?void 0:t.call(o);if(!a)return null;const l=se(a).filter((e=>S(e)&&"ElCarouselItem"===e.type.name));return 2===(null==l?void 0:l.length)&&e.loop&&!E.value?(m.value=!0,l):(m.value=!1,null)},isTwoLengthShow:e=>!m.value||(r.value<=1?e<=1:e>1),throttledArrowClick:j,throttledIndicatorHover:N}},de=["onMouseenter","onClick"],ve={key:0},me=E({name:"ElCarousel"});var he=i(E({...me,props:oe,emits:re,setup(e,{expose:t,emit:a}){const i=e,{root:n,activeIndex:o,arrowDisplay:r,hasLabel:u,hover:c,isCardType:d,items:v,isVertical:m,containerStyle:h,handleButtonEnter:p,handleButtonLeave:f,handleIndicatorClick:g,handleMouseEnter:_,handleMouseLeave:I,setActiveItem:w,prev:x,next:C,PlaceholderItem:b,isTwoLengthShow:M,throttledArrowClick:S,throttledIndicatorHover:E}=ce(i,a),K=l("carousel"),Z=y((()=>{const e=[K.b(),K.m(i.direction)];return k(d)&&e.push(K.m("card")),e})),F=y((()=>{const e=[K.e("indicators"),K.em("indicators",i.direction)];return k(u)&&e.push(K.em("indicators","labels")),"outside"===i.indicatorPosition&&e.push(K.em("indicators","outside")),k(m)&&e.push(K.em("indicators","right")),e}));return t({setActiveItem:w,prev:x,next:C}),(e,t)=>(L(),H("div",{ref_key:"root",ref:n,class:D(k(Z)),onMouseenter:t[6]||(t[6]=A(((...e)=>k(_)&&k(_)(...e)),["stop"])),onMouseleave:t[7]||(t[7]=A(((...e)=>k(I)&&k(I)(...e)),["stop"]))},[j("div",{class:D(k(K).e("container")),style:U(k(h))},[k(r)?(L(),N(O,{key:0,name:"carousel-arrow-left",persisted:""},{default:T((()=>[V(j("button",{type:"button",class:D([k(K).e("arrow"),k(K).em("arrow","left")]),onMouseenter:t[0]||(t[0]=e=>k(p)("left")),onMouseleave:t[1]||(t[1]=(...e)=>k(f)&&k(f)(...e)),onClick:t[2]||(t[2]=A((e=>k(S)(k(o)-1)),["stop"]))},[P(k(s),null,{default:T((()=>[P(k(B))])),_:1})],34),[[$,("always"===e.arrow||k(c))&&(i.loop||k(o)>0)]])])),_:1})):R("v-if",!0),k(r)?(L(),N(O,{key:1,name:"carousel-arrow-right",persisted:""},{default:T((()=>[V(j("button",{type:"button",class:D([k(K).e("arrow"),k(K).em("arrow","right")]),onMouseenter:t[3]||(t[3]=e=>k(p)("right")),onMouseleave:t[4]||(t[4]=(...e)=>k(f)&&k(f)(...e)),onClick:t[5]||(t[5]=A((e=>k(S)(k(o)+1)),["stop"]))},[P(k(s),null,{default:T((()=>[P(k(z))])),_:1})],34),[[$,("always"===e.arrow||k(c))&&(i.loop||k(o)<k(v).length-1)]])])),_:1})):R("v-if",!0),P(k(b)),q(e.$slots,"default")],6),"none"!==e.indicatorPosition?(L(),H("ul",{key:0,class:D(k(F))},[(L(!0),H(W,null,X(k(v),((t,a)=>V((L(),H("li",{key:a,class:D([k(K).e("indicator"),k(K).em("indicator",e.direction),k(K).is("active",a===k(o))]),onMouseenter:e=>k(E)(a),onClick:A((e=>k(g)(a)),["stop"])},[j("button",{class:D(k(K).e("button"))},[k(u)?(L(),H("span",ve,Y(t.props.label),1)):R("v-if",!0)],2)],42,de)),[[$,k(M)(a)]]))),128))],2)):R("v-if",!0)],34))}}),[["__file","carousel.vue"]]);const pe=e({name:{type:String,default:""},label:{type:[String,Number],default:""}}),fe=(e,t)=>{const a=K(ue),l=b(),s=.83,i=g(),o=g(!1),r=g(0),u=g(1),c=g(!1),d=g(!1),v=g(!1),m=g(!1),{isCardType:h,isVertical:p}=a;const f=(e,t,l)=>{var o;const f=k(h),g=null!=(o=a.items.value.length)?o:Number.NaN,y=e===t;f||n(l)||(m.value=y||e===l),!y&&g>2&&a.loop&&(e=function(e,t,a){const l=a-1,s=a/2;return 0===t&&e===l?-1:t===l&&0===e?a:e<t-1&&t-e>=s?a+1:e>t+1&&e-t>=s?-2:e}(e,t,g));const _=k(p);c.value=y,f?(v.value=Math.round(Math.abs(e-t))<=1,r.value=function(e,t){var l,s;const i=k(p)?(null==(l=a.root.value)?void 0:l.offsetHeight)||0:(null==(s=a.root.value)?void 0:s.offsetWidth)||0;return v.value?i*(1.17*(e-t)+1)/4:e<t?-1.83*i/4:3.83*i/4}(e,t),u.value=k(c)?1:s):r.value=function(e,t,l){const s=a.root.value;return s?((l?s.offsetHeight:s.offsetWidth)||0)*(e-t):0}(e,t,_),d.value=!0,y&&i.value&&a.setContainerHeight(i.value.offsetHeight)};return w((()=>{a.addItem({props:e,states:Z({hover:o,translate:r,scale:u,active:c,ready:d,inStage:v,animating:m}),uid:l.uid,translateItem:f})})),F((()=>{a.removeItem(l.uid)})),{carouselItemRef:i,active:c,animating:m,hover:o,inStage:v,isVertical:p,translate:r,isCardType:h,scale:u,ready:d,handleItemClick:function(){if(a&&k(h)){const e=a.items.value.findIndex((({uid:e})=>e===l.uid));a.setActiveItem(e)}}}},ge=E({name:"ElCarouselItem"});var ye=i(E({...ge,props:pe,setup(e){const t=e,a=l("carousel"),{carouselItemRef:s,active:i,animating:n,hover:o,inStage:r,isVertical:u,translate:c,isCardType:d,scale:v,ready:m,handleItemClick:h}=fe(t),p=y((()=>({transform:[`${"translate"+(k(u)?"Y":"X")}(${k(c)}px)`,`scale(${k(v)})`].join(" ")})));return(e,t)=>V((L(),H("div",{ref_key:"carouselItemRef",ref:s,class:D([k(a).e("item"),k(a).is("active",k(i)),k(a).is("in-stage",k(r)),k(a).is("hover",k(o)),k(a).is("animating",k(n)),{[k(a).em("item","card")]:k(d),[k(a).em("item","card-vertical")]:k(d)&&k(u)}]),style:U(k(p)),onClick:t[0]||(t[0]=(...e)=>k(h)&&k(h)(...e))},[k(d)?V((L(),H("div",{key:0,class:D(k(a).e("mask"))},null,2)),[[$,!k(i)]]):R("v-if",!0),q(e.$slots,"default")],6)),[[$,k(m)]])}}),[["__file","carousel-item.vue"]]);const ke=o(he,{CarouselItem:ye}),_e=r(ye),Ie={class:"swiper"},we={class:"skelton-carousel"},xe=["src","onClick"],Ce=J(E({__name:"index",setup(e){const{getBanners:t}=u(),{banners:a,skeletonLoading:l}=G(u());w((async()=>{await t()}));return(e,t)=>{const s=c,i=_e,n=ke,o=d,r=v;return L(),H("div",Ie,[P(r,{style:{width:"100%"},fill:""},{default:T((()=>[P(o,{class:"skelton",animated:"",count:1,loading:k(l)},{template:T((()=>[j("div",we,[P(s,{variant:"h3",class:"skelton-title1"}),P(s,{variant:"h3",class:"skelton-title2"}),P(s,{variant:"h3",class:"skelton-title3"})])])),default:T((()=>[P(n,{interval:2e3,type:"card",height:"250px",trigger:"click","pause-on-hover":!1,autoplay:!1},{default:T((()=>[(L(!0),H(W,null,X(k(a),(e=>(L(),N(i,{key:e.bannerId},{default:T((()=>[j("img",{class:"swiper_img",src:e.pic,alt:"",onClick:e=>{}},null,8,xe)])),_:2},1024)))),128))])),_:1})])),_:1},8,["loading"])])),_:1})])}}}),[["__scopeId","data-v-69a94ed1"]]),be={class:"exclusive_playlist"},Me={class:"skelton-list"},Se={style:{"margin-top":"10px"}},Ee={class:"block"},Le=["onClick"],He={class:"text"},je=J(E({__name:"index",setup(e){const{exclusivePlaylistData:t,skeletonLoading:a}=G(m()),{getExclusivePlaylistData:l}=m(),s=Q();return w((async()=>{await l()})),(e,l)=>{const i=c,n=d,o=v;return L(),H("div",be,[P(o,{style:{width:"100%"},fill:""},{default:T((()=>[P(n,{class:"skelton",animated:"",count:1,loading:k(a)},{template:T((()=>[P(i,{variant:"h3",class:"skelton-title"})])),default:T((()=>[P(h,{title:"专属歌单"})])),_:1},8,["loading"]),P(n,{class:"skelton",animated:"",count:10,loading:k(a)},{template:T((()=>[j("div",Me,[P(i,{variant:"image",style:{height:"300px"}}),j("div",Se,[P(i,{variant:"h3",style:{width:"70%"}})])])])),default:T((()=>[j("div",Ee,[(L(!0),H(W,null,X(k(t),((e,t)=>(L(),H("div",{class:"block_list",key:t},[j("div",{class:"block_item",onClick:t=>(e=>{s.push({path:"/playList",query:{id:e.id}})})(e)},[P(ne,{imgSrc:e.picUrl},null,8,["imgSrc"])],8,Le),j("div",He,Y(e.name),1)])))),128))])])),_:1},8,["loading"])])),_:1})])}}}),[["__scopeId","data-v-8a0c3991"]]),Ne={class:"RecommendedMusic"},Te={class:"skelton-list"},De={class:"skelton-img"},Ae={class:"skelton-text"},Be={class:"music_list"},Pe=["onDblclick"],$e=["src"],Ve={class:"music_item_right"},Oe=J(E({__name:"index",setup(e){const{recommendedMusicData:t,skeletonLoading:a}=G(m()),{getRecommendedMusicData:l}=m(),{playMusic:s}=ee();return w((async()=>{await l()})),(e,l)=>{const i=c,n=d,o=v;return L(),H("div",Ne,[P(o,{style:{width:"100%"},fill:""},{default:T((()=>[P(n,{class:"skelton",animated:"",count:1,loading:k(a)},{template:T((()=>[P(i,{variant:"h3",class:"skelton-title"})])),default:T((()=>[P(h,{title:"推荐新音乐"})])),_:1},8,["loading"]),P(n,{class:"skelton",animated:"",count:10,loading:k(a)},{template:T((()=>[j("div",Te,[j("div",De,[P(i,{variant:"image",class:"skelton-img"})]),j("div",Ae,[P(i,{variant:"h3",style:{width:"70%"}}),P(i,{variant:"h3",style:{width:"70%"}})])])])),default:T((()=>[j("div",Be,[(L(!0),H(W,null,X(k(t),(e=>(L(),H("div",{class:"music_item",key:e.id,onDblclick:t=>k(s)(e.id)},[j("img",{src:e.picUrl,alt:""},null,8,$e),j("div",Ve,[j("div",null,Y(e.name),1),j("div",null,Y(e.song.artists[0].name),1)])],40,Pe)))),128))])])),_:1},8,["loading"])])),_:1})])}}}),[["__scopeId","data-v-ea8f59d5"]]),Re={class:"discover"},ze=(e=>(te("data-v-c46f35de"),e=e(),ae(),e))((()=>j("h1",null,"推荐",-1))),qe=J(E({__name:"index",setup:e=>(e,t)=>(L(),H("div",Re,[ze,P(Ce),P(je),P(Oe),P(p)]))}),[["__scopeId","data-v-c46f35de"]]);export{qe as default};