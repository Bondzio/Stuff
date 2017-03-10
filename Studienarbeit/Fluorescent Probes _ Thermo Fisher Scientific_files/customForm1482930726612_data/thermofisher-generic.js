/* eslint "no-undef": "off", "no-unused-vars": "off"
*/

// overrided to avoid page resize - page sized defined in the form specific sass file
KAMPYLE_DATA.setFormNewHeight = function () {}

window.KAMPYLE_THERMOFISHER = (function() {

	var KAMPYLE_TEXTS;

	// this line initializing the event dispatcher before nebula-generic so it can subs to events
	if (!KAMPYLE_EVENT_DISPATCHER.getEventSubscriptions()) {
		KAMPYLE_EVENT_DISPATCHER.init();
	}

	KAMPYLE_EVENT_DISPATCHER.subscribe('neb_genericInitStart', function () {
		var defaultLocale = KAMPYLE_COMMON.getNestedPropertyValue(KAMPYLE_CLIENT_CONFIG, 'defaultLocale');
		var locale = KAMPYLE_COMMON.getNestedPropertyValue(KAMPYLE_FORM_CONFIG, 'locale') || defaultLocale;
		if (!setLocaleTexts(locale)) {
			setLocaleTexts(defaultLocale);
		}
	});

	KAMPYLE_EVENT_DISPATCHER.subscribe('neb_PageShown', translatePoweredByText);

	function setLocaleTexts (locale) {
		var baseLocaleCdnUrl = KAMPYLE_COMMON.getNestedPropertyValue(KAMPYLE_CLIENT_CONFIG.ROUTES, 'localeFilesBaseURL');
		return $.ajax({
	    url: baseLocaleCdnUrl.concat(locale).concat('.json'),
	    success: function(texts) {
				KAMPYLE_TEXTS = texts;
	      if (typeof KAMPYLE_TEXTS === "string") {
	      	try {
	      		KAMPYLE_TEXTS = JSON.parse(KAMPYLE_TEXTS);
	      	} catch (ex) {
	      		console.warn('Failed parsing locale texts.');
	      		KAMPYLE_TEXTS = {};
	      	}
	      }
	    },
			error: function (err) {
				console.log(err);
			},
			jsonp: false,
			dataType: 'json',
	    async:false,
			timeout: 3000,
			cache: false
	  }).status === 200;
	}

	function getLocaleText(key) {
		return KAMPYLE_COMMON.getNestedPropertyValue(KAMPYLE_TEXTS, key) || '';
	}

	function addCloseButtonWhenLoadDone () {
		KAMPYLE_EVENT_DISPATCHER.subscribe('neb_pagesBuildingDone', function () {
			var html =
			'<div class="row close-btn-row">' +
			'<div class="col-xs-offset-11">' +
			'<a onclick="clickClose()" href="#">' +
			'<img class="thermo-x-pic" src="' + KAMPYLE_CLIENT_CONFIG.ROUTES.xPic + '" alt="' + getLocaleText('CLOSE_WINDOW') + '"/>' +
			'</a>' +
			'</div>' +
			'</div>';
			$('.page-container').prepend($(html));
		});
	}

	function markNoLogoPages() {
		KAMPYLE_EVENT_DISPATCHER.subscribe('neb_pagesBuildingDone', function() {
			$('.page-container').each(function (index, node) {
				// looking to logo within the current container node,
				//if there's no logo then adding the class no-logo to the container
				$(node).addClass($('#logo', $(node)).get(0) ? '' : 'no-logo');
			});
		});
	}

	function appendContactUs() {
    var template = '<div class="row contact-us-text">' +
          '<div class="col-sm-12 text-center">' +
          '<label class="">' +
            getLocaleText('PLEASE').concat(' ') +
            '<a href="http://www.thermofisher.com/il/en/home/technical-resources/contact-us.html" target="_blank">' + getLocaleText('CONTACT_US') + '</a>' +
            ' '.concat(getLocaleText('IF_YOU_NEED_ASSITANCE')) +
          '</label>' +
          '</div>' +
        '</div>';
     $('.underText').after(template);
  }

	function removeContactUs() {
		$('div.contact-us-text').remove();
	}

	function removeInfoDisclaimer() {
		$('div.disclaimer-text').remove();
	}

	function addAccordionElements() {

	  var optionList = '';
	  var template = '';

	  template = '<div class="panel panel-default">' +
	    '<div class="panel-heading" role="tab" id="headingOne">' +
	      '<h4 class="panel-title">' +
	        '<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">' +
	          '<i id="collapseOneIcon" class="fa fa-caret-right"></i> ' + getLocaleText('WEB_CONTENT') +
	        '</a>' +
	      '</h4>' +
	    '</div>' +
	    '<div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">' +
	      '<div class="panel-body webContent">' +
	      '</div>' +
	    '</div>' +
	  '</div>' +
	  '<div class="panel panel-default">' +
	    '<div class="panel-heading" role="tab" id="headingTwo">' +
	      '<h4 class="panel-title">' +
	        '<a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">' +
	          '<i id="collapseTwoIcon" class="fa fa-caret-right"></i> ' + getLocaleText('EASE_OF_USE') +
	        '</a>' +
	      '</h4>' +
	    '</div>' +
	    '<div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">' +
	      '<div class="panel-body easeOfUse" >' +
	      '</div>' +
	    '</div>' +
	  '</div>' +
	  '<div class="panel panel-default">' +
	    '<div class="panel-heading" role="tab" id="headingThree">' +
	      '<h4 class="panel-title">' +
	        '<a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">' +
	          '<i id="collapseThreeIcon" class="fa fa-caret-right"></i> ' + getLocaleText('ORDER_SUPPORT') +
	        '</a>' +
	      '</h4>' +
	    '</div>' +
	    '<div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">' +
	      '<div class="panel-body orderSupport">' +
	      '</div>' +
	    '</div>' +
	  '</div>';
	  optionList += template;
	  return optionList;
	}


	function subscribeToAccordionEvents() {
	  var allCollapses = $('.collapse');
	  allCollapses.on('hide.bs.collapse', function (e) {
	    $('#' + e.target.id + 'Icon').removeClass('fa-caret-down').addClass('fa-caret-right');
	  })
	  .on('show.bs.collapse', function (e) {
	    $('#' + e.target.id + 'Icon').removeClass('fa-caret-right').addClass('fa-caret-down');
	  });
	}


	function getCustomTemplates() {
		return {
			select: '<div class="form-group" id="dropDownContainer" style="display:{{Display}}" data-neb-uuid="{{NebUuid}}" >' +
				'<label for="{{Id}}" id="lbl_{{Id}}"><span class="required" data-neb-uuid="{{NebUuid}}">*</span>{{Label}}</label>' +
				'<!-- CATEGORY SELECTOR -->' +
				'<div id="dropDown{{Id}}" data-neb-uuid="{{NebUuid}}">' +
				'<select id="select{{Id}}" data-neb-uuid="{{NebUuid}}" class="select2_category form-control select2-offscreen" data-placeholder="{{PlaceHolder}}">' +
				'{{DropDownOptions}}' +
				'<select/>' +
				'{{description}}' +
				'</div>' +
				'</div>',
			radio: '<div class="form-group {{div_class}} nps-radio-row" style="display:{{Display}}" data-neb-uuid="{{NebUuid}}" >' +
				'<div class="neb-label-radio"><span class="required" data-neb-uuid="{{NebUuid}}">*</span><label class="control-label" id="lbl_{{Id}}">{{Label}}</label></div>' +
				'<fieldset id="{{Id}} "data-neb-uuid="{{NebUuid}}" >' +
				'{{RadioOptions}}' +
				'{{description}}' +
				'</fieldset>' +
				'</div>',
		};
	}

	function addSeeMoreSection(page, id) {
	  var template = '<div id="seeMoreSection" class="container">' +
      '<div class="row">' +
        '<div class="col-sm-12 text-center">' +
          '<a class="clickable" id="seeMoreBtn" type="button">' + getLocaleText('SEE_MORE') + '</a>' +
        '</div>' +
      '</div>' +
      '<div style="clear: both;"></div>' +
      '</div>';
	  $('#Page_2_text_13819Container').before(template);
	}

	function appendInfoDisclamier() {
		var template = '<div class="row disclaimer-text">' +
        '<div class="col-sm-12 text-center">' +
        '<label class="">' + getLocaleText('INFO_DISCLAIMER') + '</label>' +
        '</div>' +
      '</div>';
     $('div.btnsRow').after(template);
	}

	function addRadioOptions(component) {

	  var optionList = '';
	  var template = '';

	  optionList += '<div class="neb-radio-labels">' +
	  								'<div class="labelRadio radioRed pull-left" data-neb-uuid="{{nebUuid}}">{{labelStartRange}}</div>' +
	  								'<div class="labelRadio radioGreen pull-right" data-neb-uuid="{{nebUuid}}">{{labelEndRange}}</div>' +
  								'</div>';
	  optionList += '<div class="controls">';

	  for (var i = 0; i <= 10; i++) {
	    template = '<label class="labelRadio" data-neb-uuid="' + component.nebUuid + '">' +
	                      '<input type="radio" class="elementVal" name={{name}} id="customRating' + i + '" value="' + i + '" data-neb-uuid="' + component.nebUuid + '">' + i + '</label>';
	    optionList += template;
	  }

	  optionList += '</div>';

	  optionList = optionList.replace(/{{labelStartRange}}/g, component.options[0]);
	  optionList = optionList.replace(/{{labelEndRange}}/g, component.options[1]);
	  optionList = optionList.replace(/{{name}}/g, component.id);
	  optionList = optionList.replace(/{{nebUuid}}/g, component.nebUuid);

	  return optionList;
	}

	function setButtonTexts() {
		$('#closeBtn').text(getLocaleText('CLOSE'));
		$('#closeBtn').hide();
		$('#submitBtn').text(getLocaleText('SUBMIT'));
		$('#nextBtn').text(getLocaleText('NEXT'));
	}

	function translatePoweredByText() {
		$('#spPoweredByText').text(getLocaleText('POWERED_BY') || 'Powered by');
	}

	return {
		addCloseButtonWhenLoadDone: addCloseButtonWhenLoadDone,
		getCustomTemplates: getCustomTemplates,
		addRadioOptions: addRadioOptions,
		addSeeMoreSection: addSeeMoreSection,
		setButtonTexts: setButtonTexts,
		addAccordionElements: addAccordionElements,
		subscribeToAccordionEvents: subscribeToAccordionEvents,
		appendContactUs: appendContactUs,
		appendInfoDisclamier: appendInfoDisclamier,
		removeContactUs: removeContactUs,
		removeInfoDisclaimer: removeInfoDisclaimer,
		markNoLogoPages: markNoLogoPages,
		getLocaleText: getLocaleText
	};
})();
