function Interact(){this.sessionId="";
this.marketingRegion="";
this.businessSegment="";
this.marketingPageId="";
this.isNewVisitor=false;
this.s_vi_low="";
this.s_vi_high="";
this.referrer="";
this.icid="";
this.cid="";
this.s_days_since="";
this.isValidVisitor=true;
this.debugOffers=false;
this.offerPlacements=new Array();
this.registerOfferPlacement=function(e,d,b){var c={id:e,baseURL:d,showDebug:b};
this.offerPlacements.push(c)
};
this.loadOffers=function(){for(iCount=0;
iCount<this.offerPlacements.length;
iCount++){var b=this.offerPlacements[iCount];
var d=this.sessionId;
var c=b.baseURL+"s_vi="+d+"&divId="+b.id+"&businessSegment="+this.businessSegment;
c=c+"&marketingRegion="+this.marketingRegion+"&marketingPageId="+this.marketingPageId;
if(b.showDebug){c=c+"&debug_offers=true"
}var e=$("#renderoffers-"+b.id);
b.startOfLoad=new Date().getTime();
e.load(c)
}};
this.postNavEventComplete=false;
this.postNavEventStart=0;
this.postNavEventEnd=0;
this.postNavEventDuration=0;
this.postNavEvent=function(){if(Interact.postNavEventComplete){return
}this.initEnd=new Date().getTime();
this.initDuration=this.initEnd-this.initStart;
if(debugOffers){console.log("Duration to init interact  is "+this.initDuration)
}this.postNavEventStart=new Date().getTime();
var c=this.offerPlacements.length;
this.s_days_since=s.getDaysSinceLastVisit("s_days_since");
if(this.s_days_since!=null&&this.s_days_since=="First Visit"){this.isNewVisitor=true
}var b="sessionId="+this.sessionId+"&iCount="+c+"&isNewVisitor="+this.isNewVisitor+"&businessSegment="+this.businessSegment;
$.ajax({url:"/bin/postNavEventInteractOnPageLoad.html",type:"POST",data:b,dataType:"json",success:function(e,f,d){Interact.postNavEventEnd=new Date().getTime();
Interact.postNavEventDuration=Interact.postNavEventEnd-Interact.postNavEventStart;
if(debugOffers){console.log("Duration to start session  is "+Interact.postNavEventDuration)
}responseObject=JSON.parse(d.responseText);
Interact.sessionId=responseObject[0].sessionId;
Interact.s_vi_low=responseObject[0].s_vi_low;
Interact.s_vi_high=responseObject[0].s_vi_high;
Interact.collectData();
Interact.loadOffers(Interact.sessionId)
}})
};
this.collectData=function(){if(typeof s=="undefined"){return
}if(typeof document.referrer!="undefined"&&document.referrer.length>0){var b=document.referrer;
this.referrer=b.match(/:\/\/([^/]+)\//)[1]
}this.icid=s.c_r("s_ev21_tc").substring(0,254);
this.cid=s.c_r("s_cmp_tc").substring(0,254);
if(this.sessionId==="cookies-disabled"||this.sessionId==="bot-detected"){this.isValidVisitor=false
}};
this.addHiddenFormFieldsComplete=false;
this.addHiddenFormFields=function(d){if(Interact.addHiddenFormFieldsComplete){return true
}Interact.addHiddenFormFieldsComplete=true;
if(typeof d=="undefined"){return true
}if(!this.isValidVisitor){return
}var e=document.getElementById("hiddenFields");
if(typeof e==="undefined"||e===null){return
}e.innerHTML="";
var g='<input type="hidden" class="tracking_icid" name="icid" value="'+Interact.icid+'"/>';
e.innerHTML+=g;
var h='<input type="hidden" class="tracking_cid" name="cid" value="'+Interact.cid+'"/>';
e.innerHTML+=h;
var f='<input type="hidden" class="tracking_s_vi" name="s_vi" value="'+Interact.sessionId+'"/>';
e.innerHTML+=f;
var i='<input type="hidden" class="tracking_post_visid_low" name="post_visid_low" value="'+Interact.s_vi_low+'"/>';
e.innerHTML+=i;
var b='<input type="hidden" class="tracking_post_visid_high" name="post_visid_high" value="'+Interact.s_vi_high+'"/>';
e.innerHTML+=b;
var c='<input type="hidden" class="tracking_refer_domain_nm" name="refer_domain_nm" value="'+Interact.referrer+'"/>';
e.innerHTML+=c
};
this.addOmnitureFieldsComplete=false;
this.addOmnitureFields=function(){if(typeof s=="undefined"){return
}if(!this.isValidVisitor){return
}this.addOmnitureFieldsComplete=true;
if(s.linkTrackVars.length>0){s.linkTrackVars=s.linkTrackVars+","
}s.linkTrackVars=s.linkTrackVars+"prop24,prop21,prop22,prop27,prop30,prop38";
s.prop24=Interact.sessionId;
s.prop21=Interact.s_vi_low;
s.prop22=Interact.s_vi_high;
s.prop27=Interact.cid;
s.prop30=Interact.icid;
s.prop38=Interact.referrer
};
this.postEventToInteractServlet=function(e,c,d){if(typeof c=="undefined"||c==""){return true
}var b="sessionId="+e+"&treatmentCode="+c+"&eventType="+d;
$.ajax({url:"/bin/postIteractEvent.html",type:"POST",data:b,dataType:"json"})
};
this.offersLoaded=0;
this.recordPlacementLoadTime=function(c){for(iCount=0;
iCount<this.offerPlacements.length;
iCount++){var b=this.offerPlacements[iCount];
if(b.id==c){b.endOfLoad=new Date().getTime();
b.loadDuration=b.endOfLoad-b.startOfLoad;
if(debugOffers){console.log("Duration to get offer "+b.id+" is "+b.loadDuration)
}this.offersLoaded=this.offersLoaded+1;
iCount=999
}}if(this.offersLoaded==this.offerPlacements.length){this.postNavEventComplete=true
}};
this.recordOfferDetails=function(f,c,b,e){for(iCount=0;
iCount<this.offerPlacements.length;
iCount++){var d=this.offerPlacements[iCount];
if(d.id==f){d.icid=c;
d.treatmentCode=b;
d.landingUrl=e;
iCount=999
}}};
this.initOfferAcceptanceActions=function(g,h,d,b,e){var c=$("#renderoffers-"+g);
var f=false;
c.find("a").each(function(){f=true;
var i=this.href;
if(e!=null&&e.length>0){var j="icid";
i=Interact.removeParameter(e,j)
}if(d!=null&&d.length>0){var k="icid";
i=Interact.removeParameter(i,k);
if(i.indexOf("?")==-1){i=i+"?"
}if(i.indexOf("?")!=i.length-1){i=i+"&"
}i=i+"icid="+d;
this.href=i
}$(this).click(function(){Interact.postEventToInteractServlet(h,b,"accept");
return true
})
});
if(f==false){c.find("img").each(function(){if(e!=null&&e.length>0){var i="icid";
href=Interact.removeParameter(e,i)
}if(d!=null&&d.length>0){var j="icid";
href=Interact.removeParameter(href,j);
if(href.indexOf("?")==-1){href=href+"?"
}if(href.indexOf("?")!=href.length-1){href=href+"&"
}href=href+"icid="+d;
this.href=href
}$(this).wrap($("<a/>").attr("href",href))
});
$(this).click(function(){Interact.postEventToInteractServlet(h,b,"accept");
return true
})
}};
this.removeParameter=function(c,j){var f=c.split("?");
if(f.length>=2){var b=f.shift();
var h=f.join("?");
var g=encodeURIComponent(j)+"=";
var e=h.split(/[&;]/g);
for(var d=e.length;
d-->0;
){if(e[d].lastIndexOf(g,0)!==-1){e.splice(d,1)
}}c=b+"?"+e.join("&")
}return c
};
this.getCookie=function(h){var f=h+"=";
var b=document.cookie.split(";");
for(var d=0;
d<b.length;
d++){var g=b[d];
while(g.charAt(0)==" "){g=g.substring(1,g.length)
}if(g.indexOf(f)==0){var e=g.substring(f.length,g.length);
return e
}}return null
};
this.sessionId=this.getCookie("s_vi");
this.monitorCookie=function(){var b=this.getCookie("s_vi");
if(b==null){b=this.sessionId
}if(this.sessionId!=b){window.clearInterval(this.monitorCookieId);
this.sessionId=b;
this.postNavEvent()
}};
this.monitorCookieId=null;
this.monitorjQuery=function(b,c){if(window.element){c()
}else{window.setTimeout(function(){monitorjQuery(b,c)
},100)
}};
this.getUrlParameter=function a(c){var f=decodeURIComponent(window.location.search.substring(1)),e=f.split("&"),g,d,b=false;
for(d=0;
d<e.length;
d++){g=e[d].split("=");
if(g[0]===c){b=g[1]===undefined?true:g[1];
break
}}return b
};
this.initComplete=false;
this.initStart=new Date().getTime();
this.initEnd=0;
this.initDuration=0;
this.init=function(){if(Interact.initComplete){return
}Interact.initComplete=true;
if(typeof s=="undefined"){return
}if(typeof businessSegment!="undefined"){this.businessSegment=businessSegment
}if(typeof marketingRegion!="undefined"){this.marketingRegion=marketingRegion
}if(typeof marketingPageId!="undefined"){this.marketingPageId=marketingPageId
}debugOffers=this.getUrlParameter("debug_offers");
if(typeof debugOffers!="undefined"){this.debugOffers=debugOffers
}this.cookielessUserDetected=false;
if(s.cookiesEnabled=="N"){this.cookielessUserDetected=true;
this.sessionId="cookies-disabled"
}if((typeof this.sessionId=="undefined"||this.sessionId==null)&&!this.cookielessUserDetected){this.monitorCookieId=window.setInterval("Interact.monitorCookie()",250)
}else{this.postNavEvent()
}}
}var Interact=new Interact();
(function(){if(typeof $!="undefined"){$(document).ready(function(){Interact.init()
})
}else{Interact.monitorjQuery($,function(){Interact.init()
})
}})();
(function(a){a.fn.showhide=function(b){var c=a.extend({},a.fn.showhide.defaults,b);
return this.each(function(){var e=this.className,d='<a href="#" class="'+c.toggleClass+" "+c.hiddenClass+'">'+c.moreText+"</a>";
a("."+e).each(function(){a(this).after(d);
a(this).hide()
});
a("."+c.toggleClass).toggle(function(){a(this).removeClass(c.hiddenClass).addClass(c.visibleClass).html(c.lessText).prev("."+e).slideDown(100)
},function(){a(this).removeClass(c.visibleClass).addClass(c.hiddenClass).html(c.moreText).prev("."+e).slideUp(100)
});
return false
})
};
a.fn.showhide.defaults={toggleClass:"toggle-view",hiddenClass:"toggle-hidden",visibleClass:"toggle-visible",moreText:"View more",lessText:"View less"}
})(jQuery);
var countryInfo={country:[{CountryCode:"",CountryName:"",CountryFlag:"",CountryPhone:"&nbsp;",CountrySupportHours:"&nbsp;",CountryLanguages:""}]};
function CFC_popup(c,b,d){var f=500;
var e=400;
b=b.replace(" ","");
if(c.indexOf("/")==0){c=""+c
}if(d.indexOf("width")==-1){d+=",width="+f
}if(d.indexOf("height")==-1){d+=",height="+e
}var a=window.open(c,b,d);
a.focus()
}function getIEVersion(){var b=navigator.userAgent;
var a=b.indexOf("MSIE");
if(a==-1){return
}return parseFloat(b.substring(a+5))
}function nextEmail(a,d,b){$("#cluetip").width("258px");
$("#ttEmailFormButton").width("125px");
$("#cluetip-inner").load(a,function(){$("a.cluetip-close").click(function(){$("#cluetip-inner").empty();
$("#cluetip").hide();
return false
});
$("#ttEmailFormButton").bind("click",function(){var h="";
var i="";
var g=false;
var o=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var l=document.getElementById("ttEmailFormTo");
var m=document.getElementById("ttEmailFormFrom");
var k=document.getElementById("ttEmailFormSubject");
var n=document.getElementById("ttEmailFormMessage");
var f=false;
if(l.value==""){h="Please Provide Collegues Email <br />";
g=true
}else{if(o.test(l.value)!=true){g=true;
h="Your collegues email address is not valid <br />"
}}if(m.value==""){i="Please Provide Your Email <br />";
g=true
}else{if(o.test(m.value)!=true){g=true;
i="Your email address is not valid"
}}if(g==true){var j=document.getElementById("errormsg");
j.innerHTML="The following errors occured <br />"+h+i
}else{var e=document.getElementById("ttEmailFormURL");
e=e.value;
$.ajax({type:"GET",url:e,async:true,data:"to="+l.value+"&from="+m.value+"&subject="+encodeURIComponent(k.value)+"&message="+encodeURIComponent(n.value)+"&currentHandle="+encodeURIComponent(b)+"&url="+e,success:function(p){$("#cluetip-inner").load(d,function(){$("a.cluetip-close").click(function(){$("#cluetip-inner").empty();
$("#cluetip").hide();
return false
})
})
},error:function(p){$("#cluetip-inner").empty();
$("#cluetip").hide();
return false
}})
}return false
})
});
var c=parseInt($("#cluetip").css("left"))-153;
if(document.getElementById("cluetip-head")==null){$("#cluetip").css("left",c+"px")
}return false
}function nextTip(a,c,b){$("#cluetip").width(c+"px");
$("#cluetip").height(a+"px");
var d=parseInt($("#cluetip").css("left"))-(c-100);
$("#cluetip").css("left",d+"px");
$("#cluetip-inner").load(b,function(){$("a.cluetip-close").click(function(){$("#cluetip-inner").empty();
$("#cluetip").hide();
return false
})
});
return false
}function getCountryIcon(){return"/shared-static/images/icons/flags/"+countryInfo.country[0].CountryFlag
}function getCountryHeaderName(){return countryInfo.country[0].CountryName
}function getCountryPhone(){return countryInfo.country[0].CountryPhone
}function getCountrySupportHours(){return countryInfo.country[0].CountrySupportHours
}function getCountryLanguages(){return countryInfo.country[0].CountryLanguages
}function findValue(a){if(a==null){return alert("No match!")
}if(!!a.extra){var b=a.extra[0]
}else{var b=a.selectValue
}}function selectItem(a){findValue(a)
}function formatItem(a){return a[0]
}$(document).ready(function(){$("a#slidein").click(function(){$("div#loginWrap").find("div#loginBox:hidden").slideDown("slow");
$("div#loginExpand").hide();
$("div#loginContract").show()
});
$("a#slideout").click(function(){$("div#loginWrap").find("div#loginBox:visible").slideUp("slow");
$("div#loginContract").hide();
$("div#loginExpand").show()
});
$("div#loginContract").hide();
$("div#loginBox").hide();
$("#contentQuickForm input").focus(function(){$(this).addClass("focused")
}).blur(function(){$(this).removeClass("focused")
});
$("div#loginExpand").show();
$("span.selected ~ ul").show()
});
$j(document).ready(function(){$j(".rte-table-cvc th, .rte-table-cvc td").hover(function(){var a=parseInt($j(this).index())+1;
var b=$j(this).parents("table");
if(a>1){b.find("td:nth-child("+a+")").css("background-color","#ebf2fa");
b.find("th:nth-child("+a+")").css("background-color","#ebf2fa")
}},function(){var a=parseInt($j(this).index())+1;
var b=$j(this).parents("table");
if(a>1){b.find("td:nth-child("+a+")").css("background-color","transparent");
b.find("th:nth-child("+a+")").css("background-color","transparent")
}})
});