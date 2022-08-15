"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[719],{9719:function(a,b,c){c.d(b,{qA:function(){return r}});var d=c(7462),e=c(7294),f=c(6364),g=c(9477);class h extends g.DataTextureLoader{constructor(a){super(a),this.type=g.HalfFloatType}parse(a){let b=function(a,b){switch(a){case 1:console.error("THREE.RGBELoader Read Error: "+(b||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(b||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(b||""));break;default:console.error("THREE.RGBELoader: Error: "+(b||""))}return -1},c=function(a,b,c){b=b||1024;let d=a.pos,e=-1,f=0,g="",h=String.fromCharCode.apply(null,new Uint16Array(a.subarray(d,d+128)));for(;0>(e=h.indexOf("\n"))&&f<b&&d<a.byteLength;)g+=h,f+=h.length,d+=128,h+=String.fromCharCode.apply(null,new Uint16Array(a.subarray(d,d+128)));return -1<e&&(!1!==c&&(a.pos+=f+e+1),g+h.slice(0,e))},d=new Uint8Array(a);d.pos=0;let e=function(a){let d=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,e=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,f=/^\s*FORMAT=(\S+)\s*$/,g=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,h={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},i,j;if(a.pos>=a.byteLength||!(i=c(a)))return b(1,"no header found");if(!(j=i.match(/^#\?(\S+)/)))return b(3,"bad initial token");for(h.valid|=1,h.programtype=j[1],h.string+=i+"\n";!1!==(i=c(a));){if(h.string+=i+"\n","#"===i.charAt(0)){h.comments+=i+"\n";continue}if((j=i.match(d))&&(h.gamma=parseFloat(j[1])),(j=i.match(e))&&(h.exposure=parseFloat(j[1])),(j=i.match(f))&&(h.valid|=2,h.format=j[1]),(j=i.match(g))&&(h.valid|=4,h.height=parseInt(j[1],10),h.width=parseInt(j[2],10)),2&h.valid&&4&h.valid)break}return 2&h.valid?4&h.valid?h:b(3,"missing image size specifier"):b(3,"missing format specifier")}(d);if(-1!==e){let f=e.width,h=e.height,i=function(a,c,d){let e=c;if(e<8||e>32767||2!==a[0]||2!==a[1]||128&a[2])return new Uint8Array(a);if(e!==(a[2]<<8|a[3]))return b(3,"wrong scanline width");let f=new Uint8Array(4*c*d);if(!f.length)return b(4,"unable to allocate buffer space");let g=0,h=0,i=4*e,j=new Uint8Array(4),k=new Uint8Array(i),l=d;for(;l>0&&h<a.byteLength;){if(h+4>a.byteLength)return b(1);if(j[0]=a[h++],j[1]=a[h++],j[2]=a[h++],j[3]=a[h++],2!=j[0]||2!=j[1]||(j[2]<<8|j[3])!=e)return b(3,"bad rgbe scanline format");let m=0,n;for(;m<i&&h<a.byteLength;){n=a[h++];let o=n>128;if(o&&(n-=128),0===n||m+n>i)return b(3,"bad scanline data");if(o){let p=a[h++];for(let q=0;q<n;q++)k[m++]=p}else k.set(a.subarray(h,h+n),m),m+=n,h+=n}let r=e;for(let s=0;s<r;s++){let t=0;f[g]=k[s+t],t+=e,f[g+1]=k[s+t],t+=e,f[g+2]=k[s+t],t+=e,f[g+3]=k[s+t],g+=4}l--}return f}(d.subarray(d.pos),f,h);if(-1!==i){let j,k,l,m;switch(this.type){case g.FloatType:m=i.length/4;let n=new Float32Array(4*m);for(let o=0;o<m;o++)!function(a,b,c,d){let e=a[b+3],f=Math.pow(2,e-128)/255;c[d+0]=a[b+0]*f,c[d+1]=a[b+1]*f,c[d+2]=a[b+2]*f,c[d+3]=1}(i,4*o,n,4*o);j=n,l=g.FloatType;break;case g.HalfFloatType:m=i.length/4;let p=new Uint16Array(4*m);for(let q=0;q<m;q++)!function(a,b,c,d){let e=a[b+3],f=Math.pow(2,e-128)/255;c[d+0]=g.DataUtils.toHalfFloat(Math.min(a[b+0]*f,65504)),c[d+1]=g.DataUtils.toHalfFloat(Math.min(a[b+1]*f,65504)),c[d+2]=g.DataUtils.toHalfFloat(Math.min(a[b+2]*f,65504)),c[d+3]=g.DataUtils.toHalfFloat(1)}(i,4*q,p,4*q);j=p,l=g.HalfFloatType;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type)}return{width:f,height:h,data:j,header:e.string,gamma:e.gamma,exposure:e.exposure,format:k,type:l}}}return null}setDataType(a){return this.type=a,this}load(a,b,c,d){return super.load(a,function(a,c){switch(a.type){case g.FloatType:case g.HalfFloatType:a.encoding=g.LinearEncoding,a.minFilter=g.LinearFilter,a.magFilter=g.LinearFilter,a.generateMipmaps=!1,a.flipY=!0}b&&b(a,c)},c,d)}}class i extends g.Mesh{constructor(a,b){var c,d,e;let f=(e=a)&&e.isCubeTexture,h=null!=(c=f?null===(d=a.image[0])|| void 0===d?void 0:d.width:a.image.width)?c:1024,i=Math.floor(Math.log2(h/4)),j=Math.pow(2,i),k=[f?"#define ENVMAP_TYPE_CUBE":"",`#define CUBEUV_TEXEL_WIDTH ${1/(3*Math.max(j,112))}`,`#define CUBEUV_TEXEL_HEIGHT ${1/(4*j)}`,`#define CUBEUV_MAX_MIP ${i}.0`],l=`
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `,m=k.join("\n")+`
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
        `,n={map:{value:a},height:{value:(null==b?void 0:b.height)||15},radius:{value:(null==b?void 0:b.radius)||100}},o=new g.IcosahedronGeometry(1,16),p=new g.ShaderMaterial({uniforms:n,fragmentShader:m,vertexShader:l,side:g.DoubleSide});super(o,p)}set radius(a){this.material.uniforms.radius.value=a}get radius(){return this.material.uniforms.radius.value}set height(a){this.material.uniforms.height.value=a}get height(){return this.material.uniforms.height.value}}let j={sunset:"venice/venice_sunset_1k.hdr",dawn:"kiara/kiara_1_dawn_1k.hdr",night:"dikhololo/dikhololo_night_1k.hdr",warehouse:"empty-wharehouse/empty_warehouse_01_1k.hdr",forest:"forrest-slope/forest_slope_1k.hdr",apartment:"lebombo/lebombo_1k.hdr",studio:"studio-small-3/studio_small_03_1k.hdr",city:"potsdamer-platz/potsdamer_platz_1k.hdr",park:"rooitou/rooitou_park_1k.hdr",lobby:"st-fagans/st_fagans_interior_1k.hdr"},k=a=>a.current&&a.current.isScene,l=a=>k(a)?a.current:a;function m({scene:a,background:b=!1,map:c}){let d=(0,f.w)(a=>a.scene);return e.useLayoutEffect(()=>{if(c){let e=l(a||d),f=e.background,g=e.environment;return"only"!==b&&(e.environment=c),b&&(e.background=c),()=>{"only"!==b&&(e.environment=g),b&&(e.background=f)}}},[d,a,c,b]),null}function n({files:a=["/px.png","/nx.png","/py.png","/ny.png","/pz.png","/nz.png"],path:b="",preset:c,encoding:d,extensions:e}){if(c){if(!(c in j))throw Error("Preset must be one of: "+Object.keys(j).join(", "));a=j[c],b="https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/hdris/"}let i=Array.isArray(a),k=i?g.CubeTextureLoader:h,l=(0,f.z)(k,i?[a]:a,a=>{a.setPath(b),e&&e(a)}),m=i?l[0]:l;return m.mapping=i?g.CubeReflectionMapping:g.EquirectangularReflectionMapping,m.encoding=(null!=d?d:i)?g.sRGBEncoding:g.LinearEncoding,m}function o({background:a=!1,scene:b,...c}){let d=n(c),g=(0,f.w)(a=>a.scene);return e.useLayoutEffect(()=>{let c=l(b||g),e=c.background,f=c.environment;return"only"!==a&&(c.environment=d),a&&(c.background=d),()=>{"only"!==a&&(c.environment=f),a&&(c.background=e)}},[d,a,b,g]),null}function p({children:a,near:b=1,far:c=1e3,resolution:d=256,frames:h=1,map:i,background:j=!1,scene:k,files:n,path:p,preset:q,extensions:r}){let s=(0,f.w)(a=>a.gl),t=(0,f.w)(a=>a.scene),u=e.useRef(null),[v]=e.useState(()=>new g.Scene),w=e.useMemo(()=>{let a=new g.WebGLCubeRenderTarget(d);return a.texture.type=g.HalfFloatType,a},[d]);e.useLayoutEffect(()=>{1===h&&u.current.update(s,v);let a=l(k||t),b=a.background,c=a.environment;return"only"!==j&&(a.environment=w.texture),j&&(a.background=w.texture),()=>{"only"!==j&&(a.environment=c),j&&(a.background=b)}},[a,v,w.texture,k,t,j,h,s]);let x=1;return(0,f.x)(()=>{(h===1/0||x<h)&&(u.current.update(s,v),x++)}),e.createElement(e.Fragment,null,(0,f.g)(e.createElement(e.Fragment,null,a,e.createElement("cubeCamera",{ref:u,args:[b,c,w]}),n||q?e.createElement(o,{background:!0,files:n,preset:q,path:p,extensions:r}):i?e.createElement(m,{background:!0,map:i,extensions:r}):null),v))}function q(a){var b,c,g,h;let j=n(a),k=a.map||j;e.useMemo(()=>{(0,f.e)({GroundProjectedEnvImpl:i})},[]);let l=e.useMemo(()=>[k],[k]),o=null==(b=a.ground)?void 0:b.height,p=null==(c=a.ground)?void 0:c.radius,q=null!==(g=null==(h=a.ground)?void 0:h.scale)&& void 0!==g?g:1e3;return e.createElement(e.Fragment,null,e.createElement(m,(0,d.Z)({},a,{map:k})),e.createElement("groundProjectedEnvImpl",{args:l,scale:q,height:o,radius:p}))}function r(a){return a.ground?e.createElement(q,a):a.map?e.createElement(m,a):a.children?e.createElement(p,a):e.createElement(o,a)}}}])