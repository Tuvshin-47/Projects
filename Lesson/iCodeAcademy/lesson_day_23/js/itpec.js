console.log('ITPEC');

(function(){
    let score = 80;

    function grade(score) {
        let ret = '';
        if (score >= 80 && score <= 100){
            ret = 'D';
        } else if (score >= 50 && score < 80){
            ret = 'P';
        } else {
            ret = 'F';
        }
        return ret;
    }

    console.log(grade(score)); // PASS
})();

(function(){


    function ticketPrice(age, isMember){
        let ret;
        if((age <= 10 || age >= 60) || isMember){
            ret = 10;
        } else {
            ret = 20;
        }
        return ret;
    }
    
    console.log(ticketPrice(10, false)); // 10
    console.log(ticketPrice(35, false)); // 20
    console.log(ticketPrice(60, false));  // 10
    console.log(ticketPrice(35, true)); // 10

})();