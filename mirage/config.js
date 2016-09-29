export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

  // when front-end provides valid token
  this.get('users', (schema, request) => {
    return { users: [{ id: 1, name: 'user 1' }, { id: 2, name: 'user 2' }] };
  });

  // when front-end provides invalid token
  this.get('users', () => new Mirage.Response(401, { 'content-type': 'application/json' }, {error: "invalid_token", error_description: "Invalid access token: 80216087-5c02-48b2-90bc-5a8901340ffb"})
  );

}
