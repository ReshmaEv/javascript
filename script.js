// 2 solve the Array question  Using Array methods


//[ no,district,+ve cases,death rate,curred rate,1st dose vaccine,2nd dose vaccine]
covid_data = [
    [1,'Ernakulam',34000,2000,23000,20000,2000],
    [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Palakkad',12000,1000,20000,23000,3400],
    [7,'Kottayam',27000,1500,27000,14000,1000],
    [8,'Kollam',14000,2500,25000,18000,2700]
]

//1. district having Highest +ve case -// 

let place = covid_data.reduce((c1,c2)) =>c1[2]>c2[2] ? c1:c2





// //2. district having Highest 1st dose vaccine - 




// // console.log('-------------------------------------------');
    

// //3. district having lowest death rate - 
// console.log('-------------------------------------------');
  


// //4. sort data with +ve case in descending order - 
// console.log('-------------------------------------------');


    
// //5. is district with +ve cases > 15000 - 
// console.log('-------------------------------------------');

// //6. sort data with 1st dose vaccine - 
// console.log('-------------------------------------------');

// //7. Print Thrissur details - 
// console.log('-------------------------------------------');
