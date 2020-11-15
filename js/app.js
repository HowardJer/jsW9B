var age = [15, 17, 20, 25, 40];

var isSubscribed = [true, false, true, false, false];




// if (age < 18 && is_suscribed == false)  {
//     console.log("the user is younger than 18 and not subscribed");
// }

// else if (age >= 18 && is_suscribed == false) {
//     console.log("the user is 18 and older and not subscribed");
// }

// else if (age < 18 && is_suscribed == true) {
//     console.log("the user is younger than 18 and is subscribed");
// }
// else if (age >= 18 && is_suscribed == true) {
//     console.log("the user is 18 and older and is subscribed");
// }



// else {
//     console.log("this is working for me");
// }




for(var i = 0; i < age.length ; i++) {
        if(age[i] < 18 && isSubscribed[i] == false) {
            console.log("the user is younger than 18 and not subscribed");
        }

    else if (age [i] >= 18 && isSubscribed [i] == true) {
        console.log("the user is 18 or older and is subscribed");
    }

    else if (age [i] < 18 && isSubscribed [i] == true) {
        console.log("the user is younger than 18 and is subscribed");
    }

    else if (age [i] >=18 && isSubscribed [i] == false) {
        console.log("the user is 18 or older and not subscribed");
    }


    else {
        console.log("this is working not for me");
}



}


// for(var counter = 0; counter < isSubscribed.length; counter++) {
//     ("<li>" + isSubscribed[counter] + "</li>");
//     console.log (isSubscribed[counter])
// }




// console.log(age);
// console.log(isSuscribed);



