const puzzleContainer = document.querySelector('.puzzle');
const array = ['⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
'⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡤⠒⠒⠢⣴⣿⣿⣷⠤⠄⠀⠀⠤⠤⠠⢤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
'⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠋⢀⠀⠀⢀⡿⠛⠋⠀⠀⢀⠀⠀⠀⠀⠀⠀⠈⠑⠢⡀⢀⣴⣿⣿⡦⠤⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
'⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣤⡟⣇⠔⠉⠓⠂⣤⣴⢯⡿⠤⣴⣧⣀⣀⠀⠀⠀⡀⣸⣿⣿⠋⠀⠀⠀⠀⢳⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
'⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⡝⢠⣧⠐⢂⣿⣿⣿⣎⣼⡏⣿⣿⣳⣷⣹⡏⣥⠉⢱⣿⣿⠇⡆⣠⣄⠀⠀⣌⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
'⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⢁⢿⣟⣆⢼⢸⡿⠁⢴⡏⡅⣿⣏⡮⠘⣸⣿⢼⣿⣶⣿⣿⣦⡷⡟⠙⣶⡇⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
'⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⢸⣾⢿⣼⡌⣿⡷⠛⢶⡇⠣⡟⢻⡶⠻⠻⣆⣾⡇⣿⣿⣿⣿⡇⠀⠀⠏⢳⣿⣿⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
'⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡏⣿⣜⣿⣷⢸⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠟⣯⣧⣿⣿⡟⣿⡇⠀⠀⠀⣸⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
'⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⠘⢧⣻⣿⣿⠀⠀⠀⠠⠄⢄⠠⠀⠀⠀⣼⣿⣿⣿⡿⠃⣿⢹⠀⠀⠀⡟⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
'⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⡆⠀⣿⣿⣿⣶⣤⣀⠀⠀⠀⠀⢀⣠⣼⣿⣿⣿⣿⠃⠀⣹⠈⠀⠀⢰⢻⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
'⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡖⡇⠀⣿⢿⣿⣿⣿⣿⣿⡖⠒⢚⡭⣾⣿⣿⣿⡀⠀⠀⠀⢸⢀⠀⠀⣞⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
'⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⣷⠀⢻⣿⣿⡿⠋⢙⢿⠳⣀⣠⣴⣿⣿⡟⠚⠓⠢⡀⠀⢸⢹⢀⡀⣿⣿⣿⣿⣾⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
'⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⢠⡘⣿⣿⠀⠀⢸⢸⢠⠛⢿⣿⢻⣿⠀⠀⠀⠀⢻⡄⢸⣸⢸⠇⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
'⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⢞⣿⡿⣿⠘⣇⢻⣿⡄⠀⣹⠈⢿⣤⡟⠻⠟⢸⠀⠀⠀⠀⢸⠃⢸⣼⢻⢰⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
'⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣿⣷⠿⠋⢡⣿⠀⣿⠈⣿⣇⠀⢸⠀⠀⠛⡇⠀⠀⠸⢦⠀⠸⠶⣿⠀⢸⣼⡇⡿⣾⣿⣿⣿⠈⠻⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
'⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⣾⡿⠛⠉⠁⠀⠀⣼⠋⠀⢣⢧⠈⣿⣠⡇⠀⢘⠀⡗⣮⣽⣇⣿⣤⣤⣤⣿⠀⣿⣿⢸⡇⣿⣿⣿⣿⡆⠀⠙⢿⣿⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
'⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣳⡏⠀⠀⠀⠀⠀⢠⣧⡇⠀⠸⣾⡄⢻⣿⣿⣿⣿⡀⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⣿⢿⣼⣶⣿⣿⣿⣿⣧⠀⠀⠈⢿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
'⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣇⠀⠀⠀⠀⢀⠞⣿⠁⠀⣷⣷⣧⠸⣿⣿⣿⣿⣇⠸⣿⣿⣿⣿⣿⣿⣿⣇⠀⡟⡌⠉⠏⣿⣿⣿⣿⣾⢇⠀⠀⠈⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
'⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠻⣦⡀⠀⢀⢎⡼⣿⡄⠀⢹⣧⢿⠀⣿⣿⣿⣧⣹⠀⣿⣿⣿⣿⣿⣿⣿⣿⣄⣧⠁⡇⣰⣿⣿⣿⣿⣿⣿⡄⠀⠀⢸⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
'⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠺⣦⢞⡾⢁⣿⠁⠀⢸⣻⣟⡇⢹⣿⣿⣿⣿⡆⡏⣿⡌⣿⣿⣿⣿⡇⢻⡼⢰⣷⣟⣿⣿⡟⠻⣿⣿⣿⣄⡀⣸⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
'⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣫⡾⠀⡼⡏⠀⠀⠀⠙⣿⡇⢸⣿⣿⣿⣿⣷⣧⠸⣿⣿⣿⣿⣿⣷⣾⡇⢸⣿⣄⡿⣿⣿⣦⠈⢿⣿⣿⣿⣷⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
'⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢮⣿⠃⡰⣻⡇⠀⠀⠀⠀⣿⣿⠘⣿⣿⣿⣿⣿⡿⠃⢻⣿⣿⣿⣿⣿⢙⠁⠈⣿⣿⢹⠹⣿⣿⣷⠛⢿⣿⡿⣾⣿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
'⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡾⢻⣿⡰⣱⣿⠃⠀⠀⢠⠸⣿⡇⢠⣿⣿⣿⣿⣿⣿⠀⢸⣿⣿⣿⣿⣿⣴⡀⠀⢱⡻⡜⣧⣿⣿⣿⣦⢼⣽⠿⣿⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
'⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢇⡸⠋⢠⣿⡟⠀⣼⠀⡼⡇⣿⡇⣸⣿⣿⣿⣿⣿⣿⡆⢸⣿⣿⣿⣿⣿⣧⡇⠀⠀⠹⣿⣽⣿⣿⣾⣿⣟⡇⠀⢸⣿⣿⣷⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀',
'⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⠴⠋⠀⣰⣿⡿⠁⢼⠍⣼⣻⢱⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣸⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠙⢿⣿⣿⣿⡇⢀⠇⠀⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀',
'⠀⠀⠀⠀⠀⡀⠤⣤⣶⡿⢛⣵⡶⢋⣴⣿⠟⣠⡾⢃⣼⠟⣫⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣧⠙⢦⣄⠘⣿⣿⣟⡀⣜⣀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀',
'⠀⠀⢀⢔⣭⣶⣿⣿⢥⣾⠟⠋⣰⣿⣿⣿⠞⣫⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠀⠻⣷⣮⣿⣦⡹⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀',
'⠀⢠⣻⣿⣿⣿⣿⢞⣋⣤⣴⢿⡻⣯⣿⣵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⡀⠙⠻⠿⣿⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀',
'⠀⠘⣿⢸⣿⣿⣿⣟⠿⣹⣶⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⢄⣀⡈⠉⠀⠂⠀⠉⠉⠛⠛⢿⣤⣤⣤⣄⣀⡀⠀',
'⠀⠀⠈⠛⢿⣿⣿⣡⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⢿⣾⣎⠻⣿⣿⣿⣿⣿⣿⣿⡿⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⣞⣭⠍⠓⠒⣒⣒⣲⣶⣶⣿⠟⠛⠛⣉⣿⣿⠆',
'⢠⣶⣾⣿⣿⣛⡛⠛⢛⣻⣿⣿⣿⣿⣟⣿⣯⡉⠁⠀⠀⠀⠀⠙⠿⠽⣾⢽⡿⠝⠺⢝⡇⠀⢜⡩⠖⠋⡿⣿⣿⢿⡿⣚⠷⠚⠈⠙⢿⣷⡀⠉⠙⠛⠒⠒⠛⠛⠛⠋⠁⠀⠀⠸⠟⠉⠁⠀',
'⢀⣙⣛⣛⣯⣿⡿⢶⢽⡟⠛⠛⠉⠉⠉⠙⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠒⠁⠀⠊⠃⠀⠉⠀⢠⣤⡴⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
'⠀⠉⠉⠉⠉⠁⠀⠀⠉⠛⠛⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀'];

const array_copy = [...array];

for (let index = array.length - 1; index > 9; index--) {
	  // 무작위 index 값을 만든다. (0 이상의 배열 길이 값)
	  const randomPosition = 10 + Math.floor(Math.random() * (index - 9));
  
	  // 임시로 원본 값을 저장하고, randomPosition을 사용해 배열 요소를 섞는다.
	  const temporary = array[index];
	  array[index] = array[randomPosition];
	  array[randomPosition] = temporary;
	}

for (let i = 0; i < array.length; i++){
	const one = document.createElement("div");
	one.innerText = array[i];
	const puzzleClass = array_copy.indexOf(array[i]);
	one.className = "b ui-state-default";
	one.id = `a${puzzleClass}`;
	puzzleContainer.appendChild(one);
}



// 5개의 요소에 대해 선택자와 조건을 만족하는지 확인하고 배열에 추가
function abc(){
for (var i = 0; i < 33; i++) {
  var selector = `.puzzle > div#a${i}:nth-child(${i+1})`; // 선택자를 동적으로 생성
  var targetElement = puzzleContainer.querySelector(selector); // 선택자를 사용하여 요소를 찾음
  if (targetElement) {
    targetElement.classList.add("ui-state-disabled");

  }
  else{break}
}
}

abc();
addEventListener("mouseup",abc);






