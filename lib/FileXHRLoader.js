/**
 * THREE Bundles - Binary Encoder
 * Copyright (C) 2015 Ioannis Charalampidis <ioannis.charalampidis@cern.ch>
 * 
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * @author Ioannis Charalampidis / https://github.com/wavesoft
 */
var THREE = require("three"),
    fs = require("fs");

var XHRLoader = function ( manager ) {

    this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;
    this.responseType == "default";
    this.path = undefined;

};

XHRLoader.prototype = {

    constructor: XHRLoader,

    load: function ( url, onLoad, onProgress, onError ) {

        if ( this.path !== undefined ) url = this.path + url;

        function toArrayBuffer(buffer) {
            var ab = new ArrayBuffer(buffer.length);
            var view = new Uint8Array(ab);
            for (var i = 0; i < buffer.length; ++i) {
                view[i] = buffer[i];
            }
            return ab;
        }

        var scope = this;

        fs.readFile(url, { }, function (err, data ) {
            if (err) {
                console.error(err);
                if (onError) onError( err );
            } else {
                if (scope.responseType == "arraybuffer") {
                    var barr = toArrayBuffer(data);
                    if (onLoad) onLoad( barr );
                } else {
                    if (onLoad) onLoad( data.toString() );
                }
                scope.manager.itemEnd( url );
            }
        });

        scope.manager.itemStart( url );

    },

    setPath: function( path ) {

        this.path = path;

    },

    setResponseType: function ( value ) {

        this.responseType = value;

    },

    setCrossOrigin: function ( value ) {
    },

    setWithCredentials: function ( value ) {
    }

};

// Export XHR Loader
module.exports = XHRLoader;

