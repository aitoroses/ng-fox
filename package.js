var path = Npm.require('path');

Package.describe({
    summary: "Meteor Collections for AngularJS"
});

Package.on_use(function (api) {
    api.add_files(path.join('lib', 'angular_code.js'), 'client');
});
