let web3 = new Web3 (new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/cc24b6b9e691408fa2939c1a0d9af854"));


console.log(web3);
//let address = "0xB4A2C1A83C11b44F30d8E6E875ba39aB9f704574";
let address = localStorage.getItem("addres")
let ethers
let balance = web3.eth.getBalance(address)
.then(function(valor){

    ethers = web3.utils.fromWei(valor, 'ether')
        document.getElementById("eth").innerHTML = ethers ;
    console.log (ethers)
})

 

//obtencion cuentas con privateKey y addres
let getmyaddres = web3.eth.accounts.privateKeyToAccount("b4175b2fafa86e0b2725f11713e1b4b50c2bbb85997c0fe4ec3c1a67117fc33c")
let mywallet = getmyaddres.address;
console.log(mywallet)

let addr = localStorage.getItem("addres")
window.onload = function what(){
    document.getElementById("add").innerHTML = addr
}

function cancelar_trans(){
    location.href = "../wallet/home.html";
}

function enviar(){
    alert("Lo sentimos esta función esta en desarrollo :c")
}

function cancelar(){
    document.getElementById('mos_key').style.display = 'none';
    document.getElementById('mos_det').style.display = 'block';
}
function exportar(){
    document.getElementById('mos_key').style.display = 'block';
    document.getElementById('mos_det').style.display = 'none';
    
}
function ingresar(){
let con = localStorage.getItem("contra")
let key = localStorage.getItem("PK")
let con_contra = document.getElementById('contrasenia').value
if(con == con_contra){
   alert("Tu Private Key es: " + key ) 
   location.href = "../wallet/home.html"; 
}else{
    alert("Contraseña Incorrecta")
}
}


function ver_balance(){
    document.getElementById('balance').style.display = 'block';
    document.getElementById('transferir').style.display = 'none';
    document.getElementById('detalles').style.display = 'none';
}

function ver_transferencia(){
    document.getElementById('balance').style.display = 'none';
    document.getElementById('transferir').style.display = 'block';
    document.getElementById('detalles').style.display = 'none';
    
}

function ver_detalles(){
    document.getElementById('balance').style.display = 'none';
    document.getElementById('transferir').style.display = 'none';
    document.getElementById('detalles').style.display = 'block';
   
}
