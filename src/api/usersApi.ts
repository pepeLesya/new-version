export const fetchUsers= ()=>{
 return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
         if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    return response.json()
    })
    .then((data) => {
          return data.slice(0, 6); 
        });
    
}
const users = await fetchUsers()
console.log(users)