const path = require('path');
const fs = require('fs');

let jsonUsers = fs.readFileSync(path.resolve(__dirname, '../db/users.json'), 'utf-8');
let usuariosLista = JSON.parse(jsonUsers); 


let userController = {
 
    login:(req, res) => {
        res.render('./users/login');
    },

    register:(req, res) => {
        res.render('./users/register');
    },
}    

module.exports = userController; 