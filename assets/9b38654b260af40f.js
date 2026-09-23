(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[77828],{

/***/ 69287:
function(_,__,__webpack_require__){__webpack_require__.n_x=__webpack_require__.n;const __web_req__=__webpack_require__;__web_req__(765703);__web_req__(347375);globalThis._5f74ec40302898c5a55451c9fbd04240=globalThis._5f74ec40302898c5a55451c9fbd04240||{};(function(__c){var tOd,uOd,vOd;tOd=async function(a,b,c){var d=__c.y(a.wg.context);a=await (await a.fetch(b.url,{signal:c})).arrayBuffer();return d.decodeAudioData(a)};uOd=function(a,b,c,d){if(d){var e=a.cache.get(b);e||(e={buffer:c,q8:new Set},c.catch(()=>{a.cache.delete(b)}),a.cache.set(b,e));e.q8.add(d);d.addEventListener("abort",()=>{e?.q8.delete(d);e&&e.q8.size===0&&a.cache.delete(b);e=void 0},{once:!0})}};
vOd=class{async Vc(a,b,c,d){__c.u(b.startUs>=0&&b.durationUs>=0);var e=__c.Rr(this.Xi,a);if(e){var f=this.cache.get(a)?.buffer;d?.setAttribute("cache_hit",!!f);e=f||tOd(this,e,c);uOd(this,a,e,c);a=await e;c=b.durationUs-a.duration*1E6;if(b.startUs===0&&(c>=0||Math.abs(c)<=100))return d?.setAttribute("served_as","whole_buffer"),a;c=b.durationUs/1E6*a.sampleRate;if(c<=0)return d?.setAttribute("served_as","whole_buffer"),a;d?.setAttribute("served_as","sliced_range");d=new AudioBuffer({length:c,numberOfChannels:a.numberOfChannels,
sampleRate:a.sampleRate});b=Math.floor(a.sampleRate*b.startUs/1E6);for(e=0;e<a.numberOfChannels;e++)f=a.getChannelData(e).subarray(b,b+c),d.copyToChannel(f,e);return d}}constructor(a,b,c=__c.kKd){this.wg=a;this.Xi=b;this.fetch=c;this.cache=new Map}};__c.uLa={};__c.uLa.wSb=vOd;
}).call(globalThis,globalThis._5f74ec40302898c5a55451c9fbd04240);}

}])
//# sourceMappingURL=sourcemaps/9b38654b260af40f.js.map