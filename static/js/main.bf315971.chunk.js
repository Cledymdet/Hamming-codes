(this["webpackJsonphamming-codes"]=this["webpackJsonphamming-codes"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),l=n.n(i),o=(n(14),n(1)),c=n(2),s=n(3),u=n(5),m=n(4),d=n(6);function h(e,t){return function(e,t,n){for(;e.length<t;)n?e+="0":e="0"+e;return e}((e>>>0).toString(2),t)}function E(e){return 0!==e&&!(e&e-1)}n(15);var p=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).getColorClassName=function(){var t=e.props,n=t.bitIndex,a=t.doubleError,r=t.errorIndex;return 0===n?"colorZerothBit":!1===a&&r===n?"colorErrorBit":E(n)?"colorParityBit":"colorDataBit"},e.getOpacityClassName=function(){var t=e.props,n=t.bitIndex,a=t.mousedOverBitIndex;return 0===n?a>0?"opacityDimmed":"":E(n)&&a>=0&&n&a||a>=0&&E(a)&&n&a?"":a>=0&&a!==n?"opacityDimmed":""},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.absolutePositioned,n=e.bit,a=e.bitIndex,i=e.height,l=e.isCell,c=e.numRows,s=e.numColumns,u=e.onClickBit,m=e.onMouseOverBit,d=e.paddedBinaryLength,E=e.showBinary,p=e.width,g=this.getColorClassName(),b=this.getOpacityClassName();if(l){var v={position:"relative"};return t&&(v.position="absolute",v.left=(a%s*100/s).toString()+"%",v.top=(100*Math.floor(a/s)/c).toString()+"%"),r.a.createElement("span",{className:"bit cell ".concat(g," ").concat(b),onClick:function(e){return u(a)},onMouseOver:function(e){return m(a)},style:Object(o.a)({height:i-2,width:p-2},v)},r.a.createElement("div",{className:"value",style:{paddingBottom:E?"0.25em":"0"}},n),r.a.createElement("div",{className:"binaryBitIndex"},E?h(a,d):null),r.a.createElement("div",{className:"bitIndex"},a))}return r.a.createElement("span",{className:"bit messageBit ".concat(g," ").concat(b),onClick:function(e){return u(a)},onMouseOver:function(e){return m(a)}},n)}}]),n}(r.a.Component);function g(e){return e>0?1:0}function b(e){for(var t=[0];t.length<e;)t.push(Math.random()>.5?1:0);return function(e){for(var t=[],n=0,a=Math.pow(2,n),r=e.length;a<r;){for(var i=0,l=a+1;l<r;++l)l&a&&(i+=g(e[l]));t.push(i%2),++n,a=Math.pow(2,n)}return t}(t).forEach((function(e,n){t[Math.pow(2,n)]=e})),t[0]=t.reduce((function(e,t){return e^t}),0),t}n(16);var v=function(e){var t=h(e.number,e.paddedBinaryLength).split("");return r.a.createElement("span",null,t.map((function(e,t){return r.a.createElement("span",{className:"colorBinary"+e,key:t},e)})))};n(17);var f=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;Object(c.a)(this,n),(a=t.call(this,e)).dataContainerInnerRef=void 0,a.calculations=Object(d.a)((function(e){var t=Math.ceil(Math.sqrt(e.length)),n=e.filter((function(e,t){return E(t)})).map((function(e,t){return{bit:e,bitIndex:Math.pow(2,t)}})).reverse(),r=n.length+1;return Object(o.a)(Object(o.a)({},function(e){var t=0,n=0;return e.forEach((function(e,a){var r=g(e);1===r&&(t^=a),n^=r})),{doubleError:0===n&&t>0,errorIndex:t,parity:n}}(a.state.data)),{},{efficiency:(100*(e.length-r)/e.length).toFixed(2),numColumns:t,numRows:Math.ceil(e.length/t),paddedBinaryLength:Math.ceil(Math.log(e.length)/Math.log(2)),regularParityBits:n,totalNumParityBits:r})})),a.getBitDimensions=Object(d.a)((function(e,t){var n=Math.min(e/4,100);return{bitHeight:n,bitWidth:n}})),a.generateNewData=function(e){return a.setState({data:b(e),numberBits:e})},a.getMousedOverText=function(e){var t=a.state.mousedOverBitIndex;if(a.state.mousedOverBitIndex>=0){var n=[];return 0===t?n.push(r.a.createElement("span",null,"\u0412\u044b \u0432\u044b\u0431\u0440\u0430\u043b\u0438 \u0431\u0438\u0442 \u043e\u0431\u0449\u0435\u0439 \u0447\u0451\u0442\u043d\u043e\u0441\u0442\u0438 ",t,r.a.createElement("span",{className:"floatRight"},"(\u0434\u0432\u043e\u0438\u0447\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440"," ",r.a.createElement(v,{number:t,paddedBinaryLength:e}),")")),r.a.createElement("br",null),r.a.createElement("span",null,"\u042d\u0442\u043e\u0442 \u0431\u0438\u0442 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0435\u0442 \u0447\u0451\u0442\u043d\u043e\u0441\u0442\u044c \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u0439 \u0447\u0430\u0441\u0442\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f. \u041e\u0431\u0449\u0430\u044f \u0447\u0451\u0442\u043d\u043e\u0441\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c 0 (\u0447\u0451\u0442\u043d\u0430\u044f), \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u044d\u0442\u043e\u0442 \u0431\u0438\u0442.",r.a.createElement("br",null),"1. \u0415\u0441\u043b\u0438 \u0447\u0451\u0442\u043d\u043e\u0441\u0442\u044c \u0432\u0441\u0435\u0433\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043d\u0435\u0447\u0451\u0442\u043d\u0430\u044f, \u0438 \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u044b\u0445 \u0431\u0438\u0442\u0430\u0445 \u0431\u044b\u043b\u0430 \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u0430 \u043e\u0448\u0438\u0431\u043a\u0430, \u0437\u043d\u0430\u0447\u0438\u0442 \u0432 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0431\u044b\u043b\u0430 \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u0430 \u043e\u0434\u0438\u043d\u043e\u0447\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430.",r.a.createElement("br",null),"2. \u0415\u0441\u043b\u0438 \u0436\u0435 \u0447\u0451\u0442\u043d\u043e\u0441\u0442\u044c \u0432\u0441\u0435\u0433\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0447\u0451\u0442\u043d\u0430\u044f, \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0431\u0438\u0442\u044b \u0447\u0451\u0442\u043d\u043e\u0441\u0442\u0438 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0438\u0432\u0430\u044e\u0442 \u043e\u0448\u0438\u0431\u043a\u0443, \u0437\u043d\u0430\u0447\u0438\u0442 \u0432 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0431\u044b\u043b\u0430 \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u0430 \u0434\u0432\u043e\u0439\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430.")):E(t)?n.push(r.a.createElement("span",null,"\u0412\u044b \u0432\u044b\u0431\u0440\u0430\u043b\u0438 \u0431\u0438\u0442 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u044b\u0439 \u0431\u0438\u0442 ",t,r.a.createElement("span",{className:"floatRight"},"(\u0434\u0432\u043e\u0438\u0447\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440"," ",r.a.createElement(v,{number:t,paddedBinaryLength:e}),")")),r.a.createElement("br",null),r.a.createElement("span",null,r.a.createElement("br",null),"\u041e\u043d \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u0441\u0435 \u0431\u0438\u0442\u044b, \u0438\u043c\u0435\u044e\u0449\u0438\u0435 \u0435\u0434\u0438\u043d\u0438\u0446\u0443 \u0432 \u0440\u0430\u0437\u0440\u044f\u0434\u0435"," ",Math.log(t)/Math.log(2)," \u0434\u0432\u043e\u0438\u0447\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438 \u0441\u0432\u043e\u0435\u0433\u043e \u043d\u043e\u043c\u0435\u0440\u0430")):(n.push(r.a.createElement("span",null,"\u0412\u044b \u0432\u044b\u0431\u0440\u0430\u043b\u0438 \u0431\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0431\u0438\u0442 ",t,r.a.createElement("span",{className:"floatRight"},"(\u0434\u0432\u043e\u0438\u0447\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440"," ",r.a.createElement(v,{number:t,paddedBinaryLength:e}),")")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",null,"\u041e\u043d \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u044b\u043c\u0438 \u0431\u0438\u0442\u0430\u043c\u0438:"),r.a.createElement("br",null)),a.state.data.forEach((function(a,i){i!==t&&E(i)&&i&t&&n.push(r.a.createElement("span",null,"\u2022 \u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u044b\u043c \u0431\u0438\u0442\u043e\u043c ",i,r.a.createElement("span",{className:"floatRight"},"(\u0434\u0432\u043e\u0438\u0447\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440"," ",r.a.createElement(v,{number:i,paddedBinaryLength:e}),")")))}))),n.map((function(e,t){return r.a.createElement("div",{key:t},e)}))}return"\u041d\u0430\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430 \u0431\u0438\u0442, \u0447\u0442\u043e\u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u043e \u043d\u0451\u043c \u0431\u043e\u043b\u044c\u0448\u0435"},a.getRegularParityBitsExplanation=function(e,t,n,i,l){return e?r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("div",{className:"colorErrorBit errorDetected"},"\u041e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u0430 \u0434\u0432\u043e\u0439\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430!")):t>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("div",{className:"colorErrorBit errorDetected"},"\u041e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u0430 \u043e\u0434\u0438\u043d\u043e\u0447\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430!"),r.a.createElement("div",{className:"regularParityBitsContainer",onMouseLeave:function(e){return a.setState({mousedOverBitIndex:-1})}},i.map((function(e){return r.a.createElement(p,Object.assign({key:e.bitIndex,absolutePositioned:!1,bit:e.bitIndex&t?1:0,bitIndex:e.bitIndex,isCell:!0,showBinary:i.length<=6},l))}))),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(n){return a.swapIncorrectBit(e,t)},disabled:0===t||e},"\u0418\u0441\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0431\u0438\u0442 \u0441 \u043e\u0448\u0438\u0431\u043a\u043e\u0439 (",t,")"))):void 0},a.highlightBit=function(e){return a.setState({mousedOverBitIndex:e})},a.resize=function(){a.dataContainerInnerRef.current&&a.setState({dataContainerInnerWidth:a.dataContainerInnerRef.current.clientWidth})},a.swapIncorrectBit=function(e,t){t>0&&!1===e&&a.switchBit(t)},a.switchBit=function(e){var t=a.state.data.slice();t[e]=t[e]>0?0:1,a.setState({data:t})};return a.state={data:b(16),dataContainerInnerWidth:100*Math.sqrt(16),mousedOverBitIndex:-1,numberBits:16,showBinary:!0},a.dataContainerInnerRef=r.a.createRef(),a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.resize(),window.addEventListener("resize",this.resize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var e=this,t=this.state,n=t.data,a=t.dataContainerInnerWidth,i=t.mousedOverBitIndex,l=t.showBinary,o=this.getBitDimensions(a,window.innerWidth),c=o.bitHeight,s=o.bitWidth,u=this.calculations(n),m=u.doubleError,d=u.efficiency,h=u.errorIndex,E=u.numColumns,g=u.numRows,b=u.paddedBinaryLength,v=u.regularParityBits,f=u.totalNumParityBits,B=u.parity,y={doubleError:m,errorIndex:h,height:c,mousedOverBitIndex:i,numColumns:E,numRows:g,onClickBit:this.switchBit,onMouseOverBit:this.highlightBit,paddedBinaryLength:b,width:s};return r.a.createElement("div",{id:"App"},r.a.createElement("section",{id:"content"},r.a.createElement("div",{id:"interactiveContainer"},r.a.createElement("div",{id:"clickSwapMessage"},r.a.createElement("b",null,"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u0431\u0438\u0442, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043c\u0435\u043d\u044f\u0442\u044c \u0435\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"),r.a.createElement("div",{id:"toggleShowBinary"},"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0434\u0432\u043e\u0438\u0447\u043d\u044b\u0435 \u043d\u043e\u043c\u0435\u0440\u0430 \u043f\u043e\u0437\u0438\u0446\u0438\u0439 \u0431\u0438\u0442\u043e\u0432"," ",r.a.createElement("input",{type:"checkbox",checked:l,onChange:function(t){return e.setState({showBinary:!l})}}))),r.a.createElement("div",{id:"dataContainer"},r.a.createElement("div",{ref:this.dataContainerInnerRef},r.a.createElement("div",{id:"cellsContainer",onMouseLeave:function(t){return e.setState({mousedOverBitIndex:-1})},style:{height:c*g,width:s*E}},n.map((function(e,t){return r.a.createElement(p,Object.assign({key:t,absolutePositioned:!0,bit:e,bitIndex:t,isCell:!0,showBinary:l},y))})))),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("div",{id:"legend"},r.a.createElement("div",null,r.a.createElement("span",{id:"rawMessageContainer",onMouseLeave:function(t){return e.setState({mousedOverBitIndex:-1})}},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435:\xa0",n.map((function(e,t){return r.a.createElement(p,Object.assign({key:t,absolutePositioned:!1,bit:e,bitIndex:t,isCell:!1},y))}))))),r.a.createElement("div",{id:"legend"},r.a.createElement("span",{className:"legendKey"},r.a.createElement("span",{className:"legendSquare colorZerothBit"})," ",r.a.createElement("span",{className:"legendText"},"\u0411\u0438\u0442 \u043e\u0431\u0449\u0435\u0439 \u0447\u0451\u0442\u043d\u043e\u0441\u0442\u0438")),r.a.createElement("span",{className:"legendKey"},r.a.createElement("span",{className:"legendSquare colorParityBit"})," ",r.a.createElement("span",{className:"legendText"},"\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u044b\u0439 \u0431\u0438\u0442")),r.a.createElement("span",{className:"legendKey"},r.a.createElement("span",{className:"legendSquare colorDataBit"})," ",r.a.createElement("span",{className:"legendText"},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0431\u0438\u0442")),r.a.createElement("span",{className:"legendKey"},r.a.createElement("span",{className:"legendSquare colorErrorBit"})," ",r.a.createElement("span",{className:"legendText"},"\u0411\u0438\u0442 \u0441 \u043e\u0448\u0438\u0431\u043a\u043e\u0439")))),r.a.createElement("div",{id:"sidebar"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("b",null,"\u0421\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435:")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("span",null,[2,4,8].map((function(t){return r.a.createElement("button",{key:t,className:"grouped",onClick:function(n){return e.generateNewData(t*t)}},t*t)})))," ","|"," ",r.a.createElement("input",{id:"customNumberBits",type:"number",step:"1",min:"1",value:this.state.numberBits,onChange:function(t){return e.generateNewData(parseInt(t.target.value))}})," ","\u0431\u0438\u0442\u0430")),r.a.createElement("hr",null),r.a.createElement("b",null,"\u042d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c "),r.a.createElement("p",null,"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0431\u0438\u0442\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0434\u0430\u043d\u043d\u044b\u0445, \u0432 \u0442\u043e \u0432\u0440\u0435\u043c\u044f \u043a\u0430\u043a \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u044b\u0435 \u0431\u0438\u0442\u044b - \u043d\u0435\u0442."),r.a.createElement("p",null,"\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043e\u0431\u044a\u0451\u043c\u0430 \u043e\u0431\u0449\u0435\u0433\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442:"),r.a.createElement("div",null,n.length-f," \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0431\u0438\u0442\u0430 /"," ",n.length," \u0432\u0441\u0435\u0433\u043e \u0431\u0438\u0442\u043e\u0432 = ",r.a.createElement("b",null,d,"%")),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement("b",null,"\u041e\u0431\u0449\u0430\u044f \u0447\u0435\u0442\u043d\u043e\u0441\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f:")," ",B," (",1===B?"\u043d\u0435\u0447\u0451\u0442\u043d\u0430\u044f":"\u0447\u0451\u0442\u043d\u0430\u044f",")"),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("b",null,"\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u044b\u0445 \u0431\u0438\u0442\u043e\u0432")),r.a.createElement("div",{className:"regularParityBitsContainer",onMouseLeave:function(t){return e.setState({mousedOverBitIndex:-1})}},v.map((function(e){return r.a.createElement(p,Object.assign({key:e.bitIndex,absolutePositioned:!1,bit:e.bit,bitIndex:e.bitIndex,isCell:!0,showBinary:v.length<=6},y))}))),this.getRegularParityBitsExplanation(m,h,b,v,y),r.a.createElement("hr",null),r.a.createElement("div",null,this.getMousedOverText(b)))),r.a.createElement("footer",null))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.bf315971.chunk.js.map