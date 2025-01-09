import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = 'https://cqywxhqugcbuwlrlmjpw.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxeXd4aHF1Z2NidXdscmxtanB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYwNzU3MDMsImV4cCI6MjA1MTY1MTcwM30.A23-FCY8Bnu0c6akagEeA39QmtXctH-sJ4I5twcJZuU';

const config = useRuntimeConfig()
const supabaseUrl = config.public.apiBaseUrl
const supabaseKey = config.apiSecretKey

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase