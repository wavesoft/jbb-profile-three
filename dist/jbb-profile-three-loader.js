/* THREE.js profile loader for JBB - https://github.com/wavesoft/jbb-profile-three */
var JBB = JBB || {}; JBB["Loader"] = JBB["Loader"] || {}; JBB["Loader"]["three"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
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

	var THREE 		= __webpack_require__(1),
		path 		= __webpack_require__(2),
		BundleLoaderClass = __webpack_require__(4);

	/**
	 * Create a bundle loader singleton
	 */
	var BundleLoader = new BundleLoaderClass();

	/**
	 * Export loader specifications
	 */
	module.exports = {

		/**
		 * Initialize profile loader
		 */
		'initialize': function( cb ) {

			// If we are running in node.js replace the THREE.js XHRLoader
			// with an offline version.
			var isBrowser=new Function("try {return this===window;}catch(e){ return false;}"); // browser exclude
			if (!isBrowser()) {

				// Expose 'THREE' for non-compatible scripts
				global.THREE = THREE;

				// Override XHR Loader
				global.THREE.XHRLoader = __webpack_require__(26);

			}

			// Trigger callback
			if (cb) cb();

		},

		/**
		 * Load object(s) from the specified filename and put them in the database record under the given name
		 */
		'load': function( loadClass, loadSpecs, name, callback ) {

			// Trigger bundle loader and return TRUE if this
			// was handled by this loader.
			return BundleLoader.load( loadClass, loadSpecs, function( data, extra ) {

				// Prepare response array
				var objects = {};
				objects[name] = data;
				if (extra) objects[name+':extra'] = extra;

				// Notify that we are compiled
				callback( null, objects );

			});


		}

	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = THREE;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// resolves . and .. elements in a path array with directory names there
	// must be no slashes, empty elements, or device names (c:\) in the array
	// (so also no leading and trailing slashes - it does not distinguish
	// relative and absolute paths)
	function normalizeArray(parts, allowAboveRoot) {
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = parts.length - 1; i >= 0; i--) {
	    var last = parts[i];
	    if (last === '.') {
	      parts.splice(i, 1);
	    } else if (last === '..') {
	      parts.splice(i, 1);
	      up++;
	    } else if (up) {
	      parts.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (allowAboveRoot) {
	    for (; up--; up) {
	      parts.unshift('..');
	    }
	  }

	  return parts;
	}

	// Split a filename into [root, dir, basename, ext], unix version
	// 'root' is just a slash, or nothing.
	var splitPathRe =
	    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
	var splitPath = function(filename) {
	  return splitPathRe.exec(filename).slice(1);
	};

	// path.resolve([from ...], to)
	// posix version
	exports.resolve = function() {
	  var resolvedPath = '',
	      resolvedAbsolute = false;

	  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
	    var path = (i >= 0) ? arguments[i] : process.cwd();

	    // Skip empty and invalid entries
	    if (typeof path !== 'string') {
	      throw new TypeError('Arguments to path.resolve must be strings');
	    } else if (!path) {
	      continue;
	    }

	    resolvedPath = path + '/' + resolvedPath;
	    resolvedAbsolute = path.charAt(0) === '/';
	  }

	  // At this point the path should be resolved to a full absolute path, but
	  // handle relative paths to be safe (might happen when process.cwd() fails)

	  // Normalize the path
	  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
	    return !!p;
	  }), !resolvedAbsolute).join('/');

	  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
	};

	// path.normalize(path)
	// posix version
	exports.normalize = function(path) {
	  var isAbsolute = exports.isAbsolute(path),
	      trailingSlash = substr(path, -1) === '/';

	  // Normalize the path
	  path = normalizeArray(filter(path.split('/'), function(p) {
	    return !!p;
	  }), !isAbsolute).join('/');

	  if (!path && !isAbsolute) {
	    path = '.';
	  }
	  if (path && trailingSlash) {
	    path += '/';
	  }

	  return (isAbsolute ? '/' : '') + path;
	};

	// posix version
	exports.isAbsolute = function(path) {
	  return path.charAt(0) === '/';
	};

	// posix version
	exports.join = function() {
	  var paths = Array.prototype.slice.call(arguments, 0);
	  return exports.normalize(filter(paths, function(p, index) {
	    if (typeof p !== 'string') {
	      throw new TypeError('Arguments to path.join must be strings');
	    }
	    return p;
	  }).join('/'));
	};


	// path.relative(from, to)
	// posix version
	exports.relative = function(from, to) {
	  from = exports.resolve(from).substr(1);
	  to = exports.resolve(to).substr(1);

	  function trim(arr) {
	    var start = 0;
	    for (; start < arr.length; start++) {
	      if (arr[start] !== '') break;
	    }

	    var end = arr.length - 1;
	    for (; end >= 0; end--) {
	      if (arr[end] !== '') break;
	    }

	    if (start > end) return [];
	    return arr.slice(start, end - start + 1);
	  }

	  var fromParts = trim(from.split('/'));
	  var toParts = trim(to.split('/'));

	  var length = Math.min(fromParts.length, toParts.length);
	  var samePartsLength = length;
	  for (var i = 0; i < length; i++) {
	    if (fromParts[i] !== toParts[i]) {
	      samePartsLength = i;
	      break;
	    }
	  }

	  var outputParts = [];
	  for (var i = samePartsLength; i < fromParts.length; i++) {
	    outputParts.push('..');
	  }

	  outputParts = outputParts.concat(toParts.slice(samePartsLength));

	  return outputParts.join('/');
	};

	exports.sep = '/';
	exports.delimiter = ':';

	exports.dirname = function(path) {
	  var result = splitPath(path),
	      root = result[0],
	      dir = result[1];

	  if (!root && !dir) {
	    // No dirname whatsoever
	    return '.';
	  }

	  if (dir) {
	    // It has a dirname, strip trailing slash
	    dir = dir.substr(0, dir.length - 1);
	  }

	  return root + dir;
	};


	exports.basename = function(path, ext) {
	  var f = splitPath(path)[2];
	  // TODO: make this comparison case-insensitive on windows?
	  if (ext && f.substr(-1 * ext.length) === ext) {
	    f = f.substr(0, f.length - ext.length);
	  }
	  return f;
	};


	exports.extname = function(path) {
	  return splitPath(path)[3];
	};

	function filter (xs, f) {
	    if (xs.filter) return xs.filter(f);
	    var res = [];
	    for (var i = 0; i < xs.length; i++) {
	        if (f(xs[i], i, xs)) res.push(xs[i]);
	    }
	    return res;
	}

	// String.prototype.substr - negative index don't work in IE8
	var substr = 'ab'.substr(-1) === 'b'
	    ? function (str, start, len) { return str.substr(start, len) }
	    : function (str, start, len) {
	        if (start < 0) start = str.length + start;
	        return str.substr(start, len);
	    }
	;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 3 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

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
	var THREE = __webpack_require__(1);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(20);
	__webpack_require__(21);
	__webpack_require__(22);
	__webpack_require__(23);
	__webpack_require__(24);
	__webpack_require__(25);

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

			// Return TRUE to inform loader that this class was handled
			return true;

		} else {

			// Return FALSE to inform loader that we can't handle this class
			return false;

		}
	}

	// Export bundle loader
	module.exports = BundleLoader;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Author: Pierre Lepers
	 * Date: 09/12/2013 17:21
	 */
	var THREE = __webpack_require__(1);

	( function () {

		var UNCOMPRESSED  = 0,
				DEFLATE       = 1,
				LZMA          = 2,

				AWD_FIELD_INT8      = 1,
				AWD_FIELD_INT16     = 2,
				AWD_FIELD_INT32     = 3,
				AWD_FIELD_UINT8     = 4,
				AWD_FIELD_UINT16    = 5,
				AWD_FIELD_UINT32    = 6,
				AWD_FIELD_FLOAT32   = 7,
				AWD_FIELD_FLOAT64   = 8,
				AWD_FIELD_BOOL      = 21,
				AWD_FIELD_COLOR     = 22,
				AWD_FIELD_BADDR     = 23,
				AWD_FIELD_STRING    = 31,
				AWD_FIELD_BYTEARRAY = 32,
				AWD_FIELD_VECTOR2x1 = 41,
				AWD_FIELD_VECTOR3x1 = 42,
				AWD_FIELD_VECTOR4x1 = 43,
				AWD_FIELD_MTX3x2    = 44,
				AWD_FIELD_MTX3x3    = 45,
				AWD_FIELD_MTX4x3    = 46,
				AWD_FIELD_MTX4x4    = 47,

				BOOL       = 21,
				COLOR      = 22,
				BADDR      = 23,

				INT8    = 1,
				INT16   = 2,
				INT32   = 3,
				UINT8   = 4,
				UINT16  = 5,
				UINT32  = 6,
				FLOAT32 = 7,
				FLOAT64 = 8;

		var littleEndian = true;

		function Block() {

			this.id = 0;
			this.data = null;

		}

		AWDProperties = function() {}

		AWDProperties.prototype = {
			set : function( key, value ) {

				this[ key ] = value;

			},

			get : function( key, fallback ) {

				if ( this.hasOwnProperty( key ) )
					return this[ key ];
				else return fallback;

			}
		}

		THREE.AWDLoader = function ( manager ) {

			this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

			this.trunk = new THREE.Object3D();

			this.materialFactory = undefined;

			this._url     = '';
			this._baseDir = '';

			this._data;
			this._ptr = 0;

			this._version =  [];
			this._streaming = false;
			this._optimized_for_accuracy = false;
			this._compression = 0;
			this._bodylen = 0xFFFFFFFF;

			this._blocks = [ new Block() ];

			this._accuracyMatrix  = false;
			this._accuracyGeo     = false;
			this._accuracyProps   = false;

		};

		THREE.AWDLoader.prototype = {

			constructor: THREE.AWDLoader,

			load: function ( url, onLoad, onProgress, onError ) {

				var scope = this;

				this._url = url;
				this._baseDir = url.substr( 0, url.lastIndexOf( '/' ) + 1 );

				var loader = new THREE.XHRLoader( this.manager );
				loader.setCrossOrigin( this.crossOrigin );
				loader.setResponseType( 'arraybuffer' );
				loader.load( url, function ( text ) {

					onLoad( scope.parse( text ) );

				}, onProgress, onError );

			},

			setCrossOrigin: function ( value ) {

				this.crossOrigin = value;

			},

			parse: function ( data ) {

				var blen = data.byteLength;

				this._ptr = 0;
				this._data = new DataView( data );

				this._parseHeader( );

				if ( this._compression != 0  ) {

					console.error( 'compressed AWD not supported' );

				}

				if ( ! this._streaming && this._bodylen != data.byteLength - this._ptr ) {

					console.error( 'AWDLoader: body len does not match file length', this._bodylen,  blen - this._ptr );

				}

				while ( this._ptr < blen ) {

					this.parseNextBlock();

				}

				return this.trunk;

			},

			parseNextBlock: function() {

				var assetData,
						ns, type, len, block,
						blockId = this.readU32(),
						ns      = this.readU8(),
						type    = this.readU8(),
						flags   = this.readU8(),
						len     = this.readU32();


				switch ( type ) {
					case 1:
						assetData = this.parseMeshData( len );
						break;
					case 22:
						assetData = this.parseContainer( len );
						break;
					case 23:
						assetData = this.parseMeshInstance( len );
						break;
					case 81:
						assetData = this.parseMaterial( len );
						break;
					case 82:
						assetData = this.parseTexture( len );
						break;
					case 101:
						assetData = this.parseSkeleton( len );
						break;

		//      case 111:
		//        assetData = this.parseMeshPoseAnimation(len, true);
		//        break;
					case 112:
						assetData = this.parseMeshPoseAnimation( len, false );
						break;
					case 113:
						assetData = this.parseVertexAnimationSet( len );
						break;
					case 102:
						assetData = this.parseSkeletonPose( len );
						break;
					case 103:
						assetData = this.parseSkeletonAnimation( len );
						break;
					case 122:
						assetData = this.parseAnimatorSet( len );
						break;
					// case 121:
					//  assetData = parseUVAnimation(len);
					//  break;
					default:
						//debug('Ignoring block!',type, len);
						this._ptr += len;
						break;
				}


				// Store block reference for later use
				this._blocks[ blockId ] = block = new Block();
				block.data = assetData;
				block.id = blockId;


			},

			_parseHeader: function () {

				var version = this._version,
						awdmagic =
								( this.readU8() << 16 )
						|   ( this.readU8() << 8 )
						|     this.readU8();

				if ( awdmagic != 4282180 )
					throw new Error( "AWDLoader - bad magic" );

				version[ 0 ] = this.readU8();
				version[ 1 ] = this.readU8();

				var flags = this.readU16();

				this._streaming = ( flags & 0x1 ) == 0x1;

				if ( ( version[ 0 ] === 2 ) && ( version[ 1 ] === 1 ) ) {

					this._accuracyMatrix =  ( flags & 0x2 ) === 0x2;
					this._accuracyGeo =     ( flags & 0x4 ) === 0x4;
					this._accuracyProps =   ( flags & 0x8 ) === 0x8;

				}

				this._geoNrType     = this._accuracyGeo     ? FLOAT64 : FLOAT32;
				this._matrixNrType  = this._accuracyMatrix  ? FLOAT64 : FLOAT32;
				this._propsNrType   = this._accuracyProps   ? FLOAT64 : FLOAT32;

				this._optimized_for_accuracy  = ( flags & 0x2 ) === 0x2;

				this._compression = this.readU8();
				this._bodylen = this.readU32();

			},

			parseContainer: function ( len ) {

				var parent,
						ctr     = new THREE.Object3D(),
						par_id  = this.readU32(),
						mtx     = this.parseMatrix4();

				ctr.name = this.readUTF();
				ctr.applyMatrix( mtx );

				parent = this._blocks[ par_id ].data || this.trunk;
				parent.add( ctr );

				this.parseProperties( {
					1: this._matrixNrType,
					2: this._matrixNrType,
					3: this._matrixNrType,
					4: UINT8
				} );

				ctr.extra = this.parseUserAttributes();

				return ctr;

			},

			parseMeshInstance: function ( len ) {

				var name,
						mesh, geometries, meshLen, meshes,
						par_id, data_id,
						mtx,
						materials, mat, mat_id,
						num_materials,
						materials_parsed,
						parent,
						i;

				par_id        = this.readU32();
				mtx           = this.parseMatrix4();
				name          = this.readUTF();
				data_id       = this.readU32();
				num_materials = this.readU16();

				geometries = this.getBlock( data_id );

				materials = [];
				materials_parsed = 0;

				for ( i = 0; i < num_materials; i ++ ) {

					mat_id = this.readU32();
					mat = this.getBlock( mat_id );
					materials.push( mat );

				}

				meshLen = geometries.length;
				meshes = [];

				// TODO : BufferGeometry don't support "geometryGroups" for now.
				// so we create sub meshes for each groups
				if ( meshLen  > 1 ) {

					mesh = new THREE.Object3D();
					for ( i = 0; i < meshLen; i ++ ) {

						var sm = new THREE.Mesh( geometries[ i ] );
						meshes.push( sm );
						mesh.add( sm );

					}

				} else {

					mesh = new THREE.Mesh( geometries[ 0 ] );
					meshes.push( mesh );

				}

				mesh.applyMatrix( mtx );
				mesh.name = name;


				parent = this.getBlock( par_id ) || this.trunk;
				parent.add( mesh );


				var matLen = materials.length;
				var maxLen = Math.max( meshLen, matLen );
				for ( i = 0; i < maxLen; i ++ )
					meshes[ i % meshLen ].material = materials[ i % matLen ];


				// Ignore for now
				this.parseProperties( null );
				mesh.extra = this.parseUserAttributes();

				return mesh;

			},

			parseMaterial: function ( len ) {

				var name,
						type,
						props,
						mat,
						attributes,
						finalize,
						num_methods,
						methods_parsed;

				name        = this.readUTF();
				type        = this.readU8();
				num_methods = this.readU8();

				//log( "AWDLoader parseMaterial ",name )

				// Read material numerical properties
				// (1=color, 2=bitmap url, 11=alpha_blending, 12=alpha_threshold, 13=repeat)
				props = this.parseProperties( {
					1:  AWD_FIELD_INT32,
					2:  AWD_FIELD_BADDR,
					11: AWD_FIELD_BOOL,
					12: AWD_FIELD_FLOAT32,
					13: AWD_FIELD_BOOL
				} );

				methods_parsed = 0;

				while ( methods_parsed < num_methods ) {

					var method_type = this.readU16();
					this.parseProperties( null );
					this.parseUserAttributes();

				}

				attributes = this.parseUserAttributes();

				if ( this.materialFactory !== undefined ) {

					mat = this.materialFactory( name );
					if ( mat ) return mat;

				}

				mat = new THREE.MeshPhongMaterial();

				if ( type === 1 ) {

					// Color material
					mat.color.setHex( props.get( 1, 0xcccccc ) );

				} else if ( type === 2 ) {

					// Bitmap material
					var tex_addr = props.get( 2, 0 );
					mat.map = this.getBlock( tex_addr );

				}

				mat.extra = attributes;
				mat.alphaThreshold = props.get( 12, 0.0 );
				mat.repeat = props.get( 13, false );


				return mat;

			},

			parseTexture: function( len ) {

				var name = this.readUTF(),
						type = this.readU8(),
						asset,
						data_len;

				// External
				if ( type === 0 ) {

					data_len = this.readU32();
					var url = this.readUTFBytes( data_len );
					console.log( url );

					asset = this.loadTexture( url );

				} else {
					// embed texture not supported
				}
				// Ignore for now
				this.parseProperties( null );

				this.parseUserAttributes();
				return asset;

			},

			loadTexture: function( url ) {

				var tex = new THREE.Texture();

				var loader = new THREE.ImageLoader( this.manager );

				loader.load( this._baseDir + url, function( image ) {

					tex.image = image;
					tex.needsUpdate = true;

				} );

				return tex;

			},

			parseSkeleton: function( len ) {

				// Array<Bone>
				var name          = this.readUTF(),
						num_joints    = this.readU16(),
						skeleton      = [],
						joints_parsed = 0;

				this.parseProperties( null );

				while ( joints_parsed < num_joints ) {

					var joint, ibp;

					// Ignore joint id
					this.readU16();

					joint = new THREE.Bone();
					joint.parent = this.readU16() - 1; // 0=null in AWD
					joint.name = this.readUTF();

					ibp = this.parseMatrix4();
					joint.skinMatrix = ibp;

					// Ignore joint props/attributes for now
					this.parseProperties( null );
					this.parseUserAttributes();

					skeleton.push( joint );
					joints_parsed ++;

				}

				// Discard attributes for now
				this.parseUserAttributes();


				return skeleton;

			},

			parseSkeletonPose: function( blockID ) {

				var name = this.readUTF();

				var num_joints = this.readU16();
				this.parseProperties( null );

				// debug( 'parse Skeleton Pose. joints : ' + num_joints);

				var pose = [];

				var joints_parsed = 0;

				while ( joints_parsed < num_joints ) {

					var joint_pose;

					var has_transform; //:uint;
					var mtx_data;

					has_transform = this.readU8();

					if ( has_transform === 1 ) {

						mtx_data = this.parseMatrix4();

					} else {

						mtx_data = new THREE.Matrix4();

					}
					pose[ joints_parsed ] = mtx_data;
					joints_parsed ++;

				}

				// Skip attributes for now
				this.parseUserAttributes();

				return pose;

			},

			parseSkeletonAnimation: function( blockID ) {

				var frame_dur;
				var pose_addr;
				var pose;

				var name = this.readUTF();

				var clip = [];

				var num_frames = this.readU16();
				this.parseProperties( null );

				var frames_parsed = 0;
				var returnedArray;

				// debug( 'parse Skeleton Animation. frames : ' + num_frames);

				while ( frames_parsed < num_frames ) {

					pose_addr = this.readU32();
					frame_dur = this.readU16();

					pose = this._blocks[ pose_addr ].data;
					// debug( 'pose address ',pose[2].elements[12],pose[2].elements[13],pose[2].elements[14] );
					clip.push( {
						pose : pose,
						duration : frame_dur
					} );

					frames_parsed ++;

				}

				if ( clip.length === 0 ) {

					// debug("Could not this SkeletonClipNode, because no Frames where set.");
					return;

				}
				// Ignore attributes for now
				this.parseUserAttributes();
				return clip;

			},

			parseVertexAnimationSet: function( len ) {

				var poseBlockAdress,
						name           = this.readUTF(),
						num_frames     = this.readU16(),
						props          = this.parseProperties( { 1: UINT16 } ),
						frames_parsed  = 0,
						skeletonFrames = [];

				while ( frames_parsed < num_frames ) {

					poseBlockAdress = this.readU32();
					skeletonFrames.push( this._blocks[ poseBlockAdress ].data );
					frames_parsed ++;

				}

				this.parseUserAttributes();


				return skeletonFrames;

			},

			parseAnimatorSet: function( len ) {

				var targetMesh;

				var animSetBlockAdress; //:int

				var targetAnimationSet; //:AnimationSetBase;
				var outputString = ""; //:String = "";
				var name = this.readUTF();
				var type = this.readU16();

				var props = this.parseProperties( { 1: BADDR } );

				animSetBlockAdress = this.readU32();
				var targetMeshLength = this.readU16();

				var meshAdresses = []; //:Vector.<uint> = new Vector.<uint>;

				for ( var i = 0; i < targetMeshLength; i ++ )
					meshAdresses.push( this.readU32() );

				var activeState = this.readU16();
				var autoplay = Boolean( this.readU8() );
				this.parseUserAttributes();
				this.parseUserAttributes();

				var returnedArray;
				var targetMeshes = []; //:Vector.<Mesh> = new Vector.<Mesh>;

				for ( i = 0; i < meshAdresses.length; i ++ ) {

					//      returnedArray = getAssetByID(meshAdresses[i], [AssetType.MESH]);
					//      if (returnedArray[0])
					targetMeshes.push( this._blocks[ meshAdresses[ i ]].data );

				}

				targetAnimationSet = this._blocks[ animSetBlockAdress ].data;
				var thisAnimator;

				if ( type == 1 ) {


					thisAnimator = {
						animationSet : targetAnimationSet,
						skeleton : this._blocks[ props.get( 1, 0 ) ].data
					};

				} else if ( type == 2 ) {
					// debug( "vertex Anim???");
				}


				for ( i = 0; i < targetMeshes.length; i ++ ) {

					targetMeshes[ i ].animator = thisAnimator;

				}
				// debug("Parsed a Animator: Name = " + name);

				return thisAnimator;

			},

			parseMeshData: function ( len ) {

				var name      = this.readUTF(),
					num_subs  = this.readU16(),
					geom,
					subs_parsed = 0,
					props,
					buffer,
					skinW, skinI,
					geometries = [];

				props = this.parseProperties( {
					1: this._geoNrType,
					2: this._geoNrType
				} );

				// Loop through sub meshes
				while ( subs_parsed < num_subs ) {

					var sm_len, sm_end, attrib;

					geom = new THREE.BufferGeometry();
					geom.name = name;
					geometries.push( geom );


					sm_len = this.readU32();
					sm_end = this._ptr + sm_len;


					// Ignore for now
					this.parseProperties( { 1: this._geoNrType, 2: this._geoNrType } );

					// Loop through data streams
					while ( this._ptr < sm_end ) {

						var idx = 0,
								str_type  = this.readU8(),
								str_ftype = this.readU8(),
								str_len   = this.readU32(),
								str_end   = str_len + this._ptr;

						// VERTICES
						// ------------------
						if ( str_type === 1 ) {

							buffer = new Float32Array( ( str_len / 12 ) * 3 );
							attrib = new THREE.BufferAttribute( buffer, 3 );

							geom.addAttribute( 'position', attrib );
							idx = 0;

							while ( this._ptr < str_end ) {

								buffer[ idx ]   = - this.readF32();
								buffer[ idx + 1 ] = this.readF32();
								buffer[ idx + 2 ] = this.readF32();
								idx += 3;

							}

						}

						// INDICES
						// -----------------
						else if ( str_type === 2 ) {

							buffer = new Uint16Array( str_len / 2 );
							attrib = new THREE.BufferAttribute( buffer, 1 );
							geom.setIndex( attrib );

							idx = 0;

							while ( this._ptr < str_end ) {

								buffer[ idx + 1 ]   = this.readU16();
								buffer[ idx ]     = this.readU16();
								buffer[ idx + 2 ]   = this.readU16();
								idx += 3;

							}

						}

						// UVS
						// -------------------
						else if ( str_type === 3 ) {

							buffer = new Float32Array( ( str_len / 8 ) * 2 );
							attrib = new THREE.BufferAttribute( buffer, 2 );

							geom.addAttribute( 'uv', attrib );
							idx = 0;

							while ( this._ptr < str_end ) {

								buffer[ idx ]   = this.readF32();
								buffer[ idx + 1 ] = 1.0 - this.readF32();
								idx += 2;

							}

						}

						// NORMALS
						else if ( str_type === 4 ) {

							buffer = new Float32Array( ( str_len / 12 ) * 3 );
							attrib = new THREE.BufferAttribute( buffer, 3 );
							geom.addAttribute( 'normal', attrib );
							idx = 0;

							while ( this._ptr < str_end ) {

								buffer[ idx ]   = - this.readF32();
								buffer[ idx + 1 ] = this.readF32();
								buffer[ idx + 2 ] = this.readF32();
								idx += 3;

							}

						}

						// else if (str_type == 6) {
						//   skinI = new Float32Array( str_len>>1 );
						//   idx = 0

						//   while (this._ptr < str_end) {
						//     skinI[idx]   = this.readU16();
						//     idx++;
						//   }

						// }
						// else if (str_type == 7) {
						//   skinW = new Float32Array( str_len>>2 );
						//   idx = 0;

						//   while (this._ptr < str_end) {
						//     skinW[idx]   = this.readF32();
						//     idx++;
						//   }
						// }
						else {

							this._ptr = str_end;

						}

					}

					this.parseUserAttributes();

					geom.computeBoundingSphere();
					subs_parsed ++;

				}

				//geom.computeFaceNormals();

				this.parseUserAttributes();
				//finalizeAsset(geom, name);

				return geometries;

			},

			parseMeshPoseAnimation: function( len, poseOnly ) {

				var num_frames = 1,
						num_submeshes,
						frames_parsed,
						subMeshParsed,
						frame_dur,
						x, y, z,

						str_len,
						str_end,
						geom,
						subGeom,
						idx = 0,
						clip = {},
						indices,
						verts,
						num_Streams,
						streamsParsed,
						streamtypes = [],

						props,
						thisGeo,
						name = this.readUTF(),
						geoAdress = this.readU32();

				var mesh = this.getBlock( geoAdress );

				if ( mesh === null ) {

					console.log( "parseMeshPoseAnimation target mesh not found at:", geoAdress );
					return;

				}

				geom = mesh.geometry;
				geom.morphTargets = [];

				if ( ! poseOnly )
					num_frames = this.readU16();

				num_submeshes = this.readU16();
				num_Streams = this.readU16();

				// debug("VA num_frames : ", num_frames );
				// debug("VA num_submeshes : ", num_submeshes );
				// debug("VA numstreams : ", num_Streams );

				streamsParsed = 0;
				while ( streamsParsed < num_Streams ) {

					streamtypes.push( this.readU16() );
					streamsParsed ++;

				}
				props = this.parseProperties( { 1: BOOL, 2: BOOL } );

				clip.looping = props.get( 1, true );
				clip.stitchFinalFrame = props.get( 2, false );

				frames_parsed = 0;

				while ( frames_parsed < num_frames ) {

					frame_dur = this.readU16();
					subMeshParsed = 0;

					while ( subMeshParsed < num_submeshes ) {

						streamsParsed = 0;
						str_len = this.readU32();
						str_end = this._ptr + str_len;

						while ( streamsParsed < num_Streams ) {

							if ( streamtypes[ streamsParsed ] === 1 ) {

								//geom.addAttribute( 'morphTarget'+frames_parsed, Float32Array, str_len/12, 3 );
								var buffer = new Float32Array( str_len / 4 );
								geom.morphTargets.push( {
									array : buffer
								} );

								//buffer = geom.attributes['morphTarget'+frames_parsed].array
								idx = 0;

								while ( this._ptr < str_end ) {

									buffer[ idx ]     = this.readF32();
									buffer[ idx + 1 ]   = this.readF32();
									buffer[ idx + 2 ]   = this.readF32();
									idx += 3;

								}


								subMeshParsed ++;

							} else
								this._ptr = str_end;
							streamsParsed ++;

						}

					}


					frames_parsed ++;

				}

				this.parseUserAttributes();

				return null;

			},

			getBlock: function ( id ) {

				return this._blocks[ id ].data;

			},

			parseMatrix4: function () {

				var mtx = new THREE.Matrix4();
				var e = mtx.elements;

				e[ 0 ] = this.readF32();
				e[ 1 ] = this.readF32();
				e[ 2 ] = this.readF32();
				e[ 3 ] = 0.0;
				//e[3] = 0.0;

				e[ 4 ] = this.readF32();
				e[ 5 ] = this.readF32();
				e[ 6 ] = this.readF32();
				//e[7] = this.readF32();
				e[ 7 ] = 0.0;

				e[ 8 ] = this.readF32();
				e[ 9 ] = this.readF32();
				e[ 10 ] = this.readF32();
				//e[11] = this.readF32();
				e[ 11 ] = 0.0;

				e[ 12 ] = - this.readF32();
				e[ 13 ] = this.readF32();
				e[ 14 ] = this.readF32();
				//e[15] = this.readF32();
				e[ 15 ] = 1.0;
				return mtx;

			},

			parseProperties: function ( expected ) {

				var list_len = this.readU32();
				var list_end = this._ptr + list_len;

				var props = new AWDProperties();

				if ( expected ) {

					while ( this._ptr < list_end ) {

						var key = this.readU16();
						var len = this.readU32();
						var type;

						if ( expected.hasOwnProperty( key ) ) {

							type = expected[ key ];
							props.set( key, this.parseAttrValue( type, len ) );

						} else {

							this._ptr += len;

						}

					}

				}

				return props;

			},

			parseUserAttributes: function () {

				// skip for now
				this._ptr = this.readU32() + this._ptr;
				return null;

			},

			parseAttrValue: function ( type, len ) {

				var elem_len;
				var read_func;

				switch ( type ) {
					case AWD_FIELD_INT8:
						elem_len = 1;
						read_func = this.readI8;
						break;
					case AWD_FIELD_INT16:
						elem_len = 2;
						read_func = this.readI16;
						break;
					case AWD_FIELD_INT32:
						elem_len = 4;
						read_func = this.readI32;
						break;
					case AWD_FIELD_BOOL:
					case AWD_FIELD_UINT8:
						elem_len = 1;
						read_func = this.readU8;
						break;
					case AWD_FIELD_UINT16:
						elem_len = 2;
						read_func = this.readU16;
						break;
					case AWD_FIELD_UINT32:
					case AWD_FIELD_BADDR:
						elem_len = 4;
						read_func = this.readU32;
						break;
					case AWD_FIELD_FLOAT32:
						elem_len = 4;
						read_func = this.readF32;
						break;
					case AWD_FIELD_FLOAT64:
						elem_len = 8;
						read_func = this.readF64;
						break;
					case AWD_FIELD_VECTOR2x1:
					case AWD_FIELD_VECTOR3x1:
					case AWD_FIELD_VECTOR4x1:
					case AWD_FIELD_MTX3x2:
					case AWD_FIELD_MTX3x3:
					case AWD_FIELD_MTX4x3:
					case AWD_FIELD_MTX4x4:
						elem_len = 8;
						read_func = this.readF64;
						break;
				}

				if ( elem_len < len ) {

					var list;
					var num_read;
					var num_elems;

					list = [];
					num_read = 0;
					num_elems = len / elem_len;

					while ( num_read < num_elems ) {

						list.push( read_func.call( this ) );
						num_read ++;

					}

					return list;

				} else {

					return read_func.call( this );

				}

			},

			readU8: function () {

				return this._data.getUint8( this._ptr ++ );

			},
			readI8: function () {

				return this._data.getInt8( this._ptr ++ );

			},
			readU16: function () {

				var a = this._data.getUint16( this._ptr, littleEndian );
				this._ptr += 2;
				return a;

			},
			readI16: function () {

				var a = this._data.getInt16( this._ptr, littleEndian );
				this._ptr += 2;
				return a;

			},
			readU32: function () {

				var a = this._data.getUint32( this._ptr, littleEndian );
				this._ptr += 4;
				return a;

			},
			readI32: function () {

				var a = this._data.getInt32( this._ptr, littleEndian );
				this._ptr += 4;
				return a;

			},
			readF32: function () {

				var a = this._data.getFloat32( this._ptr, littleEndian );
				this._ptr += 4;
				return a;

			},
			readF64: function () {

				var a = this._data.getFloat64( this._ptr, littleEndian );
				this._ptr += 8;
				return a;

			},

			/**
		 * Converts a UTF-8 byte array to JavaScript's 16-bit Unicode.
		 * @param {Array.<number>} bytes UTF-8 byte array.
		 * @return {string} 16-bit Unicode string.
		 */
			readUTF: function () {

				var len = this.readU16();
				return this.readUTFBytes( len );

			},

			/**
			 * Converts a UTF-8 byte array to JavaScript's 16-bit Unicode.
			 * @param {Array.<number>} bytes UTF-8 byte array.
			 * @return {string} 16-bit Unicode string.
			 */
			readUTFBytes: function ( len ) {

				// TODO(user): Use native implementations if/when available
				var out = [], c = 0;

				while ( out.length < len ) {

					var c1 = this._data.getUint8( this._ptr ++, littleEndian );
					if ( c1 < 128 ) {

						out[ c ++ ] = String.fromCharCode( c1 );

					} else if ( c1 > 191 && c1 < 224 ) {

						var c2 = this._data.getUint8( this._ptr ++, littleEndian );
						out[ c ++ ] = String.fromCharCode( ( c1 & 31 ) << 6 | c2 & 63 );

					} else {

						var c2 = this._data.getUint8( this._ptr ++, littleEndian );
						var c3 = this._data.getUint8( this._ptr ++, littleEndian );
						out[ c ++ ] = String.fromCharCode(
								( c1 & 15 ) << 12 | ( c2 & 63 ) << 6 | c3 & 63
						);

					}

				}
				return out.join( '' );

			}

		};

	} )();


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author mrdoob / http://mrdoob.com/
	 */
	var THREE = __webpack_require__(1);

	THREE.BabylonLoader = function ( manager ) {

		this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

	};

	THREE.BabylonLoader.prototype = {

		constructor: THREE.ObjectLoader,

		load: function ( url, onLoad, onProgress, onError ) {

			var scope = this;

			var loader = new THREE.XHRLoader( scope.manager );
			loader.setCrossOrigin( this.crossOrigin );
			loader.load( url, function ( text ) {

				onLoad( scope.parse( JSON.parse( text ) ) );

			}, onProgress, onError );

		},

		setCrossOrigin: function ( value ) {

			this.crossOrigin = value;

		},

		parse: function ( json ) {

			var materials = this.parseMaterials( json );
			var scene = this.parseObjects( json, materials );

			return scene;

		},

		parseMaterials: function ( json ) {

			var materials = {};

			for ( var i = 0, l = json.materials.length; i < l; i ++ ) {

				var data = json.materials[ i ];

				var material = new THREE.MeshPhongMaterial();
				material.name = data.name;
				material.color.fromArray( data.diffuse );
				material.emissive.fromArray( data.emissive );
				material.specular.fromArray( data.specular );
				material.shininess = data.specularPower;
				material.opacity = data.alpha;

				materials[ data.id ] = material;

			}

			if ( json.multiMaterials ) {

				for ( var i = 0, l = json.multiMaterials.length; i < l; i ++ ) {

					var data = json.multiMaterials[ i ];

					console.warn( 'THREE.BabylonLoader: Multi materials not yet supported.' );

					materials[ data.id ] = new THREE.MeshPhongMaterial();

				}

			}

			return materials;

		},

		parseGeometry: function ( json ) {

			var geometry = new THREE.BufferGeometry();

			// indices

			var indices = new Uint16Array( json.indices );

			geometry.setIndex( new THREE.BufferAttribute( indices, 1 ) );

			// positions

			var positions = new Float32Array( json.positions );

			for ( var j = 2, jl = positions.length; j < jl; j += 3 ) {

				positions[ j ] = - positions[ j ];

			}

			geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );

			// normals

			if ( json.normals ) {

				var normals = new Float32Array( json.normals );

				for ( var j = 2, jl = normals.length; j < jl; j += 3 ) {

					normals[ j ] = - normals[ j ];

				}

				geometry.addAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );

			}

			// uvs

			if ( json.uvs ) {

				var uvs = new Float32Array( json.uvs );

				geometry.addAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );

			}

			// offsets

			var subMeshes = json.subMeshes;

			if ( subMeshes ) {

				for ( var j = 0, jl = subMeshes.length; j < jl; j ++ ) {

					var subMesh = subMeshes[ j ];

					geometry.addGroup( subMesh.indexStart, subMesh.indexCount );

				}

			}

			return geometry;

		},

		parseObjects: function ( json, materials ) {

			var objects = {};
			var scene = new THREE.Scene();

			var cameras = json.cameras;

			for ( var i = 0, l = cameras.length; i < l; i ++ ) {

				var data = cameras[ i ];

				var camera = new THREE.PerspectiveCamera( ( data.fov / Math.PI ) * 180, 1.33, data.minZ, data.maxZ );

				camera.name = data.name;
				camera.position.fromArray( data.position );
				if ( data.rotation ) camera.rotation.fromArray( data.rotation );

				objects[ data.id ] = camera;

			}

			var lights = json.lights;

			for ( var i = 0, l = lights.length; i < l; i ++ ) {

				var data = lights[ i ];

				var light;

				switch ( data.type ) {

					case 0:
						light = new THREE.PointLight();
						break;

					case 1:
						light = new THREE.DirectionalLight();
						break;

					case 2:
						light = new THREE.SpotLight();
						break;

					case 3:
						light = new THREE.HemisphereLight();
						break;
				}

				light.name = data.name;
				if ( data.position ) light.position.set( data.position[ 0 ], data.position[ 1 ], - data.position[ 2 ] );
				light.color.fromArray( data.diffuse );
				if ( data.groundColor ) light.groundColor.fromArray( data.groundColor );
				if ( data.intensity ) light.intensity = data.intensity;

				objects[ data.id ] = light;

				scene.add( light );

			}

			var meshes = json.meshes;

			for ( var i = 0, l = meshes.length; i < l; i ++ ) {

				var data = meshes[ i ];

				var object;

				if ( data.indices ) {

					var geometry = this.parseGeometry( data );

					object = new THREE.Mesh( geometry, materials[ data.materialId ] );

				} else {

					object = new THREE.Group();

				}

				object.name = data.name;
				object.position.set( data.position[ 0 ], data.position[ 1 ], - data.position[ 2 ] );
				object.rotation.fromArray( data.rotation );
				if ( data.rotationQuaternion ) object.quaternion.fromArray( data.rotationQuaternion );
				object.scale.fromArray( data.scaling );
				// object.visible = data.isVisible;

				if ( data.parentId ) {

					objects[ data.parentId ].add( object );

				} else {

					scene.add( object );

				}

				objects[ data.id ] = object;

			}

			return scene;

		}

	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author alteredq / http://alteredqualia.com/
	 */
	var THREE = __webpack_require__(1);

	THREE.BinaryLoader = function ( manager ) {

		if ( typeof manager === 'boolean' ) {

			console.warn( 'THREE.BinaryLoader: showStatus parameter has been removed from constructor.' );
			manager = undefined;

		}

		this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

	};

	THREE.BinaryLoader.prototype = {

		constructor: THREE.BinaryLoader,

		// Deprecated
		
		get statusDomElement () {

			if ( this._statusDomElement === undefined ) {

				this._statusDomElement = document.createElement( 'div' );

			}

			console.warn( 'THREE.BinaryLoader: .statusDomElement has been removed.' );
			return this._statusDomElement;

		},

		// Load models generated by slim OBJ converter with BINARY option (converter_obj_three_slim.py -t binary)
		//  - binary models consist of two files: JS and BIN
		//  - parameters
		//		- url (required)
		//		- callback (required)
		//		- texturePath (optional: if not specified, textures will be assumed to be in the same folder as JS model file)
		//		- binaryPath (optional: if not specified, binary file will be assumed to be in the same folder as JS model file)
		load: function ( url, onLoad, onProgress, onError ) {

			// todo: unify load API to for easier SceneLoader use

			var texturePath = this.texturePath || THREE.Loader.prototype.extractUrlBase( url );
			var binaryPath  = this.binaryPath || THREE.Loader.prototype.extractUrlBase( url );

			// #1 load JS part via web worker

			var scope = this;

			var jsonloader = new THREE.XHRLoader( this.manager );
			jsonloader.setCrossOrigin( this.crossOrigin );
			jsonloader.load( url, function ( data ) {

				var json = JSON.parse( data );

				var bufferUrl = binaryPath + json.buffers;

				var bufferLoader = new THREE.XHRLoader( scope.manager );
				bufferLoader.setCrossOrigin( scope.crossOrigin );
				bufferLoader.setResponseType( 'arraybuffer' );
				bufferLoader.load( bufferUrl, function ( bufData ) {

					// IEWEBGL needs this ???
					//buffer = ( new Uint8Array( xhr.responseBody ) ).buffer;

					//// iOS and other XMLHttpRequest level 1 ???

					scope.parse( bufData, onLoad, texturePath, json.materials );

				}, onProgress, onError );

			}, onProgress, onError );

		},

		setBinaryPath: function ( value ) {

			this.binaryPath = value;

		},

		setCrossOrigin: function ( value ) {

			this.crossOrigin = value;

		},

		setTexturePath: function ( value ) {

			this.texturePath = value;

		},

		parse: function ( data, callback, texturePath, jsonMaterials ) {

			var Model = function ( texturePath ) {

				var scope = this,
					currentOffset = 0,
					md,
					normals = [],
					uvs = [],
					start_tri_flat, start_tri_smooth, start_tri_flat_uv, start_tri_smooth_uv,
					start_quad_flat, start_quad_smooth, start_quad_flat_uv, start_quad_smooth_uv,
					tri_size, quad_size,
					len_tri_flat, len_tri_smooth, len_tri_flat_uv, len_tri_smooth_uv,
					len_quad_flat, len_quad_smooth, len_quad_flat_uv, len_quad_smooth_uv;


				THREE.Geometry.call( this );

				md = parseMetaData( data, currentOffset );

				currentOffset += md.header_bytes;
				/*
						md.vertex_index_bytes = Uint32Array.BYTES_PER_ELEMENT;
						md.material_index_bytes = Uint16Array.BYTES_PER_ELEMENT;
						md.normal_index_bytes = Uint32Array.BYTES_PER_ELEMENT;
						md.uv_index_bytes = Uint32Array.BYTES_PER_ELEMENT;
				*/
				// buffers sizes

				tri_size =  md.vertex_index_bytes * 3 + md.material_index_bytes;
				quad_size = md.vertex_index_bytes * 4 + md.material_index_bytes;

				len_tri_flat      = md.ntri_flat      * ( tri_size );
				len_tri_smooth    = md.ntri_smooth    * ( tri_size + md.normal_index_bytes * 3 );
				len_tri_flat_uv   = md.ntri_flat_uv   * ( tri_size + md.uv_index_bytes * 3 );
				len_tri_smooth_uv = md.ntri_smooth_uv * ( tri_size + md.normal_index_bytes * 3 + md.uv_index_bytes * 3 );

				len_quad_flat      = md.nquad_flat      * ( quad_size );
				len_quad_smooth    = md.nquad_smooth    * ( quad_size + md.normal_index_bytes * 4 );
				len_quad_flat_uv   = md.nquad_flat_uv   * ( quad_size + md.uv_index_bytes * 4 );
				len_quad_smooth_uv = md.nquad_smooth_uv * ( quad_size + md.normal_index_bytes * 4 + md.uv_index_bytes * 4 );

				// read buffers

				currentOffset += init_vertices( currentOffset );

				currentOffset += init_normals( currentOffset );
				currentOffset += handlePadding( md.nnormals * 3 );

				currentOffset += init_uvs( currentOffset );

				start_tri_flat 		= currentOffset;
				start_tri_smooth    = start_tri_flat    + len_tri_flat    + handlePadding( md.ntri_flat * 2 );
				start_tri_flat_uv   = start_tri_smooth  + len_tri_smooth  + handlePadding( md.ntri_smooth * 2 );
				start_tri_smooth_uv = start_tri_flat_uv + len_tri_flat_uv + handlePadding( md.ntri_flat_uv * 2 );

				start_quad_flat     = start_tri_smooth_uv + len_tri_smooth_uv  + handlePadding( md.ntri_smooth_uv * 2 );
				start_quad_smooth   = start_quad_flat     + len_quad_flat	   + handlePadding( md.nquad_flat * 2 );
				start_quad_flat_uv  = start_quad_smooth   + len_quad_smooth    + handlePadding( md.nquad_smooth * 2 );
				start_quad_smooth_uv = start_quad_flat_uv  + len_quad_flat_uv   + handlePadding( md.nquad_flat_uv * 2 );

				// have to first process faces with uvs
				// so that face and uv indices match

				init_triangles_flat_uv( start_tri_flat_uv );
				init_triangles_smooth_uv( start_tri_smooth_uv );

				init_quads_flat_uv( start_quad_flat_uv );
				init_quads_smooth_uv( start_quad_smooth_uv );

				// now we can process untextured faces

				init_triangles_flat( start_tri_flat );
				init_triangles_smooth( start_tri_smooth );

				init_quads_flat( start_quad_flat );
				init_quads_smooth( start_quad_smooth );

				this.computeFaceNormals();

				function handlePadding( n ) {

					return ( n % 4 ) ? ( 4 - n % 4 ) : 0;

				}

				function parseMetaData( data, offset ) {

					var metaData = {

						'signature'               : parseString( data, offset,  12 ),
						'header_bytes'            : parseUChar8( data, offset + 12 ),

						'vertex_coordinate_bytes' : parseUChar8( data, offset + 13 ),
						'normal_coordinate_bytes' : parseUChar8( data, offset + 14 ),
						'uv_coordinate_bytes'     : parseUChar8( data, offset + 15 ),

						'vertex_index_bytes'      : parseUChar8( data, offset + 16 ),
						'normal_index_bytes'      : parseUChar8( data, offset + 17 ),
						'uv_index_bytes'          : parseUChar8( data, offset + 18 ),
						'material_index_bytes'    : parseUChar8( data, offset + 19 ),

						'nvertices'    : parseUInt32( data, offset + 20 ),
						'nnormals'     : parseUInt32( data, offset + 20 + 4 * 1 ),
						'nuvs'         : parseUInt32( data, offset + 20 + 4 * 2 ),

						'ntri_flat'      : parseUInt32( data, offset + 20 + 4 * 3 ),
						'ntri_smooth'    : parseUInt32( data, offset + 20 + 4 * 4 ),
						'ntri_flat_uv'   : parseUInt32( data, offset + 20 + 4 * 5 ),
						'ntri_smooth_uv' : parseUInt32( data, offset + 20 + 4 * 6 ),

						'nquad_flat'      : parseUInt32( data, offset + 20 + 4 * 7 ),
						'nquad_smooth'    : parseUInt32( data, offset + 20 + 4 * 8 ),
						'nquad_flat_uv'   : parseUInt32( data, offset + 20 + 4 * 9 ),
						'nquad_smooth_uv' : parseUInt32( data, offset + 20 + 4 * 10 )

					};
					/*
								console.log( "signature: " + metaData.signature );

								console.log( "header_bytes: " + metaData.header_bytes );
								console.log( "vertex_coordinate_bytes: " + metaData.vertex_coordinate_bytes );
								console.log( "normal_coordinate_bytes: " + metaData.normal_coordinate_bytes );
								console.log( "uv_coordinate_bytes: " + metaData.uv_coordinate_bytes );

								console.log( "vertex_index_bytes: " + metaData.vertex_index_bytes );
								console.log( "normal_index_bytes: " + metaData.normal_index_bytes );
								console.log( "uv_index_bytes: " + metaData.uv_index_bytes );
								console.log( "material_index_bytes: " + metaData.material_index_bytes );

								console.log( "nvertices: " + metaData.nvertices );
								console.log( "nnormals: " + metaData.nnormals );
								console.log( "nuvs: " + metaData.nuvs );

								console.log( "ntri_flat: " + metaData.ntri_flat );
								console.log( "ntri_smooth: " + metaData.ntri_smooth );
								console.log( "ntri_flat_uv: " + metaData.ntri_flat_uv );
								console.log( "ntri_smooth_uv: " + metaData.ntri_smooth_uv );

								console.log( "nquad_flat: " + metaData.nquad_flat );
								console.log( "nquad_smooth: " + metaData.nquad_smooth );
								console.log( "nquad_flat_uv: " + metaData.nquad_flat_uv );
								console.log( "nquad_smooth_uv: " + metaData.nquad_smooth_uv );

								var total = metaData.header_bytes
										  + metaData.nvertices * metaData.vertex_coordinate_bytes * 3
										  + metaData.nnormals * metaData.normal_coordinate_bytes * 3
										  + metaData.nuvs * metaData.uv_coordinate_bytes * 2
										  + metaData.ntri_flat * ( metaData.vertex_index_bytes*3 + metaData.material_index_bytes )
										  + metaData.ntri_smooth * ( metaData.vertex_index_bytes*3 + metaData.material_index_bytes + metaData.normal_index_bytes*3 )
										  + metaData.ntri_flat_uv * ( metaData.vertex_index_bytes*3 + metaData.material_index_bytes + metaData.uv_index_bytes*3 )
										  + metaData.ntri_smooth_uv * ( metaData.vertex_index_bytes*3 + metaData.material_index_bytes + metaData.normal_index_bytes*3 + metaData.uv_index_bytes*3 )
										  + metaData.nquad_flat * ( metaData.vertex_index_bytes*4 + metaData.material_index_bytes )
										  + metaData.nquad_smooth * ( metaData.vertex_index_bytes*4 + metaData.material_index_bytes + metaData.normal_index_bytes*4 )
										  + metaData.nquad_flat_uv * ( metaData.vertex_index_bytes*4 + metaData.material_index_bytes + metaData.uv_index_bytes*4 )
										  + metaData.nquad_smooth_uv * ( metaData.vertex_index_bytes*4 + metaData.material_index_bytes + metaData.normal_index_bytes*4 + metaData.uv_index_bytes*4 );
								console.log( "total bytes: " + total );
					*/

					return metaData;

				}

				function parseString( data, offset, length ) {

					var charArray = new Uint8Array( data, offset, length );

					var text = "";

					for ( var i = 0; i < length; i ++ ) {

						text += String.fromCharCode( charArray[ offset + i ] );

					}

					return text;

				}

				function parseUChar8( data, offset ) {

					var charArray = new Uint8Array( data, offset, 1 );

					return charArray[ 0 ];

				}

				function parseUInt32( data, offset ) {

					var intArray = new Uint32Array( data, offset, 1 );

					return intArray[ 0 ];

				}

				function init_vertices( start ) {

					var nElements = md.nvertices;

					var coordArray = new Float32Array( data, start, nElements * 3 );

					var i, x, y, z;

					for ( i = 0; i < nElements; i ++ ) {

						x = coordArray[ i * 3 ];
						y = coordArray[ i * 3 + 1 ];
						z = coordArray[ i * 3 + 2 ];

						scope.vertices.push( new THREE.Vector3( x, y, z ) );

					}

					return nElements * 3 * Float32Array.BYTES_PER_ELEMENT;

				}

				function init_normals( start ) {

					var nElements = md.nnormals;

					if ( nElements ) {

						var normalArray = new Int8Array( data, start, nElements * 3 );

						var i, x, y, z;

						for ( i = 0; i < nElements; i ++ ) {

							x = normalArray[ i * 3 ];
							y = normalArray[ i * 3 + 1 ];
							z = normalArray[ i * 3 + 2 ];

							normals.push( x / 127, y / 127, z / 127 );

						}

					}

					return nElements * 3 * Int8Array.BYTES_PER_ELEMENT;

				}

				function init_uvs( start ) {

					var nElements = md.nuvs;

					if ( nElements ) {

						var uvArray = new Float32Array( data, start, nElements * 2 );

						var i, u, v;

						for ( i = 0; i < nElements; i ++ ) {

							u = uvArray[ i * 2 ];
							v = uvArray[ i * 2 + 1 ];

							uvs.push( u, v );

						}

					}

					return nElements * 2 * Float32Array.BYTES_PER_ELEMENT;

				}

				function init_uvs3( nElements, offset ) {

					var i, uva, uvb, uvc, u1, u2, u3, v1, v2, v3;

					var uvIndexBuffer = new Uint32Array( data, offset, 3 * nElements );

					for ( i = 0; i < nElements; i ++ ) {

						uva = uvIndexBuffer[ i * 3 ];
						uvb = uvIndexBuffer[ i * 3 + 1 ];
						uvc = uvIndexBuffer[ i * 3 + 2 ];

						u1 = uvs[ uva * 2 ];
						v1 = uvs[ uva * 2 + 1 ];

						u2 = uvs[ uvb * 2 ];
						v2 = uvs[ uvb * 2 + 1 ];

						u3 = uvs[ uvc * 2 ];
						v3 = uvs[ uvc * 2 + 1 ];

						scope.faceVertexUvs[ 0 ].push( [
							new THREE.Vector2( u1, v1 ),
							new THREE.Vector2( u2, v2 ),
							new THREE.Vector2( u3, v3 )
						] );

					}

				}

				function init_uvs4( nElements, offset ) {

					var i, uva, uvb, uvc, uvd, u1, u2, u3, u4, v1, v2, v3, v4;

					var uvIndexBuffer = new Uint32Array( data, offset, 4 * nElements );

					for ( i = 0; i < nElements; i ++ ) {

						uva = uvIndexBuffer[ i * 4 ];
						uvb = uvIndexBuffer[ i * 4 + 1 ];
						uvc = uvIndexBuffer[ i * 4 + 2 ];
						uvd = uvIndexBuffer[ i * 4 + 3 ];

						u1 = uvs[ uva * 2 ];
						v1 = uvs[ uva * 2 + 1 ];

						u2 = uvs[ uvb * 2 ];
						v2 = uvs[ uvb * 2 + 1 ];

						u3 = uvs[ uvc * 2 ];
						v3 = uvs[ uvc * 2 + 1 ];

						u4 = uvs[ uvd * 2 ];
						v4 = uvs[ uvd * 2 + 1 ];

						scope.faceVertexUvs[ 0 ].push( [
							new THREE.Vector2( u1, v1 ),
							new THREE.Vector2( u2, v2 ),
							new THREE.Vector2( u4, v4 )
						] );

						scope.faceVertexUvs[ 0 ].push( [
							new THREE.Vector2( u2, v2 ),
							new THREE.Vector2( u3, v3 ),
							new THREE.Vector2( u4, v4 )
						] );

					}

				}

				function init_faces3_flat( nElements, offsetVertices, offsetMaterials ) {

					var i, a, b, c, m;

					var vertexIndexBuffer = new Uint32Array( data, offsetVertices, 3 * nElements );
					var materialIndexBuffer = new Uint16Array( data, offsetMaterials, nElements );

					for ( i = 0; i < nElements; i ++ ) {

						a = vertexIndexBuffer[ i * 3 ];
						b = vertexIndexBuffer[ i * 3 + 1 ];
						c = vertexIndexBuffer[ i * 3 + 2 ];

						m = materialIndexBuffer[ i ];

						scope.faces.push( new THREE.Face3( a, b, c, null, null, m ) );

					}

				}

				function init_faces4_flat( nElements, offsetVertices, offsetMaterials ) {

					var i, a, b, c, d, m;

					var vertexIndexBuffer = new Uint32Array( data, offsetVertices, 4 * nElements );
					var materialIndexBuffer = new Uint16Array( data, offsetMaterials, nElements );

					for ( i = 0; i < nElements; i ++ ) {

						a = vertexIndexBuffer[ i * 4 ];
						b = vertexIndexBuffer[ i * 4 + 1 ];
						c = vertexIndexBuffer[ i * 4 + 2 ];
						d = vertexIndexBuffer[ i * 4 + 3 ];

						m = materialIndexBuffer[ i ];

						scope.faces.push( new THREE.Face3( a, b, d, null, null, m ) );
						scope.faces.push( new THREE.Face3( b, c, d, null, null, m ) );

					}

				}

				function init_faces3_smooth( nElements, offsetVertices, offsetNormals, offsetMaterials ) {

					var i, a, b, c, m;
					var na, nb, nc;

					var vertexIndexBuffer = new Uint32Array( data, offsetVertices, 3 * nElements );
					var normalIndexBuffer = new Uint32Array( data, offsetNormals, 3 * nElements );
					var materialIndexBuffer = new Uint16Array( data, offsetMaterials, nElements );

					for ( i = 0; i < nElements; i ++ ) {

						a = vertexIndexBuffer[ i * 3 ];
						b = vertexIndexBuffer[ i * 3 + 1 ];
						c = vertexIndexBuffer[ i * 3 + 2 ];

						na = normalIndexBuffer[ i * 3 ];
						nb = normalIndexBuffer[ i * 3 + 1 ];
						nc = normalIndexBuffer[ i * 3 + 2 ];

						m = materialIndexBuffer[ i ];

						var nax = normals[ na * 3 ],
							nay = normals[ na * 3 + 1 ],
							naz = normals[ na * 3 + 2 ],

							nbx = normals[ nb * 3 ],
							nby = normals[ nb * 3 + 1 ],
							nbz = normals[ nb * 3 + 2 ],

							ncx = normals[ nc * 3 ],
							ncy = normals[ nc * 3 + 1 ],
							ncz = normals[ nc * 3 + 2 ];

						scope.faces.push( new THREE.Face3( a, b, c, [
							new THREE.Vector3( nax, nay, naz ),
							new THREE.Vector3( nbx, nby, nbz ),
							new THREE.Vector3( ncx, ncy, ncz )
						], null, m ) );

					}

				}

				function init_faces4_smooth( nElements, offsetVertices, offsetNormals, offsetMaterials ) {

					var i, a, b, c, d, m;
					var na, nb, nc, nd;

					var vertexIndexBuffer = new Uint32Array( data, offsetVertices, 4 * nElements );
					var normalIndexBuffer = new Uint32Array( data, offsetNormals, 4 * nElements );
					var materialIndexBuffer = new Uint16Array( data, offsetMaterials, nElements );

					for ( i = 0; i < nElements; i ++ ) {

						a = vertexIndexBuffer[ i * 4 ];
						b = vertexIndexBuffer[ i * 4 + 1 ];
						c = vertexIndexBuffer[ i * 4 + 2 ];
						d = vertexIndexBuffer[ i * 4 + 3 ];

						na = normalIndexBuffer[ i * 4 ];
						nb = normalIndexBuffer[ i * 4 + 1 ];
						nc = normalIndexBuffer[ i * 4 + 2 ];
						nd = normalIndexBuffer[ i * 4 + 3 ];

						m = materialIndexBuffer[ i ];

						var nax = normals[ na * 3 ],
							nay = normals[ na * 3 + 1 ],
							naz = normals[ na * 3 + 2 ],

							nbx = normals[ nb * 3 ],
							nby = normals[ nb * 3 + 1 ],
							nbz = normals[ nb * 3 + 2 ],

							ncx = normals[ nc * 3 ],
							ncy = normals[ nc * 3 + 1 ],
							ncz = normals[ nc * 3 + 2 ],

							ndx = normals[ nd * 3 ],
							ndy = normals[ nd * 3 + 1 ],
							ndz = normals[ nd * 3 + 2 ];

						scope.faces.push( new THREE.Face3( a, b, d, [
							new THREE.Vector3( nax, nay, naz ),
							new THREE.Vector3( nbx, nby, nbz ),
							new THREE.Vector3( ndx, ndy, ndz )
						], null, m ) );

						scope.faces.push( new THREE.Face3( b, c, d, [
							new THREE.Vector3( nbx, nby, nbz ),
							new THREE.Vector3( ncx, ncy, ncz ),
							new THREE.Vector3( ndx, ndy, ndz )
						], null, m ) );

					}

				}

				function init_triangles_flat( start ) {

					var nElements = md.ntri_flat;

					if ( nElements ) {

						var offsetMaterials = start + nElements * Uint32Array.BYTES_PER_ELEMENT * 3;
						init_faces3_flat( nElements, start, offsetMaterials );

					}

				}

				function init_triangles_flat_uv( start ) {

					var nElements = md.ntri_flat_uv;

					if ( nElements ) {

						var offsetUvs = start + nElements * Uint32Array.BYTES_PER_ELEMENT * 3;
						var offsetMaterials = offsetUvs + nElements * Uint32Array.BYTES_PER_ELEMENT * 3;

						init_faces3_flat( nElements, start, offsetMaterials );
						init_uvs3( nElements, offsetUvs );

					}

				}

				function init_triangles_smooth( start ) {

					var nElements = md.ntri_smooth;

					if ( nElements ) {

						var offsetNormals = start + nElements * Uint32Array.BYTES_PER_ELEMENT * 3;
						var offsetMaterials = offsetNormals + nElements * Uint32Array.BYTES_PER_ELEMENT * 3;

						init_faces3_smooth( nElements, start, offsetNormals, offsetMaterials );

					}

				}

				function init_triangles_smooth_uv( start ) {

					var nElements = md.ntri_smooth_uv;

					if ( nElements ) {

						var offsetNormals = start + nElements * Uint32Array.BYTES_PER_ELEMENT * 3;
						var offsetUvs = offsetNormals + nElements * Uint32Array.BYTES_PER_ELEMENT * 3;
						var offsetMaterials = offsetUvs + nElements * Uint32Array.BYTES_PER_ELEMENT * 3;

						init_faces3_smooth( nElements, start, offsetNormals, offsetMaterials );
						init_uvs3( nElements, offsetUvs );

					}

				}

				function init_quads_flat( start ) {

					var nElements = md.nquad_flat;

					if ( nElements ) {

						var offsetMaterials = start + nElements * Uint32Array.BYTES_PER_ELEMENT * 4;
						init_faces4_flat( nElements, start, offsetMaterials );

					}

				}

				function init_quads_flat_uv( start ) {

					var nElements = md.nquad_flat_uv;

					if ( nElements ) {

						var offsetUvs = start + nElements * Uint32Array.BYTES_PER_ELEMENT * 4;
						var offsetMaterials = offsetUvs + nElements * Uint32Array.BYTES_PER_ELEMENT * 4;

						init_faces4_flat( nElements, start, offsetMaterials );
						init_uvs4( nElements, offsetUvs );

					}

				}

				function init_quads_smooth( start ) {

					var nElements = md.nquad_smooth;

					if ( nElements ) {

						var offsetNormals = start + nElements * Uint32Array.BYTES_PER_ELEMENT * 4;
						var offsetMaterials = offsetNormals + nElements * Uint32Array.BYTES_PER_ELEMENT * 4;

						init_faces4_smooth( nElements, start, offsetNormals, offsetMaterials );

					}

				}

				function init_quads_smooth_uv( start ) {

					var nElements = md.nquad_smooth_uv;

					if ( nElements ) {

						var offsetNormals = start + nElements * Uint32Array.BYTES_PER_ELEMENT * 4;
						var offsetUvs = offsetNormals + nElements * Uint32Array.BYTES_PER_ELEMENT * 4;
						var offsetMaterials = offsetUvs + nElements * Uint32Array.BYTES_PER_ELEMENT * 4;

						init_faces4_smooth( nElements, start, offsetNormals, offsetMaterials );
						init_uvs4( nElements, offsetUvs );

					}

				}

			};

			Model.prototype = Object.create( THREE.Geometry.prototype );
			Model.prototype.constructor = Model;

			var geometry = new Model( texturePath );
			var materials = THREE.Loader.prototype.initMaterials( jsonMaterials, texturePath, this.crossOrigin );

			callback( geometry, materials );

		}

	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* @author Tim Knip / http://www.floorplanner.com/ / tim at floorplanner.com
	* @author Tony Parisi / http://www.tonyparisi.com/
	*/
	var THREE = __webpack_require__(1);


	( function() {

		var COLLADA = null;
		var scene = null;
		var visualScene;
		var kinematicsModel;

		var readyCallbackFunc = null;

		var sources = {};
		var images = {};
		var animations = {};
		var controllers = {};
		var geometries = {};
		var materials = {};
		var effects = {};
		var cameras = {};
		var lights = {};

		var animData;
		var kinematics;
		var visualScenes;
		var kinematicsModels;
		var baseUrl;
		var morphs;
		var skins;

		var flip_uv = true;
		var preferredShading = THREE.SmoothShading;

		var colladaUnit = 1.0;
		var colladaUp = 'Y';
		var upConversion = null;

		var options = {
			// Force Geometry to always be centered at the local origin of the
			// containing Mesh.
			centerGeometry: false,

			// Axis conversion is done for geometries, animations, and controllers.
			// If we ever pull cameras or lights out of the COLLADA file, they'll
			// need extra work.
			convertUpAxis: false,

			subdivideFaces: true,

			upAxis: 'Y',

			// For reflective or refractive materials we'll use this cubemap
			defaultEnvMap: null

		};

		THREE.ColladaLoader = function ( manager ) {

			this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

			/*

			return {

				load: load,
				parse: parse,
				setPreferredShading: setPreferredShading,
				applySkin: applySkin,
				geometries : geometries,
				options: options

			};

			*/

		};

		THREE.ColladaLoader.prototype = {

			constructor: THREE.ColladaLoader,

			options: options, //hack

			load: function ( url, onLoad, onProgress, onError ) {

				var length = 0;

				if ( document.implementation && document.implementation.createDocument ) {

					var scope = this;

					var loader = new THREE.XHRLoader( this.manager );
					loader.setCrossOrigin( this.crossOrigin );
					loader.load( url, function ( text ) {

						var parts = url.split( '/' );
						parts.pop();
						baseUrl = ( parts.length < 1 ? '.' : parts.join( '/' ) ) + '/';

						var xmlParser = new DOMParser();
						var responseXML = xmlParser.parseFromString( text, "application/xml" );
						onLoad( scope.parse( responseXML, url ) );

					}, onProgress, onError );

				} else {

					alert( "Don't know how to parse XML!" );

				}

			},

			setCrossOrigin: function ( value ) {

				this.crossOrigin = value;

			},

			parse: function( doc ) {

				COLLADA = doc;

				this.parseAsset();
				this.setUpConversion();
				images = this.parseLib( "library_images image", _Image, "image" );
				materials = this.parseLib( "library_materials material", Material, "material" );
				effects = this.parseLib( "library_effects effect", Effect, "effect" );
				geometries = this.parseLib( "library_geometries geometry", Geometry, "geometry" );
				cameras = this.parseLib( "library_cameras camera", Camera, "camera" );
				lights = this.parseLib( "library_lights light", Light, "light" );
				controllers = this.parseLib( "library_controllers controller", Controller, "controller" );
				animations = this.parseLib( "library_animations animation", Animation, "animation" );
				visualScenes = this.parseLib( "library_visual_scenes visual_scene", VisualScene, "visual_scene" );
				kinematicsModels = this.parseLib( "library_kinematics_models kinematics_model", KinematicsModel, "kinematics_model" );

				morphs = [];
				skins = [];

				visualScene = this.parseScene();
				scene = new THREE.Group();

				for ( var i = 0; i < visualScene.nodes.length; i ++ ) {

					scene.add( createSceneGraph( visualScene.nodes[ i ] ) );

				}

				// unit conversion
				scene.scale.multiplyScalar( colladaUnit );

				this.createAnimations();

				kinematicsModel = this.parseKinematicsModel();
				this.createKinematics();

				var result = {
					scene: scene,
					morphs: morphs,
					skins: skins,
					animations: animData,
					kinematics: kinematics,
					dae: {
						images: images,
						materials: materials,
						cameras: cameras,
						lights: lights,
						effects: effects,
						geometries: geometries,
						controllers: controllers,
						animations: animations,
						visualScenes: visualScenes,
						visualScene: visualScene,
						scene: visualScene,
						kinematicsModels: kinematicsModels,
						kinematicsModel: kinematicsModel
					}
				};

				return result;

			},

			setPreferredShading: function ( shading ) {

				preferredShading = shading;

			},

			parseAsset: function () {

				var elements = COLLADA.querySelectorAll( 'asset' );

				var element = elements[ 0 ];

				if ( element && element.childNodes ) {

					for ( var i = 0; i < element.childNodes.length; i ++ ) {

						var child = element.childNodes[ i ];

						switch ( child.nodeName ) {

							case 'unit':

								var meter = child.getAttribute( 'meter' );

								if ( meter ) {

									colladaUnit = parseFloat( meter );

								}

								break;

							case 'up_axis':

								colladaUp = child.textContent.charAt( 0 );
								break;

						}

					}

				}

			},

			parseLib: function ( q, classSpec, prefix ) {

				var elements = COLLADA.querySelectorAll( q );

				var lib = {};

				var i = 0;

				var elementsLength = elements.length;

				for ( var j = 0; j < elementsLength; j ++ ) {

					var element = elements[ j ];
					var daeElement = ( new classSpec() ).parse( element );

					if ( ! daeElement.id || daeElement.id.length === 0 ) daeElement.id = prefix + ( i ++ );
					lib[ daeElement.id ] = daeElement;

				}

				return lib;

			},

			parseScene: function () {

				var sceneElement = COLLADA.querySelectorAll( 'scene instance_visual_scene' )[ 0 ];

				if ( sceneElement ) {

					var url = sceneElement.getAttribute( 'url' ).replace( /^#/, '' );
					return visualScenes[ url.length > 0 ? url : 'visual_scene0' ];

				} else {

					return null;

				}

			},

			parseKinematicsModel: function () {

				var kinematicsModelElement = COLLADA.querySelectorAll( 'instance_kinematics_model' )[ 0 ];

				if ( kinematicsModelElement ) {

					var url = kinematicsModelElement.getAttribute( 'url' ).replace( /^#/, '' );
					return kinematicsModels[ url.length > 0 ? url : 'kinematics_model0' ];

				} else {

					return null;

				}

			},

			createAnimations: function () {

				animData = [];

				// fill in the keys
				recurseHierarchy( scene );

			},

			recurseHierarchy: function ( node ) {

				var n = visualScene.getChildById( node.colladaId, true ),
					newData = null;

				if ( n && n.keys ) {

					newData = {
						fps: 60,
						hierarchy: [ {
							node: n,
							keys: n.keys,
							sids: n.sids
						} ],
						node: node,
						name: 'animation_' + node.name,
						length: 0
					};

					animData.push( newData );

					for ( var i = 0, il = n.keys.length; i < il; i ++ ) {

						newData.length = Math.max( newData.length, n.keys[ i ].time );

					}

				} else {

					newData = {
						hierarchy: [ {
							keys: [],
							sids: []
						} ]
					}

				}

				for ( var i = 0, il = node.children.length; i < il; i ++ ) {

					var d = recurseHierarchy( node.children[ i ] );

					for ( var j = 0, jl = d.hierarchy.length; j < jl; j ++ ) {

						newData.hierarchy.push( {
							keys: [],
							sids: []
						} );

					}

				}

				return newData;

			},

			createMorph: function ( geometry, ctrl ) {

				var morphCtrl = ctrl instanceof InstanceController ? controllers[ ctrl.url ] : ctrl;

				if ( ! morphCtrl || ! morphCtrl.morph ) {

					console.log( "could not find morph controller!" );
					return;

				}

				var morph = morphCtrl.morph;

				for ( var i = 0; i < morph.targets.length; i ++ ) {

					var target_id = morph.targets[ i ];
					var daeGeometry = geometries[ target_id ];

					if ( ! daeGeometry.mesh ||
						 ! daeGeometry.mesh.primitives ||
						 ! daeGeometry.mesh.primitives.length ) {

						 continue;

					}

					var target = daeGeometry.mesh.primitives[ 0 ].geometry;

					if ( target.vertices.length === geometry.vertices.length ) {

						geometry.morphTargets.push( { name: "target_1", vertices: target.vertices } );

					}

				}

				geometry.morphTargets.push( { name: "target_Z", vertices: geometry.vertices } );

			},

			createSkin: function ( geometry, ctrl, applyBindShape ) {

				var skinCtrl = controllers[ ctrl.url ];

				if ( ! skinCtrl || ! skinCtrl.skin ) {

					console.log( "could not find skin controller!" );
					return;

				}

				if ( ! ctrl.skeleton || ! ctrl.skeleton.length ) {

					console.log( "could not find the skeleton for the skin!" );
					return;

				}

				var skin = skinCtrl.skin;
				var skeleton = visualScene.getChildById( ctrl.skeleton[ 0 ] );
				var hierarchy = [];

				applyBindShape = applyBindShape !== undefined ? applyBindShape : true;

				var bones = [];
				geometry.skinWeights = [];
				geometry.skinIndices = [];

				//createBones( geometry.bones, skin, hierarchy, skeleton, null, -1 );
				//createWeights( skin, geometry.bones, geometry.skinIndices, geometry.skinWeights );

				/*
				geometry.animation = {
					name: 'take_001',
					fps: 30,
					length: 2,
					JIT: true,
					hierarchy: hierarchy
				};
				*/

				if ( applyBindShape ) {

					for ( var i = 0; i < geometry.vertices.length; i ++ ) {

						geometry.vertices[ i ].applyMatrix4( skin.bindShapeMatrix );

					}

				}

			},

			createKinematics: function () {

				if ( kinematicsModel && kinematicsModel.joints.length === 0 ) {

					kinematics = undefined;
					return;

				}

				var jointMap = {};

				var _addToMap = function( jointIndex, parentVisualElement ) {

					var parentVisualElementId = parentVisualElement.getAttribute( 'id' );
					var colladaNode = visualScene.getChildById( parentVisualElementId, true );
					var joint = kinematicsModel.joints[ jointIndex ];

					scene.traverse( function( node ) {

						if ( node.colladaId == parentVisualElementId ) {

							jointMap[ jointIndex ] = {
								node: node,
								transforms: colladaNode.transforms,
								joint: joint,
								position: joint.zeroPosition
							};

						}

					} );

				};

				kinematics = {

					joints: kinematicsModel && kinematicsModel.joints,

					getJointValue: function( jointIndex ) {

						var jointData = jointMap[ jointIndex ];

						if ( jointData ) {

							return jointData.position;

						} else {

							console.log( 'getJointValue: joint ' + jointIndex + ' doesn\'t exist' );

						}

					},

					setJointValue: function( jointIndex, value ) {

						var jointData = jointMap[ jointIndex ];

						if ( jointData ) {

							var joint = jointData.joint;

							if ( value > joint.limits.max || value < joint.limits.min ) {

								console.log( 'setJointValue: joint ' + jointIndex + ' value ' + value + ' outside of limits (min: ' + joint.limits.min + ', max: ' + joint.limits.max + ')' );

							} else if ( joint.static ) {

								console.log( 'setJointValue: joint ' + jointIndex + ' is static' );

							} else {

								var threejsNode = jointData.node;
								var axis = joint.axis;
								var transforms = jointData.transforms;

								var matrix = new THREE.Matrix4();

								for ( i = 0; i < transforms.length; i ++ ) {

									var transform = transforms[ i ];

									// kinda ghetto joint detection
									if ( transform.sid && transform.sid.indexOf( 'joint' + jointIndex ) !== - 1 ) {

										// apply actual joint value here
										switch ( joint.type ) {

											case 'revolute':

												matrix.multiply( m1.makeRotationAxis( axis, THREE.Math.degToRad( value ) ) );
												break;

											case 'prismatic':

												matrix.multiply( m1.makeTranslation( axis.x * value, axis.y * value, axis.z * value ) );
												break;

											default:

												console.warn( 'setJointValue: unknown joint type: ' + joint.type );
												break;

										}

									} else {

										var m1 = new THREE.Matrix4();

										switch ( transform.type ) {

											case 'matrix':

												matrix.multiply( transform.obj );

												break;

											case 'translate':

												matrix.multiply( m1.makeTranslation( transform.obj.x, transform.obj.y, transform.obj.z ) );

												break;

											case 'rotate':

												matrix.multiply( m1.makeRotationAxis( transform.obj, transform.angle ) );

												break;

										}

									}

								}

								// apply the matrix to the threejs node
								var elementsFloat32Arr = matrix.elements;
								var elements = Array.prototype.slice.call( elementsFloat32Arr );

								var elementsRowMajor = [
									elements[ 0 ],
									elements[ 4 ],
									elements[ 8 ],
									elements[ 12 ],
									elements[ 1 ],
									elements[ 5 ],
									elements[ 9 ],
									elements[ 13 ],
									elements[ 2 ],
									elements[ 6 ],
									elements[ 10 ],
									elements[ 14 ],
									elements[ 3 ],
									elements[ 7 ],
									elements[ 11 ],
									elements[ 15 ]
								];

								threejsNode.matrix.set.apply( threejsNode.matrix, elementsRowMajor );
								threejsNode.matrix.decompose( threejsNode.position, threejsNode.quaternion, threejsNode.scale );

							}

						} else {

							console.log( 'setJointValue: joint ' + jointIndex + ' doesn\'t exist' );

						}

					}

				};

				var element = COLLADA.querySelector( 'scene instance_kinematics_scene' );

				if ( element ) {

					for ( var i = 0; i < element.childNodes.length; i ++ ) {

						var child = element.childNodes[ i ];

						if ( child.nodeType != 1 ) continue;

						switch ( child.nodeName ) {

							case 'bind_joint_axis':

								var visualTarget = child.getAttribute( 'target' ).split( '/' ).pop();
								var axis = child.querySelector( 'axis param' ).textContent;
								var jointIndex = parseInt( axis.split( 'joint' ).pop().split( '.' )[ 0 ] );
								var visualTargetElement = COLLADA.querySelector( '[sid="' + visualTarget + '"]' );

								if ( visualTargetElement ) {

									var parentVisualElement = visualTargetElement.parentElement;
									_addToMap( jointIndex, parentVisualElement );

								}

								break;

							default:

								break;

						}

					}

				}

			},

			getJointId: function ( skin, id ) {

				for ( var i = 0; i < skin.joints.length; i ++ ) {

					if ( skin.joints[ i ] === id ) {

						return i;

					}

				}

			},

			calcFrameDuration: function ( node ) {

				var minT = 10000000;

				for ( var i = 0; i < node.channels.length; i ++ ) {

					var sampler = node.channels[ i ].sampler;

					for ( var j = 0; j < sampler.input.length - 1; j ++ ) {

						var t0 = sampler.input[ j ];
						var t1 = sampler.input[ j + 1 ];
						minT = Math.min( minT, t1 - t0 );

					}

				}

				return minT;

			},

			calcMatrixAt: function ( node, t ) {

				var animated = {};

				var i, j;

				for ( i = 0; i < node.channels.length; i ++ ) {

					var channel = node.channels[ i ];
					animated[ channel.sid ] = channel;

				}

				var matrix = new THREE.Matrix4();

				for ( i = 0; i < node.transforms.length; i ++ ) {

					var transform = node.transforms[ i ];
					var channel = animated[ transform.sid ];

					if ( channel !== undefined ) {

						var sampler = channel.sampler;
						var value;

						for ( j = 0; j < sampler.input.length - 1; j ++ ) {

							if ( sampler.input[ j + 1 ] > t ) {

								value = sampler.output[ j ];
								//console.log(value.flatten)
								break;

							}

						}

						if ( value !== undefined ) {

							if ( value instanceof THREE.Matrix4 ) {

								matrix.multiplyMatrices( matrix, value );

							} else {

								// FIXME: handle other types

								matrix.multiplyMatrices( matrix, transform.matrix );

							}

						} else {

							matrix.multiplyMatrices( matrix, transform.matrix );

						}

					} else {

						matrix.multiplyMatrices( matrix, transform.matrix );

					}

				}

				return matrix;

			},

			// Up axis conversion
			setUpConversion: function () {

				if ( options.convertUpAxis !== true || colladaUp === options.upAxis ) {

					upConversion = null;

				} else {

					switch ( colladaUp ) {

						case 'X':

							upConversion = options.upAxis === 'Y' ? 'XtoY' : 'XtoZ';
							break;

						case 'Y':

							upConversion = options.upAxis === 'X' ? 'YtoX' : 'YtoZ';
							break;

						case 'Z':

							upConversion = options.upAxis === 'X' ? 'ZtoX' : 'ZtoY';
							break;

					}

				}

			}


		};

		function _Image() {

			this.id = "";
			this.init_from = "";

		};

		_Image.prototype.parse = function( element ) {

			this.id = element.getAttribute( 'id' );

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];

				if ( child.nodeName === 'init_from' ) {

					this.init_from = child.textContent;

				}

			}

			return this;

		};

		function Controller() {

			this.id = "";
			this.name = "";
			this.type = "";
			this.skin = null;
			this.morph = null;

		};

		Controller.prototype.parse = function( element ) {

			this.id = element.getAttribute( 'id' );
			this.name = element.getAttribute( 'name' );
			this.type = "none";

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];

				switch ( child.nodeName ) {

					case 'skin':

						this.skin = ( new Skin() ).parse( child );
						this.type = child.nodeName;
						break;

					case 'morph':

						this.morph = ( new Morph() ).parse( child );
						this.type = child.nodeName;
						break;

					default:
						break;

				}

			}

			return this;

		};

		function Morph() {

			this.method = null;
			this.source = null;
			this.targets = null;
			this.weights = null;

		};

		Morph.prototype.parse = function( element ) {

			var sources = {};
			var inputs = [];
			var i;

			this.method = element.getAttribute( 'method' );
			this.source = element.getAttribute( 'source' ).replace( /^#/, '' );

			for ( i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];
				if ( child.nodeType != 1 ) continue;

				switch ( child.nodeName ) {

					case 'source':

						var source = ( new Source() ).parse( child );
						sources[ source.id ] = source;
						break;

					case 'targets':

						inputs = this.parseInputs( child );
						break;

					default:

						console.log( child.nodeName );
						break;

				}

			}

			for ( i = 0; i < inputs.length; i ++ ) {

				var input = inputs[ i ];
				var source = sources[ input.source ];

				switch ( input.semantic ) {

					case 'MORPH_TARGET':

						this.targets = source.read();
						break;

					case 'MORPH_WEIGHT':

						this.weights = source.read();
						break;

					default:
						break;

				}

			}

			return this;

		};

		Morph.prototype.parseInputs = function( element ) {

			var inputs = [];

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];
				if ( child.nodeType != 1 ) continue;

				switch ( child.nodeName ) {

					case 'input':

						inputs.push( ( new Input() ).parse( child ) );
						break;

					default:
						break;
				}

			}

			return inputs;

		};

		function Skin() {

			this.source = "";
			this.bindShapeMatrix = null;
			this.invBindMatrices = [];
			this.joints = [];
			this.weights = [];

		};

		Skin.prototype.parse = function( element ) {

			var sources = {};
			var joints, weights;

			this.source = element.getAttribute( 'source' ).replace( /^#/, '' );
			this.invBindMatrices = [];
			this.joints = [];
			this.weights = [];

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];
				if ( child.nodeType != 1 ) continue;

				switch ( child.nodeName ) {

					case 'bind_shape_matrix':

						var f = _floats( child.textContent );
						this.bindShapeMatrix = getConvertedMat4( f );
						break;

					case 'source':

						var src = new Source().parse( child );
						sources[ src.id ] = src;
						break;

					case 'joints':

						joints = child;
						break;

					case 'vertex_weights':

						weights = child;
						break;

					default:

						console.log( child.nodeName );
						break;

				}

			}

			this.parseJoints( joints, sources );
			this.parseWeights( weights, sources );

			return this;

		};

		Skin.prototype.parseJoints = function ( element, sources ) {

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];
				if ( child.nodeType != 1 ) continue;

				switch ( child.nodeName ) {

					case 'input':

						var input = ( new Input() ).parse( child );
						var source = sources[ input.source ];

						if ( input.semantic === 'JOINT' ) {

							this.joints = source.read();

						} else if ( input.semantic === 'INV_BIND_MATRIX' ) {

							this.invBindMatrices = source.read();

						}

						break;

					default:
						break;
				}

			}

		};

		Skin.prototype.parseWeights = function ( element, sources ) {

			var v, vcount, inputs = [];

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];
				if ( child.nodeType != 1 ) continue;

				switch ( child.nodeName ) {

					case 'input':

						inputs.push( ( new Input() ).parse( child ) );
						break;

					case 'v':

						v = _ints( child.textContent );
						break;

					case 'vcount':

						vcount = _ints( child.textContent );
						break;

					default:
						break;

				}

			}

			var index = 0;

			for ( var i = 0; i < vcount.length; i ++ ) {

				var numBones = vcount[ i ];
				var vertex_weights = [];

				for ( var j = 0; j < numBones; j ++ ) {

					var influence = {};

					for ( var k = 0; k < inputs.length; k ++ ) {

						var input = inputs[ k ];
						var value = v[ index + input.offset ];

						switch ( input.semantic ) {

							case 'JOINT':

								influence.joint = value;//this.joints[value];
								break;

							case 'WEIGHT':

								influence.weight = sources[ input.source ].data[ value ];
								break;

							default:
								break;

						}

					}

					vertex_weights.push( influence );
					index += inputs.length;

				}

				for ( var j = 0; j < vertex_weights.length; j ++ ) {

					vertex_weights[ j ].index = i;

				}

				this.weights.push( vertex_weights );

			}

		};

		function VisualScene () {

			this.id = "";
			this.name = "";
			this.nodes = [];
			this.scene = new THREE.Group();

		};

		VisualScene.prototype.getChildById = function( id, recursive ) {

			for ( var i = 0; i < this.nodes.length; i ++ ) {

				var node = this.nodes[ i ].getChildById( id, recursive );

				if ( node ) {

					return node;

				}

			}

			return null;

		};

		VisualScene.prototype.getChildBySid = function( sid, recursive ) {

			for ( var i = 0; i < this.nodes.length; i ++ ) {

				var node = this.nodes[ i ].getChildBySid( sid, recursive );

				if ( node ) {

					return node;

				}

			}

			return null;

		};

		VisualScene.prototype.parse = function( element ) {

			this.id = element.getAttribute( 'id' );
			this.name = element.getAttribute( 'name' );
			this.nodes = [];

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];
				if ( child.nodeType != 1 ) continue;

				switch ( child.nodeName ) {

					case 'node':

						this.nodes.push( ( new Node() ).parse( child ) );
						break;

					default:
						break;

				}

			}

			return this;

		};

		function Node() {

			this.id = "";
			this.name = "";
			this.sid = "";
			this.nodes = [];
			this.controllers = [];
			this.transforms = [];
			this.geometries = [];
			this.channels = [];
			this.matrix = new THREE.Matrix4();

		};

		Node.prototype.getChannelForTransform = function( transformSid ) {

			for ( var i = 0; i < this.channels.length; i ++ ) {

				var channel = this.channels[ i ];
				var parts = channel.target.split( '/' );
				var id = parts.shift();
				var sid = parts.shift();
				var dotSyntax = ( sid.indexOf( "." ) >= 0 );
				var arrSyntax = ( sid.indexOf( "(" ) >= 0 );
				var arrIndices;
				var member;

				if ( dotSyntax ) {

					parts = sid.split( "." );
					sid = parts.shift();
					member = parts.shift();

				} else if ( arrSyntax ) {

					arrIndices = sid.split( "(" );
					sid = arrIndices.shift();

					for ( var j = 0; j < arrIndices.length; j ++ ) {

						arrIndices[ j ] = parseInt( arrIndices[ j ].replace( /\)/, '' ) );

					}

				}

				if ( sid === transformSid ) {

					channel.info = { sid: sid, dotSyntax: dotSyntax, arrSyntax: arrSyntax, arrIndices: arrIndices };
					return channel;

				}

			}

			return null;

		};

		Node.prototype.getChildById = function ( id, recursive ) {

			if ( this.id === id ) {

				return this;

			}

			if ( recursive ) {

				for ( var i = 0; i < this.nodes.length; i ++ ) {

					var n = this.nodes[ i ].getChildById( id, recursive );

					if ( n ) {

						return n;

					}

				}

			}

			return null;

		};

		Node.prototype.getChildBySid = function ( sid, recursive ) {

			if ( this.sid === sid ) {

				return this;

			}

			if ( recursive ) {

				for ( var i = 0; i < this.nodes.length; i ++ ) {

					var n = this.nodes[ i ].getChildBySid( sid, recursive );

					if ( n ) {

						return n;

					}

				}

			}

			return null;

		};

		Node.prototype.getTransformBySid = function ( sid ) {

			for ( var i = 0; i < this.transforms.length; i ++ ) {

				if ( this.transforms[ i ].sid === sid ) return this.transforms[ i ];

			}

			return null;

		};

		Node.prototype.parse = function( element ) {

			var url;

			this.id = element.getAttribute( 'id' );
			this.sid = element.getAttribute( 'sid' );
			this.name = element.getAttribute( 'name' );
			this.type = element.getAttribute( 'type' );
			this.layer = element.getAttribute( 'layer' );

			this.type = this.type === 'JOINT' ? this.type : 'NODE';

			this.nodes = [];
			this.transforms = [];
			this.geometries = [];
			this.cameras = [];
			this.lights = [];
			this.controllers = [];
			this.matrix = new THREE.Matrix4();

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];
				if ( child.nodeType != 1 ) continue;

				switch ( child.nodeName ) {

					case 'node':

						this.nodes.push( ( new Node() ).parse( child ) );
						break;

					case 'instance_camera':

						this.cameras.push( ( new InstanceCamera() ).parse( child ) );
						break;

					case 'instance_controller':

						this.controllers.push( ( new InstanceController() ).parse( child ) );
						break;

					case 'instance_geometry':

						this.geometries.push( ( new InstanceGeometry() ).parse( child ) );
						break;

					case 'instance_light':

						this.lights.push( ( new InstanceLight() ).parse( child ) );
						break;

					case 'instance_node':

						url = child.getAttribute( 'url' ).replace( /^#/, '' );
						var iNode = getLibraryNode( url );

						if ( iNode ) {

							this.nodes.push( ( new Node() ).parse( iNode ) ) ;

						}

						break;

					case 'rotate':
					case 'translate':
					case 'scale':
					case 'matrix':
					case 'lookat':
					case 'skew':

						this.transforms.push( ( new Transform() ).parse( child ) );
						break;

					case 'extra':
						break;

					default:

						console.log( child.nodeName );
						break;

				}

			}

			this.channels = getChannelsForNode( this );
			bakeAnimations( this );

			this.updateMatrix();

			return this;

		};

		Node.prototype.updateMatrix = function () {

			this.matrix.identity();

			for ( var i = 0; i < this.transforms.length; i ++ ) {

				this.transforms[ i ].apply( this.matrix );

			}

		};

		function Transform () {

			this.sid = "";
			this.type = "";
			this.data = [];
			this.obj = null;

		};

		Transform.prototype.parse = function ( element ) {

			this.sid = element.getAttribute( 'sid' );
			this.type = element.nodeName;
			this.data = _floats( element.textContent );
			this.convert();

			return this;

		};

		Transform.prototype.convert = function () {

			switch ( this.type ) {

				case 'matrix':

					this.obj = getConvertedMat4( this.data );
					break;

				case 'rotate':

					this.angle = THREE.Math.degToRad( this.data[ 3 ] );

				case 'translate':

					fixCoords( this.data, - 1 );
					this.obj = new THREE.Vector3( this.data[ 0 ], this.data[ 1 ], this.data[ 2 ] );
					break;

				case 'scale':

					fixCoords( this.data, 1 );
					this.obj = new THREE.Vector3( this.data[ 0 ], this.data[ 1 ], this.data[ 2 ] );
					break;

				default:
					console.log( 'Can not convert Transform of type ' + this.type );
					break;

			}

		};

		Transform.prototype.apply = function () {

			var m1 = new THREE.Matrix4();

			return function ( matrix ) {

				switch ( this.type ) {

					case 'matrix':

						matrix.multiply( this.obj );

						break;

					case 'translate':

						matrix.multiply( m1.makeTranslation( this.obj.x, this.obj.y, this.obj.z ) );

						break;

					case 'rotate':

						matrix.multiply( m1.makeRotationAxis( this.obj, this.angle ) );

						break;

					case 'scale':

						matrix.scale( this.obj );

						break;

				}

			};

		}();

		Transform.prototype.update = function ( data, member ) {

			var members = [ 'X', 'Y', 'Z', 'ANGLE' ];

			switch ( this.type ) {

				case 'matrix':

					if ( ! member ) {

						this.obj.copy( data );

					} else if ( member.length === 1 ) {

						switch ( member[ 0 ] ) {

							case 0:

								this.obj.n11 = data[ 0 ];
								this.obj.n21 = data[ 1 ];
								this.obj.n31 = data[ 2 ];
								this.obj.n41 = data[ 3 ];

								break;

							case 1:

								this.obj.n12 = data[ 0 ];
								this.obj.n22 = data[ 1 ];
								this.obj.n32 = data[ 2 ];
								this.obj.n42 = data[ 3 ];

								break;

							case 2:

								this.obj.n13 = data[ 0 ];
								this.obj.n23 = data[ 1 ];
								this.obj.n33 = data[ 2 ];
								this.obj.n43 = data[ 3 ];

								break;

							case 3:

								this.obj.n14 = data[ 0 ];
								this.obj.n24 = data[ 1 ];
								this.obj.n34 = data[ 2 ];
								this.obj.n44 = data[ 3 ];

								break;

						}

					} else if ( member.length === 2 ) {

						var propName = 'n' + ( member[ 0 ] + 1 ) + ( member[ 1 ] + 1 );
						this.obj[ propName ] = data;

					} else {

						console.log( 'Incorrect addressing of matrix in transform.' );

					}

					break;

				case 'translate':
				case 'scale':

					if ( Object.prototype.toString.call( member ) === '[object Array]' ) {

						member = members[ member[ 0 ] ];

					}

					switch ( member ) {

						case 'X':

							this.obj.x = data;
							break;

						case 'Y':

							this.obj.y = data;
							break;

						case 'Z':

							this.obj.z = data;
							break;

						default:

							this.obj.x = data[ 0 ];
							this.obj.y = data[ 1 ];
							this.obj.z = data[ 2 ];
							break;

					}

					break;

				case 'rotate':

					if ( Object.prototype.toString.call( member ) === '[object Array]' ) {

						member = members[ member[ 0 ] ];

					}

					switch ( member ) {

						case 'X':

							this.obj.x = data;
							break;

						case 'Y':

							this.obj.y = data;
							break;

						case 'Z':

							this.obj.z = data;
							break;

						case 'ANGLE':

							this.angle = THREE.Math.degToRad( data );
							break;

						default:

							this.obj.x = data[ 0 ];
							this.obj.y = data[ 1 ];
							this.obj.z = data[ 2 ];
							this.angle = THREE.Math.degToRad( data[ 3 ] );
							break;

					}
					break;

			}

		};

		function InstanceController() {

			this.url = "";
			this.skeleton = [];
			this.instance_material = [];

		};

		InstanceController.prototype.parse = function ( element ) {

			this.url = element.getAttribute( 'url' ).replace( /^#/, '' );
			this.skeleton = [];
			this.instance_material = [];

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];
				if ( child.nodeType !== 1 ) continue;

				switch ( child.nodeName ) {

					case 'skeleton':

						this.skeleton.push( child.textContent.replace( /^#/, '' ) );
						break;

					case 'bind_material':

						var instances = child.querySelectorAll( 'instance_material' );

						for ( var j = 0; j < instances.length; j ++ ) {

							var instance = instances[ j ];
							this.instance_material.push( ( new InstanceMaterial() ).parse( instance ) );

						}


						break;

					case 'extra':
						break;

					default:
						break;

				}

			}

			return this;

		};

		function InstanceMaterial () {

			this.symbol = "";
			this.target = "";

		};

		InstanceMaterial.prototype.parse = function ( element ) {

			this.symbol = element.getAttribute( 'symbol' );
			this.target = element.getAttribute( 'target' ).replace( /^#/, '' );
			return this;

		};

		function InstanceGeometry() {

			this.url = "";
			this.instance_material = [];

		};

		InstanceGeometry.prototype.parse = function ( element ) {

			this.url = element.getAttribute( 'url' ).replace( /^#/, '' );
			this.instance_material = [];

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];
				if ( child.nodeType != 1 ) continue;

				if ( child.nodeName === 'bind_material' ) {

					var instances = child.querySelectorAll( 'instance_material' );

					for ( var j = 0; j < instances.length; j ++ ) {

						var instance = instances[ j ];
						this.instance_material.push( ( new InstanceMaterial() ).parse( instance ) );

					}

					break;

				}

			}

			return this;

		};

		function Geometry() {

			this.id = "";
			this.mesh = null;

		};

		Geometry.prototype.parse = function ( element ) {

			this.id = element.getAttribute( 'id' );

			extractDoubleSided( this, element );

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];

				switch ( child.nodeName ) {

					case 'mesh':

						this.mesh = ( new Mesh( this ) ).parse( child );
						break;

					case 'extra':

						// console.log( child );
						break;

					default:
						break;
				}

			}

			return this;

		};

		function Mesh( geometry ) {

			this.geometry = geometry.id;
			this.primitives = [];
			this.vertices = null;
			this.geometry3js = null;

		};

		Mesh.prototype.parse = function ( element ) {

			this.primitives = [];

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];

				switch ( child.nodeName ) {

					case 'source':

						_source( child );
						break;

					case 'vertices':

						this.vertices = ( new Vertices() ).parse( child );
						break;

					case 'linestrips':

						this.primitives.push( ( new LineStrips().parse( child ) ) );
						break;

					case 'triangles':

						this.primitives.push( ( new Triangles().parse( child ) ) );
						break;

					case 'polygons':

						this.primitives.push( ( new Polygons().parse( child ) ) );
						break;

					case 'polylist':

						this.primitives.push( ( new Polylist().parse( child ) ) );
						break;

					default:
						break;

				}

			}

			this.geometry3js = new THREE.Geometry();

			if ( this.vertices === null ) {

				// TODO (mrdoob): Study case when this is null (carrier.dae)

				return this;

			}

			var vertexData = sources[ this.vertices.input[ 'POSITION' ].source ].data;

			for ( var i = 0; i < vertexData.length; i += 3 ) {

				this.geometry3js.vertices.push( getConvertedVec3( vertexData, i ).clone() );

			}

			for ( var i = 0; i < this.primitives.length; i ++ ) {

				var primitive = this.primitives[ i ];
				primitive.setVertices( this.vertices );
				this.handlePrimitive( primitive, this.geometry3js );

			}

			if ( this.geometry3js.calcNormals ) {

				this.geometry3js.computeVertexNormals();
				delete this.geometry3js.calcNormals;

			}

			return this;

		};

		Mesh.prototype.handlePrimitive = function ( primitive, geom ) {

			if ( primitive instanceof LineStrips ) {

				// TODO: Handle indices. Maybe easier with BufferGeometry?

				geom.isLineStrip = true;
				return;

			}

			var j, k, pList = primitive.p, inputs = primitive.inputs;
			var input, index, idx32;
			var source, numParams;
			var vcIndex = 0, vcount = 3, maxOffset = 0;
			var texture_sets = [];

			for ( j = 0; j < inputs.length; j ++ ) {

				input = inputs[ j ];

				var offset = input.offset + 1;
				maxOffset = ( maxOffset < offset ) ? offset : maxOffset;

				switch ( input.semantic ) {

					case 'TEXCOORD':
						texture_sets.push( input.set );
						break;

				}

			}

			for ( var pCount = 0; pCount < pList.length; ++ pCount ) {

				var p = pList[ pCount ], i = 0;

				while ( i < p.length ) {

					var vs = [];
					var ns = [];
					var ts = null;
					var cs = [];

					if ( primitive.vcount ) {

						vcount = primitive.vcount.length ? primitive.vcount[ vcIndex ++ ] : primitive.vcount;

					} else {

						vcount = p.length / maxOffset;

					}


					for ( j = 0; j < vcount; j ++ ) {

						for ( k = 0; k < inputs.length; k ++ ) {

							input = inputs[ k ];
							source = sources[ input.source ];

							index = p[ i + ( j * maxOffset ) + input.offset ];
							numParams = source.accessor.params.length;
							idx32 = index * numParams;

							switch ( input.semantic ) {

								case 'VERTEX':

									vs.push( index );

									break;

								case 'NORMAL':

									ns.push( getConvertedVec3( source.data, idx32 ) );

									break;

								case 'TEXCOORD':

									ts = ts || { };
									if ( ts[ input.set ] === undefined ) ts[ input.set ] = [];
									// invert the V
									ts[ input.set ].push( new THREE.Vector2( source.data[ idx32 ], source.data[ idx32 + 1 ] ) );

									break;

								case 'COLOR':

									cs.push( new THREE.Color().setRGB( source.data[ idx32 ], source.data[ idx32 + 1 ], source.data[ idx32 + 2 ] ) );

									break;

								default:

									break;

							}

						}

					}

					if ( ns.length === 0 ) {

						// check the vertices inputs
						input = this.vertices.input.NORMAL;

						if ( input ) {

							source = sources[ input.source ];
							numParams = source.accessor.params.length;

							for ( var ndx = 0, len = vs.length; ndx < len; ndx ++ ) {

								ns.push( getConvertedVec3( source.data, vs[ ndx ] * numParams ) );

							}

						} else {

							geom.calcNormals = true;

						}

					}

					if ( ! ts ) {

						ts = { };
						// check the vertices inputs
						input = this.vertices.input.TEXCOORD;

						if ( input ) {

							texture_sets.push( input.set );
							source = sources[ input.source ];
							numParams = source.accessor.params.length;

							for ( var ndx = 0, len = vs.length; ndx < len; ndx ++ ) {

								idx32 = vs[ ndx ] * numParams;
								if ( ts[ input.set ] === undefined ) ts[ input.set ] = [ ];
								// invert the V
								ts[ input.set ].push( new THREE.Vector2( source.data[ idx32 ], 1.0 - source.data[ idx32 + 1 ] ) );

							}

						}

					}

					if ( cs.length === 0 ) {

						// check the vertices inputs
						input = this.vertices.input.COLOR;

						if ( input ) {

							source = sources[ input.source ];
							numParams = source.accessor.params.length;

							for ( var ndx = 0, len = vs.length; ndx < len; ndx ++ ) {

								idx32 = vs[ ndx ] * numParams;
								cs.push( new THREE.Color().setRGB( source.data[ idx32 ], source.data[ idx32 + 1 ], source.data[ idx32 + 2 ] ) );

							}

						}

					}

					var face = null, faces = [], uv, uvArr;

					if ( vcount === 3 ) {

						faces.push( new THREE.Face3( vs[ 0 ], vs[ 1 ], vs[ 2 ], ns, cs.length ? cs : new THREE.Color() ) );

					} else if ( vcount === 4 ) {

						faces.push( new THREE.Face3( vs[ 0 ], vs[ 1 ], vs[ 3 ], [ ns[ 0 ].clone(), ns[ 1 ].clone(), ns[ 3 ].clone() ], cs.length ? [ cs[ 0 ], cs[ 1 ], cs[ 3 ]] : new THREE.Color() ) );

						faces.push( new THREE.Face3( vs[ 1 ], vs[ 2 ], vs[ 3 ], [ ns[ 1 ].clone(), ns[ 2 ].clone(), ns[ 3 ].clone() ], cs.length ? [ cs[ 1 ], cs[ 2 ], cs[ 3 ]] : new THREE.Color() ) );

					} else if ( vcount > 4 && options.subdivideFaces ) {

						var clr = cs.length ? cs : new THREE.Color(),
							vec1, vec2, vec3, v1, v2, norm;

						// subdivide into multiple Face3s

						for ( k = 1; k < vcount - 1; ) {

							// FIXME: normals don't seem to be quite right

							faces.push( new THREE.Face3( vs[ 0 ], vs[ k ], vs[ k + 1 ], [ ns[ 0 ].clone(), ns[ k ++ ].clone(), ns[ k ].clone() ],  clr ) );

						}

					}

					if ( faces.length ) {

						for ( var ndx = 0, len = faces.length; ndx < len; ndx ++ ) {

							face = faces[ ndx ];
							face.daeMaterial = primitive.material;
							geom.faces.push( face );

							for ( k = 0; k < texture_sets.length; k ++ ) {

								uv = ts[ texture_sets[ k ] ];

								if ( vcount > 4 ) {

									// Grab the right UVs for the vertices in this face
									uvArr = [ uv[ 0 ], uv[ ndx + 1 ], uv[ ndx + 2 ] ];

								} else if ( vcount === 4 ) {

									if ( ndx === 0 ) {

										uvArr = [ uv[ 0 ], uv[ 1 ], uv[ 3 ] ];

									} else {

										uvArr = [ uv[ 1 ].clone(), uv[ 2 ], uv[ 3 ].clone() ];

									}

								} else {

									uvArr = [ uv[ 0 ], uv[ 1 ], uv[ 2 ] ];

								}

								if ( geom.faceVertexUvs[ k ] === undefined ) {

									geom.faceVertexUvs[ k ] = [];

								}

								geom.faceVertexUvs[ k ].push( uvArr );

							}

						}

					} else {

						console.log( 'dropped face with vcount ' + vcount + ' for geometry with id: ' + geom.id );

					}

					i += maxOffset * vcount;

				}

			}

		};

		function Polygons () {

			this.material = "";
			this.count = 0;
			this.inputs = [];
			this.vcount = null;
			this.p = [];
			this.geometry = new THREE.Geometry();

		};

		Polygons.prototype.setVertices = function ( vertices ) {

			for ( var i = 0; i < this.inputs.length; i ++ ) {

				if ( this.inputs[ i ].source === vertices.id ) {

					this.inputs[ i ].source = vertices.input[ 'POSITION' ].source;

				}

			}

		};

		Polygons.prototype.parse = function ( element ) {

			this.material = element.getAttribute( 'material' );
			this.count = _attr_as_int( element, 'count', 0 );

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];

				switch ( child.nodeName ) {

					case 'input':

						this.inputs.push( ( new Input() ).parse( element.childNodes[ i ] ) );
						break;

					case 'vcount':

						this.vcount = _ints( child.textContent );
						break;

					case 'p':

						this.p.push( _ints( child.textContent ) );
						break;

					case 'ph':

						console.warn( 'polygon holes not yet supported!' );
						break;

					default:
						break;

				}

			}

			return this;

		};

		function Polylist () {

			Polygons.call( this );

			this.vcount = [];

		};

		Polylist.prototype = Object.create( Polygons.prototype );
		Polylist.prototype.constructor = Polylist;

		function LineStrips() {

			Polygons.call( this );

			this.vcount = 1;

		};

		LineStrips.prototype = Object.create( Polygons.prototype );
		LineStrips.prototype.constructor = LineStrips;

		function Triangles () {

			Polygons.call( this );

			this.vcount = 3;

		};

		Triangles.prototype = Object.create( Polygons.prototype );
		Triangles.prototype.constructor = Triangles;

		function Accessor() {

			this.source = "";
			this.count = 0;
			this.stride = 0;
			this.params = [];

		};

		Accessor.prototype.parse = function ( element ) {

			this.params = [];
			this.source = element.getAttribute( 'source' );
			this.count = _attr_as_int( element, 'count', 0 );
			this.stride = _attr_as_int( element, 'stride', 0 );

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];

				if ( child.nodeName === 'param' ) {

					var param = {};
					param[ 'name' ] = child.getAttribute( 'name' );
					param[ 'type' ] = child.getAttribute( 'type' );
					this.params.push( param );

				}

			}

			return this;

		};

		function Vertices() {

			this.input = {};

		};

		Vertices.prototype.parse = function ( element ) {

			this.id = element.getAttribute( 'id' );

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				if ( element.childNodes[ i ].nodeName === 'input' ) {

					var input = ( new Input() ).parse( element.childNodes[ i ] );
					this.input[ input.semantic ] = input;

				}

			}

			return this;

		};

		function Input () {

			this.semantic = "";
			this.offset = 0;
			this.source = "";
			this.set = 0;

		};

		Input.prototype.parse = function ( element ) {

			this.semantic = element.getAttribute( 'semantic' );
			this.source = element.getAttribute( 'source' ).replace( /^#/, '' );
			this.set = _attr_as_int( element, 'set', - 1 );
			this.offset = _attr_as_int( element, 'offset', 0 );

			if ( this.semantic === 'TEXCOORD' && this.set < 0 ) {

				this.set = 0;

			}

			return this;

		};

		function Source ( id ) {

			this.id = id;
			this.type = null;

		};

		Source.prototype.parse = function ( element ) {

			this.id = element.getAttribute( 'id' );

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];

				switch ( child.nodeName ) {

					case 'bool_array':

						this.data = _bools( child.textContent );
						this.type = child.nodeName;
						break;

					case 'float_array':

						this.data = _floats( child.textContent );
						this.type = child.nodeName;
						break;

					case 'int_array':

						this.data = _ints( child.textContent );
						this.type = child.nodeName;
						break;

					case 'IDREF_array':
					case 'Name_array':

						this.data = _strings( child.textContent );
						this.type = child.nodeName;
						break;

					case 'technique_common':

						for ( var j = 0; j < child.childNodes.length; j ++ ) {

							if ( child.childNodes[ j ].nodeName === 'accessor' ) {

								this.accessor = ( new Accessor() ).parse( child.childNodes[ j ] );
								break;

							}

						}
						break;

					default:
						// console.log(child.nodeName);
						break;

				}

			}

			return this;

		};

		Source.prototype.read = function () {

			var result = [];

			//for (var i = 0; i < this.accessor.params.length; i++) {

			var param = this.accessor.params[ 0 ];

			//console.log(param.name + " " + param.type);

			switch ( param.type ) {

				case 'IDREF':
				case 'Name': case 'name':
				case 'float':

					return this.data;

				case 'float4x4':

					for ( var j = 0; j < this.data.length; j += 16 ) {

						var s = this.data.slice( j, j + 16 );
						var m = getConvertedMat4( s );
						result.push( m );

					}

					break;

				default:

					console.log( 'ColladaLoader: Source: Read dont know how to read ' + param.type + '.' );
					break;

			}

			//}

			return result;

		};

		function Material () {

			this.id = "";
			this.name = "";
			this.instance_effect = null;

		};

		Material.prototype.parse = function ( element ) {

			this.id = element.getAttribute( 'id' );
			this.name = element.getAttribute( 'name' );

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				if ( element.childNodes[ i ].nodeName === 'instance_effect' ) {

					this.instance_effect = ( new InstanceEffect() ).parse( element.childNodes[ i ] );
					break;

				}

			}

			return this;

		};

		function ColorOrTexture () {

			this.color = new THREE.Color();
			this.color.setRGB( Math.random(), Math.random(), Math.random() );
			this.color.a = 1.0;

			this.texture = null;
			this.texcoord = null;
			this.texOpts = null;

		};

		ColorOrTexture.prototype.isColor = function () {

			return ( this.texture === null );

		};

		ColorOrTexture.prototype.isTexture = function () {

			return ( this.texture != null );

		};

		ColorOrTexture.prototype.parse = function ( element ) {

			if ( element.nodeName === 'transparent' ) {

				this.opaque = element.getAttribute( 'opaque' );

			}

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];
				if ( child.nodeType != 1 ) continue;

				switch ( child.nodeName ) {

					case 'color':

						var rgba = _floats( child.textContent );
						this.color = new THREE.Color();
						this.color.setRGB( rgba[ 0 ], rgba[ 1 ], rgba[ 2 ] );
						this.color.a = rgba[ 3 ];
						break;

					case 'texture':

						this.texture = child.getAttribute( 'texture' );
						this.texcoord = child.getAttribute( 'texcoord' );
						// Defaults from:
						// https://collada.org/mediawiki/index.php/Maya_texture_placement_MAYA_extension
						this.texOpts = {
							offsetU: 0,
							offsetV: 0,
							repeatU: 1,
							repeatV: 1,
							wrapU: 1,
							wrapV: 1
						};
						this.parseTexture( child );
						break;

					default:
						break;

				}

			}

			return this;

		};

		ColorOrTexture.prototype.parseTexture = function ( element ) {

			if ( ! element.childNodes ) return this;

			// This should be supported by Maya, 3dsMax, and MotionBuilder

			if ( element.childNodes[ 1 ] && element.childNodes[ 1 ].nodeName === 'extra' ) {

				element = element.childNodes[ 1 ];

				if ( element.childNodes[ 1 ] && element.childNodes[ 1 ].nodeName === 'technique' ) {

					element = element.childNodes[ 1 ];

				}

			}

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];

				switch ( child.nodeName ) {

					case 'offsetU':
					case 'offsetV':
					case 'repeatU':
					case 'repeatV':

						this.texOpts[ child.nodeName ] = parseFloat( child.textContent );

						break;

					case 'wrapU':
					case 'wrapV':

						// some dae have a value of true which becomes NaN via parseInt

						if ( child.textContent.toUpperCase() === 'TRUE' ) {

							this.texOpts[ child.nodeName ] = 1;

						} else {

							this.texOpts[ child.nodeName ] = parseInt( child.textContent );

						}
						break;

					default:

						this.texOpts[ child.nodeName ] = child.textContent;

						break;

				}

			}

			return this;

		};

		function Shader ( type, effect ) {

			this.type = type;
			this.effect = effect;
			this.material = null;

		};

		Shader.prototype.parse = function ( element ) {

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];
				if ( child.nodeType != 1 ) continue;

				switch ( child.nodeName ) {

					case 'emission':
					case 'diffuse':
					case 'specular':
					case 'transparent':

						this[ child.nodeName ] = ( new ColorOrTexture() ).parse( child );
						break;

					case 'bump':

						// If 'bumptype' is 'heightfield', create a 'bump' property
						// Else if 'bumptype' is 'normalmap', create a 'normal' property
						// (Default to 'bump')
						var bumpType = child.getAttribute( 'bumptype' );
						if ( bumpType ) {

							if ( bumpType.toLowerCase() === "heightfield" ) {

								this[ 'bump' ] = ( new ColorOrTexture() ).parse( child );

							} else if ( bumpType.toLowerCase() === "normalmap" ) {

								this[ 'normal' ] = ( new ColorOrTexture() ).parse( child );

							} else {

								console.error( "Shader.prototype.parse: Invalid value for attribute 'bumptype' (" + bumpType +
											   ") - valid bumptypes are 'HEIGHTFIELD' and 'NORMALMAP' - defaulting to 'HEIGHTFIELD'" );
								this[ 'bump' ] = ( new ColorOrTexture() ).parse( child );

							}

						} else {

							console.warn( "Shader.prototype.parse: Attribute 'bumptype' missing from bump node - defaulting to 'HEIGHTFIELD'" );
							this[ 'bump' ] = ( new ColorOrTexture() ).parse( child );

						}

						break;

					case 'shininess':
					case 'reflectivity':
					case 'index_of_refraction':
					case 'transparency':

						var f = child.querySelectorAll( 'float' );

						if ( f.length > 0 )
							this[ child.nodeName ] = parseFloat( f[ 0 ].textContent );

						break;

					default:
						break;

				}

			}

			this.create();
			return this;

		};

		Shader.prototype.create = function() {

			var props = {};

			var transparent = false;

			if ( this[ 'transparency' ] !== undefined && this[ 'transparent' ] !== undefined ) {

				// convert transparent color RBG to average value
				var transparentColor = this[ 'transparent' ];
				var transparencyLevel = ( this.transparent.color.r + this.transparent.color.g + this.transparent.color.b ) / 3 * this.transparency;

				if ( transparencyLevel > 0 ) {

					transparent = true;
					props[ 'transparent' ] = true;
					props[ 'opacity' ] = 1 - transparencyLevel;

				}

			}

			var keys = {
				'diffuse': 'map',
				'ambient': 'lightMap',
				'specular': 'specularMap',
				'emission': 'emissionMap',
				'bump': 'bumpMap',
				'normal': 'normalMap'
			};

			for ( var prop in this ) {

				switch ( prop ) {

					case 'ambient':
					case 'emission':
					case 'diffuse':
					case 'specular':
					case 'bump':
					case 'normal':

						var cot = this[ prop ];

						if ( cot instanceof ColorOrTexture ) {

							if ( cot.isTexture() ) {

								var samplerId = cot.texture;
								var surfaceId = this.effect.sampler[ samplerId ];

								if ( surfaceId !== undefined && surfaceId.source !== undefined ) {

									var surface = this.effect.surface[ surfaceId.source ];

									if ( surface !== undefined ) {

										var image = images[ surface.init_from ];

										if ( image && baseUrl ) {

											var url = baseUrl + image.init_from;

											var texture;
											var loader = THREE.Loader.Handlers.get( url );

											if ( loader !== null ) {

												texture = loader.load( url );

											} else {

												texture = new THREE.Texture();

												loadTextureImage( texture, url );

											}

											texture.wrapS = cot.texOpts.wrapU ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
											texture.wrapT = cot.texOpts.wrapV ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
											texture.offset.x = cot.texOpts.offsetU;
											texture.offset.y = cot.texOpts.offsetV;
											texture.repeat.x = cot.texOpts.repeatU;
											texture.repeat.y = cot.texOpts.repeatV;
											props[ keys[ prop ]] = texture;

											// Texture with baked lighting?
											if ( prop === 'emission' ) props[ 'emissive' ] = 0xffffff;

										}

									}

								}

							} else if ( prop === 'diffuse' || ! transparent ) {

								if ( prop === 'emission' ) {

									props[ 'emissive' ] = cot.color.getHex();

								} else {

									props[ prop ] = cot.color.getHex();

								}

							}

						}

						break;

					case 'shininess':

						props[ prop ] = this[ prop ];
						break;

					case 'reflectivity':

						props[ prop ] = this[ prop ];
						if ( props[ prop ] > 0.0 ) props[ 'envMap' ] = options.defaultEnvMap;
						props[ 'combine' ] = THREE.MixOperation;	//mix regular shading with reflective component
						break;

					case 'index_of_refraction':

						props[ 'refractionRatio' ] = this[ prop ]; //TODO: "index_of_refraction" becomes "refractionRatio" in shader, but I'm not sure if the two are actually comparable
						if ( this[ prop ] !== 1.0 ) props[ 'envMap' ] = options.defaultEnvMap;
						break;

					case 'transparency':
						// gets figured out up top
						break;

					default:
						break;

				}

			}

			props[ 'shading' ] = preferredShading;
			props[ 'side' ] = this.effect.doubleSided ? THREE.DoubleSide : THREE.FrontSide;

			switch ( this.type ) {

				case 'constant':

					if ( props.emissive != undefined ) props.color = props.emissive;
					this.material = new THREE.MeshBasicMaterial( props );
					break;

				case 'phong':
				case 'blinn':

					if ( props.diffuse != undefined ) props.color = props.diffuse;
					this.material = new THREE.MeshPhongMaterial( props );
					break;

				case 'lambert':
				default:

					if ( props.diffuse != undefined ) props.color = props.diffuse;
					this.material = new THREE.MeshLambertMaterial( props );
					break;

			}

			return this.material;

		};

		function Surface ( effect ) {

			this.effect = effect;
			this.init_from = null;
			this.format = null;

		};

		Surface.prototype.parse = function ( element ) {

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];
				if ( child.nodeType != 1 ) continue;

				switch ( child.nodeName ) {

					case 'init_from':

						this.init_from = child.textContent;
						break;

					case 'format':

						this.format = child.textContent;
						break;

					default:

						console.log( "unhandled Surface prop: " + child.nodeName );
						break;

				}

			}

			return this;

		};

		function Sampler2D ( effect ) {

			this.effect = effect;
			this.source = null;
			this.wrap_s = null;
			this.wrap_t = null;
			this.minfilter = null;
			this.magfilter = null;
			this.mipfilter = null;

		};

		Sampler2D.prototype.parse = function ( element ) {

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];
				if ( child.nodeType != 1 ) continue;

				switch ( child.nodeName ) {

					case 'source':

						this.source = child.textContent;
						break;

					case 'minfilter':

						this.minfilter = child.textContent;
						break;

					case 'magfilter':

						this.magfilter = child.textContent;
						break;

					case 'mipfilter':

						this.mipfilter = child.textContent;
						break;

					case 'wrap_s':

						this.wrap_s = child.textContent;
						break;

					case 'wrap_t':

						this.wrap_t = child.textContent;
						break;

					default:

						console.log( "unhandled Sampler2D prop: " + child.nodeName );
						break;

				}

			}

			return this;

		};

		function Effect () {

			this.id = "";
			this.name = "";
			this.shader = null;
			this.surface = {};
			this.sampler = {};

		};

		Effect.prototype.create = function () {

			if ( this.shader === null ) {

				return null;

			}

		};

		Effect.prototype.parse = function ( element ) {

			this.id = element.getAttribute( 'id' );
			this.name = element.getAttribute( 'name' );

			extractDoubleSided( this, element );

			this.shader = null;

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];
				if ( child.nodeType != 1 ) continue;

				switch ( child.nodeName ) {

					case 'profile_COMMON':

						this.parseTechnique( this.parseProfileCOMMON( child ) );
						break;

					default:
						break;

				}

			}

			return this;

		};

		Effect.prototype.parseNewparam = function ( element ) {

			var sid = element.getAttribute( 'sid' );

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];
				if ( child.nodeType != 1 ) continue;

				switch ( child.nodeName ) {

					case 'surface':

						this.surface[ sid ] = ( new Surface( this ) ).parse( child );
						break;

					case 'sampler2D':

						this.sampler[ sid ] = ( new Sampler2D( this ) ).parse( child );
						break;

					case 'extra':

						break;

					default:

						console.log( child.nodeName );
						break;

				}

			}

		};

		Effect.prototype.parseProfileCOMMON = function ( element ) {

			var technique;

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];

				if ( child.nodeType != 1 ) continue;

				switch ( child.nodeName ) {

					case 'profile_COMMON':

						this.parseProfileCOMMON( child );
						break;

					case 'technique':

						technique = child;
						break;

					case 'newparam':

						this.parseNewparam( child );
						break;

					case 'image':

						var _image = ( new _Image() ).parse( child );
						images[ _image.id ] = _image;
						break;

					case 'extra':
						break;

					default:

						console.log( child.nodeName );
						break;

				}

			}

			return technique;

		};

		Effect.prototype.parseTechnique = function ( element ) {

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];
				if ( child.nodeType != 1 ) continue;

				switch ( child.nodeName ) {

					case 'constant':
					case 'lambert':
					case 'blinn':
					case 'phong':

						this.shader = ( new Shader( child.nodeName, this ) ).parse( child );
						break;
					case 'extra':
						this.parseExtra( child );
						break;
					default:
						break;

				}

			}

		};

		Effect.prototype.parseExtra = function ( element ) {

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];
				if ( child.nodeType != 1 ) continue;

				switch ( child.nodeName ) {

					case 'technique':
						this.parseExtraTechnique( child );
						break;
					default:
						break;

				}

			}

		};

		Effect.prototype.parseExtraTechnique = function ( element ) {

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];
				if ( child.nodeType != 1 ) continue;

				switch ( child.nodeName ) {

					case 'bump':
						this.shader.parse( element );
						break;
					default:
						break;

				}

			}

		};

		function InstanceEffect () {

			this.url = "";

		};

		InstanceEffect.prototype.parse = function ( element ) {

			this.url = element.getAttribute( 'url' ).replace( /^#/, '' );
			return this;

		};

		function Animation() {

			this.id = "";
			this.name = "";
			this.source = {};
			this.sampler = [];
			this.channel = [];

		};

		Animation.prototype.parse = function ( element ) {

			this.id = element.getAttribute( 'id' );
			this.name = element.getAttribute( 'name' );
			this.source = {};

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];

				if ( child.nodeType != 1 ) continue;

				switch ( child.nodeName ) {

					case 'animation':

						var anim = ( new Animation() ).parse( child );

						for ( var src in anim.source ) {

							this.source[ src ] = anim.source[ src ];

						}

						for ( var j = 0; j < anim.channel.length; j ++ ) {

							this.channel.push( anim.channel[ j ] );
							this.sampler.push( anim.sampler[ j ] );

						}

						break;

					case 'source':

						var src = ( new Source() ).parse( child );
						this.source[ src.id ] = src;
						break;

					case 'sampler':

						this.sampler.push( ( new Sampler( this ) ).parse( child ) );
						break;

					case 'channel':

						this.channel.push( ( new Channel( this ) ).parse( child ) );
						break;

					default:
						break;

				}

			}

			return this;

		};

		function Channel( animation ) {

			this.animation = animation;
			this.source = "";
			this.target = "";
			this.fullSid = null;
			this.sid = null;
			this.dotSyntax = null;
			this.arrSyntax = null;
			this.arrIndices = null;
			this.member = null;

		};

		Channel.prototype.parse = function ( element ) {

			this.source = element.getAttribute( 'source' ).replace( /^#/, '' );
			this.target = element.getAttribute( 'target' );

			var parts = this.target.split( '/' );

			var id = parts.shift();
			var sid = parts.shift();

			var dotSyntax = ( sid.indexOf( "." ) >= 0 );
			var arrSyntax = ( sid.indexOf( "(" ) >= 0 );

			if ( dotSyntax ) {

				parts = sid.split( "." );
				this.sid = parts.shift();
				this.member = parts.shift();

			} else if ( arrSyntax ) {

				var arrIndices = sid.split( "(" );
				this.sid = arrIndices.shift();

				for ( var j = 0; j < arrIndices.length; j ++ ) {

					arrIndices[ j ] = parseInt( arrIndices[ j ].replace( /\)/, '' ) );

				}

				this.arrIndices = arrIndices;

			} else {

				this.sid = sid;

			}

			this.fullSid = sid;
			this.dotSyntax = dotSyntax;
			this.arrSyntax = arrSyntax;

			return this;

		};

		function Sampler ( animation ) {

			this.id = "";
			this.animation = animation;
			this.inputs = [];
			this.input = null;
			this.output = null;
			this.strideOut = null;
			this.interpolation = null;
			this.startTime = null;
			this.endTime = null;
			this.duration = 0;

		};

		Sampler.prototype.parse = function ( element ) {

			this.id = element.getAttribute( 'id' );
			this.inputs = [];

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];
				if ( child.nodeType != 1 ) continue;

				switch ( child.nodeName ) {

					case 'input':

						this.inputs.push( ( new Input() ).parse( child ) );
						break;

					default:
						break;

				}

			}

			return this;

		};

		Sampler.prototype.create = function () {

			for ( var i = 0; i < this.inputs.length; i ++ ) {

				var input = this.inputs[ i ];
				var source = this.animation.source[ input.source ];

				switch ( input.semantic ) {

					case 'INPUT':

						this.input = source.read();
						break;

					case 'OUTPUT':

						this.output = source.read();
						this.strideOut = source.accessor.stride;
						break;

					case 'INTERPOLATION':

						this.interpolation = source.read();
						break;

					case 'IN_TANGENT':

						break;

					case 'OUT_TANGENT':

						break;

					default:

						console.log( input.semantic );
						break;

				}

			}

			this.startTime = 0;
			this.endTime = 0;
			this.duration = 0;

			if ( this.input.length ) {

				this.startTime = 100000000;
				this.endTime = - 100000000;

				for ( var i = 0; i < this.input.length; i ++ ) {

					this.startTime = Math.min( this.startTime, this.input[ i ] );
					this.endTime = Math.max( this.endTime, this.input[ i ] );

				}

				this.duration = this.endTime - this.startTime;

			}

		};

		Sampler.prototype.getData = function ( type, ndx, member ) {

			var data;

			if ( type === 'matrix' && this.strideOut === 16 ) {

				data = this.output[ ndx ];

			} else if ( this.strideOut > 1 ) {

				data = [];
				ndx *= this.strideOut;

				for ( var i = 0; i < this.strideOut; ++ i ) {

					data[ i ] = this.output[ ndx + i ];

				}

				if ( this.strideOut === 3 ) {

					switch ( type ) {

						case 'rotate':
						case 'translate':

							fixCoords( data, - 1 );
							break;

						case 'scale':

							fixCoords( data, 1 );
							break;

					}

				} else if ( this.strideOut === 4 && type === 'matrix' ) {

					fixCoords( data, - 1 );

				}

			} else {

				data = this.output[ ndx ];

				if ( member && type === 'translate' ) {

					data = getConvertedTranslation( member, data );

				}

			}

			return data;

		};

		function Key ( time ) {

			this.targets = [];
			this.time = time;

		};

		Key.prototype.addTarget = function ( fullSid, transform, member, data ) {

			this.targets.push( {
				sid: fullSid,
				member: member,
				transform: transform,
				data: data
			} );

		};

		Key.prototype.apply = function ( opt_sid ) {

			for ( var i = 0; i < this.targets.length; ++ i ) {

				var target = this.targets[ i ];

				if ( ! opt_sid || target.sid === opt_sid ) {

					target.transform.update( target.data, target.member );

				}

			}

		};

		Key.prototype.getTarget = function ( fullSid ) {

			for ( var i = 0; i < this.targets.length; ++ i ) {

				if ( this.targets[ i ].sid === fullSid ) {

					return this.targets[ i ];

				}

			}

			return null;

		};

		Key.prototype.hasTarget = function ( fullSid ) {

			for ( var i = 0; i < this.targets.length; ++ i ) {

				if ( this.targets[ i ].sid === fullSid ) {

					return true;

				}

			}

			return false;

		};

		// TODO: Currently only doing linear interpolation. Should support full COLLADA spec.
		Key.prototype.interpolate = function ( nextKey, time ) {

			for ( var i = 0, l = this.targets.length; i < l; i ++ ) {

				var target = this.targets[ i ],
					nextTarget = nextKey.getTarget( target.sid ),
					data;

				if ( target.transform.type !== 'matrix' && nextTarget ) {

					var scale = ( time - this.time ) / ( nextKey.time - this.time ),
						nextData = nextTarget.data,
						prevData = target.data;

					if ( scale < 0 ) scale = 0;
					if ( scale > 1 ) scale = 1;

					if ( prevData.length ) {

						data = [];

						for ( var j = 0; j < prevData.length; ++ j ) {

							data[ j ] = prevData[ j ] + ( nextData[ j ] - prevData[ j ] ) * scale;

						}

					} else {

						data = prevData + ( nextData - prevData ) * scale;

					}

				} else {

					data = target.data;

				}

				target.transform.update( data, target.member );

			}

		};

		// Camera
		function Camera() {

			this.id = "";
			this.name = "";
			this.technique = "";

		};

		Camera.prototype.parse = function ( element ) {

			this.id = element.getAttribute( 'id' );
			this.name = element.getAttribute( 'name' );

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];
				if ( child.nodeType != 1 ) continue;

				switch ( child.nodeName ) {

					case 'optics':

						this.parseOptics( child );
						break;

					default:
						break;

				}

			}

			return this;

		};

		Camera.prototype.parseOptics = function ( element ) {

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				if ( element.childNodes[ i ].nodeName === 'technique_common' ) {

					var technique = element.childNodes[ i ];

					for ( var j = 0; j < technique.childNodes.length; j ++ ) {

						this.technique = technique.childNodes[ j ].nodeName;

						if ( this.technique === 'perspective' ) {

							var perspective = technique.childNodes[ j ];

							for ( var k = 0; k < perspective.childNodes.length; k ++ ) {

								var param = perspective.childNodes[ k ];

								switch ( param.nodeName ) {

									case 'yfov':
										this.yfov = param.textContent;
										break;
									case 'xfov':
										this.xfov = param.textContent;
										break;
									case 'znear':
										this.znear = param.textContent;
										break;
									case 'zfar':
										this.zfar = param.textContent;
										break;
									case 'aspect_ratio':
										this.aspect_ratio = param.textContent;
										break;

								}

							}

						} else if ( this.technique === 'orthographic' ) {

							var orthographic = technique.childNodes[ j ];

							for ( var k = 0; k < orthographic.childNodes.length; k ++ ) {

								var param = orthographic.childNodes[ k ];

								switch ( param.nodeName ) {

									case 'xmag':
										this.xmag = param.textContent;
										break;
									case 'ymag':
										this.ymag = param.textContent;
										break;
									case 'znear':
										this.znear = param.textContent;
										break;
									case 'zfar':
										this.zfar = param.textContent;
										break;
									case 'aspect_ratio':
										this.aspect_ratio = param.textContent;
										break;

								}

							}

						}

					}

				}

			}

			return this;

		};

		function InstanceCamera() {

			this.url = "";

		};

		InstanceCamera.prototype.parse = function ( element ) {

			this.url = element.getAttribute( 'url' ).replace( /^#/, '' );

			return this;

		};

		// Light

		function Light() {

			this.id = "";
			this.name = "";
			this.technique = "";

		};

		Light.prototype.parse = function ( element ) {

			this.id = element.getAttribute( 'id' );
			this.name = element.getAttribute( 'name' );

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];
				if ( child.nodeType != 1 ) continue;

				switch ( child.nodeName ) {

					case 'technique_common':

						this.parseCommon( child );
						break;

					case 'technique':

						this.parseTechnique( child );
						break;

					default:
						break;

				}

			}

			return this;

		};

		Light.prototype.parseCommon = function ( element ) {

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				switch ( element.childNodes[ i ].nodeName ) {

					case 'directional':
					case 'point':
					case 'spot':
					case 'ambient':

						this.technique = element.childNodes[ i ].nodeName;

						var light = element.childNodes[ i ];

						for ( var j = 0; j < light.childNodes.length; j ++ ) {

							var child = light.childNodes[ j ];

							switch ( child.nodeName ) {

								case 'color':

									var rgba = _floats( child.textContent );
									this.color = new THREE.Color( 0 );
									this.color.setRGB( rgba[ 0 ], rgba[ 1 ], rgba[ 2 ] );
									this.color.a = rgba[ 3 ];
									break;

								case 'falloff_angle':

									this.falloff_angle = parseFloat( child.textContent );
									break;

								case 'quadratic_attenuation':
									var f = parseFloat( child.textContent );
									this.distance = f ? Math.sqrt( 1 / f ) : 0;
							}

						}

				}

			}

			return this;

		};

		Light.prototype.parseTechnique = function ( element ) {

			this.profile = element.getAttribute( 'profile' );

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];

				switch ( child.nodeName ) {

					case 'intensity':

						this.intensity = parseFloat( child.textContent );
						break;

				}

			}

			return this;

		};

		function InstanceLight() {

			this.url = "";

		};

		InstanceLight.prototype.parse = function ( element ) {

			this.url = element.getAttribute( 'url' ).replace( /^#/, '' );

			return this;

		};

		function KinematicsModel( ) {

			this.id = '';
			this.name = '';
			this.joints = [];
			this.links = [];

		}

		KinematicsModel.prototype.parse = function( element ) {

			this.id = element.getAttribute( 'id' );
			this.name = element.getAttribute( 'name' );
			this.joints = [];
			this.links = [];

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];
				if ( child.nodeType != 1 ) continue;

				switch ( child.nodeName ) {

					case 'technique_common':

						this.parseCommon( child );
						break;

					default:
						break;

				}

			}

			return this;

		};

		KinematicsModel.prototype.parseCommon = function( element ) {

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];
				if ( child.nodeType != 1 ) continue;

				switch ( element.childNodes[ i ].nodeName ) {

					case 'joint':
						this.joints.push( ( new Joint() ).parse( child ) );
						break;

					case 'link':
						this.links.push( ( new Link() ).parse( child ) );
						break;

					default:
						break;

				}

			}

			return this;

		};

		function Joint( ) {

			this.sid = '';
			this.name = '';
			this.axis = new THREE.Vector3();
			this.limits = {
				min: 0,
				max: 0
			};
			this.type = '';
			this.static = false;
			this.zeroPosition = 0.0;
			this.middlePosition = 0.0;

		}

		Joint.prototype.parse = function( element ) {

			this.sid = element.getAttribute( 'sid' );
			this.name = element.getAttribute( 'name' );
			this.axis = new THREE.Vector3();
			this.limits = {
				min: 0,
				max: 0
			};
			this.type = '';
			this.static = false;
			this.zeroPosition = 0.0;
			this.middlePosition = 0.0;

			var axisElement = element.querySelector( 'axis' );
			var _axis = _floats( axisElement.textContent );
			this.axis = getConvertedVec3( _axis, 0 );

			var min = element.querySelector( 'limits min' ) ? parseFloat( element.querySelector( 'limits min' ).textContent ) : - 360;
			var max = element.querySelector( 'limits max' ) ? parseFloat( element.querySelector( 'limits max' ).textContent ) : 360;

			this.limits = {
				min: min,
				max: max
			};

			var jointTypes = [ 'prismatic', 'revolute' ];
			for ( var i = 0; i < jointTypes.length; i ++ ) {

				var type = jointTypes[ i ];

				var jointElement = element.querySelector( type );

				if ( jointElement ) {

					this.type = type;

				}

			}

			// if the min is equal to or somehow greater than the max, consider the joint static
			if ( this.limits.min >= this.limits.max ) {

				this.static = true;

			}

			this.middlePosition = ( this.limits.min + this.limits.max ) / 2.0;
			return this;

		};

		function Link( ) {

			this.sid = '';
			this.name = '';
			this.transforms = [];
			this.attachments = [];

		}

		Link.prototype.parse = function( element ) {

			this.sid = element.getAttribute( 'sid' );
			this.name = element.getAttribute( 'name' );
			this.transforms = [];
			this.attachments = [];

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];
				if ( child.nodeType != 1 ) continue;

				switch ( child.nodeName ) {

					case 'attachment_full':
						this.attachments.push( ( new Attachment() ).parse( child ) );
						break;

					case 'rotate':
					case 'translate':
					case 'matrix':

						this.transforms.push( ( new Transform() ).parse( child ) );
						break;

					default:

						break;

				}

			}

			return this;

		};

		function Attachment( ) {

			this.joint = '';
			this.transforms = [];
			this.links = [];

		}

		Attachment.prototype.parse = function( element ) {

			this.joint = element.getAttribute( 'joint' ).split( '/' ).pop();
			this.links = [];

			for ( var i = 0; i < element.childNodes.length; i ++ ) {

				var child = element.childNodes[ i ];
				if ( child.nodeType != 1 ) continue;

				switch ( child.nodeName ) {

					case 'link':
						this.links.push( ( new Link() ).parse( child ) );
						break;

					case 'rotate':
					case 'translate':
					case 'matrix':

						this.transforms.push( ( new Transform() ).parse( child ) );
						break;

					default:

						break;

				}

			}

			return this;

		};

		function _source( element ) {

			var id = element.getAttribute( 'id' );

			if ( sources[ id ] != undefined ) {

				return sources[ id ];

			}

			sources[ id ] = ( new Source( id ) ).parse( element );
			return sources[ id ];

		};

		function _nsResolver( nsPrefix ) {

			if ( nsPrefix === "dae" ) {

				return "http://www.collada.org/2005/11/COLLADASchema";

			}

			return null;

		};

		function _bools( str ) {

			var raw = _strings( str );
			var data = [];

			for ( var i = 0, l = raw.length; i < l; i ++ ) {

				data.push( ( raw[ i ] === 'true' || raw[ i ] === '1' ) ? true : false );

			}

			return data;

		};

		function _floats( str ) {

			var raw = _strings( str );
			var data = [];

			for ( var i = 0, l = raw.length; i < l; i ++ ) {

				data.push( parseFloat( raw[ i ] ) );

			}

			return data;

		};

		function _ints( str ) {

			var raw = _strings( str );
			var data = [];

			for ( var i = 0, l = raw.length; i < l; i ++ ) {

				data.push( parseInt( raw[ i ], 10 ) );

			}

			return data;

		};

		function _strings( str ) {

			return ( str.length > 0 ) ? _trimString( str ).split( /\s+/ ) : [];

		};

		function _trimString( str ) {

			return str.replace( /^\s+/, "" ).replace( /\s+$/, "" );

		};

		function _attr_as_float( element, name, defaultValue ) {

			if ( element.hasAttribute( name ) ) {

				return parseFloat( element.getAttribute( name ) );

			} else {

				return defaultValue;

			}

		};

		function _attr_as_int( element, name, defaultValue ) {

			if ( element.hasAttribute( name ) ) {

				return parseInt( element.getAttribute( name ), 10 ) ;

			} else {

				return defaultValue;

			}

		};

		function _attr_as_string( element, name, defaultValue ) {

			if ( element.hasAttribute( name ) ) {

				return element.getAttribute( name );

			} else {

				return defaultValue;

			}

		};

		function _format_float( f, num ) {

			if ( f === undefined ) {

				var s = '0.';

				while ( s.length < num + 2 ) {

					s += '0';

				}

				return s;

			}

			num = num || 2;

			var parts = f.toString().split( '.' );
			parts[ 1 ] = parts.length > 1 ? parts[ 1 ].substr( 0, num ) : "0";

			while ( parts[ 1 ].length < num ) {

				parts[ 1 ] += '0';

			}

			return parts.join( '.' );

		};

		function loadTextureImage ( texture, url ) {

			var loader = new THREE.ImageLoader();

			loader.load( url, function ( image ) {

				texture.image = image;
				texture.needsUpdate = true;

			} );

		};

		function applySkin ( geometry, instanceCtrl, frame ) {

			var skinController = controllers[ instanceCtrl.url ];

			frame = frame !== undefined ? frame : 40;

			if ( ! skinController || ! skinController.skin ) {

				console.log( 'ColladaLoader: Could not find skin controller.' );
				return;

			}

			if ( ! instanceCtrl.skeleton || ! instanceCtrl.skeleton.length ) {

				console.log( 'ColladaLoader: Could not find the skeleton for the skin. ' );
				return;

			}

			var animationBounds = calcAnimationBounds();
			var skeleton = visualScene.getChildById( instanceCtrl.skeleton[ 0 ], true ) ||
						   visualScene.getChildBySid( instanceCtrl.skeleton[ 0 ], true );

			//flatten the skeleton into a list of bones
			var bonelist = flattenSkeleton( skeleton );
			var joints = skinController.skin.joints;

			//sort that list so that the order reflects the order in the joint list
			var sortedbones = [];
			for ( var i = 0; i < joints.length; i ++ ) {

				for ( var j = 0; j < bonelist.length; j ++ ) {

					if ( bonelist[ j ].name === joints[ i ] ) {

						sortedbones[ i ] = bonelist[ j ];

					}

				}

			}

			//hook up the parents by index instead of name
			for ( var i = 0; i < sortedbones.length; i ++ ) {

				for ( var j = 0; j < sortedbones.length; j ++ ) {

					if ( sortedbones[ i ].parent === sortedbones[ j ].name ) {

						sortedbones[ i ].parent = j;

					}

				}

			}


			var i, j, w, vidx, weight;
			var v = new THREE.Vector3(), o, s;

			// move vertices to bind shape
			for ( i = 0; i < geometry.vertices.length; i ++ ) {

				geometry.vertices[ i ].applyMatrix4( skinController.skin.bindShapeMatrix );

			}

			var skinIndices = [];
			var skinWeights = [];
			var weights = skinController.skin.weights;

			//hook up the skin weights
			// TODO -  this might be a good place to choose greatest 4 weights
			for ( var i = 0; i < weights.length; i ++ ) {

				var indicies = new THREE.Vector4( weights[ i ][ 0 ] ? weights[ i ][ 0 ].joint : 0, weights[ i ][ 1 ] ? weights[ i ][ 1 ].joint : 0, weights[ i ][ 2 ] ? weights[ i ][ 2 ].joint : 0, weights[ i ][ 3 ] ? weights[ i ][ 3 ].joint : 0 );
				var weight = new THREE.Vector4( weights[ i ][ 0 ] ? weights[ i ][ 0 ].weight : 0, weights[ i ][ 1 ] ? weights[ i ][ 1 ].weight : 0, weights[ i ][ 2 ] ? weights[ i ][ 2 ].weight : 0, weights[ i ][ 3 ] ? weights[ i ][ 3 ].weight : 0 );

				skinIndices.push( indicies );
				skinWeights.push( weight );

			}

			geometry.skinIndices = skinIndices;
			geometry.skinWeights = skinWeights;
			geometry.bones = sortedbones;
			// process animation, or simply pose the rig if no animation

			//create an animation for the animated bones
			//NOTE: this has no effect when using morphtargets
			var animationdata = { "name": animationBounds.ID, "fps": 30, "length": animationBounds.frames / 30, "hierarchy": [] };

			for ( var j = 0; j < sortedbones.length; j ++ ) {

				animationdata.hierarchy.push( { parent: sortedbones[ j ].parent, name: sortedbones[ j ].name, keys: [] } );

			}

			console.log( 'ColladaLoader:', animationBounds.ID + ' has ' + sortedbones.length + ' bones.' );



			skinToBindPose( geometry, skeleton, skinController );


			for ( frame = 0; frame < animationBounds.frames; frame ++ ) {

				var bones = [];
				var skinned = [];
				// process the frame and setup the rig with a fresh
				// transform, possibly from the bone's animation channel(s)

				setupSkeleton( skeleton, bones, frame );
				setupSkinningMatrices( bones, skinController.skin );

				for ( var i = 0; i < bones.length; i ++ ) {

					for ( var j = 0; j < animationdata.hierarchy.length; j ++ ) {

						if ( animationdata.hierarchy[ j ].name === bones[ i ].sid ) {

							var key = {};
							key.time = ( frame / 30 );
							key.matrix = bones[ i ].animatrix;

							if ( frame === 0 )
								bones[ i ].matrix = key.matrix;

							var data = [ new THREE.Vector3(), new THREE.Quaternion(), new THREE.Vector3() ];
							key.matrix.decompose( data[ 0 ], data[ 1 ], data[ 2 ] );

							key.pos = [ data[ 0 ].x, data[ 0 ].y, data[ 0 ].z ];

							key.scl = [ data[ 2 ].x, data[ 2 ].y, data[ 2 ].z ];
							key.rot = data[ 1 ];

							animationdata.hierarchy[ j ].keys.push( key );

						}

					}

				}

				geometry.animation = animationdata;

			}

		};

		function calcAnimationBounds () {

			var start = 1000000;
			var end = - start;
			var frames = 0;
			var ID;
			for ( var id in animations ) {

				var animation = animations[ id ];
				ID = ID || animation.id;
				for ( var i = 0; i < animation.sampler.length; i ++ ) {

					var sampler = animation.sampler[ i ];

					sampler.create();

					start = Math.min( start, sampler.startTime );
					end = Math.max( end, sampler.endTime );
					frames = Math.max( frames, sampler.input.length );

				}

			}

			return { start: start, end: end, frames: frames, ID: ID };

		};

		function createSceneGraph ( node, parent ) {

			var obj = new THREE.Object3D();
			var skinned = false;
			var skinController;
			var morphController;
			var i, j;

			// FIXME: controllers

			for ( i = 0; i < node.controllers.length; i ++ ) {

				var controller = controllers[ node.controllers[ i ].url ];

				switch ( controller.type ) {

					case 'skin':

						if ( geometries[ controller.skin.source ] ) {

							var inst_geom = new InstanceGeometry();

							inst_geom.url = controller.skin.source;
							inst_geom.instance_material = node.controllers[ i ].instance_material;

							node.geometries.push( inst_geom );
							skinned = true;
							skinController = node.controllers[ i ];

						} else if ( controllers[ controller.skin.source ] ) {

							// urgh: controller can be chained
							// handle the most basic case...

							var second = controllers[ controller.skin.source ];
							morphController = second;
							//	skinController = node.controllers[i];

							if ( second.morph && geometries[ second.morph.source ] ) {

								var inst_geom = new InstanceGeometry();

								inst_geom.url = second.morph.source;
								inst_geom.instance_material = node.controllers[ i ].instance_material;

								node.geometries.push( inst_geom );

							}

						}

						break;

					case 'morph':

						if ( geometries[ controller.morph.source ] ) {

							var inst_geom = new InstanceGeometry();

							inst_geom.url = controller.morph.source;
							inst_geom.instance_material = node.controllers[ i ].instance_material;

							node.geometries.push( inst_geom );
							morphController = node.controllers[ i ];

						}

						console.log( 'ColladaLoader: Morph-controller partially supported.' );

					default:
						break;

				}

			}

			// geometries

			var double_sided_materials = {};

			for ( i = 0; i < node.geometries.length; i ++ ) {

				var instance_geometry = node.geometries[ i ];
				var instance_materials = instance_geometry.instance_material;
				var geometry = geometries[ instance_geometry.url ];
				var used_materials = {};
				var used_materials_array = [];
				var num_materials = 0;
				var first_material;

				if ( geometry ) {

					if ( ! geometry.mesh || ! geometry.mesh.primitives )
						continue;

					if ( obj.name.length === 0 ) {

						obj.name = geometry.id;

					}

					// collect used fx for this geometry-instance

					if ( instance_materials ) {

						for ( j = 0; j < instance_materials.length; j ++ ) {

							var instance_material = instance_materials[ j ];
							var mat = materials[ instance_material.target ];
							var effect_id = mat.instance_effect.url;
							var shader = effects[ effect_id ].shader;
							var material3js = shader.material;

							if ( geometry.doubleSided ) {

								if ( ! ( instance_material.symbol in double_sided_materials ) ) {

									var _copied_material = material3js.clone();
									_copied_material.side = THREE.DoubleSide;
									double_sided_materials[ instance_material.symbol ] = _copied_material;

								}

								material3js = double_sided_materials[ instance_material.symbol ];

							}

							material3js.opacity = ! material3js.opacity ? 1 : material3js.opacity;
							used_materials[ instance_material.symbol ] = num_materials;
							used_materials_array.push( material3js );
							first_material = material3js;
							first_material.name = mat.name === null || mat.name === '' ? mat.id : mat.name;
							num_materials ++;

						}

					}

					var mesh;
					var material = first_material || new THREE.MeshLambertMaterial( { color: 0xdddddd, side: geometry.doubleSided ? THREE.DoubleSide : THREE.FrontSide } );
					var geom = geometry.mesh.geometry3js;

					if ( num_materials > 1 ) {

						material = new THREE.MeshFaceMaterial( used_materials_array );

						for ( j = 0; j < geom.faces.length; j ++ ) {

							var face = geom.faces[ j ];
							face.materialIndex = used_materials[ face.daeMaterial ]

						}

					}

					if ( skinController !== undefined ) {


						applySkin( geom, skinController );

						if ( geom.morphTargets.length > 0 ) {

							material.morphTargets = true;
							material.skinning = false;

						} else {

							material.morphTargets = false;
							material.skinning = true;

						}


						mesh = new THREE.SkinnedMesh( geom, material, false );


						//mesh.skeleton = skinController.skeleton;
						//mesh.skinController = controllers[ skinController.url ];
						//mesh.skinInstanceController = skinController;
						mesh.name = 'skin_' + skins.length;



						//mesh.animationHandle.setKey(0);
						skins.push( mesh );

					} else if ( morphController !== undefined ) {

						createMorph( geom, morphController );

						material.morphTargets = true;

						mesh = new THREE.Mesh( geom, material );
						mesh.name = 'morph_' + morphs.length;

						morphs.push( mesh );

					} else {

						if ( geom.isLineStrip === true ) {

							mesh = new THREE.Line( geom );

						} else {

							mesh = new THREE.Mesh( geom, material );

						}

					}

					obj.add( mesh );

				}

			}

			for ( i = 0; i < node.cameras.length; i ++ ) {

				var instance_camera = node.cameras[ i ];
				var cparams = cameras[ instance_camera.url ];

				var cam = new THREE.PerspectiveCamera( cparams.yfov, parseFloat( cparams.aspect_ratio ),
						parseFloat( cparams.znear ), parseFloat( cparams.zfar ) );

				obj.add( cam );

			}

			for ( i = 0; i < node.lights.length; i ++ ) {

				var light = null;
				var instance_light = node.lights[ i ];
				var lparams = lights[ instance_light.url ];

				if ( lparams && lparams.technique ) {

					var color = lparams.color.getHex();
					var intensity = lparams.intensity;
					var distance = lparams.distance;
					var angle = lparams.falloff_angle;
					var exponent; // Intentionally undefined, don't know what this is yet

					switch ( lparams.technique ) {

						case 'directional':

							light = new THREE.DirectionalLight( color, intensity, distance );
							light.position.set( 0, 0, 1 );
							break;

						case 'point':

							light = new THREE.PointLight( color, intensity, distance );
							break;

						case 'spot':

							light = new THREE.SpotLight( color, intensity, distance, angle, exponent );
							light.position.set( 0, 0, 1 );
							break;

						case 'ambient':

							light = new THREE.AmbientLight( color );
							break;

					}

				}

				if ( light ) {

					obj.add( light );

				}

			}

			obj.name = node.name || node.id || "";
			obj.colladaId = node.id || "";
			obj.layer = node.layer || "";
			obj.matrix = node.matrix;
			obj.matrix.decompose( obj.position, obj.quaternion, obj.scale );

			if ( options.centerGeometry && obj.geometry ) {

				var delta = obj.geometry.center();
				delta.multiply( obj.scale );
				delta.applyQuaternion( obj.quaternion );

				obj.position.sub( delta );

			}

			for ( i = 0; i < node.nodes.length; i ++ ) {

				obj.add( createSceneGraph( node.nodes[ i ], node ) );

			}

			return obj;

		};

		function bakeAnimations ( node ) {

			if ( node.channels && node.channels.length ) {

				var keys = [],
					sids = [];

				for ( var i = 0, il = node.channels.length; i < il; i ++ ) {

					var channel = node.channels[ i ],
						fullSid = channel.fullSid,
						sampler = channel.sampler,
						input = sampler.input,
						transform = node.getTransformBySid( channel.sid ),
						member;

					if ( channel.arrIndices ) {

						member = [];

						for ( var j = 0, jl = channel.arrIndices.length; j < jl; j ++ ) {

							member[ j ] = getConvertedIndex( channel.arrIndices[ j ] );

						}

					} else {

						member = getConvertedMember( channel.member );

					}

					if ( transform ) {

						if ( sids.indexOf( fullSid ) === - 1 ) {

							sids.push( fullSid );

						}

						for ( var j = 0, jl = input.length; j < jl; j ++ ) {

							var time = input[ j ],
								data = sampler.getData( transform.type, j, member ),
								key = findKey( keys, time );

							if ( ! key ) {

								key = new Key( time );
								var timeNdx = findTimeNdx( keys, time );
								keys.splice( timeNdx === - 1 ? keys.length : timeNdx, 0, key );

							}

							key.addTarget( fullSid, transform, member, data );

						}

					} else {

						console.log( 'Could not find transform "' + channel.sid + '" in node ' + node.id );

					}

				}

				// post process
				for ( var i = 0; i < sids.length; i ++ ) {

					var sid = sids[ i ];

					for ( var j = 0; j < keys.length; j ++ ) {

						var key = keys[ j ];

						if ( ! key.hasTarget( sid ) ) {

							interpolateKeys( keys, key, j, sid );

						}

					}

				}

				node.keys = keys;
				node.sids = sids;

			}

		};

		function extractDoubleSided( obj, element ) {

			obj.doubleSided = false;

			var node = element.querySelectorAll( 'extra double_sided' )[ 0 ];

			if ( node ) {

				if ( node && parseInt( node.textContent, 10 ) === 1 ) {

					obj.doubleSided = true;

				}

			}

		};

		function findKey ( keys, time ) {

			var retVal = null;

			for ( var i = 0, il = keys.length; i < il && retVal === null; i ++ ) {

				var key = keys[ i ];

				if ( key.time === time ) {

					retVal = key;

				} else if ( key.time > time ) {

					break;

				}

			}

			return retVal;

		};

		function findTimeNdx ( keys, time ) {

			var ndx = - 1;

			for ( var i = 0, il = keys.length; i < il && ndx === - 1; i ++ ) {

				var key = keys[ i ];

				if ( key.time >= time ) {

					ndx = i;

				}

			}

			return ndx;

		};

		function fixCoords( data, sign ) {

			if ( options.convertUpAxis !== true || colladaUp === options.upAxis ) {

				return;

			}

			switch ( upConversion ) {

				case 'XtoY':

					var tmp = data[ 0 ];
					data[ 0 ] = sign * data[ 1 ];
					data[ 1 ] = tmp;
					break;

				case 'XtoZ':

					var tmp = data[ 2 ];
					data[ 2 ] = data[ 1 ];
					data[ 1 ] = data[ 0 ];
					data[ 0 ] = tmp;
					break;

				case 'YtoX':

					var tmp = data[ 0 ];
					data[ 0 ] = data[ 1 ];
					data[ 1 ] = sign * tmp;
					break;

				case 'YtoZ':

					var tmp = data[ 1 ];
					data[ 1 ] = sign * data[ 2 ];
					data[ 2 ] = tmp;
					break;

				case 'ZtoX':

					var tmp = data[ 0 ];
					data[ 0 ] = data[ 1 ];
					data[ 1 ] = data[ 2 ];
					data[ 2 ] = tmp;
					break;

				case 'ZtoY':

					var tmp = data[ 1 ];
					data[ 1 ] = data[ 2 ];
					data[ 2 ] = sign * tmp;
					break;

			}

		};

		//Walk the Collada tree and flatten the bones into a list, extract the position, quat and scale from the matrix
		function flattenSkeleton ( skeleton ) {

			var list = [];
			var walk = function( parentid, node, list ) {

				var bone = {};
				bone.name = node.sid;
				bone.parent = parentid;
				bone.matrix = node.matrix;
				var data = [ new THREE.Vector3(), new THREE.Quaternion(), new THREE.Vector3() ];
				bone.matrix.decompose( data[ 0 ], data[ 1 ], data[ 2 ] );

				bone.pos = [ data[ 0 ].x, data[ 0 ].y, data[ 0 ].z ];

				bone.scl = [ data[ 2 ].x, data[ 2 ].y, data[ 2 ].z ];
				bone.rotq = [ data[ 1 ].x, data[ 1 ].y, data[ 1 ].z, data[ 1 ].w ];
				list.push( bone );

				for ( var i in node.nodes ) {

					walk( node.sid, node.nodes[ i ], list );

				}

			};

			walk( - 1, skeleton, list );
			return list;

		};

		function getConvertedTranslation( axis, data ) {

			if ( options.convertUpAxis !== true || colladaUp === options.upAxis ) {

				return data;

			}

			switch ( axis ) {
				case 'X':
					data = upConversion === 'XtoY' ? data * - 1 : data;
					break;
				case 'Y':
					data = upConversion === 'YtoZ' || upConversion === 'YtoX' ? data * - 1 : data;
					break;
				case 'Z':
					data = upConversion === 'ZtoY' ? data * - 1 : data ;
					break;
				default:
					break;
			}

			return data;

		};

		function getConvertedVec3( data, offset ) {

			var arr = [ data[ offset ], data[ offset + 1 ], data[ offset + 2 ] ];
			fixCoords( arr, - 1 );
			return new THREE.Vector3( arr[ 0 ], arr[ 1 ], arr[ 2 ] );

		};

		function getConvertedMat4( data ) {

			if ( options.convertUpAxis ) {

				// First fix rotation and scale

				// Columns first
				var arr = [ data[ 0 ], data[ 4 ], data[ 8 ] ];
				fixCoords( arr, - 1 );
				data[ 0 ] = arr[ 0 ];
				data[ 4 ] = arr[ 1 ];
				data[ 8 ] = arr[ 2 ];
				arr = [ data[ 1 ], data[ 5 ], data[ 9 ] ];
				fixCoords( arr, - 1 );
				data[ 1 ] = arr[ 0 ];
				data[ 5 ] = arr[ 1 ];
				data[ 9 ] = arr[ 2 ];
				arr = [ data[ 2 ], data[ 6 ], data[ 10 ] ];
				fixCoords( arr, - 1 );
				data[ 2 ] = arr[ 0 ];
				data[ 6 ] = arr[ 1 ];
				data[ 10 ] = arr[ 2 ];
				// Rows second
				arr = [ data[ 0 ], data[ 1 ], data[ 2 ] ];
				fixCoords( arr, - 1 );
				data[ 0 ] = arr[ 0 ];
				data[ 1 ] = arr[ 1 ];
				data[ 2 ] = arr[ 2 ];
				arr = [ data[ 4 ], data[ 5 ], data[ 6 ] ];
				fixCoords( arr, - 1 );
				data[ 4 ] = arr[ 0 ];
				data[ 5 ] = arr[ 1 ];
				data[ 6 ] = arr[ 2 ];
				arr = [ data[ 8 ], data[ 9 ], data[ 10 ] ];
				fixCoords( arr, - 1 );
				data[ 8 ] = arr[ 0 ];
				data[ 9 ] = arr[ 1 ];
				data[ 10 ] = arr[ 2 ];

				// Now fix translation
				arr = [ data[ 3 ], data[ 7 ], data[ 11 ] ];
				fixCoords( arr, - 1 );
				data[ 3 ] = arr[ 0 ];
				data[ 7 ] = arr[ 1 ];
				data[ 11 ] = arr[ 2 ];

			}

			return new THREE.Matrix4().set(
				data[ 0 ], data[ 1 ], data[ 2 ], data[ 3 ],
				data[ 4 ], data[ 5 ], data[ 6 ], data[ 7 ],
				data[ 8 ], data[ 9 ], data[ 10 ], data[ 11 ],
				data[ 12 ], data[ 13 ], data[ 14 ], data[ 15 ]
				);

		};

		function getConvertedIndex( index ) {

			if ( index > - 1 && index < 3 ) {

				var members = [ 'X', 'Y', 'Z' ],
					indices = { X: 0, Y: 1, Z: 2 };

				index = getConvertedMember( members[ index ] );
				index = indices[ index ];

			}

			return index;

		};

		function getChannelsForNode ( node ) {

			var channels = [];
			var startTime = 1000000;
			var endTime = - 1000000;

			for ( var id in animations ) {

				var animation = animations[ id ];

				for ( var i = 0; i < animation.channel.length; i ++ ) {

					var channel = animation.channel[ i ];
					var sampler = animation.sampler[ i ];
					var id = channel.target.split( '/' )[ 0 ];

					if ( id == node.id ) {

						sampler.create();
						channel.sampler = sampler;
						startTime = Math.min( startTime, sampler.startTime );
						endTime = Math.max( endTime, sampler.endTime );
						channels.push( channel );

					}

				}

			}

			if ( channels.length ) {

				node.startTime = startTime;
				node.endTime = endTime;

			}

			return channels;

		};

		function getConvertedMember( member ) {

			if ( options.convertUpAxis ) {

				switch ( member ) {

					case 'X':

						switch ( upConversion ) {

							case 'XtoY':
							case 'XtoZ':
							case 'YtoX':

								member = 'Y';
								break;

							case 'ZtoX':

								member = 'Z';
								break;

						}

						break;

					case 'Y':

						switch ( upConversion ) {

							case 'XtoY':
							case 'YtoX':
							case 'ZtoX':

								member = 'X';
								break;

							case 'XtoZ':
							case 'YtoZ':
							case 'ZtoY':

								member = 'Z';
								break;

						}

						break;

					case 'Z':

						switch ( upConversion ) {

							case 'XtoZ':

								member = 'X';
								break;

							case 'YtoZ':
							case 'ZtoX':
							case 'ZtoY':

								member = 'Y';
								break;

						}

						break;

				}

			}

			return member;

		};

		function getLibraryNode ( id ) {

			var nodes = COLLADA.querySelectorAll( 'library_nodes node' );

			for ( var i = 0; i < nodes.length; i ++ ) {

				var attObj = nodes[ i ].attributes.getNamedItem( 'id' );
				if ( attObj && attObj.value === id ) {

					return nodes[ i ];

				}

			}

			return undefined;

		};

		// Get next key with given sid
		function getNextKeyWith ( keys, fullSid, ndx ) {

			for ( ; ndx < keys.length; ndx ++ ) {

				var key = keys[ ndx ];

				if ( key.hasTarget( fullSid ) ) {

					return key;

				}

			}

			return null;

		};

		// Get previous key with given sid
		function getPrevKeyWith ( keys, fullSid, ndx ) {

			ndx = ndx >= 0 ? ndx : ndx + keys.length;

			for ( ; ndx >= 0; ndx -- ) {

				var key = keys[ ndx ];

				if ( key.hasTarget( fullSid ) ) {

					return key;

				}

			}

			return null;

		};

		function interpolateKeys ( keys, key, ndx, fullSid ) {

			var prevKey = getPrevKeyWith( keys, fullSid, ndx ? ndx - 1 : 0 ),
				nextKey = getNextKeyWith( keys, fullSid, ndx + 1 );

			if ( prevKey && nextKey ) {

				var scale = ( key.time - prevKey.time ) / ( nextKey.time - prevKey.time ),
					prevTarget = prevKey.getTarget( fullSid ),
					nextData = nextKey.getTarget( fullSid ).data,
					prevData = prevTarget.data,
					data;

				if ( prevTarget.type === 'matrix' ) {

					data = prevData;

				} else if ( prevData.length ) {

					data = [];

					for ( var i = 0; i < prevData.length; ++ i ) {

						data[ i ] = prevData[ i ] + ( nextData[ i ] - prevData[ i ] ) * scale;

					}

				} else {

					data = prevData + ( nextData - prevData ) * scale;

				}

				key.addTarget( fullSid, prevTarget.transform, prevTarget.member, data );

			}

		};

		function recurseHierarchy( node ) {

			var n = visualScene.getChildById( node.colladaId, true ),
				newData = null;

			if ( n && n.keys ) {

				newData = {
					fps: 60,
					hierarchy: [ {
						node: n,
						keys: n.keys,
						sids: n.sids
					} ],
					node: node,
					name: 'animation_' + node.name,
					length: 0
				};

				animData.push( newData );

				for ( var i = 0, il = n.keys.length; i < il; i ++ ) {

					newData.length = Math.max( newData.length, n.keys[ i ].time );

				}

			} else {

				newData = {
					hierarchy: [ {
						keys: [],
						sids: []
					} ]
				}

			}

			for ( var i = 0, il = node.children.length; i < il; i ++ ) {

				var d = recurseHierarchy( node.children[ i ] );

				for ( var j = 0, jl = d.hierarchy.length; j < jl; j ++ ) {

					newData.hierarchy.push( {
						keys: [],
						sids: []
					} );

				}

			}

			return newData;

		};

		function setupSkeleton ( node, bones, frame, parent ) {

			node.world = node.world || new THREE.Matrix4();
			node.localworld = node.localworld || new THREE.Matrix4();
			node.world.copy( node.matrix );
			node.localworld.copy( node.matrix );

			if ( node.channels && node.channels.length ) {

				var channel = node.channels[ 0 ];
				var m = channel.sampler.output[ frame ];

				if ( m instanceof THREE.Matrix4 ) {

					node.world.copy( m );
					node.localworld.copy( m );
					if ( frame === 0 )
						node.matrix.copy( m );

				}

			}

			if ( parent ) {

				node.world.multiplyMatrices( parent, node.world );

			}

			bones.push( node );

			for ( var i = 0; i < node.nodes.length; i ++ ) {

				setupSkeleton( node.nodes[ i ], bones, frame, node.world );

			}

		};

		function setupSkinningMatrices ( bones, skin ) {

			// FIXME: this is dumb...

			for ( var i = 0; i < bones.length; i ++ ) {

				var bone = bones[ i ];
				var found = - 1;

				if ( bone.type != 'JOINT' ) continue;

				for ( var j = 0; j < skin.joints.length; j ++ ) {

					if ( bone.sid === skin.joints[ j ] ) {

						found = j;
						break;

					}

				}

				if ( found >= 0 ) {

					var inv = skin.invBindMatrices[ found ];

					bone.invBindMatrix = inv;
					bone.skinningMatrix = new THREE.Matrix4();
					bone.skinningMatrix.multiplyMatrices( bone.world, inv ); // (IBMi * JMi)
					bone.animatrix = new THREE.Matrix4();

					bone.animatrix.copy( bone.localworld );
					bone.weights = [];

					for ( var j = 0; j < skin.weights.length; j ++ ) {

						for ( var k = 0; k < skin.weights[ j ].length; k ++ ) {

							var w = skin.weights[ j ][ k ];

							if ( w.joint === found ) {

								bone.weights.push( w );

							}

						}

					}

				} else {

					console.warn( "ColladaLoader: Could not find joint '" + bone.sid + "'." );

					bone.skinningMatrix = new THREE.Matrix4();
					bone.weights = [];

				}

			}

		};

		//Move the vertices into the pose that is proper for the start of the animation
		function skinToBindPose ( geometry, skeleton, skinController ) {

			var bones = [];
			setupSkeleton( skeleton, bones, - 1 );
			setupSkinningMatrices( bones, skinController.skin );
			var v = new THREE.Vector3();
			var skinned = [];

			for ( var i = 0; i < geometry.vertices.length; i ++ ) {

				skinned.push( new THREE.Vector3() );

			}

			for ( var i = 0; i < bones.length; i ++ ) {

				if ( bones[ i ].type != 'JOINT' ) continue;

				for ( var j = 0; j < bones[ i ].weights.length; j ++ ) {

					var w = bones[ i ].weights[ j ];
					var vidx = w.index;
					var weight = w.weight;

					var o = geometry.vertices[ vidx ];
					var s = skinned[ vidx ];

					v.x = o.x;
					v.y = o.y;
					v.z = o.z;

					v.applyMatrix4( bones[ i ].skinningMatrix );

					s.x += ( v.x * weight );
					s.y += ( v.y * weight );
					s.z += ( v.z * weight );

				}

			}

			for ( var i = 0; i < geometry.vertices.length; i ++ ) {

				geometry.vertices[ i ] = skinned[ i ];

			}

		};


	} )();


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * @author mrdoob / http://mrdoob.com/
	 */
	var THREE = __webpack_require__(1);

	THREE.DDSLoader = function () {

		this._parser = THREE.DDSLoader.parse;

	};

	THREE.DDSLoader.prototype = Object.create( THREE.CompressedTextureLoader.prototype );
	THREE.DDSLoader.prototype.constructor = THREE.DDSLoader;

	THREE.DDSLoader.parse = function ( buffer, loadMipmaps ) {

		var dds = { mipmaps: [], width: 0, height: 0, format: null, mipmapCount: 1 };

		// Adapted from @toji's DDS utils
		// https://github.com/toji/webgl-texture-utils/blob/master/texture-util/dds.js

		// All values and structures referenced from:
		// http://msdn.microsoft.com/en-us/library/bb943991.aspx/

		var DDS_MAGIC = 0x20534444;

		var DDSD_CAPS = 0x1,
			DDSD_HEIGHT = 0x2,
			DDSD_WIDTH = 0x4,
			DDSD_PITCH = 0x8,
			DDSD_PIXELFORMAT = 0x1000,
			DDSD_MIPMAPCOUNT = 0x20000,
			DDSD_LINEARSIZE = 0x80000,
			DDSD_DEPTH = 0x800000;

		var DDSCAPS_COMPLEX = 0x8,
			DDSCAPS_MIPMAP = 0x400000,
			DDSCAPS_TEXTURE = 0x1000;

		var DDSCAPS2_CUBEMAP = 0x200,
			DDSCAPS2_CUBEMAP_POSITIVEX = 0x400,
			DDSCAPS2_CUBEMAP_NEGATIVEX = 0x800,
			DDSCAPS2_CUBEMAP_POSITIVEY = 0x1000,
			DDSCAPS2_CUBEMAP_NEGATIVEY = 0x2000,
			DDSCAPS2_CUBEMAP_POSITIVEZ = 0x4000,
			DDSCAPS2_CUBEMAP_NEGATIVEZ = 0x8000,
			DDSCAPS2_VOLUME = 0x200000;

		var DDPF_ALPHAPIXELS = 0x1,
			DDPF_ALPHA = 0x2,
			DDPF_FOURCC = 0x4,
			DDPF_RGB = 0x40,
			DDPF_YUV = 0x200,
			DDPF_LUMINANCE = 0x20000;

		function fourCCToInt32( value ) {

			return value.charCodeAt( 0 ) +
				( value.charCodeAt( 1 ) << 8 ) +
				( value.charCodeAt( 2 ) << 16 ) +
				( value.charCodeAt( 3 ) << 24 );

		}

		function int32ToFourCC( value ) {

			return String.fromCharCode(
				value & 0xff,
				( value >> 8 ) & 0xff,
				( value >> 16 ) & 0xff,
				( value >> 24 ) & 0xff
			);

		}

		function loadARGBMip( buffer, dataOffset, width, height ) {

			var dataLength = width * height * 4;
			var srcBuffer = new Uint8Array( buffer, dataOffset, dataLength );
			var byteArray = new Uint8Array( dataLength );
			var dst = 0;
			var src = 0;
			for ( var y = 0; y < height; y ++ ) {

				for ( var x = 0; x < width; x ++ ) {

					var b = srcBuffer[ src ]; src ++;
					var g = srcBuffer[ src ]; src ++;
					var r = srcBuffer[ src ]; src ++;
					var a = srcBuffer[ src ]; src ++;
					byteArray[ dst ] = r; dst ++;	//r
					byteArray[ dst ] = g; dst ++;	//g
					byteArray[ dst ] = b; dst ++;	//b
					byteArray[ dst ] = a; dst ++;	//a

				}

			}
			return byteArray;

		}

		var FOURCC_DXT1 = fourCCToInt32( "DXT1" );
		var FOURCC_DXT3 = fourCCToInt32( "DXT3" );
		var FOURCC_DXT5 = fourCCToInt32( "DXT5" );

		var headerLengthInt = 31; // The header length in 32 bit ints

		// Offsets into the header array

		var off_magic = 0;

		var off_size = 1;
		var off_flags = 2;
		var off_height = 3;
		var off_width = 4;

		var off_mipmapCount = 7;

		var off_pfFlags = 20;
		var off_pfFourCC = 21;
		var off_RGBBitCount = 22;
		var off_RBitMask = 23;
		var off_GBitMask = 24;
		var off_BBitMask = 25;
		var off_ABitMask = 26;

		var off_caps = 27;
		var off_caps2 = 28;
		var off_caps3 = 29;
		var off_caps4 = 30;

		// Parse header

		var header = new Int32Array( buffer, 0, headerLengthInt );

		if ( header[ off_magic ] !== DDS_MAGIC ) {

			console.error( 'THREE.DDSLoader.parse: Invalid magic number in DDS header.' );
			return dds;

		}

		if ( ! header[ off_pfFlags ] & DDPF_FOURCC ) {

			console.error( 'THREE.DDSLoader.parse: Unsupported format, must contain a FourCC code.' );
			return dds;

		}

		var blockBytes;

		var fourCC = header[ off_pfFourCC ];

		var isRGBAUncompressed = false;

		switch ( fourCC ) {

			case FOURCC_DXT1:

				blockBytes = 8;
				dds.format = THREE.RGB_S3TC_DXT1_Format;
				break;

			case FOURCC_DXT3:

				blockBytes = 16;
				dds.format = THREE.RGBA_S3TC_DXT3_Format;
				break;

			case FOURCC_DXT5:

				blockBytes = 16;
				dds.format = THREE.RGBA_S3TC_DXT5_Format;
				break;

			default:

				if ( header[ off_RGBBitCount ] === 32
					&& header[ off_RBitMask ] & 0xff0000
					&& header[ off_GBitMask ] & 0xff00
					&& header[ off_BBitMask ] & 0xff
					&& header[ off_ABitMask ] & 0xff000000  ) {

					isRGBAUncompressed = true;
					blockBytes = 64;
					dds.format = THREE.RGBAFormat;

				} else {

					console.error( 'THREE.DDSLoader.parse: Unsupported FourCC code ', int32ToFourCC( fourCC ) );
					return dds;

				}
		}

		dds.mipmapCount = 1;

		if ( header[ off_flags ] & DDSD_MIPMAPCOUNT && loadMipmaps !== false ) {

			dds.mipmapCount = Math.max( 1, header[ off_mipmapCount ] );

		}

		var caps2 = header[ off_caps2 ];
		dds.isCubemap = caps2 & DDSCAPS2_CUBEMAP ? true : false;
		if ( dds.isCubemap && (
			! ( caps2 & DDSCAPS2_CUBEMAP_POSITIVEX ) ||
			! ( caps2 & DDSCAPS2_CUBEMAP_NEGATIVEX ) ||
			! ( caps2 & DDSCAPS2_CUBEMAP_POSITIVEY ) ||
			! ( caps2 & DDSCAPS2_CUBEMAP_NEGATIVEY ) ||
			! ( caps2 & DDSCAPS2_CUBEMAP_POSITIVEZ ) ||
			! ( caps2 & DDSCAPS2_CUBEMAP_NEGATIVEZ )
			) ) {

			console.error( 'THREE.DDSLoader.parse: Incomplete cubemap faces' );
			return dds;

		}

		dds.width = header[ off_width ];
		dds.height = header[ off_height ];

		var dataOffset = header[ off_size ] + 4;

		// Extract mipmaps buffers

		var faces = dds.isCubemap ? 6 : 1;

		for ( var face = 0; face < faces; face ++ ) {

			var width = dds.width;
			var height = dds.height;

			for ( var i = 0; i < dds.mipmapCount; i ++ ) {

				if ( isRGBAUncompressed ) {

					var byteArray = loadARGBMip( buffer, dataOffset, width, height );
					var dataLength = byteArray.length;

				} else {

					var dataLength = Math.max( 4, width ) / 4 * Math.max( 4, height ) / 4 * blockBytes;
					var byteArray = new Uint8Array( buffer, dataOffset, dataLength );

				}

				var mipmap = { "data": byteArray, "width": width, "height": height };
				dds.mipmaps.push( mipmap );

				dataOffset += dataLength;

				width = Math.max( width >> 1, 1 );
				height = Math.max( height >> 1, 1 );

			}

		}

		return dds;

	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * @author ioannis charalampidis / http://github.com/wavesoft
	 */
	var THREE = __webpack_require__(1);
	var MD2Character = __webpack_require__(11);

	THREE.MD2CharacterLoader = function () {
	};

	THREE.MD2CharacterLoader.prototype = {
		constructor: THREE.MD2CharacterLoader,

		/**
		 * Load an MD2 Character with the config provided
		 */
		load: function(config, onload, onprogress, onerror) {

			var character = new THREE.MD2Character();

			character.onLoadComplete = function() {
				if (onload) onload( character );
			};

			character.loadParts( config );

		}

	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author alteredq / http://alteredqualia.com/
	 */
	var THREE = __webpack_require__(1);
	THREE.MD2Character = function () {

		var scope = this;

		this.scale = 1;
		this.animationFPS = 6;

		this.root = new THREE.Object3D();

		this.meshBody = null;
		this.meshWeapon = null;

		this.skinsBody = [];
		this.skinsWeapon = [];

		this.weapons = [];

		this.activeAnimation = null;

		this.mixer = null;

		this.onLoadComplete = function () {};

		this.loadCounter = 0;

		this.loadParts = function ( config ) {

			this.loadCounter = config.weapons.length * 2 + config.skins.length + 1;

			var weaponsTextures = [];
			for ( var i = 0; i < config.weapons.length; i ++ ) weaponsTextures[ i ] = config.weapons[ i ][ 1 ];

			// SKINS

			this.skinsBody = loadTextures( config.baseUrl + "skins/", config.skins );
			this.skinsWeapon = loadTextures( config.baseUrl + "skins/", weaponsTextures );

			// BODY

			var loader = new THREE.MD2Loader();

			loader.load( config.baseUrl + config.body, function( geo ) {

				geo.computeBoundingBox();
				scope.root.position.y = - scope.scale * geo.boundingBox.min.y;

				var mesh = createPart( geo, scope.skinsBody[ 0 ] );
				mesh.scale.set( scope.scale, scope.scale, scope.scale );

				scope.root.add( mesh );

				scope.meshBody = mesh;

				scope.meshBody.clipOffset = 0;
				scope.activeAnimationClipName = mesh.geometry.animations[0].name;

				scope.mixer = new THREE.AnimationMixer( mesh );

				checkLoadingComplete();

			} );

			// WEAPONS

			var generateCallback = function ( index, name ) {

				return function( geo ) {

					var mesh = createPart( geo, scope.skinsWeapon[ index ] );
					mesh.scale.set( scope.scale, scope.scale, scope.scale );
					mesh.visible = false;

					mesh.name = name;

					scope.root.add( mesh );

					scope.weapons[ index ] = mesh;
					scope.meshWeapon = mesh;

					checkLoadingComplete();

				}

			};

			for ( var i = 0; i < config.weapons.length; i ++ ) {

				loader.load( config.baseUrl + config.weapons[ i ][ 0 ], generateCallback( i, config.weapons[ i ][ 0 ] ) );

			}

		};

		this.setPlaybackRate = function ( rate ) {

			if( rate !== 0 ) {
				this.mixer.timeScale = 1 / rate;
			}
			else {
				this.mixer.timeScale = 0;
			}

		};

		this.setWireframe = function ( wireframeEnabled ) {

			if ( wireframeEnabled ) {

				if ( this.meshBody ) this.meshBody.material = this.meshBody.materialWireframe;
				if ( this.meshWeapon ) this.meshWeapon.material = this.meshWeapon.materialWireframe;

			} else {

				if ( this.meshBody ) this.meshBody.material = this.meshBody.materialTexture;
				if ( this.meshWeapon ) this.meshWeapon.material = this.meshWeapon.materialTexture;

			}

		};

		this.setSkin = function( index ) {

			if ( this.meshBody && this.meshBody.material.wireframe === false ) {

				this.meshBody.material.map = this.skinsBody[ index ];

			}

		};

		this.setWeapon = function ( index ) {

			for ( var i = 0; i < this.weapons.length; i ++ ) this.weapons[ i ].visible = false;

			var activeWeapon = this.weapons[ index ];

			if ( activeWeapon ) {

				activeWeapon.visible = true;
				this.meshWeapon = activeWeapon;

				scope.syncWeaponAnimation();

			}

		};

		this.setAnimation = function ( clipName ) {

			if ( this.meshBody ) {

				if( this.meshBody.activeAction ) {
					scope.mixer.removeAction( this.meshBody.activeAction );
					this.meshBody.activeAction = null;
				}

				var clip = THREE.AnimationClip.findByName( this.meshBody.geometry.animations, clipName );
				if( clip ) {

					var action = new THREE.AnimationAction( clip, this.mixer.time ).setLocalRoot( this.meshBody );
					scope.mixer.addAction( action );

					this.meshBody.activeAction = action;

				}

			}

			scope.activeClipName = clipName;

			scope.syncWeaponAnimation();

		};

		this.syncWeaponAnimation = function() {

			var clipName = scope.activeClipName;

			if ( scope.meshWeapon ) {

				if( this.meshWeapon.activeAction ) {
					scope.mixer.removeAction( this.meshWeapon.activeAction );
					this.meshWeapon.activeAction = null;
				}

				var clip = THREE.AnimationClip.findByName( this.meshWeapon.geometry.animations, clipName );
				if( clip ) {

					var action = new THREE.AnimationAction( clip ).syncWith( this.meshBody.activeAction ).setLocalRoot( this.meshWeapon );
					scope.mixer.addAction( action );

					this.meshWeapon.activeAction = action;

				}

			}
				
		}

		this.update = function ( delta ) {

			if( this.mixer ) this.mixer.update( delta );

		};

		function loadTextures( baseUrl, textureUrls ) {

			var mapping = THREE.UVMapping;
			var textures = [];

			for ( var i = 0; i < textureUrls.length; i ++ ) {

				textures[ i ] = THREE.ImageUtils.loadTexture( baseUrl + textureUrls[ i ], mapping, checkLoadingComplete );
				textures[ i ].name = textureUrls[ i ];

			}

			return textures;

		}

		function createPart( geometry, skinMap ) {

			var materialWireframe = new THREE.MeshLambertMaterial( { color: 0xffaa00, wireframe: true, morphTargets: true, morphNormals: true } );
			var materialTexture = new THREE.MeshLambertMaterial( { color: 0xffffff, wireframe: false, map: skinMap, morphTargets: true, morphNormals: true } );

			//

			var mesh = new THREE.Mesh( geometry, materialTexture );
			mesh.rotation.y = - Math.PI / 2;

			mesh.castShadow = true;
			mesh.receiveShadow = true;

			//

			mesh.materialTexture = materialTexture;
			mesh.materialWireframe = materialWireframe;
		
			return mesh;

		}

		function checkLoadingComplete() {

			scope.loadCounter -= 1;

			if ( scope.loadCounter === 0 ) scope.onLoadComplete();

		}

	};

	module.exports = THREE.MD2Character;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author mrdoob / http://mrdoob.com/
	 */
	var THREE = __webpack_require__(1);

	THREE.MD2Loader = function ( manager ) {

		this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

	};

	THREE.MD2Loader.prototype = {

		constructor: THREE.MD2Loader,

		load: function ( url, onLoad, onProgress, onError ) {

			var scope = this;

			var loader = new THREE.XHRLoader( scope.manager );
			loader.setCrossOrigin( this.crossOrigin );
			loader.setResponseType( 'arraybuffer' );
			loader.load( url, function ( buffer ) {

				onLoad( scope.parse( buffer ) );

			}, onProgress, onError );

		},

		setCrossOrigin: function ( value ) {

			this.crossOrigin = value;

		},

		parse: ( function () {

			var normals = [
				[ -0.525731,  0.000000,  0.850651 ], [ -0.442863,  0.238856,  0.864188 ],
				[ -0.295242,  0.000000,  0.955423 ], [ -0.309017,  0.500000,  0.809017 ],
				[ -0.162460,  0.262866,  0.951056 ], [  0.000000,  0.000000,  1.000000 ],
				[  0.000000,  0.850651,  0.525731 ], [ -0.147621,  0.716567,  0.681718 ],
				[  0.147621,  0.716567,  0.681718 ], [  0.000000,  0.525731,  0.850651 ],
				[  0.309017,  0.500000,  0.809017 ], [  0.525731,  0.000000,  0.850651 ],
				[  0.295242,  0.000000,  0.955423 ], [  0.442863,  0.238856,  0.864188 ],
				[  0.162460,  0.262866,  0.951056 ], [ -0.681718,  0.147621,  0.716567 ],
				[ -0.809017,  0.309017,  0.500000 ], [ -0.587785,  0.425325,  0.688191 ],
				[ -0.850651,  0.525731,  0.000000 ], [ -0.864188,  0.442863,  0.238856 ],
				[ -0.716567,  0.681718,  0.147621 ], [ -0.688191,  0.587785,  0.425325 ],
				[ -0.500000,  0.809017,  0.309017 ], [ -0.238856,  0.864188,  0.442863 ],
				[ -0.425325,  0.688191,  0.587785 ], [ -0.716567,  0.681718, -0.147621 ],
				[ -0.500000,  0.809017, -0.309017 ], [ -0.525731,  0.850651,  0.000000 ],
				[  0.000000,  0.850651, -0.525731 ], [ -0.238856,  0.864188, -0.442863 ],
				[  0.000000,  0.955423, -0.295242 ], [ -0.262866,  0.951056, -0.162460 ],
				[  0.000000,  1.000000,  0.000000 ], [  0.000000,  0.955423,  0.295242 ],
				[ -0.262866,  0.951056,  0.162460 ], [  0.238856,  0.864188,  0.442863 ],
				[  0.262866,  0.951056,  0.162460 ], [  0.500000,  0.809017,  0.309017 ],
				[  0.238856,  0.864188, -0.442863 ], [  0.262866,  0.951056, -0.162460 ],
				[  0.500000,  0.809017, -0.309017 ], [  0.850651,  0.525731,  0.000000 ],
				[  0.716567,  0.681718,  0.147621 ], [  0.716567,  0.681718, -0.147621 ],
				[  0.525731,  0.850651,  0.000000 ], [  0.425325,  0.688191,  0.587785 ],
				[  0.864188,  0.442863,  0.238856 ], [  0.688191,  0.587785,  0.425325 ],
				[  0.809017,  0.309017,  0.500000 ], [  0.681718,  0.147621,  0.716567 ],
				[  0.587785,  0.425325,  0.688191 ], [  0.955423,  0.295242,  0.000000 ],
				[  1.000000,  0.000000,  0.000000 ], [  0.951056,  0.162460,  0.262866 ],
				[  0.850651, -0.525731,  0.000000 ], [  0.955423, -0.295242,  0.000000 ],
				[  0.864188, -0.442863,  0.238856 ], [  0.951056, -0.162460,  0.262866 ],
				[  0.809017, -0.309017,  0.500000 ], [  0.681718, -0.147621,  0.716567 ],
				[  0.850651,  0.000000,  0.525731 ], [  0.864188,  0.442863, -0.238856 ],
				[  0.809017,  0.309017, -0.500000 ], [  0.951056,  0.162460, -0.262866 ],
				[  0.525731,  0.000000, -0.850651 ], [  0.681718,  0.147621, -0.716567 ],
				[  0.681718, -0.147621, -0.716567 ], [  0.850651,  0.000000, -0.525731 ],
				[  0.809017, -0.309017, -0.500000 ], [  0.864188, -0.442863, -0.238856 ],
				[  0.951056, -0.162460, -0.262866 ], [  0.147621,  0.716567, -0.681718 ],
				[  0.309017,  0.500000, -0.809017 ], [  0.425325,  0.688191, -0.587785 ],
				[  0.442863,  0.238856, -0.864188 ], [  0.587785,  0.425325, -0.688191 ],
				[  0.688191,  0.587785, -0.425325 ], [ -0.147621,  0.716567, -0.681718 ],
				[ -0.309017,  0.500000, -0.809017 ], [  0.000000,  0.525731, -0.850651 ],
				[ -0.525731,  0.000000, -0.850651 ], [ -0.442863,  0.238856, -0.864188 ],
				[ -0.295242,  0.000000, -0.955423 ], [ -0.162460,  0.262866, -0.951056 ],
				[  0.000000,  0.000000, -1.000000 ], [  0.295242,  0.000000, -0.955423 ],
				[  0.162460,  0.262866, -0.951056 ], [ -0.442863, -0.238856, -0.864188 ],
				[ -0.309017, -0.500000, -0.809017 ], [ -0.162460, -0.262866, -0.951056 ],
				[  0.000000, -0.850651, -0.525731 ], [ -0.147621, -0.716567, -0.681718 ],
				[  0.147621, -0.716567, -0.681718 ], [  0.000000, -0.525731, -0.850651 ],
				[  0.309017, -0.500000, -0.809017 ], [  0.442863, -0.238856, -0.864188 ],
				[  0.162460, -0.262866, -0.951056 ], [  0.238856, -0.864188, -0.442863 ],
				[  0.500000, -0.809017, -0.309017 ], [  0.425325, -0.688191, -0.587785 ],
				[  0.716567, -0.681718, -0.147621 ], [  0.688191, -0.587785, -0.425325 ],
				[  0.587785, -0.425325, -0.688191 ], [  0.000000, -0.955423, -0.295242 ],
				[  0.000000, -1.000000,  0.000000 ], [  0.262866, -0.951056, -0.162460 ],
				[  0.000000, -0.850651,  0.525731 ], [  0.000000, -0.955423,  0.295242 ],
				[  0.238856, -0.864188,  0.442863 ], [  0.262866, -0.951056,  0.162460 ],
				[  0.500000, -0.809017,  0.309017 ], [  0.716567, -0.681718,  0.147621 ],
				[  0.525731, -0.850651,  0.000000 ], [ -0.238856, -0.864188, -0.442863 ],
				[ -0.500000, -0.809017, -0.309017 ], [ -0.262866, -0.951056, -0.162460 ],
				[ -0.850651, -0.525731,  0.000000 ], [ -0.716567, -0.681718, -0.147621 ],
				[ -0.716567, -0.681718,  0.147621 ], [ -0.525731, -0.850651,  0.000000 ],
				[ -0.500000, -0.809017,  0.309017 ], [ -0.238856, -0.864188,  0.442863 ],
				[ -0.262866, -0.951056,  0.162460 ], [ -0.864188, -0.442863,  0.238856 ],
				[ -0.809017, -0.309017,  0.500000 ], [ -0.688191, -0.587785,  0.425325 ],
				[ -0.681718, -0.147621,  0.716567 ], [ -0.442863, -0.238856,  0.864188 ],
				[ -0.587785, -0.425325,  0.688191 ], [ -0.309017, -0.500000,  0.809017 ],
				[ -0.147621, -0.716567,  0.681718 ], [ -0.425325, -0.688191,  0.587785 ],
				[ -0.162460, -0.262866,  0.951056 ], [  0.442863, -0.238856,  0.864188 ],
				[  0.162460, -0.262866,  0.951056 ], [  0.309017, -0.500000,  0.809017 ],
				[  0.147621, -0.716567,  0.681718 ], [  0.000000, -0.525731,  0.850651 ],
				[  0.425325, -0.688191,  0.587785 ], [  0.587785, -0.425325,  0.688191 ],
				[  0.688191, -0.587785,  0.425325 ], [ -0.955423,  0.295242,  0.000000 ],
				[ -0.951056,  0.162460,  0.262866 ], [ -1.000000,  0.000000,  0.000000 ],
				[ -0.850651,  0.000000,  0.525731 ], [ -0.955423, -0.295242,  0.000000 ],
				[ -0.951056, -0.162460,  0.262866 ], [ -0.864188,  0.442863, -0.238856 ],
				[ -0.951056,  0.162460, -0.262866 ], [ -0.809017,  0.309017, -0.500000 ],
				[ -0.864188, -0.442863, -0.238856 ], [ -0.951056, -0.162460, -0.262866 ],
				[ -0.809017, -0.309017, -0.500000 ], [ -0.681718,  0.147621, -0.716567 ],
				[ -0.681718, -0.147621, -0.716567 ], [ -0.850651,  0.000000, -0.525731 ],
				[ -0.688191,  0.587785, -0.425325 ], [ -0.587785,  0.425325, -0.688191 ],
				[ -0.425325,  0.688191, -0.587785 ], [ -0.425325, -0.688191, -0.587785 ],
				[ -0.587785, -0.425325, -0.688191 ], [ -0.688191, -0.587785, -0.425325 ]
			];

			return function ( buffer ) {

				console.time( 'MD2Loader' );

				var data = new DataView( buffer );

				// http://tfc.duke.free.fr/coding/md2-specs-en.html

				var header = {};
				var headerNames = [
					'ident', 'version',
					'skinwidth', 'skinheight',
					'framesize',
					'num_skins', 'num_vertices', 'num_st', 'num_tris', 'num_glcmds', 'num_frames',
					'offset_skins', 'offset_st', 'offset_tris', 'offset_frames', 'offset_glcmds', 'offset_end'
				];

				for ( var i = 0; i < headerNames.length; i ++ ) {

					header[ headerNames[ i ] ] = data.getInt32( i * 4, true );

				}

				if ( header.ident !== 844121161 || header.version !== 8 ) {

					console.error( 'Not a valid MD2 file' );
					return;

				}

				if ( header.offset_end !== data.byteLength ) {

					console.error( 'Corrupted MD2 file' );
					return;

				}

				//

				var geometry = new THREE.Geometry();

				// uvs

				var uvs = [];
				var offset = header.offset_st;

				for ( var i = 0, l = header.num_st; i < l; i ++ ) {

					var u = data.getInt16( offset + 0, true );
					var v = data.getInt16( offset + 2, true );

					uvs.push( new THREE.Vector2( u / header.skinwidth, 1 - ( v / header.skinheight ) ) );

					offset += 4;

				}

				// triangles

				var offset = header.offset_tris;

				for ( var i = 0, l = header.num_tris; i < l; i ++ ) {

					var a = data.getUint16( offset + 0, true );
					var b = data.getUint16( offset + 2, true );
					var c = data.getUint16( offset + 4, true );

					geometry.faces.push( new THREE.Face3( a, b, c ) );

					geometry.faceVertexUvs[ 0 ].push( [
						uvs[ data.getUint16( offset + 6, true ) ],
						uvs[ data.getUint16( offset + 8, true ) ],
						uvs[ data.getUint16( offset + 10, true ) ]
					] );

					offset += 12;

				}

				// frames

				var translation = new THREE.Vector3();
				var scale = new THREE.Vector3();
				var string = [];

				var offset = header.offset_frames;

				for ( var i = 0, l = header.num_frames; i < l; i ++ ) {

					scale.set(
						data.getFloat32( offset + 0, true ),
						data.getFloat32( offset + 4, true ),
						data.getFloat32( offset + 8, true )
					);

					translation.set(
						data.getFloat32( offset + 12, true ),
						data.getFloat32( offset + 16, true ),
						data.getFloat32( offset + 20, true )
					);

					offset += 24;

					for ( var j = 0; j < 16; j ++ ) {

						var character = data.getUint8( offset + j, true );
						if( character === 0 ) break;
						
						string[ j ] = character;

					}

					var frame = {
						name: String.fromCharCode.apply( null, string ),
						vertices: [],
						normals: []
					};

					offset += 16;

					for ( var j = 0; j < header.num_vertices; j ++ ) {

						var x = data.getUint8( offset ++, true );
						var y = data.getUint8( offset ++, true );
						var z = data.getUint8( offset ++, true );
						var n = normals[ data.getUint8( offset ++, true ) ];

						var vertex = new THREE.Vector3(
							x * scale.x + translation.x,
							z * scale.z + translation.z,
							y * scale.y + translation.y
						);

						var normal = new THREE.Vector3( n[ 0 ], n[ 2 ], n[ 1 ] );

						frame.vertices.push( vertex );
						frame.normals.push( normal );

					}

					geometry.morphTargets.push( frame );

				}

				// Static

				geometry.vertices = geometry.morphTargets[ 0 ].vertices;

				var morphTarget = geometry.morphTargets[ 0 ];

				for ( var j = 0, jl = geometry.faces.length; j < jl; j ++ ) {

					var face = geometry.faces[ j ];

					face.vertexNormals = [
						morphTarget.normals[ face.a ],
						morphTarget.normals[ face.b ],
						morphTarget.normals[ face.c ]
					];

				}


				// Convert to geometry.morphNormals

				for ( var i = 0, l = geometry.morphTargets.length; i < l; i ++ ) {

					var morphTarget = geometry.morphTargets[ i ];
					var vertexNormals = [];

					for ( var j = 0, jl = geometry.faces.length; j < jl; j ++ ) {

						var face = geometry.faces[ j ];

						vertexNormals.push( {
							a: morphTarget.normals[ face.a ],
							b: morphTarget.normals[ face.b ],
							c: morphTarget.normals[ face.c ]
						} );

					}

					geometry.morphNormals.push( { vertexNormals: vertexNormals } );

				}

				geometry.animations = THREE.AnimationClip.CreateClipsFromMorphTargetSequences( geometry.morphTargets, 10 )

				console.timeEnd( 'MD2Loader' );

				return geometry;

			}

		} )()

	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Loads a Wavefront .mtl file specifying materials
	 *
	 * @author angelxuanchang
	 */
	var THREE = __webpack_require__(1);

	THREE.MTLLoader = function( manager ) {

		this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

	};

	THREE.MTLLoader.prototype = {

		constructor: THREE.MTLLoader,

		load: function ( url, onLoad, onProgress, onError ) {

			var scope = this;

			var loader = new THREE.XHRLoader( this.manager );
			loader.setCrossOrigin( this.crossOrigin );
			loader.load( url, function ( text ) {

				onLoad( scope.parse( text ) );

			}, onProgress, onError );

		},

		setBaseUrl: function( value ) {

			this.baseUrl = value;

		},

		setCrossOrigin: function ( value ) {

			this.crossOrigin = value;

		},

		setMaterialOptions: function ( value ) {

			this.materialOptions = value;

		},

		/**
		 * Parses loaded MTL file
		 * @param text - Content of MTL file
		 * @return {THREE.MTLLoader.MaterialCreator}
		 */
		parse: function ( text ) {

			var lines = text.split( "\n" );
			var info = {};
			var delimiter_pattern = /\s+/;
			var materialsInfo = {};

			for ( var i = 0; i < lines.length; i ++ ) {

				var line = lines[ i ];
				line = line.trim();

				if ( line.length === 0 || line.charAt( 0 ) === '#' ) {

					// Blank line or comment ignore
					continue;

				}

				var pos = line.indexOf( ' ' );

				var key = ( pos >= 0 ) ? line.substring( 0, pos ) : line;
				key = key.toLowerCase();

				var value = ( pos >= 0 ) ? line.substring( pos + 1 ) : "";
				value = value.trim();

				if ( key === "newmtl" ) {

					// New material

					info = { name: value };
					materialsInfo[ value ] = info;

				} else if ( info ) {

					if ( key === "ka" || key === "kd" || key === "ks" ) {

						var ss = value.split( delimiter_pattern, 3 );
						info[ key ] = [ parseFloat( ss[ 0 ] ), parseFloat( ss[ 1 ] ), parseFloat( ss[ 2 ] ) ];

					} else {

						info[ key ] = value;

					}

				}

			}

			var materialCreator = new THREE.MTLLoader.MaterialCreator( this.baseUrl, this.materialOptions );
			materialCreator.setCrossOrigin( this.crossOrigin );
			materialCreator.setManager( this.manager );
			materialCreator.setMaterials( materialsInfo );
			return materialCreator;

		}

	};

	/**
	 * Create a new THREE-MTLLoader.MaterialCreator
	 * @param baseUrl - Url relative to which textures are loaded
	 * @param options - Set of options on how to construct the materials
	 *                  side: Which side to apply the material
	 *                        THREE.FrontSide (default), THREE.BackSide, THREE.DoubleSide
	 *                  wrap: What type of wrapping to apply for textures
	 *                        THREE.RepeatWrapping (default), THREE.ClampToEdgeWrapping, THREE.MirroredRepeatWrapping
	 *                  normalizeRGB: RGBs need to be normalized to 0-1 from 0-255
	 *                                Default: false, assumed to be already normalized
	 *                  ignoreZeroRGBs: Ignore values of RGBs (Ka,Kd,Ks) that are all 0's
	 *                                  Default: false
	 *                  invertTransparency: If transparency need to be inverted (inversion is needed if d = 0 is fully opaque)
	 *                                      Default: false (d = 1 is fully opaque)
	 * @constructor
	 */

	THREE.MTLLoader.MaterialCreator = function( baseUrl, options ) {

		this.baseUrl = baseUrl;
		this.options = options;
		this.materialsInfo = {};
		this.materials = {};
		this.materialsArray = [];
		this.nameLookup = {};

		this.side = ( this.options && this.options.side ) ? this.options.side : THREE.FrontSide;
		this.wrap = ( this.options && this.options.wrap ) ? this.options.wrap : THREE.RepeatWrapping;

	};

	THREE.MTLLoader.MaterialCreator.prototype = {

		constructor: THREE.MTLLoader.MaterialCreator,

		setCrossOrigin: function ( value ) {

			this.crossOrigin = value;

		},

		setManager: function ( value ) {

			this.manager = value;

		},

		setMaterials: function( materialsInfo ) {

			this.materialsInfo = this.convert( materialsInfo );
			this.materials = {};
			this.materialsArray = [];
			this.nameLookup = {};

		},

		convert: function( materialsInfo ) {

			if ( ! this.options ) return materialsInfo;

			var converted = {};

			for ( var mn in materialsInfo ) {

				// Convert materials info into normalized form based on options

				var mat = materialsInfo[ mn ];

				var covmat = {};

				converted[ mn ] = covmat;

				for ( var prop in mat ) {

					var save = true;
					var value = mat[ prop ];
					var lprop = prop.toLowerCase();

					switch ( lprop ) {

						case 'kd':
						case 'ka':
						case 'ks':

							// Diffuse color (color under white light) using RGB values

							if ( this.options && this.options.normalizeRGB ) {

								value = [ value[ 0 ] / 255, value[ 1 ] / 255, value[ 2 ] / 255 ];

							}

							if ( this.options && this.options.ignoreZeroRGBs ) {

								if ( value[ 0 ] === 0 && value[ 1 ] === 0 && value[ 1 ] === 0 ) {

									// ignore

									save = false;

								}

							}

							break;

						case 'd':

							// According to MTL format (http://paulbourke.net/dataformats/mtl/):
							//   d is dissolve for current material
							//   factor of 1.0 is fully opaque, a factor of 0 is fully dissolved (completely transparent)

							if ( this.options && this.options.invertTransparency ) {

								value = 1 - value;

							}

							break;

						default:

							break;
					}

					if ( save ) {

						covmat[ lprop ] = value;

					}

				}

			}

			return converted;

		},

		preload: function () {

			for ( var mn in this.materialsInfo ) {

				this.create( mn );

			}

		},

		getIndex: function( materialName ) {

			return this.nameLookup[ materialName ];

		},

		getAsArray: function() {

			var index = 0;

			for ( var mn in this.materialsInfo ) {

				this.materialsArray[ index ] = this.create( mn );
				this.nameLookup[ mn ] = index;
				index ++;

			}

			return this.materialsArray;

		},

		create: function ( materialName ) {

			if ( this.materials[ materialName ] === undefined ) {

				this.createMaterial_( materialName );

			}

			return this.materials[ materialName ];

		},

		createMaterial_: function ( materialName ) {

			// Create material

			var mat = this.materialsInfo[ materialName ];
			var params = {

				name: materialName,
				side: this.side

			};

			for ( var prop in mat ) {

				var value = mat[ prop ];

				switch ( prop.toLowerCase() ) {

					// Ns is material specular exponent

					case 'kd':

						// Diffuse color (color under white light) using RGB values

						params[ 'diffuse' ] = new THREE.Color().fromArray( value );

						break;

					case 'ka':

						// Ambient color (color under shadow) using RGB values

						break;

					case 'ks':

						// Specular color (color when light is reflected from shiny surface) using RGB values
						params[ 'specular' ] = new THREE.Color().fromArray( value );

						break;

					case 'map_kd':

						// Diffuse texture map

						params[ 'map' ] = this.loadTexture( this.baseUrl + value );
						params[ 'map' ].wrapS = this.wrap;
						params[ 'map' ].wrapT = this.wrap;

						break;

					case 'ns':

						// The specular exponent (defines the focus of the specular highlight)
						// A high exponent results in a tight, concentrated highlight. Ns values normally range from 0 to 1000.

						params[ 'shininess' ] = value;

						break;

					case 'd':

						// According to MTL format (http://paulbourke.net/dataformats/mtl/):
						//   d is dissolve for current material
						//   factor of 1.0 is fully opaque, a factor of 0 is fully dissolved (completely transparent)

						if ( value < 1 ) {

							params[ 'transparent' ] = true;
							params[ 'opacity' ] = value;

						}

						break;

					case 'map_bump':
					case 'bump':

						// Bump texture map

						if ( params[ 'bumpMap' ] ) break; // Avoid loading twice.

						params[ 'bumpMap' ] = this.loadTexture( this.baseUrl + value );
						params[ 'bumpMap' ].wrapS = this.wrap;
						params[ 'bumpMap' ].wrapT = this.wrap;

						break;

					default:
						break;

				}

			}

			if ( params[ 'diffuse' ] ) {

				params[ 'color' ] = params[ 'diffuse' ];

			}

			this.materials[ materialName ] = new THREE.MeshPhongMaterial( params );
			return this.materials[ materialName ];

		},


		loadTexture: function ( url, mapping, onLoad, onProgress, onError ) {

			var texture;
			var loader = THREE.Loader.Handlers.get( url );
			var manager = ( this.manager !== undefined ) ? this.manager : THREE.DefaultLoadingManager;

			if ( loader !== null ) {

				texture = loader.load( url, onLoad );

			} else {

				texture = new THREE.Texture();

				loader = new THREE.ImageLoader( manager );
				loader.setCrossOrigin( this.crossOrigin );
				loader.load( url, function ( image ) {

					texture.image = THREE.MTLLoader.ensurePowerOfTwo_( image );
					texture.needsUpdate = true;

					if ( onLoad ) onLoad( texture );

				}, onProgress, onError );

			}

			if ( mapping !== undefined ) texture.mapping = mapping;

			return texture;

		}

	};

	THREE.MTLLoader.ensurePowerOfTwo_ = function ( image ) {

		if ( ! THREE.Math.isPowerOfTwo( image.width ) || ! THREE.Math.isPowerOfTwo( image.height ) ) {

			var canvas = document.createElement( "canvas" );
			canvas.width = THREE.MTLLoader.nextHighestPowerOfTwo_( image.width );
			canvas.height = THREE.MTLLoader.nextHighestPowerOfTwo_( image.height );

			var ctx = canvas.getContext( "2d" );
			ctx.drawImage( image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height );
			return canvas;

		}

		return image;

	};

	THREE.MTLLoader.nextHighestPowerOfTwo_ = function( x ) {

		-- x;

		for ( var i = 1; i < 32; i <<= 1 ) {

			x = x | x >> i;

		}

		return x + 1;

	};

	THREE.EventDispatcher.prototype.apply( THREE.MTLLoader.prototype );


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author mrdoob / http://mrdoob.com/
	 */
	var THREE = __webpack_require__(1);

	THREE.OBJLoader = function ( manager ) {

		this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

	};

	THREE.OBJLoader.prototype = {

		constructor: THREE.OBJLoader,

		load: function ( url, onLoad, onProgress, onError ) {

			var scope = this;

			var loader = new THREE.XHRLoader( scope.manager );
			loader.setCrossOrigin( this.crossOrigin );
			loader.load( url, function ( text ) {

				onLoad( scope.parse( text ) );

			}, onProgress, onError );

		},

		setCrossOrigin: function ( value ) {

			this.crossOrigin = value;

		},

		parse: function ( text ) {

			console.time( 'OBJLoader' );

			var object, objects = [];
			var geometry, material;

			function parseVertexIndex( value ) {

				var index = parseInt( value );

				return ( index >= 0 ? index - 1 : index + vertices.length / 3 ) * 3;

			}

			function parseNormalIndex( value ) {

				var index = parseInt( value );

				return ( index >= 0 ? index - 1 : index + normals.length / 3 ) * 3;

			}

			function parseUVIndex( value ) {

				var index = parseInt( value );

				return ( index >= 0 ? index - 1 : index + uvs.length / 2 ) * 2;

			}

			function addVertex( a, b, c ) {

				geometry.vertices.push(
					vertices[ a ], vertices[ a + 1 ], vertices[ a + 2 ],
					vertices[ b ], vertices[ b + 1 ], vertices[ b + 2 ],
					vertices[ c ], vertices[ c + 1 ], vertices[ c + 2 ]
				);

			}

			function addNormal( a, b, c ) {

				geometry.normals.push(
					normals[ a ], normals[ a + 1 ], normals[ a + 2 ],
					normals[ b ], normals[ b + 1 ], normals[ b + 2 ],
					normals[ c ], normals[ c + 1 ], normals[ c + 2 ]
				);

			}

			function addUV( a, b, c ) {

				geometry.uvs.push(
					uvs[ a ], uvs[ a + 1 ],
					uvs[ b ], uvs[ b + 1 ],
					uvs[ c ], uvs[ c + 1 ]
				);

			}

			function addFace( a, b, c, d,  ua, ub, uc, ud, na, nb, nc, nd ) {

				var ia = parseVertexIndex( a );
				var ib = parseVertexIndex( b );
				var ic = parseVertexIndex( c );
				var id;

				if ( d === undefined ) {

					addVertex( ia, ib, ic );

				} else {

					id = parseVertexIndex( d );

					addVertex( ia, ib, id );
					addVertex( ib, ic, id );

				}

				if ( ua !== undefined ) {

					ia = parseUVIndex( ua );
					ib = parseUVIndex( ub );
					ic = parseUVIndex( uc );

					if ( d === undefined ) {

						addUV( ia, ib, ic );

					} else {

						id = parseUVIndex( ud );

						addUV( ia, ib, id );
						addUV( ib, ic, id );

					}

				}

				if ( na !== undefined ) {

					ia = parseNormalIndex( na );
					ib = parseNormalIndex( nb );
					ic = parseNormalIndex( nc );

					if ( d === undefined ) {

						addNormal( ia, ib, ic );

					} else {

						id = parseNormalIndex( nd );

						addNormal( ia, ib, id );
						addNormal( ib, ic, id );

					}

				}

			}

			// create mesh if no objects in text

			if ( /^o /gm.test( text ) === false ) {

				geometry = {
					vertices: [],
					normals: [],
					uvs: []
				};

				material = {
					name: ''
				};

				object = {
					name: '',
					geometry: geometry,
					material: material
				};

				objects.push( object );

			}

			var vertices = [];
			var normals = [];
			var uvs = [];

			// v float float float

			var vertex_pattern = /v( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/;

			// vn float float float

			var normal_pattern = /vn( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/;

			// vt float float

			var uv_pattern = /vt( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/;

			// f vertex vertex vertex ...

			var face_pattern1 = /f( +-?\d+)( +-?\d+)( +-?\d+)( +-?\d+)?/;

			// f vertex/uv vertex/uv vertex/uv ...

			var face_pattern2 = /f( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))?/;

			// f vertex/uv/normal vertex/uv/normal vertex/uv/normal ...

			var face_pattern3 = /f( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))?/;

			// f vertex//normal vertex//normal vertex//normal ...

			var face_pattern4 = /f( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))?/;

			//

			var lines = text.split( '\n' );

			for ( var i = 0; i < lines.length; i ++ ) {

				var line = lines[ i ];
				line = line.trim();

				var result;

				if ( line.length === 0 || line.charAt( 0 ) === '#' ) {

					continue;

				} else if ( ( result = vertex_pattern.exec( line ) ) !== null ) {

					// ["v 1.0 2.0 3.0", "1.0", "2.0", "3.0"]

					vertices.push(
						parseFloat( result[ 1 ] ),
						parseFloat( result[ 2 ] ),
						parseFloat( result[ 3 ] )
					);

				} else if ( ( result = normal_pattern.exec( line ) ) !== null ) {

					// ["vn 1.0 2.0 3.0", "1.0", "2.0", "3.0"]

					normals.push(
						parseFloat( result[ 1 ] ),
						parseFloat( result[ 2 ] ),
						parseFloat( result[ 3 ] )
					);

				} else if ( ( result = uv_pattern.exec( line ) ) !== null ) {

					// ["vt 0.1 0.2", "0.1", "0.2"]

					uvs.push(
						parseFloat( result[ 1 ] ),
						parseFloat( result[ 2 ] )
					);

				} else if ( ( result = face_pattern1.exec( line ) ) !== null ) {

					// ["f 1 2 3", "1", "2", "3", undefined]

					addFace(
						result[ 1 ], result[ 2 ], result[ 3 ], result[ 4 ]
					);

				} else if ( ( result = face_pattern2.exec( line ) ) !== null ) {

					// ["f 1/1 2/2 3/3", " 1/1", "1", "1", " 2/2", "2", "2", " 3/3", "3", "3", undefined, undefined, undefined]

					addFace(
						result[ 2 ], result[ 5 ], result[ 8 ], result[ 11 ],
						result[ 3 ], result[ 6 ], result[ 9 ], result[ 12 ]
					);

				} else if ( ( result = face_pattern3.exec( line ) ) !== null ) {

					// ["f 1/1/1 2/2/2 3/3/3", " 1/1/1", "1", "1", "1", " 2/2/2", "2", "2", "2", " 3/3/3", "3", "3", "3", undefined, undefined, undefined, undefined]

					addFace(
						result[ 2 ], result[ 6 ], result[ 10 ], result[ 14 ],
						result[ 3 ], result[ 7 ], result[ 11 ], result[ 15 ],
						result[ 4 ], result[ 8 ], result[ 12 ], result[ 16 ]
					);

				} else if ( ( result = face_pattern4.exec( line ) ) !== null ) {

					// ["f 1//1 2//2 3//3", " 1//1", "1", "1", " 2//2", "2", "2", " 3//3", "3", "3", undefined, undefined, undefined]

					addFace(
						result[ 2 ], result[ 5 ], result[ 8 ], result[ 11 ],
						undefined, undefined, undefined, undefined,
						result[ 3 ], result[ 6 ], result[ 9 ], result[ 12 ]
					);

				} else if ( /^o /.test( line ) ) {

					geometry = {
						vertices: [],
						normals: [],
						uvs: []
					};

					material = {
						name: ''
					};

					object = {
						name: line.substring( 2 ).trim(),
						geometry: geometry,
						material: material
					};

					objects.push( object )

				} else if ( /^g /.test( line ) ) {

					// group

				} else if ( /^usemtl /.test( line ) ) {

					// material

					material.name = line.substring( 7 ).trim();

				} else if ( /^mtllib /.test( line ) ) {

					// mtl file

				} else if ( /^s /.test( line ) ) {

					// smooth shading

				} else {

					// console.log( "THREE.OBJLoader: Unhandled line " + line );

				}

			}

			var container = new THREE.Object3D();

			for ( var i = 0, l = objects.length; i < l; i ++ ) {

				object = objects[ i ];
				geometry = object.geometry;

				var buffergeometry = new THREE.BufferGeometry();

				buffergeometry.addAttribute( 'position', new THREE.BufferAttribute( new Float32Array( geometry.vertices ), 3 ) );

				if ( geometry.normals.length > 0 ) {

					buffergeometry.addAttribute( 'normal', new THREE.BufferAttribute( new Float32Array( geometry.normals ), 3 ) );

				}

				if ( geometry.uvs.length > 0 ) {

					buffergeometry.addAttribute( 'uv', new THREE.BufferAttribute( new Float32Array( geometry.uvs ), 2 ) );

				}

				material = new THREE.MeshLambertMaterial();
				material.name = object.material.name;

				var mesh = new THREE.Mesh( buffergeometry, material );
				mesh.name = object.name;

				container.add( mesh );

			}

			console.timeEnd( 'OBJLoader' );

			return container;

		}

	};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Loads a Wavefront .obj file with materials
	 *
	 * @author mrdoob / http://mrdoob.com/
	 * @author angelxuanchang
	 */
	var THREE = __webpack_require__(1);

	THREE.OBJMTLLoader = function ( manager ) {

		this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

	};

	THREE.OBJMTLLoader.prototype = {

		constructor: THREE.OBJMTLLoader,

		load: function ( url, mtlurl, onLoad, onProgress, onError ) {

			var scope = this;

			var mtlLoader = new THREE.MTLLoader( this.manager );
			mtlLoader.setBaseUrl( url.substr( 0, url.lastIndexOf( "/" ) + 1 ) );
			mtlLoader.setCrossOrigin( this.crossOrigin );
			mtlLoader.load( mtlurl, function ( materials ) {

				var materialsCreator = materials;
				materialsCreator.preload();

				var loader = new THREE.XHRLoader( scope.manager );
				loader.setCrossOrigin( scope.crossOrigin );
				loader.load( url, function ( text ) {

					var object = scope.parse( text );

					object.traverse( function ( object ) {

						if ( object instanceof THREE.Mesh ) {

							if ( object.material.name ) {

								var material = materialsCreator.create( object.material.name );

								if ( material ) object.material = material;

							}

						}

					} );

					onLoad( object );

				}, onProgress, onError );

			}, onProgress, onError );

		},

		setCrossOrigin: function ( value ) {

			this.crossOrigin = value;

		},

		/**
		 * Parses loaded .obj file
		 * @param data - content of .obj file
		 * @param mtllibCallback - callback to handle mtllib declaration (optional)
		 * @return {THREE.Object3D} - Object3D (with default material)
		 */

		parse: function ( data, mtllibCallback ) {

			function vector( x, y, z ) {

				return new THREE.Vector3( x, y, z );

			}

			function uv( u, v ) {

				return new THREE.Vector2( u, v );

			}

			function face3( a, b, c, normals ) {

				return new THREE.Face3( a, b, c, normals );

			}

			var face_offset = 0;

			function meshN( meshName, materialName ) {

				if ( vertices.length > 0 ) {

					geometry.vertices = vertices;

					geometry.mergeVertices();
					geometry.computeFaceNormals();
					geometry.computeBoundingSphere();

					object.add( mesh );

					geometry = new THREE.Geometry();
					mesh = new THREE.Mesh( geometry, material );

				}

				if ( meshName !== undefined ) mesh.name = meshName;

				if ( materialName !== undefined ) {

					material = new THREE.MeshLambertMaterial();
					material.name = materialName;

					mesh.material = material;

				}

			}

			var group = new THREE.Group();
			var object = group;

			var geometry = new THREE.Geometry();
			var material = new THREE.MeshLambertMaterial();
			var mesh = new THREE.Mesh( geometry, material );

			var vertices = [];
			var normals = [];
			var uvs = [];

			function add_face( a, b, c, normals_inds ) {

				if ( normals_inds === undefined ) {

					geometry.faces.push( face3(
						parseInt( a ) - ( face_offset + 1 ),
						parseInt( b ) - ( face_offset + 1 ),
						parseInt( c ) - ( face_offset + 1 )
					) );

				} else {

					geometry.faces.push( face3(
						parseInt( a ) - ( face_offset + 1 ),
						parseInt( b ) - ( face_offset + 1 ),
						parseInt( c ) - ( face_offset + 1 ),
						[
							normals[ parseInt( normals_inds[ 0 ] ) - 1 ].clone(),
							normals[ parseInt( normals_inds[ 1 ] ) - 1 ].clone(),
							normals[ parseInt( normals_inds[ 2 ] ) - 1 ].clone()
						]
					) );

				}

			}

			function add_uvs( a, b, c ) {

				geometry.faceVertexUvs[ 0 ].push( [
					uvs[ parseInt( a ) - 1 ].clone(),
					uvs[ parseInt( b ) - 1 ].clone(),
					uvs[ parseInt( c ) - 1 ].clone()
				] );

			}

			function handle_face_line( faces, uvs, normals_inds ) {

				if ( faces[ 3 ] === undefined ) {

					add_face( faces[ 0 ], faces[ 1 ], faces[ 2 ], normals_inds );

					if ( ! ( uvs === undefined ) && uvs.length > 0 ) {

						add_uvs( uvs[ 0 ], uvs[ 1 ], uvs[ 2 ] );

					}

				} else {

					if ( ! ( normals_inds === undefined ) && normals_inds.length > 0 ) {

						add_face( faces[ 0 ], faces[ 1 ], faces[ 3 ], [ normals_inds[ 0 ], normals_inds[ 1 ], normals_inds[ 3 ] ] );
						add_face( faces[ 1 ], faces[ 2 ], faces[ 3 ], [ normals_inds[ 1 ], normals_inds[ 2 ], normals_inds[ 3 ] ] );

					} else {

						add_face( faces[ 0 ], faces[ 1 ], faces[ 3 ] );
						add_face( faces[ 1 ], faces[ 2 ], faces[ 3 ] );

					}

					if ( ! ( uvs === undefined ) && uvs.length > 0 ) {

						add_uvs( uvs[ 0 ], uvs[ 1 ], uvs[ 3 ] );
						add_uvs( uvs[ 1 ], uvs[ 2 ], uvs[ 3 ] );

					}

				}

			}


			// v float float float

			var vertex_pattern = /v( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/;

			// vn float float float

			var normal_pattern = /vn( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/;

			// vt float float

			var uv_pattern = /vt( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/;

			// f vertex vertex vertex ...

			var face_pattern1 = /f( +\d+)( +\d+)( +\d+)( +\d+)?/;

			// f vertex/uv vertex/uv vertex/uv ...

			var face_pattern2 = /f( +(\d+)\/(\d+))( +(\d+)\/(\d+))( +(\d+)\/(\d+))( +(\d+)\/(\d+))?/;

			// f vertex/uv/normal vertex/uv/normal vertex/uv/normal ...

			var face_pattern3 = /f( +(\d+)\/(\d+)\/(\d+))( +(\d+)\/(\d+)\/(\d+))( +(\d+)\/(\d+)\/(\d+))( +(\d+)\/(\d+)\/(\d+))?/;

			// f vertex//normal vertex//normal vertex//normal ...

			var face_pattern4 = /f( +(\d+)\/\/(\d+))( +(\d+)\/\/(\d+))( +(\d+)\/\/(\d+))( +(\d+)\/\/(\d+))?/;

			//

			var lines = data.split( "\n" );

			for ( var i = 0; i < lines.length; i ++ ) {

				var line = lines[ i ];
				line = line.trim();

				var result;

				if ( line.length === 0 || line.charAt( 0 ) === '#' ) {

					continue;

				} else if ( ( result = vertex_pattern.exec( line ) ) !== null ) {

					// ["v 1.0 2.0 3.0", "1.0", "2.0", "3.0"]

					vertices.push( vector(
						parseFloat( result[ 1 ] ),
						parseFloat( result[ 2 ] ),
						parseFloat( result[ 3 ] )
					) );

				} else if ( ( result = normal_pattern.exec( line ) ) !== null ) {

					// ["vn 1.0 2.0 3.0", "1.0", "2.0", "3.0"]

					normals.push( vector(
						parseFloat( result[ 1 ] ),
						parseFloat( result[ 2 ] ),
						parseFloat( result[ 3 ] )
					) );

				} else if ( ( result = uv_pattern.exec( line ) ) !== null ) {

					// ["vt 0.1 0.2", "0.1", "0.2"]

					uvs.push( uv(
						parseFloat( result[ 1 ] ),
						parseFloat( result[ 2 ] )
					) );

				} else if ( ( result = face_pattern1.exec( line ) ) !== null ) {

					// ["f 1 2 3", "1", "2", "3", undefined]

					handle_face_line( [ result[ 1 ], result[ 2 ], result[ 3 ], result[ 4 ] ] );

				} else if ( ( result = face_pattern2.exec( line ) ) !== null ) {

					// ["f 1/1 2/2 3/3", " 1/1", "1", "1", " 2/2", "2", "2", " 3/3", "3", "3", undefined, undefined, undefined]

					handle_face_line(
						[ result[ 2 ], result[ 5 ], result[ 8 ], result[ 11 ] ], //faces
						[ result[ 3 ], result[ 6 ], result[ 9 ], result[ 12 ] ] //uv
					);

				} else if ( ( result = face_pattern3.exec( line ) ) !== null ) {

					// ["f 1/1/1 2/2/2 3/3/3", " 1/1/1", "1", "1", "1", " 2/2/2", "2", "2", "2", " 3/3/3", "3", "3", "3", undefined, undefined, undefined, undefined]

					handle_face_line(
						[ result[ 2 ], result[ 6 ], result[ 10 ], result[ 14 ] ], //faces
						[ result[ 3 ], result[ 7 ], result[ 11 ], result[ 15 ] ], //uv
						[ result[ 4 ], result[ 8 ], result[ 12 ], result[ 16 ] ] //normal
					);

				} else if ( ( result = face_pattern4.exec( line ) ) !== null ) {

					// ["f 1//1 2//2 3//3", " 1//1", "1", "1", " 2//2", "2", "2", " 3//3", "3", "3", undefined, undefined, undefined]

					handle_face_line(
						[ result[ 2 ], result[ 5 ], result[ 8 ], result[ 11 ] ], //faces
						[ ], //uv
						[ result[ 3 ], result[ 6 ], result[ 9 ], result[ 12 ] ] //normal
					);

				} else if ( /^o /.test( line ) ) {

					// object

					meshN();
					face_offset = face_offset + vertices.length;
					vertices = [];
					object = new THREE.Object3D();
					object.name = line.substring( 2 ).trim();
					group.add( object );

				} else if ( /^g /.test( line ) ) {

					// group

					meshN( line.substring( 2 ).trim(), undefined );

				} else if ( /^usemtl /.test( line ) ) {

					// material

					meshN( undefined, line.substring( 7 ).trim() );

				} else if ( /^mtllib /.test( line ) ) {

					// mtl file

					if ( mtllibCallback ) {

						var mtlfile = line.substring( 7 );
						mtlfile = mtlfile.trim();
						mtllibCallback( mtlfile );

					}

				} else if ( /^s /.test( line ) ) {

					// Smooth shading

				} else {

					console.log( "THREE.OBJMTLLoader: Unhandled line " + line );

				}

			}

			//Add last object
			meshN( undefined, undefined );

			return group;

		}

	};

	THREE.EventDispatcher.prototype.apply( THREE.OBJMTLLoader.prototype );


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author alteredq / http://alteredqualia.com/
	 */
	var THREE = __webpack_require__(1);

	THREE.PDBLoader = function ( manager ) {

		this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

	};

	THREE.PDBLoader.prototype = {

		constructor: THREE.PDBLoader,

		load: function ( url, onLoad, onProgress, onError ) {

			var scope = this;

			var loader = new THREE.XHRLoader( scope.manager );
			loader.setCrossOrigin( this.crossOrigin );
			loader.load( url, function ( text ) {

				var json = scope.parsePDB( text );
				scope.createModel( json, onLoad );

			}, onProgress, onError );

		},

		setCrossOrigin: function ( value ) {

			this.crossOrigin = value;

		},

		// Based on CanvasMol PDB parser

		parsePDB: function ( text ) {

			function trim( text ) {

				return text.replace( /^\s\s*/, '' ).replace( /\s\s*$/, '' );

			}

			function capitalize( text ) {

				return text.charAt( 0 ).toUpperCase() + text.substr( 1 ).toLowerCase();

			}

			function hash( s, e ) {

				return "s" + Math.min( s, e ) + "e" + Math.max( s, e );

			}

			function parseBond( start, length ) {

				var eatom = parseInt( lines[ i ].substr( start, length ) );

				if ( eatom ) {

					var h = hash( satom, eatom );

					if ( bhash[ h ] == undefined ) {

						bonds.push( [ satom - 1, eatom - 1, 1 ] );
						bhash[ h ] = bonds.length - 1;

					} else {

						// doesn't really work as almost all PDBs
						// have just normal bonds appearing multiple
						// times instead of being double/triple bonds
						// bonds[bhash[h]][2] += 1;

					}

				}

			}

			var CPK = { "h": [ 255, 255, 255 ], "he": [ 217, 255, 255 ], "li": [ 204, 128, 255 ], "be": [ 194, 255, 0 ], "b": [ 255, 181, 181 ], "c": [ 144, 144, 144 ], "n": [ 48, 80, 248 ], "o": [ 255, 13, 13 ], "f": [ 144, 224, 80 ], "ne": [ 179, 227, 245 ], "na": [ 171, 92, 242 ], "mg": [ 138, 255, 0 ], "al": [ 191, 166, 166 ], "si": [ 240, 200, 160 ], "p": [ 255, 128, 0 ], "s": [ 255, 255, 48 ], "cl": [ 31, 240, 31 ], "ar": [ 128, 209, 227 ], "k": [ 143, 64, 212 ], "ca": [ 61, 255, 0 ], "sc": [ 230, 230, 230 ], "ti": [ 191, 194, 199 ], "v": [ 166, 166, 171 ], "cr": [ 138, 153, 199 ], "mn": [ 156, 122, 199 ], "fe": [ 224, 102, 51 ], "co": [ 240, 144, 160 ], "ni": [ 80, 208, 80 ], "cu": [ 200, 128, 51 ], "zn": [ 125, 128, 176 ], "ga": [ 194, 143, 143 ], "ge": [ 102, 143, 143 ], "as": [ 189, 128, 227 ], "se": [ 255, 161, 0 ], "br": [ 166, 41, 41 ], "kr": [ 92, 184, 209 ], "rb": [ 112, 46, 176 ], "sr": [ 0, 255, 0 ], "y": [ 148, 255, 255 ], "zr": [ 148, 224, 224 ], "nb": [ 115, 194, 201 ], "mo": [ 84, 181, 181 ], "tc": [ 59, 158, 158 ], "ru": [ 36, 143, 143 ], "rh": [ 10, 125, 140 ], "pd": [ 0, 105, 133 ], "ag": [ 192, 192, 192 ], "cd": [ 255, 217, 143 ], "in": [ 166, 117, 115 ], "sn": [ 102, 128, 128 ], "sb": [ 158, 99, 181 ], "te": [ 212, 122, 0 ], "i": [ 148, 0, 148 ], "xe": [ 66, 158, 176 ], "cs": [ 87, 23, 143 ], "ba": [ 0, 201, 0 ], "la": [ 112, 212, 255 ], "ce": [ 255, 255, 199 ], "pr": [ 217, 255, 199 ], "nd": [ 199, 255, 199 ], "pm": [ 163, 255, 199 ], "sm": [ 143, 255, 199 ], "eu": [ 97, 255, 199 ], "gd": [ 69, 255, 199 ], "tb": [ 48, 255, 199 ], "dy": [ 31, 255, 199 ], "ho": [ 0, 255, 156 ], "er": [ 0, 230, 117 ], "tm": [ 0, 212, 82 ], "yb": [ 0, 191, 56 ], "lu": [ 0, 171, 36 ], "hf": [ 77, 194, 255 ], "ta": [ 77, 166, 255 ], "w": [ 33, 148, 214 ], "re": [ 38, 125, 171 ], "os": [ 38, 102, 150 ], "ir": [ 23, 84, 135 ], "pt": [ 208, 208, 224 ], "au": [ 255, 209, 35 ], "hg": [ 184, 184, 208 ], "tl": [ 166, 84, 77 ], "pb": [ 87, 89, 97 ], "bi": [ 158, 79, 181 ], "po": [ 171, 92, 0 ], "at": [ 117, 79, 69 ], "rn": [ 66, 130, 150 ], "fr": [ 66, 0, 102 ], "ra": [ 0, 125, 0 ], "ac": [ 112, 171, 250 ], "th": [ 0, 186, 255 ], "pa": [ 0, 161, 255 ], "u": [ 0, 143, 255 ], "np": [ 0, 128, 255 ], "pu": [ 0, 107, 255 ], "am": [ 84, 92, 242 ], "cm": [ 120, 92, 227 ], "bk": [ 138, 79, 227 ], "cf": [ 161, 54, 212 ], "es": [ 179, 31, 212 ], "fm": [ 179, 31, 186 ], "md": [ 179, 13, 166 ], "no": [ 189, 13, 135 ], "lr": [ 199, 0, 102 ], "rf": [ 204, 0, 89 ], "db": [ 209, 0, 79 ], "sg": [ 217, 0, 69 ], "bh": [ 224, 0, 56 ], "hs": [ 230, 0, 46 ], "mt": [ 235, 0, 38 ],
				   "ds": [ 235, 0, 38 ], "rg": [ 235, 0, 38 ], "cn": [ 235, 0, 38 ], "uut": [ 235, 0, 38 ], "uuq": [ 235, 0, 38 ], "uup": [ 235, 0, 38 ], "uuh": [ 235, 0, 38 ], "uus": [ 235, 0, 38 ], "uuo": [ 235, 0, 38 ] };


			var atoms = [];
			var bonds = [];
			var histogram = {};

			var bhash = {};

			var lines = text.split( "\n" );

			var x, y, z, e;

			for ( var i = 0, il = lines.length; i < il; ++ i ) {

				if ( lines[ i ].substr( 0, 4 ) == "ATOM" || lines[ i ].substr( 0, 6 ) == "HETATM" ) {

					x = parseFloat( lines[ i ].substr( 30, 7 ) );
					y = parseFloat( lines[ i ].substr( 38, 7 ) );
					z = parseFloat( lines[ i ].substr( 46, 7 ) );

					e = trim( lines[ i ].substr( 76, 2 ) ).toLowerCase();

					if ( e == "" ) e = trim( lines[ i ].substr( 12, 2 ) ).toLowerCase();
					atoms.push( [ x, y, z, CPK[ e ], capitalize( e ) ] );

					if ( histogram[ e ] == undefined ) histogram[ e ] = 1;
					else histogram[ e ] += 1;

				} else if ( lines[ i ].substr( 0, 6 ) == "CONECT" ) {

					var satom = parseInt( lines[ i ].substr( 6, 5 ) );

					parseBond( 11, 5 );
					parseBond( 16, 5 );
					parseBond( 21, 5 );
					parseBond( 26, 5 );

				}

			}

			return { "ok": true, "atoms": atoms, "bonds": bonds, "histogram": histogram };

		},

		createModel: function ( json, callback ) {

			var scope = this,
			geometryAtoms = new THREE.Geometry(),
			geometryBonds = new THREE.Geometry();

			geometryAtoms.elements = [];

			var atoms = json.atoms;
			var bonds = json.bonds;

			for ( var i = 0; i < atoms.length; i ++ ) {

				var atom = atoms[ i ];

				var x = atom[ 0 ];
				var y = atom[ 1 ];
				var z = atom[ 2 ];

				var position = new THREE.Vector3( x, y, z );
				geometryAtoms.vertices.push( position );

				var r = atom[ 3 ][ 0 ] / 255;
				var g = atom[ 3 ][ 1 ] / 255;
				var b = atom[ 3 ][ 2 ] / 255;

				var color = new THREE.Color();
				color.setRGB( r, g, b );

				geometryAtoms.colors.push( color );

				geometryAtoms.elements.push( atom[ 4 ] );

			}

			for ( var i = 0; i < bonds.length; i ++ ) {

				var bond = bonds[ i ];

				var start = bond[ 0 ];
				var end = bond[ 1 ];

				var vertex1 = geometryAtoms.vertices[ start ];
				var vertex2 = geometryAtoms.vertices[ end ];

				geometryBonds.vertices.push( vertex1.clone() );
				geometryBonds.vertices.push( vertex2.clone() );

			}

			callback( geometryAtoms, geometryBonds, json );

		}

	};



/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Wei Meng / http://about.me/menway
	 *
	 * Description: A THREE loader for PLY ASCII files (known as the Polygon File Format or the Stanford Triangle Format).
	 *
	 *
	 * Limitations: ASCII decoding assumes file is UTF-8.
	 *
	 * Usage:
	 *	var loader = new THREE.PLYLoader();
	 *	loader.load('./models/ply/ascii/dolphins.ply', function (geometry) {
	 *
	 *		scene.add( new THREE.Mesh( geometry ) );
	 *
	 *	} );
	 *
	 * If the PLY file uses non standard property names, they can be mapped while
	 * loading. For example, the following maps the properties
	 * “diffuse_(red|green|blue)” in the file to standard color names.
	 *
	 * loader.setPropertyNameMapping( {
	 *	diffuse_red: 'red',
	 *	diffuse_green: 'green',
	 *	diffuse_blue: 'blue'
	 * } );
	 *
	 */
	var THREE = __webpack_require__(1);


	THREE.PLYLoader = function ( manager ) {

		this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

		this.propertyNameMapping = {};

	};

	THREE.PLYLoader.prototype = {

		constructor: THREE.PLYLoader,

		load: function ( url, onLoad, onProgress, onError ) {

			var scope = this;

			var loader = new THREE.XHRLoader( this.manager );
			loader.setCrossOrigin( this.crossOrigin );
			loader.setResponseType( 'arraybuffer' );
			loader.load( url, function ( text ) {

				onLoad( scope.parse( text ) );

			}, onProgress, onError );

		},

		setCrossOrigin: function ( value ) {

			this.crossOrigin = value;

		},

		setPropertyNameMapping: function ( mapping ) {

			this.propertyNameMapping = mapping;

		},

		bin2str: function ( buf ) {

			var array_buffer = new Uint8Array( buf );
			var str = '';
			for ( var i = 0; i < buf.byteLength; i ++ ) {

				str += String.fromCharCode( array_buffer[ i ] ); // implicitly assumes little-endian

			}

			return str;

		},

		isASCII: function( data ) {

			var header = this.parseHeader( this.bin2str( data ) );

			return header.format === "ascii";

		},

		parse: function ( data ) {

			if ( data instanceof ArrayBuffer ) {

				return this.isASCII( data )
					? this.parseASCII( this.bin2str( data ) )
					: this.parseBinary( data );

			} else {

				return this.parseASCII( data );

			}

		},

		parseHeader: function ( data ) {

			var patternHeader = /ply([\s\S]*)end_header\s/;
			var headerText = "";
			var headerLength = 0;
			var result = patternHeader.exec( data );
			if ( result !== null ) {

				headerText = result [ 1 ];
				headerLength = result[ 0 ].length;

			}

			var header = {
				comments: [],
				elements: [],
				headerLength: headerLength
			};

			var lines = headerText.split( '\n' );
			var currentElement = undefined;
			var lineType, lineValues;

			function make_ply_element_property( propertValues, propertyNameMapping ) {

				var property = {
					type: propertValues[ 0 ]
				};

				if ( property.type === 'list' ) {

					property.name = propertValues[ 3 ];
					property.countType = propertValues[ 1 ];
					property.itemType = propertValues[ 2 ];

				} else {

					property.name = propertValues[ 1 ];

				}

				if ( property.name in propertyNameMapping ) {

					property.name = propertyNameMapping[ property.name ];

				}

				return property;

			}

			for ( var i = 0; i < lines.length; i ++ ) {

				var line = lines[ i ];
				line = line.trim();
				if ( line === "" ) {

					continue;

				}
				lineValues = line.split( /\s+/ );
				lineType = lineValues.shift();
				line = lineValues.join( " " );

				switch ( lineType ) {

				case "format":

					header.format = lineValues[ 0 ];
					header.version = lineValues[ 1 ];

					break;

				case "comment":

					header.comments.push( line );

					break;

				case "element":

					if ( ! ( currentElement === undefined ) ) {

						header.elements.push( currentElement );

					}

					currentElement = Object();
					currentElement.name = lineValues[ 0 ];
					currentElement.count = parseInt( lineValues[ 1 ] );
					currentElement.properties = [];

					break;

				case "property":

					currentElement.properties.push( make_ply_element_property( lineValues, this.propertyNameMapping ) );

					break;


				default:

					console.log( "unhandled", lineType, lineValues );

				}

			}

			if ( ! ( currentElement === undefined ) ) {

				header.elements.push( currentElement );

			}

			return header;

		},

		parseASCIINumber: function ( n, type ) {

			switch ( type ) {

			case 'char': case 'uchar': case 'short': case 'ushort': case 'int': case 'uint':
			case 'int8': case 'uint8': case 'int16': case 'uint16': case 'int32': case 'uint32':

				return parseInt( n );

			case 'float': case 'double': case 'float32': case 'float64':

				return parseFloat( n );

			}

		},

		parseASCIIElement: function ( properties, line ) {

			var values = line.split( /\s+/ );

			var element = Object();

			for ( var i = 0; i < properties.length; i ++ ) {

				if ( properties[ i ].type === "list" ) {

					var list = [];
					var n = this.parseASCIINumber( values.shift(), properties[ i ].countType );

					for ( var j = 0; j < n; j ++ ) {

						list.push( this.parseASCIINumber( values.shift(), properties[ i ].itemType ) );

					}

					element[ properties[ i ].name ] = list;

				} else {

					element[ properties[ i ].name ] = this.parseASCIINumber( values.shift(), properties[ i ].type );

				}

			}

			return element;

		},

		parseASCII: function ( data ) {

			// PLY ascii format specification, as per http://en.wikipedia.org/wiki/PLY_(file_format)

			var geometry = new THREE.Geometry();

			var result;

			var header = this.parseHeader( data );

			var patternBody = /end_header\s([\s\S]*)$/;
			var body = "";
			if ( ( result = patternBody.exec( data ) ) !== null ) {

				body = result [ 1 ];

			}

			var lines = body.split( '\n' );
			var currentElement = 0;
			var currentElementCount = 0;
			geometry.useColor = false;

			for ( var i = 0; i < lines.length; i ++ ) {

				var line = lines[ i ];
				line = line.trim();
				if ( line === "" ) {

					continue;

				}

				if ( currentElementCount >= header.elements[ currentElement ].count ) {

					currentElement ++;
					currentElementCount = 0;

				}

				var element = this.parseASCIIElement( header.elements[ currentElement ].properties, line );

				this.handleElement( geometry, header.elements[ currentElement ].name, element );

				currentElementCount ++;

			}

			return this.postProcess( geometry );

		},

		postProcess: function ( geometry ) {

			if ( geometry.useColor ) {

				for ( var i = 0; i < geometry.faces.length; i ++ ) {

					geometry.faces[ i ].vertexColors = [
						geometry.colors[ geometry.faces[ i ].a ],
						geometry.colors[ geometry.faces[ i ].b ],
						geometry.colors[ geometry.faces[ i ].c ]
					];

				}

				geometry.elementsNeedUpdate = true;

			}

			geometry.computeBoundingSphere();

			return geometry;

		},

		handleElement: function ( geometry, elementName, element ) {

			if ( elementName === "vertex" ) {

				geometry.vertices.push(
					new THREE.Vector3( element.x, element.y, element.z )
				);

				if ( 'red' in element && 'green' in element && 'blue' in element ) {

					geometry.useColor = true;

					var color = new THREE.Color();
					color.setRGB( element.red / 255.0, element.green / 255.0, element.blue / 255.0 );
					geometry.colors.push( color );

				}

			} else if ( elementName === "face" ) {

				var vertex_indices = element.vertex_indices;

				if ( vertex_indices.length === 3 ) {

					geometry.faces.push(
						new THREE.Face3( vertex_indices[ 0 ], vertex_indices[ 1 ], vertex_indices[ 2 ] )
					);

				} else if ( vertex_indices.length === 4 ) {

					geometry.faces.push(
						new THREE.Face3( vertex_indices[ 0 ], vertex_indices[ 1 ], vertex_indices[ 3 ] ),
						new THREE.Face3( vertex_indices[ 1 ], vertex_indices[ 2 ], vertex_indices[ 3 ] )
					);

				}

			}

		},

		binaryRead: function ( dataview, at, type, little_endian ) {

			switch ( type ) {

				// corespondences for non-specific length types here match rply:
			case 'int8':		case 'char':	 return [ dataview.getInt8( at ), 1 ];

			case 'uint8':		case 'uchar':	 return [ dataview.getUint8( at ), 1 ];

			case 'int16':		case 'short':	 return [ dataview.getInt16( at, little_endian ), 2 ];

			case 'uint16':	case 'ushort': return [ dataview.getUint16( at, little_endian ), 2 ];

			case 'int32':		case 'int':		 return [ dataview.getInt32( at, little_endian ), 4 ];

			case 'uint32':	case 'uint':	 return [ dataview.getUint32( at, little_endian ), 4 ];

			case 'float32': case 'float':	 return [ dataview.getFloat32( at, little_endian ), 4 ];

			case 'float64': case 'double': return [ dataview.getFloat64( at, little_endian ), 8 ];

			}

		},

		binaryReadElement: function ( dataview, at, properties, little_endian ) {

			var element = Object();
			var result, read = 0;

			for ( var i = 0; i < properties.length; i ++ ) {

				if ( properties[ i ].type === "list" ) {

					var list = [];

					result = this.binaryRead( dataview, at + read, properties[ i ].countType, little_endian );
					var n = result[ 0 ];
					read += result[ 1 ];

					for ( var j = 0; j < n; j ++ ) {

						result = this.binaryRead( dataview, at + read, properties[ i ].itemType, little_endian );
						list.push( result[ 0 ] );
						read += result[ 1 ];

					}

					element[ properties[ i ].name ] = list;

				} else {

					result = this.binaryRead( dataview, at + read, properties[ i ].type, little_endian );
					element[ properties[ i ].name ] = result[ 0 ];
					read += result[ 1 ];

				}

			}

			return [ element, read ];

		},

		parseBinary: function ( data ) {

			var geometry = new THREE.Geometry();

			var header = this.parseHeader( this.bin2str( data ) );
			var little_endian = ( header.format === "binary_little_endian" );
			var body = new DataView( data, header.headerLength );
			var result, loc = 0;

			for ( var currentElement = 0; currentElement < header.elements.length; currentElement ++ ) {

				for ( var currentElementCount = 0; currentElementCount < header.elements[ currentElement ].count; currentElementCount ++ ) {

					result = this.binaryReadElement( body, loc, header.elements[ currentElement ].properties, little_endian );
					loc += result[ 1 ];
					var element = result[ 0 ];

					this.handleElement( geometry, header.elements[ currentElement ].name, element );

				}

			}

			return this.postProcess( geometry );

		}

	};


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/*    
	 *	 PVRLoader
	 *   Author: pierre lepers
	 *   Date: 17/09/2014 11:09
	 *
	 *	 PVR v2 (legacy) parser
	 *   TODO : Add Support for PVR v3 format
	 *   TODO : implement loadMipmaps option
	 */
	var THREE = __webpack_require__(1);

	THREE.PVRLoader = function ( manager ) {

		this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

		this._parser = THREE.PVRLoader.parse;

	};

	THREE.PVRLoader.prototype = Object.create( THREE.CompressedTextureLoader.prototype );
	THREE.PVRLoader.prototype.constructor = THREE.PVRLoader;


	THREE.PVRLoader.parse = function ( buffer, loadMipmaps ) {

		var headerLengthInt = 13;
		var header = new Uint32Array( buffer, 0, headerLengthInt );

		var pvrDatas = {
			buffer: buffer,
			header : header,
			loadMipmaps : loadMipmaps
		};

		// PVR v3
		if ( header[ 0 ] === 0x03525650 ) {

			return THREE.PVRLoader._parseV3( pvrDatas );

		} 
		// PVR v2
		else if ( header[ 11 ] === 0x21525650 ) {

			return THREE.PVRLoader._parseV2( pvrDatas );

		} else {

			throw new Error( "[THREE.PVRLoader] Unknown PVR format" );

		}

	};

	THREE.PVRLoader._parseV3 = function ( pvrDatas ) {
		
		var header = pvrDatas.header;
		var bpp, format;
		

		var metaLen 	  = header[ 12 ],
			pixelFormat   =  header[ 2 ],
			height        =  header[ 6 ],
			width         =  header[ 7 ],
			numSurfs      =  header[ 9 ],
			numFaces      =  header[ 10 ],
			numMipmaps    =  header[ 11 ];

		switch ( pixelFormat ) {
			case 0 : // PVRTC 2bpp RGB
				bpp = 2;
				format = THREE.RGB_PVRTC_2BPPV1_Format;
				break;
			case 1 : // PVRTC 2bpp RGBA
				bpp = 2;
				format = THREE.RGBA_PVRTC_2BPPV1_Format;
				break;
			case 2 : // PVRTC 4bpp RGB
				bpp = 4;
				format = THREE.RGB_PVRTC_4BPPV1_Format;
				break;
			case 3 : // PVRTC 4bpp RGBA
				bpp = 4;
				format = THREE.RGBA_PVRTC_4BPPV1_Format;
				break;
			default :
				throw new Error( "pvrtc - unsupported PVR format " + pixelFormat );
		}

		pvrDatas.dataPtr 	 = 52 + metaLen;
		pvrDatas.bpp 		 = bpp;
		pvrDatas.format 	 = format;
		pvrDatas.width 		 = width;
		pvrDatas.height 	 = height;
		pvrDatas.numSurfaces = numFaces;
		pvrDatas.numMipmaps  = numMipmaps;

		pvrDatas.isCubemap 	= ( numFaces === 6 );

		return THREE.PVRLoader._extract( pvrDatas );

	};

	THREE.PVRLoader._parseV2 = function ( pvrDatas ) {

		var header = pvrDatas.header;

		var headerLength  =  header[ 0 ],
			height        =  header[ 1 ],
			width         =  header[ 2 ],
			numMipmaps    =  header[ 3 ],
			flags         =  header[ 4 ],
			dataLength    =  header[ 5 ],
			bpp           =  header[ 6 ],
			bitmaskRed    =  header[ 7 ],
			bitmaskGreen  =  header[ 8 ],
			bitmaskBlue   =  header[ 9 ],
			bitmaskAlpha  =  header[ 10 ],
			pvrTag        =  header[ 11 ],
			numSurfs      =  header[ 12 ];


		var TYPE_MASK = 0xff;
		var PVRTC_2 = 24,
			PVRTC_4 = 25;

		var formatFlags = flags & TYPE_MASK;



		var bpp, format;
		var _hasAlpha = bitmaskAlpha > 0;

		if ( formatFlags === PVRTC_4 ) {

			format = _hasAlpha ? THREE.RGBA_PVRTC_4BPPV1_Format : THREE.RGB_PVRTC_4BPPV1_Format;
			bpp = 4;

		} else if ( formatFlags === PVRTC_2 ) {

			format = _hasAlpha ? THREE.RGBA_PVRTC_2BPPV1_Format : THREE.RGB_PVRTC_2BPPV1_Format;
			bpp = 2;

		} else
			throw new Error( "pvrtc - unknown format " + formatFlags );
		


		pvrDatas.dataPtr 	 = headerLength;
		pvrDatas.bpp 		 = bpp;
		pvrDatas.format 	 = format;
		pvrDatas.width 		 = width;
		pvrDatas.height 	 = height;
		pvrDatas.numSurfaces = numSurfs;
		pvrDatas.numMipmaps  = numMipmaps + 1;

		// guess cubemap type seems tricky in v2
		// it juste a pvr containing 6 surface (no explicit cubemap type)
		pvrDatas.isCubemap 	= ( numSurfs === 6 );

		return THREE.PVRLoader._extract( pvrDatas );

	};


	THREE.PVRLoader._extract = function ( pvrDatas ) {
		
		var pvr = {
			mipmaps: [], 
			width: pvrDatas.width, 
			height: pvrDatas.height, 
			format: pvrDatas.format, 
			mipmapCount: pvrDatas.numMipmaps, 
			isCubemap : pvrDatas.isCubemap 
		};

		var buffer = pvrDatas.buffer;



		// console.log( "--------------------------" );

		// console.log( "headerLength ", headerLength);
		// console.log( "height       ", height      );
		// console.log( "width        ", width       );
		// console.log( "numMipmaps   ", numMipmaps  );
		// console.log( "flags        ", flags       );
		// console.log( "dataLength   ", dataLength  );
		// console.log( "bpp          ", bpp         );
		// console.log( "bitmaskRed   ", bitmaskRed  );
		// console.log( "bitmaskGreen ", bitmaskGreen);
		// console.log( "bitmaskBlue  ", bitmaskBlue );
		// console.log( "bitmaskAlpha ", bitmaskAlpha);
		// console.log( "pvrTag       ", pvrTag      );
		// console.log( "numSurfs     ", numSurfs    );




		var dataOffset = pvrDatas.dataPtr,
			bpp = pvrDatas.bpp,
			numSurfs = pvrDatas.numSurfaces,
			dataSize = 0,
			blockSize = 0,
			blockWidth = 0,
			blockHeight = 0,
			widthBlocks = 0,
			heightBlocks = 0;



		if ( bpp === 2 ) {

			blockWidth = 8;
			blockHeight = 4;

		} else {

			blockWidth = 4;
			blockHeight = 4;

		}

		blockSize = ( blockWidth * blockHeight ) * bpp / 8;

		pvr.mipmaps.length = pvrDatas.numMipmaps * numSurfs;

		var mipLevel = 0;

		while ( mipLevel < pvrDatas.numMipmaps ) {

			var sWidth = pvrDatas.width >> mipLevel,
			sHeight = pvrDatas.height >> mipLevel;

			widthBlocks = sWidth / blockWidth;
			heightBlocks = sHeight / blockHeight;

			// Clamp to minimum number of blocks
			if ( widthBlocks < 2 )
				widthBlocks = 2;
			if ( heightBlocks < 2 )
				heightBlocks = 2;

			dataSize = widthBlocks * heightBlocks * blockSize;


			for ( var surfIndex = 0; surfIndex < numSurfs; surfIndex ++ ) {

				var byteArray = new Uint8Array( buffer, dataOffset, dataSize );

				var mipmap = { 
					data: byteArray, 
					width: sWidth, 
					height: sHeight 
				};

				pvr.mipmaps[ surfIndex * pvrDatas.numMipmaps + mipLevel ] = mipmap;

				dataOffset += dataSize;


			}

			mipLevel ++;

		}


		return pvr;

	};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author Nikos M. / https://github.com/foo123/
	 */
	var THREE = __webpack_require__(1);

	// https://github.com/mrdoob/three.js/issues/5552
	// http://en.wikipedia.org/wiki/RGBE_image_format

	THREE.HDRLoader = THREE.RGBELoader = function ( manager ) {

		this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

	};

	// extend THREE.BinaryTextureLoader
	THREE.RGBELoader.prototype = Object.create( THREE.BinaryTextureLoader.prototype );

	// adapted from http://www.graphics.cornell.edu/~bjw/rgbe.html
	THREE.RGBELoader.prototype._parser = function( buffer ) {

		var
			/* return codes for rgbe routines */
			RGBE_RETURN_SUCCESS =  0,
			RGBE_RETURN_FAILURE = - 1,

			/* default error routine.  change this to change error handling */
			rgbe_read_error     = 1,
			rgbe_write_error    = 2,
			rgbe_format_error   = 3,
			rgbe_memory_error   = 4,
			rgbe_error = function( rgbe_error_code, msg ) {

				switch ( rgbe_error_code ) {
					case rgbe_read_error: console.error( "THREE.RGBELoader Read Error: " + ( msg || '' ) );
						break;
					case rgbe_write_error: console.error( "THREE.RGBELoader Write Error: " + ( msg || '' ) );
						break;
					case rgbe_format_error:  console.error( "THREE.RGBELoader Bad File Format: " + ( msg || '' ) );
						break;
					default:
					case rgbe_memory_error:  console.error( "THREE.RGBELoader: Error: " + ( msg || '' ) );
				}
				return RGBE_RETURN_FAILURE;

			},

			/* offsets to red, green, and blue components in a data (float) pixel */
			RGBE_DATA_RED      = 0,
			RGBE_DATA_GREEN    = 1,
			RGBE_DATA_BLUE     = 2,

			/* number of floats per pixel, use 4 since stored in rgba image format */
			RGBE_DATA_SIZE     = 4,

			/* flags indicating which fields in an rgbe_header_info are valid */
			RGBE_VALID_PROGRAMTYPE      = 1,
			RGBE_VALID_FORMAT           = 2,
			RGBE_VALID_DIMENSIONS       = 4,

			NEWLINE = "\n",

			fgets = function( buffer, lineLimit, consume ) {

				lineLimit = ! lineLimit ? 1024 : lineLimit;
				var p = buffer.pos,
					i = - 1, len = 0, s = '', chunkSize = 128,
					chunk = String.fromCharCode.apply( null, new Uint16Array( buffer.subarray( p, p + chunkSize ) ) )
				;
				while ( ( 0 > ( i = chunk.indexOf( NEWLINE ) ) ) && ( len < lineLimit ) && ( p < buffer.byteLength ) ) {

					s += chunk; len += chunk.length;
					p += chunkSize;
					chunk += String.fromCharCode.apply( null, new Uint16Array( buffer.subarray( p, p + chunkSize ) ) );

				}

				if ( - 1 < i ) {

					/*for (i=l-1; i>=0; i--) {
						byteCode = m.charCodeAt(i);
						if (byteCode > 0x7f && byteCode <= 0x7ff) byteLen++;
						else if (byteCode > 0x7ff && byteCode <= 0xffff) byteLen += 2;
						if (byteCode >= 0xDC00 && byteCode <= 0xDFFF) i--; //trail surrogate
					}*/
					if ( false !== consume ) buffer.pos += len + i + 1;
					return s + chunk.slice( 0, i );

				}
				return false;

			},

			/* minimal header reading.  modify if you want to parse more information */
			RGBE_ReadHeader = function( buffer ) {

				var line, match,

					// regexes to parse header info fields
					magic_token_re = /^#\?(\S+)$/,
					gamma_re = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,
					exposure_re = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,
					format_re = /^\s*FORMAT=(\S+)\s*$/,
					dimensions_re = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,

					// RGBE format header struct
					header = {

						valid: 0,                         /* indicate which fields are valid */

						string: '',                       /* the actual header string */

						comments: '',                     /* comments found in header */

						programtype: 'RGBE',              /* listed at beginning of file to identify it
														* after "#?".  defaults to "RGBE" */
															
						format: '',                       /* RGBE format, default 32-bit_rle_rgbe */

						gamma: 1.0,                       /* image has already been gamma corrected with
														* given gamma.  defaults to 1.0 (no correction) */
															
						exposure: 1.0,                    /* a value of 1.0 in an image corresponds to
														* <exposure> watts/steradian/m^2.
														* defaults to 1.0 */
															
						width: 0, height: 0               /* image dimensions, width/height */

					}
				;

				if ( buffer.pos >= buffer.byteLength || ! ( line = fgets( buffer ) ) ) {

					return rgbe_error( rgbe_read_error, "no header found" );

				}
				/* if you want to require the magic token then uncomment the next line */
				if ( ! ( match = line.match( magic_token_re ) ) ) {

					return rgbe_error( rgbe_format_error, "bad initial token" );

				}
				header.valid |= RGBE_VALID_PROGRAMTYPE;
				header.programtype = match[ 1 ];
				header.string += line + "\n";

				while ( true ) {

					line = fgets( buffer );
					if ( false === line ) break;
					header.string += line + "\n";

					if ( '#' === line.charAt( 0 ) ) {

						header.comments += line + "\n";
						continue; // comment line

					}

					if ( match = line.match( gamma_re ) ) {

						header.gamma = parseFloat( match[ 1 ], 10 );

					}
					if ( match = line.match( exposure_re ) ) {

						header.exposure = parseFloat( match[ 1 ], 10 );

					}
					if ( match = line.match( format_re ) ) {

						header.valid |= RGBE_VALID_FORMAT;
						header.format = match[ 1 ];//'32-bit_rle_rgbe';

					}
					if ( match = line.match( dimensions_re ) ) {

						header.valid |= RGBE_VALID_DIMENSIONS;
						header.height = parseInt( match[ 1 ], 10 );
						header.width = parseInt( match[ 2 ], 10 );

					}

					if ( ( header.valid & RGBE_VALID_FORMAT ) && ( header.valid & RGBE_VALID_DIMENSIONS ) ) break;

				}

				if ( ! ( header.valid & RGBE_VALID_FORMAT ) ) {

					return rgbe_error( rgbe_format_error, "missing format specifier" );

				}
				if ( ! ( header.valid & RGBE_VALID_DIMENSIONS ) ) {

					return rgbe_error( rgbe_format_error, "missing image size specifier" );

				}

				return header;

			},

			RGBE_ReadPixels_RLE = function( buffer, w, h ) {

				var data_rgba, offset, pos, count, byteValue,
					scanline_buffer, ptr, ptr_end, i, l, off, isEncodedRun,
					scanline_width = w, num_scanlines = h, rgbeStart
				;

				if (
					// run length encoding is not allowed so read flat
					( ( scanline_width < 8 ) || ( scanline_width > 0x7fff ) ) ||
					// this file is not run length encoded
					( ( 2 !== buffer[ 0 ] ) || ( 2 !== buffer[ 1 ] ) || ( buffer[ 2 ] & 0x80 ) )
				) {

					// return the flat buffer
					return new Uint8Array( buffer );

				}

				if ( scanline_width !== ( ( buffer[ 2 ] << 8 ) | buffer[ 3 ] ) ) {

					return rgbe_error( rgbe_format_error, "wrong scanline width" );

				}

				data_rgba = new Uint8Array( 4 * w * h );

				if ( ! data_rgba || ! data_rgba.length ) {

					return rgbe_error( rgbe_memory_error, "unable to allocate buffer space" );

				}

				offset = 0; pos = 0; ptr_end = 4 * scanline_width;
				rgbeStart = new Uint8Array( 4 );
				scanline_buffer = new Uint8Array( ptr_end );

				// read in each successive scanline
				while ( ( num_scanlines > 0 ) && ( pos < buffer.byteLength ) ) {

					if ( pos + 4 > buffer.byteLength ) {

						return rgbe_error( rgbe_read_error );

					}

					rgbeStart[ 0 ] = buffer[ pos ++ ];
					rgbeStart[ 1 ] = buffer[ pos ++ ];
					rgbeStart[ 2 ] = buffer[ pos ++ ];
					rgbeStart[ 3 ] = buffer[ pos ++ ];

					if ( ( 2 != rgbeStart[ 0 ] ) || ( 2 != rgbeStart[ 1 ] ) || ( ( ( rgbeStart[ 2 ] << 8 ) | rgbeStart[ 3 ] ) != scanline_width ) ) {

						return rgbe_error( rgbe_format_error, "bad rgbe scanline format" );

					}

					// read each of the four channels for the scanline into the buffer
					// first red, then green, then blue, then exponent
					ptr = 0;
					while ( ( ptr < ptr_end ) && ( pos < buffer.byteLength ) ) {

						count = buffer[ pos ++ ];
						isEncodedRun = count > 128;
						if ( isEncodedRun ) count -= 128;

						if ( ( 0 === count ) || ( ptr + count > ptr_end ) ) {

							return rgbe_error( rgbe_format_error, "bad scanline data" );

						}

						if ( isEncodedRun ) {

							// a (encoded) run of the same value
							byteValue = buffer[ pos ++ ];
							for ( i = 0; i < count; i ++ ) {

								scanline_buffer[ ptr ++ ] = byteValue;

							}
							//ptr += count;

						} else {

							// a literal-run
							scanline_buffer.set( buffer.subarray( pos, pos + count ), ptr );
							ptr += count; pos += count;

						}

					}


					// now convert data from buffer into rgba
					// first red, then green, then blue, then exponent (alpha)
					l = scanline_width; //scanline_buffer.byteLength;
					for ( i = 0; i < l; i ++ ) {

						off = 0;
						data_rgba[ offset ] = scanline_buffer[ i + off ];
						off += scanline_width; //1;
						data_rgba[ offset + 1 ] = scanline_buffer[ i + off ];
						off += scanline_width; //1;
						data_rgba[ offset + 2 ] = scanline_buffer[ i + off ];
						off += scanline_width; //1;
						data_rgba[ offset + 3 ] = scanline_buffer[ i + off ];
						offset += 4;

					}

					num_scanlines --;

				}

				return data_rgba;

			}
		;

		var byteArray = new Uint8Array( buffer ),
			byteLength = byteArray.byteLength;
		byteArray.pos = 0;
		var rgbe_header_info = RGBE_ReadHeader( byteArray );

		if ( RGBE_RETURN_FAILURE !== rgbe_header_info ) {

			var w = rgbe_header_info.width,
				h = rgbe_header_info.height
				, image_rgba_data = RGBE_ReadPixels_RLE( byteArray.subarray( byteArray.pos ), w, h )
			;
			if ( RGBE_RETURN_FAILURE !== image_rgba_data ) {

				return {
					width: w, height: h,
					data: image_rgba_data,
					header: rgbe_header_info.string,
					gamma: rgbe_header_info.gamma,
					exposure: rgbe_header_info.exposure,
					format: THREE.RGBEFormat, // handled as THREE.RGBAFormat in shaders
					type: THREE.UnsignedByteType
				};

			}

		}
		return null;

	};


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author aleeper / http://adamleeper.com/
	 * @author mrdoob / http://mrdoob.com/
	 * @author gero3 / https://github.com/gero3
	 *
	 * Description: A THREE loader for STL ASCII files, as created by Solidworks and other CAD programs.
	 *
	 * Supports both binary and ASCII encoded files, with automatic detection of type.
	 *
	 * Limitations:
	 *  Binary decoding supports "Magics" color format (http://en.wikipedia.org/wiki/STL_(file_format)#Color_in_binary_STL).
	 *  There is perhaps some question as to how valid it is to always assume little-endian-ness.
	 *  ASCII decoding assumes file is UTF-8. Seems to work for the examples...
	 *
	 * Usage:
	 *  var loader = new THREE.STLLoader();
	 *  loader.load( './models/stl/slotted_disk.stl', function ( geometry ) {
	 *    scene.add( new THREE.Mesh( geometry ) );
	 *  });
	 *
	 * For binary STLs geometry might contain colors for vertices. To use it:
	 *  // use the same code to load STL as above
	 *  if (geometry.hasColors) {
	 *    material = new THREE.MeshPhongMaterial({ opacity: geometry.alpha, vertexColors: THREE.VertexColors });
	 *  } else { .... }
	 *  var mesh = new THREE.Mesh( geometry, material );
	 */
	var THREE = __webpack_require__(1);


	THREE.STLLoader = function ( manager ) {

		this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

	};

	THREE.STLLoader.prototype = {

		constructor: THREE.STLLoader,

		load: function ( url, onLoad, onProgress, onError ) {

			var scope = this;

			var loader = new THREE.XHRLoader( scope.manager );
			loader.setCrossOrigin( this.crossOrigin );
			loader.setResponseType( 'arraybuffer' );
			loader.load( url, function ( text ) {

				onLoad( scope.parse( text ) );

			}, onProgress, onError );

		},

		setCrossOrigin: function ( value ) {

			this.crossOrigin = value;

		},

		parse: function ( data ) {

			var isBinary = function () {

				var expect, face_size, n_faces, reader;
				reader = new DataView( binData );
				face_size = ( 32 / 8 * 3 ) + ( ( 32 / 8 * 3 ) * 3 ) + ( 16 / 8 );
				n_faces = reader.getUint32( 80, true );
				expect = 80 + ( 32 / 8 ) + ( n_faces * face_size );

				if ( expect === reader.byteLength ) {

					return true;

				}

				// some binary files will have different size from expected,
				// checking characters higher than ASCII to confirm is binary
				var fileLength = reader.byteLength;
				for ( var index = 0; index < fileLength; index ++ ) {

					if ( reader.getUint8( index, false ) > 127 ) {

						return true;

					}

				}

				return false;

			};

			var binData = this.ensureBinary( data );

			return isBinary()
				? this.parseBinary( binData )
				: this.parseASCII( this.ensureString( data ) );

		},

		parseBinary: function ( data ) {

			var reader = new DataView( data );
			var faces = reader.getUint32( 80, true );

			var r, g, b, hasColors = false, colors;
			var defaultR, defaultG, defaultB, alpha;

			// process STL header
			// check for default color in header ("COLOR=rgba" sequence).

			for ( var index = 0; index < 80 - 10; index ++ ) {

				if ( ( reader.getUint32( index, false ) == 0x434F4C4F /*COLO*/ ) &&
					( reader.getUint8( index + 4 ) == 0x52 /*'R'*/ ) &&
					( reader.getUint8( index + 5 ) == 0x3D /*'='*/ ) ) {

					hasColors = true;
					colors = new Float32Array( faces * 3 * 3 );

					defaultR = reader.getUint8( index + 6 ) / 255;
					defaultG = reader.getUint8( index + 7 ) / 255;
					defaultB = reader.getUint8( index + 8 ) / 255;
					alpha = reader.getUint8( index + 9 ) / 255;

				}

			}

			var dataOffset = 84;
			var faceLength = 12 * 4 + 2;

			var offset = 0;

			var geometry = new THREE.BufferGeometry();

			var vertices = new Float32Array( faces * 3 * 3 );
			var normals = new Float32Array( faces * 3 * 3 );

			for ( var face = 0; face < faces; face ++ ) {

				var start = dataOffset + face * faceLength;
				var normalX = reader.getFloat32( start, true );
				var normalY = reader.getFloat32( start + 4, true );
				var normalZ = reader.getFloat32( start + 8, true );

				if ( hasColors ) {

					var packedColor = reader.getUint16( start + 48, true );

					if ( ( packedColor & 0x8000 ) === 0 ) {

						// facet has its own unique color

						r = ( packedColor & 0x1F ) / 31;
						g = ( ( packedColor >> 5 ) & 0x1F ) / 31;
						b = ( ( packedColor >> 10 ) & 0x1F ) / 31;

					} else {

						r = defaultR;
						g = defaultG;
						b = defaultB;

					}

				}

				for ( var i = 1; i <= 3; i ++ ) {

					var vertexstart = start + i * 12;

					vertices[ offset ] = reader.getFloat32( vertexstart, true );
					vertices[ offset + 1 ] = reader.getFloat32( vertexstart + 4, true );
					vertices[ offset + 2 ] = reader.getFloat32( vertexstart + 8, true );

					normals[ offset ] = normalX;
					normals[ offset + 1 ] = normalY;
					normals[ offset + 2 ] = normalZ;

					if ( hasColors ) {

						colors[ offset ] = r;
						colors[ offset + 1 ] = g;
						colors[ offset + 2 ] = b;

					}

					offset += 3;

				}

			}

			geometry.addAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
			geometry.addAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );

			if ( hasColors ) {

				geometry.addAttribute( 'color', new THREE.BufferAttribute( colors, 3 ) );
				geometry.hasColors = true;
				geometry.alpha = alpha;

			}

			return geometry;

		},

		parseASCII: function ( data ) {

			var geometry, length, normal, patternFace, patternNormal, patternVertex, result, text;
			geometry = new THREE.Geometry();
			patternFace = /facet([\s\S]*?)endfacet/g;

			while ( ( result = patternFace.exec( data ) ) !== null ) {

				text = result[ 0 ];
				patternNormal = /normal[\s]+([\-+]?[0-9]+\.?[0-9]*([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+/g;

				while ( ( result = patternNormal.exec( text ) ) !== null ) {

					normal = new THREE.Vector3( parseFloat( result[ 1 ] ), parseFloat( result[ 3 ] ), parseFloat( result[ 5 ] ) );

				}

				patternVertex = /vertex[\s]+([\-+]?[0-9]+\.?[0-9]*([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+/g;

				while ( ( result = patternVertex.exec( text ) ) !== null ) {

					geometry.vertices.push( new THREE.Vector3( parseFloat( result[ 1 ] ), parseFloat( result[ 3 ] ), parseFloat( result[ 5 ] ) ) );

				}

				length = geometry.vertices.length;

				geometry.faces.push( new THREE.Face3( length - 3, length - 2, length - 1, normal ) );

			}

			geometry.computeBoundingBox();
			geometry.computeBoundingSphere();

			return geometry;

		},

		ensureString: function ( buf ) {

			if ( typeof buf !== "string" ) {

				var array_buffer = new Uint8Array( buf );
				var str = '';
				for ( var i = 0; i < buf.byteLength; i ++ ) {

					str += String.fromCharCode( array_buffer[ i ] ); // implicitly assumes little-endian

				}
				return str;

			} else {

				return buf;

			}

		},

		ensureBinary: function ( buf ) {

			if ( typeof buf === "string" ) {

				var array_buffer = new Uint8Array( buf.length );
				for ( var i = 0; i < buf.length; i ++ ) {

					array_buffer[ i ] = buf.charCodeAt( i ) & 0xff; // implicitly assumes little-endian

				}
				return array_buffer.buffer || array_buffer;

			} else {

				return buf;

			}

		}

	};

	if ( typeof DataView === 'undefined' ) {

		DataView = function( buffer, byteOffset, byteLength ) {

			this.buffer = buffer;
			this.byteOffset = byteOffset || 0;
			this.byteLength = byteLength || buffer.byteLength || buffer.length;
			this._isString = typeof buffer === "string";

		};

		DataView.prototype = {

			_getCharCodes: function( buffer, start, length ) {

				start = start || 0;
				length = length || buffer.length;
				var end = start + length;
				var codes = [];
				for ( var i = start; i < end; i ++ ) {

					codes.push( buffer.charCodeAt( i ) & 0xff );

				}
				return codes;

			},

			_getBytes: function ( length, byteOffset, littleEndian ) {

				var result;

				// Handle the lack of endianness
				if ( littleEndian === undefined ) {

					littleEndian = this._littleEndian;

				}

				// Handle the lack of byteOffset
				if ( byteOffset === undefined ) {

					byteOffset = this.byteOffset;

				} else {

					byteOffset = this.byteOffset + byteOffset;

				}

				if ( length === undefined ) {

					length = this.byteLength - byteOffset;

				}

				// Error Checking
				if ( typeof byteOffset !== 'number' ) {

					throw new TypeError( 'DataView byteOffset is not a number' );

				}

				if ( length < 0 || byteOffset + length > this.byteLength ) {

					throw new Error( 'DataView length or (byteOffset+length) value is out of bounds' );

				}

				if ( this.isString ) {

					result = this._getCharCodes( this.buffer, byteOffset, byteOffset + length );

				} else {

					result = this.buffer.slice( byteOffset, byteOffset + length );

				}

				if ( ! littleEndian && length > 1 ) {

					if ( Array.isArray( result ) === false ) {

						result = Array.prototype.slice.call( result );

					}

					result.reverse();

				}

				return result;

			},

			// Compatibility functions on a String Buffer

			getFloat64: function ( byteOffset, littleEndian ) {

				var b = this._getBytes( 8, byteOffset, littleEndian ),

					sign = 1 - ( 2 * ( b[ 7 ] >> 7 ) ),
					exponent = ( ( ( ( b[ 7 ] << 1 ) & 0xff ) << 3 ) | ( b[ 6 ] >> 4 ) ) - ( ( 1 << 10 ) - 1 ),

				// Binary operators such as | and << operate on 32 bit values, using + and Math.pow(2) instead
					mantissa = ( ( b[ 6 ] & 0x0f ) * Math.pow( 2, 48 ) ) + ( b[ 5 ] * Math.pow( 2, 40 ) ) + ( b[ 4 ] * Math.pow( 2, 32 ) ) +
								( b[ 3 ] * Math.pow( 2, 24 ) ) + ( b[ 2 ] * Math.pow( 2, 16 ) ) + ( b[ 1 ] * Math.pow( 2, 8 ) ) + b[ 0 ];

				if ( exponent === 1024 ) {

					if ( mantissa !== 0 ) {

						return NaN;

					} else {

						return sign * Infinity;

					}

				}

				if ( exponent === - 1023 ) {

					// Denormalized
					return sign * mantissa * Math.pow( 2, - 1022 - 52 );

				}

				return sign * ( 1 + mantissa * Math.pow( 2, - 52 ) ) * Math.pow( 2, exponent );

			},

			getFloat32: function ( byteOffset, littleEndian ) {

				var b = this._getBytes( 4, byteOffset, littleEndian ),

					sign = 1 - ( 2 * ( b[ 3 ] >> 7 ) ),
					exponent = ( ( ( b[ 3 ] << 1 ) & 0xff ) | ( b[ 2 ] >> 7 ) ) - 127,
					mantissa = ( ( b[ 2 ] & 0x7f ) << 16 ) | ( b[ 1 ] << 8 ) | b[ 0 ];

				if ( exponent === 128 ) {

					if ( mantissa !== 0 ) {

						return NaN;

					} else {

						return sign * Infinity;

					}

				}

				if ( exponent === - 127 ) {

					// Denormalized
					return sign * mantissa * Math.pow( 2, - 126 - 23 );

				}

				return sign * ( 1 + mantissa * Math.pow( 2, - 23 ) ) * Math.pow( 2, exponent );

			},

			getInt32: function ( byteOffset, littleEndian ) {

				var b = this._getBytes( 4, byteOffset, littleEndian );
				return ( b[ 3 ] << 24 ) | ( b[ 2 ] << 16 ) | ( b[ 1 ] << 8 ) | b[ 0 ];

			},

			getUint32: function ( byteOffset, littleEndian ) {

				return this.getInt32( byteOffset, littleEndian ) >>> 0;

			},

			getInt16: function ( byteOffset, littleEndian ) {

				return ( this.getUint16( byteOffset, littleEndian ) << 16 ) >> 16;

			},

			getUint16: function ( byteOffset, littleEndian ) {

				var b = this._getBytes( 2, byteOffset, littleEndian );
				return ( b[ 1 ] << 8 ) | b[ 0 ];

			},

			getInt8: function ( byteOffset ) {

				return ( this.getUint8( byteOffset ) << 24 ) >> 24;

			},

			getUint8: function ( byteOffset ) {

				return this._getBytes( 1, byteOffset )[ 0 ];

			}

		 };

	}


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author mrdoob / http://mrdoob.com/
	 * @author zz85 / http://joshuakoo.com/
	 */
	var THREE = __webpack_require__(1);

	THREE.SVGLoader = function ( manager ) {

		this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

	};

	THREE.SVGLoader.prototype = {

		constructor: THREE.SVGLoader,

		load: function ( url, onLoad, onProgress, onError ) {

			var scope = this;

			var parser = new DOMParser();

			var loader = new THREE.XHRLoader( scope.manager );
			loader.setCrossOrigin( this.crossOrigin );
			loader.load( url, function ( svgString ) {

				var doc = parser.parseFromString( svgString, 'image/svg+xml' );  // application/xml

				onLoad( doc.firstChild );

			}, onProgress, onError );

		},

		setCrossOrigin: function ( value ) {

			this.crossOrigin = value;

		}

	};


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * @author Daosheng Mu / https://github.com/DaoshengMu/
	 * @author mrdoob / http://mrdoob.com/
	 */
	var THREE = __webpack_require__(1);

	THREE.TGALoader = function ( manager ) {

		this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

	};

	// extend THREE.BinaryTextureLoader
	THREE.TGALoader.prototype = Object.create( THREE.BinaryTextureLoader.prototype );

	// reference from vthibault, https://github.com/vthibault/roBrowser/blob/master/src/Loaders/Targa.js
	THREE.TGALoader.prototype._parser = function ( buffer ) {

		// TGA Constants
		var TGA_TYPE_NO_DATA = 0,
		TGA_TYPE_INDEXED = 1,
		TGA_TYPE_RGB = 2,
		TGA_TYPE_GREY = 3,
		TGA_TYPE_RLE_INDEXED = 9,
		TGA_TYPE_RLE_RGB = 10,
		TGA_TYPE_RLE_GREY = 11,

		TGA_ORIGIN_MASK = 0x30,
		TGA_ORIGIN_SHIFT = 0x04,
		TGA_ORIGIN_BL = 0x00,
		TGA_ORIGIN_BR = 0x01,
		TGA_ORIGIN_UL = 0x02,
		TGA_ORIGIN_UR = 0x03;


		if ( buffer.length < 19 )
			console.error( 'THREE.TGALoader.parse: Not enough data to contain header.' );

		var content = new Uint8Array( buffer ),
			offset = 0,
			header = {
				id_length:       content[ offset ++ ],
				colormap_type:   content[ offset ++ ],
				image_type:      content[ offset ++ ],
				colormap_index:  content[ offset ++ ] | content[ offset ++ ] << 8,
				colormap_length: content[ offset ++ ] | content[ offset ++ ] << 8,
				colormap_size:   content[ offset ++ ],

				origin: [
					content[ offset ++ ] | content[ offset ++ ] << 8,
					content[ offset ++ ] | content[ offset ++ ] << 8
				],
				width:      content[ offset ++ ] | content[ offset ++ ] << 8,
				height:     content[ offset ++ ] | content[ offset ++ ] << 8,
				pixel_size: content[ offset ++ ],
				flags:      content[ offset ++ ]
			};

		function tgaCheckHeader( header ) {

			switch ( header.image_type ) {

				// Check indexed type
				case TGA_TYPE_INDEXED:
				case TGA_TYPE_RLE_INDEXED:
					if ( header.colormap_length > 256 || header.colormap_size !== 24 || header.colormap_type !== 1 ) {

						console.error( 'THREE.TGALoader.parse.tgaCheckHeader: Invalid type colormap data for indexed type' );

					}
					break;

				// Check colormap type
				case TGA_TYPE_RGB:
				case TGA_TYPE_GREY:
				case TGA_TYPE_RLE_RGB:
				case TGA_TYPE_RLE_GREY:
					if ( header.colormap_type ) {

						console.error( 'THREE.TGALoader.parse.tgaCheckHeader: Invalid type colormap data for colormap type' );

					}
					break;

				// What the need of a file without data ?
				case TGA_TYPE_NO_DATA:
					console.error( 'THREE.TGALoader.parse.tgaCheckHeader: No data' );

				// Invalid type ?
				default:
					console.error( 'THREE.TGALoader.parse.tgaCheckHeader: Invalid type " ' + header.image_type + '"' );

			}

			// Check image width and height
			if ( header.width <= 0 || header.height <= 0 ) {

				console.error( 'THREE.TGALoader.parse.tgaCheckHeader: Invalid image size' );

			}

			// Check image pixel size
			if ( header.pixel_size !== 8  &&
				header.pixel_size !== 16 &&
				header.pixel_size !== 24 &&
				header.pixel_size !== 32 ) {

				console.error( 'THREE.TGALoader.parse.tgaCheckHeader: Invalid pixel size "' + header.pixel_size + '"' );

			}

		}

		// Check tga if it is valid format
		tgaCheckHeader( header );

		if ( header.id_length + offset > buffer.length ) {

			console.error( 'THREE.TGALoader.parse: No data' );

		}

		// Skip the needn't data
		offset += header.id_length;

		// Get targa information about RLE compression and palette
		var use_rle = false,
			use_pal = false,
			use_grey = false;

		switch ( header.image_type ) {

			case TGA_TYPE_RLE_INDEXED:
				use_rle = true;
				use_pal = true;
				break;

			case TGA_TYPE_INDEXED:
				use_pal = true;
				break;

			case TGA_TYPE_RLE_RGB:
				use_rle = true;
				break;

			case TGA_TYPE_RGB:
				break;

			case TGA_TYPE_RLE_GREY:
				use_rle = true;
				use_grey = true;
				break;

			case TGA_TYPE_GREY:
				use_grey = true;
				break;

		}

		// Parse tga image buffer
		function tgaParse( use_rle, use_pal, header, offset, data ) {

			var pixel_data,
				pixel_size,
				pixel_total,
				palettes;

			pixel_size = header.pixel_size >> 3;
			pixel_total = header.width * header.height * pixel_size;

			 // Read palettes
			 if ( use_pal ) {

				 palettes = data.subarray( offset, offset += header.colormap_length * ( header.colormap_size >> 3 ) );

			 }

			 // Read RLE
			 if ( use_rle ) {

				 pixel_data = new Uint8Array( pixel_total );

				var c, count, i;
				var shift = 0;
				var pixels = new Uint8Array( pixel_size );

				while ( shift < pixel_total ) {

					c     = data[ offset ++ ];
					count = ( c & 0x7f ) + 1;

					// RLE pixels.
					if ( c & 0x80 ) {

						// Bind pixel tmp array
						for ( i = 0; i < pixel_size; ++ i ) {

							pixels[ i ] = data[ offset ++ ];

						}

						// Copy pixel array
						for ( i = 0; i < count; ++ i ) {

							pixel_data.set( pixels, shift + i * pixel_size );

						}

						shift += pixel_size * count;

					} else {

						// Raw pixels.
						count *= pixel_size;
						for ( i = 0; i < count; ++ i ) {

							pixel_data[ shift + i ] = data[ offset ++ ];

						}
						shift += count;

					}

				}

			 } else {

				// RAW Pixels
				pixel_data = data.subarray(
					 offset, offset += ( use_pal ? header.width * header.height : pixel_total )
				);

			 }

			 return {
				pixel_data: pixel_data,
				palettes: palettes
			 };

		}

		function tgaGetImageData8bits( imageData, y_start, y_step, y_end, x_start, x_step, x_end, image, palettes ) {

			var colormap = palettes;
			var color, i = 0, x, y;
			var width = header.width;

			for ( y = y_start; y !== y_end; y += y_step ) {

				for ( x = x_start; x !== x_end; x += x_step, i ++ ) {

					color = image[ i ];
					imageData[ ( x + width * y ) * 4 + 3 ] = 255;
					imageData[ ( x + width * y ) * 4 + 2 ] = colormap[ ( color * 3 ) + 0 ];
					imageData[ ( x + width * y ) * 4 + 1 ] = colormap[ ( color * 3 ) + 1 ];
					imageData[ ( x + width * y ) * 4 + 0 ] = colormap[ ( color * 3 ) + 2 ];

				}

			}

			return imageData;

		}

		function tgaGetImageData16bits( imageData, y_start, y_step, y_end, x_start, x_step, x_end, image ) {

			var color, i = 0, x, y;
			var width = header.width;

			for ( y = y_start; y !== y_end; y += y_step ) {

				for ( x = x_start; x !== x_end; x += x_step, i += 2 ) {

					color = image[ i + 0 ] + ( image[ i + 1 ] << 8 ); // Inversed ?
					imageData[ ( x + width * y ) * 4 + 0 ] = ( color & 0x7C00 ) >> 7;
					imageData[ ( x + width * y ) * 4 + 1 ] = ( color & 0x03E0 ) >> 2;
					imageData[ ( x + width * y ) * 4 + 2 ] = ( color & 0x001F ) >> 3;
					imageData[ ( x + width * y ) * 4 + 3 ] = ( color & 0x8000 ) ? 0 : 255;

				}

			}

			return imageData;

		}

		function tgaGetImageData24bits( imageData, y_start, y_step, y_end, x_start, x_step, x_end, image ) {

			var i = 0, x, y;
			var width = header.width;

			for ( y = y_start; y !== y_end; y += y_step ) {

				for ( x = x_start; x !== x_end; x += x_step, i += 3 ) {

					imageData[ ( x + width * y ) * 4 + 3 ] = 255;
					imageData[ ( x + width * y ) * 4 + 2 ] = image[ i + 0 ];
					imageData[ ( x + width * y ) * 4 + 1 ] = image[ i + 1 ];
					imageData[ ( x + width * y ) * 4 + 0 ] = image[ i + 2 ];

				}

			}

			return imageData;

		}

		function tgaGetImageData32bits( imageData, y_start, y_step, y_end, x_start, x_step, x_end, image ) {

			var i = 0, x, y;
			var width = header.width;

			for ( y = y_start; y !== y_end; y += y_step ) {

				for ( x = x_start; x !== x_end; x += x_step, i += 4 ) {

					imageData[ ( x + width * y ) * 4 + 2 ] = image[ i + 0 ];
					imageData[ ( x + width * y ) * 4 + 1 ] = image[ i + 1 ];
					imageData[ ( x + width * y ) * 4 + 0 ] = image[ i + 2 ];
					imageData[ ( x + width * y ) * 4 + 3 ] = image[ i + 3 ];

				}

			}

			return imageData;

		}

		function tgaGetImageDataGrey8bits( imageData, y_start, y_step, y_end, x_start, x_step, x_end, image ) {

			var color, i = 0, x, y;
			var width = header.width;

			for ( y = y_start; y !== y_end; y += y_step ) {

				for ( x = x_start; x !== x_end; x += x_step, i ++ ) {

					color = image[ i ];
					imageData[ ( x + width * y ) * 4 + 0 ] = color;
					imageData[ ( x + width * y ) * 4 + 1 ] = color;
					imageData[ ( x + width * y ) * 4 + 2 ] = color;
					imageData[ ( x + width * y ) * 4 + 3 ] = 255;

				}

			}

			return imageData;

		}

		function tgaGetImageDataGrey16bits( imageData, y_start, y_step, y_end, x_start, x_step, x_end, image ) {

			var i = 0, x, y;
			var width = header.width;

			for ( y = y_start; y !== y_end; y += y_step ) {

				for ( x = x_start; x !== x_end; x += x_step, i += 2 ) {

					imageData[ ( x + width * y ) * 4 + 0 ] = image[ i + 0 ];
					imageData[ ( x + width * y ) * 4 + 1 ] = image[ i + 0 ];
					imageData[ ( x + width * y ) * 4 + 2 ] = image[ i + 0 ];
					imageData[ ( x + width * y ) * 4 + 3 ] = image[ i + 1 ];

				}

			}

			return imageData;

		}

		function getTgaRGBA( width, height, image, palette ) {

			var x_start,
				y_start,
				x_step,
				y_step,
				x_end,
				y_end,
				data = new Uint8Array( width * height * 4 );

			switch ( ( header.flags & TGA_ORIGIN_MASK ) >> TGA_ORIGIN_SHIFT ) {
				default:
				case TGA_ORIGIN_UL:
					x_start = 0;
					x_step = 1;
					x_end = width;
					y_start = 0;
					y_step = 1;
					y_end = height;
					break;

				case TGA_ORIGIN_BL:
					x_start = 0;
					x_step = 1;
					x_end = width;
					y_start = height - 1;
					y_step = - 1;
					y_end = - 1;
					break;

				case TGA_ORIGIN_UR:
					x_start = width - 1;
					x_step = - 1;
					x_end = - 1;
					y_start = 0;
					y_step = 1;
					y_end = height;
					break;

				case TGA_ORIGIN_BR:
					x_start = width - 1;
					x_step = - 1;
					x_end = - 1;
					y_start = height - 1;
					y_step = - 1;
					y_end = - 1;
					break;

			}

			if ( use_grey ) {

				switch ( header.pixel_size ) {
					case 8:
						tgaGetImageDataGrey8bits( data, y_start, y_step, y_end, x_start, x_step, x_end, image );
						break;
					case 16:
						tgaGetImageDataGrey16bits( data, y_start, y_step, y_end, x_start, x_step, x_end, image );
						break;
					default:
						console.error( 'THREE.TGALoader.parse.getTgaRGBA: not support this format' );
						break;
				}

			} else {

				switch ( header.pixel_size ) {
					case 8:
						tgaGetImageData8bits( data, y_start, y_step, y_end, x_start, x_step, x_end, image, palette );
						break;

					case 16:
						tgaGetImageData16bits( data, y_start, y_step, y_end, x_start, x_step, x_end, image );
						break;

					case 24:
						tgaGetImageData24bits( data, y_start, y_step, y_end, x_start, x_step, x_end, image );
						break;

					case 32:
						tgaGetImageData32bits( data, y_start, y_step, y_end, x_start, x_step, x_end, image );
						break;

					default:
						console.error( 'THREE.TGALoader.parse.getTgaRGBA: not support this format' );
						break;
				}

			}

			// Load image data according to specific method
			// var func = 'tgaGetImageData' + (use_grey ? 'Grey' : '') + (header.pixel_size) + 'bits';
			// func(data, y_start, y_step, y_end, x_start, x_step, x_end, width, image, palette );
			return data;

		}

		var result = tgaParse( use_rle, use_pal, header, offset, content );
		var rgbaData = getTgaRGBA( header.width, header.height, result.pixel_data, result.palettes );

		return {
			width: header.width,
			height: header.height,
			data: rgbaData
		};

	};


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Loader for UTF8 version2 (after r51) encoded models generated by:
	 *	http://code.google.com/p/webgl-loader/
	 *
	 * Code to load/decompress mesh is taken from r100 of this webgl-loader
	 */
	var THREE = __webpack_require__(1);

	THREE.UTF8Loader = function () {};

	/**
	 * Load UTF8 encoded model
	 * @param jsonUrl - URL from which to load json containing information about model
	 * @param callback - Callback(THREE.Object3D) on successful loading of model
	 * @param options - options on how to load model (see THREE.MTLLoader.MaterialCreator for basic options)
	 *                  Additional options include
	 *                   geometryBase: Base url from which to load referenced geometries
	 *                   materialBase: Base url from which to load referenced textures
	 */

	THREE.UTF8Loader.prototype.load = function ( jsonUrl, callback, options ) {

		this.downloadModelJson( jsonUrl, callback, options );

	};

	// BufferGeometryCreator

	THREE.UTF8Loader.BufferGeometryCreator = function () {
	};

	THREE.UTF8Loader.BufferGeometryCreator.prototype.create = function ( attribArray, indices ) {

		var ntris = indices.length / 3;

		var geometry = new THREE.BufferGeometry();

		var positions = new Float32Array( ntris * 3 * 3 );
		var normals = new Float32Array( ntris * 3 * 3 );
		var uvs = new Float32Array( ntris * 3 * 2 );

		var i, j, offset;
		var x, y, z;
		var u, v;

		var end = attribArray.length;
		var stride = 8;

		// extract positions

		j = 0;
		offset = 0;

		for ( i = offset; i < end; i += stride ) {

			x = attribArray[ i ];
			y = attribArray[ i + 1 ];
			z = attribArray[ i + 2 ];

			positions[ j ++ ] = x;
			positions[ j ++ ] = y;
			positions[ j ++ ] = z;

		}

		// extract uvs

		j = 0;
		offset = 3;

		for ( i = offset; i < end; i += stride ) {

			u = attribArray[ i ];
			v = attribArray[ i + 1 ];

			uvs[ j ++ ] = u;
			uvs[ j ++ ] = v;

		}

		// extract normals

		j = 0;
		offset = 5;

		for ( i = offset; i < end; i += stride ) {

			x = attribArray[ i ];
			y = attribArray[ i + 1 ];
			z = attribArray[ i + 2 ];

			normals[ j ++ ] = x;
			normals[ j ++ ] = y;
			normals[ j ++ ] = z;

		}

		geometry.setIndex( new THREE.BufferAttribute( indices, 1 ) );
		geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
		geometry.addAttribute( 'normal', new THREE.BufferAttribute( normals, 3 ) );
		geometry.addAttribute( 'uv', new THREE.BufferAttribute( uvs, 2 ) );

		geometry.computeBoundingSphere();

		return geometry;

	};


	// UTF-8 decoder from webgl-loader (r100)
	// http://code.google.com/p/webgl-loader/

	// Model manifest description. Contains objects like:
	// name: {
	//   materials: { 'material_name': { ... } ... },
	//   decodeParams: {
	//     decodeOffsets: [ ... ],
	//     decodeScales: [ ... ],
	//   },
	//   urls: {
	//     'url': [
	//       { material: 'material_name',
	//         attribRange: [#, #],
	//         indexRange: [#, #],
	//         names: [ 'object names' ... ],
	//         lengths: [#, #, # ... ]
	//       }
	//     ],
	//     ...
	//   }
	// }

	var DEFAULT_DECODE_PARAMS = {

	    decodeOffsets: [ -4095, -4095, -4095, 0, 0, -511, -511, -511 ],
	    decodeScales: [ 1 / 8191, 1 / 8191, 1 / 8191, 1 / 1023, 1 / 1023, 1 / 1023, 1 / 1023, 1 / 1023 ]

	    // TODO: normal decoding? (see walt.js)
	    // needs to know: input, output (from vertex format!)
	    //
	    // Should split attrib/index.
	    // 1) Decode position and non-normal attributes.
	    // 2) Decode indices, computing normals
	    // 3) Maybe normalize normals? Only necessary for refinement, or fixed?
	    // 4) Maybe refine normals? Should this be part of regular refinement?
	    // 5) Morphing

	};

	// Triangle strips!

	// TODO: will it be an optimization to specialize this method at
	// runtime for different combinations of stride, decodeOffset and
	// decodeScale?

	THREE.UTF8Loader.prototype.decompressAttribsInner_ = function ( str, inputStart, inputEnd,
	                                                                  output, outputStart, stride,
	                                                                  decodeOffset, decodeScale ) {

		var prev = 0;

		for ( var j = inputStart; j < inputEnd; j ++ ) {

			var code = str.charCodeAt( j );
			prev += ( code >> 1 ) ^ ( -( code & 1 ) );

			output[ outputStart ] = decodeScale * ( prev + decodeOffset );
			outputStart += stride;

		}

	};

	THREE.UTF8Loader.prototype.decompressIndices_ = function( str, inputStart, numIndices,
	                                                            output, outputStart ) {

		var highest = 0;

		for ( var i = 0; i < numIndices; i ++ ) {

			var code = str.charCodeAt( inputStart ++ );

			output[ outputStart ++ ] = highest - code;

			if ( code === 0 ) {

				highest ++;

			}

		}

	};

	THREE.UTF8Loader.prototype.decompressAABBs_ = function ( str, inputStart, numBBoxen,
	                                                           decodeOffsets, decodeScales ) {
		var numFloats = 6 * numBBoxen;

		var inputEnd = inputStart + numFloats;
		var outputStart = 0;

		var bboxen = new Float32Array( numFloats );

		for ( var i = inputStart; i < inputEnd; i += 6 ) {

			var minX = str.charCodeAt(i + 0) + decodeOffsets[0];
			var minY = str.charCodeAt(i + 1) + decodeOffsets[1];
			var minZ = str.charCodeAt(i + 2) + decodeOffsets[2];

			var radiusX = (str.charCodeAt(i + 3) + 1) >> 1;
			var radiusY = (str.charCodeAt(i + 4) + 1) >> 1;
			var radiusZ = (str.charCodeAt(i + 5) + 1) >> 1;

			bboxen[ outputStart ++ ] = decodeScales[0] * (minX + radiusX);
			bboxen[ outputStart ++ ] = decodeScales[1] * (minY + radiusY);
			bboxen[ outputStart ++ ] = decodeScales[2] * (minZ + radiusZ);

			bboxen[ outputStart ++ ] = decodeScales[0] * radiusX;
			bboxen[ outputStart ++ ] = decodeScales[1] * radiusY;
			bboxen[ outputStart ++ ] = decodeScales[2] * radiusZ;

		}

		return bboxen;

	};

	THREE.UTF8Loader.prototype.decompressMesh =  function ( str, meshParams, decodeParams, name, idx, callback ) {

	    // Extract conversion parameters from attribArrays.

		var stride = decodeParams.decodeScales.length;

		var decodeOffsets = decodeParams.decodeOffsets;
		var decodeScales = decodeParams.decodeScales;

		var attribStart = meshParams.attribRange[0];
		var numVerts = meshParams.attribRange[1];

	    // Decode attributes.

		var inputOffset = attribStart;
		var attribsOut = new Float32Array( stride * numVerts );

		for (var j = 0; j < stride; j ++ ) {

			var end = inputOffset + numVerts;

			var decodeScale = decodeScales[j];

			if ( decodeScale ) {

	            // Assume if decodeScale is never set, simply ignore the
	            // attribute.

				this.decompressAttribsInner_( str, inputOffset, end,
	                attribsOut, j, stride,
	                decodeOffsets[j], decodeScale );
			}

			inputOffset = end;

		}

		var indexStart = meshParams.indexRange[ 0 ];
		var numIndices = 3 * meshParams.indexRange[ 1 ];

		var indicesOut = new Uint16Array( numIndices );

		this.decompressIndices_( str, inputOffset, numIndices, indicesOut, 0 );

	    // Decode bboxen.

		var bboxen = undefined;
		var bboxOffset = meshParams.bboxes;

		if ( bboxOffset ) {

			bboxen = this.decompressAABBs_( str, bboxOffset, meshParams.names.length, decodeOffsets, decodeScales );
		}

		callback( name, idx, attribsOut, indicesOut, bboxen, meshParams );

	};

	THREE.UTF8Loader.prototype.copyAttrib = function ( stride, attribsOutFixed, lastAttrib, index ) {

		for ( var j = 0; j < stride; j ++ ) {

			lastAttrib[ j ] = attribsOutFixed[ stride * index + j ];

		}

	};

	THREE.UTF8Loader.prototype.decodeAttrib2 = function ( str, stride, decodeOffsets, decodeScales, deltaStart,
	                                                        numVerts, attribsOut, attribsOutFixed, lastAttrib,
	                                                        index ) {

		for ( var j = 0; j < 5; j ++ ) {

			var code = str.charCodeAt( deltaStart + numVerts * j + index );
			var delta = ( code >> 1) ^ (-(code & 1));

			lastAttrib[ j ] += delta;
			attribsOutFixed[ stride * index + j ] = lastAttrib[ j ];
			attribsOut[ stride * index + j ] = decodeScales[ j ] * ( lastAttrib[ j ] + decodeOffsets[ j ] );
		}

	};

	THREE.UTF8Loader.prototype.accumulateNormal = function ( i0, i1, i2, attribsOutFixed, crosses ) {

		var p0x = attribsOutFixed[ 8 * i0 ];
		var p0y = attribsOutFixed[ 8 * i0 + 1 ];
		var p0z = attribsOutFixed[ 8 * i0 + 2 ];

		var p1x = attribsOutFixed[ 8 * i1 ];
		var p1y = attribsOutFixed[ 8 * i1 + 1 ];
		var p1z = attribsOutFixed[ 8 * i1 + 2 ];

		var p2x = attribsOutFixed[ 8 * i2 ];
		var p2y = attribsOutFixed[ 8 * i2 + 1 ];
		var p2z = attribsOutFixed[ 8 * i2 + 2 ];

		p1x -= p0x;
		p1y -= p0y;
		p1z -= p0z;

		p2x -= p0x;
		p2y -= p0y;
		p2z -= p0z;

		p0x = p1y * p2z - p1z * p2y;
		p0y = p1z * p2x - p1x * p2z;
		p0z = p1x * p2y - p1y * p2x;

		crosses[ 3 * i0 ]     += p0x;
		crosses[ 3 * i0 + 1 ] += p0y;
		crosses[ 3 * i0 + 2 ] += p0z;

		crosses[ 3 * i1 ]     += p0x;
		crosses[ 3 * i1 + 1 ] += p0y;
		crosses[ 3 * i1 + 2 ] += p0z;

		crosses[ 3 * i2 ]     += p0x;
		crosses[ 3 * i2 + 1 ] += p0y;
		crosses[ 3 * i2 + 2 ] += p0z;

	};

	THREE.UTF8Loader.prototype.decompressMesh2 = function( str, meshParams, decodeParams, name, idx, callback ) {

		var MAX_BACKREF = 96;

	    // Extract conversion parameters from attribArrays.

		var stride = decodeParams.decodeScales.length;

		var decodeOffsets = decodeParams.decodeOffsets;
		var decodeScales = decodeParams.decodeScales;

		var deltaStart = meshParams.attribRange[ 0 ];
		var numVerts = meshParams.attribRange[ 1 ];

		var codeStart = meshParams.codeRange[ 0 ];
		var codeLength = meshParams.codeRange[ 1 ];

		var numIndices = 3 * meshParams.codeRange[ 2 ];

		var indicesOut = new Uint16Array( numIndices );

		var crosses = new Int32Array( 3 * numVerts );

		var lastAttrib = new Uint16Array( stride );

		var attribsOutFixed = new Uint16Array( stride * numVerts );
		var attribsOut = new Float32Array( stride * numVerts );

		var highest = 0;
		var outputStart = 0;

		for ( var i = 0; i < numIndices; i += 3 ) {

			var code = str.charCodeAt( codeStart ++ );

			var max_backref = Math.min( i, MAX_BACKREF );

			if ( code < max_backref ) {

	            // Parallelogram

				var winding = code % 3;
				var backref = i - ( code - winding );
				var i0, i1, i2;

				switch ( winding ) {

					case 0:

						i0 = indicesOut[ backref + 2 ];
						i1 = indicesOut[ backref + 1 ];
						i2 = indicesOut[ backref + 0 ];
						break;

					case 1:

						i0 = indicesOut[ backref + 0 ];
						i1 = indicesOut[ backref + 2 ];
						i2 = indicesOut[ backref + 1 ];
						break;

					case 2:

						i0 = indicesOut[ backref + 1 ];
						i1 = indicesOut[ backref + 0 ];
						i2 = indicesOut[ backref + 2 ];
						break;

				}

				indicesOut[ outputStart ++ ] = i0;
				indicesOut[ outputStart ++ ] = i1;

				code = str.charCodeAt( codeStart ++ );

				var index = highest - code;
				indicesOut[ outputStart ++ ] = index;

				if ( code === 0 ) {

					for (var j = 0; j < 5; j ++ ) {

						var deltaCode = str.charCodeAt( deltaStart + numVerts * j + highest );

						var prediction = ((deltaCode >> 1) ^ (-(deltaCode & 1))) +
	                        attribsOutFixed[stride * i0 + j] +
	                        attribsOutFixed[stride * i1 + j] -
	                        attribsOutFixed[stride * i2 + j];

						lastAttrib[j] = prediction;

						attribsOutFixed[ stride * highest + j ] = prediction;
						attribsOut[ stride * highest + j ] = decodeScales[ j ] * ( prediction + decodeOffsets[ j ] );

					}

					highest ++;

				} else {

					this.copyAttrib( stride, attribsOutFixed, lastAttrib, index );

				}

				this.accumulateNormal( i0, i1, index, attribsOutFixed, crosses );

			} else {

	            // Simple

				var index0 = highest - ( code - max_backref );

				indicesOut[ outputStart ++ ] = index0;

				if ( code === max_backref ) {

					this.decodeAttrib2( str, stride, decodeOffsets, decodeScales, deltaStart,
	                    numVerts, attribsOut, attribsOutFixed, lastAttrib,
	                    highest ++ );

				} else {

					this.copyAttrib(stride, attribsOutFixed, lastAttrib, index0);

				}

				code = str.charCodeAt( codeStart ++ );

				var index1 = highest - code;
				indicesOut[ outputStart ++ ] = index1;

				if ( code === 0 ) {

					this.decodeAttrib2( str, stride, decodeOffsets, decodeScales, deltaStart,
	                    numVerts, attribsOut, attribsOutFixed, lastAttrib,
	                    highest ++ );

				} else {

					this.copyAttrib( stride, attribsOutFixed, lastAttrib, index1 );

				}

				code = str.charCodeAt( codeStart ++ );

				var index2 = highest - code;
				indicesOut[ outputStart ++ ] = index2;

				if ( code === 0 ) {

					for ( var j = 0; j < 5; j ++ ) {

						lastAttrib[ j ] = ( attribsOutFixed[ stride * index0 + j ] + attribsOutFixed[ stride * index1 + j ] ) / 2;

					}

					this.decodeAttrib2( str, stride, decodeOffsets, decodeScales, deltaStart,
	                    numVerts, attribsOut, attribsOutFixed, lastAttrib,
	                    highest ++ );

				} else {

					this.copyAttrib( stride, attribsOutFixed, lastAttrib, index2 );

				}

				this.accumulateNormal( index0, index1, index2, attribsOutFixed, crosses );

			}

		}

		for ( var i = 0; i < numVerts; i ++ ) {

			var nx = crosses[ 3 * i ];
			var ny = crosses[ 3 * i + 1 ];
			var nz = crosses[ 3 * i + 2 ];

			var norm = 511.0 / Math.sqrt( nx * nx + ny * ny + nz * nz );

			var cx = str.charCodeAt( deltaStart + 5 * numVerts + i );
			var cy = str.charCodeAt( deltaStart + 6 * numVerts + i );
			var cz = str.charCodeAt( deltaStart + 7 * numVerts + i );

			attribsOut[ stride * i + 5 ] = norm * nx + ((cx >> 1) ^ (-(cx & 1)));
			attribsOut[ stride * i + 6 ] = norm * ny + ((cy >> 1) ^ (-(cy & 1)));
			attribsOut[ stride * i + 7 ] = norm * nz + ((cz >> 1) ^ (-(cz & 1)));
		}

		callback( name, idx, attribsOut, indicesOut, undefined, meshParams );

	};

	THREE.UTF8Loader.prototype.downloadMesh = function ( path, name, meshEntry, decodeParams, callback ) {

		var loader = this;
		var idx = 0;

		function onprogress( data ) {

			while ( idx < meshEntry.length ) {

				var meshParams = meshEntry[ idx ];
				var indexRange = meshParams.indexRange;

				if ( indexRange ) {

					var meshEnd = indexRange[ 0 ] + 3 * indexRange[ 1 ];

					if ( data.length < meshEnd ) break;

					loader.decompressMesh( data, meshParams, decodeParams, name, idx, callback );

				} else {

					var codeRange = meshParams.codeRange;
					var meshEnd = codeRange[ 0 ] + codeRange[ 1 ];

					if ( data.length < meshEnd ) break;

					loader.decompressMesh2( data, meshParams, decodeParams, name, idx, callback );
				}

				++ idx;

			}

		}

		getHttpRequest( path, function( data ) {

			onprogress( data );

	        // TODO: handle errors.

		});

	};

	THREE.UTF8Loader.prototype.downloadMeshes = function ( path, meshUrlMap, decodeParams, callback ) {

		for ( var url in meshUrlMap ) {

			var meshEntry = meshUrlMap[url];
			this.downloadMesh( path + url, url, meshEntry, decodeParams, callback );

		}

	};

	THREE.UTF8Loader.prototype.createMeshCallback = function( materialBaseUrl, loadModelInfo, allDoneCallback ) {

		var nCompletedUrls = 0;
		var nExpectedUrls = 0;

		var expectedMeshesPerUrl = {};
		var decodedMeshesPerUrl = {};

		var modelParts = {};

		var meshUrlMap = loadModelInfo.urls;

		for ( var url in meshUrlMap ) {

			expectedMeshesPerUrl[ url ] = meshUrlMap[ url ].length;
			decodedMeshesPerUrl[ url ] = 0;

			nExpectedUrls ++;

			modelParts[ url ] = new THREE.Object3D();

		}

		var model = new THREE.Object3D();

	    // Prepare materials first...

		var materialCreator = new THREE.MTLLoader.MaterialCreator( materialBaseUrl, loadModelInfo.options );
		materialCreator.setMaterials( loadModelInfo.materials );

		materialCreator.preload();

		// Create callback for creating mesh parts

		var bufferGeometryCreator = new THREE.UTF8Loader.BufferGeometryCreator();

		var meshCallback = function( name, idx, attribArray, indexArray, bboxen, meshParams ) {

	        // Got ourselves a new mesh

	        // name identifies this part of the model (url)
	        // idx is the mesh index of this mesh of the part
	        // attribArray defines the vertices
	        // indexArray defines the faces
	        // bboxen defines the bounding box
	        // meshParams contains the material info

			var geometry = bufferGeometryCreator.create( attribArray, indexArray );
			var material = materialCreator.create( meshParams.material );

			var mesh = new THREE.Mesh( geometry, material );
			modelParts[ name ].add( mesh );

	        //model.add(new THREE.Mesh(geometry, material));

			decodedMeshesPerUrl[ name ] ++;

			if ( decodedMeshesPerUrl[ name ] === expectedMeshesPerUrl[ name ] ) {

				nCompletedUrls ++;

				model.add( modelParts[ name ] );

				if ( nCompletedUrls === nExpectedUrls ) {

	                // ALL DONE!!!

					allDoneCallback( model );

				}

			}

		};

		return meshCallback;

	};

	THREE.UTF8Loader.prototype.downloadModel = function ( geometryBase, materialBase, model, callback ) {

		var meshCallback = this.createMeshCallback( materialBase, model, callback );
		this.downloadMeshes( geometryBase, model.urls, model.decodeParams, meshCallback );

	};

	THREE.UTF8Loader.prototype.downloadModelJson = function ( jsonUrl, callback, options ) {

		getJsonRequest( jsonUrl, function( loaded ) {

			if ( ! loaded.decodeParams ) {

				if ( options && options.decodeParams ) {

					loaded.decodeParams = options.decodeParams;

				} else {

					loaded.decodeParams = DEFAULT_DECODE_PARAMS;

				}

			}

			loaded.options = options;

			var geometryBase = jsonUrl.substr( 0, jsonUrl.lastIndexOf( "/" ) + 1 );
			var materialBase = geometryBase;

			if ( options && options.geometryBase ) {

				geometryBase = options.geometryBase;

				if ( geometryBase.charAt( geometryBase.length - 1 ) !== "/" ) {

					geometryBase = geometryBase + "/";

				}

			}

			if ( options && options.materialBase ) {

				materialBase = options.materialBase;

				if ( materialBase.charAt( materialBase.length - 1 ) !== "/" ) {

					materialBase = materialBase  + "/";

				}

			}

			this.downloadModel( geometryBase, materialBase, loaded, callback );

		}.bind( this ) );

	};

	// XMLHttpRequest stuff

	function getHttpRequest( url, onload, opt_onprogress ) {

		var req = new THREE.XHRLoader();
		req.load( url, onload, opt_onprogress );

	}

	function getJsonRequest( url, onjson ) {

		getHttpRequest( url,
	        function( e ) { onjson( JSON.parse( e ) ); },
	        function() {} );

	}

	function addListeners( dom, listeners ) {

	    // TODO: handle event capture, object binding.

		for ( var key in listeners ) {

			dom.addEventListener( key, listeners[ key ] );

		}
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author mrdoob / http://mrdoob.com/
	 */
	var THREE = __webpack_require__(1);

	THREE.VRMLLoader = function ( manager ) {

		this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

	};

	THREE.VRMLLoader.prototype = {

		constructor: THREE.VRMLLoader,

		// for IndexedFaceSet support
		isRecordingPoints: false,
		isRecordingFaces: false,
		points: [],
		indexes : [],

		// for Background support
		isRecordingAngles: false,
		isRecordingColors: false,
		angles: [],
		colors: [],

		recordingFieldname: null,

		load: function ( url, onLoad, onProgress, onError ) {

			var scope = this;

			var loader = new THREE.XHRLoader( this.manager );
			loader.setCrossOrigin( this.crossOrigin );
			loader.load( url, function ( text ) {

				onLoad( scope.parse( text ) );

			}, onProgress, onError );

		},

		setCrossOrigin: function ( value ) {

			this.crossOrigin = value;

		},

		parse: function ( data ) {

			var parseV1 = function ( lines, scene ) {

				console.warn( 'VRML V1.0 not supported yet' );

			};

			var parseV2 = function ( lines, scene ) {

				var defines = {};
				var float_pattern = /(\b|\-|\+)([\d\.e]+)/;
				var float3_pattern = /([\d\.\+\-e]+)\s+([\d\.\+\-e]+)\s+([\d\.\+\-e]+)/g;

				/**
				* Interpolates colors a and b following their relative distance
				* expressed by t.
				*
				* @param float a
				* @param float b
				* @param float t
				* @returns {Color}
				*/
				var interpolateColors = function( a, b, t ) {

					var deltaR = a.r - b.r;
					var deltaG = a.g - b.g;
					var deltaB = a.b - b.b;

					var c = new THREE.Color();

					c.r = a.r - t * deltaR;
					c.g = a.g - t * deltaG;
					c.b = a.b - t * deltaB;

					return c;

				};

				/**
				 * Vertically paints the faces interpolating between the
				 * specified colors at the specified angels. This is used for the Background
				 * node, but could be applied to other nodes with multiple faces as well.
				 *
				 * When used with the Background node, default is directionIsDown is true if
				 * interpolating the skyColor down from the Zenith. When interpolationg up from
				 * the Nadir i.e. interpolating the groundColor, the directionIsDown is false.
				 *
				 * The first angle is never specified, it is the Zenith (0 rad). Angles are specified
				 * in radians. The geometry is thought a sphere, but could be anything. The color interpolation
				 * is linear along the Y axis in any case.
				 *
				 * You must specify one more color than you have angles at the beginning of the colors array.
				 * This is the color of the Zenith (the top of the shape).
				 *
				 * @param geometry
				 * @param radius
				 * @param angles
				 * @param colors
				 * @param boolean directionIsDown Whether to work bottom up or top down.
				 */
				var paintFaces = function ( geometry, radius, angles, colors, directionIsDown ) {

					var f, n, p, vertexIndex, color;

					var direction = directionIsDown ? 1 : - 1;

					var faceIndices = [ 'a', 'b', 'c', 'd' ];

					var coord = [ ], aColor, bColor, t = 1, A = {}, B = {}, applyColor = false, colorIndex;

					for ( var k = 0; k < angles.length; k ++ ) {

						var vec = { };

						// push the vector at which the color changes
						vec.y = direction * ( Math.cos( angles[ k ] ) * radius );

						vec.x = direction * ( Math.sin( angles[ k ] ) * radius );

						coord.push( vec );

					}

					// painting the colors on the faces
					for ( var i = 0; i < geometry.faces.length ; i ++ ) {

						f  = geometry.faces[ i ];

						n = ( f instanceof THREE.Face3 ) ? 3 : 4;

						for ( var j = 0; j < n; j ++ ) {

							vertexIndex = f[ faceIndices[ j ] ];

							p = geometry.vertices[ vertexIndex ];

							for ( var index = 0; index < colors.length; index ++ ) {

								// linear interpolation between aColor and bColor, calculate proportion
								// A is previous point (angle)
								if ( index === 0 ) {

									A.x = 0;
									A.y = directionIsDown ? radius : - 1 * radius;

								} else {

									A.x = coord[ index - 1 ].x;
									A.y = coord[ index - 1 ].y;

								}

								// B is current point (angle)
								B = coord[ index ];

								if ( undefined !== B ) {

									// p has to be between the points A and B which we interpolate
									applyColor = directionIsDown ? p.y <= A.y && p.y > B.y : p.y >= A.y && p.y < B.y;

									if ( applyColor ) {

										bColor = colors[ index + 1 ];

										aColor = colors[ index ];

										// below is simple linear interpolation
										t = Math.abs( p.y - A.y ) / ( A.y - B.y );

										// to make it faster, you can only calculate this if the y coord changes, the color is the same for points with the same y
										color = interpolateColors( aColor, bColor, t );

										f.vertexColors[ j ] = color;

									}

								} else if ( undefined === f.vertexColors[ j ] ) {

									colorIndex = directionIsDown ? colors.length - 1 : 0;
									f.vertexColors[ j ] = colors[ colorIndex ];

								}

							}

						}

					}

				};

				var parseProperty = function ( node, line ) {

					var parts = [], part, property = {}, fieldName;

					/**
					 * Expression for matching relevant information, such as a name or value, but not the separators
					 * @type {RegExp}
					 */
					var regex = /[^\s,\[\]]+/g;

					var point, index, angles, colors;

					while ( null != ( part = regex.exec( line ) ) ) {

						parts.push( part[ 0 ] );

					}

					fieldName = parts[ 0 ];


					// trigger several recorders
					switch ( fieldName ) {
						case 'skyAngle':
						case 'groundAngle':
							this.recordingFieldname = fieldName;
							this.isRecordingAngles = true;
							this.angles = [];
							break;
						case 'skyColor':
						case 'groundColor':
							this.recordingFieldname = fieldName;
							this.isRecordingColors = true;
							this.colors = [];
							break;
						case 'point':
							this.recordingFieldname = fieldName;
							this.isRecordingPoints = true;
							this.points = [];
							break;
						case 'coordIndex':
							this.recordingFieldname = fieldName;
							this.isRecordingFaces = true;
							this.indexes = [];
							break;
					}

					if ( this.isRecordingFaces ) {

						// the parts hold the indexes as strings
						if ( parts.length > 0 ) {

							index = [];

							for ( var ind = 0; ind < parts.length; ind ++ ) {

								// the part should either be positive integer or -1
								if ( ! /(-?\d+)/.test( parts[ ind ] ) ) {

									continue;

								}

								// end of current face
								if ( parts[ ind ] === "-1" ) {

									if ( index.length > 0 ) {

										this.indexes.push( index );

									}

									// start new one
									index = [];

								} else {

									index.push( parseInt( parts[ ind ] ) );

								}

							}

						}

						// end
						if ( /]/.exec( line ) ) {

							this.isRecordingFaces = false;
							node.coordIndex = this.indexes;

						}

					} else if ( this.isRecordingPoints ) {

						while ( null !== ( parts = float3_pattern.exec( line ) ) ) {

							point = {
								x: parseFloat( parts[ 1 ] ),
								y: parseFloat( parts[ 2 ] ),
								z: parseFloat( parts[ 3 ] )
							};

							this.points.push( point );

						}

						// end
						if ( /]/.exec( line ) ) {

							this.isRecordingPoints = false;
							node.points = this.points;

						}

					} else if ( this.isRecordingAngles ) {

						// the parts hold the angles as strings
						if ( parts.length > 0 ) {

							for ( var ind = 0; ind < parts.length; ind ++ ) {

								// the part should be a float
								if ( ! float_pattern.test( parts[ ind ] ) ) {

									continue;

								}

								this.angles.push( parseFloat( parts[ ind ] ) );

							}

						}

						// end
						if ( /]/.exec( line ) ) {

							this.isRecordingAngles = false;
							node[ this.recordingFieldname ] = this.angles;

						}

					} else if ( this.isRecordingColors ) {

						while ( null !== ( parts = float3_pattern.exec( line ) ) ) {

							color = {
								r: parseFloat( parts[ 1 ] ),
								g: parseFloat( parts[ 2 ] ),
								b: parseFloat( parts[ 3 ] )
							};

							this.colors.push( color );

						}

						// end
						if ( /]/.exec( line ) ) {

							this.isRecordingColors = false;
							node[ this.recordingFieldname ] = this.colors;

						}

					} else if ( parts[ parts.length - 1 ] !== 'NULL' && fieldName !== 'children' ) {

						switch ( fieldName ) {

							case 'diffuseColor':
							case 'emissiveColor':
							case 'specularColor':
							case 'color':

								if ( parts.length != 4 ) {

									console.warn( 'Invalid color format detected for ' + fieldName );
									break;

								}

								property = {
									r: parseFloat( parts[ 1 ] ),
									g: parseFloat( parts[ 2 ] ),
									b: parseFloat( parts[ 3 ] )
								};

								break;

							case 'translation':
							case 'scale':
							case 'size':
								if ( parts.length != 4 ) {

									console.warn( 'Invalid vector format detected for ' + fieldName );
									break;

								}

								property = {
									x: parseFloat( parts[ 1 ] ),
									y: parseFloat( parts[ 2 ] ),
									z: parseFloat( parts[ 3 ] )
								};

								break;

							case 'radius':
							case 'topRadius':
							case 'bottomRadius':
							case 'height':
							case 'transparency':
							case 'shininess':
							case 'ambientIntensity':
								if ( parts.length != 2 ) {

									console.warn( 'Invalid single float value specification detected for ' + fieldName );
									break;

								}

								property = parseFloat( parts[ 1 ] );

								break;

							case 'rotation':
								if ( parts.length != 5 ) {

									console.warn( 'Invalid quaternion format detected for ' + fieldName );
									break;

								}

								property = {
									x: parseFloat( parts[ 1 ] ),
									y: parseFloat( parts[ 2 ] ),
									z: parseFloat( parts[ 3 ] ),
									w: parseFloat( parts[ 4 ] )
								};

								break;

							case 'ccw':
							case 'solid':
							case 'colorPerVertex':
							case 'convex':
								if ( parts.length != 2 ) {

									console.warn( 'Invalid format detected for ' + fieldName );
									break;

								}

								property = parts[ 1 ] === 'TRUE' ? true : false;

								break;
						}

						node[ fieldName ] = property;

					}

					return property;

				};

				var getTree = function ( lines ) {

					var tree = { 'string': 'Scene', children: [] };
					var current = tree;
					var matches;
					var specification;

					for ( var i = 0; i < lines.length; i ++ ) {

						var comment = '';

						var line = lines[ i ];

						// omit whitespace only lines
						if ( null !== ( result = /^\s+?$/g.exec( line ) ) ) {

							continue;

						}

						line = line.trim();

						// skip empty lines
						if ( line === '' ) {

							continue;

						}

						if ( /#/.exec( line ) ) {

							var parts = line.split( '#' );

							// discard everything after the #, it is a comment
							line = parts[ 0 ];

							// well, let's also keep the comment
							comment = parts[ 1 ];

						}

						if ( matches = /([^\s]*){1}\s?{/.exec( line ) ) {

							// first subpattern should match the Node name

							var block = { 'nodeType' : matches[ 1 ], 'string': line, 'parent': current, 'children': [], 'comment' : comment };
							current.children.push( block );
							current = block;

							if ( /}/.exec( line ) ) {

								// example: geometry Box { size 1 1 1 } # all on the same line
								specification = /{(.*)}/.exec( line )[ 1 ];

								// todo: remove once new parsing is complete?
								block.children.push( specification );

								parseProperty( current, specification );

								current = current.parent;

							}

						} else if ( /}/.exec( line ) ) {

							current = current.parent;

						} else if ( line !== '' ) {

							parseProperty( current, line );
							// todo: remove once new parsing is complete? we still do not parse geometry and appearance the new way
							current.children.push( line );

						}

					}

					return tree;

				};

				var parseNode = function ( data, parent ) {

					// console.log( data );

					if ( typeof data === 'string' ) {

						if ( /USE/.exec( data ) ) {

							var defineKey = /USE\s+?(\w+)/.exec( data )[ 1 ];

							if ( undefined == defines[ defineKey ] ) {

								console.warn( defineKey + ' is not defined.' );

							} else {

								if ( /appearance/.exec( data ) && defineKey ) {

									parent.material = defines[ defineKey ].clone();

								} else if ( /geometry/.exec( data ) && defineKey ) {

									parent.geometry = defines[ defineKey ].clone();

									// the solid property is not cloned with clone(), is only needed for VRML loading, so we need to transfer it
									if ( undefined !== defines[ defineKey ].solid && defines[ defineKey ].solid === false ) {

										parent.geometry.solid = false;
										parent.material.side = THREE.DoubleSide;

									}

								} else if ( defineKey ) {

									var object = defines[ defineKey ].clone();
									parent.add( object );

								}

							}

						}

						return;

					}

					var object = parent;

					if ( 'Transform' === data.nodeType || 'Group' === data.nodeType ) {

						object = new THREE.Object3D();

						if ( /DEF/.exec( data.string ) ) {

							object.name = /DEF\s+(\w+)/.exec( data.string )[ 1 ];
							defines[ object.name ] = object;

						}

						if ( undefined !== data[ 'translation' ] ) {

							var t = data.translation;

							object.position.set( t.x, t.y, t.z );

						}

						if ( undefined !== data.rotation ) {

							var r = data.rotation;

							object.quaternion.setFromAxisAngle( new THREE.Vector3( r.x, r.y, r.z ), r.w );

						}

						if ( undefined !== data.scale ) {

							var s = data.scale;

							object.scale.set( s.x, s.y, s.z );

						}

						parent.add( object );

					} else if ( 'Shape' === data.nodeType ) {

						object = new THREE.Mesh();

						if ( /DEF/.exec( data.string ) ) {

							object.name = /DEF (\w+)/.exec( data.string )[ 1 ];

							defines[ object.name ] = object;

						}

						parent.add( object );

					} else if ( 'Background' === data.nodeType ) {

						var segments = 20;

						// sky (full sphere):

						var radius = 2e4;

						var skyGeometry = new THREE.SphereGeometry( radius, segments, segments );
						var skyMaterial = new THREE.MeshBasicMaterial( { fog: false, side: THREE.BackSide } );

						if ( data.skyColor.length > 1 ) {

							paintFaces( skyGeometry, radius, data.skyAngle, data.skyColor, true );

							skyMaterial.vertexColors = THREE.VertexColors

						} else {

							var color = data.skyColor[ 0 ];
							skyMaterial.color.setRGB( color.r, color.b, color.g );

						}

						scene.add( new THREE.Mesh( skyGeometry, skyMaterial ) );

						// ground (half sphere):

						if ( data.groundColor !== undefined ) {

							radius = 1.2e4;

							var groundGeometry = new THREE.SphereGeometry( radius, segments, segments, 0, 2 * Math.PI, 0.5 * Math.PI, 1.5 * Math.PI );
							var groundMaterial = new THREE.MeshBasicMaterial( { fog: false, side: THREE.BackSide, vertexColors: THREE.VertexColors } );

							paintFaces( groundGeometry, radius, data.groundAngle, data.groundColor, false );

							scene.add( new THREE.Mesh( groundGeometry, groundMaterial ) );

						}

					} else if ( /geometry/.exec( data.string ) ) {

						if ( 'Box' === data.nodeType ) {

							var s = data.size;

							parent.geometry = new THREE.BoxGeometry( s.x, s.y, s.z );

						} else if ( 'Cylinder' === data.nodeType ) {

							parent.geometry = new THREE.CylinderGeometry( data.radius, data.radius, data.height );

						} else if ( 'Cone' === data.nodeType ) {

							parent.geometry = new THREE.CylinderGeometry( data.topRadius, data.bottomRadius, data.height );

						} else if ( 'Sphere' === data.nodeType ) {

							parent.geometry = new THREE.SphereGeometry( data.radius );

						} else if ( 'IndexedFaceSet' === data.nodeType ) {

							var geometry = new THREE.Geometry();

							var indexes;

							for ( var i = 0, j = data.children.length; i < j; i ++ ) {

								var child = data.children[ i ];

								var vec;

								if ( 'Coordinate' === child.nodeType ) {

									for ( var k = 0, l = child.points.length; k < l; k ++ ) {

										var point = child.points[ k ];

										vec = new THREE.Vector3( point.x, point.y, point.z );

										geometry.vertices.push( vec );

									}

									break;

								}

							}

							var skip = 0;

							// read this: http://math.hws.edu/eck/cs424/notes2013/16_Threejs_Advanced.html
							for ( var i = 0, j = data.coordIndex.length; i < j; i ++ ) {

								indexes = data.coordIndex[ i ];

								// vrml support multipoint indexed face sets (more then 3 vertices). You must calculate the composing triangles here
								skip = 0;

								// todo: this is the time to check if the faces are ordered ccw or not (cw)

								// Face3 only works with triangles, but IndexedFaceSet allows shapes with more then three vertices, build them of triangles
								while ( indexes.length >= 3 && skip < ( indexes.length - 2 ) ) {

									var face = new THREE.Face3(
										indexes[ 0 ],
										indexes[ skip + 1 ],
										indexes[ skip + 2 ],
										null // normal, will be added later
										// todo: pass in the color, if a color index is present
									);

									skip ++;

									geometry.faces.push( face );

								}


							}

							if ( false === data.solid ) {

								parent.material.side = THREE.DoubleSide;

							}

							// we need to store it on the geometry for use with defines
							geometry.solid = data.solid;

							geometry.computeFaceNormals();
							//geometry.computeVertexNormals(); // does not show
							geometry.computeBoundingSphere();

							// see if it's a define
							if ( /DEF/.exec( data.string ) ) {

								geometry.name = /DEF (\w+)/.exec( data.string )[ 1 ];
								defines[ geometry.name ] = geometry;

							}

							parent.geometry = geometry;

						}

						return;

					} else if ( /appearance/.exec( data.string ) ) {

						for ( var i = 0; i < data.children.length; i ++ ) {

							var child = data.children[ i ];

							if ( 'Material' === child.nodeType ) {

								var material = new THREE.MeshPhongMaterial();

								if ( undefined !== child.diffuseColor ) {

									var d = child.diffuseColor;

									material.color.setRGB( d.r, d.g, d.b );

								}

								if ( undefined !== child.emissiveColor ) {

									var e = child.emissiveColor;

									material.emissive.setRGB( e.r, e.g, e.b );

								}

								if ( undefined !== child.specularColor ) {

									var s = child.specularColor;

									material.specular.setRGB( s.r, s.g, s.b );

								}

								if ( undefined !== child.transparency ) {

									var t = child.transparency;

									// transparency is opposite of opacity
									material.opacity = Math.abs( 1 - t );

									material.transparent = true;

								}

								if ( /DEF/.exec( data.string ) ) {

									material.name = /DEF (\w+)/.exec( data.string )[ 1 ];

									defines[ material.name ] = material;

								}

								parent.material = material;

								// material found, stop looping
								break;

							}

						}

						return;

					}

					for ( var i = 0, l = data.children.length; i < l; i ++ ) {

						var child = data.children[ i ];

						parseNode( data.children[ i ], object );

					}

				};

				parseNode( getTree( lines ), scene );

			};

			var scene = new THREE.Scene();

			var lines = data.split( '\n' );

			var header = lines.shift();

			if ( /V1.0/.exec( header ) ) {

				parseV1( lines, scene );

			} else if ( /V2.0/.exec( header ) ) {

				parseV2( lines, scene );

			}

			return scene;

		}

	};


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author mrdoob / http://mrdoob.com/
	 */
	var THREE = __webpack_require__(1);

	THREE.VTKLoader = function ( manager ) {

		this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

	};

	THREE.VTKLoader.prototype = {

		constructor: THREE.VTKLoader,

		load: function ( url, onLoad, onProgress, onError ) {

			var scope = this;

			var loader = new THREE.XHRLoader( scope.manager );
			loader.setCrossOrigin( this.crossOrigin );
			loader.load( url, function ( text ) {

				onLoad( scope.parse( text ) );

			}, onProgress, onError );

		},

		setCrossOrigin: function ( value ) {

			this.crossOrigin = value;

		},

		parse: function ( data ) {

			var indices = [];
			var positions = [];

			var result;

			// float float float

			var pat3Floats = /([\-]?[\d]+[\.]?[\d|\-|e]*)[ ]+([\-]?[\d]+[\.]?[\d|\-|e]*)[ ]+([\-]?[\d]+[\.]?[\d|\-|e]*)/g;
			var patTriangle = /^3[ ]+([\d]+)[ ]+([\d]+)[ ]+([\d]+)/;
			var patQuad = /^4[ ]+([\d]+)[ ]+([\d]+)[ ]+([\d]+)[ ]+([\d]+)/;
			var patPOINTS = /^POINTS /;
			var patPOLYGONS = /^POLYGONS /;
			var inPointsSection = false;
			var inPolygonsSection = false;

			var lines = data.split('\n');
			for ( var i = 0; i < lines.length; ++i ) {

				line = lines[i];

				if ( inPointsSection ) {

					// get the vertices

					while ( ( result = pat3Floats.exec( line ) ) !== null ) {
						positions.push( parseFloat( result[ 1 ] ), parseFloat( result[ 2 ] ), parseFloat( result[ 3 ] ) );
					}
				}
				else if ( inPolygonsSection ) {

					result = patTriangle.exec(line);

					if ( result !== null ) {

						// 3 int int int
						// triangle

						indices.push( parseInt( result[ 1 ] ), parseInt( result[ 2 ] ), parseInt( result[ 3 ] ) );
					}
					else {

						result = patQuad.exec(line);

						if ( result !== null ) {

							// 4 int int int int
							// break quad into two triangles

							indices.push( parseInt( result[ 1 ] ), parseInt( result[ 2 ] ), parseInt( result[ 4 ] ) );
							indices.push( parseInt( result[ 2 ] ), parseInt( result[ 3 ] ), parseInt( result[ 4 ] ) );
						}

					}

				}

				if ( patPOLYGONS.exec(line) !== null ) {
					inPointsSection = false;
					inPolygonsSection = true;
				}
				if ( patPOINTS.exec(line) !== null ) {
					inPolygonsSection = false;
					inPointsSection = true;
				}
			}

			var geometry = new THREE.BufferGeometry();
			geometry.setIndex( new THREE.BufferAttribute( new ( indices.length > 65535 ? Uint32Array : Uint16Array )( indices ), 1 ) );
			geometry.addAttribute( 'position', new THREE.BufferAttribute( new Float32Array( positions ), 3 ) );

			return geometry;

		}

	};

	THREE.EventDispatcher.prototype.apply( THREE.VTKLoader.prototype );


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

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
	var THREE = __webpack_require__(1),
	    fs = __webpack_require__(27);

	var XHRLoader = function ( manager ) {

	    this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;
	    this.responseType == "default";

	};

	XHRLoader.prototype = {

	    constructor: XHRLoader,

	    load: function ( url, onLoad, onProgress, onError ) {

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



/***/ },
/* 27 */
/***/ function(module, exports) {

	

/***/ }
/******/ ]);