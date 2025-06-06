import { Request, Response } from "express";
import { ListByCategoryService } from "../../services/product/ListByCategoryService";
import { ListOrdersService } from "../../services/order/ListOrdersService";

class ListOrdersController {
    async handle(req: Request, res: Response) {

        const listOrdersService = new ListOrdersService();

        const orders = await listOrdersService.execute();

        return res.json(orders);

    }
}
export { ListOrdersController }