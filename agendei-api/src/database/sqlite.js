import sqlite3 from "sqlite3";

const SQlite3 = sqlite3.verbose();

function query(command, params, method = 'all') {
    return new Promise(function (resolve, reject) {
        db[method](command, params, function (error, result) {
            if (error)
                reject(error)
            else
                resolve(result);
        });
    });
}


const db = new SQlite3.Database("./src/database/banco.db", SQlite3.OPEN_READWRITE, (err) => {
    if (err) 
        return console.log ("Erro ao conectar com Banco de Dados" + err.message);
})


export {db, query};