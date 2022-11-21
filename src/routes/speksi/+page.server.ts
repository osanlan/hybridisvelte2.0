import type { PageServerLoad } from "./$types";
import { client } from '$lib/contentfulClient';


export const load: PageServerLoad = async ({ fetch }) => {
    const pageData = await client.getEntries({
        content_type: 'page',
        'fields.uid[in]': 'speksi'
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