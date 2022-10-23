import lucia from 'lucia-sveltekit';
import prisma from "@lucia-sveltekit/adapter-prisma";
import { dev } from "$app/environment";
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

export const auth = lucia({
    adapter: prisma(client),
    secret: "ogoXhnT2wnmALCGsvU7jE3wk2Wwk2FmDSG",
    env: dev ? "DEV" : "PROD",
    transformUserData: (userData) => {
        return {
            userId: userData.id,
            username: userData.username,
        }
    }
});

export type Auth = typeof auth;
