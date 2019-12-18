var array1=[
  {title: "71 gun","year": 2014},
  {title: "Breaker surfer gun","year": 1980},
  {title: "2 Fast 2 Furious","year": 2003},
  {title: "2 Gun","year": 2013},
  ]   


let movTitle =[];
let duplicateWordArray = [];
let duplicateAllWordArray = [];
for(let i = 0; i < array1.length; i++) {
//    console.log(isDuplicate);
  for(let j = 0; j < array1.length; j++) {
     
      if (i !== j) {
          const a1 = array1[i].title.split(' ');
          const a2 = array1[j].title.split(' ');
          const duplicate = a1.filter(element => a2.includes(element));
          if(duplicate.length > 0) {
              if (duplicateWordArray.indexOf(duplicate[0]) === -1) {
                  duplicateWordArray.push(duplicate[0])
              }
          for(let k = 0; k < duplicate.length ; k++) {
              duplicateAllWordArray.push(duplicate[k]);
          }    
          }
      }
  }
}
console.log('duplicate count: ', duplicateWordArray); //Ans 1


let obj = {};
for (let  i = 0; i < duplicateAllWordArray.length; i++) {
    if (!obj[duplicateAllWordArray[i]]) {
        obj[duplicateAllWordArray[i]] = 1;
    } else {
        obj[duplicateAllWordArray[i]]++;
    }
}

let max = 0;
let maxCount = '';
for (let key in obj) {
    if (obj[key] > max) {   
        max = obj[key];
        maxCount = key + ' have max count ' + max;
    }
}
console.log(maxCount)