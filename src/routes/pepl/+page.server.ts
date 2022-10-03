import { Prisma } from "@prisma/client";
import type { Product } from '../api';
import prisma from '../api';

/** @type {Products}*/
const emptyProduct: any[] = []

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
    const s = url.searchParams
    let id = s.get("id")?.toString()??""
    let op = s.get("operation")?.toString()??""
    let name = s.get("name")?.toString()??"Unknown product"
    let category = s.get("category")??"drink"
    let price = Number(s.get("price")??0)
    let tags = String(s.get("tags")).trim()
    let data = {name,category,price,tags}
    let message=""
console.log(op)
    try {
        switch (op) {
            case "update":
                await prisma.product.update({ where: { id:id},data})
                message = `Updated ${id} update`
                break
            case "delete":
                await prisma.product.delete({ where: { id:id } })
                message = `Deleted ${id} `
                break
            case "create":
                let pro = await prisma.product.create({data})
                message = `Created ${pro.id}`
                break
        }
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            console.log(e.message)
        } else {
            console.log("Something Wrong")
            console.log(e)
        }
        message = op+" Fail, check console logs"
        return { products:emptyProduct, message }

    }
    if(op=="delete") //avoid reload and delete again
        return;

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