const playsonfloresta = document.querySelector(".floresta")
const playsonsonchuva = document.querySelector(".chuva img")
const playsoncafeteria = document.querySelector(".cafeteria")
const playsonlareira = document.querySelector(".lareira")
const audiofloresta = document.querySelector("#audiofloresta")
const audiochuva = document.querySelector("#audiochuva")
const audiocafeteria = document.querySelector("#audiocafeteria")
const audiolareira = document.querySelector("#audiolareira")
let controleintervalo=''
let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")
const botaoplay = document.querySelector("#botaoplay")
const botaostop = document.querySelector("#stopbotaos")
const botaoaddtime = document.querySelector("#botaoaddtime")
const botaoremovetime = document.querySelector("#botaoremovetime")
botaoremovetime.addEventListener('click',removetime)
botaoaddtime.addEventListener('click',addtime)
botaostop.addEventListener('click',stoptimmer)
botaoplay.addEventListener('click',starttimmer)
playsonfloresta.addEventListener('click',reproduzirson)
playsonsonchuva.addEventListener('click',reproduzirson)
playsoncafeteria.addEventListener('click',reproduzirson)
playsonlareira.addEventListener('click',reproduzirson)

function reproduzirson(event){
  if(event.target == playsonfloresta){
    audiofloresta.play()
    audiochuva.pause()
    audiolareira.pause()
    audiocafeteria.pause()
  }else if(event.target == playsonsonchuva){
    audiofloresta.pause()
    audiochuva.play()
    audiolareira.pause()
    audiocafeteria.pause()
  }else if(event.target == playsonlareira){
    audiofloresta.pause()
    audiochuva.pause()
    audiolareira.play()
    audiocafeteria.pause()
  }else if(event.target == playsoncafeteria){
    audiofloresta.pause()
    audiochuva.pause()
    audiolareira.pause()
    audiocafeteria.play()
  }
}

function timmer(){
  
  
  let secondstratdo = Number(seconds.textContent)
  seconds.textContent = String(secondstratdo-1).padStart(2,'0')
  
  if(minutes.textContent == 'NaN'){ 
    seconds.textContent= '00'
    alert('digite um numero valido')
    stoptimmer()
  } 

 if(minutes.textContent <= 0 && seconds.textContent <= 0){
    clearInterval (controleintervalo)
  } 
  else if (seconds.textContent <= 0){
    let minutestratados=Number(minutes.textContent)
    minutes.textContent =  String(minutestratados-1).padStart(2,'0')
    seconds.textContent=59
  }
}
function starttimmer(){
  if(minutes.textContent=='00'){
    minutes.textContent=  Number(prompt("digite o tempo do cronometro"))
    botaoplay.removeEventListener('click',starttimmer)
    controleintervalo= setInterval(timmer,1000)
    if(minutes.textContent==''|| minutes.textContent == 0){
      seconds.textContent=1
      minutes.textContent='00'
      botaoplay.addEventListener('click',starttimmer)
      alert('digite um valor para o cronometro')
    }
  }
  else if (minutes.textContent !=='00'){
    controleintervalo= setInterval(timmer,1000)
    botaoplay.removeEventListener('click',starttimmer)
  }
  
}

function stoptimmer(){
  seconds.textContent= '00'
  minutes.textContent= '00'
  botaoplay.addEventListener('click',starttimmer)
  clearInterval(controleintervalo)
}

function addtime(){
  let minutestratados=Number(minutes.textContent)
    minutes.textContent =  String(minutestratados+5).padStart(2,'0')
}
function removetime(){
  if(minutes.textContent< 5){
  alert('restam menos de 5 minutos')
  return
  }
  let minutestratados=Number(minutes.textContent)
    minutes.textContent =  String(minutestratados-5).padStart(2,'0')
   }
