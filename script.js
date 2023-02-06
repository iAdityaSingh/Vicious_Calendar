
// let input = document.getElementById("inp")
// console.log(input.valur)

document.querySelector("#btn").addEventListener("click" , (e)=>{
    let inp = document.getElementById("inp").value ; 
    let pwd = document.getElementById("pwd").value ; 
    // console.log(document.getElementById)
    console.log()
    if( ! ((inp === "")  && (pwd === "")) ){
        window.location.assign("calendar.html");
    }
})

