(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[449],{6665:function(a,b,c){"use strict";c.d(b,{z:function(){return k}});var d=c(7462),e=c(6364),f=c(7294);function g(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var h=c(9477);let i=(a,b)=>(a%b+b)%b;class j extends h.EventDispatcher{constructor(a,b){super(),g(this,"object",void 0),g(this,"domElement",void 0),g(this,"enabled",!0),g(this,"target",new h.Vector3),g(this,"minDistance",0),g(this,"maxDistance",1/0),g(this,"minZoom",0),g(this,"maxZoom",1/0),g(this,"minPolarAngle",0),g(this,"maxPolarAngle",Math.PI),g(this,"minAzimuthAngle",-1/0),g(this,"maxAzimuthAngle",1/0),g(this,"enableDamping",!1),g(this,"dampingFactor",.05),g(this,"enableZoom",!0),g(this,"zoomSpeed",1),g(this,"enableRotate",!0),g(this,"rotateSpeed",1),g(this,"enablePan",!0),g(this,"panSpeed",1),g(this,"screenSpacePanning",!0),g(this,"keyPanSpeed",7),g(this,"autoRotate",!1),g(this,"autoRotateSpeed",2),g(this,"reverseOrbit",!1),g(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),g(this,"mouseButtons",{LEFT:h.MOUSE.ROTATE,MIDDLE:h.MOUSE.DOLLY,RIGHT:h.MOUSE.PAN}),g(this,"touches",{ONE:h.TOUCH.ROTATE,TWO:h.TOUCH.DOLLY_PAN}),g(this,"target0",void 0),g(this,"position0",void 0),g(this,"zoom0",void 0),g(this,"_domElementKeyEvents",null),g(this,"getPolarAngle",void 0),g(this,"getAzimuthalAngle",void 0),g(this,"setPolarAngle",void 0),g(this,"setAzimuthalAngle",void 0),g(this,"getDistance",void 0),g(this,"listenToKeyEvents",void 0),g(this,"saveState",void 0),g(this,"reset",void 0),g(this,"update",void 0),g(this,"connect",void 0),g(this,"dispose",void 0),this.object=a,this.domElement=b,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object instanceof h.PerspectiveCamera?this.object.zoom:1,this.getPolarAngle=()=>m.phi,this.getAzimuthalAngle=()=>m.theta,this.setPolarAngle=a=>{let b=i(a,2*Math.PI),d=m.phi;d<0&&(d+=2*Math.PI),b<0&&(b+=2*Math.PI);let e=Math.abs(b-d);2*Math.PI-e<e&&(b<d?b+=2*Math.PI:d+=2*Math.PI),n.phi=b-d,c.update()},this.setAzimuthalAngle=a=>{let b=i(a,2*Math.PI),d=m.theta;d<0&&(d+=2*Math.PI),b<0&&(b+=2*Math.PI);let e=Math.abs(b-d);2*Math.PI-e<e&&(b<d?b+=2*Math.PI:d+=2*Math.PI),n.theta=b-d,c.update()},this.getDistance=()=>c.object.position.distanceTo(c.target),this.listenToKeyEvents=a=>{a.addEventListener("keydown",$),this._domElementKeyEvents=a},this.saveState=()=>{c.target0.copy(c.target),c.position0.copy(c.object.position),c.zoom0=c.object instanceof h.PerspectiveCamera?c.object.zoom:1},this.reset=()=>{c.target.copy(c.target0),c.object.position.copy(c.position0),c.object instanceof h.PerspectiveCamera&&(c.object.zoom=c.zoom0,c.object.updateProjectionMatrix()),c.dispatchEvent(d),c.update(),k=j.NONE},this.update=(()=>{let b=new h.Vector3,e=new h.Quaternion().setFromUnitVectors(a.up,new h.Vector3(0,1,0)),f=e.clone().invert(),g=new h.Vector3,i=new h.Quaternion,r=2*Math.PI;return function(){let a=c.object.position;b.copy(a).sub(c.target),b.applyQuaternion(e),m.setFromVector3(b),c.autoRotate&&k===j.NONE&&E(C()),c.enableDamping?(m.theta+=n.theta*c.dampingFactor,m.phi+=n.phi*c.dampingFactor):(m.theta+=n.theta,m.phi+=n.phi);let h=c.minAzimuthAngle,s=c.maxAzimuthAngle;return isFinite(h)&&isFinite(s)&&(h< -Math.PI?h+=r:h>Math.PI&&(h-=r),s< -Math.PI?s+=r:s>Math.PI&&(s-=r),h<=s?m.theta=Math.max(h,Math.min(s,m.theta)):m.theta=m.theta>(h+s)/2?Math.max(h,m.theta):Math.min(s,m.theta)),m.phi=Math.max(c.minPolarAngle,Math.min(c.maxPolarAngle,m.phi)),m.makeSafe(),m.radius*=o,m.radius=Math.max(c.minDistance,Math.min(c.maxDistance,m.radius)),!0===c.enableDamping?c.target.addScaledVector(p,c.dampingFactor):c.target.add(p),b.setFromSpherical(m),b.applyQuaternion(f),a.copy(c.target).add(b),c.object.lookAt(c.target),!0===c.enableDamping?(n.theta*=1-c.dampingFactor,n.phi*=1-c.dampingFactor,p.multiplyScalar(1-c.dampingFactor)):(n.set(0,0,0),p.set(0,0,0)),o=1,!!(q||g.distanceToSquared(c.object.position)>l||8*(1-i.dot(c.object.quaternion))>l)&&(c.dispatchEvent(d),g.copy(c.object.position),i.copy(c.object.quaternion),q=!1,!0)}})(),this.connect=a=>{a===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),c.domElement=a,c.domElement.style.touchAction="none",c.domElement.addEventListener("contextmenu",ab),c.domElement.addEventListener("pointerdown",T),c.domElement.addEventListener("pointercancel",W),c.domElement.addEventListener("wheel",Z)},this.dispose=()=>{var a,b,d,e,f,g;null===(a=c.domElement)|| void 0===a||a.removeEventListener("contextmenu",ab),null===(b=c.domElement)|| void 0===b||b.removeEventListener("pointerdown",T),null===(d=c.domElement)|| void 0===d||d.removeEventListener("pointercancel",W),null===(e=c.domElement)|| void 0===e||e.removeEventListener("wheel",Z),null===(f=c.domElement)|| void 0===f||f.ownerDocument.removeEventListener("pointermove",U),null===(g=c.domElement)|| void 0===g||g.ownerDocument.removeEventListener("pointerup",V),null!==c._domElementKeyEvents&&c._domElementKeyEvents.removeEventListener("keydown",$)};let c=this,d={type:"change"},e={type:"start"},f={type:"end"},j={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},k=j.NONE,l=1e-6,m=new h.Spherical,n=new h.Spherical,o=1,p=new h.Vector3,q=!1,r=new h.Vector2,s=new h.Vector2,t=new h.Vector2,u=new h.Vector2,v=new h.Vector2,w=new h.Vector2,x=new h.Vector2,y=new h.Vector2,z=new h.Vector2,A=[],B={};function C(){return 2*Math.PI/60/60*c.autoRotateSpeed}function D(){return Math.pow(.95,c.zoomSpeed)}function E(a){c.reverseOrbit?n.theta+=a:n.theta-=a}function F(a){c.reverseOrbit?n.phi+=a:n.phi-=a}let G=(()=>{let a=new h.Vector3;return function(b,c){a.setFromMatrixColumn(c,0),a.multiplyScalar(-b),p.add(a)}})(),H=(()=>{let a=new h.Vector3;return function(b,d){!0===c.screenSpacePanning?a.setFromMatrixColumn(d,1):(a.setFromMatrixColumn(d,0),a.crossVectors(c.object.up,a)),a.multiplyScalar(b),p.add(a)}})(),I=(()=>{let a=new h.Vector3;return function(b,d){let e=c.domElement;if(e&&c.object instanceof h.PerspectiveCamera&&c.object.isPerspectiveCamera){let f=c.object.position;a.copy(f).sub(c.target);let g=a.length();G(2*b*(g*=Math.tan(c.object.fov/2*Math.PI/180))/e.clientHeight,c.object.matrix),H(2*d*g/e.clientHeight,c.object.matrix)}else e&&c.object instanceof h.OrthographicCamera&&c.object.isOrthographicCamera?(G(b*(c.object.right-c.object.left)/c.object.zoom/e.clientWidth,c.object.matrix),H(d*(c.object.top-c.object.bottom)/c.object.zoom/e.clientHeight,c.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),c.enablePan=!1)}})();function J(a){c.object instanceof h.PerspectiveCamera&&c.object.isPerspectiveCamera?o/=a:c.object instanceof h.OrthographicCamera&&c.object.isOrthographicCamera?(c.object.zoom=Math.max(c.minZoom,Math.min(c.maxZoom,c.object.zoom*a)),c.object.updateProjectionMatrix(),q=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),c.enableZoom=!1)}function K(a){c.object instanceof h.PerspectiveCamera&&c.object.isPerspectiveCamera?o*=a:c.object instanceof h.OrthographicCamera&&c.object.isOrthographicCamera?(c.object.zoom=Math.max(c.minZoom,Math.min(c.maxZoom,c.object.zoom/a)),c.object.updateProjectionMatrix(),q=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),c.enableZoom=!1)}function L(a){r.set(a.clientX,a.clientY)}function M(a){u.set(a.clientX,a.clientY)}function N(){if(1==A.length)r.set(A[0].pageX,A[0].pageY);else{let a=.5*(A[0].pageX+A[1].pageX),b=.5*(A[0].pageY+A[1].pageY);r.set(a,b)}}function O(){if(1==A.length)u.set(A[0].pageX,A[0].pageY);else{let a=.5*(A[0].pageX+A[1].pageX),b=.5*(A[0].pageY+A[1].pageY);u.set(a,b)}}function P(){let a=A[0].pageX-A[1].pageX,b=A[0].pageY-A[1].pageY;x.set(0,Math.sqrt(a*a+b*b))}function Q(a){if(1==A.length)s.set(a.pageX,a.pageY);else{let b=af(a),d=.5*(a.pageX+b.x),e=.5*(a.pageY+b.y);s.set(d,e)}t.subVectors(s,r).multiplyScalar(c.rotateSpeed);let f=c.domElement;f&&(E(2*Math.PI*t.x/f.clientHeight),F(2*Math.PI*t.y/f.clientHeight)),r.copy(s)}function R(a){if(1==A.length)v.set(a.pageX,a.pageY);else{let b=af(a),d=.5*(a.pageX+b.x),e=.5*(a.pageY+b.y);v.set(d,e)}w.subVectors(v,u).multiplyScalar(c.panSpeed),I(w.x,w.y),u.copy(v)}function S(a){let b=af(a),d=a.pageX-b.x,e=a.pageY-b.y;y.set(0,Math.sqrt(d*d+e*e)),z.set(0,Math.pow(y.y/x.y,c.zoomSpeed)),J(z.y),x.copy(y)}function T(a){if(!1!==c.enabled){if(0===A.length){var b,d;null===(b=c.domElement)|| void 0===b||b.ownerDocument.addEventListener("pointermove",U),null===(d=c.domElement)|| void 0===d||d.ownerDocument.addEventListener("pointerup",V)}ac(a),"touch"===a.pointerType?_(a):X(a)}}function U(a){!1!==c.enabled&&("touch"===a.pointerType?aa(a):Y(a))}function V(a){if(ad(a),0===A.length){var b,d,e;null===(b=c.domElement)|| void 0===b||b.releasePointerCapture(a.pointerId),null===(d=c.domElement)|| void 0===d||d.ownerDocument.removeEventListener("pointermove",U),null===(e=c.domElement)|| void 0===e||e.ownerDocument.removeEventListener("pointerup",V)}c.dispatchEvent(f),k=j.NONE}function W(a){ad(a)}function X(a){let b;switch(a.button){case 0:b=c.mouseButtons.LEFT;break;case 1:b=c.mouseButtons.MIDDLE;break;case 2:b=c.mouseButtons.RIGHT;break;default:b=-1}switch(b){case h.MOUSE.DOLLY:var d;if(!1===c.enableZoom)return;d=a,x.set(d.clientX,d.clientY),k=j.DOLLY;break;case h.MOUSE.ROTATE:if(a.ctrlKey||a.metaKey||a.shiftKey){if(!1===c.enablePan)return;M(a),k=j.PAN}else{if(!1===c.enableRotate)return;L(a),k=j.ROTATE}break;case h.MOUSE.PAN:if(a.ctrlKey||a.metaKey||a.shiftKey){if(!1===c.enableRotate)return;L(a),k=j.ROTATE}else{if(!1===c.enablePan)return;M(a),k=j.PAN}break;default:k=j.NONE}k!==j.NONE&&c.dispatchEvent(e)}function Y(a){var b,d;if(!1!==c.enabled)switch(k){case j.ROTATE:if(!1===c.enableRotate)return;!function(a){s.set(a.clientX,a.clientY),t.subVectors(s,r).multiplyScalar(c.rotateSpeed);let b=c.domElement;b&&(E(2*Math.PI*t.x/b.clientHeight),F(2*Math.PI*t.y/b.clientHeight)),r.copy(s),c.update()}(a);break;case j.DOLLY:if(!1===c.enableZoom)return;b=a,y.set(b.clientX,b.clientY),z.subVectors(y,x),z.y>0?J(D()):z.y<0&&K(D()),x.copy(y),c.update();break;case j.PAN:if(!1===c.enablePan)return;d=a,v.set(d.clientX,d.clientY),w.subVectors(v,u).multiplyScalar(c.panSpeed),I(w.x,w.y),u.copy(v),c.update()}}function Z(a){var b;!1!==c.enabled&& !1!==c.enableZoom&&(k===j.NONE||k===j.ROTATE)&&(a.preventDefault(),c.dispatchEvent(e),(b=a).deltaY<0?K(D()):b.deltaY>0&&J(D()),c.update(),c.dispatchEvent(f))}function $(a){!1!==c.enabled&& !1!==c.enablePan&&function(a){let b=!1;switch(a.code){case c.keys.UP:I(0,c.keyPanSpeed),b=!0;break;case c.keys.BOTTOM:I(0,-c.keyPanSpeed),b=!0;break;case c.keys.LEFT:I(c.keyPanSpeed,0),b=!0;break;case c.keys.RIGHT:I(-c.keyPanSpeed,0),b=!0}b&&(a.preventDefault(),c.update())}(a)}function _(a){switch(ae(a),A.length){case 1:switch(c.touches.ONE){case h.TOUCH.ROTATE:if(!1===c.enableRotate)return;N(),k=j.TOUCH_ROTATE;break;case h.TOUCH.PAN:if(!1===c.enablePan)return;O(),k=j.TOUCH_PAN;break;default:k=j.NONE}break;case 2:switch(c.touches.TWO){case h.TOUCH.DOLLY_PAN:if(!1===c.enableZoom&& !1===c.enablePan)return;c.enableZoom&&P(),c.enablePan&&O(),k=j.TOUCH_DOLLY_PAN;break;case h.TOUCH.DOLLY_ROTATE:if(!1===c.enableZoom&& !1===c.enableRotate)return;c.enableZoom&&P(),c.enableRotate&&N(),k=j.TOUCH_DOLLY_ROTATE;break;default:k=j.NONE}break;default:k=j.NONE}k!==j.NONE&&c.dispatchEvent(e)}function aa(a){var b,d;switch(ae(a),k){case j.TOUCH_ROTATE:if(!1===c.enableRotate)return;Q(a),c.update();break;case j.TOUCH_PAN:if(!1===c.enablePan)return;R(a),c.update();break;case j.TOUCH_DOLLY_PAN:if(!1===c.enableZoom&& !1===c.enablePan)return;b=a,c.enableZoom&&S(b),c.enablePan&&R(b),c.update();break;case j.TOUCH_DOLLY_ROTATE:if(!1===c.enableZoom&& !1===c.enableRotate)return;d=a,c.enableZoom&&S(d),c.enableRotate&&Q(d),c.update();break;default:k=j.NONE}}function ab(a){!1!==c.enabled&&a.preventDefault()}function ac(a){A.push(a)}function ad(a){delete B[a.pointerId];for(let b=0;b<A.length;b++)if(A[b].pointerId==a.pointerId){A.splice(b,1);return}}function ae(a){let b=B[a.pointerId];void 0===b&&(b=new h.Vector2,B[a.pointerId]=b),b.set(a.pageX,a.pageY)}function af(a){let b=a.pointerId===A[0].pointerId?A[1]:A[0];return B[b.pointerId]}void 0!==b&&this.connect(b),this.update()}}let k=f.forwardRef(({makeDefault:a,camera:b,regress:c,domElement:g,enableDamping:h=!0,onChange:i,onStart:k,onEnd:l,...m},n)=>{let o=(0,e.w)(a=>a.invalidate),p=(0,e.w)(a=>a.camera),q=(0,e.w)(a=>a.gl),r=(0,e.w)(a=>a.events),s=(0,e.w)(a=>a.set),t=(0,e.w)(a=>a.get),u=(0,e.w)(a=>a.performance),v=b||p,w=g||r.connected||q.domElement,x=f.useMemo(()=>new j(v),[v]);return(0,e.x)(()=>{x.enabled&&x.update()},-1),f.useEffect(()=>(x.connect(w),()=>void x.dispose()),[w,c,x,o]),f.useEffect(()=>{let a=a=>{o(),c&&u.regress(),i&&i(a)};return x.addEventListener("change",a),k&&x.addEventListener("start",k),l&&x.addEventListener("end",l),()=>{k&&x.removeEventListener("start",k),l&&x.removeEventListener("end",l),x.removeEventListener("change",a)}},[i,k,l,x,o]),f.useEffect(()=>{if(a){let b=t().controls;return s({controls:x}),()=>s({controls:b})}},[a,x]),f.createElement("primitive",(0,d.Z)({ref:n,object:x,enableDamping:h},m))})},7005:function(a,b,c){var d,e=c(7294),f=(d=e)&&"object"==typeof d&&"default"in d?d:{default:d},g=function(){return(g=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)};!function(a){if(!a||"undefined"==typeof window)return;let b=document.createElement("style");return b.setAttribute("type","text/css"),b.innerHTML=a,document.head.appendChild(b),a}('.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}');var h=function(a){var b,c,d,h,i=a.style,j=a.className,k=a.play,l=void 0===k||k,m=a.pauseOnHover,n=void 0!==m&&m,o=a.pauseOnClick,p=void 0!==o&&o,q=a.direction,r=void 0===q?"left":q,s=a.speed,t=void 0===s?20:s,u=a.delay,v=void 0===u?0:u,w=a.loop,x=void 0===w?0:w,y=a.gradient,z=a.gradientColor,A=void 0===z?[255,255,255]:z,B=a.gradientWidth,C=void 0===B?200:B,D=a.onFinish,E=a.onCycleComplete,F=a.children,G=e.useState(0),H=G[0],I=G[1],J=e.useState(0),K=J[0],L=J[1],M=e.useState(!1),N=M[0],O=M[1],P=e.useRef(null),Q=e.useRef(null);e.useEffect(function(){if(N){var a=function(){Q.current&&P.current&&(I(P.current.getBoundingClientRect().width),L(Q.current.getBoundingClientRect().width))};return a(),window.addEventListener("resize",a),function(){window.removeEventListener("resize",a)}}},[N]),e.useEffect(function(){O(!0)},[]);var R="rgba("+A[0]+", "+A[1]+", "+A[2],S=K<H?H/t:K/t;return f.default.createElement(e.Fragment,null,N?f.default.createElement("div",{ref:P,style:g(g({},void 0===i?{}:i),((b={})["--pause-on-hover"]=!l||n?"paused":"running",b["--pause-on-click"]=!l||n&&!p||p?"paused":"running",b)),className:(void 0===j?"":j)+" marquee-container"},(void 0===y||y)&&f.default.createElement("div",{style:((c={})["--gradient-color"]=R+", 1), "+R+", 0)",c["--gradient-width"]="number"==typeof C?C+"px":C,c),className:"overlay"}),f.default.createElement("div",{ref:Q,style:((d={})["--play"]=l?"running":"paused",d["--direction"]="left"===r?"normal":"reverse",d["--duration"]=S+"s",d["--delay"]=v+"s",d["--iteration-count"]=x?""+x:"infinite",d),className:"marquee",onAnimationIteration:E,onAnimationEnd:D},F),f.default.createElement("div",{style:((h={})["--play"]=l?"running":"paused",h["--direction"]="left"===r?"normal":"reverse",h["--duration"]=S+"s",h["--delay"]=v+"s",h["--iteration-count"]=x?""+x:"infinite",h),className:"marquee","aria-hidden":"true"},F)):null)};b.Z=h},4111:function(a,b,c){"use strict";function d(a){if(void 0===a)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return a}c.d(b,{Z:function(){return d}})},1438:function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw TypeError("Cannot call a class as a function")}c.d(b,{Z:function(){return d}})},460:function(a,b,c){"use strict";function d(a){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}c.d(b,{Z:function(){return f}});var e=c(4111);function f(a){var b=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}();return function(){var c,f,g,h,i,j=d(h=a);if(b){var k,l=(k=this,d(k)).constructor;i=Reflect.construct(j,arguments,l)}else i=j.apply(this,arguments);return c=this,(f=i)&&("object"==((g=f)&&g.constructor===Symbol?"symbol":typeof g)||"function"==typeof f)?f:(0,e.Z)(c)}}},8029:function(a,b,c){"use strict";function d(a,b){return(d=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a})(a,b)}function e(a,b){if("function"!=typeof b&&null!==b)throw TypeError("Super expression must either be null or a function");if(a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b){var c,e;c=a,d(c,e=b)}}c.d(b,{Z:function(){return e}})}}])