<script lang="ts">
	import { T, useThrelte, useTexture, TransformableObject, useFrame } from '@threlte/core'
	import { GLTF } from '@threlte/extras'
	import { DEG2RAD } from 'three/src/math/MathUtils'
	const { renderer, invalidate } = useThrelte()
    const someTexture = useTexture('/star.png')

    const vertices = [];
    for(let i=0;i<6000;i++) {
        const x = Math.random() * 600 -300;
        const y = Math.random() * 600 -300;
        const z = Math.random() * 600 -300;
        
        vertices.push(x,y,z);
    }
    let rotation = 0
    useFrame(() => {
		rotation += 0.002
	})
</script>
<T.Group rotation.y={rotation}>
    <T.OrthographicCamera zoom={80} let:ref={cam} position={[0, 5, 10]} makeDefault>
        <TransformableObject object={cam} lookAt={{ y: 2 }} />
    </T.OrthographicCamera>
</T.Group>
<!-- <T.Points >
    <T.BufferGeometry 
        position={vertices}
    />
    <T.PointsMaterial
        color="red"
        size: 2
        map={someTexture}
        attach="material"
    /> -->
    <T.Mesh rotation.y={Math.PI/2}>
        <T.PlaneGeometry args={[2, 2]}/>
        <T.MeshStandardMaterial
            color="white"
            map={someTexture}
            attach="material"
            side=THREE.DoubleSide
        />
    </T.Mesh><T.Mesh rotation.y={Math.PI/3}>
        <T.PlaneGeometry args={[2, 2]}/>
        <T.MeshStandardMaterial
            color="white"
            map={someTexture}
            attach="material"
            side=THREE.DoubleSide
        />
    </T.Mesh>

<!-- </T.Points> -->


<T.Mesh  rotation.x={DEG2RAD * -90}>
	<T.CircleGeometry args={[4, 60]} />
	<T.MeshStandardMaterial />
</T.Mesh>
<!-- <T.AmbientLight /> -->
<T.DirectionalLight position={[3, 10, 10]} castShadow />
<T.DirectionalLight position={[-3, 10, -10]} intensity={0.2} />
<T.AmbientLight intensity={0.5} />
<!-- 
<T.PerspectiveCamera makeDefault let:ref={camera} position.x={3}>
    <T.OrbitControls args={[camera, renderer?.domElement]} on:change={invalidate} />
</T.PerspectiveCamera> -->