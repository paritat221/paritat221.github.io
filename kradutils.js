async function main(){
    var height = Number(prompt("height : "));
    var chh = Number(prompt("change rate of height : "));
    str = "";
    for(var i=0;i<height;i++){
        str+='<div class="msg">'
        str+=`road->segments[${i}] = seg(0, 190, ${i*chh}, 90, 25, gray);`;
        str+='</div>'
        str+='\n';
    }

    return str;
}

main().then(
    str => {document.getElementById("messages").innerHTML = str;}
);