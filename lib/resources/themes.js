//
// # Themes
//

var Resource = require('../resource.js')
    , util = require('util');

//
// Themes constructor.
//

function Themes(client) { // fix me: create a new connection class
    Resource.call(this, client);
};

util.inherits(Themes, Resource);

Themes.prototype.count = null;

module.exports = Themes;
