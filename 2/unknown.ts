function process(val: any) {
    if (typeof val === 'object' &&
        !!val &&
        'log' in val &&
        typeof val.log === 'function'
    ) {
        val.log();
    }
}

// safer than 'any' but more flexible than union types