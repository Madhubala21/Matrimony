
import { adminDbController } from "../../core/database/Controller/adminDbController.js";
import { userDbController } from "../../core/database/Controller/userDbController.js";
import * as Error from "../../core/errors/ErrorConstant.js"
// import { PayloadCompiler } from "../access/PayloadCompiler.js";


export class orderMiddleware { }

//category
orderMiddleware.Order = {
    fetchOrders: async () => {
        const fetched = await adminDbController.Orders.fetchOrders();
        if (fetched != null && fetched != undefined && Object.keys(fetched).length != 0) {
            return fetched;
        } else {
            return "No Orders Found"
        }
    },
    fetchSingleOrders: async ({ body }) => {
        const fetchOrder = await adminDbController.Orders.getSingleOrders(body);
        fetchOrder.cartId = JSON.parse(fetchOrder.cartId);
        fetchOrder.customerId = fetchOrder.customerId;
        fetchOrder.shippingAddress = fetchOrder.shippingAddress;

        const fetchUser = await adminDbController.Customer.getSingleCustomer(fetchOrder);

        const fetchAddress = await userDbController.Address.fetchAddressbyId(fetchOrder);

        const fetchCart = await userDbController.Cart.fetchCartArray(fetchOrder.cartId);
        delete fetchOrder.txnToken;
        delete fetchOrder.checksumHash;
        delete fetchOrder.cartId;
        delete fetchOrder.shippingAddress;
        delete fetchOrder.reason;
        delete fetchOrder.customerId;
        delete fetchUser.expiry;
        delete fetchUser.updatedAt;
        delete fetchCart.id;
        delete fetchCart.customerId;
        delete fetchCart.variantId;
        delete fetchCart.status;

        return { fetchOrder, fetchUser, fetchAddress, fetchCart }
    },
    changeOrderStatus: async ({ body }) => {
        const updated = await adminDbController.Orders.changeOrderStatus(body);
        if (updated[0] != 0) {
            return "Order Updated Successfully"

        } else {
            throw Error.SomethingWentWrong("Unable to Change Status")
        }
    },
}
