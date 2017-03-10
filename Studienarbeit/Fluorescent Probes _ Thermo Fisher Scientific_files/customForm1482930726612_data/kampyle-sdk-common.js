
/* eslint  "no-undef": "off", "no-console": "off"*/
var KAMPYLE_SDK = (function(window, document) {
	var scCallback;

	var CONST = {
		STORAGE_ITEMS: [
			'isFormClosed', 'formId', 'uuid', 'integrations', 'context', 'triggerType',
			'customParams', 'urlPath', 'isSubmitStarted', 'isScreenCaptureEnabled', 'device',
			'provisions',
		],
		TRIGGER_TYPES: {
			LIVE: 'live',
			PREVIEW: 'Preview'
		}
	};

	var MEMORY = (function() {
		var _memory = {};

		function set(dataName, dataValue) {
			_memory[dataName] = dataValue;
		}


		function get(dataName) {
			return _memory[dataName];
		}

		function clear() {
			_memory = {};
		}

		function getAll() {
			return _memory;
		}


		return {
			get: get,
			getAll: getAll,
			set: set,
			clear: clear,
		};
	})();

	var utils = {
		camelToDash: function(str) {
          if (typeof str !== 'string') {
            return str;
          } else {
            return str.replace(/\W+/g, '-')
            .replace(/([a-z\d])([A-Z])/g, '$1-$2')
            .toLowerCase();
          }
	  },
		triggerCustomEvent: function(eventName, data) {
			data = data || {};
		  // create and dispatch the event

		  var event;
		  try {
		  	event = new CustomEvent(eventName, data);
		  }
		  catch (e) {
		  	event = document.createEvent('CustomEvent');

		  	// event.initCustomEvent(type, canBubble, cancelable, detail);
		  	event.initCustomEvent(eventName, true, true, data);
		  }
		  window.dispatchEvent(event);
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
                try {
                  element.style.setProperty(dashed, '' + styleObj[k], isImportant);
                }
                catch (e) {
                  element.style.setProperty(dashed, '' + styleObj[k], '!' + isImportant);
                }
              }
              else {
                element.style[k] = styleObj[k];
              }
            }
          }
	    }
	  },
		generateUuid: function() {
			function uuidAlgorithm() {
				return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
			}

			var numAttempts = 8;
			var uuid = uuidAlgorithm();
			for (var i = 0; i < numAttempts - 1; i++) {
				uuid += '-' + uuidAlgorithm();
			}

			return uuid;
		},
		clearData: function() {
			var currItem;
			for (var i = CONST.STORAGE_ITEMS.length - 1; i >= 0; i--) {
				currItem = CONST.STORAGE_ITEMS[i];
				KAMPYLE_SDK.utils.setData(currItem, null);
			}

			KAMPYLE_SDK.MEMORY.clear();
		},
		hasValue: function(data) {
			return data !== undefined && data !== null && data !== 'null';
		},
		getData: function(dataName) {
			var data;
			try {
				data = sessionStorage.getItem(dataName);
			}
			catch (e) { //fallback to cookies and memory
				data = KAMPYLE_SDK.utils.getCookie(dataName);
			}

			if (!KAMPYLE_SDK.utils.hasValue(data)) {
				data = KAMPYLE_SDK.MEMORY.get(dataName);
			}

			if (KAMPYLE_SDK.utils.hasValue(data))
			{
				//Check if it is an object
				var parsed = this.safeJsonParse(data);
				if (!!parsed || parsed === 0 || parsed === false)
				{
					return parsed;
				}
				else {
					return data;
				}
			}
			return null;
		},
		setCookie: function (cookieName, cookieValue, exDays) {
			exDays = exDays || 365;
			var currDate = new Date();
			currDate.setTime(currDate.getTime() + (exDays * 24 * 60 * 60 * 1000));
			var expires = 'expires=' + currDate.toUTCString();
			document.cookie = cookieName + '=' + cookieValue + '; ' + expires + ';path=/';
		},
		getCookie: function (cookieName) {
			this.name = cookieName + '=';
			this.ca = document.cookie.split(';');
			for (var i = 0; i < this.ca.length; i++) {
				this.c = this.ca[i];
				while (this.c.charAt(0) === ' ') this.c = this.c.substring(1);
				if (this.c.indexOf(this.name) === 0) return this.c.substring(this.name.length, this.c.length);
			}

			return '';
		},
		setData: function(dataName, dataValue) {
			if (typeof dataValue === 'object' && !!dataValue) //to avoid null
			{
				dataValue = this.safeJsonStringify(dataValue);
			}

			try	{
				sessionStorage.setItem(dataName, dataValue);
			}
			catch (e) { //fallback to cookies
				KAMPYLE_SDK.utils.setCookie(dataName, dataValue);
			}

			//Always set in memory for backup
			KAMPYLE_SDK.MEMORY.set(dataName, dataValue);

		},

		safePostMessage: function(messageData) {
			if (window.opener) { //if opened as a popup
				window.opener.postMessage(messageData, '*');
			} else if (window.top !== window.self) { //if opened in an iframe
				top.window.postMessage(messageData, '*');
			} else {
				window.postMessage(messageData, '*');
			}
		},

		sendMessage: function(action, extraData) {
			var baseData = {
				formId: utils.getData('formId'),
				uuid: utils.getData('uuid'),
				action: action,
			};

			for (var prop in extraData) {
				if (extraData.hasOwnProperty(prop)) {
					baseData[prop] = extraData[prop];
				}
			}

			KAMPYLE_SDK.utils.safePostMessage(KAMPYLE_SDK.utils.safeJsonStringify(baseData));
		},
		/**
		 * Overcomes IE8 issues with event subscription
		 * @param  eventType - name of the event
		 * @param  handler   - triggered function
		 */
		 kampyleEventHandler: function (elem, eventType, handler) {
		 	if (elem.addEventListener) {
		 		elem.addEventListener(eventType, handler, false);
		 	}
		 	else if (elem.attachEvent) {
		 		elem.attachEvent('on' + eventType, handler);
		 	}
		 },
		/**
		 * Overcomes IE8 issues with event subscription
		 * @param  eventType - name of the event
		 * @param  handler   - triggered function
		 */
		 kampyleRemoveEventHandler: function (elem, eventType, handler) {
		 	if (elem.removeEventListener) {
		 		elem.removeEventListener(eventType, handler, false);
		 	}
		 	else if (elem.detachEvent) {
		 		elem.detachEvent('on' + eventType, handler);
		 	} else {
		 		elem['on' + eventType] = null;
		 	}
		 },
		/**
		 * Helper function for fetching URL-passed params
		 * @param  {string]} name- name of the parameter
		 */
		 getUrlParam: function(name) {
			if (!location || !location.search) { //During Test

				switch (name) {
					case 'formId':
					return 1;
					case 'region':
					return 'dev';
					case 'isKampylePreview':
					return true;
					default:

					break;
				}
			}
			/*eslint-disable */
			var params = location.search.substr(location.search.indexOf('?') + 1);
			var sval = '';
			var temp;
			params = params.split('&');
		    	// split param and value into individual pieces
		    	for (var i = 0; i < params.length; i++)
		    	{
		    		temp = params[i].split('=');
		    		if (temp && [temp[0]] == name) { sval = temp[1]; }
		    	}
		    	return sval;

		    	/*eslint-enable */
		    },
		    makeAjaxCall: function(data, url, method, needToCloseFlag) {

			// Create the XHR object.
			var xhr = new XMLHttpRequest();

			if ('withCredentials' in xhr) {
				// XHR for Chrome/Firefox/Opera/Safari.
				xhr.open(method, url, true);
				xhr.setRequestHeader('Content-type', 'application/json');
			}
			else if (typeof XDomainRequest !== 'undefined') {
				// XDomainRequest for IE.
				xhr = new XDomainRequest();
				xhr.open(method, url);
			}
			else {
				// CORS not supported.
				xhr = null;
			}

			if (!xhr) {
				return;
			}

			// Response handlers.
			xhr.onload = function() {
				//User wants to close or hit 'kampyleCloseWindow' before AJAX response
				if (!!needToCloseFlag || !!utils.getData('isFormClosed'))
				{
					utils.sendMessage('formClose');
				}
				utils.setData('isSubmitStarted', false);
			};

			xhr.onerror = function() {
		       //do what you want on error
		     };

		   //these blank handlers need to be set to fix ie9 http://cypressnorth.com/programming/internet-explorer-aborting-ajax-requests-fixed/
		   xhr.onprogress = function () { };
		   xhr.ontimeout = function () { };

			//do it, wrapped in timeout to fix ie9
			setTimeout(function () {
				if (data && data.formId)
				{
					var messageData = '{"action":"formSubmitted","formId":"' + data.formId + '","preventClose": true,"formId":"' + data.formId + '","uuid": "' + data.uuid + '"}';
					KAMPYLE_SDK.utils.safePostMessage(messageData);
				}

				var JSON = KAMPYLE_SDK.utils.initSafeJSON();
				xhr.send(JSON.stringify(data));
			}, 0);
		},

		//TODO - refactor these methods into polyfills
		safeJsonParse: function(stringToParse) {
			if (!stringToParse) { return stringToParse; }
			var parsed;
			try {
				var JSON = KAMPYLE_SDK.utils.initSafeJSON();
				parsed = JSON.parse(stringToParse);
			}
			catch (e) {
				parsed = null;
			}

			return parsed;

		},
		safeJsonStringify: function(objectToStringify) {
			var JSON = KAMPYLE_SDK.utils.initSafeJSON();
			return JSON.stringify(objectToStringify);
		},

		/*eslint-disable */
		initSafeJSON: function() {
			if (!!window.JSON) {
				return window.JSON;
			}
			var JSON = window.JSON || {};

		  // implement JSON.stringify serialization
		  JSON.stringify = JSON.stringify || function (obj) {

		  	var t = typeof (obj);
		  	if (t != "object" || obj === null) {

				  // simple data type
				  if (t == "string") obj = '"'+obj+'"';
				  return String(obj);

				}
				else {

				  // recurse array or object
				  var n, v, json = [], arr = (obj && obj.constructor == Array);

				  for (n in obj) {
				  	v = obj[n]; t = typeof(v);

				  	if (t == "string") v = '"'+v+'"';
				  	else if (t == "object" && v !== null) v = JSON.stringify(v);

				  	json.push((arr ? "" : '"' + n + '":') + String(v));
				  }

				  return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
				}
			};

		  // implement JSON.parse de-serialization
		  JSON.parse = JSON.parse || function (str) {
		  	if (str === "") str = '""';
		  	eval("var p=" + str + ";");
		  	return p;
		  };

		  return JSON;
		},
		/*eslint-enable */
		isDebugMode: function() {
			var region = KAMPYLE_SDK.utils.getUrlParam('region');

			return (region === 'dev' || region === 'qa');
		},
		showErrorStack: function(e) {
			if (KAMPYLE_SDK.utils.isDebugMode()) {
				console.warn(e.stack);
			}
		},
		showWarning: function(message) {
			if (KAMPYLE_SDK.utils.isDebugMode()) {
				console.warn(message);
			}
		},
	};

	function kampyleInit() {
		utils.clearData();
		utils.setData('isSubmitStarted', false);
		utils.setData('isFormClosed', false);
		//Get the form id from the onsite generic js
		var formId = utils.getUrlParam('formId');

		if (formId !== undefined && formId !== null)
		{
			utils.setData('formId', formId);
			var sessionVariableFormId = utils.getData('formId');
			if (sessionVariableFormId)
			{
				//Notify the site the loading has finished in order to send the custom params
				var messageData = '{"action":"formLoaded","formId":"' + sessionVariableFormId + '"}';
				KAMPYLE_SDK.utils.safePostMessage(messageData);
			}

			//Get the region and map it to a submit url
			var region = utils.getUrlParam('region');
			if (region === null || region === undefined)
			{
				region = 'us';
			}

			/*eslint-disable */
			var urlPath = KAMPYLE_SDK_URL_HELPER.getUrlFromRegion(region);
			/*eslint-enable */
			if (urlPath) {
				utils.setData('urlPath', urlPath);
			}

			//Append Kampyle's logo at the bottom of the page
			addKampyleLogo();
		}

		KAMPYLE_SDK.utils.triggerCustomEvent('KampyleSdkLoaded');
	}


	/**
	 * Makes sure the Kampyle is appestylended to the bottom of the customHTML form
	 */
	 function addKampyleLogo() {
		//TODO - fix css
		var logoUrl = '//cdn-prod.kampyle.com/resources/form/FormBuilder/assets/images/kampyle/med_logo_medium.png';
		var logoDiv = document.createElement('div');
		//Style the div
		logoDiv.id = 'kampyleLogoDiv';

		utils.setElementStyle(logoDiv, {
			position: 'absolute',
			bottom: 5,
			right: 0,
			marginRight: 15,
			paddingBottom: 3,
			fontSize: 12,
			fontWeight: 'normal',
			color: 'rgb(142, 142, 147)',
			zIndex: 9999
		});

		logoDiv.innerHTML = '';
		logoDiv.innerHTML += '<span id="spPoweredByText" style="font-family:Helvetica, Arial, sans-serif;">Powered by</span>';
		logoDiv.innerHTML += '<a target="_blank" style="outline: none;" href="http://www.medallia.com"><img src="' + logoUrl + '" alt="kampyle logo not available" style="padding-left: 9px;padding-bottom:3px;display: inline;height: 14px;vertical-align: text-top; outline: none;border:none;"/>';
		logoDiv.innerHTML += '</a>';
		document.body.appendChild(logoDiv);
	}


	function kampyleSetIframeHandler(e) {
		if (!e || !e.data) {return;}
		var JSON = KAMPYLE_SDK.utils.initSafeJSON();

		var data;
		try {
			data = JSON.parse(e.data);
		}
		catch (err) {
			KAMPYLE_SDK.utils.showWarning('Error parsing data ' + err.data);
		}

		if (!data || !data.action) { return; }
		var integrations;
		switch (data.action) {
      case 'customParamsLoaded': //Save the custom params in the session storage
      if (data && data.customParams)
      {
      	KAMPYLE_SDK.utils.setData('customParams', JSON.stringify(data.customParams));
      }
      break;
      case 'setFormId':
      if (!!data && (!!data.formId || data.formId === 0))
      {
      	KAMPYLE_SDK.utils.setData('formId', data.formId);
      }
      break;
      case 'setExtraData':
				data.uuid = data.uuid || KAMPYLE_SDK.utils.generateUuid();
				KAMPYLE_SDK.utils.setData('uuid', data.uuid);

				integrations = utils.getData('integrations');
				if (!!integrations)
				{
					integrations = utils.safeJsonParse(integrations);
				}
				else {
					integrations = {};
				}

				utils.setData('integrations', data.integrations || {});
				utils.setData('provisions', data.provisions || {});
				utils.setData('isScreenCaptureEnabled', data.isScreenCaptureEnabled);
				utils.setData('triggerType', data.triggerType);
				utils.setData('device', data.device);
				utils.setData('context', data.context);
				utils.setData('referrerUrl', data.url);

				KAMPYLE_SDK.utils.triggerCustomEvent('kampyleFormShown');

				break;
      case 'takenScreenCapture':
      integrations = utils.getData('integrations');
      if (!!integrations && !!integrations.screenCapture)
      {
      	integrations.screenCapture.isTaken = true;
      	utils.setData('integrations', integrations);
      }

  	  	//Invoke the screen capture callback
  	  	if (!!scCallback && typeof scCallback === 'function')
  	  	{
  	  		scCallback();
  	  	}

  	  	break;
  	  	default:
  	  	break;
  	  }
  	}

  	function isValidSumbitData(submitData) {
  		if (!submitData || !submitData.pages || submitData.pages.length === 0 ||
  			!KAMPYLE_SDK.utils.getData('formId'))
  		{
  			utils.showWarning('invalid submit data', submitData);
  			return false;
  		}
  		return true;

  	}

  	function extractUrl() {
  		var context = KAMPYLE_SDK.utils.getData('context') || KAMPYLE_SDK.utils.getUrlParam('type');
  		var formattedUrl;
  		if (!!context && !!context.toLowerCase && context.toLowerCase() === 'preview') {
  			formattedUrl = 'Preview';
  		}
  		else {
			// Because document.referrer doesnt allow seeing the #,
			// we need to send it to the iframe
			var fullUrl = utils.getUrlParam('referrer') || document.referrer;
			fullUrl = window.decodeURIComponent(fullUrl);

			var splitted = fullUrl.split('?');
			formattedUrl = fullUrl;
			if (splitted && splitted.length)
			{
				formattedUrl = splitted[0];
			}
		}
		return formattedUrl;
	}

	function extractUrlQueryString() {
		var url = document.referrer || KAMPYLE_SDK.utils.getData('referrerUrl');
		if (!url) { return undefined; }
		return url.split('?')[1];
	}

	function kampyleSubmit(data, needToCloseFlag) {
		if (KAMPYLE_SDK.isValidSumbitData(data)) {

			var submitContract = {
				dynamicData: {
					pages: data.pages,
				},
			};

			//Get the form Id
			var formId = KAMPYLE_SDK.utils.getData('formId');
			if (formId) {
				submitContract.formId = Number(formId);
			}

			var triggerType = KAMPYLE_SDK.utils.getData('triggerType') || CONST.TRIGGER_TYPES.LIVE;

			//Get the feedback uuid
			submitContract.uuid = KAMPYLE_SDK.utils.getData('uuid');

			//Get the feedback triggerType
			submitContract.triggerType = KAMPYLE_SDK.utils.getData('triggerType') || 'live';

			//Get all integrations data
			submitContract.integrations = utils.getData('integrations') || {};

			//Custom Params handle
			submitContract.dynamicData.customParams = KAMPYLE_SDK.utils.getData('customParams') || [];

			//append screen resolution
			var screenResolution = window.screen.width + ' X ' + window.screen.height;
			submitContract.fallbackScreenResolution = screenResolution;

			//Append site url according to preview/onsite mode
			submitContract.url = KAMPYLE_SDK.extractUrl();

			//Get the feedback triggerType
			submitContract.triggerType = submitContract.url === 'Preview' ? CONST.TRIGGER_TYPES.PREVIEW : triggerType;

			//Append url queryString
			var qString = KAMPYLE_SDK.extractUrlQueryString();
			if (qString) { submitContract.urlQueryParams = qString; }

			//Get api url
			var apiUrl = KAMPYLE_SDK.utils.getData('urlPath');
			if (!!apiUrl) {
				utils.setData('isSubmitStarted', true);

				//Make the API call
				KAMPYLE_SDK.utils.makeAjaxCall(submitContract, apiUrl, 'POST', needToCloseFlag);
			}

		}
		else {
			return false;
		}

		//prepare contract from html contract ( check that html contract is valide ) (add if needed custom param)
		//ajax call function to backend
		//send close form
	}

	var kampyleCloseWindow = function() {
		utils.setData('isFormClosed', true);

		if (!!utils.getData('isSubmitStarted'))
		{
			utils.sendMessage('formHide');
		}
		else {
			utils.sendMessage('formClose');
			KAMPYLE_SDK.utils.kampyleRemoveEventHandler(window, 'beforeunload', KAMPYLE_SDK.handlePopupClose);
		}

	};

	var kampyleAcceptInvitation = function() {
		var formId = utils.getData('formId');
		var messageData = '{"action":"inviteAccepted","formId":"' + formId + '"}';
		KAMPYLE_SDK.utils.safePostMessage(messageData);
	};

	var	kampyleDeclineInvitation = function() {
		var formId = utils.getData('formId');

		var messageData = '{"action":"inviteDeclined","formId":"' + formId + '"}';
		KAMPYLE_SDK.utils.safePostMessage(messageData);
	};

	var kampyleFormPageDisplayed = function(pageNumber) {
		var formId = utils.getData('formId');
		var uuid = utils.getData('uuid');

		var messageData = '{"action":"formPageShown","formId":"' + formId + '","uuid": "' + uuid + '","pageNumber": "' + pageNumber + '"}';
		KAMPYLE_SDK.utils.safePostMessage(messageData);
	};

	var kampyleGetFormObject = function() {
		return window.kpl_formJson;
	};

	var extractFormScreenCaptureSetting = function() {
		var formObj = kampyleGetFormObject();

		var screenCaptureSettings = (!!formObj && !!formObj.settings) ? formObj.settings.formScreenCaptureSettings : {};

		//Get relevant settings from the form obj
		if (!!formObj && !!formObj.settings)
		{
			screenCaptureSettings.backgroundColor = formObj.settings.formDesignSettings.backgroundColor;
			screenCaptureSettings.submitButtoncolor = formObj.settings.formBasicSettings.submitButtoncolor;
			screenCaptureSettings.closeButtoncolor = formObj.settings.formBasicSettings.closeButtoncolor;
		}

		return screenCaptureSettings;
	};

	var kampyleIsScreenCaptureEnabled = function() {
		var isScreenCaptureEnabled = utils.getData('isScreenCaptureEnabled');
		var device = utils.getData('device');
		return 	(isScreenCaptureEnabled === true || isScreenCaptureEnabled === 'true') && device === 'desktop';
	};

	var kampyleIsScreenCaptureTaken = function() {
		var integrations = utils.getData('integrations');
		return !!integrations && !!integrations.screenCapture && !!integrations.screenCapture.isTaken;
	};

	var kampyleCheckProvision = function(provisionName) {
		var provisions = utils.getData('provisions');
		return !!provisions && !!provisions[provisionName];
	};

	var kampyleTriggerScreenCapture = function(callback) {
		if (!kampyleIsScreenCaptureEnabled() ||
			!kampyleCheckProvision('screenCapture') ||
			kampyleIsScreenCaptureTaken())
		{
			return false;
		}

		var formScreenCaptureSettings = extractFormScreenCaptureSetting();
		var screenCaptureSettings = utils.getData('integrations') || {};
		screenCaptureSettings = utils.safeJsonParse(screenCaptureSettings) || {};
		screenCaptureSettings = screenCaptureSettings.screenCapture || {};

		//Concat them both
		for (var prop in formScreenCaptureSettings)
		{
			if (formScreenCaptureSettings.hasOwnProperty(prop)) {
				screenCaptureSettings[prop] = formScreenCaptureSettings[prop];
			}
		}

		// screenCaptureSettings.screenCapture = screenCaptureSettings || {};
		if (!!callback && typeof callback === 'function')
		{
			scCallback = callback;
		}
		utils.sendMessage('triggerScreenCapture', { screenCaptureSettings: screenCaptureSettings });
	};

	function handlePopupClose() {
		//In case this is a popup, perform closeForm before hittin 'x' btn
		var data = KAMPYLE_SDK.kampyleGetFormObject();
		if (!!data &&
			!!data.settings &&
			!!data.settings.formBasicSettings &&
			!!data.settings.formBasicSettings.displayType &&
			data.settings.formBasicSettings.displayType.toLowerCase() === 'popupwindow') {
			KAMPYLE_SDK.kampyleCloseWindow();
	}
}

return {
		//Helper functions / testing
		utils: utils,
		MEMORY: MEMORY,
		kampyleIsScreenCaptureTaken: kampyleIsScreenCaptureTaken,
		kampyleCheckProvision: kampyleCheckProvision,
		extractFormScreenCaptureSetting: extractFormScreenCaptureSetting,

		//TODO - move into utils
		kampyleSetIframeHandler: kampyleSetIframeHandler,
		extractUrl: extractUrl,
		extractUrlQueryString: extractUrlQueryString,
		isValidSumbitData: isValidSumbitData,

		//Public SDK
		kampyleInit: kampyleInit,
		kampyleFormPageDisplayed: kampyleFormPageDisplayed,
		kampyleSubmit: kampyleSubmit,
		kampyleCloseWindow: kampyleCloseWindow,
		kampyleAcceptInvitation: kampyleAcceptInvitation,
		kampyleDeclineInvitation: kampyleDeclineInvitation,
		kampyleIsScreenCaptureEnabled: kampyleIsScreenCaptureEnabled,
		kampyleGetFormObject: kampyleGetFormObject,
		kampyleTriggerScreenCapture: kampyleTriggerScreenCapture,
		handlePopupClose: handlePopupClose,
	};
})(window, document);

KAMPYLE_SDK.utils.kampyleEventHandler(window, 'message', KAMPYLE_SDK.kampyleSetIframeHandler);
KAMPYLE_SDK.utils.kampyleEventHandler(window, 'beforeunload', KAMPYLE_SDK.handlePopupClose);


document.onreadystatechange = function () {
	if (document.readyState === 'complete') {
        //document is ready. Do your stuff here
        KAMPYLE_SDK.kampyleInit();
      }
    };
