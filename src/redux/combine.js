import { combineReducers } from "redux";

import admin from "./admin";
import user from './user'
import category from './cat'
import product from './Product'
import client from './client'
import invoice  from "./invoice";

const root = combineReducers({
    admin: admin,
    // user: user,
    category: category,
    product: product,
    client: client,
    invoice: invoice
})

export default root