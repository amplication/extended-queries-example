import { Customer } from "../customer/Customer";

export type Payment = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  paymentType?: "Card" | "Cash" | "Paypal" | null;
  updatedAt: Date;
};
