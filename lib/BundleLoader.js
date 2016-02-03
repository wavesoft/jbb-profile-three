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

/**
 * Helper class to load arbitrary resources
 */
function BundleLoader() {

	// Already loaded loaders
	this.loaders = { };

}

/**
 * Load a particular module
 */
BundleLoader.prototype.load = function( loaderClass, loaderConfig, callback ) {
	if (loaderClass.substr(0,6) == "THREE.") {
		var parts = loaderClass.split(".");

		// Check if we have loader
		var loaderInst = this.loaders[loaderClass];
		if (loaderInst == undefined) {

			// Look on THREE or on loaders directory
			var loaderClass;
			if (THREE[parts[1]] == undefined) {
				loaderClass = require("imports?THREE=three!./lib/loaders/"+parts[1]);
			} else {
				loaderClass = THREE[parts[1]];
			}

			// Instantiate loader
			loaderInst = new loaderClass();
			this.loaders[loaderClass] = loaderInst;

		}

		// Load
		loaderInst.load( loaderConfig, callback );

	} else {

		// TODO:

	}
}

// Export bundle loader
module.exports = BundleLoader;
