console.log('JS - WHILE loops');

// Closure WHILE loop

// FOR loop
(function(){
    document.write(`<h3>FOR loop </h3>`);
    for(let i = 1; i <= 10; i++){
        document.write(i);
        document.write('<br/>');
    }
})();

// WHILE Loop

(function(){
    document.write(`<h3>WHILE loop</h3>`);

    let i = 1;
    while(i <= 10){
        document.write(i);
        document.write('<br/>');
        i++;
    }

    // ...

    // 1-ээс 10 хүртэл зөвхөн тэгш тоог хэвлэнэ үү
    // while loop ашиглаарай.
    i = 0;
    while(i <= 10){
        document.write(i);
        document.write('<br/>');
        i = i+2;
    }
})();

// DO WHILE 

(function (){
    // DO WHILE
    let i = 1;
    document.write('<h3>DO WHILE Loop</h3>')
    do {
        document.write(i);
        document.write('<br/>');
        i++;
    } while(i <= 10);

})();