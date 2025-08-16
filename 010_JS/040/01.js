const obj = {
    foo:"foo",
    bar:"bar"
}

try {
    console.log(obj.foo());
} catch (error) {
    console.log("что-то упало")
}
finally{
    console.log("finally")
}
