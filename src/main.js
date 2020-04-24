
export function saberi() {
    let a = document.getElementById('a').value
    let b = document.getElementById('b').value
    let x = Number(a) + Number(b);
    
    console.log('12e12das')
    alert(`Zbir je: ${x}`);
  }

 export function oduzmi() {
    let a = document.getElementById('a').value
    let b = document.getElementById('b').value
    let x = a - b;
    alert(`Razlika je: ${x}`);
  }

 export function podeli() {
    let a = document.getElementById('a').value
    let b = document.getElementById('b').value
    let x = a / b;
    alert(`Rezultat je: ${x}`);
  }

 export function pomnozi() {
    let a = document.getElementById('a').value
    let b = document.getElementById('b').value
    let x = a * b;
    alert(`Rezultat je: ${x}`);
  }
   
//document.getElementById("saberi").onclick=saberi();