import { Request, Response } from "express";
import { CreateOrderService } from "../../services/order/CreateOrderService";

class CreateOrderController{
    async handle(req: Request, res: Response){
        const { table, name } = req.body;

        const createorderService = new CreateOrderService();

        const order = await createorderService.execute({
            table,
            name,
        });

        return res.json(order);
    }

}

export { CreateOrderController }