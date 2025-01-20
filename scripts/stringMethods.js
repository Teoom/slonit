/*Мы исправляем за пользователем его ввод данных и хотим, чтобы наша строка начиналась с большой буквы, независимо от того, что ввел пользователь.
Необходимо реализовать такую функцию. */

const userData = firstLetterString(prompt())

function firstLetterString(str) {
  const firstLetter = str[0].toUpperCase();

  return firstLetter + str.slice(1);
}

console.log("firstLetterString:", userData)




/*
На вход получаем длинную или не очень строку и размер ограничения (например, то что у нас влезает 40 символов).
На выходе возвращает, по необходимости укороченную строку, в конце которой стоит троеточие.
Усложняем задание тем, что строка не должна обрезаться посредине слова. Обрезаем строку по пробелу или по символу знака препинания (,.!?:;)/ */


const userString = editStringLenght("Текст! Какой? Какой-то. А далее: раз; два; три. Пять, шесть, семь.")

function editStringLenght(str) {
  if(str.length <= 40) return str;
  const arrOfString = str.split(' ');

  let newStr = "";
  let i = 0;

  while(true) {
      if(!(newStr.length + arrOfString[i].length + 3 > 40)) {
        newStr += arrOfString[i] + " ";
        i++;
        
      } else {
        newStr = newStr.slice(0, -1) + "...";
        break;
      }
  }

  return newStr;
}

console.log("editStringLenght:", userString);


/* 
Функция на вход получает 2 строки, а на выходе возвращает true/false в зависимости от того, является хотя бы одна из строк (не важно какая) подстрокой другой строки. 
Если да, то возвращается true. В противном случае - false.
*/

function isSubstring(str1, str2) {
  if(str1.includes(str2) || str2.includes(str1)) {
    return true;
  }

  return false;
}

console.log("isSubsting:", isSubstring("text", "ext"));
console.log("isSubsting:", isSubstring("me", "something"));
console.log("isSubsting:", isSubstring("some text", "just text"))