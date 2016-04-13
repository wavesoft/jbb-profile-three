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

var THREE = require('three');
var MD2Character = require('./lib/helpers/MD2Character');

/**
 * Factory & Initializer of THREE.CubeTexture
 */
var factory_THREE_CubeTexture = {
	props: 15,
	create: function() {
		return new THREE.CubeTexture();
	},
	init: function(inst, props) {
		inst.name = props[0];
		inst.mipmaps = props[1];
		inst.flipY = props[2];
		inst.mapping = props[3];
		inst.wrapS = props[4];
		inst.wrapT = props[5];
		inst.magFilter = props[6];
		inst.minFilter = props[7];
		inst.anisotropy = props[8];
		inst.format = props[9];
		inst.type = props[10];
		inst.offset = props[11];
		inst.repeat = props[12];
		inst.unpackAlignment = props[13];
		inst.image = props[14];

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
	init: function(inst, props) {
		inst.name = props[0];
		inst.mipmaps = props[1];
		inst.flipY = props[2];
		inst.mapping = props[3];
		inst.wrapS = props[4];
		inst.wrapT = props[5];
		inst.magFilter = props[6];
		inst.minFilter = props[7];
		inst.anisotropy = props[8];
		inst.format = props[9];
		inst.type = props[10];
		inst.offset = props[11];
		inst.repeat = props[12];
		inst.unpackAlignment = props[13];
		inst.image = props[14];

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
	init: function(inst, props) {
		inst.name = props[0];
		inst.mipmaps = props[1];
		inst.flipY = props[2];
		inst.mapping = props[3];
		inst.wrapS = props[4];
		inst.wrapT = props[5];
		inst.magFilter = props[6];
		inst.minFilter = props[7];
		inst.anisotropy = props[8];
		inst.format = props[9];
		inst.type = props[10];
		inst.offset = props[11];
		inst.repeat = props[12];
		inst.unpackAlignment = props[13];
		inst.image = props[14];

		// Custom init function
		if (inst.image) {
		    inst.image.onload = function() {
		        inst.needsUpdate = true;
		    }
		}
		
			}
}

/**
 * Factory & Initializer of THREE.MeshLambertMaterial
 */
var factory_THREE_MeshLambertMaterial = {
	props: 33,
	create: function() {
		return new THREE.MeshLambertMaterial();
	},
	init: function(inst, props) {
		inst.name = props[0];
		inst.side = props[1];
		inst.opacity = props[2];
		inst.blending = props[3];
		inst.blendSrc = props[4];
		inst.blendDst = props[5];
		inst.blendEquation = props[6];
		inst.depthFunc = props[7];
		inst.polygonOffsetFactor = props[8];
		inst.polygonOffsetUnits = props[9];
		inst.alphaTest = props[10];
		inst.overdraw = props[11];
		inst.transparent = props[12];
		inst.depthTest = props[13];
		inst.depthWrite = props[14];
		inst.colorWrite = props[15];
		inst.polygonOffset = props[16];
		inst.visible = props[17];
		inst.color = props[18];
		inst.emissive = props[19];
		inst.map = props[20];
		inst.specularMap = props[21];
		inst.alphaMap = props[22];
		inst.envMap = props[23];
		inst.combine = props[24];
		inst.reflectivity = props[25];
		inst.fog = props[26];
		inst.wireframe = props[27];
		inst.wireframeLinewidth = props[28];
		inst.vertexColors = props[29];
		inst.skinning = props[30];
		inst.morphTargets = props[31];
		inst.morphNormals = props[32];
	}
}

/**
 * Factory & Initializer of THREE.MeshPhongMaterial
 */
var factory_THREE_MeshPhongMaterial = {
	props: 50,
	create: function() {
		return new THREE.MeshPhongMaterial();
	},
	init: function(inst, props) {
		inst.name = props[0];
		inst.side = props[1];
		inst.opacity = props[2];
		inst.blending = props[3];
		inst.blendSrc = props[4];
		inst.blendDst = props[5];
		inst.blendEquation = props[6];
		inst.depthFunc = props[7];
		inst.polygonOffsetFactor = props[8];
		inst.polygonOffsetUnits = props[9];
		inst.alphaTest = props[10];
		inst.overdraw = props[11];
		inst.transparent = props[12];
		inst.depthTest = props[13];
		inst.depthWrite = props[14];
		inst.colorWrite = props[15];
		inst.polygonOffset = props[16];
		inst.visible = props[17];
		inst.color = props[18];
		inst.emissive = props[19];
		inst.specular = props[20];
		inst.shininess = props[21];
		inst.metal = props[22];
		inst.map = props[23];
		inst.lightMap = props[24];
		inst.lightMapIntensity = props[25];
		inst.aoMap = props[26];
		inst.aoMapIntensity = props[27];
		inst.emissiveMap = props[28];
		inst.bumpMap = props[29];
		inst.bumpScale = props[30];
		inst.normalMap = props[31];
		inst.normalScale = props[32];
		inst.displacementMap = props[33];
		inst.displacementScale = props[34];
		inst.displacementBias = props[35];
		inst.specularMap = props[36];
		inst.alphaMap = props[37];
		inst.envMap = props[38];
		inst.combine = props[39];
		inst.reflectivity = props[40];
		inst.refractionRatio = props[41];
		inst.fog = props[42];
		inst.shading = props[43];
		inst.wireframe = props[44];
		inst.wireframeLinewidth = props[45];
		inst.vertexColors = props[46];
		inst.skinning = props[47];
		inst.morphTargets = props[48];
		inst.morphNormals = props[49];
	}
}

/**
 * Factory & Initializer of THREE.MeshBasicMaterial
 */
var factory_THREE_MeshBasicMaterial = {
	props: 37,
	create: function() {
		return new THREE.MeshBasicMaterial();
	},
	init: function(inst, props) {
		inst.name = props[0];
		inst.side = props[1];
		inst.opacity = props[2];
		inst.blending = props[3];
		inst.blendSrc = props[4];
		inst.blendDst = props[5];
		inst.blendEquation = props[6];
		inst.depthFunc = props[7];
		inst.polygonOffsetFactor = props[8];
		inst.polygonOffsetUnits = props[9];
		inst.alphaTest = props[10];
		inst.overdraw = props[11];
		inst.transparent = props[12];
		inst.depthTest = props[13];
		inst.depthWrite = props[14];
		inst.colorWrite = props[15];
		inst.polygonOffset = props[16];
		inst.visible = props[17];
		inst.color = props[18];
		inst.map = props[19];
		inst.aoMap = props[20];
		inst.aoMapIntensity = props[21];
		inst.specularMap = props[22];
		inst.alphaMap = props[23];
		inst.envMap = props[24];
		inst.combine = props[25];
		inst.reflectivity = props[26];
		inst.refractionRatio = props[27];
		inst.fog = props[28];
		inst.shading = props[29];
		inst.wireframe = props[30];
		inst.wireframeLinewidth = props[31];
		inst.wireframeLinecap = props[32];
		inst.wireframeLinejoin = props[33];
		inst.vertexColors = props[34];
		inst.skinning = props[35];
		inst.morphTargets = props[36];
	}
}

/**
 * Factory & Initializer of THREE.Material
 */
var factory_THREE_Material = {
	props: 18,
	create: function() {
		return new THREE.Material();
	},
	init: function(inst, props) {
		inst.name = props[0];
		inst.side = props[1];
		inst.opacity = props[2];
		inst.blending = props[3];
		inst.blendSrc = props[4];
		inst.blendDst = props[5];
		inst.blendEquation = props[6];
		inst.depthFunc = props[7];
		inst.polygonOffsetFactor = props[8];
		inst.polygonOffsetUnits = props[9];
		inst.alphaTest = props[10];
		inst.overdraw = props[11];
		inst.transparent = props[12];
		inst.depthTest = props[13];
		inst.depthWrite = props[14];
		inst.colorWrite = props[15];
		inst.polygonOffset = props[16];
		inst.visible = props[17];
	}
}

/**
 * Factory & Initializer of THREE.Scene
 */
var factory_THREE_Scene = {
	props: 19,
	create: function() {
		return new THREE.Scene();
	},
	init: function(inst, props) {
		inst.name = props[0];
		inst.up = props[1];
		inst.position.copy( props[2] );
		inst.quaternion.copy( props[3] );
		inst.scale = props[4];
		inst.rotationAutoUpdate = props[5];
		inst.matrix = props[6];
		inst.matrixWorld = props[7];
		inst.matrixAutoUpdate = props[8];
		inst.matrixWorldNeedsUpdate = props[9];
		inst.visible = props[10];
		inst.castShadow = props[11];
		inst.receiveShadow = props[12];
		inst.frustumCulled = props[13];
		inst.renderOrder = props[14];
		inst.userData = props[15];
		inst.children = props[16];
		inst.fog = props[17];
		inst.overrideMaterial = props[18];

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
	props: 23,
	create: function() {
		return new THREE.SpotLight();
	},
	init: function(inst, props) {
		inst.name = props[0];
		inst.up = props[1];
		inst.position.copy( props[2] );
		inst.quaternion.copy( props[3] );
		inst.scale = props[4];
		inst.rotationAutoUpdate = props[5];
		inst.matrix = props[6];
		inst.matrixWorld = props[7];
		inst.matrixAutoUpdate = props[8];
		inst.matrixWorldNeedsUpdate = props[9];
		inst.visible = props[10];
		inst.castShadow = props[11];
		inst.receiveShadow = props[12];
		inst.frustumCulled = props[13];
		inst.renderOrder = props[14];
		inst.userData = props[15];
		inst.children = props[16];
		inst.color = props[17];
		inst.intensity = props[18];
		inst.distance = props[19];
		inst.decay = props[20];
		inst.angle = props[21];
		inst.exponent = props[22];

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
	props: 21,
	create: function() {
		return new THREE.PointLight();
	},
	init: function(inst, props) {
		inst.name = props[0];
		inst.up = props[1];
		inst.position.copy( props[2] );
		inst.quaternion.copy( props[3] );
		inst.scale = props[4];
		inst.rotationAutoUpdate = props[5];
		inst.matrix = props[6];
		inst.matrixWorld = props[7];
		inst.matrixAutoUpdate = props[8];
		inst.matrixWorldNeedsUpdate = props[9];
		inst.visible = props[10];
		inst.castShadow = props[11];
		inst.receiveShadow = props[12];
		inst.frustumCulled = props[13];
		inst.renderOrder = props[14];
		inst.userData = props[15];
		inst.children = props[16];
		inst.color = props[17];
		inst.intensity = props[18];
		inst.distance = props[19];
		inst.decay = props[20];

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
	props: 20,
	create: function() {
		return new THREE.HemisphereLight();
	},
	init: function(inst, props) {
		inst.name = props[0];
		inst.up = props[1];
		inst.position.copy( props[2] );
		inst.quaternion.copy( props[3] );
		inst.scale = props[4];
		inst.rotationAutoUpdate = props[5];
		inst.matrix = props[6];
		inst.matrixWorld = props[7];
		inst.matrixAutoUpdate = props[8];
		inst.matrixWorldNeedsUpdate = props[9];
		inst.visible = props[10];
		inst.castShadow = props[11];
		inst.receiveShadow = props[12];
		inst.frustumCulled = props[13];
		inst.renderOrder = props[14];
		inst.userData = props[15];
		inst.children = props[16];
		inst.color = props[17];
		inst.groundColor = props[18];
		inst.intensity = props[19];

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
	props: 19,
	create: function() {
		return new THREE.DirectionalLight();
	},
	init: function(inst, props) {
		inst.name = props[0];
		inst.up = props[1];
		inst.position.copy( props[2] );
		inst.quaternion.copy( props[3] );
		inst.scale = props[4];
		inst.rotationAutoUpdate = props[5];
		inst.matrix = props[6];
		inst.matrixWorld = props[7];
		inst.matrixAutoUpdate = props[8];
		inst.matrixWorldNeedsUpdate = props[9];
		inst.visible = props[10];
		inst.castShadow = props[11];
		inst.receiveShadow = props[12];
		inst.frustumCulled = props[13];
		inst.renderOrder = props[14];
		inst.userData = props[15];
		inst.children = props[16];
		inst.color = props[17];
		inst.intensity = props[18];

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
	props: 18,
	create: function() {
		return new THREE.AmbientLight();
	},
	init: function(inst, props) {
		inst.name = props[0];
		inst.up = props[1];
		inst.position.copy( props[2] );
		inst.quaternion.copy( props[3] );
		inst.scale = props[4];
		inst.rotationAutoUpdate = props[5];
		inst.matrix = props[6];
		inst.matrixWorld = props[7];
		inst.matrixAutoUpdate = props[8];
		inst.matrixWorldNeedsUpdate = props[9];
		inst.visible = props[10];
		inst.castShadow = props[11];
		inst.receiveShadow = props[12];
		inst.frustumCulled = props[13];
		inst.renderOrder = props[14];
		inst.userData = props[15];
		inst.children = props[16];
		inst.color = props[17];

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
	props: 21,
	create: function() {
		return new THREE.Mesh();
	},
	init: function(inst, props) {
		inst.name = props[0];
		inst.up = props[1];
		inst.position.copy( props[2] );
		inst.quaternion.copy( props[3] );
		inst.scale = props[4];
		inst.rotationAutoUpdate = props[5];
		inst.matrix = props[6];
		inst.matrixWorld = props[7];
		inst.matrixAutoUpdate = props[8];
		inst.matrixWorldNeedsUpdate = props[9];
		inst.visible = props[10];
		inst.castShadow = props[11];
		inst.receiveShadow = props[12];
		inst.frustumCulled = props[13];
		inst.renderOrder = props[14];
		inst.userData = props[15];
		inst.children = props[16];
		inst.geometry = props[17];
		inst.material = props[18];
		inst.materialTexture = props[19];
		inst.materialWireframe = props[20];

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
	props: 17,
	create: function() {
		return new THREE.Object3D();
	},
	init: function(inst, props) {
		inst.name = props[0];
		inst.up = props[1];
		inst.position.copy( props[2] );
		inst.quaternion.copy( props[3] );
		inst.scale = props[4];
		inst.rotationAutoUpdate = props[5];
		inst.matrix = props[6];
		inst.matrixWorld = props[7];
		inst.matrixAutoUpdate = props[8];
		inst.matrixWorldNeedsUpdate = props[9];
		inst.visible = props[10];
		inst.castShadow = props[11];
		inst.receiveShadow = props[12];
		inst.frustumCulled = props[13];
		inst.renderOrder = props[14];
		inst.userData = props[15];
		inst.children = props[16];

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
	props: 11,
	create: function() {
		return new THREE.BufferGeometry();
	},
	init: function(inst, props) {
		inst.vertices = props[0];
		inst.faces = props[1];
		inst.faceVertexUvs = props[2];
		inst.morphTargets = props[3];
		inst.morphNormals = props[4];
		inst.morphColors = props[5];
		inst.animations = props[6];
		inst.boundingSphere = props[7];
		inst.name = props[8];
		inst.attributes = props[9];
		inst.index = props[10];
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
	init: function(inst, props) {
		THREE.TubeGeometry.call(inst,
			props[0].path,
			props[0].segments,
			props[0].radius,
			props[0].radialSegments,
			props[0].closed,
			props[0].taper);
		inst.name = props[1];
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
	init: function(inst, props) {
		THREE.TorusKnotGeometry.call(inst,
			props[0].radius,
			props[0].tube,
			props[0].radialSegments,
			props[0].tubularSegments,
			props[0].p,
			props[0].q,
			props[0].heightScale);
		inst.name = props[1];
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
	init: function(inst, props) {
		THREE.TorusGeometry.call(inst,
			props[0].radius,
			props[0].tube,
			props[0].radialSegments,
			props[0].tubularSegments,
			props[0].arc);
		inst.name = props[1];
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
	init: function(inst, props) {
		THREE.TetrahedronGeometry.call(inst,
			props[0].radius,
			props[0].detail);
		inst.name = props[1];
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
	init: function(inst, props) {
		THREE.SphereGeometry.call(inst,
			props[0].radius,
			props[0].widthSegments,
			props[0].heightSegments,
			props[0].phiStart,
			props[0].phiLength,
			props[0].thetaStart,
			props[0].thetaLength);
		inst.name = props[1];
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
	init: function(inst, props) {
		THREE.SphereBufferGeometry.call(inst,
			props[0].radius,
			props[0].widthSegments,
			props[0].heightSegments,
			props[0].phiStart,
			props[0].phiLength,
			props[0].thetaStart,
			props[0].thetaLength);
		inst.name = props[1];
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
	init: function(inst, props) {
		THREE.RingGeometry.call(inst,
			props[0].innerRadius,
			props[0].outerRadius,
			props[0].thetaSegments,
			props[0].phiSegments,
			props[0].thetaStart,
			props[0].thetaLength);
		inst.name = props[1];
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
	init: function(inst, props) {
		THREE.PolyhedronGeometry.call(inst,
			props[0].vertices,
			props[0].indices,
			props[0].radius,
			props[0].detail);
		inst.name = props[1];
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
	init: function(inst, props) {
		THREE.PlaneGeometry.call(inst,
			props[0].width,
			props[0].height,
			props[0].depth,
			props[0].widthSegments,
			props[0].heightSegments,
			props[0].depthSegments);
		inst.name = props[1];
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
	init: function(inst, props) {
		THREE.PlaneBufferGeometry.call(inst,
			props[0].width,
			props[0].height,
			props[0].depth,
			props[0].widthSegments,
			props[0].heightSegments,
			props[0].depthSegments);
		inst.name = props[1];
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
	init: function(inst, props) {
		THREE.ParametricGeometry.call(inst,
			props[0].width,
			props[0].height,
			props[0].widthSegments,
			props[0].heightSegments);
		inst.name = props[1];
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
	init: function(inst, props) {
		THREE.OctahedronGeometry.call(inst,
			props[0].radius,
			props[0].detail);
		inst.name = props[1];
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
	init: function(inst, props) {
		THREE.LatheGeometry.call(inst,
			props[0].points,
			props[0].segments,
			props[0].phiStart,
			props[0].phiLength);
		inst.name = props[1];
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
	init: function(inst, props) {
		THREE.IcosahedronGeometry.call(inst,
			props[0].radius,
			props[0].detail);
		inst.name = props[1];
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
	init: function(inst, props) {
		THREE.DodecahedronGeometry.call(inst,
			props[0].radius,
			props[0].detail);
		inst.name = props[1];
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
	init: function(inst, props) {
		THREE.CylinderGeometry.call(inst,
			props[0].radiusTop,
			props[0].radiusBottom,
			props[0].height,
			props[0].radialSegments,
			props[0].heightSegments,
			props[0].openEnded,
			props[0].thetaStart,
			props[0].thetaLength);
		inst.name = props[1];
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
	init: function(inst, props) {
		THREE.CircleGeometry.call(inst,
			props[0].radius,
			props[0].segments,
			props[0].thetaStart,
			props[0].thetaLength);
		inst.name = props[1];
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
	init: function(inst, props) {
		THREE.CircleBufferGeometry.call(inst,
			props[0].radius,
			props[0].segments,
			props[0].thetaStart,
			props[0].thetaLength);
		inst.name = props[1];
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
	init: function(inst, props) {
		THREE.BoxGeometry.call(inst,
			props[0].width,
			props[0].height,
			props[0].depth);
		inst.name = props[1];
	}
}

/**
 * Factory & Initializer of THREE.Geometry
 */
var factory_THREE_Geometry = {
	props: 9,
	create: function() {
		return new THREE.Geometry();
	},
	init: function(inst, props) {
		inst.vertices = props[0];
		inst.faces = props[1];
		inst.faceVertexUvs = props[2];
		inst.morphTargets = props[3];
		inst.morphNormals = props[4];
		inst.morphColors = props[5];
		inst.animations = props[6];
		inst.boundingSphere = props[7];
		inst.name = props[8];
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
	init: function(inst, props) {
		inst.x = props[0];
		inst.y = props[1];
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
	init: function(inst, props) {
		inst.x = props[0];
		inst.y = props[1];
		inst.z = props[2];
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
	init: function(inst, props) {
		inst.x = props[0];
		inst.y = props[1];
		inst.z = props[2];
		inst.w = props[3];
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
	init: function(inst, props) {
		inst.a = props[0];
		inst.b = props[1];
		inst.c = props[2];
		inst.materialIndex = props[3];
		inst.normal = props[4];
		inst.color = props[5];
		inst.vertexNormals = props[6];
		inst.vertexColors = props[7];
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
	init: function(inst, props) {
		inst.r = props[0];
		inst.g = props[1];
		inst.b = props[2];
	}
}

/**
 * Factory & Initializer of THREE.Quaternion
 */
var factory_THREE_Quaternion = {
	props: 4,
	create: function() {
		return new THREE.Quaternion();
	},
	init: function(inst, props) {
		inst._x = props[0];
		inst._y = props[1];
		inst._z = props[2];
		inst._w = props[3];
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
	init: function(inst, props) {
		inst._x = props[0];
		inst._y = props[1];
		inst._z = props[2];
		inst._order = props[3];
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
	init: function(inst, props) {
		inst.min = props[0];
		inst.max = props[1];
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
	init: function(inst, props) {
		inst.min = props[0];
		inst.max = props[1];
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
	init: function(inst, props) {
		inst.center = props[0];
		inst.radius = props[1];
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
	init: function(inst, props) {
		inst.elements = props[0];
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
	init: function(inst, props) {
		inst.elements = props[0];
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
	init: function(inst, props) {
		inst.array = props[0];
		inst.itemSize = props[1];
		inst.dynamic = props[2];
		inst.updateRange = props[3];
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
	init: function(inst, props) {
		THREE.AnimationClip.call(inst,
			props[0],
			props[1],
			props[2]);
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
	init: function(inst, props) {
		THREE.VectorKeyframeTrack.call(inst,
			props[0],
			props[1]);
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
	init: function(inst, props) {
		THREE.QuaternionKeyframeTrack.call(inst,
			props[0],
			props[1]);
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
	init: function(inst, props) {
		THREE.NumberKeyframeTrack.call(inst,
			props[0],
			props[1]);
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
	init: function(inst, props) {
		THREE.BooleanKeyframeTrack.call(inst,
			props[0],
			props[1]);
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
	init: function(inst, props) {
		THREE.StringKeyframeTrack.call(inst,
			props[0],
			props[1]);
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
	init: function(inst, props) {
		inst.color = props[0];
		inst.near = props[1];
		inst.far = props[2];
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
	init: function(inst, props) {
		inst.color = props[0];
		inst.density = props[1];
	}
}

/**
 * Factory & Initializer of THREE.MeshDepthMaterial
 */
var factory_THREE_MeshDepthMaterial = {
	props: 6,
	create: function() {
		return new THREE.MeshDepthMaterial();
	},
	init: function(inst, props) {
		inst.opacity = props[0];
		inst.blending = props[1];
		inst.depthTest = props[2];
		inst.depthWrite = props[3];
		inst.wireframe = props[4];
		inst.wireframeLinewidth = props[5];
	}
}

/**
 * Factory & Initializer of THREE.MeshNormalMaterial
 */
var factory_THREE_MeshNormalMaterial = {
	props: 6,
	create: function() {
		return new THREE.MeshNormalMaterial();
	},
	init: function(inst, props) {
		inst.opacity = props[0];
		inst.blending = props[1];
		inst.depthTest = props[2];
		inst.depthWrite = props[3];
		inst.wireframe = props[4];
		inst.wireframeLinewidth = props[5];
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
	init: function(inst, props) {
		inst.materials = props[0];
		inst.visible = props[1];
	}
}

/**
 * Factory & Initializer of THREE.PointsMaterial
 */
var factory_THREE_PointsMaterial = {
	props: 10,
	create: function() {
		return new THREE.PointsMaterial();
	},
	init: function(inst, props) {
		inst.color = props[0];
		inst.opacity = props[1];
		inst.map = props[2];
		inst.side = props[3];
		inst.sizeAttenuation = props[4];
		inst.blending = props[5];
		inst.depthTest = props[6];
		inst.depthWrite = props[7];
		inst.vertexColors = props[8];
		inst.fog = props[9];
	}
}

/**
 * Factory & Initializer of THREE.SpriteMaterial
 */
var factory_THREE_SpriteMaterial = {
	props: 9,
	create: function() {
		return new THREE.SpriteMaterial();
	},
	init: function(inst, props) {
		inst.color = props[0];
		inst.opacity = props[1];
		inst.map = props[2];
		inst.blending = props[3];
		inst.depthTest = props[4];
		inst.depthWrite = props[5];
		inst.uvOffset = props[6];
		inst.uvScale = props[7];
		inst.fog = props[8];
	}
}

/**
 * Factory & Initializer of THREE.LineBasicMaterial
 */
var factory_THREE_LineBasicMaterial = {
	props: 10,
	create: function() {
		return new THREE.LineBasicMaterial();
	},
	init: function(inst, props) {
		inst.color = props[0];
		inst.opacity = props[1];
		inst.blending = props[2];
		inst.depthTest = props[3];
		inst.depthWrite = props[4];
		inst.linewidth = props[5];
		inst.linecap = props[6];
		inst.linejoin = props[7];
		inst.vertexColors = props[8];
		inst.fog = props[9];
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
	init: function(inst, props) {
		inst.fov = props[0];
		inst.aspect = props[1];
		inst.near = props[2];
		inst.far = props[3];

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
	init: function(inst, props) {
		inst.left = props[0];
		inst.right = props[1];
		inst.top = props[2];
		inst.bottom = props[3];
		inst.near = props[4];
		inst.far = props[5];

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
	init: function(inst, props) {
		THREE.CubeCamera.call(inst,
			props[0],
			props[1],
			props[2]);
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
	init: function(inst, props) {
		inst.scale = props[0];
		inst.animationFPS = props[1];
		inst.root = props[2];
		inst.meshBody = props[3];
		inst.skinsBody = props[4];
		inst.meshWeapon = props[5];
		inst.skinsWeapon = props[6];
		inst.weapons = props[7];
		inst.activeAnimation = props[8];

		// Custom init function
		inst.mixer = new THREE.AnimationMixer( inst.mesh );
		
			}
}

module.exports = {
	id: 1,
	size: 67,
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
								case 35: return factory_THREE_MeshLambertMaterial;
								case 36: return factory_THREE_MeshPhongMaterial;
								case 37: return factory_THREE_MeshBasicMaterial;
							}
						} else {
							switch (id) {
								case 38: return factory_THREE_Material;
								case 39: return factory_THREE_Scene;
								case 40: return factory_THREE_SpotLight;
								case 41: return factory_THREE_PointLight;
								case 42: return factory_THREE_HemisphereLight;
								case 43: return factory_THREE_DirectionalLight;
							}
						}
					} else {
						if (id < 50) {
							switch (id) {
								case 44: return factory_THREE_AmbientLight;
								case 45: return factory_THREE_Mesh;
								case 46: return factory_THREE_Object3D;
								case 47: return factory_THREE_BufferGeometry;
								case 48: return factory_THREE_TubeGeometry;
								case 49: return factory_THREE_TorusKnotGeometry;
							}
						} else {
							switch (id) {
								case 50: return factory_THREE_TorusGeometry;
								case 51: return factory_THREE_TetrahedronGeometry;
								case 52: return factory_THREE_SphereGeometry;
								case 53: return factory_THREE_SphereBufferGeometry;
								case 54: return factory_THREE_RingGeometry;
								case 55: return factory_THREE_PolyhedronGeometry;
							}
						}
					}
				} else {
					if (id < 68) {
						if (id < 62) {
							switch (id) {
								case 56: return factory_THREE_PlaneGeometry;
								case 57: return factory_THREE_PlaneBufferGeometry;
								case 58: return factory_THREE_ParametricGeometry;
								case 59: return factory_THREE_OctahedronGeometry;
								case 60: return factory_THREE_LatheGeometry;
								case 61: return factory_THREE_IcosahedronGeometry;
							}
						} else {
							switch (id) {
								case 62: return factory_THREE_DodecahedronGeometry;
								case 63: return factory_THREE_CylinderGeometry;
								case 64: return factory_THREE_CircleGeometry;
								case 65: return factory_THREE_CircleBufferGeometry;
								case 66: return factory_THREE_BoxGeometry;
								case 67: return factory_THREE_Geometry;
							}
						}
					} else {
						if (id < 74) {
							switch (id) {
								case 68: return factory_THREE_Fog;
								case 69: return factory_THREE_FogExp2;
								case 70: return factory_THREE_MeshDepthMaterial;
								case 71: return factory_THREE_MeshNormalMaterial;
								case 72: return factory_THREE_MultiMaterial;
								case 73: return factory_THREE_PointsMaterial;
							}
						} else {
							switch (id) {
								case 74: return factory_THREE_SpriteMaterial;
								case 75: return factory_THREE_LineBasicMaterial;
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
