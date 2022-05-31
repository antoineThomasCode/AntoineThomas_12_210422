/*const genericFetch = async (endPoint, method = GET ) => {
    const data = await fetch(`http://localhost:3000/user/${endPoint}`);
    const result = data.json()
    return result
}
export default genericFetch */

const requestHandler = async ({
    url,
    method = 'GET',
    headers = {},
    body = '',
    errMsg = 'Failed to fetch data',
  }) => {
    try {
      const res = await fetch(url, { method, headers, body: body === '' ? null : body });
      return res.json();
    } catch (err) {
        const error = document.createElement('span')
        const mainContainer = document.getElementById('main-container')
        error.innerHTML = err
        mainContainer.appendChild(error)

        console.log(err)
    }
  };
  
  export default requestHandler;