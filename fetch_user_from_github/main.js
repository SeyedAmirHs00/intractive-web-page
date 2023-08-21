const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const output = document.getElementById("output");
const notfound = document.getElementById("notfound");

async function getUser() {
  const user = searchInput.value;
  searchInput.value = ""
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

  
}

searchButton.addEventListener("click", getUser);

/*
{
  "login": "kamranahmedse",
  "id": 4921183,
  "node_id": "MDQ6VXNlcjQ5MjExODM=",
  "avatar_url": "https://avatars.githubusercontent.com/u/4921183?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/kamranahmedse",
  "html_url": "https://github.com/kamranahmedse",
  "followers_url": "https://api.github.com/users/kamranahmedse/followers",
  "following_url": "https://api.github.com/users/kamranahmedse/following{/other_user}",
  "gists_url": "https://api.github.com/users/kamranahmedse/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/kamranahmedse/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/kamranahmedse/subscriptions",
  "organizations_url": "https://api.github.com/users/kamranahmedse/orgs",
  "repos_url": "https://api.github.com/users/kamranahmedse/repos",
  "events_url": "https://api.github.com/users/kamranahmedse/events{/privacy}",
  "received_events_url": "https://api.github.com/users/kamranahmedse/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Kamran Ahmed",
  "company": "roadmap.sh",
  "blog": "youtube.com/theroadmap",
  "location": "United Kingdom",
  "email": null,
  "hireable": true,
  "bio": "Lover of all things web and opensource. Coding and writing stuff for humans™. Building roadmap.sh",
  "twitter_username": "kamrify",
  "public_repos": 95,
  "public_gists": 17,
  "followers": 28814,
  "following": 154,
  "created_at": "2013-07-02T12:54:45Z",
  "updated_at": "2023-08-16T11:20:48Z"
}

{
  message: 'Not Found', 
  documentation_url: 'https://docs.github.com/rest/users/users#get-a-user'
}
*/
