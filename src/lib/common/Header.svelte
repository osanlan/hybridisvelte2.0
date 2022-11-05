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
<Navbar color="light" light expand="md">
    <NavbarBrand href="/">HybridiSpeksi</NavbarBrand>
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
        <Nav class="ms-auto" navbar>
            <NavItem><NavLink href="/">Etusivu</NavLink></NavItem>
            <NavItem><NavLink href="/rekry">Rekry</NavLink></NavItem>           
            <NavItem><NavLink href="/speksi">Speksi</NavLink></NavItem>            
            <NavItem><NavLink href="/historia">HybridiSpeksi</NavLink></NavItem>            
            <NavItem><NavLink href="/keikat">Keikat</NavLink></NavItem>           
            <NavItem><NavLink href="/yhteystiedot">Yhteystiedot</NavLink></NavItem>

        </Nav>
    </Collapse>
</Navbar>
<!-- <header>
	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/'}>
				<a href="/">Etusivu</a>
			</li>
			 <li class:active={$page.url.pathname === '/rekry'}>
				<a href="/about">Rekry</a>
			</li> 
			<li class:active={$page.url.pathname === '/speksi'}>
				<a href="/speksi">Speksi</a>
			</li>
			<li class:active={$page.url.pathname === '/historia'}>
				<a href="/historia">HybridiSpeksi</a>
			</li>
			<li class:active={$page.url.pathname === '/keikat'}>
				<a href="/keikat">Keikat</a>
			</li>
			<li class:active={$page.url.pathname === '/yhteystiedot'}>
				<a href="/yhteystiedot">Yhteystiedot</a>
			</li>
		</ul>
	</nav>
</header> -->

<style lang="scss">
	// header {
	// 	z-index: 10;
	// 	display: flex;
	// 	justify-content: center;
    //     background-color: $color-nav;
	// 	nav {
	// 		display: flex;
	// 		justify-content: center;
    //         background-color: $color-nav;
	// 		ul {
	// 			position: relative;
	// 			padding: 0;
	// 			margin: 0;
	// 			height: 3em;
	// 			display: flex;
	// 			justify-content: center;
	// 			align-items: center;
	// 			list-style: none;
	// 			background: $color-nav;
	// 			background-size: contain;
	// 			@media only screen and (max-width: 450px) {
	// 				flex-direction: column;
	// 			}
	// 			li {
	// 				position: relative;
	// 				height: 100%;
	// 				&.active::before {
	// 					--size: 6px;
	// 					content: '';
	// 					width: 0;
	// 					height: 0;
	// 					position: absolute;
	// 					top: 0;
	// 					left: calc(50% - var(--size));
	// 					border: var(--size) solid transparent;
	// 					border-top: var(--size) solid black;
	// 				}
    //                 & > a:hover {
    //                     background-color: $color-nav-bar-hover;
    //                 }
	// 			}
	// 		}
	// 		a {
	// 			display: flex;
	// 			height: 100%;
	// 			align-items: center;
	// 			padding: 0 1em;
	// 			font-weight: 700;
	// 			font-size: 0.8rem;
	// 			text-transform: uppercase;
	// 			letter-spacing: 0.1em;
	// 			text-decoration: none;
	// 			transition: color 0.2s linear;
    //             color: $color-nav-font;
	// 			&:hover {
	// 				color: $color-nav-font-hover;
	// 			}
	// 		}
	// 	}
	// }
</style>
