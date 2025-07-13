let languages = ["C", "Python", "JavaScript"];
let comments = ["is fun", "is cool", "is amazing"];

 
for (let i = 0, p = 0; i < languages.length && p < comments.length; i++, p++) {
  console.log(`${languages[i]} ${comments[p]}`);
}

 