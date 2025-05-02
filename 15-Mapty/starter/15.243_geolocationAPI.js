// Geolocation is a modern browser's API like any other API that we have used earlier like internationalization and timers.
// There are other modern broser's API's like accessing users camera, phone vibrate.

if (navigator.geolocation) {
  // If condition to ensure browser's support of navigator API as it might not be on old browsers.
  navigator.geolocation.getCurrentPosition(
    function (position) {
      // console.log(position);
      // console.log(position.coords);
      // console.log(position.coords.latitude, position.coords.longitude);

      const { latitude } = position.coords;
      const { longitude } = position.coords;
      // Build google maps url
      console.log(
        `https://www.google.co.in/maps/@${latitude},${longitude},12z?entry=ttu&g_ep=EgoyMDI1MDQyOS4wIKXMDSoASAFQAw%3D%3D`
      );
    },
    function () {
      alert('Your location coordinates could not be fetched.');
      // works in a case of location access is denied.
    }
  );
}
