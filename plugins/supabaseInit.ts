import supabase from "@utils/supabase";
import { useIndexStore } from "../stores/index-store";

export default defineNuxtPlugin(async (nuxtApp) => {
    const store = useIndexStore();
  
    const { data, error } = await $fetch("/api/category");
    if (!error && data) {
      store.setFetchedCategories(data);
    }
  });
  