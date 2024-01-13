"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.triangle = void 0;
var triangle = /** @class */ (function () {
    // constructor();
    // constructor(ma: number, mb: number, mc: number);
    function triangle(ma, mb, mc) {
        if (ma < 0 || mb < 0 || mc < 0) {
            this.ma = 0;
            this.mb = 0;
            this.mc = 0;
        }
        else if (ma > mb + mc || mb > ma + mc || mc > ma + mb) {
            this.ma = 0;
            this.mb = 0;
            this.mc = 0;
        }
        this.ma = ma;
        this.mb = mb;
        this.mc = mc;
    }
    // getter setter
    triangle.prototype.getMa = function () {
        return this.ma;
    };
    triangle.prototype.setMa = function (ma) {
        this.ma = ma;
    };
    triangle.prototype.getMb = function () {
        return this.mb;
    };
    triangle.prototype.setMb = function (mb) {
        this.mb = mb;
    };
    triangle.prototype.getMc = function () {
        return this.mc;
    };
    triangle.prototype.setMc = function (mc) {
        this.mc = mc;
    };
    // 
    triangle.prototype.perimeter = function () {
        return this.ma + this.mb + this.mc;
    };
    triangle.prototype.acreage = function () {
        var s = 0;
        var S = 0;
        if (this.ma != this.mb && this.ma != this.mc && this.mb != this.mc) {
            s = (this.ma + this.mb + this.mc) / 2;
            S = Math.sqrt(s * (s - this.ma) * (s - this.mb) * (s - this.mc));
        }
        else if (this.ma === this.mb || this.mb === this.mc) {
            s = (this.ma + this.mb + this.mc) / 2;
            S = Math.sqrt(s * (s - this.ma) * (s - this.mb) * (s - this.mc));
        }
        else if (this.ma === this.mb && this.ma === this.mc && this.mb === this.mc) {
            S = Math.sqrt(3) / 4 * Math.pow(this.ma, 2);
        }
        return S;
    };
    triangle.prototype.loaiTamGiac = function () {
        if (this.ma != this.mb && this.ma != this.mc && this.mb != this.mc) {
            return 'tam giác thường';
        }
        else if (this.ma === this.mb && this.ma === this.mc && this.mb === this.mc) {
            return 'tam giác đều';
        }
        else if (this.ma === this.mb || this.mb === this.mc) {
            return 'tam giác cân';
        }
        return 'không phải là tam giác';
    };
    triangle.prototype.toString = function () {
        return "" + this.loaiTamGiac() + "c\u00F3 ba c\u1EA1nh a = ".concat(this.ma, ", b = ").concat(this.mb, "\n            , c = ").concat(this.mc, ". c\u00F3 chu vi = ").concat(this.perimeter(), ", di\u1EC7n t\u00EDch = ").concat(this.acreage(), "\n        ");
    };
    return triangle;
}());
exports.triangle = triangle;
// let test = new triangle(2, 2, 2);
// console.log(test.toString())
