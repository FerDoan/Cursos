(() => {
    const $axios = document.getElementById('axios'),
    $fragment = document.createDocumentFragment();

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res =>{
        console.log(res)
        res.data.map((m) => {
            // if(!res.ok){
            //     throw new Error("Ocurrio un error")
            // }
            // json.map((m) => {
                console.log(m.id)
                const $li = document.createElement('li');
                $li.innerHTML = `${m.name} -- ${m.email} -- ${m.phone}`;
                $fragment.appendChild($li);
    
    
            });
    
            $axios.appendChild($fragment)
    })
    .catch(err => {
        console.log(err)
    })
    .finally();
})();

(() =>{
    const $axiosAsync = document.getElementById('axios-async'),
    $fragment = document.createDocumentFragment();

    
    async function getData(){
        try {
            let res = await axios.get('https://jsonplaceholder.typicode.com/users');
            // json = await res.data;

            res.data.map((m) => {
                // if(!res.ok){
                //     throw new Error("Ocurrio un error")
                // }
                // json.map((m) => {
                    console.log(m.id)
                    const $li = document.createElement('li');
                    $li.innerHTML = `${m.name} -- ${m.email} -- ${m.phone}`;
                    $fragment.appendChild($li);
        
        
                });
        
                $axiosAsync.appendChild($fragment)
        } catch (error) {
            
        } finally{

        }
    }

    getData();
})();