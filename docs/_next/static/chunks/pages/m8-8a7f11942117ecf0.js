(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[343],{1045:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/m8",function(){return c(8097)}])},8097:function(a,b,c){"use strict";function d(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(j){c(j);return}h.done?b(i):Promise.resolve(i).then(d,e)}c.r(b),c.d(b,{default:function(){return D}});var e=c(4051),f=c.n(e),g=c(5893),h=c(9008),i=c.n(h),j=c(7294),k=c(6364),l=c(6135),m=c(9719),n=c(8626);n.L.preload("/gl/logo e final.glb");var o=c(1799),p=c(9396),q=c(3857),r=c(712);function s(a){var b=(0,j.useRef)(),c=(0,n.L)("/gl/LOGO ROOM eywa  anim.glb"),d=c.nodes,e=c.materials,f=c.animations,h=(0,q.v)(f,b).actions;return(0,j.useEffect)(function(){var a;null==h||null===(a=h[1])|| void 0===a||a.play()}),(0,g.jsx)("group",(0,p.Z)((0,o.Z)({ref:b},a),{dispose:null,children:(0,g.jsxs)("group",{name:"Scene",children:[(0,g.jsx)("group",{name:"Camera",position:[-4.2,.6,0],rotation:[Math.PI/2,0,1.46],children:(0,g.jsx)(r.c,{name:"Camera_Orientation",makeDefault:!0,far:1e3,near:.1,fov:18.55,rotation:[-Math.PI/2,0,0]})}),(0,g.jsx)("group",{name:"Point",position:[0,1.04,0],children:(0,g.jsx)("pointLight",{name:"Point_Orientation",intensity:1,decay:2,rotation:[-Math.PI/2,0,0]})}),(0,g.jsx)("group",{name:"Point001",position:[0,.07,0],children:(0,g.jsx)("pointLight",{name:"Point001_Orientation",intensity:1,decay:2,rotation:[-Math.PI/2,0,0]})}),(0,g.jsx)("mesh",{name:"Cloner_3",geometry:d.Cloner_3.geometry,material:e["Material.006"],position:[.09,-1.67,-.07],scale:5.51}),(0,g.jsx)("mesh",{name:"C2",geometry:d.C2.geometry,material:e["Material.007"],position:[0,.61,0],scale:1.51}),(0,g.jsx)("mesh",{name:"C3001",geometry:d.C3001.geometry,material:e["Material.007"],position:[0,.61,0],scale:1.51}),(0,g.jsx)("mesh",{name:"Cube",geometry:d.Cube.geometry,material:e.Material,position:[0,.61,0],scale:1.51}),(0,g.jsx)("mesh",{name:"C2001",geometry:d.C2001.geometry,material:e["Material.007"],position:[0,.61,0],scale:1.51}),(0,g.jsxs)("group",{name:"Cylinder001",position:[0,1.33,0],children:[(0,g.jsx)("mesh",{name:"Cylinder002",geometry:d.Cylinder002.geometry,material:e["Material.008"]}),(0,g.jsx)("mesh",{name:"Cylinder002_1",geometry:d.Cylinder002_1.geometry,material:e["Material.009"]})]}),(0,g.jsx)("mesh",{name:"Cylinder008",geometry:d.Cylinder008.geometry,material:e["Material.010"],position:[0,.01,0]})]})}))}n.L.preload("/gl/LOGO ROOM eywa  anim.glb");var t=c(4503),u=c(9477);class v{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}let w=new u.OrthographicCamera(-1,1,1,-1,0,1),x=new u.BufferGeometry;x.setAttribute("position",new u.Float32BufferAttribute([-1,3,0,-1,-1,0,3,-1,0],3)),x.setAttribute("uv",new u.Float32BufferAttribute([0,2,0,0,2,0],2));let y={uniforms:{tDiffuse:{value:null},resolution:{value:new u.Vector2(1/1024,1/512)}},vertexShader:`

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
	`};var z={FXAAShader:y,ShaderPass:class extends v{constructor(a,b){super(),this.textureID=void 0!==b?b:"tDiffuse",a instanceof u.ShaderMaterial?(this.uniforms=a.uniforms,this.material=a):a&&(this.uniforms=u.UniformsUtils.clone(a.uniforms),this.material=new u.ShaderMaterial({defines:Object.assign({},a.defines),uniforms:this.uniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader})),this.fsQuad=new class{constructor(a){this._mesh=new u.Mesh(x,a)}dispose(){this._mesh.geometry.dispose()}render(a){a.render(this._mesh,w)}get material(){return this._mesh.material}set material(a){this._mesh.material=a}}(this.material)}render(a,b,c){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=c.texture),this.fsQuad.material=this.material,this.renderToScreen?(a.setRenderTarget(null),this.fsQuad.render(a)):(a.setRenderTarget(b),this.clear&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),this.fsQuad.render(a))}}};(0,k.e)(z);var A=void 0,B=!1;function C(a){var b=a.exposure;(0,k.x)(function(a){a.gl.toneMappingExposure=Math.pow(b,4)})}function D(){var a=(0,j.useState)(1),b=a[0],e=a[1],h=(0,j.useState)(1.5),k=h[0],n=h[1],o=(0,j.useState)(.85),p=o[0],q=o[1],r=(0,j.useState)(3),u=r[0],v=r[1],w=(0,j.useState)(1),x=w[0],y=w[1],z=(0,j.useRef)({projection:"normal",background:!1,exposure:1,bloomStrength:1.5,bloomThreshold:.85,kernelSize:3,intensity:1});return(0,j.useEffect)(function(){if(!B){var a;return B=!0,(a=f().mark(function a(){var b;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c.e(376).then(c.bind(c,4376));case 2:(A=new(b=a.sent.GUI)).add(z.current,"exposure",.1,2).onChange(function(a){return e(a)}),A.add(z.current,"bloomThreshold",0,1).onChange(function(a){q(Number(a))}),A.add(z.current,"bloomStrength",0,5).onChange(function(a){n(Number(a))}),A.add(z.current,"kernelSize",1,7).onChange(function(a){v(Number(a))}),A.add(z.current,"intensity",0,100).onChange(function(a){y(Number(a))});case 9:case"end":return a.stop()}},a)}),function(){var b=this,c=arguments;return new Promise(function(e,f){var g=a.apply(b,c);function h(a){d(g,e,f,h,i,"next",a)}function i(a){d(g,e,f,h,i,"throw",a)}h(void 0)})})(),function(){return null==A?void 0:A.destroy()}}},[]),(0,g.jsxs)("div",{children:[(0,g.jsxs)(i(),{children:[(0,g.jsx)("title",{children:"Mint"}),(0,g.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,g.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,g.jsx)("main",{style:{height:"100vh",backgroundSize:"cover"},children:(0,g.jsx)(l.Xz,{onCreated:function(a){return a.gl.setClearColor(0,0)},children:(0,g.jsxs)(j.Suspense,{fallback:null,children:[(0,g.jsx)(C,{exposure:b}),(0,g.jsx)(m.qA,{files:"zzzz.pic",path:"/gl/"}),(0,g.jsx)(s,{}),(0,g.jsx)(t.xC,{children:(0,g.jsx)(t.dp,{kernelSize:u,luminanceThreshold:p,luminanceSmoothing:k,intensity:x})})]})})})]})}}},function(a){a.O(0,[737,444,107,774,888,179],function(){var b;return a(a.s=1045)}),_N_E=a.O()}])