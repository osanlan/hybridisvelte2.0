import type { Handle } from '@sveltejs/kit';
import { auth } from '$lib/server/lucia';

export const handle: Handle = auth.handleHooks()
