import { redirect } from '@sveltejs/kit';
import { getUser } from "lucia-sveltekit/load";
import type { PageLoad } from "./$types";

export const load: PageLoad = async (event) => {
    const session = await getUser(event);
    if (session == null) throw redirect(302, '/admin/login');
    if (session != null) throw redirect(302, '/admin/panel');
}