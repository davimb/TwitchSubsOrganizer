function entrada2saida() {
    let entrada = window.document.querySelector("textarea#txtentrada");
    let saida = window.document.querySelector("textarea#txtsaida");
    let stringentrada = entrada.value;
    stringentrada += '\n'
    let stringmeio = "";
    let stringsaida = "";

    for (let i=0; i<stringentrada.length; i++) {

        if (stringentrada[i] == '\n') {
            for(let y=0; y<stringmeio.length; y++) {

                if (stringmeio[y] == ',') {
                    break;
                }

                stringsaida += stringmeio[y];
            }
            stringsaida += '\n'
            stringmeio = "";
            continue;
        }
        
        stringmeio += stringentrada[i];
    }
    saida.innerHTML = stringsaida;
}