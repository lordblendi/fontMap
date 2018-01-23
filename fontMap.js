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

    // if exist, converting to hexadecimal value
    // add enough 0 characters to the front
    //  https://github.com/bluejamesbond/CharacterMap/blob/master/public/js/index.js#L417
    if (unicode !== undefined) {
      unicode = unicode.toString(16);
      if (unicode.length > 4) {
        unicode = ("000000" + unicode.toUpperCase()).substr(-6);
      } else {
        unicode = ("0000" + unicode.toUpperCase()).substr(-4);
      }
    }
  }

  return {
    charCode: charCode,
    unicode: unicode,
    index: index
  };
}
