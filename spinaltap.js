function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  /* let newStr = str.toLowerCase() */
  
  /* let newStr = str.split(/\W[a-z]|[A-Z]/); */
  let check = /(?=[A-Z])/ ;
  let firstPass = str.replace(/[_-\s]/g,"-");

	let secondPass = firstPass.split(check);
  let pUltiPass = secondPass.join(" ").toLowerCase().replace(/\s+/g,"-");
  let ans = pUltiPass.replace(/-+/g,"-");
  

  return ans;
}

spinalCase('This Is Spinal Tap');
// Should print this-is-spinal-tap
