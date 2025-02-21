if(!window.CQ_Analytics){window.CQ_Analytics={}
}CQ_Analytics.Operator=(function(){return function(){}
})();
CQ_Analytics.Operator.IS="is";
CQ_Analytics.Operator.EQUALS="equals";
CQ_Analytics.Operator.NOT_EQUAL="notequal";
CQ_Analytics.Operator.GREATER="greater";
CQ_Analytics.Operator.GREATER_OR_EQUAL="greaterorequal";
CQ_Analytics.Operator.OLDER="older";
CQ_Analytics.Operator.OLDER_OR_EQUAL="olderorequal";
CQ_Analytics.Operator.LESS="less";
CQ_Analytics.Operator.LESS_OR_EQUAL="lessorequal";
CQ_Analytics.Operator.YOUNGER="younger";
CQ_Analytics.Operator.YOUNGER_OR_EQUAL="youngerorequal";
CQ_Analytics.Operator.CONTAINS="contains";
CQ_Analytics.Operator.BEGINS_WITH="beginswith";
CQ_Analytics.OperatorActions=function(){var mapping={};
var addOperator=function(name,text,operation){mapping[name]=[text,operation]
};
addOperator(CQ_Analytics.Operator.EQUALS,"equals","==");
addOperator(CQ_Analytics.Operator.IS,"is","==");
addOperator(CQ_Analytics.Operator.NOT_EQUAL,"is not equal to","!=");
addOperator(CQ_Analytics.Operator.GREATER,"is greater than",">");
addOperator(CQ_Analytics.Operator.GREATER_OR_EQUAL,"is equal to or greater than",">=");
addOperator(CQ_Analytics.Operator.OLDER,"is older than",">");
addOperator(CQ_Analytics.Operator.OLDER_OR_EQUAL,"is equal to or older than",">=");
addOperator(CQ_Analytics.Operator.LESS,"is less than","<");
addOperator(CQ_Analytics.Operator.LESS_OR_EQUAL,"is equal to or less than","<=");
addOperator(CQ_Analytics.Operator.YOUNGER,"is younger than","<");
addOperator(CQ_Analytics.Operator.YOUNGER_OR_EQUAL,"is equal to or younger than","<=");
addOperator(CQ_Analytics.Operator.CONTAINS,"contains",function(s1,s2){if(s1){if(s2){s1=""+s1;
s2=""+s2;
return s1.toLowerCase().indexOf(s2.toLowerCase())!=-1
}return true
}return false
});
addOperator(CQ_Analytics.Operator.BEGINS_WITH,"begins with",function(s1,s2){if(s1){if(s2){s1=""+s1;
s2=""+s2;
return s1.toLowerCase().indexOf(s2.toLowerCase())==0
}return true
}return false
});
var getByIndex=function(op,index){if(mapping[op]&&mapping[op][index]){return mapping[op][index]
}return""
};
var escapeQuote=function(str){if(str){str=str.replace(new RegExp("\\'","ig"),str)
}return str
};
return{getText:function(operator){return getByIndex(operator,0)
},setText:function(operator,newText){if(mapping[operator]&&mapping[operator][0]){mapping[operator][0]=newText
}},getOperation:function(operator){return getByIndex(operator,1)
},operate:function(object,property,operator,value,valueFormat){try{if(object&&object[property]){var toEval="";
var op=this.getOperation(operator);
op=op?op:operator;
var objectValue=CQ.shared.XSS.getXSSTablePropertyValue(object,property);
if(typeof op=="function"){return op.call(this,objectValue,value,valueFormat)
}else{if(valueFormat){toEval=valueFormat+"('"+objectValue+"') "+op+" "+valueFormat+"('"+value+"')"
}else{var s1=escapeQuote(objectValue);
var s2=escapeQuote(value);
toEval="'"+s1+"' "+op+" '"+s2+"'"
}var b=eval(toEval);
return b
}}}catch(e){}return false
}}
}();
CQ_Analytics.Utils=new function(){return{registerDocumentEventHandler:function(c,b){var a=window.document[c];
if(typeof window.document[c]!="function"){window.document[c]=b
}else{window.document[c]=function(d){if(a){a(d)
}b(d)
}
}},eventWrapper:function(a){return function(d){var c,b;
if(document.all){c=window.event.keyCode;
b=window.event
}else{c=(typeof(d.which)!="undefined")?d.which:0;
b=d
}if(b){a(b,c)
}}
},loadElement:function(a,b){$CQ("#"+b).load(a)
},loadTeaserElement:function(a,d){var e=$CQ("#"+d).css("height");
var f=$CQ("#"+d).height();
if(f>0){$CQ("#"+d).css("height",f)
}var g=function(m){if(m&&m!=""){var h=$CQ(m).css("display","none");
$CQ("#"+d).append(h);
h.fadeIn(function(){if(e&&e!="0px"){$CQ("#"+d).css("height",e)
}})
}else{if(e&&e!="0px"){$CQ("#"+d).css("height",e)
}}};
var j=function(h,m){if(!CQ_Analytics.Utils.teasersCache){CQ_Analytics.Utils.teasersCache={}
}CQ_Analytics.Utils.teasersCache[h]=m
};
var b=function(){if(CQ_Analytics.Utils.teasersCache&&CQ_Analytics.Utils.teasersCache[a]){g(CQ_Analytics.Utils.teasersCache[a])
}else{CQ_Analytics.Utils.teasersLoading=CQ_Analytics.Utils.teasersLoading||{};
if(CQ_Analytics.Utils.teasersLoading[a]){window.setTimeout(function(){CQ_Analytics.Utils.loadTeaserElement(a,d)
},100)
}else{CQ_Analytics.Utils.teasersLoading[a]=true;
k()
}}};
var k=function(){var m=a;
var h=location.href;
if(typeof CQ_CONTENT_PATH!="undefined"){h=CQ_CONTENT_PATH
}var n=CQ.shared.HTTP.getParameter(h,"wcmmode");
if(n){m+=(m.indexOf("?")>0?"&":"?")+"wcmmode="+n
}CQ.shared.HTTP.get(m,function(s,r,p){if(r){var q=p.body;
if(q){q=q.replace(new RegExp("\\n","ig"),"");
q=q.replace(new RegExp("\\r","ig"),"");
j(a,q);
delete CQ_Analytics.Utils.teasersLoading[a];
b()
}}else{j(a,"")
}})
};
var c=$CQ("#"+d).children().length;
if(c>0){var l=0;
$CQ("#"+d).children().fadeOut(function(){var h=$CQ(this);
window.setTimeout(function(){h.remove();
l++;
if(l>=c){b()
}},50)
})
}else{b()
}},clearElement:function(a){if(a){$CQ("#"+a).html("")
}},indexOf:function(d,c){for(var b=0,a=d.length;
b<a;
b++){if(d[b]==c){return b
}}return -1
},load:function(a,c,b){return CQ.shared.HTTP.get(a,c,b)
},post:function(a,d,c,b){return CQ.shared.HTTP.post(a,d,c,b)
},getPagePath:function(){return CQ.shared.HTTP.getPath()
},getPath:function(a){return CQ.shared.HTTP.getPath(a)
},addParameter:function(b,a,c){return CQ.shared.HTTP.addParameter(b,a,c)
},removeParameters:function(a){return CQ.shared.HTTP.removeParameters(a)
},removeAnchor:function(a){return CQ.shared.HTTP.removeAnchor(a)
},getSchemeAndAuthority:function(a){return CQ.shared.HTTP.getSchemeAndAuthority(a)
},internalize:function(a,b){return CQ.shared.HTTP.internalize(b)
},externalize:function(a,b){return CQ.shared.HTTP.externalize(a,b)
},encodePathOfURI:function(a){return CQ.shared.HTTP.encodePathOfURI(a)
},encodePath:function(a){return CQ.shared.HTTP.encodePath(a)
},getContextPath:function(){return CQ.shared.HTTP.getContextPath()
},detectContextPath:function(){return CQ.shared.HTTP.detectContextPath()
},urlEncode:function(h){if(!h){return""
}if(typeof h=="string"){return h
}var c=[];
for(var f in h){var e=h[f],b=encodeURIComponent(f);
var g=typeof e;
if(g=="undefined"){c.push(b,"=&")
}else{if(g!="function"&&g!="object"){c.push(b,"=",encodeURIComponent(e),"&")
}else{if(typeof e=="array"){if(e.length){for(var d=0,a=e.length;
d<a;
d++){c.push(b,"=",encodeURIComponent(e[d]===undefined?"":e[d]),"&")
}}else{c.push(b,"=&")
}}}}}c.pop();
return c.join("")
},getUID:function(){var a=Math.floor(Math.random()*(Math.pow(2,42)-1));
return this.getTimestamp().toString(16)+a.toString(16)
},getTimestamp:function(){var a=new Date();
return a.getTime()
},insert:function(d,c,b){if(!d||isNaN(c)||!b){return d
}var a="";
var f=0;
var e=c;
while(e<d.length){a+=d.substring(f,e)+b;
f+=c;
e+=c
}if(f<d.length){a+=d.substring(f)
}return a
},addListener:function(){if(window.addEventListener){return function(d,b,c,a){d.addEventListener(b,c,(a))
}
}else{if(window.attachEvent){return function(d,b,c,a){d.attachEvent("on"+b,c)
}
}else{return function(){}
}}},removeListener:function(){if(window.removeEventListener){return function(d,b,c,a){d.removeEventListener(b,c,(a))
}
}else{if(window.detachEvent){return function(c,a,b){c.detachEvent("on"+a,b)
}
}else{return function(){}
}}}}
};
CQ_Analytics.ClickstreamcloudRenderingUtils=new function(){return{createLink:function(f,d,b,a){var c=document.createElement("a");
c.href=a;
c.onclick=d;
c.innerHTML=f;
if(b){for(var e in b){if(b.hasOwnProperty(e)){c[e]=b[e]
}}}return c
},createStaticLink:function(d,a,c){var b=document.createElement("a");
b.href=a;
b.innerHTML=d;
b.title=c;
b.alt=c;
return b
},createNameValue:function(b,d,a,e){var c=document.createElement("span");
c.className=a||"ccl-data";
c.innerHTML=b+" = "+d;
c.title=e;
c.alt=e;
return c
},createText:function(d,a,c){var b=document.createElement("span");
b.className=a||"ccl-data";
if(d&&d.indexOf&&((d.indexOf("/home")!=-1&&d.indexOf("/image")!=-1)||(d.indexOf("/")!=-1&&d.indexOf(".png")!=-1))){b.innerHTML='<img src="'+d+'.prof.thumbnail.png" border="0">'
}else{if(d&&d.indexOf&&d.indexOf("www.gravatar.com")!=-1){b.innerHTML='<img src="'+d+'">'
}else{b.innerHTML=d
}}b.title=c;
b.alt=c;
return b
},createEditablePropertySpan:function(b,d){var a="var editSpan = this.nextSibling; this.style.display = 'none'; editSpan.style.display = 'block';";
var e="var editSpan = this.parentNode; var readSpan = this.parentNode.previousSibling;var newValue = this.value;editSpan.style.display = 'none'; readSpan.innerHTML = '"+b+" = '+value; readSpan.style.display = 'block';";
var c=document.createElement("span");
c.innerHTML='<span class="ccl-data" onclick="'+a+'">'+b+" = "+d+"</span>";
c.innerHTML+='<span class="ccl-data" style="display: none;">'+b+' = <input class="ccl-input" type="text" value="'+d+'" onblur="'+e+'"></span>';
c.className="ccl-data";
return c
}}
};
CQ_Analytics.ClientContextUtils=new function(){return{renderStoreProperty:function(f,c,b,d,e,a){if(CQ_Analytics&&CQ_Analytics.CCM){CQ_Analytics.CCM.onReady(function(){var g=function(){var h=CQ_Analytics.StoreRegistry.getStore(c);
if(h){var j=function(){var m=h.getProperty(b)||a;
var l=$CQ("#"+f);
if(l.attr("contenteditable")&&l.attr("contenteditable")!="inherit"){return
}if(typeof(m)=="string"&&((m.indexOf("/")==0&&(m.toLowerCase().indexOf(".png")!=-1||m.toLowerCase().indexOf(".jpg")!=-1||m.toLowerCase().indexOf(".gif")!=-1)||m.toLowerCase().indexOf("http")==0))){if(!m||m==""){l.children().remove();
if(CQ_Analytics.isUIAvailable){l.html(CQ.I18n.getMessage("No",null,"Ex: No address, No keywords")+" "+b)
}else{l.html("No "+b)
}}else{var k="";
if(l.parents(".cq-cc-thumbnail").length==0||m.toLowerCase().indexOf("http")==0||m.indexOf("/libs/wcm/mobile")==0){k=m.replace(new RegExp("&amp;","g"),"&")
}else{k="/etc/clientcontext/shared/thumbnail/content.png";
k=CQ.shared.HTTP.addParameter(k,"path",CQ_Analytics.Variables.replaceVariables(m))
}k=CQ_Analytics.Variables.replaceVariables(k);
if(l.find("div").css("background-image")!="url("+k+")"){if(h.fireEvent("beforepropertyrender",h,f)!==false){l.html("");
l.children().remove();
$CQ("<div>").addClass("cq-cc-thumbnail-img").css("background-image","url("+CQ.shared.HTTP.externalize(k)+")").appendTo(l);
h.fireEvent("propertyrender",h,f)
}}}}else{m=CQ_Analytics.Variables.replaceVariables(m);
if(CQ_Analytics.isUIAvailable){m=(!m||m=="")?CQ.I18n.getMessage("No",null,"Ex: No address, No keywords")+" "+b:m=d+m+e
}else{m=(!m||m=="")?"No "+b:m=d+m+e
}if(l.html()!=m){if(h.fireEvent("beforepropertyrender",h,f)!==false){l.html(m);
h.fireEvent("propertyrender",h,f)
}}}};
if(h.fireEvent("beforeinitialpropertyrender",h,f)!==false){j();
if(h.addListener){h.addListener("update",function(){j()
})
}h.fireEvent("initialpropertyrender",h,f)
}}};
CQ_Analytics.ClientContextUtils.onStoreRegistered(c,g)
})
}},renderStore:function(b,a){if(CQ_Analytics&&CQ_Analytics.CCM&&b&&a){CQ_Analytics.CCM.onReady(function(){var c=function(){var d=CQ_Analytics.StoreRegistry.getStore(a);
if(d){d.divId=b;
var e=function(){if(d.fireEvent("beforerender",d,d.divId)!==false){d.renderer(d,d.divId);
d.fireEvent("render",d,d.divId)
}};
if(d.fireEvent("beforeinitialrender",d,b)!==false){e();
if(d.addListener){d.addListener("update",function(){e()
})
}d.fireEvent("initialrender",d,b)
}}};
CQ_Analytics.ClientContextUtils.onStoreRegistered(a,c)
})
}},storesOptionsProvider:function(){var c=[];
var a=CQ_Analytics.StoreRegistry.getStores();
for(var b in a){c.push({value:b})
}return c
},storePropertiesOptionsProvider:function(c,e){var b=[];
var a=CQ_Analytics.StoreRegistry.getStore(c);
if(a){var g=a.getPropertyNames();
for(var d=0;
d<g.length;
d++){var f=g[d];
if(!CQ.shared.XSS.KEY_REGEXP.test(f)){var h={value:f};
if(e){h.text=f+" - "+a.getProperty(f)
}b.push(h)
}}}return b
},onStoreRegistered:function(b,c){if(c){var a=CQ_Analytics.StoreRegistry.getStore(b);
if(a){c.call(a,a)
}else{CQ_Analytics.CCM.addListener("storeregister",function(f,d){if(d.getName()==b){c.call(d,d)
}})
}}},onStoreInitialized:function(c,e,b){if(b===true){b=CQ_Analytics.ClientContextUtils.DEFAULT_INIT_DELAY
}var d=function(){var f=CQ_Analytics.StoreRegistry.getStore(c);
if(f.DELAYED_INIT_TIMEOUT){window.clearTimeout(f.DELAYED_INIT_TIMEOUT);
f.DELAYED_INIT_TIMEOUT=null
}if(b>0){f.DELAYED_INIT_TIMEOUT=window.setTimeout(function(){f.DELAYED_INIT_TIMEOUT=null;
e.call(f,"initialize",f)
},b)
}else{e.call(f,"initialize",f)
}};
var a=CQ_Analytics.StoreRegistry.getStore(c);
if(a){if(a.isInitialized()){d.call(a);
a.addListener("initialize",function(g,f){d.call(f)
})
}else{a.addListener("initialize",function(g,f){d.call(f)
})
}}else{CQ_Analytics.CCM.addListener("storeregister",function(g,f){if(f.getName()==c){CQ_Analytics.ClientContextUtils.onStoreInitialized(c,e,b)
}})
}},init:function(d,c){CQ_Analytics.ClientContextMgr.PATH=d;
CQ_Analytics.ClientContextMgr.loadConfig(null,true);
var a=CQ.shared.HTTP.externalize(d+"/content/jcr:content/stores.init.js");
a=CQ.shared.HTTP.addParameter(a,"path",c);
a=CQ.shared.HTTP.noCaching(a);
var b=CQ.shared.HTTP.get(a)
},initUI:function(c,a,b){CQ_Analytics.ClientContextUI.create(c,a,b)
}}
};
CQ_Analytics.ClientContextUtils.DEFAULT_INIT_DELAY=200;
CQ_Analytics.Variables=new function(){return{containsVariable:function(a){return CQ_Analytics.Variables.getVariables(a).length>0
},getVariables:function(b){if(!b||typeof(b)!="string"){return[]
}var a=b.match(new RegExp("\\$\\{([\\w/]*)\\}","ig"));
return a?a:[]
},replaceVariables:function(e){if(!e){return e
}var f="";
var d=e;
var g=CQ_Analytics.Variables.getVariables(e);
while(g.length>0&&f.indexOf(g.join())==-1){for(var c=0;
c<g.length;
c++){var b=CQ_Analytics.Variables.getPropertyPath(g[c]);
var a=CQ_Analytics.ClientContext.get(b)||"";
d=CQ_Analytics.Variables.replace(d,b,a)
}f+=g.join();
g=CQ_Analytics.Variables.getVariables(d)
}return d
},getPropertyPath:function(a){if(!a||a.length<2){return null
}return a.substring(2,a.length-1)
},getPropertyName:function(a){var c=CQ_Analytics.Variables.getPropertyPath(a);
if(c){var b=c.split("/");
if(b.length==3){return b[2]
}}return null
},getStoreName:function(a){var c=CQ_Analytics.Variables.getPropertyPath(a);
if(c){var b=c.split("/");
if(b.length>1){return b[1]
}}return null
},replace:function(a,b,c){return a.replace(new RegExp("\\$\\{"+b+"\\}","ig"),c)
}}
};
CQ_Analytics.SessionPersistence=CQ.shared.ClientSidePersistence;
CQ_Analytics.Cookie=CQ.shared.ClientSidePersistence.CookieHelper;
CQ_Analytics.Observable=function(){this.fireEvent=function(d){if(d&&this.listeners&&!this.suppressEvents){d=d.toLowerCase();
var b=Array.prototype.slice.call(arguments,0);
var e=this.listeners.slice(0);
for(var c=0;
c<e.length;
c++){var a=e[c];
if(d==a.event){if(a.fireFn.apply(a.scope||this||window,b)===false){return false
}}}}return true
}
};
CQ_Analytics.Observable.prototype.addListener=function(c,a,b){this.listeners=this.listeners||new Array();
if(c&&a){this.listeners.push({event:c.toLowerCase(),fireFn:a,scope:b})
}};
CQ_Analytics.Observable.prototype.removeListener=function(c,a){this.listeners=this.listeners||new Array();
if(c&&a){for(var b=0;
b<this.listeners.length;
b++){if(this.listeners[b].event==c&&this.listeners[b].fireFn==a){this.listeners.splice(b,1)
}}}};
CQ_Analytics.Observable.prototype.setSuppressEvents=function(a){this.suppressEvents=a
};
CQ_Analytics.Observable.prototype.listeners=null;
CQ_Analytics.Observable.prototype.suppressEvents=false;
if(!CQ_Analytics.StoreRegistry){CQ_Analytics.StoreRegistry=new function(){var a={};
return{register:function(b){if(b.STORENAME){a[b.STORENAME]=b
}},getStores:function(){return a
},getStore:function(b){return a[b]
}}
}()
}CQ_Analytics.SessionStore=function(){};
CQ_Analytics.SessionStore.prototype=new CQ_Analytics.Observable();
CQ_Analytics.SessionStore.prototype.setProperty=function(a,b){if(this.data==null){this.init()
}this.data[a]=b;
this.fireEvent("update",a)
};
CQ_Analytics.SessionStore.prototype.setProperties=function(b){if(this.data==null){this.init()
}var d=[];
for(var a in b){if(b.hasOwnProperty(a)){d.push(a);
var c=b[a];
this.data[a]=c
}}if(d.length>0){this.fireEvent("update",d)
}};
CQ_Analytics.SessionStore.prototype.initialized=false;
CQ_Analytics.SessionStore.prototype.init=function(){this.initialized=true;
this.fireEvent("initialize",this)
};
CQ_Analytics.SessionStore.prototype.getLabel=function(a){return a
};
CQ_Analytics.SessionStore.prototype.getLink=function(a){return a
};
CQ_Analytics.SessionStore.prototype.removeProperty=function(a){if(this.data==null){this.init()
}if(this.data[a]){delete this.data[a]
}this.fireEvent("update",a)
};
CQ_Analytics.SessionStore.prototype.getPropertyNames=function(a){if(this.data==null){this.init()
}a=a?a:[];
var b=new Array();
for(var c in this.data){if(CQ_Analytics.Utils.indexOf(a,c)==-1){b.push(c)
}}return b
};
CQ_Analytics.SessionStore.prototype.getSessionStore=function(){return this
};
CQ_Analytics.SessionStore.prototype.clear=function(){this.data=null
};
CQ_Analytics.SessionStore.prototype.getData=function(b){if(this.data==null){this.init()
}if(b){var a={};
for(var c in this.data){if(CQ_Analytics.Utils.indexOf(b,c)==-1){a[c]=this.data[c]
}}return a
}else{return this.data
}};
CQ_Analytics.SessionStore.prototype.reset=function(){if(this.data!=null){this.data=null;
this.fireEvent("update")
}};
CQ_Analytics.SessionStore.prototype.getProperty=function(b,a){if(this.data==null){this.init()
}var d=this.data[b];
if(!a){var c=CQ.shared.XSS.getXSSValue(d);
return c
}return d
};
CQ_Analytics.SessionStore.prototype.getName=function(){return this.STORENAME
};
CQ_Analytics.SessionStore.prototype.addInitProperty=function(a,b){if(!this.initProperty){this.initProperty={}
}this.initProperty[a]=b
};
CQ_Analytics.SessionStore.prototype.getInitProperty=function(a){return this.initProperty?this.initProperty[a]:null
};
CQ_Analytics.SessionStore.prototype.loadInitProperties=function(c,a){if(c){for(var b in c){this.addInitProperty(b,c[b]);
if(a&&this.data&&this.data[b]===undefined){this.setProperty(b,c[b])
}}}};
CQ_Analytics.SessionStore.prototype.isInitialized=function(){return this.initialized
};
CQ_Analytics.PersistedSessionStore=function(){};
CQ_Analytics.PersistedSessionStore.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.PersistedSessionStore.prototype.STOREKEY="key";
CQ_Analytics.PersistedSessionStore.prototype.setNonPersisted=function(a){if(!this.nonPersisted){this.nonPersisted={}
}this.nonPersisted[a]=true
};
CQ_Analytics.PersistedSessionStore.EXCLUDED_PROPERTIES_REGEX="^generated*";
CQ_Analytics.PersistedSessionStore.prototype.isPersisted=function(a){if(!this.nonPersisted){this.nonPersisted={}
}return this.nonPersisted[a]!==true&&!new RegExp(CQ_Analytics.PersistedSessionStore.EXCLUDED_PROPERTIES_REGEX,"ig").test(a)&&!$CQ.isFunction(this.data[a])&&(typeof this.data[a])!="object"
};
CQ_Analytics.PersistedSessionStore.prototype.getStoreKey=function(){return this.STOREKEY
};
CQ_Analytics.PersistedSessionStore.prototype.persist=function(){if(this.fireEvent("beforepersist")!==false){var a=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
a.set(this.getStoreKey(),this.toString());
this.fireEvent("persist")
}};
CQ_Analytics.PersistedSessionStore.prototype.setProperty=function(a,b){if(this.data==null){this.init()
}this.data[a]=b;
if(this.isPersisted(a)){this.persist()
}this.fireEvent("update",a)
};
CQ_Analytics.PersistedSessionStore.prototype.setProperties=function(b){if(this.data==null){this.init()
}var d=[];
var e=false;
for(var a in b){if(b.hasOwnProperty(a)){d.push(a);
var c=b[a];
this.data[a]=c;
if(this.isPersisted(a)){e=true
}}}if(e){this.persist()
}if(d.length>0){this.fireEvent("update",d)
}};
CQ_Analytics.PersistedSessionStore.prototype.toString=function(){var b=null;
if(this.data){var a=function(e){if(!e||typeof(e)!="string"){return e
}var d=e;
d=d.replace(new RegExp(",","g"),"&#44;");
d=d.replace(new RegExp("=","g"),"&#61;");
d=d.replace(new RegExp("\\|","g"),"&#124;");
return d
};
for(var c in this.data){if(this.isPersisted(c)&&this.data.hasOwnProperty(c)){b=(b===null?"":b+",");
b+=(c+"="+a(this.data[c]))
}}}return b
};
CQ_Analytics.PersistedSessionStore.prototype.parse=function(e){var d=function(h){if(!h||typeof(h)!="string"){return h
}var g=h;
g=g.replace(new RegExp("&#44;","g"),",");
g=g.replace(new RegExp("&#61;","g"),"=");
g=g.replace(new RegExp("&#124;","g"),"|");
return g
};
var c={};
var f=e.split(",");
for(var a in f){if(f.hasOwnProperty(a)){var b=f[a].split("=");
if(b.length==2){c[b[0]]=d(b[1])
}}}return c
};
CQ_Analytics.PersistedSessionStore.prototype.reset=function(a){if(this.data!=null){this.data={};
this.persist();
this.data=null;
if(!a){this.fireEvent("update")
}}};
CQ_Analytics.PersistedSessionStore.prototype.removeProperty=function(a){if(this.data==null){this.init()
}if(this.data[a]){delete this.data[a];
if(this.isPersisted(a)){this.persist()
}}this.fireEvent("update",a)
};
CQ_Analytics.PersistedSessionStore.prototype.clear=function(){var a=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
a.remove(this.getStoreKey());
this.data=null
};
if(!CQ_Analytics.ClientContextMgr){CQ_Analytics.ClientContextMgr=function(){this.clientcontext=null;
this.clientcontextToServer=null;
this.stores={};
this.data=null;
this.config=null;
this.isConfigLoaded=false;
this.areStoresLoaded=false
};
CQ_Analytics.ClientContextMgr.prototype=new CQ_Analytics.PersistedSessionStore();
CQ_Analytics.ClientContextMgr.prototype.STOREKEY="CLIENTCONTEXT";
CQ_Analytics.ClientContextMgr.prototype.STORENAME="clientcontext";
CQ_Analytics.ClientContextMgr.prototype.INITIALIZATION_EVENT_TIMER=1000;
CQ_Analytics.ClientContextMgr.prototype.CONFIG_PATH=CQ_Analytics.Utils.externalize("/etc/clientcontext/legacy/config.json",true);
CQ_Analytics.ClientContextMgr.prototype.init=function(){if(!this.initialized){this.clientcontext={};
this.clientcontextToServer={}
}var a=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
var b=a.get(this.getStoreKey());
if(b){this.data=this.parse(b)
}else{this.data={}
}this.initialized=true;
this.fireEvent("initialize",this)
};
CQ_Analytics.ClientContextMgr.prototype.getSessionId=function(){if(!this.data.sessionId){this.setSessionId(CQ_Analytics.Utils.getUID())
}return this.data.sessionId
};
CQ_Analytics.ClientContextMgr.prototype.setSessionId=function(a){if(a){this.setProperty("sessionId",a)
}};
CQ_Analytics.ClientContextMgr.prototype.getVisitorId=function(){return this.data.visitorId
};
CQ_Analytics.ClientContextMgr.prototype.setVisitorId=function(a){this.setProperty("visitorId",a)
};
CQ_Analytics.ClientContextMgr.prototype.getId=function(){var a=this.getVisitorId();
if(!a){return this.getSessionId()
}return a
};
CQ_Analytics.ClientContextMgr.prototype.isAnonymous=function(){var a=this.getVisitorId();
return(!a)
};
CQ_Analytics.ClientContextMgr.prototype.isMode=function(a){return CQ_Analytics.ClientContextMgr.ServerStorage.isMode(a)
};
CQ_Analytics.ClientContextMgr.prototype.get=function(a){if(this.clientcontext==null){this.init()
}if(a){return this.clientcontextToServer
}return this.clientcontext
};
CQ_Analytics.ClientContextMgr.prototype.register=function(c){if(this.clientcontext==null){this.init()
}var a=this;
this.clientcontext[c.getName()]=c.getData();
this.stores[c.getName()]=c;
CQ_Analytics.StoreRegistry.register(c);
var b=this.getStoreConfig(c.getName());
if(b.stats!==false&&b.stats!="false"){this.clientcontextToServer[c.getName()]=c.getData(b.excludedFromStats)
}if(this.initTimer){window.clearTimeout(this.initTimer);
this.initTimer=null
}this.initTimer=window.setTimeout(function(){a.fireEvent("storesinitialize");
a.areStoresInitialized=true
},this.INITIALIZATION_EVENT_TIMER);
c.addListener("update",function(){a.update(c)
});
CQ_Analytics.ClientContextMgr.ServerStorage.handleStoreRegistration(c);
this.addListener("clear",function(){c.clear()
});
this.fireEvent("storeregister",c);
this.fireEvent("storeupdate",c)
};
CQ_Analytics.ClientContextMgr.prototype.update=function(b){if(this.clientcontext==null){this.init()
}this.clientcontext[b.getName()]=b.getData();
var a=this.getStoreConfig(b.getName());
if(a.stats!==false&&a.stats!="false"){this.clientcontextToServer[b.getName()]=b.getData(a.excludedFromStats)
}this.fireEvent("storeupdate",b)
};
CQ_Analytics.ClientContextMgr.prototype.startPosting=function(){return CQ_Analytics.ClientContextMgr.ServerStorage.startPosting()
};
CQ_Analytics.ClientContextMgr.prototype.stopPosting=function(){return CQ_Analytics.ClientContextMgr.ServerStorage.stopPosting()
};
CQ_Analytics.ClientContextMgr.prototype.post=function(){return CQ_Analytics.ClientContextMgr.ServerStorage.post()
};
CQ_Analytics.ClientContextMgr.prototype.getCCMToJCR=function(){return CQ_Analytics.ClientContextMgr.ServerStorage.getCCMToJCR()
};
CQ_Analytics.ClientContextMgr.prototype.getName=function(){return this.STORENAME
};
CQ_Analytics.ClientContextMgr.prototype.clear=function(){this.clientcontext=null;
this.clientcontextToServer=null;
this.fireEvent("clear")
};
CQ_Analytics.ClientContextMgr.prototype.getRegisteredStore=function(a){return this.stores&&this.stores[a]?this.stores[a]:null
};
CQ_Analytics.ClientContextMgr.prototype.loadConfig=function(c,autoConfig){var setConfig=function(ccm,config){ccm.config=config;
ccm.isConfigLoaded=true;
ccm.fireEvent("configloaded");
ccm.fireEvent("storesloaded");
ccm.areStoresLoaded=true
};
if(c){setConfig(this,c)
}else{if(!autoConfig){var params={};
params.path=CQ_Analytics.Utils.getPagePath();
params.cq_ck=new Date().valueOf();
var url=this.CONFIG_PATH;
url+="?"+CQ_Analytics.Utils.urlEncode(params);
CQ_Analytics.Utils.load(url,function(data,status,response){var config={};
try{config=eval("config = "+response.responseText)
}catch(error){}setConfig(this,config)
},this)
}else{setConfig(this,{})
}}};
CQ_Analytics.ClientContextMgr.prototype.getConfig=function(){return this.config
};
CQ_Analytics.ClientContextMgr.prototype.getStoreConfig=function(a){if(this.config&&this.config.configs&&this.config.configs[a]&&this.config.configs[a]["store"]){return this.config.configs[a]["store"]
}return{}
};
CQ_Analytics.ClientContextMgr.prototype.getEditConfig=function(a){if(this.config&&this.config.configs&&this.config.configs[a]&&this.config.configs[a]["edit"]){return this.config.configs[a]["edit"]
}return{}
};
CQ_Analytics.ClientContextMgr.prototype.getUIConfig=function(a){if(this.config&&this.config.configs&&this.config.configs[a]&&this.config.configs[a]["ui"]){return this.config.configs[a]["ui"]
}return{}
};
CQ_Analytics.ClientContextMgr.prototype.getInitialData=function(a){if(this.config&&this.config.data&&this.config.data[a]){return this.config.data[a]
}return{}
};
CQ_Analytics.ClientContextMgr.prototype.getStores=function(){return this.stores
};
CQ_Analytics.ClientContextMgr.prototype.onReady=function(b,a){if(b){if(this.areStoresLoaded){b.call(a)
}else{this.addListener("storesloaded",b,a)
}}};
CQ_Analytics.ClientContextMgr=CQ_Analytics.CCM=new CQ_Analytics.ClientContextMgr();
CQ_Analytics.ClickstreamcloudMgr=CQ_Analytics.CCM;
CQ_Analytics.ContextCloudMgr=CQ_Analytics.CCM;
CQ_Analytics.ClientContextMgr.PATH=null;
CQ_Analytics.ClientContextMgr.getClientContextURL=function(a){return CQ_Analytics.ClientContextMgr.PATH+a
};
window.setTimeout(function(){CQ_Analytics.CCM.init()
},1);
CQ_Analytics.Utils.addListener(window,"unload",function(){try{for(var b in CQ_Analytics.ClientContextMgr){delete CQ_Analytics.ClientContextMgr[b]
}CQ_Analytics.ClientContextMgr=null
}catch(a){}CQ_Analytics.CCM=null
})
}if(CQ_Analytics.ClientContextMgr&&!CQ_Analytics.ClientContextMgr.ServerStorage){CQ_Analytics.ClientContextMgr.ServerStorage=function(){this.posting=false;
this.initialized=false
};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_MODE_PAGELOAD=1;
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_MODE_TIMER=2;
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_MODE_DATAUPDATE=4;
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_TIMER=600;
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_PROCESS_TIMER=60;
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_MODE=6;
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.POST_PATH="/var/statistics/";
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.init=function(){if(this.isMode(CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE_TIMER)){var a=this;
var b=function(){a.timer=window.setInterval(function(){try{var d=parseInt(a.data.lastPost);
var f=false;
if(isNaN(d)){f=true
}else{var e=new Date().getTime();
if(e>d+CQ_Analytics.ClientContextMgr.ServerStorage.POST_TIMER*1000){f=true
}}}catch(c){}if(f){a.post()
}},CQ_Analytics.ClientContextMgr.ServerStorage.POST_PROCESS_TIMER*1000)
};
b.call(this)
}this.initialized=true
};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.isMode=function(a){return(CQ_Analytics.CCM.POST_MODE&a)>0
};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.handleStoreRegistration=function(a){if(!this.initialized){this.init()
}if(this.isMode(CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE_DATAUPDATE)){a.addListener("persist",function(){CQ_Analytics.ClientContextMgr.ServerStorage.post(a)
})
}};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.startPosting=function(){this.posting=true
};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.stopPosting=function(){this.posting=false
};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.post=function(d,f){if(this.posting||f){try{var g=this.getCCMToJCR(d);
var e=CQ_Analytics.Utils.getTimestamp();
g["./jcr:primaryType"]="nt:unstructured";
g["./sessionId"]=CQ_Analytics.CCM.getSessionId();
var c=this.POST_PATH+"clientcontext/";
if(CQ_Analytics.CCM.isAnonymous()){var a=CQ_Analytics.Utils.insert(CQ_Analytics.CCM.getId(),2,"/");
c+="anonymous/"+a+"/"+e
}else{c+="users/"+CQ_Analytics.CCM.getId()+"/"+e
}CQ_Analytics.Utils.post(c,null,g);
this.lastPost=e
}catch(b){}}};
CQ_Analytics.ClientContextMgr.ServerStorage.prototype.getCCMToJCR=function(g){var c=CQ_Analytics.CCM.get(true);
var e={};
for(var j in c){if(!g||j==g){var a=c[j],b=encodeURIComponent(j);
var f=typeof a;
if(f=="object"){for(var d in a){var h=a[d];
d=d.replace(":","/");
e["./"+j+"/./"+d]=h
}}else{e["./"+j]=a
}}}return e
};
CQ_Analytics.ClientContextMgr.ServerStorage=new CQ_Analytics.ClientContextMgr.ServerStorage();
CQ_Analytics.ClickstreamcloudMgr.POST_MODE_PAGELOAD=CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE_PAGELOAD;
CQ_Analytics.ClickstreamcloudMgr.POST_MODE_TIMER=CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE_TIMER;
CQ_Analytics.ClickstreamcloudMgr.POST_MODE_DATAUPDATE=CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE_DATAUPDATE;
CQ_Analytics.ClickstreamcloudMgr.POST_TIMER=CQ_Analytics.ClientContextMgr.ServerStorage.POST_PROCESS_TIMER;
CQ_Analytics.ClickstreamcloudMgr.POST_PROCESS_TIMER=CQ_Analytics.ClientContextMgr.ServerStorage.POST_PROCESS_TIMER;
CQ_Analytics.ClickstreamcloudMgr.POST_MODE=CQ_Analytics.ClientContextMgr.ServerStorage.POST_MODE;
CQ_Analytics.ClickstreamcloudMgr.POST_PATH=CQ_Analytics.ClientContextMgr.ServerStorage.POST_PATH
}CQ_Analytics.Percentile={};
CQ_Analytics.Percentile.matchesPercentiles=function(b){var d=ClientContext.get("/surferinfo/percentile");
if(!d){d=Math.round(Math.random()*100);
ClientContext.set("/surferinfo/percentile",d)
}for(var c=0;
c<b.length;
c++){var a=b[c];
if((a.start<=d)&&(d<a.end)){return true
}}return false
};
if(!CQ_Analytics.SegmentMgr){CQ_Analytics.SegmentMgr=function(){this.SEGMENTATION_ROOT="/etc/segmentation";
this.SEGMENT_SELECTOR=".segment.js";
this.SEGMENTATION_SCRIPT_LOADER="cq-segmentation-loader";
this.segments={};
this.boosts={};
var a=this;
this.fireUpdate=function(){a.fireEvent("update")
};
this.init()
};
CQ_Analytics.SegmentMgr.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.SegmentMgr.prototype.STORENAME="segments";
CQ_Analytics.SegmentMgr.prototype.register=function(a,c,b){this.segments[a]=c;
if(this.rulesCache&&this.rulesCache[a]){this.rulesCache[a]=false
}this.boosts[a]=!isNaN(b)?parseInt(b):0;
this.fireUpdate()
};
CQ_Analytics.SegmentMgr.prototype.resolveArray=function(e,g,b){g=g||CQ_Analytics.ClientContextMgr.get();
if(!(e instanceof Array)){return this.resolve(e,g)
}b=(b=="AND"?"AND":"OR");
var a=(b=="AND");
for(var d=0;
d<e.length;
d++){var f=e[d];
var c=this.resolve(f,g);
if(b=="AND"){if(c!==true){return c
}}else{if(c===true){return true
}}}return a
};
CQ_Analytics.SegmentMgr.prototype.resolve=function(segmentPath,clientcontext){clientcontext=clientcontext||CQ_Analytics.ClientContextMgr.get();
if(!segmentPath){return false
}if(segmentPath instanceof Array){return this.resolveArray(segmentPath,clientcontext)
}if(segmentPath.indexOf(this.SEGMENTATION_ROOT)!=0){return false
}if(segmentPath==this.SEGMENTATION_ROOT){return true
}if(!this.segments[segmentPath]){return true
}var parent=segmentPath.substring(0,segmentPath.lastIndexOf("/"));
if(parent.indexOf(this.SEGMENTATION_ROOT)==0){var pres=this.resolve(parent,clientcontext);
if(pres!==true){return pres
}}var rules="function(clientcontext, contextcloud, clickstreamcloud) { return true ";
rules+=" && ( "+this.segments[segmentPath]+" ) ";
rules+=";}";
var res=true;
try{var f=null;
this.rulesCache=this.rulesCache||{};
if(this.rulesCache[segmentPath]){f=this.rulesCache[segmentPath]
}else{eval("f = "+rules+"");
this.rulesCache[segmentPath]=f
}var e=(f==null||f(clientcontext,clientcontext,clientcontext));
res=res&&(e===true)
}catch(error){return"Unresolved - Error while evaluating segment "+segmentPath+" : "+error.message
}return res
};
CQ_Analytics.SegmentMgr.prototype.getResolved=function(c){c=c||CQ_Analytics.ClientContextMgr.get();
var a=new Array();
for(var b in this.segments){if(this.resolve(b,c)===true){a.push(b)
}}return a
};
CQ_Analytics.SegmentMgr.prototype.getMaxBoost=function(e,g){if(!(e instanceof Array)){return this.getBoost(e)
}var c=0;
for(var d=0;
d<e.length;
d++){var f=e[d];
if(this.resolve(f,g)===true){var a=this.boosts[f]||0;
if(a>c){c=a
}}}return c
};
CQ_Analytics.SegmentMgr.prototype.getBoost=function(a){if(!(a instanceof Array)){a=[a]
}return this.boosts[a]||0
};
CQ_Analytics.SegmentMgr.prototype.reload=function(path){var url=path;
if(!url){url=this.SEGMENTATION_ROOT
}if(url){if(url.indexOf(this.SEGMENT_SELECTOR)==-1){url+=this.SEGMENT_SELECTOR
}try{CQ_Analytics.Utils.load(url,function(config,status,response){if(response&&response.responseText){eval(response.responseText)
}},this);
var response=CQ.HTTP.get(scripts[i].src)
}catch(err){}}};
CQ_Analytics.SegmentMgr.prototype.getSessionStore=function(){return this
};
CQ_Analytics.SegmentMgr.prototype.getProperty=function(a){return a
};
CQ_Analytics.SegmentMgr.prototype.getLink=function(a){return a+".html"
};
CQ_Analytics.SegmentMgr.prototype.getLabel=function(c){if(c){var b=c;
var a=b.lastIndexOf("/");
if(a!=-1){b=b.substring(a+1,b.length)
}var d=this.resolve(c);
if(d===true){return b
}else{if(d!==true){return'<span class="invalid" title="'+d+'" alt="'+d+'">'+b+"</span>"
}}}return c
};
CQ_Analytics.SegmentMgr.prototype.getPropertyNames=function(){return this.getResolved()
};
CQ_Analytics.SegmentMgr=new CQ_Analytics.SegmentMgr();
CQ_Analytics.SegmentMgr.loadSegments=function(a){CQ_Analytics.SegmentMgr.areSegmentsLoaded=false;
CQ.shared.HTTP.get(CQ.shared.HTTP.externalize(a+".segment.js"));
CQ_Analytics.SegmentMgr.areSegmentsLoaded=true;
this.fireEvent("segmentsload")
};
CQ_Analytics.SegmentMgr.renderer=function(a,c){if(a&&a.STORENAME==CQ_Analytics.SegmentMgr.STORENAME){var e=a.getPropertyNames();
var f=[];
f.push("<div>");
for(var d=0;
d<e.length;
d++){var b=e[d];
f.push('<span title="'+a.getProperty(b)+'" ><a href="'+CQ.shared.HTTP.externalize(a.getLink(b))+'"  title="'+a.getProperty(b)+'" >'+a.getLabel(b)+"</a></span>")
}f.push("</div>");
$CQ("#"+c).children().remove();
$CQ("#"+c).append(f.join(""))
}};
CQ_Analytics.ClientContextMgr.addListener("storeupdate",CQ_Analytics.SegmentMgr.fireUpdate);
CQ_Analytics.Utils.addListener(window,"unload",function(){try{for(var b in CQ_Analytics.SegmentMgr){delete CQ_Analytics.SegmentMgr[b]
}}catch(a){}CQ_Analytics.SegmentMgr=null
})
}if(!CQ_Analytics.StrategyMgr){CQ_Analytics.StrategyMgr=function(){this.strategies={}
};
CQ_Analytics.StrategyMgr.prototype={};
CQ_Analytics.StrategyMgr.prototype.isRegistered=function(a){return !!this.strategies[a]
};
CQ_Analytics.StrategyMgr.prototype.register=function(b,a){if(typeof a=="function"){this.strategies[b]=a
}};
CQ_Analytics.StrategyMgr.prototype.choose=function(b,a){if(a.length==1){return a[0]
}if(this.strategies[b]){return this.strategies[b].call(this,a)
}return null
};
CQ_Analytics.StrategyMgr=new CQ_Analytics.StrategyMgr()
}CQ_Analytics.StrategyMgr.register("clickstream-score",function(h){if(h.length==1){return h[0]
}var a=[];
if(CQ_Analytics.TagCloudMgr){var m=CQ_Analytics.TagCloudMgr.getTags();
m=m||{};
var l=-1;
for(var e=0;
e<h.length;
e++){var g=0;
var k=h[e].tags;
if(k){for(var d=0;
d<k.length;
d++){var f=k[d].tagID;
g+=parseInt(m[f])||0
}}if(g==l){a.push(h[e])
}else{if(g>l){a=[];
a.push(h[e]);
l=g
}}}}else{a=h
}if(a.length==1){return a[0]
}var b=null;
if(CQ_Analytics.PageDataMgr){b=CQ_Analytics.PageDataMgr.getProperty("random")
}if(!b){b=window.CQ_StrategyRandom
}if(!b){b=window.CQ_StrategyRandom=Math.random()
}if(parseFloat(b)>1){b=1/b
}if(parseFloat(b)==1){b=0
}var c=Math.floor(b*a.length);
return a[c]
});
CQ_Analytics.StrategyMgr.register("first",function(a){return a[0]
});
CQ_Analytics.StrategyMgr.register("random",function(c){var a=null;
if(CQ_Analytics.PageDataMgr){a=CQ_Analytics.PageDataMgr.getProperty("random")
}if(!a){a=window.CQ_StrategyRandom
}if(!a){a=window.CQ_StrategyRandom=Math.random()
}if(parseFloat(a)>1){a=1/a
}if(parseFloat(a)==1){a=0
}var b=Math.floor(a*c.length);
return c[b]
});
if(!CQ_Analytics.PageDataMgr){CQ_Analytics.PageDataMgr=function(){};
CQ_Analytics.PageDataMgr.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.PageDataMgr.prototype.STORENAME="pagedata";
CQ_Analytics.PageDataMgr.prototype.FORCE_EXPERIENCE_COOKIE="cq-forceexperience";
CQ_Analytics.PageDataMgr.prototype.init=function(){this.data={};
for(var a in this.initProperty){this.data[a]=this.initProperty[a]
}this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.PageDataMgr.prototype.getLabel=function(a){return a
};
CQ_Analytics.PageDataMgr.prototype.getLink=function(a){return""
};
CQ_Analytics.PageDataMgr.prototype.setExperience=function(a){CQ.shared.HTTP.setCookie(CQ_Analytics.PageDataMgr.FORCE_EXPERIENCE_COOKIE,a,"/")
};
CQ_Analytics.PageDataMgr.prototype.getExperience=function(){return CQ.shared.HTTP.getCookie(CQ_Analytics.PageDataMgr.FORCE_EXPERIENCE_COOKIE,"/")
};
CQ_Analytics.PageDataMgr.prototype.clearExperience=function(){CQ.shared.HTTP.clearCookie(CQ_Analytics.PageDataMgr.FORCE_EXPERIENCE_COOKIE,"/")
};
CQ_Analytics.PageDataMgr=new CQ_Analytics.PageDataMgr();
CQ_Analytics.CCM.addListener("configloaded",function(){this.loadInitProperties(CQ_Analytics.CCM.getInitialData(this.getName()));
this.init();
CQ_Analytics.CCM.register(this)
},CQ_Analytics.PageDataMgr)
}CQ_Analytics.BrowserInfo=function(){var g=navigator.userAgent.toLowerCase();
var d=function(b){return b.test(g)
};
var f=function(){if(d(/opera/)){return{browserFamily:"Opera",browserVersion:""}
}if(d(/chrome/)){return{browserFamily:"Chrome",browserVersion:""}
}if(d(/safari/)){if(d(/applewebkit\/4/)){return{browserFamily:"Safari",browserVersion:"2"}
}if(d(/version\/3/)){return{browserFamily:"Safari",browserVersion:"3"}
}if(d(/version\/4/)){return{browserFamily:"Safari",browserVersion:"4"}
}if(d(/version\/5/)){return{browserFamily:"Safari",browserVersion:"5"}
}if(d(/version\/6/)){return{browserFamily:"Safari",browserVersion:"6"}
}return{browserFamily:"Safari",browserVersion:"7 or higher"}
}if(d(/webkit/)){return{browserFamily:"WebKit",browserVersion:""}
}if(d(/msie/)){if(d(/msie 6/)){return{browserFamily:"IE",browserVersion:"6"}
}if(d(/msie 7/)){return{browserFamily:"IE",browserVersion:"7"}
}if(d(/msie 8/)){return{browserFamily:"IE",browserVersion:"8"}
}if(d(/msie 9/)){return{browserFamily:"IE",browserVersion:"9"}
}if(d(/msie 10/)){return{browserFamily:"IE",browserVersion:"10"}
}return{browserFamily:"IE",browserVersion:"11 or higher"}
}if(d(/gecko/)){if(d(/rv:1\.8/)){return{browserFamily:"Firefox",browserVersion:"2"}
}if(d(/rv:1\.9/)){return{browserFamily:"Firefox",browserVersion:"3"}
}if(d(/rv:2.0/)){return{browserFamily:"Firefox",browserVersion:"4"}
}if(d(/rv:5./)){return{browserFamily:"Firefox",browserVersion:"5"}
}if(d(/rv:6./)){return{browserFamily:"Firefox",browserVersion:"6"}
}if(d(/rv:7./)){return{browserFamily:"Firefox",browserVersion:"7"}
}if(d(/rv:8./)){return{browserFamily:"Firefox",browserVersion:"8"}
}if(d(/rv:9./)){return{browserFamily:"Firefox",browserVersion:"9"}
}return{browserFamily:"Firefox",browserVersion:"10 or higher"}
}var b=d(/adobeair/);
if(b){return{browserFamily:"Adobe AIR",browserVersion:""}
}return{browserFamily:"Unresolved",browserVersion:"Unresolved"}
};
var e=function(){if(d(/windows 98|win98/)){return"Windows 98"
}if(d(/windows nt 5.0|windows 2000/)){return"Windows 2000"
}if(d(/windows nt 5.1|windows xp/)){return"Windows XP"
}if(d(/windows nt 5.2/)){return"Windows Server 2003"
}if(d(/windows nt 6.0/)){return"Windows Vista"
}if(d(/windows nt 6.1/)){return"Windows 7"
}if(d(/windows nt 4.0|winnt4.0|winnt/)){return"Windows NT 4.0"
}if(d(/windows me/)){return"Windows ME"
}if(d(/mac os x/)){if(d(/ipad/)||d(/iphone/)){return"iOS"
}return"Mac OS X"
}if(d(/macintosh|mac os/)){return"Mac OS"
}if(d(/android/)){return"Android"
}if(d(/linux/)){return"Linux"
}return"Unresolved"
};
var c=function(){if(d(/ipad/)){return"iPad"
}if(d(/iphone/)){return"iPhone"
}if(d(/mobi/)){return"Mobile"
}return"Desktop"
};
var a=f.call();
this.browserFamily=a.browserFamily;
this.browserVersion=a.browserVersion;
this.OSName=e.call();
this.deviceType=c.call();
this.ua=g;
var h=/^https/i.test(window.location.protocol);
this.screenResolution=screen.width+"x"+screen.height
};
CQ_Analytics.BrowserInfo.prototype={getBrowserName:function(){return this.browserFamily+" "+this.browserVersion
},getBrowserFamily:function(){return this.browserFamily
},getBrowserVersion:function(){return this.browserVersion
},getOSName:function(){return this.OSName
},getScreenResolution:function(){return this.screenResolution
},getDeviceType:function(){return this.deviceType
},getUserAgent:function(){return this.ua
},isMobile:function(a){if(!a){a=this.getDeviceType()
}a=a?a.toLowerCase():"desktop";
return a!="desktop"
},isIE:function(a){return this.getBrowserFamily()=="IE"&&(a?this.getBrowserVersion()==a:true)
},isIE6:function(){return this.isIE("6")
},isIE7:function(){return this.isIE("7")
},isIE8:function(){return this.isIE("8")
},isIE9:function(){return this.isIE("9")
}};
CQ_Analytics.BrowserInfoInstance=new CQ_Analytics.BrowserInfo();
if(!CQ_Analytics.MousePositionMgr){CQ_Analytics.MousePositionMgr=function(){this.position={x:0,y:0};
this.getPageX=function(c){var b=c.pageX;
if(!b&&0!==b){b=c.clientX||0
}return b
};
this.getPageY=function(b){var c=b.pageY;
if(!c&&0!==c){c=b.clientY||0
}return c
};
var a=this;
this.timer=null;
$CQ(document).bind("mousemove",function(h,g,f,l){var j=h||window.event;
if(j){if(!a.timer){var d=a.getPageX(j);
var k=a.getPageY(j);
a.timer=setTimeout(function(){a.setPosition(d,k);
a.timer=null
},500)
}}});
this.init()
};
CQ_Analytics.MousePositionMgr.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.MousePositionMgr.prototype.STORENAME="mouseposition";
CQ_Analytics.MousePositionMgr.prototype.setPosition=function(a,b){this.position.x=a;
this.position.y=b;
this.fireEvent("update")
};
CQ_Analytics.MousePositionMgr.prototype.getProperty=function(a){return this.position[a]
};
CQ_Analytics.MousePositionMgr.prototype.getLabel=function(a){return a
};
CQ_Analytics.MousePositionMgr.prototype.getLink=function(a){return""
};
CQ_Analytics.MousePositionMgr.prototype.getPropertyNames=function(){var a=new Array();
for(var b in this.position){a.push(b)
}return a
};
CQ_Analytics.MousePositionMgr.prototype.getSessionStore=function(){return this
};
CQ_Analytics.MousePositionMgr.prototype.getData=function(a){return this.position
};
CQ_Analytics.MousePositionMgr.prototype.clear=function(){this.position={}
};
CQ_Analytics.MousePositionMgr=new CQ_Analytics.MousePositionMgr();
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.CCM.register(this)
},CQ_Analytics.MousePositionMgr)
}if(!CQ_Analytics.EventDataMgr){CQ_Analytics.EventDataMgr=function(){};
CQ_Analytics.EventDataMgr.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.EventDataMgr.prototype.STORENAME="eventdata";
CQ_Analytics.EventDataMgr.prototype.init=function(){this.data={};
for(var a in this.initProperty){this.data[a]=this.initProperty[a]
}this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.EventDataMgr.prototype.getLabel=function(a){return a
};
CQ_Analytics.EventDataMgr.prototype.getLink=function(a){return""
};
CQ_Analytics.EventDataMgr=new CQ_Analytics.EventDataMgr();
CQ_Analytics.CCM.addListener("configloaded",function(){this.loadInitProperties(CQ_Analytics.CCM.getInitialData(this.getName()));
this.init();
CQ_Analytics.CCM.register(this)
},CQ_Analytics.EventDataMgr)
}if(!window.CQ_Context){window.CQ_Context=function(){};
window.CQ_Context.prototype=new CQ_Analytics.Observable();
window.CQ_Context.prototype.getProfile=function(){return(function(){return{getUserId:function(){return this.getProperty("authorizableId")
},getDisplayName:function(){var a=this.getProperty("formattedName");
if(a){return a
}a=this.getProperty("displayName");
if(a){return a
}return this.getUserId()
},getFirstname:function(){return this.getProperty("givenName")
},getLastname:function(){return this.getProperty("familyName")
},getEmail:function(){return this.getProperty("email")
},getProperty:function(a){if(CQ_Analytics&&CQ_Analytics.ProfileDataMgr){return CQ_Analytics.ProfileDataMgr.getProperty(a)
}return""
},getProperties:function(){if(CQ_Analytics&&CQ_Analytics.ProfileDataMgr){return CQ_Analytics.ProfileDataMgr.getData()
}return{}
},getAvatar:function(){return this.getProperty("avatar")
},onUpdate:function(a,b){if(a&&CQ_Analytics&&CQ_Analytics.ProfileDataMgr){CQ_Analytics.ProfileDataMgr.addListener("update",a,b||this)
}}}
})()
};
window.CQ_Context=new window.CQ_Context()
}CQ_Analytics.Engine=function(){window.CQ_trackTeasersStats=true;
function l(){return !!(window.CQ&&CQ.WCM&&CQ.WCM.isEditMode())
}function a(){return !!(window.CQ&&CQ.WCM&&CQ.WCM.isPreviewMode())
}function e(p){var n=$CQ.Deferred();
var o=CQ.WCM.getEditable(p);
if(o){n.resolve(o)
}else{CQ.WCM.onEditableReady(p,function(q){n.resolve(q)
})
}return n.promise()
}function h(o,n){if(!CQ_Analytics.loadedTeasersStack){CQ_Analytics.loadedTeasersStack=[];
$CQ(window).unload(function(){try{var p=CQ_Analytics.loadedTeasersStack;
if(p){delete CQ_Analytics.loadedTeasersStack;
var r=n;
for(var s=0;
s<p.length;
s++){r=CQ.shared.HTTP.addParameter(r,"path",p[s])
}CQ.shared.HTTP.get(r,function(){})
}}catch(q){}})
}CQ_Analytics.loadedTeasersStack.push(o.path)
}function f(t,s,p){var r="",u;
function n(z,y,A,x){return'<a href="'+y+'" class="cq-teaser-segment-link"><img src="'+A+'" class="cq-teaser-decision-thumbnail '+(x?"cq-teaser-decision-match":"cq-teaser-decision-nomatch")+'"></a>'+z+"<br>"
}for(var q=0;
q<t.length;
q++){var o=t[q];
var w=CQ.shared.HTTP.externalize(o.teaser.path+".html");
if(o.hasOwnProperty("boost")){if(o.noSegment){u=CQ.I18n.getMessage("Experience: {0} - match (no segments, boost = {1})",[o.teaser.title,o.boost])
}else{u=CQ.I18n.getMessage("Experience: {0} - match (boost = {1})",[o.teaser.title,o.boost])
}var v=n(u,w,o.teaser.thumbnail,true);
if(s===o.teaser.path){r+="<b>"+v+"</b>"
}else{r+=v
}}else{if(o.unknownSegment){u=CQ.I18n.getMessage("Experience: {0} - no match (unknown segment)",[o.teaser.title])
}else{u=CQ.I18n.getMessage("Experience: {0} - no match",[o.teaser.title])
}r+=n(u,w,o.teaser.thumbnail,false)
}}r+="<br>";
if(p){r+=CQ.I18n.getMessage("Strategy <b>{0}</b> selected current teaser.",p)
}else{r+=CQ.I18n.getMessage("No strategy configured, used the first match.")
}r+="<br>";
return r
}function m(p,o,n,q){p.done(function(r){if(r.teaserToolTip){r.teaserToolTip.hide();
r.teaserToolTip.remove()
}r.teaserToolTip=new CQ.Ext.Tip({html:f(o,n,q),title:CQ.I18n.getMessage("Selection decision"),width:450,autoHide:false,closable:true,height:300,floating:true,autoHeight:false,bodyStyle:"overflow-y: scroll;"});
r.on(CQ.wcm.EditRollover.EVENT_SHOW_HIGHTLIGHT,function(s){if(!this.teaserInfoButton){this.teaserInfoButton=CQ.Ext.DomHelper.append("CQ",{tag:"div",cls:"x-tool x-tool-help cq-teaser-tooltip-tool"},true);
this.teaserInfoButton.position("absolute");
this.teaserInfoButton.on("click",function(){var t=this.getXY();
r.teaserToolTip.setPosition(t[0]-460,t[1]-100);
r.teaserToolTip.show()
})
}this.teaserInfoButton.anchorTo(s.frameBottom.getEl(),"tr",[-26,-15]);
this.teaserInfoButton.show()
});
r.on(CQ.wcm.EditRollover.EVENT_HIDE_HIGHTLIGHT,function(s){if(this.teaserInfoButton){this.teaserInfoButton.hide()
}})
})
}function k(n){n.done(function(o){if(o.teaserToolTip){o.teaserToolTip.hide();
o.teaserToolTip.remove();
o.teaserToolTip=null
}})
}function c(w,v){var r=[];
var t=0;
for(var p=0;
p<w.length;
p++){var o=w[p],s=o.segments;
var n;
if(v){n={teaser:o};
v.push(n)
}var q=!s||s.length===0;
if(q&&n){n.noSegment=true
}if(!q&&CQ_Analytics.SegmentMgr.resolve(s)){q=true;
if(s&&s.length>0){if(!CQ_Analytics.SegmentMgr.segments[s[0]]){q=false;
if(n){n.unknownSegment=true
}}}}if(q){var u=CQ_Analytics.SegmentMgr.getMaxBoost(s);
if(n){n.boost=u
}if(u===t){r.push(o)
}else{if(u>t){r=[];
r.push(o);
t=u
}}}}return r
}var b={};
function g(n,o){CQ_Analytics.Engine.stopTeaserLoader(n);
b[n]=o
}function d(p,o){if(!p||!o){return false
}if(p.length!==o.length){return false
}p.sort();
o.sort();
for(var n=0;
n<p.length;
n++){if(p[n]!==o[n]){return false
}}return true
}var j={};
return{stopTeaserLoader:function(o){var n=o.path||o;
if(!n){return
}var p=b[n];
if(p){CQ_Analytics.SegmentMgr.removeListener("update",p);
delete b[n]
}},resolveTeaser:function(q,p,n){var o=c(q,n);
if(o.length===0){return null
}return CQ_Analytics.StrategyMgr.choose(p,o)||o[0]
},loadTeaser:function(n){var q,p;
if(l()){p=CQ.WCM.getEditablePathFromDOM(document.getElementById(n.targetID));
q=e(p)
}var r=ClientContext.get("campaign");
if(r&&r.isCampaignSelected()&&!a){return
}var o=function(){var u=CQ_Analytics.PageDataMgr.getExperience();
if(u){CQ_Analytics.PageDataMgr.clearExperience();
var v="/_jcr_content/par.html";
if(l()){v+="?wcmmode=disabled"
}CQ_Analytics.Utils.loadElement(u+v,n.targetID);
return
}var t=null;
var s=function(){var J=null;
if(l()){J=[]
}var F=ClientContext.get("campaign"),M;
if(F&&F.isCampaignSelected()){var G=F.data.path,I=F.data["recipe/path"],x=F.data.campaigns,y={},L=n.teasers,H;
for(var D=0;
D<L.length;
D++){if(L[D].name==="default"){H=L[D]
}}if(j[n.targetID]&&j[n.targetID][I]){M=j[n.targetID][I]
}else{if(I==="DEFAULT"){M=H
}else{for(var D=0;
D<x.length;
D++){var A=x[D];
if(x[D]["path"]===G){var K=A.experiences;
for(var C=0;
C<K.length;
C++){if(K[C]["path"]===I){if(K[C].hasOwnProperty("segments")){var E=K[C]["segments"];
for(var z=0;
z<E.length;
z++){y[E[z]]=y
}}}}}}for(var D=0;
D<L.length;
D++){var B=L[D];
if(B.hasOwnProperty("segments")&&(B.segments.length===E.length)){if(d(E,B.segments)){M=L[D];
break
}}}}if(!M){M=H
}j[n.targetID]={experience:M}
}}else{M=CQ_Analytics.Engine.resolveTeaser(n.teasers,n.strategy,J)
}if(M){if(!t||t.path!==M.path){t=M;
var w=M.url;
if(l()){w+="?wcmmode=disabled"
}CQ_Analytics.Utils.loadTeaserElement(w,n.targetID);
if(window.CQ_trackTeasersStats&&n.trackingURL){h(M,n.trackingURL)
}if(q){m(q,J,t.path,n.strategy)
}}}else{if(q){k(q)
}CQ_Analytics.Utils.clearElement(n.targetID);
t=null
}};
s.call();
if(CQ_Analytics.SegmentMgr){if(p){g(p,s)
}CQ_Analytics.SegmentMgr.addListener("update",s)
}if(CQ_Analytics.CampaignMgr){CQ_Analytics.CampaignMgr.addListener("update",s)
}};
if(CQ_Analytics.CCM.areStoresInitialized){o.call(this)
}else{CQ_Analytics.CCM.addListener("storesinitialize",o)
}}}
}();
window.CQ_trackTeasersStats=true;
function initializeTeaserLoader(b,f,g,e,a,d){e=!!(CQ.Ext&&(e=="true"||e===true));
if(window.CQ_Analytics){var c=function(){var n="/_jcr_content/par.html";
if(e){n+="?wcmmode=disabled"
}var l=CQ_Analytics.PageDataMgr.getExperience();
if(l){CQ_Analytics.PageDataMgr.clearExperience();
CQ_Analytics.Utils.loadElement(l+n,g);
return
}var m=function(q){var s="";
var w=new Array();
if(CQ_Analytics.SegmentMgr){var u=0;
for(var r=0;
r<b.length;
r++){var t=CQ.shared.HTTP.externalize(b[r].path+".html");
if(!b[r]["segments"]||b[r]["segments"].length==0||CQ_Analytics.SegmentMgr.resolveArray(b[r]["segments"])===true){var o=CQ_Analytics.SegmentMgr.getMaxBoost(b[r]["segments"]);
var v=[b[r]["title"],o,b[r].thumbnail,t];
if(q==b[r].path){s+=CQ.I18n.getMessage('<b><a href="{3}" class="cq-teaser-segment-link"><img src="{2}" class="cq-teaser-decision-thumbnail cq-teaser-decision-match"></a>Experience: {0} - match ( boost = {1} )</b><br>',v)
}else{s+=CQ.I18n.getMessage('<a href="{3}" class="cq-teaser-segment-link"><img src="{2}" class="cq-teaser-decision-thumbnail cq-teaser-decision-match"></a>Experience: {0} - match ( boost = {1} )<br>',v)
}if(o==u){w.push(b[r])
}else{if(o>u){w=new Array();
w.push(b[r]);
u=o
}}}else{var v=[b[r]["title"],b[r].thumbnail,t];
s+=CQ.I18n.getMessage('<a href="{2}" class="cq-teaser-segment-link"><img src="{1}" class="cq-teaser-decision-thumbnail cq-teaser-decision-nomatch"></a>Experience: {0} - no match<br>',v)
}}}s+=CQ.I18n.getMessage("<br>Strategy <b>{0}</b> selected current teaser.<br>",f);
return s
};
var k=null;
var h=null;
var j=function(){var v=new Array();
if(CQ_Analytics.SegmentMgr){var t=0;
for(var r=0;
r<b.length;
r++){if(!b[r]["segments"]||b[r]["segments"].length==0||CQ_Analytics.SegmentMgr.resolveArray(b[r]["segments"])===true){var o=CQ_Analytics.SegmentMgr.getMaxBoost(b[r]["segments"]);
if(o==t){v.push(b[r])
}else{if(o>t){v=new Array();
v.push(b[r]);
t=o
}}}}}if(v.length>0){var u=v[0];
if(CQ_Analytics.StrategyMgr){var s=CQ_Analytics.StrategyMgr.choose(f,v);
if(s!=null){u=s
}}if(!k||k.path!=u.path){k=u;
var p=u.path+n;
p=CQ.shared.HTTP.addSelectors(p,CQ.shared.HTTP.getSelectors(window.location.href));
CQ_Analytics.Utils.loadTeaserElement(p,g);
if(window.CQ_trackTeasersStats&&a){if(!CQ_Analytics.loadedTeasersStack){CQ_Analytics.loadedTeasersStack=[];
$CQ(window).unload(function(){try{var w=CQ_Analytics.loadedTeasersStack;
if(w){delete CQ_Analytics.loadedTeasersStack;
var y=a;
for(var z=0;
z<w.length;
z++){y=CQ.shared.HTTP.addParameter(y,"path",w[z])
}CQ.shared.HTTP.get(y,function(){})
}}catch(x){}})
}CQ_Analytics.loadedTeasersStack.push(u.path)
}if(e){if(d){var q=CQ.WCM.getEditable(d);
if(q){if(q&&q.teaserToolTip){q.teaserToolTip.hide();
q.teaserToolTip.remove();
q.teaserToolTip=null
}else{q.on(CQ.wcm.EditRollover.EVENT_SHOW_HIGHTLIGHT,function(w){if(!this.teaserInfoButton){this.teaserInfoButton=CQ.Ext.DomHelper.append("CQ",{tag:"div",cls:"x-tool x-tool-help cq-teaser-tooltip-tool"},true);
this.teaserInfoButton.position("absolute");
this.teaserInfoButton.on("click",function(){if(!q.teaserToolTip){q.teaserToolTip=new CQ.Ext.Tip({html:m(k.path),title:CQ.I18n.getMessage("Selection decision"),width:450,autoHide:false,closable:true,height:300,floating:true,autoHeight:false,bodyStyle:"overflow-y: scroll;"})
}var x=this.getXY();
q.teaserToolTip.setPosition(x[0]-460,x[1]-100);
q.teaserToolTip.show()
})
}this.teaserInfoButton.anchorTo(w.frameBottom.getEl(),"tr",[-26,-15]);
this.teaserInfoButton.show()
});
q.on(CQ.wcm.EditRollover.EVENT_HIDE_HIGHTLIGHT,function(w){if(this.teaserInfoButton){this.teaserInfoButton.hide()
}})
}}}}}}else{if(e){var q=CQ.WCM.getEditable(d);
if(q&&q.teaserToolTip){q.teaserToolTip.hide();
q.teaserToolTip.remove();
q.teaserToolTip=null
}}CQ_Analytics.Utils.clearElement(g);
k=null
}};
j.call();
if(CQ_Analytics.SegmentMgr){CQ_Analytics.SegmentMgr.addListener("update",j)
}};
if(CQ_Analytics.CCM.areStoresInitialized){c.call(this)
}else{CQ_Analytics.CCM.addListener("storesinitialize",c)
}}}window.CQ_trackLandingPagesStats=true;
function initializeLandingPageLoader(f,d,e,c,a){c=CQ.Ext&&(c=="true"||c===true);
if(window.CQ_Analytics){var g=".html";
var b=function(){var j=null;
var h=function(){var l=new Array();
if(CQ_Analytics.SegmentMgr){var s=0;
for(var p=0;
p<f.length;
p++){if(!f[p]["segments"]||f[p]["segments"].length==0||CQ_Analytics.SegmentMgr.resolveArray(f[p]["segments"])===true){var v=CQ_Analytics.SegmentMgr.getMaxBoost(f[p]["segments"]);
if(v==s){l.push(f[p])
}else{if(v>s){l=new Array();
l.push(f[p]);
s=v
}}}}}if(l.length>0){var o=l[0];
if(CQ_Analytics.StrategyMgr){var t=CQ_Analytics.StrategyMgr.choose(d,l);
if(t!=null){o=t
}}if(!j||j.path!=o.path){var x=j;
j=o;
var n=CQ.shared.HTTP.get(o.path+g);
var y=n.responseText;
var q=function(K,A){var H="";
if(K&&K.indexOf('id="'+A+'"')!=-1){var G=K.indexOf('id="'+A+'"');
var B=K.substring(0,G).lastIndexOf("<div");
var F=K.substring(B);
var J=F.split(new RegExp("<div","ig"));
var D=0;
for(var E=0;
E<J.length;
E++){D++;
var I=J[E].split(new RegExp("</div","ig"));
for(var C=1;
C<I.length;
C++){D--;
if(D==1){var z=J[E].lastIndexOf("</div")+6;
z=F.indexOf(J[E])+z;
F=F.substring(0,z);
F=F.substring(F.indexOf(">")+1,F.lastIndexOf("</div"));
return F
}}}}return""
};
y=q(y,e);
var u=$CQ("#"+e)[0];
var r=function(B,z){if(c){var C=CQ.WCM.getEditables();
for(var D in C){var A=C[D];
if(!B||A.path.indexOf(B)!=-1){A.hide();
A.remove()
}}}};
var m=document.createElement("div");
m.innerHTML=y;
if(x){$CQ("object",u).parent().fadeOut("slow");
$CQ("img",u).fadeOut("slow");
$CQ(u).slideUp("slow",function(){r(x.path,false);
$CQ(u).children().remove();
var z=u.insertBefore(m,u.firstChild);
$CQ(u).slideDown("slow",function(){if(c){CQ.DOM.executeScripts(CQ.Ext.get(m))
}})
})
}else{var k=u.insertBefore(m,u.firstChild);
$CQ(u).slideDown("slow",function(){if(c){CQ.DOM.executeScripts(CQ.Ext.get(m))
}})
}try{if(window.CQ_trackLandingPagesStats&&a){if(!CQ_Analytics.loadedLandingPagesStack){CQ_Analytics.loadedLandingPagesStack=[];
$CQ(window).unload(function(){try{var C=CQ_Analytics.loadedLandingPagesStack;
if(C){delete CQ_Analytics.loadedLandingPagesStack;
var A=a;
for(var B=0;
B<C.length;
B++){A=CQ.shared.HTTP.addParameter(A,"path",C[B])
}CQ.shared.HTTP.get(A,function(){})
}}catch(z){}})
}CQ_Analytics.loadedLandingPagesStack.push(o.path)
}}catch(w){}}}else{CQ_Analytics.Utils.clearElement(e);
j=null
}};
h.call();
if(CQ_Analytics.SegmentMgr){CQ_Analytics.SegmentMgr.addListener("update",h)
}};
if(CQ_Analytics.ClickstreamcloudMgr){if(CQ_Analytics.ClickstreamcloudMgr.areStoresLoaded){b.call(this)
}else{CQ_Analytics.ClickstreamcloudMgr.addListener("storesloaded",b)
}}}}CQ_Analytics.PersistedJSONStore=function(){};
CQ_Analytics.PersistedJSONStore.prototype=new CQ_Analytics.PersistedSessionStore();
CQ_Analytics.PersistedJSONStore.prototype.STOREKEY="";
CQ_Analytics.PersistedJSONStore.prototype.STORENAME="";
CQ_Analytics.PersistedJSONStore.prototype.init=function(){var a=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
var b=a.get(this.getStoreKey());
if(!b||b==""){this.data={};
for(var c in this.initProperty){this.data[c]=this.initProperty[c]
}}else{this.data=this.parse(b)
}this.persist();
this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.PersistedJSONStore.prototype.clear=function(){var a=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
a.remove(this.getStoreKey());
this.data=null;
this.initProperty={}
};
CQ_Analytics.PersistedJSONStore.prototype.initJSON=function(b,c){if(!c){this.initProperty={}
}var a=function(g,d,f){for(var e in f){if(typeof f[e]=="object"){a(g,d?d+"/"+e:e,f[e])
}else{g[d?d+"/"+e:e]=f[e]
}}};
a(this.initProperty,null,b)
};
CQ_Analytics.PersistedJSONStore.prototype.getJSON=function(){var e=this.getData();
var c={};
for(var g in e){var d=g.split("/");
var f=c;
for(var b=0;
b<d.length;
b++){var a=d[b];
if(b==d.length-1){f[a]=e[g]
}else{f[a]=f[a]||{};
f=f[a]
}}}return c
};
CQ_Analytics.PersistedJSONStore.getInstance=function(a,c){var b=new CQ_Analytics.PersistedJSONStore();
b.STOREKEY=a.toUpperCase();
b.STORENAME=a;
b.initJSON(c);
return b
};
CQ_Analytics.PersistedJSONStore.registerNewInstance=function(a,b){var c=CQ_Analytics.PersistedJSONStore.getInstance(a,b);
c.init();
CQ_Analytics.CCM.register(c);
return c
};
CQ_Analytics.JSONStore=function(){};
CQ_Analytics.JSONStore.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.JSONStore.prototype.STOREKEY="";
CQ_Analytics.JSONStore.prototype.STORENAME="";
CQ_Analytics.JSONStore.prototype.init=function(){this.data={};
for(var a in this.initProperty){this.data[a]=this.initProperty[a]
}this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.JSONStore.prototype.clear=function(){this.data=null;
this.initProperty={}
};
CQ_Analytics.JSONStore.prototype.initJSON=function(b,c){if(!c){this.initProperty={}
}var a=function(g,d,f){for(var e in f){if(typeof f[e]=="object"){a(g,d?d+"/"+e:e,f[e])
}else{g[d?d+"/"+e:e]=f[e]
}}};
a(this.initProperty,null,b)
};
CQ_Analytics.JSONStore.prototype.getJSON=function(){var e=this.getData();
var c={};
for(var g in e){var d=g.split("/");
var f=c;
for(var b=0;
b<d.length;
b++){var a=d[b];
if(b==d.length-1){f[a]=e[g]
}else{f[a]=f[a]||{};
f=f[a]
}}}return c
};
CQ_Analytics.JSONStore.getInstance=function(a,c){var b=new CQ_Analytics.JSONStore();
b.STOREKEY=a.toUpperCase();
b.STORENAME=a;
b.initJSON(c);
return b
};
CQ_Analytics.JSONStore.registerNewInstance=function(a,b){var c=CQ_Analytics.JSONStore.getInstance(a,b);
c.init();
CQ_Analytics.CCM.register(c);
return c
};
CQ_Analytics.PersistedJSONPStore=function(){};
CQ_Analytics.PersistedJSONPStore.prototype=new CQ_Analytics.PersistedJSONStore();
CQ_Analytics.PersistedJSONPStore.prototype.setServiceURL=function(a){this.serviceURL=a
};
CQ_Analytics.PersistedJSONPStore.prototype.getServiceURL=function(){return this.serviceURL
};
CQ_Analytics.PersistedJSONPStore.prototype.load=function(d,a,e){var c=this.getName();
if(!CQ_Analytics.PersistedJSONPStore.JSONPCallbacks[this.getName()]){CQ_Analytics.PersistedJSONPStore.JSONPCallbacks[c]=function(g){var f=CQ_Analytics.CCM.getRegisteredStore(c);
if(f){f.initJSON(g);
if(a){f.initJSON(a,true)
}}if(e){e.call(f)
}}
}if(d){this.setServiceURL(d)
}var b=this.serviceURL;
b=b.replace("${callback}","CQ_Analytics.PersistedJSONPStore.JSONPCallbacks."+c);
$CQ.getScript(b)
};
CQ_Analytics.PersistedJSONPStore.JSONPCallbacks={};
CQ_Analytics.PersistedJSONPStore.getInstance=function(e,f,b,a,d){if(e&&f){try{var g=new CQ_Analytics.PersistedJSONPStore();
g.STOREKEY=e.toUpperCase();
g.STORENAME=e;
if(f){g.setServiceURL(f)
}if(!a){g.load(f,b,d)
}return g
}catch(c){console.log("Cannot create the JSONP store",e,f,c)
}}return null
};
CQ_Analytics.PersistedJSONPStore.registerNewInstance=function(d,e,b,f){if(!e){return null
}if(!d){var a=CQ.shared.HTTP.getSchemeAndAuthority(e);
if(a){if(a.indexOf(".")!=-1){a=a.substring(0,a.lastIndexOf("."));
d=a.substring(a.lastIndexOf(".")+1)
}else{d=a.substring(a.lastIndexOf("/")+1)
}}else{d=e
}}var c=CQ_Analytics.PersistedJSONPStore.getInstance(d,e,b,false,function(){this.init();
this.reset();
if(f){f.call(this)
}});
if(c!=null){CQ_Analytics.CCM.register(c);
return c
}return null
};
CQ_Analytics.JSONPStore=function(){};
CQ_Analytics.JSONPStore.prototype=new CQ_Analytics.JSONStore();
CQ_Analytics.JSONPStore.prototype.setServiceURL=function(a){this.serviceURL=a
};
CQ_Analytics.JSONPStore.prototype.getServiceURL=function(){return this.serviceURL
};
CQ_Analytics.JSONPStore.prototype.load=function(d,a,e){var c=this.getName();
if(!CQ_Analytics.JSONPStore.JSONPCallbacks[this.getName()]){CQ_Analytics.JSONPStore.JSONPCallbacks[c]=function(g){var f=CQ_Analytics.CCM.getRegisteredStore(c);
if(f){f.initJSON(g);
if(a){f.initJSON(a,true)
}}if(e){e.call(f)
}}
}if(d){this.setServiceURL(d)
}var b=this.serviceURL;
b=b.replace("${callback}","CQ_Analytics.JSONPStore.JSONPCallbacks."+c);
$CQ.getScript(b)
};
CQ_Analytics.JSONPStore.JSONPCallbacks={};
CQ_Analytics.JSONPStore.getInstance=function(e,f,b,a,d){if(e){try{var g=new CQ_Analytics.JSONPStore();
g.STOREKEY=e.toUpperCase();
g.STORENAME=e;
if(f){g.setServiceURL(f);
if(!a){g.load(f,b,d)
}}return g
}catch(c){console.log("Cannot create the JSONP store",e,f,c)
}}return null
};
CQ_Analytics.JSONPStore.registerNewInstance=function(d,e,b,f){if(!d&&e){var a=CQ.shared.HTTP.getSchemeAndAuthority(e);
if(a){if(a.indexOf(".")!=-1){a=a.substring(0,a.lastIndexOf("."));
d=a.substring(a.lastIndexOf(".")+1)
}else{d=a.substring(a.lastIndexOf("/")+1);
d=d.replace(new RegExp(":","ig"),"_")
}}else{d=e
}}var c=CQ_Analytics.JSONPStore.getInstance(d,e,b,false,function(){this.init();
this.reset();
if(f){f.call(this)
}});
if(c!=null){CQ_Analytics.CCM.register(c);
return c
}return null
};
CQ_Analytics.storeData=function(e,w){var n=function(p,l){for(var k=0;
k<CQ_Analytics.Sitecatalyst.frameworkMappings.length;
k++){var j=CQ_Analytics.Sitecatalyst.frameworkMappings[k];
if(j[p]===l){return j
}}return null
};
var s=function(j){if(typeof j==="string"){return j.replace(/[,;=\|]/g,"")
}return j
};
for(var v in w){if(v!=="product"){var o=v.indexOf(".");
var r=(o>0)?v.substr(0,o):undefined;
var x=(o>0)?v.substr(o+1):v;
if(r&&CQ_Analytics.StoreRegistry.getStore(r)){e=CQ_Analytics.StoreRegistry.getStore(r)
}e.setProperty(x,w[v])
}else{var m=["category","sku","quantity","price","events","evars"];
var c=e.getProperty("products").split(",");
c=(c[0]=="")?new Array():c;
var w=(w[v] instanceof Array)?w[v]:[w[v]];
for(var h=0;
h<w.length;
h++){var q=w[h];
var b=new Array(6);
for(var u in q){var o=m.indexOf(u);
if(o>-1){if(o<4){b[o]=s(q[u])
}else{var f=[];
for(var t in q[u]){var d=e.getName()+"."+v+"."+u+"."+t;
var g=n("cqVar",d);
if(g){f.push(g.scVar+"="+s(q[u][t]));
var a=e.getProperty("events").split("\u2026");
if(a.indexOf(g.cqVar)<0){a.push(g.cqVar.replace(/.+\./,""));
e.setProperty("events",a.join("\u2026"))
}}}b[o]=f.join("|")
}}}c.push(b.join(";"))
}e.setProperty("products",c.join(","))
}}};
CQ_Analytics.record=function(b){if(b.collect){return[b.event,b.values]
}else{if(b.event){b.options=b.options||{};
try{CQ_Analytics.recordBeforeCallbacks.sort(function(f,e){return f.rank-e.rank
});
for(var d in CQ_Analytics.recordBeforeCallbacks){if(CQ_Analytics.recordBeforeCallbacks[d].func.call(this,b)){return
}}}catch(c){}var a=b.dataMgr||CQ_Analytics.EventDataMgr;
a.reset();
if(typeof b.event=="string"){a.setProperty("events",b.event)
}else{a.setProperty("events",b.event.join("\u2026"))
}if(b.values){CQ_Analytics.storeData(a,b.values)
}try{CQ_Analytics.recordAfterCallbacks.sort(function(f,e){return f.rank-e.rank
});
for(var d in CQ_Analytics.recordAfterCallbacks){if(CQ_Analytics.recordAfterCallbacks[d].func.call(this,b)){return
}}}catch(c){}}}};
CQ_Analytics.recordBeforeCallbacks=[];
CQ_Analytics.recordAfterCallbacks=[];
CQ_Analytics.registerBeforeCallback=function(b,a){CQ_Analytics.recordBeforeCallbacks.push({rank:a,func:b})
};
CQ_Analytics.registerAfterCallback=function(b,a){CQ_Analytics.recordAfterCallbacks.push({rank:a,func:b})
};
if(!CQ_Analytics.ClientContext){CQ_Analytics.ClientContext=new function(){return{get:function(f,c){if(f){if(f.indexOf("/")!=0){f="/"+f
}var d=f.split("/")[1];
var b=f.substring(f.indexOf("/"+d)+d.length+2,f.length);
var a=CQ_Analytics.CCM.getRegisteredStore(d);
if(a){if(b){var e=a.getProperty(b);
if(e&&c){e=CQ_Analytics.Variables.replaceVariables(e)
}return e
}return a
}}return null
},set:function(e,d){if(e){if(e.indexOf("/")!=0){e="/"+e
}var c=e.split("/")[1];
var b=e.substring(e.indexOf("/"+c)+c.length+2,e.length);
var a=CQ_Analytics.CCM.getRegisteredStore(c);
if(a){if(b){a.setProperty(b,d)
}}}},clear:function(){var a=CQ_Analytics.CCM.getStores();
if(a){for(var b in a){if(a[b].clear){a[b].clear()
}}}},reset:function(){var a=CQ_Analytics.CCM.getStores();
if(a){for(var b in a){if(a[b].reset){a[b].reset()
}}}},persist:function(a){CQ_Analytics.ClientContextMgr.ServerStorage.post(a,true)
}}
}();
window.ClientContext=CQ_Analytics.ClientContext;
window.ContextCloud=CQ_Analytics.ClientContext
}if(!CQ_Analytics.ViewedProducts){CQ_Analytics.ViewedProducts=function(){this.data=null;
this.MAX_COUNT=20
};
CQ_Analytics.ViewedProducts.prototype=new CQ_Analytics.PersistedSessionStore();
CQ_Analytics.ViewedProducts.prototype.STOREKEY="VIEWEDPRODUCTS";
CQ_Analytics.ViewedProducts.prototype.STORENAME="viewedproducts";
CQ_Analytics.ViewedProducts.prototype.record=function(d,e,c,b){if(!this.data){this.init()
}for(var a=0;
a<this.data.length;
a++){if(this.data[a].path==d){this.data.splice(a,1);
break
}}if(this.data.length==this.MAX_COUNT){this.data.shift()
}this.data.push({path:d,title:e,image:c,price:b});
this.persist();
this.fireEvent("update")
};
CQ_Analytics.ViewedProducts.prototype.mostRecent=function(){if(!this.data){this.init()
}if(this.data.length>0){return this.data[this.data.length-1]
}else{return null
}};
CQ_Analytics.ViewedProducts.prototype.mostRecentNotInCart=function(){if(!this.data){this.init()
}if(!CQ_Analytics.CartMgr){return this.mostRecent()
}for(var a=this.data.length-1;
a>=0;
a--){var b=this.data[a];
if(!CQ_Analytics.CartHelper.containsProduct(CQ_Analytics.CartMgr.getData(),b.path,1)){return b
}}return null
};
CQ_Analytics.ViewedProducts.prototype.recent=function(e,b){var a=[];
if(!this.data){this.init()
}if(!CQ_Analytics.CartMgr){b=false
}for(var c=this.data.length-1;
c>=0&&e>0;
c--){var d=this.data[c];
if(b&&CQ_Analytics.CartHelper.containsProduct(CQ_Analytics.CartMgr.getData(),d.path,1)){continue
}a.push(d);
e--
}return a
};
CQ_Analytics.ViewedProducts.prototype.getData=function(a){if(!this.data){this.init()
}return this.data
};
CQ_Analytics.ViewedProducts.prototype.init=function(){var b=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
var d=b.get(this.getStoreKey());
d=d===null?"":new String(d);
var e=d.split(";");
this.data=[];
for(var c=0;
c<e.length;
c++){var a=e[c].split(",");
if(a.length>=4){this.data.push({path:a[0],title:a[1],image:a[2],price:a[3]})
}else{if(a.length>=3){this.data.push({path:a[0],title:a[1],image:a[2],price:undefined})
}}}this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.ViewedProducts.prototype.persist=function(){if(this.fireEvent("beforepersist")!==false){var b=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
var e=[];
for(var c=0;
c<this.data.length;
c++){var d=this.data[c];
var a=d.path+","+d.title+","+d.image;
if(d.price){a+=","+d.price
}e.push(a)
}b.set(this.getStoreKey(),e.join(";"));
this.fireEvent("persist")
}};
CQ_Analytics.ViewedProducts.prototype.reset=function(){this.clear();
this.fireEvent("update")
};
CQ_Analytics.ViewedProducts.prototype.clear=function(){var a=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
a.remove(this.getStoreKey());
this.data=[]
};
CQ_Analytics.ViewedProducts=new CQ_Analytics.ViewedProducts();
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.CCM.register(this)
},CQ_Analytics.ViewedProducts)
}if(!CQ_Analytics.TagCloudMgr){CQ_Analytics.TagCloudMgr=function(){this.data=null;
this.addedTags={};
this.frequencies=null;
this.initialTags=null;
this.initialAddedTags={};
this.copyObject=function(c){var b={};
for(var a in c){b[a]=c[a]
}return b
}
};
CQ_Analytics.TagCloudMgr.prototype=new CQ_Analytics.PersistedSessionStore();
CQ_Analytics.TagCloudMgr.prototype.STOREKEY="TAGCLOUD";
CQ_Analytics.TagCloudMgr.prototype.STORENAME="tagcloud";
CQ_Analytics.TagCloudMgr.prototype.parseTagList=function(a){var c={};
var b=a.split(",");
for(var d in b){if(b.hasOwnProperty(d)){var e=b[d].split("=");
if(e.length==2){c[e[0]]=parseInt(e[1])
}}}return c
};
CQ_Analytics.TagCloudMgr.prototype.parseString=function(a){this.data=this.parseTagList(a);
return this
};
CQ_Analytics.TagCloudMgr.prototype.add=function(a){this.addedTags[a]=true;
this.data[a]=(this.data[a]||0)+1
};
CQ_Analytics.TagCloudMgr.prototype.each=function(b){for(var a in this.data){if(this.data.hasOwnProperty(a)){b(a,this.data[a])
}}};
CQ_Analytics.TagCloudMgr.prototype.calculateFrequencies=function(){var c={};
var a=[];
this.each(function(d,e){if(!c[e]){a.push(e)
}c[e]=true
});
a.sort(function b(e,d){if(e>d){return 1
}if(e<d){return -1
}return 0
});
return a
};
CQ_Analytics.TagCloudMgr.prototype.calculateNtile=function(b,c){if(this.frequencies===null){this.frequencies=this.calculateFrequencies()
}var a=0;
while(true){if((a>=(this.frequencies.length-1))||(this.frequencies[a]>=b)){return Math.ceil((a+1)/this.frequencies.length*c)
}a++
}};
CQ_Analytics.TagCloudMgr.prototype.getTags=function(){return this.data
};
CQ_Analytics.TagCloudMgr.prototype.getData=function(a){return this.getTags()
};
CQ_Analytics.TagCloudMgr.prototype.getTag=function(a){return this.data[a]>0?this.data[a]:0
};
CQ_Analytics.TagCloudMgr.prototype.init=function(a){var b=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
var d=b.get(this.getStoreKey());
d=d===null?"":new String(d);
this.data=this.parseTagList(d);
if(a){for(var c in a){if(a.hasOwnProperty(c)){this.add(a[c])
}}}this.initialTags=this.copyObject(this.data);
this.initialAddedTags=this.copyObject(this.addedTags);
this.persist();
this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.TagCloudMgr.prototype.setProperty=function(a,b){if(this.data==null){this.init()
}if(b>0){this.addedTags[a]=true;
this.data[a]=b>0?b:0
}else{delete this.addedTags[a];
delete this.data[a]
}this.persist();
this.fireEvent("update")
};
CQ_Analytics.TagCloudMgr.prototype.reset=function(){this.clear();
this.fireEvent("update")
};
CQ_Analytics.TagCloudMgr.prototype.getProperty=function(a){if(this.data==null){this.init()
}return this.data[a]>0?this.data[a]:0
};
CQ_Analytics.TagCloudMgr.prototype.removeProperty=function(a){if(this.data==null){this.init()
}this.setProperty(a,0)
};
CQ_Analytics.TagCloudMgr.prototype.clear=function(){var a=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
a.remove(this.getStoreKey());
this.addedTags={};
this.data={}
};
CQ_Analytics.TagCloudMgr.prototype.getLink=function(a){return""
};
CQ_Analytics.TagCloudMgr.prototype.getLabel=function(b){if(b){var c=b.split(":");
var a=c[c.length-1].split("/");
b=a[a.length-1]
}return b
};
CQ_Analytics.TagCloudMgr=new CQ_Analytics.TagCloudMgr();
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.CCM.register(this)
},CQ_Analytics.TagCloudMgr)
}if(!CQ_Analytics.SurferInfoMgr){CQ_Analytics.SurferInfoMgr=function(){};
CQ_Analytics.SurferInfoMgr.prototype=new CQ_Analytics.SessionStore();
CQ_Analytics.SurferInfoMgr.prototype.STOREKEY="SURFERINFO";
CQ_Analytics.SurferInfoMgr.prototype.STORENAME="surferinfo";
CQ_Analytics.SurferInfoMgr.prototype.init=function(){this.data={};
for(var a in this.initProperty){this.data[a]=this.initProperty[a]
}this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.SurferInfoMgr.prototype.clear=function(){this.data=null;
this.initProperty={}
};
CQ_Analytics.SurferInfoMgr.prototype.getLabel=function(a){return a
};
CQ_Analytics.SurferInfoMgr.prototype.getLink=function(a){return""
};
CQ_Analytics.SurferInfoMgr=new CQ_Analytics.SurferInfoMgr();
CQ_Analytics.CCM.addListener("configloaded",function(){var b=CQ_Analytics.BrowserInfoInstance;
this.addInitProperty("browserFamily",b.getBrowserFamily());
this.addInitProperty("browserVersion",b.getBrowserVersion());
this.addInitProperty("browser","${/surferinfo/browserFamily} ${/surferinfo/browserVersion}");
this.addInitProperty("OS",b.getOSName());
this.addInitProperty("resolution",b.getScreenResolution());
this.addInitProperty("device",b.getDeviceType());
this.addInitProperty("isMobile",b.isMobile());
this.addInitProperty("userAgent",b.getUserAgent());
var a=new Date();
this.addInitProperty("day",a.getDate());
this.addInitProperty("month",a.getMonth()+1);
this.addInitProperty("year",a.getFullYear());
this.addInitProperty("hours",a.getHours());
this.addInitProperty("minutes",a.getMinutes());
var c="${/surferinfo/browserFamily}";
if(b.isMobile()){c="${/surferinfo/device}"
}this.addInitProperty("image",c);
var d=CQ_Analytics.ClientContextMgr.getClientContextURL("/contextstores/surferinfo/resources/${/surferinfo/image}.png");
this.addInitProperty("thumbnail",d);
if(CQ_Analytics.MousePositionMgr){CQ_Analytics.MousePositionMgr.addListener("update",function(){this.setProperty("mouse X",CQ_Analytics.MousePositionMgr.getProperty("x"));
this.setProperty("mouse Y",CQ_Analytics.MousePositionMgr.getProperty("y"))
},this)
}this.addListener("update",function(){var f=this.getProperty("device");
var g="${/surferinfo/browserFamily}";
if(b.isMobile(f)){g="${/surferinfo/device}"
}var e=this.getProperty("image");
if(e!=g){this.setProperty("image",g)
}},this);
CQ_Analytics.CCM.register(this)
},CQ_Analytics.SurferInfoMgr)
}if(!CQ_Analytics.SocialGraphMgr){CQ_Analytics.SocialGraphMgr=CQ_Analytics.JSONPStore.registerNewInstance("socialgraph");
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.CCM.register(this);
CQ_Analytics.ProfileDataMgr.addListener("update",function(){var a=CQ_Analytics.ProfileDataMgr.getProperty("authorizableId");
if(a!=this.lastUid){this.fireEvent("update")
}},CQ_Analytics.SocialGraphMgr)
},CQ_Analytics.SocialGraphMgr)
}if(CQ_Analytics.SegmentMgr&&!CQ_Analytics.SegmentMgr.isResolvedRegistered){CQ_Analytics.SegmentMgr.isResolvedRegistered=true;
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.StoreRegistry.register(CQ_Analytics.SegmentMgr);
CQ_Analytics.CCM.fireEvent("storeregister",CQ_Analytics.SegmentMgr)
},CQ_Analytics.SegmentMgr)
}if(!CQ_Analytics.ProfileDataMgr){CQ_Analytics.ProfileDataMgr=function(){this.addListener("beforepersist",function(){this.checkAuthorizableId()
},this)
};
CQ_Analytics.ProfileDataMgr.prototype=new CQ_Analytics.PersistedSessionStore();
CQ_Analytics.ProfileDataMgr.prototype.STOREKEY="PROFILEDATA";
CQ_Analytics.ProfileDataMgr.prototype.STORENAME="profile";
CQ_Analytics.ProfileDataMgr.prototype.LOADER_PATH=CQ_Analytics.Utils.externalize("/libs/cq/personalization/components/profileloader/content/load.js",true);
CQ_Analytics.ProfileDataMgr.prototype.PROFILE_LOADER=CQ_Analytics.Utils.externalize("/libs/cq/personalization/components/profileloader/content/load.json",true);
CQ_Analytics.ProfileDataMgr.prototype.init=function(){this.persistence=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
var a=this.persistence.get(this.getStoreKey());
if(!a||a==""){this.data={};
for(var b in this.initProperty){this.data[b]=this.initProperty[b]
}}else{this.data=this.parse(a)
}this.persist();
this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.ProfileDataMgr.prototype.checkAuthorizableId=function(){if(!this.data){this.init()
}if(this.data.authorizableId){CQ_Analytics.CCM.setVisitorId(this.data.authorizableId)
}else{CQ_Analytics.CCM.setVisitorId("")
}};
CQ_Analytics.ProfileDataMgr.prototype.getLabel=function(a){return a
};
CQ_Analytics.ProfileDataMgr.prototype.getLink=function(a){return""
};
CQ_Analytics.ProfileDataMgr.prototype.clear=function(){if(this.persistence){this.persistence.remove(this.getStoreKey())
}this.data=null;
this.initProperty={}
};
CQ_Analytics.ProfileDataMgr.prototype.getLoaderURL=function(){return CQ_Analytics.ClientContextMgr.getClientContextURL("/contextstores/profiledata/loader.json")
};
CQ_Analytics.ProfileDataMgr.prototype.loadProfile=function(authorizableId){var url=this.getLoaderURL();
url=CQ_Analytics.Utils.addParameter(url,"authorizableId",authorizableId);
try{var object=CQ.shared.HTTP.eval(url);
if(object){this.data={};
for(var p in object){this.data[p]=object[p]
}this.persist();
this.fireEvent("initialize",this);
this.fireEvent("update");
if(CQ_Analytics.ClickstreamcloudEditor){CQ_Analytics.ClickstreamcloudEditor.reload()
}return true
}}catch(error){if(console&&console.log){console.log("Error during profile loading",error)
}}return false
};
CQ_Analytics.ProfileDataMgr=new CQ_Analytics.ProfileDataMgr();
CQ_Analytics.CCM.addListener("configloaded",function(){this.checkAuthorizableId();
this.addListener("update",function(a,j){if(j=="birthday"||!j){var k=this.getProperty("birthday");
var l=this.getProperty("age");
var g="";
if(k){try{var c=function(o,n){var m=new Date(n.getTime());
m.setUTCHours(o.getUTCHours(),o.getUTCMinutes(),o.getUTCSeconds(),o.getUTCMilliseconds());
var p=m.getTime()-o.getTime();
return p/(1000*60*60*24)
};
var d=function(m){var n=new Date(m.getFullYear(),0,0);
return c(m,n)*-1
};
var h=new Date(Date.parse(k));
if(!isNaN(h.getTime())){var f=new Date();
if(d(h)==d(f)&&h.getMonth()==f.getMonth()){g=CQ.shared.HTTP.externalize(CQ_Analytics.ClientContextMgr.getClientContextURL("/contextstores/profiledata/resources/birthday_cake.png"))
}else{var b=f.getFullYear()-h.getFullYear();
if(d(h)>d(f)){g=b
}else{g=Math.max(0,b-1)
}}}else{g=""
}}catch(e){g=""
}}if(l!=g){this.setProperty("age",g)
}}});
CQ_Analytics.CCM.register(this)
},CQ_Analytics.ProfileDataMgr)
}if(!CQ_Analytics.GeolocationUtils){CQ_Analytics.GeolocationUtils=new function(){return{init:function(b){var d;
try{if(typeof navigator.geolocation==="undefined"){d=google.gears.factory.create("beta.geolocation")
}else{d=navigator.geolocation
}}catch(f){}var a=function(e){var g=CQ_Analytics.PersistedJSONStore.registerNewInstance(b,e);
g.addListener("update",function(h,k){var l=CQ_Analytics.ClientContext.get(b+"/latitude");
var j=CQ_Analytics.ClientContext.get(b+"/longitude");
if(!l||!j){if(k!="generatedThumbnail"){g.setProperty("generatedThumbnail",CQ_Analytics.GeolocationUtils.THUMBNAILS.fallback)
}else{if(g.getProperty(k,true)!=CQ_Analytics.GeolocationUtils.THUMBNAILS.fallback){g.setProperty(k,CQ_Analytics.GeolocationUtils.THUMBNAILS.fallback)
}}}else{if(g.getProperty("generatedThumbnail",true)==CQ_Analytics.GeolocationUtils.THUMBNAILS.fallback){g.setProperty("generatedThumbnail",g.getInitProperty("generatedThumbnail"))
}if(k=="latitude"||k=="longitude"||!k){CQ_Analytics.GeolocationUtils.computeAddress(l,j,b)
}}})
};
var c=function(j,h){var g=CQ_Analytics.StoreRegistry.getStore(b);
if(g){j=j||CQ_Analytics.GeolocationUtils.DEFAULTS;
var e=j.generatedThumbnail=g.getInitProperty("generatedThumbnail");
g.initJSON(j);
if(!h){g.init();
g.setProperty("generatedThumbnail",e)
}}else{a(j)
}};
a();
if(d){d.getCurrentPosition(function(e){var g={longitude:e.coords.longitude,latitude:e.coords.latitude};
if(e.address){g.address=e.address
}c(g,CQ_Analytics.CCM.areStoresInitialized)
},function(e){if(!CQ_Analytics.CCM.areStoresInitialized){var h="Error";
if(CQ_Analytics.isUIAvailable){h=CQ.I18n.getMessage("Connection timeout",null,"timeout while connecting geolocation service");
if(e.code==1){h=CQ.I18n.getMessage("Permission denied",null,"permission denied message from goelocation service")
}else{if(e.code==2){h=CQ.I18n.getMessage("Position unavailable",null,"geolocation service couldn't find location")
}}}var g={address:{country:h}};
c(g,CQ_Analytics.CCM.areStoresInitialized)
}})
}else{c()
}},computeAddress:function(d,b,a){CQ_Analytics.ClientContext.set(a+"/address/region");
CQ_Analytics.ClientContext.set(a+"/address/countryCode");
CQ_Analytics.ClientContext.set(a+"/address/country");
var c=function(){var e=new google.maps.LatLng(d,b);
var f=new google.maps.Geocoder();
f.geocode({location:e},function(g,j){if(j==="OK"&&g[0]&&g[0].address_components){for(var k=0;
k<g[0].address_components.length;
k++){var h=g[0].address_components[k];
if(h.types&&h.types.length){if(h.types[0]=="administrative_area_level_1"){CQ_Analytics.ClientContext.set(a+"/address/region",h.short_name)
}else{if(h.types[0]=="country"){CQ_Analytics.ClientContext.set(a+"/address/countryCode",h.short_name);
CQ_Analytics.ClientContext.set(a+"/address/country",h.long_name)
}}}}}})
};
if(!window.google){window.geocode_callback=c;
$CQ.getScript(document.location.protocol+"//maps.google.com/maps/api/js?sensor=false&callback=geocode_callback")
}else{c.call()
}}}
}();
CQ_Analytics.GeolocationUtils.DEFAULTS={latitude:37.331375,longitude:-121.893992};
CQ_Analytics.GeolocationUtils.THUMBNAILS={fallback:document.location.protocol+"//maps.googleapis.com/maps/api/staticmap?center=37,-121&zoom=0&size=80x80&sensor=false"}
}if(!CQ_Analytics.CartMgr){CQ_Analytics.CartMgr=new CQ_Analytics.SessionStore();
CQ_Analytics.CartMgr.STOREKEY="CART";
CQ_Analytics.CartMgr.STORENAME="cart";
CQ_Analytics.CartMgr.init=function(){if(!this.data){this.data={}
}else{var a=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
var b=a.get(this.STOREKEY);
if(b){var c=b.split("=");
if(c.length>=2){this.referenceTotalPrice=c[0];
this.simulatedTotalPrice=c[1];
this.updateSimulatedPrice()
}}this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
}};
CQ_Analytics.CartMgr.persist=function(){if(this.fireEvent("beforepersist")!==false){var a=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
var b=null;
if(this.referenceTotalPrice&&this.simulatedTotalPrice){b=this.referenceTotalPrice+"="+this.simulatedTotalPrice
}a.set(this.STOREKEY,b);
this.fireEvent("persist")
}};
CQ_Analytics.CartMgr.updateSimulatedPrice=function(){if(this.simulatedTotalPrice&&this.referenceTotalPrice==this.data.totalPriceFloat){this.data.totalPrice=this.simulatedTotalPrice+"";
this.data.totalPriceFloat=this.simulatedTotalPrice
}else{this.simulatedTotalPrice=null;
this.persist()
}};
CQ_Analytics.CartMgr.registerSimulatedPrice=function(a){if(this.simulatedTotalPrice){this.simulatedTotalPrice=a;
this.data.totalPrice=a+""
}else{this.referenceTotalPrice=this.data.totalPriceFloat;
this.simulatedTotalPrice=a
}this.persist()
};
CQ_Analytics.CartMgr.getProperty=function(a,k){if(!this.data){this.init()
}var f=this.data;
try{var d=a.split(".");
for(var g=0;
g<d.length-1;
g++){var b=d[g];
var c=b.indexOf("[");
var h=-1;
if(c>0){h=parseInt(b.substring(c+1,b.length-1));
b=b.substring(0,c)
}f=f[b];
if(h>=0){f=f[h]
}}var m=d[d.length-1];
if(!k){var l=CQ.shared.XSS.getXSSPropertyName(m);
if(f[l]){return f[l]
}}return f[m]
}catch(j){return undefined
}};
CQ_Analytics.CartMgr.validate=function(a,c){if(a=="totalPriceFloat"){var b=parseFloat(c);
return b>=0
}else{if(a.indexOf(".quantity")>0){var d=parseInt(c);
return d>=0
}}return true
};
CQ_Analytics.CartMgr.setProperty=function(a,h){if(!this.data){this.init()
}if(!this.validate(a,h)){this.fireEvent("update",a);
return
}if(a=="totalPriceFloat"){this.registerSimulatedPrice(h)
}var e=this.data;
var d=a.split(".");
for(var f=0;
f<d.length-1;
f++){var b=d[f];
var c=b.indexOf("[");
var g=-1;
if(c>0){g=parseInt(b.substring(c+1,b.length-1));
b=b.substring(0,c)
}if(!e[b]){e[b]={}
}e=e[b];
if(g>=0){if(!e[g]){e[g]={}
}e=e[g]
}}var k=d[d.length-1];
e[k]=h;
var j=CQ.shared.XSS.getXSSPropertyName(k);
this.data[j]=CQ.shared.XSS.getXSSValue(h);
this.fireEvent("update",a)
};
CQ_Analytics.CartMgr.update=function(){var a=this;
if(this.updateUrl){$CQ.ajax({url:this.updateUrl,type:"POST",data:{cart:JSON.stringify(a.data)},externalize:false,encodePath:false,hook:true,success:function(b){a.data=b;
a.updateSimulatedPrice();
CQ_Analytics.ClientContextUtils.renderStore(CQ_Analytics.CartMgr.divId,CQ_Analytics.CartMgr.STORENAME);
a.fireEvent("updatecomplete");
a.fireEvent("update")
}})
}};
CQ_Analytics.CartMgr.clear=function(){if(this.data.entries){this.data.entries=[]
}if(this.data.vouchers){this.data.vouchers=[]
}this.data.totalPrice="0";
this.referenceTotalPrice=null;
this.simulatedTotalPrice=null
};
CQ_Analytics.CartMgr.reset=function(){this.clear();
this.fireEvent("update");
this.persist();
this.update()
};
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.CCM.register(this);
CQ_Analytics.SegmentMgr.addListener("update",function(){if(!this.promotionsMap){return
}if(!this.data.promotions){this.data.promotions=[]
}var f=CQ_Analytics.SegmentMgr.getResolved();
var e=[];
for(var d=0;
d<this.promotionsMap.length;
d++){var a=this.promotionsMap[d];
var h=false;
var g=a.segments.split(",");
for(var b=0;
b<g.length;
b++){if($CQ.inArray(g[b],f)>=0){h=true;
break
}}if(h){e.push(a.path)
}}var c=false;
for(var d=0;
d<this.data.promotions.length;
d++){var k=this.data.promotions[d];
var b=$CQ.inArray(k.path,e);
if(b>=0){e.splice(b,1)
}else{this.data.promotions.splice(d--,1);
c=true
}}for(var d=0;
d<e.length;
d++){var k={path:e[d]};
this.data.promotions.push(k);
c=true
}if(c){this.update()
}},CQ_Analytics.CartMgr)
},CQ_Analytics.CartMgr)
}if(!CQ_Analytics.CartHelper){CQ_Analytics.CartHelper=(function(){return{containsProduct:function(e,d,f){var g=d?d.substring(0,d.lastIndexOf("#")):null;
for(var a=0;
e.entries&&a<e.entries.length;
a++){var c=e.entries[a];
var b=c.page.substring(0,c.page.lastIndexOf("#"));
if((!d||b==g)&&(!f||c.quantity>=f)){return true
}}return false
}}
})()
}if(!CQ_Analytics.CampaignMgr){CQ_Analytics.CampaignMgr=function(){};
CQ_Analytics.CampaignMgr.prototype=new CQ_Analytics.PersistedSessionStore();
CQ_Analytics.CampaignMgr.prototype.STOREKEY="CAMPAIGN";
CQ_Analytics.CampaignMgr.prototype.STORENAME="campaign";
CQ_Analytics.CampaignMgr.prototype.DEFAULT_EXPERIENCE="DEFAULT";
CQ_Analytics.CampaignMgr.prototype.init=function(){var c;
this.persistence=new CQ_Analytics.SessionPersistence({container:"ClientContext"});
var a=this.persistence.get(this.getStoreKey());
if(!this.data){this.data={}
}if(!a||a===""){for(c in this.initProperty){if(this.initProperty.hasOwnProperty(c)){this.data[c]=this.initProperty[c]
}}}else{this.data=this.parse(a);
var b=this.getInitProperty("campaigns");
if(b){this.data.campaigns=b
}}this.validate();
this.persist();
this.initialized=true;
this.fireEvent("initialize",this);
this.fireEvent("update")
};
CQ_Analytics.CampaignMgr.prototype.validate=function(){if(this.data.campaigns){if(!this.getCampaignBy("path",this.data.path)&&!this.getCampaignBy("id",this.data.id)){this.setCampaign(null)
}if(this.data["recipe/path"]!==CQ_Analytics.CampaignMgr.DEFAULT_EXPERIENCE){if(!this.getExperienceBy("path",this.data["recipe/path"])&&!this.getExperienceBy("id",this.data["recipe/id"])){this.setExperience(null)
}}}};
CQ_Analytics.CampaignMgr.prototype.getCampaignBy=function(e,b){if(!this.data||!this.data.campaigns){return null
}var a,c=this.data.campaigns;
for(a=0;
a<c.length;
a++){var d=c[a];
if(d[e]===b){return d
}}return null
};
CQ_Analytics.CampaignMgr.prototype.getExperienceBy=function(g,d){if(!this.data||!this.data.campaigns){return null
}var c,e=this.data.campaigns;
for(c=0;
c<e.length;
c++){var f=e[c];
for(var a=0;
a<f.experiences.length;
a++){var b=f.experiences[a];
if(b[g]===d){return b
}}}return null
};
CQ_Analytics.CampaignMgr.prototype.setCampaign=function(a){this.setProperties({name:a?a.title:"",path:a?a.path:"",id:a?a.id:"","recipe/name":a?CQ.I18n.getMessage("(default)"):"","recipe/path":a?this.DEFAULT_EXPERIENCE:"","recipe/id":a?this.DEFAULT_EXPERIENCE:""})
};
CQ_Analytics.CampaignMgr.prototype.setExperience=function(a){this.setProperties({"recipe/name":a?a.title:"","recipe/path":a?a.path:"","recipe/id":a?a.id:""})
};
CQ_Analytics.CampaignMgr.prototype.setProperty=function(a,b){if(a==="id"||a==="path"){this.setCampaign(this.getCampaignBy(a,b));
return
}else{if(a==="recipe/id"||a==="recipe/path"){if(b!==CQ_Analytics.CampaignMgr.DEFAULT_EXPERIENCE){this.setExperience(this.getExperienceBy(a.substring("recipe/".length),b));
return
}}}CQ_Analytics.PersistedSessionStore.prototype.setProperty.call(this,a,b)
};
CQ_Analytics.CampaignMgr.prototype.isCampaignSelected=function(){return this.getProperty("path")!==""
};
CQ_Analytics.CampaignMgr.prototype.clear=function(){this.data=null;
this.initProperty={}
};
CQ_Analytics.CampaignMgr.prototype.getLabel=function(a){return a
};
CQ_Analytics.CampaignMgr.prototype.getLink=function(a){return""
};
CQ_Analytics.CampaignMgr=new CQ_Analytics.CampaignMgr();
CQ_Analytics.CCM.addListener("configloaded",function(){CQ_Analytics.CCM.register(this)
},CQ_Analytics.CampaignMgr)
}if(!CQ_Analytics.ActivityStreamMgr){CQ_Analytics.ActivityStreamMgr=CQ_Analytics.JSONStore.registerNewInstance("activitystream",{});
CQ_Analytics.ActivityStreamMgr.internalRenderer=function(c,a){var b=c+".form.html";
b+=CQ_Analytics.ClientContextMgr.getClientContextURL("/contextstores/activitystream.html");
b+="?limit=3";
CQ.shared.HTTP.get(b,function(e,f,d){$CQ("#"+a).children().remove();
if(f){$CQ("#"+a).append(d.body)
}})
};
CQ_Analytics.ActivityStreamMgr.renderer=function(b,a){if(!b.isReady){b.isReady=true;
CQ_Analytics.ClientContextUtils.onStoreRegistered("profile",function(c){c.addListener("update",function(e,f){var g=this.getProperty("path");
if(g!=CQ_Analytics.ActivityStreamMgr.currentProfilePath){CQ_Analytics.ActivityStreamMgr.currentProfilePath=g;
CQ_Analytics.ActivityStreamMgr.internalRenderer(g,a)
}},c);
var d=c.getProperty("path");
CQ_Analytics.ActivityStreamMgr.currentProfilePath=d;
CQ_Analytics.ActivityStreamMgr.internalRenderer(d,a)
})
}return""
}
}(function(f){function d(){}function w(G){c=[G]
}function p(I,G,H){return I&&I.apply(G.context||G,H)
}function o(G){return/\?/.test(G)?"&":"?"
}var q="async",u="charset",s="",E="error",v="insertBefore",t="_jqjsp",B="on",g=B+"click",l=B+E,r=B+"load",z=B+"readystatechange",b="readyState",D="removeChild",k="<script>",A="success",C="timeout",e=window,a=f.Deferred,h=f("head")[0]||document.documentElement,y={},n=0,c,m={callback:t,url:location.href},x=e.opera,j=!!f("<div>").html("<!--[if IE]><i><![endif]-->").find("i").length;
function F(L){L=f.extend({},m,L);
var J=L.success,Q=L.error,I=L.complete,Z=L.dataFilter,ab=L.callbackParameter,R=L.callback,aa=L.cache,H=L.pageCache,K=L.charset,M=L.url,ad=L.data,T=L.timeout,P,X=0,V=d,S,O,G,ac,N,W;
a&&a(function(ae){ae.done(J).fail(Q);
J=ae.resolve;
Q=ae.reject
}).promise(L);
L.abort=function(){!(X++)&&V()
};
if(p(L.beforeSend,L,[L])===!1||X){return L
}M=M||s;
ad=ad?((typeof ad)=="string"?ad:f.param(ad,L.traditional)):s;
M+=ad?(o(M)+ad):s;
ab&&(M+=o(M)+encodeURIComponent(ab)+"=?");
!aa&&!H&&(M+=o(M)+"_"+(new Date()).getTime()+"=");
M=M.replace(/=\?(&|$)/,"="+R+"$1");
function Y(ae){if(!(X++)){V();
H&&(y[M]={s:[ae]});
Z&&(ae=Z.apply(L,[ae]));
p(J,L,[ae,A,L]);
p(I,L,[L,A])
}}function U(ae){if(!(X++)){V();
H&&ae!=C&&(y[M]=ae);
p(Q,L,[L,ae]);
p(I,L,[L,ae])
}}if(H&&(P=y[M])){P.s?Y(P.s[0]):U(P)
}else{e[R]=w;
ac=f(k)[0];
ac.id=t+n++;
if(K){ac[u]=K
}x&&x.version()<11.6?((N=f(k)[0]).text="document.getElementById('"+ac.id+"')."+l+"()"):(ac[q]=q);
if(j){ac.htmlFor=ac.id;
ac.event=g
}ac[r]=ac[l]=ac[z]=function(ae){if(!ac[b]||!/i/.test(ac[b])){try{ac[g]&&ac[g]()
}catch(af){}ae=c;
c=0;
ae?Y(ae[0]):U(E)
}};
ac.src=M;
V=function(ae){W&&clearTimeout(W);
ac[z]=ac[r]=ac[l]=null;
h[D](ac);
N&&h[D](N)
};
h[v](ac,(G=h.firstChild));
N&&h[v](N,G);
W=T>0&&setTimeout(function(){U(C)
},T)
}return L
}F.setup=function(G){f.extend(m,G)
};
f.jsonp=F
})(jQuery);
(function(b){function a(m,h){var n,o,k,d,g,c,e,l,j,f;
n=m.length&3;
o=m.length-n;
k=h;
g=3432918353;
e=461845907;
f=0;
while(f<o){j=((m.charCodeAt(f)&255))|((m.charCodeAt(++f)&255)<<8)|((m.charCodeAt(++f)&255)<<16)|((m.charCodeAt(++f)&255)<<24);
++f;
j=((((j&65535)*g)+((((j>>>16)*g)&65535)<<16)))&4294967295;
j=(j<<15)|(j>>>17);
j=((((j&65535)*e)+((((j>>>16)*e)&65535)<<16)))&4294967295;
k^=j;
k=(k<<13)|(k>>>19);
d=((((k&65535)*5)+((((k>>>16)*5)&65535)<<16)))&4294967295;
k=(((d&65535)+27492)+((((d>>>16)+58964)&65535)<<16))
}j=0;
switch(n){case 3:j^=(m.charCodeAt(f+2)&255)<<16;
case 2:j^=(m.charCodeAt(f+1)&255)<<8;
case 1:j^=(m.charCodeAt(f)&255);
j=(((j&65535)*g)+((((j>>>16)*g)&65535)<<16))&4294967295;
j=(j<<15)|(j>>>17);
j=(((j&65535)*e)+((((j>>>16)*e)&65535)<<16))&4294967295;
k^=j
}k^=m.length;
k^=k>>>16;
k=(((k&65535)*2246822507)+((((k>>>16)*2246822507)&65535)<<16))&4294967295;
k^=k>>>13;
k=((((k&65535)*3266489909)+((((k>>>16)*3266489909)&65535)<<16)))&4294967295;
k^=k>>>16;
return k>>>0
}b.murmurhash3=a
})(jQuery);
CQ_Analytics=window.CQ_Analytics||{};
CQ_Analytics.AAM=CQ_Analytics.AAM||{};
CQ_Analytics.AAM.AudienceMgr=CQ_Analytics.AAM.AudienceMgr||function(f){var e=f.partner||"geometrixx";
var q=f.destinationNames||{CQIntegrationDestination:{domain:".cqclientintegration.adobe.com",segkey:"segs",keysep:",",valsep:";"}};
var p=f.debug||false;
var b=f.containerNSID||"0";
var r=false;
if(f.simulationPath){r=f.simulationPath+".segments.json"
}var c=function(){};
if(p){c=function(s){console.log("DEBUG: audiencemanager.js "+s)
}
}var o=function(s){console.log("ERROR: audiencemanager.js "+s)
};
c("Initialise Audience Manager");
var l={};
var d=new CQ_Analytics.JSONStore();
var j="http://";
if("https:"==document.location.protocol){j="https://"
}j+=encodeURIComponent(e)+".demdex.net/event?d_cb=?";
function g(t){var s={};
$.each(t,function(x,z){if(q[z.cn]){var w=q[z.cn];
if(z.dmn.slice(0,w.domain.length)===w.domain){var v=(w.segkey||"segs")+"=";
var y=v.length;
var A=w.keysep||",";
var u=w.valsep||";";
$.each(z.cv.split(A),function(C,B){if(B.slice(0,y)===v){$.each(B.substring(y).split(u),function(D,E){s[E]=true
})
}})
}}});
return s
}function m(){}function k(s){l={};
var t=[];
$.each(s,function(w,x){if(x){l[w]=true;
t.push(w)
}});
t.sort();
var u=d.getProperty("segments");
var v=t.join(",");
if(u!==v){d.setProperty("segments",v);
c("Set segments to "+v)
}}function h(s,u){u=u||m;
if(r){if(!s.sid){u();
d.fireEvent("update")
}else{$.getJSON(r,{t:s.sid},function(v){if(v.segments){k(v.segments)
}u();
d.fireEvent("update")
}).fail(function(v,x,w){o("Failed to resolve segments from AAM server  "+x+" error "+w);
u();
d.fireEvent("update")
})
}}else{var t={};
s=s||{};
$.each(s,function(v,w){if(v==="sid"){t.d_sid=w
}else{t["c_"+v]=w
}});
t.d_nsid=b;
t.d_rtbd="json";
$.jsonp({url:j,callback:"__aaminvoke",data:t,success:function(v,x,w){if(v.stuff){k(g(v.stuff))
}u();
d.fireEvent("update")
},error:function(w,v){o("Failed to retieve json response "+v);
u();
d.fireEvent("update")
}})
}}function a(){return l
}function n(s){return(l[s])
}h(false,function(){CQ_Analytics.ClientContextMgr.register(d)
});
d.getUserSegments=a;
d.matches=n;
d.invoke=h;
return d
};