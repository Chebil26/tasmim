const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

const BUCKET_NAME = "dzeko_server_images";
const BUCKET_URL =
  "https://dlomnkdfvdzwzajbgpxu.supabase.co/storage/v1/object/public/dzeko_server_images/";

const SUPABASE_URL = "https://dlomnkdfvdzwzajbgpxu.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsb21ua2RmdmR6d3phamJncHh1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NTQzMTI2NSwiZXhwIjoyMDExMDA3MjY1fQ.GTKiDPNCrY-UKn439-XJAAuqFRZN8dMhG3USDzs0eiM";

export { API_BASE_URL, BUCKET_NAME, BUCKET_URL, SUPABASE_URL, SUPABASE_KEY };
