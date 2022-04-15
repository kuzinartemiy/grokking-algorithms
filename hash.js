const phoneBook = {};

phoneBook['jenny'] = 8675309;
phoneBook['emergency'] = 911;

console.log(phoneBook['jenny']); // 8675309
console.log(phoneBook['emergency']); // 911

const voted = {};

function checkVoted (name) {
  if (name in voted) {
    console.log('kick them out!');
  } else {
    voted[name] = true;
    console.log('let them vote');
  }
}

checkVoted('Tom');
checkVoted('Mike');
checkVoted('Mike');