$( function() {
    $( ".field > div" ).resizable({           aspectRatio: 16 / 10,
                                   maxHeight: 900,
      maxWidth: 1600,
      minHeight: 90,
      minWidth: 160
});

    $( ".field > div" ).draggable({ containment: "parent" });
  } );