function towerBuilder(nFloors) {
    let answer = [];
    let spaces = 0;
    for(let i=nFloors;i>0;i--){
        let string ="";
        if(i!==nFloors){
            string = [" ".repeat(spaces),...string].join("");
        }
        string+="*".repeat((i*2)-1);
        if(i!==nFloors){
            string = [...string," ".repeat(spaces)].join("");
        }
        answer.push(string);
        spaces++;
    }
    console.log(answer);
}
towerBuilder(6);
