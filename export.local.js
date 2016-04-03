
var YAML = require('yamljs');
var data = require("./index.js");
var psk = Object.keys(data.PROPERTYSET);

var specs = {};

for (var i=0; i<data.PROPERTIES.length; i++) {
	var c = data.ENTITIES[i][0],
		f = data.ENTITIES[i][1],
		n = data.ENTITIES[i][2],
		p = data.PROPERTIES[i];
	if (c === undefined) continue;

	var e = {};

	// Check factory
	if (f === data.FACTORY.Default) {
		/* Default factory ommited */
	} else if (f === data.FACTORY.Unconstructed) {
		e['factory'] = 'create';
	} else {
		throw "Unexpected factory: "+f;
	}

	// Check init
	if (n !== "INIT.Default") {
		e['init'] = n.substr(5);
	}

	// Check base propertyset
	for (var j=0; j<psk.length; j++) {
		var name = psk[j], ps = data.PROPERTYSET[name], match = true;
		for (var k=0; k<ps.length; k++) {
			if (ps[k] != p[k]) {
				match = false;
				break;
			}
		}
		if (match) {
			p = p.slice(ps.length);
			e['extends'] = name;
		}
	}


	e['properties'] = p

	specs[c] = e;

}

console.log(YAML.stringify(specs,4));