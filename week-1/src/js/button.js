
;(function($){

  class Praise {
    constructor(obj, num){
      this._html = '<div class="count">\n' +
          '        收获 <span class="show-num">'+num+'</span> 👍\n' +
          '    </div>\n' +
          '    <div class="hand-wrap">\n' +
          '        <div class="finger f0"></div>\n' +
          '        <div class="finger f1"></div>\n' +
          '        <div class="finger f2"></div>\n' +
          '        <div class="finger f3"></div>\n' +
          '        <div class="finger f4"></div>\n' +
          '        <div class="finger f5"></div>\n' +
          '    </div>';
      $(obj).html(this._html);
      $(obj).find('.f1').on('click',function(){
        $(obj).find('.show-num').text(++num);
      });
    }
  }

  class Thu extends Praise{
    constructor(obj, num){
      super(obj, num);
    }
  }

  var PraiseButton = function(obj, num){
    return new Praise(obj, num);
  };

  var Thumb = function(obj, num){
    return new Thu(obj, num);
  };


  $.PraiseButton = PraiseButton;
  $.Thumb = Thumb;



})(jQuery);