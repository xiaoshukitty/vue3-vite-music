import{E as a}from"./el-icon-fEaut0vo.js";import{a as s,E as l}from"./el-tab-pane-bTRGtLlf.js";import{E as e,a as i}from"./el-col-Bn_w6a7t.js";import{f as n,c as t,A as o,J as u,y as d,H as c,C as m,o as r,aB as f,aL as p,aS as _,aR as v,_ as b,r as g,a6 as y,l as x,aT as D,aa as j,q as h,B as k,F as C,a2 as E,x as w,I,aO as V}from"./index-YIGbLrC0.js";import{E as q}from"./el-button-CqO7S_iv.js";import{a as z,c as B}from"./index-i-FSWxrB.js";import"./index-mfm2cg16.js";import"./event-DkVV3hnh.js";import"./index-vDgv26t9.js";import"./use-form-item-8SqZ4FLx.js";const T={class:"song_info_head"},U=["src"],A={class:"details_right"},F={class:"details_name"},H={class:"details_info fs12"},J={class:"details_song fs12"},L={class:"details_btn"},M=b(n({__name:"index",props:{albumData:{}},setup:a=>(a,s)=>{var l,e,i;const n=q;return r(),t("div",T,[o("img",{src:null==(l=a.albumData)?void 0:l.picUrl,alt:""},null,8,U),o("div",A,[o("div",F,u(null==(e=a.albumData)?void 0:e.name),1),o("div",H,u(a.albumData.artist.name),1),o("div",J,[o("span",null,u(d(z)(null==(i=a.albumData)?void 0:i.publishTime)),1)]),o("div",L,[c(n,{type:"success",icon:d(p),round:""},{default:m((()=>[f("播放全部")])),_:1},8,["icon"]),c(n,{icon:d(_),round:""},{default:m((()=>[f("收藏")])),_:1},8,["icon"]),c(n,{icon:d(v),circle:""},null,8,["icon"])])])])}}),[["__scopeId","data-v-f5cacc00"]]),N={key:0},O={class:"song_list"},R={class:"df"},S={class:"music_mv"},$={style:{display:"flex","margin-left":"5px"}},G={style:{display:"flex","align-items":"center"}},K=b(n({__name:"index",setup(n){const _=g(),v=g([]),b=y(),q=Number(b.query.id),z=g("song"),T=g();x((async()=>{const{album:a,songs:s}=await D(q);_.value=a,v.value=s,T.value=s.length}));const{playMusic:U}=j();return(n,b)=>{const g=e,y=i,x=a,D=l,j=s;return r(),t(C,null,[_.value?(r(),t("div",N,[c(M,{albumData:_.value},null,8,["albumData"])])):h("",!0),_.value?(r(),k(j,{key:1,modelValue:z.value,"onUpdate:modelValue":b[0]||(b[0]=a=>z.value=a),class:"demo-tabs"},{default:m((()=>[c(D,{label:`歌曲 ${T.value}`,name:"song"},{default:m((()=>[c(y,{class:"fs14 mt20"},{default:m((()=>[c(g,{span:14},{default:m((()=>[f("歌曲")])),_:1}),c(g,{span:8},{default:m((()=>[f("专辑")])),_:1}),c(g,{span:2},{default:m((()=>[f("时长")])),_:1})])),_:1}),o("div",O,[(r(!0),t(C,null,E(v.value,((a,s)=>(r(),k(y,{class:w(["h50 song_info",{playing:d(q)===a.id}]),key:s,onDblclick:s=>d(U)(a.id)},{default:m((()=>[c(g,{class:"music_song lh50",span:14},{default:m((()=>[o("div",R,[o("div",S,[o("div",null,u(a.name),1),o("div",$,[c(x,{class:"mv_hover",size:20,color:"#000",onClick:I((s=>{a.id}),["stop"])},{default:m((()=>[c(d(V))])),_:2},1032,["onClick"])])]),o("div",G,[c(x,{class:"icon",size:20,color:"#fff",onClick:I((s=>d(U)(a.id)),["stop"])},{default:m((()=>[c(d(p))])),_:2},1032,["onClick"])])])])),_:2},1024),c(g,{class:"collection lh50",span:8},{default:m((()=>[f(u(a.al.name),1)])),_:2},1024),c(g,{class:"duration lh50",span:2},{default:m((()=>[f(u(d(B)(a.dt/1e3)),1)])),_:2},1024)])),_:2},1032,["onDblclick","class"])))),128))])])),_:1},8,["label"]),c(D,{label:"评论",name:"review"},{default:m((()=>[f("review")])),_:1}),c(D,{label:"专辑详情",name:"albumDetails"},{default:m((()=>[f("albumDetails")])),_:1})])),_:1},8,["modelValue"])):h("",!0)],64)}}}),[["__scopeId","data-v-27340a09"]]);export{K as default};
