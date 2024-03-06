# Useful JavaScript Code Snippets

2. Select a random element

```
const items = ["Ball", "Bat", "Cup"]
const randomIndex = Math.floor(Math.random()*items.length)
items[randomIndex]
```

3. Reverse a string

```
function reverseString(string) {
  return string.split(" ").reverse().join(" ")
}

revereseString("Random String")
```

4. Check if element has a class

```
const element = document.querySelector("#element")
element.classList.contains("active")
```

5. String interpolation

```
const name = "Jaya"
console.log(`Hi, ${name}. You have ${2 ** 3} new notifications.`}
//Hi, Jaya. You have 8 new notifications.
```

6. Loop through an array

```
const cars = ["Ford", "BMW", "Audi" ]
for (let car of cars) {
  console.log(car)
}

/_
Ford
BMW
Audi
_/
```

7. Get current time

```
const date = new Date()
const currentTime =
  `${date.getHours()}:${date.getMintues()}:${date.getSeconds()}`

console.log(currentTimes)
//example output: "22:16:41"
```

8. Replace part of a string

```
const string = "You are awesome."
const replacedString = string.replace("You", "We")

console.log(replacedString) //Output: "We are awesome"
```

9. Destructing variable assignment

```let profile = ['bob', 34, 'carpenter'];
let [name, age, job] = profile;
console.log(name);
// bob
```

10. Using the spread operator

```
let data = [1,2,3,4,5];
console.log(...data);
//  1 2 3 4 5
let data2 = [6,7,8,9,10];
let combined = [...data, ...data2];
console.log(...combined);
// 1 2 3 4 5 6 7 8 9 10
console.log(Math.max(...combined));
// 10
```
