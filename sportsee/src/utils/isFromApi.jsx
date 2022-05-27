function isFromApi () {
    if (process.env.REACT_APP_API === 'TRUE') {
      return true
    }
    return false
  }
export default isFromApi