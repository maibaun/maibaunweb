var ghpages = require("gh-pages");
ghpages.publish(
  "build",
  {
    branch: "master",
    repo: "https://github.com/maibaun/maiway-web",
  },
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("success");
    }
  }
);
