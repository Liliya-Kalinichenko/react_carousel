(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a.n(n),s=a(4),r=a(5),c=a(8),l=a(6),m=a(1),o=a.n(m),p=(a(13),a(7)),h=(a(14),a(0)),u=function(e){var t=e.images,a=e.step,n=e.frameSize,i=e.itemWidth,s=e.animationDuration,r=e.infinite,c=Object(m.useState)(0),l=Object(p.a)(c,2),o=l[0],u=l[1],g=t.length-n,d=o===g,b=0===o,j=i*o;return Object(h.jsxs)("div",{className:"Carousel",children:[Object(h.jsx)("div",{className:"Carousel__container",children:Object(h.jsx)("ul",{className:"Carousel__list",style:{width:"".concat(n*i,"px"),height:"".concat(i,"px"),transition:"transform ".concat(s,"ms"),transform:"translateX(".concat(-j,"px)")},children:t.map((function(e){return Object(h.jsx)("li",{className:"Carousel__list-item",children:Object(h.jsx)("img",{src:"".concat(e),alt:"".concat(e[6]),width:i})},e)}))})}),Object(h.jsxs)("div",{className:"Carousel__button-container",children:[Object(h.jsx)("button",{type:"button",className:b?"Carousel__button disabled":"Carousel__button",onClick:function(){if(b||r)u(0);else{var e=o-a;u(e>0?e:0)}},children:Object(h.jsx)("img",{src:"./img/left-arrow.svg",alt:"left-arrow",width:"30px"})}),Object(h.jsx)("button",{type:"button","data-cy":"next",className:d?"Carousel__button disabled":"Carousel__button",onClick:function(){if(d||r)u(g);else{var e=o+a;u(e>g?g:e)}},children:Object(h.jsx)("img",{src:"./img/right-arrow.svg",alt:"right-arrow",width:"30px"})})]})]})},g=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},e.handleStepChange=function(t){e.setState({step:Number(t.target.value)})},e.handleFrameSizeChange=function(t){e.setState({frameSize:Number(t.target.value)})},e.handleItemWidthChange=function(t){e.setState({itemWidth:Number(t.target.value)})},e.handleAnimationDurationChange=function(t){e.setState({animationDuration:Number(t.target.value)})},e.handleInfiniteChange=function(t){e.setState({infinite:Boolean(t.target.value)})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state,t=e.images,a=e.step,n=e.frameSize,i=e.itemWidth,s=e.animationDuration,r=e.infinite;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{"data-cy":"title",children:"Carousel with ".concat(t.length," images")}),Object(h.jsx)(u,{images:t,step:a,frameSize:n,itemWidth:i,animationDuration:s,infinite:r}),Object(h.jsxs)("fieldset",{className:"App__parameters",children:[Object(h.jsxs)("label",{htmlFor:"step",className:"App__parameter",children:[Object(h.jsx)("input",{id:"step",className:"App__input",type:"number",name:"step",value:a,min:1,max:t.length,onChange:this.handleStepChange}),"Step"]}),Object(h.jsxs)("label",{htmlFor:"frameSize",className:"App__parameter",children:[Object(h.jsx)("input",{id:"frameSize",className:"App__input",type:"number",name:"FrameSize",value:n,min:1,max:t.length,onChange:this.handleFrameSizeChange}),"Frame Size"]}),Object(h.jsxs)("label",{htmlFor:"itemWidth",className:"App__parameter",children:[Object(h.jsx)("input",{id:"itemWidth",className:"App__input",type:"number",name:"ItemWidth",value:i,min:50,max:400,onChange:this.handleItemWidthChange}),"Item Width"]}),Object(h.jsxs)("label",{htmlFor:"animation",className:"App__parameter",children:[Object(h.jsx)("input",{id:"animation",className:"App__input",type:"number",value:s,min:300,max:5e3,onChange:this.handleAnimationDurationChange}),"Animation Duration"]}),Object(h.jsxs)("label",{htmlFor:"isInfinite",className:"App__parameter",children:[Object(h.jsx)("input",{type:"checkbox",className:"App__input App__input-checkbox",id:"isInfinite",value:"".concat(r),onChange:this.handleInfiniteChange}),"Infinite Scroll"]})]})]})}}]),a}(o.a.Component),d=g;i.a.render(Object(h.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0d2ae375.chunk.js.map