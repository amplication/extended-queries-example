import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type PaymentUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  paymentType?: "Card" | "Cash" | "Paypal" | null;
};
