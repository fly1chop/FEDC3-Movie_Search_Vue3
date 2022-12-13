export const request = async (url) => {
  try {
    const res = await fetch('/.netlify/functions/movies', {
      method: 'POST',
      body: JSON.stringify(url)
    })
  
    if(!res.ok) throw new Error(`failed to fetch data (${res.status})`)
  
    return await res.json()
  } catch(e) {
    alert(e.message)
    console.error(e)
  }
}
