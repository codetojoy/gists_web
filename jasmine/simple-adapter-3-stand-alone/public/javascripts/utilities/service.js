
function fooService(data, barService) {
    const barResult = barService(data);
    return `${barResult}-${barResult}`;
}

