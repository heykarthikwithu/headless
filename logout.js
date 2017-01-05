
function logout() {
  jQuery.ajax({
    url: 'http://127.0.0.1/d82/user/logout',
    method: 'GET',
    headers: {
      'Content-Type': 'text/html'
    },
    success: function () {
      alert('Logged out..!');
    }
  });
}
