const fetchData = async (url)=>{
    try{
        const response= await fetch(url)
        if(response.ok){
            const data= await response.json()
            return data
        }
        throw new Error(response.statusText)
    }catch(error){
        console.log(error.message)
    }
}

export default fetchData