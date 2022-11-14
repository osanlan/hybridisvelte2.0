<script>
	// import { page } from '$app/stores';
    import {     
        Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavItem,
        NavLink
    } from 'sveltestrap';

    let isOpen  = false;

    function handleUpdate (e) {
        isOpen = e.detail.isOpen;
    }
</script>

<Navbar light expand="md">
    <NavbarBrand href="/">HybridiSpeksi</NavbarBrand>
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
        <Nav class="ms-auto" navbar>
            <NavItem><NavLink href="/">Etusivu</NavLink></NavItem>
            <!-- <NavItem><NavLink href="/rekry">Rekry</NavLink></NavItem>            -->
            <NavItem><NavLink href="/speksi">Speksi</NavLink></NavItem>            
            <NavItem><NavLink href="/historia">HybridiSpeksi</NavLink></NavItem>            
            <NavItem><NavLink href="/keikat">Keikat</NavLink></NavItem>           
            <NavItem><NavLink href="/yhteystiedot">Yhteystiedot</NavLink></NavItem>

        </Nav>
    </Collapse>
</Navbar>

<style lang="scss">
    :global(.navbar) {
        background-color: $color-nav;
    }
     :global(.navbar-brand) {
            color: $color-nav-font;
    }
    :global(.nav-link) {
        color: $color-nav-font;
        &:hover {
            background-color: $color-nav-bar-hover;
            color: $color-nav-font-hover;
        }
    }
    


</style>