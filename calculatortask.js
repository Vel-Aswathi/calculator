function fun1() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let res = Number(num1) + Number(num2);
    let para = document.getElementById("para1");
    para.textContent = `The addition is ${res}`;
    child2.style.display = "block";
  }
  function fun2() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let res = Number(num1) - Number(num2);
    let para = document.getElementById("para2");
    para.textContent = `The subtraction  is ${res}`;
    child2.style.display = "block";
  }
  function fun3() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let res = Number(num1) / Number(num2);
    let para = document.getElementById("para3");
    para.textContent = `The division is ${res}`;
    child2.style.display = "block";
  }
  
  let add = document.getElementById("add");
  add.addEventListener("click", fun1, false);
  let sub = document.getElementById("sub");
  sub.addEventListener("click", fun2, false);
  let divi = document.getElementById("divi");
  divi.addEventListener("click", fun3, false);
  
  function refresh() {
    window.location.reload();
  }