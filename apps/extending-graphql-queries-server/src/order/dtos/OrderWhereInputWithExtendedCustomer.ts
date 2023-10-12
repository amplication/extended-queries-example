import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { CustomerWhereInputWithExtendedFields } from "src/customer/dtos/CustomerWhereInputWithExtendedFields";
import { FloatNullableFilter } from "src/util/FloatNullableFilter";
import { StringFilter } from "src/util/StringFilter";
import { ProductWhereUniqueInput } from "src/product/base/ProductWhereUniqueInput";
import { IntNullableFilter } from "src/util/IntNullableFilter";

@InputType()
class OrderWhereInputWithExtendedCustomer {
  @ApiProperty({
    required: false,
    type: () => CustomerWhereInputWithExtendedFields,
  })
  @ValidateNested()
  @Type(() => CustomerWhereInputWithExtendedFields)
  @IsOptional()
  @Field(() => CustomerWhereInputWithExtendedFields, {
    nullable: true,
  })
  customer?: CustomerWhereInputWithExtendedFields;

  @ApiProperty({
    required: false,
    type: FloatNullableFilter,
  })
  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  discount?: FloatNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => ProductWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductWhereUniqueInput, {
    nullable: true,
  })
  product?: ProductWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  quantity?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  totalPrice?: IntNullableFilter;
}

export { OrderWhereInputWithExtendedCustomer as OrderWhereInputWithExtendedCustomer };
