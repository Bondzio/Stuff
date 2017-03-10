!function(a){var c=(function(){function d(){this.fadeDuration=500;
this.fitImagesInViewport=true;
this.resizeDuration=700;
this.positionFromTop=50;
this.showImageNumberLabel=true;
this.alwaysShowNavOnTouchDevices=true;
this.wrapAround=true;
this.showThumbnails=true
}d.prototype.albumLabel=function(e,f){return"Image "+e+" of "+f
};
return d
})();
var b=(function(){function d(e){this.options=e;
this.album=[];
this.currentImageIndex=void 0;
this.built=false;
this.init()
}d.prototype.init=function(){this.enable()
};
d.prototype.enable=function(){var e=this;
a("body").on("click","a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]",function(f){e.start(a(f.currentTarget));
return false
})
};
d.prototype.build=function(){if(this.built){return
}this.built=true;
var e=this;
var j=a("<div id='lightboxOverlay' class='lightboxOverlay'></div>");
var g=a("<div id='lightbox' class='lightbox'></div>");
var i=a("<div class='lb-outerContainer'> <div class='lb-container'> <div class='lb-closeContainer'><a class='lb-close'>&times;</a></div><img class='lb-image' src=''/> <div class='lb-nav'><span class='lb-prev'></span><span class='lb-next'></span></div><div class='lb-loader'><span class='loading-wheel loading-wheel-lg'></span></div></div></div>");
var h=a("<div class='lb-dataContainer'> <div class='lb-headline'></div><div class='lb-data'> <div class='lb-details'><span class='lb-caption'></span></div></div></div>");
g.append(i,h);
a("body").append(j,g);
this.$lightbox=a("#lightbox");
this.$overlay=a("#lightboxOverlay");
this.$outerContainer=this.$lightbox.find(".lb-outerContainer");
this.$container=this.$lightbox.find(".lb-container");
this.containerTopPadding=parseInt(this.$container.css("padding-top"),10);
this.containerRightPadding=parseInt(this.$container.css("padding-right"),10);
this.containerBottomPadding=parseInt(this.$container.css("padding-bottom"),10);
this.containerLeftPadding=parseInt(this.$container.css("padding-left"),10);
if(this.options.showThumbnails){var f=a("<div class='lb-thumbContainer'></div>");
f.insertBefore(this.$lightbox.find(".lb-prev"));
this.$thumbnailContainer=a(".lb-thumbContainer")
}this.$overlay.hide().on("click",function(){e.end();
return false
});
this.$lightbox.hide().on("click",function(k){if(a(k.target).attr("id")==="lightbox"){e.end()
}return false
});
this.$outerContainer.on("click",function(k){if(a(k.target).attr("id")==="lightbox"){e.end()
}return false
});
this.$lightbox.find(".lb-prev").on("click",function(){if(e.currentImageIndex===0){e.changeImage(e.album.length-1)
}else{e.changeImage(e.currentImageIndex-1)
}return false
});
this.$lightbox.find(".lb-next").on("click",function(){if(e.currentImageIndex===e.album.length-1){e.changeImage(0)
}else{e.changeImage(e.currentImageIndex+1)
}return false
});
this.$lightbox.find(".lb-loader, .lb-close").on("click",function(){e.end();
return false
})
};
d.prototype.start=function(n){this.build();
var w=this;
var g=a(window);
g.on("resize",a.proxy(this.sizeOverlay,this));
a("select, object, embed").css({visibility:"hidden"});
this.sizeOverlay();
this.album=[];
var v=0;
function q(i){w.album.push({link:i.attr("href"),headline:i.attr("data-headline")||i.attr("headline"),title:i.attr("data-title")||i.attr("title")})
}var p=n.attr("data-lightbox");
var r;
if(p){r=a(n.prop("tagName")+'[data-lightbox="'+p+'"]');
for(var m=0;
m<r.length;
m=++m){q(a(r[m]));
if(r[m]===n[0]){v=m
}}}else{if(n.attr("rel")==="lightbox"){q(n)
}else{r=a(n.prop("tagName")+'[rel="'+n.attr("rel")+'"]');
for(var l=0;
l<r.length;
l=++l){q(a(r[l]));
if(r[l]===n[0]){v=l
}}}}if(this.options.showThumbnails&&a(".lb-thumb").length===0){var s='<div class="lb-thumbColumn">';
for(var u=0;
u<this.album.length;
u++){var e=this.album[u].link;
if(u%10===9){s+='<img class="lb-thumb"  data-thumb-value='+u+' src="'+e+'"></div><div class="lb-thumbColumn">'
}else{s+='<img class="lb-thumb"  data-thumb-value='+u+' src="'+e+'">'
}}this.$thumbnailContainer.append(s);
var f=0;
a(".lb-thumbColumn").each(function(){var i=a(this).width();
f+=i
});
var k=f+40;
this.$thumbnailContainer.css("margin-left",-Math.abs(k))
}if(this.options.showThumbnails&&a(".lb-thumb").length>1){this.$thumb=this.$lightbox.find(".lb-thumb");
this.$lightbox.find(".lb-thumb").each(function(){var i=a(this).attr("data-thumb-value");
if(i==v){a(this).addClass("active")
}});
this.$lightbox.find(".lb-thumb").on("click",function(){a(".lb-thumb").removeClass("active");
a(this).addClass("active");
var i=a(this).attr("data-thumb-value");
var j=parseInt(i);
w.changeImage(j);
return false
})
}else{if(this.options.showThumbnails&&a(".lb-thumb").length<=1){this.$thumbnailContainer.hide()
}}var o=g.scrollTop()+this.options.positionFromTop;
var h=g.scrollLeft();
this.$lightbox.css({top:o+"px",left:h+"px"}).fadeIn(this.options.fadeDuration);
this.changeImage(v)
};
d.prototype.changeImage=function(h){var f=this;
this.disableKeyboardNav();
var g=this.$lightbox.find(".lb-image");
this.$overlay.fadeIn(this.options.fadeDuration);
a(".lb-loader").fadeIn("slow");
this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-headline, .lb-caption").hide();
this.$outerContainer.addClass("animating");
var e=new Image();
e.onload=function(){var m,j,k,o,i,n,l;
g.attr("src",f.album[h].link);
m=a(e);
g.width(e.width);
g.height(e.height);
if(f.options.fitImagesInViewport){l=a(window).width();
n=a(window).height();
i=l-f.containerLeftPadding-f.containerRightPadding-100;
o=n-f.containerTopPadding-f.containerBottomPadding-120;
if((e.width>i)||(e.height>o)){if((e.width/i)>(e.height/o)){k=i;
j=parseInt(e.height/(e.width/k),10);
g.width(k);
g.height(j)
}else{j=o;
k=parseInt(e.width/(e.height/j),10);
g.width(k);
g.height(j)
}}}f.sizeContainer(g.width(),g.height())
};
e.src=this.album[h].link;
this.currentImageIndex=h;
if(this.options.showThumbnails&&a(".lb-thumb").length>1){this.$lightbox.find(".lb-thumb").each(function(){a(this).removeClass("active");
var i=a(this).attr("data-thumb-value");
if(i==h){a(this).addClass("active")
}})
}};
d.prototype.sizeOverlay=function(){this.$overlay.width(a(window).width()).height(a(document).height())
};
d.prototype.sizeContainer=function(i,e){var h=this;
var g=this.$outerContainer.outerWidth();
var l=this.$outerContainer.outerHeight();
var k=i+this.containerLeftPadding+this.containerRightPadding;
var f=e+this.containerTopPadding+this.containerBottomPadding;
function j(){h.$lightbox.find(".lb-dataContainer").width(k);
h.$lightbox.find(".lb-prevLink").height(f);
h.$lightbox.find(".lb-nextLink").height(f);
h.showImage()
}if(g!==k||l!==f){this.$outerContainer.animate({width:k},this.options.resizeDuration,"swing",function(){j()
})
}else{j()
}};
d.prototype.showImage=function(){this.$lightbox.find(".lb-loader").hide();
this.$lightbox.find(".lb-image").fadeIn("slow");
this.updateNav();
this.updateDetails();
this.preloadNeighboringImages();
this.enableKeyboardNav()
};
d.prototype.updateNav=function(){var f=false;
try{document.createEvent("TouchEvent");
f=(this.options.alwaysShowNavOnTouchDevices)?true:false
}catch(g){}this.$lightbox.find(".lb-nav").show();
if(this.album.length>1){if(this.options.wrapAround){if(f){this.$lightbox.find(".lb-prev, .lb-next").css("opacity","1")
}this.$lightbox.find(".lb-prev, .lb-next").show()
}else{if(this.currentImageIndex>0){this.$lightbox.find(".lb-prev").show();
if(f){this.$lightbox.find(".lb-prev").css("opacity","1")
}}if(this.currentImageIndex<this.album.length-1){this.$lightbox.find(".lb-next").show();
if(f){this.$lightbox.find(".lb-next").css("opacity","1")
}}}}};
d.prototype.updateDetails=function(){var e=this;
if(typeof this.album[this.currentImageIndex].title!=="undefined"&&this.album[this.currentImageIndex].title!==""){this.$lightbox.find(".lb-caption").html(this.album[this.currentImageIndex].title).fadeIn("fast").find("a").on("click",function(f){location.href=a(this).attr("href")
})
}if(typeof this.album[this.currentImageIndex].headline!=="undefined"&&this.album[this.currentImageIndex].headline!==""){this.$lightbox.find(".lb-headline").html(this.album[this.currentImageIndex].headline).fadeIn("fast")
}if(this.album.length>1&&this.options.showImageNumberLabel){this.$lightbox.find(".lb-number").text(this.options.albumLabel(this.currentImageIndex+1,this.album.length)).fadeIn("fast")
}else{this.$lightbox.find(".lb-number").hide()
}this.$outerContainer.removeClass("animating");
this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration,function(){return e.sizeOverlay()
})
};
d.prototype.preloadNeighboringImages=function(){if(this.album.length>this.currentImageIndex+1){var f=new Image();
f.src=this.album[this.currentImageIndex+1].link
}if(this.currentImageIndex>0){var e=new Image();
e.src=this.album[this.currentImageIndex-1].link
}};
d.prototype.enableKeyboardNav=function(){a(document).on("keyup.keyboard",a.proxy(this.keyboardAction,this))
};
d.prototype.disableKeyboardNav=function(){a(document).off(".keyboard")
};
d.prototype.keyboardAction=function(h){var j=27;
var i=37;
var f=39;
var e=h.keyCode;
var g=String.fromCharCode(e).toLowerCase();
if(e===j||g.match(/x|o|c/)){this.end()
}else{if(g==="p"||e===i){if(this.currentImageIndex!==0){this.changeImage(this.currentImageIndex-1)
}else{if(this.options.wrapAround&&this.album.length>1){this.changeImage(this.album.length-1)
}}}else{if(g==="n"||e===f){if(this.currentImageIndex!==this.album.length-1){this.changeImage(this.currentImageIndex+1)
}else{if(this.options.wrapAround&&this.album.length>1){this.changeImage(0)
}}}}}};
d.prototype.end=function(){this.disableKeyboardNav();
a(window).off("resize",this.sizeOverlay);
this.$lightbox.fadeOut(this.options.fadeDuration);
this.$overlay.fadeOut(this.options.fadeDuration);
a("select, object, embed").css({visibility:"visible"})
};
return d
})();
a(function(){var d=new c();
var e=new b(d)
})
}(window.$j);
function urlParams(b){b=b.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
var a="[\\?&]"+b+"=([^&#]*)";
var d=new RegExp(a);
var c=d.exec(window.location.search);
if(c==null){return""
}else{return decodeURIComponent(c[1].replace(/\+/g," "))
}}!function(a){a(function(){var d=urlParams("param1");
var c=urlParams("param2");
a("#imageGalleryKeyword").val(d);
a("#imageGalleryCategory").val(c);
a("#imageGalleryCategory").on("change",function(){a("#imageGalleryForm").submit()
});
a("#imageGalleryForm").on("submit",function(){b()
});
function b(){var f=a("#imageGalleryCategory").val(),e=a("#imageGalleryKeyword").val();
a('input[name="param1"]').val(e);
a('input[name="param2"]').val(f)
}})
}(window.$j);
(function(a){a.fn.carouselgroups=function(){return this.each(function(){var j=a(this),k=j.find("[class^=span]"),g=j.find(".thumbnail"),d=j.find(".carousel-inner"),e=j.find(".carousel-control"),f=j.width(),c=3,h=0;
if(f===950){var c=4;
j.addClass("wide")
}var l=Math.max.apply(null,g.map(function(){return a(this).outerHeight(true)
}).get());
d.height(l);
for(h=0;
h<k.length;
h+=c){k.slice(h,h+c).wrapAll('<div class="item"><ul class="thumbnails"></ul></div>')
}j.find(".item:first").addClass("active");
var b=j.outerHeight();
e.css("line-height",b+"px")
})
}
})($j);
var pageNo=1;
var filteredCall=false;
var noOfRecord=0;
var ajaxRunningStatus=false;
var paging=0;
var jsonResultSet;
var pageNumber;
var eventSelected="";
var appSelected="";
var startDateSelected="";
var endDateSelected="";
var countrySelected="";
var preSelectedFacets=[];
var status="";
var countryCode="";
var clearHTML=true;
var previousPage;
var showMessage="";
var allEventOptionTxt="";
var allAppOptionTxt="";
var allCountryOptionTxt="";
function setJsValues(a,b){noOfRecord=a;
countryCode=b
}function eventPaginationHTMLTemplate(g,a){var h=$("#"+a);
h.empty();
if(g.hasOwnProperty("total")){var b=$("<div class='pagination'/>");
var e=noOfRecord*(pageNo-1);
var d=parseInt(e)+parseInt(noOfRecord);
var c=g.total;
if(d<c){var f=$('<a href="javascript:void(0);" onclick="viewMoreEvents();"/>').html("View More").appendTo(b).appendTo(h)
}}}function viewMoreEvents(){pageNo=pageNo+1;
clearHTML=false;
eventListHTMLTemplate(jsonResultSet,"eventListContainer");
eventPaginationHTMLTemplate(jsonResultSet,"eventPagination");
return false
}function eventListHTMLTemplate(p,x){jsonResultSet=p;
var a;
if(clearHTML){$("#eventListContainer").empty();
a=$("<ul id='eventUL'/>").appendTo($("#eventListContainer"))
}else{a=$("#eventListContainer ul#eventUL")
}if(p.hasOwnProperty("events")){var c=p.events;
var F=noOfRecord*(pageNo-1);
var r=parseInt(F)+parseInt(noOfRecord);
if(p.total<r){r=p.total
}for(var y=F;
y<r;
y++){var v=c[y];
var w=$("<li class='eventContainer'/>");
var f=$("<figure class='eventInfo'/>");
var h=$("<img class='eventThummb'/>");
var l=$("<a />").attr("href",v.ePath);
if(v.hasOwnProperty("eThumbnail")&&v.eThumbnail.length>0){var m=v.eThumbnail;
if(m!=null&&m!=""){if(m.length>0){l.append(h.attr("src",v.eThumbnail)).appendTo(f)
}}}else{var s="/etc/designs/lifetech/clientlibs/sharedstatic/img/events-thumb.jpeg";
l.append(h.attr("src",s)).appendTo(f)
}var b=$("<figcaption class='eventDtl'/>");
if(v.hasOwnProperty("eType")){var n=v.eType;
if(n!=null&&n!=""){if(n.length>0){var k=$("<span class='eventType label label-info pull-right'/>").html(v.eType).appendTo(b)
}}}if(v.hasOwnProperty("ePath")&&v.hasOwnProperty("eTitle")){var q=$('<a class="link-action"/>').attr("href",v.ePath).attr("alt",v.eTitle).attr("title",v.eTitle).html(v.eTitle);
var o=$("<h3 class='eventTitle'/>").append(q).appendTo(b)
}if(v.hasOwnProperty("eSchedule")){var E=v.eSchedule;
var e="";
if(E.hasOwnProperty("eStartDate")){e=E.eStartDate
}var C="";
if(E.hasOwnProperty("eEndDate")){C=E.eEndDate
}if(e.length>0&&C.length>0){var B=$("<span class='eventSchedule'/>").html(e+" - "+C).appendTo(b)
}if(e.length>0&&C.length==0){var B=$("<span class='eventSchedule'/>").html(e).appendTo(b)
}}if(v.hasOwnProperty("props")){var G=v.props;
if(G!=null&&G!=""){var A=$("<span class='eventProps' style='inline-block'/>");
for(var u=0;
u<G.length;
u++){var d=G[u];
var g=$('<span class="prop"/>').html("<strong>"+d.name+": "+(d.vtype=="cur"?"$":"")+d.value+"</strong>").appendTo(A)
}A.appendTo(b)
}}if(v.hasOwnProperty("eVenue")){var z=$("<span/>").addClass("eventLocation").html(v.eVenue).appendTo(b)
}if(v.hasOwnProperty("eDesc")){var t=v.eDesc;
var D=$("<span class='eventDescription'/>").append(t).appendTo(b)
}b.appendTo(f);
f.appendTo(w);
a.append(w)
}}else{$noEventFound=$('<div class="noResultFound"/>');
$noEventFound.html(showMessage);
$("#eventListContainer").append($noEventFound)
}}function loadEvents(o,b,e,c,j,d,f,a,n,g,m,i,l,h){if(null==d){d=""
}var k="";
if(m!=null&&m.length>0){k=m.toString()
}showMessage=g;
allEventOptionTxt=i;
allAppOptionTxt=l;
allCountryOptionTxt=h;
if(!ajaxRunningStatus){ajaxRunningStatus=true;
startLoadingAnimation();
console.log("***LoadEvents eventType ="+b);
console.log("***LoadEvent sappType ="+e);
console.log("***LoadEvents startDate ="+c);
console.log("**LoadEvents endDate ="+j);
console.log("**LoadEvents country ="+d);
console.log("**LoadEvents searchTerm ="+f);
$.ajax({url:"/bin/eventDataRecordMaster.html",contentType:"application/json;charset=utf-8",data:{eventType:b,appType:e,startDate:c,endDate:j,country:d,searchTerm:encodeURIComponent(f),pageNo:a,freshCall:filteredCall,noOfRecord:n,path:o,preSelectedFacets:k},type:"GET",success:function(p){ajaxRunningStatus=false;
processEventList(p);
$("#eventListLoader").hide()
},error:function(p){ajaxRunningStatus=false
}})
}}function startLoadingAnimation(){var a='<ul id="progress"><li><div id="layer1" class="ball"></div><div id="layer7" class="pulse"></div></li><li><div id="layer2" class="ball"></div><div id="layer8" class="pulse"></div></li><li><div id="layer3" class="ball"></div><div id="layer9" class="pulse"></div></li><li><div id="layer4" class="ball"></div><div id="layer10" class="pulse"></div></li><li><div id="layer5" class="ball"></div><div id="layer11" class="pulse"></div></li></ul>';
$("#eventListLoader").html(a)
}function bindFilterChange(c){var a=$("."+c);
if(a&&a.length>0){a.each(function(d){$(this).change(function(){pageNo=1;
clearHTML=true;
jsonResultSet={};
loadEventsFilterData()
})
})
}$j("#searchfilter").keypress(function(d){if(d.which===13){pageNo=1;
clearHTML=true;
jsonResultSet={};
loadEventsFilterData()
}});
$j('a[href="#red-icon-search-events"]').click(function(){pageNo=1;
clearHTML=true;
jsonResultSet={};
loadEventsFilterData()
});
var b=$("#countryfilter");
b.change(function(){pageNo=1;
clearHTML=true;
jsonResultSet={};
var e=$("#apptypeselect");
if(e.length){e.val("")
}var d=$("#eventtypeselect");
if(d.length){d.val("")
}loadEventsFilterData()
});
$j("#startdatefilter").datepicker().on("change",function(){pageNo=1;
clearHTML=true;
jsonResultSet={};
$(".datepicker").hide();
loadEventsFilterData()
});
$j("#enddatefilter").datepicker().on("change",function(){pageNo=1;
clearHTML=true;
jsonResultSet={};
$(".datepicker").hide();
loadEventsFilterData()
})
}function paginationLoad(a){pageNo=a;
loadEventsFilterData()
}function loadEventsFilterData(){var m=$("#eventtypeselect");
var f=(m.length>0&&m.val()!="")?m.val():eventSelected;
var d=$("#apptypeselect");
var o=(d.length>0&&d.val()!="")?d.val():appSelected;
var p=$("#startdatefilter");
var a=(p.length>0)?p.val():startDateSelected;
var i=$("#enddatefilter");
var c=(i.length>0)?i.val():endDateSelected;
var l=$("#countryfilter");
var q=(l.length>0)?l.val():countrySelected;
var e=$("#searchfilter");
var b=(e.length>0)?e.val():"";
var k=$("#searchEventUnderPath");
var r=(k.length>0)?k.val():"";
var g=showMessage;
var n=allEventOptionTxt;
var h=allAppOptionTxt;
var j=allCountryOptionTxt;
loadEvents(r,f,o,a,c,q,b,pageNo,noOfRecord,g,preSelectedFacets,n,h,j)
}function processEventList(a){processFilters(a);
bindFilterChange("eventFilter");
eventListHTMLTemplate(a,"eventListContainer");
eventPaginationHTMLTemplate(a,"eventPagination")
}function processFilters(b){if(b&&b.hasOwnProperty("facets")){var t=b.facets;
var j="";
var l="";
var q="";
if(b.hasOwnProperty("eventSelected")){j=b.eventSelected
}if(b.hasOwnProperty("appSelected")){l=b.appSelected
}if(b.hasOwnProperty("countrySelected")){q=b.countrySelected
}if(t&&t.hasOwnProperty("appType")){var a=t.appType;
var m=$("#apptypeselect");
var f=[];
if(m.length){m.empty();
m.append($("<option/>").text(allAppOptionTxt).attr("value",""));
$.each(a,function(i,v){f.push([i,v])
});
f.sort(function(v,i){v=v[1];
i=i[1];
return v<i?-1:(v>i?1:0)
});
for(var p=0;
p<f.length;
p++){var u=f[p][0];
var n=f[p][1];
if(l==n){m.append($("<option selected/>").text(u).attr("value",n))
}else{m.append($("<option/>").text(u).attr("value",n))
}}}}if(t&&t.hasOwnProperty("eventType")){var h=t.eventType;
var s=$("#eventtypeselect");
var k=[];
if(s.length){s.empty();
s.append($("<option/>").text(allEventOptionTxt).attr("value",""));
$.each(h,function(i,v){k.push([i,v])
});
k.sort(function(v,i){v=v[1];
i=i[1];
return v<i?-1:(v>i?1:0)
});
for(var p=0;
p<k.length;
p++){var u=k[p][0];
var n=k[p][1];
if(j==n){s.append($("<option selected/>").text(u).attr("value",n))
}else{s.append($("<option/>").text(u).attr("value",n))
}}}}var d=false;
if(t&&t.hasOwnProperty("country")){var o=t.country;
var g=$("#countryfilter");
var e=[];
console.log("countryFilter length = "+g.length);
if(g.length){g.empty();
g.append($("<option/>").text(allCountryOptionTxt).attr("value",""));
$.each(o,function(i,v){if(i!=""){e.push([v,i])
}});
if(!d&&q.length>0){var c="";
var r=o[q];
if(typeof r!="undefined"){c=r
}if(c!=r){e.push([c,q])
}}e.sort(function(v,i){v=v[0];
i=i[0];
return v<i?-1:(v>i?1:0)
});
for(var p=0;
p<e.length;
p++){var u=e[p][0];
var n=e[p][1];
if(q==n){g.append($("<option selected/>").text(u).attr("value",n))
}else{g.append($("<option/>").text(u).attr("value",n))
}}}}filteredCall=true
}}(function(k,m){var g="3.7.3";
var d=k.html5||{};
var h=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;
var c=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;
var r;
var i="_html5shiv";
var a=0;
var o={};
var e;
(function(){try{var u=m.createElement("a");
u.innerHTML="<xyz></xyz>";
r=("hidden" in u);
e=u.childNodes.length==1||(function(){(m.createElement)("a");
var w=m.createDocumentFragment();
return(typeof w.cloneNode=="undefined"||typeof w.createDocumentFragment=="undefined"||typeof w.createElement=="undefined")
}())
}catch(v){r=true;
e=true
}}());
function f(u,w){var x=u.createElement("p"),v=u.getElementsByTagName("head")[0]||u.documentElement;
x.innerHTML="x<style>"+w+"</style>";
return v.insertBefore(x.lastChild,v.firstChild)
}function l(){var u=j.elements;
return typeof u=="string"?u.split(" "):u
}function p(u,v){var w=j.elements;
if(typeof w!="string"){w=w.join(" ")
}if(typeof u!="string"){u=u.join(" ")
}j.elements=w+" "+u;
b(v)
}function q(u){var v=o[u[i]];
if(!v){v={};
a++;
u[i]=a;
o[a]=v
}return v
}function n(x,u,w){if(!u){u=m
}if(e){return u.createElement(x)
}if(!w){w=q(u)
}var v;
if(w.cache[x]){v=w.cache[x].cloneNode()
}else{if(c.test(x)){v=(w.cache[x]=w.createElem(x)).cloneNode()
}else{v=w.createElem(x)
}}return v.canHaveChildren&&!h.test(x)&&!v.tagUrn?w.frag.appendChild(v):v
}function s(w,y){if(!w){w=m
}if(e){return w.createDocumentFragment()
}y=y||q(w);
var z=y.frag.cloneNode(),x=0,v=l(),u=v.length;
for(;
x<u;
x++){z.createElement(v[x])
}return z
}function t(u,v){if(!v.cache){v.cache={};
v.createElem=u.createElement;
v.createFrag=u.createDocumentFragment;
v.frag=v.createFrag()
}u.createElement=function(w){if(!j.shivMethods){return v.createElem(w)
}return n(w,u,v)
};
u.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/[\w\-:]+/g,function(w){v.createElem(w);
v.frag.createElement(w);
return'c("'+w+'")'
})+");return n}")(j,v.frag)
}function b(u){if(!u){u=m
}var v=q(u);
if(j.shivCSS&&!r&&!v.hasCSS){v.hasCSS=!!f(u,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")
}if(!e){t(u,v)
}return u
}var j={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:g,shivCSS:(d.shivCSS!==false),supportsUnknownElements:e,shivMethods:(d.shivMethods!==false),type:"default",shivDocument:b,createElement:n,createDocumentFragment:s,addElements:p};
k.html5=j;
b(m);
if(typeof module=="object"&&module.exports){module.exports=j
}}(typeof window!=="undefined"?window:this,document));
(function(a){a.fn.cellLinesSearch=function(b){var c=a.extend({},a.fn.cellLinesSearch.defaults,b);
return this.each(function(){f(c.cellLinesPath+"*&fq=");
function e(){var j="&fq=";
a("#currentFilters li").each(function(){var l=a(this).find(".filter-value");
j=j+"&fq="+l.data("filtertype")+':"'+l.text()+'"'
});
var h=j;
var k=a("#filtersCellLines input[type=search]").val();
if(k==""){k="*"
}var i=encodeURI("/solr/lt-cq-celllines-core/select?q="+k+h+"&wt=json&indent=true&facet=true&facet.field=tissue&facet.field=tissueType&facet.field=primary&facet.field=phenoType&sort=cellNameStr+asc&rows=600&facet.mincount=1");
f(c.cellLinesPath+k+h)
}function g(j){var k=a("#tableCellLines tbody"),i=a("#no-results");
a.each(j.response.docs,function(l,m){k.append('<tr> <td><a href="'+m.url+'">'+m.cellName+"</a></td><td>"+m.tissueType+"</td><td>"+m.tissue+"</td><td>"+m.phenoType+"</td><td>"+m.primary+"</td> </tr>")
});
var h=k.find("tr").length;
a("#total-rows").text(h);
if(h===0){i.show()
}else{i.hide()
}}function d(h){a.each(h.facet_counts.facet_fields,function(m,n){var l="undefined",j=0;
if(m=="tissue"){l="Tissue";
j=0
}else{if(m=="tissueType"){l="Tissue Type";
j=1
}else{if(m=="primary"){l="Primary";
j=2
}else{if(m=="phenoType"){l="Phenotype";
j=3
}}}}a("#filtersCellLines").append('<div class="filters-group clearix" id='+m+'><h6 class="secondary-sub-header">'+l+"</h6></div>");
for(var k=0;
k<n.length;
k=k+2){a(".filters-group").eq(j).append('<button type="button" class="btn btn-link btn-block" data-filtertype='+m+'><span class="filter-value">'+n[k]+'</span> <span class="filter-count">['+n[k+1]+"]</span></button>")
}});
a(".filters-group").each(function(){var k=a(this),i=k.find("button"),j=i.length,l={};
i.each(function(){var n=a(this),m=n.text();
if(l[m]){n.remove()
}else{l[m]=true
}});
if(j===0){k.remove()
}if(j>5){i.slice(5).addClass("hide-filter");
k.append('<button type="button" class="btn btn-link btn-block show-more-filters">+ Show all '+j+"</button")
}});
a("#currentFilters li").each(function(){var i=a(this).find("span").data("filtertype");
a("#"+i).remove()
})
}function f(h){a("#tableCellLines tbody tr,.filters-group").remove();
a("#cellLinesSearch .loading:first").show();
a.getJSON(h,function(i){g(i);
d(i);
a("#cellLinesSearch .loading:first").hide()
})
}a("#filtersCellLines input[type=search]").live("keyup",function(){e()
});
a('#availableFilters .btn:not(".show-more-filters")').live("click",function(){var i=a(this),h=i.find(".filter-value").text();
clickedType=i.data("filtertype");
a("#currentFilters").fadeIn(200);
a("#currentFilters ul").append('<li><a href="javascript:void(0)" onclick=""><span data-filtertype='+clickedType+' class="filter-value">'+h+"</span></a></li>");
e()
});
a("#currentFilters li").live("click",function(){a(this).remove();
if(a("#currentFilters li").length===0){a("#currentFilters").hide()
}e()
});
a(".show-more-filters").live("click",function(){var h=a(this);
if(h.is(".open")){h.removeClass("open").text(buttonText).parents(".filters-group").find(".hide-filter").hide()
}else{buttonText=h.text();
h.addClass("open").text("- Show less").parents(".filters-group").find(".hide-filter").show()
}})
})
};
a.fn.cellLinesSearch.defaults={cellLinesPath:"/apps/celllines/search?q="}
})($j);
function scrollToHash(f){var c=20;
var e=false;
if(f){var a=$(f);
if(a.length===0){a=$('[name="'+f.substr(1)+'"]')
}if(a.length>0){if(a.is(".tab-pane")||a.is(".tab-content")){var d=$(".nav a[href="+f+"]");
if(d.length>0){a=d
}}else{if(a.is(".accordion-body")){var d=a.closest(".accordion-group");
if(d.length>0){a=d
}}else{e=true
}}var b=a.offset().top;
var g=$(".commerceutilitybar").outerHeight()+c;
b=b-g;
$("body,html").animate({scrollTop:b},150)
}}return e
}$(document).ready(function(){scrollToHash(window.location.hash);
$(".main").on("click",'a[href*="#"]',function(){var a=$(this).attr("href");
if(a.substr(0,1)=="#"){scrollToHash(a)
}})
});