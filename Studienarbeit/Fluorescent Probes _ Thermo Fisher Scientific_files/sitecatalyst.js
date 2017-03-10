function Visitor(X,N){if(!X){throw"Visitor requires Adobe Marketing Cloud Org ID"
}var ad=this;
ad.version="1.5.4";
var Y=window,ab=Y.Visitor;
ab.version=ad.version;
Y.s_c_in||(Y.s_c_il=[],Y.s_c_in=0);
ad._c="Visitor";
ad._il=Y.s_c_il;
ad._in=Y.s_c_in;
ad._il[ad._in]=ad;
Y.s_c_in++;
ad.pa={Ka:[]};
var W=Y.document,ac=ab.Ma;
ac||(ac=null);
var b=ab.Na;
b||(b=void 0);
var aa=ab.ja;
aa||(aa=!0);
var Z=ab.La;
Z||(Z=!1);
ad.S=function(j){var m=0,i,k;
if(j){for(i=0;
i<j.length;
i++){k=j.charCodeAt(i),m=(m<<5)-m+k,m&=m
}}return m
};
ad.r=function(j){var r="0123456789",i="",p="",o,m=8,q=10,k=10;
if(1==j){r+="ABCDEF";
for(j=0;
16>j;
j++){o=Math.floor(Math.random()*m),i+=r.substring(o,o+1),o=Math.floor(Math.random()*m),p+=r.substring(o,o+1),m=16
}return i+"-"+p
}for(j=0;
19>j;
j++){o=Math.floor(Math.random()*q),i+=r.substring(o,o+1),0==j&&9==o?q=3:(1==j||2==j)&&10!=q&&2>o?q=10:2<j&&(q=10),o=Math.floor(Math.random()*k),p+=r.substring(o,o+1),0==j&&9==o?k=3:(1==j||2==j)&&10!=k&&2>o?k=10:2<j&&(k=10)
}return i+p
};
ad.ma=function(){var j;
!j&&Y.location&&(j=Y.location.hostname);
if(j){if(/^[0-9.]+$/.test(j)){j=""
}else{var m=j.split("."),i=m.length-1,k=i-1;
1<i&&2>=m[i].length&&(2==m[i-1].length||0>",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,".indexOf(","+m[i]+","))&&k--;
if(0<k){for(j="";
i>=k;
){j=m[i]+(j?".":"")+j,i--
}}}}return j
};
ad.cookieRead=function(j){var j=encodeURIComponent(j),m=(";"+W.cookie).split(" ").join(";"),i=m.indexOf(";"+j+"="),k=0>i?i:m.indexOf(";",i+1);
return 0>i?"":decodeURIComponent(m.substring(i+2+j.length,0>k?m.length:k))
};
ad.cookieWrite=function(k,m,a){var j=ad.cookieLifetime,i,m=""+m,j=j?(""+j).toUpperCase():"";
a&&"SESSION"!=j&&"NONE"!=j?(i=""!=m?parseInt(j?j:0,10):-60)?(a=new Date,a.setTime(a.getTime()+1000*i)):1==a&&(a=new Date,i=a.getYear(),a.setYear(i+2+(1900>i?1900:0))):a=0;
return k&&"NONE"!=j?(W.cookie=encodeURIComponent(k)+"="+encodeURIComponent(m)+"; path=/;"+(a?" expires="+a.toGMTString()+";":"")+(ad.cookieDomain?" domain="+ad.cookieDomain+";":""),ad.cookieRead(k)==m):0
};
ad.g=ac;
ad.A=function(j,k){try{"function"==typeof j?j.apply(Y,k):j[1].apply(j[0],k)
}catch(i){}};
ad.ra=function(a,i){i&&(ad.g==ac&&(ad.g={}),ad.g[a]==b&&(ad.g[a]=[]),ad.g[a].push(i))
};
ad.m=function(i,j){if(ad.g!=ac){var a=ad.g[i];
if(a){for(;
0<a.length;
){ad.A(a.shift(),j)
}}}};
ad.j=ac;
ad.oa=function(r,s,t){var q=0,p=0,o;
if(s&&W){for(o=0;
!q&&2>o;
){try{q=(q=W.getElementsByTagName(0<o?"HEAD":"head"))&&0<q.length?q[0]:0
}catch(a){q=0
}o++
}if(!q){try{W.body&&(q=W.body)
}catch(k){q=0
}}if(q){for(o=0;
!p&&2>o;
){try{p=W.createElement(0<o?"SCRIPT":"script")
}catch(m){p=0
}o++
}}}!s||!q||!p?t&&t():(p.type="text/javascript",p.setAttribute("async","async"),p.src=s,q.firstChild?q.insertBefore(p,q.firstChild):q.appendChild(p),ad.pa.Ka.push(s),t&&(ad.j==ac&&(ad.j={}),ad.j[r]=setTimeout(t,ad.loadTimeout)))
};
ad.ka=function(a){ad.j!=ac&&ad.j[a]&&(clearTimeout(ad.j[a]),ad.j[a]=0)
};
ad.T=Z;
ad.U=Z;
ad.isAllowed=function(){if(!ad.T&&(ad.T=aa,ad.cookieRead(ad.cookieName)||ad.cookieWrite(ad.cookieName,"T",1))){ad.U=aa
}return ad.U
};
ad.a=ac;
ad.d=ac;
var T=ab.$a;
T||(T="MC");
var R=ab.fb;
R||(R="MCMID");
var Q=ab.ab;
Q||(Q="MCCIDH");
var P=ab.eb;
P||(P="MCSYNCS");
var L=ab.bb;
L||(L="MCIDTS");
var e=ab.cb;
e||(e="MCOPTOUT");
var V=ab.Ya;
V||(V="A");
var U=ab.Va;
U||(U="MCAID");
var c=ab.Za;
c||(c="AAM");
var g=ab.Xa;
g||(g="MCAAMLH");
var S=ab.Wa;
S||(S="MCAAMB");
var O=ab.gb;
O||(O="NONE");
ad.C=0;
ad.R=function(){if(!ad.C){var a=ad.version;
ad.audienceManagerServer&&(a+="|"+ad.audienceManagerServer);
ad.audienceManagerServerSecure&&(a+="|"+ad.audienceManagerServerSecure);
ad.C=ad.S(a)
}return ad.C
};
ad.V=Z;
ad.f=function(){if(!ad.V){ad.V=aa;
var p=ad.R(),r=Z,a=ad.cookieRead(ad.cookieName),o,m,k,q,j=new Date;
ad.a==ac&&(ad.a={});
if(a&&"T"!=a){a=a.split("|");
a[0].match(/^[\-0-9]+$/)&&(parseInt(a[0],10)!=p&&(r=aa),a.shift());
1==a.length%2&&a.pop();
for(p=0;
p<a.length;
p+=2){if(o=a[p].split("-"),m=o[0],k=a[p+1],1<o.length?(q=parseInt(o[1],10),o=0<o[1].indexOf("s")):(q=0,o=Z),r&&(m==Q&&(k=""),0<q&&(q=j.getTime()/1000-60)),m&&k&&(ad.c(m,k,1),0<q&&(ad.a["expire"+m]=q+(o?"s":""),j.getTime()>=1000*q||o&&!ad.cookieRead(ad.sessionCookieName)))){ad.d||(ad.d={}),ad.d[m]=aa
}}}if(!ad.b(U)&&(a=ad.cookieRead("s_vi"))){a=a.split("|"),1<a.length&&0<=a[0].indexOf("v1")&&(k=a[1],p=k.indexOf("["),0<=p&&(k=k.substring(0,p)),k&&k.match(/^[0-9a-fA-F\-]+$/)&&ad.c(U,k))
}}};
ad.ta=function(){var i=ad.R(),j,a;
for(j in ad.a){!Object.prototype[j]&&ad.a[j]&&"expire"!=j.substring(0,6)&&(a=ad.a[j],i+=(i?"|":"")+j+(ad.a["expire"+j]?"-"+ad.a["expire"+j]:"")+"|"+a)
}ad.cookieWrite(ad.cookieName,i,1)
};
ad.b=function(a,i){return ad.a!=ac&&(i||!ad.d||!ad.d[a])?ad.a[a]:ac
};
ad.c=function(i,j,a){ad.a==ac&&(ad.a={});
ad.a[i]=j;
a||ad.ta()
};
ad.na=function(i,j){var a=ad.b(i,j);
return a?a.split("*"):ac
};
ad.sa=function(i,j,a){ad.c(i,j?j.join("*"):"",a)
};
ad.Sa=function(k,m){var a=ad.na(k,m);
if(a){var j={},i;
for(i=0;
i<a.length;
i+=2){j[a[i]]=a[i+1]
}return j
}return ac
};
ad.Ua=function(k,m,a){var j=ac,i;
if(m){for(i in j=[],m){Object.prototype[i]||(j.push(i),j.push(m[i]))
}}ad.sa(k,j,a)
};
ad.k=function(j,k,a){var i=new Date;
i.setTime(i.getTime()+1000*k);
ad.a==ac&&(ad.a={});
ad.a["expire"+j]=Math.floor(i.getTime()/1000)+(a?"s":"");
0>k?(ad.d||(ad.d={}),ad.d[j]=aa):ad.d&&(ad.d[j]=Z);
a&&(ad.cookieRead(ad.sessionCookieName)||ad.cookieWrite(ad.sessionCookieName,"1"))
};
ad.Q=function(i){if(i&&("object"==typeof i&&(i=i.d_mid?i.d_mid:i.visitorID?i.visitorID:i.id?i.id:i.uuid?i.uuid:""+i),i&&(i=i.toUpperCase(),"NOTARGET"==i&&(i=O)),!i||i!=O&&!i.match(/^[0-9a-fA-F\-]+$/))){i=""
}return i
};
ad.i=function(j,k){ad.ka(j);
ad.h!=ac&&(ad.h[j]=Z);
if(j==T){var a=ad.b(R);
if(!a){a="object"==typeof k&&k.mid?k.mid:ad.Q(k);
if(!a){if(ad.v){ad.getAnalyticsVisitorID(ac,Z,aa);
return
}a=ad.r()
}ad.c(R,a)
}if(!a||a==O){a=""
}"object"==typeof k&&((k.d_region||k.dcs_region||k.d_blob||k.blob)&&ad.i(c,k),ad.v&&k.mid&&ad.i(V,{id:k.id}));
ad.m(R,[a])
}if(j==c&&"object"==typeof k){a=604800;
k.id_sync_ttl!=b&&k.id_sync_ttl&&(a=parseInt(k.id_sync_ttl,10));
var i=ad.b(g);
i||((i=k.d_region)||(i=k.dcs_region),i&&(ad.k(g,a),ad.c(g,i)));
i||(i="");
ad.m(g,[i]);
i=ad.b(S);
if(k.d_blob||k.blob){(i=k.d_blob)||(i=k.blob),ad.k(S,a),ad.c(S,i)
}i||(i="");
ad.m(S,[i]);
!k.error_msg&&ad.t&&ad.c(Q,ad.t)
}if(j==V){a=ad.b(U);
a||((a=ad.Q(k))?ad.k(S,-1):a=O,ad.c(U,a));
if(!a||a==O){a=""
}ad.m(U,[a])
}ad.idSyncDisableSyncs?K.ba=aa:(K.ba=Z,a={},a.ibs=k.ibs,a.subdomain=k.subdomain,K.Ia(a));
k===Object(k)&&(a=O,k.d_optout&&k.d_optout instanceof Array&&(a=k.d_optout.join(",")),i=parseInt(k.d_ottl,10),isNaN(i)&&(i=7200),ad.k(e,i,!0),ad.c(e,a),ad.m(e,[a]))
};
ad.h=ac;
ad.n=function(m,o,a,k){var j="",i;
if(ad.isAllowed()&&(ad.f(),j=ad.b(m),!j&&(m==R||m==e?i=T:m==g||m==S?i=c:m==U&&(i=V),i))){if(o&&(ad.h==ac||!ad.h[i])){ad.h==ac&&(ad.h={}),ad.h[i]=aa,ad.oa(i,o,function(){if(!ad.b(m)){var p="";
m==R?p=ad.r():i==c&&(p={error_msg:"timeout"});
ad.i(i,p)
}})
}ad.ra(m,a);
o||ad.i(i,{id:O});
return""
}if((m==R||m==U)&&j==O){j="",k=aa
}a&&k&&ad.A(a,[j]);
return j
};
ad._setMarketingCloudFields=function(a){ad.f();
ad.i(T,a)
};
ad.setMarketingCloudVisitorID=function(a){ad._setMarketingCloudFields(a)
};
ad.v=Z;
ad.getMarketingCloudVisitorID=function(i,j){if(ad.isAllowed()){ad.marketingCloudServer&&0>ad.marketingCloudServer.indexOf(".demdex.net")&&(ad.v=aa);
var a=ad.s("_setMarketingCloudFields");
return ad.n(R,a,i,j)
}return""
};
ad.qa=function(){ad.getAudienceManagerBlob()
};
ab.AuthState={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2};
ad.q={};
ad.P=Z;
ad.t="";
ad.setCustomerIDs=function(k){if(ad.isAllowed()&&k){ad.f();
var m,a;
for(m in k){if(!Object.prototype[m]&&(a=k[m])){if("object"==typeof a){var j={};
a.id&&(j.id=a.id);
a.authState!=b&&(j.authState=a.authState);
ad.q[m]=j
}else{ad.q[m]={id:a}
}}}var k=ad.getCustomerIDs(),j=ad.b(Q),i="";
j||(j=0);
for(m in k){Object.prototype[m]||(a=k[m],i+=(i?"|":"")+m+"|"+(a.id?a.id:"")+(a.authState?a.authState:""))
}ad.t=ad.S(i);
ad.t!=j&&(ad.P=aa,ad.qa())
}};
ad.getCustomerIDs=function(){ad.f();
var i={},j,a;
for(j in ad.q){Object.prototype[j]||(a=ad.q[j],i[j]||(i[j]={}),a.id&&(i[j].id=a.id),i[j].authState=a.authState!=b?a.authState:ab.AuthState.UNKNOWN)
}return i
};
ad._setAnalyticsFields=function(a){ad.f();
ad.i(V,a)
};
ad.setAnalyticsVisitorID=function(a){ad._setAnalyticsFields(a)
};
ad.getAnalyticsVisitorID=function(m,o,a){if(ad.isAllowed()){var k="";
a||(k=ad.getMarketingCloudVisitorID(function(){ad.getAnalyticsVisitorID(m,aa)
}));
if(k||a){var j=a?ad.marketingCloudServer:ad.trackingServer,i="";
ad.loadSSL&&(a?ad.marketingCloudServerSecure&&(j=ad.marketingCloudServerSecure):ad.trackingServerSecure&&(j=ad.trackingServerSecure));
j&&(i="http"+(ad.loadSSL?"s":"")+"://"+j+"/id?d_visid_ver="+ad.version+"&callback=s_c_il%5B"+ad._in+"%5D._set"+(a?"MarketingCloud":"Analytics")+"Fields&mcorgid="+encodeURIComponent(ad.marketingCloudOrgID)+(k?"&mid="+k:"")+(ad.idSyncDisable3rdPartySyncing?"&d_coppa=true":""));
return ad.n(a?R:U,i,m,o)
}}return""
};
ad._setAudienceManagerFields=function(a){ad.f();
ad.i(c,a)
};
ad.s=function(q){var r=ad.audienceManagerServer,a="",p=ad.b(R),o=ad.b(S,aa),m=ad.b(U),m=m&&m!=O?"&d_cid_ic=AVID%01"+encodeURIComponent(m):"";
ad.loadSSL&&ad.audienceManagerServerSecure&&(r=ad.audienceManagerServerSecure);
if(r){var a=ad.getCustomerIDs(),k,j;
if(a){for(k in a){Object.prototype[k]||(j=a[k],m+="&d_cid_ic="+encodeURIComponent(k)+"%01"+encodeURIComponent(j.id?j.id:"")+(j.authState?"%01"+j.authState:""))
}}q||(q="_setAudienceManagerFields");
a="http"+(ad.loadSSL?"s":"")+"://"+r+"/id?d_visid_ver="+ad.version+"&d_rtbd=json&d_ver=2"+(!p&&ad.v?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(ad.marketingCloudOrgID)+"&d_nsid="+(ad.idSyncContainerID||0)+(p?"&d_mid="+p:"")+(ad.idSyncDisable3rdPartySyncing?"&d_coppa=true":"")+(o?"&d_blob="+encodeURIComponent(o):"")+m+"&d_cb=s_c_il%5B"+ad._in+"%5D."+q
}return a
};
ad.getAudienceManagerLocationHint=function(i,j){if(ad.isAllowed()&&ad.getMarketingCloudVisitorID(function(){ad.getAudienceManagerLocationHint(i,aa)
})){var a=ad.b(U);
a||(a=ad.getAnalyticsVisitorID(function(){ad.getAudienceManagerLocationHint(i,aa)
}));
if(a){return a=ad.s(),ad.n(g,a,i,j)
}}return""
};
ad.getAudienceManagerBlob=function(i,j){if(ad.isAllowed()&&ad.getMarketingCloudVisitorID(function(){ad.getAudienceManagerBlob(i,aa)
})){var a=ad.b(U);
a||(a=ad.getAnalyticsVisitorID(function(){ad.getAudienceManagerBlob(i,aa)
}));
if(a){return a=ad.s(),ad.P&&ad.k(S,-1),ad.n(S,a,i,j)
}}return""
};
ad.o="";
ad.u={};
ad.D="";
ad.F={};
ad.getSupplementalDataID=function(i,j){!ad.o&&!j&&(ad.o=ad.r(1));
var a=ad.o;
ad.D&&!ad.F[i]?(a=ad.D,ad.F[i]=aa):a&&(ad.u[i]&&(ad.D=ad.o,ad.F=ad.u,ad.o=a=!j?ad.r(1):"",ad.u={}),a&&(ad.u[i]=aa));
return a
};
ab.OptOut={GLOBAL:"global"};
ad.getOptOut=function(i,j){if(ad.isAllowed()){var a=ad.s("_setMarketingCloudFields");
return ad.n(e,a,i,j)
}return""
};
ad.isOptedOut=function(i,j,a){return ad.isAllowed()?(j||(j=ab.OptOut.GLOBAL),(a=ad.getOptOut(function(k){ad.A(i,[k==ab.OptOut.GLOBAL||0<=k.indexOf(j)])
},a))?a==ab.OptOut.GLOBAL||0<=a.indexOf(j):ac):Z
};
var J={l:!!Y.postMessage,ha:1,O:86400000};
ad.Oa=J;
ad.X={postMessage:function(j,m,i){var k=1;
m&&(J.l?i.postMessage(j,m.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):m&&(i.location=m.replace(/#.*$/,"")+"#"+ +new Date+k+++"&"+j))
},K:function(j,m){var i;
try{if(J.l){if(j&&(i=function(a){if("string"===typeof m&&a.origin!==m||"[object Function]"===Object.prototype.toString.call(m)&&!1===m(a.origin)){return !1
}j(a)
}),window.addEventListener){window[j?"addEventListener":"removeEventListener"]("message",i,!1)
}else{window[j?"attachEvent":"detachEvent"]("onmessage",i)
}}}catch(k){}}};
var n={Y:function(){if(W.addEventListener){return function(j,k,i){j.addEventListener(k,function(m){"function"===typeof i&&i(m)
},Z)
}
}if(W.attachEvent){return function(j,k,i){j.attachEvent("on"+k,function(m){"function"===typeof i&&i(m)
})
}
}}(),map:function(j,p){if(Array.prototype.map){return j.map(p)
}if(void 0===j||j===ac){throw new TypeError
}var i=Object(j),o=i.length>>>0;
if("function"!==typeof p){throw new TypeError
}for(var m=Array(o),k=0;
k<o;
k++){k in i&&(m[k]=p.call(p,i[k],k,i))
}return m
},za:function(i,j){return this.map(i,function(k){return encodeURIComponent(k)
}).join(j)
}};
ad.Ta=n;
var K={ia:30000,N:649,fa:Z,id:ac,I:ac,aa:function(i){if("string"===typeof i){return i=i.split("/"),i[0]+"//"+i[2]
}},e:ac,url:ac,Aa:function(){var a="http://fast.",i="?d_nsid="+ad.idSyncContainerID+"#"+encodeURIComponent(W.location.href);
this.e||(this.e="nosubdomainreturned");
ad.loadSSL&&(a=ad.idSyncSSLUseAkamai?"https://fast.":"https://");
a=a+this.e+".demdex.net/dest5.html"+i;
this.I=this.aa(a);
this.id="destination_publishing_iframe_"+this.e+"_"+ad.idSyncContainerID;
return a
},va:function(){var a="?d_nsid="+ad.idSyncContainerID+"#"+encodeURIComponent(W.location.href);
"string"===typeof ad.B&&ad.B.length&&(this.id="destination_publishing_iframe_"+(new Date).getTime()+"_"+ad.idSyncContainerID,this.I=this.aa(ad.B),this.url=ad.B+a)
},ba:ac,H:Z,M:Z,w:ac,hb:ac,Ga:ac,ib:ac,L:Z,z:[],Ea:[],Fa:[],ca:J.l?15:100,J:[],Ca:[],$:aa,da:Z,Z:function(){function j(){k=document.createElement("iframe");
k.id=i.id;
k.style.cssText="display: none; width: 0; height: 0;";
k.src=i.url;
i.Ga=aa;
m();
document.body.appendChild(k)
}function m(){n.Y(k,"load",function(){k.className="aamIframeLoaded";
i.w=aa;
i.p()
})
}this.M=aa;
var i=this,k=document.getElementById(this.id);
k?"IFRAME"!==k.nodeName?(this.id+="_2",j()):"aamIframeLoaded"!==k.className?m():(this.w=aa,this.p()):j();
this.Ba=k
},p:function(a){var i=this;
a===Object(a)&&this.J.push(a);
if((this.da||!J.l||this.w)&&this.J.length){this.Ha(this.J.shift()),this.p()
}!ad.idSyncDisableSyncs&&this.w&&this.z.length&&!this.L&&(this.fa||(this.fa=aa,setTimeout(function(){i.ca=J.l?15:150
},this.ia)),this.L=aa,this.ea())
},Ha:function(j){var q=encodeURIComponent,i,p,o,m,k;
if((i=j.ibs)&&i instanceof Array&&(p=i.length)){for(o=0;
o<p;
o++){m=i[o],k=[q("ibs"),q(m.id||""),q(m.tag||""),n.za(m.url||[],","),q(m.ttl||""),"","",m.fireURLSync?"true":"false"],this.$?this.G(k.join("|")):m.fireURLSync&&this.wa(m,k.join("|"))
}}this.Ca.push(j)
},wa:function(m,o){ad.f();
var a=ad.b(P),k=Z,j=Z,i=Math.ceil((new Date).getTime()/J.O);
if(a){if(a=a.split("*"),j=this.Ja(a,m.id,i),k=j.xa,j=j.ya,!k||!j){this.G(o),a.push(m.id+"-"+(i+Math.ceil(m.ttl/60/24))),this.Da(a),ad.c(P,a.join("*"))
}}else{this.G(o),ad.c(P,m.id+"-"+(i+Math.ceil(m.ttl/60/24)))
}},Ja:function(k,s,j){var r=Z,q=Z,p,o,m;
for(o=0;
o<k.length;
o++){p=k[o],m=parseInt(p.split("-")[1],10),p.match("^"+s+"-")?(r=aa,j<m?q=aa:(k.splice(o,1),o--)):j>=m&&(k.splice(o,1),o--)
}return{xa:r,ya:q}
},Da:function(i){if(i.join("*").length>this.N){for(i.sort(function(k,j){return parseInt(k.split("-")[1],10)-parseInt(j.split("-")[1],10)
});
i.join("*").length>this.N;
){i.shift()
}}},G:function(a){var i=encodeURIComponent;
this.z.push((ad.Qa?i("---destpub-debug---"):i("---destpub---"))+a)
},ea:function(){var a=this,i;
this.z.length?(i=this.z.shift(),ad.X.postMessage(i,this.url,this.Ba.contentWindow),this.Ea.push(i),setTimeout(function(){a.ea()
},this.ca)):this.L=Z
},K:function(i){var j=/^---destpub-to-parent---/;
"string"===typeof i&&j.test(i)&&(j=i.replace(j,"").split("|"),"canSetThirdPartyCookies"===j[0]&&(this.$="true"===j[1]?aa:Z,this.da=aa,this.p()),this.Fa.push(i))
},Ia:function(a){this.url===ac&&(this.e="string"===typeof ad.W&&ad.W.length?ad.W:a.subdomain||"",this.url=this.Aa());
a.ibs instanceof Array&&a.ibs.length&&(this.H=aa);
if(!ad.idSyncDisable3rdPartySyncing&&(this.H||ad.la)&&this.e&&"nosubdomainreturned"!==this.e&&!this.M){(ab.ga||"complete"===W.readyState||"loaded"===W.readyState)&&this.Z()
}"function"===typeof ad.idSyncIDCallResult?ad.idSyncIDCallResult(a):this.p(a);
"function"===typeof ad.idSyncAfterIDCallResult&&ad.idSyncAfterIDCallResult(a)
},ua:function(a,i){return ad.Ra||!a||i-a>J.ha
}};
ad.Pa=K;
0>X.indexOf("@")&&(X+="@AdobeOrg");
ad.marketingCloudOrgID=X;
ad.cookieName="AMCV_"+X;
ad.sessionCookieName="AMCVS_"+X;
ad.cookieDomain=ad.ma();
ad.cookieDomain==Y.location.hostname&&(ad.cookieDomain="");
ad.loadSSL=0<=Y.location.protocol.toLowerCase().indexOf("https");
ad.loadTimeout=500;
ad.marketingCloudServer=ad.audienceManagerServer="dpm.demdex.net";
if(N&&"object"==typeof N){for(var M in N){!Object.prototype[M]&&(ad[M]=N[M])
}ad.idSyncContainerID=ad.idSyncContainerID||0;
ad.f();
M=ad.b(L);
var f=Math.ceil((new Date).getTime()/J.O);
!ad.idSyncDisableSyncs&&K.ua(M,f)&&(ad.k(S,-1),ad.c(L,f));
ad.getMarketingCloudVisitorID();
ad.getAudienceManagerLocationHint();
ad.getAudienceManagerBlob()
}if(!ad.idSyncDisableSyncs){K.va();
n.Y(window,"load",function(){var a=K;
ab.ga=aa;
!ad.idSyncDisable3rdPartySyncing&&(a.H||ad.la)&&a.e&&"nosubdomainreturned"!==a.e&&a.url&&!a.M&&a.Z()
});
try{ad.X.K(function(i){K.K(i.data)
},K.I)
}catch(d){}}}Visitor.getInstance=function(b,f){var d,c=window.s_c_il,e;
0>b.indexOf("@")&&(b+="@AdobeOrg");
if(c){for(e=0;
e<c.length;
e++){if((d=c[e])&&"Visitor"==d._c&&d.marketingCloudOrgID==b){return d
}}}return new Visitor(b,f)
};
(function(){function b(){d.ga=c
}var d=window.Visitor,c=d.ja;
c||(c=!0);
window.addEventListener?window.addEventListener("load",b):window.attachEvent&&window.attachEvent("onload",b)
})();
function AppMeasurement(){var j=this;
j.version="1.6";
var e=window;
e.s_c_in||(e.s_c_il=[],e.s_c_in=0);
j._il=e.s_c_il;
j._in=e.s_c_in;
j._il[j._in]=j;
e.s_c_in++;
j._c="s_c";
var c=e.AppMeasurement.Db;
c||(c=null);
var b=e,d,o;
try{for(d=b.parent,o=b.location;
d&&d.location&&o&&""+d.location!=""+o&&b.location&&""+d.location!=""+b.location&&d.location.host==o.host;
){b=d,d=b.parent
}}catch(m){}j.sb=function(n){try{console.log(n)
}catch(k){}};
j.Ba=function(k){return""+parseInt(k)==""+k
};
j.replace=function(n,k,q){return !n||0>n.indexOf(k)?n:n.split(k).join(q)
};
j.escape=function(n){var a,k;
if(!n){return n
}n=encodeURIComponent(n);
for(a=0;
7>a;
a++){k="+~!*()'".substring(a,a+1),0<=n.indexOf(k)&&(n=j.replace(n,k,"%"+k.charCodeAt(0).toString(16).toUpperCase()))
}return n
};
j.unescape=function(k){if(!k){return k
}k=0<=k.indexOf("+")?j.replace(k,"+"," "):k;
try{return decodeURIComponent(k)
}catch(a){}return unescape(k)
};
j.kb=function(){var n=e.location.hostname,a=j.fpCookieDomainPeriods,k;
a||(a=j.cookieDomainPeriods);
if(n&&!j.cookieDomain&&!/^[0-9.]+$/.test(n)&&(a=a?parseInt(a):2,a=2<a?a:2,k=n.lastIndexOf("."),0<=k)){for(;
0<=k&&1<a;
){k=n.lastIndexOf(".",k-1),a--
}j.cookieDomain=0<k?n.substring(k):n
}return j.cookieDomain
};
j.c_r=j.cookieRead=function(q){q=j.escape(q);
var a=" "+j.d.cookie,n=a.indexOf(" "+q+"="),k=0>n?n:a.indexOf(";",n);
q=0>n?"":j.unescape(a.substring(n+2+q.length,0>k?a.length:k));
return"[[B]]"!=q?q:""
};
j.c_w=j.cookieWrite=function(s,a,r){var n=j.kb(),q=j.cookieLifetime,k;
a=""+a;
q=q?(""+q).toUpperCase():"";
r&&"SESSION"!=q&&"NONE"!=q&&((k=""!=a?parseInt(q?q:0):-60)?(r=new Date,r.setTime(r.getTime()+1000*k)):1==r&&(r=new Date,k=r.getYear(),r.setYear(k+5+(1900>k?1900:0))));
return s&&"NONE"!=q?(j.d.cookie=s+"="+j.escape(""!=a?a:"[[B]]")+"; path=/;"+(r&&"SESSION"!=q?" expires="+r.toGMTString()+";":"")+(n?" domain="+n+";":""),j.cookieRead(s)==a):0
};
j.G=[];
j.da=function(t,k,s){if(j.va){return 0
}j.maxDelay||(j.maxDelay=250);
var q=0,r=(new Date).getTime()+j.maxDelay,n=j.d.visibilityState,a=["webkitvisibilitychange","visibilitychange"];
n||(n=j.d.webkitVisibilityState);
if(n&&"prerender"==n){if(!j.ea){for(j.ea=1,s=0;
s<a.length;
s++){j.d.addEventListener(a[s],function(){var u=j.d.visibilityState;
u||(u=j.d.webkitVisibilityState);
"visible"==u&&(j.ea=0,j.delayReady())
})
}}q=1;
r=0
}else{s||j.l("_d")&&(q=1)
}q&&(j.G.push({m:t,a:k,t:r}),j.ea||setTimeout(j.delayReady,j.maxDelay));
return q
};
j.delayReady=function(){var n=(new Date).getTime(),a=0,k;
for(j.l("_d")?a=1:j.pa();
0<j.G.length;
){k=j.G.shift();
if(a&&!k.t&&k.t>n){j.G.unshift(k);
setTimeout(j.delayReady,parseInt(j.maxDelay/2));
break
}j.va=1;
j[k.m].apply(j,k.a);
j.va=0
}};
j.setAccount=j.sa=function(n){var a,k;
if(!j.da("setAccount",arguments)){if(j.account=n,j.allAccounts){for(a=j.allAccounts.concat(n.split(",")),j.allAccounts=[],a.sort(),k=0;
k<a.length;
k++){0!=k&&a[k-1]==a[k]||j.allAccounts.push(a[k])
}}else{j.allAccounts=n.split(",")
}}};
j.foreachVar=function(t,k){var s,q,r,n,a="";
r=q="";
if(j.lightProfileID){s=j.K,(a=j.lightTrackVars)&&(a=","+a+","+j.ia.join(",")+",")
}else{s=j.e;
if(j.pe||j.linkType){a=j.linkTrackVars,q=j.linkTrackEvents,j.pe&&(r=j.pe.substring(0,1).toUpperCase()+j.pe.substring(1),j[r]&&(a=j[r].Cb,q=j[r].Bb))
}a&&(a=","+a+","+j.B.join(",")+",");
q&&a&&(a+=",events,")
}k&&(k=","+k+",");
for(q=0;
q<s.length;
q++){r=s[q],(n=j[r])&&(!a||0<=a.indexOf(","+r+","))&&(!k||0<=k.indexOf(","+r+","))&&t(r,n)
}};
j.o=function(z,A,y,u,x){var t="",r,a,s,B,q=0;
"contextData"==z&&(z="c");
if(A){for(r in A){if(!(Object.prototype[r]||x&&r.substring(0,x.length)!=x)&&A[r]&&(!y||0<=y.indexOf(","+(u?u+".":"")+r+","))){s=!1;
if(q){for(a=0;
a<q.length;
a++){r.substring(0,q[a].length)==q[a]&&(s=!0)
}}if(!s&&(""==t&&(t+="&"+z+"."),a=A[r],x&&(r=r.substring(x.length)),0<r.length)){if(s=r.indexOf("."),0<s){a=r.substring(0,s),s=(x?x:"")+a+".",q||(q=[]),q.push(s),t+=j.o(a,A,y,u,s)
}else{if("boolean"==typeof a&&(a=a?"true":"false"),a){if("retrieveLightData"==u&&0>x.indexOf(".contextData.")){switch(s=r.substring(0,4),B=r.substring(4),r){case"transactionID":r="xact";
break;
case"channel":r="ch";
break;
case"campaign":r="v0";
break;
default:j.Ba(B)&&("prop"==s?r="c"+B:"eVar"==s?r="v"+B:"list"==s?r="l"+B:"hier"==s&&(r="h"+B,a=a.substring(0,255)))
}}t+="&"+j.escape(r)+"="+j.escape(a)
}}}}}""!=t&&(t+="&."+z)
}return t
};
j.mb=function(){var B="",C,A,y,z,x,u,q,w,t="",a="",D=z="";
if(j.lightProfileID){C=j.K,(t=j.lightTrackVars)&&(t=","+t+","+j.ia.join(",")+",")
}else{C=j.e;
if(j.pe||j.linkType){t=j.linkTrackVars,a=j.linkTrackEvents,j.pe&&(z=j.pe.substring(0,1).toUpperCase()+j.pe.substring(1),j[z]&&(t=j[z].Cb,a=j[z].Bb))
}t&&(t=","+t+","+j.B.join(",")+",");
a&&(a=","+a+",",t&&(t+=",events,"));
j.events2&&(D+=(""!=D?",":"")+j.events2)
}if(j.visitor&&1.5<=parseFloat(j.visitor.version)&&j.visitor.getCustomerIDs){z=c;
if(x=j.visitor.getCustomerIDs()){for(A in x){Object.prototype[A]||(y=x[A],z||(z={}),y.id&&(z[A+".id"]=y.id),y.authState&&(z[A+".as"]=y.authState))
}}z&&(B+=j.o("cid",z))
}j.AudienceManagement&&j.AudienceManagement.isReady()&&(B+=j.o("d",j.AudienceManagement.getEventCallConfigParams()));
for(A=0;
A<C.length;
A++){z=C[A];
x=j[z];
y=z.substring(0,4);
u=z.substring(4);
!x&&"events"==z&&D&&(x=D,D="");
if(x&&(!t||0<=t.indexOf(","+z+","))){switch(z){case"supplementalDataID":z="sdid";
break;
case"timestamp":z="ts";
break;
case"dynamicVariablePrefix":z="D";
break;
case"visitorID":z="vid";
break;
case"marketingCloudVisitorID":z="mid";
break;
case"analyticsVisitorID":z="aid";
break;
case"audienceManagerLocationHint":z="aamlh";
break;
case"audienceManagerBlob":z="aamb";
break;
case"authState":z="as";
break;
case"pageURL":z="g";
255<x.length&&(j.pageURLRest=x.substring(255),x=x.substring(0,255));
break;
case"pageURLRest":z="-g";
break;
case"referrer":z="r";
break;
case"vmk":case"visitorMigrationKey":z="vmt";
break;
case"visitorMigrationServer":z="vmf";
j.ssl&&j.visitorMigrationServerSecure&&(x="");
break;
case"visitorMigrationServerSecure":z="vmf";
!j.ssl&&j.visitorMigrationServer&&(x="");
break;
case"charSet":z="ce";
break;
case"visitorNamespace":z="ns";
break;
case"cookieDomainPeriods":z="cdp";
break;
case"cookieLifetime":z="cl";
break;
case"variableProvider":z="vvp";
break;
case"currencyCode":z="cc";
break;
case"channel":z="ch";
break;
case"transactionID":z="xact";
break;
case"campaign":z="v0";
break;
case"latitude":z="lat";
break;
case"longitude":z="lon";
break;
case"resolution":z="s";
break;
case"colorDepth":z="c";
break;
case"javascriptVersion":z="j";
break;
case"javaEnabled":z="v";
break;
case"cookiesEnabled":z="k";
break;
case"browserWidth":z="bw";
break;
case"browserHeight":z="bh";
break;
case"connectionType":z="ct";
break;
case"homepage":z="hp";
break;
case"events":D&&(x+=(""!=x?",":"")+D);
if(a){for(u=x.split(","),x="",y=0;
y<u.length;
y++){q=u[y],w=q.indexOf("="),0<=w&&(q=q.substring(0,w)),w=q.indexOf(":"),0<=w&&(q=q.substring(0,w)),0<=a.indexOf(","+q+",")&&(x+=(x?",":"")+u[y])
}}break;
case"events2":x="";
break;
case"contextData":B+=j.o("c",j[z],t,z);
x="";
break;
case"lightProfileID":z="mtp";
break;
case"lightStoreForSeconds":z="mtss";
j.lightProfileID||(x="");
break;
case"lightIncrementBy":z="mti";
j.lightProfileID||(x="");
break;
case"retrieveLightProfiles":z="mtsr";
break;
case"deleteLightProfiles":z="mtsd";
break;
case"retrieveLightData":j.retrieveLightProfiles&&(B+=j.o("mts",j[z],t,z));
x="";
break;
default:j.Ba(u)&&("prop"==y?z="c"+u:"eVar"==y?z="v"+u:"list"==y?z="l"+u:"hier"==y&&(z="h"+u,x=x.substring(0,255)))
}x&&(B+="&"+z+"="+("pev"!=z.substring(0,3)?j.escape(x):x))
}"pev3"==z&&j.c&&(B+=j.c)
}return B
};
j.v=function(n){var k=n.tagName;
if("undefined"!=""+n.Gb||"undefined"!=""+n.wb&&"HTML"!=(""+n.wb).toUpperCase()){return""
}k=k&&k.toUpperCase?k.toUpperCase():"";
"SHAPE"==k&&(k="");
k&&(("INPUT"==k||"BUTTON"==k)&&n.type&&n.type.toUpperCase?k=n.type.toUpperCase():!k&&n.href&&(k="A"));
return k
};
j.xa=function(n){var k=n.href?n.href:"",s,q,r;
s=k.indexOf(":");
q=k.indexOf("?");
r=k.indexOf("/");
k&&(0>s||0<=q&&s>q||0<=r&&s>r)&&(q=n.protocol&&1<n.protocol.length?n.protocol:l.protocol?l.protocol:"",s=l.pathname.lastIndexOf("/"),k=(q?q+"//":"")+(n.host?n.host:l.host?l.host:"")+("/"!=h.substring(0,1)?l.pathname.substring(0,0>s?0:s)+"/":"")+k);
return k
};
j.H=function(s){var a=j.v(s),r,n,q="",k=0;
return a&&(r=s.protocol,n=s.onclick,!s.href||"A"!=a&&"AREA"!=a||n&&r&&!(0>r.toLowerCase().indexOf("javascript"))?n?(q=j.replace(j.replace(j.replace(j.replace(""+n,"\r",""),"\n",""),"\t","")," ",""),k=2):"INPUT"==a||"SUBMIT"==a?(s.value?q=s.value:s.innerText?q=s.innerText:s.textContent&&(q=s.textContent),k=3):s.src&&"IMAGE"==a&&(q=s.src):q=j.xa(s),q)?{id:q.substring(0,100),type:k}:0
};
j.Eb=function(n){for(var a=j.v(n),k=j.H(n);
n&&!k&&"BODY"!=a;
){if(n=n.parentElement?n.parentElement:n.parentNode){a=j.v(n),k=j.H(n)
}}k&&"BODY"!=a||(n=0);
n&&(a=n.onclick?""+n.onclick:"",0<=a.indexOf(".tl(")||0<=a.indexOf(".trackLink("))&&(n=0);
return n
};
j.vb=function(){var A,B,z=j.linkObject,x=j.linkType,y=j.linkURL,w,u;
j.ja=1;
z||(j.ja=0,z=j.clickObject);
if(z){A=j.v(z);
for(B=j.H(z);
z&&!B&&"BODY"!=A;
){if(z=z.parentElement?z.parentElement:z.parentNode){A=j.v(z),B=j.H(z)
}}B&&"BODY"!=A||(z=0);
if(z&&!j.linkObject){var s=z.onclick?""+z.onclick:"";
if(0<=s.indexOf(".tl(")||0<=s.indexOf(".trackLink(")){z=0
}}}else{j.ja=1
}!y&&z&&(y=j.xa(z));
y&&!j.linkLeaveQueryString&&(w=y.indexOf("?"),0<=w&&(y=y.substring(0,w)));
if(!x&&y){var t=0,a=0,k;
if(j.trackDownloadLinks&&j.linkDownloadFileTypes){for(s=y.toLowerCase(),w=s.indexOf("?"),u=s.indexOf("#"),0<=w?0<=u&&u<w&&(w=u):w=u,0<=w&&(s=s.substring(0,w)),w=j.linkDownloadFileTypes.toLowerCase().split(","),u=0;
u<w.length;
u++){(k=w[u])&&s.substring(s.length-(k.length+1))=="."+k&&(x="d")
}}if(j.trackExternalLinks&&!x&&(s=y.toLowerCase(),j.Aa(s)&&(j.linkInternalFilters||(j.linkInternalFilters=e.location.hostname),w=0,j.linkExternalFilters?(w=j.linkExternalFilters.toLowerCase().split(","),t=1):j.linkInternalFilters&&(w=j.linkInternalFilters.toLowerCase().split(",")),w))){for(u=0;
u<w.length;
u++){k=w[u],0<=s.indexOf(k)&&(a=1)
}a?t&&(x="e"):t||(x="e")
}}j.linkObject=z;
j.linkURL=y;
j.linkType=x;
if(j.trackClickMap||j.trackInlineStats){j.c="",z&&(x=j.pageName,y=1,z=z.sourceIndex,x||(x=j.pageURL,y=0),e.s_objectID&&(B.id=e.s_objectID,z=B.type=1),x&&B&&B.id&&A&&(j.c="&pid="+j.escape(x.substring(0,255))+(y?"&pidt="+y:"")+"&oid="+j.escape(B.id.substring(0,100))+(B.type?"&oidt="+B.type:"")+"&ot="+A+(z?"&oi="+z:"")))
}};
j.nb=function(){var w=j.ja,x=j.linkType,u=j.linkURL,s=j.linkName;
x&&(u||s)&&(x=x.toLowerCase(),"d"!=x&&"e"!=x&&(x="o"),j.pe="lnk_"+x,j.pev1=u?j.escape(u):"",j.pev2=s?j.escape(s):"",w=1);
j.abort&&(w=0);
if(j.trackClickMap||j.trackInlineStats||j.ActivityMap){var x={},u=0,t=j.cookieRead("s_sq"),r=t?t.split("&"):0,n,a,q,t=0;
if(r){for(n=0;
n<r.length;
n++){a=r[n].split("="),s=j.unescape(a[0]).split(","),a=j.unescape(a[1]),x[a]=s
}}s=j.account.split(",");
n={};
for(q in j.contextData){q&&!Object.prototype[q]&&"a.activitymap."==q.substring(0,14)&&(n[q]=j.contextData[q],j.contextData[q]="")
}j.c=j.o("c",n)+(j.c?j.c:"");
if(w||j.c){w&&!j.c&&(t=1);
for(a in x){if(!Object.prototype[a]){for(q=0;
q<s.length;
q++){for(t&&(r=x[a].join(","),r==j.account&&(j.c+=("&"!=a.charAt(0)?"&":"")+a,x[a]=[],u=1)),n=0;
n<x[a].length;
n++){r=x[a][n],r==s[q]&&(t&&(j.c+="&u="+j.escape(r)+("&"!=a.charAt(0)?"&":"")+a+"&u=0"),x[a].splice(n,1),u=1)
}}}}w||(u=1);
if(u){t="";
n=2;
!w&&j.c&&(t=j.escape(s.join(","))+"="+j.escape(j.c),n=1);
for(a in x){!Object.prototype[a]&&0<n&&0<x[a].length&&(t+=(t?"&":"")+j.escape(x[a].join(","))+"="+j.escape(a),n--)
}j.cookieWrite("s_sq",t)
}}}return w
};
j.ob=function(){if(!j.Ab){var D=new Date,E=b.location,C,A,B=A=C="",z="",w="",y="1.2",r=j.cookieWrite("s_cc","true",0)?"Y":"N",a="",I="";
if(D.setUTCDate&&(y="1.3",(0).toPrecision&&(y="1.5",D=[],D.forEach))){y="1.6";
A=0;
C={};
try{A=new Iterator(C),A.next&&(y="1.7",D.reduce&&(y="1.8",y.trim&&(y="1.8.1",Date.parse&&(y="1.8.2",Object.create&&(y="1.8.5")))))
}catch(H){}}C=screen.width+"x"+screen.height;
B=navigator.javaEnabled()?"Y":"N";
A=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;
z=j.w.innerWidth?j.w.innerWidth:j.d.documentElement.offsetWidth;
w=j.w.innerHeight?j.w.innerHeight:j.d.documentElement.offsetHeight;
try{j.b.addBehavior("#default#homePage"),a=j.b.Fb(E)?"Y":"N"
}catch(G){}try{j.b.addBehavior("#default#clientCaps"),I=j.b.connectionType
}catch(F){}j.resolution=C;
j.colorDepth=A;
j.javascriptVersion=y;
j.javaEnabled=B;
j.cookiesEnabled=r;
j.browserWidth=z;
j.browserHeight=w;
j.connectionType=I;
j.homepage=a;
j.Ab=1
}};
j.L={};
j.loadModule=function(q,a){var n=j.L[q];
if(!n){n=e["AppMeasurement_Module_"+q]?new e["AppMeasurement_Module_"+q](j):{};
j.L[q]=j[q]=n;
n.Qa=function(){return n.Ua
};
n.Va=function(r){if(n.Ua=r){j[q+"_onLoad"]=r,j.da(q+"_onLoad",[j,n],1)||r(j,n)
}};
try{Object.defineProperty?Object.defineProperty(n,"onLoad",{get:n.Qa,set:n.Va}):n._olc=1
}catch(k){n._olc=1
}}a&&(j[q+"_onLoad"]=a,j.da(q+"_onLoad",[j,n],1)||a(j,n))
};
j.l=function(n){var a,k;
for(a in j.L){if(!Object.prototype[a]&&(k=j.L[a])&&(k._olc&&k.onLoad&&(k._olc=0,k.onLoad(j,k)),k[n]&&k[n]())){return 1
}}return 0
};
j.qb=function(){var q=Math.floor(10000000000000*Math.random()),a=j.visitorSampling,n=j.visitorSamplingGroup,n="s_vsn_"+(j.visitorNamespace?j.visitorNamespace:j.account)+(n?"_"+n:""),k=j.cookieRead(n);
if(a){k&&(k=parseInt(k));
if(!k){if(!j.cookieWrite(n,q)){return 0
}k=q
}if(k%10000>v){return 0
}}return 1
};
j.M=function(w,n){var u,s,t,r,a,q;
for(u=0;
2>u;
u++){for(s=0<u?j.qa:j.e,t=0;
t<s.length;
t++){if(r=s[t],(a=w[r])||w["!"+r]){if(!n&&("contextData"==r||"retrieveLightData"==r)&&j[r]){for(q in j[r]){a[q]||(a[q]=j[r][q])
}}j[r]=a
}}}};
j.Ja=function(s,a){var r,n,q,k;
for(r=0;
2>r;
r++){for(n=0<r?j.qa:j.e,q=0;
q<n.length;
q++){k=n[q],s[k]=j[k],a||s[k]||(s["!"+k]=1)
}}};
j.ib=function(B){var A,z,x,y,w,t=0,u,s="",r="";
if(B&&255<B.length&&(A=""+B,z=A.indexOf("?"),0<z&&(u=A.substring(z+1),A=A.substring(0,z),y=A.toLowerCase(),x=0,"http://"==y.substring(0,7)?x+=7:"https://"==y.substring(0,8)&&(x+=8),z=y.indexOf("/",x),0<z&&(y=y.substring(x,z),w=A.substring(z),A=A.substring(0,z),0<=y.indexOf("google")?t=",q,ie,start,search_key,word,kw,cd,":0<=y.indexOf("yahoo.co")&&(t=",p,ei,"),t&&u)))){if((B=u.split("&"))&&1<B.length){for(x=0;
x<B.length;
x++){y=B[x],z=y.indexOf("="),0<z&&0<=t.indexOf(","+y.substring(0,z)+",")?s+=(s?"&":"")+y:r+=(r?"&":"")+y
}s&&r?u=s+"&"+r:r=""
}z=253-(u.length-r.length)-A.length;
B=A+(0<z?w.substring(0,z):"")+"?"+u
}return B
};
j.Pa=function(n){var a=j.d.visibilityState,k=["webkitvisibilitychange","visibilitychange"];
a||(a=j.d.webkitVisibilityState);
if(a&&"prerender"==a){if(n){for(a=0;
a<k.length;
a++){j.d.addEventListener(k[a],function(){var q=j.d.visibilityState;
q||(q=j.d.webkitVisibilityState);
"visible"==q&&n()
})
}}return !1
}return !0
};
j.Z=!1;
j.D=!1;
j.Xa=function(){j.D=!0;
j.i()
};
j.X=!1;
j.Q=!1;
j.Ta=function(a){j.marketingCloudVisitorID=a;
j.Q=!0;
j.i()
};
j.aa=!1;
j.R=!1;
j.Ya=function(a){j.visitorOptedOut=a;
j.R=!0;
j.i()
};
j.U=!1;
j.N=!1;
j.La=function(a){j.analyticsVisitorID=a;
j.N=!0;
j.i()
};
j.W=!1;
j.P=!1;
j.Na=function(a){j.audienceManagerLocationHint=a;
j.P=!0;
j.i()
};
j.V=!1;
j.O=!1;
j.Ma=function(a){j.audienceManagerBlob=a;
j.O=!0;
j.i()
};
j.Oa=function(a){j.maxDelay||(j.maxDelay=250);
return j.l("_d")?(a&&setTimeout(function(){a()
},j.maxDelay),!1):!0
};
j.Y=!1;
j.C=!1;
j.pa=function(){j.C=!0;
j.i()
};
j.isReadyToTrack=function(){var k=!0,a=j.visitor;
j.Z||j.D||(j.Pa(j.Xa)?j.D=!0:j.Z=!0);
if(j.Z&&!j.D){return !1
}a&&a.isAllowed()&&(j.X||j.marketingCloudVisitorID||!a.getMarketingCloudVisitorID||(j.X=!0,j.marketingCloudVisitorID=a.getMarketingCloudVisitorID([j,j.Ta]),j.marketingCloudVisitorID&&(j.Q=!0)),j.aa||j.visitorOptedOut||!a.isOptedOut||(j.aa=!0,j.visitorOptedOut=a.isOptedOut([j,j.Ya]),j.visitorOptedOut!=c&&(j.R=!0)),j.U||j.analyticsVisitorID||!a.getAnalyticsVisitorID||(j.U=!0,j.analyticsVisitorID=a.getAnalyticsVisitorID([j,j.La]),j.analyticsVisitorID&&(j.N=!0)),j.W||j.audienceManagerLocationHint||!a.getAudienceManagerLocationHint||(j.W=!0,j.audienceManagerLocationHint=a.getAudienceManagerLocationHint([j,j.Na]),j.audienceManagerLocationHint&&(j.P=!0)),j.V||j.audienceManagerBlob||!a.getAudienceManagerBlob||(j.V=!0,j.audienceManagerBlob=a.getAudienceManagerBlob([j,j.Ma]),j.audienceManagerBlob&&(j.O=!0)),j.X&&!j.Q&&!j.marketingCloudVisitorID||j.U&&!j.N&&!j.analyticsVisitorID||j.W&&!j.P&&!j.audienceManagerLocationHint||j.V&&!j.O&&!j.audienceManagerBlob||j.aa&&!j.R)&&(k=!1);
j.Y||j.C||(j.Oa(j.pa)?j.C=!0:j.Y=!0);
j.Y&&!j.C&&(k=!1);
return k
};
j.k=c;
j.p=0;
j.callbackWhenReadyToTrack=function(q,a,n){var k;
k={};
k.bb=q;
k.ab=a;
k.Za=n;
j.k==c&&(j.k=[]);
j.k.push(k);
0==j.p&&(j.p=setInterval(j.i,100))
};
j.i=function(){var a;
if(j.isReadyToTrack()&&(j.Wa(),j.k!=c)){for(;
0<j.k.length;
){a=j.k.shift(),a.ab.apply(a.bb,a.Za)
}}};
j.Wa=function(){j.p&&(clearInterval(j.p),j.p=0)
};
j.Ra=function(r){var a,q,k=c,n=c;
if(!j.isReadyToTrack()){a=[];
if(r!=c){for(q in k={},r){k[q]=r[q]
}}n={};
j.Ja(n,!0);
a.push(k);
a.push(n);
j.callbackWhenReadyToTrack(j,j.track,a);
return !0
}return !1
};
j.lb=function(){var r=j.cookieRead("s_fid"),a="",q="",k;
k=8;
var n=4;
if(!r||0>r.indexOf("-")){for(r=0;
16>r;
r++){k=Math.floor(Math.random()*k),a+="0123456789ABCDEF".substring(k,k+1),k=Math.floor(Math.random()*n),q+="0123456789ABCDEF".substring(k,k+1),k=n=16
}r=a+"-"+q
}j.cookieWrite("s_fid",r,1)||(r=0);
return r
};
j.t=j.track=function(s,a){var r,n=new Date,q="s"+Math.floor(n.getTime()/10800000)%10+Math.floor(10000000000000*Math.random()),k=n.getYear(),k="t="+j.escape(n.getDate()+"/"+n.getMonth()+"/"+(1900>k?k+1900:k)+" "+n.getHours()+":"+n.getMinutes()+":"+n.getSeconds()+" "+n.getDay()+" "+n.getTimezoneOffset());
j.visitor&&(j.visitor.jb&&(j.authState=j.visitor.jb()),!j.supplementalDataID&&j.visitor.getSupplementalDataID&&(j.supplementalDataID=j.visitor.getSupplementalDataID("AppMeasurement:"+j._in,j.expectSupplementalData?!1:!0)));
j.l("_s");
j.Ra(s)||(a&&j.M(a),s&&(r={},j.Ja(r,0),j.M(s)),j.qb()&&!j.visitorOptedOut&&(j.analyticsVisitorID||j.marketingCloudVisitorID||(j.fid=j.lb()),j.vb(),j.usePlugins&&j.doPlugins&&j.doPlugins(j),j.account&&(j.abort||(j.trackOffline&&!j.timestamp&&(j.timestamp=Math.floor(n.getTime()/1000)),n=e.location,j.pageURL||(j.pageURL=n.href?n.href:n),j.referrer||j.Ka||(j.referrer=b.document.referrer),j.Ka=1,j.referrer=j.ib(j.referrer),j.l("_g")),j.nb()&&!j.abort&&(j.ob(),k+=j.mb(),j.ub(q,k),j.l("_t"),j.referrer=""))),s&&j.M(r,1));
j.abort=j.supplementalDataID=j.timestamp=j.pageURLRest=j.linkObject=j.clickObject=j.linkURL=j.linkName=j.linkType=e.s_objectID=j.pe=j.pev1=j.pev2=j.pev3=j.c=j.lightProfileID=0
};
j.tl=j.trackLink=function(r,a,q,k,n){j.linkObject=r;
j.linkType=a;
j.linkName=q;
n&&(j.j=r,j.r=n);
return j.track(k)
};
j.trackLight=function(q,a,n,k){j.lightProfileID=q;
j.lightStoreForSeconds=a;
j.lightIncrementBy=n;
return j.track(k)
};
j.clearVars=function(){var k,a;
for(k=0;
k<j.e.length;
k++){if(a=j.e[k],"prop"==a.substring(0,4)||"eVar"==a.substring(0,4)||"hier"==a.substring(0,4)||"list"==a.substring(0,4)||"channel"==a||"events"==a||"eventList"==a||"products"==a||"productList"==a||"purchaseID"==a||"transactionID"==a||"state"==a||"zip"==a||"campaign"==a){j[a]=void 0
}}};
j.tagContainerMarker="";
j.ub=function(u,a){var t,r=j.trackingServer;
t="";
var s=j.dc,q="sc.",n=j.visitorNamespace;
r?j.trackingServerSecure&&j.ssl&&(r=j.trackingServerSecure):(n||(n=j.account,r=n.indexOf(","),0<=r&&(n=n.substring(0,r)),n=n.replace(/[^A-Za-z0-9]/g,"")),t||(t="2o7.net"),s=s?(""+s).toLowerCase():"d1","2o7.net"==t&&("d1"==s?s="112":"d2"==s&&(s="122"),q=""),r=n+"."+s+"."+q+t);
t=j.ssl?"https://":"http://";
s=j.AudienceManagement&&j.AudienceManagement.isReady();
t+=r+"/b/ss/"+j.account+"/"+(j.mobile?"5.":"")+(s?"10":"1")+"/JS-"+j.version+(j.zb?"T":"")+(j.tagContainerMarker?"-"+j.tagContainerMarker:"")+"/"+u+"?AQB=1&ndh=1&pf=1&"+(s?"callback=s_c_il["+j._in+"].AudienceManagement.passData&":"")+a+"&AQE=1";
j.gb(t);
j.fa()
};
j.gb=function(a){j.g||j.pb();
j.g.push(a);
j.ha=j.u();
j.Ha()
};
j.pb=function(){j.g=j.rb();
j.g||(j.g=[])
};
j.rb=function(){var n,a;
if(j.ma()){try{(a=e.localStorage.getItem(j.ka()))&&(n=e.JSON.parse(a))
}catch(k){}return n
}};
j.ma=function(){var a=!0;
j.trackOffline&&j.offlineFilename&&e.localStorage&&e.JSON||(a=!1);
return a
};
j.ya=function(){var a=0;
j.g&&(a=j.g.length);
j.A&&a++;
return a
};
j.fa=function(){if(!j.A){if(j.za=c,j.la){j.ha>j.J&&j.Fa(j.g),j.oa(500)
}else{var a=j.$a();
if(0<a){j.oa(a)
}else{if(a=j.wa()){j.A=1,j.tb(a),j.xb(a)
}}}}};
j.oa=function(a){j.za||(a||(a=0),j.za=setTimeout(j.fa,a))
};
j.$a=function(){var a;
if(!j.trackOffline||0>=j.offlineThrottleDelay){return 0
}a=j.u()-j.Ea;
return j.offlineThrottleDelay<a?0:j.offlineThrottleDelay-a
};
j.wa=function(){if(0<j.g.length){return j.g.shift()
}};
j.tb=function(n){if(j.debugTracking){var a="AppMeasurement Debug: "+n;
n=n.split("&");
var k;
for(k=0;
k<n.length;
k++){a+="\n\t"+j.unescape(n[k])
}j.sb(a)
}};
j.Sa=function(){return j.marketingCloudVisitorID||j.analyticsVisitorID
};
j.T=!1;
var p;
try{p=JSON.parse('{"x":"y"}')
}catch(i){p=null
}p&&"y"==p.x?(j.T=!0,j.S=function(k){return JSON.parse(k)
}):e.$&&e.$.parseJSON?(j.S=function(k){return e.$.parseJSON(k)
},j.T=!0):j.S=function(){return null
};
j.xb=function(s){var a,r,n;
j.Sa()&&2047<s.length&&("undefined"!=typeof XMLHttpRequest&&(a=new XMLHttpRequest,"withCredentials" in a?r=1:a=0),a||"undefined"==typeof XDomainRequest||(a=new XDomainRequest,r=2),a&&j.AudienceManagement&&j.AudienceManagement.isReady()&&(j.T?a.ra=!0:a=0));
!a&&j.Ia&&(s=s.substring(0,2047));
!a&&j.d.createElement&&j.AudienceManagement&&j.AudienceManagement.isReady()&&(a=j.d.createElement("SCRIPT"))&&"async" in a&&((n=(n=j.d.getElementsByTagName("HEAD"))&&n[0]?n[0]:j.d.body)?(a.type="text/javascript",a.setAttribute("async","async"),r=3):a=0);
a||(a=new Image,a.alt="");
a.ua=function(){try{j.na&&(clearTimeout(j.na),j.na=0),a.timeout&&(clearTimeout(a.timeout),a.timeout=0)
}catch(t){}};
a.onload=a.yb=function(){a.ua();
j.fb();
j.ba();
j.A=0;
j.fa();
if(a.ra){a.ra=!1;
try{var u=j.S(a.responseText);
j.AudienceManagement.passData(u)
}catch(t){}}};
a.onabort=a.onerror=a.hb=function(){a.ua();
(j.trackOffline||j.la)&&j.A&&j.g.unshift(j.eb);
j.A=0;
j.ha>j.J&&j.Fa(j.g);
j.ba();
j.oa(500)
};
a.onreadystatechange=function(){4==a.readyState&&(200==a.status?a.yb():a.hb())
};
j.Ea=j.u();
if(1==r||2==r){var q=s.indexOf("?");
n=s.substring(0,q);
q=s.substring(q+1);
q=q.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,"");
1==r?(a.open("POST",n,!0),a.send(q)):2==r&&(a.open("POST",n),a.send(q))
}else{if(a.src=s,3==r){if(j.Ca){try{n.removeChild(j.Ca)
}catch(k){}}n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a);
j.Ca=j.cb
}}a.abort&&(j.na=setTimeout(a.abort,5000));
j.eb=s;
j.cb=e["s_i_"+j.replace(j.account,",","_")]=a;
if(j.useForcedLinkTracking&&j.F||j.r){j.forcedLinkTrackingTimeout||(j.forcedLinkTrackingTimeout=250),j.ca=setTimeout(j.ba,j.forcedLinkTrackingTimeout)
}};
j.fb=function(){if(j.ma()&&!(j.Da>j.J)){try{e.localStorage.removeItem(j.ka()),j.Da=j.u()
}catch(a){}}};
j.Fa=function(k){if(j.ma()){j.Ha();
try{e.localStorage.setItem(j.ka(),e.JSON.stringify(k)),j.J=j.u()
}catch(a){}}};
j.Ha=function(){if(j.trackOffline){if(!j.offlineLimit||0>=j.offlineLimit){j.offlineLimit=10
}for(;
j.g.length>j.offlineLimit;
){j.wa()
}}};
j.forceOffline=function(){j.la=!0
};
j.forceOnline=function(){j.la=!1
};
j.ka=function(){return j.offlineFilename+"-"+j.visitorNamespace+j.account
};
j.u=function(){return(new Date).getTime()
};
j.Aa=function(k){k=k.toLowerCase();
return 0!=k.indexOf("#")&&0!=k.indexOf("about:")&&0!=k.indexOf("opera:")&&0!=k.indexOf("javascript:")?!0:!1
};
j.setTagContainer=function(q){var a,n,k;
j.zb=q;
for(a=0;
a<j._il.length;
a++){if((n=j._il[a])&&"s_l"==n._c&&n.tagContainerName==q){j.M(n);
if(n.lmq){for(a=0;
a<n.lmq.length;
a++){k=n.lmq[a],j.loadModule(k.n)
}}if(n.ml){for(k in n.ml){if(j[k]){for(a in q=j[k],k=n.ml[k],k){!Object.prototype[a]&&("function"!=typeof k[a]||0>(""+k[a]).indexOf("s_c_il"))&&(q[a]=k[a])
}}}}if(n.mmq){for(a=0;
a<n.mmq.length;
a++){k=n.mmq[a],j[k.m]&&(q=j[k.m],q[k.f]&&"function"==typeof q[k.f]&&(k.a?q[k.f].apply(q,k.a):q[k.f].apply(q)))
}}if(n.tq){for(a=0;
a<n.tq.length;
a++){j.track(n.tq[a])
}}n.s=j;
break
}}};
j.Util={urlEncode:j.escape,urlDecode:j.unescape,cookieRead:j.cookieRead,cookieWrite:j.cookieWrite,getQueryParam:function(q,a,n){var k;
a||(a=j.pageURL?j.pageURL:e.location);
n||(n="&");
return q&&a&&(a=""+a,k=a.indexOf("?"),0<=k&&(a=n+a.substring(k+1)+n,k=a.indexOf(n+q+"="),0<=k&&(a=a.substring(k+n.length+q.length+1),k=a.indexOf(n),0<=k&&(a=a.substring(0,k)),0<a.length)))?j.unescape(a):""
}};
j.B="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
j.e=j.B.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));
j.ia="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");
j.K=j.ia.slice(0);
j.qa="account allAccounts debugTracking visitor trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData AudienceManagement".split(" ");
for(d=0;
250>=d;
d++){76>d&&(j.e.push("prop"+d),j.K.push("prop"+d)),j.e.push("eVar"+d),j.K.push("eVar"+d),6>d&&j.e.push("hier"+d),4>d&&j.e.push("list"+d)
}d="pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest".split(" ");
j.e=j.e.concat(d);
j.B=j.B.concat(d);
j.ssl=0<=e.location.protocol.toLowerCase().indexOf("https");
j.charSet="UTF-8";
j.contextData={};
j.offlineThrottleDelay=0;
j.offlineFilename="AppMeasurement.offline";
j.Ea=0;
j.ha=0;
j.J=0;
j.Da=0;
j.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
j.w=e;
j.d=e.document;
try{if(j.Ia=!1,navigator){var g=navigator.userAgent;
if("Microsoft Internet Explorer"==navigator.appName||0<=g.indexOf("MSIE ")||0<=g.indexOf("Trident/")&&0<=g.indexOf("Windows NT 6")){j.Ia=!0
}}}catch(f){}j.ba=function(){j.ca&&(e.clearTimeout(j.ca),j.ca=c);
j.j&&j.F&&j.j.dispatchEvent(j.F);
j.r&&("function"==typeof j.r?j.r():j.j&&j.j.href&&(j.d.location=j.j.href));
j.j=j.F=j.r=0
};
j.Ga=function(){j.b=j.d.body;
j.b?(j.q=function(z){var A,y,w,x,u;
if(!(j.d&&j.d.getElementById("cppXYctnr")||z&&z["s_fe_"+j._in])){if(j.ta){if(j.useForcedLinkTracking){j.b.removeEventListener("click",j.q,!1)
}else{j.b.removeEventListener("click",j.q,!0);
j.ta=j.useForcedLinkTracking=0;
return
}}else{j.useForcedLinkTracking=0
}j.clickObject=z.srcElement?z.srcElement:z.target;
try{if(!j.clickObject||j.I&&j.I==j.clickObject||!(j.clickObject.tagName||j.clickObject.parentElement||j.clickObject.parentNode)){j.clickObject=0
}else{var t=j.I=j.clickObject;
j.ga&&(clearTimeout(j.ga),j.ga=0);
j.ga=setTimeout(function(){j.I==t&&(j.I=0)
},10000);
w=j.ya();
j.track();
if(w<j.ya()&&j.useForcedLinkTracking&&z.target){for(x=z.target;
x&&x!=j.b&&"A"!=x.tagName.toUpperCase()&&"AREA"!=x.tagName.toUpperCase();
){x=x.parentNode
}if(x&&(u=x.href,j.Aa(u)||(u=0),y=x.target,z.target.dispatchEvent&&u&&(!y||"_self"==y||"_top"==y||"_parent"==y||e.name&&y==e.name))){try{A=j.d.createEvent("MouseEvents")
}catch(s){A=new e.MouseEvent
}if(A){try{A.initMouseEvent("click",z.bubbles,z.cancelable,z.view,z.detail,z.screenX,z.screenY,z.clientX,z.clientY,z.ctrlKey,z.altKey,z.shiftKey,z.metaKey,z.button,z.relatedTarget)
}catch(k){A=0
}A&&(A["s_fe_"+j._in]=A.s_fe=1,z.stopPropagation(),z.stopImmediatePropagation&&z.stopImmediatePropagation(),z.preventDefault(),j.j=z.target,j.F=A)
}}}}}catch(a){j.clickObject=0
}}},j.b&&j.b.attachEvent?j.b.attachEvent("onclick",j.q):j.b&&j.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&j.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&e.MouseEvent)&&(j.ta=1,j.useForcedLinkTracking=1,j.b.addEventListener("click",j.q,!0)),j.b.addEventListener("click",j.q,!1))):setTimeout(j.Ga,30)
};
j.Ga();
j.loadModule("ActivityMap")
}function s_gi(g){var e,c=window.s_c_il,b,d,j=g.split(","),i,m,f=0;
if(c){for(b=0;
!f&&b<c.length;
){e=c[b];
if("s_c"==e._c&&(e.account||e.oun)){if(e.account&&e.account==g){f=1
}else{for(d=e.account?e.account:e.oun,d=e.allAccounts?e.allAccounts:d.split(","),i=0;
i<j.length;
i++){for(m=0;
m<d.length;
m++){j[i]==d[m]&&(f=1)
}}}}b++
}}f||(e=new AppMeasurement);
e.setAccount?e.setAccount(g):e.sa&&e.sa(g);
return e
}AppMeasurement.getInstance=s_gi;
window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var b=window,c=b.s_giq,e,d,f;
if(c){for(e=0;
e<c.length;
e++){d=c[e],f=s_gi(d.oun),f.setAccount(d.un),f.setTagContainer(d.tagContainerName)
}}b.s_giq=0
}s_pgicq();