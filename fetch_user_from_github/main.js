const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const output = document.getElementById("output");
const notfound = document.getElementById("notfound");

async function getUser() {
  const user = searchInput.value;
  searchInput.value = "";
  const url = "https://api.github.com/users/" + user;
  const response = await fetch(url);
  const text = await response.text();
  const obj = JSON.parse(text);
  if (obj.message == "Not Found") {
    notfound.style.display = "block";
    output.style.display = "";
    return;
  }

  if (notfound.style.display) {
    notfound.style.display = "";
  }

  if (!output.style.display) {
    output.style.display = "block";
  }

  const avatar = output.getElementsByTagName("img")[0];
  avatar.src = obj.avatar_url;
  const items = output.getElementsByTagName("li");
  for (let item of items) {
    if (item.id == "Name") {
      const link = item.getElementsByTagName("a")[0];
      link.innerHTML = obj.name;
      link.href = obj.html_url;
    } else if (item.id == "Email") {
      const link = item.getElementsByTagName("a")[0];
      link.innerHTML = obj.email;
      link.href = "mailto:" + obj.email;
    } else if (item.id == "Blog") {
      const link = item.getElementsByTagName("a")[0];
      link.innerHTML = obj.blog;
      link.href = obj.blog;
    } else if (item.id == "Company") {
      const para = item.getElementsByTagName("p")[0];
      para.innerHTML = obj.company;
    } else if (item.id == "From") {
      const para = item.getElementsByTagName("p")[0];
      para.innerHTML = obj.location;
    } else if (item.id == "Followers") {
      const para = item.getElementsByTagName("p")[0];
      para.innerHTML = obj.followers;
    } else if (item.id == "Followings") {
      const para = item.getElementsByTagName("p")[0];
      para.innerHTML = obj.following;
    } else if (item.id == "CreatedDate") {
      const para = item.getElementsByTagName("p")[0];
      const date = new Date(obj.created_at);
      para.innerHTML = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
    } else if (item.id == "LastVisit") {
      const para = item.getElementsByTagName("p")[0];
      const date = new Date(obj.updated_at);
      para.innerHTML = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
    }
  }
}

searchButton.addEventListener("click", getUser);
