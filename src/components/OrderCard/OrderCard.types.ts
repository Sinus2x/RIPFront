import { Order } from "generated/types";

export interface OrderCardProps
    extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> {
    order: Order;
    isStaff?: boolean;
}
