FlowRouter.route('/', {
    action: function(params) {
      ReactLayout.render(Container, {
        content: <HomeFeature />
      })
    }
});

FlowRouter.route('/school', {
    action: function(params) {
      ReactLayout.render(Container, {
        content: <School />
      })
    }
});

FlowRouter.route('/school/path', {
    action: function(params) {
      ReactLayout.render(Container, {
        content: <Path />
      })
    }
});

FlowRouter.route('/school/path/player', {
    action: function(params) {
      ReactLayout.render(Container, {
        content: <Player />
      })
    }
});
