$(document).ready(function() {
  opentype.load('tenforce.ttf', function(err, font) {
    if (err) {
      alert('Could not load font: ' + err);
    } else {
      const glyphs = font.glyphs.glyphs;


      var tr = document.createElement('tr');
      var trArray = [];
      $.each(glyphs,function(index, glyph){
        if(index > 0 && index % 10 === 0) {
          // trArray.push(tr);
          $('table').append(tr);
          tr = document.createElement('tr');
        }
        let glyphData = getGlyphData(index, glyph);
        let td = document.createElement('td');
        $(td).html(glyphData['charCode']);
        tr.append(td);

      });
    }
  });
});

function getGlyphData(index, glyph) {
  const path = glyph.getPath(0, 0, 70);

  if (path.draw) {
    var canvas = document.createElement("canvas");

    var unicode = glyph.unicode;
    var charCode = String.fromCharCode(unicode);
  }

  return {
    charCode: charCode,
    unicode: unicode,
    index: index
  };
}
