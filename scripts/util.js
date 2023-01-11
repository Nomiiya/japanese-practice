const hiragana = new Map();

const hiraganaSet = [
    'あ','い','う','え','お',
    'か','き','く','け','こ',
    'さ','し','す','せ','そ',
    'た','ち','つ','て','と',
    'な','に','ぬ','ね','の',
    'は','ひ','ふ','へ','ほ',
    'ま','み','む','め','も',
    'や','ゆ','よ','ら','り',
    'る','れ','ろ','わ','ゐ',
    'ゑ','を','が','ぎ','ぐ',
    'げ','ご','ざ','じ','ず',
    'ぜ','ぞ','だ'
];
const romaji = [
    'a',  'i',  'u',  'e',  'o',
    'ka', 'ki', 'ku', 'ke', 'ko',
    'sa', 'shi', 'su', 'se', 'so',
    'ta', 'chu', 'tsu', 'te', 'to',
    'na', 'ni', 'nu', 'ne', 'no',
    'ha', 'hi', 'fu', 'he', 'ho',
    'ma', 'mi', 'mu', 'me', 'mo',
    'ya', 'yu', 'yo', 'ra', 'ri',
    'ru', 're', 'ro', 'wa', 'wi',
    'we', 'wo', 'ga', 'gi', 'gu',
    'ge', 'go', 'za', 'ji', 'zu',
    'ze', 'zo', 'da', 
];

for(let i = 0; i < romaji.length; i++){
    hiragana.set(romaji[i], hiraganaSet[i]);
}

const content = document.querySelector('.content-box');
const element_choice1 = document.querySelector('.choice1');
const element_choice2 = document.querySelector('.choice2');
const element_choice3 = document.querySelector('.choice3');

var answerIndex = 0; //which option is the answer, 0 = not defined.
var answer = 0;
var score = 0;
var first = true;

function create_question(){
    const refresh = document.querySelector('.msg-wrong-answer');
    refresh.innerHTML=`<p id="msg-wrong-answer" class="msg-wrong-answer" style="display:none;"></p>`;
    if (first){
        const buttonItem = document.querySelector('.create-question')
        buttonItem.innerHTML = `New Question!`;

        const node = document.querySelector('.score')
        node.innerHTML = `Score: ${score}`;

        first = false;

        let randAnswer = 1 + Math.floor(Math.random() * hiraganaSet.length);
        answerIndex = randAnswer;
        content.innerHTML = `
                <div id="question" class="question">
                    <h1>Which of the below is ' ${romaji[randAnswer]} ' ?</h1>
                </div>
        `;
        randPosition();
    }else{
        let randAnswer = 1 + Math.floor(Math.random() * hiraganaSet.length);
        answerIndex = randAnswer;
        content.innerHTML = `
                <div id="question" class="question">
                    <h1>Which of the below is ' ${romaji[randAnswer]} ' ?</h1>
                </div>
        `;
        randPosition();
    };
}

function randPosition(){
    let rand = Math.floor(Math.random() * 3);
    answer = rand;
    let extraRand = answerIndex;
    let extraRand2 = answerIndex;

    while(extraRand == answerIndex){
        extraRand = 1 + Math.floor(Math.random() * hiraganaSet.length);
    }
    while(extraRand2 == answerIndex || extraRand2 == extraRand){
        extraRand2 = 1 + Math.floor(Math.random() * hiraganaSet.length);
    }

    const node = document.createElement('div');
    switch(rand){
        case 0:
            node.innerHTML = `
                <div id="choices">
                    <div id="choice1" onclick="choice1()">${hiragana.get(romaji[answerIndex])}</div>
                    <div id="choice2" onclick="choice2()">${hiragana.get(romaji[extraRand])}</div>
                    <div id="choice3" onclick="choice3()">${hiragana.get(romaji[extraRand2])}</div>
                </div>
            `;
            break;
        case 1:
            node.innerHTML = `
                <div id="choices">
                    <div id="choice1" onclick="choice1()">${hiragana.get(romaji[extraRand])}</div>
                    <div id="choice2" onclick="choice2()">${hiragana.get(romaji[answerIndex])}</div>
                    <div id="choice3" onclick="choice3()">${hiragana.get(romaji[extraRand2])}</div>
                </div>
            `;
            break;
        case 2:
            node.innerHTML = `
                <div id="choices">
                    <div id="choice1" onclick="choice1()">${hiragana.get(romaji[extraRand])}</div>
                    <div id="choice2" onclick="choice2()">${hiragana.get(romaji[extraRand2])}</div>
                    <div id="choice3" onclick="choice3()">${hiragana.get(romaji[answerIndex])}</div>
                </div>
            `;
            break;
        default:
            console.log("Cannot create choices")
    }
    content.append(node);
}

function updateScore(){
    const node = document.querySelector('.score')
    node.innerHTML = `Score: ${score}`;
}

function choice1() {
    if(answer == 0){
        score++;
        create_question();
        updateScore();
    }
    else{
        const node = document.querySelector('.msg-wrong-answer');
        node.innerHTML = `<p id="msg-wrong-answer" class="msg-wrong-answer"> TRY AGAIN!!! </p>`;
    }
}

function choice2() {
    if(answer == 1){
        score++;
        create_question();
        updateScore();
    }
    else{
        const node = document.querySelector('.msg-wrong-answer');
        node.innerHTML = `<p id="msg-wrong-answer" class="msg-wrong-answer"> TRY AGAIN!!! </p>`;
    }
}

function choice3() {
    if(answer == 2){
        score++;
        create_question();
        updateScore();
    }
    else{
        const node = document.querySelector('.msg-wrong-answer');
        node.innerHTML = `<p id="msg-wrong-answer" class="msg-wrong-answer"> TRY AGAIN!!! </p>`;
    }
}

