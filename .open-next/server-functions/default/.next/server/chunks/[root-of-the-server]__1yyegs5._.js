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

`;async function o(){let{env:e}=await function(e={async:!1}){return e.async?a():function(){let e,t=r();if(t)return t;if(e=globalThis,e.__NEXT_DATA__?.nextExport===!0)throw Error("  - make sure that the call is not at the top level and that the route is not static\n  - call `getCloudflareContext({async: true})` to use the `async` mode\n  - avoid calling `getCloudflareContext` in the route\n");throw Error(i)}()}({async:!0});return e.DB}async function s(e){let{results:t}=await e.all();return t}async function l(e){return await e.first()}e.s(["getDB",0,o,"queryAll",0,s,"queryFirst",0,l],49679)},88496,54611,e=>{"use strict";var t=e.i(49679),r=e.i(81531);function a(e){let t=process.env[e];if(!t)throw Error(`Missing required environment variable: ${e}. Check your .dev.vars / Worker secrets.`);return t}let n=new r.S3Client({region:"auto",endpoint:`https://${a("R2_ACCOUNT_ID")}.r2.cloudflarestorage.com`,credentials:{accessKeyId:a("R2_ACCESS_KEY_ID"),secretAccessKey:a("R2_SECRET_ACCESS_KEY")}});async function i(e,t,i){return await n.send(new r.PutObjectCommand({Bucket:a("R2_BUCKET"),Key:e,Body:t,ContentType:i})),`${a("R2_PUBLIC_URL")}/${e}`}async function o(e){await n.send(new r.DeleteObjectCommand({Bucket:a("R2_BUCKET"),Key:e}))}async function s(e){if(0!==e.length)try{await n.send(new r.DeleteObjectsCommand({Bucket:a("R2_BUCKET"),Delete:{Objects:e.map(e=>({Key:e}))}}))}catch(e){console.error("R2 bulk delete failed (continuing anyway):",e)}}async function l(e,t){return await n.send(new r.CopyObjectCommand({Bucket:a("R2_BUCKET"),CopySource:`${a("R2_BUCKET")}/${e}`,Key:t})),await o(e),`${a("R2_PUBLIC_URL")}/${t}`}async function u(e,r,a,n,i){if(r===n&&(a??null)===(i??null))return;let o=await d(e,r,a??void 0);if(0===o.length)return;let s=await (0,t.getDB)(),u=i?`Products/${e}/${n}/${i}`:`Products/${e}/${n}`;for(let e of o){let t=e.r2_key_thumb.split("/").pop(),r=e.r2_key_mid.split("/").pop(),a=e.r2_key_large.split("/").pop(),o=`${u}/${t}`,d=`${u}/${r}`,c=`${u}/${a}`,[p,g,E]=await Promise.all([l(e.r2_key_thumb,o),l(e.r2_key_mid,d),l(e.r2_key_large,c)]);await s.prepare(`
        UPDATE images
        SET value1 = ?, value2 = ?,
            r2_key_thumb = ?, r2_key_mid = ?, r2_key_large = ?,
            url_thumb = ?, url_mid = ?, url_large = ?
        WHERE id = ?
      `).bind(n,i,o,d,c,p,g,E,e.id).run()}}async function d(e,r,a){let n=await (0,t.getDB)();return(0,t.queryAll)(n.prepare(`
        SELECT *
        FROM images
        WHERE product_slug = ?
          AND value1 = ?
          AND IFNULL(value2,'') = IFNULL(?, '')
        ORDER BY sort_order ASC, id ASC
      `).bind(e,r,a??null))}async function c(e,r,a,n,i){let o=await (0,t.getDB)(),s=await (0,t.queryFirst)(o.prepare(`
        SELECT COALESCE(MAX(sort_order), 0) AS max
        FROM images
        WHERE product_slug = ?
          AND value1 = ?
          AND IFNULL(value2,'') = IFNULL(?, '')
      `).bind(e,r,a??null));return Number((await o.prepare(`
      INSERT INTO images (
        product_slug, value1, value2,
        r2_key_thumb, r2_key_mid, r2_key_large,
        url_thumb, url_mid, url_large,
        sort_order
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(e,r,a??null,n.thumb,n.mid,n.large,i.thumb,i.mid,i.large,(s?.max??0)+1).run()).meta.last_row_id)}async function p(e){let r=await (0,t.getDB)();return(0,t.queryFirst)(r.prepare("SELECT * FROM images WHERE id = ?").bind(e))}async function g(e){let r=await (0,t.getDB)(),a=await p(e);a&&(await r.prepare("DELETE FROM images WHERE id = ?").bind(e).run(),await s([a.r2_key_thumb,a.r2_key_mid,a.r2_key_large].filter(Boolean)))}async function E(e){let r=await (0,t.getDB)(),a=r.prepare(`
    UPDATE images
    SET sort_order = ?
    WHERE id = ?
  `),n=e.map(e=>a.bind(e.sort_order,e.id));n.length>0&&await r.batch(n)}async function _(e){let r=await (0,t.getDB)();return(0,t.queryAll)(r.prepare(`
        SELECT *
        FROM images
        WHERE product_slug = ?
        ORDER BY sort_order ASC, id ASC
      `).bind(e))}function y(e){return e.flatMap(e=>[e.r2_key_thumb,e.r2_key_mid,e.r2_key_large].filter(Boolean))}async function m(e){let r=await (0,t.getDB)(),a=await _(e);0!==a.length&&(await r.prepare("DELETE FROM images WHERE product_slug = ?").bind(e).run(),await s(y(a)))}async function v(e,r,a){let n=await d(e,r,a??void 0);if(0===n.length)return;let i=await (0,t.getDB)();await i.prepare(`
      DELETE FROM images
      WHERE product_slug = ?
        AND value1 = ?
        AND IFNULL(value2,'') = IFNULL(?, '')
    `).bind(e,r,a??null).run(),await s(y(n))}async function f(e,r){if(e===r)return;let a=await (0,t.getDB)();await a.prepare("UPDATE images SET product_slug = ? WHERE product_slug = ?").bind(r,e).run()}e.s(["deleteImagesSafe",0,s,"renameImage",0,l,"uploadImage",0,i],54611),e.s(["deleteImageRow",0,g,"deleteImagesForProduct",0,m,"deleteImagesForVariantGroup",0,v,"getAllImagesForProduct",0,_,"getImageById",0,p,"getImages",0,d,"insertImage",0,c,"repointImagesForVariantGroup",0,u,"repointImagesToSlug",0,f,"updateSortOrders",0,E],88496)},20686,e=>{"use strict";var t=e.i(49679),r=e.i(88496);async function a(e){let r=await (0,t.getDB)(),{results:a}=await r.prepare("SELECT * FROM inventory WHERE product_slug = ? ORDER BY id").bind(e).all();return a}async function n(e){let r=await (0,t.getDB)();return await r.prepare(`
      SELECT * FROM inventory
      WHERE id = ? AND status = 'Active'
      LIMIT 1
    `).bind(e).first()}async function i(e){let r=await (0,t.getDB)();return await r.prepare("SELECT * FROM inventory WHERE id = ? LIMIT 1").bind(e).first()}async function o(e){let r=await (0,t.getDB)();await r.prepare(`
    INSERT INTO inventory (
      collection_slug, product_slug,
      variant1, value1, variant2, value2, variant3, value3,
      stock, priceVND, priceUSD, status
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(e.collection_slug,e.product_slug,e.variant1,e.value1,e.variant2,e.value2,e.variant3,e.value3,e.stock,e.priceVND,e.priceUSD,e.status).run()}async function s(e){let r=await (0,t.getDB)();await r.prepare(`
    UPDATE inventory
    SET
      collection_slug = ?, product_slug = ?,
      variant1 = ?, value1 = ?, variant2 = ?, value2 = ?, variant3 = ?, value3 = ?,
      stock = ?, priceVND = ?, priceUSD = ?, status = ?
    WHERE id = ?
  `).bind(e.collection_slug,e.product_slug,e.variant1,e.value1,e.variant2,e.value2,e.variant3,e.value3,e.stock,e.priceVND,e.priceUSD,e.status,e.id).run()}async function l(e){let a=await (0,t.getDB)(),n=await i(e);if(!n)return;await a.prepare("DELETE FROM inventory WHERE id = ?").bind(e).run();let{results:o}=await a.prepare(`
      SELECT id FROM inventory
      WHERE product_slug = ? AND value1 = ? AND IFNULL(value2,'') = IFNULL(?, '')
    `).bind(n.product_slug,n.value1,n.value2??null).all();0===o.length&&n.value1&&await (0,r.deleteImagesForVariantGroup)(n.product_slug,n.value1,n.value2)}async function u(e){let r=await (0,t.getDB)();await r.prepare("DELETE FROM inventory WHERE product_slug = ?").bind(e).run()}async function d(e,r){if(e===r)return;let a=await (0,t.getDB)();await a.prepare("UPDATE inventory SET product_slug = ? WHERE product_slug = ?").bind(r,e).run()}e.s(["createVariant",0,o,"deleteInventoryForProduct",0,u,"deleteVariant",0,l,"getInventoryAdmin",0,a,"getVariantById",0,n,"repointInventoryToSlug",0,d,"updateVariant",0,s])},58061,e=>{"use strict";var t=e.i(49679),r=e.i(20686);async function a(e,a){let n=await (0,t.getDB)();if(e.idempotency_key){let t=await n.prepare("SELECT id FROM orders WHERE idempotency_key = ?").bind(e.idempotency_key).first();if(t)return t.id}let i=0,o=[];for(let e of a){let t=await (0,r.getVariantById)(e.variant_id);if(!t||"Active"!==t.status)throw Error(`Variant ${e.variant_id} is not available`);if((t.stock??0)<e.quantity)throw Error(`Not enough stock for variant ${e.variant_id}`);i+=(t.priceVND??0)*e.quantity,o.push({variant_id:e.variant_id,quantity:e.quantity,unit_price:t.priceVND??0,total_price:(t.priceVND??0)*e.quantity})}let s=Number((await n.prepare(`
      INSERT INTO orders (
        created_at,
        payment_status,
        payment_method,
        customer_name,
        email,
        phone,
        address,
        notes,
        subtotal,
        currency,
        idempotency_key
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(e.created_at,e.payment_status,e.payment_method,e.customer_name,e.email,e.phone,e.address,e.notes,i,e.currency,e.idempotency_key??null).run()).meta.last_row_id);if(o.length>0){let e=n.prepare(`
      INSERT INTO order_details
      (order_id, variant_id, quantity, unit_price, total_price)
      VALUES (?, ?, ?, ?, ?)
    `);await n.batch(o.map(t=>e.bind(s,t.variant_id,t.quantity,t.unit_price,t.total_price)))}return s}async function n(){let e=await (0,t.getDB)(),{results:r}=await e.prepare("SELECT * FROM orders ORDER BY id DESC").all();return r}e.s(["createOrderWithDetails",0,a,"getAllOrdersAdmin",0,n])},81585,e=>{"use strict";var t=e.i(47909),r=e.i(74017),a=e.i(96250),n=e.i(59756),i=e.i(61916),o=e.i(74677),s=e.i(69741),l=e.i(16795),u=e.i(87718),d=e.i(95169),c=e.i(47587),p=e.i(66012),g=e.i(70101),E=e.i(26937),_=e.i(10372),y=e.i(93695);e.i(52474);var m=e.i(220),v=e.i(89171),f=e.i(58061);async function w(e){let t=await e.json();try{let e=await (0,f.createOrderWithDetails)({created_at:new Date().toISOString(),payment_status:"Pending",payment_method:t.paymentMethod,customer_name:t.customerName,email:t.email,phone:t.phone,address:t.address,notes:t.notes,currency:"VND",idempotency_key:t.idempotencyKey??null},t.cart);return v.NextResponse.json({success:!0,orderId:e})}catch(e){return v.NextResponse.json({success:!1,error:e.message},{status:400})}}e.s(["POST",0,w],48035);var R=e.i(48035);let h=new t.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/orders/route",pathname:"/api/orders",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/app/api/orders/route.ts",nextConfigOutput:"standalone",userland:R,...{}}),{workAsyncStorage:x,workUnitAsyncStorage:C,serverHooks:b}=h;async function D(e,t,a){a.requestMeta&&(0,n.setRequestMeta)(e,a.requestMeta),h.isDev&&(0,n.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let v="/api/orders/route";v=v.replace(/\/index$/,"")||"/";let f=await h.prepare(e,t,{srcPage:v,multiZoneDraftMode:!1});if(!f)return t.statusCode=400,t.end("Bad Request"),null==a.waitUntil||a.waitUntil.call(a,Promise.resolve()),null;let{buildId:w,deploymentId:R,params:x,nextConfig:C,parsedUrl:b,isDraftMode:D,prerenderManifest:T,routerServerContext:N,isOnDemandRevalidate:A,revalidateOnlyGenerated:S,resolvedPathname:k,clientReferenceManifest:I,serverActionsManifest:O}=f,B=(0,s.normalizeAppPath)(v),L=!!(T.dynamicRoutes[B]||T.routes[k]),U=async()=>((null==N?void 0:N.render404)?await N.render404(e,t,b,!1):t.end("This page could not be found"),null);if(L&&!D){let e=!!T.routes[k],t=T.dynamicRoutes[B];if(t&&!1===t.fallback&&!e){if(C.adapterPath)return await U();throw new y.NoFallbackError}}let F=null;!L||h.isDev||D||(F="/index"===(F=k)?"/":F);let P=!0===h.isDev||!L,q=L&&!P;O&&I&&(0,o.setManifestsSingleton)({page:v,clientReferenceManifest:I,serverActionsManifest:O});let H=e.method||"GET",M=(0,i.getTracer)(),$=M.getActiveScopeSpan(),j=!!(null==N?void 0:N.isWrappedByNextServer),V=!!(0,n.getRequestMeta)(e,"minimalMode"),W=(0,n.getRequestMeta)(e,"incrementalCache")||await h.getIncrementalCache(e,C,T,V);null==W||W.resetRequestCache(),globalThis.__incrementalCache=W;let K={params:x,previewProps:T.preview,renderOpts:{experimental:{authInterrupts:!!C.experimental.authInterrupts},cacheComponents:!!C.cacheComponents,supportsDynamicResponse:P,incrementalCache:W,cacheLifeProfiles:C.cacheLife,waitUntil:a.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,a,n)=>h.onRequestError(e,t,a,n,N)},sharedContext:{buildId:w,deploymentId:R}},G=new l.NodeNextRequest(e),Y=new l.NodeNextResponse(t),X=u.NextRequestAdapter.fromNodeNextRequest(G,(0,u.signalFromNodeResponse)(t));try{let n,o=async e=>h.handle(X,K).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=M.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==d.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let a=r.get("next.route");if(a){let t=`${H} ${a}`;e.setAttributes({"next.route":a,"http.route":a,"next.span_name":t}),e.updateName(t),n&&n!==e&&(n.setAttribute("http.route",a),n.updateName(t))}else e.updateName(`${H} ${v}`)}),s=async n=>{var i,s;let l=async({previousCacheEntry:r})=>{try{if(!V&&A&&S&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let i=await o(n);e.fetchMetrics=K.renderOpts.fetchMetrics;let s=K.renderOpts.pendingWaitUntil;s&&a.waitUntil&&(a.waitUntil(s),s=void 0);let l=K.renderOpts.collectedTags;if(!L)return await (0,p.sendResponse)(G,Y,i,K.renderOpts.pendingWaitUntil),null;{let e=await i.blob(),t=(0,g.toNodeOutgoingHttpHeaders)(i.headers);l&&(t[_.NEXT_CACHE_TAGS_HEADER]=l),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==K.renderOpts.collectedRevalidate&&!(K.renderOpts.collectedRevalidate>=_.INFINITE_CACHE)&&K.renderOpts.collectedRevalidate,a=void 0===K.renderOpts.collectedExpire||K.renderOpts.collectedExpire>=_.INFINITE_CACHE?void 0:K.renderOpts.collectedExpire;return{value:{kind:m.CachedRouteKind.APP_ROUTE,status:i.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:a}}}}catch(t){throw(null==r?void 0:r.isStale)&&await h.onRequestError(e,t,{routerKind:"App Router",routePath:v,routeType:"route",revalidateReason:(0,c.getRevalidateReason)({isStaticGeneration:q,isOnDemandRevalidate:A})},!1,N),t}},u=await h.handleResponse({req:e,nextConfig:C,cacheKey:F,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:T,isRoutePPREnabled:!1,isOnDemandRevalidate:A,revalidateOnlyGenerated:S,responseGenerator:l,waitUntil:a.waitUntil,isMinimalMode:V});if(!L)return null;if((null==u||null==(i=u.value)?void 0:i.kind)!==m.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==u||null==(s=u.value)?void 0:s.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});V||t.setHeader("x-nextjs-cache",A?"REVALIDATED":u.isMiss?"MISS":u.isStale?"STALE":"HIT"),D&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let d=(0,g.fromNodeOutgoingHttpHeaders)(u.value.headers);return V&&L||d.delete(_.NEXT_CACHE_TAGS_HEADER),!u.cacheControl||t.getHeader("Cache-Control")||d.get("Cache-Control")||d.set("Cache-Control",(0,E.getCacheControlHeader)(u.cacheControl)),await (0,p.sendResponse)(G,Y,new Response(u.value.body,{headers:d,status:u.value.status||200})),null};j&&$?await s($):(n=M.getActiveScopeSpan(),await M.withPropagatedContext(e.headers,()=>M.trace(d.BaseServerSpan.handleRequest,{spanName:`${H} ${v}`,kind:i.SpanKind.SERVER,attributes:{"http.method":H,"http.target":e.url}},s),void 0,!j))}catch(t){if(t instanceof y.NoFallbackError||await h.onRequestError(e,t,{routerKind:"App Router",routePath:B,routeType:"route",revalidateReason:(0,c.getRevalidateReason)({isStaticGeneration:q,isOnDemandRevalidate:A})},!1,N),L)throw t;return await (0,p.sendResponse)(G,Y,new Response(null,{status:500})),null}}e.s(["handler",0,D,"patchFetch",0,function(){return(0,a.patchFetch)({workAsyncStorage:x,workUnitAsyncStorage:C})},"routeModule",0,h,"serverHooks",0,b,"workAsyncStorage",0,x,"workUnitAsyncStorage",0,C],81585)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__1yyegs5._.js.map