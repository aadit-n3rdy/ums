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

const links = [
    "subjects/sem_ii/19cse102.html",
    "subjects/sem_ii/19cse103.html",
    "subjects/sem_ii/19cse111.html",
    "subjects/sem_ii/19mat112.html",
    "subjects/sem_ii/19mat115.html",
    "subjects/sem_ii/19mee181.html",
    "subjects/sem_ii/19eee111.html",
    "subjects/sem_ii/19eee182.html",
    "subjects/sem_ii/19cul111.html",
    "subjects/sem_ii/19phy101.html",
]

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
        var link = document.createElement("a");
        link.href = links[i];
        link.innerHTML = subjects[i]; 

        if(student_marks[i]>=9.0) {
            document.getElementById("distinction").append(link);
            document.getElementById("distinction").append(" ");
            j=11;
        } else if(student_marks[i]>average[i]) {
            document.getElementById("above").append(link);
            document.getElementById("above").append(" ");
            j=11;
        }
        else if(student_marks[i]<arrear[i])
        {
            document.getElementById("below").append(link);
            document.getElementById("below").append(" ");
            j=11;
        }
        else {
            document.getElementById("arrear").append(link);
            document.getElementById("arrear").append(" ");
            j=11;
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
                backgroundColor: "rgba(255, 192, 203, 0.4)",
                fill: false,
                pointBackgroundColor: "rgba(254, 197, 229, 0.4)",
                pointBorderColor: "rgba(254, 197, 229, 1)",
            },
            {
                label: "Average",
                data: average,
                borderColor: "purple",
                fill: true,
                pointBackgroundColor: "rgba(181, 126, 220, 0.4)",
                pointBorderColor: "rgba(181, 126, 220, 1)",
            },
            {
                label: "Arrear",
                data: arrear,
                borderColor: "red",
                backgroundColor: "rgba(255,138,138,0.4)",
                fill:true,
                pointBackgroundColor: "rgba(254, 125, 106, 0.4)",
                pointBorderColor: "rgba(254, 125, 106, 1)",
            }
        ],  
    },
    options: {
        maintainAspectRatio: false,
        responsive: false,
    }
})
