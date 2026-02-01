function cal() {
    var p1 = document.getElementById("p1").value;
    var p2 = document.getElementById("p2").value;
    var ans = document.getElementById("ans");
    var math = Math.floor(Math.random() * 100);

    ans.innerHTML = "The love between " + p1 + " and " + p2 + " is " + math + "%";

    if (math>=80){
        ans.innerHTML="The love between " + p1 + " and " + p2 + " is " + math + "%"+"And marriage is fixed";
    }if(math<50){
        ans.innerHTML="The love between " + p1 + " and " + p2 + " is " + math + "%"+"and try again";
    }if(math<=20){
        ans.innerHTML="The love between " + p1 + " and " + p2 + " is " + math + "%"+"waste of time";
    }
    }