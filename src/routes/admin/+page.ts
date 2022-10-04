import { redirect } from '@sveltejs/kit';
import { getSession } from "lucia-sveltekit/load";
import type { PageLoad } from "./$types";

export const load: PageLoad = async (event) => {
    const session = await getSession(event);
    if (session == null) throw redirect(302, '/admin/login');
    if (session != null) throw redirect(302, '/admin/panel');
}