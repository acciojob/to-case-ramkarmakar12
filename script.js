function toCase(text) {
  // write your code here
	    if (text.length === 0) return '-';
    let fin = `${text.toLowerCase()}-${text.toUpperCase()}`;
    return fin;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
