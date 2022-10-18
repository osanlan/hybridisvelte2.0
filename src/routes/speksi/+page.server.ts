import { Prisma } from '@prisma/client'
import prisma from '../api'
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async (event) => {
    let message = "juhuuu";
    try {
        const text = await prisma.content.findMany();
        await prisma.$disconnect();
        return {content:text, message}
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            console.log("Prisma Error found")
            console.log(e.message)
        } else {
            console.log("Something Wrong at findMany ")
            console.log(e)
        }
        message = "findMany() Fail, check console logs"
        return { content:[], message }
    }
}