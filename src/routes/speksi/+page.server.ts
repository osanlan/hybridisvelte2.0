import type { PageServerLoad } from "./$types";
import { client } from '$lib/contentfulClient';


export const load: PageServerLoad = async ({ fetch }) => {
    const pageData = await client.getEntries({
        content_type: 'page'
    });
    if (pageData) {
        return {
            status: 200,
            body: {
                pageData
            }
        };
    }

    return {
        status: 404
    };
}