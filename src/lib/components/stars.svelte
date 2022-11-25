<script lang="ts">
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { randomVec3 } from '$lib/utils/vectors';

	let count: number = 500;
	const geometry = new THREE.SphereBufferGeometry();
	// geometry.scale(0.1, 0.1, 0.1);
    geometry.scale(0.5,0.5,0.5)
    const texture = new THREE.TextureLoader().load( "grape.png" )
    const material_r = new THREE.MeshBasicMaterial({
        map: texture,
        // color: new THREE.Color('#ff0000')
    });
	const material_g = new THREE.MeshBasicMaterial({
		color: new THREE.Color('#00ff00')
	});
	const material_b = new THREE.MeshBasicMaterial({
		color: new THREE.Color('#0000ff')
	});	

	let IMesh_r: any;
	let IMesh_g: any;
	let IMesh_b: any;

	function initMesh(c: number) {
		IMesh_r = new THREE.InstancedMesh(geometry, material_r, c);
		const matrix_r = new THREE.Matrix4();
		for (let i = 0; i < IMesh_r.count; i++) {
			matrix_r.setPosition(randomVec3());
			IMesh_r.setMatrixAt(i, matrix_r);
		}
        
        IMesh_g = new THREE.InstancedMesh(geometry, material_g, c);
		const matrix_g = new THREE.Matrix4();
		for (let i = 0; i < IMesh_r.count; i++) {
			matrix_g.setPosition(randomVec3());
			IMesh_g.setMatrixAt(i, matrix_g);
		}

        IMesh_b = new THREE.InstancedMesh(geometry, material_b, c);
		const matrix = new THREE.Matrix4();
		for (let i = 0; i < IMesh_b.count; i++) {
			matrix.setPosition(randomVec3());
			IMesh_b.setMatrixAt(i, matrix);
		}
    }
	$: initMesh(count);
</script>

<SC.Primitive object={IMesh_r} />
<!-- <SC.Primitive object={IMesh_g} /> -->
<!-- <SC.Primitive object={IMesh_b} /> -->