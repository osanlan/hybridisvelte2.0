<script>
    // import Editor from '$lib/components/editor.svelte'
    let title = 'Otsikko';
    let content = 'Sisältö';
</script>
<!-- <Editor /> -->
<input type="text" name="title" placeholder={title} bind:value={title}/>
<textarea name="content" bind:value={content}></textarea>

<div class="blog">
    <h2>{title}</h2>
    <p>{@html content}</p>
</div>


<style lang="scss">
    .blog {
        h2 {
            font-size: 2rem;
            font-weight: 700;
            color: blueviolet;
        }
    }
</style>