module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},64240,(a,b,c)=>{"use strict";function d(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(d=function(a){return a?c:b})(a)}c._=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=d(b);if(c&&c.has(a))return c.get(a);var e={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in a)if("default"!==g&&Object.prototype.hasOwnProperty.call(a,g)){var h=f?Object.getOwnPropertyDescriptor(a,g):null;h&&(h.get||h.set)?Object.defineProperty(e,g,h):e[g]=a[g]}return e.default=a,c&&c.set(a,e),e}},10690,a=>{"use strict";let b=Symbol.for("__cloudflare-context__");function c(){return globalThis[b]}async function d(){let a=c();if(a)return a;{var d;let a=await e();return d=a,globalThis[b]=d,a}}async function e(a){let{getPlatformProxy:b}=await import(`${"__wrangler".replaceAll("_","")}`),c=a?.environment??process.env.NEXT_DEV_WRANGLER_ENV,{env:d,cf:e,ctx:f}=await b({...a,envFiles:[],environment:c});return{env:d,cf:e,ctx:f}}let f=`

ERROR: \`getCloudflareContext\` has been called without having called \`initOpenNextCloudflareForDev\` from the Next.js config file.
You should update your Next.js config file as shown below:

   \`\`\`
   // next.config.mjs

   import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

   initOpenNextCloudflareForDev();

   const nextConfig = { ... };
   export default nextConfig;
   \`\`\`

`;async function g(){let{env:a}=await function(a={async:!1}){return a.async?d():function(){let a,b=c();if(b)return b;if(a=globalThis,a.__NEXT_DATA__?.nextExport===!0)throw Error("  - make sure that the call is not at the top level and that the route is not static\n  - call `getCloudflareContext({async: true})` to use the `async` mode\n  - avoid calling `getCloudflareContext` in the route\n");throw Error(f)}()}({async:!0});return a.DB}a.s(["getDB",0,g],10690)},26758,a=>{a.v("/_next/static/media/favicon.2vob68tjqpejf.ico"+(globalThis.NEXT_CLIENT_ASSET_SUFFIX||""))},38872,a=>{"use strict";let b={src:a.i(26758).default,width:256,height:256};a.s(["default",0,b])},74531,a=>{"use strict";var b=a.i(7997),c=a.i(10690);async function d(a){return(await (0,c.getDB)()).prepare("SELECT * FROM orders WHERE id = ?").bind(a).first()}async function e(a){let b=await (0,c.getDB)(),{results:d}=await b.prepare("SELECT * FROM order_details WHERE order_id = ? ORDER BY id").bind(a).all();return d}async function f({params:a}){let{id:c}=await a,g=await d(Number(c)),h=await e(Number(c));return(0,b.jsxs)("main",{className:"max-w-3xl mx-auto p-10",children:[(0,b.jsx)("h1",{className:"text-4xl font-bold",children:"Thank you!"}),(0,b.jsxs)("p",{className:"mt-4",children:["Order #",g.id]}),(0,b.jsx)("p",{children:g.customer_name}),(0,b.jsx)("p",{children:g.email}),(0,b.jsx)("p",{children:g.payment_method}),(0,b.jsx)("div",{className:"mt-8 space-y-4",children:h.map(a=>(0,b.jsxs)("div",{className:"border p-4 rounded",children:[(0,b.jsxs)("p",{children:["Variant ID: ",a.variant_id]}),(0,b.jsxs)("p",{children:["Qty: ",a.quantity]}),(0,b.jsxs)("p",{children:[a.unit_price.toLocaleString()," VND"]})]},a.id))}),(0,b.jsxs)("h2",{className:"text-2xl font-bold mt-8",children:["Total: ",g.subtotal.toLocaleString()," VND"]})]})}a.s(["default",0,f,"dynamic",0,"force-dynamic"],74531)},22581,a=>{a.n(a.i(74531))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__1-36ruc._.js.map