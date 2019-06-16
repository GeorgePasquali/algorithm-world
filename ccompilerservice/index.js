const promisify = require('util').promisify;
const { exec } = require('child_process');
const testFolder = '.';
const fs = require('fs');
const express = require('express')
const app = express()
const port = 3000
const options = {
    timeout: 100,
    stdio: 'inherit',
    shell: true
}
const vm = require('vm');

const writeFile = promisify(fs.writeFile);

app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/readdir', (req, res) => {
    fs.readdir(testFolder, (err, files) => {
        console.log("readdir invoked by client");
        let response = ''

        files.forEach(file => {
            response += `${file} \n`;
        });

        res.send(response)
    });
})

app.post('/executec', async (req, res) => {



    try {
        console.log(req.body);

        let sourceCode = req.body.code;

        // write to a new(or existing) file named main.c
        const status = await writeFile('main.c', sourceCode);


        exec('gcc -o myapp main.c', (error, stdout, stderr) => {
            console.log('Compilation stdout: ', stdout);
            console.log('Compilation stderr: ', stderr);
            exec('./myapp', options, (error, stdout, stderr) => {
                if (error) {
                    console.log(`exec error: ${error}`);
                    return;
                }

                console.log(`stdout ${stdout}`);
                console.log(`stdout ${stderr}`);

                res.json({
                    stdout: stdout,
                    stderr: stderr
                });


            })
        });
    } catch (err) {
        res.send('something went wrong with compilation: ' + err)
    }

})



app.post('/executejs', async (req, res) => {




    try {
        console.log(req.body);

        let sourceCode = req.body.code;

        const script = new vm.Script(sourceCode, {
            filename: 'my-index-stacktrace.js', // filename for stack traces
            lineOffset: 1, // line number offset to be used for stack traces
            columnOffset: 1, // column number offset to be used for stack traces
            displayErrors: true,
            timeout: 1000 // ms
        });

        let sandBox = {
            require: require,
            console: {
                log: function () {
                    for (var i=0; i < arguments.length; i++) {
                        if (arguments[i]) {
                          this.stdout += arguments[i];
                        }
                    }
                    this.stdout += "\n";
                }
            },
            stdout: '',
            stderr: ''
        }

        script.runInNewContext(sandBox);

        res.json({
            stdout: sandBox.stdout,
            stderr: sandBox.stderr
        });

    } catch (err) {
        res.send('something went wrong with compilation: ' + err)
    }

})


app.listen(port, () => console.log(`c compiler/interpreter app listening on port ${port}!`))

