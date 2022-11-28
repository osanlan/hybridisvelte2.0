import type { PageServerLoad } from "./$types";
import { client } from '$lib/contentfulClient';


export const load: PageServerLoad = async () => {
    const pageData = await client.getEntries({
        content_type: 'organization'
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