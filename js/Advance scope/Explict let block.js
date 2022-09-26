function formatstr(str) {
    {
        let prefix, rest;
        prefix = str.slice(0, 3);
        rest = str.slice(3);
        str = prefix.toUpperCase() + rest;
        console.log(prefix + "\n" + rest + "\n" + str);
    }
    if (/^FOO:/.test(str)) {
        return str;

    }
    return str.slice(4);
}

formatstr("md yaseen");