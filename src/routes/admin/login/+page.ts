import { redirect } from '@sveltejs/kit';
import { getSession } from "lucia-sveltekit/client";
import type { PageLoad } from "./$types";

// /** @type {import('./$types').PageLoad} */
export const load: PageLoad =  async () => {
    const session = await getSession();
    console.log(session)
    if (session) {
        throw redirect(302, "/admin/panel");
    }
}