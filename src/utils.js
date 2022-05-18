const checkResponseStatus = (response) => {
  if (!response.ok) {
    throw new Error(`Error`)
  } else {
    return response.json()
  }
}

export default checkResponseStatus