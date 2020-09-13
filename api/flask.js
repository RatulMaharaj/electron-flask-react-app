const { spawn } = require('child_process')

function runScript() {
    return spawn('python', ['-u', './api.py']);
}

// print output of script
subprocess.stdout.on('data', (data) => {
    console.log(`${data}`);
});
subprocess.stderr.on('data', (data) => {
    console.log(`${data}`);
});
subprocess.stderr.on('close', () => {
    console.log("Closed");
});
