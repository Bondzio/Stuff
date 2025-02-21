window._g=window._g||{};
_g.shared={};
if(window.console===undefined){window.console={log:function(a){}}
}_g.shared.HTTP=new function(){var createResponse=function(){var response=new Object();
response.headers=new Object();
response.body=new Object();
return response
};
var getResponseFromXhr=function(request){if(!request){return null
}var response=createResponse();
response.body=request.responseText;
response.headers[_g.HTTP.HEADER_STATUS]=request.status;
response.responseText=request.responseText;
response.status=request.status;
return response
};
return{EXTENSION_HTML:".html",EXTENSION_JSON:".json",EXTENSION_RES:".res",HEADER_STATUS:"Status",HEADER_MESSAGE:"Message",HEADER_LOCATION:"Location",HEADER_PATH:"Path",PARAM_NO_CACHE:"cq_ck",get:function(url,callback,scope,suppressForbiddenCheck){url=_g.HTTP.getXhrHookedURL(_g.HTTP.externalize(url,true));
if(callback!=undefined){return _g.$.ajax({type:"GET",url:url,externalize:false,encodePath:false,hook:false,complete:function(request,textStatus){var response=getResponseFromXhr(request);
if(!suppressForbiddenCheck){_g.HTTP.handleForbidden(response)
}callback.call(scope||this,this,textStatus=="success",response)
}})
}else{try{var request=_g.$.ajax({type:"GET",url:url,async:false,externalize:false,encodePath:false,hook:false});
var response=getResponseFromXhr(request);
if(!suppressForbiddenCheck){_g.HTTP.handleForbidden(response)
}return response
}catch(e){return null
}}},post:function(url,callback,params,scope,suppressErrorMsg,suppressForbiddenCheck){url=_g.HTTP.externalize(url,true);
var hook=_g.HTTP.getXhrHook(url,"POST",params);
if(hook){url=hook.url;
params=hook.params
}if(callback!=undefined){return _g.$.ajax({type:"POST",url:url,data:params,externalize:false,encodePath:false,hook:false,complete:function(request,textStatus){var response=_g.HTTP.buildPostResponseFromHTML(request.responseText);
if(!suppressForbiddenCheck){_g.HTTP.handleForbidden(request)
}callback.call(scope||this,this,textStatus=="success",response)
}})
}else{try{var request=_g.$.ajax({type:"POST",url:url,data:params,async:false,externalize:false,encodePath:false,hook:false});
var response=_g.HTTP.buildPostResponseFromHTML(request.responseText);
if(!suppressForbiddenCheck){_g.HTTP.handleForbidden(request)
}return response
}catch(e){return null
}}},getParameter:function(url,name){var params=_g.HTTP.getParameters(url,name);
return params!=null?params[0]:null
},getParameters:function(url,name){var values=[];
if(!name){return null
}name=encodeURIComponent(name);
if(url.indexOf("?")==-1){return null
}var query=url.substring(url.indexOf("?")+1);
if(query.indexOf(name)==-1){return null
}var queryPts=query.split("&");
for(var i=0;
i<queryPts.length;
i++){var paramPts=queryPts[i].split("=");
if(paramPts[0]==name){values.push(paramPts.length>1?decodeURIComponent(paramPts[1]):"")
}}return values.length>0?values:null
},addParameter:function(url,name,value){if(value&&value instanceof Array){for(var i=0;
i<value.length;
i++){url=_g.HTTP.addParameter(url,name,value[i])
}return url
}var separator=url.indexOf("?")==-1?"?":"&";
var hashIdx=url.indexOf("#");
if(hashIdx<0){return url+separator+encodeURIComponent(name)+"="+encodeURIComponent(value)
}else{var hash=url.substring(hashIdx);
url=url.substring(0,hashIdx);
return url+separator+encodeURIComponent(name)+"="+encodeURIComponent(value)+hash
}},setParameter:function(url,name,value){url=_g.HTTP.removeParameter(url,name);
return _g.HTTP.addParameter(url,name,value)
},removeParameter:function(url,name){var pattern0="?"+encodeURIComponent(name)+"=";
var pattern1="&"+encodeURIComponent(name)+"=";
var pattern;
if(url.indexOf(pattern0)!=-1){pattern=pattern0
}else{if(url.indexOf(pattern1)!=-1){pattern=pattern1
}else{return url
}}var indexCutStart=url.indexOf(pattern);
var begin=url.substring(0,indexCutStart);
var indexCutEnd=url.indexOf("&",indexCutStart+1);
var end="";
if(indexCutEnd!=-1){end=url.substring(indexCutEnd);
if(end.indexOf("&")==0){end=end.replace("&","?")
}}return begin+end
},removeParameters:Granite.HTTP.removeParameters,addSelector:function(url,selector,index){if(!index){index=0
}var post="";
var pIndex=url.indexOf("?");
if(pIndex==-1){pIndex=url.indexOf("#")
}if(pIndex!=-1){post=url.substring(pIndex);
url=url.substring(0,pIndex)
}var sIndex=url.lastIndexOf("/");
var main=url.substring(sIndex);
if(main.indexOf("."+selector+".")==-1){var path=url.substring(0,sIndex);
var obj=main.split(".");
var newMain="";
var delim="";
if(index>obj.length-2||index==-1){index=obj.length-2
}for(var i=0;
i<obj.length;
i++){newMain+=delim+obj[i];
delim=".";
if(index==i){newMain+=delim+selector
}}return path+newMain+post
}else{return url
}},setSelector:function(url,selector,index){var post="";
var pIndex=url.indexOf("?");
if(pIndex==-1){pIndex=url.indexOf("#")
}if(pIndex!=-1){post=url.substring(pIndex);
url=url.substring(0,pIndex)
}var selectors=_g.HTTP.getSelectors(url);
var ext=url.substring(url.lastIndexOf("."));
url=url.substring(0,url.lastIndexOf("."));
var fragment=(selectors.length>0)?url.replace("."+selectors.join("."),""):url;
if(selectors.length>0){for(var i=0;
i<selectors.length;
i++){if(index==i){fragment+="."+selector
}else{fragment+="."+selectors[i]
}}}else{fragment+="."+selector
}return fragment+ext+post
},addSelectors:function(url,selectors){var res=url;
if(url&&selectors&&selectors.length){for(var i=0;
i<selectors.length;
i++){res=_g.HTTP.addSelector(res,selectors[i],i)
}}return res
},getAnchor:function(url){if(url.indexOf("#")!=-1){return url.substring(url.indexOf("#")+1)
}return""
},setAnchor:function(url,anchor){return _g.HTTP.removeAnchor(url)+"#"+anchor
},removeAnchor:Granite.HTTP.removeAnchor,noCaching:function(url){return _g.HTTP.setParameter(url,_g.HTTP.PARAM_NO_CACHE,new Date().valueOf())
},buildPostResponseFromNode:function(node,response){if(!node){return null
}if(response==undefined){response=createResponse()
}for(var i=0;
i<node.childNodes.length;
i++){var child=node.childNodes[i];
if(child.tagName){if(child.id){if(child.href){response.headers[child.id]=child.href
}else{response.headers[child.id]=child.innerHTML
}}response=_g.HTTP.buildPostResponseFromNode(child,response)
}}return response
},buildPostResponseFromHTML:function(html){var response=createResponse();
try{if(html.responseText!=undefined){html=html.responseText
}else{if(typeof html!="string"){html=html.toString()
}}var div=document.createElement("div");
div.innerHTML=html;
response=_g.HTTP.buildPostResponseFromNode(div,response);
div=null
}catch(e){}return response
},getCookie:function(name){var cname=encodeURIComponent(name)+"=";
var dc=document.cookie;
if(dc.length>0){var begin=dc.indexOf(cname);
if(begin!=-1){begin+=cname.length;
var end=dc.indexOf(";",begin);
if(end==-1){end=dc.length
}return decodeURIComponent(dc.substring(begin,end))
}}return null
},setCookie:function(name,value,path,days,domain,secure){if(typeof(days)!="number"){days=7
}var date;
if(days>0){date=new Date();
date.setTime(date.getTime()+(days*24*60*60*1000))
}else{date=new Date(0)
}document.cookie=encodeURIComponent(name)+"="+encodeURIComponent(value)+"; "+(days!=0?"expires="+date.toGMTString()+"; ":"")+(domain?"domain="+domain+"; ":"")+(path?"path="+path:"")+(secure?"; secure":"");
return value
},clearCookie:function(name,path,domain,secure){_g.HTTP.setCookie(name,"null",path||"",-1,domain||"",secure||"")
},getSchemeAndAuthority:Granite.HTTP.getSchemeAndAuthority,getContextPath:Granite.HTTP.getContextPath,externalize:function(url,encode){if((typeof G_IS_HOOKED!="undefined")&&G_IS_HOOKED(url)){return url
}if(encode){url=_g.HTTP.encodePathOfURI(url)
}url=Granite.HTTP.externalize(url);
return url
},internalize:Granite.HTTP.internalize,getPath:Granite.HTTP.getPath,getSuffix:function(){if(window.CQURLInfo&&CQURLInfo.suffix){return CQURLInfo.suffix
}return null
},getSelectors:function(url){if(!url&&window.CQURLInfo){if(CQURLInfo.selectors){return CQURLInfo.selectors
}}var selectors=[];
url=url||window.location.href;
url=_g.HTTP.removeParameters(url);
url=_g.HTTP.removeAnchor(url);
var fragment=url.substring(url.lastIndexOf("/"));
if(fragment){var split=fragment.split(".");
if(split.length>2){for(var i=0;
i<split.length;
i++){if(i>0&&i<split.length-1){selectors.push(split[i])
}}}}return selectors
},getExtension:function(url){if(!url&&window.CQURLInfo){if(CQURLInfo.extension){return CQURLInfo.extension
}}url=url||window.location.href;
url=_g.HTTP.removeParameters(url);
url=_g.HTTP.removeAnchor(url);
var pos=url.lastIndexOf(".");
if(pos<0){return""
}url=url.substring(pos+1);
pos=url.indexOf("/");
if(pos<0){return url
}return url.substring(0,pos)
},encodePathOfURI:Granite.HTTP.encodePathOfURI,encodePath:Granite.HTTP.encodePath,eval:Granite.HTTP.eval,isOkStatus:function(status){try{return(new String(status).indexOf("2")==0)
}catch(e){return false
}},isOk:function(response){try{return _g.HTTP.isOkStatus(response.headers[_g.HTTP.HEADER_STATUS])
}catch(e){return false
}},handleForbidden:function(response,suppressLogin){try{if(response[_g.HTTP.HEADER_STATUS.toLowerCase()]==403){Granite.HTTP.handleLoginRedirect();
return true
}return false
}catch(e){return false
}},getXhrHook:Granite.HTTP.getXhrHook,getXhrHookedURL:function(url,method,params){var hook=_g.HTTP.getXhrHook(url,method,params);
if(hook){return hook.url
}return url
},reloadHook:function(url){if(typeof G_RELOAD_HOOK!="undefined"&&_g.$.isFunction(G_RELOAD_HOOK)){if(CQURLInfo.selectorString!=""){url=_g.HTTP.addSelector(url,CQURLInfo.selectorString)
}url=G_RELOAD_HOOK(url)||url
}return url
}}
};
_g.HTTP=_g.shared.HTTP;
_g.shared.Util=new function(){return{reload:function(win,url,preventHistory){if(!win){win=window
}if(!url){url=_g.HTTP.noCaching(win.location.href)
}url=_g.HTTP.reloadHook(url);
if(preventHistory){win.location.replace(url)
}else{win.location.href=url
}},load:function(url,preventHistory){_g.Util.reload(window,url,preventHistory)
},open:function(url,win,name,options){if(!win){win=window
}if(!url){return
}url=_g.HTTP.reloadHook(url);
if(!name){name=""
}if(!options){options=""
}return win.open(url,name,options)
},htmlEncode:function(value){return !value?value:String(value).replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")
},htmlDecode:function(value){return !value?value:String(value).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&quot;/g,'"').replace(/&amp;/g,"&")
},ellipsis:function(value,length,word){if(value&&value.length>length){if(word){var vs=value.substr(0,length-2);
var index=Math.max(vs.lastIndexOf(" "),vs.lastIndexOf("."),vs.lastIndexOf("!"),vs.lastIndexOf("?"),vs.lastIndexOf(";"));
if(index==-1||index<(length-15)){return value.substr(0,length-3)+"..."
}else{return vs.substr(0,index)+"..."
}}else{return value.substr(0,length-3)+"..."
}}return value
},patchText:Granite.Util.patchText,eval:function(response){return _g.HTTP.eval(response)
},getTopWindow:Granite.Util.getTopWindow,setIFrameMode:Granite.Util.setIFrameMode}
};
_g.Util=_g.shared.Util;
_g.shared.Sling=function(){return{SELECTOR_INFINITY:Granite.Sling.SELECTOR_INFINITY,CHARSET:Granite.Sling.CHARSET,STATUS:Granite.Sling.STATUS,STATUS_BROWSER:Granite.Sling.STATUS_BROWSER,OPERATION:Granite.Sling.OPERATION,OPERATION_DELETE:Granite.Sling.OPERATION_DELETE,OPERATION_MOVE:Granite.Sling.OPERATION_MOVE,DELETE_SUFFIX:Granite.Sling.DELETE_SUFFIX,TYPEHINT_SUFFIX:Granite.Sling.TYPEHINT_SUFFIX,COPY_SUFFIX:Granite.Sling.COPY_SUFFIX,MOVE_SUFFIX:Granite.Sling.MOVE_SUFFIX,ORDER:Granite.Sling.ORDER,REPLACE:Granite.Sling.REPLACE,DESTINATION:Granite.Sling.DESTINATION,SAVE_PARAM_PREFIX:Granite.Sling.SAVE_PARAM_PREFIX,IGNORE_PARAM:Granite.Sling.IGNORE_PARAM,REQUEST_LOGIN_PARAM:Granite.Sling.REQUEST_LOGIN_PARAM,LOGIN_URL:Granite.Sling.LOGIN_URL,LOGOUT_URL:Granite.Sling.LOGOUT_URL,processBinaryData:function(a){if(a&&a[":jcr:data"]!=undefined){var b=new Object();
b.size=a[":jcr:data"];
b.type=a["jcr:mimeType"];
b.date=a["jcr:lastModified"];
a=b
}return a
},getContentPath:function(c,a,b){var d=a;
if(d.lastIndexOf(".")>d.lastIndexOf("/")){d=d.substr(0,d.indexOf(".",d.lastIndexOf("/")))
}if(c){if(c.indexOf("/")==0){d=c
}else{if(b){while(c.indexOf("../")==0){c=c.substring(3);
d=d.substring(0,d.lastIndexOf("/"))
}}c=c.replace("./","");
d=d+"/"+c
}}return d
}}
}();
_g.Sling=_g.shared.Sling;
_g.shared.XSS=new function(){return{getXSSPropertyName:function(a){if(!a){return""
}if(_g.XSS.KEY_REGEXP.test(a)){return a
}return a+=_g.XSS.KEY_SUFFIX
},getXSSRecordPropertyValue:function(e,c,a){var d="";
if(e&&c){var b=e.get(this.getXSSPropertyName(c));
if(b){d=b
}else{d=e.get(c)
}if(a&&!isNaN(a)){d=_g.Util.ellipsis(d,a,true)
}}return d
},getXSSTablePropertyValue:function(d,c,a){var e="";
if(d&&c){var b=d[this.getXSSPropertyName(c)];
if(b){e=b
}else{e=d[c]
}if(a&&!isNaN(a)){e=_g.Util.ellipsis(e,a,true)
}}return e
},getXSSValue:function(a){if(a){return _g.Util.htmlEncode(a)
}else{return""
}},updatePropertyName:function(a,b){if(!a||!b||!a[b]){return
}if(a.xssProtect&&!a.xssKeepPropName){a[b]=this.getXSSPropertyName(a[b])
}},xssPropertyRenderer:function(d,b,c,a){if(a&&a.dataIndex&&c&&c.data&&c.data[this.getXSSPropertyName(a.dataIndex)]){d=c.data[this.getXSSPropertyName(a.dataIndex)];
if(a.ellipsisLimit&&!isNaN(a.ellipsisLimit)){d=_g.Util.ellipsis(d,a.ellipsisLimit,true)
}return d
}else{if(d){return d
}else{return""
}}}}
};
_g.XSS=_g.shared.XSS;
_g.XSS.KEY_SUFFIX="_xss";
_g.XSS.KEY_REGEXP=new RegExp(_g.XSS.KEY_SUFFIX+"$");
_g.shared.I18n=Granite.I18n;
_g.I18n=_g.shared.I18n;
_g.shared.I18n.getMessage=Granite.I18n.get;
_g.shared.I18n.getVarMessage=Granite.I18n.getVar;
_g.shared.String=new function(){return{startsWith:function(d,b){if(d==null||b==null){return d==null&&b==null
}if(b.length>d.length){return false
}var a=d.toString();
var c=b.toString();
return(a.indexOf(c)==0)
},endsWith:function(b,a){if(b==null||a==null){return b==null&&a==null
}if(a.length>b.length){return false
}b=b.toString();
a=a.toString();
return(b.lastIndexOf(a)==(b.length-a.length))
},contains:function(b,a){if(b==null||a==null){return false
}b=b.toString();
a=a.toString();
return(b.indexOf(a)>=0)
}}
};
_g.String=_g.shared.String;
_g.shared.ClientSidePersistence=function(a){var b={PERSISTENCE_NAME:_g.shared.ClientSidePersistence.decoratePersistenceName("ClientSidePersistence"),config:{},cache:null,getMode:function(){return this.config.mode
},getWindow:function(){return this.config.window||_g.shared.Util.getTopWindow()
},debug:function(){if(console){var c=this.getMap();
var e="[ClientSidePersistence -> mode="+this.getMode().name+", container="+(this.config.container||"")+"]\n";
var d=0;
var f=new RegExp("^"+this.config.container+"/");
for(var h=0,k=Object.keys(c).sort(),i=null;
h<k.length;
h++){var j=k[h];
if(this.config.container&&(typeof(j)=="string")&&!j.match(f)){continue
}var g=c[j];
e+="-["+ ++d+"]-> '"+j.replace(f,"")+"' = '"+decodeURIComponent(g)+"'\n"
}if(!d){e+="(container is empty)"
}console.log(e)
}},keyName:function(c){return(this.config.container?(this.config.container+"/"):"")+c
},getKeys:function(){var f=this.getMap();
var e=[];
if(f){for(var c in f){if(this.config.container){if(c.indexOf(this.config.container+"/")==0){var d=c.substring(this.config.container.length+1);
e.push(d)
}}else{e.push(c)
}}}return e
},get:function(c){var d=this.getMap()[this.keyName(c)];
return d?decodeURIComponent(d):d
},set:function(d,g){d=(typeof d==="string")?d.replace(/:=/g,""):"";
var f={key:d};
d=this.keyName(d);
if(!d.length){return
}var c=[];
var h=this.getMap();
f.action=h[d]?"update":"set";
if(g){h[d]=encodeURIComponent(g)
}else{f.action="remove";
delete h[d]
}for(var e in h){c.push(e+":="+h[e])
}this.cache=h;
this.write(c.join("|"));
_g.$.extend(f,{value:g,mode:this.getMode().name,container:this.config.container});
_g.$(_g.shared.ClientSidePersistence).trigger(_g.shared.ClientSidePersistence.EVENT_NAME,f)
},getMap:function(){if(!this.cache||!this.config.useCache){var f=this.read().split("|");
var d={};
for(var c=0;
c<f.length;
c++){var g=f[c].split(":=");
var e=g[0];
if(e&&e.length){d[e]=g[1]||""
}}this.cache=d
}return this.cache
},remove:function(c){this.set(c)
},clearMap:function(){this.write()
},read:function(){return this.config.mode.read(this)||""
},write:function(c){this.config.mode.write(this,c||"")
}};
_g.$.extend(b.config,_g.shared.ClientSidePersistence.getDefaultConfig(),a);
if(b.config.useContainer===false){b.config.container=null
}if((b.config.mode===_g.shared.ClientSidePersistence.MODE_SESSION)&&(!window.sessionStorage||!window.sessionStorage.getItem||!window.sessionStorage.setItem)){b.config.mode=_g.shared.ClientSidePersistence.MODE_LOCAL
}if((b.config.mode===_g.shared.ClientSidePersistence.MODE_LOCAL)&&(!window.localStorage||!window.localStorage.getItem||!window.localStorage.setItem)){b.config.mode=_g.shared.ClientSidePersistence.MODE_WINDOW
}return b
};
_g.shared.ClientSidePersistence.EVENT_NAME="ClientSidePersistence";
_g.shared.ClientSidePersistence.MODE_SESSION={name:"session",read:function(a){return a.getWindow().sessionStorage.getItem(a.PERSISTENCE_NAME)
},write:function(a,c){if(Granite.OptOutUtil.isOptedOut()){return
}try{a.getWindow().sessionStorage.setItem(a.PERSISTENCE_NAME,c)
}catch(b){return
}}};
_g.shared.ClientSidePersistence.MODE_LOCAL={name:"local",read:function(a){return a.getWindow().localStorage.getItem(a.PERSISTENCE_NAME)
},write:function(a,c){if(Granite.OptOutUtil.isOptedOut()){return
}try{a.getWindow().localStorage.setItem(a.PERSISTENCE_NAME,c)
}catch(b){return
}}};
_g.shared.ClientSidePersistence.decoratePersistenceName=function(a){return a
};
_g.shared.ClientSidePersistence.MODE_WINDOW={name:"window",read:function(a){return a.getWindow().name
},write:function(a,b){if(Granite.OptOutUtil.isOptedOut()){return
}a.getWindow().name=b
}};
_g.shared.ClientSidePersistence.MODE_COOKIE={COOKIE_NAME:_g.shared.ClientSidePersistence.decoratePersistenceName("SessionPersistence"),name:"cookie",read:function(a){return _g.shared.ClientSidePersistence.CookieHelper.read(this.COOKIE_NAME)
},write:function(a,b){if(Granite.OptOutUtil.isOptedOut()&&!Granite.OptOutUtil.maySetCookie(this.COOKIE_NAME)){return
}if(!b){_g.shared.ClientSidePersistence.CookieHelper.erase(this.COOKIE_NAME)
}else{_g.shared.ClientSidePersistence.CookieHelper.set(this.COOKIE_NAME,b,365)
}}};
_g.shared.ClientSidePersistence.getDefaultConfig=function(){return{window:_g.shared.Util.getTopWindow(),useCache:false,container:null,mode:_g.shared.ClientSidePersistence.MODE_LOCAL}
};
_g.shared.ClientSidePersistence.CookieHelper={set:function(c,d,e){var a="";
if(e){var b=new Date();
b.setTime(b.getTime()+(e*24*60*60*1000));
a="; expires="+b.toGMTString()
}if(d){d=encodeURIComponent(d)
}document.cookie=c+"="+d+a+"; path=/"
},read:function(b){var f=b+"=";
var a=document.cookie.split(";");
for(var d=0;
d<a.length;
d++){var g=a[d];
while(g.charAt(0)==" "){g=g.substring(1,g.length)
}if(g.indexOf(f)==0){var e=g.substring(f.length,g.length);
return e?decodeURIComponent(e):null
}}return null
},erase:function(a){_g.shared.ClientSidePersistence.CookieHelper.set(a,"",-1)
}};
_g.shared.ClientSidePersistence.clearAllMaps=function(){var a=[_g.shared.ClientSidePersistence.MODE_COOKIE,_g.shared.ClientSidePersistence.MODE_LOCAL,_g.shared.ClientSidePersistence.MODE_SESSION,_g.shared.ClientSidePersistence.MODE_WINDOW];
_g.$.each(a,function(d,c){var b=new _g.shared.ClientSidePersistence({mode:c});
b.clearMap()
})
};
_g.I18n.init();
window.CQ=window.CQ||{};
CQ.shared=_g.shared;
CQ.Sling=CQ.shared.Sling;
CQ.I18n=CQ.shared.I18n;
G_XHR_HOOK=typeof CQ_XHR_HOOK!="undefined"?CQ_XHR_HOOK:undefined;
G_RELOAD_HOOK=typeof CQ_RELOAD_HOOK!="undefined"?CQ_RELOAD_HOOK:undefined;
G_IS_HOOKED=typeof CQ_IS_HOOKED!="undefined"?CQ_IS_HOOKED:undefined;
G_CONTENT_PATH=typeof CQ_CONTENT_PATH!="undefined"?CQ_CONTENT_PATH:undefined;
CQ.shared.Form=function(){var e=function(){var j=new Object();
var k=document.getElementsByTagName("label");
for(var h=0;
h<k.length;
h++){var g=k[h].htmlFor;
if(g){j[g]=k[h]
}}return j
};
var f=function(h){var i="";
var g=function(k){if(k.nodeType==3){i+=k.nodeValue
}if(k.nodeName.toLowerCase()=="select"||k.nodeName.toLowerCase()=="input"||k.nodeName.toLowerCase()=="textarea"||k.nodeName.toLowerCase()=="button"){return
}for(var j=0;
k.childNodes&&j<k.childNodes.length;
j++){g(k.childNodes[j])
}};
g(h);
return i
};
var c=function(g){return g.replace(/-\d+$/,"")
};
var b=function(h,g){if(!g){g=e()
}if(g[h]){return f(g[h])
}return null
};
var a=function(i){var h;
var j=i.nodeName.toLowerCase();
var g=d(i,"type")?i.getAttribute("type"):undefined;
if(j=="input"){if(g=="radio"||g=="checkbox"){if(d(i,"checked")){h=i.getAttribute("value")
}}else{if(i.type=="text"){h=i.defaultValue
}else{h=i.value
}}}else{if(j=="textarea"){h=i.value
}else{if(j=="option"&&d(i,"selected")){h=i.getAttribute("value")
}}}return h
};
var d=function(h,g){if(h==null){return false
}return($CQ(h).attr(g)!=undefined)
};
return{searchArray:function(h,g,k){for(var j=0;
j<h.length;
j++){if(h[j][g]&&h[j][g]==k){return h[j]
}}return null
},getLabelForField:function(g,i){if(!i){i=e()
}var j=g.getAttribute("id");
if(j&&i[j]){return f(i[j])
}var h=g.parentNode;
while(h){if(h.nodeName.toLowerCase()=="label"){return f(h)
}h=h.parentNode
}return g.getAttribute("name")
},getFields:function(){var j=e();
var g=[];
var h=function(n,o){var m=n.getAttribute("name");
var p=n.nodeName.toLowerCase();
var r;
if(p=="input"||p=="textarea"){var l=d(n,"type")?n.getAttribute("type").toLowerCase():"text";
if(l=="button"||l=="submit"||l=="reset"){return
}r=CQ.shared.Form.searchArray(g,"value",m);
if(!r){g.push({text:CQ.shared.Form.getLabelForField(n,j),value:m,name:m,enumeration:undefined,local:o,type:p,defaultValue:a(n),node:n});
r=g[g.length-1]
}if(l=="radio"||(r.local&&l=="checkbox")){if(!r.enumeration){var s=n.getAttribute("id");
if(s){var u=c(s);
var t=b(u,j);
r.text=(t?t:m)
}else{r.text=m
}r.enumeration=[]
}r.enumeration.push({text:CQ.shared.Form.getLabelForField(n,j),value:n.getAttribute("value"),defaultValue:a(n),node:n})
}}else{if(p=="select"){g.push({text:CQ.shared.Form.getLabelForField(n,j),value:m,name:m,enumeration:[],local:o,type:p,defaultValue:undefined,node:n});
r=g[g.length-1];
var k=n.getElementsByTagName("option");
for(var q=0;
q<k.length;
q++){r.enumeration.push({text:k[q].innerHTML,value:k[q].getAttribute("value"),defaultValue:a(k[q]),node:k[q]})
}}}};
var i=function(m,l){if(m.nodeName.toLowerCase()=="div"&&$CQ(m).hasClass("section")){l=true
}if(m.getAttribute&&m.getAttribute("name")){h(m,l)
}for(var k=0;
m.childNodes&&k<m.childNodes.length;
k++){var n=m.childNodes[k];
if(n.nodeType==1){i(n,l)
}}};
i(document,false);
return g
}}
}();
CQ.shared.User=function(infoData){return{data:null,language:null,userPropsPath:null,getUserPropsUrl:function(){if(!this.userPropsPath){this.userPropsPath=CQ.shared.User.PROXY_URI
}return this.userPropsPath
},load:function(){var url=this.getUserPropsUrl();
url=CQ.shared.HTTP.noCaching(url);
var response=CQ.shared.HTTP.get(url);
if(CQ.shared.HTTP.isOk(response)){this.data=CQ.shared.Util.eval(response)
}},init:function(infoData,force){if(!this.initialized||force){if(infoData){this.data=infoData
}else{this.load()
}this.initialized=true
}return this.data
},lazyInit:function(){this.lazyLoad=function(){this.load();
this.initialized=true
}
},isInitialized:function(){return this.initialized
},getLanguage:function(){if(!this.isInitialized()&&this.lazyLoad){this.lazyLoad.call(this)
}this.language=this.data&&this.data.preferences&&this.data.preferences["language"]?this.data.preferences["language"]:"en";
return this.language
}}
}();
CQ.shared.User.PROXY_URI=CQ.shared.HTTP.externalize("/libs/cq/security/userinfo"+CQ.shared.HTTP.EXTENSION_JSON);
CQ.shared.User.lazyInit();
CQ.shared.I18n.init({locale:function(){return CQ.shared.User.getLanguage()
},urlPrefix:"/libs/cq/i18n/dict."});