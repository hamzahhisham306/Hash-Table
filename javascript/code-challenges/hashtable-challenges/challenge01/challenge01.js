// Write here the code challenge solution
/* istanbul ignore next */
function convertToList(root, list) {
    if (root == null) return list;
  
    convertToList(root.left, list);
    list.push(root.value);
    convertToList(root.right, list);
  
    return list;
  }
  
  function checkSum(root, k) {
  
    var list = [];
  
    var list2 = convertToList(root, list);
  
    var start = 0;
    var end = list2.length - 1; 
    while (start < end) {
      if (list2[start] + list2[end] == k) {
        return true;
      }
  
      if (list2[start] + list2[end] > k) {
        end--;
      }
  
      if (list2[start] + list2[end] < k) {
        start++;
      }
    }
  
    return false;
  }
  

  module.exports={
    checkSum,
    convertToList 
  }