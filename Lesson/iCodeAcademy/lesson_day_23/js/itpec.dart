String grade(int score){
    String ret = '';
    if (score >= 80 && score <= 100){
        ret = 'D';
    } else if(score >= 50 && score < 80){
        ret = 'P';
    } else {
        ret = 'F';
    }
    return ret;
}

void main(){
    print(grade(80)); // D
}