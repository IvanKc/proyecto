let web3 = new Web3 (new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/cc24b6b9e691408fa2939c1a0d9af854"));

function crear(){

//Creacion de cuentas
let acount = web3.eth.accounts.create();
let mynewaddres = acount.address
let mynewprivatekey = acount.privateKey
let correo = document.getElementById ("rcorreo").value
let contra = document.getElementById("rpass").value
let ccontra = document.getElementById("rpassword").value
localStorage.setItem("addres", mynewaddres)
localStorage.setItem("key", mynewprivatekey)
localStorage.setItem("correo", correo)
localStorage.setItem("contra", contra)
localStorage.setItem("ccontra", ccontra)
console.log(acount);
console.log(mynewaddres);
console.log(mynewprivatekey);
console.log(correo);
console.log(contra);
console.log(ccontra);

alert("Cuenta creada con Exitó")
setTimeout(function() {
 location.href = "../wallet/home.html";
}, 1000 * 5)

}