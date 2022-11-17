import adapter from "@sveltejs/adapter-auto";
import seqPreprocessor from 'svelte-sequential-preprocessor';

import preprocess from "svelte-preprocess";
import { preprocessThrelte } from "@threlte/preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
    preprocess: seqPreprocessor([
        preprocess({
            scss: {
                prependData: '@use "src/variables.scss" as *;',
            },
        }),
        preprocessThrelte({
            extensions: {
                // import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
                'three/examples/jsm/controls/OrbitControls': ['OrbitControls'],
    
                // import { TransformControls } from 'three/examples/jsm/controls/TransformControls'
                'three/examples/jsm/controls/TransformControls': ['TransformControls'],
    
                // import { CustomGrid } from '$lib/CustomGrid'
                '$lib/CustomGrid': ['CustomGrid']
            }
        })
    ]),

    kit: {
        adapter: adapter(),
    },
};

export default config;
