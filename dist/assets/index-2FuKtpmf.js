import{E as a}from"./el-icon-exrMpsb-.js";import{a as l,E as s}from"./el-tab-pane-SvWAUDQn.js";import{E as e}from"./el-button-7US5GBKJ.js";import{E as i,a as n}from"./el-col-sA8arm0i.js";import{f as t,a5 as o,a9 as d,aa as u,r as c,R as r,l as v,j as m,aK as p,o as f,c as _,A as g,H as y,C as b,aB as h,y as k,aL as j,aM as x,aN as z,F as C,a2 as M,B as S,J as D,I as q,aO as E,q as V,x as w,_ as I,a6 as R,aP as $,Y as B,aQ as L,aR as N}from"./index-2J492Ujv.js";import{c as P}from"./index-J504GgKA.js";import"./index-segIM9RY.js";import"./event-DkVV3hnh.js";import"./index-dm8FZ-PY.js";import"./vnode-F5Z8QhHh.js";import"./use-form-item-nyZShd27.js";const A={class:"son_btn fs14"},F={class:"song_list"},H={class:"df"},J={class:"music_mv"},K={key:0,style:{display:"flex","margin-left":"5px"}},O={style:{display:"flex","align-items":"center"}},Q={key:0,class:"loading_btn"},T=I(t({__name:"Song",props:{id:{}},setup(l){const s=o(),t=l,{id:I,lyricData:R}=d(u()),{playMusic:$,pushPlayList:B}=u(),L=c([]),N=r({order:"hot",limit:20,page:1,loading:!1,noMore:!1});v((async()=>{await U()}));const T=m((()=>1===N.page?0:L.value.length+N.limit)),U=async()=>{try{N.loading=!0;const{songs:a}=await p(t.id,N.order,N.limit,T.value);1===N.page?L.value=a:L.value.push(...a),a.length<N.limit&&(N.noMore=!0)}catch(a){N.page--}N.loading=!1},Y=()=>{N.page++,U()},G=()=>{B(!1,...L.value),$(L.value[0].id)};return(l,t)=>{const o=e,d=i,u=n,c=a;return f(),_(C,null,[g("div",A,[y(o,{plain:"",round:"",icon:k(j),onClick:G},{default:b((()=>[h("播放全部")])),_:1},8,["icon"]),y(o,{plain:"",round:"",icon:k(x)},{default:b((()=>[h("下载")])),_:1},8,["icon"]),y(o,{plain:"",round:"",icon:k(z)},{default:b((()=>[h("批量操作")])),_:1},8,["icon"])]),y(u,{class:"fs14 mt20"},{default:b((()=>[y(d,{span:14},{default:b((()=>[h("歌曲")])),_:1}),y(d,{span:8},{default:b((()=>[h("专辑")])),_:1}),y(d,{span:2},{default:b((()=>[h("时长")])),_:1})])),_:1}),g("div",F,[(f(!0),_(C,null,M(L.value,((a,l)=>(f(),S(u,{class:w(["h50 song_info",{playing:k(I)===a.id}]),key:l,onDblclick:l=>k($)(a.id)},{default:b((()=>[y(d,{class:"music_song lh50",span:14},{default:b((()=>[g("div",H,[g("div",J,[g("div",null,D(a.name),1),a.mv>0?(f(),_("div",K,[y(c,{class:"mv_hover",size:20,color:"#000",onClick:q((l=>{return e="mvDetail",i=a.mv,void s.push({path:e,query:{id:i}});var e,i}),["stop"])},{default:b((()=>[y(k(E))])),_:2},1032,["onClick"])])):V("",!0)]),g("div",O,[y(c,{class:"icon",size:20,color:"#fff",onClick:q((l=>k($)(a.id)),["stop"])},{default:b((()=>[y(k(j))])),_:2},1032,["onClick"])])])])),_:2},1024),y(d,{class:"collection lh50",span:8},{default:b((()=>[h(D(a.al.name),1)])),_:2},1024),y(d,{class:"duration lh50",span:2},{default:b((()=>[h(D(k(P)(a.dt/1e3)),1)])),_:2},1024)])),_:2},1032,["onDblclick","class"])))),128))]),L.value.length>0&&!N.noMore?(f(),_("div",Q,[y(o,{type:"success",loading:N.loading,link:"",onClick:Y},{default:b((()=>[h("加载更多")])),_:1},8,["loading"])])):V("",!0)],64)}}}),[["__scopeId","data-v-ede4136d"]]),U={key:0,class:"details_top"},Y=["src"],G={class:"details_right"},W={class:"details_name"},X={class:"details_info fs12"},Z={class:"details_song fs12"},aa={style:{margin:"0 15px"}},la={class:"details_btn"},sa=I(t({__name:"index",setup(a){const i=R(),n=Number(i.query.id),t=c(),o=c(!1),d=c("song");return v((async()=>{t.value=await $(n),o.value=!0})),(a,i)=>{var u,c,r,v,m,p;const j=e,x=s,z=l;return f(),_(C,null,[o.value?(f(),_("div",U,[g("img",{src:null==(u=t.value)?void 0:u.artist.cover,alt:""},null,8,Y),g("div",G,[g("div",W,D(null==(c=t.value)?void 0:c.artist.name),1),g("div",X,D(null==(r=t.value)?void 0:r.artist.briefDesc.substring(0,90))+"...",1),g("div",Z,[g("span",null,"单曲数："+D(null==(v=t.value)?void 0:v.artist.musicSize),1),g("span",aa,"专辑数："+D(null==(m=t.value)?void 0:m.artist.albumSize),1),g("span",null,"MV数："+D(null==(p=t.value)?void 0:p.artist.mvSize),1)]),g("div",la,[y(j,{type:"success",icon:k(B),round:""},{default:b((()=>[h("关注")])),_:1},8,["icon"]),y(j,{icon:k(L),round:""},{default:b((()=>[h("歌手电台")])),_:1},8,["icon"]),y(j,{icon:k(N),circle:""},null,8,["icon"])])])])):V("",!0),o.value?(f(),S(z,{key:1,modelValue:d.value,"onUpdate:modelValue":i[0]||(i[0]=a=>d.value=a),class:"demo-tabs"},{default:b((()=>{var a,l,s;return[y(x,{label:`歌曲 ${null==(a=t.value)?void 0:a.artist.musicSize}`,name:"song"},{default:b((()=>[y(T,{id:k(n)},null,8,["id"])])),_:1},8,["label"]),y(x,{label:`专辑 ${null==(l=t.value)?void 0:l.artist.albumSize}`,name:"collection"},{default:b((()=>[h("Config")])),_:1},8,["label"]),y(x,{label:`视频 ${null==(s=t.value)?void 0:s.artist.musicSize}`,name:"M"},{default:b((()=>[h("Role")])),_:1},8,["label"]),y(x,{label:"详情",name:"songDetails"},{default:b((()=>[h("Task")])),_:1})]})),_:1},8,["modelValue"])):V("",!0)],64)}}}),[["__scopeId","data-v-13673dfc"]]);export{sa as default};
