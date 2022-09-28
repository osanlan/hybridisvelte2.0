/*
	This module is used by the /todos endpoint to
	make calls to api.svelte.dev, which stores todos
	for each user.

	(The data on the todo app will expire periodically; no
	guarantees are made. Don't use it to organise your life.)
*/

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
