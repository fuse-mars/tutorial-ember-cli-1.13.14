"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('app-test/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'app-test/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _appTestConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _appTestConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _appTestConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _appTestConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('app-test/application/adapter', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].RESTAdapter.extend({});
});
define('app-test/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'app-test/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _appTestConfigEnvironment) {

  var name = _appTestConfigEnvironment['default'].APP.name;
  var version = _appTestConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('app-test/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('app-test/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('app-test/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('app-test/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('app-test/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'app-test/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _appTestConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_appTestConfigEnvironment['default'].APP.name, _appTestConfigEnvironment['default'].APP.version)
  };
});
define('app-test/initializers/ember-cli-mirage', ['exports', 'ember-cli-mirage/utils/read-modules', 'app-test/config/environment', 'app-test/mirage/config', 'ember-cli-mirage/server', 'lodash/object/assign'], function (exports, _emberCliMirageUtilsReadModules, _appTestConfigEnvironment, _appTestMirageConfig, _emberCliMirageServer, _lodashObjectAssign) {
  exports.startMirage = startMirage;
  exports['default'] = {
    name: 'ember-cli-mirage',
    initialize: function initialize(application) {
      if (arguments.length > 1) {
        // Ember < 2.1
        var container = arguments[0],
            application = arguments[1];
      }

      if (_shouldUseMirage(_appTestConfigEnvironment['default'].environment, _appTestConfigEnvironment['default']['ember-cli-mirage'])) {
        startMirage(_appTestConfigEnvironment['default']);
      }
    }
  };

  function startMirage() {
    var env = arguments.length <= 0 || arguments[0] === undefined ? _appTestConfigEnvironment['default'] : arguments[0];

    var environment = env.environment;
    var modules = (0, _emberCliMirageUtilsReadModules['default'])(env.modulePrefix);
    var options = (0, _lodashObjectAssign['default'])(modules, { environment: environment, baseConfig: _appTestMirageConfig['default'], testConfig: _appTestMirageConfig.testConfig });

    return new _emberCliMirageServer['default'](options);
  }

  function _shouldUseMirage(env, addonConfig) {
    var userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    var defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    var usingInDev = env === 'development' && !addonConfig.usingProxy;
    var usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});
define('app-test/initializers/export-application-global', ['exports', 'ember', 'app-test/config/environment'], function (exports, _ember, _appTestConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_appTestConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _appTestConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_appTestConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define("app-test/knowledge/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 40
          }
        },
        "moduleName": "app-test/knowledge/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("nav");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" | ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("hr");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("hr");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\nGoogle Analytics reporting: ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 8, 8, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "link-to", ["People", "knowledge.whois"], [], ["loc", [null, [2, 0], [2, 39]]]], ["inline", "link-to", ["Things", "knowledge.whatis"], [], ["loc", [null, [2, 42], [2, 81]]]], ["content", "outlet", ["loc", [null, [5, 0], [5, 10]]]], ["content", "gaStatus", ["loc", [null, [7, 28], [7, 40]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('app-test/knowledge/whatis/route', ['exports', 'ember', 'app-test/config/environment'], function (exports, _ember, _appTestConfigEnvironment) {
	var knowledgeUrl = _appTestConfigEnvironment['default'].knowledgeUrl;
	var isEmpty = _ember['default'].isEmpty;
	var OBJ = _ember['default'].Object;
	var Route = _ember['default'].Route;
	exports['default'] = Route.extend({
		setupController: function setupController(controller) {
			this._super.apply(this, arguments);
			controller.set('searchKeyword', '');
			controller.set('searchResult', OBJ.create({
				question: '', // person's name
				answer: '' // person's description
			}));
		},
		actions: {
			toggleMessage: function toggleMessage(type) {
				this.controller.set('showMessage', type === 'OPEN');
			},
			searchPerson: function searchPerson(question) {
				var _this = this;

				if (isEmpty(question.trim())) {
					return;
				}
				// call an API
				// update search result: searchResult
				var url = knowledgeUrl + '/api/v1/ask-question?q=' + question.trim(),
				    type = 'GET',
				    adapter = this.container.lookup('adapter:application');
				adapter.ajax(url, type).then(function (result) {
					_this.controller.get('searchResult').setProperties(result);
				}, function (e) {
					console.log('error', e);
					_this.controller.get('searchResult').setProperties({
						question: question,
						answer: 'I currently do not know that!'
					});
				});
			}
		}
	});
});
define("app-test/knowledge/whatis/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 1
            },
            "end": {
              "line": 15,
              "column": 1
            }
          },
          "moduleName": "app-test/knowledge/whatis/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "popover-content");
          var el2 = dom.createTextNode("\n			Enter a partial or complete name\n		");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 20,
            "column": 6
          }
        },
        "moduleName": "app-test/knowledge/whatis/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "full-name");
        var el2 = dom.createTextNode("\n	What is\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "info-icon");
        var el3 = dom.createTextNode("go");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "info-icon");
        var el3 = dom.createTextNode("?");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "search-result");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "real-name");
        var el3 = dom.createElement("strong");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "definition");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [3]);
        var element2 = dom.childAt(element0, [5]);
        var element3 = dom.childAt(fragment, [2]);
        var morphs = new Array(7);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createElementMorph(element1);
        morphs[2] = dom.createElementMorph(element2);
        morphs[3] = dom.createElementMorph(element2);
        morphs[4] = dom.createMorphAt(element0, 7, 7);
        morphs[5] = dom.createMorphAt(dom.childAt(element3, [1, 0]), 0, 0);
        morphs[6] = dom.createMorphAt(dom.childAt(element3, [3]), 0, 0);
        return morphs;
      },
      statements: [["inline", "input", [], ["type", "text", "name", "full-name", "value", ["subexpr", "@mut", [["get", "searchKeyword", ["loc", [null, [3, 44], [3, 57]]]]], [], []], "insert-newline", "searchPerson"], ["loc", [null, [3, 1], [3, 89]]]], ["element", "action", ["searchPerson", ["get", "searchKeyword", ["loc", [null, [5, 26], [5, 39]]]]], ["on", "click"], ["loc", [null, [5, 2], [5, 52]]]], ["element", "action", ["toggleMessage", "OPEN"], ["on", "mouseEnter"], ["loc", [null, [8, 2], [8, 51]]]], ["element", "action", ["toggleMessage", "CLOSE"], ["on", "mouseLeave"], ["loc", [null, [9, 2], [9, 52]]]], ["block", "if", [["get", "showMessage", ["loc", [null, [11, 7], [11, 18]]]]], [], 0, null, ["loc", [null, [11, 1], [15, 8]]]], ["content", "searchResult.question", ["loc", [null, [18, 31], [18, 56]]]], ["content", "searchResult.answer", ["loc", [null, [19, 24], [19, 47]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('app-test/knowledge/whois/route', ['exports', 'ember', 'app-test/config/environment'], function (exports, _ember, _appTestConfigEnvironment) {
	var knowledgeUrl = _appTestConfigEnvironment['default'].knowledgeUrl;
	var isEmpty = _ember['default'].isEmpty;
	var OBJ = _ember['default'].Object;
	var Route = _ember['default'].Route;
	exports['default'] = Route.extend({
		setupController: function setupController(controller) {
			this._super.apply(this, arguments);
			controller.set('searchKeyword', '');
			controller.set('searchResult', OBJ.create({
				question: '', // person's name
				answer: '' // person's description
			}));
		},
		actions: {
			toggleMessage: function toggleMessage(type) {
				this.controller.set('showMessage', type === 'OPEN');
			},
			searchPerson: function searchPerson(question) {
				var _this = this;

				if (isEmpty(question.trim())) {
					return;
				}
				// call an API
				// update search result: searchResult
				var url = knowledgeUrl + '/api/v1/ask-question?q=' + question.trim(),
				    type = 'GET',
				    adapter = this.container.lookup('adapter:application');
				adapter.ajax(url, type).then(function (result) {
					_this.controller.get('searchResult').setProperties(result);
				}, function (e) {
					console.log('error', e);
					_this.controller.get('searchResult').setProperties({
						question: question,
						answer: 'I currently do not know that!'
					});
				});
			}
		}
	});
});
define("app-test/knowledge/whois/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 1
            },
            "end": {
              "line": 15,
              "column": 1
            }
          },
          "moduleName": "app-test/knowledge/whois/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "popover-content");
          var el2 = dom.createTextNode("\n			Enter a partial or complete name\n		");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 20,
            "column": 6
          }
        },
        "moduleName": "app-test/knowledge/whois/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "full-name");
        var el2 = dom.createTextNode("\n	Who is\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "info-icon");
        var el3 = dom.createTextNode("go");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "info-icon");
        var el3 = dom.createTextNode("?");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "search-result");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "real-name");
        var el3 = dom.createElement("strong");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "definition");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [3]);
        var element2 = dom.childAt(element0, [5]);
        var element3 = dom.childAt(fragment, [2]);
        var morphs = new Array(7);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createElementMorph(element1);
        morphs[2] = dom.createElementMorph(element2);
        morphs[3] = dom.createElementMorph(element2);
        morphs[4] = dom.createMorphAt(element0, 7, 7);
        morphs[5] = dom.createMorphAt(dom.childAt(element3, [1, 0]), 0, 0);
        morphs[6] = dom.createMorphAt(dom.childAt(element3, [3]), 0, 0);
        return morphs;
      },
      statements: [["inline", "input", [], ["type", "text", "name", "full-name", "value", ["subexpr", "@mut", [["get", "searchKeyword", ["loc", [null, [3, 44], [3, 57]]]]], [], []], "insert-newline", "searchPerson"], ["loc", [null, [3, 1], [3, 89]]]], ["element", "action", ["searchPerson", ["get", "searchKeyword", ["loc", [null, [5, 26], [5, 39]]]]], ["on", "click"], ["loc", [null, [5, 2], [5, 52]]]], ["element", "action", ["toggleMessage", "OPEN"], ["on", "mouseEnter"], ["loc", [null, [8, 2], [8, 51]]]], ["element", "action", ["toggleMessage", "CLOSE"], ["on", "mouseLeave"], ["loc", [null, [9, 2], [9, 52]]]], ["block", "if", [["get", "showMessage", ["loc", [null, [11, 7], [11, 18]]]]], [], 0, null, ["loc", [null, [11, 1], [15, 8]]]], ["content", "searchResult.question", ["loc", [null, [18, 31], [18, 56]]]], ["content", "searchResult.answer", ["loc", [null, [19, 24], [19, 47]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('app-test/mirage/config', ['exports'], function (exports) {
  /* globals Mirage */

  exports['default'] = function () {

    // These comments are here to help you get started. Feel free to delete them.

    /*
      Config (with defaults).
       Note: these only affect routes defined *after* them!
    */

    // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    this.namespace = 'api/v1'; // make this `api`, for example, if your API is namespaced
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
    this.get('users', function () /* schema, request */{
      return { users: [{ id: 1, name: 'user 1' }, { id: 2, name: 'user 2' }] };
    });

    // when front-end provides invalid token
    this.get('users', function () {
      return new Mirage.Response(401, { 'content-type': 'application/json' }, { error: "invalid_token", error_description: "Invalid access token: 80216087-5c02-48b2-90bc-5a8901340ffb" });
    });

    this.passthrough('https://mister-trainer.appspot.com/**'); // serving knowledge route
    // api => <host>/api/v1/ask-question?q=<question>
    this.get('ask-question', function (schema, request) {
      return { question: request.queryParams.q, answer: request.queryParams.q + ' is who he/she is!' };
    });
  };
});
define("app-test/mirage/scenarios/default", ["exports"], function (exports) {
  exports["default"] = function () /* server */{

    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
       Make sure to define a factory for each model you want to create.
    */

    // server.createList('post', 10);
  };
});
define('app-test/mirage/serializers/application', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.JSONAPISerializer.extend({});
});
define('app-test/router', ['exports', 'ember', 'app-test/config/environment'], function (exports, _ember, _appTestConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _appTestConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('search');
    this.route('user-list');
    this.route('user-updates');

    this.route('knowledge', function () {
      this.route('whois');
      this.route('whatis');
    });
  });

  exports['default'] = Router;

  //for google analytics
  Router.reopen({
    notifyGoogleAnalytics: (function () {

      var knowledgeCtl = this.container.lookup('controller:knowledge');
      if (!knowledgeCtl || !(knowledgeCtl instanceof _ember['default'].Controller)) {
        knowledgeCtl = { set: function set() {} };
      }

      if (!window.ga) {
        // no google analytics
        knowledgeCtl.set('gaStatus', 'Analytics tool is missing...');
        return;
      }
      knowledgeCtl.set('gaStatus', 'Sending report for "' + this.get('url') + '" page');

      return ga('send', 'pageview', {
        'page': this.get('url'),
        'title': this.get('url')
      });
    }).on('didTransition')
  });
});
define('app-test/router.tmp', ['exports', 'ember', 'app-test/config/environment'], function (exports, _ember, _appTestConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _appTestConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('search');
    this.route('user-list');
    this.route('user-updates');

    this.route('knowledge', function () {
      this.route('whois');
      this.route('whatis');
    });
  });

  exports['default'] = Router;
});
define('app-test/routes/search', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		actions: {
			toggleMessage: function toggleMessage(type) {
				this.controller.set('showMessage', type === 'OPEN');
			}
		}
	});
});
define("app-test/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 10
          }
        },
        "moduleName": "app-test/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("app-test/templates/search", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 1
            },
            "end": {
              "line": 11,
              "column": 1
            }
          },
          "moduleName": "app-test/templates/search.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "popover-content");
          var el2 = dom.createTextNode("\n			Enter a partial or complete name\n		");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 6
          }
        },
        "moduleName": "app-test/templates/search.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "full-name");
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2, "type", "text");
        dom.setAttribute(el2, "name", "full-name");
        dom.setAttribute(el2, "placeholder", "Name");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "class", "info-icon");
        var el3 = dom.createTextNode("?");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("	\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [3]);
        var morphs = new Array(3);
        morphs[0] = dom.createElementMorph(element1);
        morphs[1] = dom.createElementMorph(element1);
        morphs[2] = dom.createMorphAt(element0, 5, 5);
        return morphs;
      },
      statements: [["element", "action", ["toggleMessage", "OPEN"], ["on", "mouseEnter"], ["loc", [null, [4, 2], [4, 51]]]], ["element", "action", ["toggleMessage", "CLOSE"], ["on", "mouseLeave"], ["loc", [null, [5, 2], [5, 52]]]], ["block", "if", [["get", "showMessage", ["loc", [null, [7, 7], [7, 18]]]]], [], 0, null, ["loc", [null, [7, 1], [11, 8]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('app-test/tests/mirage/mirage/config.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - mirage/config.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/config.js should pass jshint.');
  });
});
define('app-test/tests/mirage/mirage/scenarios/default.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - mirage/scenarios/default.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/scenarios/default.js should pass jshint.');
  });
});
define('app-test/tests/mirage/mirage/serializers/application.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint - mirage/serializers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/application.js should pass jshint.');
  });
});
define('app-test/user-list/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("app-test/user-list/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "app-test/user-list/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('app-test/user-updates/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("app-test/user-updates/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "app-test/user-updates/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('app-test/config/environment', ['ember'], function(Ember) {
  var prefix = 'app-test';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("app-test/app")["default"].create({"name":"app-test","version":"0.0.0+46f49774"});
}

/* jshint ignore:end */
//# sourceMappingURL=app-test.map