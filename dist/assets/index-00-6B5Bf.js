import{F as e}from"./el-icon-BujaOUWO.js";import{s as r,aq as i}from"./index-WNficDyy.js";const o=(o,t)=>{const a={},l=r([]);return{children:l,addChild:r=>{a[r.uid]=r,l.value=((r,o,t)=>e(r.subTree).filter((e=>{var r;return i(e)&&(null==(r=e.type)?void 0:r.name)===o&&!!e.component})).map((e=>e.component.uid)).map((e=>t[e])).filter((e=>!!e)))(o,t,a)},removeChild:e=>{delete a[e],l.value=l.value.filter((r=>r.uid!==e))}}};export{o as u};