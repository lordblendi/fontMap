---
---

$(document).ready(function() {
  opentype.load('{{ site.baseurl }}/assets/fonts/tenforce.ttf', function(err, font) {
    if (err) {
      alert('Could not load font: ' + err);
    } else {
      const glyphs = font.glyphs.glyphs;
      const fontMapCharacters = $('.fonticons')


      $.each(glyphs,function(index, glyph){

        //if ( glyph.unicode >= 1300 && glyph.unicode <= 7000) { // Only show our custom icons
          let glyphData = getGlyphData(index, glyph);
          let element = document.createElement('li');
          $(element).html(glyphData).addClass('fonticons__item');
          fontMapCharacters.append(element);
        //}

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
