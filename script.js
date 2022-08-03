const RANDOM_SENTENCE_URL_API = "https://api.quotable.io/random"
const typeDisplay = document.getElementById("type-display");

// 非同期でランダムな文章を取得する
function GetRandomSentence()
{
    return fetch(RANDOM_SENTENCE_URL_API)
    .then((responce) => responce.json())
    .then((data) => data.content);
}

// ランダムな文章を取得して表示する

async function RenderNextSentence()
{
    const sentence = await GetRandomSentence();
    console.log(sentence);

    typeDisplay.innerText = sentence;

    // 文章を一文字ずつ分解してspanタグを生成する。
    let oneText = sentence.split("");
    // console.log(oneText);
    oneText.forEach((character) => {
        const characterSpan = document.createElement("span");
        characterSpan.innerText = character;
        // console.log(characterSpan);
        typeDisplay.appendChild(characterSpan);
        
        
    });
}

RenderNextSentence();