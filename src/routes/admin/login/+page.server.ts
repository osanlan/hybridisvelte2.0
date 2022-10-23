import { invalid, redirect, type Actions } from "@sveltejs/kit";
import { auth } from "$lib/server/lucia";

export const actions: Actions = {
    default: async ({ request, locals }) => {
        const form = await request.formData();
        const username = form.get("username");
        const password = form.get("password");

        if (!username || !password ||
            typeof username !== "string" || typeof password !== "string"
        ) return invalid(400);
        
        try {
            const user  = await auth.authenticateUser(
                "username",
                username,
                password
            );
            const session = await auth.createSession(user.userId);
            locals.setSession(session);
            throw redirect(302, "/admin/panel");
        } catch (e) {
            const error = e as Error;
            if (
                error.message === "AUTH_INVALID_IDENTIFIER_TOKEN" ||
                error.message === "AUTH_INVALID_PASSWORD"
            ) {
                throw invalid(400, {
                    message: "Incorrect email or password",
                });
            }

            return invalid(400, {
                message: "Unknown error(login)",
                message2: error.message
            });
        }
    },
};