Package.describe({
  name: 'sortegam:typicons',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Typicons Icons CSS Library for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/sortegam/meteor-typicons',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.3.1');
  var path = Npm.require('path');
  var asset_path = path.join('typicons');
  // Add required fonts
  api.addFiles(path.join(asset_path, 'font', 'typicons.eot'), 'client');
  api.addFiles(path.join(asset_path, 'font', 'typicons.svg'), 'client');
  api.addFiles(path.join(asset_path, 'font', 'typicons.ttf'), 'client');
  api.addFiles(path.join(asset_path, 'font', 'typicons.woff'), 'client');
  // Add required CSS
  api.addFiles(path.join(asset_path, 'css', 'typicons.css'), 'client');

});


