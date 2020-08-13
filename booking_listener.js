
function isBookingCompleteEvent(e) {
  return e.event.localeCompare("bookingCompletion") === 0;
}

window.addEventListener('message', function(e) {
  var event_type = "";

  if (isBookingCompleteEvent(e)) {
    event_type = "bookingCompletion";
  }

  if (event_type.localeCompare("") !== 0) {
    window.dataLayer.push({
      'event': event_type,
      'original_event': e
    });
  }
});
