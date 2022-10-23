import { Prisma } from "@prisma/client";
import prisma from '../api';

/** @type {Products}*/
const emptyProduct: any[] = []

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
    let message=""

    try{   
        const p = await prisma.person.findMany()
        await prisma.$disconnect()
        return { persons:p, message }

    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            console.log("Prisma Error found")
            console.log(e.message)
        } else {
            console.log("Something Wrong at findMany ")
            console.log(e)
        }
        message = "findMany() Fail, check console logs"
        return { products:emptyProduct, message }
    }
}