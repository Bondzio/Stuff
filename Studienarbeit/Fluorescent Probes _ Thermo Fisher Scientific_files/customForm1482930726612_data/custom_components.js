  var KAMPYLE_CUSTOM = (function(){
  	var specificHtml = true;      //if not specific change to false
    var previous;
    var components =[{
    /*"unique_name": "Category", */  //delete all elements which are not specific
    }];
    
    function getSpecificComponents() {
      return components;
    };

    function isSpecificHtml() {
      return specificHtml;
    };

    function isSpecific(unique_name) {
      var components = getSpecificComponents();
      for (var i = 0 ; i < components.length ; i++){
        if(components[i].unique_name === unique_name) {
          return true;
        }
      }
      return false;
    };

    return {
      getSpecificComponents: getSpecificComponents,
      isSpecific: isSpecific,
      isSpecificHtml: isSpecificHtml
    };
  })();