
function post() {
  var node = {
    _links: {
      type: {
        href: 'http://127.0.0.1/d82/rest/type/node/article'
      }
    },
    type: {
      target_id: 'article'
    },
    title: {
      value: 'Example node title'
    }
  };
  var csrf = jQuery.get('http://127.0.0.1/d82/rest/session/token');
  alert(csrf);
  jQuery.ajax({
    url: "http://127.0.0.1/d82/entity/node?_format=hal_json",
    method: "POST",
    headers: {
      "content-type": "application/hal+json",
      "cache-control": "no-cache",
      'X-CSRF-Token': csrf
    },
    data: JSON.stringify(node),
    success: function () {
      alert('Node created..!');
    }
  });
}