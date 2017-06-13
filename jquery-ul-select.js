(function ($) {
  $.fn.ulSelect = function(size) {
    this.html('<i class="placeholder"></i><i class="arrowBox"></i><i class="dropdownArrow up"></i><i class="dropdownArrow down"></i>' + this.html());
    this.find('select').replaceWith("<ul>" + this.find('select').html() + "</ul>");
    var i;
    for (i = 1; i < this.find('option').length + 1; i + 1) {
      this.find('option:nth-of-type('+i+')').replaceWith("<li>" + this.find('option:nth-of-type('+i+')').html() + "</li>");
    }
    this.css({
      'display':'inline-block',
      'position':'relative',
      'border':'1px solid silver',
      'border-radius':'5px',
      'cursor':'pointer',
      'background-color':'white',
      'white-space':'nowrap',
    });
    this.children('ul').css({
      'position':'absolute',
      'top':'-1px',
      'left':'-1px',
      'padding':'0',
      'margin':'0',
      'border':'1px solid silver',
      'border-radius':'5px',
      'background-color':'#F0F0F0',
      'box-shadow':'3px 3px 5px #888888',
      'display':'none',
      'z-index':'2147483647',
    });
    this.find('li').css({
      'list-style':'none',
      'height':'20px',
      'text-align':'left',
      'padding-left':'5px',
      'padding-right':'5px',
    });
    this.find('li:first-of-type').css({
      'border-radius':'4px 4px 0 0',
    });
    this.find('li:last-of-type').css({
      'border-radius':'0 0 4px 4px',
    });
    this.find('i.placeholder').css({
      'display':'inline-block',
      'height':'100%',
      'width':'calc(100% - 10px)',
      'padding-left':'5px',
      'padding-right':'5px',
    });
    this.find('i.arrowBox').css({
      'background-color':'#1887FF',
      'border-top':'1px solid #0000FF',
      'border-right':'1px solid #0000FF',
      'border-bottom':'1px solid #0000FF',
      'display':'inline-block',
      'position':'absolute',
      'top':'-1px',
      'right':'-1px',
      'z-index':'10',
      'border-radius':'0 3px 3px 0',
      'background-image':'linear-gradient(#1887FF, #3232FF)',
    });
    this.find('.dropdownArrow').css({
      'border': '1px solid black',
      'border-width': '0 2px 2px 0',
      'display': 'inline-block',
      'border-color': 'white',
      'position': 'absolute',
      'z-index':'10',
    });
    this.find('.dropdownArrow.down').css({
      'transform': 'rotate(45deg)',
      '-webkit-transform': 'rotate(45deg)',
    });
    this.find('.dropdownArrow.up').css({
      'transform': 'rotate(-135deg)',
      '-webkit-transform': 'rotate(-135deg)',
    });
    this.find('.placeholder, .arrowBox, .dropdownArrow').click(function() {
      $(this).siblings('ul').slideToggle('fast');
    });
    $('<style>.activeOption { border-left: 5px solid #000080; } .optionGroup { margin-left: 10px; font-weight: bold; }</style>').insertAfter('body *:last');
    if (size == 'small') {
      this.css({
        'font-size':'12px',
        'height':'16px',
        'padding-right':'16px',
      });
      this.find('li').css({
        'height':'16px',
        'line-height':'18px',
      });
      this.find('.placeholder').css({
        'line-height':'18px',
      });
      this.find('.arrowBox').css({
        'height':'16px',
        'width':'16px',
      });
      this.find('.dropdownArrow').css({
        'border-width': '0 2px 2px 0',
        'padding': '2px',
        'right': '5px',
      });
      this.find('.dropdownArrow.down').css({
        'bottom': '3px',
      });
      this.find('.dropdownArrow.up').css({
        'top': '3px',
      });
    } else if (size == 'medium') {
      this.css({
        'font-size':'16px',
        'height':'20px',
        'padding-right':'20px',
      });
      this.find('li').css({
        'height':'20px',
        'line-height':'22px',
      });
      this.find('.placeholder').css({
        'line-height':'22px',
      });
      this.find('.arrowBox').css({
        'height':'20px',
        'width':'20px',
      });
      this.find('.dropdownArrow').css({
        'border-width': '0 2px 2px 0',
        'padding': '3px',
        'right': '6px',
      });
      this.find('.dropdownArrow.down').css({
        'bottom': '4px',
      });
      this.find('.dropdownArrow.up').css({
        'top': '4px',
      });
    } else if (size == 'large') {
      this.css({
        'font-size':'20px',
        'height':'24px',
        'padding-right':'24px',
      });
      this.find('li').css({
        'height':'24px',
        'line-height':'26px',
      });
      this.find('.placeholder').css({
        'line-height':'26px',
      });
      this.find('.arrowBox').css({
        'height':'24px',
        'width':'24px',
      });
      this.find('.dropdownArrow').css({
        'border-width': '0 3px 3px 0',
        'padding': '3px',
        'right': '7px',
      });
      this.find('.dropdownArrow.down').css({
        'bottom': '4px',
      });
      this.find('.dropdownArrow.up').css({
        'top': '4px',
      });
    } else {
      console.log('The size chosen is not valid.');
    }
    var background_color;
    var text_color;
    this.find('li:not(.optionGroup)').hover(
      function() {
        $(this).siblings('li:not(.optionGroup)').removeClass('optionHover');
        $(this).addClass('optionHover');
        background_color = $(this).css('background-color');
        text_color = $(this).css('color');
        $(this).css('background-color','#3232ff');
        $(this).css('color','white');
      }, function() {
        $(this).css('background-color',background_color);
        $(this).css('color',text_color);
      }
    );
    $(document).keydown(function(e){
      if ($('.placeholder').siblings('ul').is(':visible') && e.keyCode == 38) {
        $('.placeholder').siblings('ul').children('li.optionHover').mouseleave().prevAll('li').not('.optionGroup').first().mouseenter();
        return false;
      } else if ($('.placeholder').siblings('ul').is(':visible') && e.keyCode == 40) { 
        $('.placeholder').siblings('ul').children('li.optionHover').mouseleave().nextAll('li').not('.optionGroup').first().mouseenter();
        return false;
      } else if ($('.placeholder').siblings('ul').is(':visible') && e.keyCode == 13) { 
        $('.placeholder').siblings('ul').children('li.optionHover').trigger('click');
      }
    });
    $(this).attr('unselectable', 'on').css('user-select', 'none').on('selectstart', false);
    this.find('li').click(function() {
      if ($(this).hasClass('optionGroup')) {
        this.css({
        });
      } else {
        var placeholderValue = $(this).text();
        var currentIndex = $(this).index() * 2;
        $(this).parents('ul').css('top', '-' + currentIndex + '0px');
        $(this).parents('ul').siblings('.placeholder').text(placeholderValue);
        $(this).parents('ul').siblings('.placeholder').css({
          'font-style':'normal',
          'color':'black',
          'text-align':'left',
        });
        $(this).siblings().removeClass('activeOption');
        $(this).addClass('activeOption');
        $(this).parent('ul').hide();
      }
    });
    $(this).each(function() {
      if ($(this).children('.placeholder').is(':empty')) {
        $(this).children('.placeholder').text('-- select --');
        $(this).children('.placeholder').css('text-align','center');
        $(this).children('.placeholder').css('color','grey');
      }
    });
  };
}(jQuery));
