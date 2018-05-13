module.exports = function (templateParams) {
  var _cssList = ['commons'];
  var webAssetsHelp = require('./webAssetsHelp.js')(templateParams, _cssList);
  var _html = "{% extends './layout.html' %}" +
      "{% block title %}My Page{% endblock %}" +
      "{% block styles %}" +
      webAssetsHelp.styles +
      "{% endblock %}" +
      "{% block content %}{% include '../widget/index.html' %}{% endblock %}" +
      "{% block script %}" +
      // webAssetsHelp.scripts+

      '<script>' +
      '(function(){' +
      'var flag=false;'+
      'var scriptsshow=[' + webAssetsHelp.scriptsshow + '];' +
      'for (let i=0; i<scriptsshow.length;i++){' +
      'let a=scriptsshow[i];' +
      'if (localStorage.getItem(a)){' +
      '$("<scr"+"ipt>"+localStorage.getItem(a)+"</scr"+"ipt>").attr({type:"text/javascript",id:i}).appendTo($("head").remove("#"+i));' +
      '}' +
      'else{' +
      // '$.getScript({url:a, success:function(data) { localStorage.setItem(a, data) }});' +
      'localStorage.clear();'+
      'flag = true;'+
      'for (let q =0;q<scriptsshow.length; q++ ) {' +
      'let b=scriptsshow[q];' +
      'axios.get(b).' +
      'then(function(data){localStorage.setItem(b,data.data);})' +
      '}break;' + //end of for
      '}' +
      '}' +
      'if (flag) {'+
      'LazyLoad.js(scriptsshow,function(){});'+
      '}'+//end of if flag
      '})();' +
      '</script>' +

      "{% endblock %}";

  return _html;
}
