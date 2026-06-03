function tutupWelcome(){

    document.getElementById("welcome").style.display = "none";

}

const tombol = document.querySelectorAll(".btn");

tombol.forEach(function(btn){

    btn.addEventListener("click", function(){

        console.log("Download dimulai");

    });

});