/**
 * THREE Bundles - Encoder
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
 * Property getter THREE.CubeTexture
 */
function getter_THREE_CubeTexture(inst) {
	return [
		inst.name,
		inst.mipmaps,
		inst.flipY,
		inst.mapping,
		inst.wrapS,
		inst.wrapT,
		inst.magFilter,
		inst.minFilter,
		inst.anisotropy,
		inst.format,
		inst.type,
		inst.offset,
		inst.repeat,
		inst.unpackAlignment,
		inst.image];
}

/**
 * Property getter THREE.CompressedTexture
 */
function getter_THREE_CompressedTexture(inst) {
	return [
		inst.name,
		inst.mipmaps,
		inst.flipY,
		inst.mapping,
		inst.wrapS,
		inst.wrapT,
		inst.magFilter,
		inst.minFilter,
		inst.anisotropy,
		inst.format,
		inst.type,
		inst.offset,
		inst.repeat,
		inst.unpackAlignment,
		inst.image];
}

/**
 * Property getter THREE.Texture
 */
function getter_THREE_Texture(inst) {
	return [
		inst.name,
		inst.mipmaps,
		inst.flipY,
		inst.mapping,
		inst.wrapS,
		inst.wrapT,
		inst.magFilter,
		inst.minFilter,
		inst.anisotropy,
		inst.format,
		inst.type,
		inst.offset,
		inst.repeat,
		inst.unpackAlignment,
		inst.image];
}

/**
 * Property getter THREE.MeshLambertMaterial
 */
function getter_THREE_MeshLambertMaterial(inst) {
	return [
		inst.name,
		inst.side,
		inst.opacity,
		inst.blending,
		inst.blendSrc,
		inst.blendDst,
		inst.blendEquation,
		inst.depthFunc,
		inst.polygonOffsetFactor,
		inst.polygonOffsetUnits,
		inst.alphaTest,
		inst.overdraw,
		inst.transparent,
		inst.depthTest,
		inst.depthWrite,
		inst.colorWrite,
		inst.polygonOffset,
		inst.visible,
		inst.color,
		inst.emissive,
		inst.map,
		inst.specularMap,
		inst.alphaMap,
		inst.envMap,
		inst.combine,
		inst.reflectivity,
		inst.fog,
		inst.wireframe,
		inst.wireframeLinewidth,
		inst.vertexColors,
		inst.skinning,
		inst.morphTargets,
		inst.morphNormals];
}

/**
 * Property getter THREE.MeshPhongMaterial
 */
function getter_THREE_MeshPhongMaterial(inst) {
	return [
		inst.name,
		inst.side,
		inst.opacity,
		inst.blending,
		inst.blendSrc,
		inst.blendDst,
		inst.blendEquation,
		inst.depthFunc,
		inst.polygonOffsetFactor,
		inst.polygonOffsetUnits,
		inst.alphaTest,
		inst.overdraw,
		inst.transparent,
		inst.depthTest,
		inst.depthWrite,
		inst.colorWrite,
		inst.polygonOffset,
		inst.visible,
		inst.color,
		inst.emissive,
		inst.specular,
		inst.shininess,
		inst.metal,
		inst.map,
		inst.lightMap,
		inst.lightMapIntensity,
		inst.aoMap,
		inst.aoMapIntensity,
		inst.emissiveMap,
		inst.bumpMap,
		inst.bumpScale,
		inst.normalMap,
		inst.normalScale,
		inst.displacementMap,
		inst.displacementScale,
		inst.displacementBias,
		inst.specularMap,
		inst.alphaMap,
		inst.envMap,
		inst.combine,
		inst.reflectivity,
		inst.refractionRatio,
		inst.fog,
		inst.shading,
		inst.wireframe,
		inst.wireframeLinewidth,
		inst.vertexColors,
		inst.skinning,
		inst.morphTargets,
		inst.morphNormals];
}

/**
 * Property getter THREE.MeshBasicMaterial
 */
function getter_THREE_MeshBasicMaterial(inst) {
	return [
		inst.name,
		inst.side,
		inst.opacity,
		inst.blending,
		inst.blendSrc,
		inst.blendDst,
		inst.blendEquation,
		inst.depthFunc,
		inst.polygonOffsetFactor,
		inst.polygonOffsetUnits,
		inst.alphaTest,
		inst.overdraw,
		inst.transparent,
		inst.depthTest,
		inst.depthWrite,
		inst.colorWrite,
		inst.polygonOffset,
		inst.visible,
		inst.color,
		inst.map,
		inst.aoMap,
		inst.aoMapIntensity,
		inst.specularMap,
		inst.alphaMap,
		inst.envMap,
		inst.combine,
		inst.reflectivity,
		inst.refractionRatio,
		inst.fog,
		inst.shading,
		inst.wireframe,
		inst.wireframeLinewidth,
		inst.wireframeLinecap,
		inst.wireframeLinejoin,
		inst.vertexColors,
		inst.skinning,
		inst.morphTargets];
}

/**
 * Property getter THREE.Material
 */
function getter_THREE_Material(inst) {
	return [
		inst.name,
		inst.side,
		inst.opacity,
		inst.blending,
		inst.blendSrc,
		inst.blendDst,
		inst.blendEquation,
		inst.depthFunc,
		inst.polygonOffsetFactor,
		inst.polygonOffsetUnits,
		inst.alphaTest,
		inst.overdraw,
		inst.transparent,
		inst.depthTest,
		inst.depthWrite,
		inst.colorWrite,
		inst.polygonOffset,
		inst.visible];
}

/**
 * Property getter THREE.Scene
 */
function getter_THREE_Scene(inst) {
	return [
		inst.name,
		inst.up,
		inst.position,
		inst.quaternion,
		inst.scale,
		inst.rotationAutoUpdate,
		inst.matrix,
		inst.matrixWorld,
		inst.matrixAutoUpdate,
		inst.matrixWorldNeedsUpdate,
		inst.visible,
		inst.castShadow,
		inst.receiveShadow,
		inst.frustumCulled,
		inst.renderOrder,
		inst.userData,
		inst.children,
		inst.fog,
		inst.overrideMaterial];
}

/**
 * Property getter THREE.SpotLight
 */
function getter_THREE_SpotLight(inst) {
	return [
		inst.name,
		inst.up,
		inst.position,
		inst.quaternion,
		inst.scale,
		inst.rotationAutoUpdate,
		inst.matrix,
		inst.matrixWorld,
		inst.matrixAutoUpdate,
		inst.matrixWorldNeedsUpdate,
		inst.visible,
		inst.castShadow,
		inst.receiveShadow,
		inst.frustumCulled,
		inst.renderOrder,
		inst.userData,
		inst.children,
		inst.color,
		inst.intensity,
		inst.distance,
		inst.decay,
		inst.angle,
		inst.exponent];
}

/**
 * Property getter THREE.PointLight
 */
function getter_THREE_PointLight(inst) {
	return [
		inst.name,
		inst.up,
		inst.position,
		inst.quaternion,
		inst.scale,
		inst.rotationAutoUpdate,
		inst.matrix,
		inst.matrixWorld,
		inst.matrixAutoUpdate,
		inst.matrixWorldNeedsUpdate,
		inst.visible,
		inst.castShadow,
		inst.receiveShadow,
		inst.frustumCulled,
		inst.renderOrder,
		inst.userData,
		inst.children,
		inst.color,
		inst.intensity,
		inst.distance,
		inst.decay];
}

/**
 * Property getter THREE.HemisphereLight
 */
function getter_THREE_HemisphereLight(inst) {
	return [
		inst.name,
		inst.up,
		inst.position,
		inst.quaternion,
		inst.scale,
		inst.rotationAutoUpdate,
		inst.matrix,
		inst.matrixWorld,
		inst.matrixAutoUpdate,
		inst.matrixWorldNeedsUpdate,
		inst.visible,
		inst.castShadow,
		inst.receiveShadow,
		inst.frustumCulled,
		inst.renderOrder,
		inst.userData,
		inst.children,
		inst.color,
		inst.groundColor,
		inst.intensity];
}

/**
 * Property getter THREE.DirectionalLight
 */
function getter_THREE_DirectionalLight(inst) {
	return [
		inst.name,
		inst.up,
		inst.position,
		inst.quaternion,
		inst.scale,
		inst.rotationAutoUpdate,
		inst.matrix,
		inst.matrixWorld,
		inst.matrixAutoUpdate,
		inst.matrixWorldNeedsUpdate,
		inst.visible,
		inst.castShadow,
		inst.receiveShadow,
		inst.frustumCulled,
		inst.renderOrder,
		inst.userData,
		inst.children,
		inst.color,
		inst.intensity];
}

/**
 * Property getter THREE.AmbientLight
 */
function getter_THREE_AmbientLight(inst) {
	return [
		inst.name,
		inst.up,
		inst.position,
		inst.quaternion,
		inst.scale,
		inst.rotationAutoUpdate,
		inst.matrix,
		inst.matrixWorld,
		inst.matrixAutoUpdate,
		inst.matrixWorldNeedsUpdate,
		inst.visible,
		inst.castShadow,
		inst.receiveShadow,
		inst.frustumCulled,
		inst.renderOrder,
		inst.userData,
		inst.children,
		inst.color];
}

/**
 * Property getter THREE.Mesh
 */
function getter_THREE_Mesh(inst) {
	return [
		inst.name,
		inst.up,
		inst.position,
		inst.quaternion,
		inst.scale,
		inst.rotationAutoUpdate,
		inst.matrix,
		inst.matrixWorld,
		inst.matrixAutoUpdate,
		inst.matrixWorldNeedsUpdate,
		inst.visible,
		inst.castShadow,
		inst.receiveShadow,
		inst.frustumCulled,
		inst.renderOrder,
		inst.userData,
		inst.children,
		inst.geometry,
		inst.material,
		inst.materialTexture,
		inst.materialWireframe];
}

/**
 * Property getter THREE.Object3D
 */
function getter_THREE_Object3D(inst) {
	return [
		inst.name,
		inst.up,
		inst.position,
		inst.quaternion,
		inst.scale,
		inst.rotationAutoUpdate,
		inst.matrix,
		inst.matrixWorld,
		inst.matrixAutoUpdate,
		inst.matrixWorldNeedsUpdate,
		inst.visible,
		inst.castShadow,
		inst.receiveShadow,
		inst.frustumCulled,
		inst.renderOrder,
		inst.userData,
		inst.children];
}

/**
 * Property getter THREE.BufferGeometry
 */
function getter_THREE_BufferGeometry(inst) {
	return [
		inst.vertices,
		inst.faces,
		inst.faceVertexUvs,
		inst.morphTargets,
		inst.morphNormals,
		inst.morphColors,
		inst.animations,
		inst.boundingSphere,
		inst.name,
		inst.attributes,
		inst.index];
}

/**
 * Property getter THREE.TubeGeometry
 */
function getter_THREE_TubeGeometry(inst) {
	return [
		inst.parameters,
		inst.name];
}

/**
 * Property getter THREE.TorusKnotGeometry
 */
function getter_THREE_TorusKnotGeometry(inst) {
	return [
		inst.parameters,
		inst.name];
}

/**
 * Property getter THREE.TorusGeometry
 */
function getter_THREE_TorusGeometry(inst) {
	return [
		inst.parameters,
		inst.name];
}

/**
 * Property getter THREE.TetrahedronGeometry
 */
function getter_THREE_TetrahedronGeometry(inst) {
	return [
		inst.parameters,
		inst.name];
}

/**
 * Property getter THREE.SphereGeometry
 */
function getter_THREE_SphereGeometry(inst) {
	return [
		inst.parameters,
		inst.name];
}

/**
 * Property getter THREE.SphereBufferGeometry
 */
function getter_THREE_SphereBufferGeometry(inst) {
	return [
		inst.parameters,
		inst.name];
}

/**
 * Property getter THREE.RingGeometry
 */
function getter_THREE_RingGeometry(inst) {
	return [
		inst.parameters,
		inst.name];
}

/**
 * Property getter THREE.PolyhedronGeometry
 */
function getter_THREE_PolyhedronGeometry(inst) {
	return [
		inst.parameters,
		inst.name];
}

/**
 * Property getter THREE.PlaneGeometry
 */
function getter_THREE_PlaneGeometry(inst) {
	return [
		inst.parameters,
		inst.name];
}

/**
 * Property getter THREE.PlaneBufferGeometry
 */
function getter_THREE_PlaneBufferGeometry(inst) {
	return [
		inst.parameters,
		inst.name];
}

/**
 * Property getter THREE.ParametricGeometry
 */
function getter_THREE_ParametricGeometry(inst) {
	return [
		inst.parameters,
		inst.name];
}

/**
 * Property getter THREE.OctahedronGeometry
 */
function getter_THREE_OctahedronGeometry(inst) {
	return [
		inst.parameters,
		inst.name];
}

/**
 * Property getter THREE.LatheGeometry
 */
function getter_THREE_LatheGeometry(inst) {
	return [
		inst.parameters,
		inst.name];
}

/**
 * Property getter THREE.IcosahedronGeometry
 */
function getter_THREE_IcosahedronGeometry(inst) {
	return [
		inst.parameters,
		inst.name];
}

/**
 * Property getter THREE.DodecahedronGeometry
 */
function getter_THREE_DodecahedronGeometry(inst) {
	return [
		inst.parameters,
		inst.name];
}

/**
 * Property getter THREE.CylinderGeometry
 */
function getter_THREE_CylinderGeometry(inst) {
	return [
		inst.parameters,
		inst.name];
}

/**
 * Property getter THREE.CircleGeometry
 */
function getter_THREE_CircleGeometry(inst) {
	return [
		inst.parameters,
		inst.name];
}

/**
 * Property getter THREE.CircleBufferGeometry
 */
function getter_THREE_CircleBufferGeometry(inst) {
	return [
		inst.parameters,
		inst.name];
}

/**
 * Property getter THREE.BoxGeometry
 */
function getter_THREE_BoxGeometry(inst) {
	return [
		inst.parameters,
		inst.name];
}

/**
 * Property getter THREE.Geometry
 */
function getter_THREE_Geometry(inst) {
	return [
		inst.vertices,
		inst.faces,
		inst.faceVertexUvs,
		inst.morphTargets,
		inst.morphNormals,
		inst.morphColors,
		inst.animations,
		inst.boundingSphere,
		inst.name];
}

/**
 * Property getter THREE.Vector2
 */
function getter_THREE_Vector2(inst) {
	return [
		inst.x,
		inst.y];
}

/**
 * Property getter THREE.Vector3
 */
function getter_THREE_Vector3(inst) {
	return [
		inst.x,
		inst.y,
		inst.z];
}

/**
 * Property getter THREE.Vector4
 */
function getter_THREE_Vector4(inst) {
	return [
		inst.x,
		inst.y,
		inst.z,
		inst.w];
}

/**
 * Property getter THREE.Face3
 */
function getter_THREE_Face3(inst) {
	return [
		inst.a,
		inst.b,
		inst.c,
		inst.materialIndex,
		inst.normal,
		inst.color,
		inst.vertexNormals,
		inst.vertexColors];
}

/**
 * Property getter THREE.Color
 */
function getter_THREE_Color(inst) {
	return [
		inst.r,
		inst.g,
		inst.b];
}

/**
 * Property getter THREE.Quaternion
 */
function getter_THREE_Quaternion(inst) {
	return [
		inst._x,
		inst._y,
		inst._z,
		inst._w];
}

/**
 * Property getter THREE.Euler
 */
function getter_THREE_Euler(inst) {
	return [
		inst._x,
		inst._y,
		inst._z,
		inst._order];
}

/**
 * Property getter THREE.Box2
 */
function getter_THREE_Box2(inst) {
	return [
		inst.min,
		inst.max];
}

/**
 * Property getter THREE.Box3
 */
function getter_THREE_Box3(inst) {
	return [
		inst.min,
		inst.max];
}

/**
 * Property getter THREE.Sphere
 */
function getter_THREE_Sphere(inst) {
	return [
		inst.center,
		inst.radius];
}

/**
 * Property getter THREE.Matrix3
 */
function getter_THREE_Matrix3(inst) {
	return [
		inst.elements];
}

/**
 * Property getter THREE.Matrix4
 */
function getter_THREE_Matrix4(inst) {
	return [
		inst.elements];
}

/**
 * Property getter THREE.BufferAttribute
 */
function getter_THREE_BufferAttribute(inst) {
	return [
		inst.array,
		inst.itemSize,
		inst.dynamic,
		inst.updateRange];
}

/**
 * Property getter THREE.AnimationClip
 */
function getter_THREE_AnimationClip(inst) {
	return [
		inst.name,
		inst.duration,
		inst.tracks];
}

/**
 * Property getter THREE.VectorKeyframeTrack
 */
function getter_THREE_VectorKeyframeTrack(inst) {
	return [
		inst.name,
		inst.keys];
}

/**
 * Property getter THREE.QuaternionKeyframeTrack
 */
function getter_THREE_QuaternionKeyframeTrack(inst) {
	return [
		inst.name,
		inst.keys];
}

/**
 * Property getter THREE.NumberKeyframeTrack
 */
function getter_THREE_NumberKeyframeTrack(inst) {
	return [
		inst.name,
		inst.keys];
}

/**
 * Property getter THREE.BooleanKeyframeTrack
 */
function getter_THREE_BooleanKeyframeTrack(inst) {
	return [
		inst.name,
		inst.keys];
}

/**
 * Property getter THREE.StringKeyframeTrack
 */
function getter_THREE_StringKeyframeTrack(inst) {
	return [
		inst.name,
		inst.keys];
}

/**
 * Property getter THREE.Fog
 */
function getter_THREE_Fog(inst) {
	return [
		inst.color,
		inst.near,
		inst.far];
}

/**
 * Property getter THREE.FogExp2
 */
function getter_THREE_FogExp2(inst) {
	return [
		inst.color,
		inst.density];
}

/**
 * Property getter THREE.MeshDepthMaterial
 */
function getter_THREE_MeshDepthMaterial(inst) {
	return [
		inst.opacity,
		inst.blending,
		inst.depthTest,
		inst.depthWrite,
		inst.wireframe,
		inst.wireframeLinewidth];
}

/**
 * Property getter THREE.MeshNormalMaterial
 */
function getter_THREE_MeshNormalMaterial(inst) {
	return [
		inst.opacity,
		inst.blending,
		inst.depthTest,
		inst.depthWrite,
		inst.wireframe,
		inst.wireframeLinewidth];
}

/**
 * Property getter THREE.MultiMaterial
 */
function getter_THREE_MultiMaterial(inst) {
	return [
		inst.materials,
		inst.visible];
}

/**
 * Property getter THREE.PointsMaterial
 */
function getter_THREE_PointsMaterial(inst) {
	return [
		inst.color,
		inst.opacity,
		inst.map,
		inst.side,
		inst.sizeAttenuation,
		inst.blending,
		inst.depthTest,
		inst.depthWrite,
		inst.vertexColors,
		inst.fog];
}

/**
 * Property getter THREE.SpriteMaterial
 */
function getter_THREE_SpriteMaterial(inst) {
	return [
		inst.color,
		inst.opacity,
		inst.map,
		inst.blending,
		inst.depthTest,
		inst.depthWrite,
		inst.uvOffset,
		inst.uvScale,
		inst.fog];
}

/**
 * Property getter THREE.LineBasicMaterial
 */
function getter_THREE_LineBasicMaterial(inst) {
	return [
		inst.color,
		inst.opacity,
		inst.blending,
		inst.depthTest,
		inst.depthWrite,
		inst.linewidth,
		inst.linecap,
		inst.linejoin,
		inst.vertexColors,
		inst.fog];
}

/**
 * Property getter THREE.PerspectiveCamera
 */
function getter_THREE_PerspectiveCamera(inst) {
	return [
		inst.fov,
		inst.aspect,
		inst.near,
		inst.far];
}

/**
 * Property getter THREE.OrthographicCamera
 */
function getter_THREE_OrthographicCamera(inst) {
	return [
		inst.left,
		inst.right,
		inst.top,
		inst.bottom,
		inst.near,
		inst.far];
}

/**
 * Property getter THREE.CubeCamera
 */
function getter_THREE_CubeCamera(inst) {
	return [
		inst.near,
		inst.far,
		inst.cubeResolution];
}

/**
 * Property getter THREE.MD2Character
 */
function getter_THREE_MD2Character(inst) {
	return [
		inst.scale,
		inst.animationFPS,
		inst.root,
		inst.meshBody,
		inst.skinsBody,
		inst.meshWeapon,
		inst.skinsWeapon,
		inst.weapons,
		inst.activeAnimation];
}


module.exports = {
	id: 1,
	size: 67,
	encode: function( inst ) {
			if (inst instanceof THREE.CubeTexture) {
				return [31, getter_THREE_CubeTexture];
			} else if (inst instanceof THREE.CompressedTexture) {
				return [32, getter_THREE_CompressedTexture];
			} else if (inst instanceof THREE.Texture) {
				return [33, getter_THREE_Texture];
			} else if (inst instanceof THREE.MeshLambertMaterial) {
				return [34, getter_THREE_MeshLambertMaterial];
			} else if (inst instanceof THREE.MeshPhongMaterial) {
				return [35, getter_THREE_MeshPhongMaterial];
			} else if (inst instanceof THREE.MeshBasicMaterial) {
				return [36, getter_THREE_MeshBasicMaterial];
			} else if (inst instanceof THREE.Material) {
				return [37, getter_THREE_Material];
			} else if (inst instanceof THREE.Scene) {
				return [38, getter_THREE_Scene];
			} else if (inst instanceof THREE.SpotLight) {
				return [39, getter_THREE_SpotLight];
			} else if (inst instanceof THREE.PointLight) {
				return [40, getter_THREE_PointLight];
			} else if (inst instanceof THREE.HemisphereLight) {
				return [41, getter_THREE_HemisphereLight];
			} else if (inst instanceof THREE.DirectionalLight) {
				return [42, getter_THREE_DirectionalLight];
			} else if (inst instanceof THREE.AmbientLight) {
				return [43, getter_THREE_AmbientLight];
			} else if (inst instanceof THREE.Mesh) {
				return [44, getter_THREE_Mesh];
			} else if (inst instanceof THREE.Object3D) {
				return [45, getter_THREE_Object3D];
			} else if (inst instanceof THREE.BufferGeometry) {
				return [46, getter_THREE_BufferGeometry];
			} else if (inst instanceof THREE.TubeGeometry) {
				return [47, getter_THREE_TubeGeometry];
			} else if (inst instanceof THREE.TorusKnotGeometry) {
				return [48, getter_THREE_TorusKnotGeometry];
			} else if (inst instanceof THREE.TorusGeometry) {
				return [49, getter_THREE_TorusGeometry];
			} else if (inst instanceof THREE.TetrahedronGeometry) {
				return [50, getter_THREE_TetrahedronGeometry];
			} else if (inst instanceof THREE.SphereGeometry) {
				return [51, getter_THREE_SphereGeometry];
			} else if (inst instanceof THREE.SphereBufferGeometry) {
				return [52, getter_THREE_SphereBufferGeometry];
			} else if (inst instanceof THREE.RingGeometry) {
				return [53, getter_THREE_RingGeometry];
			} else if (inst instanceof THREE.PolyhedronGeometry) {
				return [54, getter_THREE_PolyhedronGeometry];
			} else if (inst instanceof THREE.PlaneGeometry) {
				return [55, getter_THREE_PlaneGeometry];
			} else if (inst instanceof THREE.PlaneBufferGeometry) {
				return [56, getter_THREE_PlaneBufferGeometry];
			} else if (inst instanceof THREE.ParametricGeometry) {
				return [57, getter_THREE_ParametricGeometry];
			} else if (inst instanceof THREE.OctahedronGeometry) {
				return [58, getter_THREE_OctahedronGeometry];
			} else if (inst instanceof THREE.LatheGeometry) {
				return [59, getter_THREE_LatheGeometry];
			} else if (inst instanceof THREE.IcosahedronGeometry) {
				return [60, getter_THREE_IcosahedronGeometry];
			} else if (inst instanceof THREE.DodecahedronGeometry) {
				return [61, getter_THREE_DodecahedronGeometry];
			} else if (inst instanceof THREE.CylinderGeometry) {
				return [62, getter_THREE_CylinderGeometry];
			} else if (inst instanceof THREE.CircleGeometry) {
				return [63, getter_THREE_CircleGeometry];
			} else if (inst instanceof THREE.CircleBufferGeometry) {
				return [64, getter_THREE_CircleBufferGeometry];
			} else if (inst instanceof THREE.BoxGeometry) {
				return [65, getter_THREE_BoxGeometry];
			} else if (inst instanceof THREE.Geometry) {
				return [66, getter_THREE_Geometry];
			} else if (inst instanceof THREE.Vector2) {
				return [0, getter_THREE_Vector2];
			} else if (inst instanceof THREE.Vector3) {
				return [1, getter_THREE_Vector3];
			} else if (inst instanceof THREE.Vector4) {
				return [2, getter_THREE_Vector4];
			} else if (inst instanceof THREE.Face3) {
				return [3, getter_THREE_Face3];
			} else if (inst instanceof THREE.Color) {
				return [4, getter_THREE_Color];
			} else if (inst instanceof THREE.Quaternion) {
				return [5, getter_THREE_Quaternion];
			} else if (inst instanceof THREE.Euler) {
				return [6, getter_THREE_Euler];
			} else if (inst instanceof THREE.Box2) {
				return [7, getter_THREE_Box2];
			} else if (inst instanceof THREE.Box3) {
				return [8, getter_THREE_Box3];
			} else if (inst instanceof THREE.Sphere) {
				return [9, getter_THREE_Sphere];
			} else if (inst instanceof THREE.Matrix3) {
				return [10, getter_THREE_Matrix3];
			} else if (inst instanceof THREE.Matrix4) {
				return [11, getter_THREE_Matrix4];
			} else if (inst instanceof THREE.BufferAttribute) {
				return [12, getter_THREE_BufferAttribute];
			} else if (inst instanceof THREE.AnimationClip) {
				return [13, getter_THREE_AnimationClip];
			} else if (inst instanceof THREE.VectorKeyframeTrack) {
				return [14, getter_THREE_VectorKeyframeTrack];
			} else if (inst instanceof THREE.QuaternionKeyframeTrack) {
				return [15, getter_THREE_QuaternionKeyframeTrack];
			} else if (inst instanceof THREE.NumberKeyframeTrack) {
				return [16, getter_THREE_NumberKeyframeTrack];
			} else if (inst instanceof THREE.BooleanKeyframeTrack) {
				return [17, getter_THREE_BooleanKeyframeTrack];
			} else if (inst instanceof THREE.StringKeyframeTrack) {
				return [18, getter_THREE_StringKeyframeTrack];
			} else if (inst instanceof THREE.Fog) {
				return [67, getter_THREE_Fog];
			} else if (inst instanceof THREE.FogExp2) {
				return [68, getter_THREE_FogExp2];
			} else if (inst instanceof THREE.MeshDepthMaterial) {
				return [69, getter_THREE_MeshDepthMaterial];
			} else if (inst instanceof THREE.MeshNormalMaterial) {
				return [70, getter_THREE_MeshNormalMaterial];
			} else if (inst instanceof THREE.MultiMaterial) {
				return [71, getter_THREE_MultiMaterial];
			} else if (inst instanceof THREE.PointsMaterial) {
				return [72, getter_THREE_PointsMaterial];
			} else if (inst instanceof THREE.SpriteMaterial) {
				return [73, getter_THREE_SpriteMaterial];
			} else if (inst instanceof THREE.LineBasicMaterial) {
				return [74, getter_THREE_LineBasicMaterial];
			} else if (inst instanceof THREE.PerspectiveCamera) {
				return [75, getter_THREE_PerspectiveCamera];
			} else if (inst instanceof THREE.OrthographicCamera) {
				return [76, getter_THREE_OrthographicCamera];
			} else if (inst instanceof THREE.CubeCamera) {
				return [77, getter_THREE_CubeCamera];
			} else if (inst instanceof THREE.MD2Character) {
				return [78, getter_THREE_MD2Character];
			}
		}
};
