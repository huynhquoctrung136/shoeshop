/** @format */

import { OrdersHistory } from "./OrderModel";

export interface UserLoginModel {
  email: string;
  password: string;
}

export interface UserProfile {
  ordersHistory: OrdersHistory[];
  email:         string;
  name:          string;
  password:      null;
  gender:        boolean;
  phone:         string;
  facebookId:    string;
  deleted:       boolean;
  avatar:        string;
}