
// js-loader.js

const scripts = [
  "https://cdnjs.cloudflare.com/ajax/libs/modernizr/3.6.0/modernizr.min.js",
  "https://code.jquery.com/jquery-1.12.4.min.js",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js integrity='sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI' crossorigin='anonymous'",
  "https://code.jquery.com/jquery-3.6.0.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/jquery-circle-progress/1.2.2/circle-progress.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js",




];

scripts.forEach(src => {
  const script = document.createElement("script");
  script.src = src;
  document.body.appendChild(script);
});