const XMLHttpRequest = require("xhr2");

const { of } = require("rxjs");
const { ajax } = require("rxjs/ajax");
const { map, concatAll } = require("rxjs/operators");

ajax({
  createXHR: () => new XMLHttpRequest(),
  url: "https://api.github.com/users/devleandrodias/repos",
})
  .pipe(map((res) => res.xhr.response))
  .pipe(concatAll())
  .pipe(
    map((repo) => ({
      name: repo.full_name,
      url: repo.html_url,
    }))
  )
  .subscribe(console.log);
