$(document).ready(function () {
  $("#right-gallery-chevron").on("click", () => {
    var leftPos = $('div.gallery-section').scrollLeft();
    $("div.gallery-section").animate({
      scrollLeft: leftPos + 200
    }, 400);
  })
  $("#left-gallery-chevron").on("click", () => {
    var leftPos = $('div.gallery-section').scrollLeft();
    $("div.gallery-section").animate({
      scrollLeft: leftPos - 200
    }, 400);
  })

})

