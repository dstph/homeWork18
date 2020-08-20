

let twoArrays = new Promise(( response, reject ) => {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'data.json');
	xhr.send();
	xhr.addEventListener('readystatechange', () => {
		if(xhr.readyState === 4){
			if(xhr.status <= 400){
				firstArr = JSON.parse(xhr.responseText);
				console.log('first xhr', firstArr)
				firstArr.length !== 0 ? response(firstArr) : reject(firstArr);
			}
		}
	});
})

twoArrays
		.then(
			()=>{
				return new Promise((responseTwo, rejectTwo)=>{
					let xhrTwo = new XMLHttpRequest();
					xhrTwo.open('GET', 'data2.json');
					xhrTwo.send();
					xhrTwo.addEventListener('readystatechange', () => {
						if(xhrTwo.readyState === 4){
							if(xhrTwo.status <= 400){
								secondArr = JSON.parse(xhrTwo.responseText);
								console.log('second xhr', secondArr);
								secondArr.length !==0 ? responseTwo(secondArr) : rejectTwo(secondArr);
							}
						}
					})
				})
			}
		)
		.then(
			(data)=>{
				thirdArr = firstArr.concat(data);
				console.log(thirdArr);
			}
		)
		.catch(
			()=>{
				console.log('error');
			}
		)
		.finally(
			()=>{
				console.log('I did it!');
			}
		)


let input = document.querySelector('#promise');

	input.addEventListener('change', () => {

		let inputText = new Promise( (response, reject)=>{
				setTimeout(
					() => {
					input.value.length > 0 ? response(input.value) : reject(input.value)
				}, 10000)
		});
		
		inputText
				.then(
					(data)=>{
						console.log(data);
					}
				)
				.finally(
					() => {
						input.value = '';
					}
				)
	})

let inputSecond = document.querySelector('#promiseSecond');

	inputSecond.addEventListener('mousedown', () => {

		let inputTextSecond = new Promise( (response, reject)=>{
				setTimeout(
					() => {
					inputSecond.value.length > 0 ? response(inputSecond.value) : reject(inputSecond.value)
				}, 10000)
		});
		
		inputTextSecond
				.then(
					(data)=>{
						console.log(data);
					}
				)
				.finally(
					() => {
						inputSecond.value = '';
					}
				)
	})



















	