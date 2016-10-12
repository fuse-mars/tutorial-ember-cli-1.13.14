//for google analytics
Router.reopen({
  notifyGoogleAnalytics: function() {

    let knowledgeCtl = this.container.lookup('controller:knowledge');
    if (!knowledgeCtl || !(knowledgeCtl instanceof Ember.Controller)) {
      knowledgeCtl = { set(){} };
    }

    if(!window.ga) {
      // no google analytics
      knowledgeCtl.set('gaStatus', `Analytics tool is missing...`); 
      return;
    }
    knowledgeCtl.set('gaStatus', `Sending report for "${this.get('url')}" page`);


    return ga('send', 'pageview', {
        'page': this.get('url'),
        'title': this.get('url')
      });
  }.on('didTransition')
});