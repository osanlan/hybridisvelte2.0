import type { LayoutServerLoad } from './$types';
import { client } from '$lib/contentfulClient'

export const load: LayoutServerLoad = async ({ url }) => {
    const pageData = await client.getEntries({
        content_type: 'page',
        'fields.uid[in]': url.pathname == '/' ? 'etusivu' : url.pathname.substring(1)
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
    }
}