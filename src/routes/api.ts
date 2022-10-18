import { PrismaClient } from "@prisma/client"
declare var global: { prisma: PrismaClient };
// declare global {
// 	namespace NodeJS {
// 		interface Global {
// 			prisma: PrismaClient;
// 		}
// 	}
// }
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

export type Person = {
	id: string;
	name:string;
	group:string;
	title:string;
	order:number;
}

export type Content = {
	id:string;
	label:string;
	content:string;
}

