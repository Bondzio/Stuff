var KAMPYLE_SPECIFIC = (function() {
  var previous;
  var starRatingValue = "";
  var accordionAdded = false;
  var templates = KAMPYLE_THERMOFISHER.getCustomTemplates();
  var tabsData;

  function getTemplate(component) {
      return templates[component];
  }

  function getCustomTemplate(component) {
      return KAMPYLE_DATA.customTemplates[component];
  }

  function acordionBuilder() {
    var template = '';

    template += '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">' +
                  '{{accordionOptions}}' +
                '</div>';

    template = template.replace(/{{accordionOptions}}/g,addAccordionElements());

    return template;
  }

  function tabsBuilder(tabsObj) {
    var template = getCustomTemplate('tabs');

    template = template.replace(/{{addNavTabsOptions}}/g, addNavTabsOptions(tabsObj));
    template = template.replace(/{{addTabPanes}}/g, addTabPanes(tabsObj));

    return template;
  }

  function addNavTabsOptions(tabsObj) {
    var optionList = '';
    var i = 1;
    var template = '';


    optionList = '<li role="presentation" class="active {{tab_key}}"><a href="#{{tab_key}}" aria-controls="{{tab_key}}" role="tab" data-toggle="tab">{{tab_value}}</a></li>';
    optionList = optionList.replace(/{{tab_key}}/g, tabsObj[0][0]);
    optionList = optionList.replace(/{{tab_value}}/g, tabsObj[0][1]);

    for (; i < tabsObj.length ; i++) {
      template = '<li role="presentation" class="{{tab_key}}"><a href="#{{tab_key}}" aria-controls="{{tab_key}}" role="tab" data-toggle="tab">{{tab_value}}</a></li>';
      template = template.replace(/{{tab_key}}/g, tabsObj[i][0]);
      template = template.replace(/{{tab_value}}/g, tabsObj[i][1]);
      optionList = optionList + template;
    }
    return optionList;
  }

  function addTabPanes(tabsObj) {
    var optionList = '';
    var template = '';
    var className;

    for (var i = 0; i < tabsObj.length; i++) {
      className = 'tab-pane';
      if (i === 0) {
        className += ' active';
      }
      template = '<div role="tabpanel" class="{{className}}" id="{{tab_key}}"><label class="tabs-captions font-bold">{{tab_caption}}</label></div>';
      template = template.replace(/{{className}}/g, className);
      template = template.replace(/{{tab_key}}/g, tabsObj[i][0]);
      template = template.replace(/{{tab_caption}}/g, tabsObj[i][1]);
      optionList = optionList + template;
    }
    return optionList;
  }

  function addAccordionElements() {

    var optionList = '';
    var template = '';

    template = '<div class="panel panel-default">' +
      '<div class="panel-heading" role="tab" id="headingOne">' +
        '<h4 class="panel-title">' +
          '<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">' +
            '<i id="collapseOneIcon" class="fa fa-caret-right"></i> ' + KAMPYLE_THERMOFISHER.getLocaleText('WEB_CONTENT') +
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
            '<i id="collapseTwoIcon" class="fa fa-caret-right"></i> ' + KAMPYLE_THERMOFISHER.getLocaleText('EASE_OF_USE') +
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
            '<i id="collapseThreeIcon" class="fa fa-caret-right"></i> ' + KAMPYLE_THERMOFISHER.getLocaleText('ORDER_SUPPORT') +
          '</a>' +
        '</h4>' +
      '</div>' +
      '<div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">' +
        '<div class="panel-body orderSupport">' +
        '</div>' +
      '</div>' +
    '</div>';
    optionList = optionList + template;
    return optionList;
  }

  function addRadioOptions(component) {

    var optionList = '';
    var template = '';
    var i = 2;

    optionList = '<div class="controls">' +
                    '<label class="labelRadio radioRed" data-neb-uuid="' + component.nebUuid + '">' +
                        '<input type="radio" class="elementVal" name={{name}} id="id_cfimb_5_1" value="0" data-neb-uuid="' + component.nebUuid + '">{{labelStartRange}}</label>';

    for (; i < 10; i++) {
      template = '<label class="labelRadio" data-neb-uuid="' + component.nebUuid + '">' +
                        '<input type="radio" class="elementVal" name={{name}} id="customRating' + i + '" value="' + i + '" data-neb-uuid="' + component.nebUuid + '">' + i + '</label>';
      optionList = optionList + template;
    }

    optionList = optionList + '<label class="labelRadio radioGreen" data-neb-uuid="' + component.nebUuid + '">' +
                        '<input type="radio" class="elementVal" name={{name}} id="id_cfimb_5_1" value="10" data-neb-uuid="' + component.nebUuid + '">{{labelEndRange}}</label>' +
                '</div>';

    optionList = optionList.replace(/{{labelStartRange}}/g, component.options[0]);
    optionList = optionList.replace(/{{labelEndRange}}/g, component.options[1]);
    optionList = optionList.replace(/{{name}}/g, component.id);
    return optionList;
  }

  function handleChange() {
    var nebUuid = $(this).attr("data-neb-uuid");
    var checkedArray = {};
    $('input[data-neb-uuid=' + nebUuid + ']').each(function () {
      checkedArray[this.value] = false;
      if (this.checked) {
        checkedArray[this.value] = true;
      }
    });
    initCond(checkedArray,nebUuid);
  }

  function validation(currentPage) {
    failedList = [];

    //clean any alerts before starting
    $(".error-div").remove();
    $(".validation-error").removeClass("validation-error");

    var formData = window.KAMPYLE_SDK.kampyleGetFormObject();
    var currPage = formData.pages[currentPage].dynamicData;
    var isDisplayed = true;
    var emailErrorName;

    for (var j = 0; j < currPage.length; j++) {
      if($("div.form-group[data-neb-uuid='" + currPage[j].nebUuid + "']").css("display") === "none") {
        isDisplayed = false;
      }
      var isFailed = false;
      switch(currPage[j].component) {
        case 'grading':
          var selected = starRatingValue;
          if (currPage[j].required && isDisplayed && selected.length <= 0) {
            isFailed = true;
          }
        break;
        case 'nps':
          var selected = parseInt($('input[type=range]').val());
          if (currPage[j].required && isDisplayed && selected.length <= 0) {
            isFailed = true;
          }
        break;
        case 'radio':
        case 'checkbox':
          var selected = $("input[name='"+ currPage[j].id+"']:checked");
          if (currPage[j].required && isDisplayed && selected.length <= 0) {
            isFailed = true;
          }
        break;
        case 'select':
          var selected = $("#select" + currPage[j].id + " option:selected").val();
          if (currPage[j].required && isDisplayed && (selected.length <= 0 || selected === 'default') ) {
            isFailed = true;
          }
        break;
        case 'textArea':
          if (currPage[j].required && isDisplayed && $("textArea#textArea" + currPage[j].id).val().trim().length <= 0 ) {
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
    if (failedList.length>0) {
      //iterate over the failed list array and color the labels in red.
      $.each(failedList, function(i) {
        $("#lbl_" + failedList[i].id).addClass("validation-error");
      })
      $(".errorBlock").show();
      return false;
    }
    else {
      return true;
    }
  }

  function prepareSubmitContract(currentPage) {
    var currentComponents, item, form;
    var PageItem = {};
    var PageComponents = [];
    var formContract = {
      pages: []
    };
    var currentComponents = KAMPYLE_FORM_MODEL.getComponentsByPage(currentPage);

    for (var i = 0 ; i < currentComponents.length ; i++) {
        if(currentComponents[i].component !== "label"){
          item = {};
          item.unique_name = currentComponents[i].unique_name;
          item.type = currentComponents[i].component;
          if (item.type === "nps" || item.type === "grading") {
            if (item.type === "grading") {
              item.value = parseInt(starRatingValue);
            }
            else {
              item.value = parseInt($('input[type=range]').val());
            }
          }
          else {
            item.value = getValueByUuid(currentComponents[i].nebUuid);
          }
          PageComponents.push(item);
        }
      }

      form = KAMPYLE_FORM_MODEL.getForm();
      if (form && form.pages && form.pages[currentPage] && form.pages[currentPage].name) {
        PageItem.pageName = form.pages[currentPage].name;
      }
      PageItem.components = PageComponents;

      formContract.pages.push(PageItem);


    return formContract;
  }

  function addSeeMoreSection(page, id) {
    KAMPYLE_THERMOFISHER.addSeeMoreSection(page, id);
  }

  function changeFlowBehavior(pageToshow, pageSendRequest) {
    if (pageToshow === 2) {
      if (pageSendRequest === 3 || $('li.Problem').hasClass('active')) {
        // $('#seeMoreSection').hide();
        // $('div#Page2_subTitleContainer').hide();
        $('#seeMoreSection').css({visibility: 'hidden'});
        $('div#Page2_subTitleContainer').css({visibility: 'hidden'});
        KAMPYLE_THERMOFISHER.removeContactUs();
      }
      $('#nextBtn').hide();
      $('#submitBtn').show();
      $('.underText').hide();
      $('.requiredText').hide();
      $('.disclaimer-text').show();
    }
    else if (pageToshow === 3) {
      $('#nextBtn').show();
      $('.underText').show();
      $('#submitBtn').hide();
      $('.requiredText').hide();
      $('.disclaimer-text').hide();
    }
    else if (pageToshow === 4) {
      $('#nextBtn').hide();
      $('#submitBtn').hide();
      $('#closeBtn').show();
      $('.underText').hide();
      $('.disclaimer-text').hide();
    }
  }

  function goTopage(target, source) {
    var numOfPages = KAMPYLE_DATA.getNumOfPages();
    KAMPYLE_DATA.setCurrentPage(target);
    showOnlyPage(numOfPages, target);

    if (changeFlowBehavior) {
      changeFlowBehavior(target, source);
    }
  }

  function clickNext() {
    var currentPage = KAMPYLE_DATA.getCurrentPage();
    if (currentPage === 3) {
      goTopage(2,3);
    }
    else {
      var currentNewPage = KAMPYLE_DATA.getCurrentPage() + 1;
      var numOfPages = KAMPYLE_DATA.getNumOfPages();
      if (validation(KAMPYLE_DATA.getCurrentPage() - 1)) {
        KAMPYLE_THERMOFISHER.appendInfoDisclamier();
        KAMPYLE_DATA.setCurrentPage(currentNewPage);
        showOnlyPage(numOfPages, currentNewPage);
        if (numOfPages === currentNewPage) { //last page
          $('#nextBtn').hide();
          $('#submitBtn').show();
        }
        if (KAMPYLE_SPECIFIC.changeFlowBehavior) {
          KAMPYLE_SPECIFIC.changeFlowBehavior(currentNewPage);
        }
      }
    }
  }

  function clickSend(data) {
    if (validation(KAMPYLE_DATA.getCurrentPage() - 1)) {
      KAMPYLE_SDK.kampyleSubmit(data, false /*close after submit*/);
      goTopage(4);
      changeFlowBehavior(4);
    }
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

  function appendTemplate(template, component) {
    if (!accordionAdded) {
      var acordionTemplate = acordionBuilder();
      $("#form div#page_3").append(acordionTemplate);

      accordionAdded = true;
    }
    if (component.unique_name.indexOf('web') > -1) {
      $("#form div#page_3 .webContent").append(template);
    }
    else if (component.unique_name.indexOf('ease') > -1) {
      $("#form div#page_3 .easeOfUse").append(template);
    }
    else if (component.unique_name.indexOf('order') > -1) {
      $("#form div#page_3 .orderSupport").append(template);
    }
  }

  function handleSelectChange() {
    if (!$('button#nextBtn').is(":visible")) {
      $('button#nextBtn').show();
      $('div.underText label.footerText').show();
    }
  };

  function setTabDisplay() {
    var tabComponent;
    var elementVal;
    var changedComp = [];
    var currentPage = KAMPYLE_DATA.getCurrentPage();
    var currentComponents = KAMPYLE_FORM_MODEL.getComponentsByPage(currentPage - 1);

    for (var i = 0 ; i < currentComponents.length ; i++) {
      if (currentComponents[i].component !== 'image'){
        tabComponent = $('div.tab-pane div.form-group[data-neb-uuid="' + currentComponents[i].nebUuid + '"]');
        labelComponent = $('div.tab-pane div.form-group[data-neb-uuid="' + currentComponents[i].nebUuid + '"] label');
        elementVal = $('div.tab-pane div.form-group[data-neb-uuid="' + currentComponents[i].nebUuid + '"] .elementVal')
        if (! $(tabComponent).closest(".active").length) {
          currentComponents[i].display = false;
          $(labelComponent).removeClass("validation-error");
          switch (currentComponents[i].component) {
            case 'textArea':
              $(elementVal).val('');
            break;
            case 'radio':
              for (var j=0 ; j < elementVal.length ; j++){
                $(elementVal[j]).attr('checked', false);
              }
            break;
            case 'select':
              $(elementVal).parent().val('default');
          }

        }
        else {
          if (currentComponents[i].nebUuid !== "cdbb-d2e1-4846-96cf-1f36-3822-eaf3-3b2e") {
            currentComponents[i].display = true;
          }
        }
        changedComp.push(currentComponents[i]);
      }
    }

    if(changedComp && changedComp.length){
      for(var i = 0 ; i < changedComp.length ; i++){
        changeDisplay(changedComp[i].nebUuid, changedComp[i].display);
      }
    }

    if ($('li.Problem').hasClass('active')) {
      KAMPYLE_THERMOFISHER.appendContactUs();
      $('.reportText').show();
      $("div#page_1").css({height: '501px'});
      $('button#nextBtn').hide();
      $('div.underText label.footerText').hide();
    }
    else {
      KAMPYLE_THERMOFISHER.removeContactUs();
      $("div#page_1").css({height: '552px'});
      $('.reportText').hide();
      $('button#nextBtn').show();
      $('div.underText label.footerText').show();
    }
  }

  function appendCustomTemplate(template, dataObj, pageNum) {
    var element = '';
    var componentObj;

    var currentComponents = KAMPYLE_FORM_MODEL.getComponentsByPage(pageNum - 1);
    switch (template) {
      case 'tabs':
        element = tabsBuilder(dataObj);
        $('#form div#page_' + pageNum).append(element);
        for (var i = 0; i < currentComponents.length; i++) {
          componentObj = $('div.form-group[data-neb-uuid=' + currentComponents[i].nebUuid + ']');
          if (!(currentComponents[i].unique_name.indexOf(dataObj[1][0]) > -1)) {
            if (currentComponents[i].unique_name.indexOf('report') > -1) {
              if($('a', $("#reportText p")).length) { // meaning there's an anchor tag and gets it as an html and not just plain-text
                $('label.reportText').html($('#reportText').html());
              }
              else {
                $('label.reportText').text($('#reportText p').text());
              }
            }
            $('#form div#page_' + pageNum + ' .tab-content #' + dataObj[0][0]).append(componentObj);
          }
          else {
           $('#form div#page_' + pageNum + ' .tab-content #' + dataObj[1][0]).append(componentObj);
          }
        }
      break;
    }
    setTabDisplay();
  }

  function getCustomChanges() { //clear if there are no changes on button styling
    addSeeMoreSection(2, 'Page2_subTitleContainer');
    window.KAMPYLE_THERMOFISHER.setButtonTexts();

    template =  '<div class="row underText">' +
                  '<div class="col-sm-12 text-center">' +
                  '<label class="footerText">' + KAMPYLE_THERMOFISHER.getLocaleText('SUBMIT_ON_NEXT_PAGE') + '</label>' +
                  '<label class="reportText"></label>' +
                  '</div>' +
                '</div>' +
                '<div class="row requiredText">' +
                '<div class="col-sm-12 text-center">' +
                '<label id="requiredLbl"><span class="required-star">*</span>' + KAMPYLE_THERMOFISHER.getLocaleText('REQUIRED') + '</label>' +
                '</div>' +
                '</div>';
    $("div#footerSection div.row").after(template);
  }

  function assignHandlers() { //clear if there are no custom components
    $('#submitButton').on('click',clickSend);
    $('#seeMoreBtn').on('click',function(){ goTopage(3)});
    $(':checkbox').on('change', handleChange);
    $('a[data-toggle="tab"]').on('shown.bs.tab', setTabDisplay);
    $('div.tab-content select').on('change', handleSelectChange);

    subscribeToAccordionEvents();
  }

  function init() {
    var currentPage = KAMPYLE_DATA.getCurrentPage()-1;
    tabsData = [
      ['feedback', KAMPYLE_THERMOFISHER.getLocaleText('WEBSITE_FEEDBACK')],
      ['Problem', KAMPYLE_THERMOFISHER.getLocaleText('ISSUE_REPORT')],
    ];
    getCustomChanges();
    appendCustomTemplate('tabs', tabsData,1);
    assignHandlers();

    if (window.KAMPYLE_THERMOFISHER) {
      KAMPYLE_THERMOFISHER.addCloseButtonWhenLoadDone();
      KAMPYLE_THERMOFISHER.markNoLogoPages();
    }
  }

  return {
    getTemplate: getTemplate,
    addRadioOptions: KAMPYLE_THERMOFISHER.addRadioOptions,
    acordionBuilder: acordionBuilder,
    addSeeMoreSection: addSeeMoreSection,
    appendTemplate: appendTemplate,
    validation: validation,
    handleChange: handleChange,
    changeFlowBehavior: changeFlowBehavior,
    goTopage: goTopage,
    prepareSubmitContract: prepareSubmitContract,
    getCustomChanges: getCustomChanges,
    assignHandlers: assignHandlers,
    init: init,
    clickSend: clickSend,
    clickNext: clickNext,
    getCustomTemplate: getCustomTemplate,
    addNavTabsOptions: addNavTabsOptions,
    tabsBuilder: tabsBuilder,
    appendCustomTemplate: appendCustomTemplate
  };
})();
