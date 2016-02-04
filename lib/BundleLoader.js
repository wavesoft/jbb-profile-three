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
 * Preload known THREE.js loaders
 */
var THREE = require("three");
require("./loaders/THREE/AWDLoader");
require("./loaders/THREE/BabylonLoader");
require("./loaders/THREE/BinaryLoader");
require("./loaders/THREE/ColladaLoader");
require("./loaders/THREE/DDSLoader");
require("./loaders/THREE/MD2CharacterLoader");
require("./loaders/THREE/MD2Loader");
require("./loaders/THREE/MTLLoader");
require("./loaders/THREE/OBJLoader");
require("./loaders/THREE/OBJMTLLoader");
require("./loaders/THREE/PDBLoader");
require("./loaders/THREE/PLYLoader");
require("./loaders/THREE/PVRLoader");
require("./loaders/THREE/RGBELoader");
require("./loaders/THREE/STLLoader");
require("./loaders/THREE/SVGLoader");
require("./loaders/THREE/TGALoader");
require("./loaders/THREE/UTF8Loader");
require("./loaders/THREE/VRMLLoader");
require("./loaders/THREE/VTKLoader");

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
			var loaderClass = THREE[parts[1]];
			if (THREE[parts[1]] == undefined) {
				throw "Could not find the specified loader!"
			}

			// Instantiate loader
			loaderInst = new loaderClass();
			this.loaders[loaderClass] = loaderInst;

		}

		// Load
		loaderInst.load( loaderConfig, callback );

	} else {

		// We don't know how to handle this
		throw "Unknown loader!";

	}
}

// Export bundle loader
module.exports = BundleLoader;
