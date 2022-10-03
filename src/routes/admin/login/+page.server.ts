import type { Actions } from "@sveltejs/kit";
import { invalid, redirect } from "@sveltejs/kit";
import { auth } from "$lib/server/lucia";
import { setCookie } from "lucia-sveltekit";

export const actions: Actions = {
    default: async ({ cookies, request }) => {
        const form = await request.formData();
        const email = form.get("email")?.toString() || ""; 
        const password = form.get("password")?.toString() || "";
        if (!email || !password) {
            return invalid(400, {
                message: "Missing input",
            });
        }
        try {
            const userSession = await auth.authenticateUser(
                "email",
                email,
                password
            );
            setCookie(cookies, ...userSession.cookies);
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
                message: "Unknown error",
            });
        }
    },
};