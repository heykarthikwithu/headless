
function get() {
  jQuery.ajax({
    url: 'http://127.0.0.1/d82/data',
    method: 'GET',
    headers: {
      'Content-Type': 'text/html'
    }
  });
}
