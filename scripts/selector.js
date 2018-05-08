// toggle simple
$('.JS_selector').on('click', function() {
  $(this).toggleClass('selector--clicked');
});

// toggle button actions
$('.JS_selectorItem').on('click', function() {
  const selectorValue = $(this);
  const selector = selectorValue.closest('.JS_selector');

  // only if this is not a multiselect popup toggle
  if (!selector.hasClass('MULTISELECT__POPUP')) {
    handleSelector(selector, selectorValue);
  }

});

function handleSelector(selector, selectorValue) {
  const isSelected = selectorValue.hasClass('selector__item--selected');
  const required = selector.hasClass('selector--required');
  const expanded = selector.hasClass('selector--expanded');
  const multiSelect = selector.hasClass('selector--multiselect');
  const singleselect = selector.hasClass('selector--singleselect');
  const selectedValues = selector.find('.selector__item--selected');

  // singleselect = singleSelect
  if (singleselect === true) {
    // if required, remove all the others from being selected
    selectedValues.removeClass('selector__item--selected');
    // if required, select the one you clicked on
    if (required === true) {
      selectorValue.addClass('selector__item--selected');
    }
    // otherwise if it's not selected, toggle it;
    else {
      if (!isSelected) {
        selectorValue.toggleClass('selector__item--selected');
      }
    }

    // TEMPORARY THEME SELECTOR
    // get current css classes and find the one that's starts with theme_
    var currentClasses = $('.fonticons, .old-fonticons')[0].className.split(' ');
    var currentTheme = "";
    $.each(currentClasses, function(index, appliedClass) {
      if (appliedClass.indexOf('fonticons--') >= 0) {
        currentTheme = appliedClass;
        return;
      }
    });
    var newTheme = "fonticons--" + selectorValue.attr('data-theme');
    // remove old theme, add new theme
    $('.fonticons, .old-fonticons').removeClass(currentTheme).addClass(newTheme);

    // generate random colors if it has to be Gradient
    // otherwise go back to black

    // default color should be black in Positive and Negative
    var newColor = "#000";
    var colorFul = newTheme.includes('colourful');

    $('.fonticons__item').each(function(index, cellBlock){
        // if it should be colorful, apply random color
        if (colorFul) {
          newColor = '#'+'0123456789abcdef'.split('').map(function(v,i,a){
              return i>5 ? null : a[Math.floor(Math.random()*16)]
            }).join('');

          $(cellBlock).css('color', newColor);
        }
        else {
          $(cellBlock).css('color', 'inherit');
        }
        //$(cellBlock).css('color', newColor);
    });

  } else if (multiSelect === true) {
    // if required
    // only allow toggle, if the this is not the last checked one
    if (required === true) {
      if (selectedValues.length === 1) {
        if (isSelected === false) {
          selectorValue.toggleClass('selector__item--selected');
        }
      } else {
        selectorValue.toggleClass('selector__item--selected');
      }
    }
    // otherwise just toggle
    else {
      selectorValue.toggleClass('selector__item--selected');
    }
  }
}
