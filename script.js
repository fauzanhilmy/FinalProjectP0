function tombolGatcha() {


    let x = 1024; //min 
    let y = 9999; //min

    let deg = Math.floor(Math.random() * (x - y)) + y;
    console.log(deg)
    document.getElementById('box').style.transform = "rotate(" + deg + "deg)";

    let element = document.getElementById('mainbox');
    element.classList.remove('animate');
    setTimeout(function() {
        element.classList.add('animate');
    }, 5000); //5000 = 5 second
}