"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var triangle_1 = require("./triangle");
function main() {
    var triangles = [
        new triangle_1.triangle(3, 4, 5),
        new triangle_1.triangle(2, 2, 3),
        new triangle_1.triangle(3, 3, 3),
    ];
    console.log("Thông tin tam giác: ");
    console.log("--------------------------------------------------------------------------");
    console.log("| cạnh 1 | cạnh 2 | cạnh 3 | loại           | chu vi | diện tích |");
    console.log("--------------------------------------------------------------------------");
    for (var _i = 0, triangles_1 = triangles; _i < triangles_1.length; _i++) {
        var triangle_2 = triangles_1[_i];
        console.log("| ".concat(triangle_2.getMa(), "      | ").concat(triangle_2.getMb(), "      | ").concat(triangle_2.getMc(), "      | ").concat(triangle_2.loaiTamGiac(), "| ").concat(triangle_2.perimeter(), " |  ").concat(triangle_2.acreage()));
    }
}
main();
