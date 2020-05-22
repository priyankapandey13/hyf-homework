// --------------------------------------------------------------------------------  Getting into promises

function user1() {
  return fetch(
    "https://api.github.com/search/repositories?q=user:masumesani"
  ).then((response) => response.json());
}
function user2() {
  return fetch(
    "https://api.github.com/search/repositories?q=user:Mekdes1"
  ).then((response) => response.json());
}
function user3() {
  return fetch(
    "https://api.github.com/search/repositories?q=user:krithi-kondana"
  ).then((response) => response.json());
}
const promise1 = user1();
const promise2 = user2();
const promise3 = user3();

Promise.all([promise1, promise2, promise3]).then((data) => {
  console.log(data);
  renderData(data);
});

const mainUl = document.querySelector("ul");
function renderData(data) {
  data.forEach((repos) => {
    const nameLi = document.createElement("li");
    mainUl.appendChild(nameLi);
    nameLi.innerHTML = `<br/><br/><br/> ${repos.items[0].owner.login}'s repositories <br/><br/>`;

    repos.items.forEach((repos) => {
      const repoUl = document.createElement("ul");
      nameLi.appendChild(repoUl);
      repoUl.innerHTML = `<li>${repos.full_name}: <a href='${repos.html_url}'>${repos.html_url}</a></li>`;
    });
  });
}
