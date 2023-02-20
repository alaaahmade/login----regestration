const log = document.getElementById("log")
const regester = document.getElementById("reg")
const regpage = document.getElementById("regp")
const logp = document.getElementById("logp")

regester.onclick = function(){
    regpage.style.display = 'block';
    logp.style.display = 'none';
}

log.onclick = function(){
    regpage.style.display = 'none';
    logp.style.display = 'block';
}
