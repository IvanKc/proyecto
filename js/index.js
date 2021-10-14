let web3 = new Web3 (new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/cc24b6b9e691408fa2939c1a0d9af854"));


 function ingresar(){
//guardar valores en localstorage
let address = document.getElementById ("add").value
let private = document.getElementById("priv").value
localStorage.setItem("Address", address )
localStorage.setItem("PK", private)
var obtprive = localStorage.getItem("PK")
console.log(address)
console.log(private)

//obtencion cuentas con privateKey y addres
let getmyaddres = web3.eth.accounts.privateKeyToAccount(private)
let mywallet = getmyaddres.address;
console.log(mywallet)

//validacion para acceder
if(address == mywallet && private == obtprive ){
    //alert("tienes acceso")
    location.href = "../wallet/home.html"; 
}else{
    alert("Acceso Incorrecto, Verifique sus Credenciales")
}

 }