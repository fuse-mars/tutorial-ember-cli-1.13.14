import { test } from 'qunit';
import moduleForAcceptance from 'app-test/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | show searchinput tooltip on hover');

test('Hovering over the question-mark icon', function(assert) {
  visit('/search');
  let searchRouteName = 'search', 
  message = 'Enter a partial or complete name';

  andThen(function() {
    assert.equal(currentRouteName(), searchRouteName, 
                  'search page reached');
    assert.equal(find('.full-name .info-icon').length, 1,
                  'name info icon exist');
  });

  andThen(function() {
  	let ic = find('.full-name .info-icon');
  	ic.mouseenter();
  });

  andThen(function() {
  	// debugger;
    let messageBox = find('.full-name .popover-content');
    assert.equal(messageBox.length, 1, 'popover box is present');
    assert.equal(messageBox.text().trim().search(message), 0, 
                  'helpful message is shown');
  });

  andThen(function() {
  	let ic = find('.full-name .info-icon');
  	ic.mouseleave();
  });
  
  andThen(function() {
    let messageBox = find('.full-name .popover-content');
    assert.equal(messageBox.length, 0, 'popover box is removed');
  });
});