async function getDadosNasa() {
  const url = `https://api.nasa.gov/planetary/apod?api_key=${CONFIG.NASA_API_KEY}`;
  try {
    const response = await fetch(url);
    if(!response.ok){
        throw new Error("Erro ao tentar acessar a API");
    }
    console.log('teste')
    const data = await response.json();
    console.log(data);  
  } catch (error) {
    console.error("erro:" + error);
  }
}
getDadosNasa();
