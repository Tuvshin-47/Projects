console.log('JS callback hell');

// func01 гэдэг setTimeout ашиглан
//  1-3 хооронд дурын секундээр ажиллахдаа
// А гэж хэвлэдэг  функц бичнэ үү
function func01(){

    const timer = Math.floor(3 * Math.random() + 1);
    console.log(timer);

    setTimeout(() => {
        console.log('A');
    }, timer * 1000);
}

// func01();
// func02 гэдэг setTimeout ашиглан
//  1-5 хооронд дурын секундээр ажиллахдаа
// B гэж хэвлэдэг  функц бичнэ үү
function func02(){

    const timer = Math.floor(5 * Math.random() + 1);
    console.log(timer);

    setTimeout(() => {
        console.log('B');
    }, timer * 1000);
}

// func02();
// func03 гэдэг setTimeout ашиглан
//  1-4 хооронд дурын секундээр ажиллахдаа
// C гэж хэвлэдэг  функц бичнэ үү

// Энэ 3 функцээ дуудаж ажиллуулж үзнэ үү
function func03(){

    const timer = Math.floor(4 * Math.random() + 1);
    console.log(timer);

    setTimeout(() => {
        console.log('C');
    }, timer * 1000);
}
// func03();

// Problem
// Яаж одоо A, B, C гэж дандаа хэвлэдэг болгох вэ?
function func04(callback){
    const timer = Math.floor(3 * Math.random() + 1);
    console.log(timer);

    setTimeout(() => {
        console.log('A');
        callback();
    }, timer * 1000);
}

// func04(func02);
function func02B(callback){

    const timer = Math.floor(5 * Math.random() + 1);
    console.log(timer);

    setTimeout(() => {
        console.log('B');
        callback();
    }, timer * 1000);
}
function func05(callback01, callback02){
    const timer = Math.floor(3 * Math.random() + 1);
    console.log(timer);

    setTimeout(() => {
        console.log('A');
        callback01(callback02);
    }, timer * 1000);
}

func05(func02B, func03);

// Turuu's version of callback 
function func06(){
    const timer=Math.floor(3*Math.random()+1);
    console.log(timer);

    const timer2=Math.floor(3*Math.random()+1);
    console.log(timer2);

    const timer3=Math.floor(3*Math.random()+1);
    console.log(timer3);

    setTimeout(() =>{
        console.log('A');
        setTimeout(() => {
            console.log("B");
            setTimeout(() => {
                console.log('C');
                setTimeout(()=>{
                    console.log('D');
                    setTimeout(()=>{
                        console.log('F');
                        setTimeout(()=>{
                            console.log('E');
                            setTimeout(()=>{
                                console.log('G');
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000);
            }, timer3*1000);
        }, timer2*1000);
    },timer*1000);
}