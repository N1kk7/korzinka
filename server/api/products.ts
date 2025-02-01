import { defineEventHandler, readBody, readMultipartFormData } from "#imports";
import { error } from "@splidejs/splide/src/js/utils";
import { addProduct, getProducts } from "../services/productsServices"
// import prisma from "../../prisma/prisma";
import prisma from "../../prisma/prisma";
import supabase from "../../utils/supabase";

// console.log('products log');

export default defineEventHandler((event) => {

    const method = event.node.req.method;


    switch (method) {
        case 'GET': 
            return getProducts()
        break;
        case 'POST':
            return addProduct(event)
        break;
        case 'PATCH':
            // return await updateUser();
        break;
        case 'DELETE':
            // return await deleteUser();
        break;
        default: 
        return { message: "Method not defined"}

    }
});