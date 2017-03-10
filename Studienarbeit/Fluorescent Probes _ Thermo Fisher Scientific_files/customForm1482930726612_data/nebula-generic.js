var KAMPYLE_TEMPLATES_MODEL = (function() {

  var templates = {
    "label":    '<div class="form-group" id="{{Unique_name}}Container" data-neb-uuid="{{NebUuid}}" style="display:{{Display}}"><label id="{{Unique_name}}" class="builder-label">{{htmlUnescape}}</label></div>',
    "sectionBreak": '<div class="form-group" id="{{Id}}Container"><div id="{{Id}}" class="sectionBreak"></div></div>',

    "grading":  '<div class="form-group" style="margin-bottom: 5px; display:{{Display}}" data-neb-uuid="{{NebUuid}}">'+
                  '<fieldset id="{{Id}}" data-neb-uuid="{{NebUuid}}" >'+
                    '<legend id="lbl_{{Id}}" class="control-label" style="margin-bottom: 0px;">{{Label}}<span class="required" data-neb-uuid="{{NebUuid}}">*</span></legend>' +
                    '<div class="grading">' +
                        '<input type="radio" id="grade_radio02{{Id}}" class="elementVal" name="{{Id}}" value="1" data-neb-uuid="{{NebUuid}}" onfocus="labelhover(\'lab1{{Id}}\')" onblur="labelhoverout(\'lab1{{Id}}\')"><label id="lab1{{Id}}" for="grade_radio02{{Id}}">1</label>'+
                        '<input type="radio" id="grade_radio03{{Id}}" class="elementVal" name="{{Id}}" value="2" data-neb-uuid="{{NebUuid}}" onblur="labelhoverout(\'lab2{{Id}}\')"><label id="lab2{{Id}}" for="grade_radio03{{Id}}">2</label>'+
                        '<input type="radio" id="grade_radio04{{Id}}" class="elementVal" name="{{Id}}" value="3" data-neb-uuid="{{NebUuid}}" onblur="labelhoverout(\'lab3{{Id}}\')"><label id="lab3{{Id}}" for="grade_radio04{{Id}}">3</label>'+
                        '<input type="radio" id="grade_radio05{{Id}}" class="elementVal" name="{{Id}}" value="4" data-neb-uuid="{{NebUuid}}" onblur="labelhoverout(\'lab4{{Id}}\')"><label id="lab4{{Id}}" for="grade_radio05{{Id}}">4</label>'+
                        '<input type="radio" id="grade_radio06{{Id}}" class="elementVal" name="{{Id}}" value="5" data-neb-uuid="{{NebUuid}}" onfocus="labelhover(\'lab5{{Id}}\')" onblur="labelhoverout(\'lab5{{Id}}\')"><label id="lab5{{Id}}" for="grade_radio06{{Id}}">5</label>'+
                        '{{description}}' +
                    '</div>'+
                  '</fieldset>'+
                '</div>',

    "select":   '<div class="form-group" id="dropDownContainer" style="display:{{Display}}" data-neb-uuid="{{NebUuid}}" >'+
                  '<label for="select{{Id}}" id="lbl_{{Id}}">{{Label}}</label><span class="required" data-neb-uuid="{{NebUuid}}">*</span>'+
                  '<!-- CATEGORY SELECTOR -->'+
                  '<div id="dropDown{{Id}}" data-neb-uuid="{{NebUuid}}">' +
                    '<select id="select{{Id}}" data-neb-uuid="{{NebUuid}}" class="select2_category form-control select2-offscreen" data-placeholder="{{PlaceHolder}}">'+
                      '{{DropDownOptions}}'+
                    '<select/>'+
                    '{{description}}' +
                  '</div>' +
                '</div>',

    "textArea": '<div class="form-group" style="display:{{Display}}" data-neb-uuid="{{NebUuid}}" >'+
                  '<div id="textArea{{Id}}" data-neb-uuid="{{NebUuid}}">' +
                    '<label for="textArea{{Id}}" id="lbl_{{Id}}" class="catText t2">{{Label}}</label><span class="required" data-neb-uuid="{{NebUuid}}">*</span>'+
                    '<textarea id="textArea{{Id}}" class="form-control elementVal" rows="3" required="" placeholder="{{PlaceHolder}}" data-neb-uuid="{{NebUuid}}"></textarea>'+
                    '{{description}}' +
                  '</div>' +
                '</div>',

    "radio":    '<div class="form-group {{div_class}}" style="margin-bottom: 10px;display:{{Display}}" data-neb-uuid="{{NebUuid}}" >'+
                  '<fieldset id="{{Id}}" data-neb-uuid="{{NebUuid}}" >'+
                    '<legend class="control-label" id="lbl_{{Id}}">{{Label}}<span class="required" data-neb-uuid="{{NebUuid}}">*</span></legend>'+
                    '{{RadioOptions}}'+
                    '{{description}}' +
                  '</fieldset>'+
                '</div>',

    "checkbox": '<div class="form-group" style="margin-bottom: 10px;display:{{Display}}" data-neb-uuid="{{NebUuid}}" >'+

                  '<fieldset id="{{Id}}" data-neb-uuid="{{NebUuid}}" class="checkbox">'+
                    '<legend class="control-label checkbox" id="lbl_{{Id}}">{{Label}}<span class="required" data-neb-uuid="{{NebUuid}}">*</span></legend>'+
                    '{{CheckboxOptions}}'+
                    '{{description}}' +
                  '</fieldset>'+
                '</div>',

    "nps": '<div class="form-group" style="margin-bottom: 5px;display:{{Display}}" data-neb-uuid="{{NebUuid}}">'+
                '<fieldset id="{{Id}}">'+
                  '<legend id="lbl_{{Id}}" class="control-label" style="margin-bottom: 0px;">{{Label}}<span class="required" data-neb-uuid="{{NebUuid}}">*</span></legend>'+
                  '<div class="grading">'+
                    '<input type="radio" class="elementVal" id="grade_radio01{{Id}}" name="{{Id}}" value="0" data-neb-uuid="{{NebUuid}}" onfocus="labelhover(\'lab0{{Id}}\')" onblur="labelhoverout(\'lab0{{Id}}\')"><label id="lab0{{Id}}" for="grade_radio01{{Id}}">0</label>'+
                    '<input type="radio" class="elementVal" id="grade_radio02{{Id}}" name="{{Id}}" value="1" data-neb-uuid="{{NebUuid}}" onblur="labelhoverout(\'lab1{{Id}}\')"><label id="lab1{{Id}}" for="grade_radio02{{Id}}">1</label>'+
                    '<input type="radio" class="elementVal" id="grade_radio03{{Id}}" name="{{Id}}" value="2" data-neb-uuid="{{NebUuid}}" onblur="labelhoverout(\'lab2{{Id}}\')"><label id="lab2{{Id}}" for="grade_radio03{{Id}}">2</label>'+
                    '<input type="radio" class="elementVal" id="grade_radio04{{Id}}" name="{{Id}}" value="3" data-neb-uuid="{{NebUuid}}" onblur="labelhoverout(\'lab3{{Id}}\')"><label id="lab3{{Id}}" for="grade_radio04{{Id}}">3</label>'+
                    '<input type="radio" class="elementVal" id="grade_radio05{{Id}}" name="{{Id}}" value="4" data-neb-uuid="{{NebUuid}}" onblur="labelhoverout(\'lab4{{Id}}\')"><label id="lab4{{Id}}" for="grade_radio05{{Id}}">4</label>'+
                    '<input type="radio" class="elementVal" id="grade_radio06{{Id}}" name="{{Id}}" value="5" data-neb-uuid="{{NebUuid}}" onblur="labelhoverout(\'lab5{{Id}}\')"><label id="lab5{{Id}}" for="grade_radio06{{Id}}">5</label>'+
                    '<input type="radio" class="elementVal" id="grade_radio07{{Id}}" name="{{Id}}" value="6" data-neb-uuid="{{NebUuid}}" onblur="labelhoverout(\'lab6{{Id}}\')"><label id="lab6{{Id}}" for="grade_radio07{{Id}}">6</label>'+
                    '<input type="radio" class="elementVal" id="grade_radio08{{Id}}" name="{{Id}}" value="7" data-neb-uuid="{{NebUuid}}" onblur="labelhoverout(\'lab7{{Id}}\')"><label id="lab7{{Id}}" for="grade_radio08{{Id}}">7</label>'+
                    '<input type="radio" class="elementVal" id="grade_radio09{{Id}}" name="{{Id}}" value="8" data-neb-uuid="{{NebUuid}}" onblur="labelhoverout(\'lab8{{Id}}\')"><label id="lab8{{Id}}" for="grade_radio09{{Id}}">8</label>'+
                    '<input type="radio" class="elementVal" id="grade_radio10{{Id}}" name="{{Id}}" value="9" data-neb-uuid="{{NebUuid}}" onblur="labelhoverout(\'lab9{{Id}}\')"><label id="lab9{{Id}}" for="grade_radio10{{Id}}">9</label>'+
                    '<input type="radio" class="elementVal" id="grade_radio11{{Id}}" name="{{Id}}" value="10" data-neb-uuid="{{NebUuid}}" onfocus="labelhover(\'lab10{{Id}}\')" onblur="labelhoverout(\'lab10{{Id}}\')"><label id="lab10{{Id}}" for="grade_radio11{{Id}}">10</label>'+
                    '{{description}}'+
                  '</div>'+
                '</fieldset>'+
              '</div>',
    "grading1to10": '<div class="form-group" style="margin-bottom: 5px;display:{{Display}}" data-neb-uuid="{{NebUuid}}">'+
                '<fieldset id="fieldset_{{Id}}">'+
                  '<legend id="lbl_{{Id}}" class="control-label" style="margin-bottom: 0px;">{{Label}}<span class="required" data-neb-uuid="{{NebUuid}}">*</span></legend>'+
                  '<div class="grading grading1to10">'+
                    '<input type="radio" class="elementVal" id="grade_radio02{{Id}}" name="{{Id}}" value="1" data-neb-uuid="{{NebUuid}}" onfocus="labelhover(\'lab0{{Id}}\')" onblur="labelhoverout(\'lab1{{Id}}\')"><label id="lab1{{Id}}" for="grade_radio02{{Id}}">1</label>'+
                    '<input type="radio" class="elementVal" id="grade_radio03{{Id}}" name="{{Id}}" value="2" data-neb-uuid="{{NebUuid}}" onblur="labelhoverout(\'lab2{{Id}}\')"><label id="lab2{{Id}}" for="grade_radio03{{Id}}">2</label>'+
                    '<input type="radio" class="elementVal" id="grade_radio04{{Id}}" name="{{Id}}" value="3" data-neb-uuid="{{NebUuid}}" onblur="labelhoverout(\'lab3{{Id}}\')"><label id="lab3{{Id}}" for="grade_radio04{{Id}}">3</label>'+
                    '<input type="radio" class="elementVal" id="grade_radio05{{Id}}" name="{{Id}}" value="4" data-neb-uuid="{{NebUuid}}" onblur="labelhoverout(\'lab4{{Id}}\')"><label id="lab4{{Id}}" for="grade_radio05{{Id}}">4</label>'+
                    '<input type="radio" class="elementVal" id="grade_radio06{{Id}}" name="{{Id}}" value="5" data-neb-uuid="{{NebUuid}}" onblur="labelhoverout(\'lab5{{Id}}\')"><label id="lab5{{Id}}" for="grade_radio06{{Id}}">5</label>'+
                    '<input type="radio" class="elementVal" id="grade_radio07{{Id}}" name="{{Id}}" value="6" data-neb-uuid="{{NebUuid}}" onblur="labelhoverout(\'lab6{{Id}}\')"><label id="lab6{{Id}}" for="grade_radio07{{Id}}">6</label>'+
                    '<input type="radio" class="elementVal" id="grade_radio08{{Id}}" name="{{Id}}" value="7" data-neb-uuid="{{NebUuid}}" onblur="labelhoverout(\'lab7{{Id}}\')"><label id="lab7{{Id}}" for="grade_radio08{{Id}}">7</label>'+
                    '<input type="radio" class="elementVal" id="grade_radio09{{Id}}" name="{{Id}}" value="8" data-neb-uuid="{{NebUuid}}" onblur="labelhoverout(\'lab8{{Id}}\')"><label id="lab8{{Id}}" for="grade_radio09{{Id}}">8</label>'+
                    '<input type="radio" class="elementVal" id="grade_radio10{{Id}}" name="{{Id}}" value="9" data-neb-uuid="{{NebUuid}}" onblur="labelhoverout(\'lab9{{Id}}\')"><label id="lab9{{Id}}" for="grade_radio10{{Id}}">9</label>'+
                    '<input type="radio" class="elementVal" id="grade_radio11{{Id}}" name="{{Id}}" value="10" data-neb-uuid="{{NebUuid}}" onfocus="labelhover(\'lab10{{Id}}\')" onblur="labelhoverout(\'lab10{{Id}}\')"><label id="lab10{{Id}}" for="grade_radio11{{Id}}">10</label>'+
                    '{{description}}'+
                  '</div>'+
                '</fieldset>'+
              '</div>',

    "image":      '<div id="logo"><img src={{Url}} class="kmp_img" alt="{{Unique_name}}" align="middle"/></div>',

    "emailInput": '<div class="form-group" style="display:{{Display}}" data-neb-uuid="{{NebUuid}}" >'+
                    '<div class="">'+
                      '<label for="{{Id}}" id="lbl_{{Id}}" class="catText t2 email">{{Label}}</label><span class="required" data-neb-uuid="{{NebUuid}}">*</span>'+
                      '<input type="text" id="{{Id}}" class="form-control elementVal email" placeholder="{{PlaceHolder}}" data-neb-uuid="{{NebUuid}}" name="{{Id}}">'+
                      '{{description}}' +
                    '</div>'+
                  '</div>',
    "urlInput": '<div class="form-group" style="display:{{Display}}" data-neb-uuid="{{NebUuid}}" >'+
                    '<div class="">'+
                      '<label for="{{Id}}" id="lbl_{{Id}}" class="catText t2 email">{{Label}}</label><span class="required" data-neb-uuid="{{NebUuid}}">*</span>'+
                      '<input type="text" id="{{Id}}" class="form-control elementVal url" placeholder="{{PlaceHolder}}" data-neb-uuid="{{NebUuid}}" name="{{Id}}">'+
                      '{{description}}' +
                    '</div>'+
                  '</div>',

    "textInput":'<div class="form-group" style="display:{{Display}}" data-neb-uuid="{{NebUuid}}" >'+
                  '<div id="{{Id}}" data-neb-uuid="{{NebUuid}}">' +
                    '<label for="textInput{{Id}}" id="lbl_{{Id}}" class="catText t2 textInput">{{Label}}</label><span class="required" data-neb-uuid="{{NebUuid}}">*</span>'+
                    '<input type="text" id="textInput{{Id}}" class="form-control elementVal textInput" placeholder="{{PlaceHolder}}" data-neb-uuid="{{NebUuid}}" name="{{Id}}">'+
                    '{{description}}' +
                  '</div>' +
                '</div>'
  };

  function getTemplates(component) {
    return templates[component];
  }

  return {
    getTemplates: getTemplates,
  };
})();

var KAMPYLE_TEMPLATES_SERVICE = (function() {

  function getTemplate(component) {
    var customTemplate = !!window.KAMPYLE_SPECIFIC && KAMPYLE_SPECIFIC.getTemplate(component);
    if (customTemplate) {
      return customTemplate;
    }
    else {
      return KAMPYLE_TEMPLATES_MODEL.getTemplates(component);
    }
  };

  function addCheckboxOptions(component) {

    optionList="";

    $.each(component.options, function(i){
      optionList = optionList +  '<div tabindex="0" class="checkbox clip-check nebula-checkbox" id="div_' + i + '_{{Id}}"><input type="checkbox"  class="elementVal" value="' + component.options[i] + '" id="' + component.id + i + '"  name="' + component.id +'" data-neb-uuid="' + component.nebUuid +'" aria-describedby="lbl_' + component.id +'">' +
        '<label role="checkbox" aria-checked="false" class="kmp_checkbox" for="' + component.id + i + '">' + component.options[i] + '</label></div>';
    });

    return optionList;
  }


  function addElement(component, isDisplayed, currentPage) {

    var template;
    var description = component.description;
    var display = isDisplayed ? 'block' : 'none';
    var customPageTemplate = 3;


    if (description !== '') {
      var htmlText = KAMPYLE_DATA.decodeHtml(component.description);
      description = '<legend id={{id}} class="control-label control-label-small">{{HtmlText}}</legend>';
      description = description.replace(/{{id}}/g, "legend" + component.id);
      description = description.replace(/{{HtmlText}}/g, htmlText);
    }

    var domElem = currentPage ? $("#form div#page_" + currentPage) : $("#form");

    template = getTemplate(component.component);

    switch(component.component){
            case 'sectionBreak':
              template = template.replace(/{{Id}}/g,component.id);
              break;
            case 'label':
              template = template.replace(/{{Display}}/g,display);
              template = template.replace(/{{NebUuid}}/g,component.nebUuid);
              template = template.replace(/{{Unique_name}}/g, component.unique_name);
              template = template.replace(/{{htmlUnescape}}/g, htmlUnescape(component.image_url));
              break;
            case 'grading':
              template = template.replace(/{{Display}}/g,display);
              template = template.replace(/{{NebUuid}}/g,component.nebUuid);
              template = template.replace(/{{Id}}/g,component.id);
              template = template.replace(/{{Label}}/g,component.label);
              template = template.replace(/{{description}}/g,description);
              break;
            case 'select':
              template = template.replace(/{{Display}}/g,display);
              template = template.replace(/{{NebUuid}}/g,component.nebUuid);
              template = template.replace(/{{Id}}/g,component.id);
              template = template.replace(/{{Label}}/g,component.label);
              template = template.replace(/{{PlaceHolder}}/g,component.placeholder);
              template = template.replace(/{{DropDownOptions}}/g,addDropDownOptions(component));
              template = template.replace(/{{description}}/g,description);
              break;
            case 'textArea':
              template = template.replace(/{{Display}}/g,display);
              template = template.replace(/{{NebUuid}}/g,component.nebUuid);
              template = template.replace(/{{Id}}/g,component.id);
              template = template.replace(/{{Label}}/g,component.label);
              template = template.replace(/{{PlaceHolder}}/g,component.placeholder);
              template = template.replace(/{{description}}/g,description);
              break;
            case 'radio':
              template = template.replace(/{{Display}}/g,display);
              template = template.replace(/{{NebUuid}}/g,component.nebUuid);
              template = template.replace(/{{Id}}/g,component.id);
              template = template.replace(/{{Label}}/g,component.label);
              if (KAMPYLE_SPECIFIC.addRadioOptions) {
                template = template.replace(/{{RadioOptions}}/g,KAMPYLE_SPECIFIC.addRadioOptions(component));
              }
              else {
                template = template.replace(/{{RadioOptions}}/g,addRadioOptions(component));
              }
              //Add align-left if page is 3
              if (currentPage === 3) {
                template = template.replace(/{{div_class}}/g, 'text-align-left');
              }
              else {
                template = template.replace(/{{div_class}}/g, '');
              }
              template = template.replace(/{{description}}/g,description);
              break;
            case 'checkbox':
              template = template.replace(/{{Display}}/g,display);
              template = template.replace(/{{NebUuid}}/g,component.nebUuid);
              template = template.replace(/{{Label}}/g,component.label);
              if (KAMPYLE_SPECIFIC.addCheckboxOptions) {
                template = template.replace(/{{CheckboxOptions}}/g,KAMPYLE_SPECIFIC.addCheckboxOptions(component));
              }
              else {
                template = template.replace(/{{CheckboxOptions}}/g,addCheckboxOptions(component));
              }
              template = template.replace(/{{Id}}/g,component.id);
              template = template.replace(/{{description}}/g,description);
              break;
            case 'nps':
            case 'grading1to10':
              template = template.replace(/{{Display}}/g,display);
              template = template.replace(/{{NebUuid}}/g,component.nebUuid);
              template = template.replace(/{{Id}}/g,component.id);
              template = template.replace(/{{Label}}/g,component.label);
              if (KAMPYLE_SPECIFIC.getTemplate(component.component) && htmlText ) {
                template = template.replace(/{{description}}/g,htmlText);
              }
              template = template.replace(/{{description}}/g,description);
              break;
            case 'image':
              template = template.replace(/{{Url}}/g, component.image_url.url);
              template = template.replace(/{{Unique_name}}/g, component.unique_name);
              break;
            case 'emailInput':
            case 'urlInput':
              template = template.replace(/{{Display}}/g,display);
              template = template.replace(/{{NebUuid}}/g,component.nebUuid);
              template = template.replace(/{{Id}}/g,component.id);
              template = template.replace(/{{Label}}/g,component.label);
              template = template.replace(/{{PlaceHolder}}/g,component.placeholder);
              template = template.replace(/{{description}}/g,description);
              break;
            case 'textInput':
              template = template.replace(/{{Display}}/g,display);
              template = template.replace(/{{NebUuid}}/g,component.nebUuid);
              template = template.replace(/{{Id}}/g,component.id);
              template = template.replace(/{{Label}}/g,component.label);
              template = template.replace(/{{PlaceHolder}}/g,component.placeholder);
              template = template.replace(/{{description}}/g,description);
              break;
    }
    if (customPageTemplate === currentPage && KAMPYLE_SPECIFIC && KAMPYLE_SPECIFIC.appendTemplate && component.component=== 'radio' ) {
      KAMPYLE_SPECIFIC.appendTemplate(template, component);
    }
    else {
      $(domElem).append(template);
      if (component.component === "checkbox"){
        var firstChild = $('fieldset.checkbox').children().first().find("label");
      }
    }
  }

  return {
    getTemplate: getTemplate,
    addCheckboxOptions: addCheckboxOptions,
    addElement: addElement,
  };
})();

var KAMPYLE_EVENT_DISPATCHER = (function(window, document) {
    var eventSubscriptions;
    function init() {
        eventSubscriptions = eventSubscriptions || {};
    }
    var getEventSubscriptions = function(eventName) {
        if (eventName && eventSubscriptions[eventName]) {
            return eventSubscriptions[eventName];
        }
        else {
            return eventSubscriptions;
        }
    };

    var unsubscribe = function(eventName, callback) {
        if (!eventName || typeof eventName !== 'string' || !callback || typeof callback !== 'function') {
            return false;
        }
        var subscribers = eventSubscriptions[eventName];
        if (typeof subscribers !== 'undefined') {
            var callbackIndex = subscribers.indexOf(callback);
            if (callbackIndex !== -1)
            {
                subscribers.splice(callbackIndex, 1);
            }
        }
        return true;
    };

    var subscribe = function(eventName, callback) {
        if (!eventName || typeof eventName !== 'string' || !callback || typeof callback !== 'function') {
            return false;
        }
        var subscribers = eventSubscriptions[eventName];
        if (typeof subscribers === 'undefined') {
            subscribers = eventSubscriptions[eventName] = [];
        }
        var callbackIndex = subscribers.indexOf(callback);
        if (callbackIndex === -1)
        {
            subscribers.push(callback);
        }
        return true;
    };

    var trigger = function(eventName, data, context) {
        var subscribers = eventSubscriptions[eventName];
        var i, iMax;
        if (typeof subscribers === 'undefined') {
            return false;
        }
        data = (data instanceof Array) ? data : [data];
        context = context || null ;
        iMax = subscribers.length;
        for (i = 0; i < iMax; i += 1) {
            try {
                subscribers[i].apply(context, [eventName].concat(data));
            } catch (e) {
                //TODO: implement: KAMPYLE_UTILS.showErrorStack(e)
                console.warn('error: ' + e);
                continue;
            }
        }
        return true;
    };

    var subscribeMany = function(eventMapping) {
        for (var eventName in eventMapping) {
            if (eventMapping.hasOwnProperty(eventName)) {
                for (var i = 0; i < eventMapping[eventName].length; i++) {
                    subscribe(eventName, eventMapping[eventName][i]);
                }
            }
        }
    };

    return {
        subscribe: subscribe,
        subscribeMany: subscribeMany,
        trigger: trigger,
        unsubscribe: unsubscribe,
        init: init,
        getEventSubscriptions: getEventSubscriptions
    }
})(window, document);

var KAMPYLE_COMMON = (function() {

  function safeToLowerCase(toLower) {
    if (toLower && toLower.toLowerCase) {
      return toLower.toLowerCase();
    }
    else {
      return toLower;
    }
  };

  function generateUuid() {
    var numAttempts = 8;
    var uuid = uuidAlgorithm();
    for (var i = 0; i < numAttempts - 1; i++) {
      uuid += '-' + uuidAlgorithm();
    }
    return uuid;
  };

  function isSubArray(bigArr, subArr) {
    for (var i = 0; i < subArr.length; i++) {
      if (bigArr.indexOf(subArr[i]) === -1) {
        return false;
      }
    }
    return true;
  };

  function compareArrays(formattedSource, formattedToCompare) {
    if (formattedSource.length === 0) {return false;}

    for (var i = 0 ; i < formattedSource.length ; i++ ) {
      if(formattedSource[i] != formattedToCompare[i]) {
        return false;
      }
    }
    return true;
  }

  function getNestedPropertyValue(obj,propString) {
    if (!obj || !propString) {return null;}
    var props = propString.split('.');
    var tmpObj = obj;

    var len = props.length;
    for (var i = 0; i < len; i++) {
      if (!!tmpObj && tmpObj.hasOwnProperty(props[i])) {
        tmpObj = tmpObj[props[i]];
      } else {
        return null;
      }
    }
    //Reaching here means we managed to go into the object with all of propString's properties
    return tmpObj;
  }

  return {
    safeToLowerCase: safeToLowerCase,
    generateUuid: generateUuid,
    isSubArray: isSubArray,
    compareArrays: compareArrays,
    getNestedPropertyValue: getNestedPropertyValue,
  };
})();

/* eslint wrap-iife: "off", func-names: "off", "no-console": "off",
  "no-undef": "off", "no-unused-vars": "off", "vars-on-top": "off"
*/

var KAMPYLE_UTILS = {
  show: function(elem, displayType) {
    if (displayType) {
      KAMPYLE_UTILS.setElementStyle(elem, {
        display: displayType,
      })  
    }
    else {
      KAMPYLE_UTILS.setElementStyle(elem, {
        display: 'block',
      })
    }
  },
  hide: function(elem) {
    KAMPYLE_UTILS.setElementStyle(elem, {
      display: 'none',
    })
  },
  remove: function(elem) {
    elem.parentNode.removeChild(elem);
  },
  triggerCustomEvent: function(eventName, data) {
    data = data || {};
    // create and dispatch the event
    var event = new CustomEvent(eventName, data);
    window.dispatchEvent(event);
  },
  createFormUrl: function(url, formId) {

    url += '?formId=' + formId;
    url += '&type=live';

    // Because document.referrer doesnt allow seeing the #,
    // we need to send it to the iframe
    // TODO - send the site's url via message event
    var fullUrl = window.location.href;
    var splitted = fullUrl.split('?');
    if (splitted && splitted.length)
    {
      fullUrl = splitted[0];
    }
    url += '&referrer=' + encodeURIComponent(fullUrl);

    var region = KAMPYLE_DATA.getMemoryData('region')
    if (region) {
      url += '&region=' + region;
    }

    if(KAMPYLE_DATA.isFeatureEnabled('WCAG')){
      url += '&isWCAG=true';
    }

    return url;
  },
  isDebugMode: function() {
    var region = KAMPYLE_DATA.getMemoryData('region');
    return (region === 'dev' || region === 'qa');
  },
  showErrorStack: function(e) {
    if (KAMPYLE_UTILS.isDebugMode()) {
      console.warn(e.stack);
    }
  },
  showWarning: function(message) {
    if (KAMPYLE_UTILS.isDebugMode()) {
      console.warn(message);
    }
  },
  addStyle:function(cssStyle, referencedDocument) {
    referencedDocument = referencedDocument || window.document;
    var style = referencedDocument.getElementById('kampyleStyle');
    if (style === null) {
      style = referencedDocument.createElement('style');
      style.type = 'text/css';
      style.id = 'kampyleStyle';
      var head = referencedDocument.head || referencedDocument.getElementsByTagName('head')[0];
      head.appendChild(style);
    }
    if (style.styleSheet){
      style.styleSheet.cssText += cssStyle;
    } else {
      style.appendChild(document.createTextNode(cssStyle));
    }
  },
  getTimeDiff: function (time,format) {
    var datetime = typeof time !== 'undefined' ? time : "2014-01-01 01:02:03.123456";
    datetime = new Date(datetime).getTime();
    var now = new Date().getTime();

    if (isNaN(datetime)) {
      return '';
    }
    var miliSecDiff = 0;

    if (datetime < now) {
      miliSecDiff = now - datetime;
    } else {
      miliSecDiff = datetime - now;
    }

    if (!!format && format === 'seconds') {
      miliSecDiff = (miliSecDiff.toFixed(1)/1000);
    }

    return miliSecDiff;
  },
  setEventHandler: function (elem, eventType, handler) {
    if (elem.addEventListener) {
      elem.addEventListener(eventType, handler, false);
    }
    else if (elem.attachEvent) {
      elem.attachEvent('on' + eventType, handler);
    }
  },
  setElementStyle: function(element, styleObj, isImportant) {
    var k;
    var dashed;
    isImportant = !!isImportant ? 'important' : '';
    if (element) {
      for (k in styleObj) {
          if (styleObj.hasOwnProperty(k)) {
            if (isImportant && element && element.style.setProperty) {
              //Need to convert camel case to dash case for this api
              dashed = KAMPYLE_UTILS.camelToDash(k);
              element.style.setProperty(dashed, styleObj[k], isImportant);
            }
            else {
              element.style[k] = styleObj[k];
            }


          }
        }
    }

  },
  isNear: function(elementId, distance, event) {
    var element = document.getElementById(elementId);

    if (!element) {
      return false;
    }

    var left = KAMPYLE_UTILS.offset(element).left - distance;
    var top = KAMPYLE_UTILS.offset(element).top - distance;
    var right = left + element.clientWidth + ( 2 * distance );
    var bottom = top + element.clientHeight + ( 2 * distance );
    var x = event.pageX;
    var y = event.pageY;

    return ( x > left && x < right && y > top && y < bottom );

  },
  offset: function(element) {
    if (!element) { return false; }

    var rect = element.getBoundingClientRect();

    var bodyElm = document.body;
    return {
      top: + rect.top + bodyElm.scrollTop,
      left: rect.left + bodyElm.scrollLeft,
    };
  },
  createIframe: function(src, width, height, iframeId) {
    var iframe = document.createElement('iframe');
    iframe.width = width;
    iframe.height = height;
    iframe.src = src;
    iframe.id = iframeId;
    iframe.style.border = 0;
    iframe.frameBorder = 0;
    iframe.style.display = "inline-block";

    return iframe;
  },
  getUrlParam: function(name) {
    var params = location.search.substr(location.search.indexOf("?")+1);
    //if no params from search, check maybe it is after hash
    if(params === ""){
      params = location.hash.substr(location.hash.indexOf("?")+1);
    }
    var sval = "";
    params = params.split("&");
    var paramLenght = params.length;
      // split param and value into individual pieces
      for (var i=0; i < paramLenght; i++)
     {
       var temp = params[i].split("=");
       /* jshint -W116 */
       if ( temp && [temp[0]] == name ) { sval = temp[1]; }
       /* jshint +W116 */
     }
    return sval;
  },
  htmlDecode: function(inputHtml) {
    inputHtml = inputHtml || '';
    var re;
    re = new RegExp('&lt', 'g');
    inputHtml = inputHtml.replace(re, '<');
    re = new RegExp('&gt', 'g');
    inputHtml = inputHtml.replace(re, '>');

    return inputHtml;
  },
  escapeRegExp: function(str) {
      return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  },
  replaceAll: function (str, find, replace) {
    return str.replace(new RegExp(KAMPYLE_UTILS.escapeRegExp(find), 'g'), replace);
  },
  sendMessageToIframe: function(iframeId, message) {
    var origin;
    var targetWindow;
    var iframe;

    if (!iframeId) { return; }

    iframe = document.getElementById(iframeId);

    if (!iframe || !iframe.getAttribute) {return ;}

    var origin = iframe.getAttribute("origin") || '*';
    var targetWindow = iframe.contentWindow;

    if (targetWindow && targetWindow.postMessage)
    {
      targetWindow.postMessage(JSON.stringify(message), origin);
    }
  },
  getBrowser: function() {
    var ua= navigator.userAgent, tem,
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
      tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
      return {
        name: 'IE',
        version: tem[1] || ''
      }
    }
    if(M[1]=== 'Chrome'){
      tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
      if(tem!= null){
        var temArr = tem.slice(1);
        return {
          name: temArr[0].replace('OPR', 'Opera'),
          version: temArr[1] || ''
        }
      }
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return {
      name: M[0],
      version: M[1]
    };
  },
  initEventSubscriptions: function(eventObj,callback) {
    for (var prop in eventObj)
    {
      if (eventObj.hasOwnProperty(prop))
      {
        KAMPYLE_EVENT_DISPATCHER.subscribe(prop,callback);
      }
    }

  },
  kampyleGetUserId: function(){
    //first check if userid exist in storage
    var userid = KAMPYLE_DATA.getData('kampyle_userid');
    if(!userid) {
      userid = KAMPYLE_UTILS.kampyleCreateUUID();
      KAMPYLE_DATA.setData('kampyle_userid',userid);
    }
    return userid;
  },
  kampyleCreateUUID: function(){
    var numAttempts = 8;
    var uuidAlgorithm = function() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };
    var uuid = uuidAlgorithm();

    for (var i = 0; i < numAttempts - 1; i++) {
      uuid += '-' + uuidAlgorithm();
    }

    return uuid;
  },
  removeAllContent: function (elem){
    if (!elem) {return;}
    while (elem.firstChild) {
      elem.removeChild(elem.firstChild);
    }
    elem.parentNode.removeChild(elem);
  },
  safeToLower: function(toLower) {
    if (typeof toLower !== 'string')
    {
      return toLower;
    }
    else {
      return toLower.toLowerCase();
    }
  },
  // Set cookie
  kampyleSetCookie: function (cookieName, cookieValue, exDays) {
    var currDate = new Date();
    currDate.setTime(currDate.getTime() + (exDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + currDate.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + "; " + expires + ";path=/";
  },
  // get cookie by name
  kampyleGetCookie: function (cookieName) {
    this.name = cookieName + "=";
    this.ca = document.cookie.split(';');
    for (var i = 0; i < this.ca.length; i++) {
      this.c = this.ca[i];
      while (this.c.charAt(0) === ' ') this.c = this.c.substring(1);
      if (this.c.indexOf(this.name) === 0) return this.c.substring(this.name.length, this.c.length);
    }

    return '';
  },
  getByteSize: function(s) {
    return encodeURIComponent('<q></q>' + s).length;
  },
  getAllKampyleData: function() {
    //TODO - Set all names as const variable
    var kampyleDataNames = [
      'SUBMITTED_DATE',
      'kampyleUserPercentile',
      'kampyleUserSession',
      'kampyle_userid',
      'kampyleInvitePresented',
      'DECLINED_DATE',
      'LAST_INVITATION_VIEW'
    ];

    var result = {};

    for (var i = kampyleDataNames.length - 1; i >= 0; i--) {
      result[kampyleDataNames[i]] = KAMPYLE_DATA.getData(kampyleDataNames[i]);
    }

    return result;
  },
  kampyleDeleteCookie: function(cookieName){
    var expires = "expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = cookieName + "= ; " + expires + '; path=/';
  },
  kampyleIsCookieEnabled: function(){
    return navigator.cookieEnabled;
  },
  kampyleCompareTimestamps: function(source,toCompare,operator)
  {
    if (typeof source !== 'number' || typeof toCompare !== 'number')
    {
      return false;
    }

    //Get only the date from the time
    source = new Date(source);
    toCompare = new Date(toCompare);
    source.setHours(0,0,0,0);


    switch(operator){
      case 'equals':
        toCompare.setHours(0,0,0,0);
        return (source.getTime() === toCompare.getTime());
        break;
      case 'laterthan':
        toCompare.setHours(23,59,59,999);

        return (source > toCompare);
        break;
      case 'earlierthan':
        toCompare.setHours(0,0,0,0);

        return (source < toCompare);
        break;
      case 'doesnotequal':
        toCompare.setHours(0,0,0,0);
        return (source.getTime() !== toCompare.getTime());
        break;
      default:
        return false;
        break;
    }
  },
  /**
   * @param  {[type]} source  the param value
   * @param  {[type]} toCompare the compared to value
   * @param  {[type]} operator    'equals' etc
   */
  kampyleCompareByOperator: function(source,toCompare,operator, varType) {
    varType = KAMPYLE_UTILS.safeToLower(varType);
    var ans = false;
    if (source === undefined)
    {
      return ans;
    }

    operator = KAMPYLE_UTILS.safeToLower(operator);
    switch(operator){
      case 'equals':
        if (varType === 'datetime') //Need to extract the date from the timstamp
        {
          ans = KAMPYLE_UTILS.kampyleCompareTimestamps(source,toCompare,operator);
        }
        else {
          ans = (source === toCompare);
        }

        break;
      case 'doesnotequal':
        if (varType === 'datetime') //Need to extract the date from the timstamp
        {
          ans = KAMPYLE_UTILS.kampyleCompareTimestamps(source,toCompare,operator);
        }
        else {
          ans = (source !== toCompare);
        }
        break;

        break;
      case 'greaterthan':
        ans = (source > toCompare);
        break;
      case 'laterthan':
        if (varType === 'datetime') //Need to extract the date from the timstamp
        {
          ans = KAMPYLE_UTILS.kampyleCompareTimestamps(source,toCompare,operator);
        }
        else {
          ans = (source > toCompare);
        }
        break;
      case 'smallerthan':
        ans = (source < toCompare);
        break;
      case 'earlierthan':
        if (varType === 'datetime') //Need to extract the date from the timstamp
        {
          ans = KAMPYLE_UTILS.kampyleCompareTimestamps(source,toCompare,operator);
        }
        else {
          ans = (source > toCompare);
        }
        break;
      case 'contains':
        ans = (!!source && source.indexOf && source.indexOf(toCompare) !== -1);
        break;
      case 'doesnotcontain':
        ans = (!!source && source.indexOf && source.indexOf(toCompare) === -1);
        break;
      case 'startswith':
        ans = (!!source && source.indexOf && source.indexOf(toCompare) === 0);
        break;
      case 'endswith':
        ans = ( !!source && source.indexOf &&
            source.length &&
            source.indexOf(toCompare, source.length - source.length) !== -1);
        break;
      case 'hasvalue':
        //Simply check that first value exists
        ans = ( !!source  || source === '' || source === false || source === 0 );
        break;

      default:
        break;
    }
    return ans;
  },
  setNestedPropertyValue: function(obj,propString,value) {
    var schema = obj;  // a moving reference to internal objects within obj
    var pList = propString.split('.');
    var len = pList.length;
    for(var i = 0; i < len-1; i++) {
      var elem = pList[i];
      if( !schema[elem] ) {
        schema[elem] = {};
      }
      schema = schema[elem];
    }
    schema[pList[len-1]] = value;
  },
  getNestedPropertyValue: function(obj,propString) {
    if (!obj || !propString) {return null;}
    var props = propString.split('.');
    var tmpObj = obj;

    var len = props.length;
    for (var i = 0; i < len; i++) {
      if (!!tmpObj && tmpObj.hasOwnProperty(props[i]))
      {
        tmpObj = tmpObj[props[i]];
      }
      else {
        return null;
      }
    }

    //Reaching here means we managed to go into the object with all of propString's properties
    return tmpObj;
  },
  //function to match kampyle cdn hosts url (if cdn host name changes we'll have to update here)
  validateKampyleDomain: function(url) {
    var urlRegex = /(^https?:\/\/[A-Za-z0-9\-]+\.kampyle\.com(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)/;
    var result = urlRegex.test(url);
    if (!result) {
      console.warn('Invalid url in validateKampyleDomain: ' + url);
    }

    return result;
  },
  camelToDash: function(str) {
    if (typeof str !== 'string') {
      return str;
    }
    else {
      return str.replace(/\W+/g, '-')
                .replace(/([a-z\d])([A-Z])/g, '$1-$2')
                .toLowerCase();
    }

  },
  listenToEvent: function(selector, eventType, callback) {
    var elementsArr = document.querySelectorAll(selector);
    for (var i = 0 ; i< elementsArr.length ; i++) {
      elementsArr[i].addEventListener(eventType, callback);
    }
  }

};

var KAMPYLE_FORM_MODEL = (function() {

  function validifyUniqueName() {
    iterateComponents(function(currComponent) {
      currComponent.unique_name = currComponent.unique_name.replace(/\s/g, '_');
    });
  }

  function getForm() {
    if (window.KAMPYLE_SDK) {
      return window.KAMPYLE_SDK.kampyleGetFormObject()  
    }
    else
    return null;
  };

  function getComponentsByPage(pageNum) {
    if ((!pageNum && pageNum !== 0) || isNaN(pageNum)) {return null;}
    var selectedForm = getForm();
    return  !!selectedForm && !!selectedForm.pages && !!selectedForm.pages[pageNum] ?
    selectedForm.pages[pageNum].dynamicData : null;
  };

  function getComponentsByPageName(pageName) {
    if (typeof pageName !== 'string') {return null;}
    var selectedForm = getForm();

    if (!selectedForm || !selectedForm.pages || !selectedForm.pages.length) {return null;}

    for (var i = 0; i < selectedForm.pages.length; i++) {

      if (selectedForm.pages[i].name === pageName)
      {
        return selectedForm.pages[i].dynamicData;
      }
    }

    return null;
  };

  function getPageByNebUuid(nebUuid) {
    var selectedForm = getForm();
    if (!selectedForm || !selectedForm.pages) { return null;}

    //Iterate all components and find the page
    for (var i = 0; i < selectedForm.pages.length; i++) {
      var currDynamicData = selectedForm.pages[i].dynamicData;
      for (var j = 0; j < currDynamicData.length; j++) {
        if (currDynamicData[j].nebUuid === nebUuid)
        {
          return selectedForm.pages[i].index;
        }
      }

    };
    return null;
  };

  function getComponentByNebUuid(nebUuid) {
    var selectedForm = getForm();
    if (!nebUuid || !selectedForm || !selectedForm.pages) { return null;}

    for (var i = 0; i < selectedForm.pages.length; i++) {
      var currDynamicData = selectedForm.pages[i].dynamicData;
      for (var j = 0; j < currDynamicData.length; j++) {
        if (currDynamicData[j].nebUuid === nebUuid)
        {
          return currDynamicData[j];
        }
      }
    }

    return null;
  };
  /**
   * Allows easy iteration on all components by simply supplying a callback function
   */
  function iterateComponents(callback, breakOnValue) {
    var callbackResult;
    var selectedForm = getForm();
    if (!selectedForm || !selectedForm.pages) {return false;}

    for (var i = 0; i < selectedForm.pages.length; i++) {
      var currDynamicData = selectedForm.pages[i].dynamicData;
      for (var j = 0; j < currDynamicData.length; j++) {
        if (breakOnValue !== undefined)
        {
          callbackResult = callback(currDynamicData[j])
          if (callbackResult === breakOnValue) //Meaining got what we need and stop iterating
          {
            return breakOnValue;
          }
        }
        else { //Simply call callback function on each component
          callback(currDynamicData[j]);
        }
      }
    }
  };

  function getNebUuidByUniqueName(unique_name) {
    if (!unique_name) {return null; }
    var nebUuid;
    var iteratorFunc = function(currComponent) {
      if (currComponent.unique_name === unique_name)
      {
        nebUuid = currComponent.nebUuid;
        return true;
      }
    };
    iterateComponents(iteratorFunc, true /*stop when iteratorFunc returns true*/);

    return nebUuid;
  };

  function getElementsByType(ElementType) {

    var ElementsByType = [];
    var numOfPages = KAMPYLE_DATA.getNumOfPages();
    var pageElements;

    for (var pageNum = 0 ; pageNum < numOfPages ; pageNum++) {
      pageElements = KAMPYLE_FORM_MODEL.getComponentsByPage(pageNum);
      for (var i = 0 ; i < pageElements.length ; i++){
        if (pageElements[i].component === ElementType) {
          ElementsByType.push(pageElements[i]);
        }
      }
    }
    return ElementsByType;
  };

  function getElementsByTypeAndPage(ElementType, pageNum) {

    if ((!pageNum && pageNum !== 0) || isNaN(pageNum)) {return null;}
    var selectedForm = getForm();
    var elementsByPage = !!selectedForm && !!selectedForm.pages && !!selectedForm.pages[pageNum] ?
    selectedForm.pages[pageNum].dynamicData : null;

    var ElementsByType = [];
    for (var i = 0 ; i < elementsByPage.length ; i++){
      if (elementsByPage[i].component === ElementType) {
        ElementsByType.push(elementsByPage[i]);
      }
    }
    return ElementsByType;
  };

  return {
    getForm: getForm,
    getComponentsByPage: getComponentsByPage,
    getPageByNebUuid: getPageByNebUuid,
    getComponentByNebUuid: getComponentByNebUuid,
    iterateComponents: iterateComponents,
    getComponentsByPageName: getComponentsByPageName,
    getNebUuidByUniqueName: getNebUuidByUniqueName,
    validifyUniqueName: validifyUniqueName, 
    getElementsByType: getElementsByType,
    getElementsByTypeAndPage: getElementsByTypeAndPage,
  };
})();

var KAMPYLE_DATA = (function() {
  var DEFAULT_FOOTER_HEIGHT = 146;
  var FIRST_PAGE = 1;
  var currentPage = 1;
  var customTemplates = {
    "tabs": '<div>' +
              '<!-- Nav tabs -->' +
              '<ul class="nav nav-tabs" role="tablist">' +
                '{{addNavTabsOptions}}' +
              '</ul>' +

              '<!-- Tab panes -->' +
              '<div class="tab-content">' +
                '{{addTabPanes}}' +
              '</div>' +
            '</div>',
  };

  function getCurrentPage() {
    return currentPage;
  };

  function getFormJasonHeight() {
    var selectedForm = KAMPYLE_FORM_MODEL.getForm();
    return selectedForm.settings.formBasicSettings.heightPX;
  };

  function getFooterHeight() {
    return KAMPYLE_COMMON.getNestedPropertyValue(window, 'KAMPYLE_CLIENT_CONFIG.FOOTER_HEIGHT') || DEFAULT_FOOTER_HEIGHT;
  };

  function setFormNewHeight(pageNum) {
    if(typeof KAMPYLE_SPECIFIC.setFormNewHeight === "function") {
      return KAMPYLE_SPECIFIC.setFormNewHeight(pageNum);
    }
    var jsonFormHeight = getFormJasonHeight();
    var footerHeight = getFooterHeight();
    var newHeight = jsonFormHeight - footerHeight - 60; //padding top = 30px & padding bottom = 30px
    $('.page-container').height(newHeight);
  };

  function decodeHtml(inputHtml) {
    inputHtml = inputHtml || '';
    var re;
    re = new RegExp('&lt', 'g');
    inputHtml = inputHtml.replace(re, '<');
    re = new RegExp('&gt', 'g');
    inputHtml = inputHtml.replace(re, '>');
    return inputHtml;
  };

  function setCurrentPage(newPage) {
    currentPage = newPage;
  };

  function getNumOfPages(){
    var formJson = KAMPYLE_FORM_MODEL.getForm();
    if (formJson) {
      return formJson.pages.length;  
    }
    else return null;
    
  };

  function getFirstPage() {
    return FIRST_PAGE;
  };

  function prepareSubmitContractPerPage(pageNum) {

    var currentComponents, PageItem, PageComponents, item, form;
    var formContract = {
      pages: []
    };

    var numOfPages = KAMPYLE_DATA.getNumOfPages();
    currentComponents = KAMPYLE_FORM_MODEL.getComponentsByPage(pageNum);
    PageItem = {};
    PageComponents = [];

    for (var i = 0 ; i < currentComponents.length ; i++) {
      if(currentComponents[i].component !== "image" && currentComponents[i].component !== "label" && currentComponents[i].component !== "sectionBreak"){
        item = {};
        item.unique_name = currentComponents[i].unique_name;
        item.type = currentComponents[i].component;
        if (item.type === "nps" || item.type === "grading1to10" || item.type === "grading") {
          item.value = parseInt(KAMPYLE_VIEW.getValueByUuid(currentComponents[i].nebUuid));
        }
        else {
          item.value = KAMPYLE_VIEW.getValueByUuid(currentComponents[i].nebUuid);
          if(item.value === 'default') {
            item.value = '';
          }
        }
        PageComponents.push(item);
      }
    }
    form = KAMPYLE_FORM_MODEL.getForm();
    if (form && form.pages && form.pages[pageNum] && form.pages[pageNum].name) {
      PageItem.pageName = form.pages[pageNum].name;
    }

    PageItem.components = PageComponents;
    formContract.pages.push(PageItem);
   
  return formContract;
};

  return {
    //Only for testing
    setCurrentPage: setCurrentPage,

    //Public API
    getCurrentPage: getCurrentPage,
    getNumOfPages: getNumOfPages,
    decodeHtml: decodeHtml,
    getFormJasonHeight: getFormJasonHeight,
    getFooterHeight: getFooterHeight,
    setFormNewHeight: setFormNewHeight,
    customTemplates: customTemplates,
    getFirstPage: getFirstPage,
    prepareSubmitContractPerPage: prepareSubmitContractPerPage
  };
})();

var KAMPYLE_CONDITIONAL = (function() {
  var cdGraph;
  var hideElements;
  var hideComponents = [];
  /**
   * Function that reveres the cd source graph into targets mapping
   */
  function buildCdGraph() {
    cdGraph = {};
    function iteratorFunc(currComponent) {
      var sourceNebUuid;
      if (!!currComponent && !!currComponent.cdSource && !!currComponent.cdSource.nebUuid) {
        sourceNebUuid = currComponent.cdSource.nebUuid;
        cdGraph[sourceNebUuid] = cdGraph[sourceNebUuid] || [];
        cdGraph[sourceNebUuid].push({
          nebUuid: currComponent.nebUuid,
          operator: currComponent.cdSource.operator,
          value: currComponent.cdSource.value,
          componentType: currComponent.cdSource.componentType
        });
      }
    };

    KAMPYLE_FORM_MODEL.iterateComponents(iteratorFunc);
  };

  function getCdGraph() {
    return cdGraph;
  };

  function setCdGraph(newCdGraph) {
    cdGraph = newCdGraph;
  };

  function safeDateParse(inputValue) {
    if (!inputValue || typeof inputValue === 'number' ) { return inputValue; }

    if (typeof inputValue === 'string')
    {
      inputValue = new Date(inputValue);
      return !!inputValue && !!inputValue.getTime ? inputValue.getTime() : null;
    }
    else if (!(inputValue instanceof Date) &&
            (!inputValue.getTime || isNaN(inputValue.getTime()))) //invalid date will give isNaN(currParamVal.getTime() true
            {
              return null;
            }
            else {
              return inputValue.getTime();
            }

            return null;
  };

  //TODO - once conditional display nps values come from drop down, the value will be fixed there
  function formatValueByType(inputValue, componentType) {
    switch(componentType) {
      case 'nps':
      case 'grading1to10':
      var parsed = parseInt(inputValue);
        return parsed;
      case 'grading':
        return parseInt(inputValue) || null;
      case 'date':
        return safeDateParse(inputValue);
      default:
      return inputValue || null;
    }
  };

  function hasDependingComponents(nebUuid) {
    return !!cdGraph && !!cdGraph[nebUuid] && cdGraph[nebUuid].length > 0;
  };

  function hideComponentsRecursively(hiddenComponents ,nebUuid) {

    hiddenComponents.push({nebUuid: nebUuid, isDisplayed: false});
    if (!hasDependingComponents(nebUuid)) {return hiddenComponents;}

    var len = cdGraph[nebUuid].length;
    var componentObj,currNebUuid;
    for (var i = 0; i < len; i++) {
      currNebUuid = cdGraph[nebUuid][i].nebUuid;
      componentObj = KAMPYLE_FORM_MODEL.getComponentByNebUuid(currNebUuid);
      componentObj.display = false;
      hiddenComponents = hideComponentsRecursively(hiddenComponents, currNebUuid);
    }
    return hiddenComponents;
  };

  function checkConditionalDisplay(inputValue, nebUuid) {
    var affectedComponents = [];
    //Iterate on the targets of the input in the cd graph and compare values
    if (!hasDependingComponents(nebUuid)) {return; }

    var len = cdGraph[nebUuid].length;
    var currComponent,currComponentValue, comparisonResult, componentObj, oldVisibility, newInputValue;
    for (var i = 0; i < len; i++) {
      currComponent = cdGraph[nebUuid][i];

      newInputValue = formatValueByType(inputValue,currComponent.componentType);
      currComponentValue = formatValueByType(currComponent.value,currComponent.componentType);

      comparisonResult = KAMPYLE_COMPERATOR.compareByType({
        source: newInputValue,
        toCompare: currComponentValue,
        operator: currComponent.operator,
        type: currComponent.componentType
      });

      componentObj = KAMPYLE_FORM_MODEL.getComponentByNebUuid(currComponent.nebUuid);
      oldVisibility = componentObj.display;
      componentObj.display = comparisonResult;

      if (oldVisibility !== componentObj.display)
      {
        if ( componentObj.display === true )//Meaning changed its visibility status and should be checked as well
        {
          affectedComponents.push({nebUuid:currComponent.nebUuid, isDisplayed: true});
        }
        else { //Meaning the display is now false and need to hide all relevant CD targets
          var componentsToHide = hideComponentsRecursively([], currComponent.nebUuid);
          affectedComponents = affectedComponents.concat(componentsToHide);
        }
      }
    }
    return affectedComponents;
  };
  /**
   * This function makes sure that all components that have conditional display set to them will be hidden
   */
  function hideDependantComponents() {
    hideElements = [];
    var currComponent;
    for (var sourceNebUuid in cdGraph) {
      if (cdGraph.hasOwnProperty(sourceNebUuid)) {
        for (var i = cdGraph[sourceNebUuid].length - 1; i >= 0; i--) {
          currComponent = KAMPYLE_FORM_MODEL.getComponentByNebUuid(cdGraph[sourceNebUuid][i].nebUuid);

          if (!!currComponent) {
            currComponent.display = false;
            hideElements[currComponent.id]= currComponent.id;
          }
        }
      }
    }
  };

  function getHideElements() {
    return hideElements;
  };

  function init() {
    KAMPYLE_FORM_MODEL.validifyUniqueName();
    KAMPYLE_CONDITIONAL_CONF.validifyComponents();
    buildCdGraph();
    hideDependantComponents();
  };

  return {
    //Only for testing
    setCdGraph: setCdGraph,
    formatValueByType: formatValueByType,
    hideComponentsRecursively: hideComponentsRecursively,
    safeDateParse: safeDateParse,

    //Public API
    buildCdGraph: buildCdGraph,
    getCdGraph: getCdGraph,
    checkConditionalDisplay: checkConditionalDisplay,
    hideDependantComponents: hideDependantComponents,
    init: init,
    getHideElements: getHideElements
  };
})();

var KAMPYLE_CONDITIONAL_CONF = (function() {
  function getPreviousComponents(nebUuid) {
    if (!nebUuid) {return null;}

    var pageNum = KAMPYLE_FORM_MODEL.getPageByNebUuid(nebUuid);
    var allComponents = KAMPYLE_FORM_MODEL.getComponentsByPage(pageNum);

    if (!!allComponents && !!allComponents.length)
    {
      var prevComponents = [];

      //Need only previous components in the page
      var len = allComponents.length;
      for (var i = 0; i < len; i++) {

        if (nebUuid !== allComponents[i].nebUuid)
        {
          if(isInputComponent(allComponents[i].component)){
            prevComponents.push(allComponents[i]);
          }
        }
        else {
          break;
        }
      }

      return prevComponents;

    }
    else {
      return null;
    }
  };

  function isInputComponent(componentType){

   switch(componentType){
     case 'label':
     case 'image':
     case 'sectionBreak':
     return false;
   }
   return true;
  };

  function updateCdSource(nebUuid, sourceData) {
    var component = KAMPYLE_FORM_MODEL.getComponentByNebUuid(nebUuid);

    if (!!component) {
      component.cdSource = sourceData;
    }
  };
  //simply set CD source to be null;
  function resetConditionalDisplaySettings(nebUuid) {
    updateCdSource(nebUuid,null);
  };

  function hasCdSource(nebUuid) {
    var component = KAMPYLE_FORM_MODEL.getComponentByNebUuid(nebUuid);

    return !!component && !!component.cdSource && !!component.cdSource.nebUuid;
  };

  function handleDeletedComponent(nebUuid) {
    var iteratorFunc = function(currComponent) {
      if (!!currComponent && !!currComponent.cdSource &&
        currComponent.cdSource.nebUuid === nebUuid)
      {
        currComponent.cdSource = null;
      }
    };
    KAMPYLE_FORM_MODEL.iterateComponents(iteratorFunc);
  };

  function getViolatedCdComponents(pageName) {
    var violatedComponents = [];
    var visitedComponents = [];
    var componentSource;

    //Get all components in the page
    var componentsInPage = KAMPYLE_FORM_MODEL.getComponentsByPageName(pageName);
    if (!!componentsInPage && !!componentsInPage.length)
    {
      var len = componentsInPage.length;
      for (var i = 0; i < len; i++) {
        componentSource = componentsInPage[i].cdSource;

        //Check that all cdSources were visited -> they appear before the component
        if (!!componentSource && !!componentSource.nebUuid && visitedComponents.indexOf(componentSource.nebUuid) === -1)
        {
          violatedComponents.push({
            'unique_name': componentsInPage[i].unique_name,
            'nebUuid': componentsInPage[i].nebUuid
          });
        }
        visitedComponents.push(componentsInPage[i].nebUuid);
      };
    }
    return violatedComponents;
  };
  //First make sure all components have nebUuid
  //Second-  transfer the old data structure to the new one
  function validifyComponents() {
    var nebUuidIterator = function(currComponent) {
      if (!currComponent.nebUuid) {
        currComponent.nebUuid = KAMPYLE_COMMON.generateUuid();
      }
    };

    var contractChangeIterator = function(currComponent) {
      var mappedNebUuid;
      //Check if component has old conditional display settings without the new ones
      if (!!currComponent.conditionalDisplay &&
        !!currComponent.conditionalDisplay.unique_name &&
        !currComponent.cdSource) {
        mappedNebUuid = KAMPYLE_FORM_MODEL.getNebUuidByUniqueName(currComponent.conditionalDisplay.unique_name);
      if (!!mappedNebUuid) {
        currComponent.cdSource = {
          nebUuid: mappedNebUuid,
          operator: currComponent.conditionalDisplay.targetField,
          value: currComponent.conditionalDisplay.targetValue,
          componentType: currComponent.conditionalDisplay.targetType
        };
          //Remove old properties
          delete currComponent.conditionalDisplay;
          if (!!currComponent.conditionalDisplayTargets)
          {
            delete currComponent.conditionalDisplayTargets
          }
        }
      }
    };

    KAMPYLE_FORM_MODEL.iterateComponents(nebUuidIterator);
    KAMPYLE_FORM_MODEL.iterateComponents(contractChangeIterator);
  };

  return {
    getPreviousComponents: getPreviousComponents,
    updateCdSource: updateCdSource,
    isInputComponent: isInputComponent,
    resetConditionalDisplaySettings: resetConditionalDisplaySettings,
    hasCdSource: hasCdSource,
    handleDeletedComponent: handleDeletedComponent,
    getViolatedCdComponents: getViolatedCdComponents,
    validifyComponents: validifyComponents
  };
})();

var KAMPYLE_COMPERATOR = (function(){

  var operators = {
    equals: "Equals",
    notEquals: "Does Not Equal",
    contains: "Contains",
    notContains: "Does Not Contain",
    startWith: "Starts With",
    endWith: "Ends With",
    earlier: "Earlier Than",
    later: "Later Than",
    greater: "Greater Than",
    smaller: "Smaller Than",
    hasValue: "Has Value"
  };

  var stringOperators = [
    operators.equals,
    operators.notEquals,
    operators.contains,
    operators.notContains,
    operators.startWith,
    operators.endWith,
    operators.hasValue
  ];

  var selectOperators = [
    operators.equals,
    operators.notEquals,
    operators.hasValue
  ];

  var checkboxOperators = [
    operators.equals,
    operators.notEquals,
    operators.contains,
    operators.notContains,
    operators.hasValue
  ];

  var dateOperators = [
    operators.equals,
    operators.notEquals,
    operators.earlier,
    operators.later,
    operators.hasValue
  ];

  var gradingOperators = [
    operators.equals,
    operators.notEquals,
    operators.greater,
    operators.smaller,
    operators.hasValue
  ];

  var typeToOperatorMap = {
    'textInput': stringOperators,
    'urlInput': stringOperators,
    'emailInput': stringOperators,
    'textArea': stringOperators,
    'checkbox': checkboxOperators,
    'select': selectOperators,
    'radio': selectOperators,
    'date': dateOperators,
    'grading': gradingOperators,
    'nps': gradingOperators,
    'grading1to10': gradingOperators
  };

  function getOperatorsByType(type) {
    return !!type && !!type.toLowerCase && !!typeToOperatorMap[type] ? typeToOperatorMap[type] : [];
  };

  function isAllowedType(type) {
    var types = Object.keys(typeToOperatorMap).map(function(elem) {
      return elem.toLowerCase();
    });
    return typeof type === 'string' && types.indexOf(type.toLowerCase()) !== -1;
  };

  function comapreCaseInsensitive(source,toCompare) {
    return  typeof source === 'string' && typeof toCompare === 'string' &&
    source.toLowerCase() === toCompare.toLowerCase();
  };

  function validComparisonParams(source,toCompare,operator,compareType) {
    var ans = !!operator && typeof operator === 'string' &&
    typeof source === compareType &&
              (typeof toCompare === compareType || comapreCaseInsensitive(operator,operators.hasValue)); //Has value does not care about the other param
              return ans;
            };

            function compareStrings(source,toCompare,operator) {
              if (!validComparisonParams(source,toCompare,operator,'string')) {return false;}

              source = KAMPYLE_COMMON.safeToLowerCase(source);
              operator = KAMPYLE_COMMON.safeToLowerCase(operator);
              toCompare = KAMPYLE_COMMON.safeToLowerCase(toCompare);

              switch(operator) {
                case operators.equals.toLowerCase():
                return source === toCompare;
                case operators.notEquals.toLowerCase():
                return source !== toCompare;
                case operators.contains.toLowerCase():
                return source.indexOf(toCompare) !== -1;
                case operators.notContains.toLowerCase():
                return source.indexOf(toCompare) === -1;
                case operators.startWith.toLowerCase():
                return source.indexOf(toCompare) === 0;
                case operators.endWith.toLowerCase():
                return  !!source.length &&
                !!toCompare.length &&
                source.indexOf(toCompare) === (source.length - toCompare.length);
                break;
                case operators.hasValue.toLowerCase():
        //Simply check that first value exists
        return !!source || source === '' || source === false || source === 0;
        default:
        return false;
      }
  };

  function compareNumbers(source,toCompare,operator) {
    if (!validComparisonParams(source,toCompare,operator,'number')) {return false;}

    switch(operator.toLowerCase()) {
      case operators.equals.toLowerCase():
      return source === toCompare;
      case operators.notEquals.toLowerCase():
      return source !== toCompare;
      case operators.greater.toLowerCase():
      return source > toCompare;
      case operators.smaller.toLowerCase():
      return source < toCompare;
      case operators.hasValue.toLowerCase():
      return !!source || source === 0;
      default:
      return false;
    }
  };

  function compareDates(source,toCompare,operator) {
    //type number because it is a datetime
    if (!validComparisonParams(source,toCompare,operator,'number')) {return false;}

    //Get only the date from the time
    source = new Date(source);
    toCompare = new Date(toCompare);
    source.setHours(0,0,0,0);

    switch(operator.toLowerCase()) {
      case operators.equals.toLowerCase():
        toCompare.setHours(0,0,0,0);
        return (source.getTime() === toCompare.getTime());
      case operators.later.toLowerCase():
        toCompare.setHours(23,59,59,999);
        return (source > toCompare);
      case operators.earlier.toLowerCase():
        toCompare.setHours(0,0,0,0);
        return (source < toCompare);
      case operators.notEquals.toLowerCase():
        toCompare.setHours(0,0,0,0);
        return (source.getTime() !== toCompare.getTime());
      case operators.hasValue.toLowerCase():
        return !!source;
      default:
        return false;
    }
  };

  function trimElements(collection) {
    var trimmed = [];
    //Need to trim every value
    for (var i = collection.length - 1; i >= 0; i--) {
      trimmed.push(collection[i].trim());
    }
    return trimmed;
  };

  function compareCheckbox(source,toCompare,operator) {
    if  (!source ||
      (typeof toCompare !== 'string' && operator.toLowerCase() !== 'has value')) {
      return false;
    }

    //format the source to a comma deleted string
    var checked = [];
    for (var prop in source) {
      if(source.hasOwnProperty(prop) && !!source[prop]){
        checked.push(prop);
      }
    }

    var formattedSource = trimElements(checked).sort();

    if (operator.toLowerCase() !== 'has value')
    {
      var formattedToCompare = toCompare.split(',');
      formattedToCompare = trimElements(formattedToCompare).sort();
    }


    switch(operator.toLowerCase()){
      case operators.equals.toLowerCase():
        return angular.equals(formattedSource, formattedToCompare);
      case operators.notEquals.toLowerCase():
        return !angular.equals(formattedSource, formattedToCompare);
      case operators.contains.toLowerCase():
        return KAMPYLE_COMMON.isSubArray(formattedSource,formattedToCompare);
      case operators.notContains.toLowerCase():
        return !KAMPYLE_COMMON.isSubArray(formattedSource,formattedToCompare);
      case operators.hasValue.toLowerCase():
        return formattedSource.length > 0;

      default:
        return false;
    }
  }

  function compareByType(data) {
    data = data || {};
    data.type = KAMPYLE_COMMON.safeToLowerCase(data.type);
    data.operator = KAMPYLE_COMMON.safeToLowerCase(data.operator);
    if (!isAllowedType(data.type))
    {
      return false;
    }

    switch(data.type){
      case 'date':
      return compareDates(data.source,data.toCompare,data.operator);
      case 'radio':
      case 'select':
      case 'urlinput':
      case 'emailinput':
      case 'textarea':
      case 'textinput':
      return compareStrings(data.source,data.toCompare,data.operator);
      case 'grading':
      case 'nps':
      case 'grading1to10':
      return compareNumbers(parseInt(data.source),data.toCompare,data.operator);
      case 'checkbox':
      return compareCheckbox(data.source,data.toCompare,data.operator);
      default:
      return false;
      break;
    }
    return ans;
  };

  return {
    //Helper functions for testing
    compareStrings: compareStrings,
    compareNumbers: compareNumbers,
    compareCheckbox: compareCheckbox,
    compareDates: compareDates,
    trimElements: trimElements,
    validComparisonParams: validComparisonParams,

    // Public API here
    getOperatorsByType: getOperatorsByType,
    compareByType: compareByType
  };
  // Index of polyfill

  // Production steps of ECMA-262, Edition 5, 15.4.4.14
  // Reference: http://es5.github.io/#x15.4.4.14
  if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(searchElement, fromIndex) {

      var k;

      // 1. Let o be the result of calling ToObject passing
      //    the this value as the argument.
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let lenValue be the result of calling the Get
      //    internal method of o with the argument "length".
      // 3. Let len be ToUint32(lenValue).
      var len = o.length >>> 0;

      // 4. If len is 0, return -1.
      if (len === 0) {
        return -1;
      }

      // 5. If argument fromIndex was passed let n be
      //    ToInteger(fromIndex); else let n be 0.
      var n = +fromIndex || 0;

      if (Math.abs(n) === Infinity) {
        n = 0;
      }

      // 6. If n >= len, return -1.
      if (n >= len) {
        return -1;
      }

      // 7. If n >= 0, then Let k be n.
      // 8. Else, n<0, Let k be len - abs(n).
      //    If k is less than 0, then let k be 0.
      k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      // 9. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ToString(k).
        //   This is implicit for LHS operands of the in operator
        // b. Let kPresent be the result of calling the
        //    HasProperty internal method of o with argument Pk.
        //   This step can be combined with c
        // c. If kPresent is true, then
        //    i.  Let elementK be the result of calling the Get
        //        internal method of o with the argument ToString(k).
        //   ii.  Let same be the result of applying the
        //        Strict Equality Comparison Algorithm to
        //        searchElement and elementK.
        //  iii.  If same is true, return k.
        if (k in o && o[k] === searchElement) {
          return k;
        }
        k++;
      }
      return -1;
    };
  }
})();

var KAMPYLE_VIEW = (function() {

  var checkTabPressOnFirstElement = tabPressHandlerFactory(true);
  var checkTabPressOnLastElement = tabPressHandlerFactory(false);

  // prevent duplicate code for keydown even subscription
  function tabPressHandlerFactory(_shiftKey) {
    return function(ev) {
      if(ev.which === 9 && ev.shiftKey === _shiftKey) { // keyCode 9 is TAB
        if (_shiftKey) {
          KAMPYLE_VIEW.focusOnLastElement();
        } else {
          KAMPYLE_VIEW.focusOnFirstElement();
        }
        ev.preventDefault();
      }
    }
  };


  function getAllCheckboxValues(nebUuid) {
    var allCheckboxes = document.querySelectorAll('input[data-neb-uuid="' + nebUuid + '"]') || [];
    var result = {};
    for (var i = 0; i < allCheckboxes.length; i++) {
      result[allCheckboxes[i].value] = allCheckboxes[i].checked;
    }

    return result;
  };

  function setFocus(component) {
    var element;
    var componentType = component.component;
    var nebUuid = component.nebUuid;
    var id = component.id;
    switch (componentType) {
      case 'textInput':
      case 'emailInput':
      case 'urlInput':
        element = $('input[data-neb-uuid="' + nebUuid + '"]');
        break;
      case 'radio':
        element = $('input[data-neb-uuid="' + nebUuid + '"]').first();
        break;
      case 'textArea':
        element = $('textArea[data-neb-uuid="' + nebUuid + '"]');
        break;
      case 'checkbox':
        element = $('fieldset[data-neb-uuid="' + nebUuid + '"] div').first();
        break;
      case 'select':
        element = $('select[data-neb-uuid="' + nebUuid + '"]');
        break;
      case 'grading':
        var checkedValue = getValueByUuid(nebUuid);
        var checkedElement = $('input[value=' + checkedValue + '][data-neb-uuid=' + nebUuid +']');
        if (checkedValue != undefined) {
          labelhover('lab' + checkedValue + id);
          element = checkedElement;
        }
        else {
          labelhover('lab1' + id);
          element = $('input[data-neb-uuid="' + nebUuid + '"]').first();
        }
        break;
      case 'nps':
      case 'grading1to10':
        var checkedValue = getValueByUuid(nebUuid);
        var checkedElement = $('input[value=' + checkedValue + '][data-neb-uuid=' + nebUuid +']');
        if (checkedValue != undefined) {
          labelhover('lab' + checkedValue + id);
          element = checkedElement;
        }
        else {
          labelhover('lab0' + id);
          element = $('input[data-neb-uuid="' + nebUuid + '"]').first();
        }
        break;
      default:
        break;
    }
    element.focus();
    element.off('keydown', checkTabPressOnFirstElement);
    element.on('keydown', checkTabPressOnFirstElement);
  };

  function focusOnLastElement() {
    $('#kampylelink').focus();
  };

  function focusOnFirstElement() {
    var pageNum = KAMPYLE_DATA.getCurrentPage()-1;
    var currentComponents = KAMPYLE_FORM_MODEL.getComponentsByPage(pageNum);
    for(var i = 0 ; i < currentComponents.length ; i++){
      if(KAMPYLE_CONDITIONAL_CONF.isInputComponent(currentComponents[i].component)) {
        setFocus(currentComponents[i]);
        return;
      }
    }
  };

  function setCircularTabNavigation() {
    $('#kampylelink').on('keydown', checkTabPressOnLastElement);
  };

  function unsetCircularTabNavigation() {
    $('#kampylelink').off('keydown', checkTabPressOnLastElement);
  };


  function addErrorContainer() {

    var errorElem = '<div id="error-container" class="error-container"></div>';

    if (KAMPYLE_COMMON.getNestedPropertyValue(window, 'KAMPYLE_CLIENT_CONFIG.errorOnTop')) { // error on top of the form
      $('#form').prepend(errorElem);
    }
    else {  // error on footer of the form
      $('#footerSection').prepend(errorElem);
    }
  };

  function addFooter() {
    var logoUrl = 'https://cdn-prod.kampyle.com/resources/form/FormBuilder/assets/images/kampyle/med_logo_medium.png';
    var footerSection =
      $('' +
        '<div id="footerSection" class="container">' +
        ' <div id="error-container" class="error-container"></div>' +
        ' <div class="row btnsRow">' +
        '   <div class="col-sm-12 text-center btnsCol">' +
        '     <button class="btn btn-default" id="closeBtn" type="button" value="Close">Cancel</button>' +
        '     <button class="btn btn-primary" id="submitBtn" type="button" value="submit">Send Feedback</button>' +
        '     <button class="btn btn-primary" id="nextBtn" type="button" value="next">Next</button>' +
        '   </div>' +
        ' </div>' +
        ' <div style="clear: both;" />' +
        '</div>');

    var powerBySection = $('<div class="powerBySection"></div>');
    var powerByTextSpan = $('<span id="spPoweredByText">Powered by</span>');
    var powerByLink = $('<a target="_blank" id="kampylelink" href="http://www.medallia.com" />');
    var powerByLinkLogo = $('<img alt="Link to Medallia Website" />');

    powerByLink.addClass('a-outline');
    powerByLink.on('focus', function() { footerLinkFocus('kampylelink') });
    powerByLink.on('blur', function() { footerRemoveLinkFocus('kampylelink'); });
    powerByLinkLogo.attr('src', logoUrl);

    powerBySection.css({
      fontSize: '17px',
      marginTop: '10px',
      paddingRight: '15px',
      marginBottom: '10px',
      textAlign: 'right'
    });

    powerByTextSpan.css({
      paddingLeft: '6px',
      paddingBottom: '2px',
      display: 'inline',
      height: '14px',
      verticalAlign: 'text-bottom',
      outline: 'none',
      border: 'none',
      fontSize: '12px',
      color: '#999'
    });

    powerByLinkLogo.css({
      paddingLeft: '9px',
      paddingBottom: '3px',
      display: 'inline',
      height: '18px',
      outline: 'none',
      border: 'none'
    });

    powerByLink.append(powerByLinkLogo);
    powerBySection.append(powerByTextSpan)
    powerBySection.append(powerByLink);
    footerSection.append(powerBySection);

    $('#form').append(footerSection);
    addBackButton(); //this function will check if back button is needed and will add to the footer section
  };

  function addBackButton() {
    var selectedForm = KAMPYLE_FORM_MODEL.getForm();
    var backBtnTemplate = '<button class="btn btn-default" id="backBtn" type="button" value="Back">Back</button>'
    if (KAMPYLE_COMMON.getNestedPropertyValue(selectedForm, 'settings.formBasicSettings.navigationButtons') && selectedForm.settings.formBasicSettings.navigationButtons.indexOf("Back") !== -1) {
      $('div.btnsCol').prepend(backBtnTemplate);
      hideBackButton(); // hide the back button as it doesn't appear on first page
    }
  };

  function showBackButton() {
    KAMPYLE_UTILS.setElementStyle(document.getElementById("backBtn"), {
      display: 'inline'
    });
  };

  function hideBackButton() {
    KAMPYLE_UTILS.setElementStyle(document.getElementById("backBtn"), {
      display: 'none'
    });
  };

  function clickBack() {
    if (KAMPYLE_SPECIFIC.clickBack) {
      KAMPYLE_SPECIFIC.clickBack();
    }
    else {
      var currentPage = KAMPYLE_DATA.getCurrentPage() - 1; // one page back
      var numOfPages = KAMPYLE_DATA.getNumOfPages();
        KAMPYLE_DATA.setCurrentPage(currentPage);
        showOnlyPage(numOfPages, currentPage);
        if (currentPage === KAMPYLE_DATA.getFirstPage()) { //first page
          hideBackButton();
        }
        KAMPYLE_UTILS.hide(document.getElementById("submitBtn"));
        KAMPYLE_UTILS.show(document.getElementById("nextBtn"), 'inline');
        if (KAMPYLE_SPECIFIC.changeFlowBehavior) {
          KAMPYLE_SPECIFIC.changeFlowBehavior(currentPage);
        }
    }
    KAMPYLE_VIEW.focusOnFirstElement();
  };

  function showOnlyPage(numOfPages, pageToshow){
    for (var i = 0 ; i < numOfPages ; i++){
      $('div.page-container').hide();
    }
    $('div#page_' + pageToshow).show();
  };

  window.showOnlyPage = showOnlyPage; // for backward compatability

  function getValueByUuid(uid){

    var selectedElementsArr = document.querySelectorAll('div[data-neb-uuid="' + uid + '"] .elementVal');
    if(selectedElementsArr.length > 1 || selectedElementsArr[0].type === "checkbox") {
      switch(selectedElementsArr[0].nodeName.toLowerCase()){
        case 'option':
          for (var i=0 ; i< selectedElementsArr.length ; i++){
            if (selectedElementsArr[i].selected){
              return selectedElementsArr[i].value;
            }
          }
        break;
        case 'input':
          if(selectedElementsArr[0].type === "radio"){
            for (var i=0 ; i< selectedElementsArr.length ; i++){
              if (selectedElementsArr[i].checked){
                return selectedElementsArr[i].value;
              }
            }
          }
          else {
            var totalCheckedElements = [];
            for (var i=0 ; i< selectedElementsArr.length ; i++){
              if (selectedElementsArr[i].checked){
                totalCheckedElements.push(selectedElementsArr[i].value);
             }
            }
            return totalCheckedElements;
          }
        break;
        case 'label':
          return "";
        break;
     }
    } else {
      if (selectedElementsArr && selectedElementsArr.length) {
      return selectedElementsArr[0].value;
      }
      else {
        return "";
      }

    }
  };

  return {
    setFocus: setFocus,
    focusOnLastElement: focusOnLastElement,
    setCircularTabNavigation: setCircularTabNavigation,
    unsetCircularTabNavigation: unsetCircularTabNavigation,
    focusOnFirstElement: focusOnFirstElement,
    addErrorContainer: addErrorContainer,
    addFooter: addFooter,
    addBackButton: addBackButton,
    showBackButton: showBackButton,
    hideBackButton: hideBackButton,
    clickBack: clickBack,
    showOnlyPage: showOnlyPage,
    getValueByUuid: getValueByUuid,

    getAllCheckboxValues: getAllCheckboxValues,
  };

})();

// The following function deals with dymaic text changes
// the labels are taken from the JSON and plugged into the dom

//User clicked "close" button - close the form without submitting data
function closeThis() {
  KAMPYLE_SDK.kampyleCloseWindow();
};

function htmlUnescape(value) {
  return String(value)
  .replace(/&quot/g, '"')
  .replace(/&#39/g, "'")
  .replace(/&lt/g, '<')
  .replace(/&gt/g, '>')
  .replace(/&amp/g, '&');
};

function labelhover (id) {
  $("#" + id).addClass('force-hover');
};

function labelhoverDomElem (domElem) {
  domElem.addClass('force-hover');
};

function labelhoverout (id) {
  $("#" + id).removeClass('force-hover');
};

function footerLinkFocus(id) {
  $("#" + id).addClass("a-outline");
};

function footerRemoveLinkFocus(id) {
  $("#" + id).addClass("a-outline");
};

function addDropDownOptions(component) {

  optionList="";

  if (component.placeholder !="") {
    optionList= '<option class="elementVal" value="" selected disabled>' + component.placeholder +'</option>';
  }

  $.each(component.options, function(i){
    optionList = optionList +  '<option class="elementVal" value="' + component.options[i] + '" >' + component.options[i] +'</option>';
  });
  return optionList;
};

function addRadioOptions(component) {

  optionList="";

  $.each(component.options, function(i){
   optionList = optionList +  '<label class="radio"><input type="radio"  class="elementVal" value="' + component.options[i] + '" id="' + component.id + i + '"  name="' + component.id +'" data-neb-uuid="' + component.nebUuid +'" aria-describedby="lbl_' + component.id +'">'
   + component.options[i] +
   '</label>';
 });

  return optionList;
};

window.checkboxHandler = function(e) {
  //console.log(e);
  if(e.which === 32){  //key pressed is space
    $(e.currentTarget).find('input').click();
  }
}

function addElementsToPage(pageComponents, currentPage){

  var hiddenElements = KAMPYLE_CONDITIONAL.getHideElements();
  var isDisplayed;

  for (var i = 0 ; i < pageComponents.length ; i++){
    isDisplayed = !hiddenElements[pageComponents[i].id];
    KAMPYLE_TEMPLATES_SERVICE.addElement(pageComponents[i], isDisplayed, currentPage);
    if (pageComponents[i].required) {
      var requiredElement = document.querySelector('span.required[data-neb-uuid="' + pageComponents[i].nebUuid + '"]');
      KAMPYLE_UTILS.setElementStyle(requiredElement, {
        display: 'inline'
      });
    }
  }
};

function addPages(numOfPages){
  domElem = $("#form");
  var template;
  for (var i = 1 ; i <= numOfPages ; i++){
    template = '<div class="page-container container" id="page_{{pageNum}}"></div>';
    template = template.replace(/{{pageNum}}/g,i);
    $(domElem).append(template);
  }
};

function assignHandlers() {

  $('select').on('change', handleChange);
  $(':radio').on('change', handleChange);
  $(':checkbox').on('change', handleChange);

  $('textarea').on('blur', handleChange);
  $('.email').on('blur', handleChange);
  $('.textInput').on('blur', handleChange);
  /* Send */
  $("#submitBtn").click(clickSend);
  /* Cancel */
  $("#closeBtn").click(clickClose);
  /* Next */
  $("#nextBtn").click(clickNext);
  /* Back */
  $("#backBtn").click(KAMPYLE_VIEW.clickBack);
  $("div.nebula-checkbox").keypress(checkboxHandler);

  KAMPYLE_EVENT_DISPATCHER.subscribe('neb_PageShown', pageShown);
};

function pageShown(eventName, data) {
  KAMPYLE_DATA.setFormNewHeight(data.pageNumber);
}

function changeDisplay(nebUuid, display){
  var styleDisplay = display ? 'block' : 'none';
  document.querySelector('div[data-neb-uuid="' + nebUuid + '"]').style.display = styleDisplay;
};

function handleChange() {
  initCond(this.value,$(this).attr("data-neb-uuid"), this.type);
};

function initCond(val, nebUuid, componentType) {
  var compVal;

  if (componentType === 'checkbox') {
    val = KAMPYLE_VIEW.getAllCheckboxValues(nebUuid);
  }


  var changedComp = KAMPYLE_CONDITIONAL.checkConditionalDisplay(val,nebUuid);
  if (changedComp && changedComp.length) {
    KAMPYLE_EVENT_DISPATCHER.trigger('neb_conditionalDisplayDone', {changedComp: changedComp});
  }
  if(changedComp && changedComp.length){
    for(var i = 0 ; i < changedComp.length ; i++){
      changeDisplay(changedComp[i].nebUuid, changedComp[i].isDisplayed);
    }
    if(changedComp[0].isDisplayed){
      compVal = KAMPYLE_VIEW.getValueByUuid(changedComp[0].nebUuid);
      if(compVal){
        initCond(compVal, changedComp[0].nebUuid);
      }
    }
  }
};

function clickClose() {

  KAMPYLE_VIEW.unsetCircularTabNavigation();
  if (typeof (KAMPYLE_SDK) === "undefined"){
    closeMe = setTimeout(function(){
      htmlBackup = $("#newform_innerWrapper").html();
      $("#newform_innerWrapper").html().show();
    }, 1000);
    self.close();
  } else {
    KAMPYLE_SDK.kampyleCloseWindow();
  }
};

function clickNext() {

  if (KAMPYLE_SPECIFIC.clickNext) {
    KAMPYLE_SPECIFIC.clickNext();
  }
  else {
    var currentPage = KAMPYLE_DATA.getCurrentPage() + 1;
    var numOfPages = KAMPYLE_DATA.getNumOfPages();
    if (validation(KAMPYLE_DATA.getCurrentPage() - 1)) {
      KAMPYLE_DATA.setCurrentPage(currentPage);
      KAMPYLE_VIEW.showOnlyPage(numOfPages, currentPage);
      if (numOfPages === currentPage) { //last page
        $('#nextBtn').hide();
        $('#submitBtn').show();
      }
      KAMPYLE_VIEW.showBackButton();
      if (KAMPYLE_SPECIFIC.changeFlowBehavior) {
        KAMPYLE_SPECIFIC.changeFlowBehavior(currentPage);
      }
    }
  }
  KAMPYLE_VIEW.focusOnFirstElement();
};

function errorBox(failedList) {

  var domElem = $("#error-container");
  var listOfErrors =  '<div id="error-div" class="error-div">' +
                      '<div id="error-title" class="error-title" tabindex="-1">ERROR</div><ol>';

  //iterate on the array of failed list and create links for the errors
  $.each(failedList, function(i){
    var id = failedList[i].id;
    var missingValueText = id +'">Missing Value:' + $('#lbl_' + id).text() + '</a></li>'

    switch(failedList[i].component){
      case 'email':
      case 'url':
      case 'radio':
        listOfErrors += '<li><a href="#' + missingValueText;
      break;
      case 'nps':
      case 'grading1to10':
        listOfErrors += '<li><a href="#grade_radio01' + missingValueText;
      break;
      case 'grading':
        listOfErrors += '<li><a href="#grade_radio02' + missingValueText;
      break;
      case 'select':
        listOfErrors += '<li><a href="#select' + missingValueText;
      break;
      case 'textArea':
        listOfErrors += '<li><a href="#textArea' + missingValueText;
      break;
      case 'textInput':
        listOfErrors += '<li><a href="#textInput' + missingValueText;
      break;
      case 'checkbox':
        listOfErrors += '<li><a href="#div_0_' + missingValueText;
      break;
      case 'emailFormat':
        listOfErrors += '<li><a href="#' + id +'">A valid email address is required. For example: "name@example.com"</a></li>';
      break;
      case 'urlFormat':
        listOfErrors += '<li><a href="#' + id +'">A valid URL address is required. For example: "www.google.com"</a></li>';
      break;
    }
  })

  listOfErrors += '</ol></div>';
  domElem.append(listOfErrors);
  $("#error-title").focus();

  // if(window.KAMPYLE_SPECIFIC) {
  //   KAMPYLE_SPECIFIC.errorBox(failedList);
  // }
};

function clickSend() {
  var data;
  var currentPage = KAMPYLE_DATA.getCurrentPage()-1;

  if(window.KAMPYLE_CUSTOM != undefined && typeof KAMPYLE_CUSTOM.isSpecificHtml === 'function') {
    if(window.KAMPYLE_SPECIFIC && window.KAMPYLE_SPECIFIC.clickSend) {
      data = prepareSubmitContract();
      if(window.KAMPYLE_SPECIFIC.validation(currentPage)) {
        window.KAMPYLE_SPECIFIC.clickSend(data);
      }
    }
  }
  else {
    data = prepareSubmitContract();
    if(validation(currentPage)) {
      KAMPYLE_SDK.kampyleSubmit(data, true /*close after submit*/);
    }
  }
};

function emailValidation(emailValue) {
  var dataOK = false, emailVal, regexp_string, regexp_flags, regexp;

  /* Clear error */
  if (emailValue === "") {
    return false;
  }
  /* Using the default Kampyle email validation regex etc which are available via the form */
  emailVal = {"param_type_id":"1","active":"1","priority":"0","validator_id":"1","id":"1","title":"Email syntax","validator_type":"regex","validator_value":"\/^[+_a-zA-Z0-9-]+(.[+_a-zA-Z0-9-]+)*@(([a-zA-Z0-9-])+\\.)+([a-zA-Z0-9]{2,4})+$\/i","system":"1","error_text":null};
  regexp_string = emailVal.validator_value.slice(1,emailVal.validator_value.lastIndexOf('/')-1);
  regexp_flags = emailVal.validator_value.slice(emailVal.validator_value.lastIndexOf('/')+1);
  regexp = new RegExp(regexp_string,regexp_flags);
  if ( regexp.test(emailValue) == true ) {
    dataOK = true;
  }
  else {
    dataOK = false;
  }
  return dataOK;
};

function urlValidation(urlValue) {
  var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;

  if (!re.test(urlValue)) {
    return false;
  }
  else {
    return true;
  }
};

function prepareSubmitContract() {

    var currentComponents, PageItem, PageComponents, item, form;
    var formContract = {
      pages: []
    };

    var numOfPages = KAMPYLE_DATA.getNumOfPages();
    for (var pageNum = 0 ; pageNum < numOfPages ; pageNum++) {
      currentComponents = KAMPYLE_FORM_MODEL.getComponentsByPage(pageNum);
      PageItem = {};
      PageComponents = [];

      for (var i = 0 ; i < currentComponents.length ; i++) {
        if(currentComponents[i].component !== "image" && currentComponents[i].component !== "label" && currentComponents[i].component !== "sectionBreak"){
          item = {};
          item.unique_name = currentComponents[i].unique_name;
          item.type = currentComponents[i].component;
          if (item.type === "nps" || item.type === "grading1to10" || item.type === "grading") {
            item.value = parseInt(KAMPYLE_VIEW.getValueByUuid(currentComponents[i].nebUuid));
          }
          else {
            item.value = KAMPYLE_VIEW.getValueByUuid(currentComponents[i].nebUuid);
            if(item.value === 'default') {
              item.value = '';
            }
          }
          PageComponents.push(item);
        }
      }
      form = KAMPYLE_FORM_MODEL.getForm();
      if (form && form.pages && form.pages[pageNum] && form.pages[pageNum].name) {
        PageItem.pageName = form.pages[pageNum].name;
      }

      PageItem.components = PageComponents;
      formContract.pages.push(PageItem);
    }
  return formContract;
};

function isCustom(unique_name) {
  window.KAMPYLE_CUSTOM != undefined && typeof KAMPYLE_CUSTOM.isSpecific === 'function' && KAMPYLE_CUSTOM.isSpecific(unique_name)
}

function initADA() {
  KAMPYLE_VIEW.setCircularTabNavigation();
  KAMPYLE_VIEW.focusOnFirstElement(); //focus on first element of the first page when form is shown
}

function init() {

  if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(fn, scope) {
        for(var i = 0, len = this.length; i < len; ++i) {
            fn.call(scope, this[i], i, this);
        }
    }
}

  var numOfPages = KAMPYLE_DATA.getNumOfPages();
  var currentPage = KAMPYLE_DATA.getCurrentPage();
  var pageElements;

  KAMPYLE_CONDITIONAL.init();
  KAMPYLE_EVENT_DISPATCHER.init();
  KAMPYLE_EVENT_DISPATCHER.trigger('neb_genericInitStart');

  addPages(numOfPages);

  for (var pageNum = 0 ; pageNum < numOfPages ; pageNum++) {
    pageElements = KAMPYLE_FORM_MODEL.getComponentsByPage(pageNum);
    for (var i = 0 ; i < pageElements.length ; i++){
      pageElements[i].isCustom = isCustom(pageElements[i].unique_name);
    }

    addElementsToPage(pageElements, pageNum + 1);
  }

  KAMPYLE_VIEW.addFooter();
  KAMPYLE_VIEW.addErrorContainer();

  assignHandlers();
  KAMPYLE_VIEW.showOnlyPage(numOfPages, currentPage);
  if (numOfPages > 1) {
    $('#submitBtn').hide();
  }else
  {
    $('#nextBtn').hide();
  }

  if (window.KAMPYLE_SPECIFIC) {
    window.KAMPYLE_SPECIFIC.init(); //styling changes if custom elements
  }

  KAMPYLE_EVENT_DISPATCHER.trigger('neb_pagesBuildingDone');
  KAMPYLE_EVENT_DISPATCHER.trigger('neb_PageShown',  { pageNumber: 1 });
}
window.addEventListener('KampyleSdkLoaded', init);
window.addEventListener('kampyleFormShown', initADA);


function validation(currentPage) {
  failedList = [];

  //clean any alerts before starting
  $(".error-div").remove();
  $(".validation-error").removeClass("validation-error");

  if (window.KAMPYLE_SDK != undefined && typeof KAMPYLE_SDK.kampyleGetFormObject === 'function') {
    var formData = window.KAMPYLE_SDK.kampyleGetFormObject();  
  }

  if (formData) {var currPage = formData.pages[currentPage].dynamicData || null;};
  var isDisplayed = true;
  var emailErrorName;

  if (currPage) {
    for (var j = 0; j < currPage.length; j++) {
      if($("div.form-group[data-neb-uuid='" + currPage[j].nebUuid + "']").css("display") === "none") {
        isDisplayed = false;
      }
      var isFailed = false;
      switch(currPage[j].component) {
        case 'grading':
        case 'radio':
        case 'checkbox':
        case 'nps':
        case 'grading1to10':
          var selected = $("input[name='"+ currPage[j].id+"']:checked");
          if (currPage[j].required && isDisplayed && selected.length <= 0) {
            isFailed = true;
          }
        break;
        case 'select':
          var selected = $("#select" + currPage[j].id + " option:selected").val();
          if (currPage[j].required && isDisplayed && selected.length <= 0 ) {
            isFailed = true;
          }
        break;
        case 'textArea':
          if (currPage[j].required && isDisplayed && $("#textArea" + currPage[j].id).val().trim().length <= 0 ) {
           isFailed = true;
         }
        break;
        case 'textInput':
          if (currPage[j].required && isDisplayed && $("#textInput" + currPage[j].id).val().trim().length <= 0 ) {
            isFailed = true;
          }
        break;
        case 'emailInput':
          var itemValue = $("#" + currPage[j].id).val().trim();
          if (currPage[j].required && isDisplayed && itemValue.length <= 0) {
            ErrorName = "email";
            isFailed = true;
          }
          else if ( (currPage[j].required && isDisplayed && !emailValidation(itemValue)) ||  (itemValue!=="" && !emailValidation(itemValue)) ) {
            ErrorName = "emailFormat";
            isFailed = true;
          }
        break;
        case 'urlInput':
          var itemValue = $("#" + currPage[j].id).val().trim();
          if (currPage[j].required && isDisplayed && itemValue.length <= 0) {
            ErrorName = "url";
            isFailed = true;
          }
          else if ( (currPage[j].required && isDisplayed && !urlValidation(itemValue) ) ||  (isDisplayed && itemValue!=="" && !urlValidation(itemValue)) ) {
            ErrorName = "urlFormat";
            isFailed = true;
          }
        break;
      }
      if(isFailed) {
        var failed= new Object();
        failed.id = currPage[j].id;
        if(currPage[j].component === 'emailInput' || currPage[j].component === 'urlInput') {
          failed.component = ErrorName;
        }
        else {
          failed.component = currPage[j].component;
        }
        failedList.push(failed);
      }

      isDisplayed = true;
    }  
  }
  
  if (failedList.length>0) {
    //iterate over the failed list array and color the labels in red.
    $.each(failedList, function(i) {
      $("#lbl_" + failedList[i].id).addClass("validation-error");
    })
    errorBox(failedList);
    return false;
  }
  else {
    return true;
  }
};
