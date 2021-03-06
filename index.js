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

  this.bday = function(name, from, options) {
    return _makeRequest('/bday/' + name + '/' + from, options);
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

  this.family = function(from, options) {
    return _makeRequest('/family/' + from, options);
  }

  this.shutup = function(name, from, options) {
    return _makeRequest('/shutup/' + name + '/' + from, options);
  }

  this.zayn = function(from, options) {
    return _makeRequest('/zayn/' + from, options);
  }

  this.keepcalm = function(reaction, from, options) {
    return _makeRequest('/keepcalm/' + reaction + '/' + from, options);
  }

  this.dosomething = function(action, something, from, options) {
    return _makeRequest('/dosomething/' + action + '/' + something + '/' + from, options);
  }

  this.mornin = function(from, options) {
    return _makeRequest('/mornin/' + from, options);
  }

  this.thumbs = function(thisguy, from, options) {
    return _makeRequest('/thumbs/' + thisguy + '/' + from, options);
  }

  this.retard = function(from, options) {
    return _makeRequest('/retard/' + from, options);
  }

  this.greed = function(noun, from, options) {
    return _makeRequest('/greed/' + noun + '/' + from, options);
  }

  this.bm = function(name, from, options) {
    return _makeRequest('/bm/' + name + '/' + from, options);
  }

  this.gfy = function(name, from, options) {
    return _makeRequest('/gfy/' + name + '/' + from, options);
  }

  this.me = function(from, options) {
    return _makeRequest('/me/' + from, options);
  }

  this.back = function(name, from, options) {
    return _makeRequest('/back/' + name + '/' + from, options);
  }

  this.think = function(name, from, options) {
    return _makeRequest('/think/' + name + '/' + from, options);
  }

  this.keep = function(name, from, options) {
    return _makeRequest('/keep/' + name + '/' + from, options);
  }

  this.single = function(from, options) {
    return _makeRequest('/single/' + from, options);
  }

  this.look = function(name, from, options) {
    return _makeRequest('/look/' + name + '/' + from, options);
  }

  this.looking = function(from, options) {
    return _makeRequest('/looking/' + from, options);
  }

  this.no = function(from, options) {
    return _makeRequest('/no/' + from, options);
  }

  this.give = function(from, options) {
    return _makeRequest('/give/' + from, options);
  }

  this.zero = function(from, options) {
    return _makeRequest('/zero/' + from, options);
  }

  this.pulp = function(language, from, options) {
    return _makeRequest('/pulp/' + language + '/' + from, options);
  }

  this.sake = function(from, options) {
    return _makeRequest('/sake/' + from, options);
  }

  this.anyway = function(company, from, options) {
    return _makeRequest('/anyway/' + company + '/' + from, options);
  }

  this.maybe = function(from, options) {
    return _makeRequest('/maybe/' + from, options);
  }

  this.blackadder = function(name, from, options) {
    return _makeRequest('/blackadder/' + name + '/' + from, options);
  }

  this.horse = function(from, options) {
    return _makeRequest('/horse/' + from, options);
  }

  this.deraadt = function(name, from, options) {
    return _makeRequest('/deraadt/' + name + '/' + from, options);
  }

  this.problem = function(name, from, options) {
    return _makeRequest('/problem/' + name + '/' + from, options);
  }

  this.cocksplat = function(name, from, options) {
    return _makeRequest('/cocksplat/' + name + '/' + from, options);
  }

  this.too = function(from, options) {
    return _makeRequest('/too/' + from, options);
  }

};


module.exports = foaas;
