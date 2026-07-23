module.exports=[10690,384,45393,a=>{"use strict";let b=Symbol.for("__cloudflare-context__");function c(){return globalThis[b]}async function d(){let a=c();if(a)return a;{var d;let a=await e();return d=a,globalThis[b]=d,a}}async function e(a){let{getPlatformProxy:b}=await import(`${"__wrangler".replaceAll("_","")}`),c=a?.environment??process.env.NEXT_DEV_WRANGLER_ENV,{env:d,cf:e,ctx:f}=await b({...a,envFiles:[],environment:c});return{env:d,cf:e,ctx:f}}let f=`

ERROR: \`getCloudflareContext\` has been called without having called \`initOpenNextCloudflareForDev\` from the Next.js config file.
You should update your Next.js config file as shown below:

   \`\`\`
   // next.config.mjs

   import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

   initOpenNextCloudflareForDev();

   const nextConfig = { ... };
   export default nextConfig;
   \`\`\`

`;async function g(){let{env:a}=await function(a={async:!1}){return a.async?d():function(){let a,b=c();if(b)return b;if(a=globalThis,a.__NEXT_DATA__?.nextExport===!0)throw Error("  - make sure that the call is not at the top level and that the route is not static\n  - call `getCloudflareContext({async: true})` to use the `async` mode\n  - avoid calling `getCloudflareContext` in the route\n");throw Error(f)}()}({async:!0});return a.DB}async function h(a){let{results:b}=await a.all();return b}function i(a){let b=process.env[a];if(!b)throw Error(`Missing required environment variable: ${a}. Check your .dev.vars / Worker secrets.`);return b}async function j(a){return h((await g()).prepare(`
        SELECT *
        FROM images
        WHERE product_slug = ?
        ORDER BY sort_order ASC, id ASC
      `).bind(a))}async function k(a){let b=await g(),{results:c}=await b.prepare(`
      SELECT * FROM inventory
      WHERE product_slug = ? AND status = 'Active'
      ORDER BY id
    `).bind(a).all();return c}a.s(["getDB",0,g,"queryAll",0,h],10690),new(a.i(81531)).S3Client({region:"auto",endpoint:`https://${i("R2_ACCOUNT_ID")}.r2.cloudflarestorage.com`,credentials:{accessKeyId:i("R2_ACCESS_KEY_ID"),secretAccessKey:i("R2_SECRET_ACCESS_KEY")}}),a.s(["getAllImagesForProduct",0,j],384),a.s(["getInventory",0,k],45393)},93376,a=>{"use strict";var b=a.i(10690);async function c(a){let c=await (0,b.getDB)(),{results:d}=await c.prepare(`
      SELECT * FROM products
      WHERE collection_slug = ? AND status = 'Active'
      ORDER BY id
    `).bind(a).all();return d}async function d(a){let c=await (0,b.getDB)();return await c.prepare("SELECT * FROM products WHERE product_slug = ? LIMIT 1").bind(a).first()}async function e(){let a=await (0,b.getDB)(),{results:c}=await a.prepare("SELECT * FROM products WHERE status = 'Active' ORDER BY id").all();return c}a.i(45393),a.i(384),a.s(["getAllProducts",0,e,"getProductBySlug",0,d,"getProductsByCollection",0,c])}];

//# sourceMappingURL=lib_0pqflln._.js.map