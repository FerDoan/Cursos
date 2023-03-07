(() =>{
    const $fetch = document.getElementById('fetch'),
    $fragment = document.createDocumentFragment();

    fetch('https://jsonplaceholder.typicode.com/users')
    .then( res => {
        return res.ok ? res.json() : Promise.reject(res);
    }
    )
    .then( json => {
        console.log(json);
        json.map((m) => {
            console.log(m.id)
            const $li = document.createElement('li');
            $li.innerHTML = `${m.name} -- ${m.email} -- ${m.phone}`;
            $fragment.appendChild($li);


        });

        $fetch.appendChild($fragment)
    })
    .catch( err => {
        console.log(err)
    }
    )
    .finally(

    )
})();


(() =>{
    const $fetchAsync = document.getElementById('fetch-async'),
    $fragment = document.createDocumentFragment();

    async function getData(){
        try {
            let res = await fetch('https://jsonplaceholder.typicode.com/users')
            let json = await res.json();
            console.log('json',json)

            if(!res.ok){
                throw {
                    status: res.status, statusText: res.statusText
                }
            }
            json.map((m) => {
            // if(!res.ok){
            //     throw new Error("Ocurrio un error")
            // }
            // json.map((m) => {
                console.log(m.id)
                const $li = document.createElement('li');
                $li.innerHTML = `${m.name} -- ${m.email} -- ${m.phone}`;
                $fragment.appendChild($li);
    
    
            });
    
            $fetchAsync.appendChild($fragment)

        } catch (error) {
            console.log("Estoy en el catch", error)
        } finally{

        }
    };
    getData();
})();