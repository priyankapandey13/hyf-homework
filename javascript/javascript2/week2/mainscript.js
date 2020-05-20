var array1=[
  {title: "71 gun","year": 2014},
  {title: "Breaker surfer gun","year": 1980},
  {title: "2 Fast 2 Furious","year": 2003},
  {title: "2 Gun","year": 2013},
  ]   


const duplicated = [];
const word = array1.map(duplicate => {

    for (let i = 0; i <= duplicate.title.length; i++) {
        for (let j = i; j <= duplicate.title.length; j++) {

            if (i != j && duplicate.title[i] == duplicate.title[j]) {
                duplicated.push(duplicate);

                return duplicate;

            }

        }
    }

});
console.log(duplicated);