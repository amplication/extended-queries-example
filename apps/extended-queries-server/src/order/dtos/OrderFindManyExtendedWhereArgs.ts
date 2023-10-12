import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { OrderWhereInputWithExtendedCustomer } from "./OrderWhereInputWithExtendedCustomer";
import { OrderOrderByInput } from "../base/OrderOrderByInput";

@ArgsType()
class OrderFindManyExtendedWhereArgs {
  @ApiProperty({
    required: false,
    type: () => OrderWhereInputWithExtendedCustomer,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => OrderWhereInputWithExtendedCustomer, { nullable: true })
  @Type(() => OrderWhereInputWithExtendedCustomer)
  where?: OrderWhereInputWithExtendedCustomer;

  @ApiProperty({
    required: false,
    type: [OrderOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [OrderOrderByInput], { nullable: true })
  @Type(() => OrderOrderByInput)
  orderBy?: Array<OrderOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { OrderFindManyExtendedWhereArgs as OrderFindManyExtendedWhereArgs };
