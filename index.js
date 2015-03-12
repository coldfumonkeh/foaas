var request = require('request'),
    Promise = require('bluebird');


function foaas() {
  'use strict';

  function _addQueryParameters(request, options) {
    if (!options) {
      return;
    }
    for (var key in options) {
      request.addQueryParameter(key, options[key]);
    }
  }

  function _getType(options) {
    var type = '';
    var accType;
    if ( options.type !== undefined ) {
      type = options.type;
    }
    switch (type.toLowerCase()) {
      case 'plain':
        accType = 'text/plain';
        break;
      case 'json':
        accType = 'application/json';
        break;
      case 'html':
        accType = 'text/html';
        break;
      case 'xml':
        accType = 'application/xml';
        break;
      default:
        accType = 'text/plain';
        break;
    }
    return accType;
  }

  function _makeRequest(endpoint, options) {
    var _options = options || {};
    var _type = _getType(_options);
    var url = 'http://foaas.herokuapp.com' + endpoint + '?';
    if (typeof _options === 'object') {
      Object.keys(_options).forEach(function(key) {
        if ( key !== 'type' ) {
          url += key + '=' + _options[key] + '&';
        }
      });
      url += 'processed=true';
    }

    var request_options = {
      url: url,
      headers: {
        'Accept': _type
      }
    };
    return new Promise(function(resolve, reject) {
      request(request_options, function(error, response, body) {
        if (error) return reject(error);
        if (response.statusCode == 200) {
          return resolve(body);
        }
        return reject(new Error(response.statusCode));
      });
    });
  }


  /**
   * Get the service version number.
   * @param {Object} [options] The possible options: type (plain, json, html or xml) and optional filters (shoutcloud).
   * @example getVersion({type: 'plain'}).then(function(data) { ... })
   * @returns {Promise}
   */
  this.getVersion = function(options) {
    return _makeRequest('/version', options);
  }

  this.off = function(name, from, options) {
    return _makeRequest('/off/' + name + '/' + from, options);
  }

  this.you = function(name, from, options) {
    return _makeRequest('/you/' + name + '/' + from, options);
  }

  this.this = function(from, options) {
    return _makeRequest('/this/' + from, options);
  }

  this.that = function(from, options) {
    return _makeRequest('/that/' + from, options);
  }

  this.everything = function(from, options) {
    return _makeRequest('/everything/' + from, options);
  }

  this.everyone = function(from, options) {
    return _makeRequest('/everyone/' + from, options);
  }

  this.donut = function(name, from, options) {
    return _makeRequest('/donut/' + name + '/' + from, options);
  }

  this.shakespeare = function(name, from, options) {
    return _makeRequest('/shakespeare/' + name + '/' + from, options);
  }

  this.linus = function(name, from, options) {
    return _makeRequest('/linus/' + name + '/' + from, options);
  }

  this.king = function(name, from, options) {
    return _makeRequest('/king/' + name + '/' + from, options);
  }

  this.pink = function(from, options) {
    return _makeRequest('/pink/' + from, options);
  }

  this.life = function(from, options) {
    return _makeRequest('/life/' + from, options);
  }

  this.chainsaw = function(name, from, options) {
    return _makeRequest('/chainsaw/' + name + '/' + from, options);
  }

  this.outside = function(name, from, options) {
    return _makeRequest('/outside/' + name + '/' + from, options);
  }

  this.thing = function(thing, from, options) {
    return _makeRequest('/' + thing + '/' + from, options);
  }

  this.thanks = function(from, options) {
    return _makeRequest('/thanks/' + from, options);
  }

  this.flying = function(from, options) {
    return _makeRequest('/flying/' + from, options);
  }

  this.fascinating = function(from, options) {
    return _makeRequest('/fascinating/' + from, options);
  }

  this.madison = function(name, from, options) {
    return _makeRequest('/madison/' + name + '/' + from, options);
  }

  this.cool = function(from, options) {
    return _makeRequest('/cool/' + from, options);
  }

  this.field = function(name, from, reference, options) {
    return _makeRequest('/field/' + name + '/' + from + '/' + reference, options);
  }

  this.nugget = function(name, from, options) {
    return _makeRequest('/nugget/' + name + '/' + from, options);
  }

  this.yoda = function(name, from, options) {
    return _makeRequest('/yoda/' + name + '/' + from, options);
  }

  this.ballmer = function(name, company, from, options) {
    return _makeRequest('/ballmer/' + name + '/' + company + '/' + from, options);
  }

  this.what = function(from, options) {
    return _makeRequest('/what/' + from, options);
  }

  this.because = function(from, options) {
    return _makeRequest('/because/' + from, options);
  }

  this.caniuse = function(tool, from, options) {
    return _makeRequest('/caniuse/' + tool + '/' + from, options);
  }

  this.bye = function(from, options) {
    return _makeRequest('/bye/' + from, options);
  }

  this.diabetes = function(from, options) {
    return _makeRequest('/diabetes/' + from, options);
  }

  this.bus = function(name, from, options) {
    return _makeRequest('/bus/' + name + '/' + from, options);
  }

  this.xmas = function(name, from, options) {
    return _makeRequest('/xmas/' + name + '/' + from, options);
  }

  this.awesome = function(from, options) {
    return _makeRequest('/awesome/' + from, options);
  }

  this.tucker = function(from, options) {
    return _makeRequest('/tucker/' + from, options);
  }

  this.bucket = function(from, options) {
    return _makeRequest('/bucket/' + from, options);
  }


};


module.exports = foaas;
