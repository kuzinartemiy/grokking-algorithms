const graph = {};

graph['me'] = ['alice', 'bob', 'claire'];
graph['bob'] = ['anuj', 'peggy'];
graph['alice'] = ['peggy'];
graph['claire'] = ['thom', 'jonny'];
graph['anuj'] = [];
graph['peggy'] = [];
graph['thom'] = [];
graph['jonny'] = [];

function checkPerson(person) {
  return person[3] === 'n';
}

function breadthFirstSearch (name) {
  let searchQueue = graph[name];
  const searched = [];
  while (searchQueue.length) {
    const person = searchQueue.shift();
    if (!searched.includes(person) && checkPerson(person)) {
      console.log(`${person} is a mango seller!`);
      break;
    } else {
      searchQueue = [...searchQueue, ...graph[person]];
      searched.push(person);
    }
  }
}

breadthFirstSearch('me');