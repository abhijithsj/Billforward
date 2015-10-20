Package.describe({
  name: 'wisptools:billforward-ui',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use([
    'meteor',
    'mongo',
    'templating',
    'aldeed:collection2@2.3.1',
    'aldeed:autoform@4.2.2',
    'iron:router@1.0.7',
    'wisptools:billforward-api'
  ]);
// Client and Server files
  api.addFiles([
    'lib/router.js',
    'billforward-ui.js'
    ], ['server','client']);
    
// Client only files
  api.addFiles([
    'client/templates/create-account.html',
    'client/templates/create-account.js'
    ], 'client');
    
	
	 //api.export('WtBillForwardUI');
	 
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('wisptools:billforward-ui');
  api.addFiles('billforward-ui-tests.js');
});
