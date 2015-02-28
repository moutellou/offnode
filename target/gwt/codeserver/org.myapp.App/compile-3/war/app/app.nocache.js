function app(){
  var $wnd_0 = window;
  var $doc_0 = document;
  sendStats('bootstrap', 'begin');
  function isHostedMode(){
    var query = $wnd_0.location.search;
    return query.indexOf('gwt.codesvr.app=') != -1 || query.indexOf('gwt.codesvr=') != -1;
  }

  function sendStats(evtGroupString, typeString){
    if ($wnd_0.__gwtStatsEvent) {
      $wnd_0.__gwtStatsEvent({moduleName:'app', sessionId:$wnd_0.__gwtStatsSessionId, subSystem:'startup', evtGroup:evtGroupString, millis:(new Date).getTime(), type:typeString});
    }
  }

  app.__sendStats = sendStats;
  app.__moduleName = 'app';
  app.__errFn = null;
  app.__moduleBase = 'DUMMY';
  app.__softPermutationId = 0;
  app.__computePropValue = null;
  app.__getPropMap = null;
  app.__installRunAsyncCode = function(){
  }
  ;
  app.__gwtStartLoadingFragment = function(){
    return null;
  }
  ;
  app.__gwt_isKnownPropertyValue = function(){
    return false;
  }
  ;
  app.__gwt_getMetaProperty = function(){
    return null;
  }
  ;
  var __propertyErrorFunction = null;
  var activeModules = $wnd_0.__gwt_activeModules = $wnd_0.__gwt_activeModules || {};
  activeModules['app'] = {moduleName:'app'};
  app.__moduleStartupDone = function(permProps){
    var oldBindings = activeModules['app'].bindings;
    activeModules['app'].bindings = function(){
      var props = oldBindings?oldBindings():{};
      var embeddedProps = permProps[app.__softPermutationId];
      for (var i = 0; i < embeddedProps.length; i++) {
        var pair = embeddedProps[i];
        props[pair[0]] = pair[1];
      }
      return props;
    }
    ;
  }
  ;
  var frameDoc;
  function getInstallLocationDoc(){
    setupInstallLocation();
    return frameDoc;
  }

  function setupInstallLocation(){
    if (frameDoc) {
      return;
    }
    var scriptFrame = $doc_0.createElement('iframe');
    scriptFrame.src = 'javascript:""';
    scriptFrame.id = 'app';
    scriptFrame.style.cssText = 'position:absolute; width:0; height:0; border:none; left: -1000px;' + ' top: -1000px;';
    scriptFrame.tabIndex = -1;
    $doc_0.body.appendChild(scriptFrame);
    frameDoc = scriptFrame.contentDocument;
    if (!frameDoc) {
      frameDoc = scriptFrame.contentWindow.document;
    }
    frameDoc.open();
    var doctype = document.compatMode == 'CSS1Compat'?'<!doctype html>':'';
    frameDoc.write(doctype + '<html><head><\/head><body><\/body><\/html>');
    frameDoc.close();
  }

  function installScript(filename){
    function setupWaitForBodyLoad(callback){
      function isBodyLoaded(){
        if (typeof $doc_0.readyState == 'undefined') {
          return typeof $doc_0.body != 'undefined' && $doc_0.body != null;
        }
        return /loaded|complete/.test($doc_0.readyState);
      }

      var bodyDone = isBodyLoaded();
      if (bodyDone) {
        callback();
        return;
      }
      function onBodyDone(){
        if (!bodyDone) {
          bodyDone = true;
          callback();
          if ($doc_0.removeEventListener) {
            $doc_0.removeEventListener('DOMContentLoaded', onBodyDone, false);
          }
          if (onBodyDoneTimerId) {
            clearInterval(onBodyDoneTimerId);
          }
        }
      }

      if ($doc_0.addEventListener) {
        $doc_0.addEventListener('DOMContentLoaded', onBodyDone, false);
      }
      var onBodyDoneTimerId = setInterval(function(){
        if (isBodyLoaded()) {
          onBodyDone();
        }
      }
      , 50);
    }

    function installCode(code_0){
      var doc = getInstallLocationDoc();
      var docbody = doc.body;
      var script = doc.createElement('script');
      script.language = 'javascript';
      script.src = code_0;
      if (app.__errFn) {
        script.onerror = function(){
          app.__errFn('app', new Error('Failed to load ' + code_0));
        }
        ;
      }
      docbody.appendChild(script);
      sendStats('moduleStartup', 'scriptTagAdded');
    }

    sendStats('moduleStartup', 'moduleRequested');
    setupWaitForBodyLoad(function(){
      installCode(filename);
    }
    );
  }

  app.__startLoadingFragment = function(fragmentFile){
    return computeUrlForResource(fragmentFile);
  }
  ;
  app.__installRunAsyncCode = function(code_0){
    var doc = getInstallLocationDoc();
    var docbody = doc.body;
    var script = doc.createElement('script');
    script.language = 'javascript';
    script.text = code_0;
    docbody.appendChild(script);
  }
  ;
  function processMetas(){
    var metaProps = {};
    var propertyErrorFunc;
    var onLoadErrorFunc;
    var metas = $doc_0.getElementsByTagName('meta');
    for (var i = 0, n = metas.length; i < n; ++i) {
      var meta = metas[i], name_1 = meta.getAttribute('name'), content_0;
      if (name_1) {
        name_1 = name_1.replace('app::', '');
        if (name_1.indexOf('::') >= 0) {
          continue;
        }
        if (name_1 == 'gwt:property') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            var value_1, eq = content_0.indexOf('=');
            if (eq >= 0) {
              name_1 = content_0.substring(0, eq);
              value_1 = content_0.substring(eq + 1);
            }
             else {
              name_1 = content_0;
              value_1 = '';
            }
            metaProps[name_1] = value_1;
          }
        }
         else if (name_1 == 'gwt:onPropertyErrorFn') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            try {
              propertyErrorFunc = eval(content_0);
            }
             catch (e) {
              alert('Bad handler "' + content_0 + '" for "gwt:onPropertyErrorFn"');
            }
          }
        }
         else if (name_1 == 'gwt:onLoadErrorFn') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            try {
              onLoadErrorFunc = eval(content_0);
            }
             catch (e) {
              alert('Bad handler "' + content_0 + '" for "gwt:onLoadErrorFn"');
            }
          }
        }
      }
    }
    __gwt_getMetaProperty = function(name_0){
      var value_0 = metaProps[name_0];
      return value_0 == null?null:value_0;
    }
    ;
    __propertyErrorFunction = propertyErrorFunc;
    app.__errFn = onLoadErrorFunc;
  }

  function computeScriptBase(){
    $wnd_0.__gwt_activeModules['app'].superdevmode = true;
    var expectedSuffix = '/app.nocache.js';
    var scriptTags = $doc_0.getElementsByTagName('script');
    for (var i = 0;; i++) {
      var tag = scriptTags[i];
      if (!tag) {
        break;
      }
      var candidate = tag.src;
      var lastMatch = candidate.lastIndexOf(expectedSuffix);
      if (lastMatch == candidate.length - expectedSuffix.length) {
        return candidate.substring(0, lastMatch + 1);
      }
    }
    $wnd_0.alert('Unable to load Super Dev Mode version of app.');
    return null;
  }

  function computeUrlForResource(resource){
    if (resource.match(/^\//)) {
      return resource;
    }
    if (resource.match(/^[a-zA-Z]+:\/\//)) {
      return resource;
    }
    return app.__moduleBase + resource;
  }

  function getCompiledCodeFilename(){
    var answers = [];
    var softPermutationId = 0;
    var values = [];
    var providers = [];
    function computePropValue(propName){
      var value_0 = providers[propName](), allowedValuesMap = values[propName];
      if (value_0 in allowedValuesMap) {
        return value_0;
      }
      var allowedValuesList = [];
      for (var k in allowedValuesMap) {
        allowedValuesList[allowedValuesMap[k]] = k;
      }
      if (__propertyErrorFunction) {
        __propertyErrorFunction(propName, allowedValuesList, value_0);
      }
      throw null;
    }

    __gwt_isKnownPropertyValue = function(propName, propValue){
      return propValue in values[propName];
    }
    ;
    app.__getPropMap = function(){
      var result = {};
      for (var key in values) {
        if (values.hasOwnProperty(key)) {
          result[key] = computePropValue(key);
        }
      }
      return result;
    }
    ;
    app.__computePropValue = computePropValue;
    $wnd_0.__gwt_activeModules['app'].bindings = app.__getPropMap;
    sendStats('bootstrap', 'selectingPermutation');
    if (isHostedMode()) {
      return computeUrlForResource('app.devmode.js');
    }
    var strongName;
    try {
      strongName = '155EAA64E5229C2071C4D542F61D7488';
      var idx = strongName.indexOf(':');
      if (idx != -1) {
        softPermutationId = parseInt(strongName.substring(idx + 1), 10);
        strongName = strongName.substring(0, idx);
      }
    }
     catch (e) {
    }
    app.__softPermutationId = softPermutationId;
    return computeUrlForResource(strongName + '.cache.js');
  }

  function loadExternalStylesheets(){
    if (!$wnd_0.__gwt_stylesLoaded) {
      $wnd_0.__gwt_stylesLoaded = {};
    }
    function installOneStylesheet(stylesheetUrl){
      if (!__gwt_stylesLoaded[stylesheetUrl]) {
        var l = $doc_0.createElement('link');
        l.setAttribute('rel', 'stylesheet');
        l.setAttribute('href', computeUrlForResource(stylesheetUrl));
        $doc_0.getElementsByTagName('head')[0].appendChild(l);
        __gwt_stylesLoaded[stylesheetUrl] = true;
      }
    }

    sendStats('loadExternalRefs', 'begin');
    installOneStylesheet('gwt/clean/clean.css');
    sendStats('loadExternalRefs', 'end');
  }

  processMetas();
  app.__moduleBase = computeScriptBase();
  activeModules['app'].moduleBase = app.__moduleBase;
  var filename_0 = getCompiledCodeFilename();
  loadExternalStylesheets();
  sendStats('bootstrap', 'end');
  installScript(filename_0);
  return true;
}

app.succeeded = app();
