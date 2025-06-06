import prismaClient from "../../prisma";

class ListCategoryService{
    async execute(){

        const category = prismaClient.category.findMany({
            select: {
                id: true,
                name: true,
            }
        })

        return category;
    }
}

export { ListCategoryService }