// Type JavaScript here and click "Run Code" or press Ctrl + s
// console.log('Hello, world!');

// CHALLENGE 1
function createFunction() {
    return function() {
      console.log("hello");
    };
  }
  
  // /*** Uncomment these to check your work! ***/
  // const function1 = createFunction();
  // function1(); // => should console.log('hello');
  
  // CHALLENGE 2
  function createFunctionPrinter(input) {
    return function() {
      console.log(input);
    };
  }
  
  // /*** Uncomment these to check your work! ***/
  // const printSample = createFunctionPrinter('sample');
  // printSample(); // => should console.log('sample');
  // const printHello = createFunctionPrinter('hello');
  // printHello(); // => should console.log('hello');
  
  // CHALLENGE 3
  function outer() {
    let counter = 0; // this variable is outside incrementCounter's scope
    function incrementCounter() {
      counter++;
      console.log("counter", counter);
    }
    return incrementCounter;
  }
  
  const willCounter = outer();
  const jasCounter = outer();
  
  // Uncomment each of these lines one by one.
  // Before your do, guess what will be logged from each function call.
  
  // /*** Uncomment these to check your work! ***/
  // willCounter();
  // willCounter();
  // willCounter();
  
  // jasCounter();
  // willCounter();
  
  function addByX(x) {
    return function(input) {
      return input + x;
    };
  }
  
  // /*** Uncomment these to check your work! ***/
  const addByTwo = addByX(2);
  console.log();
  // addByTwo(1) // => should return 3
  // addByTwo(2) // => should return 4
  // addByTwo(3); // => should return 5
  
  // const addByThree = addByX(3);
  // addByThree(1); // => should return 4
  // addByThree(2); // => should return 5
  
  // const addByFour = addByX(4);
  // addByFour(4); // => should return 8
  // addByFour(5); // => should return 9
  
  // CHALLENGE 4
  function once(func) {
    let output;
    return function(input) {
      if (output) return output;
      output = func(input);
      return output;
    };
  }
  
  // /*** Uncomment these to check your work! ***/
  // const onceFunc = once(addByTwo);
  // console.log(onceFunc(4));  // => should log 6
  // console.log(onceFunc(10));  // => should log 6
  // console.log(onceFunc(9001));  // => should log 6
  
  // CHALLENGE 5
  function after(count, func) {
    let callsCount = 0;
    return function() {
      callsCount++;
      if (callsCount === count) {
        return func();
      }
    };
  }
  
  // /*** Uncomment these to check your work! ***/
  // const called = function() { console.log('hello') };
  // const afterCalled = after(3, called);
  // afterCalled(); // => nothing is printed
  // afterCalled(); // => nothing is printed
  // afterCalled(); // => 'hello' is printed
  
  // CHALLENGE 6
  function delay(func, wait) {
    return function() {
      setTimeout(func, wait);
    };
  }
  
  // const delayedFunc = delay(() => console.log('Oops!'), 3000);
  // delayedFunc();
  
  // CHALLENGE 7
  function rollCall(names) {
    let index = 0;
    return function() {
      console.log(index);
      if (index > names.length - 1) {
        return console.log("Everyone accounted for");
      }
      console.log(names[index]);
      index++;
    };
  }
  
  // /*** Uncomment these to check your work! ***/
  // const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
  // rollCaller() // => should log 'Victoria'
  // rollCaller() // => should log 'Juan'
  // rollCaller() // => should log 'Ruth'
  // rollCaller() // => should log 'Everyone accounted for'
  
  // CHALLENGE 8
  function saveOutput(func, magicWord) {
    let store = {};
    return function(input) {
      if (input === magicWord) return store;
  
      const result = func(input);
      store[input] = result;
      return result;
    };
  }
  
  // /*** Uncomment these to check your work! ***/
  // const multiplyBy2 = function(num) { return num * 2; };
  // const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
  // console.log(multBy2AndLog(2)); // => should log 4
  // console.log(multBy2AndLog(9)); // => should log 18
  // console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }
  
  // CHALLENGE 9
  function cycleIterator(array) {
    let index = 0;
  
    return function() {
      const item = array[index];
      console.log(index);
  
      if (index === array.length - 1) {
        index = 0;
      } else {
        index++;
      }
  
      return item;
    };
  }
  
  // /*** Uncomment these to check your work! ***/
  // const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
  // const getDay = cycleIterator(threeDayWeekend);
  // console.log(getDay()); // => should log 'Fri'
  // console.log(getDay()); // => should log 'Sat'
  // console.log(getDay()); // => should log 'Sun'
  // console.log(getDay()); // => should log 'Fri'
  
  // CHALLENGE 10
  function defineFirstArg(func, arg) {
    return function(input) {
      return func(arg, input);
    };
  }
  
  // /*** Uncomment these to check your work! ***/
  // const subtract = function(big, small) { return big - small; };
  // const subFrom20 = defineFirstArg(subtract, 20);
  // console.log(subFrom20(5)); // => should log 15
  
  //CHALLENGE 11a
  const hobbyTracker = (hobbies) => {
    let cache = {};
    hobbies.forEach((e) => (cache[e] = 0));
    return (...args) => {
      let [hobby, hours] = args;
      if (hobby && hours) {
        cache[hobby] += hours;
        return cache;
      } else if (hobby === undefined || hours === undefined) {
        for (const hobby in cache) {
          cache[hobby] = 0;
        }
        return "tracker has been reset";
      }
    };
  };
// Uncomment the code below to check your code:
// const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
// updateHobbies('yoga', 2);
// updateHobbies('baking', 4);
// updateHobbies('yoga', 1);
// console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
// console.log(updateHobbies()); // --> 'tracker has been reset!'
// console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}

  // CHALLENGE 11b
  function dateStamp(func) {
    const logTime = {};
    return function(...args) {
      const result = {};
      result.date = new Date().toDateString();
      result.output = func(...args);
      return result;
    };
};
  
  // /*** Uncomment these to check your work! ***/
  // const stampedMultBy2 = dateStamp(n => n * 2);
  // console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
  // console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }
  
  // CHALLENGE 12
  function censor() {
    let replaces = [];
  
    return function(str1, str2) {
      if (str2) {
        replaces.push({ from: str1, to: str2 });
      } else {
        return replaces.reduce((text, currReplace) => {
          return text.replace(currReplace.from, currReplace.to);
        }, str1);
      }
    };
  }
  
  // /*** Uncomment these to check your work! ***/
  // const changeScene = censor();
  // changeScene('dogs', 'cats');
  // changeScene('quick', 'slow');
  // console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'
  
  // CHALLENGE 13
  function createSecretHolder(secret) {
    let _secret = secret;
  
    return {
      getSecret: () => {
        return _secret;
      },
      setSecret: () => {
        _secret = secret;
      }
    };
  }
  
  // /*** Uncomment these to check your work! ***/
  // let obj = createSecretHolder(5)
  // console.log(
  
  // obj.getSecret(), // => returns 5
  // obj.setSecret(2),
  // obj.getSecret() // => returns 2
  // )
  
  // CHALLENGE 14
  function callTimes() {
    let callsCount = 0;
    return function() {
      console.log(++callsCount);
    };
  }
  
  // /*** Uncomment these to check your work! ***/
  // let myNewFunc1 = callTimes();
  // let myNewFunc2 = callTimes();
  // myNewFunc1(); // => 1
  // myNewFunc1(); // => 2
  // myNewFunc2(); // => 1
  // myNewFunc2(); // => 2
  
  // CHALLENGE 15
  function russianRoulette(num) {
    let callsCount = 0;
    let finished = false;
    return function() {
      if (finished) return "reload to play again";
  
      callsCount++;
      if (callsCount === num) {
        finished = true;
        return "bang";
      }
  
      return "click";
    };
  }
  
  // /*** Uncomment these to check your work! ***/
  // const play = russianRoulette(3);
  // console.log(play()); // => should log 'click'
  // console.log(play()); // => should log 'click'
  // console.log(play()); // => should log 'bang'
  // console.log(play()); // => should log 'reload to play again'
  // console.log(play()); // => should log 'reload to play again'
  
  // CHALLENGE 16
  function average() {
    let average = 0;
    let numbers = [];
  
    const calculateAverage = number => {
      if (!numbers.length) return 0;
      const sum = numbers.reduce((accum, currNum) => accum + currNum, 0);
      return sum / numbers.length;
    };
  
    return function(number) {
      if (!number) return calculateAverage(number);
      numbers.push(number);
      return calculateAverage(number);
    };
  }
  
  // /*** Uncomment these to check your work! ***/
  const avgSoFar = average();
  // console.log(avgSoFar()); // => should log 0
  // console.log(avgSoFar(4)); // => should log 4
  // console.log(avgSoFar(8)); // => should log 6
  // console.log(avgSoFar()); // => should log 6
  // console.log(avgSoFar(12)); // => should log 8
  // console.log(avgSoFar()); // => should log 8
  
  // CHALLENGE 17
  function makeFuncTester(arrOfTests) {
    return function(callback) {
      return arrOfTests.every(test => {
        const [first, second] = test;
        return callback(first) === second;
      });
    };
  }
  
  // /*** Uncomment these to check your work! ***/
  // const capLastTestCases = [];
  // capLastTestCases.push(['hello', 'hellO']);
  // capLastTestCases.push(['goodbye', 'goodbyE']);
  // capLastTestCases.push(['howdy', 'howdY']);
  // const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
  // const capLastAttempt1 = str => str.toUpperCase();
  // const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
  // console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
  // console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true
  
  // CHALLENGE 18
  function makeHistory(limit) {
    let history = [];
  
    return function(str) {
      if (str === "undo") {
        if (!history.length) {
          return "nothing to undo";
        }
        const strToUndo = history[history.length - 1];
        history = history.slice(0, -1);
        return `${strToUndo} undone`;
      }
  
      history = [...history, str].slice(history.length === limit ? limit - 1 : 0);
      return `${str} done`;
    };
  }
  
  // /*** Uncomment these to check your work! ***/
  // const myActions = makeHistory(2);
  // console.log(myActions('jump')); // => should log 'jump done'
  // console.log(myActions('undo')); // => should log 'jump undone'
  // console.log(myActions('walk')); // => should log 'walk done'
  // console.log(myActions('code')); // => should log 'code done'
  // console.log(myActions('pose')); // => should log 'pose done'
  // console.log(myActions('undo')); // => should log 'pose undone'
  // console.log(myActions('undo')); // => should log 'code undone'
  // console.log(myActions('undo')); // => should log 'nothing to undo'
  
  // CHALLENGE 19
  function blackjack(array) {
    let index = 0;
    return function dealer(num1, num2) {
      let hasLostGame = false;
      let currentSum = 0;
      return function player() {
        if (hasLostGame) {
          return "you are done!";
        }
  
        if (currentSum === 0) {
          currentSum = num1 + num2;
          return currentSum;
        }
  
        currentSum += array[index++];
  
        if (currentSum > 21) {
          hasLostGame = true;
          return "bust";
        }
  
        return currentSum;
      };
    };
  }
  
  // /*** Uncomment these to check your work! ***/
  
  // /*** DEALER ***/
  // const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);
  
  // /*** PLAYER 1 ***/
  // const i_like_to_live_dangerously = deal(4, 5);
  // console.log(i_like_to_live_dangerously()); // => should log 9
  // console.log(i_like_to_live_dangerously()); // => should log 11
  // console.log(i_like_to_live_dangerously()); // => should log 17
  // console.log(i_like_to_live_dangerously()); // => should log 18
  // console.log(i_like_to_live_dangerously()); // => should log 'bust'
  // console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
  // console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
  
  // // /*** BELOW LINES ARE FOR THE BONUS ***/
  
  // // /*** PLAYER 2 ***/
  // const i_TOO_like_to_live_dangerously = deal(2, 2);
  // console.log(i_TOO_like_to_live_dangerously()); // => should log 4
  // console.log(i_TOO_like_to_live_dangerously()); // => should log 15
  // console.log(i_TOO_like_to_live_dangerously()); // => should log 19
  // console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
  // console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
  // console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
  
  // // /*** PLAYER 3 ***/
  // const i_ALSO_like_to_live_dangerously = deal(3, 7);
  // console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
  // console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
  // console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
  // console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
  // console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!