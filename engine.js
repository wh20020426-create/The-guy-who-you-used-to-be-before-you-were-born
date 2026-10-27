(function(root){
const dims=['E','S','C','R','D'];
function options(q,i){return q.options.map((_,j)=>q.options[(j+i)%5]);}
function valid(a){return Array.isArray(a)&&a.length===15&&a.every(d=>dims.includes(d));}
function rank(a,characters){if(!valid(a))throw Error('请完成全部15道题');const scores=Object.fromEntries(dims.map(d=>[d,0]));a.forEach(d=>scores[d]+=2);const ranked=characters.map((c,i)=>({...c,order:i,points:scores[c.main]*100+scores[c.secondary]*65+dims.filter(d=>d!==c.main&&d!==c.secondary).reduce((n,d)=>n+scores[d]*10,0)})).sort((a,b)=>b.points-a.points||scores[b.main]-scores[a.main]||scores[b.secondary]-scores[a.secondary]||a.order-b.order);return {scores,ranked};}
root.AtlasEngine={dims,options,valid,rank};if(typeof module!=='undefined')module.exports=root.AtlasEngine;
})(typeof window==='undefined'?globalThis:window);
