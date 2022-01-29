


function fakeBin(x) {

    if (x < 5) {
        let a = x * 0;
        a = String(a);
        console.log(typeof a, a)
        return a;

    }

    if (x >= 5) {
        let c = x / x;
        c = String(c)
        console.log(typeof c, c)
        return c;

    }
}

fakeBin(4)
