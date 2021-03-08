const a = [3,1,7,9];
const b = [2,4,1,9,3];
let c =[]
const incl = (a: number,arr:number[]) => {
	for (const el of arr) {
		if (el == a) {
			return true;
		}
	}
	return false;
}

let sum = 0;
for (const el of a) {
	if (!incl(el,b)) {
		c.push(el)
	}
}
for (const el of b) {
	if (!incl(el,a)) {
		c.push(el)
	}
}

for (const el of c) {
	sum+=el
}