// GET ALL PRODUCTS FROM API

// ADDING NEW CATEGORY TO API
import { createRouter, defineEventHandler, useBase } from "h3";
import fs from 'fs';
import formidable from 'formidable';
import prisma from "@/prisma/prisma";
import path from "path";
// import supabase from "@/utils/supabase";
// import supabase from "@/utils/supabase";

const router = createRouter();

// router.get('/categories', defineEventHandler(() => {


// }));

router.get('/categories', defineEventHandler(() => {
    
    return {
        key: 'ololo'
    };
}));

export default useBase('/api/categories', router.handler)