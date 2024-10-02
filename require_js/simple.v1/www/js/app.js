// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones,
requirejs.config({
    'baseUrl': 'js',
    'paths': {
      'app': 'app',
      'jquery': './lib/jquery-3.7.1.slim.min',
      'ko': './lib/knockout-3.5.1.min',
    }
});

// Load the main app module to start the app
requirejs(['app/main']);
