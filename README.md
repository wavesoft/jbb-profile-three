# jbb-profile-three (r73)

[![Version](https://img.shields.io/npm/v/jbb-profile-three.svg?label=version&maxAge=2592000)](https://www.npmjs.com/package/jbb-profile-three) [![JBB](https://img.shields.io/badge/jbb-1.3.3-brightgreen.svg)](https://github.com/wavesoft/jbb) [![THREE.js](https://img.shields.io/badge/THREE.js-r73-yellow.svg)](https://github.com/mrdoob/three.js)

Javascript Binary Bundle profile for THREE.js objects. This profile provides 
the binary object table for encoding most of commonly used THREE.js r73 objects.

Starting from version `v0.6` this profile uses specification-generated sources for faster loading time and easier extensibility. Check the `specs.yaml` to see the list of objects currently supported.

## Installation

You can install the `three` profile through npm:

```
npm install jbb-profile-three
```

## JBB Details

Binary bundles built with this profile have a signature ID `0x0010` (UUID=1, Revision=0)
