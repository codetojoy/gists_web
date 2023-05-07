define(function () {
  return {
    responseAdapter: function (data) {
      const isV2 = data && data.hasOwnProperty("field1") && data.hasOwnProperty("field2");
      if (isV2) {
        return {value1: data.field1, value2: data.field2};
      } else {
        return data;
      }
    },
  };
});
