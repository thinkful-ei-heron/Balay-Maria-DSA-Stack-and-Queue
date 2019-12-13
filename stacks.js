class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }


  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }

}

function peek(stk) {

  return stk.top.data;

}

function isEmpty(stk) {
  if(!stk.top) {
    return true; 
  }
  else {
    return false; 
  }
}


function display(stk) {

  let currStk = stk.top; 
  while( currStk !== null)  {
    //console.log(currStk.data);
    currStk = currStk.next; 
  }
  return; 
}

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  // create a stack with the characters of the phrase/word
  let palindromeStk = new Stack();

  for (let i = 0; i < s.length; i++) {
    palindromeStk.push(s[i]);
  }

  let currNode = palindromeStk.top;
  let reverseStr = '';

  while (currNode !== null) {
    reverseStr = reverseStr + palindromeStk.pop();
    currNode = currNode.next;
  }

  if (s === reverseStr) {
    return 'true';
  } else {
    return 'false';
  }

}

function parenthesis(str) {
  str = str.replace(/\s+/g, '');
  let parenthesisStk = new Stack();

  for (let i = 0; i < str.length; i++) {
    parenthesisStk.push(str[i]);
  }

  let currNode = parenthesisStk.top;
  let open = [];
  let closed = [];
  let index = 1;
  
  while (currNode !== null) {
    if (currNode.data === '(') {
      open.push(index);
    }
    if (currNode.data === ')') {
      closed.push(index);
    }
    currNode = currNode.next;
    index++;
  }

  console.log(closed, 'closed');
  console.log(open, 'open');

  if (open.length === closed.length) {
    return true;
  } else if (closed.length > open.length) {
    return 'Unmatched closing parenthesis at character number ' + closed.pop();
  } else {
    return 'Unmatched open parenthesis at character number ' + open.pop();
  }

}

console.log(parenthesis('(1 + 2)( + (1 + 2)'));

//console.log(is_palindrome('dad'));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));



// function main() {

//   let starTrek = new Stack();

//   starTrek.push('Kirk');
//   starTrek.push('Spock');
//   starTrek.push('McCoy');
//   starTrek.push('Scotty');
//   peek(starTrek);
//   isEmpty(starTrek);
//   display(starTrek);
// }

// console.log(main());






