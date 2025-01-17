const user = {
  name: 'Vasya',
  friends: 5,
  likes: 19,
  projects: 7,
}


function getSortedKeys(obj) { //[likes, projects, friends]
  const keys = [];

  const arrOfObj = Object.entries(obj).filter(elem => typeof elem[1] === "number").sort((elem1, elem2) => {
    if (elem1[1] > elem2[1]) {
      return -1;
    } else {
      return 1;
    }
  });


  arrOfObj.forEach(elem => {
    keys.push(elem[0]);
  })


  return keys;
}



console.log(getSortedKeys(user));

