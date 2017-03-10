var KAMPYLE_SDK_URL_HELPER = {
	getUrlFromRegion : function(regionName)
	{
		switch(regionName){
			case 'prodUsOregon':
				return 'https://feedback.kampyle.com/feedback/api/feedback/submit';
				break;
				case 'prodEuIrland':
						return 'https://feedback-eu.kampyle.com/feedback/api/feedback/submit';
						break;
				case 'prodAuSydney':
						return 'https://feedback-au.kampyle.com/feedback/api/feedback/submit';
							break;
				case 'prodCanada':
				return 'https://feedback-can.kampyle.com/feedback/api/feedback/submit';
				break;
			default:
				console.info('Unknown region', regionName);
				return 'http://local.kampyle.com:8080/kma/api/feedback/submit';
				break;
		}
	}
};

(function() {
	//Get the src of this file in order to relatively load the common js file
	var scripts = document.getElementsByTagName('script');
	var scriptsLen = scripts.length;
	var neededSrcPath,
		found = false,
		neededParentNode;

	for (var i = 0; i < scriptsLen && !found; i++) {
		if (scripts[i].src && scripts[i].src.indexOf('kampyle-sdk') !== -1)
		{
			neededParentNode = scripts[i].parentNode || document.getElementsByTagName('body');
			neededSrcPath = scripts[i].src;
			found = true;
		}
	}

	//Cut the relative part from the url
	neededSrcPath = neededSrcPath.substring(0,neededSrcPath.lastIndexOf('/')+1);

	var imported = document.createElement('script');
	imported.src = neededSrcPath + 'kampyle-sdk-common.js';

	//Append the script to where the sdk was included in the user's custom html page
	neededParentNode.appendChild(imported);

})();
