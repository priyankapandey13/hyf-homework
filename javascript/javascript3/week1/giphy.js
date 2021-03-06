//  +++++++++++++++++++++++++++++++++++++++   Giphy api

// First i got an API KEY
const API_KEY = `EMDlVYmxfkG1r5yISiMP3lIIgQc9vg0O`;
let keyword;

let searchbtn = document.getElementById("srchbtn");

let datacallback = (data1) => {
  for (let i = 0; i < data1.pagination.count; i++) {
    let img = document.createElement("IMG");
      img.setAttribute("src", data1.data[i].images.downsized_large.url);
      document.getElementById("alldata").appendChild(img);
    // Get a random dog image and display it in the browser
  }
};

function getdata() {
  let keyword = document.getElementById("searchbox").value;
  const gifcount = document.getElementById("gifnumber").value;
  // created an inputbox and a button for searching the gif file

  if (!keyword) {
    document.getElementById("searchbox").style.borderColor = "red";

  } else {
    document.getElementById("searchbox").style.borderColor = "#d2d6d9";
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${gifcount}`
    )
      // getting all the data out thru api and sort it what i need to show

      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        datacallback(data);
      });
  }
}

searchbtn.setAttribute("onClick", "getdata()");
