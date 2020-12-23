export const log = (...args) => _console("log", args);

export const info = (...args) => _console("info", args);

export const warn = (...args) => _console("warn", args);

export const error = (...args) => _console("error", args);


function _console (type = 'info', args) {
    let log = console.log;
    let info = console.info;
    let warn = console.warn;
    let error = console.error;

    if (args.length > 1) {
        console.group('>'.repeat(3) + ' ' + type + ' '+ '<'.repeat(3));
    }

    let consoleFn = log;

    switch (type) {
        case "info":
            consoleFn = info;
            break;
        case "warn":
            consoleFn = warn;
            break;
        case "log":
            consoleFn = log;
            break;
        case "error":
            consoleFn = error;
            break;
        default:
    }

    args.forEach(arg => {
        consoleFn(arg);
    });

    if (args.length > 1) {
        console.groupEnd();
    }
}
