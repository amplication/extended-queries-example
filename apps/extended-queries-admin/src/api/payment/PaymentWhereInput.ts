import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type PaymentWhereInput = {
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  paymentType?: "Card" | "Cash" | "Paypal";
};
