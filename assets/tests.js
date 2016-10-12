define('app-test/tests/acceptance/show-searchinput-tooltip-on-hover-test', ['exports', 'qunit', 'app-test/tests/helpers/module-for-acceptance'], function (exports, _qunit, _appTestTestsHelpersModuleForAcceptance) {

  (0, _appTestTestsHelpersModuleForAcceptance['default'])('Acceptance | show searchinput tooltip on hover');

  (0, _qunit.test)('Hovering over the question-mark icon', function (assert) {
    visit('/search');
    var searchRouteName = 'search',
        message = 'Enter a partial or complete name';

    andThen(function () {
      assert.equal(currentRouteName(), searchRouteName, 'search page reached');
      assert.equal(find('.full-name .info-icon').length, 1, 'name info icon exist');
    });

    andThen(function () {
      var ic = find('.full-name .info-icon');
      ic.mouseenter();
    });

    andThen(function () {
      // debugger;
      var messageBox = find('.full-name .popover-content');
      assert.equal(messageBox.length, 1, 'popover box is present');
      assert.equal(messageBox.text().trim().search(message), 0, 'helpful message is shown');
    });

    andThen(function () {
      var ic = find('.full-name .info-icon');
      ic.mouseleave();
    });

    andThen(function () {
      var messageBox = find('.full-name .popover-content');
      assert.equal(messageBox.length, 0, 'popover box is removed');
    });
  });
});
define('app-test/tests/acceptance/show-searchinput-tooltip-on-hover-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - acceptance/show-searchinput-tooltip-on-hover-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/show-searchinput-tooltip-on-hover-test.js should pass jshint.');
  });
});
define('app-test/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('app-test/tests/application/adapter.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - application/adapter.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/adapter.js should pass jshint.');
  });
});
define('app-test/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('app-test/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('app-test/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'app-test/tests/helpers/start-app', 'app-test/tests/helpers/destroy-app'], function (exports, _qunit, _appTestTestsHelpersStartApp, _appTestTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _appTestTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _appTestTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('app-test/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('app-test/tests/helpers/resolver', ['exports', 'ember/resolver', 'app-test/config/environment'], function (exports, _emberResolver, _appTestConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _appTestConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _appTestConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('app-test/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('app-test/tests/helpers/start-app', ['exports', 'ember', 'app-test/app', 'app-test/config/environment'], function (exports, _ember, _appTestApp, _appTestConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _appTestConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _appTestApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('app-test/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('app-test/tests/knowledge/whatis/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - knowledge/whatis/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'knowledge/whatis/route.js should pass jshint.');
  });
});
define('app-test/tests/knowledge/whois/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - knowledge/whois/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'knowledge/whois/route.js should pass jshint.');
  });
});
define('app-test/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('app-test/tests/router.tmp.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.tmp.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.tmp.js should pass jshint.');
  });
});
define('app-test/tests/routes/search.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/search.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/search.js should pass jshint.');
  });
});
define('app-test/tests/test-helper', ['exports', 'app-test/tests/helpers/resolver', 'ember-qunit'], function (exports, _appTestTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_appTestTestsHelpersResolver['default']);
});
define('app-test/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('app-test/tests/unit/application/adapter-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('app-test/tests/unit/application/adapter-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/application/adapter-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/application/adapter-test.js should pass jshint.');
  });
});
define('app-test/tests/unit/knowledge/whatis/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:knowledge/whatis', 'Unit | Route | knowledge/whatis', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('app-test/tests/unit/knowledge/whatis/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/knowledge/whatis/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/knowledge/whatis/route-test.js should pass jshint.');
  });
});
define('app-test/tests/unit/knowledge/whois/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:knowledge/whois', 'Unit | Route | knowledge/whois', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('app-test/tests/unit/knowledge/whois/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/knowledge/whois/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/knowledge/whois/route-test.js should pass jshint.');
  });
});
define('app-test/tests/unit/routes/search-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:search', 'Unit | Route | search', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('app-test/tests/unit/routes/search-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/search-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/search-test.js should pass jshint.');
  });
});
define('app-test/tests/unit/user-list/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:user-list', 'Unit | Route | user list', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('app-test/tests/unit/user-list/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/user-list/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/user-list/route-test.js should pass jshint.');
  });
});
define('app-test/tests/unit/user-updates/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:user-updates', 'Unit | Route | user updates', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('app-test/tests/unit/user-updates/route-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/user-updates/route-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/user-updates/route-test.js should pass jshint.');
  });
});
define('app-test/tests/user-list/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - user-list/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'user-list/route.js should pass jshint.');
  });
});
define('app-test/tests/user-updates/route.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - user-updates/route.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'user-updates/route.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('app-test/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map