const {
  config: authentication,
  befores = [],
  afters = [],
} = require('./authentication');

const fbClubResource = require("./resources\\fb_club");

const fbPlayerResource = require("./resources\\fb_player");

const commentsResource = require("./resources\\comments");

module.exports = {
  // This is just shorthand to reference the installed dependencies you have.
  // Zapier will need to know these before we can upload.
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

  authentication,

  beforeRequest: [...befores],

  afterResponse: [...afters],

  // If you want your trigger to show up, you better include it here!
  triggers: {
    new_comments: {
      key: commentsResource.key, // uniquely identifies the trigger
      noun: commentsResource.noun, // user-friendly word that is used to refer to the resource

      // `display` controls the presentation in the Zapier Editor
      display: commentsResource.list.display,

      // `operation` implements the API call used to fetch the data
      operation: commentsResource.list.operation,
    },
  },

  // If you want your searches to show up, you better include it here!
  searches: {},

  // If you want your creates to show up, you better include it here!
  creates: {},

  resources: {
    [fbClubResource.key]: fbClubResource,
    [fbPlayerResource.key]: fbPlayerResource,
    [commentsResource.key]: commentsResource
  },
};
