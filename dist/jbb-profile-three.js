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

	var THREE = __webpack_require__(1);
	var MD2Character = __webpack_require__(2);

	/**
	 * Prefix and revision of the objects table
	 */
	var ID_VERSION  = 0x0001,
		ID_REVISION = 0x0;

	/**
	 * Factories for different entity types
	 * 
	 * These functions must return a new instance of the specified class
	 * type with the default values populated.
	 */
	var FACTORY = {

		/**
		 * Default factory
		 */
		'Default': function(ClassName) {
			return new ClassName();
		},

		/**
		 * Create an object without using new constructor
		 */
		'Unconstructed': function(ClassName) {
			return Object.create(ClassName.prototype);
		},

	}

	/**
	 * Initializers of different class types
	 * 
	 * These functions must initialize the specified instance,
	 * by applying the propeties to the appropriate values, according
	 * to the individual class format.
	 */
	var INIT = {

		/**
		 * Default Initializer
		 */
		'Default': function( instance, properties, values ) {
			for (var i=0; i<properties.length; i++) {
				instance[properties[i]] = values[i];
			}
		},

		/**
		 * Update 'parent' property of each Object3D
		 */
		'Object3D': function( instance, properties, values ) {
			for (var i=0; i<properties.length; i++) {
				var n = properties[i];
				switch (n) {
					case 'position':
					case 'rotation':
					case 'quaternion':
					case 'scale':
						instance[n].copy( values[i] );
						break;

					default: 
						instance[n] = values[i];
						break;
				}
			}
			for (var i=0; i<instance.children.length; i++) {
				instance.children[i].parent = instance;
			}
		},

		/**
		 * Recalculate morph target
		 */
		'Mesh': function( instance, properties, values ) {
			INIT.Object3D( instance, properties, values );
			instance.updateMorphTargets();
		},

		/**
		 * Textures needs update
		 */
		'Texture': function(instance, properties, values ) {
			INIT.Default(instance, properties, values);
			if (instance.image) {
				instance.image.onload = function() {
					instance.needsUpdate = true;
				}
			}
		},

		/**
		 * Call animation clip constructor
		 */
		'AnimationClip': function(instance, properties, values ) {
			INIT.Default(instance, properties, values);
			instance.constructor.call(
					instance, instance.name,
						 	  instance.duration,
						 	  instance.tracks
				);
		},

		/**
		 * Call keyframe constructor
		 */
		'KeyframeTrack': function(instance, properties, values ) {
			INIT.Default(instance, properties, values);
			instance.constructor.call(
					instance, instance.name,
							  instance.keys
				);
		},

		/**
		 * Constructor with width/height/depth
		 */
		'WidthHeightDepth': function( instance, properties, values ) {
			INIT.Default(instance, properties, values);
			instance.constructor.call(
					instance, instance.parameters.width,
							  instance.parameters.height,
							  instance.parameters.depth,
							  instance.parameters.widthSegments,
							  instance.parameters.heightSegments,
							  instance.parameters.depthSegments
				);
		},

		/**
		 * Constructor with width/height
		 */
		'WidthHeight': function( instance, properties, values ) {
			INIT.Default(instance, properties, values);
			instance.constructor.call(
					instance, instance.parameters.width,
							  instance.parameters.height,
							  instance.parameters.widthSegments,
							  instance.parameters.heightSegments
				);
		},

		/**
		 * Radius segments theta
		 */
		'RadiusSegmentsTheta': function( instance, properties, values ) {
			INIT.Default(instance, properties, values);
			instance.constructor.call(
					instance, instance.parameters.radius,
							  instance.parameters.segments,
							  instance.parameters.thetaStart,
							  instance.parameters.thetaLength
				);
		},

		/**
		 * Radius segments theta
		 */
		'CylinderGeometry': function( instance, properties, values ) {
			INIT.Default(instance, properties, values);
			instance.constructor.call(
					instance, instance.parameters.radiusTop,
							  instance.parameters.radiusBottom,
							  instance.parameters.height,
							  instance.parameters.radialSegments,
							  instance.parameters.heightSegments,
							  instance.parameters.openEnded,
							  instance.parameters.thetaStart,
							  instance.parameters.thetaLength
				);
		},

		/**
		 * Radius/Detail
		 */
		'RadiusDetail': function( instance, properties, values ) {
			INIT.Default(instance, properties, values);
			instance.constructor.call(
					instance, instance.parameters.radius,
							  instance.parameters.detail
				);
		},

		/**
		 * Lathe Geometry
		 */
		'LatheGeometry': function( instance, properties, values ) {
			INIT.Default(instance, properties, values);
			instance.constructor.call(
					instance, instance.parameters.points,
							  instance.parameters.segments,
							  instance.parameters.phiStart,
							  instance.parameters.phiLength
				);
		},

		/**
		 * Lathe Geometry
		 */
		'SphereGeometry': function( instance, properties, values ) {
			INIT.Default(instance, properties, values);
			instance.constructor.call(
					instance, instance.parameters.radius,
							  instance.parameters.widthSegments,
							  instance.parameters.heightSegments,
							  instance.parameters.phiStart,
							  instance.parameters.phiLength,
							  instance.parameters.thetaStart,
							  instance.parameters.thetaLength
				);
		},

		/**
		 * Polyhedron Geometry
		 */
		'PolyhedronGeometry': function( instance, properties, values ) {
			INIT.Default(instance, properties, values);
			instance.constructor.call(
					instance, instance.parameters.vertices,
							  instance.parameters.indices,
							  instance.parameters.radius,
							  instance.parameters.detail
				);
		},

		/**
		 * Rihg Geometry
		 */
		'RingGeometry': function( instance, properties, values ) {
			INIT.Default(instance, properties, values);
			instance.constructor.call(
					instance, instance.parameters.innerRadius,
							  instance.parameters.outerRadius,
							  instance.parameters.thetaSegments,
							  instance.parameters.phiSegments,
							  instance.parameters.thetaStart,
							  instance.parameters.thetaLength
				);
		},

		/**
		 * Torus Geometry
		 */
		'TorusGeometry': function( instance, properties, values ) {
			INIT.Default(instance, properties, values);
			instance.constructor.call(
					instance, instance.parameters.radius,
							  instance.parameters.tube,
							  instance.parameters.radialSegments,
							  instance.parameters.tubularSegments,
							  instance.parameters.arc
				);
		},

		/**
		 * Torus Knot Geometry
		 */
		'TorusKnot': function( instance, properties, values ) {
			INIT.Default(instance, properties, values);
			instance.constructor.call(
					instance, instance.parameters.radius,
							  instance.parameters.tube,
							  instance.parameters.radialSegments,
							  instance.parameters.tubularSegments,
							  instance.parameters.p,
							  instance.parameters.q,
							  instance.parameters.heightScale
				);
		},

		/**
		 * Tube Geometry
		 */
		'TubeGeometry': function( instance, properties, values ) {
			INIT.Default(instance, properties, values);
			instance.constructor.call(
					instance, instance.parameters.path,
							  instance.parameters.segments,
							  instance.parameters.radius,
							  instance.parameters.radialSegments,
							  instance.parameters.closed,
							  instance.parameters.taper
				);
		},

		/**
		 * Cameras need to update projection matrix
		 */
		'Camera': function( instance, properties, values ) {
			INIT.Default(instance, properties, values);
			instance.updateProjectionMatrix();
		},

		/**
		 * CubeCamera needs a custom constructor
		 */
		'CubeCamera': function( instance, properties, values ) {
			INIT.Default(instance, properties, values);
			instance.constructor.call(
					instance, instance.near,
							  instance.far,
							  instance.cubeResolution
				);
		},

		/**
		 * MD2Character requires initialization of the mixer
		 */
		'MD2Character': function( instance, properties, values ) {
			INIT.Default( instance, properties, values );
			instance.mixer = new THREE.AnimationMixer( instance.mesh );
		}

	};

	/**
	 * Compactable entities
	 *
	 * The first 16 entities occupy 1 byte less, therefore for optimisation
	 * purposes try to move the most frequently used entities to the top.
	 */
	var ENTITIES = [

		[THREE.Vector2, 								FACTORY.Default, 				INIT.Default ],
		[THREE.Vector3, 								FACTORY.Default, 				INIT.Default ],
		[THREE.Vector4, 								FACTORY.Default, 				INIT.Default ],
		[THREE.Face3, 									FACTORY.Default, 				INIT.Default ],
		[THREE.Color, 									FACTORY.Default, 				INIT.Default ],
		[THREE.Quaternion,								FACTORY.Default, 				INIT.Default ],
		[THREE.Euler,									FACTORY.Default, 				INIT.Default ],
		[THREE.Box2,									FACTORY.Default, 				INIT.Default ],
		[THREE.Box3,									FACTORY.Default, 				INIT.Default ],
		[THREE.Sphere, 									FACTORY.Default, 				INIT.Default ],
		[THREE.Matrix3, 								FACTORY.Default, 				INIT.Default ],
		[THREE.Matrix4, 								FACTORY.Default, 				INIT.Default ],
		[THREE.BufferAttribute, 						FACTORY.Default, 				INIT.Default ],
		[], // Reserved
		[], // Reserved
		[], // Reserved

		[THREE.AnimationClip, 							FACTORY.Unconstructed,			INIT.AnimationClip ],
		[THREE.VectorKeyframeTrack, 					FACTORY.Unconstructed,			INIT.KeyframeTrack ],
		[THREE.QuaternionKeyframeTrack, 				FACTORY.Unconstructed,			INIT.KeyframeTrack ],
		[THREE.NumberKeyframeTrack, 					FACTORY.Unconstructed,			INIT.KeyframeTrack ],
		[THREE.BooleanKeyframeTrack, 					FACTORY.Unconstructed,			INIT.KeyframeTrack ],
		[THREE.StringKeyframeTrack, 					FACTORY.Unconstructed,			INIT.KeyframeTrack ],

		[THREE.BoxGeometry, 							FACTORY.Unconstructed,			INIT.WidthHeightDepth ],
		[THREE.CircleBufferGeometry, 					FACTORY.Unconstructed,			INIT.RadiusSegmentsTheta ],
		[THREE.CircleGeometry, 							FACTORY.Unconstructed,			INIT.RadiusSegmentsTheta ],
		[THREE.CylinderGeometry, 						FACTORY.Unconstructed,			INIT.CylinderGeometry ],
		[THREE.DodecahedronGeometry, 					FACTORY.Unconstructed,			INIT.RadiusDetail ],
		[THREE.IcosahedronGeometry, 					FACTORY.Unconstructed,			INIT.RadiusDetail ],
		[THREE.LatheGeometry, 							FACTORY.Unconstructed,			INIT.LatheGeometry ],
		[THREE.OctahedronGeometry, 						FACTORY.Unconstructed,			INIT.RadiusDetail ],
		[THREE.ParametricGeometry, 						FACTORY.Unconstructed,			INIT.WidthHeight ],
		[THREE.PlaneBufferGeometry, 					FACTORY.Unconstructed,			INIT.WidthHeightDepth ],
		[THREE.PlaneGeometry, 							FACTORY.Unconstructed,			INIT.WidthHeightDepth ],
		[THREE.PolyhedronGeometry, 						FACTORY.Unconstructed,			INIT.PolyhedronGeometry ],
		[THREE.RingGeometry, 							FACTORY.Unconstructed,			INIT.RingGeometry ],
		[THREE.SphereBufferGeometry, 					FACTORY.Unconstructed,			INIT.SphereGeometry ],
		[THREE.SphereGeometry, 							FACTORY.Unconstructed,			INIT.SphereGeometry ],
		[THREE.TetrahedronGeometry, 					FACTORY.Unconstructed,			INIT.RadiusDetail ],
		[THREE.TorusGeometry, 							FACTORY.Unconstructed,			INIT.TorusGeometry ],
		[THREE.TorusKnotGeometry, 						FACTORY.Unconstructed,			INIT.TorusKnot ],
		[THREE.TubeGeometry, 							FACTORY.Unconstructed,			INIT.TubeGeometry ],

		[THREE.BufferGeometry, 							FACTORY.Default, 				INIT.Default ],
		[THREE.Geometry, 								FACTORY.Default, 				INIT.Default ],

		[THREE.Mesh, 									FACTORY.Default, 				INIT.Mesh ],
		[THREE.AmbientLight,							FACTORY.Default,				INIT.Default ],
		[THREE.DirectionalLight,						FACTORY.Default,				INIT.Default ],
		[THREE.HemisphereLight,							FACTORY.Default,				INIT.Default ],
		[THREE.PointLight,								FACTORY.Default,				INIT.Default ],
		[THREE.SpotLight,								FACTORY.Default,				INIT.Default ],
		[THREE.Scene,									FACTORY.Default,				INIT.Object3D ],
		[THREE.Object3D, 								FACTORY.Default, 				INIT.Object3D ],

		[THREE.Fog, 									FACTORY.Default, 				INIT.Object3D ],
		[THREE.FogExp2, 								FACTORY.Default, 				INIT.Object3D ],

		[THREE.MeshBasicMaterial, 						FACTORY.Default, 				INIT.Default ],
		[THREE.MeshPhongMaterial, 						FACTORY.Default, 				INIT.Default ],
		[THREE.MeshLambertMaterial, 					FACTORY.Default, 				INIT.Default ],
		[THREE.MeshDepthMaterial, 						FACTORY.Default, 				INIT.Default ],
		[THREE.MeshNormalMaterial, 						FACTORY.Default, 				INIT.Default ],
		[THREE.MultiMaterial, 							FACTORY.Default,				INIT.Default ],
		[THREE.PointsMaterial, 							FACTORY.Default,				INIT.Default ],
		[THREE.SpriteMaterial, 							FACTORY.Default,				INIT.Default ],
		[THREE.LineBasicMaterial, 						FACTORY.Default,				INIT.Default ],
		[THREE.Material, 								FACTORY.Default, 				INIT.Default ],

		[THREE.PerspectiveCamera,						FACTORY.Default,				INIT.Camera],
		[THREE.OrthographicCamera,						FACTORY.Default,				INIT.Camera],
		[THREE.CubeCamera,								FACTORY.Unconstructed,			INIT.CubeCamera],

		[THREE.CompressedTexture, 						FACTORY.Default, 				INIT.Texture ],
		[THREE.CubeTexture, 							FACTORY.Default, 				INIT.Texture ],
		[THREE.Texture, 								FACTORY.Default, 				INIT.Texture ],

		// Special types

		[THREE.MD2Character, 							FACTORY.Default, 				INIT.MD2Character ],

	];

	/**
	 * Reusable property sets
	 *
	 * Hint: Consequent numbers can be further optimised, so try to move
	 * numerical properties close to eachother.
	 *
	 */
	var PROPERTYSET = {

		// Object3D is a superclass of Mesh
		Object3D	: [
			'name', 'up', 'position', 'quaternion', 'scale', 'rotationAutoUpdate',
			'matrix', 'matrixWorld', 'matrixAutoUpdate', 'matrixWorldNeedsUpdate',
			'visible', 'castShadow', 'receiveShadow', 'frustumCulled', 'renderOrder',
			'userData', 'children'
		],

		// Key frame track
		KeyframeTrack: [
			'name', 'keys', 'lastIndex', 'result'
		],

		// Material is superclass of many materials
		Material : [
			'side', 'opacity', 'blending', 'blendSrc', 'blendDst', 'blendEquation', 'depthFunc',
			'polygonOffsetFactor', 'polygonOffsetUnits', 'alphaTest', 'overdraw', 'name',
			'transparent', 'depthTest', 'depthWrite', 'colorWrite', 'polygonOffset', 'visible'
		],

		// Texture
		Texture: [ 
			'mipmaps', 'flipY', 'mapping', 'wrapS', 'wrapT', 'magFilter', 'minFilter',
			'anisotropy', 'format', 'type', 'offset', 'repeat', 'unpackAlignment'
		],

	};

	/**
	 * Property index for every entity type
	 *
	 * HINT: For optimal compression, bulk as many as possible numerical parameters close
	 *       to each other. Continous numbers are be easily optimised.
	 */
	var PROPERTIES = [

		// THREE.Vector2
		[ 'x', 'y' ],
		// THREE.Vector3
		[ 'x', 'y', 'z' ],
		// THREE.Vector4
		[ 'x', 'y', 'z', 'w' ],
		// THREE.Face3
		[ 'a', 'b', 'c', 'materialIndex', 'normal', 'color', 'vertexNormals', 'vertexColors' ],
		// THREE.Color
		[ 'r', 'g', 'b' ],
		// THREE.Quaternion
		[ '_x', '_y', '_z', '_w' ],
		// THREE.Euler
		[ '_x', '_y', '_z', '_order' ],
		// THREE.Box2
		[ 'min', 'max' ],
		// THREE.Box3
		[ 'min', 'max' ],
		// THREE.Sphere
		[ 'center', 'radius' ],
		// THREE.Matrix3
		[ 'elements' ],
		// THREE.Matrix4
		[ 'elements' ],
		// THREE.BufferAttribute
		[ 'array', 'itemSize', 'dynamic', 'updateRange' ],
		// Reserved
		[],
		// Reserved
		[],
		// Reserved
		[],

		// THREE.AnimationClip
		[ 'name', 'duration', 'tracks', 'results' ],
		// THREE.VectorKeyframeTrack
		PROPERTYSET.KeyframeTrack,
		// THREE.QuaternionKeyframeTrack
		PROPERTYSET.KeyframeTrack,
		// THREE.NumberKeyframeTrack
		PROPERTYSET.KeyframeTrack,
		// THREE.BooleanKeyframeTrack
		PROPERTYSET.KeyframeTrack,
		// THREE.StringKeyframeTrack
		PROPERTYSET.KeyframeTrack,

		// THREE.BoxGeometry
		[ 'parameters' ],
		// THREE.CircleBufferGeometry
		[ 'parameters' ],
		// THREE.CircleGeometry
		[ 'parameters' ],
		// THREE.CylinderGeometry
		[ 'parameters' ],
		// THREE.DodecahedronGeometry
		[ 'parameters' ],
		// THREE.IcosahedronGeometry
		[ 'parameters' ],
		// THREE.LatheGeometry
		[ 'parameters' ],
		// THREE.OctahedronGeometry
		[ 'parameters' ],
		// THREE.ParametricGeometry
		[ 'parameters' ],
		// THREE.PlaneBufferGeometry
		[ 'parameters' ],
		// THREE.PlaneGeometry
		[ 'parameters' ],
		// THREE.PolyhedronGeometry
		[ 'parameters' ],
		// THREE.RingGeometry
		[ 'parameters' ],
		// THREE.SphereBufferGeometry
		[ 'parameters' ],
		// THREE.SphereGeometry
		[ 'parameters' ],
		// THREE.TetrahedronGeometry
		[ 'parameters' ],
		// THREE.TorusGeometry
		[ 'parameters' ],
		// THREE.TorusKnotGeometry
		[ 'parameters' ],
		// THREE.TubeGeometry
		[ 'parameters' ],

		// THREE.BufferGeometry
		[ 'attributes', 'index' ],
		// THREE.Geometry
		[ 'vertices', 'faces', 'faceVertexUvs', 'morphTargets', 'morphNormals', 'morphColors', 'animations', 'boundingSphere' ],

		// THREE.Mesh
		PROPERTYSET.Object3D.concat([
			'geometry', 'material', 'materialTexture', 'materialWireframe'
		]),
		// THREE.AmbientLight
		PROPERTYSET.Object3D.concat([
			'color'
		]),
		// THREE.DirectionalLight
		PROPERTYSET.Object3D.concat([
			'color', 'intensity'
		]),
		// THREE.HemisphereLight
		PROPERTYSET.Object3D.concat([
			'color', 'groundColor', 'intensity'
		]),
		// THREE.PointLight
		PROPERTYSET.Object3D.concat([
			'color', 'intensity', 'distance', 'decay'
		]),
		// THREE.SpotLight
		PROPERTYSET.Object3D.concat([
			'color', 'intensity', 'distance', 'decay', 'angle', 'exponent'
		]),
		// THREE.Scene
		PROPERTYSET.Object3D.concat([
			'fog', 'overrideMaterial'
		]),
		// THREE.Object3D
		PROPERTYSET.Object3D,

		// THREE.Fog
		[ 'color', 'near', 'far' ],
		// THREE.FogExp2
		[ 'color', 'density' ],

		// THREE.MeshBasicMaterial
		PROPERTYSET.Material.concat([
			'color', 'map', 'aoMap', 'aoMapIntensity', 'specularMap', 'alphaMap', 'envMap',
			'combine', 'reflectivity', 'refractionRatio', 'fog', 'shading', 'wireframe',
			'wireframeLinewidth', 'wireframeLinecap', 'wireframeLinejoin',
			'vertexColors', 'skinning', 'morphTargets'
		]),
		// THREE.MeshPhongMaterial
		PROPERTYSET.Material.concat([
			'color', 'emissive', 'specular', 'shininess', 
			'metal', 'map', 'lightMap', 'lightMapIntensity',
			'aoMap', 'aoMapIntensity', 'emissiveMap', 
			'bumpMap', 'bumpScale', 'normalMap', 'normalScale',
			'displacementMap', 'displacementScale', 'displacementBias',
			'specularMap', 'alphaMap', 'envMap', 'combine', 'reflectivity',
			'refractionRatio', 'fog', 'shading', 
			'wireframe', 'wireframeLinewidth', 'vertexColors',
			'skinning', 'morphTargets', 'morphNormals'
		]),
		// THREE.MeshLambertMaterial
		PROPERTYSET.Material.concat([
			'color', 'emissive', 'map', 'specularMap', 'alphaMap', 'envMap', 
			'combine', 'reflectivity', 'fog', 
			'wireframe', 'wireframeLinewidth', 'vertexColors',
			'skinning', 'morphTargets', 'morphNormals'
		]),
		// THREE.MeshDepthMaterial
		[
			'opacity', 'blending', 'depthTest', 'depthWrite', 'wireframe', 'wireframeLinewidth'
		],
		// THREE.MeshNormalMaterial
		[
			'opacity', 'blending', 'depthTest', 'depthWrite', 'wireframe', 'wireframeLinewidth'
		],
		// THREE.MultiMaterial
		[
			'materials', 'visible',
		],
		// THREE.PointsMaterial
		[
			'color', 'opacity', 'map', 'side', 'sizeAttenuation', 'blending', 'depthTest', 'depthWrite', 'vertexColors', 'fog'
		],
		// THREE.SpriteMaterial
		[
			'color', 'opacity', 'map', 'blending', 'depthTest', 'depthWrite', 'uvOffset', 'uvScale', 'fog'
		],
		// THREE.LineBasicMaterial
		[
			'color', 'opacity', 'blending', 'depthTest', 'depthWrite', 'linewidth', 'linecap', 'linejoin', 'vertexColors', 'fog'
		],
		// THREE.Material
		PROPERTYSET.Material,

		// THREE.PerspectiveCamera
		[
			'fov', 'aspect', 'near', 'far'
		],
		// THREE.OrthographicCamera
		[
			'left', 'right', 'top', 'bottom', 'near', 'far'
		],
		// THREE.CubeCamera
		[
			'near', 'far', 'cubeResolution'
		],

		// THREE.CompressedTexture
		PROPERTYSET.Texture.concat([
			'image'
		]),
		// THREE.CubeTexture,
		PROPERTYSET.Texture.concat([
			'images'
		]),
		// THREE.Texture
		PROPERTYSET.Texture.concat([
			'image'
		]),

		// THREE.MD2Character
		[
			'scale', 'animationFPS', 'root', 'meshBody', 'skinsBody', 'meshWeapon', 'skinsWeapon', 'weapons', 
			'activeAnimation'
		]

	];

	/**
	 * Export object table
	 */
	module.exports = {
		'ID' 		: (ID_VERSION << 2) | ID_REVISION,
		'ENTITIES' 	: ENTITIES,
		'PROPERTIES': PROPERTIES,
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


					// the animation system requires unique names, so append the
					// uuid of the source geometry:

					var geometry = mesh.geometry,
						animations = geometry.animations;

					for ( var i = 0, n = animations.length; i !== n; ++ i ) {

						var animation = animations[ i ];
						animation.name += geometry.uuid;

					}


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
					this.meshBody.activeAction.stop();
					this.meshBody.activeAction = null;
				}

				var clip = THREE.AnimationClip.findByName( this.meshBody.geometry.animations, clipName );
				if( clip ) {

					this.meshBody.activeAction =
							this.mixer.clipAction( clip, this.meshBody ).play();

				}

			}

			scope.activeClipName = clipName;

			scope.syncWeaponAnimation();

		};

		this.syncWeaponAnimation = function() {

			var clipName = scope.activeClipName;

			if ( scope.meshWeapon ) {

				if( this.meshWeapon.activeAction ) {
					this.meshWeapon.activeAction.stop();
					this.meshWeapon.activeAction = null;
				}

				var geometry = this.meshWeapon.geometry,
					animations = geometry.animations;

				var clip = THREE.AnimationClip.findByName( animations, clipName + geometry.uuid );
				if( clip ) {

					this.meshWeapon.activeAction =
							this.mixer.clipAction( clip, this.meshWeapon ).
								syncWith( this.meshBody.activeAction ).play();

				}

			}

		}

		this.update = function ( delta ) {

			if( this.mixer ) this.mixer.update( delta );

		};

		function loadTextures( baseUrl, textureUrls ) {

			var textureLoader = new THREE.TextureLoader();
			var textures = [];

			for ( var i = 0; i < textureUrls.length; i ++ ) {

				textures[ i ] = textureLoader.load( baseUrl + textureUrls[ i ], checkLoadingComplete );
				textures[ i ].mapping = THREE.UVMapping;
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