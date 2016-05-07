
var THREE = require('three');
var assert = require('assert');
var Encoder = require('../profile-encode');
var Decoder = require('../profile-decode');

/**
 * Generate descriptor
 */
function generateDesc( className, init, properties ) {

	describe('Encode '+className, function() {
		var o_in, o_out;
		var enc;

		o_in = new (THREE[className].bind.apply(THREE[className], init));

		it('should encode it without errors', function(done) {
			assert.doesNotThrow(function() {
				var ans = Encoder.encode(o_in);
				assert( ans, "object not found in the profile" );
				assert.equal( ans.length, 2, "encoder did not return a tuple" );

				var prop = ans[1](o_in);
				assert( ans, "could not extract object properties" );

				// Keep encoding information
				enc = [ans[0], prop];
				done();
			});
		});

		it('should decode it without errors', function(done) {
			assert.doesNotThrow(function() {
				var factory = Decoder.decode(enc[0]);
				assert( factory, "object not found in the profile" );
				assert( factory.create, "decoder factory has no create function" );
				assert( factory.init, "decoder factory has no init function" );

				o_out = factory.create(); // Create instance
				factory.init( o_out, enc[1] ); // Init properties

				done();
			});
		});

		it('should be the same', function(done) {
			for (var i=0; i<properties.length; i++) {
				assert.equal( o_in[properties[i]], o_out[properties[i]], "property "+properties[i]+" does not match" );
			}
			done();
		});

	});

}

// Basic encoding/decoding
describe('[Core Tests]', function() {

	generateDesc( 'Vector2', [1,2], ['x','y'] );
	generateDesc( 'Vector3', [1,2,3], ['x','y','z'] );
	generateDesc( 'Object3D', [], ['name'] );

});
