"use strict";(()=>{var e={};e.id=290,e.ids=[290],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},5665:(e,t,r)=>{r.r(t),r.d(t,{config:()=>u,default:()=>p,routeModule:()=>c});var i={};r.r(i),r.d(i,{default:()=>l});var n=r(1802),a=r(7153),o=r(6249);let s=[{url:"/",priority:"1.0",changefreq:"weekly"},{url:"/Services",priority:"0.9",changefreq:"weekly"},{url:"/About",priority:"0.8",changefreq:"monthly"},{url:"/Contact",priority:"0.8",changefreq:"monthly"},{url:"/Products",priority:"0.7",changefreq:"weekly"}];function l(e,t){let r=function(){let e=new Date().toISOString().split("T")[0],t=s.map(t=>`
  <url>
    <loc>https://changtechs.com${t.url}</loc>
    <lastmod>${e}</lastmod>
    <changefreq>${t.changefreq}</changefreq>
    <priority>${t.priority}</priority>
  </url>`).join("");return`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${t}
</urlset>`}();t.setHeader("Content-Type","application/xml"),t.setHeader("Cache-Control","public, s-maxage=86400, stale-while-revalidate"),t.status(200).send(r)}let p=(0,o.l)(i,"default"),u=(0,o.l)(i,"config"),c=new n.PagesAPIRouteModule({definition:{kind:a.x.PAGES_API,page:"/api/sitemap",pathname:"/api/sitemap",bundlePath:"",filename:""},userland:i})},7153:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},1802:(e,t,r)=>{e.exports=r(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var r=t(t.s=5665);module.exports=r})();