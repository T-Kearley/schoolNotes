for (var i = 1; i <= 100; i++){
    if ( i % 3 == 0) {
        process.stdout.write("fizz");
    }
    if ( i % 5 == 0) {
        process.stdout.write("buzz");
    }
    if (i % 3 !=0 && i % 5 !=0)console.log(i)
else console.log("")
} 
