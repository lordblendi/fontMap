---
---

opentype.load('{{ site.baseurl }}/assets/fonts/tenforce.ttf', function(err, font) {
  if (err) {
    alert('Could not load font: ' + err);
  } else {
    const glyphs = font.glyphs.glyphs;
    const fontMapCharacters = $('.fonticons')

    $.each(glyphs, function(index, glyph) {
      if (index >= 1435 && index <= 7000) {
        let glyphData = getGlyphData(index, glyph);
        let element = document.createElement('li');
        $(element).html(glyphData).addClass('fonticons__item');
        fontMapCharacters.append(element);
      }
    });

    $('.fonticons__item').click(function() {
      var theme = $(this).parent()[0].className;
      var icon = $(this).find('.fonticons__item--charcode').html();
      var code = $(this).find('.fonticons__item--unicode').html();
      $('.icon-pop').find('.icon__inner').html(icon);
      $('.icon-pop').find('.icon__code').html(code);
      $('.icon-pop').addClass('icon-pop--visible ' + theme);
    })

    $('.icon-pop').click(function(event) {
      const pop = $(this);
      if (pop.hasClass('icon-pop--visible')) {
        const clickX = event.clientX;
        const clickY = event.clientY;

        const popup = $('.icon-pop__inner')[0];
        const popupWidth = popup.offsetWidth;
        const popupHeight = popup.offsetHeight;
        const popupY = popup.offsetTop;
        const popupX = popup.offsetLeft;
        const popupBottom = popupY + popupHeight;
        const popupRight = popupX + popupWidth

        if (
          clickX < popupX ||
          clickX > popupRight ||
          clickY < popupY ||
          clickY > popupBottom
        ) {
          $(pop).removeClass('icon-pop--visible');
        }
      }
    });

  }
});


function getGlyphData(index, glyph) {
  let unicode = glyph.unicode;
  let charcode = String.fromCharCode(unicode);
  let cellHTML = `
    <span class="fonticons__item--charcode">${charcode}</span>
    <span class="fonticons__item--unicode">${unicode}</span>
  `;
  return cellHTML;
}
