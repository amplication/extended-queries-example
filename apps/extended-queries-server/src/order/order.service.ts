import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrderServiceBase } from "./base/order.service.base";
import { Order, Prisma } from "@prisma/client";

@Injectable()
export class OrderService extends OrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async findManyOrdersWherePaymentMethod<T extends Prisma.OrderFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderFindManyArgs>
  ): Promise<Order[]> {
    return this.prisma.order.findMany(args);
  }
}
