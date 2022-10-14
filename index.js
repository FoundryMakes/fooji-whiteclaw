$(document).ready(function () {
  const homeLink = $("#home-link")
  const ctaLink = $("#contest-link")
  const galleryLink = $("#gallery-link")

  homeLink.addClass("active");

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

  ctaLink.on("click", () => {
    galleryLink.removeClass("active")
    homeLink.removeClass("active")
    ctaLink.addClass("active")
  })

  galleryLink.on("click", () => {
    ctaLink.removeClass("active")
    homeLink.removeClass("active")
    galleryLink.addClass("active")
  })
  homeLink.on("click", () => {
    ctaLink.removeClass("active")
    galleryLink.removeClass("active")
    homeLink.addClass("active")
  })

  window.onscroll = () => {
    if (scrollY <= 545) {
      ctaLink.removeClass("active")
      galleryLink.removeClass("active")
      homeLink.addClass("active")
    }
    if (545 < scrollY && scrollY <= 965) {
      ctaLink.addClass("active")
      galleryLink.removeClass("active")
      homeLink.removeClass("active")
    }
    if (scrollY > 965) {
      ctaLink.removeClass("active")
      galleryLink.addClass("active")
      homeLink.removeClass("active")
    }
  }
}
)

