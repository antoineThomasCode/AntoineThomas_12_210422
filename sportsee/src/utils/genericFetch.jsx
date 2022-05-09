const genericFetch = async (userId, endPoint ) => {
    const data = await fetch(`http://localhost:3000/user/${userId}/${endPoint}`);
    const result = data.json()
    return result
}
export default genericFetch