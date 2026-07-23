module.exports=[81531,(e,t,r)=>{t.exports=e.x("@aws-sdk/client-s3-ecbef8e33fd0b8f0",()=>require("@aws-sdk/client-s3-ecbef8e33fd0b8f0"))},18622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},70406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},93695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},49679,e=>{"use strict";let t=Symbol.for("__cloudflare-context__");function r(){return globalThis[t]}async function a(){let e=r();if(e)return e;{var a;let e=await n();return a=e,globalThis[t]=a,e}}async function n(e){let{getPlatformProxy:t}=await import(`${"__wrangler".replaceAll("_","")}`),r=e?.environment??process.env.NEXT_DEV_WRANGLER_ENV,{env:a,cf:n,ctx:i}=await t({...e,envFiles:[],environment:r});return{env:a,cf:n,ctx:i}}let i=`

ERROR: \`getCloudflareContext\` has been called without having called \`initOpenNextCloudflareForDev\` from the Next.js config file.
You should update your Next.js config file as shown below:

   \`\`\`
   // next.config.mjs

   import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

   initOpenNextCloudflareForDev();

   const nextConfig = { ... };
   export default nextConfig;
   \`\`\`

`;async function u(){let{env:e}=await function(e={async:!1}){return e.async?a():function(){let e,t=r();if(t)return t;if(e=globalThis,e.__NEXT_DATA__?.nextExport===!0)throw Error("  - make sure that the call is not at the top level and that the route is not static\n  - call `getCloudflareContext({async: true})` to use the `async` mode\n  - avoid calling `getCloudflareContext` in the route\n");throw Error(i)}()}({async:!0});return e.DB}async function o(e){let{results:t}=await e.all();return t}async function l(e){return await e.first()}e.s(["getDB",0,u,"queryAll",0,o,"queryFirst",0,l],49679)},88496,54611,e=>{"use strict";var t=e.i(49679),r=e.i(81531);function a(e){let t=process.env[e];if(!t)throw Error(`Missing required environment variable: ${e}. Check your .dev.vars / Worker secrets.`);return t}let n=new r.S3Client({region:"auto",endpoint:`https://${a("R2_ACCOUNT_ID")}.r2.cloudflarestorage.com`,credentials:{accessKeyId:a("R2_ACCESS_KEY_ID"),secretAccessKey:a("R2_SECRET_ACCESS_KEY")}});async function i(e,t,i){return await n.send(new r.PutObjectCommand({Bucket:a("R2_BUCKET"),Key:e,Body:t,ContentType:i})),`${a("R2_PUBLIC_URL")}/${e}`}async function u(e){await n.send(new r.DeleteObjectCommand({Bucket:a("R2_BUCKET"),Key:e}))}async function o(e){if(0!==e.length)try{await n.send(new r.DeleteObjectsCommand({Bucket:a("R2_BUCKET"),Delete:{Objects:e.map(e=>({Key:e}))}}))}catch(e){console.error("R2 bulk delete failed (continuing anyway):",e)}}async function l(e,t){return await n.send(new r.CopyObjectCommand({Bucket:a("R2_BUCKET"),CopySource:`${a("R2_BUCKET")}/${e}`,Key:t})),await u(e),`${a("R2_PUBLIC_URL")}/${t}`}async function s(e,r,a,n,i){if(r===n&&(a??null)===(i??null))return;let u=await c(e,r,a??void 0);if(0===u.length)return;let o=await (0,t.getDB)(),s=i?`Products/${e}/${n}/${i}`:`Products/${e}/${n}`;for(let e of u){let t=e.r2_key_thumb.split("/").pop(),r=e.r2_key_mid.split("/").pop(),a=e.r2_key_large.split("/").pop(),u=`${s}/${t}`,c=`${s}/${r}`,d=`${s}/${a}`,[p,g,E]=await Promise.all([l(e.r2_key_thumb,u),l(e.r2_key_mid,c),l(e.r2_key_large,d)]);await o.prepare(`
        UPDATE images
        SET value1 = ?, value2 = ?,
            r2_key_thumb = ?, r2_key_mid = ?, r2_key_large = ?,
            url_thumb = ?, url_mid = ?, url_large = ?
        WHERE id = ?
      `).bind(n,i,u,c,d,p,g,E,e.id).run()}}async function c(e,r,a){let n=await (0,t.getDB)();return(0,t.queryAll)(n.prepare(`
        SELECT *
        FROM images
        WHERE product_slug = ?
          AND value1 = ?
          AND IFNULL(value2,'') = IFNULL(?, '')
        ORDER BY sort_order ASC, id ASC
      `).bind(e,r,a??null))}async function d(e,r,a,n,i){let u=await (0,t.getDB)(),o=await (0,t.queryFirst)(u.prepare(`
        SELECT COALESCE(MAX(sort_order), 0) AS max
        FROM images
        WHERE product_slug = ?
          AND value1 = ?
          AND IFNULL(value2,'') = IFNULL(?, '')
      `).bind(e,r,a??null));return Number((await u.prepare(`
      INSERT INTO images (
        product_slug, value1, value2,
        r2_key_thumb, r2_key_mid, r2_key_large,
        url_thumb, url_mid, url_large,
        sort_order
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(e,r,a??null,n.thumb,n.mid,n.large,i.thumb,i.mid,i.large,(o?.max??0)+1).run()).meta.last_row_id)}async function p(e){let r=await (0,t.getDB)();return(0,t.queryFirst)(r.prepare("SELECT * FROM images WHERE id = ?").bind(e))}async function g(e){let r=await (0,t.getDB)(),a=await p(e);a&&(await r.prepare("DELETE FROM images WHERE id = ?").bind(e).run(),await o([a.r2_key_thumb,a.r2_key_mid,a.r2_key_large].filter(Boolean)))}async function E(e){let r=await (0,t.getDB)(),a=r.prepare(`
    UPDATE images
    SET sort_order = ?
    WHERE id = ?
  `),n=e.map(e=>a.bind(e.sort_order,e.id));n.length>0&&await r.batch(n)}async function _(e){let r=await (0,t.getDB)();return(0,t.queryAll)(r.prepare(`
        SELECT *
        FROM images
        WHERE product_slug = ?
        ORDER BY sort_order ASC, id ASC
      `).bind(e))}function y(e){return e.flatMap(e=>[e.r2_key_thumb,e.r2_key_mid,e.r2_key_large].filter(Boolean))}async function w(e){let r=await (0,t.getDB)(),a=await _(e);0!==a.length&&(await r.prepare("DELETE FROM images WHERE product_slug = ?").bind(e).run(),await o(y(a)))}async function f(e,r,a){let n=await c(e,r,a??void 0);if(0===n.length)return;let i=await (0,t.getDB)();await i.prepare(`
      DELETE FROM images
      WHERE product_slug = ?
        AND value1 = ?
        AND IFNULL(value2,'') = IFNULL(?, '')
    `).bind(e,r,a??null).run(),await o(y(n))}async function m(e,r){if(e===r)return;let a=await (0,t.getDB)();await a.prepare("UPDATE images SET product_slug = ? WHERE product_slug = ?").bind(r,e).run()}e.s(["deleteImagesSafe",0,o,"renameImage",0,l,"uploadImage",0,i],54611),e.s(["deleteImageRow",0,g,"deleteImagesForProduct",0,w,"deleteImagesForVariantGroup",0,f,"getAllImagesForProduct",0,_,"getImageById",0,p,"getImages",0,c,"insertImage",0,d,"repointImagesForVariantGroup",0,s,"repointImagesToSlug",0,m,"updateSortOrders",0,E],88496)},20686,e=>{"use strict";var t=e.i(49679),r=e.i(88496);async function a(e){let r=await (0,t.getDB)(),{results:a}=await r.prepare("SELECT * FROM inventory WHERE product_slug = ? ORDER BY id").bind(e).all();return a}async function n(e){let r=await (0,t.getDB)();return await r.prepare(`
      SELECT * FROM inventory
      WHERE id = ? AND status = 'Active'
      LIMIT 1
    `).bind(e).first()}async function i(e){let r=await (0,t.getDB)();return await r.prepare("SELECT * FROM inventory WHERE id = ? LIMIT 1").bind(e).first()}async function u(e){let r=await (0,t.getDB)();await r.prepare(`
    INSERT INTO inventory (
      collection_slug, product_slug,
      variant1, value1, variant2, value2, variant3, value3,
      stock, priceVND, priceUSD, status
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(e.collection_slug,e.product_slug,e.variant1,e.value1,e.variant2,e.value2,e.variant3,e.value3,e.stock,e.priceVND,e.priceUSD,e.status).run()}async function o(e){let r=await (0,t.getDB)();await r.prepare(`
    UPDATE inventory
    SET
      collection_slug = ?, product_slug = ?,
      variant1 = ?, value1 = ?, variant2 = ?, value2 = ?, variant3 = ?, value3 = ?,
      stock = ?, priceVND = ?, priceUSD = ?, status = ?
    WHERE id = ?
  `).bind(e.collection_slug,e.product_slug,e.variant1,e.value1,e.variant2,e.value2,e.variant3,e.value3,e.stock,e.priceVND,e.priceUSD,e.status,e.id).run()}async function l(e){let a=await (0,t.getDB)(),n=await i(e);if(!n)return;await a.prepare("DELETE FROM inventory WHERE id = ?").bind(e).run();let{results:u}=await a.prepare(`
      SELECT id FROM inventory
      WHERE product_slug = ? AND value1 = ? AND IFNULL(value2,'') = IFNULL(?, '')
    `).bind(n.product_slug,n.value1,n.value2??null).all();0===u.length&&n.value1&&await (0,r.deleteImagesForVariantGroup)(n.product_slug,n.value1,n.value2)}async function s(e){let r=await (0,t.getDB)();await r.prepare("DELETE FROM inventory WHERE product_slug = ?").bind(e).run()}async function c(e,r){if(e===r)return;let a=await (0,t.getDB)();await a.prepare("UPDATE inventory SET product_slug = ? WHERE product_slug = ?").bind(r,e).run()}e.s(["createVariant",0,u,"deleteInventoryForProduct",0,s,"deleteVariant",0,l,"getInventoryAdmin",0,a,"getVariantById",0,n,"repointInventoryToSlug",0,c,"updateVariant",0,o])},34871,e=>{"use strict";var t=e.i(49679),r=e.i(20686),a=e.i(88496);async function n(e){let r=await (0,t.getDB)();return await r.prepare("SELECT * FROM products WHERE product_slug = ?").bind(e).first()}async function i(e){let r=await (0,t.getDB)(),{results:a}=await r.prepare("SELECT * FROM products WHERE collection_slug = ? ORDER BY id").bind(e).all();return a}async function u(){let e=await (0,t.getDB)(),{results:r}=await e.prepare("SELECT * FROM products ORDER BY id").all();return r}async function o(e){let r=await (0,t.getDB)();await r.prepare(`
    INSERT INTO products (
      collection_slug, product_name, product_slug,
      category, status, description, shipping, sizeGuide, notes
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(e.collection_slug,e.product_name,e.product_slug,e.category,e.status,e.description,e.shipping,e.sizeGuide,e.notes).run()}async function l(e){let n=await (0,t.getDB)(),i=await n.prepare("SELECT product_slug FROM products WHERE id = ?").bind(e.id).first();await n.prepare(`
    UPDATE products
    SET
      collection_slug = ?, product_name = ?, product_slug = ?,
      category = ?, status = ?, description = ?,
      shipping = ?, sizeGuide = ?, notes = ?
    WHERE id = ?
  `).bind(e.collection_slug,e.product_name,e.product_slug,e.category,e.status,e.description,e.shipping,e.sizeGuide,e.notes,e.id).run(),i&&i.product_slug!==e.product_slug&&(await (0,r.repointInventoryToSlug)(i.product_slug,e.product_slug),await (0,a.repointImagesToSlug)(i.product_slug,e.product_slug))}async function s(e){let n=await (0,t.getDB)(),i=await n.prepare("SELECT product_slug FROM products WHERE id = ?").bind(e).first();await n.prepare("DELETE FROM products WHERE id = ?").bind(e).run(),i&&(await (0,r.deleteInventoryForProduct)(i.product_slug),await (0,a.deleteImagesForProduct)(i.product_slug))}e.s(["createProduct",0,o,"deleteProduct",0,s,"getAllProductsAdmin",0,u,"getProduct",0,n,"getProductsByCollectionAdmin",0,i,"updateProduct",0,l])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__057t_t3._.js.map