// toggle simple
$('.JS_selector').on('click', function() {
  $(this).toggleClass('pmx-selector--clicked');
});

// toggle button actions
$('.JS_selectorItem').on('click', function() {
  const selectorValue = $(this);
  const selector = selectorValue.closest('.JS_selector');

  // only if this is not a multiselect popup toggle
  if(!selector.hasClass('MULTISELECT__POPUP')) {
    handleSelector(selector, selectorValue);
  }

});

function handleSelector(selector, selectorValue) {
  const isSelected = selectorValue.hasClass('pmx-selector__item--selected');
  const required = selector.hasClass('pmx-selector--required');
  const expanded = selector.hasClass('pmx-selector--expanded');
  const multiSelect = selector.hasClass('pmx-selector--multiSelect');
  const toggleSelect = selector.hasClass('pmx-selector--toggleSelect');

  const selectedValues = selector.find('.pmx-selector__item--selected');

  // toggleSelect = singleSelect
  if (toggleSelect === true) {
    // if required, remove all the others from being selected
    selectedValues.removeClass('pmx-selector__item--selected');
    // if required, select the one you clicked on
    if(required === true) {
      selectorValue.addClass('pmx-selector__item--selected');
    }
    // otherwise if it's not selected, toggle it;
    else {
      if(!isSelected) {
        selectorValue.toggleClass('pmx-selector__item--selected');
      }
    }
  }
  else if (multiSelect === true) {
    // if required
    // only allow toggle, if the this is not the last checked one
    if(required === true) {
      if(selectedValues.length === 1) {
        if (isSelected === false) {
          selectorValue.toggleClass('pmx-selector__item--selected');
        }
      }
      else {
        selectorValue.toggleClass('pmx-selector__item--selected');
      }
    }
    // otherwise just toggle
    else {
      selectorValue.toggleClass('pmx-selector__item--selected');
    }
  }
}
