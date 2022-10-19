<script>
    export let src;
    export let alt;
    
    function getDefault() {
        src = 'images/logo.png'
    }
    
    </script>
    
    
    <img src="{src}" alt="{alt}" on:error="{() => getDefault()}"/>
    
    <style lang="scss">
        img {
            pointer-events: none;
        }
    </style>