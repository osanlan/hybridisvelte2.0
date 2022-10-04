<script>
    import { onMount } from 'svelte';
    import Quill from 'quill';
    let quill = null;
    
    onMount( async () => {
        let cont = document.getElementById('editor');
        quill = new Quill(cont, {
            theme: 'snow'
        })
    })


</script>
<svelte:head>
	<link href="//cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
</svelte:head>

<div id="editor">
    <p>Hello World!</p>
    <p>Some initial <strong>bold</strong> text</p>
    <p><br></p>
</div>