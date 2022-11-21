<script>
    export let nodeType;
    let content;
    
    const blockTypes = {
        'paragraph': 'p',
        'heading-1': 'h1',
        'heading-2': 'h2'
    }
    
    let type = blockTypes[nodeType];

    function uplift(node) {
        return {
            update({type, content}) {
                const el = document.createElement(`${type}`)
                el.appendChild(content)//content.value)
                node.appendChild(el)
            }
        }
    }
</script>

<div class="text">
    <div use:uplift={{ content, type }}>
        <div bind:this={content}>
            <slot></slot>
        </div>
    </div>
    <br>
</div>

<style lang="scss">
    div {
        display: contents;
    }

</style>