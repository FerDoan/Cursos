(() =>{
    const xhr = new XMLHttpRequest();
    $xhr = document.getElementById('xhr'),
    $fragment = document.createDocumentFragment();

    xhr.addEventListener('readystatechange', (e) => {
        if (xhr.readyState !== 4) 
            return;
        if (xhr.status >= 200 && xhr.status < 300){
            console.log("EXITO")

            let json= JSON.parse(xhr.responseText)
            console.log(json)

            json.map((m) => {
                console.log(m.id)
                const $li = document.createElement('li');
                $li.innerHTML = `${m.name} -- ${m.email} -- ${m.phone}`;
                $fragment.appendChild($li);


            });
            $xhr.appendChild($fragment)
        }else{
            console.log("Error")
        }
            console.log(xhr)
        
    });

    xhr.open("GET","https://jsonplaceholder.typicode.com/users");

    xhr.send();
})();