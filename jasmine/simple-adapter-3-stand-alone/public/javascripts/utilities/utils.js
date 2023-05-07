
function responseAdapter(data) {
  const isV1 = data === false || data === true;
  const isV2 = data && data.hasOwnProperty("field1") && data.hasOwnProperty("field2");

  if (isV1) {
    return data;
  } else if (isV2) {
    return {value1: data.field1, value2: data.field2};
  } else {
    throw new Error("illegal type: unknown schema"); 
  }
}

/*
// Export node module.
if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') ) {
    module.exports = responseAdapter;
}
*/
