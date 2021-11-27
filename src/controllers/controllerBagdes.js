////link para post
const API_URLP = "http://localhost:3005/api/badge";



export const listBadges = async () => {
  return await fetch(API_URLP);
}; 


