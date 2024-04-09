var checkDataType = function (variable) {
    if (typeof variable === 'number') {
        console.log("Number");
    }
    else if (Array.isArray(variable)) {
        console.log("Array");
    }
    else if (typeof variable === 'object') {
        console.log("Obj");
    }
    else if (typeof variable === 'number') {
        console.log("String");
    }
    else {
        console.log("Không xác định được loại dữ liệu.");
    }
};
checkDataType(1);
checkDataType("2");
checkDataType({ city: "hanoi" });
checkDataType([12, 21, 21]);
