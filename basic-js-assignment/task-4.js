function calculateFinalScore(student){
    if(typeof student !== 'object'){
        return 'Invalid Input';
    }
    else{
        let totalScore = 0;
        if(!student.isFamily){
            totalScore = student.testScore + student.schoolGrade;
        }
        else{
            totalScore = 20 + student.testScore + student.schoolGrade;
        }
        if(totalScore>=80){
            return true;
        }
        else{
            return false;
        }
    }
}

const student = {
    name: 'alif',
    testScore: 45,
    schoolGrade: 30,
    isFamily: true
}

console.log(calculateFinalScore(student));