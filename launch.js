for (var i = 99; i >= 1; i--) {
        if (i == 1) {
                console.log(i + " bottle of beer on the wall");
                console.log(i + " bottle of beer");
                console.log("take one down pass it around")
                console.log(i - 1 + " bottles of beer on the wall");
                console.log(0 + " bottles of beer on the wall");
                console.log("0 bottles of beer, go to the store and buy some more");
               // i = 100;
        }
        else {
                console.log(i + " bottles of beer on the wall");
                console.log(i + " bottles of beer");
                console.log("take one down pass it around");
                if (i == 2) {
                        console.log(i - 1 + " bottle of beer on the wall");
                }
                else {
                        console.log(i - 1 + " bottles of beer on the wall");
                }
        }

}



