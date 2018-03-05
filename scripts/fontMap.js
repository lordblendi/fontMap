---
---

$(document).ready(function() {
  opentype.load('{{ site.baseurl }}/assets/fonts/tenforce.ttf', function(err, font) {
    if (err) {
      alert('Could not load font: ' + err);
    } else {
      const glyphs = font.glyphs.glyphs;
      const fontMapCharacters = $('.fontMap_characters')


      $.each(glyphs,function(index, glyph){

        if ( glyph.unicode >= 1300 && glyph.unicode <= 7000) { // Only show our custom icons
          let glyphData = getGlyphData(index, glyph);
          let element = document.createElement('li');
          $(element).html(glyphData).addClass('fontMap_character');
          fontMapCharacters.append(element);
        }

      });
    }
  });
});

function getGlyphData(index, glyph) {
  let unicode = glyph.unicode;
  let charCode = String.fromCharCode(unicode);
  let cellHTML = `<div class="fontMap_character--cellBlock">
  <span class="fontMap_character--charCode">${charCode}</span>
  <span class="fontMap_character--unicode">${unicode}</span>
  </div>`;
  return cellHTML;
}
