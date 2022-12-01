import axios from "axios"; 

const BASE_URL = "http://localhost:5001/api/"; 
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODI4YTEwZjA2ZTUxOTczMTlmZThhZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2OTg0OTkyNCwiZXhwIjoxNjcwMTk1NTI0fQ.uOO3wGBXD73cV_PWB4Vg5-eHmK4CNsjJLiW4cq1twGA"; 

export const publicRequest = axios.create({
    baseURL: BASE_URL,
}); 

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`} // temporary 
}); 