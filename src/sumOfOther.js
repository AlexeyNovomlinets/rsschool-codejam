const sumOfOther = (value) =>
    value.map((e, ind) => 
        value.reduce((acm, a, i) =>
            (acm + (ind === i ? 0: a)), 0));
