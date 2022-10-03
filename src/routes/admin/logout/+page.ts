import { signOut } from "lucia-sveltekit/client";
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export function load() {

    try {
        signOut("/");
        throw redirect(302, '/admin/login');

    } catch {
        // handle error
    }
    
};