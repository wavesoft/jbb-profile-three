# jbb-profile-three

Javascript Binary Bundle profile for THREE.js objects. This profile provides 
the binary object table for encoding most of commonly used THREE.js objects.

```
Major Version : 0x0001 (1)
Revision      : 0x0    (0)
Version ID    : 0x0004 (4)
```

## Supported Objects

The following table contains all the objects supported by this profile.

| 0  | THREE.Vector2                   | 37 | THREE.TetrahedronGeometry |
|----|---------------------------------|----|---------------------------|
| 1  | THREE.Vector3                   | 38 | THREE.TorusGeometry       |
| 2  | THREE.Vector4                   | 39 | THREE.TorusKnotGeometry   |
| 3  | THREE.Face3                     | 40 | THREE.TubeGeometry        |
| 4  | THREE.Color                     | 41 | THREE.BufferGeometry      |
| 5  | THREE.QuaternionFACTORY.Default | 42 | THREE.Geometry            |
| 6  | THREE.EulerFACTORY.Default      | 43 | THREE.Mesh                |
| 7  | THREE.Box2FACTORY.Default       | 44 | THREE.AmbientLight        |
| 8  | THREE.Box3FACTORY.Default       | 45 | THREE.DirectionalLight    |
| 9  | THREE.Sphere                    | 46 | THREE.HemisphereLight     |
| 10 | THREE.Matrix3                   | 47 | THREE.PointLight          |
| 11 | THREE.Matrix4                   | 48 | THREE.SpotLight           |
| 12 | THREE.BufferAttribute           | 49 | THREE.Scene               |
| 13 | Reserved                        | 50 | THREE.Object3D            |
| 14 | Reserved                        | 51 | THREE.Fog                 |
| 15 | Reserved                        | 52 | THREE.FogExp2             |
| 16 | THREE.AnimationClip             | 53 | THREE.MeshBasicMaterial   |
| 17 | THREE.VectorKeyframeTrack       | 54 | THREE.MeshPhongMaterial   |
| 18 | THREE.QuaternionKeyframeTrack   | 55 | THREE.MeshLambertMaterial |
| 19 | THREE.NumberKeyframeTrack       | 56 | THREE.MeshDepthMaterial   |
| 20 | THREE.BooleanKeyframeTrack      | 57 | THREE.MeshNormalMaterial  |
| 21 | THREE.StringKeyframeTrack       | 58 | THREE.MultiMaterial       |
| 22 | THREE.BoxGeometry               | 59 | THREE.PointsMaterial      |
| 23 | THREE.CircleBufferGeometry      | 60 | THREE.SpriteMaterial      |
| 24 | THREE.CircleGeometry            | 61 | THREE.LineBasicMaterial   |
| 25 | THREE.CylinderGeometry          | 62 | THREE.Material            |
| 26 | THREE.DodecahedronGeometry      | 63 | THREE.PerspectiveCamera   |
| 27 | THREE.IcosahedronGeometry       | 64 | THREE.OrthographicCamera  |
| 28 | THREE.LatheGeometry             | 65 | THREE.CubeCamera          |
| 29 | THREE.OctahedronGeometry        | 66 | THREE.CompressedTexture   |
| 30 | THREE.ParametricGeometry        | 67 | THREE.CubeTexture         |
| 31 | THREE.PlaneBufferGeometry       | 68 | THREE.Texture             |
| 32 | THREE.PlaneGeometry             | 69 | THREE.MD2Character        |
| 33 | THREE.PolyhedronGeometry        |    |                           |
| 34 | THREE.RingGeometry              |    |                           |
| 35 | THREE.SphereBufferGeometry      |    |                           |
| 36 | THREE.SphereGeometry            |    |                           |