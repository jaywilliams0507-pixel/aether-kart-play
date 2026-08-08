(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const qh="modulepreload",Yh=function(i,t){return new URL(i,t).href},ja={},$h=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){let l=function(h){return Promise.all(h.map(u=>Promise.resolve(u).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=a?.nonce||a?.getAttribute("nonce");s=l(e.map(h=>{if(h=Yh(h,n),h in ja)return;ja[h]=!0;const u=h.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(n)for(let g=o.length-1;g>=0;g--){const _=o[g];if(_.href===h&&(!u||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${p}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":qh,u||(d.as="script"),d.crossOrigin="",d.href=h,c&&d.setAttribute("nonce",c),document.head.appendChild(d),u)return new Promise((g,_)=>{d.addEventListener("load",g),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})};class Ki{constructor(t=2654435769){this.seed(t)}seed(t){let e=t|0||2654435769;const n=()=>(e^=e<<13,e|=0,e^=e>>>17,e^=e<<5,e|=0,e>>>0);this.a=n(),this.b=n(),this.c=n(),this.d=n();for(let s=0;s<12;s++)this.u32();return this}u32(){let t=this.a^this.a<<11;return this.a=this.b,this.b=this.c,this.c=this.d,this.d=this.d^this.d>>>19^(t^t>>>8),this.d|=0,this.d>>>0}next(){return this.u32()/4294967296}range(t,e){return t+(e-t)*this.next()}int(t,e){return t+this.u32()%(e-t+1)}chance(t){return this.next()<t}signed(){return this.next()*2-1}normal(){return(this.next()+this.next()+this.next()+this.next()+this.next()+this.next()-3)*.8164965809}pick(t){return t[this.u32()%t.length]}shuffle(t){for(let e=t.length-1;e>0;e--){const n=this.u32()%(e+1),s=t[e];t[e]=t[n],t[n]=s}return t}fork(){return new Ki(this.u32()|0)}save(){return[this.a,this.b,this.c,this.d]}load(t){return this.a=t[0],this.b=t[1],this.c=t[2],this.d=t[3],this}}function Is(i,t){let e=(i|0)*374761393+(t|0)*668265263;return e=(e^e>>>13)*1274126177,(e^e>>>16)>>>0}const on={mass:165,wheelbase:1.22,track:1.04,cgHeight:.26,cgFront:.56,gravity:9.81,loadLag:9},ui={loadSens:.16,refLoad:405,slideRatio:.95,staticMul:1.1,stictionSpeed:.45},Re={topSpeed:26,driveN:3e3,accelCurve:.75,brakeN:3900,reverseN:1350,reverseTop:7,aeroDrag:.3,rollCoef:.045,boostKick:3.4,boostAccelMul:2.1},an={base:2.35,falloff:.56,responseUp:11,responseDown:14,airYaw:.12,gripSlack:1.18,minRadius:3.1,maxGripSlip:.42},Kt={minSpeed:8.5,hopTime:.11,hopVel:1.85,enterYaw:.1,baseRate:.35,steerRange:1.5,minRate:.15,yawAccel:9,yawBonus:.85,assistN:800,assistFalloff:.88,speedMul:.985,slipSweet:.3,slipSpread:.26,slipSpin:1.05,spinTime:1.15,chargeRate:1,tiers:[.55,1.42,2.65],boost:[{dur:1.3,power:1.15},{dur:2.4,power:1.25},{dur:3.8,power:1.38}],chainWindow:1.2,chainStep:.155,chainMax:1.36},qn={gravity:26,trickMinAir:.34,trickBoost:{dur:.62,power:1.115},landHardImpact:9,landSpeedLoss:.12},Qa={radius:.62},cn={maxDist:13,minDist:1.6,halfWidth:2.1,maxBoost:.115,rampTime:.55,decayTime:.35},Kh={cruise:{name:"Cruise",speed:.86,aiSkill:.55,aiAggro:.3,items:.8,stakes:!1},rally:{name:"Rally",speed:1,aiSkill:.72,aiAggro:.55,items:1,stakes:!1},pro:{name:"Pro",speed:1.13,aiSkill:.86,aiAggro:.78,items:1.1,stakes:!1},aether:{name:"Aether",speed:1.27,aiSkill:.97,aiAggro:.95,items:1.2,stakes:!0},mirror:{name:"Mirror",speed:1.27,aiSkill:.97,aiAggro:.95,items:1.2,stakes:!0,mirror:!0}},ii={latGrip:10,latDrift:10.4,driftRadius:85,minDriftRadius:14,turnInLead:8,driftLookMul:2},fi={countdown:3.2,startBoostWindow:[.28,.06],falseStartStall:.9,respawnTime:1.6},tc=i=>i*i*i*(i*(i*6-15)+10),pr=(i,t,e)=>i+(t-i)*e;function Pl(i,t,e=0){const n=Math.floor(i),s=Math.floor(t),r=i-n,o=t-s,a=tc(r),c=tc(o),l=e|0,h=Is(n+l,s)/2147483648-1,u=Is(n+1+l,s)/2147483648-1,p=Is(n+l,s+1)/2147483648-1,d=Is(n+1+l,s+1)/2147483648-1;return pr(pr(h,u,a),pr(p,d,a),c)}function Li(i,t,e=4,n=0,s=2,r=.5){let o=0,a=1,c=1,l=0;for(let h=0;h<e;h++)o+=Pl(i*c,t*c,n+h*1013)*a,l+=a,a*=r,c*=s;return o/l}function Zh(i,t,e=5,n=0){const s=i+Li(i*.35,t*.35,2,n+7717)*1.4,r=t+Li(i*.35+5.2,t*.35+1.3,2,n+9931)*1.4;let o=0,a=.5,c=1,l=0,h=1;for(let u=0;u<e;u++){let p=1-Math.abs(Pl(s*c,r*c,n+u*2237));p*=p,p*=h,h=p,o+=p*a,l+=a,a*=.52,c*=2.07}return o/l}const zr=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},zn=(i,t,e)=>i<t?t:i>e?e:i,Ue=i=>i<0?0:i>1?1:i,Jh=.24,Ll=1.2;function jh(i,t={}){return{index:i,name:t.name||`Kart ${i+1}`,hue:t.hue??i*.137%1,ai:!!t.ai,aiSkill:t.aiSkill??.8,x:0,y:0,z:0,yaw:0,yawRate:0,pitch:0,roll:0,vx:0,vy:0,vz:0,speed:0,forwardSpeed:0,lateralSpeed:0,slip:0,onGround:!0,groundY:0,surface:0,airTime:0,drifting:!1,driftDir:0,driftCharge:0,driftTier:0,driftTime:0,hopTime:0,hopping:!1,chain:1,chainTimer:0,boostTime:0,boostPower:1,boostSource:0,trickActive:!1,trickSpin:0,trickCharge:0,spinTime:0,stunTime:0,slipstream:0,lap:0,checkpoint:-1,progress:0,lapStart:0,bestLap:0,lapTimes:[],finished:!1,finishTime:0,position:i+1,respawnTimer:0,offCourse:0,item:0,itemCount:0,aegisTime:0,_lapCool:0,_primed:0,_itemHeld:!1,trackDist:0,accelFwd:0,accelLat:0,loadFront:0,loadRear:0,entryYaw:0,inThrottle:0,inSteer:0,inDrift:!1,speedMulClass:1}}function ec(i,t,e,n,s){i.x=t,i.y=e,i.z=n,i.yaw=s,i.vx=0,i.vy=0,i.vz=0,i.yawRate=0,i.speed=0,i.forwardSpeed=0,i.lateralSpeed=0,i.slip=0,i.drifting=!1,i.driftDir=0,i.driftCharge=0,i.driftTier=0,i.hopping=!1,i.hopTime=0,i.chain=1,i.chainTimer=0,i.boostTime=0,i.boostPower=1,i.spinTime=0,i.stunTime=0,i.airTime=0,i.trickActive=!1,i.trickSpin=0,i.slipstream=0,i.offCourse=0,i.accelFwd=0,i.accelLat=0}const Qh=(i,t,e,n)=>{const s=t-i,r=e*n;return Math.abs(s)<=r?t:i+Math.sign(s)*r};function nc(i,t,e,n,s){i.inThrottle=t.throttle,i.inSteer=t.steer,i.inDrift=t.drift;const r=n.heightAt(i.x,i.z),o=n.surfaceAt(i.x,i.z);i.groundY=r,o.id!==i.surface&&(s("kart:surface",{kart:i.index,from:i.surface,to:o.id}),i.surface=o.id);const a=i.onGround;i.onGround=i.y<=r+.02&&i.vy<=.01;const c=Math.sin(i.yaw),l=Math.cos(i.yaw);let h=i.vx*c+i.vz*l,u=i.vx*l-i.vz*c;if(i.spinTime>0)return i.spinTime-=e,i.yawRate=7.5*Math.sign(i.driftDir||1),i.yaw+=i.yawRate*e,h*=Math.exp(-3.2*e),u*=Math.exp(-6*e),i.drifting=!1,i.driftCharge=0,i.driftTier=0,i.chain=1,i.spinTime<=0&&(i.yawRate=0),ic(i,h,u,c,l,e,r,o,n,s,a);tu(i,t,e,h,u,s);const p=i.boostTime>0;p&&(i.boostTime-=e,i.boostTime<=0&&(i.boostPower=1,s("boost:end",{kart:i.index})));const d=1+i.slipstream*cn.maxBoost;let g=Re.topSpeed*i.speedMulClass*o.speedMul*d;p&&(g*=i.boostPower),i.drifting&&(g*=Kt.speedMul);const _=i.stunTime>0?0:t.throttle;i.stunTime>0&&(i.stunTime-=e);const m=on.mass,f=m*on.gravity,y=Math.hypot(h,u),M=m*i.accelFwd*on.cgHeight/on.wheelbase,v=Math.max(0,f*(1-on.cgFront)-M),A=Math.max(0,f*on.cgFront+M);i.loadFront=v,i.loadRear=A;const E=Math.abs(m*i.accelLat*on.cgHeight/on.track),R=Math.min(.16,Ue(E/(f*.5))**2*ui.loadSens*2.4),L=o.grip*Jh,S=it=>L*Math.pow(Math.max(it,1)/ui.refLoad,-.16)*(1-R),x=v+A,T=S(x/2),F=T*x/m/Math.max(y,3);let N=0,D=0;if(i.onGround){if(_>.01){const X=Ue(1-h/Math.max(g,.001));N+=Re.driveN*(p?Re.boostAccelMul:1)*Math.pow(X,Re.accelCurve)*_}else if(_<-.01){const X=-_;h>.3?N-=Re.brakeN*X:N-=Re.reverseN*X*Ue(1+h/Re.reverseTop)}N-=Re.aeroDrag*h*Math.abs(h);const it=(Re.rollCoef+o.drag*.004)*(v+A);N-=it*Math.tanh(h*4);const V=n.normalAt(i.x,i.z);D=-(V[0]*c+V[2]*l),N+=f*D}const O=Ue(Math.abs(h)/(Re.topSpeed*i.speedMulClass));let H;if(i.drifting){const it=t.steer*i.driftDir;H=i.driftDir*Math.max(Kt.minRate,Kt.baseRate+it*Kt.steerRange)}else{const it=an.base*(1-an.falloff*O);H=t.steer*it*(h<-.2?-1:1),Math.abs(h)<.8&&(H*=Math.abs(h)/.8)}if(i.onGround||(H*=an.airYaw),i.onGround){const it=i.drifting?Kt.slipSweet*1.55:an.maxGripSlip,X=Ue((it-i.slip)/(it*(1-.55))),st=.28,mt=st+(1-st)*X,gt=1+(Kt.yawBonus-1)*X*X,Ot=F*(i.drifting?gt:an.gripSlack)*mt,jt=y/(i.drifting?an.minRadius*.62:an.minRadius),I=Math.min(Ot,jt);H=zn(H,-I,I)}i.onGround&&!i.drifting&&(H*=.55+.45*Ue(v/(f*(1-on.cgFront))));const B=Math.abs(H)>Math.abs(i.yawRate)?an.responseUp:an.responseDown;i.yawRate=Qh(i.yawRate,H,B*(i.drifting?Kt.yawAccel/an.responseUp:1),e);const Z=i.entryYaw||0;i.entryYaw=0,i.yaw+=i.yawRate*e+Z;const rt=i.yawRate*e+Z,pt=Math.cos(rt),yt=Math.sin(rt);{const it=h*pt+u*yt;u=u*pt-h*yt,h=it}let ft=0;if(i.onGround){i.slip=Math.abs(Math.atan2(u,Math.max(Math.abs(h),1.2)));const it=Math.atan2(u,Math.max(Math.abs(h),1.2)),V=x,X=-9*it*V;let st=T;i.drifting&&(st*=ui.slideRatio);const mt=st*V,gt=S(A/2)*A*(i.drifting?ui.slideRatio:1);N>gt&&(N=gt);const Ot=Math.hypot(N,X);if(Ot>mt&&Ot>1e-6){const jt=mt/Ot;N*=jt,ft=X*jt}else ft=X}else i.slip=Math.abs(Math.atan2(u,Math.max(Math.abs(h),1.2)));if(i.onGround&&i.drifting){const it=1-Ue(Math.abs(i.slip-Kt.slipSweet)/Kt.slipSpread),V=Ue(1-y/(g*Kt.assistFalloff));N+=Kt.assistN*(.35+.65*it)*V}let Mt=!1;if(i.onGround&&y<ui.stictionSpeed&&Math.abs(_)<.01){const it=S((v+A)/2)*ui.staticMul*(v+A);Math.hypot(N,ft)<=it&&(h=0,u=0,N=0,ft=0,Mt=!0)}if(Mt)i.accelFwd=0,i.accelLat=0;else{const it=N/m,V=ft/m;h+=it*e,u+=V*e;const X=Math.min(1,e*on.loadLag);i.accelFwd+=(it-i.accelFwd)*X,i.accelLat+=(V-i.accelLat)*X}i.onGround||(u*=Math.exp(-.25*e));{const it=Math.hypot(h,u),V=g*1.06;if(it>V){const X=V/it;h*=X,u*=X}}return ic(i,h,u,c,l,e,r,o,n,s,a)}function tu(i,t,e,n,s,r){if(i.chainTimer>0&&(i.chainTimer-=e,i.chainTimer<=0&&(i.chain=1)),i.hopping&&(i.hopTime-=e,i.hopTime<=0&&(i.hopping=!1)),!i.drifting){const u=i.onGround&&n>Kt.minSpeed&&Math.abs(t.steer)>.18;t.drift&&u&&!i.hopping&&i.hopTime<=0&&(i.drifting=!0,i.driftDir=Math.sign(t.steer),i.driftCharge=0,i.driftTier=0,i.driftTime=0,i.hopping=!0,i.hopTime=Kt.hopTime,i.vy=Math.max(i.vy,Kt.hopVel),i.entryYaw=Kt.enterYaw*i.driftDir,i.chainTimer>0&&(i.chain=Math.min(Kt.chainMax,i.chain+Kt.chainStep)),r("drift:start",{kart:i.index,dir:i.driftDir}));return}i.driftTime+=e;const o=Math.abs(Math.atan2(s,Math.max(Math.abs(n),Ll)));if(i.slip=o,o>Kt.slipSpin&&i.onGround){r("drift:spinout",{kart:i.index,slip:o}),i.spinTime=Kt.spinTime,i.drifting=!1,i.driftCharge=0,i.driftTier=0,i.chain=1,i.chainTimer=0;return}const a=1-Ue(Math.abs(o-Kt.slipSweet)/Kt.slipSpread),c=Ue(n/(Re.topSpeed*i.speedMulClass*.72));i.driftCharge+=Kt.chargeRate*(.34+.66*a)*c*i.chain*e;let l=0;for(let u=0;u<Kt.tiers.length;u++)i.driftCharge>=Kt.tiers[u]&&(l=u+1);l!==i.driftTier&&(i.driftTier=l,l>0&&r("drift:tier",{kart:i.index,tier:l})),(!t.drift||n<Kt.minSpeed*.55||!i.onGround&&i.airTime>.55)&&eu(i,r)}function eu(i,t){const e=i.driftTier;if(t("drift:release",{kart:i.index,tier:e,charge:i.driftCharge}),e>0){const n=Kt.boost[e-1];Ii(i,n.dur,n.power,1,t),i.chainTimer=Kt.chainWindow}else i.chain=1,i.chainTimer=0;i.drifting=!1,i.driftCharge=0,i.driftTier=0,i.driftDir=0}function Ii(i,t,e,n,s){const r=e>=i.boostPower;if(i.boostPower=Math.max(i.boostPower,e),i.boostTime=Math.max(i.boostTime,t),i.boostSource=n,r){const o=Math.sin(i.yaw),a=Math.cos(i.yaw);i.vx+=o*Re.boostKick*(e-1)*7,i.vz+=a*Re.boostKick*(e-1)*7}s("boost:start",{kart:i.index,source:n,power:e,dur:t})}function ic(i,t,e,n,s,r,o,a,c,l,h){i.vx=n*t+s*e,i.vz=s*t-n*e,i.x+=i.vx*r,i.z+=i.vz*r,i.onGround?i.airTime=0:(i.vy-=qn.gravity*r,i.airTime+=r),i.y+=i.vy*r;const u=c.heightAt(i.x,i.z);if(i.y<=u){if(!h){const _=-i.vy;if(l("kart:land",{kart:i.index,impact:_,surface:a.id}),_>qn.landHardImpact){const m=1-qn.landSpeedLoss*Ue((_-qn.landHardImpact)/12);i.vx*=m,i.vz*=m}if(i.trickActive){const m=i.trickSpin>.55;m&&Ii(i,qn.trickBoost.dur,qn.trickBoost.power,4,l),l("trick:land",{kart:i.index,rotations:i.trickSpin,clean:m}),i.trickActive=!1,i.trickSpin=0}}i.y=u,i.vy<0&&(i.vy=0),i.onGround=!0}else i.onGround=!1,i.airTime>qn.trickMinAir&&i.inDrift&&!i.trickActive&&(i.trickActive=!0,i.trickSpin=0),i.trickActive&&(i.trickSpin+=r/.55);const p=c.normalAt(i.x,i.z),d=Math.asin(zn(-(p[0]*n+p[2]*s),-1,1)),g=Math.asin(zn(-(p[0]*s-p[2]*n),-1,1));return i.pitch+=(d-i.pitch)*Math.min(1,9*r),i.roll+=(g-i.roll)*Math.min(1,9*r),i.forwardSpeed=t,i.lateralSpeed=e,i.speed=Math.hypot(i.vx,i.vz),i.drifting||(i.slip=Math.abs(Math.atan2(e,Math.max(Math.abs(t),Ll)))),i}function sc(i,t,e){const n=Math.sin(i.yaw),s=Math.cos(i.yaw);let r=0;for(let a=0;a<t.length;a++){const c=t[a];if(c===i||c.finished)continue;const l=c.x-i.x,h=c.z-i.z,u=l*n+h*s;if(u<cn.minDist||u>cn.maxDist)continue;const p=Math.abs(l*s-h*n);if(p>cn.halfWidth||Math.cos(c.yaw-i.yaw)<.55)continue;const g=(1-p/cn.halfWidth)*(1-(u-cn.minDist)/(cn.maxDist-cn.minDist));g>r&&(r=g)}const o=r>i.slipstream?e/cn.rampTime:e/cn.decayTime;i.slipstream+=Math.sign(r-i.slipstream)*Math.min(o,Math.abs(r-i.slipstream))}const se={tarmac:{id:0,grip:9,driftGrip:3.64,speedMul:1,drag:0,rough:0,slow:!1,particle:"dust",sound:"tarmac"},rumble:{id:1,grip:8.2,driftGrip:3.99,speedMul:.985,drag:.35,rough:.055,slow:!1,particle:"dust",sound:"rumble"},boost:{id:2,grip:9.5,driftGrip:3.64,speedMul:1,drag:0,rough:0,slow:!1,particle:"spark",sound:"boostpad"},dirt:{id:3,grip:6.4,driftGrip:2.87,speedMul:.93,drag:1.35,rough:.045,slow:!0,particle:"dirt",sound:"dirt"},sand:{id:4,grip:5.6,driftGrip:2.59,speedMul:.855,drag:3.1,rough:.03,slow:!0,particle:"sand",sound:"sand"},grass:{id:5,grip:5.2,driftGrip:2.38,speedMul:.8,drag:4.2,rough:.038,slow:!0,particle:"grass",sound:"grass"},snow:{id:6,grip:4.1,driftGrip:1.89,speedMul:.91,drag:1.9,rough:.025,slow:!0,particle:"snow",sound:"snow"},ice:{id:7,grip:1.5,driftGrip:1.19,speedMul:1.02,drag:0,rough:.004,slow:!1,particle:"snow",sound:"ice"},wood:{id:8,grip:8.4,driftGrip:3.5,speedMul:.99,drag:.1,rough:.018,slow:!1,particle:"dust",sound:"wood"},metal:{id:9,grip:8.8,driftGrip:3.22,speedMul:1.005,drag:0,rough:.006,slow:!1,particle:"spark",sound:"metal"},water:{id:10,grip:3,driftGrip:2.24,speedMul:.48,drag:9,rough:.07,slow:!0,particle:"splash",sound:"water"}},Il=Object.keys(se),nu=Il.map(i=>se[i]);Il.forEach(i=>{se[i].name=i});const Ao=i=>nu[i]||se.tarmac;function Dl(i){if(i._line)return i._line;const t=i.samples,e=t.length,n=new Float64Array(e);for(let h=0;h<e;h++){let u=0;for(let d=-4;d<=4;d++)u+=t[(h+d+e)%e].curv;u/=9;const p=Ue(Math.abs(u)*55);n[h]=Math.sign(u)*p*(t[h].width*.62)}const s=new Float64Array(e);for(let h=0;h<26;h++){for(let u=0;u<e;u++)s[u]=n[u]*.42+(n[(u-1+e)%e]+n[(u+1)%e])*.29;n.set(s)}const r=new Float64Array(e*2),o=new Float64Array(e);for(let h=0;h<e;h++){const u=t[h];r[h*2]=u.x+u.nx*n[h],r[h*2+1]=u.z+u.nz*n[h]}const a=new Uint8Array(e),c=new Float64Array(e);for(let h=0;h<e;h++){const u=r[(h-2+e)%e*2],p=r[(h-2+e)%e*2+1],d=r[h*2],g=r[h*2+1],_=r[(h+2)%e*2],m=r[(h+2)%e*2+1],f=iu(u,p,d,g,_,m);c[h]=f,a[h]=f<ii.driftRadius?1:0;let y=1;if(i.world){const M=i.world.surfaceAt(r[h*2],r[h*2+1]);y=Math.sqrt(M.grip/se.tarmac.grip)}o[h]=Math.sqrt((a[h]?ii.latDrift:ii.latGrip)*f)*y}for(let h=0;h<3;h++)for(let u=e-1;u>=0;u--){const p=o[(u+1)%e],d=7;o[u]>p+d&&(o[u]=p+d)}const l=[];{const h=new Uint8Array(e);for(let u=0;u<e;u++){if(!a[u]||h[u])continue;let p=u,d=0;for(let f=1;f<e;f++){const y=(u+f)%e;if(a[y])p=y,d=0;else if(++d>3)break}let g=(p-u+e)%e+1;if(g<3||g>e*.5)continue;for(let f=0;f<g;f++)h[(u+f)%e]=1;let _=u,m=1/0;for(let f=0;f<g;f++){const y=(u+f)%e;c[y]<m&&(m=c[y],_=y)}l.push({start:u,end:(p+3)%e,apex:_,turnIn:(u-ii.turnInLead+e)%e,radius:m,length:g,dir:-Math.sign(t[_].curv)||1})}l.sort((u,p)=>u.turnIn-p.turnIn)}return i._line={off:n,pts:r,vmax:o,willDrift:a,corners:l,n:e},i._line}function rc(i,t,e){let n=t-i;return n>e/2&&(n-=e),n<-e/2&&(n+=e),n}function iu(i,t,e,n,s,r){const o=Math.hypot(e-i,n-t),a=Math.hypot(s-e,r-n),c=Math.hypot(s-i,r-t),l=Math.abs((e-i)*(r-t)-(s-i)*(n-t))*.5;return l<1e-6?1e4:o*a*c/(4*l)}function su(i=.8,t={}){return{skill:i,useDrift:t.useDrift!==!1,idx:0,driftHold:0,driftCooldown:0,targetTier:1,wobblePhase:t.phase??0,blockBias:0,stuck:0,corner:-1,lastProgress:0}}const di={throttle:0,steer:0,drift:!1,item:!1,look:0};function ru(i,t,e,n,s){const r=Dl(e),o=e.samples,a=o.length,c=t.skill;let l=t.idx,h=1/0;for(let D=-6;D<=34;D++){const O=(t.idx+D+a)%a,H=i.x-r.pts[O*2],B=i.z-r.pts[O*2+1],Z=H*H+B*B;Z<h&&(h=Z,l=O)}if(h>3600)for(let D=0;D<a;D++){const O=i.x-r.pts[D*2],H=i.z-r.pts[D*2+1],B=O*O+H*H;B<h&&(h=B,l=D)}t.idx=l;const u=e.road.spacing,p=(7.5+i.speed*(.42+.3*c))*(i.drifting?ii.driftLookMul:1),d=Math.max(1,Math.round(p/u)),g=(l+d)%a;let _=r.pts[g*2],m=r.pts[g*2+1];if(c<.98){const D=Math.sin(s*(.7+t.wobblePhase)+t.wobblePhase*5.1)*(1-c)*3.4;_+=o[g].nx*D,m+=o[g].nz*D}t.blockBias!==0&&(_+=o[g].nx*t.blockBias,m+=o[g].nz*t.blockBias);const f=_-i.x,y=m-i.z,M=Math.sin(i.yaw),v=Math.cos(i.yaw),A=f*M+y*v,E=f*v-y*M,R=Math.atan2(E,Math.max(A,.001)),L=zn(R*(2.3+c*1.1),-1,1);Ue(Math.abs(i.speed)/(Re.topSpeed*i.speedMulClass));let S=L;const x=Math.max(2,Math.round((10+i.speed*.85)/u));let T=1/0;for(let D=0;D<=x;D++){const H=r.vmax[(l+D)%a]+D*u*.42;H<T&&(T=H)}T*=Math.min(1,.7+.31*c),T=Math.min(T,Re.topSpeed*i.speedMulClass*1.4);let P=1;i.speed>T*1.06?P=-1:i.speed>T&&(P=.05);let F=!1,N=0;if(t.driftCooldown>0&&(t.driftCooldown-=1/120),t.useDrift){const D=r.corners;if(t.corner>=0){const O=D[t.corner],H=rc(l,O.end,a)<0,B=i.slip>Kt.slipSpin*(.8+.14*c)||i.speed<Kt.minSpeed*.62||Ao(i.surface).slow;H||B?(t.corner=-1,t.driftCooldown=.12,F=!1):F=!0}else if(t.driftCooldown<=0&&i.speed>Kt.minSpeed*1.1&&!Ao(i.surface).slow){const O=Math.min(ii.driftRadius-10,48+c*38);for(let H=0;H<D.length;H++){const B=D[H],Z=rc(l,B.turnIn,a);if(Z>=0&&Z<=2&&B.radius<O&&B.radius>ii.minDriftRadius){t.corner=H,F=!0,N=B.dir,t.targetTier=c>.86?B.length>14?3:2:c>.55?2:1;break}}}}if(F||(t.corner=-1),i.drifting&&F){const D=i.driftDir;S=L;const O=Kt.slipSweet-i.slip;S=zn(S+zn(O*1.2,-.28,.28)*D*c,-1,1)}return N!==0&&(S=zn(S+N*.5,-1,1)),Math.abs(S)<.2&&N!==0&&(S=N*.25),i.speed<1.8&&i.spinTime<=0?t.stuck+=1/120:t.stuck=0,t.stuck>1.4&&(P=-1,S=-Math.sign(S||1),F=!1,t.stuck>2.6&&(t.stuck=0)),di.throttle=P,di.steer=S,di.drift=F,di.item=c>.35,di.look=0,di}function ou(i,t,e,n){if(t.blockBias=0,n<=0)return;const s=Math.sin(i.yaw),r=Math.cos(i.yaw);for(const o of e){if(o===i||o.finished)continue;const a=o.x-i.x,c=o.z-i.z,l=-(a*s+c*r);if(l>1&&l<11){const h=a*r-c*s;t.blockBias=zn(-h,-2.6,2.6)*n;return}}}const Fn=1/120,Ee={NONE:0,SURGE:1,TRIPLE:2,BOLT:3,MINE:4,AEGIS:5,STORM:6},au=["—","Surge","Triple Surge","Bolt","Mine","Aegis","Storm"],cu=[[6,2,0,30,26,0],[16,8,18,22,18,0],[20,16,26,12,12,4],[18,26,24,4,8,14]],Ds={throttle:0,steer:0,drift:!1,item:!1,look:0},lu=()=>{};class Ul{constructor(t,e={}){this.world=t,this.circuit=e.circuit?typeof e.circuit=="string"?t.circuitByKey(e.circuit):e.circuit:t.circuits[0],this.mode=e.mode||"race",this.klass=Kh[e.klass||"rally"],this.laps=e.laps??this.circuit.laps,this.seed=e.seed??20260804,this.rng=new Ki(this.seed),this.events=e.events||lu,this.tick=0,this.time=0,this.state=this.mode==="freeroam"?"racing":"countdown",this.countdown=this.mode==="freeroam"?0:fi.countdown,this.finishOrder=[],this.karts=[],this.ai=[];const n=e.karts||[{name:"P1"}];for(let s=0;s<n.length;s++){const r=n[s],o=jh(s,{name:r.name,ai:r.ai,hue:r.hue??s*.146%1});o.speedMulClass=this.klass.speed,this.karts.push(o),this.ai.push(r.ai?su(r.skill??this.klass.aiSkill,{phase:s*.9137,useDrift:r.useDrift!==!1}):null)}this.projectiles=[],this.itemBoxes=this.mode==="freeroam"?[]:hu(this.circuit),this.trackIdx=new Int32Array(this.karts.length),this.cpSeen=this.karts.map(()=>new Uint8Array(this.circuit.checkpoints.length)),this.prevDist=new Float64Array(this.karts.length),this.gridStart()}gridStart(){const t=this.circuit,e=t.samples.length;Dl(t);for(let n=0;n<this.karts.length;n++){const s=this.karts[n],r=Math.floor(n/2),o=n%2,a=(e-6-r*3+e)%e,c=t.samples[a],l=(o===0?-1:1)*c.width*.34,h=c.x+c.nx*l,u=c.z+c.nz*l;ec(s,h,this.world.heightAt(h,u),u,Math.atan2(c.tx,c.tz)),s.lap=(this.mode==="freeroam",0),s.position=n+1,s.item=Ee.NONE,s.itemCount=0,s.lapTimes=[],s.bestLap=0,s.finished=!1,s.finishTime=0,this.trackIdx[n]=a,this.cpSeen[n].fill(0),this.prevDist[n]=a*t.road.spacing,s.progress=-1e6+a*t.road.spacing,s.lapStart=0,this.ai[n]&&(this.ai[n].idx=a)}if(this.mode==="freeroam")for(const n of this.karts)n.progress=0,n.lap=0}step(t){const e=Fn;this.tick++,this.time+=e;const n=this.events;if(this.state==="countdown"&&(this.countdown-=e,this.countdown<=0)){this.state="racing",this.countdown=0;for(const r of this.karts)r.lapStart=this.time;n("race:start",{time:this.time})}const s=this.state!=="countdown";for(let r=0;r<this.karts.length;r++){const o=this.karts[r];let a=t[r]||Ds;if(this.ai[r]&&(ou(o,this.ai[r],this.karts,this.klass.aiAggro),a=ru(o,this.ai[r],this.circuit,this.karts,this.time)),s)o._primed&&(o._primed===2?Ii(o,1.35,1.19,5,n):o.stunTime=fi.falseStartStall,o._primed=0);else{const c=this.countdown;a.throttle>.5&&(c<fi.startBoostWindow[0]&&c>fi.startBoostWindow[1]?o._primed=2:c>fi.startBoostWindow[0]&&(o._primed=1)),a=Ds}if(o.finished&&(a=this.ai[r]?a:Ds),o.respawnTimer>0){o.respawnTimer-=e,o.respawnTimer<=0&&this.respawn(r);continue}nc(o,a,e,this.world,n),this.postKart(r,o,a,e,n)}for(const r of this.karts)sc(r,this.karts,e);return this.collide(n),this.stepProjectiles(e,n),this.stepBoxes(e,n),s&&this.mode!=="freeroam"&&this.standings(),this}postKart(t,e,n,s,r){const o=this.world;if(e.onGround&&e.surface===se.boost.id&&e.boostSource!==2&&Ii(e,1.05,1.17,2,r),o.baseHeight(e.x,e.z)<-1.4&&!o.onRoad(e.x,e.z)||e.y<-30){e.respawnTimer=fi.respawnTime,e.vx=e.vy=e.vz=0,r("kart:respawn",{kart:e.index});return}if(n.item&&!e._itemHeld&&e.item!==Ee.NONE&&this.useItem(t,r),e._itemHeld=n.item,e.aegisTime>0&&(e.aegisTime-=s),this.mode==="freeroam")return;const l=this.circuit,h=l.samples.length;let u=this.trackIdx[t],p=1/0;for(let v=-10;v<=40;v++){const A=(u+v+h)%h,E=l.samples[A],R=e.x-E.x,L=e.z-E.z,S=R*R+L*L;S<p&&(p=S,u=A)}if(p>4900)for(let v=0;v<h;v++){const A=l.samples[v],E=e.x-A.x,R=e.z-A.z,L=E*E+R*R;L<p&&(p=L,u=v)}this.trackIdx[t]=u;const d=l.checkpoints;for(let v=0;v<d.length;v++)Math.abs(uu(u,d[v],h))<=2&&(this.cpSeen[t][v]=1);const g=l.samples[u],_=(e.x-g.x)*g.tx+(e.z-g.z)*g.tz,m=u*l.road.spacing+_,f=this.prevDist[t];let y=m-f,M=0;for(const v of this.cpSeen[t])M+=v;if(e._lapCool>0&&(e._lapCool-=s),y<-l.length*.5&&e._lapCool<=0){if(M>=d.length*.7){e._lapCool=3;const v=this.time-e.lapStart;e.lap++,e.lapTimes.push(v),(!e.bestLap||v<e.bestLap)&&(e.bestLap=v),e.lapStart=this.time,this.events("lap:complete",{kart:t,lap:e.lap,time:v,best:e.bestLap}),this.cpSeen[t].fill(0),e.lap>=this.laps&&!e.finished&&(e.finished=!0,e.finishTime=this.time,this.finishOrder.push(t),this.events("race:finish",{kart:t,time:this.time,place:this.finishOrder.length}),(this.finishOrder.length>=this.karts.length||this.mode==="timetrial")&&(this.state="finished"))}}else y>l.length*.5&&M<d.length*.3&&e._lapCool<=0&&(e._lapCool=3);this.prevDist[t]=m,e.progress=e.lap*l.length+m,e.trackDist=m}respawn(t){const e=this.karts[t],n=this.circuit,s=n.samples.length,r=this.trackIdx[t],o=n.samples[(r-1+s)%s],a=o.x,c=o.z;ec(e,a,this.world.heightAt(a,c)+.4,c,Math.atan2(o.tx,o.tz)),e.stunTime=.25}collide(t){const e=this.karts,n=(Qa.radius*2)**2;for(let s=0;s<e.length;s++)for(let r=s+1;r<e.length;r++){const o=e[s],a=e[r];if(o.respawnTimer>0||a.respawnTimer>0)continue;const c=a.x-o.x,l=a.z-o.z,h=a.y-o.y;if(Math.abs(h)>1.6)continue;const u=c*c+l*l;if(u>n||u<1e-9)continue;const p=Math.sqrt(u),d=c/p,g=l/p,_=Qa.radius*2-p;o.x-=d*_*.5,o.z-=g*_*.5,a.x+=d*_*.5,a.z+=g*_*.5;const m=a.vx-o.vx,f=a.vz-o.vz,y=m*d+f*g;if(y>0)continue;const M=-1.42*y*.5;o.vx-=d*M,o.vz-=g*M,a.vx+=d*M,a.vz+=g*M,t("kart:collide",{a:s,b:r,impulse:Math.abs(M),point:[(o.x+a.x)/2,(o.y+a.y)/2,(o.z+a.z)/2]})}}rollItem(t){const e=this.karts.length,n=t.position,s=n===1?0:n===2?1:n<=Math.ceil(e*.6)?2:3,r=cu[s];let o=0;for(const c of r)o+=c;let a=this.rng.next()*o;for(let c=0;c<r.length;c++)if(a-=r[c],a<=0)return c+1;return Ee.SURGE}giveItem(t){const e=this.karts[t];e.item===Ee.NONE&&(e.item=this.rollItem(e),e.itemCount=e.item===Ee.TRIPLE?3:1,this.events("item:pickup",{kart:t,item:e.item}))}useItem(t,e){const n=this.karts[t],s=n.item;switch(s){case Ee.SURGE:case Ee.TRIPLE:Ii(n,1.15,1.2,3,e);break;case Ee.BOLT:{const r=this.kartAhead(t),o=Math.sin(n.yaw),a=Math.cos(n.yaw);this.projectiles.push({kind:"bolt",owner:t,target:r,x:n.x+o*1.6,y:n.y+.5,z:n.z+a*1.6,vx:o*34,vz:a*34,life:5.2});break}case Ee.MINE:{const r=Math.sin(n.yaw),o=Math.cos(n.yaw);this.projectiles.push({kind:"mine",owner:t,target:-1,x:n.x-r*2.2,y:n.y+.2,z:n.z-o*2.2,vx:0,vz:0,life:22,armed:.4});break}case Ee.AEGIS:n.aegisTime=6.5;break;case Ee.STORM:for(const r of this.karts)r===n||r.finished||r.progress>n.progress&&this.hitKart(r.index,t,Ee.STORM,e);break}e("item:use",{kart:t,item:s,target:-1}),n.itemCount--,n.itemCount<=0&&(n.item=Ee.NONE,n.itemCount=0)}kartAhead(t){const e=this.karts[t];let n=-1,s=1/0;for(const r of this.karts){if(r.index===t||r.finished)continue;const o=r.progress-e.progress;o>0&&o<s&&(s=o,n=r.index)}return n}hitKart(t,e,n,s){const r=this.karts[t];if(r.aegisTime>0){r.aegisTime=0,s("item:block",{kart:t,by:e});return}r.spinTime=n===Ee.STORM?.55:1.05,r.boostTime=0,r.boostPower=1,r.drifting=!1,r.driftCharge=0,r.chain=1,s("item:hit",{kart:t,by:e,item:n})}stepProjectiles(t,e){const n=this.projectiles;for(let s=n.length-1;s>=0;s--){const r=n[s];if(r.life-=t,r.armed>0&&(r.armed-=t),r.kind==="bolt"){const o=r.target>=0?this.karts[r.target]:null;if(o){const a=o.x-r.x,c=o.z-r.z,l=Math.hypot(a,c)||1,h=a/l*38,u=c/l*38;r.vx+=(h-r.vx)*Math.min(1,3.2*t),r.vz+=(u-r.vz)*Math.min(1,3.2*t)}r.x+=r.vx*t,r.z+=r.vz*t,r.y=this.world.heightAt(r.x,r.z)+.6}else r.kind==="mine"&&(r.y=this.world.heightAt(r.x,r.z)+.2);if(r.life<=0){n.splice(s,1);continue}for(const o of this.karts){if(o.index===r.owner&&r.armed>0||o.respawnTimer>0||o.finished)continue;const a=o.x-r.x,c=o.z-r.z;if(a*a+c*c<1.65*1.65){this.hitKart(o.index,r.owner,r.kind==="mine"?Ee.MINE:Ee.BOLT,e),n.splice(s,1);break}}}}stepBoxes(t,e){for(const n of this.itemBoxes){if(n.cooldown>0){n.cooldown-=t;continue}for(const s of this.karts){if(s.respawnTimer>0)continue;const r=s.x-n.x,o=s.z-n.z;if(r*r+o*o<2.3*2.3&&Math.abs(s.y-n.y)<3){this.giveItem(s.index),n.cooldown=4;break}}}}standings(){const t=this.karts.slice().sort((e,n)=>e.finished!==n.finished?e.finished?-1:1:e.finished&&n.finished?e.finishTime-n.finishTime:n.progress-e.progress);for(let e=0;e<t.length;e++)t[e].position=e+1}stepLocalOnly(t,e){const n=Fn;this.tick++,this.time+=n,this.state==="countdown"&&(this.countdown-=n,this.countdown<=0&&(this.state="racing",this.countdown=0));const s=this.karts[e];if(!s)return this;if(this.state==="countdown")return this;const r=t[e]||Ds;return nc(s,r,n,this.world,this.events),sc(s,this.karts,n),s.onGround&&s.surface===se.boost.id&&s.boostSource!==2&&Ii(s,1.05,1.17,2,this.events),this}snapshot(){return{tick:this.tick,time:this.time,state:this.state,countdown:this.countdown,rng:this.rng.save(),karts:this.karts.map(es),ai:this.ai.map(t=>t?es(t):null),trackIdx:Array.from(this.trackIdx),prevDist:Array.from(this.prevDist),cpSeen:this.cpSeen.map(t=>Array.from(t)),projectiles:this.projectiles.map(es),boxes:this.itemBoxes.map(t=>t.cooldown),finishOrder:this.finishOrder.slice()}}restore(t){this.tick=t.tick,this.time=t.time,this.state=t.state,this.countdown=t.countdown,this.rng.load(t.rng);for(let e=0;e<this.karts.length;e++)Object.assign(this.karts[e],t.karts[e]),oc(this.karts[e],t.karts[e]);for(let e=0;e<this.ai.length;e++){const n=t.ai?t.ai[e]:null;n&&this.ai[e]?(Object.assign(this.ai[e],n),oc(this.ai[e],n)):this.ai[e]=n?es(n):null}this.trackIdx.set(t.trackIdx),this.prevDist.set(t.prevDist);for(let e=0;e<this.cpSeen.length;e++)this.cpSeen[e].set(t.cpSeen[e]);this.projectiles=t.projectiles.map(es);for(let e=0;e<this.itemBoxes.length;e++)this.itemBoxes[e].cooldown=t.boxes[e];return this.finishOrder=t.finishOrder.slice(),this}}const Nl=i=>Array.isArray(i)||ArrayBuffer.isView(i);function es(i){const t={};for(const e of Object.keys(i)){const n=i[e];t[e]=Nl(n)?n.slice():n}return t}function oc(i,t){for(const e of Object.keys(t))Nl(t[e])&&(i[e]=t[e].slice())}function hu(i){const t=[],e=i.samples,n=e.length;for(let s=0;s<n;s++){if(s%46!==20)continue;const r=e[s];for(let o=-1;o<=1;o++)t.push({x:r.x+r.nx*o*(r.width*.42),z:r.z+r.nz*o*(r.width*.42),y:r.y+.9,cooldown:0})}return t}function uu(i,t,e){let n=t-i;return n>e/2&&(n-=e),n<-e/2&&(n+=e),n}class fu{constructor(){this.map=new Map}on(t,e){let n=this.map.get(t);return n||(n=[],this.map.set(t,n)),n.push(e),()=>this.off(t,e)}off(t,e){const n=this.map.get(t);if(n){const s=n.indexOf(e);s>=0&&n.splice(s,1)}}emit(t,e){const n=this.map.get(t);if(n)for(let r=0;r<n.length;r++)n[r](e,t);const s=this.map.get("*");if(s)for(let r=0;r<s.length;r++)s[r](e,t)}}class du{constructor(t,e){this.canvas=t,this.config=e,this.systems=[],this.byId=new Map,this.running=!1,this.accum=0,this.lastNow=0,this.time={elapsed:0,dt:0,raw:0,fixed:Fn,alpha:0,frame:0},this.events=new fu,this.ctx={canvas:t,config:e,events:this.events,time:this.time,engine:this,sim:null,localKart:0,get:n=>{const s=this.byId.get(n);if(!s)throw new Error(`system '${n}' not registered`);return s},peek:n=>this.byId.get(n)||null,has:n=>this.byId.has(n)},this.frameTimes=new Float32Array(240),this.frameCursor=0}register(t){const e=new t;return this.systems.push(e),this.byId.set(t.id,e),e}async init(){const t=new Set,e=[],n=(s,r)=>{const o=s.constructor.id;if(!t.has(o)){if(r.has(o))throw new Error(`dependency cycle at '${o}'`);r.add(o);for(const a of s.constructor.deps||[]){const c=this.byId.get(a);if(!c)throw new Error(`'${o}' depends on unregistered '${a}'`);n(c,r)}r.delete(o),t.add(o),e.push(s)}};for(const s of this.systems)n(s,new Set);this.systems=e;for(const s of this.systems)s.init&&await s.init(this.ctx)}setSim(t,e=0){this.ctx.sim=t,this.ctx.localKart=e,t.events=(n,s)=>this.events.emit(n,s)}start(){if(this.running)return;this.running=!0,this.lastNow=performance.now();const t=e=>{this.running&&(this.frame(e),this._raf=requestAnimationFrame(t))};this._raf=requestAnimationFrame(t)}stop(){this.running=!1,this._raf&&cancelAnimationFrame(this._raf)}frame(t){const e=this.time;let n=(t-this.lastNow)/1e3;this.lastNow=t,n>.25&&(n=.25),e.raw=n,e.dt=n,e.elapsed+=n,e.frame++,this.frameTimes[this.frameCursor=(this.frameCursor+1)%this.frameTimes.length]=n*1e3,this.accum+=n;let s=0;const r=5;for(;this.accum>=Fn&&s<r;)this.stepFixed(),this.accum-=Fn,s++;s===r&&this.accum>Fn&&(this.accum=0),e.alpha=this.accum/Fn;for(const o of this.systems)o.update&&o.update(n,this.ctx);for(const o of this.systems)o.lateUpdate&&o.lateUpdate(n,this.ctx)}stepFixed(){for(const t of this.systems)t.fixedUpdate&&t.fixedUpdate(Fn,this.ctx)}resize(t,e){this.events.emit("resize",{width:t,height:e});for(const n of this.systems)n.resize&&n.resize(t,e,this.ctx)}frameStats(){const t=Array.from(this.frameTimes).filter(n=>n>0).sort((n,s)=>n-s);if(!t.length)return{p50:0,p95:0,p99:0,worst:0};const e=n=>t[Math.min(t.length-1,Math.floor(t.length*n))];return{p50:e(.5),p95:e(.95),p99:e(.99),worst:t[t.length-1]}}dispose(){this.stop();for(const t of this.systems)t.dispose&&t.dispose()}}const ns={low:{name:"low",renderScale:.72,terrainChunks:25,terrainRes:20,viewDistance:620,particleBudget:700,markBudget:240,waterDetail:0,antialias:!1,maxPixelRatio:1.5},mid:{name:"mid",renderScale:.9,terrainChunks:49,terrainRes:28,viewDistance:900,particleBudget:2e3,markBudget:700,waterDetail:1,antialias:!1,maxPixelRatio:2},high:{name:"high",renderScale:1,terrainChunks:81,terrainRes:36,viewDistance:1400,particleBudget:6e3,markBudget:1800,waterDetail:2,antialias:!0,maxPixelRatio:2}};class pu{constructor(t){this.quality=t||mu(),this.q={...ns[this.quality]},this.locked=!!t,this.showFps=!1,this.invertLook=!1,this.touchLayout="auto",this.masterVolume=.8,this.musicOn=!0,this._samples=[],this._settleFrames=0}setQuality(t){ns[t]&&(this.quality=t,this.q={...ns[t]},this.locked=!0)}observe(t,e){if(this.locked||this._settleFrames++<90||(this._samples.push(t),this._samples.length<120))return;const n=this._samples.slice().sort((a,c)=>a-c),s=n[Math.floor(n.length*.95)];this._samples.length=0;const r=["low","mid","high"],o=r.indexOf(this.quality);s>22&&o>0?(this.quality=r[o-1],this.q={...ns[this.quality]},e?.(this.quality,"down",s)):s<11.5&&o<r.length-1&&(this.quality=r[o+1],this.q={...ns[this.quality]},e?.(this.quality,"up",s))}}function mu(){if(typeof navigator>"u")return"mid";const i=navigator.deviceMemory||4,t=navigator.hardwareConcurrency||4,e=navigator.maxTouchPoints>0,n=typeof window<"u"&&Math.min(window.innerWidth,window.innerHeight)<500;return e&&n?i>=6&&t>=8?"mid":"low":i>=8&&t>=8?"high":"mid"}const ba="180",gu=0,ac=1,_u=2,Fl=1,Ol=2,bn=3,Gn=0,Fe=1,Tn=2,kn=0,Bi=1,Ro=2,cc=3,lc=4,xu=5,ei=100,vu=101,Mu=102,yu=103,Su=104,bu=200,wu=201,Eu=202,Tu=203,Co=204,Po=205,Au=206,Ru=207,Cu=208,Pu=209,Lu=210,Iu=211,Du=212,Uu=213,Nu=214,Lo=0,Io=1,Do=2,Gi=3,Uo=4,No=5,Fo=6,Oo=7,Pr=0,Fu=1,Ou=2,Hn=0,zu=1,Bu=2,ku=3,zl=4,Hu=5,Gu=6,Vu=7,Bl=300,Vi=301,Wi=302,zo=303,Bo=304,Lr=306,ko=1e3,si=1001,Ho=1002,qe=1003,Wu=1004,Us=1005,hn=1006,Br=1007,ri=1008,pn=1009,kl=1010,Hl=1011,xs=1012,wa=1013,oi=1014,un=1015,Rs=1016,Ea=1017,Ta=1018,vs=1020,Gl=35902,Vl=35899,Wl=1021,Xl=1022,en=1023,Ms=1026,ys=1027,Aa=1028,Ra=1029,ql=1030,Ca=1031,Pa=1033,mr=33776,gr=33777,_r=33778,xr=33779,Go=35840,Vo=35841,Wo=35842,Xo=35843,qo=36196,Yo=37492,$o=37496,Ko=37808,Zo=37809,Jo=37810,jo=37811,Qo=37812,ta=37813,ea=37814,na=37815,ia=37816,sa=37817,ra=37818,oa=37819,aa=37820,ca=37821,la=36492,ha=36494,ua=36495,fa=36283,da=36284,pa=36285,ma=36286,Xu=3200,qu=3201,La=0,Yu=1,On="",Ce="srgb",Xi="srgb-linear",yr="linear",ae="srgb",pi=7680,hc=519,$u=512,Ku=513,Zu=514,Yl=515,Ju=516,ju=517,Qu=518,tf=519,uc=35044,fc=35048,dc="300 es",fn=2e3,Sr=2001;class Zi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kr=Math.PI/180,ga=180/Math.PI;function Ji(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function $t(i,t,e){return Math.max(t,Math.min(e,i))}function ef(i,t){return(i%t+t)%t}function Hr(i,t,e){return(1-e)*i+e*t}function is(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class dt{constructor(t=0,e=0){dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const p=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=p,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==p||l!==d||h!==g){let m=1-a;const f=c*p+l*d+h*g+u*_,y=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const A=Math.sqrt(M),E=Math.atan2(A,f*y);m=Math.sin(m*E)/A,a=Math.sin(a*E)/A}const v=a*y;if(c=c*m+p*v,l=l*m+d*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],p=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*d-l*p,t[e+1]=c*g+h*p+l*u-a*d,t[e+2]=l*g+h*d+a*p-c*u,t[e+3]=h*g-a*u-c*p-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),p=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=p*h*u+l*d*g,this._y=l*d*u-p*h*g,this._z=l*h*g+p*d*u,this._w=l*h*u-p*d*g;break;case"YXZ":this._x=p*h*u+l*d*g,this._y=l*d*u-p*h*g,this._z=l*h*g-p*d*u,this._w=l*h*u+p*d*g;break;case"ZXY":this._x=p*h*u-l*d*g,this._y=l*d*u+p*h*g,this._z=l*h*g+p*d*u,this._w=l*h*u-p*d*g;break;case"ZYX":this._x=p*h*u-l*d*g,this._y=l*d*u+p*h*g,this._z=l*h*g-p*d*u,this._w=l*h*u+p*d*g;break;case"YZX":this._x=p*h*u+l*d*g,this._y=l*d*u+p*h*g,this._z=l*h*g-p*d*u,this._w=l*h*u-p*d*g;break;case"XZY":this._x=p*h*u-l*d*g,this._y=l*d*u-p*h*g,this._z=l*h*g+p*d*u,this._w=l*h*u+p*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],p=n+a+u;if(p>0){const d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gr.copy(this).projectOnVector(t),this.sub(Gr)}reflect(t){return this.sub(Gr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gr=new U,pc=new nn;class qt{constructor(t,e,n,s,r,o,a,c,l){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],p=n[2],d=n[5],g=n[8],_=s[0],m=s[3],f=s[6],y=s[1],M=s[4],v=s[7],A=s[2],E=s[5],R=s[8];return r[0]=o*_+a*y+c*A,r[3]=o*m+a*M+c*E,r[6]=o*f+a*v+c*R,r[1]=l*_+h*y+u*A,r[4]=l*m+h*M+u*E,r[7]=l*f+h*v+u*R,r[2]=p*_+d*y+g*A,r[5]=p*m+d*M+g*E,r[8]=p*f+d*v+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,p=a*c-h*r,d=l*r-o*c,g=e*u+n*p+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=p*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Vr.makeScale(t,e)),this}rotate(t){return this.premultiply(Vr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vr=new qt;function $l(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nf(){const i=br("canvas");return i.style.display="block",i}const mc={};function Ss(i){i in mc||(mc[i]=!0,console.warn(i))}function sf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const gc=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_c=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rf(){const i={enabled:!0,workingColorSpace:Xi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ae&&(s.r=An(s.r),s.g=An(s.g),s.b=An(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ae&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===On?yr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ss("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ss("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xi]:{primaries:t,whitePoint:n,transfer:yr,toXYZ:gc,fromXYZ:_c,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:gc,fromXYZ:_c,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}}),i}const ee=rf();function An(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let mi;class of{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{mi===void 0&&(mi=br("canvas")),mi.width=t.width,mi.height=t.height;const s=mi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=mi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=br("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=An(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(An(e[n]/255)*255):e[n]=An(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let af=0;class Ia{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=Ji(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Wr(s[o].image)):r.push(Wr(s[o]))}else r=Wr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Wr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?of.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cf=0;const Xr=new U;class Oe extends Zi{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=si,s=si,r=hn,o=ri,a=en,c=pn,l=Oe.DEFAULT_ANISOTROPY,h=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Ji(),this.name="",this.source=new Ia(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xr).x}get height(){return this.source.getSize(Xr).y}get depth(){return this.source.getSize(Xr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ko:t.x=t.x-Math.floor(t.x);break;case si:t.x=t.x<0?0:1;break;case Ho:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ko:t.y=t.y-Math.floor(t.y);break;case si:t.y=t.y<0?0:1;break;case Ho:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=Bl;Oe.DEFAULT_ANISOTROPY=1;class xe{constructor(t=0,e=0,n=0,s=1){xe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],p=c[1],d=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-p)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,v=(d+1)/2,A=(f+1)/2,E=(h+p)/4,R=(u+_)/4,L=(g+m)/4;return M>v&&M>A?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=E/n,r=R/n):v>A?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=L/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=R/r,s=L/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(p-h)*(p-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(p-h)/y,this.w=Math.acos((l+d+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lf extends Zi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Oe(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ia(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends lf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Kl extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hf extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class li{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Je):Je.fromBufferAttribute(r,o),Je.applyMatrix4(t.matrixWorld),this.expandByPoint(Je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ns.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ns.copy(n.boundingBox)),Ns.applyMatrix4(t.matrixWorld),this.union(Ns)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Je),Je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ss),Fs.subVectors(this.max,ss),gi.subVectors(t.a,ss),_i.subVectors(t.b,ss),xi.subVectors(t.c,ss),Cn.subVectors(_i,gi),Pn.subVectors(xi,_i),Yn.subVectors(gi,xi);let e=[0,-Cn.z,Cn.y,0,-Pn.z,Pn.y,0,-Yn.z,Yn.y,Cn.z,0,-Cn.x,Pn.z,0,-Pn.x,Yn.z,0,-Yn.x,-Cn.y,Cn.x,0,-Pn.y,Pn.x,0,-Yn.y,Yn.x,0];return!qr(e,gi,_i,xi,Fs)||(e=[1,0,0,0,1,0,0,0,1],!qr(e,gi,_i,xi,Fs))?!1:(Os.crossVectors(Cn,Pn),e=[Os.x,Os.y,Os.z],qr(e,gi,_i,xi,Fs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const xn=[new U,new U,new U,new U,new U,new U,new U,new U],Je=new U,Ns=new li,gi=new U,_i=new U,xi=new U,Cn=new U,Pn=new U,Yn=new U,ss=new U,Fs=new U,Os=new U,$n=new U;function qr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){$n.fromArray(i,r);const a=s.x*Math.abs($n.x)+s.y*Math.abs($n.y)+s.z*Math.abs($n.z),c=t.dot($n),l=e.dot($n),h=n.dot($n);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const uf=new li,rs=new U,Yr=new U;class Rn{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):uf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rs.subVectors(t,this.center);const e=rs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(rs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rs.copy(t.center).add(Yr)),this.expandByPoint(rs.copy(t.center).sub(Yr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const vn=new U,$r=new U,zs=new U,Ln=new U,Kr=new U,Bs=new U,Zr=new U;class Da{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vn.copy(this.origin).addScaledVector(this.direction,e),vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){$r.copy(t).add(e).multiplyScalar(.5),zs.copy(e).sub(t).normalize(),Ln.copy(this.origin).sub($r);const r=t.distanceTo(e)*.5,o=-this.direction.dot(zs),a=Ln.dot(this.direction),c=-Ln.dot(zs),l=Ln.lengthSq(),h=Math.abs(1-o*o);let u,p,d,g;if(h>0)if(u=o*c-a,p=o*a-c,g=r*h,u>=0)if(p>=-g)if(p<=g){const _=1/h;u*=_,p*=_,d=u*(u+o*p+2*a)+p*(o*u+p+2*c)+l}else p=r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*c)+l;else p=-r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*c)+l;else p<=-g?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+p*(p+2*c)+l):p<=g?(u=0,p=Math.min(Math.max(-r,-c),r),d=p*(p+2*c)+l):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+p*(p+2*c)+l);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy($r).addScaledVector(zs,p),d}intersectSphere(t,e){vn.subVectors(t.center,this.origin);const n=vn.dot(this.direction),s=vn.dot(vn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,s=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,s=(t.min.x-p.x)*l),h>=0?(r=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-p.z)*u,c=(t.max.z-p.z)*u):(a=(t.max.z-p.z)*u,c=(t.min.z-p.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,vn)!==null}intersectTriangle(t,e,n,s,r){Kr.subVectors(e,t),Bs.subVectors(n,t),Zr.crossVectors(Kr,Bs);let o=this.direction.dot(Zr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ln.subVectors(this.origin,t);const c=a*this.direction.dot(Bs.crossVectors(Ln,Bs));if(c<0)return null;const l=a*this.direction.dot(Kr.cross(Ln));if(l<0||c+l>o)return null;const h=-a*Ln.dot(Zr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(t,e,n,s,r,o,a,c,l,h,u,p,d,g,_,m){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,p,d,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,u,p,d,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=p,f[3]=d,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/vi.setFromMatrixColumn(t,0).length(),r=1/vi.setFromMatrixColumn(t,1).length(),o=1/vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const p=o*h,d=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=p-_*l,e[9]=-a*c,e[2]=_-p*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){const p=c*h,d=c*u,g=l*h,_=l*u;e[0]=p+_*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+p*a,e[10]=o*c}else if(t.order==="ZXY"){const p=c*h,d=c*u,g=l*h,_=l*u;e[0]=p-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-p*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const p=o*h,d=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-d,e[8]=p*l+_,e[1]=c*u,e[5]=_*l+p,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const p=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-p*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+g,e[10]=p-_*u}else if(t.order==="XZY"){const p=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=p*u+_,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=_*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ff,t,df)}lookAt(t,e,n){const s=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),In.crossVectors(n,Ve),In.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),In.crossVectors(n,Ve)),In.normalize(),ks.crossVectors(Ve,In),s[0]=In.x,s[4]=ks.x,s[8]=Ve.x,s[1]=In.y,s[5]=ks.y,s[9]=Ve.y,s[2]=In.z,s[6]=ks.z,s[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],p=n[9],d=n[13],g=n[2],_=n[6],m=n[10],f=n[14],y=n[3],M=n[7],v=n[11],A=n[15],E=s[0],R=s[4],L=s[8],S=s[12],x=s[1],T=s[5],P=s[9],F=s[13],N=s[2],D=s[6],O=s[10],H=s[14],B=s[3],Z=s[7],rt=s[11],pt=s[15];return r[0]=o*E+a*x+c*N+l*B,r[4]=o*R+a*T+c*D+l*Z,r[8]=o*L+a*P+c*O+l*rt,r[12]=o*S+a*F+c*H+l*pt,r[1]=h*E+u*x+p*N+d*B,r[5]=h*R+u*T+p*D+d*Z,r[9]=h*L+u*P+p*O+d*rt,r[13]=h*S+u*F+p*H+d*pt,r[2]=g*E+_*x+m*N+f*B,r[6]=g*R+_*T+m*D+f*Z,r[10]=g*L+_*P+m*O+f*rt,r[14]=g*S+_*F+m*H+f*pt,r[3]=y*E+M*x+v*N+A*B,r[7]=y*R+M*T+v*D+A*Z,r[11]=y*L+M*P+v*O+A*rt,r[15]=y*S+M*F+v*H+A*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],p=t[10],d=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*c*u-s*l*u-r*a*p+n*l*p+s*a*d-n*c*d)+_*(+e*c*d-e*l*p+r*o*p-s*o*d+s*l*h-r*c*h)+m*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+f*(-s*a*h-e*c*u+e*a*p+s*o*u-n*o*p+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],p=t[10],d=t[11],g=t[12],_=t[13],m=t[14],f=t[15],y=u*m*l-_*p*l+_*c*d-a*m*d-u*c*f+a*p*f,M=g*p*l-h*m*l-g*c*d+o*m*d+h*c*f-o*p*f,v=h*_*l-g*u*l+g*a*d-o*_*d-h*a*f+o*u*f,A=g*u*c-h*_*c-g*a*p+o*_*p+h*a*m-o*u*m,E=e*y+n*M+s*v+r*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=y*R,t[1]=(_*p*r-u*m*r-_*s*d+n*m*d+u*s*f-n*p*f)*R,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*f+n*c*f)*R,t[3]=(u*c*r-a*p*r-u*s*l+n*p*l+a*s*d-n*c*d)*R,t[4]=M*R,t[5]=(h*m*r-g*p*r+g*s*d-e*m*d-h*s*f+e*p*f)*R,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*f-e*c*f)*R,t[7]=(o*p*r-h*c*r+h*s*l-e*p*l-o*s*d+e*c*d)*R,t[8]=v*R,t[9]=(g*u*r-h*_*r-g*n*d+e*_*d+h*n*f-e*u*f)*R,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*f+e*a*f)*R,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*R,t[12]=A*R,t[13]=(h*_*s-g*u*s+g*n*p-e*_*p-h*n*m+e*u*m)*R,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*R,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*p+e*a*p)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,p=r*l,d=r*h,g=r*u,_=o*h,m=o*u,f=a*u,y=c*l,M=c*h,v=c*u,A=n.x,E=n.y,R=n.z;return s[0]=(1-(_+f))*A,s[1]=(d+v)*A,s[2]=(g-M)*A,s[3]=0,s[4]=(d-v)*E,s[5]=(1-(p+f))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(g+M)*R,s[9]=(m-y)*R,s[10]=(1-(p+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=vi.set(s[0],s[1],s[2]).length();const o=vi.set(s[4],s[5],s[6]).length(),a=vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],je.copy(this);const l=1/r,h=1/o,u=1/a;return je.elements[0]*=l,je.elements[1]*=l,je.elements[2]*=l,je.elements[4]*=h,je.elements[5]*=h,je.elements[6]*=h,je.elements[8]*=u,je.elements[9]*=u,je.elements[10]*=u,e.setFromRotationMatrix(je),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=fn,c=!1){const l=this.elements,h=2*r/(e-t),u=2*r/(n-s),p=(e+t)/(e-t),d=(n+s)/(n-s);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===fn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Sr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=fn,c=!1){const l=this.elements,h=2/(e-t),u=2/(n-s),p=-(e+t)/(e-t),d=-(n+s)/(n-s);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===fn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Sr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const vi=new U,je=new Jt,ff=new U(0,0,0),df=new U(1,1,1),In=new U,ks=new U,Ve=new U,xc=new Jt,vc=new nn;class Le{constructor(t=0,e=0,n=0,s=Le.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],p=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin($t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vc.setFromEuler(this),this.setFromQuaternion(vc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Le.DEFAULT_ORDER="XYZ";class Zl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let pf=0;const Mc=new U,Mi=new nn,Mn=new Jt,Hs=new U,os=new U,mf=new U,gf=new nn,yc=new U(1,0,0),Sc=new U(0,1,0),bc=new U(0,0,1),wc={type:"added"},_f={type:"removed"},yi={type:"childadded",child:null},Jr={type:"childremoved",child:null};class Me extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new U,e=new Le,n=new nn,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new qt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Mi.setFromAxisAngle(t,e),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(t,e){return Mi.setFromAxisAngle(t,e),this.quaternion.premultiply(Mi),this}rotateX(t){return this.rotateOnAxis(yc,t)}rotateY(t){return this.rotateOnAxis(Sc,t)}rotateZ(t){return this.rotateOnAxis(bc,t)}translateOnAxis(t,e){return Mc.copy(t).applyQuaternion(this.quaternion),this.position.add(Mc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yc,t)}translateY(t){return this.translateOnAxis(Sc,t)}translateZ(t){return this.translateOnAxis(bc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hs.copy(t):Hs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(os,Hs,this.up):Mn.lookAt(Hs,os,this.up),this.quaternion.setFromRotationMatrix(Mn),s&&(Mn.extractRotation(s.matrixWorld),Mi.setFromRotationMatrix(Mn),this.quaternion.premultiply(Mi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wc),yi.child=t,this.dispatchEvent(yi),yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_f),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wc),yi.child=t,this.dispatchEvent(yi),yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,t,mf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,gf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),p=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Me.DEFAULT_UP=new U(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qe=new U,yn=new U,jr=new U,Sn=new U,Si=new U,bi=new U,Ec=new U,Qr=new U,to=new U,eo=new U,no=new xe,io=new xe,so=new xe;class tn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Qe.subVectors(t,e),s.cross(Qe);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Qe.subVectors(s,e),yn.subVectors(n,e),jr.subVectors(t,e);const o=Qe.dot(Qe),a=Qe.dot(yn),c=Qe.dot(jr),l=yn.dot(yn),h=yn.dot(jr),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const p=1/u,d=(l*c-a*h)*p,g=(o*h-a*c)*p;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Sn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Sn.x),c.addScaledVector(o,Sn.y),c.addScaledVector(a,Sn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return no.setScalar(0),io.setScalar(0),so.setScalar(0),no.fromBufferAttribute(t,e),io.fromBufferAttribute(t,n),so.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(no,r.x),o.addScaledVector(io,r.y),o.addScaledVector(so,r.z),o}static isFrontFacing(t,e,n,s){return Qe.subVectors(n,e),yn.subVectors(t,e),Qe.cross(yn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),Qe.cross(yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return tn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Si.subVectors(s,n),bi.subVectors(r,n),Qr.subVectors(t,n);const c=Si.dot(Qr),l=bi.dot(Qr);if(c<=0&&l<=0)return e.copy(n);to.subVectors(t,s);const h=Si.dot(to),u=bi.dot(to);if(h>=0&&u<=h)return e.copy(s);const p=c*u-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Si,o);eo.subVectors(t,r);const d=Si.dot(eo),g=bi.dot(eo);if(g>=0&&d<=g)return e.copy(r);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(bi,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Ec.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Ec,a);const f=1/(m+_+p);return o=_*f,a=p*f,e.copy(n).addScaledVector(Si,o).addScaledVector(bi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Jl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function ro(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=ef(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ro(o,r,t+1/3),this.g=ro(o,r,t),this.b=ro(o,r,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=Ce){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){const n=Jl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=An(t.r),this.g=An(t.g),this.b=An(t.b),this}copyLinearToSRGB(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return ee.workingToColorSpace(Ae.copy(this),t),Math.round($t(Ae.r*255,0,255))*65536+Math.round($t(Ae.g*255,0,255))*256+Math.round($t(Ae.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(Ae.copy(this),e);const n=Ae.r,s=Ae.g,r=Ae.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=Ce){ee.workingToColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,s=Ae.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Dn),this.setHSL(Dn.h+t,Dn.s+e,Dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Dn),t.getHSL(Gs);const n=Hr(Dn.h,Gs.h,e),s=Hr(Dn.s,Gs.s,e),r=Hr(Dn.l,Gs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new Gt;Gt.NAMES=Jl;let xf=0;class Vn extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=Bi,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Co,this.blendDst=Po,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pi,this.stencilZFail=pi,this.stencilZPass=pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Co&&(n.blendSrc=this.blendSrc),this.blendDst!==Po&&(n.blendDst=this.blendDst),this.blendEquation!==ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class jl extends Vn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Le,this.combine=Pr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new U,Vs=new dt;let vf=0;class ce{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uc,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Vs.fromBufferAttribute(this,e),Vs.applyMatrix3(t),this.setXY(e,Vs.x,Vs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=is(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=is(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=is(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=is(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),s=Be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),s=Be(s,this.array),r=Be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uc&&(t.usage=this.usage),t}}class Ql extends ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class th extends ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Qt extends ce{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Mf=0;const Ke=new Jt,oo=new Me,wi=new U,We=new li,as=new li,be=new U;class ge extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($l(t)?th:Ql)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return oo.lookAt(t),oo.updateMatrix(),this.applyMatrix4(oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];We.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];as.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors(We.min,as.min),We.expandByPoint(be),be.addVectors(We.max,as.max),We.expandByPoint(be)):(We.expandByPoint(as.min),We.expandByPoint(as.max))}We.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(be));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)be.fromBufferAttribute(a,l),c&&(wi.fromBufferAttribute(t,l),be.add(wi)),s=Math.max(s,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ce(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new U,c[L]=new U;const l=new U,h=new U,u=new U,p=new dt,d=new dt,g=new dt,_=new U,m=new U;function f(L,S,x){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,x),p.fromBufferAttribute(r,L),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,x),h.sub(l),u.sub(l),d.sub(p),g.sub(p);const T=1/(d.x*g.y-g.x*d.y);isFinite(T)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(T),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(T),a[L].add(_),a[S].add(_),a[x].add(_),c[L].add(m),c[S].add(m),c[x].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let L=0,S=y.length;L<S;++L){const x=y[L],T=x.start,P=x.count;for(let F=T,N=T+P;F<N;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const M=new U,v=new U,A=new U,E=new U;function R(L){A.fromBufferAttribute(s,L),E.copy(A);const S=a[L];M.copy(S),M.sub(A.multiplyScalar(A.dot(S))).normalize(),v.crossVectors(E,S);const T=v.dot(c[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,T)}for(let L=0,S=y.length;L<S;++L){const x=y[L],T=x.start,P=x.count;for(let F=T,N=T+P;F<N;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);const s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,h=new U,u=new U;if(t)for(let p=0,d=t.count;p<d;p+=3){const g=t.getX(p+0),_=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,d=e.count;p<d;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,p=new l.constructor(c.length*h);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let f=0;f<h;f++)p[g++]=l[d++]}return new ce(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ge,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const p=l[h],d=t(p,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,p=l.length;u<p;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let p=0,d=u.length;p<d;p++)h.push(u[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tc=new Jt,Kn=new Da,Ws=new Rn,Ac=new U,Xs=new U,qs=new U,Ys=new U,ao=new U,$s=new U,Rc=new U,Ks=new U;class Ne extends Me{constructor(t=new ge,e=new jl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){$s.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(ao.fromBufferAttribute(u,t),o?$s.addScaledVector(ao,h):$s.addScaledVector(ao.sub(e),h))}e.add($s)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(r),Kn.copy(t.ray).recast(t.near),!(Ws.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(Ws,Ac)===null||Kn.origin.distanceToSquared(Ac)>(t.far-t.near)**2))&&(Tc.copy(r).invert(),Kn.copy(t.ray).applyMatrix4(Tc),!(n.boundingBox!==null&&Kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Kn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const m=p[g],f=o[m.materialIndex],y=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,A=M;v<A;v+=3){const E=a.getX(v),R=a.getX(v+1),L=a.getX(v+2);s=Zs(this,f,t,n,l,h,u,E,R,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,f=_;m<f;m+=3){const y=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);s=Zs(this,o,t,n,l,h,u,y,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const m=p[g],f=o[m.materialIndex],y=Math.max(m.start,d.start),M=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,A=M;v<A;v+=3){const E=v,R=v+1,L=v+2;s=Zs(this,f,t,n,l,h,u,E,R,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,f=_;m<f;m+=3){const y=m,M=m+1,v=m+2;s=Zs(this,o,t,n,l,h,u,y,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function yf(i,t,e,n,s,r,o,a){let c;if(t.side===Fe?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Gn,a),c===null)return null;Ks.copy(a),Ks.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ks);return l<e.near||l>e.far?null:{distance:l,point:Ks.clone(),object:i}}function Zs(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Xs),i.getVertexPosition(c,qs),i.getVertexPosition(l,Ys);const h=yf(i,t,e,n,Xs,qs,Ys,Rc);if(h){const u=new U;tn.getBarycoord(Rc,Xs,qs,Ys,u),s&&(h.uv=tn.getInterpolatedAttribute(s,a,c,l,u,new dt)),r&&(h.uv1=tn.getInterpolatedAttribute(r,a,c,l,u,new dt)),o&&(h.normal=tn.getInterpolatedAttribute(o,a,c,l,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:c,c:l,normal:new U,materialIndex:0};tn.getNormal(Xs,qs,Ys,p.normal),h.face=p,h.barycoord=u}return h}class Xe extends ge{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let p=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(u,2));function g(_,m,f,y,M,v,A,E,R,L,S){const x=v/R,T=A/L,P=v/2,F=A/2,N=E/2,D=R+1,O=L+1;let H=0,B=0;const Z=new U;for(let rt=0;rt<O;rt++){const pt=rt*T-F;for(let yt=0;yt<D;yt++){const ft=yt*x-P;Z[_]=ft*y,Z[m]=pt*M,Z[f]=N,l.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[f]=E>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(yt/R),u.push(1-rt/L),H+=1}}for(let rt=0;rt<L;rt++)for(let pt=0;pt<R;pt++){const yt=p+pt+D*rt,ft=p+pt+D*(rt+1),Mt=p+(pt+1)+D*(rt+1),it=p+(pt+1)+D*rt;c.push(yt,ft,it),c.push(ft,Mt,it),B+=6}a.addGroup(d,B,S),d+=B,p+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function qi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function De(i){const t={};for(let e=0;e<i.length;e++){const n=qi(i[e]);for(const s in n)t[s]=n[s]}return t}function Sf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function eh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const bf={clone:qi,merge:De};var wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ef=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends Vn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wf,this.fragmentShader=Ef,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qi(t.uniforms),this.uniformsGroups=Sf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class nh extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Un=new U,Cc=new dt,Pc=new dt;class Ze extends nh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ga*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ga*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Un.x,Un.y).multiplyScalar(-t/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-t/Un.z)}getViewSize(t,e){return this.getViewBounds(t,Cc,Pc),e.subVectors(Pc,Cc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(kr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ei=-90,Ti=1;class Tf extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ze(Ei,Ti,t,e);s.layers=this.layers,this.add(s);const r=new Ze(Ei,Ti,t,e);r.layers=this.layers,this.add(r);const o=new Ze(Ei,Ti,t,e);o.layers=this.layers,this.add(o);const a=new Ze(Ei,Ti,t,e);a.layers=this.layers,this.add(a);const c=new Ze(Ei,Ti,t,e);c.layers=this.layers,this.add(c);const l=new Ze(Ei,Ti,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,p,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ih extends Oe{constructor(t=[],e=Vi,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Af extends ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ih(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Xe(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:kn});r.uniforms.tEquirect.value=e;const o=new Ne(s,r),a=e.minFilter;return e.minFilter===ri&&(e.minFilter=hn),new Tf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class Di extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rf={type:"move"};class co{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&p>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rf)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Di;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ua{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=n}clone(){return new Ua(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Cf extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Le,this.environmentIntensity=1,this.environmentRotation=new Le,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Pf extends Oe{constructor(t=null,e=1,n=1,s,r,o,a,c,l=qe,h=qe,u,p){super(null,o,a,c,l,h,s,r,u,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ui extends ce{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ai=new Jt,Lc=new Jt,Js=[],Ic=new li,Lf=new Jt,cs=new Ne,ls=new Rn;class wr extends Ne{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ui(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Lf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new li),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ai),Ic.copy(t.boundingBox).applyMatrix4(Ai),this.boundingBox.union(Ic)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ai),ls.copy(t.boundingSphere).applyMatrix4(Ai),this.boundingSphere.union(ls)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(cs.geometry=this.geometry,cs.material=this.material,cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ls.copy(this.boundingSphere),ls.applyMatrix4(n),t.ray.intersectsSphere(ls)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ai),Lc.multiplyMatrices(n,Ai),cs.matrixWorld=Lc,cs.raycast(t,Js);for(let o=0,a=Js.length;o<a;o++){const c=Js[o];c.instanceId=r,c.object=this,e.push(c)}Js.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ui(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pf(new Float32Array(s*this.count),s,this.count,Aa,un));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const lo=new U,If=new U,Df=new qt;class Qn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=lo.subVectors(n,e).cross(If.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(lo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Df.getNormalMatrix(t),s=this.coplanarPoint(lo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zn=new Rn,Uf=new dt(.5,.5),js=new U;class Na{constructor(t=new Qn,e=new Qn,n=new Qn,s=new Qn,r=new Qn,o=new Qn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],p=r[6],d=r[7],g=r[8],_=r[9],m=r[10],f=r[11],y=r[12],M=r[13],v=r[14],A=r[15];if(s[0].setComponents(l-o,d-h,f-g,A-y).normalize(),s[1].setComponents(l+o,d+h,f+g,A+y).normalize(),s[2].setComponents(l+a,d+u,f+_,A+M).normalize(),s[3].setComponents(l-a,d-u,f-_,A-M).normalize(),n)s[4].setComponents(c,p,m,v).normalize(),s[5].setComponents(l-c,d-p,f-m,A-v).normalize();else if(s[4].setComponents(l-c,d-p,f-m,A-v).normalize(),e===fn)s[5].setComponents(l+c,d+p,f+m,A+v).normalize();else if(e===Sr)s[5].setComponents(c,p,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(t){Zn.center.set(0,0,0);const e=Uf.distanceTo(t.center);return Zn.radius=.7071067811865476+e,Zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(js.x=s.normal.x>0?t.max.x:t.min.x,js.y=s.normal.y>0?t.max.y:t.min.y,js.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sh extends Vn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Er=new U,Tr=new U,Dc=new Jt,hs=new Da,Qs=new Rn,ho=new U,Uc=new U;class Nf extends Me{constructor(t=new ge,e=new sh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Er.fromBufferAttribute(e,s-1),Tr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Er.distanceTo(Tr);t.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(s),Qs.radius+=r,t.ray.intersectsSphere(Qs)===!1)return;Dc.copy(s).invert(),hs.copy(t.ray).applyMatrix4(Dc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=l){const f=h.getX(_),y=h.getX(_+1),M=tr(this,t,hs,c,f,y,_);M&&e.push(M)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(d),f=tr(this,t,hs,c,_,m,g-1);f&&e.push(f)}}else{const d=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=l){const f=tr(this,t,hs,c,_,_+1,_);f&&e.push(f)}if(this.isLineLoop){const _=tr(this,t,hs,c,g-1,d,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function tr(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(Er.fromBufferAttribute(a,s),Tr.fromBufferAttribute(a,r),e.distanceSqToSegment(Er,Tr,ho,Uc)>n)return;ho.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ho);if(!(l<t.near||l>t.far))return{distance:l,point:Uc.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Nc=new U,Fc=new U;class Ff extends Nf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Nc.fromBufferAttribute(e,s),Fc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Nc.distanceTo(Fc);t.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Of extends Vn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Oc=new Jt,_a=new Da,er=new Rn,nr=new U;class zf extends Me{constructor(t=new ge,e=new Of){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(s),er.radius+=r,t.ray.intersectsSphere(er)===!1)return;Oc.copy(s).invert(),_a.copy(t.ray).applyMatrix4(Oc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const p=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=p,_=d;g<_;g++){const m=l.getX(g);nr.fromBufferAttribute(u,m),zc(nr,m,c,s,t,e,this)}}else{const p=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=p,_=d;g<_;g++)nr.fromBufferAttribute(u,g),zc(nr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function zc(i,t,e,n,s,r,o){const a=_a.distanceSqToPoint(i);if(a<e){const c=new U;_a.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class rh extends Oe{constructor(t,e,n=oi,s,r,o,a=qe,c=qe,l,h=Ms,u=1){if(h!==Ms&&h!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:t,height:e,depth:u};super(p,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ia(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class oh extends Oe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Fa extends ge{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],l=[],h=e/2,u=Math.PI/2*t,p=e,d=2*u+p,g=n*2+r,_=s+1,m=new U,f=new U;for(let y=0;y<=g;y++){let M=0,v=0,A=0,E=0;if(y<=n){const S=y/n,x=S*Math.PI/2;v=-h-t*Math.cos(x),A=t*Math.sin(x),E=-t*Math.cos(x),M=S*u}else if(y<=n+r){const S=(y-n)/r;v=-h+S*e,A=t,E=0,M=u+S*p}else{const S=(y-n-r)/n,x=S*Math.PI/2;v=h+t*Math.sin(x),A=t*Math.cos(x),E=t*Math.sin(x),M=u+p+S*u}const R=Math.max(0,Math.min(1,M/d));let L=0;y===0?L=.5/s:y===g&&(L=-.5/s);for(let S=0;S<=s;S++){const x=S/s,T=x*Math.PI*2,P=Math.sin(T),F=Math.cos(T);f.x=-A*F,f.y=v,f.z=A*P,a.push(f.x,f.y,f.z),m.set(-A*F,E,A*P),m.normalize(),c.push(m.x,m.y,m.z),l.push(x+L,R)}if(y>0){const S=(y-1)*_;for(let x=0;x<s;x++){const T=S+x,P=S+x+1,F=y*_+x,N=y*_+x+1;o.push(T,P,F),o.push(P,N,F)}}}this.setIndex(o),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fa(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class mn extends ge{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],p=[],d=[];let g=0;const _=[],m=n/2;let f=0;y(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(p,3)),this.setAttribute("uv",new Qt(d,2));function y(){const v=new U,A=new U;let E=0;const R=(e-t)/n;for(let L=0;L<=r;L++){const S=[],x=L/r,T=x*(e-t)+t;for(let P=0;P<=s;P++){const F=P/s,N=F*c+a,D=Math.sin(N),O=Math.cos(N);A.x=T*D,A.y=-x*n+m,A.z=T*O,u.push(A.x,A.y,A.z),v.set(D,R,O).normalize(),p.push(v.x,v.y,v.z),d.push(F,1-x),S.push(g++)}_.push(S)}for(let L=0;L<s;L++)for(let S=0;S<r;S++){const x=_[S][L],T=_[S+1][L],P=_[S+1][L+1],F=_[S][L+1];(t>0||S!==0)&&(h.push(x,T,F),E+=3),(e>0||S!==r-1)&&(h.push(T,P,F),E+=3)}l.addGroup(f,E,0),f+=E}function M(v){const A=g,E=new dt,R=new U;let L=0;const S=v===!0?t:e,x=v===!0?1:-1;for(let P=1;P<=s;P++)u.push(0,m*x,0),p.push(0,x,0),d.push(.5,.5),g++;const T=g;for(let P=0;P<=s;P++){const N=P/s*c+a,D=Math.cos(N),O=Math.sin(N);R.x=S*O,R.y=m*x,R.z=S*D,u.push(R.x,R.y,R.z),p.push(0,x,0),E.x=D*.5+.5,E.y=O*.5*x+.5,d.push(E.x,E.y),g++}for(let P=0;P<s;P++){const F=A+P,N=T+P;v===!0?h.push(N,N+1,F):h.push(N+1,N,F),L+=3}l.addGroup(f,L,v===!0?1:2),f+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ir extends mn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ir(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Dr extends ge{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const M=new U,v=new U,A=new U;for(let E=0;E<e.length;E+=3)d(e[E+0],M),d(e[E+1],v),d(e[E+2],A),c(M,v,A,y)}function c(y,M,v,A){const E=A+1,R=[];for(let L=0;L<=E;L++){R[L]=[];const S=y.clone().lerp(v,L/E),x=M.clone().lerp(v,L/E),T=E-L;for(let P=0;P<=T;P++)P===0&&L===E?R[L][P]=S:R[L][P]=S.clone().lerp(x,P/T)}for(let L=0;L<E;L++)for(let S=0;S<2*(E-L)-1;S++){const x=Math.floor(S/2);S%2===0?(p(R[L][x+1]),p(R[L+1][x]),p(R[L][x])):(p(R[L][x+1]),p(R[L+1][x+1]),p(R[L+1][x]))}}function l(y){const M=new U;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(y),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){const y=new U;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];const v=m(y)/2/Math.PI+.5,A=f(y)/Math.PI+.5;o.push(v,1-A)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){const M=o[y+0],v=o[y+2],A=o[y+4],E=Math.max(M,v,A),R=Math.min(M,v,A);E>.9&&R<.1&&(M<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),A<.2&&(o[y+4]+=1))}}function p(y){r.push(y.x,y.y,y.z)}function d(y,M){const v=y*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function g(){const y=new U,M=new U,v=new U,A=new U,E=new dt,R=new dt,L=new dt;for(let S=0,x=0;S<r.length;S+=9,x+=6){y.set(r[S+0],r[S+1],r[S+2]),M.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),E.set(o[x+0],o[x+1]),R.set(o[x+2],o[x+3]),L.set(o[x+4],o[x+5]),A.copy(y).add(M).add(v).divideScalar(3);const T=m(A);_(E,x+0,y,T),_(R,x+2,M,T),_(L,x+4,v,T)}}function _(y,M,v,A){A<0&&y.x===1&&(o[M]=y.x-1),v.x===0&&v.z===0&&(o[M]=A/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dr(t.vertices,t.indices,t.radius,t.details)}}class gn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],p=n[s+1]-h,d=(o-h)/p;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new dt:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new U,s=[],r=[],o=[],a=new U,c=new Jt;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),p<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos($t(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos($t(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Oa extends gn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new dt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=c-this.aX,d=l-this.aY;c=p*h-d*u+this.aX,l=p*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Bf extends Oa{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function za(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let p=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;p*=h,d*=h,s(o,a,p,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const ir=new U,uo=new za,fo=new za,po=new za;class ah extends gn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(ir.subVectors(s[0],s[1]).add(s[0]),l=ir);const u=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ir.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ir),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(p),d),m=Math.pow(p.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),uo.initNonuniformCatmullRom(l.x,u.x,p.x,h.x,g,_,m),fo.initNonuniformCatmullRom(l.y,u.y,p.y,h.y,g,_,m),po.initNonuniformCatmullRom(l.z,u.z,p.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(uo.initCatmullRom(l.x,u.x,p.x,h.x,this.tension),fo.initCatmullRom(l.y,u.y,p.y,h.y,this.tension),po.initCatmullRom(l.z,u.z,p.z,h.z,this.tension));return n.set(uo.calc(c),fo.calc(c),po.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Bc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function kf(i,t){const e=1-i;return e*e*t}function Hf(i,t){return 2*(1-i)*i*t}function Gf(i,t){return i*i*t}function ms(i,t,e,n){return kf(i,t)+Hf(i,e)+Gf(i,n)}function Vf(i,t){const e=1-i;return e*e*e*t}function Wf(i,t){const e=1-i;return 3*e*e*i*t}function Xf(i,t){return 3*(1-i)*i*i*t}function qf(i,t){return i*i*i*t}function gs(i,t,e,n,s){return Vf(i,t)+Wf(i,e)+Xf(i,n)+qf(i,s)}class ch extends gn{constructor(t=new dt,e=new dt,n=new dt,s=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new dt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(gs(t,s.x,r.x,o.x,a.x),gs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Yf extends gn{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(gs(t,s.x,r.x,o.x,a.x),gs(t,s.y,r.y,o.y,a.y),gs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class lh extends gn{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $f extends gn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hh extends gn{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ms(t,s.x,r.x,o.x),ms(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uh extends gn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ms(t,s.x,r.x,o.x),ms(t,s.y,r.y,o.y),ms(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fh extends gn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Bc(a,c.x,l.x,h.x,u.x),Bc(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new dt().fromArray(s))}return this}}var Ar=Object.freeze({__proto__:null,ArcCurve:Bf,CatmullRomCurve3:ah,CubicBezierCurve:ch,CubicBezierCurve3:Yf,EllipseCurve:Oa,LineCurve:lh,LineCurve3:$f,QuadraticBezierCurve:hh,QuadraticBezierCurve3:uh,SplineCurve:fh});class Kf extends gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ar[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Ar[s.type]().fromJSON(s))}return this}}class kc extends Kf{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new lh(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new hh(this.currentPoint.clone(),new dt(t,e),new dt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new ch(this.currentPoint.clone(),new dt(t,e),new dt(n,s),new dt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new fh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Oa(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class dh extends kc{constructor(t){super(t),this.uuid=Ji(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new kc().fromJSON(s))}return this}}function Zf(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=ph(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=ed(i,t,r,e)),i.length>80*e){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let p=e;p<s;p+=e){const d=i[p],g=i[p+1];d<a&&(a=d),g<c&&(c=g),d>h&&(h=d),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return bs(r,o,e,a,c,l,0),o}function ph(i,t,e,n,s){let r;if(s===fd(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Hc(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Hc(o/n|0,i[o],i[o+1],r);return r&&Yi(r,r.next)&&(Es(r),r=r.next),r}function ci(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Yi(e,e.next)||me(e.prev,e,e.next)===0)){if(Es(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function bs(i,t,e,n,s,r,o){if(!i)return;!o&&r&&od(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?jf(i,n,s,r):Jf(i)){t.push(c.i,i.i,l.i),Es(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Qf(ci(i),t),bs(i,t,e,n,s,r,2)):o===2&&td(i,t,e,n,s,r):bs(ci(i),t,e,n,s,r,1);break}}}function Jf(i){const t=i.prev,e=i,n=i.next;if(me(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),p=Math.max(s,r,o),d=Math.max(a,c,l);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=p&&g.y>=u&&g.y<=d&&ds(s,a,r,c,o,l,g.x,g.y)&&me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function jf(i,t,e,n){const s=i.prev,r=i,o=i.next;if(me(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,p=o.y,d=Math.min(a,c,l),g=Math.min(h,u,p),_=Math.max(a,c,l),m=Math.max(h,u,p),f=xa(d,g,t,e,n),y=xa(_,m,t,e,n);let M=i.prevZ,v=i.nextZ;for(;M&&M.z>=f&&v&&v.z<=y;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&ds(a,h,c,u,l,p,M.x,M.y)&&me(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ds(a,h,c,u,l,p,v.x,v.y)&&me(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=f;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&ds(a,h,c,u,l,p,M.x,M.y)&&me(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&ds(a,h,c,u,l,p,v.x,v.y)&&me(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Qf(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Yi(n,s)&&gh(n,e,e.next,s)&&ws(n,s)&&ws(s,n)&&(t.push(n.i,e.i,s.i),Es(e),Es(e.next),e=i=s),e=e.next}while(e!==i);return ci(e)}function td(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ld(o,a)){let c=_h(o,a);o=ci(o,o.next),c=ci(c,c.next),bs(o,t,e,n,s,r,0),bs(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function ed(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=ph(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(cd(l))}s.sort(nd);for(let r=0;r<s.length;r++)e=id(s[r],e);return e}function nd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function id(i,t){const e=sd(i,t);if(!e)return t;const n=_h(e,i);return ci(n,n.next),ci(e,e.next)}function sd(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(Yi(i,e))return e;do{if(Yi(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&mh(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);ws(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&rd(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function rd(i,t){return me(i.prev,i,t.prev)<0&&me(t.next,i,i.next)<0}function od(i,t,e,n){let s=i;do s.z===0&&(s.z=xa(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ad(s)}function ad(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function xa(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function cd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function mh(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ds(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&mh(i,t,e,n,s,r,o,a)}function ld(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!hd(i,t)&&(ws(i,t)&&ws(t,i)&&ud(i,t)&&(me(i.prev,i,t.prev)||me(i,t.prev,t))||Yi(i,t)&&me(i.prev,i,i.next)>0&&me(t.prev,t,t.next)>0)}function me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Yi(i,t){return i.x===t.x&&i.y===t.y}function gh(i,t,e,n){const s=rr(me(i,t,e)),r=rr(me(i,t,n)),o=rr(me(e,n,i)),a=rr(me(e,n,t));return!!(s!==r&&o!==a||s===0&&sr(i,e,t)||r===0&&sr(i,n,t)||o===0&&sr(e,i,n)||a===0&&sr(e,t,n))}function sr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function rr(i){return i>0?1:i<0?-1:0}function hd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&gh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ws(i,t){return me(i.prev,i,i.next)<0?me(i,t,i.next)>=0&&me(i,i.prev,t)>=0:me(i,t,i.prev)<0||me(i,i.next,t)<0}function ud(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function _h(i,t){const e=va(i.i,i.x,i.y),n=va(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Hc(i,t,e,n){const s=va(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Es(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function va(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function fd(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class dd{static triangulate(t,e,n=2){return Zf(t,e,n)}}class Ni{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ni.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Gc(t),Vc(n,t);let o=t.length;e.forEach(Gc);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Vc(n,e[c]);const a=dd.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Gc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Vc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ba extends ge{constructor(t=new dh([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Qt(s,3)),this.setAttribute("uv",new Qt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:pd;let M,v=!1,A,E,R,L;f&&(M=f.getSpacedPoints(h),v=!0,p=!1,A=f.computeFrenetFrames(h,!1),E=new U,R=new U,L=new U),p||(m=0,d=0,g=0,_=0);const S=a.extractPoints(l);let x=S.shape;const T=S.holes;if(!Ni.isClockWise(x)){x=x.reverse();for(let et=0,Q=T.length;et<Q;et++){const J=T[et];Ni.isClockWise(J)&&(T[et]=J.reverse())}}function F(et){const J=10000000000000001e-36;let j=et[0];for(let _t=1;_t<=et.length;_t++){const ot=_t%et.length,xt=et[ot],Vt=xt.x-j.x,Ht=xt.y-j.y,C=Vt*Vt+Ht*Ht,b=Math.max(Math.abs(xt.x),Math.abs(xt.y),Math.abs(j.x),Math.abs(j.y)),W=J*b*b;if(C<=W){et.splice(ot,1),_t--;continue}j=xt}}F(x),T.forEach(F);const N=T.length,D=x;for(let et=0;et<N;et++){const Q=T[et];x=x.concat(Q)}function O(et,Q,J){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(Q,J)}const H=x.length;function B(et,Q,J){let j,_t,ot;const xt=et.x-Q.x,Vt=et.y-Q.y,Ht=J.x-et.x,C=J.y-et.y,b=xt*xt+Vt*Vt,W=xt*C-Vt*Ht;if(Math.abs(W)>Number.EPSILON){const $=Math.sqrt(b),nt=Math.sqrt(Ht*Ht+C*C),K=Q.x-Vt/$,It=Q.y+xt/$,ut=J.x-C/nt,Ct=J.y+Ht/nt,Pt=((ut-K)*C-(Ct-It)*Ht)/(xt*C-Vt*Ht);j=K+xt*Pt-et.x,_t=It+Vt*Pt-et.y;const at=j*j+_t*_t;if(at<=2)return new dt(j,_t);ot=Math.sqrt(at/2)}else{let $=!1;xt>Number.EPSILON?Ht>Number.EPSILON&&($=!0):xt<-Number.EPSILON?Ht<-Number.EPSILON&&($=!0):Math.sign(Vt)===Math.sign(C)&&($=!0),$?(j=-Vt,_t=xt,ot=Math.sqrt(b)):(j=xt,_t=Vt,ot=Math.sqrt(b/2))}return new dt(j/ot,_t/ot)}const Z=[];for(let et=0,Q=D.length,J=Q-1,j=et+1;et<Q;et++,J++,j++)J===Q&&(J=0),j===Q&&(j=0),Z[et]=B(D[et],D[J],D[j]);const rt=[];let pt,yt=Z.concat();for(let et=0,Q=N;et<Q;et++){const J=T[et];pt=[];for(let j=0,_t=J.length,ot=_t-1,xt=j+1;j<_t;j++,ot++,xt++)ot===_t&&(ot=0),xt===_t&&(xt=0),pt[j]=B(J[j],J[ot],J[xt]);rt.push(pt),yt=yt.concat(pt)}let ft;if(m===0)ft=Ni.triangulateShape(D,T);else{const et=[],Q=[];for(let J=0;J<m;J++){const j=J/m,_t=d*Math.cos(j*Math.PI/2),ot=g*Math.sin(j*Math.PI/2)+_;for(let xt=0,Vt=D.length;xt<Vt;xt++){const Ht=O(D[xt],Z[xt],ot);mt(Ht.x,Ht.y,-_t),j===0&&et.push(Ht)}for(let xt=0,Vt=N;xt<Vt;xt++){const Ht=T[xt];pt=rt[xt];const C=[];for(let b=0,W=Ht.length;b<W;b++){const $=O(Ht[b],pt[b],ot);mt($.x,$.y,-_t),j===0&&C.push($)}j===0&&Q.push(C)}}ft=Ni.triangulateShape(et,Q)}const Mt=ft.length,it=g+_;for(let et=0;et<H;et++){const Q=p?O(x[et],yt[et],it):x[et];v?(R.copy(A.normals[0]).multiplyScalar(Q.x),E.copy(A.binormals[0]).multiplyScalar(Q.y),L.copy(M[0]).add(R).add(E),mt(L.x,L.y,L.z)):mt(Q.x,Q.y,0)}for(let et=1;et<=h;et++)for(let Q=0;Q<H;Q++){const J=p?O(x[Q],yt[Q],it):x[Q];v?(R.copy(A.normals[et]).multiplyScalar(J.x),E.copy(A.binormals[et]).multiplyScalar(J.y),L.copy(M[et]).add(R).add(E),mt(L.x,L.y,L.z)):mt(J.x,J.y,u/h*et)}for(let et=m-1;et>=0;et--){const Q=et/m,J=d*Math.cos(Q*Math.PI/2),j=g*Math.sin(Q*Math.PI/2)+_;for(let _t=0,ot=D.length;_t<ot;_t++){const xt=O(D[_t],Z[_t],j);mt(xt.x,xt.y,u+J)}for(let _t=0,ot=T.length;_t<ot;_t++){const xt=T[_t];pt=rt[_t];for(let Vt=0,Ht=xt.length;Vt<Ht;Vt++){const C=O(xt[Vt],pt[Vt],j);v?mt(C.x,C.y+M[h-1].y,M[h-1].x+J):mt(C.x,C.y,u+J)}}}V(),X();function V(){const et=s.length/3;if(p){let Q=0,J=H*Q;for(let j=0;j<Mt;j++){const _t=ft[j];gt(_t[2]+J,_t[1]+J,_t[0]+J)}Q=h+m*2,J=H*Q;for(let j=0;j<Mt;j++){const _t=ft[j];gt(_t[0]+J,_t[1]+J,_t[2]+J)}}else{for(let Q=0;Q<Mt;Q++){const J=ft[Q];gt(J[2],J[1],J[0])}for(let Q=0;Q<Mt;Q++){const J=ft[Q];gt(J[0]+H*h,J[1]+H*h,J[2]+H*h)}}n.addGroup(et,s.length/3-et,0)}function X(){const et=s.length/3;let Q=0;st(D,Q),Q+=D.length;for(let J=0,j=T.length;J<j;J++){const _t=T[J];st(_t,Q),Q+=_t.length}n.addGroup(et,s.length/3-et,1)}function st(et,Q){let J=et.length;for(;--J>=0;){const j=J;let _t=J-1;_t<0&&(_t=et.length-1);for(let ot=0,xt=h+m*2;ot<xt;ot++){const Vt=H*ot,Ht=H*(ot+1),C=Q+j+Vt,b=Q+_t+Vt,W=Q+_t+Ht,$=Q+j+Ht;Ot(C,b,W,$)}}}function mt(et,Q,J){c.push(et),c.push(Q),c.push(J)}function gt(et,Q,J){jt(et),jt(Q),jt(J);const j=s.length/3,_t=y.generateTopUV(n,s,j-3,j-2,j-1);I(_t[0]),I(_t[1]),I(_t[2])}function Ot(et,Q,J,j){jt(et),jt(Q),jt(j),jt(Q),jt(J),jt(j);const _t=s.length/3,ot=y.generateSideWallUV(n,s,_t-6,_t-3,_t-2,_t-1);I(ot[0]),I(ot[1]),I(ot[3]),I(ot[1]),I(ot[2]),I(ot[3])}function jt(et){s.push(c[et*3+0]),s.push(c[et*3+1]),s.push(c[et*3+2])}function I(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return md(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ar[s.type]().fromJSON(s)),new Ba(n,t.options)}}const pd={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new dt(r,o),new dt(a,c),new dt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],p=t[s*3],d=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new dt(o,1-c),new dt(l,1-u),new dt(p,1-g),new dt(_,1-f)]:[new dt(a,1-c),new dt(h,1-u),new dt(d,1-g),new dt(m,1-f)]}};function md(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ts extends Dr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ts(t.radius,t.detail)}}class ka extends ge{constructor(t=[new dt(0,-.5),new dt(.5,0),new dt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=$t(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new U,p=new dt,d=new U,g=new U,_=new U;let m=0,f=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,d.x=f*1,d.y=-m,d.z=f*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,d.x=f*1,d.y=-m,d.z=f*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(g)}for(let y=0;y<=e;y++){const M=n+y*h*s,v=Math.sin(M),A=Math.cos(M);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*v,u.y=t[E].y,u.z=t[E].x*A,o.push(u.x,u.y,u.z),p.x=y/e,p.y=E/(t.length-1),a.push(p.x,p.y);const R=c[3*E+0]*v,L=c[3*E+1],S=c[3*E+0]*A;l.push(R,L,S)}}for(let y=0;y<e;y++)for(let M=0;M<t.length-1;M++){const v=M+y*t.length,A=v,E=v+t.length,R=v+t.length+1,L=v+1;r.push(A,E,L),r.push(R,L,E)}this.setIndex(r),this.setAttribute("position",new Qt(o,3)),this.setAttribute("uv",new Qt(a,2)),this.setAttribute("normal",new Qt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ka(t.points,t.segments,t.phiStart,t.phiLength)}}class Ha extends Dr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ha(t.radius,t.detail)}}class Cs extends ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,p=e/c,d=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const y=f*p-o;for(let M=0;M<l;M++){const v=M*u-r;g.push(v,-y,0),_.push(0,0,1),m.push(M/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<a;y++){const M=y+l*f,v=y+l*(f+1),A=y+1+l*(f+1),E=y+1+l*f;d.push(M,v,E),d.push(v,A,E)}this.setIndex(d),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cs(t.width,t.height,t.widthSegments,t.heightSegments)}}class $i extends ge{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new U,p=new U,d=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const y=[],M=f/n;let v=0;f===0&&o===0?v=.5/e:f===n&&c===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){const E=A/e;u.x=-t*Math.cos(s+E*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+E*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),p.copy(u).normalize(),_.push(p.x,p.y,p.z),m.push(E+v,1-M),y.push(l++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<e;y++){const M=h[f][y+1],v=h[f][y],A=h[f+1][y],E=h[f+1][y+1];(f!==0||o>0)&&d.push(M,v,E),(f!==n-1||c<Math.PI)&&d.push(v,A,E)}this.setIndex(d),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ga extends ge{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new U,u=new U,p=new U;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const _=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),p.subVectors(u,h).normalize(),c.push(p.x,p.y,p.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,f=(s+1)*(d-1)+g,y=(s+1)*d+g;o.push(_,m,y),o.push(m,f,y)}this.setIndex(o),this.setAttribute("position",new Qt(a,3)),this.setAttribute("normal",new Qt(c,3)),this.setAttribute("uv",new Qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ga(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Va extends ge{constructor(t=new uh(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new U,c=new U,l=new dt;let h=new U;const u=[],p=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Qt(u,3)),this.setAttribute("normal",new Qt(p,3)),this.setAttribute("uv",new Qt(d,2));function _(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),y(),f()}function m(M){h=t.getPointAt(M/e,h);const v=o.normals[M],A=o.binormals[M];for(let E=0;E<=s;E++){const R=E/s*Math.PI*2,L=Math.sin(R),S=-Math.cos(R);c.x=S*v.x+L*A.x,c.y=S*v.y+L*A.y,c.z=S*v.z+L*A.z,c.normalize(),p.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function f(){for(let M=1;M<=e;M++)for(let v=1;v<=s;v++){const A=(s+1)*(M-1)+(v-1),E=(s+1)*M+(v-1),R=(s+1)*M+v,L=(s+1)*(M-1)+v;g.push(A,E,L),g.push(E,R,L)}}function y(){for(let M=0;M<=e;M++)for(let v=0;v<=s;v++)l.x=M/e,l.y=v/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Va(new Ar[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class gd extends Vn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Gt(16777215),this.specular=new Gt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=La,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Le,this.combine=Pr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ur extends Vn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=La,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Le,this.combine=Pr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _d extends Vn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xd extends Vn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class xh extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class vd extends xh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const mo=new Jt,Wc=new U,Xc=new U;class Md{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Na,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Wc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wc),Xc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xc),e.updateMatrixWorld(),mo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mo,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class vh extends nh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class yd extends Md{constructor(){super(new vh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sd extends xh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new yd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class bd extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function qc(i,t,e,n){const s=wd(n);switch(e){case Wl:return i*t;case Aa:return i*t/s.components*s.byteLength;case Ra:return i*t/s.components*s.byteLength;case ql:return i*t*2/s.components*s.byteLength;case Ca:return i*t*2/s.components*s.byteLength;case Xl:return i*t*3/s.components*s.byteLength;case en:return i*t*4/s.components*s.byteLength;case Pa:return i*t*4/s.components*s.byteLength;case mr:case gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _r:case xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vo:case Xo:return Math.max(i,16)*Math.max(t,8)/4;case Go:case Wo:return Math.max(i,8)*Math.max(t,8)/2;case qo:case Yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Jo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case jo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Qo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ta:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ea:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case na:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ia:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case sa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ra:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case oa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case aa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ca:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case la:case ha:case ua:return Math.ceil(i/4)*Math.ceil(t/4)*16;case fa:case da:return Math.ceil(i/4)*Math.ceil(t/4)*8;case pa:case ma:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wd(i){switch(i){case pn:case kl:return{byteLength:1,components:1};case xs:case Hl:case Rs:return{byteLength:2,components:1};case Ea:case Ta:return{byteLength:2,components:4};case oi:case wa:case un:return{byteLength:4,components:1};case Gl:case Vl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ba);function Mh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ed(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let p=0;for(let d=1;d<u.length;d++){const g=u[p],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,u[p]=_)}u.length=p+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Td=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ad=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ld=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Id=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ud=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Nd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Od=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$d=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Kd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,np="gl_FragColor = linearToOutputTexel( gl_FragColor );",ip=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,op=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_p=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ep=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ap=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Up=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Np=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Op=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Gp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$p=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Kp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,om=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_m=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Im=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Dm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Um=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,km=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Wm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ym=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$m=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Km=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,t0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,i0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,s0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yt={alphahash_fragment:Td,alphahash_pars_fragment:Ad,alphamap_fragment:Rd,alphamap_pars_fragment:Cd,alphatest_fragment:Pd,alphatest_pars_fragment:Ld,aomap_fragment:Id,aomap_pars_fragment:Dd,batching_pars_vertex:Ud,batching_vertex:Nd,begin_vertex:Fd,beginnormal_vertex:Od,bsdfs:zd,iridescence_fragment:Bd,bumpmap_pars_fragment:kd,clipping_planes_fragment:Hd,clipping_planes_pars_fragment:Gd,clipping_planes_pars_vertex:Vd,clipping_planes_vertex:Wd,color_fragment:Xd,color_pars_fragment:qd,color_pars_vertex:Yd,color_vertex:$d,common:Kd,cube_uv_reflection_fragment:Zd,defaultnormal_vertex:Jd,displacementmap_pars_vertex:jd,displacementmap_vertex:Qd,emissivemap_fragment:tp,emissivemap_pars_fragment:ep,colorspace_fragment:np,colorspace_pars_fragment:ip,envmap_fragment:sp,envmap_common_pars_fragment:rp,envmap_pars_fragment:op,envmap_pars_vertex:ap,envmap_physical_pars_fragment:xp,envmap_vertex:cp,fog_vertex:lp,fog_pars_vertex:hp,fog_fragment:up,fog_pars_fragment:fp,gradientmap_pars_fragment:dp,lightmap_pars_fragment:pp,lights_lambert_fragment:mp,lights_lambert_pars_fragment:gp,lights_pars_begin:_p,lights_toon_fragment:vp,lights_toon_pars_fragment:Mp,lights_phong_fragment:yp,lights_phong_pars_fragment:Sp,lights_physical_fragment:bp,lights_physical_pars_fragment:wp,lights_fragment_begin:Ep,lights_fragment_maps:Tp,lights_fragment_end:Ap,logdepthbuf_fragment:Rp,logdepthbuf_pars_fragment:Cp,logdepthbuf_pars_vertex:Pp,logdepthbuf_vertex:Lp,map_fragment:Ip,map_pars_fragment:Dp,map_particle_fragment:Up,map_particle_pars_fragment:Np,metalnessmap_fragment:Fp,metalnessmap_pars_fragment:Op,morphinstance_vertex:zp,morphcolor_vertex:Bp,morphnormal_vertex:kp,morphtarget_pars_vertex:Hp,morphtarget_vertex:Gp,normal_fragment_begin:Vp,normal_fragment_maps:Wp,normal_pars_fragment:Xp,normal_pars_vertex:qp,normal_vertex:Yp,normalmap_pars_fragment:$p,clearcoat_normal_fragment_begin:Kp,clearcoat_normal_fragment_maps:Zp,clearcoat_pars_fragment:Jp,iridescence_pars_fragment:jp,opaque_fragment:Qp,packing:tm,premultiplied_alpha_fragment:em,project_vertex:nm,dithering_fragment:im,dithering_pars_fragment:sm,roughnessmap_fragment:rm,roughnessmap_pars_fragment:om,shadowmap_pars_fragment:am,shadowmap_pars_vertex:cm,shadowmap_vertex:lm,shadowmask_pars_fragment:hm,skinbase_vertex:um,skinning_pars_vertex:fm,skinning_vertex:dm,skinnormal_vertex:pm,specularmap_fragment:mm,specularmap_pars_fragment:gm,tonemapping_fragment:_m,tonemapping_pars_fragment:xm,transmission_fragment:vm,transmission_pars_fragment:Mm,uv_pars_fragment:ym,uv_pars_vertex:Sm,uv_vertex:bm,worldpos_vertex:wm,background_vert:Em,background_frag:Tm,backgroundCube_vert:Am,backgroundCube_frag:Rm,cube_vert:Cm,cube_frag:Pm,depth_vert:Lm,depth_frag:Im,distanceRGBA_vert:Dm,distanceRGBA_frag:Um,equirect_vert:Nm,equirect_frag:Fm,linedashed_vert:Om,linedashed_frag:zm,meshbasic_vert:Bm,meshbasic_frag:km,meshlambert_vert:Hm,meshlambert_frag:Gm,meshmatcap_vert:Vm,meshmatcap_frag:Wm,meshnormal_vert:Xm,meshnormal_frag:qm,meshphong_vert:Ym,meshphong_frag:$m,meshphysical_vert:Km,meshphysical_frag:Zm,meshtoon_vert:Jm,meshtoon_frag:jm,points_vert:Qm,points_frag:t0,shadow_vert:e0,shadow_frag:n0,sprite_vert:i0,sprite_frag:s0},St={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},ln={basic:{uniforms:De([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:De([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:De([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:De([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:De([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:De([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:De([St.points,St.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:De([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:De([St.common,St.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:De([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:De([St.sprite,St.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:De([St.common,St.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:De([St.lights,St.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};ln.physical={uniforms:De([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const or={r:0,b:0,g:0},Jn=new Le,r0=new Jt;function o0(i,t,e,n,s,r,o){const a=new Gt(0);let c=r===!0?0:1,l,h,u=null,p=0,d=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function _(M){let v=!1;const A=g(M);A===null?f(a,c):A&&A.isColor&&(f(A,1),v=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,v){const A=g(v);A&&(A.isCubeTexture||A.mapping===Lr)?(h===void 0&&(h=new Ne(new Xe(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:qi(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Jn.copy(v.backgroundRotation),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(r0.makeRotationFromEuler(Jn)),h.material.toneMapped=ee.getTransfer(A.colorSpace)!==ae,(u!==A||p!==A.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,p=A.version,d=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Ne(new Cs(2,2),new sn({name:"BackgroundMaterial",uniforms:qi(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ee.getTransfer(A.colorSpace)!==ae,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||p!==A.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=A,p=A.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function f(M,v){M.getRGB(or,eh(i)),n.buffers.color.setClear(or.r,or.g,or.b,v,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),c=v,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,f(a,c)},render:_,addToRenderList:m,dispose:y}}function a0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,o=!1;function a(x,T,P,F,N){let D=!1;const O=u(F,P,T);r!==O&&(r=O,l(r.object)),D=d(x,F,P,N),D&&g(x,F,P,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,v(x,T,P,F),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,T,P){const F=P.wireframe===!0;let N=n[x.id];N===void 0&&(N={},n[x.id]=N);let D=N[T.id];D===void 0&&(D={},N[T.id]=D);let O=D[F];return O===void 0&&(O=p(c()),D[F]=O),O}function p(x){const T=[],P=[],F=[];for(let N=0;N<e;N++)T[N]=0,P[N]=0,F[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:P,attributeDivisors:F,object:x,attributes:{},index:null}}function d(x,T,P,F){const N=r.attributes,D=T.attributes;let O=0;const H=P.getAttributes();for(const B in H)if(H[B].location>=0){const rt=N[B];let pt=D[B];if(pt===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(pt=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(pt=x.instanceColor)),rt===void 0||rt.attribute!==pt||pt&&rt.data!==pt.data)return!0;O++}return r.attributesNum!==O||r.index!==F}function g(x,T,P,F){const N={},D=T.attributes;let O=0;const H=P.getAttributes();for(const B in H)if(H[B].location>=0){let rt=D[B];rt===void 0&&(B==="instanceMatrix"&&x.instanceMatrix&&(rt=x.instanceMatrix),B==="instanceColor"&&x.instanceColor&&(rt=x.instanceColor));const pt={};pt.attribute=rt,rt&&rt.data&&(pt.data=rt.data),N[B]=pt,O++}r.attributes=N,r.attributesNum=O,r.index=F}function _(){const x=r.newAttributes;for(let T=0,P=x.length;T<P;T++)x[T]=0}function m(x){f(x,0)}function f(x,T){const P=r.newAttributes,F=r.enabledAttributes,N=r.attributeDivisors;P[x]=1,F[x]===0&&(i.enableVertexAttribArray(x),F[x]=1),N[x]!==T&&(i.vertexAttribDivisor(x,T),N[x]=T)}function y(){const x=r.newAttributes,T=r.enabledAttributes;for(let P=0,F=T.length;P<F;P++)T[P]!==x[P]&&(i.disableVertexAttribArray(P),T[P]=0)}function M(x,T,P,F,N,D,O){O===!0?i.vertexAttribIPointer(x,T,P,N,D):i.vertexAttribPointer(x,T,P,F,N,D)}function v(x,T,P,F){_();const N=F.attributes,D=P.getAttributes(),O=T.defaultAttributeValues;for(const H in D){const B=D[H];if(B.location>=0){let Z=N[H];if(Z===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(Z=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(Z=x.instanceColor)),Z!==void 0){const rt=Z.normalized,pt=Z.itemSize,yt=t.get(Z);if(yt===void 0)continue;const ft=yt.buffer,Mt=yt.type,it=yt.bytesPerElement,V=Mt===i.INT||Mt===i.UNSIGNED_INT||Z.gpuType===wa;if(Z.isInterleavedBufferAttribute){const X=Z.data,st=X.stride,mt=Z.offset;if(X.isInstancedInterleavedBuffer){for(let gt=0;gt<B.locationSize;gt++)f(B.location+gt,X.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let gt=0;gt<B.locationSize;gt++)m(B.location+gt);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let gt=0;gt<B.locationSize;gt++)M(B.location+gt,pt/B.locationSize,Mt,rt,st*it,(mt+pt/B.locationSize*gt)*it,V)}else{if(Z.isInstancedBufferAttribute){for(let X=0;X<B.locationSize;X++)f(B.location+X,Z.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let X=0;X<B.locationSize;X++)m(B.location+X);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let X=0;X<B.locationSize;X++)M(B.location+X,pt/B.locationSize,Mt,rt,pt*it,pt/B.locationSize*X*it,V)}}else if(O!==void 0){const rt=O[H];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(B.location,rt);break;case 3:i.vertexAttrib3fv(B.location,rt);break;case 4:i.vertexAttrib4fv(B.location,rt);break;default:i.vertexAttrib1fv(B.location,rt)}}}}y()}function A(){L();for(const x in n){const T=n[x];for(const P in T){const F=T[P];for(const N in F)h(F[N].object),delete F[N];delete T[P]}delete n[x]}}function E(x){if(n[x.id]===void 0)return;const T=n[x.id];for(const P in T){const F=T[P];for(const N in F)h(F[N].object),delete F[N];delete T[P]}delete n[x.id]}function R(x){for(const T in n){const P=n[T];if(P[x.id]===void 0)continue;const F=P[x.id];for(const N in F)h(F[N].object),delete F[N];delete P[x.id]}}function L(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function c0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function c(l,h,u,p){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],p[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*p[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function l0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==en&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const L=R===Rs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==pn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==un&&!L)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:A,maxSamples:E}}function h0(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Qn,a=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const d=u.length!==0||p||n!==0||s;return s=p,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){e=h(u,p,0)},this.setState=function(u,p,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const y=r?0:n,M=y*4;let v=f.clippingState||null;c.value=v,v=h(g,p,M,d);for(let A=0;A!==M;++A)v[A]=e[A];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,p,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=d+_*4,y=p.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,v=d;M!==_;++M,v+=4)o.copy(u[M]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function u0(i){let t=new WeakMap;function e(o,a){return a===zo?o.mapping=Vi:a===Bo&&(o.mapping=Wi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===zo||a===Bo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Af(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Fi=4,Yc=[.125,.215,.35,.446,.526,.582],ni=20,go=new vh,$c=new Gt;let _o=null,xo=0,vo=0,Mo=!1;const ti=(1+Math.sqrt(5))/2,Ri=1/ti,Kc=[new U(-ti,Ri,0),new U(ti,Ri,0),new U(-Ri,0,ti),new U(Ri,0,ti),new U(0,ti,-Ri),new U(0,ti,Ri),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],f0=new U;class Zc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=f0}=r;_o=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),Mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_o,xo,vo),this._renderer.xr.enabled=Mo,t.scissorTest=!1,ar(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vi||t.mapping===Wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_o=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),Mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Rs,format:en,colorSpace:Xi,depthBuffer:!1},s=Jc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=d0(r)),this._blurMaterial=p0(r,t,e)}return s}_compileMaterial(t){const e=new Ne(this._lodPlanes[0],t);this._renderer.compile(e,go)}_sceneToCubeUV(t,e,n,s,r){const c=new Ze(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,d=u.toneMapping;u.getClearColor($c),u.toneMapping=Hn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new jl({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),m=new Ne(new Xe,_);let f=!1;const y=t.background;y?y.isColor&&(_.color.copy(y),t.background=null,f=!0):(_.color.copy($c),f=!0);for(let M=0;M<6;M++){const v=M%3;v===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[M],r.y,r.z)):v===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[M]));const A=this._cubeSize;ar(s,v*A,M>2?A:0,A,A),u.setRenderTarget(s),f&&u.render(m,c),u.render(t,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=p,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Vi||t.mapping===Wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ne(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;ar(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,go)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Kc[(s-r-1)%Kc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ne(this._lodPlanes[s],l),p=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ni-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ni;m>ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ni}`);const f=[];let y=0;for(let R=0;R<ni;++R){const L=R/_,S=Math.exp(-L*L/2);f.push(S),R===0?y+=S:R<m&&(y+=2*S)}for(let R=0;R<f.length;R++)f[R]=f[R]/y;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:M}=this;p.dTheta.value=g,p.mipInt.value=M-n;const v=this._sizeLods[s],A=3*v*(s>M-Fi?s-M+Fi:0),E=4*(this._cubeSize-v);ar(e,A,E,3*v,2*v),c.setRenderTarget(e),c.render(u,go)}}function d0(i){const t=[],e=[],n=[];let s=i;const r=i-Fi+1+Yc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Fi?c=Yc[o-i+Fi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,p=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,f=1,y=new Float32Array(_*g*d),M=new Float32Array(m*g*d),v=new Float32Array(f*g*d);for(let E=0;E<d;E++){const R=E%3*2/3-1,L=E>2?0:-1,S=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];y.set(S,_*g*E),M.set(p,m*g*E);const x=[E,E,E,E,E,E];v.set(x,f*g*E)}const A=new ge;A.setAttribute("position",new ce(y,_)),A.setAttribute("uv",new ce(M,m)),A.setAttribute("faceIndex",new ce(v,f)),t.push(A),s>Fi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Jc(i,t,e){const n=new ai(i,t,e);return n.texture.mapping=Lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ar(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function p0(i,t,e){const n=new Float32Array(ni),s=new U(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function jc(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Qc(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Wa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function m0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===zo||c===Bo,h=c===Vi||c===Wi;if(l||h){let u=t.get(a);const p=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Zc(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Zc(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function g0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ss("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _0(i,t,e,n){const s={},r=new WeakMap;function o(u){const p=u.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete s[p.id];const d=r.get(p);d&&(t.remove(d),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function c(u){const p=u.attributes;for(const d in p)t.update(p[d],i.ARRAY_BUFFER)}function l(u){const p=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let M=0,v=y.length;M<v;M+=3){const A=y[M+0],E=y[M+1],R=y[M+2];p.push(A,E,E,R,R,A)}}else if(g!==void 0){const y=g.array;_=g.version;for(let M=0,v=y.length/3-1;M<v;M+=3){const A=M+0,E=M+1,R=M+2;p.push(A,E,E,R,R,A)}}else return;const m=new($l(p)?th:Ql)(p,1);m.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const p=r.get(u);if(p){const d=u.index;d!==null&&p.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function x0(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function c(p,d){i.drawElements(n,d,r,p*o),e.update(d,n,1)}function l(p,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,p*o,g),e.update(d,n,g))}function h(p,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,g);let m=0;for(let f=0;f<g;f++)m+=d[f];e.update(m,n,1)}function u(p,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)l(p[f]/o,d[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,p,0,_,0,g);let f=0;for(let y=0;y<g;y++)f+=d[y]*_[y];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function v0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function M0(i,t,e){const n=new WeakMap,s=new xe;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let p=n.get(a);if(p===void 0||p.count!==u){let S=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",S)};p!==void 0&&p.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let M=0;d===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let v=a.attributes.position.count*M,A=1;v>t.maxTextureSize&&(A=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const E=new Float32Array(v*A*4*u),R=new Kl(E,v,A,u);R.type=un,R.needsUpdate=!0;const L=M*4;for(let x=0;x<u;x++){const T=m[x],P=f[x],F=y[x],N=v*A*4*x;for(let D=0;D<T.count;D++){const O=D*L;d===!0&&(s.fromBufferAttribute(T,D),E[N+O+0]=s.x,E[N+O+1]=s.y,E[N+O+2]=s.z,E[N+O+3]=0),g===!0&&(s.fromBufferAttribute(P,D),E[N+O+4]=s.x,E[N+O+5]=s.y,E[N+O+6]=s.z,E[N+O+7]=0),_===!0&&(s.fromBufferAttribute(F,D),E[N+O+8]=s.x,E[N+O+9]=s.y,E[N+O+10]=s.z,E[N+O+11]=F.itemSize===4?s.w:1)}}p={count:u,texture:R,size:new dt(v,A)},n.set(a,p),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];const g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function y0(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const yh=new Oe,tl=new rh(1,1),Sh=new Kl,bh=new hf,wh=new ih,el=[],nl=[],il=new Float32Array(16),sl=new Float32Array(9),rl=new Float32Array(4);function ji(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=el[s];if(r===void 0&&(r=new Float32Array(s),el[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Se(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Nr(i,t){let e=nl[t];e===void 0&&(e=new Int32Array(t),nl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function S0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function b0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),Se(e,t)}}function w0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),Se(e,t)}}function E0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),Se(e,t)}}function T0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;rl.set(n),i.uniformMatrix2fv(this.addr,!1,rl),Se(e,n)}}function A0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;sl.set(n),i.uniformMatrix3fv(this.addr,!1,sl),Se(e,n)}}function R0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;il.set(n),i.uniformMatrix4fv(this.addr,!1,il),Se(e,n)}}function C0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function P0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),Se(e,t)}}function L0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),Se(e,t)}}function I0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),Se(e,t)}}function D0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function U0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),Se(e,t)}}function N0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),Se(e,t)}}function F0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),Se(e,t)}}function O0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(tl.compareFunction=Yl,r=tl):r=yh,e.setTexture2D(t||r,s)}function z0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||bh,s)}function B0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||wh,s)}function k0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Sh,s)}function H0(i){switch(i){case 5126:return S0;case 35664:return b0;case 35665:return w0;case 35666:return E0;case 35674:return T0;case 35675:return A0;case 35676:return R0;case 5124:case 35670:return C0;case 35667:case 35671:return P0;case 35668:case 35672:return L0;case 35669:case 35673:return I0;case 5125:return D0;case 36294:return U0;case 36295:return N0;case 36296:return F0;case 35678:case 36198:case 36298:case 36306:case 35682:return O0;case 35679:case 36299:case 36307:return z0;case 35680:case 36300:case 36308:case 36293:return B0;case 36289:case 36303:case 36311:case 36292:return k0}}function G0(i,t){i.uniform1fv(this.addr,t)}function V0(i,t){const e=ji(t,this.size,2);i.uniform2fv(this.addr,e)}function W0(i,t){const e=ji(t,this.size,3);i.uniform3fv(this.addr,e)}function X0(i,t){const e=ji(t,this.size,4);i.uniform4fv(this.addr,e)}function q0(i,t){const e=ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Y0(i,t){const e=ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function $0(i,t){const e=ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function K0(i,t){i.uniform1iv(this.addr,t)}function Z0(i,t){i.uniform2iv(this.addr,t)}function J0(i,t){i.uniform3iv(this.addr,t)}function j0(i,t){i.uniform4iv(this.addr,t)}function Q0(i,t){i.uniform1uiv(this.addr,t)}function tg(i,t){i.uniform2uiv(this.addr,t)}function eg(i,t){i.uniform3uiv(this.addr,t)}function ng(i,t){i.uniform4uiv(this.addr,t)}function ig(i,t,e){const n=this.cache,s=t.length,r=Nr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||yh,r[o])}function sg(i,t,e){const n=this.cache,s=t.length,r=Nr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||bh,r[o])}function rg(i,t,e){const n=this.cache,s=t.length,r=Nr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||wh,r[o])}function og(i,t,e){const n=this.cache,s=t.length,r=Nr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Sh,r[o])}function ag(i){switch(i){case 5126:return G0;case 35664:return V0;case 35665:return W0;case 35666:return X0;case 35674:return q0;case 35675:return Y0;case 35676:return $0;case 5124:case 35670:return K0;case 35667:case 35671:return Z0;case 35668:case 35672:return J0;case 35669:case 35673:return j0;case 5125:return Q0;case 36294:return tg;case 36295:return eg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return og}}class cg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=H0(e.type)}}class lg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ag(e.type)}}class hg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const yo=/(\w+)(\])?(\[|\.)?/g;function ol(i,t){i.seq.push(t),i.map[t.id]=t}function ug(i,t,e){const n=i.name,s=n.length;for(yo.lastIndex=0;;){const r=yo.exec(n),o=yo.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ol(e,l===void 0?new cg(a,i,t):new lg(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new hg(a),ol(e,u)),e=u}}}class vr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);ug(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function al(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const fg=37297;let dg=0;function pg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const cl=new qt;function mg(i){ee._getMatrix(cl,ee.workingColorSpace,i);const t=`mat3( ${cl.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case yr:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ll(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+pg(i.getShaderSource(t),a)}else return r}function gg(i,t){const e=mg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function _g(i,t){let e;switch(t){case zu:e="Linear";break;case Bu:e="Reinhard";break;case ku:e="Cineon";break;case zl:e="ACESFilmic";break;case Gu:e="AgX";break;case Vu:e="Neutral";break;case Hu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const cr=new U;function xg(){ee.getLuminanceCoefficients(cr);const i=cr.x.toFixed(4),t=cr.y.toFixed(4),e=cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ps).join(`
`)}function Mg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function yg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ps(i){return i!==""}function hl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ul(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Sg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ma(i){return i.replace(Sg,wg)}const bg=new Map;function wg(i,t){let e=Yt[t];if(e===void 0){const n=bg.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ma(e)}const Eg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fl(i){return i.replace(Eg,Tg)}function Tg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ag(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ol?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===bn&&(t="SHADOWMAP_TYPE_VSM"),t}function Rg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Vi:case Wi:t="ENVMAP_TYPE_CUBE";break;case Lr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Wi&&(t="ENVMAP_MODE_REFRACTION"),t}function Pg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Pr:t="ENVMAP_BLENDING_MULTIPLY";break;case Fu:t="ENVMAP_BLENDING_MIX";break;case Ou:t="ENVMAP_BLENDING_ADD";break}return t}function Lg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ig(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Ag(e),l=Rg(e),h=Cg(e),u=Pg(e),p=Lg(e),d=vg(e),g=Mg(r),_=s.createProgram();let m,f,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ps).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ps).join(`
`),f.length>0&&(f+=`
`)):(m=[dl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),f=[dl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hn?"#define TONE_MAPPING":"",e.toneMapping!==Hn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Hn?_g("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,gg("linearToOutputTexel",e.outputColorSpace),xg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ps).join(`
`)),o=Ma(o),o=hl(o,e),o=ul(o,e),a=Ma(a),a=hl(a,e),a=ul(a,e),o=fl(o),a=fl(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=y+m+o,v=y+f+a,A=al(s,s.VERTEX_SHADER,M),E=al(s,s.FRAGMENT_SHADER,v);s.attachShader(_,A),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(T){if(i.debug.checkShaderErrors){const P=s.getProgramInfoLog(_)||"",F=s.getShaderInfoLog(A)||"",N=s.getShaderInfoLog(E)||"",D=P.trim(),O=F.trim(),H=N.trim();let B=!0,Z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,E);else{const rt=ll(s,A,"vertex"),pt=ll(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+D+`
`+rt+`
`+pt)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(O===""||H==="")&&(Z=!1);Z&&(T.diagnostics={runnable:B,programLog:D,vertexShader:{log:O,prefix:m},fragmentShader:{log:H,prefix:f}})}s.deleteShader(A),s.deleteShader(E),L=new vr(s,_),S=yg(s,_)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,fg)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=E,this}let Dg=0;class Ug{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ng(t),e.set(t,n)),n}}class Ng{constructor(t){this.id=Dg++,this.code=t,this.usedTimes=0}}function Fg(i,t,e,n,s,r,o){const a=new Zl,c=new Ug,l=new Set,h=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,x,T,P,F){const N=P.fog,D=F.geometry,O=S.isMeshStandardMaterial?P.environment:null,H=(S.isMeshStandardMaterial?e:t).get(S.envMap||O),B=H&&H.mapping===Lr?H.image.height:null,Z=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const rt=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,pt=rt!==void 0?rt.length:0;let yt=0;D.morphAttributes.position!==void 0&&(yt=1),D.morphAttributes.normal!==void 0&&(yt=2),D.morphAttributes.color!==void 0&&(yt=3);let ft,Mt,it,V;if(Z){const ne=ln[Z];ft=ne.vertexShader,Mt=ne.fragmentShader}else ft=S.vertexShader,Mt=S.fragmentShader,c.update(S),it=c.getVertexShaderID(S),V=c.getFragmentShaderID(S);const X=i.getRenderTarget(),st=i.state.buffers.depth.getReversed(),mt=F.isInstancedMesh===!0,gt=F.isBatchedMesh===!0,Ot=!!S.map,jt=!!S.matcap,I=!!H,et=!!S.aoMap,Q=!!S.lightMap,J=!!S.bumpMap,j=!!S.normalMap,_t=!!S.displacementMap,ot=!!S.emissiveMap,xt=!!S.metalnessMap,Vt=!!S.roughnessMap,Ht=S.anisotropy>0,C=S.clearcoat>0,b=S.dispersion>0,W=S.iridescence>0,$=S.sheen>0,nt=S.transmission>0,K=Ht&&!!S.anisotropyMap,It=C&&!!S.clearcoatMap,ut=C&&!!S.clearcoatNormalMap,Ct=C&&!!S.clearcoatRoughnessMap,Pt=W&&!!S.iridescenceMap,at=W&&!!S.iridescenceThicknessMap,Et=$&&!!S.sheenColorMap,Bt=$&&!!S.sheenRoughnessMap,Dt=!!S.specularMap,bt=!!S.specularColorMap,Xt=!!S.specularIntensityMap,z=nt&&!!S.transmissionMap,ht=nt&&!!S.thicknessMap,vt=!!S.gradientMap,At=!!S.alphaMap,ct=S.alphaTest>0,tt=!!S.alphaHash,Lt=!!S.extensions;let Wt=Hn;S.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Wt=i.toneMapping);const he={shaderID:Z,shaderType:S.type,shaderName:S.name,vertexShader:ft,fragmentShader:Mt,defines:S.defines,customVertexShaderID:it,customFragmentShaderID:V,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:gt,batchingColor:gt&&F._colorsTexture!==null,instancing:mt,instancingColor:mt&&F.instanceColor!==null,instancingMorph:mt&&F.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:X===null?i.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Xi,alphaToCoverage:!!S.alphaToCoverage,map:Ot,matcap:jt,envMap:I,envMapMode:I&&H.mapping,envMapCubeUVHeight:B,aoMap:et,lightMap:Q,bumpMap:J,normalMap:j,displacementMap:p&&_t,emissiveMap:ot,normalMapObjectSpace:j&&S.normalMapType===Yu,normalMapTangentSpace:j&&S.normalMapType===La,metalnessMap:xt,roughnessMap:Vt,anisotropy:Ht,anisotropyMap:K,clearcoat:C,clearcoatMap:It,clearcoatNormalMap:ut,clearcoatRoughnessMap:Ct,dispersion:b,iridescence:W,iridescenceMap:Pt,iridescenceThicknessMap:at,sheen:$,sheenColorMap:Et,sheenRoughnessMap:Bt,specularMap:Dt,specularColorMap:bt,specularIntensityMap:Xt,transmission:nt,transmissionMap:z,thicknessMap:ht,gradientMap:vt,opaque:S.transparent===!1&&S.blending===Bi&&S.alphaToCoverage===!1,alphaMap:At,alphaTest:ct,alphaHash:tt,combine:S.combine,mapUv:Ot&&_(S.map.channel),aoMapUv:et&&_(S.aoMap.channel),lightMapUv:Q&&_(S.lightMap.channel),bumpMapUv:J&&_(S.bumpMap.channel),normalMapUv:j&&_(S.normalMap.channel),displacementMapUv:_t&&_(S.displacementMap.channel),emissiveMapUv:ot&&_(S.emissiveMap.channel),metalnessMapUv:xt&&_(S.metalnessMap.channel),roughnessMapUv:Vt&&_(S.roughnessMap.channel),anisotropyMapUv:K&&_(S.anisotropyMap.channel),clearcoatMapUv:It&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ut&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:at&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&_(S.sheenRoughnessMap.channel),specularMapUv:Dt&&_(S.specularMap.channel),specularColorMapUv:bt&&_(S.specularColorMap.channel),specularIntensityMapUv:Xt&&_(S.specularIntensityMap.channel),transmissionMapUv:z&&_(S.transmissionMap.channel),thicknessMapUv:ht&&_(S.thicknessMap.channel),alphaMapUv:At&&_(S.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(j||Ht),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!D.attributes.uv&&(Ot||At),fog:!!N,useFog:S.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:st,skinning:F.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:yt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:Ot&&S.map.isVideoTexture===!0&&ee.getTransfer(S.map.colorSpace)===ae,decodeVideoTextureEmissive:ot&&S.emissiveMap.isVideoTexture===!0&&ee.getTransfer(S.emissiveMap.colorSpace)===ae,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Tn,flipSided:S.side===Fe,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Lt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&S.extensions.multiDraw===!0||gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return he.vertexUv1s=l.has(1),he.vertexUv2s=l.has(2),he.vertexUv3s=l.has(3),l.clear(),he}function f(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const T in S.defines)x.push(T),x.push(S.defines[T]);return S.isRawShaderMaterial===!1&&(y(x,S),M(x,S),x.push(i.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function y(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function M(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const x=g[S.type];let T;if(x){const P=ln[x];T=bf.clone(P.uniforms)}else T=S.uniforms;return T}function A(S,x){let T;for(let P=0,F=h.length;P<F;P++){const N=h[P];if(N.cacheKey===x){T=N,++T.usedTimes;break}}return T===void 0&&(T=new Ig(i,x,S,r),h.push(T)),T}function E(S){if(--S.usedTimes===0){const x=h.indexOf(S);h[x]=h[h.length-1],h.pop(),S.destroy()}}function R(S){c.remove(S)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:A,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:L}}function Og(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function zg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function pl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ml(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,p,d,g,_,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:p,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=d,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function a(u,p,d,g,_,m){const f=o(u,p,d,g,_,m);d.transmission>0?n.push(f):d.transparent===!0?s.push(f):e.push(f)}function c(u,p,d,g,_,m){const f=o(u,p,d,g,_,m);d.transmission>0?n.unshift(f):d.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,p){e.length>1&&e.sort(u||zg),n.length>1&&n.sort(p||pl),s.length>1&&s.sort(p||pl)}function h(){for(let u=t,p=i.length;u<p;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Bg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new ml,i.set(n,[o])):s>=r.length?(o=new ml,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function kg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Gt};break;case"SpotLight":e={position:new U,direction:new U,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Hg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Gg=0;function Vg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Wg(i){const t=new kg,e=Hg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const s=new U,r=new Jt,o=new Jt;function a(l){let h=0,u=0,p=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,_=0,m=0,f=0,y=0,M=0,v=0,A=0,E=0,R=0;l.sort(Vg);for(let S=0,x=l.length;S<x;S++){const T=l[S],P=T.color,F=T.intensity,N=T.distance,D=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=P.r*F,u+=P.g*F,p+=P.b*F;else if(T.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(T.sh.coefficients[O],F);R++}else if(T.isDirectionalLight){const O=t.get(T);if(O.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const H=T.shadow,B=e.get(T);B.shadowIntensity=H.intensity,B.shadowBias=H.bias,B.shadowNormalBias=H.normalBias,B.shadowRadius=H.radius,B.shadowMapSize=H.mapSize,n.directionalShadow[d]=B,n.directionalShadowMap[d]=D,n.directionalShadowMatrix[d]=T.shadow.matrix,y++}n.directional[d]=O,d++}else if(T.isSpotLight){const O=t.get(T);O.position.setFromMatrixPosition(T.matrixWorld),O.color.copy(P).multiplyScalar(F),O.distance=N,O.coneCos=Math.cos(T.angle),O.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),O.decay=T.decay,n.spot[_]=O;const H=T.shadow;if(T.map&&(n.spotLightMap[A]=T.map,A++,H.updateMatrices(T),T.castShadow&&E++),n.spotLightMatrix[_]=H.matrix,T.castShadow){const B=e.get(T);B.shadowIntensity=H.intensity,B.shadowBias=H.bias,B.shadowNormalBias=H.normalBias,B.shadowRadius=H.radius,B.shadowMapSize=H.mapSize,n.spotShadow[_]=B,n.spotShadowMap[_]=D,v++}_++}else if(T.isRectAreaLight){const O=t.get(T);O.color.copy(P).multiplyScalar(F),O.halfWidth.set(T.width*.5,0,0),O.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=O,m++}else if(T.isPointLight){const O=t.get(T);if(O.color.copy(T.color).multiplyScalar(T.intensity),O.distance=T.distance,O.decay=T.decay,T.castShadow){const H=T.shadow,B=e.get(T);B.shadowIntensity=H.intensity,B.shadowBias=H.bias,B.shadowNormalBias=H.normalBias,B.shadowRadius=H.radius,B.shadowMapSize=H.mapSize,B.shadowCameraNear=H.camera.near,B.shadowCameraFar=H.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=D,n.pointShadowMatrix[g]=T.shadow.matrix,M++}n.point[g]=O,g++}else if(T.isHemisphereLight){const O=t.get(T);O.skyColor.copy(T.color).multiplyScalar(F),O.groundColor.copy(T.groundColor).multiplyScalar(F),n.hemi[f]=O,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;const L=n.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==y||L.numPointShadows!==M||L.numSpotShadows!==v||L.numSpotMaps!==A||L.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,L.directionalLength=d,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=y,L.numPointShadows=M,L.numSpotShadows=v,L.numSpotMaps=A,L.numLightProbes=R,n.version=Gg++)}function c(l,h){let u=0,p=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,y=l.length;f<y;f++){const M=l[f];if(M.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(M.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const v=n.point[p];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),p++}else if(M.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function gl(i){const t=new Wg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Xg(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new gl(i),t.set(s,[a])):r>=o.length?(a=new gl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const qg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $g(i,t,e){let n=new Na;const s=new dt,r=new dt,o=new xe,a=new _d({depthPacking:qu}),c=new xd,l={},h=e.maxTextureSize,u={[Gn]:Fe,[Fe]:Gn,[Tn]:Tn},p=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:qg,fragmentShader:Yg}),d=p.clone();d.defines.HORIZONTAL_PASS=1;const g=new ge;g.setAttribute("position",new ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ne(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fl;let f=this.type;this.render=function(E,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=i.getRenderTarget(),x=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),P=i.state;P.setBlending(kn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const F=f!==bn&&this.type===bn,N=f===bn&&this.type!==bn;for(let D=0,O=E.length;D<O;D++){const H=E[D],B=H.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const Z=B.getFrameExtents();if(s.multiply(Z),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,B.mapSize.y=r.y)),B.map===null||F===!0||N===!0){const pt=this.type!==bn?{minFilter:qe,magFilter:qe}:{};B.map!==null&&B.map.dispose(),B.map=new ai(s.x,s.y,pt),B.map.texture.name=H.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const rt=B.getViewportCount();for(let pt=0;pt<rt;pt++){const yt=B.getViewport(pt);o.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),P.viewport(o),B.updateMatrices(H,pt),n=B.getFrustum(),v(R,L,B.camera,H,this.type)}B.isPointLightShadow!==!0&&this.type===bn&&y(B,L),B.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(S,x,T)};function y(E,R){const L=t.update(_);p.defines.VSM_SAMPLES!==E.blurSamples&&(p.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ai(s.x,s.y)),p.uniforms.shadow_pass.value=E.map.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,L,p,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,L,d,_,null)}function M(E,R,L,S){let x=null;const T=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(T!==void 0)x=T;else if(x=L.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const P=x.uuid,F=R.uuid;let N=l[P];N===void 0&&(N={},l[P]=N);let D=N[F];D===void 0&&(D=x.clone(),N[F]=D,R.addEventListener("dispose",A)),x=D}if(x.visible=R.visible,x.wireframe=R.wireframe,S===bn?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:u[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const P=i.properties.get(x);P.light=L}return x}function v(E,R,L,S,x){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===bn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);const F=t.update(E),N=E.material;if(Array.isArray(N)){const D=F.groups;for(let O=0,H=D.length;O<H;O++){const B=D[O],Z=N[B.materialIndex];if(Z&&Z.visible){const rt=M(E,Z,S,x);E.onBeforeShadow(i,E,R,L,F,rt,B),i.renderBufferDirect(L,null,F,rt,E,B),E.onAfterShadow(i,E,R,L,F,rt,B)}}}else if(N.visible){const D=M(E,N,S,x);E.onBeforeShadow(i,E,R,L,F,D,null),i.renderBufferDirect(L,null,F,D,E,null),E.onAfterShadow(i,E,R,L,F,D,null)}}const P=E.children;for(let F=0,N=P.length;F<N;F++)v(P[F],R,L,S,x)}function A(E){E.target.removeEventListener("dispose",A);for(const L in l){const S=l[L],x=E.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const Kg={[Lo]:Io,[Do]:Fo,[Uo]:Oo,[Gi]:No,[Io]:Lo,[Fo]:Do,[Oo]:Uo,[No]:Gi};function Zg(i,t){function e(){let z=!1;const ht=new xe;let vt=null;const At=new xe(0,0,0,0);return{setMask:function(ct){vt!==ct&&!z&&(i.colorMask(ct,ct,ct,ct),vt=ct)},setLocked:function(ct){z=ct},setClear:function(ct,tt,Lt,Wt,he){he===!0&&(ct*=Wt,tt*=Wt,Lt*=Wt),ht.set(ct,tt,Lt,Wt),At.equals(ht)===!1&&(i.clearColor(ct,tt,Lt,Wt),At.copy(ht))},reset:function(){z=!1,vt=null,At.set(-1,0,0,0)}}}function n(){let z=!1,ht=!1,vt=null,At=null,ct=null;return{setReversed:function(tt){if(ht!==tt){const Lt=t.get("EXT_clip_control");tt?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),ht=tt;const Wt=ct;ct=null,this.setClear(Wt)}},getReversed:function(){return ht},setTest:function(tt){tt?X(i.DEPTH_TEST):st(i.DEPTH_TEST)},setMask:function(tt){vt!==tt&&!z&&(i.depthMask(tt),vt=tt)},setFunc:function(tt){if(ht&&(tt=Kg[tt]),At!==tt){switch(tt){case Lo:i.depthFunc(i.NEVER);break;case Io:i.depthFunc(i.ALWAYS);break;case Do:i.depthFunc(i.LESS);break;case Gi:i.depthFunc(i.LEQUAL);break;case Uo:i.depthFunc(i.EQUAL);break;case No:i.depthFunc(i.GEQUAL);break;case Fo:i.depthFunc(i.GREATER);break;case Oo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}At=tt}},setLocked:function(tt){z=tt},setClear:function(tt){ct!==tt&&(ht&&(tt=1-tt),i.clearDepth(tt),ct=tt)},reset:function(){z=!1,vt=null,At=null,ct=null,ht=!1}}}function s(){let z=!1,ht=null,vt=null,At=null,ct=null,tt=null,Lt=null,Wt=null,he=null;return{setTest:function(ne){z||(ne?X(i.STENCIL_TEST):st(i.STENCIL_TEST))},setMask:function(ne){ht!==ne&&!z&&(i.stencilMask(ne),ht=ne)},setFunc:function(ne,_n,rn){(vt!==ne||At!==_n||ct!==rn)&&(i.stencilFunc(ne,_n,rn),vt=ne,At=_n,ct=rn)},setOp:function(ne,_n,rn){(tt!==ne||Lt!==_n||Wt!==rn)&&(i.stencilOp(ne,_n,rn),tt=ne,Lt=_n,Wt=rn)},setLocked:function(ne){z=ne},setClear:function(ne){he!==ne&&(i.clearStencil(ne),he=ne)},reset:function(){z=!1,ht=null,vt=null,At=null,ct=null,tt=null,Lt=null,Wt=null,he=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},p=new WeakMap,d=[],g=null,_=!1,m=null,f=null,y=null,M=null,v=null,A=null,E=null,R=new Gt(0,0,0),L=0,S=!1,x=null,T=null,P=null,F=null,N=null;const D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,H=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(B)[1]),O=H>=1):B.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),O=H>=2);let Z=null,rt={};const pt=i.getParameter(i.SCISSOR_BOX),yt=i.getParameter(i.VIEWPORT),ft=new xe().fromArray(pt),Mt=new xe().fromArray(yt);function it(z,ht,vt,At){const ct=new Uint8Array(4),tt=i.createTexture();i.bindTexture(z,tt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<vt;Lt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,At,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(ht+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return tt}const V={};V[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),V[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),V[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),X(i.DEPTH_TEST),o.setFunc(Gi),J(!1),j(ac),X(i.CULL_FACE),et(kn);function X(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function st(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function mt(z,ht){return u[z]!==ht?(i.bindFramebuffer(z,ht),u[z]=ht,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ht),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function gt(z,ht){let vt=d,At=!1;if(z){vt=p.get(ht),vt===void 0&&(vt=[],p.set(ht,vt));const ct=z.textures;if(vt.length!==ct.length||vt[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,Lt=ct.length;tt<Lt;tt++)vt[tt]=i.COLOR_ATTACHMENT0+tt;vt.length=ct.length,At=!0}}else vt[0]!==i.BACK&&(vt[0]=i.BACK,At=!0);At&&i.drawBuffers(vt)}function Ot(z){return g!==z?(i.useProgram(z),g=z,!0):!1}const jt={[ei]:i.FUNC_ADD,[vu]:i.FUNC_SUBTRACT,[Mu]:i.FUNC_REVERSE_SUBTRACT};jt[yu]=i.MIN,jt[Su]=i.MAX;const I={[bu]:i.ZERO,[wu]:i.ONE,[Eu]:i.SRC_COLOR,[Co]:i.SRC_ALPHA,[Lu]:i.SRC_ALPHA_SATURATE,[Cu]:i.DST_COLOR,[Au]:i.DST_ALPHA,[Tu]:i.ONE_MINUS_SRC_COLOR,[Po]:i.ONE_MINUS_SRC_ALPHA,[Pu]:i.ONE_MINUS_DST_COLOR,[Ru]:i.ONE_MINUS_DST_ALPHA,[Iu]:i.CONSTANT_COLOR,[Du]:i.ONE_MINUS_CONSTANT_COLOR,[Uu]:i.CONSTANT_ALPHA,[Nu]:i.ONE_MINUS_CONSTANT_ALPHA};function et(z,ht,vt,At,ct,tt,Lt,Wt,he,ne){if(z===kn){_===!0&&(st(i.BLEND),_=!1);return}if(_===!1&&(X(i.BLEND),_=!0),z!==xu){if(z!==m||ne!==S){if((f!==ei||v!==ei)&&(i.blendEquation(i.FUNC_ADD),f=ei,v=ei),ne)switch(z){case Bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ro:i.blendFunc(i.ONE,i.ONE);break;case cc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ro:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case cc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}y=null,M=null,A=null,E=null,R.set(0,0,0),L=0,m=z,S=ne}return}ct=ct||ht,tt=tt||vt,Lt=Lt||At,(ht!==f||ct!==v)&&(i.blendEquationSeparate(jt[ht],jt[ct]),f=ht,v=ct),(vt!==y||At!==M||tt!==A||Lt!==E)&&(i.blendFuncSeparate(I[vt],I[At],I[tt],I[Lt]),y=vt,M=At,A=tt,E=Lt),(Wt.equals(R)===!1||he!==L)&&(i.blendColor(Wt.r,Wt.g,Wt.b,he),R.copy(Wt),L=he),m=z,S=!1}function Q(z,ht){z.side===Tn?st(i.CULL_FACE):X(i.CULL_FACE);let vt=z.side===Fe;ht&&(vt=!vt),J(vt),z.blending===Bi&&z.transparent===!1?et(kn):et(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const At=z.stencilWrite;a.setTest(At),At&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ot(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):st(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(z){x!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),x=z)}function j(z){z!==gu?(X(i.CULL_FACE),z!==T&&(z===ac?i.cullFace(i.BACK):z===_u?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):st(i.CULL_FACE),T=z}function _t(z){z!==P&&(O&&i.lineWidth(z),P=z)}function ot(z,ht,vt){z?(X(i.POLYGON_OFFSET_FILL),(F!==ht||N!==vt)&&(i.polygonOffset(ht,vt),F=ht,N=vt)):st(i.POLYGON_OFFSET_FILL)}function xt(z){z?X(i.SCISSOR_TEST):st(i.SCISSOR_TEST)}function Vt(z){z===void 0&&(z=i.TEXTURE0+D-1),Z!==z&&(i.activeTexture(z),Z=z)}function Ht(z,ht,vt){vt===void 0&&(Z===null?vt=i.TEXTURE0+D-1:vt=Z);let At=rt[vt];At===void 0&&(At={type:void 0,texture:void 0},rt[vt]=At),(At.type!==z||At.texture!==ht)&&(Z!==vt&&(i.activeTexture(vt),Z=vt),i.bindTexture(z,ht||V[z]),At.type=z,At.texture=ht)}function C(){const z=rt[Z];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function W(){try{i.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $(){try{i.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function nt(){try{i.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function It(){try{i.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ut(){try{i.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ct(){try{i.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Pt(){try{i.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function at(){try{i.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Et(z){ft.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),ft.copy(z))}function Bt(z){Mt.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Mt.copy(z))}function Dt(z,ht){let vt=l.get(ht);vt===void 0&&(vt=new WeakMap,l.set(ht,vt));let At=vt.get(z);At===void 0&&(At=i.getUniformBlockIndex(ht,z.name),vt.set(z,At))}function bt(z,ht){const At=l.get(ht).get(z);c.get(ht)!==At&&(i.uniformBlockBinding(ht,At,z.__bindingPointIndex),c.set(ht,At))}function Xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Z=null,rt={},u={},p=new WeakMap,d=[],g=null,_=!1,m=null,f=null,y=null,M=null,v=null,A=null,E=null,R=new Gt(0,0,0),L=0,S=!1,x=null,T=null,P=null,F=null,N=null,ft.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:X,disable:st,bindFramebuffer:mt,drawBuffers:gt,useProgram:Ot,setBlending:et,setMaterial:Q,setFlipSided:J,setCullFace:j,setLineWidth:_t,setPolygonOffset:ot,setScissorTest:xt,activeTexture:Vt,bindTexture:Ht,unbindTexture:C,compressedTexImage2D:b,compressedTexImage3D:W,texImage2D:Pt,texImage3D:at,updateUBOMapping:Dt,uniformBlockBinding:bt,texStorage2D:ut,texStorage3D:Ct,texSubImage2D:$,texSubImage3D:nt,compressedTexSubImage2D:K,compressedTexSubImage3D:It,scissor:Et,viewport:Bt,reset:Xt}}function Jg(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new dt,h=new WeakMap;let u;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return d?new OffscreenCanvas(C,b):br("canvas")}function _(C,b,W){let $=1;const nt=Ht(C);if((nt.width>W||nt.height>W)&&($=W/Math.max(nt.width,nt.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const K=Math.floor($*nt.width),It=Math.floor($*nt.height);u===void 0&&(u=g(K,It));const ut=b?g(K,It):u;return ut.width=K,ut.height=It,ut.getContext("2d").drawImage(C,0,0,K,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+K+"x"+It+")."),ut}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){i.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(C,b,W,$,nt=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let K=b;if(b===i.RED&&(W===i.FLOAT&&(K=i.R32F),W===i.HALF_FLOAT&&(K=i.R16F),W===i.UNSIGNED_BYTE&&(K=i.R8)),b===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(K=i.R8UI),W===i.UNSIGNED_SHORT&&(K=i.R16UI),W===i.UNSIGNED_INT&&(K=i.R32UI),W===i.BYTE&&(K=i.R8I),W===i.SHORT&&(K=i.R16I),W===i.INT&&(K=i.R32I)),b===i.RG&&(W===i.FLOAT&&(K=i.RG32F),W===i.HALF_FLOAT&&(K=i.RG16F),W===i.UNSIGNED_BYTE&&(K=i.RG8)),b===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(K=i.RG8UI),W===i.UNSIGNED_SHORT&&(K=i.RG16UI),W===i.UNSIGNED_INT&&(K=i.RG32UI),W===i.BYTE&&(K=i.RG8I),W===i.SHORT&&(K=i.RG16I),W===i.INT&&(K=i.RG32I)),b===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(K=i.RGB8UI),W===i.UNSIGNED_SHORT&&(K=i.RGB16UI),W===i.UNSIGNED_INT&&(K=i.RGB32UI),W===i.BYTE&&(K=i.RGB8I),W===i.SHORT&&(K=i.RGB16I),W===i.INT&&(K=i.RGB32I)),b===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),W===i.UNSIGNED_INT&&(K=i.RGBA32UI),W===i.BYTE&&(K=i.RGBA8I),W===i.SHORT&&(K=i.RGBA16I),W===i.INT&&(K=i.RGBA32I)),b===i.RGB&&(W===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),b===i.RGBA){const It=nt?yr:ee.getTransfer($);W===i.FLOAT&&(K=i.RGBA32F),W===i.HALF_FLOAT&&(K=i.RGBA16F),W===i.UNSIGNED_BYTE&&(K=It===ae?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function v(C,b){let W;return C?b===null||b===oi||b===vs?W=i.DEPTH24_STENCIL8:b===un?W=i.DEPTH32F_STENCIL8:b===xs&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===oi||b===vs?W=i.DEPTH_COMPONENT24:b===un?W=i.DEPTH_COMPONENT32F:b===xs&&(W=i.DEPTH_COMPONENT16),W}function A(C,b){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==qe&&C.minFilter!==hn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function E(C){const b=C.target;b.removeEventListener("dispose",E),L(b),b.isVideoTexture&&h.delete(b)}function R(C){const b=C.target;b.removeEventListener("dispose",R),x(b)}function L(C){const b=n.get(C);if(b.__webglInit===void 0)return;const W=C.source,$=p.get(W);if($){const nt=$[b.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&S(C),Object.keys($).length===0&&p.delete(W)}n.remove(C)}function S(C){const b=n.get(C);i.deleteTexture(b.__webglTexture);const W=C.source,$=p.get(W);delete $[b.__cacheKey],o.memory.textures--}function x(C){const b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let nt=0;nt<b.__webglFramebuffer[$].length;nt++)i.deleteFramebuffer(b.__webglFramebuffer[$][nt]);else i.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)i.deleteFramebuffer(b.__webglFramebuffer[$]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const W=C.textures;for(let $=0,nt=W.length;$<nt;$++){const K=n.get(W[$]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(W[$])}n.remove(C)}let T=0;function P(){T=0}function F(){const C=T;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),T+=1,C}function N(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function D(C,b){const W=n.get(C);if(C.isVideoTexture&&xt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&W.__version!==C.version){const $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(W,C,b);return}}else C.isExternalTexture&&(W.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+b)}function O(C,b){const W=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){V(W,C,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+b)}function H(C,b){const W=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){V(W,C,b);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+b)}function B(C,b){const W=n.get(C);if(C.version>0&&W.__version!==C.version){X(W,C,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+b)}const Z={[ko]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[Ho]:i.MIRRORED_REPEAT},rt={[qe]:i.NEAREST,[Wu]:i.NEAREST_MIPMAP_NEAREST,[Us]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[Br]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},pt={[$u]:i.NEVER,[tf]:i.ALWAYS,[Ku]:i.LESS,[Yl]:i.LEQUAL,[Zu]:i.EQUAL,[Qu]:i.GEQUAL,[Ju]:i.GREATER,[ju]:i.NOTEQUAL};function yt(C,b){if(b.type===un&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===hn||b.magFilter===Br||b.magFilter===Us||b.magFilter===ri||b.minFilter===hn||b.minFilter===Br||b.minFilter===Us||b.minFilter===ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Z[b.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Z[b.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Z[b.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,rt[b.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,rt[b.minFilter]),b.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,pt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===qe||b.minFilter!==Us&&b.minFilter!==ri||b.type===un&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ft(C,b){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",E));const $=b.source;let nt=p.get($);nt===void 0&&(nt={},p.set($,nt));const K=N(b);if(K!==C.__cacheKey){nt[K]===void 0&&(nt[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),nt[K].usedTimes++;const It=nt[C.__cacheKey];It!==void 0&&(nt[C.__cacheKey].usedTimes--,It.usedTimes===0&&S(b)),C.__cacheKey=K,C.__webglTexture=nt[K].texture}return W}function Mt(C,b,W){return Math.floor(Math.floor(C/W)/b)}function it(C,b,W,$){const K=C.updateRanges;if(K.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,W,$,b.data);else{K.sort((at,Et)=>at.start-Et.start);let It=0;for(let at=1;at<K.length;at++){const Et=K[It],Bt=K[at],Dt=Et.start+Et.count,bt=Mt(Bt.start,b.width,4),Xt=Mt(Et.start,b.width,4);Bt.start<=Dt+1&&bt===Xt&&Mt(Bt.start+Bt.count-1,b.width,4)===bt?Et.count=Math.max(Et.count,Bt.start+Bt.count-Et.start):(++It,K[It]=Bt)}K.length=It+1;const ut=i.getParameter(i.UNPACK_ROW_LENGTH),Ct=i.getParameter(i.UNPACK_SKIP_PIXELS),Pt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let at=0,Et=K.length;at<Et;at++){const Bt=K[at],Dt=Math.floor(Bt.start/4),bt=Math.ceil(Bt.count/4),Xt=Dt%b.width,z=Math.floor(Dt/b.width),ht=bt,vt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xt),i.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,Xt,z,ht,vt,W,$,b.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ut),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ct),i.pixelStorei(i.UNPACK_SKIP_ROWS,Pt)}}function V(C,b,W){let $=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&($=i.TEXTURE_3D);const nt=ft(C,b),K=b.source;e.bindTexture($,C.__webglTexture,i.TEXTURE0+W);const It=n.get(K);if(K.version!==It.__version||nt===!0){e.activeTexture(i.TEXTURE0+W);const ut=ee.getPrimaries(ee.workingColorSpace),Ct=b.colorSpace===On?null:ee.getPrimaries(b.colorSpace),Pt=b.colorSpace===On||ut===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let at=_(b.image,!1,s.maxTextureSize);at=Vt(b,at);const Et=r.convert(b.format,b.colorSpace),Bt=r.convert(b.type);let Dt=M(b.internalFormat,Et,Bt,b.colorSpace,b.isVideoTexture);yt($,b);let bt;const Xt=b.mipmaps,z=b.isVideoTexture!==!0,ht=It.__version===void 0||nt===!0,vt=K.dataReady,At=A(b,at);if(b.isDepthTexture)Dt=v(b.format===ys,b.type),ht&&(z?e.texStorage2D(i.TEXTURE_2D,1,Dt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Dt,at.width,at.height,0,Et,Bt,null));else if(b.isDataTexture)if(Xt.length>0){z&&ht&&e.texStorage2D(i.TEXTURE_2D,At,Dt,Xt[0].width,Xt[0].height);for(let ct=0,tt=Xt.length;ct<tt;ct++)bt=Xt[ct],z?vt&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,bt.width,bt.height,Et,Bt,bt.data):e.texImage2D(i.TEXTURE_2D,ct,Dt,bt.width,bt.height,0,Et,Bt,bt.data);b.generateMipmaps=!1}else z?(ht&&e.texStorage2D(i.TEXTURE_2D,At,Dt,at.width,at.height),vt&&it(b,at,Et,Bt)):e.texImage2D(i.TEXTURE_2D,0,Dt,at.width,at.height,0,Et,Bt,at.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){z&&ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Dt,Xt[0].width,Xt[0].height,at.depth);for(let ct=0,tt=Xt.length;ct<tt;ct++)if(bt=Xt[ct],b.format!==en)if(Et!==null)if(z){if(vt)if(b.layerUpdates.size>0){const Lt=qc(bt.width,bt.height,b.format,b.type);for(const Wt of b.layerUpdates){const he=bt.data.subarray(Wt*Lt/bt.data.BYTES_PER_ELEMENT,(Wt+1)*Lt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,Wt,bt.width,bt.height,1,Et,he)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,bt.width,bt.height,at.depth,Et,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,Dt,bt.width,bt.height,at.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?vt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,bt.width,bt.height,at.depth,Et,Bt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,Dt,bt.width,bt.height,at.depth,0,Et,Bt,bt.data)}else{z&&ht&&e.texStorage2D(i.TEXTURE_2D,At,Dt,Xt[0].width,Xt[0].height);for(let ct=0,tt=Xt.length;ct<tt;ct++)bt=Xt[ct],b.format!==en?Et!==null?z?vt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,bt.width,bt.height,Et,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,Dt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?vt&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,bt.width,bt.height,Et,Bt,bt.data):e.texImage2D(i.TEXTURE_2D,ct,Dt,bt.width,bt.height,0,Et,Bt,bt.data)}else if(b.isDataArrayTexture)if(z){if(ht&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Dt,at.width,at.height,at.depth),vt)if(b.layerUpdates.size>0){const ct=qc(at.width,at.height,b.format,b.type);for(const tt of b.layerUpdates){const Lt=at.data.subarray(tt*ct/at.data.BYTES_PER_ELEMENT,(tt+1)*ct/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,at.width,at.height,1,Et,Bt,Lt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Et,Bt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,at.width,at.height,at.depth,0,Et,Bt,at.data);else if(b.isData3DTexture)z?(ht&&e.texStorage3D(i.TEXTURE_3D,At,Dt,at.width,at.height,at.depth),vt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Et,Bt,at.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,at.width,at.height,at.depth,0,Et,Bt,at.data);else if(b.isFramebufferTexture){if(ht)if(z)e.texStorage2D(i.TEXTURE_2D,At,Dt,at.width,at.height);else{let ct=at.width,tt=at.height;for(let Lt=0;Lt<At;Lt++)e.texImage2D(i.TEXTURE_2D,Lt,Dt,ct,tt,0,Et,Bt,null),ct>>=1,tt>>=1}}else if(Xt.length>0){if(z&&ht){const ct=Ht(Xt[0]);e.texStorage2D(i.TEXTURE_2D,At,Dt,ct.width,ct.height)}for(let ct=0,tt=Xt.length;ct<tt;ct++)bt=Xt[ct],z?vt&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Et,Bt,bt):e.texImage2D(i.TEXTURE_2D,ct,Dt,Et,Bt,bt);b.generateMipmaps=!1}else if(z){if(ht){const ct=Ht(at);e.texStorage2D(i.TEXTURE_2D,At,Dt,ct.width,ct.height)}vt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Bt,at)}else e.texImage2D(i.TEXTURE_2D,0,Dt,Et,Bt,at);m(b)&&f($),It.__version=K.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function X(C,b,W){if(b.image.length!==6)return;const $=ft(C,b),nt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+W);const K=n.get(nt);if(nt.version!==K.__version||$===!0){e.activeTexture(i.TEXTURE0+W);const It=ee.getPrimaries(ee.workingColorSpace),ut=b.colorSpace===On?null:ee.getPrimaries(b.colorSpace),Ct=b.colorSpace===On||It===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const Pt=b.isCompressedTexture||b.image[0].isCompressedTexture,at=b.image[0]&&b.image[0].isDataTexture,Et=[];for(let tt=0;tt<6;tt++)!Pt&&!at?Et[tt]=_(b.image[tt],!0,s.maxCubemapSize):Et[tt]=at?b.image[tt].image:b.image[tt],Et[tt]=Vt(b,Et[tt]);const Bt=Et[0],Dt=r.convert(b.format,b.colorSpace),bt=r.convert(b.type),Xt=M(b.internalFormat,Dt,bt,b.colorSpace),z=b.isVideoTexture!==!0,ht=K.__version===void 0||$===!0,vt=nt.dataReady;let At=A(b,Bt);yt(i.TEXTURE_CUBE_MAP,b);let ct;if(Pt){z&&ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,Xt,Bt.width,Bt.height);for(let tt=0;tt<6;tt++){ct=Et[tt].mipmaps;for(let Lt=0;Lt<ct.length;Lt++){const Wt=ct[Lt];b.format!==en?Dt!==null?z?vt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Lt,0,0,Wt.width,Wt.height,Dt,Wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Lt,Xt,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Lt,0,0,Wt.width,Wt.height,Dt,bt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Lt,Xt,Wt.width,Wt.height,0,Dt,bt,Wt.data)}}}else{if(ct=b.mipmaps,z&&ht){ct.length>0&&At++;const tt=Ht(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,At,Xt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(at){z?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Et[tt].width,Et[tt].height,Dt,bt,Et[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Xt,Et[tt].width,Et[tt].height,0,Dt,bt,Et[tt].data);for(let Lt=0;Lt<ct.length;Lt++){const he=ct[Lt].image[tt].image;z?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Lt+1,0,0,he.width,he.height,Dt,bt,he.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Lt+1,Xt,he.width,he.height,0,Dt,bt,he.data)}}else{z?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Dt,bt,Et[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Xt,Dt,bt,Et[tt]);for(let Lt=0;Lt<ct.length;Lt++){const Wt=ct[Lt];z?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Lt+1,0,0,Dt,bt,Wt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Lt+1,Xt,Dt,bt,Wt.image[tt])}}}m(b)&&f(i.TEXTURE_CUBE_MAP),K.__version=nt.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function st(C,b,W,$,nt,K){const It=r.convert(W.format,W.colorSpace),ut=r.convert(W.type),Ct=M(W.internalFormat,It,ut,W.colorSpace),Pt=n.get(b),at=n.get(W);if(at.__renderTarget=b,!Pt.__hasExternalTextures){const Et=Math.max(1,b.width>>K),Bt=Math.max(1,b.height>>K);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,K,Ct,Et,Bt,b.depth,0,It,ut,null):e.texImage2D(nt,K,Ct,Et,Bt,0,It,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),ot(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,nt,at.__webglTexture,0,_t(b)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,nt,at.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(C,b,W){if(i.bindRenderbuffer(i.RENDERBUFFER,C),b.depthBuffer){const $=b.depthTexture,nt=$&&$.isDepthTexture?$.type:null,K=v(b.stencilBuffer,nt),It=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=_t(b);ot(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,K,b.width,b.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,K,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,K,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,C)}else{const $=b.textures;for(let nt=0;nt<$.length;nt++){const K=$[nt],It=r.convert(K.format,K.colorSpace),ut=r.convert(K.type),Ct=M(K.internalFormat,It,ut,K.colorSpace),Pt=_t(b);W&&ot(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,Ct,b.width,b.height):ot(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pt,Ct,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Ct,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(b.depthTexture);$.__renderTarget=b,(!$.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),D(b.depthTexture,0);const nt=$.__webglTexture,K=_t(b);if(b.depthTexture.format===Ms)ot(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(b.depthTexture.format===ys)ot(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Ot(C){const b=n.get(C),W=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const $=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),$){const nt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,$.removeEventListener("dispose",nt)};$.addEventListener("dispose",nt),b.__depthDisposeCallback=nt}b.__boundDepthTexture=$}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");const $=C.texture.mipmaps;$&&$.length>0?gt(b.__webglFramebuffer[0],C):gt(b.__webglFramebuffer,C)}else if(W){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]===void 0)b.__webglDepthbuffer[$]=i.createRenderbuffer(),mt(b.__webglDepthbuffer[$],C,!1);else{const nt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,K)}}else{const $=C.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),mt(b.__webglDepthbuffer,C,!1);else{const nt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,K)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function jt(C,b,W){const $=n.get(C);b!==void 0&&st($.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Ot(C)}function I(C){const b=C.texture,W=n.get(C),$=n.get(b);C.addEventListener("dispose",R);const nt=C.textures,K=C.isWebGLCubeRenderTarget===!0,It=nt.length>1;if(It||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=b.version,o.memory.textures++),K){W.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[ut]=[];for(let Ct=0;Ct<b.mipmaps.length;Ct++)W.__webglFramebuffer[ut][Ct]=i.createFramebuffer()}else W.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let ut=0;ut<b.mipmaps.length;ut++)W.__webglFramebuffer[ut]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(It)for(let ut=0,Ct=nt.length;ut<Ct;ut++){const Pt=n.get(nt[ut]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&ot(C)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ut=0;ut<nt.length;ut++){const Ct=nt[ut];W.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ut]);const Pt=r.convert(Ct.format,Ct.colorSpace),at=r.convert(Ct.type),Et=M(Ct.internalFormat,Pt,at,Ct.colorSpace,C.isXRRenderTarget===!0),Bt=_t(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,Et,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,W.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),mt(W.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),yt(i.TEXTURE_CUBE_MAP,b);for(let ut=0;ut<6;ut++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ct=0;Ct<b.mipmaps.length;Ct++)st(W.__webglFramebuffer[ut][Ct],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ct);else st(W.__webglFramebuffer[ut],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(b)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let ut=0,Ct=nt.length;ut<Ct;ut++){const Pt=nt[ut],at=n.get(Pt);let Et=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Et=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,at.__webglTexture),yt(Et,Pt),st(W.__webglFramebuffer,C,Pt,i.COLOR_ATTACHMENT0+ut,Et,0),m(Pt)&&f(Et)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ut=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,$.__webglTexture),yt(ut,b),b.mipmaps&&b.mipmaps.length>0)for(let Ct=0;Ct<b.mipmaps.length;Ct++)st(W.__webglFramebuffer[Ct],C,b,i.COLOR_ATTACHMENT0,ut,Ct);else st(W.__webglFramebuffer,C,b,i.COLOR_ATTACHMENT0,ut,0);m(b)&&f(ut),e.unbindTexture()}C.depthBuffer&&Ot(C)}function et(C){const b=C.textures;for(let W=0,$=b.length;W<$;W++){const nt=b[W];if(m(nt)){const K=y(C),It=n.get(nt).__webglTexture;e.bindTexture(K,It),f(K),e.unbindTexture()}}}const Q=[],J=[];function j(C){if(C.samples>0){if(ot(C)===!1){const b=C.textures,W=C.width,$=C.height;let nt=i.COLOR_BUFFER_BIT;const K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(C),ut=b.length>1;if(ut)for(let Pt=0;Pt<b.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);const Ct=C.texture.mipmaps;Ct&&Ct.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Pt=0;Pt<b.length;Pt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[Pt]);const at=n.get(b[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,at,0)}i.blitFramebuffer(0,0,W,$,0,0,W,$,nt,i.NEAREST),c===!0&&(Q.length=0,J.length=0,Q.push(i.COLOR_ATTACHMENT0+Pt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Q.push(K),J.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,J)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let Pt=0;Pt<b.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,It.__webglColorRenderbuffer[Pt]);const at=n.get(b[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,at,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const b=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function _t(C){return Math.min(s.maxSamples,C.samples)}function ot(C){const b=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function xt(C){const b=o.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function Vt(C,b){const W=C.colorSpace,$=C.format,nt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==Xi&&W!==On&&(ee.getTransfer(W)===ae?($!==en||nt!==pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),b}function Ht(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=P,this.setTexture2D=D,this.setTexture2DArray=O,this.setTexture3D=H,this.setTextureCube=B,this.rebindTextures=jt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=st,this.useMultisampledRTT=ot}function jg(i,t){function e(n,s=On){let r;const o=ee.getTransfer(s);if(n===pn)return i.UNSIGNED_BYTE;if(n===Ea)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ta)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Gl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===kl)return i.BYTE;if(n===Hl)return i.SHORT;if(n===xs)return i.UNSIGNED_SHORT;if(n===wa)return i.INT;if(n===oi)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===Rs)return i.HALF_FLOAT;if(n===Wl)return i.ALPHA;if(n===Xl)return i.RGB;if(n===en)return i.RGBA;if(n===Ms)return i.DEPTH_COMPONENT;if(n===ys)return i.DEPTH_STENCIL;if(n===Aa)return i.RED;if(n===Ra)return i.RED_INTEGER;if(n===ql)return i.RG;if(n===Ca)return i.RG_INTEGER;if(n===Pa)return i.RGBA_INTEGER;if(n===mr||n===gr||n===_r||n===xr)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===mr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===mr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Go||n===Vo||n===Wo||n===Xo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Go)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qo||n===Yo||n===$o)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qo||n===Yo)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$o)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ko||n===Zo||n===Jo||n===jo||n===Qo||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===ca)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ko)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ta)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ea)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===na)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ia)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ra)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===aa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ca)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===la||n===ha||n===ua)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===la)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ha)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ua)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fa||n===da||n===pa||n===ma)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===da)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ma)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Qg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class e_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new oh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new sn({vertexShader:Qg,fragmentShader:t_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ne(new Cs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class n_ extends Zi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,p=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new e_,f={},y=e.getContextAttributes();let M=null,v=null;const A=[],E=[],R=new dt;let L=null;const S=new Ze;S.viewport=new xe;const x=new Ze;x.viewport=new xe;const T=[S,x],P=new bd;let F=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let X=A[V];return X===void 0&&(X=new co,A[V]=X),X.getTargetRaySpace()},this.getControllerGrip=function(V){let X=A[V];return X===void 0&&(X=new co,A[V]=X),X.getGripSpace()},this.getHand=function(V){let X=A[V];return X===void 0&&(X=new co,A[V]=X),X.getHandSpace()};function D(V){const X=E.indexOf(V.inputSource);if(X===-1)return;const st=A[X];st!==void 0&&(st.update(V.inputSource,V.frame,l||o),st.dispatchEvent({type:V.type,data:V.inputSource}))}function O(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",H);for(let V=0;V<A.length;V++){const X=E[V];X!==null&&(E[V]=null,A[V].disconnect(X))}F=null,N=null,m.reset();for(const V in f)delete f[V];t.setRenderTarget(M),d=null,p=null,u=null,s=null,v=null,it.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",O),s.addEventListener("inputsourceschange",H),y.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let st=null,mt=null,gt=null;y.depth&&(gt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=y.stencil?ys:Ms,mt=y.stencil?vs:oi);const Ot={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};u=this.getBinding(),p=u.createProjectionLayer(Ot),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),v=new ai(p.textureWidth,p.textureHeight,{format:en,type:pn,depthTexture:new rh(p.textureWidth,p.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const st={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new ai(d.framebufferWidth,d.framebufferHeight,{format:en,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),it.setContext(s),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(V){for(let X=0;X<V.removed.length;X++){const st=V.removed[X],mt=E.indexOf(st);mt>=0&&(E[mt]=null,A[mt].disconnect(st))}for(let X=0;X<V.added.length;X++){const st=V.added[X];let mt=E.indexOf(st);if(mt===-1){for(let Ot=0;Ot<A.length;Ot++)if(Ot>=E.length){E.push(st),mt=Ot;break}else if(E[Ot]===null){E[Ot]=st,mt=Ot;break}if(mt===-1)break}const gt=A[mt];gt&&gt.connect(st)}}const B=new U,Z=new U;function rt(V,X,st){B.setFromMatrixPosition(X.matrixWorld),Z.setFromMatrixPosition(st.matrixWorld);const mt=B.distanceTo(Z),gt=X.projectionMatrix.elements,Ot=st.projectionMatrix.elements,jt=gt[14]/(gt[10]-1),I=gt[14]/(gt[10]+1),et=(gt[9]+1)/gt[5],Q=(gt[9]-1)/gt[5],J=(gt[8]-1)/gt[0],j=(Ot[8]+1)/Ot[0],_t=jt*J,ot=jt*j,xt=mt/(-J+j),Vt=xt*-J;if(X.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Vt),V.translateZ(xt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),gt[10]===-1)V.projectionMatrix.copy(X.projectionMatrix),V.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{const Ht=jt+xt,C=I+xt,b=_t-Vt,W=ot+(mt-Vt),$=et*I/C*Ht,nt=Q*I/C*Ht;V.projectionMatrix.makePerspective(b,W,$,nt,Ht,C),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function pt(V,X){X===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(X.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let X=V.near,st=V.far;m.texture!==null&&(m.depthNear>0&&(X=m.depthNear),m.depthFar>0&&(st=m.depthFar)),P.near=x.near=S.near=X,P.far=x.far=S.far=st,(F!==P.near||N!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),F=P.near,N=P.far),P.layers.mask=V.layers.mask|6,S.layers.mask=P.layers.mask&3,x.layers.mask=P.layers.mask&5;const mt=V.parent,gt=P.cameras;pt(P,mt);for(let Ot=0;Ot<gt.length;Ot++)pt(gt[Ot],mt);gt.length===2?rt(P,S,x):P.projectionMatrix.copy(S.projectionMatrix),yt(V,P,mt)};function yt(V,X,st){st===null?V.matrix.copy(X.matrixWorld):(V.matrix.copy(st.matrixWorld),V.matrix.invert(),V.matrix.multiply(X.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(X.projectionMatrix),V.projectionMatrixInverse.copy(X.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ga*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(p===null&&d===null))return c},this.setFoveation=function(V){c=V,p!==null&&(p.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(V){return f[V]};let ft=null;function Mt(V,X){if(h=X.getViewerPose(l||o),g=X,h!==null){const st=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let mt=!1;st.length!==P.cameras.length&&(P.cameras.length=0,mt=!0);for(let I=0;I<st.length;I++){const et=st[I];let Q=null;if(d!==null)Q=d.getViewport(et);else{const j=u.getViewSubImage(p,et);Q=j.viewport,I===0&&(t.setRenderTargetTextures(v,j.colorTexture,j.depthStencilTexture),t.setRenderTarget(v))}let J=T[I];J===void 0&&(J=new Ze,J.layers.enable(I),J.viewport=new xe,T[I]=J),J.matrix.fromArray(et.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(et.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Q.x,Q.y,Q.width,Q.height),I===0&&(P.matrix.copy(J.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),mt===!0&&P.cameras.push(J)}const gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const I=u.getDepthInformation(st[0]);I&&I.isValid&&I.texture&&m.init(I,s.renderState)}if(gt&&gt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let I=0;I<st.length;I++){const et=st[I].camera;if(et){let Q=f[et];Q||(Q=new oh,f[et]=Q);const J=u.getCameraImage(et);Q.sourceTexture=J}}}}for(let st=0;st<A.length;st++){const mt=E[st],gt=A[st];mt!==null&&gt!==void 0&&gt.update(mt,X,l||o)}ft&&ft(V,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),g=null}const it=new Mh;it.setAnimationLoop(Mt),this.setAnimationLoop=function(V){ft=V},this.dispose=function(){}}}const jn=new Le,i_=new Jt;function s_(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,eh(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,y,M,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),p(m,f),f.isMeshPhysicalMaterial&&d(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,y,M):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Fe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Fe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=t.get(f),M=y.envMap,v=y.envMapRotation;M&&(m.envMap.value=M,jn.copy(v),jn.x*=-1,jn.y*=-1,jn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),m.envMapRotation.value.setFromMatrix4(i_.makeRotationFromEuler(jn)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,y,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=M*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Fe&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function r_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){const v=M.program;n.uniformBlockBinding(y,v)}function l(y,M){let v=s[y.id];v===void 0&&(g(y),v=h(y),s[y.id]=v,y.addEventListener("dispose",m));const A=M.program;n.updateUBOMapping(y,A);const E=t.render.frame;r[y.id]!==E&&(p(y),r[y.id]=E)}function h(y){const M=u();y.__bindingPointIndex=M;const v=i.createBuffer(),A=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const M=s[y.id],v=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,R=v.length;E<R;E++){const L=Array.isArray(v[E])?v[E]:[v[E]];for(let S=0,x=L.length;S<x;S++){const T=L[S];if(d(T,E,S,A)===!0){const P=T.__offset,F=Array.isArray(T.value)?T.value:[T.value];let N=0;for(let D=0;D<F.length;D++){const O=F[D],H=_(O);typeof O=="number"||typeof O=="boolean"?(T.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,P+N,T.__data)):O.isMatrix3?(T.__data[0]=O.elements[0],T.__data[1]=O.elements[1],T.__data[2]=O.elements[2],T.__data[3]=0,T.__data[4]=O.elements[3],T.__data[5]=O.elements[4],T.__data[6]=O.elements[5],T.__data[7]=0,T.__data[8]=O.elements[6],T.__data[9]=O.elements[7],T.__data[10]=O.elements[8],T.__data[11]=0):(O.toArray(T.__data,N),N+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,M,v,A){const E=y.value,R=M+"_"+v;if(A[R]===void 0)return typeof E=="number"||typeof E=="boolean"?A[R]=E:A[R]=E.clone(),!0;{const L=A[R];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return A[R]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function g(y){const M=y.uniforms;let v=0;const A=16;for(let R=0,L=M.length;R<L;R++){const S=Array.isArray(M[R])?M[R]:[M[R]];for(let x=0,T=S.length;x<T;x++){const P=S[x],F=Array.isArray(P.value)?P.value:[P.value];for(let N=0,D=F.length;N<D;N++){const O=F[N],H=_(O),B=v%A,Z=B%H.boundary,rt=B+Z;v+=Z,rt!==0&&A-rt<H.storage&&(v+=A-rt),P.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=v,v+=H.storage}}}const E=v%A;return E>0&&(v+=A-E),y.__size=v,y.__cache={},this}function _(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){const M=y.target;M.removeEventListener("dispose",m);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}class o_{constructor(t={}){const{canvas:e=nf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const y=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let A=!1;this._outputColorSpace=Ce;let E=0,R=0,L=null,S=-1,x=null;const T=new xe,P=new xe;let F=null;const N=new Gt(0);let D=0,O=e.width,H=e.height,B=1,Z=null,rt=null;const pt=new xe(0,0,O,H),yt=new xe(0,0,O,H);let ft=!1;const Mt=new Na;let it=!1,V=!1;const X=new Jt,st=new U,mt=new xe,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function jt(){return L===null?B:1}let I=n;function et(w,k){return e.getContext(w,k)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ba}`),e.addEventListener("webglcontextlost",vt,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",ct,!1),I===null){const k="webgl2";if(I=et(k,w),I===null)throw et(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Q,J,j,_t,ot,xt,Vt,Ht,C,b,W,$,nt,K,It,ut,Ct,Pt,at,Et,Bt,Dt,bt,Xt;function z(){Q=new g0(I),Q.init(),Dt=new jg(I,Q),J=new l0(I,Q,t,Dt),j=new Zg(I,Q),J.reversedDepthBuffer&&p&&j.buffers.depth.setReversed(!0),_t=new v0(I),ot=new Og,xt=new Jg(I,Q,j,ot,J,Dt,_t),Vt=new u0(v),Ht=new m0(v),C=new Ed(I),bt=new a0(I,C),b=new _0(I,C,_t,bt),W=new y0(I,b,C,_t),at=new M0(I,J,xt),ut=new h0(ot),$=new Fg(v,Vt,Ht,Q,J,bt,ut),nt=new s_(v,ot),K=new Bg,It=new Xg(Q),Pt=new o0(v,Vt,Ht,j,W,d,c),Ct=new $g(v,W,J),Xt=new r_(I,_t,J,j),Et=new c0(I,Q,_t),Bt=new x0(I,Q,_t),_t.programs=$.programs,v.capabilities=J,v.extensions=Q,v.properties=ot,v.renderLists=K,v.shadowMap=Ct,v.state=j,v.info=_t}z();const ht=new n_(v,I);this.xr=ht,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=Q.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Q.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(w){w!==void 0&&(B=w,this.setSize(O,H,!1))},this.getSize=function(w){return w.set(O,H)},this.setSize=function(w,k,q=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,H=k,e.width=Math.floor(w*B),e.height=Math.floor(k*B),q===!0&&(e.style.width=w+"px",e.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(O*B,H*B).floor()},this.setDrawingBufferSize=function(w,k,q){O=w,H=k,B=q,e.width=Math.floor(w*q),e.height=Math.floor(k*q),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(pt)},this.setViewport=function(w,k,q,Y){w.isVector4?pt.set(w.x,w.y,w.z,w.w):pt.set(w,k,q,Y),j.viewport(T.copy(pt).multiplyScalar(B).round())},this.getScissor=function(w){return w.copy(yt)},this.setScissor=function(w,k,q,Y){w.isVector4?yt.set(w.x,w.y,w.z,w.w):yt.set(w,k,q,Y),j.scissor(P.copy(yt).multiplyScalar(B).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(w){j.setScissorTest(ft=w)},this.setOpaqueSort=function(w){Z=w},this.setTransparentSort=function(w){rt=w},this.getClearColor=function(w){return w.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(w=!0,k=!0,q=!0){let Y=0;if(w){let G=!1;if(L!==null){const lt=L.texture.format;G=lt===Pa||lt===Ca||lt===Ra}if(G){const lt=L.texture.type,wt=lt===pn||lt===oi||lt===xs||lt===vs||lt===Ea||lt===Ta,Rt=Pt.getClearColor(),Tt=Pt.getClearAlpha(),zt=Rt.r,kt=Rt.g,Ut=Rt.b;wt?(g[0]=zt,g[1]=kt,g[2]=Ut,g[3]=Tt,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=zt,_[1]=kt,_[2]=Ut,_[3]=Tt,I.clearBufferiv(I.COLOR,0,_))}else Y|=I.COLOR_BUFFER_BIT}k&&(Y|=I.DEPTH_BUFFER_BIT),q&&(Y|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",vt,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),Pt.dispose(),K.dispose(),It.dispose(),ot.dispose(),Vt.dispose(),Ht.dispose(),W.dispose(),bt.dispose(),Xt.dispose(),$.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",rn),ht.removeEventListener("sessionend",qa),Wn.stop()};function vt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const w=_t.autoReset,k=Ct.enabled,q=Ct.autoUpdate,Y=Ct.needsUpdate,G=Ct.type;z(),_t.autoReset=w,Ct.enabled=k,Ct.autoUpdate=q,Ct.needsUpdate=Y,Ct.type=G}function ct(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function tt(w){const k=w.target;k.removeEventListener("dispose",tt),Lt(k)}function Lt(w){Wt(w),ot.remove(w)}function Wt(w){const k=ot.get(w).programs;k!==void 0&&(k.forEach(function(q){$.releaseProgram(q)}),w.isShaderMaterial&&$.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,q,Y,G,lt){k===null&&(k=gt);const wt=G.isMesh&&G.matrixWorld.determinant()<0,Rt=kh(w,k,q,Y,G);j.setMaterial(Y,wt);let Tt=q.index,zt=1;if(Y.wireframe===!0){if(Tt=b.getWireframeAttribute(q),Tt===void 0)return;zt=2}const kt=q.drawRange,Ut=q.attributes.position;let Zt=kt.start*zt,re=(kt.start+kt.count)*zt;lt!==null&&(Zt=Math.max(Zt,lt.start*zt),re=Math.min(re,(lt.start+lt.count)*zt)),Tt!==null?(Zt=Math.max(Zt,0),re=Math.min(re,Tt.count)):Ut!=null&&(Zt=Math.max(Zt,0),re=Math.min(re,Ut.count));const _e=re-Zt;if(_e<0||_e===1/0)return;bt.setup(G,Y,Rt,q,Tt);let fe,le=Et;if(Tt!==null&&(fe=C.get(Tt),le=Bt,le.setIndex(fe)),G.isMesh)Y.wireframe===!0?(j.setLineWidth(Y.wireframeLinewidth*jt()),le.setMode(I.LINES)):le.setMode(I.TRIANGLES);else if(G.isLine){let Ft=Y.linewidth;Ft===void 0&&(Ft=1),j.setLineWidth(Ft*jt()),G.isLineSegments?le.setMode(I.LINES):G.isLineLoop?le.setMode(I.LINE_LOOP):le.setMode(I.LINE_STRIP)}else G.isPoints?le.setMode(I.POINTS):G.isSprite&&le.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Ss("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),le.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))le.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ft=G._multiDrawStarts,de=G._multiDrawCounts,te=G._multiDrawCount,He=Tt?C.get(Tt).bytesPerElement:1,hi=ot.get(Y).currentProgram.getUniforms();for(let Ge=0;Ge<te;Ge++)hi.setValue(I,"_gl_DrawID",Ge),le.render(Ft[Ge]/He,de[Ge])}else if(G.isInstancedMesh)le.renderInstances(Zt,_e,G.count);else if(q.isInstancedBufferGeometry){const Ft=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,de=Math.min(q.instanceCount,Ft);le.renderInstances(Zt,_e,de)}else le.render(Zt,_e)};function he(w,k,q){w.transparent===!0&&w.side===Tn&&w.forceSinglePass===!1?(w.side=Fe,w.needsUpdate=!0,Ls(w,k,q),w.side=Gn,w.needsUpdate=!0,Ls(w,k,q),w.side=Tn):Ls(w,k,q)}this.compile=function(w,k,q=null){q===null&&(q=w),f=It.get(q),f.init(k),M.push(f),q.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),w!==q&&w.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),f.setupLights();const Y=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const lt=G.material;if(lt)if(Array.isArray(lt))for(let wt=0;wt<lt.length;wt++){const Rt=lt[wt];he(Rt,q,G),Y.add(Rt)}else he(lt,q,G),Y.add(lt)}),f=M.pop(),Y},this.compileAsync=function(w,k,q=null){const Y=this.compile(w,k,q);return new Promise(G=>{function lt(){if(Y.forEach(function(wt){ot.get(wt).currentProgram.isReady()&&Y.delete(wt)}),Y.size===0){G(w);return}setTimeout(lt,10)}Q.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let ne=null;function _n(w){ne&&ne(w)}function rn(){Wn.stop()}function qa(){Wn.start()}const Wn=new Mh;Wn.setAnimationLoop(_n),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(w){ne=w,ht.setAnimationLoop(w),w===null?Wn.stop():Wn.start()},ht.addEventListener("sessionstart",rn),ht.addEventListener("sessionend",qa),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(k),k=ht.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,k,L),f=It.get(w,M.length),f.init(k),M.push(f),X.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Mt.setFromProjectionMatrix(X,fn,k.reversedDepth),V=this.localClippingEnabled,it=ut.init(this.clippingPlanes,V),m=K.get(w,y.length),m.init(),y.push(m),ht.enabled===!0&&ht.isPresenting===!0){const lt=v.xr.getDepthSensingMesh();lt!==null&&Fr(lt,k,-1/0,v.sortObjects)}Fr(w,k,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(Z,rt),Ot=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,Ot&&Pt.addToRenderList(m,w),this.info.render.frame++,it===!0&&ut.beginShadows();const q=f.state.shadowsArray;Ct.render(q,w,k),it===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,G=m.transmissive;if(f.setupLights(),k.isArrayCamera){const lt=k.cameras;if(G.length>0)for(let wt=0,Rt=lt.length;wt<Rt;wt++){const Tt=lt[wt];$a(Y,G,w,Tt)}Ot&&Pt.render(w);for(let wt=0,Rt=lt.length;wt<Rt;wt++){const Tt=lt[wt];Ya(m,w,Tt,Tt.viewport)}}else G.length>0&&$a(Y,G,w,k),Ot&&Pt.render(w),Ya(m,w,k);L!==null&&R===0&&(xt.updateMultisampleRenderTarget(L),xt.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(v,w,k),bt.resetDefaultState(),S=-1,x=null,M.pop(),M.length>0?(f=M[M.length-1],it===!0&&ut.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Fr(w,k,q,Y){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Mt.intersectsSprite(w)){Y&&mt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(X);const wt=W.update(w),Rt=w.material;Rt.visible&&m.push(w,wt,Rt,q,mt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Mt.intersectsObject(w))){const wt=W.update(w),Rt=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),mt.copy(w.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),mt.copy(wt.boundingSphere.center)),mt.applyMatrix4(w.matrixWorld).applyMatrix4(X)),Array.isArray(Rt)){const Tt=wt.groups;for(let zt=0,kt=Tt.length;zt<kt;zt++){const Ut=Tt[zt],Zt=Rt[Ut.materialIndex];Zt&&Zt.visible&&m.push(w,wt,Zt,q,mt.z,Ut)}}else Rt.visible&&m.push(w,wt,Rt,q,mt.z,null)}}const lt=w.children;for(let wt=0,Rt=lt.length;wt<Rt;wt++)Fr(lt[wt],k,q,Y)}function Ya(w,k,q,Y){const G=w.opaque,lt=w.transmissive,wt=w.transparent;f.setupLightsView(q),it===!0&&ut.setGlobalState(v.clippingPlanes,q),Y&&j.viewport(T.copy(Y)),G.length>0&&Ps(G,k,q),lt.length>0&&Ps(lt,k,q),wt.length>0&&Ps(wt,k,q),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function $a(w,k,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Y.id]===void 0&&(f.state.transmissionRenderTarget[Y.id]=new ai(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?Rs:pn,minFilter:ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const lt=f.state.transmissionRenderTarget[Y.id],wt=Y.viewport||T;lt.setSize(wt.z*v.transmissionResolutionScale,wt.w*v.transmissionResolutionScale);const Rt=v.getRenderTarget(),Tt=v.getActiveCubeFace(),zt=v.getActiveMipmapLevel();v.setRenderTarget(lt),v.getClearColor(N),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear(),Ot&&Pt.render(q);const kt=v.toneMapping;v.toneMapping=Hn;const Ut=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),f.setupLightsView(Y),it===!0&&ut.setGlobalState(v.clippingPlanes,Y),Ps(w,q,Y),xt.updateMultisampleRenderTarget(lt),xt.updateRenderTargetMipmap(lt),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let re=0,_e=k.length;re<_e;re++){const fe=k[re],le=fe.object,Ft=fe.geometry,de=fe.material,te=fe.group;if(de.side===Tn&&le.layers.test(Y.layers)){const He=de.side;de.side=Fe,de.needsUpdate=!0,Ka(le,q,Y,Ft,de,te),de.side=He,de.needsUpdate=!0,Zt=!0}}Zt===!0&&(xt.updateMultisampleRenderTarget(lt),xt.updateRenderTargetMipmap(lt))}v.setRenderTarget(Rt,Tt,zt),v.setClearColor(N,D),Ut!==void 0&&(Y.viewport=Ut),v.toneMapping=kt}function Ps(w,k,q){const Y=k.isScene===!0?k.overrideMaterial:null;for(let G=0,lt=w.length;G<lt;G++){const wt=w[G],Rt=wt.object,Tt=wt.geometry,zt=wt.group;let kt=wt.material;kt.allowOverride===!0&&Y!==null&&(kt=Y),Rt.layers.test(q.layers)&&Ka(Rt,k,q,Tt,kt,zt)}}function Ka(w,k,q,Y,G,lt){w.onBeforeRender(v,k,q,Y,G,lt),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(v,k,q,Y,w,lt),G.transparent===!0&&G.side===Tn&&G.forceSinglePass===!1?(G.side=Fe,G.needsUpdate=!0,v.renderBufferDirect(q,k,Y,G,w,lt),G.side=Gn,G.needsUpdate=!0,v.renderBufferDirect(q,k,Y,G,w,lt),G.side=Tn):v.renderBufferDirect(q,k,Y,G,w,lt),w.onAfterRender(v,k,q,Y,G,lt)}function Ls(w,k,q){k.isScene!==!0&&(k=gt);const Y=ot.get(w),G=f.state.lights,lt=f.state.shadowsArray,wt=G.state.version,Rt=$.getParameters(w,G.state,lt,k,q),Tt=$.getProgramCacheKey(Rt);let zt=Y.programs;Y.environment=w.isMeshStandardMaterial?k.environment:null,Y.fog=k.fog,Y.envMap=(w.isMeshStandardMaterial?Ht:Vt).get(w.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,zt===void 0&&(w.addEventListener("dispose",tt),zt=new Map,Y.programs=zt);let kt=zt.get(Tt);if(kt!==void 0){if(Y.currentProgram===kt&&Y.lightsStateVersion===wt)return Ja(w,Rt),kt}else Rt.uniforms=$.getUniforms(w),w.onBeforeCompile(Rt,v),kt=$.acquireProgram(Rt,Tt),zt.set(Tt,kt),Y.uniforms=Rt.uniforms;const Ut=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ut.clippingPlanes=ut.uniform),Ja(w,Rt),Y.needsLights=Gh(w),Y.lightsStateVersion=wt,Y.needsLights&&(Ut.ambientLightColor.value=G.state.ambient,Ut.lightProbe.value=G.state.probe,Ut.directionalLights.value=G.state.directional,Ut.directionalLightShadows.value=G.state.directionalShadow,Ut.spotLights.value=G.state.spot,Ut.spotLightShadows.value=G.state.spotShadow,Ut.rectAreaLights.value=G.state.rectArea,Ut.ltc_1.value=G.state.rectAreaLTC1,Ut.ltc_2.value=G.state.rectAreaLTC2,Ut.pointLights.value=G.state.point,Ut.pointLightShadows.value=G.state.pointShadow,Ut.hemisphereLights.value=G.state.hemi,Ut.directionalShadowMap.value=G.state.directionalShadowMap,Ut.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ut.spotShadowMap.value=G.state.spotShadowMap,Ut.spotLightMatrix.value=G.state.spotLightMatrix,Ut.spotLightMap.value=G.state.spotLightMap,Ut.pointShadowMap.value=G.state.pointShadowMap,Ut.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=kt,Y.uniformsList=null,kt}function Za(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=vr.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function Ja(w,k){const q=ot.get(w);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function kh(w,k,q,Y,G){k.isScene!==!0&&(k=gt),xt.resetTextureUnits();const lt=k.fog,wt=Y.isMeshStandardMaterial?k.environment:null,Rt=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Xi,Tt=(Y.isMeshStandardMaterial?Ht:Vt).get(Y.envMap||wt),zt=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,kt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ut=!!q.morphAttributes.position,Zt=!!q.morphAttributes.normal,re=!!q.morphAttributes.color;let _e=Hn;Y.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(_e=v.toneMapping);const fe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,le=fe!==void 0?fe.length:0,Ft=ot.get(Y),de=f.state.lights;if(it===!0&&(V===!0||w!==x)){const Ie=w===x&&Y.id===S;ut.setState(Y,w,Ie)}let te=!1;Y.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==de.state.version||Ft.outputColorSpace!==Rt||G.isBatchedMesh&&Ft.batching===!1||!G.isBatchedMesh&&Ft.batching===!0||G.isBatchedMesh&&Ft.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ft.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ft.instancing===!1||!G.isInstancedMesh&&Ft.instancing===!0||G.isSkinnedMesh&&Ft.skinning===!1||!G.isSkinnedMesh&&Ft.skinning===!0||G.isInstancedMesh&&Ft.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ft.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ft.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ft.instancingMorph===!1&&G.morphTexture!==null||Ft.envMap!==Tt||Y.fog===!0&&Ft.fog!==lt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==ut.numPlanes||Ft.numIntersection!==ut.numIntersection)||Ft.vertexAlphas!==zt||Ft.vertexTangents!==kt||Ft.morphTargets!==Ut||Ft.morphNormals!==Zt||Ft.morphColors!==re||Ft.toneMapping!==_e||Ft.morphTargetsCount!==le)&&(te=!0):(te=!0,Ft.__version=Y.version);let He=Ft.currentProgram;te===!0&&(He=Ls(Y,k,G));let hi=!1,Ge=!1,ts=!1;const pe=He.getUniforms(),Ye=Ft.uniforms;if(j.useProgram(He.program)&&(hi=!0,Ge=!0,ts=!0),Y.id!==S&&(S=Y.id,Ge=!0),hi||x!==w){j.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),pe.setValue(I,"projectionMatrix",w.projectionMatrix),pe.setValue(I,"viewMatrix",w.matrixWorldInverse);const ze=pe.map.cameraPosition;ze!==void 0&&ze.setValue(I,st.setFromMatrixPosition(w.matrixWorld)),J.logarithmicDepthBuffer&&pe.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&pe.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),x!==w&&(x=w,Ge=!0,ts=!0)}if(G.isSkinnedMesh){pe.setOptional(I,G,"bindMatrix"),pe.setOptional(I,G,"bindMatrixInverse");const Ie=G.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),pe.setValue(I,"boneTexture",Ie.boneTexture,xt))}G.isBatchedMesh&&(pe.setOptional(I,G,"batchingTexture"),pe.setValue(I,"batchingTexture",G._matricesTexture,xt),pe.setOptional(I,G,"batchingIdTexture"),pe.setValue(I,"batchingIdTexture",G._indirectTexture,xt),pe.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&pe.setValue(I,"batchingColorTexture",G._colorsTexture,xt));const $e=q.morphAttributes;if(($e.position!==void 0||$e.normal!==void 0||$e.color!==void 0)&&at.update(G,q,He),(Ge||Ft.receiveShadow!==G.receiveShadow)&&(Ft.receiveShadow=G.receiveShadow,pe.setValue(I,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Ye.envMap.value=Tt,Ye.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&k.environment!==null&&(Ye.envMapIntensity.value=k.environmentIntensity),Ge&&(pe.setValue(I,"toneMappingExposure",v.toneMappingExposure),Ft.needsLights&&Hh(Ye,ts),lt&&Y.fog===!0&&nt.refreshFogUniforms(Ye,lt),nt.refreshMaterialUniforms(Ye,Y,B,H,f.state.transmissionRenderTarget[w.id]),vr.upload(I,Za(Ft),Ye,xt)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(vr.upload(I,Za(Ft),Ye,xt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&pe.setValue(I,"center",G.center),pe.setValue(I,"modelViewMatrix",G.modelViewMatrix),pe.setValue(I,"normalMatrix",G.normalMatrix),pe.setValue(I,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ie=Y.uniformsGroups;for(let ze=0,Or=Ie.length;ze<Or;ze++){const Xn=Ie[ze];Xt.update(Xn,He),Xt.bind(Xn,He)}}return He}function Hh(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function Gh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,k,q){const Y=ot.get(w);Y.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),ot.get(w.texture).__webglTexture=k,ot.get(w.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,k){const q=ot.get(w);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0};const Vh=I.createFramebuffer();this.setRenderTarget=function(w,k=0,q=0){L=w,E=k,R=q;let Y=!0,G=null,lt=!1,wt=!1;if(w){const Tt=ot.get(w);if(Tt.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(I.FRAMEBUFFER,null),Y=!1;else if(Tt.__webglFramebuffer===void 0)xt.setupRenderTarget(w);else if(Tt.__hasExternalTextures)xt.rebindTextures(w,ot.get(w.texture).__webglTexture,ot.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ut=w.depthTexture;if(Tt.__boundDepthTexture!==Ut){if(Ut!==null&&ot.has(Ut)&&(w.width!==Ut.image.width||w.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");xt.setupDepthRenderbuffer(w)}}const zt=w.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(wt=!0);const kt=ot.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(kt[k])?G=kt[k][q]:G=kt[k],lt=!0):w.samples>0&&xt.useMultisampledRTT(w)===!1?G=ot.get(w).__webglMultisampledFramebuffer:Array.isArray(kt)?G=kt[q]:G=kt,T.copy(w.viewport),P.copy(w.scissor),F=w.scissorTest}else T.copy(pt).multiplyScalar(B).floor(),P.copy(yt).multiplyScalar(B).floor(),F=ft;if(q!==0&&(G=Vh),j.bindFramebuffer(I.FRAMEBUFFER,G)&&Y&&j.drawBuffers(w,G),j.viewport(T),j.scissor(P),j.setScissorTest(F),lt){const Tt=ot.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,Tt.__webglTexture,q)}else if(wt){const Tt=k;for(let zt=0;zt<w.textures.length;zt++){const kt=ot.get(w.textures[zt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+zt,kt.__webglTexture,q,Tt)}}else if(w!==null&&q!==0){const Tt=ot.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Tt.__webglTexture,q)}S=-1},this.readRenderTargetPixels=function(w,k,q,Y,G,lt,wt,Rt=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=ot.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&wt!==void 0&&(Tt=Tt[wt]),Tt){j.bindFramebuffer(I.FRAMEBUFFER,Tt);try{const zt=w.textures[Rt],kt=zt.format,Ut=zt.type;if(!J.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-Y&&q>=0&&q<=w.height-G&&(w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Rt),I.readPixels(k,q,Y,G,Dt.convert(kt),Dt.convert(Ut),lt))}finally{const zt=L!==null?ot.get(L).__webglFramebuffer:null;j.bindFramebuffer(I.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(w,k,q,Y,G,lt,wt,Rt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=ot.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&wt!==void 0&&(Tt=Tt[wt]),Tt)if(k>=0&&k<=w.width-Y&&q>=0&&q<=w.height-G){j.bindFramebuffer(I.FRAMEBUFFER,Tt);const zt=w.textures[Rt],kt=zt.format,Ut=zt.type;if(!J.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Zt),I.bufferData(I.PIXEL_PACK_BUFFER,lt.byteLength,I.STREAM_READ),w.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Rt),I.readPixels(k,q,Y,G,Dt.convert(kt),Dt.convert(Ut),0);const re=L!==null?ot.get(L).__webglFramebuffer:null;j.bindFramebuffer(I.FRAMEBUFFER,re);const _e=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await sf(I,_e,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Zt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,lt),I.deleteBuffer(Zt),I.deleteSync(_e),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,k=null,q=0){const Y=Math.pow(2,-q),G=Math.floor(w.image.width*Y),lt=Math.floor(w.image.height*Y),wt=k!==null?k.x:0,Rt=k!==null?k.y:0;xt.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,q,0,0,wt,Rt,G,lt),j.unbindTexture()};const Wh=I.createFramebuffer(),Xh=I.createFramebuffer();this.copyTextureToTexture=function(w,k,q=null,Y=null,G=0,lt=null){lt===null&&(G!==0?(Ss("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),lt=G,G=0):lt=0);let wt,Rt,Tt,zt,kt,Ut,Zt,re,_e;const fe=w.isCompressedTexture?w.mipmaps[lt]:w.image;if(q!==null)wt=q.max.x-q.min.x,Rt=q.max.y-q.min.y,Tt=q.isBox3?q.max.z-q.min.z:1,zt=q.min.x,kt=q.min.y,Ut=q.isBox3?q.min.z:0;else{const $e=Math.pow(2,-G);wt=Math.floor(fe.width*$e),Rt=Math.floor(fe.height*$e),w.isDataArrayTexture?Tt=fe.depth:w.isData3DTexture?Tt=Math.floor(fe.depth*$e):Tt=1,zt=0,kt=0,Ut=0}Y!==null?(Zt=Y.x,re=Y.y,_e=Y.z):(Zt=0,re=0,_e=0);const le=Dt.convert(k.format),Ft=Dt.convert(k.type);let de;k.isData3DTexture?(xt.setTexture3D(k,0),de=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(xt.setTexture2DArray(k,0),de=I.TEXTURE_2D_ARRAY):(xt.setTexture2D(k,0),de=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const te=I.getParameter(I.UNPACK_ROW_LENGTH),He=I.getParameter(I.UNPACK_IMAGE_HEIGHT),hi=I.getParameter(I.UNPACK_SKIP_PIXELS),Ge=I.getParameter(I.UNPACK_SKIP_ROWS),ts=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,fe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,fe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,zt),I.pixelStorei(I.UNPACK_SKIP_ROWS,kt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ut);const pe=w.isDataArrayTexture||w.isData3DTexture,Ye=k.isDataArrayTexture||k.isData3DTexture;if(w.isDepthTexture){const $e=ot.get(w),Ie=ot.get(k),ze=ot.get($e.__renderTarget),Or=ot.get(Ie.__renderTarget);j.bindFramebuffer(I.READ_FRAMEBUFFER,ze.__webglFramebuffer),j.bindFramebuffer(I.DRAW_FRAMEBUFFER,Or.__webglFramebuffer);for(let Xn=0;Xn<Tt;Xn++)pe&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ot.get(w).__webglTexture,G,Ut+Xn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ot.get(k).__webglTexture,lt,_e+Xn)),I.blitFramebuffer(zt,kt,wt,Rt,Zt,re,wt,Rt,I.DEPTH_BUFFER_BIT,I.NEAREST);j.bindFramebuffer(I.READ_FRAMEBUFFER,null),j.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||w.isRenderTargetTexture||ot.has(w)){const $e=ot.get(w),Ie=ot.get(k);j.bindFramebuffer(I.READ_FRAMEBUFFER,Wh),j.bindFramebuffer(I.DRAW_FRAMEBUFFER,Xh);for(let ze=0;ze<Tt;ze++)pe?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,$e.__webglTexture,G,Ut+ze):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,$e.__webglTexture,G),Ye?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ie.__webglTexture,lt,_e+ze):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ie.__webglTexture,lt),G!==0?I.blitFramebuffer(zt,kt,wt,Rt,Zt,re,wt,Rt,I.COLOR_BUFFER_BIT,I.NEAREST):Ye?I.copyTexSubImage3D(de,lt,Zt,re,_e+ze,zt,kt,wt,Rt):I.copyTexSubImage2D(de,lt,Zt,re,zt,kt,wt,Rt);j.bindFramebuffer(I.READ_FRAMEBUFFER,null),j.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ye?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(de,lt,Zt,re,_e,wt,Rt,Tt,le,Ft,fe.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(de,lt,Zt,re,_e,wt,Rt,Tt,le,fe.data):I.texSubImage3D(de,lt,Zt,re,_e,wt,Rt,Tt,le,Ft,fe):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,lt,Zt,re,wt,Rt,le,Ft,fe.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,lt,Zt,re,fe.width,fe.height,le,fe.data):I.texSubImage2D(I.TEXTURE_2D,lt,Zt,re,wt,Rt,le,Ft,fe);I.pixelStorei(I.UNPACK_ROW_LENGTH,te),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,He),I.pixelStorei(I.UNPACK_SKIP_PIXELS,hi),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ge),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ts),lt===0&&k.generateMipmaps&&I.generateMipmap(de),j.unbindTexture()},this.initRenderTarget=function(w){ot.get(w).__webglFramebuffer===void 0&&xt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?xt.setTextureCube(w,0):w.isData3DTexture?xt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?xt.setTexture2DArray(w,0):xt.setTexture2D(w,0),j.unbindTexture()},this.resetState=function(){E=0,R=0,L=null,j.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}const us=72,a_=`
  float akHash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float akNoise(vec2 p){
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(akHash(i), akHash(i + vec2(1,0)), f.x),
               mix(akHash(i + vec2(0,1)), akHash(i + vec2(1,1)), f.x), f.y);
  }
  float akFbm(vec2 p){
    return akNoise(p) * 0.55 + akNoise(p * 2.7) * 0.27 + akNoise(p * 6.1) * 0.18;
  }
`;function Eh(i,t,e=0){return i.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vAkWorld;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAkWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`);const s=t.map(r=>`d += (akFbm(vAkWorld.xz * ${r.freq.toFixed(4)}) - 0.5) * ${r.amp.toFixed(4)};`).join(`
      `);n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vAkWorld;
`+a_).replace("#include <color_fragment>",`
        #include <color_fragment>
        float d = 0.0;
        ${s}
        diffuseColor.rgb *= (1.0 + d);
        ${e>0?`
        // Hue drift as well as value: a surface that only varies in brightness
        // still reads as one flat material with lighting on it.
        float h = akFbm(vAkWorld.xz * 0.021) - 0.5;
        diffuseColor.r *= 1.0 + h * ${(e*1.2).toFixed(3)};
        diffuseColor.b *= 1.0 - h * ${(e*.85).toFixed(3)};`:""}
      `)},i.needsUpdate=!0,i}const _l={ocean:[.1,.26,.36],beach:[.85,.79,.6],meadow:[.36,.55,.26],forest:[.2,.4,.22],ashland:[.31,.25,.24],dunes:[.8,.7,.48],alpine:[.78,.8,.84],glacier:[.88,.93,.97]};se.tarmac.id+"",se.rumble.id+"",se.boost.id+"",se.ice.id+"",se.wood.id+"",se.metal.id+"";class c_{constructor(t,e,n){this.world=t,this.scene=e,this.config=n,this.chunks=new Map,this.pending=[],this.group=new Di,this.group.name="terrain",e.add(this.group),this.material=Eh(new Ur({vertexColors:!0}),[{freq:.013,amp:.26},{freq:.18,amp:.16},{freq:3.2,amp:.15},{freq:14,amp:.11},{freq:46,amp:.06}],.16),this._center={cx:1e9,cz:1e9},this._pool=[],this._idxPool=[],this._poolRes=this.config.q.terrainRes,this._want=-1}key(t,e){return t*65536+e}ringRadius(t){let e=Math.max(1,Math.floor(Math.sqrt(t)/2));for(;e>1&&(2*e+1)**2>t;)e--;return e}budgetReport(){const t=this.config.q.terrainChunks,e=this.ringRadius(t),n=(2*e+1)**2,s=this.chunks.size;return{tier:this.config.q.name,budget:t,ring:e,capacity:n,resident:s,pending:this.pending.length+(this.job?1:0),ok:s<=t&&n<=t}}update(t,e,n=3){const s=Math.floor(t/us),r=Math.floor(e/us),o=this.ringRadius(this.config.q.terrainChunks);if(s!==this._center.cx||r!==this._center.cz||o!==this._want){this._center={cx:s,cz:r},this._want=o,this.pending.length=0;const c=new Set;for(let h=-o;h<=o;h++)for(let u=-o;u<=o;u++){const p=this.key(s+u,r+h);c.add(p),this.chunks.has(p)||this.pending.push({cx:s+u,cz:r+h,d:u*u+h*h,k:p})}this.pending.sort((h,u)=>h.d-u.d);const l=this.config.q.terrainRes;this._poolRes!==l&&(this._pool=[],this._idxPool=[],this._poolRes=l,this._idxRes=l);for(const[h,u]of this.chunks)c.has(h)||this.evict(h,u,l)}const a=performance.now()+n;for(;performance.now()<a;){if(!this.job){const c=this.pending.shift();if(!c)break;if(this.chunks.has(c.k))continue;this.job=this.beginChunk(c.cx,c.cz,c.k)}if(this.stepChunk(this.job,a)){const c=this.finishChunk(this.job);this.chunks.set(this.job.k,c),this.group.add(c),this.job=null,this.enforceBudget()}}}evict(t,e,n){this.group.remove(e),e.geometry.dispose(),e.userData.buffers&&this._pool.length<24&&this._pool.push(e.userData.buffers),e.userData.index&&this._idxPool.length<24&&this._idxRes===n&&this._idxPool.push(e.userData.index),this.chunks.delete(t)}enforceBudget(){const t=this.config.q.terrainChunks;if(this.chunks.size<=t)return;const e=this.config.q.terrainRes,{cx:n,cz:s}=this._center,r=[];for(const[o,a]of this.chunks)r.push([o,a,(a.userData.cx-n)**2+(a.userData.cz-s)**2]);r.sort((o,a)=>a[2]-o[2]);for(let o=0;this.chunks.size>t&&o<r.length;o++)this.evict(r[o][0],r[o][1],e)}makeIndex(t){const e=this._idxPool&&this._idxPool.length&&this._idxRes===t?this._idxPool.pop():null;if(e)return e;const n=t+1,s=new Uint32Array(t*t*6);let r=0;for(let o=0;o<t;o++)for(let a=0;a<t;a++){const c=o*n+a,l=c+1,h=c+n,u=h+1;s[r++]=c,s[r++]=h,s[r++]=l,s[r++]=l,s[r++]=h,s[r++]=u}return this._idxRes=t,this._idxPool||(this._idxPool=[]),new ce(s,1)}beginChunk(t,e,n){const s=this.config.q.terrainRes,r=s+1,o=null;return{cx:t,cz:e,k:n,R:s,n:r,row:0,x0:t*us,z0:e*us,step:us/s,pos:o?o.pos:new Float32Array(r*r*3),col:o?o.col:new Float32Array(r*r*3),hgt:o?o.hgt:new Float32Array(r*r),nrm:o?o.nrm:new Float32Array(r*r*3)}}stepChunk(t,e){const n=this.world,{n:s,x0:r,z0:o,step:a,pos:c,col:l,hgt:h}=t;for(;t.row<s;){const u=t.row;for(let p=0;p<s;p++){const d=r+p*a,g=o+u*a,_=n.heightAt(d,g),m=(u*s+p)*3;c[m]=d,c[m+1]=_,c[m+2]=g,h[u*s+p]=_;const f=n.biomeAtKnownHeight(d,g,_),y=_l[f.name]||_l.meadow,M=.9+.14*((p*7+u*13)%5/5);l[m]=y[0]*M,l[m+1]=y[1]*M,l[m+2]=y[2]*M}if(t.row++,performance.now()>=e)return t.row>=s}return!0}finishChunk(t){const{n:e,R:n,step:s,pos:r,col:o,hgt:a,nrm:c}=t;for(let u=0;u<e;u++)for(let p=0;p<e;p++){const d=a[u*e+Math.max(0,p-1)],g=a[u*e+Math.min(e-1,p+1)],_=a[Math.max(0,u-1)*e+p],m=a[Math.min(e-1,u+1)*e+p],f=(d-g)/(2*s),y=(_-m)/(2*s),M=1/Math.hypot(f,1,y),v=(u*e+p)*3;c[v]=f*M,c[v+1]=M,c[v+2]=y*M}const l=new ge;l.setAttribute("position",new ce(r,3)),l.setAttribute("normal",new ce(c,3)),l.setAttribute("color",new ce(o,3)),l.setIndex(this.makeIndex(n)),l.computeBoundingSphere();const h=new Ne(l,this.material);return h.matrixAutoUpdate=!1,h.receiveShadow=!0,h.userData.buffers={pos:r,col:o,hgt:a,nrm:c},h.userData.index=l.index,h.userData.cx=t.cx,h.userData.cz=t.cz,h}flush(){for(;this.pending.length||this.job;){if(!this.job){const e=this.pending.shift();if(!e)break;if(this.chunks.has(e.k))continue;this.job=this.beginChunk(e.cx,e.cz,e.k)}this.stepChunk(this.job,1/0);const t=this.finishChunk(this.job);this.chunks.set(this.job.k,t),this.group.add(t),this.job=null,this.enforceBudget()}}dispose(){for(const[,t]of this.chunks)t.geometry.dispose();this.chunks.clear(),this.material.dispose(),this.scene.remove(this.group)}}function l_(i,t){const e=[],n=[],s=[];let r=0;for(const c of i.roads){const l=c.samples,h=l.length,p=c.closed!==!1?h:h-1;for(let d=0;d<h;d++){const g=l[d],_=g.width,m=2.4,f=.07,y=g.pad;for(const[M,v]of[[-(_+m),y?[.16,.42,.6]:[.55,.16,.16]],[-_,y?[.2,.72,.95]:[.21,.21,.24]],[_,y?[.2,.72,.95]:[.21,.21,.24]],[_+m,y?[.16,.42,.6]:[.55,.16,.16]]]){e.push(g.x+g.nx*M,g.y+f,g.z+g.nz*M);const A=1-Math.abs(M)/(_+m)*.1;n.push(v[0]*A,v[1]*A,v[2]*A)}}for(let d=0;d<p;d++){const g=r+d*4,_=r+(d+1)%h*4;for(let m=0;m<3;m++)s.push(g+m,g+m+1,_+m),s.push(g+m+1,_+m+1,_+m)}r+=h*4}const o=new ge;o.setAttribute("position",new Qt(e,3)),o.setAttribute("color",new Qt(n,3)),o.setIndex(s),o.computeVertexNormals(),o.computeBoundingSphere();const a=new Ne(o,Eh(new Ur({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),[{freq:1.6,amp:.13},{freq:.34,amp:.09},{freq:.045,amp:.05},{freq:9,amp:.11},{freq:34,amp:.08}],.05));return a.name="roads",a.matrixAutoUpdate=!1,a.receiveShadow=!0,t.add(a),a}const lr=new Gt,ue=i=>(lr.setHex(i,Ce),[lr.r,lr.g,lr.b]),Th={LIVERY:ue(16777215),LIVERY_D:ue(9342606),LIVERY_L:ue(16777215),FRAME:ue(3027514),FRAME_L:ue(3356479),RUBBER:ue(2040103),RUBBER_L:ue(1974310),LETTER:ue(5791078),RIM:ue(1711138),RIM_LIP:ue(3752010),CHROME:ue(7765386),CHROME_D:ue(5133406),BORE:ue(592396),ALLOY:ue(5791336),ALLOY_D:ue(3948874),FILTER:ue(8222568),WIRE:ue(12855583),SPRING:ue(13124655),SEAT:ue(2369326),SUIT:ue(13710634),SUIT_Y:ue(15777558),GLOVE:ue(2369325),BOOT:ue(1711137),VISOR:ue(1187370),STRIPE:ue(15921902),PLATE:ue(15263970)},Nt={chrome:1,glass:.95,alloy:.45,paint:.34,plate:.28,cloth:.06,rubber:.03,matte:.1},ie={rubber:1,cloth:.7,paint:.3,alloy:.5,chrome:0},dn=(i,t,e)=>new U(i,t,e),h_=dn(0,1,0),oe=(i,t,e,n=0,s=0,r=0,o=1,a=1,c=1)=>new Jt().compose(dn(i,t,e),new nn().setFromEuler(new Le(n,s,r)),dn(o,a,c));function Hi(i,t){const e=dn(...i),n=dn(...t),s=new U().subVectors(n,e),r=new nn().setFromUnitVectors(h_,s.clone().normalize());return new Jt().compose(e.clone().add(n).multiplyScalar(.5),r,dn(1,1,1))}const As=(i,t)=>Math.hypot(t[0]-i[0],t[1]-i[1],t[2]-i[2]);function wn(i,t,e=7,n=!1){const s=new ah(i.map(o=>dn(...o)),n,"catmullrom",.5),r=Math.max(6,Math.min(48,Math.round(s.getLength()/.085)));return new Va(s,r,t,e,n)}function Nn(i,t,e,n=3,s=8){const r=Math.max(.001,As(i,t)-e*2),o=new Fa(e,r,n,s);return o.applyMatrix4(Hi(i,t)),o}function ya(i,t=20){return new ka(i.map(([e,n])=>new dt(Math.max(1e-4,e),n)),t)}function u_(i,t,e,n){const s=As(i,t),r=[],o=7;for(let c=0;c<=o;c++){const l=c/o;r.push([e+(n-e)*Math.pow(l,1.7),-s/2+l*s])}r.push([n*.86,s/2]),r.push([n*.8,s/2-n*.9]);const a=ya(r,18);return a.applyMatrix4(Hi(i,t)),a}function f_(i,t,e,n,s){const r=As(i,t),o=[],a=s*8;for(let l=0;l<=a;l++){const h=l/a,u=h*s*Math.PI*2;o.push([Math.cos(u)*e,-r/2+h*r,Math.sin(u)*e])}const c=wn(o,n,5);return c.applyMatrix4(Hi(i,t)),c}function d_(i,t,e,n,s){const r=new mn(i,i,t,s,1,!0),o=r.attributes.position;for(let a=0;a<o.count;a++){const c=o.getX(a),l=o.getZ(a),h=1+Math.cos(Math.atan2(c,l)*e)*n;o.setX(a,c*h),o.setZ(a,l*h)}return o.needsUpdate=!0,r.computeVertexNormals(),r}function Xa(i,t,e=.012,n=6){const s=new dh;s.moveTo(i[0][0],i[0][1]);for(let o=1;o<i.length;o++)s.lineTo(i[o][0],i[o][1]);s.closePath();const r=new Ba(s,{depth:Math.max(.001,t-e*2),bevelEnabled:!0,bevelSize:e,bevelThickness:e,bevelSegments:1,curveSegments:n});return r.translate(0,0,-(t-e*2)/2),r}function xl(i,t,e,n=.012){const s=Xa(i,t,n);return s.rotateX(Math.PI/2),s.translate(0,e,0),s}function Ci(i,t,e,n=.012){const s=Xa(i,t,n);return s.rotateY(-Math.PI/2),s.translate(e,0,0),s}function p_(i,t,e=.008,n=4){const s=Xa(i,t,e,n);return s.rotateY(Math.PI/2),s}const En=(i,t,e)=>new Xe(i,t,e),we=(i,t,e=12)=>new mn(i,i,t,e),vl=(i,t=14,e=10)=>new $i(i,t,e);function Ah(i){let t=0;const e=i.map(l=>{const h=l.geometry.index?l.geometry.toNonIndexed():l.geometry.clone();return l.matrix&&h.applyMatrix4(l.matrix),h.attributes.normal||h.computeVertexNormals(),t+=h.attributes.position.count,{g:h,p:l}}),n=new Float32Array(t*3),s=new Float32Array(t*3),r=new Float32Array(t*3),o=new Float32Array(t*3);let a=0;for(const{g:l,p:h}of e){n.set(l.attributes.position.array,a*3),s.set(l.attributes.normal.array,a*3);const u=h.color,p=h.accent?.5:h.tint?1:0,d=h.spec??Nt.paint,g=h.grain??ie.paint;for(let _=0;_<l.attributes.position.count;_++){const m=(a+_)*3;r[m]=u[0],r[m+1]=u[1],r[m+2]=u[2],o[m]=p,o[m+1]=d,o[m+2]=g}a+=l.attributes.position.count,l.dispose()}const c=new ge;return c.setAttribute("position",new ce(n,3)),c.setAttribute("normal",new ce(s,3)),c.setAttribute("color",new ce(r,3)),c.setAttribute("aMask",new ce(o,3)),c.computeBoundingSphere(),c}function Rh(i,{cell:t=.035,radii:e=[.055,.13,.24],strength:n=.4,floor:s=.55}={}){const r=i.attributes.position.array,o=i.attributes.normal.array,a=i.attributes.color.array,c=i.attributes.position.count;let l=1/0,h=1/0,u=1/0,p=-1/0,d=-1/0,g=-1/0;for(let P=0;P<c;P++){const F=r[P*3],N=r[P*3+1],D=r[P*3+2];F<l&&(l=F),F>p&&(p=F),N<h&&(h=N),N>d&&(d=N),D<u&&(u=D),D>g&&(g=D)}const _=.06;l-=_,h-=_,u-=_,p+=_,d+=_,g+=_;const m=Math.max(1,Math.ceil((p-l)/t)),f=Math.max(1,Math.ceil((d-h)/t)),y=Math.max(1,Math.ceil((g-u)/t)),M=new Uint8Array(m*f*y),v=(P,F,N)=>(N*f+F)*m+P,A=(P,F,N)=>{const D=(P-l)/t|0,O=(F-h)/t|0,H=(N-u)/t|0;D>=0&&O>=0&&H>=0&&D<m&&O<f&&H<y&&(M[v(D,O,H)]=1)};for(let P=0;P<c;P+=3){const F=r[P*3],N=r[P*3+1],D=r[P*3+2],O=r[P*3+3],H=r[P*3+4],B=r[P*3+5],Z=r[P*3+6],rt=r[P*3+7],pt=r[P*3+8],yt=Math.hypot(O-F,H-N,B-D),ft=Math.hypot(Z-F,rt-N,pt-D),Mt=Math.min(12,Math.max(1,Math.ceil(Math.max(yt,ft)/(t*.7))));for(let it=0;it<=Mt;it++)for(let V=0;V<=Mt-it;V++){const X=it/Mt,st=V/Mt,mt=1-X-st;A(F*mt+O*X+Z*st,N*mt+H*X+rt*st,D*mt+B*X+pt*st)}}const E=[],R=Math.PI*(3-Math.sqrt(5)),L=12;for(let P=0;P<L;P++){const F=1-P/(L-1)*.92,N=Math.sqrt(Math.max(0,1-F*F)),D=R*P;E.push([Math.cos(D)*N,F,Math.sin(D)*N])}const S=dn(0,0,0),x=dn(0,0,0),T=dn(0,0,0);for(let P=0;P<c;P++){T.set(o[P*3],o[P*3+1],o[P*3+2]),T.lengthSq()<1e-8?T.set(0,1,0):T.normalize(),S.set(Math.abs(T.y)>.94?1:0,Math.abs(T.y)>.94?0:1,0).cross(T).normalize(),x.crossVectors(T,S);const F=r[P*3]+T.x*.012,N=r[P*3+1]+T.y*.012,D=r[P*3+2]+T.z*.012;let O=0,H=0;for(const Z of E){const rt=S.x*Z[0]+T.x*Z[1]+x.x*Z[2],pt=S.y*Z[0]+T.y*Z[1]+x.y*Z[2],yt=S.z*Z[0]+T.z*Z[1]+x.z*Z[2];for(let ft=0;ft<e.length;ft++){const Mt=e[ft],it=(F+rt*Mt-l)/t|0,V=(N+pt*Mt-h)/t|0,X=(D+yt*Mt-u)/t|0,st=1/(ft+1);H+=st,it>=0&&V>=0&&X>=0&&it<m&&V<f&&X<y&&M[v(it,V,X)]&&(O+=st)}}const B=Math.max(s,1-O/H*n);a[P*3]*=B,a[P*3+1]*=B,a[P*3+2]*=B}return i.attributes.color.needsUpdate=!0,i}const m_=`
  float akH(vec3 p){ return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
  float akN(vec3 p){
    vec3 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = mix(mix(akH(i), akH(i + vec3(1,0,0)), f.x), mix(akH(i + vec3(0,1,0)), akH(i + vec3(1,1,0)), f.x), f.y);
    float b = mix(mix(akH(i + vec3(0,0,1)), akH(i + vec3(1,0,1)), f.x), mix(akH(i + vec3(0,1,1)), akH(i + vec3(1,1,1)), f.x), f.y);
    return mix(a, b, f.z);
  }`;function Ml(){const i=new gd({vertexColors:!0,specular:new Gt(13160155),shininess:70});return i.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aMask;
attribute vec3 aAccent;
varying float vSpec;
varying float vGrain;
varying vec3 vAkLocal;`).replace("#include <color_vertex>",`
        vColor = color;
        #ifdef USE_INSTANCING_COLOR
          // Three-way: own colour → accent → livery, selected by aMask.x.
          // Steps, not a smooth mix: the values are exactly 0, 0.5 and 1.
          vec3 akAcc = vColor * aAccent;
          vec3 akLiv = vColor * instanceColor.xyz;
          vColor = mix(mix(vColor, akAcc, step(0.25, aMask.x)), akLiv, step(0.75, aMask.x));
        #endif
        vSpec = aMask.y;
        vGrain = aMask.z;
        vAkLocal = position;
      `),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vSpec;
varying float vGrain;
varying vec3 vAkLocal;
`+m_).replace("#include <specularmap_fragment>","float specularStrength = vSpec;").replace("#include <color_fragment>",`
        #include <color_fragment>
        float gA = akN(vAkLocal * 60.0) - 0.5;
        float gB = akN(vAkLocal * 170.0) - 0.5;
        diffuseColor.rgb *= 1.0 + (gA * 0.34 + gB * 0.26) * vGrain;
      `)},i}const Rr=.585,Oi=.6,zi=.285,yl=.225,Cr=.64,_s=-.62,Bn=.35,Sl=.345,g_=.036;function __(){const i=Th,t=[],e=(f,y,M={})=>t.push({geometry:f,color:y,...M}),n=(f,y=g_,M=7)=>e(wn(f,y,M),i.FRAME,{spec:Nt.matte,grain:ie.paint}),s=(f,y)=>e(f,i.CHROME,{spec:Nt.chrome,grain:ie.chrome,matrix:y});for(const f of[1,-1])n([[.3*f,.175,-.98],[.45*f,.185,-.66],[.48*f,.185,-.1],[.47*f,.195,.42],[.4*f,.225,.82],[.26*f,.255,1.02]]),n([[.46*f,.19,.28],[.62*f,.2,.2],[.66*f,.21,-.1],[.6*f,.2,-.34]],.026);for(const[f,y]of[[.215,1],[.405,.965]])n([[-.34,f,.94*y],[-.24,f+.012,1.1*y],[0,f+.02,1.155*y],[.24,f+.012,1.1*y],[.34,f,.94*y]],.03);for(const f of[1,-1])n([[.245*f,.2,1.085],[.245*f,.42,1.055]],.024,6);n([[-.42,.2,-.9],[-.52,.3,-1.05],[-.3,.36,-1.14],[0,.375,-1.16],[.3,.36,-1.14],[.52,.3,-1.05],[.42,.2,-.9]],.03),n([[-.47,.19,.3],[0,.185,.315],[.47,.19,.3]],.026),n([[-.46,.185,-.32],[0,.18,-.335],[.46,.185,-.32]],.026);for(const f of[1,-1])n([[.26*f,.2,-.42],[.29*f,.4,-.48],[.3*f,.62,-.53]],.026);e(wn([[-Cr-.02,Bn,_s],[0,Bn,_s],[Cr+.02,Bn,_s]],.036,10),i.CHROME_D,{spec:Nt.chrome,grain:ie.chrome}),e(wn([[-Rr,zi*.96,Oi],[0,.3,Oi+.02],[Rr,zi*.96,Oi]],.028,8),i.CHROME_D,{spec:Nt.alloy,grain:ie.alloy});for(const f of[1,-1])e(wn([[.5*f,.3,Oi-.03],[.3*f,.36,.4],[.09*f,.47,.22]],.017,6),i.CHROME_D,{spec:Nt.alloy,grain:ie.alloy});e(xl([[-.3,.9],[-.42,.52],[-.45,-.06],[-.4,-.5],[.4,-.5],[.45,-.06],[.42,.52],[.3,.9]],.055,.185),i.LIVERY_D,{tint:!0,spec:Nt.paint}),e(xl([[-.29,1],[-.33,.72],[-.3,.5],[.3,.5],[.33,.72],[.29,1]],.05,.3),i.LIVERY,{accent:!0,spec:Nt.paint});for(const f of[1,-1]){e(Ci([[-.26,.175],[-.3,.28],[-.26,.46],[.18,.5],[.28,.42],[.3,.24],[.24,.175]],.215,.545*f,.018),i.LIVERY,{tint:!0,spec:Nt.paint});const y=.655*f;for(let M=0;M<4;M++)e(En(.016,.03,.2),i.FRAME,{spec:Nt.matte,matrix:oe(y,.415-M*.048,.1,0,0,.1*f)});for(let M=0;M<2;M++)e(we(.043,.018,12),i.FRAME,{spec:Nt.matte,matrix:oe(y,.29,-.1-M*.115,0,0,Math.PI/2)}),s(we(.051,.012,12),oe(y-.004*f,.29,-.1-M*.115,0,0,Math.PI/2));for(let M=0;M<3;M++)e(En(.014,.115,.03),i.LIVERY,{accent:!0,spec:Nt.plate,matrix:oe(y,.4,.05+M*.052,0,0,.42*f)})}e(Ci([[.1,.355],[-.26,.345],[-.4,.5],[-.455,.76],[-.44,.92],[-.36,.94],[-.335,.72],[-.28,.5],[.1,.5]],.44,0,.016),i.SEAT,{spec:Nt.matte,grain:ie.cloth});for(const f of[1,-1])e(Ci([[.02,.36],[-.3,.35],[-.42,.62],[-.4,.8],[-.3,.78],[-.22,.56],[.02,.5]],.055,.25*f,.012),i.SEAT,{spec:Nt.matte,grain:ie.cloth});e(Ci([[-.72,.36],[-.76,.5],[-.7,.66],[-.4,.68],[-.34,.54],[-.38,.36]],.3,0,.014),i.ALLOY,{spec:Nt.alloy,grain:ie.alloy});for(let f=0;f<9;f++)e(En(.375,.009,.28),i.ALLOY_D,{spec:Nt.alloy,grain:ie.alloy,matrix:oe(0,.395+f*.03,-.56)});e(En(.26,.07,.24),i.ALLOY_D,{spec:Nt.alloy,matrix:oe(0,.695,-.54)}),s(we(.15,.026,20),oe(0,.836,-.5)),e(d_(.138,.07,22,.055,44),i.FILTER,{spec:Nt.matte,grain:ie.alloy,matrix:oe(0,.79,-.5)}),s(we(.15,.022,20),oe(0,.746,-.5)),s(we(.024,.04,8),oe(0,.864,-.5));for(let f=0;f<4;f++){const y=-.68+f*.095;s(wn([[-.17,.46-f*.012,y],[-.3,.42,y+.1],[-.38,.4,-.4+f*.02],[-.4,.44,-.32]],.025,6))}s(wn([[-.4,.44,-.34],[-.42,.47,-.28]],.048,8));for(const[f,y,M,v]of[[[-.38,.52,-.3],[-.54,.6,.34],.038,.074],[[-.34,.4,-.34],[-.48,.47,.29],.035,.068]]){e(u_(f,y,M,v),i.CHROME,{spec:Nt.chrome,grain:ie.chrome});const A=As(f,y),E=[(y[0]-f[0])/A,(y[1]-f[1])/A,(y[2]-f[2])/A],R=[y[0]-E[0]*.075,y[1]-E[1]*.075,y[2]-E[2]*.075];e(we(v*.79,.01,16),i.BORE,{spec:Nt.matte,grain:0,matrix:Hi(R,[R[0]+E[0]*.02,R[1]+E[1]*.02,R[2]+E[2]*.02])})}e(we(.055,.1,10),i.FRAME,{spec:Nt.matte,matrix:oe(.15,.66,-.62)});for(let f=0;f<4;f++)e(wn([[.15,.71,-.62],[.24+f*.012,.66-f*.02,-.6+f*.03],[.2,.52-f*.025,-.7+f*.09]],.0105,5),i.WIRE,{spec:Nt.paint,grain:ie.paint});for(const f of[1,-1]){const y=[.3*f,.36,-.44],M=[.335*f,.66,-.56];s(we(.016,As(y,M)*1.06,8),Hi(y,M)),e(f_(y,M,.048,.0135,7),i.SPRING,{spec:Nt.paint,grain:ie.paint}),s(we(.058,.018,12),Hi([M[0],M[1]-.01,M[2]],[M[0],M[1]+.01,M[2]]))}const o=1.14,a=.32,c=f=>.055*Math.sin(Math.PI*Math.pow(f,.8)),l=[];for(let f=0;f<=10;f++){const y=f/10;l.push([-a/2+y*a,c(y)])}for(let f=10;f>=0;f--){const y=f/10;l.push([-a/2+y*a,-.03-c(y)*.22])}const h=oe(0,1.095,-.96,-.13,0,0),u=p_(l,o,.006);u.applyMatrix4(h),e(u,i.LIVERY,{tint:!0,spec:Nt.paint});for(const f of[1,-1]){e(Ci([[.24,-.06],[.2,.11],[-.16,.1],[-.18,-.07]],.016,.575*f,.006),i.LIVERY_D,{tint:!0,spec:Nt.paint,matrix:h}),n([[.25*f,.56,-.66],[.28*f,.82,-.8],[.3*f,1.06,-.95]],.023,6),e(Ci([[-.3,.86],[-.44,.88],[-.46,1.03],[-.3,1]],.022,.25*f,.008),i.LIVERY,{accent:!0,spec:Nt.paint});for(let y=0;y<3;y++)e(En(.03,.014,.07),i.FRAME,{spec:Nt.matte,matrix:oe(.25*f,.915+y*.032,-.415+y*.014,0,0,0)})}e(Nn([0,.445,-.06],[0,.775,-.315],.15,4,10),i.SUIT,{spec:Nt.cloth,grain:ie.cloth}),e(Nn([-.155,.79,-.33],[.155,.79,-.33],.085,3,8),i.SUIT_Y,{spec:Nt.cloth,grain:ie.cloth}),e(Nn([0,.815,-.335],[0,.875,-.35],.072,3,8),i.SUIT,{spec:Nt.cloth});for(const f of[1,-1])e(Nn([.185*f,.785,-.31],[.275*f,.705,-.02],.062,3,8),i.SUIT,{spec:Nt.cloth,grain:ie.cloth}),e(Nn([.275*f,.705,-.02],[.15*f,.805,.235],.054,3,8),i.SUIT_Y,{spec:Nt.cloth,grain:ie.cloth}),e(vl(.07,10,8),i.GLOVE,{spec:Nt.matte,grain:ie.cloth,matrix:oe(.14*f,.815,.255)}),e(Nn([.135*f,.445,-.03],[.18*f,.505,.4],.088,3,8),i.SUIT,{spec:Nt.cloth,grain:ie.cloth}),e(Nn([.18*f,.505,.4],[.18*f,.345,.715],.063,3,8),i.SUIT_Y,{spec:Nt.cloth,grain:ie.cloth}),e(Nn([.18*f,.325,.7],[.18*f,.29,.815],.07,3,8),i.BOOT,{spec:Nt.matte});const g=oe(0,.955,-.365,0,0,0,1,.96,1.05);e(vl(.186,18,14),i.LIVERY,{tint:!0,spec:Nt.paint,matrix:g});for(const f of[Math.PI/2-.13,Math.PI*1.5-.13])e(new $i(.1885,6,10,f,.26,.02,Math.PI*.52),i.STRIPE,{spec:Nt.paint,grain:ie.paint,matrix:g});e(new $i(.1925,20,10,Math.PI/2-Math.PI*.38,Math.PI*.76,Math.PI*.34,Math.PI*.3),i.VISOR,{spec:Nt.glass,grain:0,matrix:g}),e(En(.3,.022,.055),i.FRAME,{spec:Nt.matte,matrix:oe(0,1.008,-.196,-.3,0,0)}),e(we(.052,.1,8),i.FRAME,{spec:Nt.matte,matrix:oe(0,.905,-.535,Math.PI/2,0,0)});const _=oe(0,.845,.255,-.52,0,0);e(new Ga(.125,.024,6,20),i.FRAME,{spec:Nt.matte,grain:ie.cloth,matrix:_}),s(we(.042,.03,12),oe(0,.845,.255,Math.PI/2-.52,0,0));for(let f=0;f<3;f++){const y=f/3*Math.PI*2+Math.PI/2;e(En(.022,.115,.012),i.CHROME_D,{spec:Nt.alloy,matrix:new Jt().multiplyMatrices(_,oe(Math.cos(y)*.06,Math.sin(y)*.06,0,0,0,-y+Math.PI/2))})}e(wn([[0,.8,.225],[0,.66,.13],[0,.56,.04]],.02,6),i.CHROME_D,{spec:Nt.alloy});for(const f of[1,-1])s(we(.028,.15,8),oe(.3*f,.31,-1.02,Math.PI/2,0,0));const m=Ah(t);return Rh(m),m}function x_(){const i=Th,t=[],e=(a,c,l={})=>t.push({geometry:a,color:c,...l}),n=ya([[.54,-.5],[.79,-.525],[.925,-.465],[.985,-.335],[1,-.12],[1,.12],[.985,.335],[.925,.465],[.79,.525],[.54,.5]],26);n.rotateZ(Math.PI/2),e(n,i.RUBBER,{spec:Nt.rubber,grain:ie.rubber});const s=[.1,.055,.075,.05,.09,.06,.08,.05,.1,.065,.05];for(const a of[1,-1])for(let c=0;c<22;c++){const l=c/22*Math.PI*2;e(En(.016,.03,s[c%s.length]),i.LETTER,{spec:Nt.matte,grain:ie.rubber,matrix:oe(.504*a,Math.sin(l)*.845,Math.cos(l)*.845,l,0,0)})}const r=ya([[.28,-.3],[.42,-.34],[.56,-.24],[.6,.1],[.56,.3],[.3,.32]],22);r.rotateZ(Math.PI/2),e(r,i.RIM,{spec:Nt.alloy,grain:ie.alloy}),e(we(.575,.46,24),i.RIM_LIP,{spec:Nt.chrome,grain:ie.chrome,matrix:oe(0,0,0,0,0,Math.PI/2)});for(let a=0;a<5;a++){const c=a/5*Math.PI*2;e(En(.3,.5,.175),i.RIM,{spec:Nt.alloy,grain:ie.alloy,matrix:oe(0,Math.sin(c)*.29,Math.cos(c)*.29,c,0,0)})}e(we(.205,.44,14),i.RIM,{spec:Nt.alloy,grain:ie.alloy,matrix:oe(0,0,0,0,0,Math.PI/2)}),e(we(.15,.1,14),i.LIVERY,{accent:!0,spec:Nt.paint,matrix:oe(.245,0,0,0,0,Math.PI/2)});for(let a=0;a<5;a++){const c=a/5*Math.PI*2+.6;e(we(.036,.09,6),i.CHROME,{spec:Nt.chrome,grain:ie.chrome,matrix:oe(.265,Math.sin(c)*.105,Math.cos(c)*.105,0,0,Math.PI/2)})}e(we(.055,.09,10),i.CHROME_D,{spec:Nt.alloy,matrix:oe(.285,0,0,0,0,Math.PI/2)});const o=Ah(t);return Rh(o,{cell:.055,radii:[.09,.2,.36],strength:.38,floor:.58}),o}const v_=[{x:Rr,z:Oi,r:zi,w:yl,steer:1,spin:Bn/zi},{x:-Rr,z:Oi,r:zi,w:yl,steer:1,spin:Bn/zi},{x:Cr,z:_s,r:Bn,w:Sl,steer:0,spin:1},{x:-Cr,z:_s,r:Bn,w:Sl,steer:0,spin:1}];class M_{constructor(t,e){this.count=e,this.geometry=__(),this.material=Ml(),this.mesh=new wr(this.geometry,this.material,e),this.mesh.instanceMatrix.setUsage(fc),this.mesh.frustumCulled=!1,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.mesh.name="karts",t.add(this.mesh),this.wheelGeometry=x_(),this.wheelMaterial=Ml(),this.wheelMesh=new wr(this.wheelGeometry,this.wheelMaterial,e*4),this.wheelMesh.instanceMatrix.setUsage(fc),this.wheelMesh.frustumCulled=!1,this.wheelMesh.castShadow=!0,this.wheelMesh.receiveShadow=!0,this.wheelMesh.name="kart-wheels",t.add(this.wheelMesh),this.colors=new Float32Array(e*3),this.mesh.instanceColor=new Ui(this.colors,3),this.wheelColors=new Float32Array(e*4*3),this.wheelMesh.instanceColor=new Ui(this.wheelColors,3),this.accents=new Float32Array(e*3),this.geometry.setAttribute("aAccent",new Ui(this.accents,3)),this.wheelAccents=new Float32Array(e*4*3),this.wheelGeometry.setAttribute("aAccent",new Ui(this.wheelAccents,3)),this._m=new Jt,this._wm=new Jt,this._lm=new Jt,this._q=new nn,this._wq=new nn,this._e=new Le,this._we=new Le,this._p=new U,this._wp=new U,this._s=new U(1,1,1),this._ws=new U(1,1,1),this._c=new Gt,this._lean=new Float32Array(e),this._squash=new Float32Array(e).fill(1),this._spin=new Float32Array(e),this._steer=new Float32Array(e)}setLivery(t,e){this._c.setHSL(e,.76,.55,Ce),this.colors[t*3]=this._c.r,this.colors[t*3+1]=this._c.g,this.colors[t*3+2]=this._c.b,this._c.setHSL((e+.47)%1,.95,.52,Ce),this.accents[t*3]=this._c.r,this.accents[t*3+1]=this._c.g,this.accents[t*3+2]=this._c.b;for(let n=0;n<4;n++){const s=(t*4+n)*3;this.wheelColors[s]=this.colors[t*3],this.wheelColors[s+1]=this.colors[t*3+1],this.wheelColors[s+2]=this.colors[t*3+2],this.wheelAccents[s]=this.accents[t*3],this.wheelAccents[s+1]=this.accents[t*3+1],this.wheelAccents[s+2]=this.accents[t*3+2]}this.mesh.instanceColor.needsUpdate=!0,this.wheelMesh.instanceColor.needsUpdate=!0,this.geometry.attributes.aAccent.needsUpdate=!0,this.wheelGeometry.attributes.aAccent.needsUpdate=!0}setVisible(t){this.mesh.visible=t,this.wheelMesh.visible=t}update(t,e){for(let n=0;n<this.count&&n<t.length;n++){const s=t[n],r=s.drifting?-s.driftDir*.3-s.slip*s.driftDir*.22:-Math.sign(s.lateralSpeed||0)*Math.min(.14,Math.abs(s.lateralSpeed)*.02);this._lean[n]+=(r-this._lean[n])*Math.min(1,e*9);const o=s.boostTime>0?1.05:1;this._squash[n]+=(o-this._squash[n])*Math.min(1,e*6);const a=s.hopping?Math.sin((1-s.hopTime/Kt.hopTime)*Math.PI)*.18:0;this._e.set(s.pitch*.6,s.yaw,this._lean[n]+s.roll*.5,"YXZ"),this._q.setFromEuler(this._e),this._p.set(s.x,s.y+a,s.z),this._s.set(1,this._squash[n],2-this._squash[n]),this._m.compose(this._p,this._q,this._s),this.mesh.setMatrixAt(n,this._m);const c=Math.sign(s.speed)||1;this._spin[n]=(this._spin[n]+Math.abs(s.speed)/Bn*e*c)%(Math.PI*2);const l=(s.inSteer||0)*.4;this._steer[n]+=(l-this._steer[n])*Math.min(1,e*14);for(let h=0;h<4;h++){const u=v_[h];this._we.set(this._spin[n]*u.spin,u.steer?this._steer[n]:0,0,"YXZ"),this._wq.setFromEuler(this._we),this._wp.set(u.x,u.r,u.z),this._ws.set(u.w,u.r,u.r),this._lm.compose(this._wp,this._wq,this._ws),this._wm.multiplyMatrices(this._m,this._lm),this.wheelMesh.setMatrixAt(n*4+h,this._wm)}}this.mesh.instanceMatrix.needsUpdate=!0,this.wheelMesh.instanceMatrix.needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose(),this.wheelGeometry.dispose(),this.wheelMaterial.dispose(),this.mesh.parent?.remove(this.mesh),this.wheelMesh.parent?.remove(this.wheelMesh)}}const y_=[[1,.86,.45],[.35,.72,1],[1,.55,.15],[.85,.35,1]],S_=`
  attribute float size;
  attribute float alpha;
  attribute vec3 pcolor;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vColor = pcolor;
    vAlpha = alpha;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    // Perspective-correct point size, clamped so a particle right on the camera
    // cannot balloon into a full-screen quad and destroy fill rate.
    gl_PointSize = clamp(size * 300.0 / -mv.z, 1.0, 64.0);
    gl_Position = projectionMatrix * mv;
  }`,b_=`
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    // Round, soft-edged sprite generated in the shader — no texture needed.
    vec2 d = gl_PointCoord - vec2(0.5);
    float r = dot(d, d);
    if (r > 0.25) discard;
    float a = vAlpha * smoothstep(0.25, 0.02, r);
    gl_FragColor = vec4(vColor, a);
  }`;class w_{constructor(t,e){this.config=e;const n=e.q.particleBudget;this.max=n,this.cursor=0,this.pos=new Float32Array(n*3),this.vel=new Float32Array(n*3),this.col=new Float32Array(n*3),this.size=new Float32Array(n),this.alpha=new Float32Array(n),this.life=new Float32Array(n),this.maxLife=new Float32Array(n),this.grav=new Float32Array(n);const s=new ge;s.setAttribute("position",new ce(this.pos,3)),s.setAttribute("pcolor",new ce(this.col,3)),s.setAttribute("size",new ce(this.size,1)),s.setAttribute("alpha",new ce(this.alpha,1)),s.setDrawRange(0,n),s.boundingSphere=new Rn(new U,1e6),this.material=new sn({vertexShader:S_,fragmentShader:b_,transparent:!0,depthWrite:!1,blending:Ro}),this.points=new zf(s,this.material),this.points.frustumCulled=!1,this.points.name="fx-particles",t.add(this.points),this.geometry=s;const r=e.q.markBudget;this.markMax=r,this.markCursor=0,this.markPos=new Float32Array(r*6),this.markCol=new Float32Array(r*6);const o=new ge;o.setAttribute("position",new ce(this.markPos,3)),o.setAttribute("color",new ce(this.markCol,3)),o.boundingSphere=new Rn(new U,1e6),this.marks=new Ff(o,new sh({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1})),this.marks.frustumCulled=!1,this.marks.name="fx-marks",t.add(this.marks),this.markGeometry=o,this._lastMark=new Map}spawn(t,e,n,s,r,o,a,c,l,h,u,p=-9){const d=this.cursor;this.cursor=(this.cursor+1)%this.max;const g=d*3;this.pos[g]=t,this.pos[g+1]=e,this.pos[g+2]=n,this.vel[g]=s,this.vel[g+1]=r,this.vel[g+2]=o,this.col[g]=a,this.col[g+1]=c,this.col[g+2]=l,this.size[d]=h,this.life[d]=u,this.maxLife[d]=u,this.alpha[d]=1,this.grav[d]=p}emitForKart(t,e,n){const s=Math.sin(t.yaw),r=Math.cos(t.yaw),o=Ao(t.surface);if(t.drifting&&t.onGround&&t.speed>4){const a=Math.min(3,t.driftTier),c=y_[a],l=a>0?3:2;for(let h=0;h<l;h++){const u=h%2===0?1:-1,p=t.x+r*.62*u-s*.62,d=t.z-s*.62*u-r*.62,g=(n+h*37)%11/11-.5;this.spawn(p,t.y+.16,d,-s*(3+g*5)+r*u*2.4,1.6+Math.abs(g)*3.2,-r*(3+g*5)-s*u*2.4,c[0],c[1],c[2],a>0?.2:.13,.3+Math.abs(g)*.25,-12)}this.addMark(t,s,r)}if(t.boostTime>0&&t.speed>3)for(let a=0;a<2;a++){const c=a===0?.22:-.22,l=(n+a*53)%7/7-.5;this.spawn(t.x-s*.9+r*c,t.y+.6,t.z-r*.9-s*c,-s*7+l*2,1.2+l,-r*7+l*2,.45+l*.2,.75,1,.3,.3,-1.5)}if(o.slow&&t.onGround&&t.speed>6){const a=n%13/13-.5,c=o===se.water?[.7,.85,1]:o===se.snow?[.95,.97,1]:o===se.grass?[.35,.45,.22]:[.68,.6,.44];this.spawn(t.x-s*.5,t.y+.18,t.z-r*.5,-s*2+a*4,2.2+Math.abs(a)*2,-r*2+a*4,c[0],c[1],c[2],.42,.55,-6)}}addMark(t,e,n){const s=t.index,r=this._lastMark.get(s),o=t.x-e*.55,a=t.z-n*.55;if(r){if(Math.hypot(o-r[0],a-r[1])<.6)return;const l=this.markCursor;this.markCursor=(this.markCursor+1)%this.markMax;const h=l*6;this.markPos[h]=r[0],this.markPos[h+1]=r[2]+.04,this.markPos[h+2]=r[1],this.markPos[h+3]=o,this.markPos[h+4]=t.y+.04,this.markPos[h+5]=a;for(let u=0;u<6;u++)this.markCol[h+u]=.06;this.markGeometry.attributes.position.needsUpdate=!0,this.markGeometry.attributes.color.needsUpdate=!0}this._lastMark.set(s,[o,a,t.y])}burst(t,e,n,s,r,o,a,c,l=.3,h=.5){for(let u=0;u<a;u++){const p=u/a*Math.PI*2,d=u*7%5/5;this.spawn(t,e,n,Math.cos(p)*c*(.4+d),c*(.4+d*.8),Math.sin(p)*c*(.4+d),s,r,o,l,h,-10)}}update(t){const e=this.pos,n=this.vel;for(let s=0;s<this.max;s++){if(this.life[s]<=0){this.alpha[s]!==0&&(this.alpha[s]=0);continue}this.life[s]-=t;const r=s*3;n[r+1]+=this.grav[s]*t,e[r]+=n[r]*t,e[r+1]+=n[r+1]*t,e[r+2]+=n[r+2]*t;const o=this.life[s]/this.maxLife[s];this.alpha[s]=o>0?o*o:0}this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.alpha.needsUpdate=!0,this.geometry.attributes.pcolor.needsUpdate=!0,this.geometry.attributes.size.needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose(),this.markGeometry.dispose(),this.points.parent?.remove(this.points),this.marks.parent?.remove(this.marks)}}const E_=.5;function So(i,t,e){const n=e[0]-t[0],s=e[1]-t[1],r=e[2]-t[2];return i+Math.pow(Math.hypot(n,s,r),E_)}function Ch(i,t,e,n,s,r){const a=So(0,i,t),c=So(a,t,e),l=So(c,e,n),h=a+(c-a)*s,u=[],p=[],d=[],g=[],_=[];for(let m=0;m<3;m++)u[m]=(a-h)/(a-0)*i[m]+(h-0)/(a-0)*t[m],p[m]=(c-h)/(c-a)*t[m]+(h-a)/(c-a)*e[m],d[m]=(l-h)/(l-c)*e[m]+(h-c)/(l-c)*n[m];for(let m=0;m<3;m++)g[m]=(c-h)/(c-0)*u[m]+(h-0)/(c-0)*p[m],_[m]=(l-h)/(l-a)*p[m]+(h-a)/(l-a)*d[m];return r[0]=(c-h)/(c-a)*g[0]+(h-a)/(c-a)*_[0],r[1]=(c-h)/(c-a)*g[1]+(h-a)/(c-a)*_[1],r[2]=(c-h)/(c-a)*g[2]+(h-a)/(c-a)*_[2],r}function Ph(i,t=4,e=null){const n=i.length,s=[],r=[0,0,0],o=24;for(let d=0;d<n;d++){const g=i[(d-1+n)%n],_=i[d],m=i[(d+1)%n],f=i[(d+2)%n];for(let y=0;y<o;y++)Ch(g,_,m,f,y/o,r),s.push([r[0],r[1],r[2]])}const a=[0];for(let d=1;d<=s.length;d++){const g=s[d-1],_=s[d%s.length];a[d]=a[d-1]+Math.hypot(_[0]-g[0],_[2]-g[2])}const c=a[s.length],l=Math.min(6e3,Math.max(8,Math.round(c/t))),h=c/l,u=[];let p=0;for(let d=0;d<l;d++){const g=d*h;for(;p<s.length-1&&a[p+1]<g;)p++;const _=a[p+1]-a[p]||1e-6,m=(g-a[p])/_,f=s[p],y=s[(p+1)%s.length];u.push({x:f[0]+(y[0]-f[0])*m,y:f[1]+(y[1]-f[1])*m,z:f[2]+(y[2]-f[2])*m,tx:0,tz:0,nx:0,nz:0,curv:0,dist:g,width:0,idx:d})}for(let d=0;d<l;d++){const g=u[(d-1+l)%l],_=u[d],m=u[(d+1)%l];let f=m.x-g.x,y=m.z-g.z;const M=Math.hypot(f,y)||1e-6;f/=M,y/=M,_.tx=f,_.tz=y,_.nx=-y,_.nz=f;let v=_.x-g.x,A=_.z-g.z,E=m.x-_.x,R=m.z-_.z;const L=Math.hypot(v,A)||1e-6,S=Math.hypot(E,R)||1e-6;v/=L,A/=L,E/=S,R/=S;const x=v*R-A*E,T=Math.max(-1,Math.min(1,v*E+A*R));_.curv=Math.atan2(x,T)/((L+S)*.5),_.width=e?e(_,d,l):7}return{samples:u,length:c,spacing:h}}function T_(i,t=4,e=null){const n=i[0],s=i[1]||i[0],r=i[i.length-1],o=i[i.length-2]||r,a=[n[0]*2-s[0],n[1]*2-s[1],n[2]*2-s[2]],c=[r[0]*2-o[0],r[1]*2-o[1],r[2]*2-o[2]],l=[a,...i,c],h=l.length,u=[],p=[0,0,0],d=24;for(let M=1;M<h-2;M++)for(let v=0;v<d;v++)Ch(l[M-1],l[M],l[M+1],l[M+2],v/d,p),u.push([p[0],p[1],p[2]]);u.push([...l[h-2]]);const g=[0];for(let M=1;M<u.length;M++){const v=u[M-1],A=u[M];g[M]=g[M-1]+Math.hypot(A[0]-v[0],A[2]-v[2])}const _=g[u.length-1],m=Math.max(4,Math.round(_/t)),f=[];let y=0;for(let M=0;M<=m;M++){const v=M/m*_;for(;y<u.length-2&&g[y+1]<v;)y++;const A=g[y+1]-g[y]||1e-6,E=(v-g[y])/A,R=u[y],L=u[y+1];f.push({x:R[0]+(L[0]-R[0])*E,y:R[1]+(L[1]-R[1])*E,z:R[2]+(L[2]-R[2])*E,tx:0,tz:0,nx:0,nz:0,curv:0,dist:v,width:0,idx:M})}for(let M=0;M<=m;M++){const v=f[Math.max(0,M-1)],A=f[M],E=f[Math.min(m,M+1)];let R=E.x-v.x,L=E.z-v.z;const S=Math.hypot(R,L)||1e-6;A.tx=R/S,A.tz=L/S,A.nx=-A.tz,A.nz=A.tx,A.curv=0,A.width=e?e(A,M,m+1):7}return{samples:f,length:_,spacing:_/m,open:!0}}function A_(i,t,e=4,n=.5){const s=i.length,r=new Float64Array(s);for(let o=0;o<e;o++){for(let a=0;a<s;a++){const c=i[(a-1+s)%s][t],l=i[a][t],h=i[(a+1)%s][t];r[a]=l+((c+h)*.5-l)*n}for(let a=0;a<s;a++)i[a][t]=r[a]}}const R_=Math.PI/180,Lh=[{name:"START_STR",kind:"straight",len:0,width:8.5,solve:!0,note:"MAIN STRAIGHT (~204 m). Reach top speed, then a heavy brake into T1. The start/finish line is at its beginning."},{name:"T1_DRIFT",kind:"arc",radius:55,turn:90,width:7.6,note:"THE DRIFT CORNER. Medium radius, entered fast off the main straight — the canonical case the mechanic exists for. Drifting must win here."},{name:"BACK_STR",kind:"straight",len:200,width:8,note:"exit straight — long enough that a good T1 exit is worth real time"},{name:"CHAIN_A",kind:"arc",radius:36,turn:55,width:7,note:"CHAIN 1 of 3 — release, re-enter, release. Boost chaining under test."},{name:"CHAIN_AB",kind:"straight",len:26,width:7},{name:"CHAIN_B",kind:"arc",radius:30,turn:-45,width:7,note:"CHAIN 2 of 3 — direction REVERSES, so one long drift cannot cover the set"},{name:"CHAIN_BC",kind:"straight",len:26,width:7},{name:"CHAIN_C",kind:"arc",radius:36,turn:60,width:7,note:"CHAIN 3 of 3"},{name:"PRE_GRIP",kind:"straight",len:40,width:8},{name:"T3_GRIP",kind:"arc",radius:115,turn:65,width:9,note:"THE GRIP CORNER. Wide, fast and deliberately generous — gripping SHOULD win here. If drifting wins this one too, the mechanic is a free win rather than a decision, and that is a failure even though it is faster."},{name:"T3_EXIT",kind:"straight",len:40,width:8},{name:"T4_SWEEP",kind:"arc",radius:60,turn:45,width:8,note:"sweeper that sets up the long run to the technical corner"},{name:"HOME_STR",kind:"straight",len:0,width:8.5,solve:!0,note:"second long straight (~266 m), ending in the heaviest braking zone on the lap"},{name:"T2_TECH",kind:"arc",radius:22,turn:90,width:6.6,note:"THE TECHNICAL CORNER. Tight enough that an over-committed drift runs wide and loses the exit onto the main straight — where a bad exit costs most."}],bl=2,wl="proving";function Mr(i,t){const e=[],n=[];let s=0,r=0,o=0,a=0,c=0;const l=()=>e.push([s,0,r]);for(const h of Lh){const u=a;if(h.kind==="straight"){const p=h.solve?c++===0?i:t:h.len,d=Math.max(1,Math.round(p/bl));for(let g=0;g<d;g++)l(),s+=Math.sin(o)*(p/d),r+=Math.cos(o)*(p/d),a+=p/d}else{const p=h.turn*R_,d=Math.abs(p)*h.radius,g=Math.max(2,Math.round(d/bl)),_=p/g,m=d/g;for(let f=0;f<g;f++)l(),o+=_/2,s+=Math.sin(o)*m,r+=Math.cos(o)*m,o+=_/2,a+=m}n.push({...h,from:u,to:a})}return{pts:e,marks:n,end:[s,r],heading:o,length:a}}function C_(){const i=Mr(0,0).end,t=Mr(100,0).end,e=Mr(0,100).end,n=(t[0]-i[0])/100,s=(t[1]-i[1])/100,r=(e[0]-i[0])/100,o=(e[1]-i[1])/100,a=n*o-s*r;if(Math.abs(a)<1e-9)throw new Error("proving ground: the two solved straights are parallel — closure is unsolvable");const c=(-i[0]*o+i[1]*r)/a,l=(-n*i[1]+s*i[0])/a;return{lenA:c,lenB:l}}function P_(i=30){const t=Lh.reduce((d,g)=>d+(g.turn||0),0);if(Math.abs(t-360)>1e-6)throw new Error(`proving ground: turn budget is ${t}°, must be exactly 360°`);const{lenA:e,lenB:n}=C_();if(!(e>20)||!(n>20))throw new Error(`proving ground: closure solved to non-physical straights ${e.toFixed(1)}, ${n.toFixed(1)}`);const s=Mr(e,n),r=Math.hypot(s.end[0],s.end[1]),o=s.marks.map(d=>({name:d.name,kind:d.kind,from:d.from,to:d.to,radius:d.radius??1/0,turn:d.turn??0,width:d.width,note:d.note??""})),a=d=>{for(const g of o)if(d>=g.from&&d<g.to)return g.width;return o[o.length-1].width},c=Ph(s.pts,4,d=>a(d.dist));c.key=wl,c.name="The Proving Ground",c.kind="circuit",c.closed=!0,c.authored=!0;for(const d of c.samples)d.y=i,d.pad=!1;const l=c.samples.length,h=Math.max(1,Math.floor(l/24)),u=[];for(let d=0;d<l;d+=h)u.push(d);for(const d of o)d.i0=Math.round(d.from/c.length*l)%l,d.i1=Math.round(d.to/c.length*l)%l;const p={key:wl,name:"The Proving Ground",biome:"meadow",laps:3,road:c,length:c.length,samples:c.samples,checkpoints:u,startIdx:0,authored:!0,sections:o,elevation:i};return{road:c,circuit:p,report:{length:c.length,samples:l,solvedStraights:[e,n],closureGap:r,turnSum:t,sections:o.map(d=>({name:d.name,kind:d.kind,radius:d.radius,turn:d.turn,len:d.to-d.from,width:d.width}))}}}const bo=0,hr=1450,El=205,Tl=4,ur=2.4,wo=11,Pi=28,ke={ocean:{id:0,surface:se.water,name:"ocean"},beach:{id:1,surface:se.sand,name:"beach"},meadow:{id:2,surface:se.grass,name:"meadow"},forest:{id:3,surface:se.grass,name:"forest"},ashland:{id:4,surface:se.dirt,name:"ashland"},dunes:{id:5,surface:se.sand,name:"dunes"},alpine:{id:6,surface:se.snow,name:"alpine"},glacier:{id:7,surface:se.ice,name:"glacier"}},L_=[{key:"coral",name:"Coral Mile",angle:.55,dist:.62,radius:250,pts:11,biome:"beach",laps:3,narrow:0,twist:.55,minSpacing:115,maxTurn:.86},{key:"emerald",name:"Emerald Sprint",angle:2.35,dist:.5,radius:232,pts:13,biome:"forest",laps:3,narrow:.18,twist:.7,minSpacing:95,maxTurn:1.05},{key:"ashfall",name:"Ashfall Ring",angle:3.85,dist:.6,radius:268,pts:12,biome:"ashland",laps:3,narrow:.3,twist:.62,minSpacing:100,maxTurn:1.15},{key:"glacier",name:"Glacier Crown",angle:5.3,dist:.46,radius:214,pts:14,biome:"alpine",laps:3,narrow:.42,twist:.85,minSpacing:96,maxTurn:1.04}];function I_(i=1337){const t=new Ki(i),e=i|0;function n(x,T){const P=Math.hypot(x,T)/hr,F=zr(1.02,.42,P),N=zr(1.3,1,P)*.12,D=Li(x*92e-5,T*92e-5,4,e)*.5+.5,O=Zh(x*.00155,T*.00155,5,e+500),H=Li(x*.0085,T*.0085,3,e+900)*.032;let B=(D*.4+O*.82)*F+N-.085;return B+=H*F,B*El}function s(x,T){return Li(x*72e-5+31.7,T*72e-5+17.3,3,e+2200)}function r(x,T,P){if(P<bo+.6)return ke.ocean;if(P<bo+5.5)return ke.beach;const F=s(x,T),N=116+F*30;return P>N+34?ke.glacier:P>N?ke.alpine:F>.26?ke.ashland:F<-.3?ke.dunes:Li(x*.0031,T*.0031,2,e+4100)>.06?ke.forest:ke.meadow}function o(x,T){const P=Math.cos(x.angle)*hr*x.dist,F=Math.sin(x.angle)*hr*x.dist,N=[];for(let yt=0;yt<x.pts*2+6;yt++){const ft=T.next()*Math.PI*2,Mt=x.radius*(.35+.65*Math.sqrt(T.next()));N.push([P+Math.cos(ft)*Mt,F+Math.sin(ft)*Mt])}let D=U_(N);const O=[];for(let yt=0;yt<D.length;yt++){const ft=D[yt],Mt=D[(yt+1)%D.length];O.push(ft);const it=(ft[0]+Mt[0])/2,V=(ft[1]+Mt[1])/2;let X=-(Mt[1]-ft[1]),st=Mt[0]-ft[0];const mt=Math.hypot(X,st)||1;X/=mt,st/=mt;const gt=T.range(-1,1)*x.radius*.42*x.twist;O.push([it+X*gt,V+st*gt])}D=O;const H=x.minSpacing,B=30,Z=D.length;for(let yt=0;yt<160;yt++){let ft=!1;for(let Mt=0;Mt<Z;Mt++)for(let it=Mt+1;it<Z;it++){const V=it===Mt+1||Mt===0&&it===Z-1,X=V?H:B,st=D[it][0]-D[Mt][0],mt=D[it][1]-D[Mt][1],gt=Math.hypot(st,mt);if(gt<X&&gt>1e-6){const Ot=(X-gt)/gt*.5*(V?.5:.35);D[Mt][0]-=st*Ot,D[Mt][1]-=mt*Ot,D[it][0]+=st*Ot,D[it][1]+=mt*Ot,ft=!0}}if(!ft)break}{let yt=0,ft=0;for(const V of D)yt+=V[0],ft+=V[1];yt/=Z,ft/=Z;let Mt=0;for(const V of D)Mt=Math.max(Mt,Math.hypot(V[0]-yt,V[1]-ft));const it=x.radius*1.55;if(Mt>it){const V=it/Mt;for(const X of D)X[0]=yt+(X[0]-yt)*V,X[1]=ft+(X[1]-ft)*V}for(const V of D)V[0]+=P-yt,V[1]+=F-ft}const rt=x.maxTurn;for(let yt=0;yt<90;yt++)for(let ft=0;ft<D.length;ft++){const Mt=D[(ft-1+D.length)%D.length],it=D[ft],V=D[(ft+1)%D.length];let X=it[0]-Mt[0],st=it[1]-Mt[1],mt=V[0]-it[0],gt=V[1]-it[1];const Ot=Math.hypot(X,st)||1,jt=Math.hypot(mt,gt)||1;X/=Ot,st/=Ot,mt/=jt,gt/=jt;const I=Math.acos(Math.max(-1,Math.min(1,X*mt+st*gt)));if(I>rt){const et=(Mt[0]+V[0])*.5,Q=(Mt[1]+V[1])*.5,J=Math.min(.4,(I-rt)/I*.45);it[0]+=(et-it[0])*J,it[1]+=(Q-it[1])*J}}const pt=[];for(const yt of D){let ft=yt[0],Mt=yt[1];for(let it=0;it<30;it++){const V=n(ft,Mt);if(V>9&&V<178)break;const X=P-ft,st=F-Mt,mt=Math.hypot(X,st)||1,gt=V<=9?1:-1;ft+=X/mt*20*gt,Mt+=st/mt*20*gt}pt.push([ft,n(ft,Mt),Mt])}return pt}const a=[],c=[];for(const x of L_){const T=t.fork(),P=o(x,T),N=Ph(P,Tl,(O,H,B)=>{const Z=Math.sin(H/B*Math.PI*2*3+x.angle);return 8.2-x.narrow*2.6+Z*.9-Math.max(0,Z)*x.narrow*1.4});N.key=x.key,N.name=x.name,N.kind="circuit",N.closed=!0;for(const O of N.samples)O.y=n(O.x,O.z);A_(N.samples,"y",26,.62);const D=N.samples.length;for(let O=0;O<D;O++){const H=N.samples[(O-1+D)%D],B=N.samples[(O+1)%D];N.samples[O].grade=(B.y-H.y)/(2*N.spacing)}for(let O=0;O<D;O++){const H=N.samples[O];let B=0;for(let rt=-6;rt<=0;rt++)B+=Math.abs(N.samples[(O+rt+D)%D].curv);const Z=Math.abs(N.samples[(O+5)%D].curv);H.pad=B<.012&&Z<.004&&O%37===0}a.push({key:x.key,name:x.name,biome:x.biome,laps:x.laps,road:N,length:N.length,samples:N.samples,checkpoints:D_(N),startIdx:0}),c.push(N)}for(let x=0;x<a.length;x++){const T=a[x],P=a[(x+1)%a.length],F=N_(T.samples,P.samples),N=[(F.a.x+F.b.x)/2+t.range(-60,60),0,(F.a.z+F.b.z)/2+t.range(-60,60)];N[1]=n(N[0],N[2]);const D=[[F.a.x,F.a.y,F.a.z],[(F.a.x*2+N[0])/3,0,(F.a.z*2+N[2])/3],N,[(F.b.x*2+N[0])/3,0,(F.b.z*2+N[2])/3],[F.b.x,F.b.y,F.b.z]];for(const H of D)H[1]===0&&(H[1]=n(H[0],H[2]));const O=T_(D,Tl,()=>6.4);O.kind="link",O.key=`link-${x}`,O.closed=!1;for(const H of O.samples)H.y=n(H.x,H.z);for(let H=0;H<22;H++)for(let B=1;B<O.samples.length-1;B++)O.samples[B].y=O.samples[B].y*.38+(O.samples[B-1].y+O.samples[B+1].y)*.31;for(const H of O.samples)H.pad=!1;c.push(O)}const l=[-900,-900],h=P_(0);for(const x of h.road.samples)x.x+=l[0],x.z+=l[1];const u=h.road.samples.map(x=>n(x.x,x.z)).sort((x,T)=>x-T),p=Math.round(u[u.length>>1]);for(const x of h.road.samples)x.y=p;h.circuit.elevation=p,c.push(h.road);const d=new Map,g=9.5+ur+wo,_=(x,T)=>x*131071+T;for(let x=0;x<c.length;x++){const T=c[x].samples;for(let P=0;P<T.length;P++){const F=T[P],N=Math.floor((F.x-g)/Pi),D=Math.floor((F.x+g)/Pi),O=Math.floor((F.z-g)/Pi),H=Math.floor((F.z+g)/Pi);for(let B=N;B<=D;B++)for(let Z=O;Z<=H;Z++){const rt=_(B,Z);let pt=d.get(rt);pt||(pt=[],d.set(rt,pt)),pt.push(x,P)}}}const m={road:null,roadIdx:-1,sample:null,sampleIdx:-1,dist:0,side:0,roadY:0,width:0};function f(x,T){const P=d.get(_(Math.floor(x/Pi),Math.floor(T/Pi)));if(!P)return null;let F=1/0,N=-1,D=-1;for(let ft=0;ft<P.length;ft+=2){const Mt=P[ft],it=P[ft+1],V=c[Mt].samples[it],X=x-V.x,st=T-V.z,mt=X*X+st*st;mt<F&&(F=mt,N=Mt,D=it)}if(N<0)return null;const O=c[N],H=O.samples[D],B=x-H.x,Z=T-H.z,rt=B*H.tx+Z*H.tz,pt=B*H.nx+Z*H.nz,yt=H.grade??0;return m.road=O,m.roadIdx=N,m.sample=H,m.sampleIdx=D,m.dist=Math.abs(pt),m.side=Math.sign(pt),m.along=rt,m.roadY=H.y+yt*rt,m.width=H.width,m}function y(x,T){const P=n(x,T),F=f(x,T);if(!F)return P;const N=F.width+ur;if(F.dist>N+wo)return P;const D=zr(N+wo,N*.86,F.dist);return pr(P,F.roadY,D)}const M=[0,1,0];function v(x,T){const F=y(x-.75,T),N=y(x+.75,T),D=y(x,T-.75),O=y(x,T+.75),H=(F-N)/(2*.75),B=(D-O)/(2*.75),Z=1/Math.hypot(H,1,B);return M[0]=H*Z,M[1]=Z,M[2]=B*Z,M}function A(x,T){const P=f(x,T);if(P){if(P.dist<P.width)return P.sample.pad?se.boost:P.road.key==="glacier"&&P.sample.y>150?se.ice:P.road.kind==="link"&&P.roadY-n(x,T)>6?se.wood:se.tarmac;if(P.dist<P.width+ur)return se.rumble}const F=y(x,T);return r(x,T,F).surface}function E(x,T){return r(x,T,y(x,T))}function R(x,T,P){return r(x,T,P)}function L(x,T){const P=f(x,T);return!!P&&P.dist<P.width+ur*1.4}const S={seed:i,ISLAND_R:hr,MAX_H:El,SEA_LEVEL:bo,heightAt:y,normalAt:v,surfaceAt:A,biomeAt:E,biomeAtKnownHeight:R,nearestRoad:f,onRoad:L,baseHeight:n,regionNoise:s,circuits:a,roads:c,circuitByKey:x=>x===h.circuit.key?h.circuit:a.find(T=>T.key===x),proving:h.circuit,provingReport:h.report};for(const x of a)x.world=S;return h.circuit.world=S,S}function D_(i){const t=i.samples.length,n=Math.max(1,Math.floor(t/24)),s=[];for(let r=0;r<t;r+=n)s.push(r);return s}function U_(i){const t=i.slice().sort((r,o)=>r[0]-o[0]||r[1]-o[1]),e=(r,o,a)=>(o[0]-r[0])*(a[1]-r[1])-(o[1]-r[1])*(a[0]-r[0]),n=[];for(const r of t){for(;n.length>=2&&e(n[n.length-2],n[n.length-1],r)<=0;)n.pop();n.push(r)}const s=[];for(let r=t.length-1;r>=0;r--){const o=t[r];for(;s.length>=2&&e(s[s.length-2],s[s.length-1],o)<=0;)s.pop();s.push(o)}return n.pop(),s.pop(),n.concat(s).map(r=>[r[0],r[1]])}function N_(i,t){let e=1/0,n=i[0],s=t[0];for(let r=0;r<i.length;r+=3)for(let o=0;o<t.length;o+=3){const a=(i[r].x-t[o].x)**2+(i[r].z-t[o].z)**2;a<e&&(e=a,n=i[r],s=t[o])}return{a:n,b:s,dist:Math.sqrt(e)}}const F_={low:.3,mid:.62,high:1};function Qi(i){let t=0;const e=i.map(({geometry:c,color:l,matrix:h})=>{const u=c.index?c.toNonIndexed():c.clone();return h&&u.applyMatrix4(h),u.computeVertexNormals(),t+=u.attributes.position.count,{g:u,color:l}}),n=new Float32Array(t*3),s=new Float32Array(t*3),r=new Float32Array(t*3);let o=0;for(const{g:c,color:l}of e){n.set(c.attributes.position.array,o*3),s.set(c.attributes.normal.array,o*3);for(let h=0;h<c.attributes.position.count;h++)r[(o+h)*3]=l[0],r[(o+h)*3+1]=l[1],r[(o+h)*3+2]=l[2];o+=c.attributes.position.count,c.dispose()}const a=new ge;return a.setAttribute("position",new ce(n,3)),a.setAttribute("normal",new ce(s,3)),a.setAttribute("color",new ce(r,3)),a.computeBoundingSphere(),a}const Pe=(i,t,e,n=0,s=0,r=0,o=1,a=1,c=1)=>new Jt().compose(new U(i,t,e),new nn().setFromEuler(new Le(n,s,r)),new U(o,a,c));function O_(){const i=[.26,.19,.14],t=[{geometry:new mn(.16,.26,2.2,7),color:i,matrix:Pe(0,1.1,0)}],e=[[.13,.31,.16],[.16,.37,.19],[.19,.43,.22]];for(let n=0;n<3;n++)t.push({geometry:new Ir(1.5-n*.36,2.1-n*.24,8),color:e[n],matrix:Pe(0,2.2+n*1.15,0)});return Qi(t)}function z_(){const i=[.3,.22,.16];return Qi([{geometry:new mn(.15,.24,2.6,7),color:i,matrix:Pe(0,1.3,0)},{geometry:new Ts(1.45,1),color:[.2,.42,.2],matrix:Pe(.2,3.3,.1,0,0,0,1.1,.82,1)},{geometry:new Ts(1.05,1),color:[.25,.49,.24],matrix:Pe(-.5,3.9,-.3,0,0,0,1,.86,1)}])}function B_(){const i=[.4,.32,.22],t=[];let e=0,n=0;for(let s=0;s<6;s++){const r=s/6;t.push({geometry:new mn(.13-r*.05,.17-r*.05,.8,6),color:i,matrix:Pe(e,n+.4,0,0,0,r*.16)}),e+=Math.sin(r*.9)*.32,n+=.76}for(let s=0;s<7;s++){const r=s/7*Math.PI*2;t.push({geometry:new Ir(.34,2.5,4),color:s%2?[.2,.42,.2]:[.25,.48,.23],matrix:Pe(e+Math.cos(r)*.95,n+.25,Math.sin(r)*.95,Math.PI/2-.55,-r,0)})}return Qi(t)}function k_(i){const t=new Ts(1,1),e=t.attributes.position,n=new Ki(i);for(let s=0;s<e.count;s++){const r=.72+n.next()*.55;e.setXYZ(s,e.getX(s)*r*1.15,e.getY(s)*r*.78,e.getZ(s)*r)}return e.needsUpdate=!0,Qi([{geometry:t,color:[.4,.38,.36]}])}function H_(){return Qi([{geometry:new Xe(.14,.9,.14),color:[.55,.55,.58],matrix:Pe(-1.1,.45,0)},{geometry:new Xe(.14,.9,.14),color:[.55,.55,.58],matrix:Pe(1.1,.45,0)},{geometry:new Xe(2.4,.46,.09),color:[.92,.92,.9],matrix:Pe(0,.8,0)},{geometry:new Xe(.6,.46,.11),color:[.78,.16,.16],matrix:Pe(-.6,.8,0)},{geometry:new Xe(.6,.46,.11),color:[.78,.16,.16],matrix:Pe(.6,.8,0)}])}function G_(){return Qi([{geometry:new mn(.09,.09,3,6),color:[.52,.52,.56],matrix:Pe(-2,1.5,0)},{geometry:new mn(.09,.09,3,6),color:[.52,.52,.56],matrix:Pe(2,1.5,0)},{geometry:new Xe(4.2,1,.07),color:[.9,.42,.12],matrix:Pe(0,2.5,0)},{geometry:new Xe(4.2,.16,.09),color:[.96,.96,.94],matrix:Pe(0,2.02,0)}])}class V_{constructor(t,e,n){this.scene=e,this.group=new Di,this.group.name="props",e.add(this.group);const s=F_[n.q.name]??1,r=new Ur({vertexColors:!0});this.material=r,this.meshes=[];const o={conifer:O_(),broadleaf:z_(),palm:B_(),rock:k_(12648430),barrier:H_(),banner:G_()},a={conifer:[],broadleaf:[],palm:[],rock:[],barrier:[],banner:[]},c=new Ki(t.seed^24301);for(const _ of t.roads){const m=_.samples,f=Math.max(3,Math.round(9/s));for(let y=0;y<m.length;y+=f){const M=m[y],v=M.width+3.6;for(const A of[1,-1]){const E=M.x+M.nx*v*A,R=M.z+M.nz*v*A,L=t.heightAt(E,R),S=Math.atan2(M.tx,M.tz)+Math.PI/2;y%(f*7)===0?a.banner.push([E,L,R,S,1]):a.barrier.push([E,L,R,S,1])}}}const l=Math.round(760*s);for(const _ of t.circuits){const m=_.samples;for(let f=0;f<l;f++){const y=m[c.int(0,m.length-1)],M=c.chance(.5)?1:-1,v=y.width+7+c.range(0,60),A=c.range(-14,14),E=c.range(-14,14),R=y.x+y.nx*v*M+A,L=y.z+y.nz*v*M+E;if(t.onRoad(R,L))continue;const S=t.heightAt(R,L);if(S<.6)continue;const x=t.biomeAtKnownHeight(R,L,S),T=c.range(0,Math.PI*2),P=c.range(.75,1.45);x===ke.beach||x===ke.dunes?c.chance(.42)?a.palm.push([R,S,L,T,P*.95]):c.chance(.35)&&a.rock.push([R,S,L,T,P*.6]):x===ke.forest?a[c.chance(.62)?"conifer":"broadleaf"].push([R,S,L,T,P]):x===ke.meadow?c.chance(.55)?a.broadleaf.push([R,S,L,T,P*.9]):a.rock.push([R,S,L,T,P*.5]):x===ke.alpine?c.chance(.5)?a.conifer.push([R,S,L,T,P*.8]):a.rock.push([R,S,L,T,P*.9]):a.rock.push([R,S,L,T,P*(x===ke.ashland?1.1:.7)])}}const h=new Jt,u=new nn,p=new Le,d=new U,g=new U;for(const[_,m]of Object.entries(a)){if(!m.length){o[_].dispose();continue}const f=new wr(o[_],r,m.length);f.name=`props-${_}`,f.castShadow=!0,f.receiveShadow=!1;for(let y=0;y<m.length;y++){const[M,v,A,E,R]=m[y];p.set(0,E,0),u.setFromEuler(p),d.set(M,v,A),g.set(R,R*(_==="rock"?.9:1),R),h.compose(d,u,g),f.setMatrixAt(y,h)}f.instanceMatrix.needsUpdate=!0,this.group.add(f),this.meshes.push(f)}this.counts=Object.fromEntries(Object.entries(a).map(([_,m])=>[_,m.length]))}total(){return Object.values(this.counts).reduce((t,e)=>t+e,0)}dispose(){for(const t of this.meshes)t.geometry.dispose();this.material.dispose(),this.scene.remove(this.group)}}const W_=typeof matchMedia=="function"?matchMedia("(prefers-reduced-motion: reduce)"):{matches:!1},X_=`
  varying vec3 vDir;
  void main() {
    vDir = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`,q_=`
  varying vec3 vDir;
  uniform vec3 uZenith;
  uniform vec3 uHorizon;
  uniform vec3 uSun;
  uniform float uTime;

  // Cheap value noise; three octaves is enough for soft cloud banding and the
  // sky is a full-screen pass, so cost here is paid on every pixel.
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p){
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1,0)), f.x),
               mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), f.x), f.y);
  }

  void main() {
    vec3 d = normalize(vDir);
    float h = clamp(d.y * 0.5 + 0.5, 0.0, 1.0);
    vec3 col = mix(uHorizon, uZenith, pow(h, 0.75));

    // Sun disc plus a broad warm bloom around it.
    float sd = max(dot(d, normalize(uSun)), 0.0);
    col += vec3(1.0, 0.92, 0.72) * pow(sd, 900.0) * 2.2;
    col += vec3(1.0, 0.72, 0.42) * pow(sd, 12.0) * 0.30;

    // Clouds only above the horizon, projected onto a plane so they stretch
    // toward the horizon the way real cloud decks do.
    if (d.y > 0.02) {
      vec2 uv = d.xz / max(d.y, 0.02) * 0.35 + vec2(uTime * 0.004, 0.0);
      float n = noise(uv) * 0.55 + noise(uv * 2.3) * 0.28 + noise(uv * 5.1) * 0.17;
      float cloud = smoothstep(0.52, 0.78, n) * smoothstep(0.02, 0.35, d.y);
      col = mix(col, vec3(1.0, 0.99, 0.98), cloud * 0.62);
    }
    gl_FragColor = vec4(col, 1.0);
  }`,Y_=`
  varying vec3 vWorld;
  varying float vWave;
  uniform float uTime;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    // Two crossing sine trains: enough motion to read as water, no cost.
    float w = sin(wp.x * 0.045 + uTime * 1.1) * 0.34
            + sin(wp.z * 0.061 - uTime * 0.85) * 0.28;
    wp.y += w;
    vWave = w;
    vWorld = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }`,$_=`
  varying vec3 vWorld;
  varying float vWave;
  uniform vec3 uShallow;
  uniform vec3 uDeep;
  uniform vec3 uCamera;
  uniform vec3 uSun;
  void main() {
    vec3 v = normalize(uCamera - vWorld);
    // Schlick fresnel against a flat normal — the wave displacement supplies
    // the variation, which is far cheaper than a normal map.
    float f = pow(1.0 - clamp(v.y, 0.0, 1.0), 3.0);
    vec3 col = mix(uDeep, uShallow, clamp(vWave * 0.5 + 0.5, 0.0, 1.0));
    col = mix(col, vec3(0.62, 0.78, 0.92), f * 0.8);
    vec3 h = normalize(normalize(uSun) + v);
    col += vec3(1.0, 0.95, 0.85) * pow(max(dot(vec3(0.0, 1.0, 0.0), h), 0.0), 90.0) * 0.9;
    gl_FragColor = vec4(col, 0.90);
  }`;class K_{static id="render";static deps=[];async init(t){const{canvas:e,config:n}=t;this.ctx=t,this.config=n,this.renderer=new o_({canvas:e,antialias:n.q.antialias,powerPreference:"high-performance",stencil:!1,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,n.q.maxPixelRatio)*n.q.renderScale),this.renderer.outputColorSpace=Ce,this.renderer.toneMapping=zl,this.renderer.toneMappingExposure=1.15,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ol,this.scene=new Cf,t.scene=this.scene,this.camera=new Ze(62,1,.5,n.q.viewDistance*1.6),t.camera=this.camera;const s=new Gt(.86,.68,.52);this.scene.fog=new Ua(s,n.q.viewDistance*.42,n.q.viewDistance),this.sunDir=new U(.66,.3,.69).normalize(),this.skyUniforms={uZenith:{value:new Gt(.16,.32,.66)},uHorizon:{value:s},uSun:{value:this.sunDir.clone()},uTime:{value:0}},this.sky=new Ne(new $i(1,24,16),new sn({vertexShader:X_,fragmentShader:q_,uniforms:this.skyUniforms,side:Fe,depthWrite:!1,fog:!1})),this.sky.frustumCulled=!1,this.sky.renderOrder=-1e3,this.scene.add(this.sky);const r=new Sd(16763274,3.1);r.position.copy(this.sunDir).multiplyScalar(300),r.castShadow=!0,r.shadow.mapSize.set(n.q.shadowSize||2048,n.q.shadowSize||2048);const o=60;r.shadow.camera.left=-o,r.shadow.camera.right=o,r.shadow.camera.top=o,r.shadow.camera.bottom=-o,r.shadow.camera.near=10,r.shadow.camera.far=620,r.shadow.bias=-4e-4,r.shadow.normalBias=.035,this.scene.add(r),this.scene.add(r.target),this.sun=r,this.scene.add(new vd(9418495,4865064,.55)),this.waterUniforms={uTime:{value:0},uShallow:{value:new Gt(.22,.62,.68)},uDeep:{value:new Gt(.05,.19,.34)},uCamera:{value:new U},uSun:{value:this.sunDir.clone()}};const a=n.q.waterDetail;this.water=new Ne(new Cs(6e3,6e3,1+a*24,1+a*24),new sn({vertexShader:Y_,fragmentShader:$_,uniforms:this.waterUniforms,transparent:!0,fog:!1})),this.water.rotation.x=-Math.PI/2,this.water.position.y=-.35,this.water.frustumCulled=!1,this.scene.add(this.water),this.camPos=new U,this.camLook=new U,this.camYaw=0,this.camFov=62,this._tmp=new U,this._shake=0,this.freeLook=0,this.resize(window.innerWidth,window.innerHeight,t)}attachWorld(t,e){this.world=t,this.terrain=new c_(t,this.scene,this.config),this.roads=l_(t,this.scene),this.fx=new w_(this.scene,this.config),this.props=new V_(t,this.scene,this.config),this.karts=new M_(this.scene,e.karts.length);for(let s=0;s<e.karts.length;s++)this.karts.setLivery(s,e.karts[s].hue);if(e.itemBoxes.length){const s=new Ha(.85,0),r=new Ur({color:16765514,emissive:5585408,transparent:!0,opacity:.92});this.boxes=new wr(s,r,e.itemBoxes.length),this.boxes.frustumCulled=!1,this.scene.add(this.boxes),this._boxM=new Jt}const n=e.karts[this.ctx.localKart]||e.karts[0];this.camYaw=n.yaw,this.terrain.update(n.x,n.z,1e9),this.terrain.flush(),this.warmup()}warmup(){this.renderer.compile(this.scene,this.camera),this.renderer.render(this.scene,this.camera)}resize(t,e,n){this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e,!1),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,this.config.q.maxPixelRatio)*this.config.q.renderScale)}update(t,e){const n=e.sim;if(!n||!this.terrain)return;const s=n.karts[e.localKart]||n.karts[0];this.updateCamera(s,t,e),this.terrain.update(this.camPos.x,this.camPos.z,3),this.skyUniforms.uTime.value+=t,this.waterUniforms.uTime.value+=t,this.waterUniforms.uCamera.value.copy(this.camPos),this.sky.position.copy(this.camPos),this.sky.scale.setScalar(this.config.q.viewDistance*1.4),this.water.position.x=this.camPos.x,this.water.position.z=this.camPos.z;const r=n.karts[e.localKart]||n.karts[0];this.sun.position.set(r.x+this.sunDir.x*260,r.y+this.sunDir.y*260,r.z+this.sunDir.z*260),this.sun.target.position.set(r.x,r.y,r.z),this.sun.target.updateMatrixWorld(),this.sun.updateMatrixWorld(),this.karts.update(n.karts,t);const o=e.time.frame;for(const a of n.karts){const c=a.x-this.camPos.x,l=a.z-this.camPos.z;c*c+l*l<25600&&this.fx.emitForKart(a,t,o+a.index*17)}if(this.fx.update(t),this.boxes){for(let a=0;a<n.itemBoxes.length;a++){const c=n.itemBoxes[a],l=c.cooldown>0?-4:0;this._boxM.makeRotationY(e.time.elapsed*1.6+a),this._boxM.setPosition(c.x,c.y+l+Math.sin(e.time.elapsed*2+a)*.12,c.z),this.boxes.setMatrixAt(a,this._boxM)}this.boxes.instanceMatrix.needsUpdate=!0}this.renderer.render(this.scene,this.camera)}updateCamera(t,e,n){const s=Ue(t.speed/(Re.topSpeed*t.speedMulClass));let r=t.yaw;t.speed>3&&(r=Math.atan2(t.vx,t.vz));let o=r-t.yaw;for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;const a=t.drifting?.55:.22;let c=t.yaw+o*a;n.input?.look&&(c+=n.input.look*2.2);let l=c-this.camYaw;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;this.camYaw+=l*Math.min(1,e*(5.5+s*5.5));const h=7.2+s*2.6+(t.boostTime>0?1.1:0),u=3.15+s*.55,p=Math.sin(this.camYaw),d=Math.cos(this.camYaw);this._tmp.set(t.x-p*h,t.y+u,t.z-d*h);const g=this.world.heightAt(this._tmp.x,this._tmp.z)+1.5;this._tmp.y<g&&(this._tmp.y=g);const _=Math.min(1,e*9);this.camPos.lerp(this._tmp,_),this.camLook.set(t.x+p*(4+s*6),t.y+1.15,t.z+d*(4+s*6)),this.camera.position.copy(this.camPos),this.camera.lookAt(this.camLook);const m=62+s*9+(t.boostTime>0?11:0)+t.slipstream*3;if(this.camFov+=(m-this.camFov)*Math.min(1,e*(t.boostTime>0?9:4)),t.spinTime>0&&(this._shake=Math.max(this._shake,.5)),this._shake*=Math.max(0,1-e*3.5),this._shake>.002){const f=n.time.elapsed*47;this.camera.position.x+=Math.sin(f)*this._shake*.35,this.camera.position.y+=Math.sin(f*1.7)*this._shake*.28}Math.abs(this.camera.fov-this.camFov)>.01&&(this.camera.fov=this.camFov,this.camera.updateProjectionMatrix())}shake(t){W_.matches||(this._shake=Math.max(this._shake,t))}dispose(){this.props?.dispose(),this.terrain?.dispose(),this.fx?.dispose(),this.karts?.dispose(),this.renderer.dispose()}}const fr=.16,Z_=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyW","KeyA","KeyS","KeyD","Space","ShiftLeft","ShiftRight","KeyE","ControlLeft","KeyQ","KeyR"]),Ih=.5,Dh=.7,Uh=.55,J_=Object.freeze({steerX:Ih,brakeX:Dh,actY:Uh}),Al=.18;class j_{static id="input";static deps=[];async init(t){this.ctx=t,this.frame={throttle:0,steer:0,drift:!1,item:!1,look:0},t.input=this.frame,this.keys=new Set,this.touch={steer:0,brake:!1,drift:!1,item:!1},this.gamepadIndex=null,this.autoThrottle=!1,this.lastSource="keyboard";const e=t.canvas;window.addEventListener("keydown",n=>{n.repeat||(this.keys.add(n.code),this.lastSource="keyboard",Z_.has(n.code)&&this.clearAutoThrottle("keyboard"),["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(n.code)&&n.preventDefault())}),window.addEventListener("keyup",n=>this.keys.delete(n.code)),window.addEventListener("blur",()=>this.keys.clear()),window.addEventListener("gamepadconnected",n=>{this.gamepadIndex=n.gamepad.index,t.events.emit("input:source",{source:"gamepad"})}),window.addEventListener("gamepaddisconnected",()=>{this.gamepadIndex=null}),this.setupTouch(e)}enableTouch(){this.touchEnabled&&this.autoThrottle||(this.autoThrottle=!0,this.touchEnabled=!0,this.lastSource="touch",this.ctx.events.emit("input:source",{source:"touch"}))}clearAutoThrottle(t){this.lastSource=t,this.autoThrottle&&(this.autoThrottle=!1,this.ctx.events.emit("input:source",{source:t}))}get zones(){return J_}setupTouch(t){this.pointers=new Map,this.steerId=null;const e=a=>{const c=t.getBoundingClientRect();return{x:(a.clientX-c.left)/c.width,y:(a.clientY-c.top)/c.height}},n=a=>a.x<Ih?"steer":a.y<=Uh?"item":a.x<Dh?"brake":"drift",s=a=>{if(a.pointerType==="mouse")return;this.enableTouch();const c=e(a),l=n(c);this.pointers.set(a.pointerId,{zone:l,ox:c.x,oy:c.y,x:c.x,y:c.y}),l==="steer"?this.steerId===null&&(this.steerId=a.pointerId):this.applyHeld(),this.ctx.events.emit("input:touch",{zone:l,active:!0}),a.preventDefault()},r=a=>{const c=this.pointers.get(a.pointerId);if(!c)return;const l=e(a);if(c.x=l.x,c.y=l.y,c.zone==="steer"&&this.steerId===a.pointerId){const h=(l.x-c.ox)/Al;this.touch.steer=Math.max(-1,Math.min(1,h))}a.preventDefault()},o=a=>{const c=this.pointers.get(a.pointerId);if(c){if(this.pointers.delete(a.pointerId),this.steerId===a.pointerId){this.steerId=null;for(const[h,u]of this.pointers)u.zone==="steer"&&(this.steerId=h);const l=this.steerId!==null?this.pointers.get(this.steerId):null;l?l.ox=l.x-this.touch.steer*Al:this.touch.steer=0}this.applyHeld(),this.ctx.events.emit("input:touch",{zone:c.zone,active:!1})}};t.addEventListener("pointerdown",s,{passive:!1}),t.addEventListener("pointermove",r,{passive:!1}),t.addEventListener("pointerup",o),t.addEventListener("pointercancel",o),t.style.touchAction="none"}applyHeld(){let t=!1,e=!1,n=!1;for(const s of this.pointers.values())s.zone==="drift"?t=!0:s.zone==="item"?e=!0:s.zone==="brake"&&(n=!0);this.touch.drift=t,this.touch.item=e,this.touch.brake=n}update(t,e){const n=this.frame;let s=0,r=0,o=!1,a=!1,c=0;const l=this.keys;(l.has("ArrowLeft")||l.has("KeyA"))&&(s-=1),(l.has("ArrowRight")||l.has("KeyD"))&&(s+=1),(l.has("ArrowUp")||l.has("KeyW"))&&(r+=1),(l.has("ArrowDown")||l.has("KeyS"))&&(r-=1),(l.has("Space")||l.has("ShiftLeft")||l.has("ShiftRight"))&&(o=!0),(l.has("KeyE")||l.has("ControlLeft"))&&(a=!0),l.has("KeyQ")&&(c-=1),l.has("KeyR")&&(c+=1);const h=navigator.getGamepads?navigator.getGamepads():[],u=this.gamepadIndex!=null?h[this.gamepadIndex]:h&&h[0];if(u&&u.connected){let p=!1;const d=u.axes[0]||0;if(Math.abs(d)>fr){const f=(Math.abs(d)-fr)/(1-fr);s+=Math.sign(d)*f*f*.85+Math.sign(d)*f*.15,p=!0}const g=u.buttons[7]?.value||0,_=u.buttons[6]?.value||0;g>.05&&(r+=g,p=!0),_>.05&&(r-=_,p=!0),(u.buttons[0]?.pressed||u.buttons[5]?.pressed||u.buttons[1]?.pressed)&&(o=!0,p=!0),(u.buttons[2]?.pressed||u.buttons[4]?.pressed)&&(a=!0,p=!0);const m=u.axes[2]||0;Math.abs(m)>fr&&(c+=m),p&&this.clearAutoThrottle("gamepad")}this.touchEnabled&&(s+=this.touch.steer,this.touch.drift&&(o=!0),this.touch.item&&(a=!0),this.touch.brake?r-=1:this.autoThrottle&&(r+=1)),n.steer=Math.max(-1,Math.min(1,s)),n.throttle=Math.max(-1,Math.min(1,r)),n.drift=o,n.item=a,n.look=Math.max(-1,Math.min(1,c))}snapshot(){return{throttle:this.frame.throttle,steer:this.frame.steer,drift:this.frame.drift,item:this.frame.item,look:0}}}const Eo=[15,12,10,8,7,6,5,4,3,2,1,0],Sa=[{key:"shoreline",name:"Shoreline Cup",circuits:["coral","emerald"],klass:"rally"},{key:"ember",name:"Ember Cup",circuits:["ashfall","glacier"],klass:"pro"},{key:"odyssey",name:"Odyssey Cup",circuits:["coral","emerald","ashfall","glacier"],klass:"aether"}];class Q_{constructor(t,e){this.def=t,this.round=0,this.racers=e.map((n,s)=>({...n,index:s,points:0,results:[]}))}get circuit(){return this.def.circuits[this.round]}get isFinal(){return this.round>=this.def.circuits.length-1}get complete(){return this.round>=this.def.circuits.length}recordResult(t){for(let e=0;e<t.length;e++){const n=this.racers[t[e]];n&&(n.points+=Eo[Math.min(e,Eo.length-1)],n.results.push(e+1))}return this.round++,this.standings()}standings(){return this.racers.slice().sort((t,e)=>{if(e.points!==t.points)return e.points-t.points;const n=Math.min(...t.results.length?t.results:[99]),s=Math.min(...e.results.length?e.results:[99]);return n!==s?n-s:(t.results[t.results.length-1]??99)-(e.results[e.results.length-1]??99)})}stillContested(){const t=this.standings();if(t.length<2)return!1;const e=this.def.circuits.length-this.round;return e<=0?!1:t[1].points+Eo[0]*e>=t[0].points}}const tx=`
.scr{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;
  background:radial-gradient(120% 90% at 50% 10%,#16305c 0%,#0b1220 60%,#070c16 100%);gap:18px;padding:24px;text-align:center}
.title{font-size:clamp(34px,8vw,74px);font-weight:800;letter-spacing:-.03em;line-height:.94;margin:0;
  background:linear-gradient(180deg,#eaf2ff,#6fb7ff 70%,#3a7ad9);-webkit-background-clip:text;background-clip:text;color:transparent}
.sub{color:var(--dim);font-size:clamp(13px,3.2vw,16px);margin:-6px 0 10px;max-width:34ch;line-height:1.45}
.btn{appearance:none;border:1px solid var(--edge);background:rgba(20,34,60,.85);color:var(--ink);
  font:inherit;font-weight:650;font-size:16px;padding:15px 26px;border-radius:14px;cursor:pointer;min-width:250px;
  transition:transform .08s ease,background .15s ease,border-color .15s ease}
.btn:hover{background:rgba(32,54,92,.95);border-color:rgba(120,190,255,.5)}
.btn:active{transform:translateY(1px)}
.btn.primary{background:linear-gradient(180deg,#3aa9ff,#1a6fd4);border-color:#5bc0ff;font-size:19px;padding:19px 30px;
  box-shadow:0 10px 34px rgba(40,140,255,.34)}
.btn.primary:hover{background:linear-gradient(180deg,#4fb8ff,#2280e6)}
.row{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
/* A link, not a button: the secondary path should not carry the same visual
   weight as the primary one it exists to get out of the way of. */
.linky{appearance:none;border:0;background:none;color:var(--dim);font:inherit;font-size:13.5px;
  text-decoration:underline;text-underline-offset:3px;cursor:pointer;padding:6px 10px;border-radius:8px;margin-top:-6px}
.linky:hover{color:var(--ink)}
.code{font-size:clamp(44px,13vw,86px);font-weight:800;letter-spacing:.16em;font-variant-numeric:tabular-nums;
  color:var(--accent);text-shadow:0 0 34px rgba(77,210,255,.42);margin:2px 0}
.panel{background:var(--panel);border:1px solid var(--edge);border-radius:18px;padding:20px 24px;
  backdrop-filter:blur(12px);max-width:min(560px,92vw)}
.players{display:flex;flex-direction:column;gap:7px;margin:12px 0;max-height:34vh;overflow:auto}
.player{display:flex;align-items:center;gap:10px;padding:9px 13px;border-radius:11px;background:rgba(255,255,255,.05);font-size:15px}
.dot{width:12px;height:12px;border-radius:50%;flex:0 0 auto}
.inp{font:inherit;font-size:29px;font-weight:800;letter-spacing:.2em;text-align:center;text-transform:uppercase;
  width:min(280px,80vw);padding:14px;border-radius:13px;border:1px solid var(--edge);background:rgba(6,12,24,.9);color:var(--ink)}
.small{font-size:12.5px;color:var(--dim)}
.seg{display:flex;gap:6px;background:rgba(6,12,24,.6);padding:5px;border-radius:12px;flex-wrap:wrap;justify-content:center}
.seg button{appearance:none;border:0;background:transparent;color:var(--dim);font:inherit;font-size:13.5px;font-weight:600;
  padding:9px 14px;border-radius:9px;cursor:pointer}
.seg button[aria-pressed=true]{background:rgba(77,170,255,.24);color:var(--ink)}

/* ── accessibility ──────────────────────────────────────────────────────
   There were NO focus styles at all. Every control here sets appearance:none,
   which on several engines also suppresses the default focus ring, so a
   keyboard or switch user tabbing through the menu got no indication of where
   they were. :focus-visible rather than :focus so a mouse click does not leave
   a ring behind. */
.btn:focus-visible,.linky:focus-visible,.seg button:focus-visible,.inp:focus-visible{
  outline:3px solid #7fd0ff;outline-offset:3px;border-radius:14px}
.seg button:focus-visible{outline-offset:1px}

/* Respect the OS motion setting. This game moves a lot — panel transitions, the
   countdown pop, the tier flash — and vestibular triggers are not a style
   preference. The camera shake is disabled alongside this in the renderer. */
@media (prefers-reduced-motion: reduce){
  *,*::before,*::after{animation-duration:.001ms!important;animation-iteration-count:1!important;
    transition-duration:.001ms!important;scroll-behavior:auto!important}
  #msg.pop{transform:translate(-50%,-50%)}
}

/* ── HUD ── */
#hud{position:absolute;inset:0;pointer-events:none;font-variant-numeric:tabular-nums}
.hz{position:absolute;background:var(--panel);border:1px solid var(--edge);border-radius:14px;padding:9px 14px;backdrop-filter:blur(9px)}
#pos{top:calc(14px + env(safe-area-inset-top));left:calc(14px + env(safe-area-inset-left));display:flex;align-items:baseline;gap:5px}
#pos b{font-size:38px;font-weight:800;line-height:1}
#pos span{font-size:14px;color:var(--dim)}
#lap{top:calc(14px + env(safe-area-inset-top));left:50%;transform:translateX(-50%);text-align:center}
#lap b{font-size:21px}
#times{top:calc(14px + env(safe-area-inset-top));right:calc(14px + env(safe-area-inset-right));text-align:right;font-size:13.5px;line-height:1.55}
#times b{font-size:20px}
#spd{bottom:calc(16px + env(safe-area-inset-bottom));right:calc(16px + env(safe-area-inset-right));text-align:right}
#spd b{font-size:42px;font-weight:800;line-height:.95}
#spd span{font-size:12px;color:var(--dim);letter-spacing:.09em}
#item{bottom:calc(16px + env(safe-area-inset-bottom));left:calc(16px + env(safe-area-inset-left));
  width:82px;height:82px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;padding:6px}
#item .nm{font-size:11px;color:var(--dim);text-align:center;line-height:1.15}
#item .ic{font-size:29px}
/* Sat at top:31%, which on every circuit is exactly where the road meets the
   horizon — the countdown covered the corner the player was trying to read.
   Lifted clear, and given a real shadow so it survives a bright sky. */
#msg{position:absolute;top:21%;left:50%;transform:translate(-50%,-50%);font-size:clamp(38px,11vw,88px);
  font-weight:800;letter-spacing:-.02em;opacity:0;transition:opacity .18s,transform .18s;
  text-shadow:0 4px 10px rgba(0,0,0,.55),0 10px 44px rgba(0,0,0,.75)}
#msg.pop{transform:translate(-50%,-50%) scale(1.14)}
#toast{position:absolute;top:calc(88px + env(safe-area-inset-top));left:50%;transform:translateX(-50%);
  background:var(--panel);border:1px solid var(--edge);border-radius:11px;padding:9px 16px;font-size:14px;opacity:0;transition:opacity .3s}
#fps{position:absolute;bottom:6px;left:6px;font-size:10.5px;color:var(--dim);font-family:ui-monospace,monospace}
.res{display:flex;flex-direction:column;gap:5px;margin:12px 0;max-height:44vh;overflow:auto;
  /* A default scrollbar sat over the times as a bright white slab, and the last
     visible row was sliced through the middle so it read as a rendering fault
     rather than as "there is more". Thin bar, and a fade that says scroll. */
  scrollbar-width:thin;scrollbar-color:rgba(140,180,240,.34) transparent;
  -webkit-mask-image:linear-gradient(180deg,#000 0,#000 calc(100% - 26px),transparent 100%);
  mask-image:linear-gradient(180deg,#000 0,#000 calc(100% - 26px),transparent 100%)}
.res::-webkit-scrollbar{width:7px}
.res::-webkit-scrollbar-thumb{background:rgba(140,180,240,.34);border-radius:4px}
.res::-webkit-scrollbar-track{background:transparent}
.players{scrollbar-width:thin;scrollbar-color:rgba(140,180,240,.34) transparent}
.players::-webkit-scrollbar{width:7px}
.players::-webkit-scrollbar-thumb{background:rgba(140,180,240,.34);border-radius:4px}

/* Finishing position deserves to be said out loud. Winning and coming twelfth
   showed the identical screen. */
.place{font-size:clamp(30px,7vw,46px);font-weight:800;letter-spacing:-.02em;margin:0;line-height:1}
.place .ord{font-size:.55em;font-weight:700;margin-left:2px}
.placesub{color:var(--dim);font-size:14px;margin:4px 0 0}
.resrow{display:flex;align-items:center;gap:11px;padding:9px 14px;border-radius:10px;background:rgba(255,255,255,.05);font-size:15px}
.resrow.me{background:rgba(77,170,255,.19);border:1px solid rgba(77,170,255,.42)}
.resrow .p{font-weight:800;width:34px;font-size:17px}
.resrow .n{flex:1;text-align:left}
.resrow .t{color:var(--dim);font-size:13.5px}
/* The touch scheme is four invisible regions. The CSS for a hint existed and
   NOTHING EVER RENDERED IT, so a phone player had no way to discover that the
   right side splits into item / brake / drift at all. Shown on the first touch
   of a session and faded out, so it teaches once without becoming furniture. */
#touchzones{position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity .45s}
#touchzones.show{opacity:1}
#touchzones .z{position:absolute;display:flex;align-items:center;justify-content:center;
  color:rgba(255,255,255,.62);font-size:12px;font-weight:700;letter-spacing:.13em;
  border:1px dashed rgba(150,200,255,.30);border-radius:16px;text-shadow:0 2px 10px rgba(0,0,0,.8)}

/* Pause is an OVERLAY, not a screen: the opaque menu background would hide the
   race the player is about to return to, which makes resuming feel like
   starting something new rather than continuing. */
.scr.overlay{background:rgba(6,11,22,.72);backdrop-filter:blur(7px)}

/* Drift meter. It used to sit at bottom:112px while the minimap spanned
   bottom:16px..142px — the charge bar was drawn straight ACROSS the map, two
   unrelated readouts fighting for the same 30 px. It now sits clear above it,
   and it carries TIER TICKS: a bare fill tells you how much charge you have,
   which is useless, where a ticked bar tells you how close the next tier is,
   which is the actual decision. */
#drift{position:absolute;bottom:calc(162px + env(safe-area-inset-bottom));left:50%;transform:translateX(-50%);
  width:min(248px,56vw);height:12px;border-radius:6px;background:rgba(8,14,28,.78);overflow:hidden;
  border:1px solid var(--edge);opacity:0;transition:opacity .18s}
#driftfill{height:100%;width:0%;border-radius:5px;transition:width .05s linear,background .2s}
.tick{position:absolute;top:0;bottom:0;width:1px;background:rgba(255,255,255,.30)}
#drift.tiered{box-shadow:0 0 16px -2px currentColor}
#mini{position:absolute;bottom:calc(16px + env(safe-area-inset-bottom));left:50%;transform:translateX(-50%);
  width:126px;height:126px;opacity:.9}

/* Off-road. The surface costs real speed and nothing said so. */
#offroad{position:absolute;bottom:calc(186px + env(safe-area-inset-bottom));left:50%;transform:translateX(-50%);
  font-size:12px;font-weight:700;letter-spacing:.11em;color:#ffcf6b;opacity:0;transition:opacity .2s;
  text-shadow:0 2px 12px rgba(0,0,0,.7)}

/* The rocket start is a real mechanic — throttle inside a 220 ms window before
   GO gives a boost, too early stalls you — and it had NO interface whatsoever.
   It was unlearnable: nothing named it, nothing prompted it, and both outcomes
   were silent. One line during the countdown, one word after it. */
#launch{position:absolute;top:calc(21% + 58px);left:50%;transform:translateX(-50%);
  font-size:13px;font-weight:700;letter-spacing:.09em;color:rgba(255,255,255,.8);
  opacity:0;transition:opacity .2s;text-shadow:0 2px 14px rgba(0,0,0,.85);white-space:nowrap}
`,ex=["","⚡","⚡⚡⚡","🎯","💣","🛡","🌩"],Rl=typeof matchMedia=="function"&&matchMedia("(hover: none) and (pointer: coarse)").matches,nx=(()=>{const i=new Set;for(const t of Object.values(se))t.slow&&i.add(t.id);return i})();class ix{static id="ui";static deps=[];async init(t){this.ctx=t,this.root=document.getElementById("ui");const e=document.createElement("style");e.textContent=tx,document.head.appendChild(e),this.screen=null,this._timers=new Set,this._autoJoinUsed=!1,this.buildHud(),this.onEvents(),this.showTitle()}clear(){for(const t of this.root.querySelectorAll(".scr"))t.remove();this.screen=null;for(const t of this._timers)clearTimeout(t);this._timers.clear()}_timer(t,e){const n=setTimeout(()=>{this._timers.delete(n),t()},e);return this._timers.add(n),n}panel(t){this.clear();const e=document.createElement("div");return e.className="scr",e.innerHTML=t,this.root.appendChild(e),this.screen=e,(e.querySelector("[data-autofocus]")||e.querySelector(".btn.primary")||e.querySelector(".btn"))?.focus({preventScroll:!0}),e}showTitle(){this.hud.classList.add("hidden");const t=new URLSearchParams(location.search).get("r")||(location.pathname.startsWith("/r/")?location.pathname.slice(3):""),e=this.panel(`
      <h1 class="title">AETHER KART<br>ODYSSEY</h1>
      <p class="sub">Hold drift through a corner to bank a boost. Longer holds pay more.</p>
      <div class="row">
        <button class="btn primary" id="b-solo">Race now</button>
      </div>
      <button class="linky" id="b-pick">or pick a circuit and class</button>
      <div class="row">
        <button class="btn" id="b-create">Play with friends</button>
        <button class="btn" id="b-join">Join a room</button>
      </div>
      <div class="row">
        <button class="btn" id="b-cup">Grand Prix</button>
        <button class="btn" id="b-tt">Time trial</button>
      </div>
      <div class="row">
        <button class="btn" id="b-free">Free roam</button>
      </div>
      <p class="small">${Rl?"Left thumb steers · right thumb drifts · brake beside it<br>A keyboard works too: arrows or WASD, space to drift":"Arrow keys or WASD · Space to drift · E for item<br>On a phone: left thumb steers, right thumb drifts"}</p>
    `);e.querySelector("#b-solo").onclick=()=>this.launch({mode:"race",circuit:this.lastCircuit(),klass:this.lastClass(),ai:11}),e.querySelector("#b-pick").onclick=()=>this.showSetup("race"),e.querySelector("#b-create").onclick=()=>this.startHost(),e.querySelector("#b-join").onclick=()=>this.showJoin(),e.querySelector("#b-free").onclick=()=>this.launch({mode:"freeroam",ai:5}),e.querySelector("#b-cup").onclick=()=>this.showCupSelect(),e.querySelector("#b-tt").onclick=()=>this.showSetup("timetrial"),t&&t.length===4&&!this._autoJoinUsed&&(this._autoJoinUsed=!0,this._timer(()=>this.showJoin(t),40))}showSetup(t){const n=this.ctx.world.circuits;let s=n[0].key,r="rally";const o=this.panel(`
      <div class="panel">
        <h2 style="margin:0 0 4px">${t==="timetrial"?"Time trial":"Quick race"}</h2>
        <p class="small" style="margin:0 0 14px">Pick a circuit and a class.</p>
        <div class="seg" id="cirs" role="group" aria-label="Circuit">${n.map((l,h)=>`<button data-k="${l.key}" aria-pressed="${h===0}">${l.name}</button>`).join("")}</div>
        <div class="seg" style="margin-top:9px" id="cls" role="group" aria-label="Class">${["cruise","rally","pro","aether"].map(l=>`<button data-k="${l}" aria-pressed="${l==="rally"}">${l[0].toUpperCase()+l.slice(1)}</button>`).join("")}</div>
        <p class="small" id="hint" style="margin:13px 0 0"></p>
        ${t==="timetrial"?`
          <hr style="border:0;border-top:1px solid var(--edge);margin:16px 0">
          <p class="small" style="margin:0 0 8px">Paste a friend's ghost code to race it</p>
          <input class="inp" id="ghost" style="font-size:13px;letter-spacing:0;width:min(420px,84vw)"
                 placeholder="optional — paste ghost code" autocomplete="off" spellcheck="false">
          <p class="small" id="gst" style="margin:8px 0 0">&nbsp;</p>`:""}
      </div>
      <div class="row">
        <button class="btn primary" id="go">Start</button>
        <button class="btn" id="back">Back</button>
      </div>
    `),a=(l,h)=>o.querySelector(l).onclick=u=>{const p=u.target.closest("button");p&&(o.querySelectorAll(`${l} button`).forEach(d=>d.setAttribute("aria-pressed",d===p)),h(p.dataset.k))};a("#cirs",l=>{s=l}),a("#cls",l=>{r=l,c()});const c=()=>{o.querySelector("#hint").textContent=r==="aether"?"Aether: fastest class, ruthless opponents, and you can actually lose.":r==="cruise"?"Cruise: gentler speed, forgiving opponents.":r==="pro"?"Pro: quick, and they will defend the inside line.":"Rally: the standard class."};c(),o.querySelector("#go").onclick=()=>{try{localStorage.setItem("akoCircuit",s),localStorage.setItem("akoClass",r)}catch{}const l={mode:t,circuit:s,klass:r,ai:t==="timetrial"?0:11},h=o.querySelector("#ghost")?.value?.trim();if(h){const u=this.ctx.verifyGhost(h);if(!u.ok){o.querySelector("#gst").textContent=u.reason;return}l.ghost=u.ghost,l.circuit=u.ghost.circuit,l.klass=u.ghost.klass}this.launch(l)},o.querySelector("#back").onclick=()=>this.showTitle()}showCupSelect(){const t=this.panel(`
      <h2 class="title" style="font-size:clamp(26px,6vw,44px)">Grand Prix</h2>
      <p class="sub">Points carry between races. A bad round is survivable; a good one is worth defending.</p>
      <div class="row" style="flex-direction:column;align-items:center">
        ${Sa.map(e=>`<button class="btn" data-cup="${e.key}">
          ${e.name}<br><span class="small">${e.circuits.length} races · ${e.klass}</span></button>`).join("")}
      </div>
      <button class="btn" id="back">Back</button>
    `);t.querySelectorAll("[data-cup]").forEach(e=>{e.onclick=()=>{this.hud.classList.remove("hidden"),this.ctx.events.emit("ui:cup",{key:e.dataset.cup})}}),t.querySelector("#back").onclick=()=>this.showTitle()}showCupStandings(t,e){this.hud.classList.add("hidden");const n=t.complete,s=t.stillContested(),r=this.panel(`
      <h2 class="title" style="font-size:clamp(24px,5.5vw,40px)">
        ${n?`${t.def.name} — ${e[0].name} wins`:`Round ${t.round} of ${t.def.circuits.length}`}
      </h2>
      ${n?"":`<p class="sub">${s?"Still anyone’s cup.":"The cup is mathematically decided."}</p>`}
      <div class="panel">
        <div class="res">${e.map((o,a)=>`
          <div class="resrow ${o.index===0?"me":""}">
            <span class="p">${a+1}</span>
            <span class="n">${To(o.name)}</span>
            <span class="t">${o.results.map(c=>`P${c}`).join(" · ")}</span>
            <span style="font-weight:800;min-width:38px;text-align:right">${o.points}</span>
          </div>`).join("")}</div>
      </div>
      <div class="row">
        ${n?"":'<button class="btn primary" id="next">Next race</button>'}
        <button class="btn" id="menu">Main menu</button>
      </div>
    `);r.querySelector("#next")?.addEventListener("click",()=>this.ctx.events.emit("ui:cup:next",{})),r.querySelector("#menu").onclick=()=>{this.ctx.events.emit("ui:menu",{}),this.showTitle()}}showJoin(t=""){const e=this.panel(`
      <div class="panel">
        <h2 style="margin:0 0 4px">Join a room</h2>
        <p class="small" style="margin:0 0 14px">Enter the four-character code your friend sent.</p>
        <input class="inp" id="code" maxlength="4" autocomplete="off" autocapitalize="characters"
               spellcheck="false" placeholder="————" value="${t}" data-autofocus>
        <p class="small" id="st" style="margin:12px 0 0">&nbsp;</p>
      </div>
      <div class="row">
        <button class="btn primary" id="go">Join</button>
        <button class="btn" id="back">Back</button>
      </div>
    `),n=e.querySelector("#code");n.oninput=()=>{n.value=n.value.toUpperCase().replace(/[^A-Z0-9]/g,"")},n.onkeydown=r=>{r.key==="Enter"&&s()};const s=async()=>{const r=n.value.trim().toUpperCase();if(r.length!==4){e.querySelector("#st").textContent="Codes are four characters.";return}e.querySelector("#st").textContent="Connecting…";try{await this.ctx.get("net").join(r,this.playerName())}catch(o){e.querySelector("#st").textContent=o.message||"Could not join that room."}};e.querySelector("#go").onclick=s,e.querySelector("#back").onclick=()=>this.showTitle(),t.length===4&&s()}async startHost(){const t=this.panel('<div class="panel"><h2 style="margin:0">Creating room…</h2></div>');try{await this.ctx.get("net").create(this.playerName())}catch(e){t.innerHTML=`<div class="panel"><h2 style="margin:0 0 8px">Couldn't create a room</h2>
        <p class="small">${e.message}</p></div>
        <button class="btn" id="back">Back</button>`,t.querySelector("#back").onclick=()=>this.showTitle()}}showLobby(t){const e=this.ctx.get("net"),n=`${location.origin}/?r=${t.code}`,s=this.panel(`
      <p class="small" style="margin:0">Room code — say it out loud or send the link</p>
      <div class="code">${t.code}</div>
      <div class="row">
        <button class="btn" id="share">Copy invite link</button>
      </div>
      <div class="panel" style="margin-top:8px">
        <div class="players" id="pl"></div>
        <p class="small" id="note">${t.host?"Start when everyone is in. Up to 12 race at once.":"Waiting for the host to start…"}</p>
      </div>
      <div class="row">
        ${t.host?'<button class="btn primary" id="go">Start race</button>':""}
        <button class="btn" id="leave">Leave</button>
      </div>
    `);this.renderPlayers(t.peers),s.querySelector("#share").onclick=async()=>{const r=s.querySelector("#share");try{navigator.share?await navigator.share({title:"Aether Kart Odyssey",text:`Race me — room ${t.code}`,url:n}):(await navigator.clipboard.writeText(n),r.textContent="Link copied",setTimeout(()=>{r.textContent="Copy invite link"},1800))}catch{}},s.querySelector("#go")?.addEventListener("click",()=>e.startRace()),s.querySelector("#leave").onclick=()=>{e.leave(),this.showTitle()}}renderPlayers(t){const e=this.screen?.querySelector("#pl");e&&(e.innerHTML=t.map((n,s)=>`
      <div class="player">
        <span class="dot" style="background:hsl(${s*52%360} 72% 56%)"></span>
        <span style="flex:1;text-align:left">${To(n.name)}</span>
        ${n.host?'<span class="small">host</span>':""}
      </div>`).join(""))}showResults(t){const e=t.karts.slice().sort((u,p)=>u.position-p.position),n=this.ctx.localKart,s=t.karts[n]?.bestLap,r=t.karts[n]?.position||e.length,o=r,a=r%100,c=a>=11&&a<=13?"th":["th","st","nd","rd"][r%10]||"th",l=r===1?"#ffd76a":r<=3?"#cfe4ff":"var(--ink)",h=r===1?"Won it.":r<=3?"On the podium.":r<=e.length/2?"Top half.":"There is a faster lap in there.";this.panel(`
      <h2 class="place" style="color:${l}">${o}<span class="ord">${c}</span></h2>
      <p class="placesub">${h}</p>
      <div class="panel">
        <div class="res">${e.map(u=>`
          <div class="resrow ${u.index===n?"me":""}">
            <span class="p">${u.position}</span>
            <span class="dot" style="background:hsl(${Math.round(u.hue*360)} 72% 56%)"></span>
            <span class="n">${To(u.name)}</span>
            <span class="t">${u.finished?fs(u.finishTime):"DNF"}</span>
          </div>`).join("")}</div>
        ${s?`<p class="small">Your best lap: <b style="color:var(--accent)">${fs(s)}</b></p>`:""}
        ${this.ctx.bestGhost?'<button class="btn" id="ghostcopy" style="min-width:0;font-size:14px;padding:10px 18px">Copy ghost code</button>':""}
      </div>
      <div class="row">
        <button class="btn primary" id="again">Race again</button>
        <button class="btn" id="menu">Main menu</button>
      </div>
    `),this.screen.querySelector(".resrow.me")?.scrollIntoView({block:"center"}),this.screen.querySelector("#ghostcopy")?.addEventListener("click",async u=>{try{await navigator.clipboard.writeText(this.ctx.bestGhost),u.target.textContent="Ghost code copied"}catch{u.target.textContent="Copy failed — select and copy manually"}}),this.screen.querySelector("#again").onclick=()=>this.ctx.events.emit("ui:restart",{}),this.screen.querySelector("#menu").onclick=()=>{this.ctx.events.emit("ui:menu",{}),this.showTitle()}}launch(t){this.ctx.events.emit("ui:launch",t)}lastCircuit(){const t=(()=>{try{return localStorage.getItem("akoCircuit")}catch{return null}})(),e=this.ctx.world.circuits;return e.some(n=>n.key===t)?t:e[0].key}lastClass(){const t=(()=>{try{return localStorage.getItem("akoClass")}catch{return null}})();return["cruise","rally","pro","aether"].includes(t)?t:"rally"}playerName(){let t=localStorage.getItem("akoName");return t||(t=`Racer ${Math.floor(Math.random()*900+100)}`,localStorage.setItem("akoName",t)),t}buildHud(){const t=document.createElement("div");t.id="hud",t.className="hidden",t.setAttribute("role","group"),t.setAttribute("aria-label","Race status"),t.innerHTML=`
      <div class="hz" id="pos"><b>1</b><span id="posof">/12</span></div>
      <div class="hz" id="lap">LAP <b id="lapn">1/3</b></div>
      <div class="hz" id="times"><span class="small">TIME</span><br><b id="tcur">0:00.00</b>
        <br><span class="small">BEST <span id="tbest">—</span></span></div>
      <div class="hz" id="spd"><b id="kmh">0</b><br><span>KM/H</span></div>
      <div class="hz" id="item"><div class="ic" id="itemic">—</div><div class="nm" id="itemnm">no item</div></div>
      <div id="drift"><div id="driftfill"></div></div>
      <div id="offroad">OFF ROAD</div>
      <div id="launch"></div>
      <canvas id="mini" width="252" height="252" aria-hidden="true"></canvas>
      <div id="msg"></div>
      <div id="touchzones" aria-hidden="true"></div>
      <div id="toast" role="status" aria-live="polite"></div>
      <div id="fps" class="hidden"></div>`,this.root.appendChild(t),this.hud=t,this.el={pos:t.querySelector("#pos b"),posof:t.querySelector("#posof"),lap:t.querySelector("#lapn"),tcur:t.querySelector("#tcur"),tbest:t.querySelector("#tbest"),kmh:t.querySelector("#kmh"),itemic:t.querySelector("#itemic"),itemnm:t.querySelector("#itemnm"),drift:t.querySelector("#drift"),driftfill:t.querySelector("#driftfill"),msg:t.querySelector("#msg"),toast:t.querySelector("#toast"),fps:t.querySelector("#fps"),mini:t.querySelector("#mini")};const e=Kt.tiers[Kt.tiers.length-1];for(let l=0;l<Kt.tiers.length-1;l++){const h=document.createElement("div");h.className="tick",h.style.left=`${Kt.tiers[l]/e*100}%`,this.el.drift.appendChild(h)}const n=t.querySelector("#touchzones"),{steerX:s,brakeX:r,actY:o}=this.ctx.get("input").zones,a=l=>`${(l*100).toFixed(2)}%`,c=(l,h)=>{const u=document.createElement("div");u.className="z",u.textContent=l,Object.assign(u.style,h),n.appendChild(u)};c("STEER",{left:"2%",top:"30%",width:`calc(${a(s)} - 4%)`,bottom:"4%"}),c("ITEM",{left:a(s),top:"30%",right:"2%",height:`calc(${a(o)} - 30%)`}),c("BRAKE",{left:a(s),top:a(o),width:a(r-s),bottom:"4%"}),c("DRIFT",{left:a(r),top:a(o),right:"2%",bottom:"4%"}),this.el.touchzones=n,this.el.offroad=t.querySelector("#offroad"),this.el.launch=t.querySelector("#launch"),this._driftCol=null,this._offRoad=!1,this._cdShown=0,this._launchCheck=0,this.mini=this.el.mini.getContext("2d"),this._msgT=0,this._toastT=0}onEvents(){const t=this.ctx.events;window.addEventListener("keydown",e=>{e.key!=="Escape"&&e.code!=="KeyP"||this.isRacing()&&(e.preventDefault(),this.togglePause())}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.togglePause(!0)}),t.on("ui:launch",()=>{this.clear(),this.hud.classList.remove("hidden")}),t.on("drift:tier",({kart:e,tier:n})=>{e===this.ctx.localKart&&this.flash(["","CHARGED","SUPER","ULTRA"][n],["","#4dd2ff","#ff8a3d","#b96bff"][n],.5)}),t.on("drift:spinout",({kart:e})=>{e===this.ctx.localKart&&this.flash("SPUN OUT","#ff5a5a",.9)}),t.on("lap:complete",({kart:e,lap:n,time:s})=>{e===this.ctx.localKart&&this.toast(`Lap ${n} — ${fs(s)}`)}),t.on("item:hit",({kart:e})=>{e===this.ctx.localKart&&this.ctx.peek("render")?.shake(.8)}),t.on("race:start",()=>this.flash("GO","#7CFF9B",.8)),t.on("net:quality",({rtt:e})=>{this._rtt=e}),t.on("input:source",({source:e})=>{e!=="touch"||this._zonesShown||(this._zonesShown=!0,this.el.touchzones.classList.add("show"),this._timer(()=>this.el.touchzones.classList.remove("show"),4200))})}flash(t,e,n){this.el.msg.textContent=t,this.el.msg.style.color=e,this.el.msg.style.opacity="1",this.el.msg.classList.remove("pop"),this.el.msg.offsetWidth,this.el.msg.classList.add("pop"),this._msgT=n}isRacing(){return this.ctx.sim&&!this.hud.classList.contains("hidden")}togglePause(t){if(!this.isRacing())return;const e=t!==void 0?t:!this.ctx.sim.paused;e!==!!this.ctx.sim.paused&&(this.ctx.sim.paused=e,e?this.showPause():this.clear())}showPause(){const t=this.panel(`
      <div class="panel">
        <h2 style="margin:0 0 4px">Paused</h2>
        <p class="small" style="margin:0 0 16px">Esc to resume</p>
        <div class="row"><button class="btn primary" id="p-resume">Resume</button></div>
        <div class="row" style="margin-top:10px">
          <button class="btn" id="p-restart">Restart race</button>
          <button class="btn" id="p-quit">Quit to menu</button>
        </div>
      </div>`);t.classList.add("overlay"),t.querySelector("#p-resume").onclick=()=>this.togglePause(!1),t.querySelector("#p-restart").onclick=()=>{this.ctx.sim.paused=!1,this.ctx.events.emit("ui:restart",{})},t.querySelector("#p-quit").onclick=()=>{this.ctx.sim.paused=!1,this.hud.classList.add("hidden"),this.ctx.events.emit("ui:menu",{}),this.showTitle()}}toast(t){this.el.toast.textContent=t,this.el.toast.style.opacity="1",this._toastT=2.2}update(t,e){const n=e.sim;if(!n||this.hud.classList.contains("hidden"))return;const s=n.karts[e.localKart];if(!s)return;this.el.pos.textContent=s.position,this.el.posof.textContent=`/${n.karts.length}`,this.el.lap.textContent=n.mode==="freeroam"?"—":`${Math.min(s.lap+1,n.laps)}/${n.laps}`,this.el.tcur.textContent=fs(n.state==="countdown"?0:n.time-s.lapStart),this.el.tbest.textContent=s.bestLap?fs(s.bestLap):"—",this.el.kmh.textContent=Math.round(s.speed*3.6);const r=s.item|0;if(this.el.itemic.textContent=ex[r]||"—",this.el.itemnm.textContent=r?au[r]+(s.itemCount>1?` ×${s.itemCount}`:""):"no item",s.drifting){const a=Ue(s.driftCharge/Kt.tiers[2]),c=s.driftTier>=3?"#b96bff":s.driftTier>=2?"#ff8a3d":s.driftTier>=1?"#4dd2ff":"#8aa0c0";this.el.drift.style.opacity="1",this.el.driftfill.style.width=`${a*100}%`,c!==this._driftCol&&(this._driftCol=c,this.el.driftfill.style.background=c,this.el.drift.style.color=c,this.el.drift.classList.toggle("tiered",s.driftTier>=1))}else this._driftCol!==null&&(this._driftCol=null,this.el.drift.style.opacity="0",this.el.drift.classList.remove("tiered"));const o=nx.has(s.surface)&&n.state==="racing"&&s.speed>3;if(o!==this._offRoad&&(this._offRoad=o,this.el.offroad.style.opacity=o?"1":"0"),n.state==="countdown"){this.el.launch.textContent=Rl?"Hold the right side as GO lands to launch":"Hold ↑ as GO lands to launch",this.el.launch.style.opacity=n.countdown<2.6?"1":"0";const a=Math.ceil(n.countdown);a>0&&a<=3&&a!==this._cdShown&&(this._cdShown=a,this.flash(String(a),"#ffffff",.9))}else this._cdShown!==0&&(this._cdShown=0,this._launchCheck=2),this._launchCheck>0&&--this._launchCheck===0&&(s.boostSource===5&&s.boostTime>0?this.flash("LAUNCH","#7CFF9B",1):s.stunTime>0&&this.flash("JUMPED IT","#ff9a4d",1),this.el.launch.style.opacity="0");if(this._msgT>0&&(this._msgT-=t,this._msgT<=0&&(this.el.msg.style.opacity="0")),this._toastT>0&&(this._toastT-=t,this._toastT<=0&&(this.el.toast.style.opacity="0")),e.config.showFps){this.el.fps.classList.remove("hidden");const a=e.engine.frameStats();this.el.fps.textContent=`p50 ${a.p50.toFixed(1)}ms  p95 ${a.p95.toFixed(1)}ms  ${e.config.quality}${this._rtt?`  ${this._rtt}ms`:""}`}else this.el.fps.classList.add("hidden");this.drawMini(n,s),n.state==="finished"&&!this._shownResults&&!this.ctx.cupState?.()&&(this._shownResults=!0,this._timer(()=>{this.hud.classList.add("hidden"),this.showResults(n)},900)),n.state!=="finished"&&(this._shownResults=!1)}drawMini(t,e){const n=this.mini,s=252;n.clearRect(0,0,s,s);const r=t.circuit.samples;let o=1/0,a=-1/0,c=1/0,l=-1/0;for(const R of r)R.x<o&&(o=R.x),R.x>a&&(a=R.x),R.z<c&&(c=R.z),R.z>l&&(l=R.z);const h=20,u=Math.min((s-h*2)/(a-o),(s-h*2)/(l-c)),p=(s-(a-o)*u)/2-o*u,d=(s-(l-c)*u)/2-c*u,g=R=>R*u+p,_=R=>R*u+d;n.beginPath();for(let R=0;R<r.length;R++){const L=r[R];R===0?n.moveTo(g(L.x),_(L.z)):n.lineTo(g(L.x),_(L.z))}n.closePath(),n.strokeStyle="rgba(4,8,18,0.55)",n.lineWidth=13,n.stroke(),n.strokeStyle="rgba(160,200,255,0.34)",n.lineWidth=10,n.stroke(),n.strokeStyle="rgba(205,230,255,0.72)",n.lineWidth=2.5,n.stroke();const m=r[0],f=m.nx*7,y=m.nz*7;n.beginPath(),n.moveTo(g(m.x)+f,_(m.z)+y),n.lineTo(g(m.x)-f,_(m.z)-y),n.strokeStyle="rgba(255,255,255,0.92)",n.lineWidth=3,n.stroke();for(const R of t.karts)R.index!==e.index&&(n.beginPath(),n.arc(g(R.x),_(R.z),3.6,0,Math.PI*2),n.fillStyle=`hsl(${Math.round(R.hue*360)} 70% 56%)`,n.globalAlpha=.85,n.fill(),n.globalAlpha=1);const M=g(e.x),v=_(e.z),A=Math.sin(e.yaw),E=Math.cos(e.yaw);n.beginPath(),n.moveTo(M+A*8.5,v+E*8.5),n.lineTo(M-E*5.5-A*5,v+A*5.5-E*5),n.lineTo(M+E*5.5-A*5,v-A*5.5-E*5),n.closePath(),n.fillStyle="#ffffff",n.strokeStyle="rgba(6,12,24,0.9)",n.lineWidth=2.5,n.stroke(),n.fill()}}function fs(i){if(!isFinite(i)||i<0)return"—";const t=Math.floor(i/60),e=i-t*60;return`${t}:${e<10?"0":""}${e.toFixed(2)}`}function To(i){return String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}const sx=20,rx=30,ox=.1,ax=.25,cx=.35,Cl=.15;class lx{static id="net";static deps=[];async init(t){this.ctx=t,this.ws=null,this.role="offline",this.code=null,this.peerId=0,this.peers=[],this.hostId=0,this.inputHistory=[],this.remoteInputs=new Map,this.snapBuffer=[],this.rtt=0,this._acc=0,this._sendAcc=0,this._softErr=null}url(){return`${location.protocol==="https:"?"wss:":"ws:"}//${location.host}/ws`}connect(){return this.ws&&this.ws.readyState<=1?Promise.resolve():new Promise((t,e)=>{const n=new WebSocket(this.url());n.binaryType="arraybuffer";const s=setTimeout(()=>{n.close(),e(new Error("Connection timed out."))},8e3);n.onopen=()=>{clearTimeout(s),this.ws=n,t()},n.onerror=()=>{clearTimeout(s),e(new Error("Could not reach the server."))},n.onclose=()=>{this.ws=null,this.role!=="offline"&&this.ctx.events.emit("net:closed",{})},n.onmessage=r=>this.onMessage(r)})}send(t){this.ws&&this.ws.readyState===1&&this.ws.send(JSON.stringify(t))}async create(t){return await this.connect(),this.pendingName=t,this.send({t:"create",name:t}),this.waitFor("created")}async join(t,e){return await this.connect(),this.pendingName=e,this.send({t:"join",code:t,name:e}),this.waitFor("joined")}waitFor(t){return new Promise((e,n)=>{const s=setTimeout(()=>{r(),n(new Error("The server did not respond."))},8e3),r=this.ctx.events.on(`net:${t}`,a=>{clearTimeout(s),r(),o(),e(a)}),o=this.ctx.events.on("net:error",a=>{clearTimeout(s),r(),o(),n(new Error(a.msg||"That room could not be found."))})})}leave(){this.send({t:"leave"}),this.role="offline",this.code=null,this.peers=[],this.ws&&(this.ws.close(),this.ws=null)}onMessage(t){if(t.data instanceof ArrayBuffer){this.onBinary(new Uint8Array(t.data));return}let e;try{e=JSON.parse(t.data)}catch{return}switch(e.t){case"created":this.role="host",this.code=e.code,this.peerId=e.peerId,this.hostId=e.peerId,this.peers=[{id:e.peerId,name:this.pendingName,host:!0}],this.ctx.events.emit("net:created",e),this.ctx.get("ui").showLobby({code:this.code,host:!0,peers:this.peers});break;case"joined":this.role="client",this.code=e.code,this.peerId=e.peerId,this.hostId=e.hostId,this.peers=[...e.peers.map(n=>({...n,host:n.id===e.hostId})),{id:e.peerId,name:this.pendingName,host:!1}],this.ctx.events.emit("net:joined",e),this.ctx.get("ui").showLobby({code:this.code,host:!1,peers:this.peers});break;case"peer:join":this.peers.push({id:e.id,name:e.name,host:!1}),this.ctx.get("ui").renderPlayers(this.peers);break;case"peer:leave":this.peers=this.peers.filter(n=>n.id!==e.id),this.remoteInputs.delete(e.id),this.ctx.get("ui").renderPlayers(this.peers);break;case"host":this.hostId=e.id,e.id===this.peerId&&this.role==="client"&&(this.role="host",this.ctx.get("ui").toast("You are now the host"));for(const n of this.peers)n.host=n.id===e.id;break;case"pong":this.rtt=Math.round(performance.now()-e.ts),this.ctx.events.emit("net:quality",{rtt:this.rtt});break;case"relay":this.onRelay(e.from,e.d);break;case"error":this.ctx.events.emit("net:error",e);break}}onRelay(t,e){e&&(e.k==="input"&&this.role==="host"?this.remoteInputs.set(t,e.i):e.k==="start"?this.ctx.events.emit("ui:launch",{...e.o,net:!0,seatOf:e.seats}):e.k==="snap"&&this.role==="client"&&(this.snapBuffer.push({t:performance.now()/1e3,s:e.s,tick:e.tick}),this.snapBuffer.length>30&&this.snapBuffer.shift()))}onBinary(){}startRace(t={}){const e={};this.peers.forEach((s,r)=>{e[s.id]=r});const n={mode:"race",circuit:t.circuit||"coral",klass:t.klass||"rally",seed:Date.now()&2147483647,humans:this.peers.length,ai:Math.max(0,8-this.peers.length)};this.send({t:"relay",to:"all",d:{k:"start",o:n,seats:e}}),this.ctx.events.emit("ui:launch",{...n,net:!0,seatOf:e})}seat(){return this._seat??0}setSeat(t){this._seat=t}update(t,e){this.role==="offline"||!e.sim||(this._pingAcc=(this._pingAcc||0)+t,this._pingAcc>2&&(this._pingAcc=0,this.send({t:"ping",ts:performance.now()})),this.role==="host"?this.hostUpdate(t,e):this.clientUpdate(t,e))}hostUpdate(t,e){this._acc+=t;const n=1/sx;if(this._acc<n)return;this._acc=0;const s=e.sim,r=s.karts.map(o=>[+o.x.toFixed(2),+o.y.toFixed(2),+o.z.toFixed(2),+o.yaw.toFixed(3),+o.vx.toFixed(2),+o.vz.toFixed(2),(o.drifting?1:0)|(o.boostTime>0?2:0)|(o.spinTime>0?4:0),o.lap*1e3+Math.round(o.position)]);this.send({t:"relay",to:"all",d:{k:"snap",tick:s.tick,s:r}})}clientUpdate(t,e){if(this._sendAcc+=t,this._sendAcc>=1/rx){this._sendAcc=0;const n=e.get("input").snapshot();this.send({t:"relay",to:this.hostId,d:{k:"input",i:[n.throttle,n.steer,n.drift?1:0,n.item?1:0],tick:e.sim.tick}})}this.applySnapshots(t,e)}applySnapshots(t,e){const n=e.sim,s=performance.now()/1e3-ox;if(this.snapBuffer.length<2)return;let r=null,o=null;for(let l=0;l<this.snapBuffer.length-1;l++)if(this.snapBuffer[l].t<=s&&this.snapBuffer[l+1].t>=s){r=this.snapBuffer[l],o=this.snapBuffer[l+1];break}if(!r){const l=this.snapBuffer[this.snapBuffer.length-1];if(s-l.t>ax)return;r=o=l}const a=o.t-r.t||1e-6,c=Math.max(0,Math.min(1,(s-r.t)/a));for(let l=0;l<n.karts.length;l++){const h=n.karts[l],u=r.s[l],p=o.s[l];if(!u||!p)continue;if(l===e.localKart){const g=p[0]-h.x,_=p[2]-h.z,m=Math.hypot(g,_);m>4?(h.x=p[0],h.y=p[1],h.z=p[2],h.yaw=p[3],h.vx=p[4],h.vz=p[5]):m>cx&&(h.x+=g*Math.min(1,t/Cl),h.z+=_*Math.min(1,t/Cl)),h.lap=Math.floor(p[7]/1e3),h.position=p[7]%1e3;continue}h.x=u[0]+(p[0]-u[0])*c,h.y=u[1]+(p[1]-u[1])*c,h.z=u[2]+(p[2]-u[2])*c;let d=p[3]-u[3];for(;d>Math.PI;)d-=Math.PI*2;for(;d<-Math.PI;)d+=Math.PI*2;h.yaw=u[3]+d*c,h.vx=p[4],h.vz=p[5],h.speed=Math.hypot(h.vx,h.vz),h.drifting=!!(p[6]&1),h.boostTime=p[6]&2?.2:0,h.spinTime=p[6]&4?.2:0,h.lap=Math.floor(p[7]/1e3),h.position=p[7]%1e3}}gatherInputs(t){const e=t.sim,n=new Array(e.karts.length).fill(null);if(n[t.localKart]=t.input,this.role==="host")for(const s of this.peers){const r=this.seatOf?.[s.id];if(r==null||r===t.localKart)continue;const o=this.remoteInputs.get(s.id);o&&(n[r]={throttle:o[0],steer:o[1],drift:!!o[2],item:!!o[3],look:0})}return n}}const Nh=1;class hx{constructor(t){this.meta=t,this.frames=[],this.recording=!0,this.lapStart=0}markLap(){const t={start:this.lapStart,end:this.frames.length};return this.lapStart=this.frames.length,t}capture(t){if(!this.recording)return t;const e=Math.max(0,Math.min(63,Math.round((t.steer+1)*31.5))),n=t.throttle>.5?2:t.throttle<-.5?0:1,s=e|n<<6|(t.drift?256:0)|(t.item?512:0);return this.frames.push(s),Fh(s,this._q||(this._q={throttle:0,steer:0,drift:!1,item:!1,look:0}))}stop(){this.recording=!1}encode(t,e=0,n=this.frames.length){const s=this.frames.slice(e,n),r=[];let o=s[0],a=0;for(const h of s){if(h===o&&a<255){a++;continue}r.push(o,a),o=h,a=1}a&&r.push(o,a);const c=new Uint8Array(r.length/2*3);for(let h=0,u=0;h<r.length;h+=2)c[u++]=r[h]&255,c[u++]=r[h]>>8&255,c[u++]=r[h+1];const l={v:Nh,c:this.meta.circuit,k:this.meta.klass,s:this.meta.seed,t:+t.toFixed(3),n:this.meta.name||"Ghost",d:dx(c)};return zh(JSON.stringify(l))}}function ux(i){try{const t=JSON.parse(Bh(i.trim()));if(t.v!==Nh)return null;const e=px(t.d),n=[];for(let s=0;s<e.length;s+=3){const r=e[s]|e[s+1]<<8;for(let o=0;o<e[s+2];o++)n.push(r)}return{circuit:t.c,klass:t.k,seed:t.s,time:t.t,name:t.n,frames:n}}catch{return null}}function Fh(i,t){t.steer=(i&63)/31.5-1;const e=i>>6&3;return t.throttle=e===2?1:e===0?-1:0,t.drift=!!(i&256),t.item=!!(i&512),t.look=0,t}class Oh{constructor(t){this.ghost=t,this.tick=0,this.out={throttle:0,steer:0,drift:!1,item:!1,look:0}}next(){const t=this.ghost.frames[Math.min(this.tick,this.ghost.frames.length-1)]??0;return this.tick++,Fh(t,this.out)}get finished(){return this.tick>=this.ghost.frames.length}}function fx(i,t){const e=new Ul(i,{circuit:t.circuit,klass:t.klass,mode:"timetrial",seed:t.seed,laps:1,karts:[{name:t.name}]}),n=new Oh(t),s=[null];let r=0;for(;e.state!=="finished"&&r++<t.frames.length+1200&&(s[0]=n.next(),e.step(s),!(n.finished&&e.karts[0].lapTimes.length)););const o=e.karts[0].lapTimes;return o.length?Math.min(...o):null}function dx(i){let t="";for(let e=0;e<i.length;e++)t+=String.fromCharCode(i[e]);return zh(t)}function px(i){const t=Bh(i),e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function zh(i){return typeof btoa=="function"?btoa(i):Buffer.from(i,"binary").toString("base64")}function Bh(i){return typeof atob=="function"?atob(i):Buffer.from(i,"base64").toString("binary")}const dr=["Vega","Koda","Rhen","Miko","Talo","Suri","Bex","Nyx","Orin","Juno","Kite","Wren"];class mx{static id="game";static deps=["input"];init(t){this.ctx=t}fixedUpdate(t,e){const n=e.sim;if(!n||n.paused)return;const s=e.peek("net"),r=e.ghostRec?e.ghostRec.capture(e.input):e.input;if(e.ghostPlayer&&n.karts.length>1&&(this._ghostInput=e.ghostPlayer.next()),s&&s.role==="client"){const o=new Array(n.karts.length).fill(null);o[e.localKart]=r,n.stepLocalOnly(o,e.localKart)}else{const o=s&&s.role==="host"?s.gatherInputs(e):[];o[e.localKart]=r,this._ghostInput&&(o[1]=this._ghostInput),n.step(o)}}}async function gx(){const i=document.getElementById("game"),t=new pu(new URLSearchParams(location.search).get("q")),e=new du(i,t);e.register(j_),e.register(K_),e.register(ix),e.register(lx),e.register(mx);try{const{AudioSystem:d}=await $h(async()=>{const{AudioSystem:g}=await import("./index-DdGGeJUy.js");return{AudioSystem:g}},[],import.meta.url);d&&e.register(d)}catch(d){console.info("audio unavailable:",d?.message||d)}await e.init();const n=I_(20260804);e.ctx.world=n;const s=e.ctx.get("ui"),r=e.ctx.get("render"),o=d=>{const g=d.seatOf||null,_=e.ctx.peek("net");g&&_&&(_.seatOf=g,_.setSeat(g[_.peerId]??0)),e.ctx.ghostRec=null,e.ctx.ghostPlayer=null;const m=d.humans||1,f=d.ai!=null?d.ai:d.mode==="timetrial"?0:11,y=[];for(let E=0;E<m;E++){const R=_?.peers?.find(L=>(g?.[L.id]??-1)===E);y.push({name:R?.name||"You",ai:!1,hue:E*.146%1})}for(let E=0;E<f;E++)y.push({name:dr[E%dr.length],ai:!0,skill:.6+E*7%10/10*.36,hue:(m+E)*.146%1});const M=d.seed||20260804;if(d.mode==="timetrial"){if(d.ghost){const E=d.ghost;y.push({name:`${E.name} (ghost)`,ai:!1,hue:.58}),e.ctx.ghostPlayer=new Oh(E)}e.ctx.ghostRec=new hx({circuit:d.circuit,klass:d.klass,seed:M,name:s.playerName()})}const v=new Ul(n,{circuit:d.circuit||n.circuits[0].key,klass:d.klass||"rally",mode:d.mode||"race",seed:M,karts:y}),A=g&&_?g[_.peerId]??0:0;e.setSim(v,A),r.attachWorld(n,v),e.ctx.get("ui").hud.classList.remove("hidden"),e.ctx.peek("audio")?.unlock?.(),a=d};let a=null;e.ctx.events.on("ui:launch",o),e.ctx.events.on("ui:restart",()=>{s.clear(),a&&o(a)}),e.ctx.events.on("ui:menu",()=>{e.ctx.sim=null});let c=null;e.ctx.cupState=()=>c,e.ctx.events.on("ui:cup",({key:d})=>{const g=Sa.find(m=>m.key===d)||Sa[0],_=[{name:s.playerName()}];for(let m=0;m<7;m++)_.push({name:dr[m%dr.length]});c=new Q_(g,_),l()});const l=()=>{s.clear(),o({mode:"race",circuit:c.circuit,klass:c.def.klass,ai:c.racers.length-1,humans:1,seed:20260804+c.round*7717})};e.ctx.events.on("ui:cup:next",l),e.ctx.events.on("race:finish",()=>{const d=e.ctx.sim;!c||!d||d.state!=="finished"||setTimeout(()=>{if(!c||c.complete)return;const g=d.karts.slice().sort((m,f)=>m.position-f.position).map(m=>m.index),_=c.recordResult(g);s.showCupStandings(c,_)},950)}),e.ctx.events.on("lap:complete",({kart:d,time:g,best:_})=>{if(!(d!==e.ctx.localKart||!e.ctx.ghostRec)&&g===_)try{e.ctx.bestGhost=e.ctx.ghostRec.encode(g)}catch{}}),e.ctx.verifyGhost=d=>{const g=ux(d);if(!g)return{ok:!1,reason:"That ghost code could not be read."};const _=fx(n,g);return _==null?{ok:!1,reason:"That ghost never completed a lap."}:{ok:!0,ghost:g,time:_,claimed:g.time}};const h=()=>{const d=window.innerWidth,g=window.innerHeight;i.width=d,i.height=g,e.resize(d,g)};window.addEventListener("resize",h),window.addEventListener("orientationchange",()=>setTimeout(h,150)),h(),e.events.on("*",()=>{});const u=()=>{t.observe(e.time.raw*1e3,(d,g)=>{r.resize(window.innerWidth,window.innerHeight,e.ctx),s.toast(`Graphics: ${d}`)})},p=e.frame.bind(e);e.frame=d=>{p(d),u()},window.addEventListener("keydown",d=>{(d.code==="F3"||d.code==="KeyF"&&d.shiftKey)&&(t.showFps=!t.showFps)}),e.start(),window.__ENGINE__=e,window.__WORLD__=n,window.__READY__=!0}gx().catch(i=>{console.error(i),document.getElementById("ui").innerHTML=`<div style="position:absolute;inset:0;display:grid;place-items:center;padding:24px;text-align:center">
       <div><h2>Something went wrong starting the game</h2>
       <p style="color:#93a4c0;font-size:14px;max-width:40ch">${String(i?.message||i)}</p></div>
     </div>`});export{Kt as D,Re as E,Ee as I,se as S,Ao as s};
