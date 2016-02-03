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
	XHRLoader 	= require('./lib/FileXHRLoader');

/**
 * Export compiler specifications
 */
module.exports = {

	/**
	 * Initialize compiler profile
	 */
	'initialize': function( cb ) {

		// Expose 'THREE' for non-compatible scripts
		global.THREE = THREE;

		// Override XHR Loader
		global.THREE.XHRLoader = XHRLoader;

		// Trigger callback
		cb();

	},

	/**
	 * Additional options for the command-line arguments of the compiler
	 */
	'getopt': function() {

		// Return additional entries for the node-getopt constructor
		return [
		];

	},

	/**
	 * Load object(s) from the specified filename and put them in the database record under the given name
	 */
	'load': function( filename, name, callback ) {

		// As an example use JSON loader
		var loader = new THREE.JSONLoader();
		loader.load( filename, function ( geometry, materials ) {

			// Prepare objects array
			var objects = {};
			objects[name] = geometry;
			objects[name+':extra'] = materials;

			// Notify that we are compiled
			callback( null, objects );

		});

	}

};
