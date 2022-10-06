import { error, redirect } from '@sveltejs/kit';
import type { Person } from '../../../api';
import { Prisma  } from '@prisma/client'
import prisma from '../../../api';

const emptyPerson: Person[] = []

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
    const s = url.searchParams
    let id = s.get("id")?.toString()??""
    let op = s.get("operation")?.toString()??""
    let name = s.get("name")?.toString()??"Unknown person"
    let group = s.get("group")??"hallitus"
    let title = s.get("title")?.toString()??"Unknown title"
    let order = s.get("order")??0
    let data = {name,group,title,order}
    let message=""
console.log(op)
    try {
        switch (op) {
            case "update":
                await prisma.person.update({ where: { id:id},data})
                message = `Updated ${id} update`
                break
            case "delete":
                await prisma.person.delete({ where: { id:id } })
                message = `Deleted ${id} `
                break
            case "create":
                let per = await prisma.person.create({data})
                message = `Created ${per.id}`
                break
        }
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            console.log(e.message)
        } else {
            console.log("Something Wrong")
            console.log(e)
        }
        message = op+" Fail, click search to refresh"
        return { persons:emptyPerson, message }

    }
    if(op=="delete") {//avoid reload and delete again
        throw redirect(301, '/admin/panel/persons');
    }

    try{   
        const p = (op=="search"&&name!="")?
        await prisma.person.findMany({where:{name:{contains:name}}}):
        await prisma.person.findMany()
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
        return { persons:emptyPerson, message }
    }
}