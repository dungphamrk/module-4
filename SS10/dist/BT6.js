var Song = /** @class */ (function () {
    function Song(id, name, length) {
        this.id = id;
        this.name = name;
        this.length = length;
    }
    Song.prototype.setName = function (name) {
        return this.name = name;
    };
    Song.prototype.setLength = function (length) {
        return this.length = length;
    };
    return Song;
}());
var haha = new Song(1, "blabla", 23);
haha.setLength(123);
console.log(haha);
