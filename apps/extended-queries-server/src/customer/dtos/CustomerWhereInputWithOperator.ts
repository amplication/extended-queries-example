import { InputType, Field } from "@nestjs/graphql";
import { IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { CustomerWhereInput } from "../base/CustomerWhereInput";

@InputType()
class CustomerWhereInputWithOperator extends CustomerWhereInput {
  @Type(() => CustomerWhereInput)
  @IsOptional()
  @Field(() => CustomerWhereInput, {
    nullable: true,
  })
  AND?: CustomerWhereInput;

  @Type(() => CustomerWhereInput)
  @IsOptional()
  @Field(() => CustomerWhereInput, {
    nullable: true,
  })
  OR?: CustomerWhereInput;

  @Type(() => CustomerWhereInput)
  @IsOptional()
  @Field(() => CustomerWhereInput, {
    nullable: true,
  })
  NOT?: CustomerWhereInput;
}

export { CustomerWhereInputWithOperator as CustomerWhereInputWithOperator };
