module.exports = function check(str, bracketsConfig) {
    let roll = []; 
    let marker = false; 
    for(let a = 0; a < str.length; a++) {
      marker = false; 
      for(let b = 0; b < bracketsConfig.length; b++) {
        if (str[a] == bracketsConfig[b][1]) {
          if (roll[roll.length - 1] == bracketsConfig[b][0]) {
            marker = true;
            roll.pop();   
          }
          break;
        }
      } 
      if (!marker) {
        for(let b = 0; b < bracketsConfig.length; b++) {
          if (str[a] == bracketsConfig[b][0]) {
            roll.push(str[a]); 
            marker = true; 
            break; 
          }
        } 
      }
      if (!marker) return false; 
    }
    if (roll.length == 0) return true;
    else return false; 
  }
