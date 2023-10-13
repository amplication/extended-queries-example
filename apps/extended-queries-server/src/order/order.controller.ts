import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { OrderService } from "./order.service";
import { OrderControllerBase } from "./base/order.controller.base";
import { AclFilterResponseInterceptor } from "src/interceptors/aclFilterResponse.interceptor";
import { ApiNestedQuery } from "src/decorators/api-nested-query.decorator";
import { OrderFindManyExtendedWhereArgs } from "./dtos/OrderFindManyExtendedWhereArgs";
import { Order } from "./base/Order";
import * as errors from "../errors";

@swagger.ApiTags("orders")
@common.Controller("orders")
export class OrderController extends OrderControllerBase {
  constructor(
    protected readonly service: OrderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/customer/paymentMethod")
  @swagger.ApiOkResponse({ type: [Order] })
  @ApiNestedQuery(OrderFindManyExtendedWhereArgs)
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async ordersWherePaymentMethod(@common.Req() request: Request): Promise<Order[]> {
    const args = plainToClass(OrderFindManyExtendedWhereArgs, request.query);
    return this.service.findManyOrdersWherePaymentMethod({
      ...args,
      select: {
        createdAt: true,
        customer: {
          select: {
            id: true,
            payments: {
              select: {
                paymentType: true,
              },
            }
          },
        },
        discount: true,
        id: true,
        product: {
          select: {
            id: true,
          },
        },
        quantity: true,
        totalPrice: true,
        updatedAt: true,
      },
    });
  }
}
