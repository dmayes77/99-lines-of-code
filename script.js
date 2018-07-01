let friends = ['April', 'Jermaine', 'Rachel', 'Larry', 'Tay'];

for (var n = 0; n < friends.length; n++) {
	let name = friends[n];
	for (var num = 99; num > 0; num--) {
		let oneLess = num - 1;
		if (num > 1) {
			console.log(
				num +
				' lines of code in the file, ' +
				num +
				' lines of code; ' +
				name +
				' strikes one out, clears it all out, ' +
				oneLess +
				' lines of code in the file.'
			);
		} else {
			console.log(
				'1 line of code in the file, 1 line of code; ' +
				name +
				' strikes one out, clears it all out, no more lines of code in the file.'
			);
		}
	}
}
