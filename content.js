console.log("This is Test Msg from Extension?");
let p = document.getElementsByTagName('p');
for( e of p){
    e.innerHTML = "Suhail has conquered the World!";
    e.style['background-color'] = "#FF00FF";
}