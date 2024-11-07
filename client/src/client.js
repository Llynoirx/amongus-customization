import {createClient} from '@supabase/supabase-js'

const URL = 'https://zccstgwepkkjjaatrgpj.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjY3N0Z3dlcGtramphYXRyZ3BqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3ODM0NzcsImV4cCI6MjA0NjM1OTQ3N30.oj8emG3GE6_059RlB0CEkOaWxpFXPEPsX3Wb1XPqAwE'

export const supabase = createClient(URL, API_KEY);