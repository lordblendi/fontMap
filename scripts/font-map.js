---
---

$(document).ready(function() {
  opentype.load('{{ site.baseurl }}/assets/fonts/tenforce.ttf', function(err, font) {
    if (err) {
      alert('Could not load font: ' + err);
    } else {
      const glyphs = font.glyphs.glyphs;
      const fontMapCharacters = $('.fonticons')
      const old_fontMapCharacters = $('.old-fonticons')

      $.each(glyphs, function(index, glyph){
        if ( index >= 1300 && index <= 7000) {
          let glyphData = getGlyphData(index, glyph);
          let element = document.createElement('li');
          $(element).html(glyphData).addClass('fonticons__item');
          fontMapCharacters.append(element);
        }

        if ( (index >= 744 && index <= 799) || (index >= 818 && index <= 885) ) {
          let glyphData = getGlyphData(index, glyph);
          let element = document.createElement('li');
          $(element).html(glyphData).addClass('fonticons__item');
          old_fontMapCharacters.append(element);
        }
      });
    }
  });
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
