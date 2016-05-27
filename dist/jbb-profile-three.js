/* THREE.js profile for JBB - https://github.com/wavesoft/jbb-profile-three */
var JBBProfileThree =
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

	/**
	 * THREE Bundles - Decoder
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

	/* Generated source follows */

	var THREE = __webpack_require__(1);
	var MD2Character = __webpack_require__(2);

	/**
	 * Factory & Initializer of THREE.CubeTexture
	 */
	var factory_THREE_CubeTexture = {
		props: 15,
		create: function() {
			return new THREE.CubeTexture();
		},
		init: function(inst, props, pagesize, offset) {
			inst.name = props[offset+pagesize*0];
			inst.mipmaps = props[offset+pagesize*1];
			inst.flipY = props[offset+pagesize*2];
			inst.mapping = props[offset+pagesize*3];
			inst.wrapS = props[offset+pagesize*4];
			inst.wrapT = props[offset+pagesize*5];
			inst.magFilter = props[offset+pagesize*6];
			inst.minFilter = props[offset+pagesize*7];
			inst.anisotropy = props[offset+pagesize*8];
			inst.format = props[offset+pagesize*9];
			inst.type = props[offset+pagesize*10];
			inst.offset = props[offset+pagesize*11];
			inst.repeat = props[offset+pagesize*12];
			inst.unpackAlignment = props[offset+pagesize*13];
			inst.image = props[offset+pagesize*14];

			// Custom init function
			if (inst.image) {
			    inst.image.onload = function() {
			        inst.needsUpdate = true;
			    }
			}
			
				}
	}

	/**
	 * Factory & Initializer of THREE.CompressedTexture
	 */
	var factory_THREE_CompressedTexture = {
		props: 15,
		create: function() {
			return new THREE.CompressedTexture();
		},
		init: function(inst, props, pagesize, offset) {
			inst.name = props[offset+pagesize*0];
			inst.mipmaps = props[offset+pagesize*1];
			inst.flipY = props[offset+pagesize*2];
			inst.mapping = props[offset+pagesize*3];
			inst.wrapS = props[offset+pagesize*4];
			inst.wrapT = props[offset+pagesize*5];
			inst.magFilter = props[offset+pagesize*6];
			inst.minFilter = props[offset+pagesize*7];
			inst.anisotropy = props[offset+pagesize*8];
			inst.format = props[offset+pagesize*9];
			inst.type = props[offset+pagesize*10];
			inst.offset = props[offset+pagesize*11];
			inst.repeat = props[offset+pagesize*12];
			inst.unpackAlignment = props[offset+pagesize*13];
			inst.image = props[offset+pagesize*14];

			// Custom init function
			if (inst.image) {
			    inst.image.onload = function() {
			        inst.needsUpdate = true;
			    }
			}
			
				}
	}

	/**
	 * Factory & Initializer of THREE.Texture
	 */
	var factory_THREE_Texture = {
		props: 15,
		create: function() {
			return new THREE.Texture();
		},
		init: function(inst, props, pagesize, offset) {
			inst.name = props[offset+pagesize*0];
			inst.mipmaps = props[offset+pagesize*1];
			inst.flipY = props[offset+pagesize*2];
			inst.mapping = props[offset+pagesize*3];
			inst.wrapS = props[offset+pagesize*4];
			inst.wrapT = props[offset+pagesize*5];
			inst.magFilter = props[offset+pagesize*6];
			inst.minFilter = props[offset+pagesize*7];
			inst.anisotropy = props[offset+pagesize*8];
			inst.format = props[offset+pagesize*9];
			inst.type = props[offset+pagesize*10];
			inst.offset = props[offset+pagesize*11];
			inst.repeat = props[offset+pagesize*12];
			inst.unpackAlignment = props[offset+pagesize*13];
			inst.image = props[offset+pagesize*14];

			// Custom init function
			if (inst.image) {
			    inst.image.onload = function() {
			        inst.needsUpdate = true;
			    }
			}
			
				}
	}

	/**
	 * Factory & Initializer of THREE.LineBasicMaterial
	 */
	var factory_THREE_LineBasicMaterial = {
		props: 28,
		create: function() {
			return new THREE.LineBasicMaterial();
		},
		init: function(inst, props, pagesize, offset) {
			inst.name = props[offset+pagesize*0];
			inst.side = props[offset+pagesize*1];
			inst.opacity = props[offset+pagesize*2];
			inst.blending = props[offset+pagesize*3];
			inst.blendSrc = props[offset+pagesize*4];
			inst.blendDst = props[offset+pagesize*5];
			inst.blendEquation = props[offset+pagesize*6];
			inst.depthFunc = props[offset+pagesize*7];
			inst.polygonOffsetFactor = props[offset+pagesize*8];
			inst.polygonOffsetUnits = props[offset+pagesize*9];
			inst.alphaTest = props[offset+pagesize*10];
			inst.overdraw = props[offset+pagesize*11];
			inst.blendSrcAlpha = props[offset+pagesize*12];
			inst.blendDstAlpha = props[offset+pagesize*13];
			inst.blendEquationAlpha = props[offset+pagesize*14];
			inst.transparent = props[offset+pagesize*15];
			inst.depthTest = props[offset+pagesize*16];
			inst.depthWrite = props[offset+pagesize*17];
			inst.colorWrite = props[offset+pagesize*18];
			inst.polygonOffset = props[offset+pagesize*19];
			inst.visible = props[offset+pagesize*20];
			inst.precision = props[offset+pagesize*21];
			inst.color = props[offset+pagesize*22];
			inst.linewidth = props[offset+pagesize*23];
			inst.linecap = props[offset+pagesize*24];
			inst.linejoin = props[offset+pagesize*25];
			inst.vertexColors = props[offset+pagesize*26];
			inst.fog = props[offset+pagesize*27];
		}
	}

	/**
	 * Factory & Initializer of THREE.SpriteMaterial
	 */
	var factory_THREE_SpriteMaterial = {
		props: 26,
		create: function() {
			return new THREE.SpriteMaterial();
		},
		init: function(inst, props, pagesize, offset) {
			inst.name = props[offset+pagesize*0];
			inst.side = props[offset+pagesize*1];
			inst.opacity = props[offset+pagesize*2];
			inst.blending = props[offset+pagesize*3];
			inst.blendSrc = props[offset+pagesize*4];
			inst.blendDst = props[offset+pagesize*5];
			inst.blendEquation = props[offset+pagesize*6];
			inst.depthFunc = props[offset+pagesize*7];
			inst.polygonOffsetFactor = props[offset+pagesize*8];
			inst.polygonOffsetUnits = props[offset+pagesize*9];
			inst.alphaTest = props[offset+pagesize*10];
			inst.overdraw = props[offset+pagesize*11];
			inst.blendSrcAlpha = props[offset+pagesize*12];
			inst.blendDstAlpha = props[offset+pagesize*13];
			inst.blendEquationAlpha = props[offset+pagesize*14];
			inst.transparent = props[offset+pagesize*15];
			inst.depthTest = props[offset+pagesize*16];
			inst.depthWrite = props[offset+pagesize*17];
			inst.colorWrite = props[offset+pagesize*18];
			inst.polygonOffset = props[offset+pagesize*19];
			inst.visible = props[offset+pagesize*20];
			inst.precision = props[offset+pagesize*21];
			inst.color = props[offset+pagesize*22];
			inst.map = props[offset+pagesize*23];
			inst.rotation = props[offset+pagesize*24];
			inst.fog = props[offset+pagesize*25];
		}
	}

	/**
	 * Factory & Initializer of THREE.PointsMaterial
	 */
	var factory_THREE_PointsMaterial = {
		props: 28,
		create: function() {
			return new THREE.PointsMaterial();
		},
		init: function(inst, props, pagesize, offset) {
			inst.name = props[offset+pagesize*0];
			inst.side = props[offset+pagesize*1];
			inst.opacity = props[offset+pagesize*2];
			inst.blending = props[offset+pagesize*3];
			inst.blendSrc = props[offset+pagesize*4];
			inst.blendDst = props[offset+pagesize*5];
			inst.blendEquation = props[offset+pagesize*6];
			inst.depthFunc = props[offset+pagesize*7];
			inst.polygonOffsetFactor = props[offset+pagesize*8];
			inst.polygonOffsetUnits = props[offset+pagesize*9];
			inst.alphaTest = props[offset+pagesize*10];
			inst.overdraw = props[offset+pagesize*11];
			inst.blendSrcAlpha = props[offset+pagesize*12];
			inst.blendDstAlpha = props[offset+pagesize*13];
			inst.blendEquationAlpha = props[offset+pagesize*14];
			inst.transparent = props[offset+pagesize*15];
			inst.depthTest = props[offset+pagesize*16];
			inst.depthWrite = props[offset+pagesize*17];
			inst.colorWrite = props[offset+pagesize*18];
			inst.polygonOffset = props[offset+pagesize*19];
			inst.visible = props[offset+pagesize*20];
			inst.precision = props[offset+pagesize*21];
			inst.color = props[offset+pagesize*22];
			inst.map = props[offset+pagesize*23];
			inst.size = props[offset+pagesize*24];
			inst.vertexColors = props[offset+pagesize*25];
			inst.sizeAttenuation = props[offset+pagesize*26];
			inst.fog = props[offset+pagesize*27];
		}
	}

	/**
	 * Factory & Initializer of THREE.MeshNormalMaterial
	 */
	var factory_THREE_MeshNormalMaterial = {
		props: 25,
		create: function() {
			return new THREE.MeshNormalMaterial();
		},
		init: function(inst, props, pagesize, offset) {
			inst.name = props[offset+pagesize*0];
			inst.side = props[offset+pagesize*1];
			inst.opacity = props[offset+pagesize*2];
			inst.blending = props[offset+pagesize*3];
			inst.blendSrc = props[offset+pagesize*4];
			inst.blendDst = props[offset+pagesize*5];
			inst.blendEquation = props[offset+pagesize*6];
			inst.depthFunc = props[offset+pagesize*7];
			inst.polygonOffsetFactor = props[offset+pagesize*8];
			inst.polygonOffsetUnits = props[offset+pagesize*9];
			inst.alphaTest = props[offset+pagesize*10];
			inst.overdraw = props[offset+pagesize*11];
			inst.blendSrcAlpha = props[offset+pagesize*12];
			inst.blendDstAlpha = props[offset+pagesize*13];
			inst.blendEquationAlpha = props[offset+pagesize*14];
			inst.transparent = props[offset+pagesize*15];
			inst.depthTest = props[offset+pagesize*16];
			inst.depthWrite = props[offset+pagesize*17];
			inst.colorWrite = props[offset+pagesize*18];
			inst.polygonOffset = props[offset+pagesize*19];
			inst.visible = props[offset+pagesize*20];
			inst.precision = props[offset+pagesize*21];
			inst.wireframeLinewidth = props[offset+pagesize*22];
			inst.wireframe = props[offset+pagesize*23];
			inst.morphTargets = props[offset+pagesize*24];
		}
	}

	/**
	 * Factory & Initializer of THREE.MeshDepthMaterial
	 */
	var factory_THREE_MeshDepthMaterial = {
		props: 25,
		create: function() {
			return new THREE.MeshDepthMaterial();
		},
		init: function(inst, props, pagesize, offset) {
			inst.name = props[offset+pagesize*0];
			inst.side = props[offset+pagesize*1];
			inst.opacity = props[offset+pagesize*2];
			inst.blending = props[offset+pagesize*3];
			inst.blendSrc = props[offset+pagesize*4];
			inst.blendDst = props[offset+pagesize*5];
			inst.blendEquation = props[offset+pagesize*6];
			inst.depthFunc = props[offset+pagesize*7];
			inst.polygonOffsetFactor = props[offset+pagesize*8];
			inst.polygonOffsetUnits = props[offset+pagesize*9];
			inst.alphaTest = props[offset+pagesize*10];
			inst.overdraw = props[offset+pagesize*11];
			inst.blendSrcAlpha = props[offset+pagesize*12];
			inst.blendDstAlpha = props[offset+pagesize*13];
			inst.blendEquationAlpha = props[offset+pagesize*14];
			inst.transparent = props[offset+pagesize*15];
			inst.depthTest = props[offset+pagesize*16];
			inst.depthWrite = props[offset+pagesize*17];
			inst.colorWrite = props[offset+pagesize*18];
			inst.polygonOffset = props[offset+pagesize*19];
			inst.visible = props[offset+pagesize*20];
			inst.precision = props[offset+pagesize*21];
			inst.wireframeLinewidth = props[offset+pagesize*22];
			inst.wireframe = props[offset+pagesize*23];
			inst.morphTargets = props[offset+pagesize*24];
		}
	}

	/**
	 * Factory & Initializer of THREE.MeshLambertMaterial
	 */
	var factory_THREE_MeshLambertMaterial = {
		props: 40,
		create: function() {
			return new THREE.MeshLambertMaterial();
		},
		init: function(inst, props, pagesize, offset) {
			inst.name = props[offset+pagesize*0];
			inst.side = props[offset+pagesize*1];
			inst.opacity = props[offset+pagesize*2];
			inst.blending = props[offset+pagesize*3];
			inst.blendSrc = props[offset+pagesize*4];
			inst.blendDst = props[offset+pagesize*5];
			inst.blendEquation = props[offset+pagesize*6];
			inst.depthFunc = props[offset+pagesize*7];
			inst.polygonOffsetFactor = props[offset+pagesize*8];
			inst.polygonOffsetUnits = props[offset+pagesize*9];
			inst.alphaTest = props[offset+pagesize*10];
			inst.overdraw = props[offset+pagesize*11];
			inst.blendSrcAlpha = props[offset+pagesize*12];
			inst.blendDstAlpha = props[offset+pagesize*13];
			inst.blendEquationAlpha = props[offset+pagesize*14];
			inst.transparent = props[offset+pagesize*15];
			inst.depthTest = props[offset+pagesize*16];
			inst.depthWrite = props[offset+pagesize*17];
			inst.colorWrite = props[offset+pagesize*18];
			inst.polygonOffset = props[offset+pagesize*19];
			inst.visible = props[offset+pagesize*20];
			inst.precision = props[offset+pagesize*21];
			inst.wireframeLinecap = props[offset+pagesize*22];
			inst.wireframeLinejoin = props[offset+pagesize*23];
			inst.color = props[offset+pagesize*24];
			inst.emissive = props[offset+pagesize*25];
			inst.vertexColors = props[offset+pagesize*26];
			inst.map = props[offset+pagesize*27];
			inst.specularMap = props[offset+pagesize*28];
			inst.alphaMap = props[offset+pagesize*29];
			inst.envMap = props[offset+pagesize*30];
			inst.combine = props[offset+pagesize*31];
			inst.reflectivity = props[offset+pagesize*32];
			inst.wireframeLinewidth = props[offset+pagesize*33];
			inst.refractionRatio = props[offset+pagesize*34];
			inst.fog = props[offset+pagesize*35];
			inst.wireframe = props[offset+pagesize*36];
			inst.skinning = props[offset+pagesize*37];
			inst.morphTargets = props[offset+pagesize*38];
			inst.morphNormals = props[offset+pagesize*39];
		}
	}

	/**
	 * Factory & Initializer of THREE.MeshPhongMaterial
	 */
	var factory_THREE_MeshPhongMaterial = {
		props: 57,
		create: function() {
			return new THREE.MeshPhongMaterial();
		},
		init: function(inst, props, pagesize, offset) {
			inst.name = props[offset+pagesize*0];
			inst.side = props[offset+pagesize*1];
			inst.opacity = props[offset+pagesize*2];
			inst.blending = props[offset+pagesize*3];
			inst.blendSrc = props[offset+pagesize*4];
			inst.blendDst = props[offset+pagesize*5];
			inst.blendEquation = props[offset+pagesize*6];
			inst.depthFunc = props[offset+pagesize*7];
			inst.polygonOffsetFactor = props[offset+pagesize*8];
			inst.polygonOffsetUnits = props[offset+pagesize*9];
			inst.alphaTest = props[offset+pagesize*10];
			inst.overdraw = props[offset+pagesize*11];
			inst.blendSrcAlpha = props[offset+pagesize*12];
			inst.blendDstAlpha = props[offset+pagesize*13];
			inst.blendEquationAlpha = props[offset+pagesize*14];
			inst.transparent = props[offset+pagesize*15];
			inst.depthTest = props[offset+pagesize*16];
			inst.depthWrite = props[offset+pagesize*17];
			inst.colorWrite = props[offset+pagesize*18];
			inst.polygonOffset = props[offset+pagesize*19];
			inst.visible = props[offset+pagesize*20];
			inst.precision = props[offset+pagesize*21];
			inst.color = props[offset+pagesize*22];
			inst.emissive = props[offset+pagesize*23];
			inst.specular = props[offset+pagesize*24];
			inst.shininess = props[offset+pagesize*25];
			inst.vertexColors = props[offset+pagesize*26];
			inst.metal = props[offset+pagesize*27];
			inst.fog = props[offset+pagesize*28];
			inst.skinning = props[offset+pagesize*29];
			inst.morphTargets = props[offset+pagesize*30];
			inst.morphNormals = props[offset+pagesize*31];
			inst.map = props[offset+pagesize*32];
			inst.lightMap = props[offset+pagesize*33];
			inst.emissiveMap = props[offset+pagesize*34];
			inst.aoMap = props[offset+pagesize*35];
			inst.emissiveMap = props[offset+pagesize*36];
			inst.bumpMap = props[offset+pagesize*37];
			inst.normalMap = props[offset+pagesize*38];
			inst.displacementMap = props[offset+pagesize*39];
			inst.specularMap = props[offset+pagesize*40];
			inst.alphaMap = props[offset+pagesize*41];
			inst.envMap = props[offset+pagesize*42];
			inst.lightMapIntensity = props[offset+pagesize*43];
			inst.aoMapIntensity = props[offset+pagesize*44];
			inst.bumpScale = props[offset+pagesize*45];
			inst.normalScale = props[offset+pagesize*46];
			inst.displacementScale = props[offset+pagesize*47];
			inst.displacementBias = props[offset+pagesize*48];
			inst.reflectivity = props[offset+pagesize*49];
			inst.refractionRatio = props[offset+pagesize*50];
			inst.combine = props[offset+pagesize*51];
			inst.shading = props[offset+pagesize*52];
			inst.wireframe = props[offset+pagesize*53];
			inst.wireframeLinewidth = props[offset+pagesize*54];
			inst.wireframeLinecap = props[offset+pagesize*55];
			inst.wireframeLinecap = props[offset+pagesize*56];
		}
	}

	/**
	 * Factory & Initializer of THREE.MeshBasicMaterial
	 */
	var factory_THREE_MeshBasicMaterial = {
		props: 41,
		create: function() {
			return new THREE.MeshBasicMaterial();
		},
		init: function(inst, props, pagesize, offset) {
			inst.name = props[offset+pagesize*0];
			inst.side = props[offset+pagesize*1];
			inst.opacity = props[offset+pagesize*2];
			inst.blending = props[offset+pagesize*3];
			inst.blendSrc = props[offset+pagesize*4];
			inst.blendDst = props[offset+pagesize*5];
			inst.blendEquation = props[offset+pagesize*6];
			inst.depthFunc = props[offset+pagesize*7];
			inst.polygonOffsetFactor = props[offset+pagesize*8];
			inst.polygonOffsetUnits = props[offset+pagesize*9];
			inst.alphaTest = props[offset+pagesize*10];
			inst.overdraw = props[offset+pagesize*11];
			inst.blendSrcAlpha = props[offset+pagesize*12];
			inst.blendDstAlpha = props[offset+pagesize*13];
			inst.blendEquationAlpha = props[offset+pagesize*14];
			inst.transparent = props[offset+pagesize*15];
			inst.depthTest = props[offset+pagesize*16];
			inst.depthWrite = props[offset+pagesize*17];
			inst.colorWrite = props[offset+pagesize*18];
			inst.polygonOffset = props[offset+pagesize*19];
			inst.visible = props[offset+pagesize*20];
			inst.precision = props[offset+pagesize*21];
			inst.color = props[offset+pagesize*22];
			inst.vertexColors = props[offset+pagesize*23];
			inst.map = props[offset+pagesize*24];
			inst.aoMap = props[offset+pagesize*25];
			inst.specularMap = props[offset+pagesize*26];
			inst.alphaMap = props[offset+pagesize*27];
			inst.envMap = props[offset+pagesize*28];
			inst.aoMapIntensity = props[offset+pagesize*29];
			inst.reflectivity = props[offset+pagesize*30];
			inst.refractionRatio = props[offset+pagesize*31];
			inst.wireframeLinewidth = props[offset+pagesize*32];
			inst.combine = props[offset+pagesize*33];
			inst.shading = props[offset+pagesize*34];
			inst.fog = props[offset+pagesize*35];
			inst.wireframe = props[offset+pagesize*36];
			inst.skinning = props[offset+pagesize*37];
			inst.morphTargets = props[offset+pagesize*38];
			inst.wireframeLinecap = props[offset+pagesize*39];
			inst.wireframeLinejoin = props[offset+pagesize*40];
		}
	}

	/**
	 * Factory & Initializer of THREE.Material
	 */
	var factory_THREE_Material = {
		props: 22,
		create: function() {
			return new THREE.Material();
		},
		init: function(inst, props, pagesize, offset) {
			inst.name = props[offset+pagesize*0];
			inst.side = props[offset+pagesize*1];
			inst.opacity = props[offset+pagesize*2];
			inst.blending = props[offset+pagesize*3];
			inst.blendSrc = props[offset+pagesize*4];
			inst.blendDst = props[offset+pagesize*5];
			inst.blendEquation = props[offset+pagesize*6];
			inst.depthFunc = props[offset+pagesize*7];
			inst.polygonOffsetFactor = props[offset+pagesize*8];
			inst.polygonOffsetUnits = props[offset+pagesize*9];
			inst.alphaTest = props[offset+pagesize*10];
			inst.overdraw = props[offset+pagesize*11];
			inst.blendSrcAlpha = props[offset+pagesize*12];
			inst.blendDstAlpha = props[offset+pagesize*13];
			inst.blendEquationAlpha = props[offset+pagesize*14];
			inst.transparent = props[offset+pagesize*15];
			inst.depthTest = props[offset+pagesize*16];
			inst.depthWrite = props[offset+pagesize*17];
			inst.colorWrite = props[offset+pagesize*18];
			inst.polygonOffset = props[offset+pagesize*19];
			inst.visible = props[offset+pagesize*20];
			inst.precision = props[offset+pagesize*21];
		}
	}

	/**
	 * Factory & Initializer of THREE.Scene
	 */
	var factory_THREE_Scene = {
		props: 18,
		create: function() {
			return new THREE.Scene();
		},
		init: function(inst, props, pagesize, offset) {
			inst.name = props[offset+pagesize*0];
			inst.up.copy( props[offset+pagesize*1] );
			inst.position.copy( props[offset+pagesize*2] );
			inst.quaternion.copy( props[offset+pagesize*3] );
			inst.scale.copy( props[offset+pagesize*4] );
			inst.rotationAutoUpdate = props[offset+pagesize*5];
			inst.matrix = props[offset+pagesize*6];
			inst.matrixWorld = props[offset+pagesize*7];
			inst.matrixAutoUpdate = props[offset+pagesize*8];
			inst.visible = props[offset+pagesize*9];
			inst.castShadow = props[offset+pagesize*10];
			inst.receiveShadow = props[offset+pagesize*11];
			inst.frustumCulled = props[offset+pagesize*12];
			inst.renderOrder = props[offset+pagesize*13];
			inst.userData = props[offset+pagesize*14];
			inst.children = props[offset+pagesize*15];
			inst.fog = props[offset+pagesize*16];
			inst.overrideMaterial = props[offset+pagesize*17];

			// Custom init function
			for (var i=0, l=inst.children.length; i<l; ++i) {
			    inst.children[i].parent = inst;
			}
			
				}
	}

	/**
	 * Factory & Initializer of THREE.SpotLight
	 */
	var factory_THREE_SpotLight = {
		props: 22,
		create: function() {
			return new THREE.SpotLight();
		},
		init: function(inst, props, pagesize, offset) {
			inst.name = props[offset+pagesize*0];
			inst.up.copy( props[offset+pagesize*1] );
			inst.position.copy( props[offset+pagesize*2] );
			inst.quaternion.copy( props[offset+pagesize*3] );
			inst.scale.copy( props[offset+pagesize*4] );
			inst.rotationAutoUpdate = props[offset+pagesize*5];
			inst.matrix = props[offset+pagesize*6];
			inst.matrixWorld = props[offset+pagesize*7];
			inst.matrixAutoUpdate = props[offset+pagesize*8];
			inst.visible = props[offset+pagesize*9];
			inst.castShadow = props[offset+pagesize*10];
			inst.receiveShadow = props[offset+pagesize*11];
			inst.frustumCulled = props[offset+pagesize*12];
			inst.renderOrder = props[offset+pagesize*13];
			inst.userData = props[offset+pagesize*14];
			inst.children = props[offset+pagesize*15];
			inst.color = props[offset+pagesize*16];
			inst.intensity = props[offset+pagesize*17];
			inst.distance = props[offset+pagesize*18];
			inst.decay = props[offset+pagesize*19];
			inst.angle = props[offset+pagesize*20];
			inst.exponent = props[offset+pagesize*21];

			// Custom init function
			for (var i=0, l=inst.children.length; i<l; ++i) {
			    inst.children[i].parent = inst;
			}
			
				}
	}

	/**
	 * Factory & Initializer of THREE.PointLight
	 */
	var factory_THREE_PointLight = {
		props: 20,
		create: function() {
			return new THREE.PointLight();
		},
		init: function(inst, props, pagesize, offset) {
			inst.name = props[offset+pagesize*0];
			inst.up.copy( props[offset+pagesize*1] );
			inst.position.copy( props[offset+pagesize*2] );
			inst.quaternion.copy( props[offset+pagesize*3] );
			inst.scale.copy( props[offset+pagesize*4] );
			inst.rotationAutoUpdate = props[offset+pagesize*5];
			inst.matrix = props[offset+pagesize*6];
			inst.matrixWorld = props[offset+pagesize*7];
			inst.matrixAutoUpdate = props[offset+pagesize*8];
			inst.visible = props[offset+pagesize*9];
			inst.castShadow = props[offset+pagesize*10];
			inst.receiveShadow = props[offset+pagesize*11];
			inst.frustumCulled = props[offset+pagesize*12];
			inst.renderOrder = props[offset+pagesize*13];
			inst.userData = props[offset+pagesize*14];
			inst.children = props[offset+pagesize*15];
			inst.color = props[offset+pagesize*16];
			inst.intensity = props[offset+pagesize*17];
			inst.distance = props[offset+pagesize*18];
			inst.decay = props[offset+pagesize*19];

			// Custom init function
			for (var i=0, l=inst.children.length; i<l; ++i) {
			    inst.children[i].parent = inst;
			}
			
				}
	}

	/**
	 * Factory & Initializer of THREE.HemisphereLight
	 */
	var factory_THREE_HemisphereLight = {
		props: 19,
		create: function() {
			return new THREE.HemisphereLight();
		},
		init: function(inst, props, pagesize, offset) {
			inst.name = props[offset+pagesize*0];
			inst.up.copy( props[offset+pagesize*1] );
			inst.position.copy( props[offset+pagesize*2] );
			inst.quaternion.copy( props[offset+pagesize*3] );
			inst.scale.copy( props[offset+pagesize*4] );
			inst.rotationAutoUpdate = props[offset+pagesize*5];
			inst.matrix = props[offset+pagesize*6];
			inst.matrixWorld = props[offset+pagesize*7];
			inst.matrixAutoUpdate = props[offset+pagesize*8];
			inst.visible = props[offset+pagesize*9];
			inst.castShadow = props[offset+pagesize*10];
			inst.receiveShadow = props[offset+pagesize*11];
			inst.frustumCulled = props[offset+pagesize*12];
			inst.renderOrder = props[offset+pagesize*13];
			inst.userData = props[offset+pagesize*14];
			inst.children = props[offset+pagesize*15];
			inst.color = props[offset+pagesize*16];
			inst.groundColor = props[offset+pagesize*17];
			inst.intensity = props[offset+pagesize*18];

			// Custom init function
			for (var i=0, l=inst.children.length; i<l; ++i) {
			    inst.children[i].parent = inst;
			}
			
				}
	}

	/**
	 * Factory & Initializer of THREE.DirectionalLight
	 */
	var factory_THREE_DirectionalLight = {
		props: 18,
		create: function() {
			return new THREE.DirectionalLight();
		},
		init: function(inst, props, pagesize, offset) {
			inst.name = props[offset+pagesize*0];
			inst.up.copy( props[offset+pagesize*1] );
			inst.position.copy( props[offset+pagesize*2] );
			inst.quaternion.copy( props[offset+pagesize*3] );
			inst.scale.copy( props[offset+pagesize*4] );
			inst.rotationAutoUpdate = props[offset+pagesize*5];
			inst.matrix = props[offset+pagesize*6];
			inst.matrixWorld = props[offset+pagesize*7];
			inst.matrixAutoUpdate = props[offset+pagesize*8];
			inst.visible = props[offset+pagesize*9];
			inst.castShadow = props[offset+pagesize*10];
			inst.receiveShadow = props[offset+pagesize*11];
			inst.frustumCulled = props[offset+pagesize*12];
			inst.renderOrder = props[offset+pagesize*13];
			inst.userData = props[offset+pagesize*14];
			inst.children = props[offset+pagesize*15];
			inst.color = props[offset+pagesize*16];
			inst.intensity = props[offset+pagesize*17];

			// Custom init function
			for (var i=0, l=inst.children.length; i<l; ++i) {
			    inst.children[i].parent = inst;
			}
			
				}
	}

	/**
	 * Factory & Initializer of THREE.AmbientLight
	 */
	var factory_THREE_AmbientLight = {
		props: 17,
		create: function() {
			return new THREE.AmbientLight();
		},
		init: function(inst, props, pagesize, offset) {
			inst.name = props[offset+pagesize*0];
			inst.up.copy( props[offset+pagesize*1] );
			inst.position.copy( props[offset+pagesize*2] );
			inst.quaternion.copy( props[offset+pagesize*3] );
			inst.scale.copy( props[offset+pagesize*4] );
			inst.rotationAutoUpdate = props[offset+pagesize*5];
			inst.matrix = props[offset+pagesize*6];
			inst.matrixWorld = props[offset+pagesize*7];
			inst.matrixAutoUpdate = props[offset+pagesize*8];
			inst.visible = props[offset+pagesize*9];
			inst.castShadow = props[offset+pagesize*10];
			inst.receiveShadow = props[offset+pagesize*11];
			inst.frustumCulled = props[offset+pagesize*12];
			inst.renderOrder = props[offset+pagesize*13];
			inst.userData = props[offset+pagesize*14];
			inst.children = props[offset+pagesize*15];
			inst.color = props[offset+pagesize*16];

			// Custom init function
			for (var i=0, l=inst.children.length; i<l; ++i) {
			    inst.children[i].parent = inst;
			}
			
				}
	}

	/**
	 * Factory & Initializer of THREE.Mesh
	 */
	var factory_THREE_Mesh = {
		props: 20,
		create: function() {
			return new THREE.Mesh();
		},
		init: function(inst, props, pagesize, offset) {
			inst.name = props[offset+pagesize*0];
			inst.up.copy( props[offset+pagesize*1] );
			inst.position.copy( props[offset+pagesize*2] );
			inst.quaternion.copy( props[offset+pagesize*3] );
			inst.scale.copy( props[offset+pagesize*4] );
			inst.rotationAutoUpdate = props[offset+pagesize*5];
			inst.matrix = props[offset+pagesize*6];
			inst.matrixWorld = props[offset+pagesize*7];
			inst.matrixAutoUpdate = props[offset+pagesize*8];
			inst.visible = props[offset+pagesize*9];
			inst.castShadow = props[offset+pagesize*10];
			inst.receiveShadow = props[offset+pagesize*11];
			inst.frustumCulled = props[offset+pagesize*12];
			inst.renderOrder = props[offset+pagesize*13];
			inst.userData = props[offset+pagesize*14];
			inst.children = props[offset+pagesize*15];
			inst.geometry = props[offset+pagesize*16];
			inst.material = props[offset+pagesize*17];
			inst.materialTexture = props[offset+pagesize*18];
			inst.materialWireframe = props[offset+pagesize*19];

			// Custom init function
			for (var i=0, l=inst.children.length; i<l; ++i) {
			    inst.children[i].parent = inst;
			}
			
			inst.updateMorphTargets();
			
				}
	}

	/**
	 * Factory & Initializer of THREE.Object3D
	 */
	var factory_THREE_Object3D = {
		props: 16,
		create: function() {
			return new THREE.Object3D();
		},
		init: function(inst, props, pagesize, offset) {
			inst.name = props[offset+pagesize*0];
			inst.up.copy( props[offset+pagesize*1] );
			inst.position.copy( props[offset+pagesize*2] );
			inst.quaternion.copy( props[offset+pagesize*3] );
			inst.scale.copy( props[offset+pagesize*4] );
			inst.rotationAutoUpdate = props[offset+pagesize*5];
			inst.matrix = props[offset+pagesize*6];
			inst.matrixWorld = props[offset+pagesize*7];
			inst.matrixAutoUpdate = props[offset+pagesize*8];
			inst.visible = props[offset+pagesize*9];
			inst.castShadow = props[offset+pagesize*10];
			inst.receiveShadow = props[offset+pagesize*11];
			inst.frustumCulled = props[offset+pagesize*12];
			inst.renderOrder = props[offset+pagesize*13];
			inst.userData = props[offset+pagesize*14];
			inst.children = props[offset+pagesize*15];

			// Custom init function
			for (var i=0, l=inst.children.length; i<l; ++i) {
			    inst.children[i].parent = inst;
			}
			
				}
	}

	/**
	 * Factory & Initializer of THREE.BufferGeometry
	 */
	var factory_THREE_BufferGeometry = {
		props: 12,
		create: function() {
			return new THREE.BufferGeometry();
		},
		init: function(inst, props, pagesize, offset) {
			inst.vertices = props[offset+pagesize*0];
			inst.faces = props[offset+pagesize*1];
			inst.faceVertexUvs = props[offset+pagesize*2];
			inst.morphTargets = props[offset+pagesize*3];
			inst.morphNormals = props[offset+pagesize*4];
			inst.morphColors = props[offset+pagesize*5];
			inst.animations = props[offset+pagesize*6];
			inst.boundingSphere = props[offset+pagesize*7];
			inst.boundingBox = props[offset+pagesize*8];
			inst.name = props[offset+pagesize*9];
			inst.attributes = props[offset+pagesize*10];
			inst.index = props[offset+pagesize*11];
		}
	}

	/**
	 * Factory & Initializer of THREE.TubeGeometry
	 */
	var factory_THREE_TubeGeometry = {
		props: 2,
		create: function() {
			return Object.create(THREE.TubeGeometry.prototype);
		},
		init: function(inst, props, pagesize, offset) {
			THREE.TubeGeometry.call(inst,
				props[offset+pagesize*0].path,
				props[offset+pagesize*0].segments,
				props[offset+pagesize*0].radius,
				props[offset+pagesize*0].radialSegments,
				props[offset+pagesize*0].closed,
				props[offset+pagesize*0].taper);
			inst.name = props[offset+pagesize*1];
		}
	}

	/**
	 * Factory & Initializer of THREE.TorusKnotGeometry
	 */
	var factory_THREE_TorusKnotGeometry = {
		props: 2,
		create: function() {
			return Object.create(THREE.TorusKnotGeometry.prototype);
		},
		init: function(inst, props, pagesize, offset) {
			THREE.TorusKnotGeometry.call(inst,
				props[offset+pagesize*0].radius,
				props[offset+pagesize*0].tube,
				props[offset+pagesize*0].radialSegments,
				props[offset+pagesize*0].tubularSegments,
				props[offset+pagesize*0].p,
				props[offset+pagesize*0].q,
				props[offset+pagesize*0].heightScale);
			inst.name = props[offset+pagesize*1];
		}
	}

	/**
	 * Factory & Initializer of THREE.TorusGeometry
	 */
	var factory_THREE_TorusGeometry = {
		props: 2,
		create: function() {
			return Object.create(THREE.TorusGeometry.prototype);
		},
		init: function(inst, props, pagesize, offset) {
			THREE.TorusGeometry.call(inst,
				props[offset+pagesize*0].radius,
				props[offset+pagesize*0].tube,
				props[offset+pagesize*0].radialSegments,
				props[offset+pagesize*0].tubularSegments,
				props[offset+pagesize*0].arc);
			inst.name = props[offset+pagesize*1];
		}
	}

	/**
	 * Factory & Initializer of THREE.TetrahedronGeometry
	 */
	var factory_THREE_TetrahedronGeometry = {
		props: 2,
		create: function() {
			return Object.create(THREE.TetrahedronGeometry.prototype);
		},
		init: function(inst, props, pagesize, offset) {
			THREE.TetrahedronGeometry.call(inst,
				props[offset+pagesize*0].radius,
				props[offset+pagesize*0].detail);
			inst.name = props[offset+pagesize*1];
		}
	}

	/**
	 * Factory & Initializer of THREE.SphereGeometry
	 */
	var factory_THREE_SphereGeometry = {
		props: 2,
		create: function() {
			return Object.create(THREE.SphereGeometry.prototype);
		},
		init: function(inst, props, pagesize, offset) {
			THREE.SphereGeometry.call(inst,
				props[offset+pagesize*0].radius,
				props[offset+pagesize*0].widthSegments,
				props[offset+pagesize*0].heightSegments,
				props[offset+pagesize*0].phiStart,
				props[offset+pagesize*0].phiLength,
				props[offset+pagesize*0].thetaStart,
				props[offset+pagesize*0].thetaLength);
			inst.name = props[offset+pagesize*1];
		}
	}

	/**
	 * Factory & Initializer of THREE.SphereBufferGeometry
	 */
	var factory_THREE_SphereBufferGeometry = {
		props: 2,
		create: function() {
			return Object.create(THREE.SphereBufferGeometry.prototype);
		},
		init: function(inst, props, pagesize, offset) {
			THREE.SphereBufferGeometry.call(inst,
				props[offset+pagesize*0].radius,
				props[offset+pagesize*0].widthSegments,
				props[offset+pagesize*0].heightSegments,
				props[offset+pagesize*0].phiStart,
				props[offset+pagesize*0].phiLength,
				props[offset+pagesize*0].thetaStart,
				props[offset+pagesize*0].thetaLength);
			inst.name = props[offset+pagesize*1];
		}
	}

	/**
	 * Factory & Initializer of THREE.RingGeometry
	 */
	var factory_THREE_RingGeometry = {
		props: 2,
		create: function() {
			return Object.create(THREE.RingGeometry.prototype);
		},
		init: function(inst, props, pagesize, offset) {
			THREE.RingGeometry.call(inst,
				props[offset+pagesize*0].innerRadius,
				props[offset+pagesize*0].outerRadius,
				props[offset+pagesize*0].thetaSegments,
				props[offset+pagesize*0].phiSegments,
				props[offset+pagesize*0].thetaStart,
				props[offset+pagesize*0].thetaLength);
			inst.name = props[offset+pagesize*1];
		}
	}

	/**
	 * Factory & Initializer of THREE.PolyhedronGeometry
	 */
	var factory_THREE_PolyhedronGeometry = {
		props: 2,
		create: function() {
			return Object.create(THREE.PolyhedronGeometry.prototype);
		},
		init: function(inst, props, pagesize, offset) {
			THREE.PolyhedronGeometry.call(inst,
				props[offset+pagesize*0].vertices,
				props[offset+pagesize*0].indices,
				props[offset+pagesize*0].radius,
				props[offset+pagesize*0].detail);
			inst.name = props[offset+pagesize*1];
		}
	}

	/**
	 * Factory & Initializer of THREE.PlaneGeometry
	 */
	var factory_THREE_PlaneGeometry = {
		props: 2,
		create: function() {
			return Object.create(THREE.PlaneGeometry.prototype);
		},
		init: function(inst, props, pagesize, offset) {
			THREE.PlaneGeometry.call(inst,
				props[offset+pagesize*0].width,
				props[offset+pagesize*0].height,
				props[offset+pagesize*0].depth,
				props[offset+pagesize*0].widthSegments,
				props[offset+pagesize*0].heightSegments,
				props[offset+pagesize*0].depthSegments);
			inst.name = props[offset+pagesize*1];
		}
	}

	/**
	 * Factory & Initializer of THREE.PlaneBufferGeometry
	 */
	var factory_THREE_PlaneBufferGeometry = {
		props: 2,
		create: function() {
			return Object.create(THREE.PlaneBufferGeometry.prototype);
		},
		init: function(inst, props, pagesize, offset) {
			THREE.PlaneBufferGeometry.call(inst,
				props[offset+pagesize*0].width,
				props[offset+pagesize*0].height,
				props[offset+pagesize*0].depth,
				props[offset+pagesize*0].widthSegments,
				props[offset+pagesize*0].heightSegments,
				props[offset+pagesize*0].depthSegments);
			inst.name = props[offset+pagesize*1];
		}
	}

	/**
	 * Factory & Initializer of THREE.ParametricGeometry
	 */
	var factory_THREE_ParametricGeometry = {
		props: 2,
		create: function() {
			return Object.create(THREE.ParametricGeometry.prototype);
		},
		init: function(inst, props, pagesize, offset) {
			THREE.ParametricGeometry.call(inst,
				props[offset+pagesize*0].width,
				props[offset+pagesize*0].height,
				props[offset+pagesize*0].widthSegments,
				props[offset+pagesize*0].heightSegments);
			inst.name = props[offset+pagesize*1];
		}
	}

	/**
	 * Factory & Initializer of THREE.OctahedronGeometry
	 */
	var factory_THREE_OctahedronGeometry = {
		props: 2,
		create: function() {
			return Object.create(THREE.OctahedronGeometry.prototype);
		},
		init: function(inst, props, pagesize, offset) {
			THREE.OctahedronGeometry.call(inst,
				props[offset+pagesize*0].radius,
				props[offset+pagesize*0].detail);
			inst.name = props[offset+pagesize*1];
		}
	}

	/**
	 * Factory & Initializer of THREE.LatheGeometry
	 */
	var factory_THREE_LatheGeometry = {
		props: 2,
		create: function() {
			return Object.create(THREE.LatheGeometry.prototype);
		},
		init: function(inst, props, pagesize, offset) {
			THREE.LatheGeometry.call(inst,
				props[offset+pagesize*0].points,
				props[offset+pagesize*0].segments,
				props[offset+pagesize*0].phiStart,
				props[offset+pagesize*0].phiLength);
			inst.name = props[offset+pagesize*1];
		}
	}

	/**
	 * Factory & Initializer of THREE.IcosahedronGeometry
	 */
	var factory_THREE_IcosahedronGeometry = {
		props: 2,
		create: function() {
			return Object.create(THREE.IcosahedronGeometry.prototype);
		},
		init: function(inst, props, pagesize, offset) {
			THREE.IcosahedronGeometry.call(inst,
				props[offset+pagesize*0].radius,
				props[offset+pagesize*0].detail);
			inst.name = props[offset+pagesize*1];
		}
	}

	/**
	 * Factory & Initializer of THREE.DodecahedronGeometry
	 */
	var factory_THREE_DodecahedronGeometry = {
		props: 2,
		create: function() {
			return Object.create(THREE.DodecahedronGeometry.prototype);
		},
		init: function(inst, props, pagesize, offset) {
			THREE.DodecahedronGeometry.call(inst,
				props[offset+pagesize*0].radius,
				props[offset+pagesize*0].detail);
			inst.name = props[offset+pagesize*1];
		}
	}

	/**
	 * Factory & Initializer of THREE.CylinderGeometry
	 */
	var factory_THREE_CylinderGeometry = {
		props: 2,
		create: function() {
			return Object.create(THREE.CylinderGeometry.prototype);
		},
		init: function(inst, props, pagesize, offset) {
			THREE.CylinderGeometry.call(inst,
				props[offset+pagesize*0].radiusTop,
				props[offset+pagesize*0].radiusBottom,
				props[offset+pagesize*0].height,
				props[offset+pagesize*0].radialSegments,
				props[offset+pagesize*0].heightSegments,
				props[offset+pagesize*0].openEnded,
				props[offset+pagesize*0].thetaStart,
				props[offset+pagesize*0].thetaLength);
			inst.name = props[offset+pagesize*1];
		}
	}

	/**
	 * Factory & Initializer of THREE.CircleGeometry
	 */
	var factory_THREE_CircleGeometry = {
		props: 2,
		create: function() {
			return Object.create(THREE.CircleGeometry.prototype);
		},
		init: function(inst, props, pagesize, offset) {
			THREE.CircleGeometry.call(inst,
				props[offset+pagesize*0].radius,
				props[offset+pagesize*0].segments,
				props[offset+pagesize*0].thetaStart,
				props[offset+pagesize*0].thetaLength);
			inst.name = props[offset+pagesize*1];
		}
	}

	/**
	 * Factory & Initializer of THREE.CircleBufferGeometry
	 */
	var factory_THREE_CircleBufferGeometry = {
		props: 2,
		create: function() {
			return Object.create(THREE.CircleBufferGeometry.prototype);
		},
		init: function(inst, props, pagesize, offset) {
			THREE.CircleBufferGeometry.call(inst,
				props[offset+pagesize*0].radius,
				props[offset+pagesize*0].segments,
				props[offset+pagesize*0].thetaStart,
				props[offset+pagesize*0].thetaLength);
			inst.name = props[offset+pagesize*1];
		}
	}

	/**
	 * Factory & Initializer of THREE.BoxGeometry
	 */
	var factory_THREE_BoxGeometry = {
		props: 2,
		create: function() {
			return Object.create(THREE.BoxGeometry.prototype);
		},
		init: function(inst, props, pagesize, offset) {
			THREE.BoxGeometry.call(inst,
				props[offset+pagesize*0].width,
				props[offset+pagesize*0].height,
				props[offset+pagesize*0].depth);
			inst.name = props[offset+pagesize*1];
		}
	}

	/**
	 * Factory & Initializer of THREE.Geometry
	 */
	var factory_THREE_Geometry = {
		props: 10,
		create: function() {
			return new THREE.Geometry();
		},
		init: function(inst, props, pagesize, offset) {
			inst.vertices = props[offset+pagesize*0];
			inst.faces = props[offset+pagesize*1];
			inst.faceVertexUvs = props[offset+pagesize*2];
			inst.morphTargets = props[offset+pagesize*3];
			inst.morphNormals = props[offset+pagesize*4];
			inst.morphColors = props[offset+pagesize*5];
			inst.animations = props[offset+pagesize*6];
			inst.boundingSphere = props[offset+pagesize*7];
			inst.boundingBox = props[offset+pagesize*8];
			inst.name = props[offset+pagesize*9];
		}
	}

	/**
	 * Factory & Initializer of THREE.Vector2
	 */
	var factory_THREE_Vector2 = {
		props: 2,
		create: function() {
			return new THREE.Vector2();
		},
		init: function(inst, props, pagesize, offset) {
			inst.x = props[offset+pagesize*0];
			inst.y = props[offset+pagesize*1];
		}
	}

	/**
	 * Factory & Initializer of THREE.Vector3
	 */
	var factory_THREE_Vector3 = {
		props: 3,
		create: function() {
			return new THREE.Vector3();
		},
		init: function(inst, props, pagesize, offset) {
			inst.x = props[offset+pagesize*0];
			inst.y = props[offset+pagesize*1];
			inst.z = props[offset+pagesize*2];
		}
	}

	/**
	 * Factory & Initializer of THREE.Vector4
	 */
	var factory_THREE_Vector4 = {
		props: 4,
		create: function() {
			return new THREE.Vector4();
		},
		init: function(inst, props, pagesize, offset) {
			inst.x = props[offset+pagesize*0];
			inst.y = props[offset+pagesize*1];
			inst.z = props[offset+pagesize*2];
			inst.w = props[offset+pagesize*3];
		}
	}

	/**
	 * Factory & Initializer of THREE.Face3
	 */
	var factory_THREE_Face3 = {
		props: 8,
		create: function() {
			return new THREE.Face3();
		},
		init: function(inst, props, pagesize, offset) {
			inst.a = props[offset+pagesize*0];
			inst.b = props[offset+pagesize*1];
			inst.c = props[offset+pagesize*2];
			inst.materialIndex = props[offset+pagesize*3];
			inst.normal = props[offset+pagesize*4];
			inst.color = props[offset+pagesize*5];
			inst.vertexNormals = props[offset+pagesize*6];
			inst.vertexColors = props[offset+pagesize*7];
		}
	}

	/**
	 * Factory & Initializer of THREE.Color
	 */
	var factory_THREE_Color = {
		props: 3,
		create: function() {
			return new THREE.Color();
		},
		init: function(inst, props, pagesize, offset) {
			inst.r = props[offset+pagesize*0];
			inst.g = props[offset+pagesize*1];
			inst.b = props[offset+pagesize*2];
		}
	}

	/**
	 * Factory & Initializer of THREE.Quaternion
	 */
	var factory_THREE_Quaternion = {
		props: 4,
		create: function() {
			return Object.create(THREE.Quaternion.prototype);
		},
		init: function(inst, props, pagesize, offset) {
			THREE.Quaternion.call(inst,
				props[offset+pagesize*0],
				props[offset+pagesize*1],
				props[offset+pagesize*2],
				props[offset+pagesize*3]);
		}
	}

	/**
	 * Factory & Initializer of THREE.Euler
	 */
	var factory_THREE_Euler = {
		props: 4,
		create: function() {
			return new THREE.Euler();
		},
		init: function(inst, props, pagesize, offset) {
			inst._x = props[offset+pagesize*0];
			inst._y = props[offset+pagesize*1];
			inst._z = props[offset+pagesize*2];
			inst._order = props[offset+pagesize*3];
		}
	}

	/**
	 * Factory & Initializer of THREE.Box2
	 */
	var factory_THREE_Box2 = {
		props: 2,
		create: function() {
			return new THREE.Box2();
		},
		init: function(inst, props, pagesize, offset) {
			inst.min = props[offset+pagesize*0];
			inst.max = props[offset+pagesize*1];
		}
	}

	/**
	 * Factory & Initializer of THREE.Box3
	 */
	var factory_THREE_Box3 = {
		props: 2,
		create: function() {
			return new THREE.Box3();
		},
		init: function(inst, props, pagesize, offset) {
			inst.min = props[offset+pagesize*0];
			inst.max = props[offset+pagesize*1];
		}
	}

	/**
	 * Factory & Initializer of THREE.Sphere
	 */
	var factory_THREE_Sphere = {
		props: 2,
		create: function() {
			return new THREE.Sphere();
		},
		init: function(inst, props, pagesize, offset) {
			inst.center = props[offset+pagesize*0];
			inst.radius = props[offset+pagesize*1];
		}
	}

	/**
	 * Factory & Initializer of THREE.Matrix3
	 */
	var factory_THREE_Matrix3 = {
		props: 1,
		create: function() {
			return new THREE.Matrix3();
		},
		init: function(inst, props, pagesize, offset) {
			inst.elements = props[offset+pagesize*0];
		}
	}

	/**
	 * Factory & Initializer of THREE.Matrix4
	 */
	var factory_THREE_Matrix4 = {
		props: 1,
		create: function() {
			return new THREE.Matrix4();
		},
		init: function(inst, props, pagesize, offset) {
			inst.elements = props[offset+pagesize*0];
		}
	}

	/**
	 * Factory & Initializer of THREE.BufferAttribute
	 */
	var factory_THREE_BufferAttribute = {
		props: 4,
		create: function() {
			return new THREE.BufferAttribute();
		},
		init: function(inst, props, pagesize, offset) {
			inst.array = props[offset+pagesize*0];
			inst.itemSize = props[offset+pagesize*1];
			inst.dynamic = props[offset+pagesize*2];
			inst.updateRange = props[offset+pagesize*3];
		}
	}

	/**
	 * Factory & Initializer of THREE.AnimationClip
	 */
	var factory_THREE_AnimationClip = {
		props: 3,
		create: function() {
			return Object.create(THREE.AnimationClip.prototype);
		},
		init: function(inst, props, pagesize, offset) {
			THREE.AnimationClip.call(inst,
				props[offset+pagesize*0],
				props[offset+pagesize*1],
				props[offset+pagesize*2]);
		}
	}

	/**
	 * Factory & Initializer of THREE.VectorKeyframeTrack
	 */
	var factory_THREE_VectorKeyframeTrack = {
		props: 2,
		create: function() {
			return Object.create(THREE.VectorKeyframeTrack.prototype);
		},
		init: function(inst, props, pagesize, offset) {
			THREE.VectorKeyframeTrack.call(inst,
				props[offset+pagesize*0],
				props[offset+pagesize*1]);
		}
	}

	/**
	 * Factory & Initializer of THREE.QuaternionKeyframeTrack
	 */
	var factory_THREE_QuaternionKeyframeTrack = {
		props: 2,
		create: function() {
			return Object.create(THREE.QuaternionKeyframeTrack.prototype);
		},
		init: function(inst, props, pagesize, offset) {
			THREE.QuaternionKeyframeTrack.call(inst,
				props[offset+pagesize*0],
				props[offset+pagesize*1]);
		}
	}

	/**
	 * Factory & Initializer of THREE.NumberKeyframeTrack
	 */
	var factory_THREE_NumberKeyframeTrack = {
		props: 2,
		create: function() {
			return Object.create(THREE.NumberKeyframeTrack.prototype);
		},
		init: function(inst, props, pagesize, offset) {
			THREE.NumberKeyframeTrack.call(inst,
				props[offset+pagesize*0],
				props[offset+pagesize*1]);
		}
	}

	/**
	 * Factory & Initializer of THREE.BooleanKeyframeTrack
	 */
	var factory_THREE_BooleanKeyframeTrack = {
		props: 2,
		create: function() {
			return Object.create(THREE.BooleanKeyframeTrack.prototype);
		},
		init: function(inst, props, pagesize, offset) {
			THREE.BooleanKeyframeTrack.call(inst,
				props[offset+pagesize*0],
				props[offset+pagesize*1]);
		}
	}

	/**
	 * Factory & Initializer of THREE.StringKeyframeTrack
	 */
	var factory_THREE_StringKeyframeTrack = {
		props: 2,
		create: function() {
			return Object.create(THREE.StringKeyframeTrack.prototype);
		},
		init: function(inst, props, pagesize, offset) {
			THREE.StringKeyframeTrack.call(inst,
				props[offset+pagesize*0],
				props[offset+pagesize*1]);
		}
	}

	/**
	 * Factory & Initializer of THREE.Fog
	 */
	var factory_THREE_Fog = {
		props: 3,
		create: function() {
			return new THREE.Fog();
		},
		init: function(inst, props, pagesize, offset) {
			inst.color = props[offset+pagesize*0];
			inst.near = props[offset+pagesize*1];
			inst.far = props[offset+pagesize*2];
		}
	}

	/**
	 * Factory & Initializer of THREE.FogExp2
	 */
	var factory_THREE_FogExp2 = {
		props: 2,
		create: function() {
			return new THREE.FogExp2();
		},
		init: function(inst, props, pagesize, offset) {
			inst.color = props[offset+pagesize*0];
			inst.density = props[offset+pagesize*1];
		}
	}

	/**
	 * Factory & Initializer of THREE.MultiMaterial
	 */
	var factory_THREE_MultiMaterial = {
		props: 2,
		create: function() {
			return new THREE.MultiMaterial();
		},
		init: function(inst, props, pagesize, offset) {
			inst.materials = props[offset+pagesize*0];
			inst.visible = props[offset+pagesize*1];
		}
	}

	/**
	 * Factory & Initializer of THREE.PerspectiveCamera
	 */
	var factory_THREE_PerspectiveCamera = {
		props: 4,
		create: function() {
			return new THREE.PerspectiveCamera();
		},
		init: function(inst, props, pagesize, offset) {
			inst.fov = props[offset+pagesize*0];
			inst.aspect = props[offset+pagesize*1];
			inst.near = props[offset+pagesize*2];
			inst.far = props[offset+pagesize*3];

			// Custom init function
			inst.updateProjectionMatrix();
			
				}
	}

	/**
	 * Factory & Initializer of THREE.OrthographicCamera
	 */
	var factory_THREE_OrthographicCamera = {
		props: 6,
		create: function() {
			return new THREE.OrthographicCamera();
		},
		init: function(inst, props, pagesize, offset) {
			inst.left = props[offset+pagesize*0];
			inst.right = props[offset+pagesize*1];
			inst.top = props[offset+pagesize*2];
			inst.bottom = props[offset+pagesize*3];
			inst.near = props[offset+pagesize*4];
			inst.far = props[offset+pagesize*5];

			// Custom init function
			inst.updateProjectionMatrix();
			
				}
	}

	/**
	 * Factory & Initializer of THREE.CubeCamera
	 */
	var factory_THREE_CubeCamera = {
		props: 3,
		create: function() {
			return Object.create(THREE.CubeCamera.prototype);
		},
		init: function(inst, props, pagesize, offset) {
			THREE.CubeCamera.call(inst,
				props[offset+pagesize*0],
				props[offset+pagesize*1],
				props[offset+pagesize*2]);
		}
	}

	/**
	 * Factory & Initializer of THREE.MD2Character
	 */
	var factory_THREE_MD2Character = {
		props: 9,
		create: function() {
			return new THREE.MD2Character();
		},
		init: function(inst, props, pagesize, offset) {
			inst.scale = props[offset+pagesize*0];
			inst.animationFPS = props[offset+pagesize*1];
			inst.root = props[offset+pagesize*2];
			inst.meshBody = props[offset+pagesize*3];
			inst.skinsBody = props[offset+pagesize*4];
			inst.meshWeapon = props[offset+pagesize*5];
			inst.skinsWeapon = props[offset+pagesize*6];
			inst.weapons = props[offset+pagesize*7];
			inst.activeAnimation = props[offset+pagesize*8];

			// Custom init function
			inst.mixer = new THREE.AnimationMixer( inst.meshBody );
			
				}
	}

	module.exports = {
		id: 17,
		size: 67,
		frequent: 19,
		decode: function( id ) {
				if (id < 32) {
					if (id < 10) {
						if (id < 5) {
							if (id < 3) {
								switch (id) {
									case 0: return factory_THREE_Vector2;
									case 1: return factory_THREE_Vector3;
									case 2: return factory_THREE_Vector4;
								}
							} else {
								switch (id) {
									case 3: return factory_THREE_Face3;
									case 4: return factory_THREE_Color;
								}
							}
						} else {
							if (id < 8) {
								switch (id) {
									case 5: return factory_THREE_Quaternion;
									case 6: return factory_THREE_Euler;
									case 7: return factory_THREE_Box2;
								}
							} else {
								switch (id) {
									case 8: return factory_THREE_Box3;
									case 9: return factory_THREE_Sphere;
								}
							}
						}
					} else {
						if (id < 15) {
							if (id < 13) {
								switch (id) {
									case 10: return factory_THREE_Matrix3;
									case 11: return factory_THREE_Matrix4;
									case 12: return factory_THREE_BufferAttribute;
								}
							} else {
								switch (id) {
									case 13: return factory_THREE_AnimationClip;
									case 14: return factory_THREE_VectorKeyframeTrack;
								}
							}
						} else {
							if (id < 17) {
								switch (id) {
									case 15: return factory_THREE_QuaternionKeyframeTrack;
									case 16: return factory_THREE_NumberKeyframeTrack;
								}
							} else {
								switch (id) {
									case 17: return factory_THREE_BooleanKeyframeTrack;
									case 18: return factory_THREE_StringKeyframeTrack;
								}
							}
						}
					}
				} else {
					if (id < 56) {
						if (id < 44) {
							if (id < 38) {
								switch (id) {
									case 32: return factory_THREE_CubeTexture;
									case 33: return factory_THREE_CompressedTexture;
									case 34: return factory_THREE_Texture;
									case 35: return factory_THREE_LineBasicMaterial;
									case 36: return factory_THREE_SpriteMaterial;
									case 37: return factory_THREE_PointsMaterial;
								}
							} else {
								switch (id) {
									case 38: return factory_THREE_MeshNormalMaterial;
									case 39: return factory_THREE_MeshDepthMaterial;
									case 40: return factory_THREE_MeshLambertMaterial;
									case 41: return factory_THREE_MeshPhongMaterial;
									case 42: return factory_THREE_MeshBasicMaterial;
									case 43: return factory_THREE_Material;
								}
							}
						} else {
							if (id < 50) {
								switch (id) {
									case 44: return factory_THREE_Scene;
									case 45: return factory_THREE_SpotLight;
									case 46: return factory_THREE_PointLight;
									case 47: return factory_THREE_HemisphereLight;
									case 48: return factory_THREE_DirectionalLight;
									case 49: return factory_THREE_AmbientLight;
								}
							} else {
								switch (id) {
									case 50: return factory_THREE_Mesh;
									case 51: return factory_THREE_Object3D;
									case 52: return factory_THREE_BufferGeometry;
									case 53: return factory_THREE_TubeGeometry;
									case 54: return factory_THREE_TorusKnotGeometry;
									case 55: return factory_THREE_TorusGeometry;
								}
							}
						}
					} else {
						if (id < 68) {
							if (id < 62) {
								switch (id) {
									case 56: return factory_THREE_TetrahedronGeometry;
									case 57: return factory_THREE_SphereGeometry;
									case 58: return factory_THREE_SphereBufferGeometry;
									case 59: return factory_THREE_RingGeometry;
									case 60: return factory_THREE_PolyhedronGeometry;
									case 61: return factory_THREE_PlaneGeometry;
								}
							} else {
								switch (id) {
									case 62: return factory_THREE_PlaneBufferGeometry;
									case 63: return factory_THREE_ParametricGeometry;
									case 64: return factory_THREE_OctahedronGeometry;
									case 65: return factory_THREE_LatheGeometry;
									case 66: return factory_THREE_IcosahedronGeometry;
									case 67: return factory_THREE_DodecahedronGeometry;
								}
							}
						} else {
							if (id < 74) {
								switch (id) {
									case 68: return factory_THREE_CylinderGeometry;
									case 69: return factory_THREE_CircleGeometry;
									case 70: return factory_THREE_CircleBufferGeometry;
									case 71: return factory_THREE_BoxGeometry;
									case 72: return factory_THREE_Geometry;
									case 73: return factory_THREE_Fog;
								}
							} else {
								switch (id) {
									case 74: return factory_THREE_FogExp2;
									case 75: return factory_THREE_MultiMaterial;
									case 76: return factory_THREE_PerspectiveCamera;
									case 77: return factory_THREE_OrthographicCamera;
									case 78: return factory_THREE_CubeCamera;
									case 79: return factory_THREE_MD2Character;
								}
							}
						}
					}
				}
			}
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = THREE;

/***/ },
/* 2 */
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


/***/ }
/******/ ]);