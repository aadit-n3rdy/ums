//script for home-page + graph for semester score

const ctx = document.getElementById('marks');

const subjects = [
    '19CSE102',
    '19CSE103',
    '19CSE111', 
    '19MAT112',
    '19MAT115',
    '19MEE181',
    '19EEE111',
    '19EEE182',
    '19CUL111',
    '19PHY101'
];

const student_marks = [8.4,
    9.2,
    8.5,
    9.8,
    9.0,
    8.4,
    4.5,
    8.0,
    9.4,
    9.1
];

const average = [
    8.1,
    8.5,
    7.9,
    8.2,
    8.6,
    9.2,
    7.2,
    8.3,
    9.1,
    7.2
];

const arrear = [
    6.5,
    6.4,
    5.7,
    6.4,
    7.1,
    6.5,
    5.4,
    7.5,
    6.0,
    4.5
];

var i,j;
for(i=0;i<10;i++) {
    for(j=0;j<10;j++) {
        if(student_marks[i]>average[j]) {
            document.getElementById("above").append(subjects[i]+" ");
            j=11;
        }
        else if(student_marks[i]<arrear[j])
        {
            document.getElementById("arrear").append(subjects[i]+" ");
            j=11;
        }
        else {
            document.getElementById("below").append(subjects[i]+" ");
            j=11;
        }
    }
}

const graph = new Chart(ctx, {
    type: 'line',
    data: {
        labels: subjects,
        datasets: [
            {
                label: "Student",
                data: student_marks,
                borderColor: "pink",
                backgroundColor: "pink",
                fill: false,
            },
            {
                label: "Average",
                data: average,
                borderColor: "purple",
                fill: true,
            },
            {
                label: "Arrear",
                data: arrear,
                borderColor: "red",
                backgroundColor: "rgba(255,138,138,0.4)",
                fill:true,
            }
        ],  
    },
    options: {
        maintainAspectRatio: false,
        responsive: false,
    }
})
