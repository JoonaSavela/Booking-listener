
window.addEventListener('message', function(e) {
  var event_type = e.event;

  window.dataLayer.push({
    'event': event_type,
    'original_event': e
  });
});
