var path = require('path');

module.exports = {
    path: function () {
	return path.join(process.cwd(), 'bin/phantomjs');
    }
};
