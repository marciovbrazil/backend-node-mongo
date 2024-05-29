import prismaClient from "../prisma";

interface DeleteCustomerProps {
    id: string
}

class DeleteCustomerServices {
    async execute({ id }: DeleteCustomerProps ) {

        if (!id) {
            throw new Error("Solicitação Invalida");
            
        }
        const findCustomers = await prismaClient.customer.findFirst({
            where: {
                id: id
            }
        })

        if(!findCustomers) {
            throw new Error("Cliente não encontrado");
            
        }

        await prismaClient.customer.delete({
            where: {
                id: findCustomers.id
            }
        })     

        return {message: "Deletado com sucesso"};
    }
}

export { DeleteCustomerServices }