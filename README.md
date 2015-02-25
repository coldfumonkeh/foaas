# FOAAS Module

This is an open source Node module wrapper to interact with the [FOAAS](foaas.herokuapp.com) API.

## Installation

    npm install foaas-node --save

## Usage

    var foaas_module = require('foaas-node');
    var foaas = new foaas_module();

    foaas.getVersion({type: 'json'}).then(function(data) {
      console.log(data); // do what you want after the promise is returned
    });

    // Standard response
    foaas.awesome('Macklemore', {type: 'json'}).then(function(data) {
      ...
    });

    // Response is is UPPERCASE
    foaas.awesome('Macklemore', {type: 'json', shoutcast: true}).then(function(data) {
      ...
    });

    // Response is is UPPERCASE AND Spanish
    foaas.awesome('Macklemore', {type: 'json', shoutcast: true, i18n: 'es'}).then(function(data) {
      ...
    });

## Tests

  npm test

or for some colour:

  make nyan


## Release History

* 0.1.0 Initial release

## License

The MIT License (MIT)

Copyright (c) 2015 Matt Gifford

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
