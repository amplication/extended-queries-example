import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type PaymentWhereInput = {
  customer?: CustomerWhereUniqueInput;
  id?: IntFilter;
  paymentType?: "Card" | "Cash" | "Paypal";
};
