////link para post
const API_URLP = "http://localhost:3005/api/agora";



export const listDash = async (id) => {
  return await fetch(`${API_URLP}/get-outcome-dash/${id}`);
}; 