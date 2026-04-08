console.log('Lesson Day 19 - Loops FOR LOOP');

(function(){
    // 100 удаа хэвлэх
    for (let i = 1; i <= 100; i++){
        printMyName('Khangaikhuu');
    }
    // let i = 1; initial state эхлэх төлөв
    // i <= 100; condition нөхцөл шалгах
    // i++ - increment буюу тухайн initial state-ийг өөрчлөх
    onlyEvenNumbers();

})();

function printMyName(myName){
    document.write('<p>');
    document.write(myName);
    document.write('</p>')
}

function onlyEvenNumbers(){
    for(let i = 0; i < 100; i = i + 2){
        document.write('<p>');
        document.write(i);
        document.write('</p>');
    }
}
// only odd numbers хэвлэдэг болгоно уу. 50 хүртэлх тоонуудаас хэвлээрэй.

console.log('BREAK - FOR LOOP');
// Break жишээ
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break; // Давталтыг зогсоох
    }  
    console.log(i);
}
console.log(' CONTINUE - FOR LOOP');
// Continue жишээ
for (let i = 1; i <= 5; i++) {
    if (i === 3){
        continue; // Дараагийн давталтруу шилжих
    }
    console.log(i);
}