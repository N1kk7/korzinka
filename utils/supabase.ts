import { createClient } from '@supabase/supabase-js'

const config = useRuntimeConfig()
const supabaseUrl = config.public.apiBaseUrl
const supabaseKey = config.apiSecretKey

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase