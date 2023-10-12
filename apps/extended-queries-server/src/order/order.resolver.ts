import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { OrderResolverBase } from "./base/order.resolver.base";
import { Order } from "./base/Order";
import { OrderService } from "./order.service";
import { AclFilterResponseInterceptor } from "src/interceptors/aclFilterResponse.interceptor";
import { OrderFindManyExtendedWhereArgs } from "./dtos/OrderFindManyExtendedWhereArgs";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Order)
export class OrderResolver extends OrderResolverBase {
  constructor(
    protected readonly service: OrderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Order])
  @nestAccessControl.UseRoles({
    resource: "Order",
    action: "read",
    possession: "any",
  })
  async ordersWherePaymentMethod(
    @graphql.Args() args: OrderFindManyExtendedWhereArgs
  ): Promise<Order[]> {
    return this.service.findManyOrdersWherePaymentMethod(args);
  }
}
