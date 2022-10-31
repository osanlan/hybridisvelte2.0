import type { PageServerLoad } from "./$types";
import { client } from '$lib/contentfulClient';


export const load: PageServerLoad = async ({ fetch }) => {
    const org = await client.getEntries({
        content_type: 'organization'
    });
    if (org) {
        return {
            status: 200,
            body: {
                org
            }
        };
    }

    return {
        status: 404
    };
}