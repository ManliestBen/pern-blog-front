import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_REACT_APP_BACK_END_SERVER_URL}/api/posts`

async function getAllPosts(){
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (error) {
    throw error
  }
}

export { getAllPosts }
