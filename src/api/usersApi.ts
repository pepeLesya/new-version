export const fetchUsers= ()=>{
 return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
         if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    return response.json()
    })
    
}
const users = await fetchUsers()
console.log(users)