export interface OrdersHistory {
    orderDetail: OrderDetail[];
    id:          number;
    date:        Date;
    status:      null;
    email:       string;
    alias:       string;
}
export interface OrderDetail {
    name:             string;
    alias:            string;
    shortDescription: string;
    quantity:         number;
    price:            number;
    image:            string;
    description:      string;
}