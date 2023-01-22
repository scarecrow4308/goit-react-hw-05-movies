"use strict";(self.webpackChunk_5hw=self.webpackChunk_5hw||[]).push([[393],{288:function(e,t,r){r.d(t,{J:function(){return h}});var n=r(4165),a=r(5861),c=r(5671),s=r(9466),i=r(6274),u=r(9359),o=r(2388),p=(0,u.Z)("API_KEY"),f=(0,u.Z)("BASE_URL"),h=function(){function e(){(0,c.Z)(this,e),Object.defineProperty(this,p,{writable:!0,value:"31f7347fdd134b657fbdaae56841ddf8"}),Object.defineProperty(this,f,{writable:!0,value:"https://api.themoviedb.org/3"})}return(0,s.Z)(e,[{key:"fetchSearchMovies",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat((0,i.Z)(this,f)[f],"/search/movie"),{params:{query:t,api_key:(0,i.Z)(this,p)[p]}});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),console.log("cathced");case 12:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchSearchMoviesById",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat((0,i.Z)(this,f)[f],"/movie/").concat(t),{params:{api_key:(0,i.Z)(this,p)[p]}});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),console.log("cathced");case 12:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchMovieCast",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat((0,i.Z)(this,f)[f],"/movie/").concat(t,"/credits"),{params:{api_key:(0,i.Z)(this,p)[p]}});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),console.log("cathced");case 12:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchMovieReviews",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat((0,i.Z)(this,f)[f],"/movie/").concat(t,"/reviews"),{params:{api_key:(0,i.Z)(this,p)[p]}});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),console.log("cathced");case 12:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"fetchTrendingMovies",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat((0,i.Z)(this,f)[f],"/trending/all/day"),{params:{api_key:(0,i.Z)(this,p)[p]}});case 3:return t=e.sent,r=t.data,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),console.log("cathced");case 12:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()}]),e}()},854:function(e,t,r){r.d(t,{a:function(){return c}});var n=r(8402),a=r(184),c=function(){return(0,a.jsx)(n.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})}},1732:function(e,t,r){r.d(t,{u:function(){return c}});var n=r(1087),a=r(184),c=function(e){var t=e.id,r=e.title,c=e.name,s=e.state;return(0,a.jsx)("li",{children:(0,a.jsx)(n.OL,{to:"/movies/".concat(t),state:s,children:r||c})})}},3393:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n=r(4165),a=r(5861),c=r(9439),s=r(2791),i=r(288),u=r(854),o=r(1732),p=r(7689),f=r(184),h=function(e){var t=e.data,r=(0,p.TH)();if(t){var n=t.map((function(e){var t=e.id,n=e.title,a=e.name;return(0,f.jsx)(o.u,{state:{from:r},id:t,title:n,name:a},t)}));return(0,f.jsx)("ul",{children:n})}},l=function(){(0,s.useEffect)((function(){p()}),[]);var e=(0,s.useState)(),t=(0,c.Z)(e,2),r=t[0],o=t[1],p=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new i.J,e.next=3,t.fetchTrendingMovies();case 3:r=e.sent,o(r.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,f.jsx)(s.Suspense,{fallback:(0,f.jsx)(u.a,{}),children:(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{children:"Trending today"}),(0,f.jsx)(h,{data:r})]})})}}}]);
//# sourceMappingURL=393.31818a34.chunk.js.map