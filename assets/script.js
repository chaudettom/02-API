// definir endpoint
let endpoint = 'https://randomuser.me/api/?results=10';


// faire une requete sur l'API Randomuser

fetch(endpoint)
.then(
    //fonction de callback anonyme
    function (response) {
    //console.log(response)

    if (response.status == 200){
        response.json()
        .then(
            function (datas){
                console.log(datas.results);

                let users = datas.results;

                let tabUsers = document.getElementById('userLines');

                users.forEach(
                    function(user){
                        console.log(`User : ${user.name.first}`);

                        tabUsers.appendChild(generateUser(user));
                    }
                )
            }
           
        )
    } else{
        console.log("Mauvais statut de reponse")
    }
    //affichage du code status de la reponse
    console.log(response.status)

    //le contenu de la reponse est dans le body
    console.log(response.body)
    }
)
function generateUser(datauser){
    console.log(datauser);
    //Creer les elements
    let generatedUserLine = document.createElement("TR");
    let tdID = document.createElement("TD");
    let tdName = document.createElement("TD");
    let tdIMG = document.createElement("TD");
    let IMG = document.createElement("IMG");
    let tdGENDER = document.createElement("TD");
    let tdVILLE = document.createElement("TD");
    let tdPAYS = document.createElement("TD");

    //Colonne ID
    tdID.innerText = datauser.login.username;

    //Colonne Nom
    tdName.innerText = datauser.name.title + " " + datauser.name.first + " " + datauser.name.last;

    //Colonne IMG
    IMG.src = datauser.picture.medium;
    tdIMG.appendChild(IMG);

    //Colonne genre avec emoji
    if (datauser.gender === "male") {
        tdGENDER.innerText = "👨";
    } else {
        tdGENDER.innerText = "👩";
    }


    //Colonne ville
    tdVILLE.innerText = datauser.location.city;

    //Colonne pays
    tdPAYS.innerText = datauser.location.state;



    //Afilliation
    generatedUserLine.appendChild(tdID);
    generatedUserLine.appendChild(tdName);
    generatedUserLine.appendChild(tdIMG);
    generatedUserLine.appendChild(tdGENDER);
    generatedUserLine.appendChild(tdVILLE);
    generatedUserLine.appendChild(tdPAYS);

    //Renvoie de la ligne genere
    return generatedUserLine;
}