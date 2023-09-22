import { Address } from "../address/Address";
import { Order } from "../order/Order";
import { Payment } from "../payment/Payment";

export type Customer = {
  address?: Address | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  payments?: Array<Payment>;
  phone: string | null;
  updatedAt: Date;
};
