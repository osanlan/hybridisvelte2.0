<script>
	import './nav.scss';
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

