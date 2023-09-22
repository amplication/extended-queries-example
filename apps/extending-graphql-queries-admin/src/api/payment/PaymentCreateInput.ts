import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type PaymentCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  paymentType?: "Card" | "Cash" | "Paypal" | null;
};
