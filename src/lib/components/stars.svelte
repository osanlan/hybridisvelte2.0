<script lang="ts">
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import { randomVec3 } from '$lib/utils/vectors';

	let count: number = 500;
	const geometry = new THREE.SphereBufferGeometry();
    geometry.scale(0.05,0.05,0.05)

	const material = new THREE.MeshBasicMaterial({
		color: new THREE.Color('#ffffff')
	});


	let IMesh: any;

	function initMesh(c: number) {
		IMesh = new THREE.InstancedMesh(geometry, material, c);
		const matrix = new THREE.Matrix4();
		for (let i = 0; i < IMesh.count; i++) {
			matrix.setPosition(randomVec3());
			IMesh.setMatrixAt(i, matrix);
		}

    }
	$: initMesh(count);
</script>

<SC.Primitive object={IMesh} />