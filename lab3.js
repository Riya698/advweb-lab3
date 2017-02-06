/**
 * Created by Riya Patel on 2017-01-27.
 */


//link to the connect package and url variables
var connect = require('connect');
var url = require('url');

//create a connect object
var app = connect();
/**
 * Create a calculator function which will take in three qs and parse them for the method variable, x variable
 * and y variable.
 */
var Calculator = function(req, res, next)
{
    var qs = url.parse(req.url, true).query;

    // storing parsed qs in variables.
    var method = qs.method;
    var x = Number(qs.x);
    var y = Number(qs.y);

    res.end(calcMethod(method, x, y));
};

var calcMethod = function(method, x, y){

    switch (method) {
        case 'add':
            return 'Calculating your output\nOutput: ' + x + ' + ' + y + ' = ' + (x+y);
        case 'subtract':
            return 'Calculating your output\nOutput: ' + x + ' - ' + y + ' = ' + (x-y);
        case 'divide':
            return 'Calculating your output\nOutput: ' + x + ' / ' + y + ' = ' + (x/y);
        case 'multiply':
            return 'Calculating your output\nOutput: ' + x + ' * ' + y + ' = ' + (x*y);
        default:
            return'The method name you entered is not valid.\nPlease enter either: add, subtract, divide, or multiply.';
    }

};

app.use('/lab3', Calculator);

// start server port 3000
app.listen(3000);

console.log('Listening on port 3000');
