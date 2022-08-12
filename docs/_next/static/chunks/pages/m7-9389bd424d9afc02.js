(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[577],{5812:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/m7",function(){return c(5307)}])},5307:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return C}});var d=c(5893),e=c(9008),f=c.n(e),g=c(7294),h=c(6135),i=c(7462),j=c(6364),k=c(9477);class l extends k.DataTextureLoader{constructor(a){super(a),this.type=k.HalfFloatType}parse(a){let b=function(a,b){switch(a){case 1:console.error("THREE.RGBELoader Read Error: "+(b||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(b||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(b||""));break;default:console.error("THREE.RGBELoader: Error: "+(b||""))}return -1},c=function(a,b,c){b=b||1024;let d=a.pos,e=-1,f=0,g="",h=String.fromCharCode.apply(null,new Uint16Array(a.subarray(d,d+128)));for(;0>(e=h.indexOf("\n"))&&f<b&&d<a.byteLength;)g+=h,f+=h.length,d+=128,h+=String.fromCharCode.apply(null,new Uint16Array(a.subarray(d,d+128)));return -1<e&&(!1!==c&&(a.pos+=f+e+1),g+h.slice(0,e))},d=new Uint8Array(a);d.pos=0;let e=function(a){let d=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,e=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,f=/^\s*FORMAT=(\S+)\s*$/,g=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,h={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},i,j;if(a.pos>=a.byteLength||!(i=c(a)))return b(1,"no header found");if(!(j=i.match(/^#\?(\S+)/)))return b(3,"bad initial token");for(h.valid|=1,h.programtype=j[1],h.string+=i+"\n";!1!==(i=c(a));){if(h.string+=i+"\n","#"===i.charAt(0)){h.comments+=i+"\n";continue}if((j=i.match(d))&&(h.gamma=parseFloat(j[1])),(j=i.match(e))&&(h.exposure=parseFloat(j[1])),(j=i.match(f))&&(h.valid|=2,h.format=j[1]),(j=i.match(g))&&(h.valid|=4,h.height=parseInt(j[1],10),h.width=parseInt(j[2],10)),2&h.valid&&4&h.valid)break}return 2&h.valid?4&h.valid?h:b(3,"missing image size specifier"):b(3,"missing format specifier")}(d);if(-1!==e){let f=e.width,g=e.height,h=function(a,c,d){let e=c;if(e<8||e>32767||2!==a[0]||2!==a[1]||128&a[2])return new Uint8Array(a);if(e!==(a[2]<<8|a[3]))return b(3,"wrong scanline width");let f=new Uint8Array(4*c*d);if(!f.length)return b(4,"unable to allocate buffer space");let g=0,h=0,i=4*e,j=new Uint8Array(4),k=new Uint8Array(i),l=d;for(;l>0&&h<a.byteLength;){if(h+4>a.byteLength)return b(1);if(j[0]=a[h++],j[1]=a[h++],j[2]=a[h++],j[3]=a[h++],2!=j[0]||2!=j[1]||(j[2]<<8|j[3])!=e)return b(3,"bad rgbe scanline format");let m=0,n;for(;m<i&&h<a.byteLength;){n=a[h++];let o=n>128;if(o&&(n-=128),0===n||m+n>i)return b(3,"bad scanline data");if(o){let p=a[h++];for(let q=0;q<n;q++)k[m++]=p}else k.set(a.subarray(h,h+n),m),m+=n,h+=n}let r=e;for(let s=0;s<r;s++){let t=0;f[g]=k[s+t],t+=e,f[g+1]=k[s+t],t+=e,f[g+2]=k[s+t],t+=e,f[g+3]=k[s+t],g+=4}l--}return f}(d.subarray(d.pos),f,g);if(-1!==h){let i,j,l,m;switch(this.type){case k.FloatType:m=h.length/4;let n=new Float32Array(4*m);for(let o=0;o<m;o++)!function(a,b,c,d){let e=a[b+3],f=Math.pow(2,e-128)/255;c[d+0]=a[b+0]*f,c[d+1]=a[b+1]*f,c[d+2]=a[b+2]*f,c[d+3]=1}(h,4*o,n,4*o);i=n,l=k.FloatType;break;case k.HalfFloatType:m=h.length/4;let p=new Uint16Array(4*m);for(let q=0;q<m;q++)!function(a,b,c,d){let e=a[b+3],f=Math.pow(2,e-128)/255;c[d+0]=k.DataUtils.toHalfFloat(Math.min(a[b+0]*f,65504)),c[d+1]=k.DataUtils.toHalfFloat(Math.min(a[b+1]*f,65504)),c[d+2]=k.DataUtils.toHalfFloat(Math.min(a[b+2]*f,65504)),c[d+3]=k.DataUtils.toHalfFloat(1)}(h,4*q,p,4*q);i=p,l=k.HalfFloatType;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type)}return{width:f,height:g,data:i,header:e.string,gamma:e.gamma,exposure:e.exposure,format:j,type:l}}}return null}setDataType(a){return this.type=a,this}load(a,b,c,d){return super.load(a,function(a,c){switch(a.type){case k.FloatType:case k.HalfFloatType:a.encoding=k.LinearEncoding,a.minFilter=k.LinearFilter,a.magFilter=k.LinearFilter,a.generateMipmaps=!1,a.flipY=!0}b&&b(a,c)},c,d)}}class m extends k.Mesh{constructor(a,b){var c,d,e;let f=(e=a)&&e.isCubeTexture,g=null!=(c=f?null===(d=a.image[0])|| void 0===d?void 0:d.width:a.image.width)?c:1024,h=Math.floor(Math.log2(g/4)),i=Math.pow(2,h),j=[f?"#define ENVMAP_TYPE_CUBE":"",`#define CUBEUV_TEXEL_WIDTH ${1/(3*Math.max(i,112))}`,`#define CUBEUV_TEXEL_HEIGHT ${1/(4*i)}`,`#define CUBEUV_MAX_MIP ${h}.0`],l=`
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `,m=j.join("\n")+`
        #define ENVMAP_TYPE_CUBE_UV
        varying vec3 vWorldPosition;
        uniform float radius;
        uniform float height;
        uniform float angle;
        #ifdef ENVMAP_TYPE_CUBE
            uniform samplerCube map;
        #else
            uniform sampler2D map;
        #endif
        // From: https://www.shadertoy.com/view/4tsBD7
        float diskIntersectWithBackFaceCulling( vec3 ro, vec3 rd, vec3 c, vec3 n, float r ) 
        {
            float d = dot ( rd, n );
            
            if( d > 0.0 ) { return 1e6; }
            
            vec3  o = ro - c;
            float t = - dot( n, o ) / d;
            vec3  q = o + rd * t;
            
            return ( dot( q, q ) < r * r ) ? t : 1e6;
        }
        // From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm
        float sphereIntersect( vec3 ro, vec3 rd, vec3 ce, float ra ) 
        {
            vec3 oc = ro - ce;
            float b = dot( oc, rd );
            float c = dot( oc, oc ) - ra * ra;
            float h = b * b - c;
            
            if( h < 0.0 ) { return -1.0; }
            
            h = sqrt( h );
            
            return - b + h;
        }
        vec3 project() 
        {
            vec3 p = normalize( vWorldPosition );
            vec3 camPos = cameraPosition;
            camPos.y -= height;
            float intersection = sphereIntersect( camPos, p, vec3( 0.0 ), radius );
            if( intersection > 0.0 ) {
                
                vec3 h = vec3( 0.0, - height, 0.0 );
                float intersection2 = diskIntersectWithBackFaceCulling( camPos, p, h, vec3( 0.0, 1.0, 0.0 ), radius );
                p = ( camPos + min( intersection, intersection2 ) * p ) / radius;
            } else {
                p = vec3( 0.0, 1.0, 0.0 );
            }
            return p;
        }
        #include <common>
        #include <cube_uv_reflection_fragment>
        void main() 
        {
            vec3 projectedWorldPosition = project();
            
            #ifdef ENVMAP_TYPE_CUBE
                vec3 outcolor = textureCube( map, projectedWorldPosition ).rgb;
            #else
                vec3 direction = normalize( projectedWorldPosition );
                vec2 uv = equirectUv( direction );
                vec3 outcolor = texture2D( map, uv ).rgb;
            #endif
            gl_FragColor = vec4( outcolor, 1.0 );
            #include <tonemapping_fragment>
            #include <encodings_fragment>
        }
        `,n={map:{value:a},height:{value:(null==b?void 0:b.height)||15},radius:{value:(null==b?void 0:b.radius)||100}},o=new k.IcosahedronGeometry(1,16),p=new k.ShaderMaterial({uniforms:n,fragmentShader:m,vertexShader:l,side:k.DoubleSide});super(o,p)}set radius(a){this.material.uniforms.radius.value=a}get radius(){return this.material.uniforms.radius.value}set height(a){this.material.uniforms.height.value=a}get height(){return this.material.uniforms.height.value}}let n={sunset:"venice/venice_sunset_1k.hdr",dawn:"kiara/kiara_1_dawn_1k.hdr",night:"dikhololo/dikhololo_night_1k.hdr",warehouse:"empty-wharehouse/empty_warehouse_01_1k.hdr",forest:"forrest-slope/forest_slope_1k.hdr",apartment:"lebombo/lebombo_1k.hdr",studio:"studio-small-3/studio_small_03_1k.hdr",city:"potsdamer-platz/potsdamer_platz_1k.hdr",park:"rooitou/rooitou_park_1k.hdr",lobby:"st-fagans/st_fagans_interior_1k.hdr"},o=a=>a.current&&a.current.isScene,p=a=>o(a)?a.current:a;function q({scene:a,background:b=!1,map:c}){let d=(0,j.w)(a=>a.scene);return g.useLayoutEffect(()=>{if(c){let e=p(a||d),f=e.background,g=e.environment;return"only"!==b&&(e.environment=c),b&&(e.background=c),()=>{"only"!==b&&(e.environment=g),b&&(e.background=f)}}},[d,a,c,b]),null}function r({files:a=["/px.png","/nx.png","/py.png","/ny.png","/pz.png","/nz.png"],path:b="",preset:c,encoding:d,extensions:e}){if(c){if(!(c in n))throw Error("Preset must be one of: "+Object.keys(n).join(", "));a=n[c],b="https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/hdris/"}let f=Array.isArray(a),g=f?k.CubeTextureLoader:l,h=(0,j.z)(g,f?[a]:a,a=>{a.setPath(b),e&&e(a)}),i=f?h[0]:h;return i.mapping=f?k.CubeReflectionMapping:k.EquirectangularReflectionMapping,i.encoding=(null!=d?d:f)?k.sRGBEncoding:k.LinearEncoding,i}function s({background:a=!1,scene:b,...c}){let d=r(c),e=(0,j.w)(a=>a.scene);return g.useLayoutEffect(()=>{let c=p(b||e),f=c.background,g=c.environment;return"only"!==a&&(c.environment=d),a&&(c.background=d),()=>{"only"!==a&&(c.environment=g),a&&(c.background=f)}},[d,a,b,e]),null}function t({children:a,near:b=1,far:c=1e3,resolution:d=256,frames:e=1,map:f,background:h=!1,scene:i,files:l,path:m,preset:n,extensions:o}){let r=(0,j.w)(a=>a.gl),t=(0,j.w)(a=>a.scene),u=g.useRef(null),[v]=g.useState(()=>new k.Scene),w=g.useMemo(()=>{let a=new k.WebGLCubeRenderTarget(d);return a.texture.type=k.HalfFloatType,a},[d]);g.useLayoutEffect(()=>{1===e&&u.current.update(r,v);let a=p(i||t),b=a.background,c=a.environment;return"only"!==h&&(a.environment=w.texture),h&&(a.background=w.texture),()=>{"only"!==h&&(a.environment=c),h&&(a.background=b)}},[a,v,w.texture,i,t,h,e,r]);let x=1;return(0,j.x)(()=>{(e===1/0||x<e)&&(u.current.update(r,v),x++)}),g.createElement(g.Fragment,null,(0,j.g)(g.createElement(g.Fragment,null,a,g.createElement("cubeCamera",{ref:u,args:[b,c,w]}),l||n?g.createElement(s,{background:!0,files:l,preset:n,path:m,extensions:o}):f?g.createElement(q,{background:!0,map:f,extensions:o}):null),v))}function u(a){var b,c,d,e;let f=r(a),h=a.map||f;g.useMemo(()=>{(0,j.e)({GroundProjectedEnvImpl:m})},[]);let k=g.useMemo(()=>[h],[h]),l=null==(b=a.ground)?void 0:b.height,n=null==(c=a.ground)?void 0:c.radius,o=null!==(d=null==(e=a.ground)?void 0:e.scale)&& void 0!==d?d:1e3;return g.createElement(g.Fragment,null,g.createElement(q,(0,i.Z)({},a,{map:h})),g.createElement("groundProjectedEnvImpl",{args:k,scale:o,height:l,radius:n}))}function v(a){return a.ground?g.createElement(u,a):a.map?g.createElement(q,a):a.children?g.createElement(t,a):g.createElement(s,a)}var w=c(1799),x=c(9396),y=c(8626),z=c(3857),A=c(712);function B(a){var b=(0,g.useRef)(),c=(0,y.L)("/gl/wood eywa.glb"),e=c.nodes,f=c.materials,h=c.animations,i=(0,z.v)(h,b).actions;return(0,g.useEffect)(function(){var a;null==i||null===(a=i[1])|| void 0===a||a.play()},[i]),(0,d.jsx)("group",(0,x.Z)((0,w.Z)({ref:b},a),{dispose:null,children:(0,d.jsxs)("group",{name:"Scene",children:[(0,d.jsx)("group",{name:"Camera001",position:[0,.68,2.04],rotation:[1.61,0,0],children:(0,d.jsx)(A.c,{name:"Camera001_Orientation",makeDefault:!0,far:1e3,near:.1,fov:39.76,rotation:[-Math.PI/2,0,0]})}),(0,d.jsx)("mesh",{name:"Cloner_2",geometry:e.Cloner_2.geometry,material:f["Material.002"],position:[0,.41,-.02],scale:.0015644518425688148}),(0,d.jsx)("mesh",{name:"Cloner_3",geometry:e.Cloner_3.geometry,material:f["Material.006"],position:[.24,.39,0],scale:.0015482268063351512}),(0,d.jsx)("mesh",{name:"F1",geometry:e.F1.geometry,material:f["Material.003"],position:[0,.6,0],rotation:[-Math.PI/2,0,0],scale:[.94,.94,.36]}),(0,d.jsxs)("group",{name:"C3",position:[0,.73,0],rotation:[-Math.PI/2,0,0],scale:[1.62,1.62,.47],children:[(0,d.jsx)("mesh",{name:"C3_1",geometry:e.C3_1.geometry,material:f["Material.004"]}),(0,d.jsx)("mesh",{name:"C3_2",geometry:e.C3_2.geometry,material:f["Material.005"]})]}),(0,d.jsx)("mesh",{name:"FL1",geometry:e.FL1.geometry,material:e.FL1.material,position:[0,.25,0],rotation:[-Math.PI/2,0,0],scale:[1.18,1.18,.13]}),(0,d.jsx)("mesh",{name:"FL2",geometry:e.FL2.geometry,material:e.FL2.material,position:[0,.29,0],rotation:[-Math.PI/2,0,0],scale:[1.72,1.72,.07]}),(0,d.jsx)("mesh",{name:"FL3",geometry:e.FL3.geometry,material:e.FL3.material,position:[0,.34,0],rotation:[-Math.PI/2,0,0],scale:[2.3,2.3,.07]}),(0,d.jsx)("mesh",{name:"FL4",geometry:e.FL4.geometry,material:e.FL4.material,position:[0,.39,0],rotation:[-Math.PI/2,0,0],scale:[2.91,2.91,.07]})]})}))}function C(){return(0,d.jsxs)("div",{children:[(0,d.jsxs)(f(),{children:[(0,d.jsx)("title",{children:"Mint"}),(0,d.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,d.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,d.jsx)("main",{style:{height:"100vh",background:"green"},children:(0,d.jsx)(h.Xz,{onCreated:function(a){return a.gl.setClearColor(0,0)},children:(0,d.jsxs)(g.Suspense,{fallback:null,children:[(0,d.jsx)(v,{files:"hdr.hdr",path:"/gl/"}),(0,d.jsx)(B,{})]})})})]})}y.L.preload("/gl/wood eywa.glb")}},function(a){a.O(0,[737,851,774,888,179],function(){var b;return a(a.s=5812)}),_N_E=a.O()}])