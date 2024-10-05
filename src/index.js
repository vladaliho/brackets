module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const bracketsMap = {};
  const sameBrackets = new Set();

  for (let [open, close] of bracketsConfig) {
    bracketsMap[close] = open;
    if (open === close) {
      sameBrackets.add(open); 
    }
  }

  for (let char of str) {
    if (sameBrackets.has(char)) {
  
      if (stack.length > 0 && stack[stack.length - 1] === char) {
        stack.pop(); 
      } else {
        stack.push(char);  
      }
    } else if (bracketsMap[char]) {
 
      if (stack.length === 0 || stack.pop() !== bracketsMap[char]) {
        return false;  
      }
    } else {

      stack.push(char);
    }
}
}
