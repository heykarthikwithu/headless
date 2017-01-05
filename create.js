
function getCsrfToken(callback) {
  jQuery
    .get('http://127.0.0.1/d82/rest/session/token')
    .done(function (data) {
      var csrfToken = data;
      callback(csrfToken);
    });
}

function postNode(csrfToken, node) {
  jQuery.ajax({
    url: 'http://127.0.0.1/d82/entity/node?_format=hal_json',
    method: 'POST',
    headers: {
      'Content-Type': 'application/hal+json',
      'X-CSRF-Token': csrfToken
    },
    data: JSON.stringify(node),
    success: function (node) {
      console.log(node);
      alert('Created..!');
    }
  });
}

var newNode = {
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

function create() {
  getCsrfToken(function (csrfToken) {
    postNode(csrfToken, newNode);
  });
}
