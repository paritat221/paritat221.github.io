function message(username, message, date){
    const template = `<div class="msg">
                            <a class="author">${username}</a>&nbsp;&nbsp;
                            <span class="main-msg">${message}</span>
                            <span class="date">${date}</span>
                      </div>`;
    return template;
}

const messages = [
    ["Paritat221", "I just made this website, inspired by planet-casio's shoutbox because i liked the style", "16/01/2022"],
    ["Paritat221", "Added <a href=\"/kradutils.html\">kradutils</a> to the website", "16/01/2022"],
    ["Paritat221", "I won't be coding in the next week, gotta visit family"]
];

function main(){
    for(var i=0;i<messages.length;i++){
        const gen_message = message(messages[i][0],messages[i][1],messages[i][2]);
        document.getElementById("messages").innerHTML += gen_message;
    }
}

main();

