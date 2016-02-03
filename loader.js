"use strict";
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

var THREE 		= require('three'),
	path 		= require('path'),
	XHRLoader 	= require('./lib/FileXHRLoader'),
	BundleLoaderClass = require('./lib/BundleLoader');

/**
 * Create a bundle loader singleton
 */
var BundleLoader = new BundleLoaderClass();

/**
 * Export compiler specifications
 */
module.exports = {

	/**
	 * Initialize compiler profile
	 */
	'initialize': function( cb ) {

		// If we are running in node.js replace the THREE.js XHRLoader
		// with an offline version.
		var isBrowser=new Function("try {return this===window;}catch(e){ return false;}");
		if (!isBrowser()) {

			// Expose 'THREE' for non-compatible scripts
			global.THREE = THREE;

			// Override XHR Loader
			global.THREE.XHRLoader = XHRLoader;

		}

		// Trigger callback
		cb();

	},

	/**
	 * Load object(s) from the specified filename and put them in the database record under the given name
	 */
	'load': function( filename, name, loadClass, callback ) {

		// If we haven't specified a loader
		if (!loadClass) {

			// Use default Three.js loader
			var loadClass = new THREE.ObjectLoader();
			loadClass.load( filename, function(data, extra) {

				// Prepare response array
				var objects = {};
				objects[name] = data;
				if (extra) objects[name+':extra'] = extra;

				// Notify that we are compiled
				callback( null, objects );

			});

		} else {

			// Trigger bundle loader
			BundleLoader.load( loadClass, filename, function( data, extra ) {

				// Prepare response array
				var objects = {};
				objects[name] = data;
				if (extra) objects[name+':extra'] = extra;

				// Notify that we are compiled
				callback( null, objects );

			});

		}


	}

};
