import {createClient} from '@supabase/supabase-js'

const URL = 'https://zccstgwepkkjjaatrgpj.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6dmFhcmxtcGFuemV0aGhqeWhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA1OTUzNDEsImV4cCI6MjA0NjE3MTM0MX0.MBqto6e3lhTLTy7-1rFyin0i9kTmcav3nu51Id5AxJE'

export const supabase = createClient(URL, API_KEY);