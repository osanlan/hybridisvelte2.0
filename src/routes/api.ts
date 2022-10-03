/*
	This module is used by the /todos endpoint to
	make calls to api.svelte.dev, which stores todos
	for each user.

	(The data on the todo app will expire periodically; no
	guarantees are made. Don't use it to organise your life.)
*/

import { PrismaClient } from "@prisma/client"

declare global {
	namespace NodeJS {
		interface Global {
			prisma: PrismaClient;
		}
	}
}
let prisma: PrismaClient

if (process.env.NODE_ENV === "production") {
	prisma = new PrismaClient()
} else {
	if (!global.prisma) {
		global.prisma = new PrismaClient()
	}

	prisma = global.prisma
}

export default prisma

export type Todo = {
	uid: string;
	created_at: Date;
	text: string;
	done: boolean;
	pending_delete: boolean;
};

export type Product = {
	id: string;
	name:string;
	price:number;
	category:string;
	tags:string
}
