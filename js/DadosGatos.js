const url = `https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=beng&api_key=${CONFIG.CAT_API_KEY}`
async function getGatos() {
    const response = await fetch(url);
    try{
        if(!response.ok){
            throw new Error("Erro ao tentar acessar a API");
        }
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.error("Error: " + error);
    }
}
getGatos();