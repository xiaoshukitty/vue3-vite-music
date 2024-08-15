import{c as e,_ as a,u as l,p as t,i as r,f as s,e as o,a as i,s as n,w as u}from"./el-icon-Y0y_9I_M.js";import{h as v,x as c,r as f,j as m,b as d,al as p,o as h,l as y,m as g,u as w,s as b,n as S,y as z,H as x,I as _,T as E,c as L,t as T,Z as H,f as k,B,E as R,O as C,a as j,P as N,q as A,p as M,A as O,au as W}from"./index-3a7MM4_w.js";import{t as X}from"./error-lyDbv7Kx.js";const Y={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},$=Symbol("scrollbarContextKey"),P=e({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean});var q=a(v({__name:"thumb",props:P,setup(e){const a=e,s=c($),o=l("scrollbar");s||X("Thumb","can not inject scrollbar context");const i=f(),n=f(),u=f({}),v=f(!1);let L=!1,T=!1,H=r?document.onselectstart:null;const k=m((()=>Y[a.vertical?"vertical":"horizontal"])),B=m((()=>(({move:e,size:a,bar:l})=>({[l.size]:a,transform:`translate${l.axis}(${e}%)`}))({size:a.size,move:a.move,bar:k.value}))),R=m((()=>i.value[k.value.offset]**2/s.wrapElement[k.value.scrollSize]/a.ratio/n.value[k.value.offset])),C=e=>{var a;if(e.stopPropagation(),e.ctrlKey||[1,2].includes(e.button))return;null==(a=window.getSelection())||a.removeAllRanges(),N(e);const l=e.currentTarget;l&&(u.value[k.value.axis]=l[k.value.offset]-(e[k.value.client]-l.getBoundingClientRect()[k.value.direction]))},j=e=>{if(!n.value||!i.value||!s.wrapElement)return;const a=100*(Math.abs(e.target.getBoundingClientRect()[k.value.direction]-e[k.value.client])-n.value[k.value.offset]/2)*R.value/i.value[k.value.offset];s.wrapElement[k.value.scroll]=a*s.wrapElement[k.value.scrollSize]/100},N=e=>{e.stopImmediatePropagation(),L=!0,document.addEventListener("mousemove",A),document.addEventListener("mouseup",M),H=document.onselectstart,document.onselectstart=()=>!1},A=e=>{if(!i.value||!n.value)return;if(!1===L)return;const a=u.value[k.value.axis];if(!a)return;const l=100*(-1*(i.value.getBoundingClientRect()[k.value.direction]-e[k.value.client])-(n.value[k.value.offset]-a))*R.value/i.value[k.value.offset];s.wrapElement[k.value.scroll]=l*s.wrapElement[k.value.scrollSize]/100},M=()=>{L=!1,u.value[k.value.axis]=0,document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",M),O(),T&&(v.value=!1)};d((()=>{O(),document.removeEventListener("mouseup",M)}));const O=()=>{document.onselectstart!==H&&(document.onselectstart=H)};return t(p(s,"scrollbarElement"),"mousemove",(()=>{T=!1,v.value=!!a.size})),t(p(s,"scrollbarElement"),"mouseleave",(()=>{T=!0,v.value=L})),(e,a)=>(h(),y(E,{name:w(o).b("fade"),persisted:""},{default:g((()=>[_(z("div",{ref_key:"instance",ref:i,class:b([w(o).e("bar"),w(o).is(w(k).key)]),onMousedown:j},[z("div",{ref_key:"thumb",ref:n,class:b(w(o).e("thumb")),style:S(w(B)),onMousedown:C},null,38)],34),[[x,e.always||v.value]])])),_:1},8,["name"]))}}),[["__file","thumb.vue"]]);var I=a(v({__name:"bar",props:e({always:{type:Boolean,default:!0},width:String,height:String,ratioX:{type:Number,default:1},ratioY:{type:Number,default:1}}),setup(e,{expose:a}){const l=e,t=f(0),r=f(0);return a({handleScroll:e=>{if(e){const a=e.offsetHeight-4,s=e.offsetWidth-4;r.value=100*e.scrollTop/a*l.ratioY,t.value=100*e.scrollLeft/s*l.ratioX}}}),(e,a)=>(h(),L(H,null,[T(q,{move:t.value,ratio:e.ratioX,size:e.width,always:e.always},null,8,["move","ratio","size","always"]),T(q,{move:r.value,ratio:e.ratioY,size:e.height,vertical:"",always:e.always},null,8,["move","ratio","size","always"])],64))}}),[["__file","bar.vue"]]);const K=e({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:s([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20},id:String,role:String,ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical"]}}),Z={scroll:({scrollTop:e,scrollLeft:a})=>[e,a].every(o)},D=v({name:"ElScrollbar"});const F=u(a(v({...D,props:K,emits:Z,setup(e,{expose:a,emit:r}){const s=e,u=l("scrollbar");let v,c;const d=f(),p=f(),x=f(),_=f("0"),E=f("0"),T=f(),H=f(1),X=f(1),Y=m((()=>{const e={};return s.height&&(e.height=i(s.height)),s.maxHeight&&(e.maxHeight=i(s.maxHeight)),[s.wrapStyle,e]})),P=m((()=>[s.wrapClass,u.e("wrap"),{[u.em("wrap","hidden-default")]:!s.native}])),q=m((()=>[u.e("view"),s.viewClass])),K=()=>{var e;p.value&&(null==(e=T.value)||e.handleScroll(p.value),r("scroll",{scrollTop:p.value.scrollTop,scrollLeft:p.value.scrollLeft}))};const Z=()=>{if(!p.value)return;const e=p.value.offsetHeight-4,a=p.value.offsetWidth-4,l=e**2/p.value.scrollHeight,t=a**2/p.value.scrollWidth,r=Math.max(l,s.minSize),o=Math.max(t,s.minSize);H.value=l/(e-l)/(r/(e-r)),X.value=t/(a-t)/(o/(a-o)),E.value=r+4<e?`${r}px`:"",_.value=o+4<a?`${o}px`:""};return k((()=>s.noresize),(e=>{e?(null==v||v(),null==c||c()):(({stop:v}=n(x,Z)),c=t("resize",Z))}),{immediate:!0}),k((()=>[s.maxHeight,s.height]),(()=>{s.native||B((()=>{var e;Z(),p.value&&(null==(e=T.value)||e.handleScroll(p.value))}))})),R($,C({scrollbarElement:d,wrapElement:p})),j((()=>{s.native||B((()=>{Z()}))})),N((()=>Z())),a({wrapRef:p,update:Z,scrollTo:function(e,a){W(e)?p.value.scrollTo(e):o(e)&&o(a)&&p.value.scrollTo(e,a)},setScrollTop:e=>{o(e)&&(p.value.scrollTop=e)},setScrollLeft:e=>{o(e)&&(p.value.scrollLeft=e)},handleScroll:K}),(e,a)=>(h(),L("div",{ref_key:"scrollbarRef",ref:d,class:b(w(u).b())},[z("div",{ref_key:"wrapRef",ref:p,class:b(w(P)),style:S(w(Y)),onScroll:K},[(h(),y(M(e.tag),{id:e.id,ref_key:"resizeRef",ref:x,class:b(w(q)),style:S(e.viewStyle),role:e.role,"aria-label":e.ariaLabel,"aria-orientation":e.ariaOrientation},{default:g((()=>[A(e.$slots,"default")])),_:3},8,["id","class","style","role","aria-label","aria-orientation"]))],38),e.native?O("v-if",!0):(h(),y(I,{key:0,ref_key:"barRef",ref:T,height:E.value,width:_.value,always:e.always,"ratio-x":X.value,"ratio-y":H.value},null,8,["height","width","always","ratio-x","ratio-y"]))],2))}}),[["__file","scrollbar.vue"]]));export{F as E};