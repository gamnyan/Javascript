// var firstName = "김";
// var middleName = "";
// var lastName = "영훈";

// var ticketAgent = "예술의 전당";
// var event = "서태지와 아이들";
// var qty = 2;
// var price = 10;

// // ES6 템플릿 문자열은 공백(줄바꿈 포함)을 유지한다

// console.log(`
//     ${lastName} 님께,

//     ${event} 티켓 ${qty} 건을 구매해주셔서 감사합니다.

//     주문 상세 정보:

//      ${firstName} ${lastName} ${middleName}
//      ${qty} x $${price} = $${qty * price} 공연: ${event}

//     공연 시작 30분 전까지 배부처에서 티켓을 수령하시기 바랍니다.

//     감사합니다.

//     ${ticketAgent} 드림
//     `);

// var article = {
//   title: "Template Strings",
//   body: `
//        <div>
//          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
//          <p> laboris nisi ut aliquip ex ea commodo consequat.</p>
//        </div>
//      `,
// };

// document.body.innerHTML = `
//     <section>
//         <header>
//             <h1>The HTML5 Blog</h1>
//         </header>
//         <article>
//             <h2>${article.title}</h2>
//             ${article.body}
//         </article>
//         <footer>
//             <p>copyright ${new Date().getFullYear()} | The HTML5 Blog</p>
//         </footer>
//     </section>
// `;

// function logCompliment(firstName, lastName) {
//   console.log(`${firstName + lastName} 잘했어요`);
//   document.write(`${firstName + lastName} 잘했어요!<br>`);
// }
// logCompliment("김", "영훈");

// const logCompliment2 = function (firstName, lastName) {
//   console.log(`${firstName + lastName} 잘했어요1`);
//   document.write(`${firstName + lastName} 잘했어요!2<br>`);
// };
// logCompliment2("김", "영훈");

// const logCompliment3 = (firstName, lastName) => {
//   console.log(`${firstName + lastName} 잘했어요3`);
//   document.write(`${firstName + lastName} 잘했어요!3<br>`);
// };
// logCompliment3("김", "영훈");

// const createComplement = function (firstName, lastName, message) {
//   return `${firstName + lastName}: ${message}`;
// };
// createComplement("김", "영훈", "아주 멋져요");
// console.log(createComplement("김", "영훈", "아주 멋져요"));
// document.write(createComplement("김", "영훈", "아주 멋져요<br>"));

// var message3 = "아주 멋져요3";
// const createComplement3 = (firstName, lastName, message) => {
//   return `${firstName + lastName}: ${message}`;
// };
// let 김영훈 = createComplement3(firstName, lastName, message3);
// console.log(김영훈);
// document.write(김영훈 + "<br>");

// var article = {
//   title: "React",
//   body: `
//         <div>
//          <p>React를 배웁시다.</p>
//        </div>`,
// };

// function logArticle(article) {
//   console.log(article.title);
//   console.log(article.body);
//   document.write(article.title);
//   document.writeln(article.body);
// }
// logArticle(article);

// const defaultPerson = {
//   name: {
//     first: "영훈",
//     last: "김",
//   },
//   favActivity: "게임"
// };
// function logActivity(p = defaultPerson) {
//   console.log(`${p.name.first}은(는) ${p.favActivity}를 좋아합니다.`);
//   document.writeln(`${p.name.first}은(는) ${p.favActivity}를 좋아합니다.`);
// }
// logActivity();

// const lordify = () => console.log("김영훈"); document.writeln("김영훈");
// lordify();

// function createPerson(firstName, lastName) {
//   return {
//     first: firstName,
//     last: lastName,
//   };
// }
// function logPerson(p) {
//   console.log(`${p.first + p.last}`);
//   document.write(`${p.first + p.last}`);
// }
// const person = createPerson("김", "영훈");
// logPerson(person);

// const createPersonArrow = (firstName, lastName) => ({first: firstName, last: lastName});
// const person2 = createPersonArrow("김", "영훈");
// logPerson(person2);

// const gangwon = {
//   resorts: ["용평", "평창", "강촌", "강릉", "홍천"],
//   print: function (delay = 1000) {
//     setTimeout(() => {
//       console.log(this.resorts.join(", "));
//     }, delay);
//   },
// };
// gangwon.print();

// const sandwich = {
//   bread: "더치 크런치",
//   meat: "참치",
//   cheese: "스위스",
//   toppings: ["상추", "토마토", "머스타드"],
// };

// let { bread, meat, toppings } = sandwich;

// console.log(bread, meat);

// sandwich.meat = "소";
// console.log(sandwich.meat);
// toppings.push("달걀후라이");
// toppings = ["상추", "토마토", "머스타드", "달걀후라이"];
// toppings.push("오이");
// console.log(toppings);
// console.log(sandwich.toppings);
// console.log(bread, meat, toppings[3]);

// const lordify = ({ firstName }) => console.log(`캔터베리의 ${firstName}`);
// var rq = {
//   firstName: "현석",
//   lastName: "오",
//   spouse: {
//     firstName: "계영",
//     lastName: "이",
//   },
// };
// lordify(rq);
// lordify(rq.spouse);

// const [firstAnimal, ,secondAnimal] = ["캥거루", "웜뱃", "코알라"];
// console.log(firstAnimal, secondAnimal);

// var name = "탈락";
// var elevation = 9738;
// var print = () => {
//   console.log(`${this.name} 산의 높이는 ${this.elevation}피트입니다.`);
//   document.write(`${this.name} 산의 높이는 ${this.elevation}피트입니다.<br>`);
// };

// var funHike = { name, elevation, print };

// funHike.print();
// document.write("<br>");

// // 예전 방식의 객체 리터럴

// var name = "Léo Taillefer";
// var sound = "Kahh";

// var skier = {
//   name: name,
//   sound: sound,
//   powderYell: function () {
//     var yell = this.sound.toUpperCase();
//     console.log(`${yell} ${yell} ${yell}!!!`);
//     document.write(`${yell} ${yell} ${yell}!!!<br>`);
//   },
//   speed: function (mph) {
//     this.speed = mph;
//     console.log("속력(mph):", mph);
//     document.write("속력(mph):", mph + "<br>");
//   },
// };

// skier.powderYell();
// skier.speed("엉덩이에 불날 것 같은");
// console.log(JSON.stringify(skier));
// document.write(JSON.stringify(skier) + "<br>");

// // 객체 리터럴 개선

// var name = "Julia Mancuso";
// var sound = "go fast";

// const skier = {
//   name,
//   sound,
//   powderYell() {
//     let yell = this.sound.toUpperCase();
//     console.log(`${yell} ${yell} ${yell}!!!`);
//   },
//   speed(mph) {
//     this.speed = mph;
//     console.log("속력(mph):", mph);
//   },
// };

// skier.powderYell();
// skier.speed(350);
// console.log(JSON.stringify(skier));

// // 스프레드 연산자

// var peaks = ["대청봉", "중청봉", "소청봉"];
// var canyons = ["천불동계곡", "가야동계곡"];
// var seoraksan = [...peaks, ...canyons];

// peaks.concat(canyons);
// document.writeln(peaks.concat(canyons)+"<br>")

// document.writeln(seoraksan.join(", "));

// // .reverse()가 peaks 배열을 변경함

// var peaks = ["대청봉", "중청봉", "소청봉"];
// var [last] = peaks.reverse();

// document.write(peaks.join(", ") + "<br>");
// document.write(last + "<br>");

// // peaks를 스프레드 연산자로 복사한 후 reverse 수행

// var peaks = ["대청봉", "중청봉", "소청봉"];
// var [last] = [...peaks].reverse();

// document.write(peaks.join(", ") + "<br>");
// document.write(last + "<br>"); // 소청봉

// // 스프레드 연산자와 구조분해를 함께 사용
// var lakes = ["경포호", "화진포", "송지호", "청초호"];

// var [first, ...rest] = lakes;

// document.write(first + "<br>");
// document.write(rest.join(", "));

// 스프레드 연산자로 인자를 배열로 바꾸기
// 스프레드 연산자로 인자 중 일부를 배열로 받기

// function directions(...args) {
//   var [start, ...remaining] = args;
//   var [finish, ...stops] = remaining.reverse();

//   document.write(`${args.length} 도시를 운행합니다.<br>`);
//   document.write(`${start}에서 출발합니다.<br>`);
//   document.write(`목적지는 ${finish}입니다.<br>`);
//   document.write(`중간에 ${stops.length}군데 들립니다.<br>`);
// }

// directions("서울", "수원", "천안", "대전", "대구", "부산");

// // 객체에 대한 스프레드 연산자

// var morning = {
//   breakfast: "미역국",
//   lunch: "삼치구이와 보리밥",
// };

// var dinner = "스테이크 정식";

// var backpackingMeals = {
//   ...morning,
//   dinner,
// };

// console.log(backpackingMeals);
// document.write(backpackingMeals);

/*
// 05-promises
const getFakeMembers = (count) => // 비추
  new Promise((resolves, rejects) => {
    const api = `https://api.randomuser.me/?nat=US&results=${count}`;
    const request = new XMLHttpRequest();
    request.open("GET", api);
    request.onload = () =>
      request.status === 200
        ? resolves(JSON.parse(request.response).results)
        : rejects(Error(request.statusText));
    request.onerror = (err) => rejects(err);
    request.send();
  });

getFakeMembers(10).then(
  (members) => console.log(members),
  (err) =>
    console.error(new Error("randomuser.me에서 멤버를 가져올 수 없습니다."))
);
/*
/* 
fetch(`https://api.randomuser.me/?nat=US&results=1`) // 추천 1
  .then((res) => res.json())
  .then((json) => json.results)
  .then(console.log)
  .catch(console.error);
*/
/*
const getFakePerson = async () => { // 추천 2
  try {
    const response = await fetch(`https://api.randomuser.me/?nat=US&results=1`);
    const json = await response.json();
    const results = json.results;
    console.log(results);
  } catch (error) {
    console.error(error);
  }
};
await getFakePerson();
console.log("다음에 할 일");
*/

/* // 06-es6-class-syntax
// 이전 방식으로 생성자를 만들고 프로토타입 설정하기

function Vacation(destination, length) {
  this.destination = destination;
  this.length = length;
}

Vacation.prototype.print = function () {
  console.log(this.destination + "은(는) " + this.length + "일 걸립니다.");
};

var maui = new Vacation("마우이", 7);

maui.print();
*/
/*
// 클래스를 사용해 정의하는 새로운 방식

class Vacation {
  constructor(destination, length) {
    this.destination = destination;
    this.length = length;
  }

  print() {
    console.log(this.destination + "은(는) " + this.length + "일 걸립니다.");
  }
}

const trip = new Vacation("칠레 산티아고", 9);

trip.print();
/*
// 상속

class Vacation {
  constructor(destination, length) {
    this.destination = destination;
    this.length = length;
  }

  print() {
    console.log(this.destination + "은(는) " + this.length + "일 걸립니다.");
  }
}

class Expedition extends Vacation {
  constructor(destination, length, gear) {
    super(destination, length);
    this.gear = gear;
  }

  print() {
    super.print();
    console.log(
      `당신의 ${this.gear.join("와(과) 당신의 ")}를(을) 가져오십시오.`
    );
  }
}

const trip = new Expedition("한라산", 3, ["선글라스", "오색 깃발", "카메라"]);

trip.print();
*/
/*
var log = function (message) {
  console.log(message);
};

log("자바스크립트에서는 함수를 변수에 넣을 수 있습니다.");

const log2 = (message) => console.log(message);

log2("ES6 화살표 함수");

const obj = {
  message: "함수를 다른 값과 마찬가지로 객체에 추가할 수도 있습니다.",
  log() {
    console.log(this.message);
  },
};

obj.log();
const messages = [
  "함수를 배열에 넣을 수도 있습니다.",
  (message) => console.log(message),
  "일반적인 값과 마찬가지입니다.",
  (message) => console.log(message),
];

messages[1](messages[0]);
messages[3](messages[2]);

const insideFn = (logger) =>
logger("함수를 다른 함수에 인자로 넘길 수도 있습니다.");

insideFn((message) => console.log(message));

var createScream = (logger) => (m) =>
logger(m.toUpperCase() + "!!!");

const scream = createScream((message) => console.log(message));

scream("함수가 함수를 반환할 수도 있습니다");
scream("createScream은 함수를 반환합니다");
scream("scream은 createScream이 반환한 함수를 가리킵니다");

const string = "Restaurants in Hanalei";
let urlFriendly = "";

for (let i = 0; i < string.length; i++) {
  if (string[i] === " ") {
    urlFriendly += "-";
  } else {
    urlFriendly += string[i];
  }
}

// urlFriendly = urlFriendly.toLowerCase();

console.log(urlFriendly);

const string = "Restaurants in Hanalei";
let urlFriendly = string.replace(/ /g, "-"); // g = global

console.log(urlFriendly);

var target = document.getElementById("target");
var wrapper = document.createElement("div");
var headLine = document.createElement("h1");

wrapper.id = "welcome";
headLine.innerText = "Hello World";

wrapper.appendChild(headLine);
target.appendChild(wrapper);

// 위에걸 리액트라면
const { render } = ReactDOM;

const Welcome = () => (
  <div id="welcome">
    <h1>Hello World</h1>
  </div>
);

render(<Welcome />, document.getElementById("target"));

const color_lawn = {
  title: "잔디",
  color: "#00FF00",
  rating: 0,
};
function rateColor(color, rating) {
  color.rating = rating;
  return color;
}
console.log(rateColor(color_lawn, 5).rating);
console.log(color_lawn.rating);

let color_lawn_1 = rateColor(color_lawn, 5);
console.log(Object.is(color_lawn, color_lawn_1));
color_lawn_1 = {
  title: "잔디",
  color: "#00FF00",
  rating: 1,
};
console.log(Object.is(color_lawn, color_lawn_1));

var rateColor1 = function (color, rating) {
  return Object.assign({}, color, { rating: rating });
};

//
// Object.assign으로 복사본을 만들어서 평점을 부여한다
//

console.log(rateColor1(color_lawn, 5).rating);
console.log(color_lawn.rating);

const rateColor2 = (color) => ({
  ...color,
  rating,
});
*/
/*
let list = [
  { title: "과격한 빨강" },
  { title: "잔디" },
  { title: "파티 핑크" },
];
// 원본 바꿈
const addColor = (qwe, asd) => qwe.push({ asd });
console.log(addColor(list, "화려한 녹색").length);
console.log(list);

console.log(list.length);

// 원본 유지
const addColor2 = (title, array) => [...array, { title }];
console.log(addColor2("갈색", list).length);
console.log(list.length);

// 순수 함수
const frederick = {
  name: "frederick Douglass",
  canRead: false,
  canWrite: false,
};

const selfEd = (a, canRead, canWrite) => ({ ...a, canRead, canWrite });
console.log(selfEd(frederick, true, true));

function selfEducate(person) {
  frederick.canRead = true;
  frederick.canWrite = true;
  return person;
}

selfEducate();
console.log(frederick);

//
let schools = ["Yorktown", "Washington & Lee", "Wakefield"];
console.log(schools.join(", "));

const wSchools = schools.filter((asd) => asd[0] === "W");

console.log(wSchools);

const cutSchool = (cut, list) => list.filter((want) => want !== cut);
console.log(cutSchool("Washington & Lee", schools).join("\n"));
console.log(schools.join("\n"));

const highSchools = schools.map((school) => `${school} High School`);
console.log(highSchools.join("\n"));

const highSchools1 = (a) => a.map((school) => `${school} High School`);
console.log(highSchools1(schools).join("\n"));

schools = [
  { name: "Yorktown" },
  { name: "Stratford" },
  { name: "Washington" },
  { name: "Wakefield" },
];

const editName = (oldName, name, arr) =>
  arr.map((item) => (item.name === oldName ? { ...item, name } : item));
console.log(schools);
console.log(editName("Stratford", "abc", schools));

const editNth = (n, name, arr) =>
  arr.map((item, i) => (i === n ? { ...item, name } : item));
console.log(schools);
console.log(editNth(2, "Stratford", schools));

const addSchool = (a, name) => a.concat({ name });
console.log(addSchool(schools, "서울대학교"));

console.log(schools);

const filterSchool = (a, cut) => console.log(a.filter((name) => name !== cut));
filterSchool(schools, "Washington");

const schools = {
  "Yorktown": 10,
  "Washington & Lee": 2,
  "Wakefield": 5,
}
const schoolArray = Object.keys(schools).map(key => ({
  name: key,
  wins: schools[key]
}))
console.log(schoolArray);
console.log(Object.keys(schools));
console.log(schools);

const ages = [21, 18, 42, 40, 64, 63, 34];
const sumAge = ages.reduce((p0, p1) => p0 + p1) / ages.length;
console.log(sumAge);

const maxAge = ages.reduce((max, age) => (age > max ? age : max));
const minAge = ages.reduce((max, age) => (age < max ? age : max));
console.log(maxAge);
console.log(minAge);

const colors = [
  {
    id: "-xekare",
    title: "과격한 빨강",
    rating: 3,
  },
  {
    id: "-jbwsof",
    title: "큰 파랑",
    rating: 2,
  },
  {
    id: "-prigbj",
    title: "큰곰 회색",
    rating: 5,
  },
  {
    id: "-ryhbhsl",
    title: "바나나",
    rating: 1,
  },
];

const hashColors = colors.reduce(
  (hash, {id, title, rating}) => {
    hash[id] = {title, rating}
    return hash;
  },
  {}
  )
  console.log(hashColors);

const colors = ["red", "red", "green", "blue", "green"];
const uniqueColors = colors.reduce(
  (unique, color) =>
    unique.indexOf(color) !== -1 ? unique : [...unique, color],
  []
);
console.log(uniqueColors);

const invokeIf = (condition, fnTrue, fnFalse) =>
  condition ? fnTrue() : fnFalse();

invokeIf(
  true,
  () => console.log("Welcome"),
  () => console.log("Unauthorize")
);

const userLogs = (userName) => (message) =>
  console.log(`${userName} ${message}`);

const log = userLogs("grandpa");
log("hello");
*/

const countDown = (value, fn, delay=3000) => {
  fn(value);
  return value > 0 ? setTimeout(() => (countDown(value - 1, fn)), delay) : value;
};
countDown(10, (value) => console.log("느리게: "+value));

const countDown1 = (value, fn, delay=1000) => {
  fn(value);
  return value > 0 ? setTimeout(() => (countDown(value - 1, fn)), delay) : value;
};
countDown1(10, (value) => console.log("빠르게: "+value));
