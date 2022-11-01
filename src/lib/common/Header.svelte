<script lang="ts">
	import { page } from '$app/stores';

    let mobile = false;
    const handleMobileClick = () => (mobile = !mobile);
</script>

<header>
	<nav>
		<ul>
			<li class:active={$page.url.pathname === '/'}>
				<a href="/">HybridiSpeksi</a>
			</li>
			<!-- <li class:active={$page.url.pathname === '/rekry'}>
				<a href="/about">Rekry</a>
			</li> -->
			<li class:active={$page.url.pathname === '/speksi'}>
				<a href="/speksi">Speksi</a>
			</li>
			<li class:active={$page.url.pathname === '/historia'}>
				<a href="/historia">Aikaisemmat speksit</a>
			</li>
			<li class:active={$page.url.pathname === '/keikat'}>
				<a href="/keikat">Keikat</a>
			</li>
			<li class:active={$page.url.pathname === '/yhteystiedot'}>
				<a href="/yhteystiedot">Yhteystiedot</a>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		z-index: 10;
		display: flex;
		justify-content: center;
        background-color: $color-nav;
		.corner {
			position: absolute;
			width: 3em;
			height: 3em;
			display: flex;
			justify-content: center;
			align-items: center;
			left: 0;
			a {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 100%;
				height: 100%;
			}
			img {
				width: 3em;
				height: 3em;
				object-fit: contain;
                -webkit-filter: invert(1);
                filter: invert(1)
			}
		}
		nav {
			display: flex;
			justify-content: center;
            background-color: $color-nav;
			ul {
				position: relative;
				padding: 0;
				margin: 0;
				height: 3em;
				display: flex;
				justify-content: center;
				align-items: center;
				list-style: none;
				background: $color-nav;
				background-size: contain;
				@media only screen and (max-width: 400px) {
					flex-direction: column;
				}
				li {
					position: relative;
					height: 100%;
					&.active::before {
						--size: 6px;
						content: '';
						width: 0;
						height: 0;
						position: absolute;
						top: 0;
						left: calc(50% - var(--size));
						border: var(--size) solid transparent;
						border-top: var(--size) solid black;
					}
                    & > a:hover {
                        background-color: $color-nav-bar-hover;
                    }
				}
			}
			a {
				display: flex;
				height: 100%;
				align-items: center;
				padding: 0 1em;
				font-weight: 700;
				font-size: 0.8rem;
				text-transform: uppercase;
				letter-spacing: 0.1em;
				text-decoration: none;
				transition: color 0.2s linear;
                color: $color-nav-font;
				&:hover {
					color: $color-nav-font-hover;
				}
			}
		}
	}
</style>
