"use strict";
function removeFalsyProperties(obj) {
    for (const key in obj) {
        if (!obj[key]) {
            delete obj[key];
        }
    }
}
const obj = {
    name: "alsd",
    age: 1230,
    address: "",
    email: null,
    active: true,
    phone: undefined
};
removeFalsyProperties(obj);
console.log(obj);
