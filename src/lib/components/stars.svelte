<script>
    import { onMount } from "svelte";
    import * as THREE from "three";

    let container, scene, camera, renderer, stars, starGeo;

    onMount (async ()  => {
    function init() {
		//create scene object
		scene = new THREE.Scene();
		
      	//setup camera with facing upward
		camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight, 1, 1000);
		camera.position.z = 1;
		camera.rotation.x = Math.PI/2;
		
		//setup renderer
		renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
		container.appendChild(renderer.domElement);

        starGeo = new THREE.BufferGeometry();
        const vertices = [];
        for(let i=0;i<6000;i++) {
            const x = Math.random() * 600 -300;
            const y = Math.random() * 600 -300;
            const z = Math.random() * 600 -300;
            
            vertices.push(x,y,z);
        }
        starGeo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        starGeo.setAttribute('velocity', new THREE.Float32BufferAttribute([0,0,0], 3));
        starGeo.setAttribute('acceleration', new THREE.Float32BufferAttribute([0.02,0.02,0.02], 3));

        let sprite = new THREE.TextureLoader().load('star.png');
        let starMaterial = new THREE.PointsMaterial({
            color: 0xaaaaaa,
            size: 0.7,
            map: sprite
        });

        stars = new THREE.Points(starGeo, starMaterial);
        scene.add(stars);

		animate(); 
    }
    // //rendering loop
    function animate() {      
        starGeo.verticesNeedUpdate = true;
        stars.rotation.y +=0.002;
        
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

    init();
});

</script>

<div id="stars" bind:this={container}></div>

<style lang="scss">
    div {
        position: absolute;
        overflow: visible;
        z-index: 1;
    }
</style>