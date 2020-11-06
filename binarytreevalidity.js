class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function validateBst(tree, min=-Infinity, max=Infinity) {
      if(tree === null) return true
    if(tree.value < min || tree.value >= max) return false;
      const isLeftValid = validateBst(tree.left, min, tree.value)
      return isLeftValid && validateBst(tree.right, tree.value, max)
  }
  
  // Do not edit the line below.
  exports.BST = BST;
  exports.validateBst = validateBst;