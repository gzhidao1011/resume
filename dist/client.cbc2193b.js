import{r as u,h,s as b,c as m}from"./chunks/web.51a90006.js";var y=r=>(s,n,o,{client:a})=>{if(window._$HY||(window._$HY={events:[],completed:new WeakSet,r:{}}),!r.hasAttribute("ssr"))return;const d=a==="only"?u:h;let t={};if(Object.keys(o).length>0)if(b.context)r.querySelectorAll("astro-slot").forEach(e=>{t[e.getAttribute("name")||"default"]=e.cloneNode(!0)});else for(const[e,f]of Object.entries(o))t[e]=document.createElement("astro-slot"),e!=="default"&&t[e].setAttribute("name",e),t[e].innerHTML=f;const{default:l,...c}=t,i=r.dataset.solidRenderId;d(()=>m(s,{...n,...c,children:l}),r,{renderId:i})};export{y as default};
