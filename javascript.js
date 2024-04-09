function soma(a = 5, b = 3){
    alert(a+b);
    
}

function calcular(){
    let a = parseFloat(document.getElementById("valor1").value);
    let b = parseFloat(document.getElementById("valor2").value);
    // let a = document.getElementById("valor1").value;
    // let b = document.getElementById("valor2").value;

    document.getElementById("resultado").value = eval(a+b);
    // document.getElementById("resultado").value = eval(a+'+'+b);

}