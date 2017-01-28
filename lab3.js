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
    var qsMethod = url.parse(req.url, true).query;
    var X = url.parse(req.url, true).query;
    var Y = url.parse(req.url, true).query;

    // storing parsed qs in variables.
    var method = qsMethod.method;
    var x = qsX.x;
    var y = qsY.y;

    res.end(calcMethod(method, x, y));
};

var calcMethod = function(method, x, y){

    var add = Number(x) + Number(y);
    var subtract = Number(x) - Number(y);

    if(method == 'add')
    {
        return 'Calculating your output\nOutput: ' + x + ' + ' + y + ' = ' + add;
    }

    if(method == 'subtract')
    {
        return 'Calculating your output\nOutput: ' + x + ' - ' + y + ' = ' + subtract;
    }

    if(method == 'divide')
    {
        return 'Calculating your output\nOutput: ' + x + ' / ' + y + ' = ' + x/y;
    }

    if(method == 'multiply')
    {
        return 'Calculating your output\nOutput: ' + x + ' * ' + y + ' = ' + x*y;
    }

    else {
        return'The method name you entered is not valid.\nPlease enter either: add, subtract, divide, or multiply.';
    }
};

app.use('/lab3', Calculator);

// start server port 3000
app.listen(3000);

console.log('Listening on port 3000');