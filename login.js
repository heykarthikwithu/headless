
function login() {
  var user = {
    name: document.getElementById('name').value,
    pass: document.getElementById('pass').value
  };
  jQuery.ajax({
    url: "http://127.0.0.1/d82/user/login?_format=json",
    method: "POST",
    headers: {
      "content-type": "application/json",
      "cache-control": "no-cache"
    },
    data: JSON.stringify(user),
    success: function () {
      alert('Login Successfull..!');
    }
  });
}