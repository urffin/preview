(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[343],{1045:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/m8",function(){return c(1546)}])},6228:function(a,b,c){"use strict";c.d(b,{T:function(){return l}});var d=c(1799),e=c(9396),f=c(5893),g=c(7294),h=c(8626),i=c(3857),j=c(712),k=c(6364);function l(a){var b=a.anchor,c=a.target,l=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["anchor","target"]),m=(0,g.useRef)(),n=(0,h.L)("/gl/logo e final.glb"),o=n.nodes,p=n.materials,q=n.animations,r=(0,i.v)(q,m),s=r.actions,t=r.mixer,u=(0,g.useRef)(0);return(0,g.useEffect)(function(){var a,d=function(a){a.forEach(function(a){h=a.isIntersecting})},e=function(){if(h){var a=q[0].duration,b=g.offsetHeight-window.innerHeight,c=Math.max(window.scrollY-g.offsetTop,0),d=Math.min(Math.max(0,c-1)*a/b,a-1e-15);u.current=d}};s[1].play();var f=document.querySelector("."+c),g=document.querySelector("."+b),h=!1;return(a=new IntersectionObserver(d,{root:null,threshold:.8})).observe(f),window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e),a.unobserve(g)}},[b,c,s,q]),(0,k.x)(function(){t.setTime(u.current)}),(0,f.jsx)("group",(0,e.Z)((0,d.Z)({ref:m},l),{dispose:null,children:(0,f.jsxs)("group",{name:"Scene",children:[(0,f.jsx)("group",{name:"Sketchfab_model",rotation:[-Math.PI/2,0,0],scale:2.02,children:(0,f.jsx)("group",{name:"Collada_visual_scene_group"})}),(0,f.jsx)("group",{name:"Camera",position:[-40.42,40.4,40.42],rotation:[1.11,-.42,.68],children:(0,f.jsx)(j.c,{name:"Camera_Orientation",makeDefault:!0,far:1e3,near:.1,fov:22.9,rotation:[-Math.PI/2,0,0]})}),(0,f.jsx)("mesh",{name:"C1",geometry:o.C1.geometry,material:p["Material.005"],position:[0,25.64,0]}),(0,f.jsx)("mesh",{name:"C2",geometry:o.C2.geometry,material:p["Material.005"],position:[-40,0,0]}),(0,f.jsx)("mesh",{name:"C3",geometry:o.C3.geometry,material:p["Material.005"],position:[0,0,40]}),(0,f.jsx)("mesh",{name:"Cube",geometry:o.Cube.geometry,material:o.Cube.material,position:[0,-26.55,0]})]})}))}h.L.preload("/gl/logo e final.glb")},1546:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return A}});var d=c(5893),e=c(9008),f=c.n(e),g=c(7294),h=c(6364),i=c(6135),j=c(9719);c(6228);var k=c(1799),l=c(9396),m=c(8626),n=c(3857),o=c(712);function p(a){var b=(0,g.useRef)(),c=(0,m.L)("/gl/LOGO ROOM eywa  anim.glb"),e=c.nodes,f=c.materials,h=c.animations,i=(0,n.v)(h,b).actions;return(0,g.useEffect)(function(){var a;null==i||null===(a=i[1])|| void 0===a||a.play()}),(0,d.jsx)("group",(0,l.Z)((0,k.Z)({ref:b},a),{dispose:null,children:(0,d.jsxs)("group",{name:"Scene",children:[(0,d.jsx)("group",{name:"Camera",position:[-4.2,.6,0],rotation:[Math.PI/2,0,1.46],children:(0,d.jsx)(o.c,{name:"Camera_Orientation",makeDefault:!0,far:1e3,near:.1,fov:18.55,rotation:[-Math.PI/2,0,0]})}),(0,d.jsx)("group",{name:"Point",position:[0,1.04,0],children:(0,d.jsx)("pointLight",{name:"Point_Orientation",intensity:1,decay:2,rotation:[-Math.PI/2,0,0]})}),(0,d.jsx)("group",{name:"Point001",position:[0,.07,0],children:(0,d.jsx)("pointLight",{name:"Point001_Orientation",intensity:1,decay:2,rotation:[-Math.PI/2,0,0]})}),(0,d.jsx)("mesh",{name:"Cloner_3",geometry:e.Cloner_3.geometry,material:f["Material.006"],position:[.09,-1.67,-.07],scale:5.51}),(0,d.jsxs)("group",{name:"Cylinder001",position:[0,1.33,0],children:[(0,d.jsx)("mesh",{name:"Cylinder002",geometry:e.Cylinder002.geometry,material:f["Material.008"]}),(0,d.jsx)("mesh",{name:"Cylinder002_1",geometry:e.Cylinder002_1.geometry,material:f["Material.009"]})]}),(0,d.jsx)("mesh",{name:"Cylinder008",geometry:e.Cylinder008.geometry,material:f["Material.010"],position:[0,.01,0]})]})}))}m.L.preload("/gl/LOGO ROOM eywa  anim.glb");var q=c(9477);class r{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}let s=new q.OrthographicCamera(-1,1,1,-1,0,1),t=new q.BufferGeometry;t.setAttribute("position",new q.Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3)),t.setAttribute("uv",new q.Float32BufferAttribute([0,2,0,0,2,0],2));let u={uniforms:{tDiffuse:{value:null},resolution:{value:new q.Vector2(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	precision highp float;

	uniform sampler2D tDiffuse;

	uniform vec2 resolution;

	varying vec2 vUv;

	// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

	//----------------------------------------------------------------------------------
	// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
	// SDK Version: v3.00
	// Email:       gameworks@nvidia.com
	// Site:        http://developer.nvidia.com/
	//
	// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions
	// are met:
	//  * Redistributions of source code must retain the above copyright
	//    notice, this list of conditions and the following disclaimer.
	//  * Redistributions in binary form must reproduce the above copyright
	//    notice, this list of conditions and the following disclaimer in the
	//    documentation and/or other materials provided with the distribution.
	//  * Neither the name of NVIDIA CORPORATION nor the names of its
	//    contributors may be used to endorse or promote products derived
	//    from this software without specific prior written permission.
	//
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
	// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
	// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
	// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	//
	//----------------------------------------------------------------------------------

	#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
	#endif

	/*--------------------------------------------------------------------------*/
	#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
	#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
	/*--------------------------------------------------------------------------*/

	#define NUM_SAMPLES 5

	// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
	float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
	}

	/*============================================================================

									FXAA3 QUALITY - PC

	============================================================================*/

	/*--------------------------------------------------------------------------*/
	vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
	) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
					if(earlyExit) FxaaDiscard;
			#else
					if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
					// locate the edge
					vec2 dirToEdge;
					dirToEdge.x = contrastE > contrastW ? 1. : -1.;
					dirToEdge.y = contrastS > contrastN ? 1. : -1.;
					// . 2 .      . 1 .
					// 1 0 2  ~=  0 0 1
					// . 1 .      . 0 .

					// tap 2 pixels and see which ones are "outside" the edge, to
					// determine if the edge is vertical or horizontal

					vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongH = contrast( rgbaM, rgbaAlongH );
					// . 1 .
					// 0 0 1
					// . 0 H

					vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongV = contrast( rgbaM, rgbaAlongV );
					// V 1 .
					// 0 0 1
					// . 0 .

					relativeVContrast = matchAlongV - matchAlongH;
					relativeVContrast *= fxaaQualityinvEdgeThreshold;

					if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
							// 1 1 .
							// 0 0 1
							// . 0 1

							// do a simple blur
							return mix(
									rgbaM,
									(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
									.4
							);
					}

					horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
					iterationsUsed = i;

					float increment = float(i + 1);

					if(!doneN) {
							nDist += increment;
							posN = posM + offNP * nDist;
							vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
							doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
							iterationsUsedN = i;
					}

					if(!doneP) {
							pDist += increment;
							posP = posM - offNP * pDist;
							vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
							doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
							iterationsUsedP = i;
					}

					if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
					doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
					doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
					rgbaM,
					rgbaN,
					dist * .5
			);
	}

	void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
					vUv,
					tDiffuse,
					resolution,
					edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
					invEdgeDetectionQuality
			);

	}
	`};function v(a){var b=(0,m.L)("/gl/obj_logo.glb"),c=b.nodes,e=b.materials;return(0,d.jsx)("group",(0,l.Z)((0,k.Z)({},a),{dispose:null,scale:[.15,.15,.15],position:[0,.85,0],children:(0,d.jsxs)("group",{rotation:[-Math.PI/2,0,0],children:[(0,d.jsx)("group",{position:[0,0,2.53],scale:[.62,.62,2.09],children:(0,d.jsx)("mesh",{geometry:c["Material_004-material"].geometry,material:e["Material.005"]})}),(0,d.jsx)("group",{position:[0,0,2.53],rotation:[0,0,-Math.PI],children:(0,d.jsx)("mesh",{geometry:c["Material_001-material"].geometry,material:e["Material.002"]})}),(0,d.jsx)("group",{position:[0,0,2.53],rotation:[-.06,-.02,-1.3],children:(0,d.jsx)("mesh",{geometry:c["Material_003-material"].geometry,material:e["Material.003"]})}),(0,d.jsx)("group",{position:[0,0,2.53],rotation:[0,0,1.84],children:(0,d.jsx)("mesh",{geometry:c["Material_002-material"].geometry,material:e["Material.004"]})}),(0,d.jsx)("group",{position:[0,0,2.53],rotation:[0,-.07,0],children:(0,d.jsx)("mesh",{geometry:c["Material-material"].geometry,material:e["Material.001"]})})]})}))}m.L.preload("/gl/obj_logo.glb");var w={FXAAShader:u,ShaderPass:class extends r{constructor(a,b){super(),this.textureID=void 0!==b?b:"tDiffuse",a instanceof q.ShaderMaterial?(this.uniforms=a.uniforms,this.material=a):a&&(this.uniforms=q.UniformsUtils.clone(a.uniforms),this.material=new q.ShaderMaterial({defines:Object.assign({},a.defines),uniforms:this.uniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader})),this.fsQuad=new class{constructor(a){this._mesh=new q.Mesh(t,a)}dispose(){this._mesh.geometry.dispose()}render(a){a.render(this._mesh,s)}get material(){return this._mesh.material}set material(a){this._mesh.material=a}}(this.material)}render(a,b,c){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=c.texture),this.fsQuad.material=this.material,this.renderToScreen?(a.setRenderTarget(null),this.fsQuad.render(a)):(a.setRenderTarget(b),this.clear&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),this.fsQuad.render(a))}}};(0,h.e)(w);var x=void 0,y=!1;function z(a){var b=a.exposure;(0,h.x)(function(a){a.gl.toneMappingExposure=Math.pow(b,4)})}function A(){var a=(0,g.useState)(1),b=a[0];a[1];var c=(0,g.useState)(1.5);c[0],c[1];var e=(0,g.useState)(.85);e[0],e[1];var h=(0,g.useState)(3);h[0],h[1];var k=(0,g.useState)(1);return k[0],k[1],(0,g.useRef)({projection:"normal",background:!1,exposure:1,bloomStrength:1.5,bloomThreshold:.85,kernelSize:3,intensity:1}),(0,g.useEffect)(function(){if(!y)return y=!0,function(){return null==x?void 0:x.destroy()}},[]),(0,d.jsxs)("div",{children:[(0,d.jsxs)(f(),{children:[(0,d.jsx)("title",{children:"Mint"}),(0,d.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,d.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,d.jsx)("main",{style:{height:"100vh",backgroundSize:"cover"},children:(0,d.jsx)(i.Xz,{onCreated:function(a){return a.gl.setClearColor(0,0)},children:(0,d.jsxs)(g.Suspense,{fallback:null,children:[(0,d.jsx)(z,{exposure:b}),(0,d.jsx)(j.qA,{files:"zzzz.pic",path:"/gl/"}),(0,d.jsx)(p,{}),(0,d.jsx)(v,{})]})})})]})}}},function(a){a.O(0,[737,170,774,888,179],function(){var b;return a(a.s=1045)}),_N_E=a.O()}])