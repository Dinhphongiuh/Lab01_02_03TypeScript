export class triangle
{
    private ma: number;
    private mb: number;
    private mc: number;

    // constructor();
    // constructor(ma: number, mb: number, mc: number);

    constructor(ma: number, mb: number, mc: number)
    {
        if (ma < 0 || mb < 0 || mc < 0)
        {
            this.ma = 0;
            this.mb = 0;
            this.mc = 0;
        }
        else if (ma > mb + mc || mb > ma + mc || mc > ma + mb)
        {
            this.ma = 0;
            this.mb = 0;
            this.mc = 0;
        }
        this.ma = ma;
        this.mb = mb;
        this.mc = mc;
    }

    // getter setter
    getMa()
    {
        return this.ma;
    }

    setMa(ma: number)
    {
        this.ma = ma;
    }

    getMb()
    {
        return this.mb;
    }

    setMb(mb: number)
    {
        this.mb = mb;
    }

    getMc()
    {
        return this.mc;
    }

    setMc(mc: number)
    {
        this.mc = mc;
    }
    // 

    perimeter(): number
    {
        return this.ma + this.mb + this.mc;
    }

    acreage(): number
    {
        let s: number = 0;
        let S: number = 0;
        if (this.ma != this.mb && this.ma != this.mc && this.mb != this.mc)
        {
            s = (this.ma + this.mb + this.mc) / 2;
            S = Math.sqrt(s * (s - this.ma) * (s - this.mb) * (s -this.mc))
        }
        else if (this.ma === this.mb || this.mb === this.mc)
        {
            s = (this.ma + this.mb + this.mc) / 2;
            S = Math.sqrt(s * (s - this.ma) * (s - this.mb) * (s -this.mc))
        }
        else if (this.ma === this.mb && this.ma === this.mc && this.mb === this.mc)
        {
            S = Math.sqrt(3) / 4 * Math.pow(this.ma, 2);
        }
        
        return S;
    }

    loaiTamGiac(): string
    {
        if (this.ma != this.mb && this.ma != this.mc && this.mb != this.mc)
        {
            return 'tam giác thường';
        }
        else if (this.ma === this.mb && this.ma === this.mc && this.mb === this.mc)
        {
            return 'tam giác đều';
        }
        else if (this.ma === this.mb || this.mb === this.mc)
        {
            return 'tam giác cân';
        }
        return 'không phải là tam giác';
    }

    toString(): string
    {
        return `` + this.loaiTamGiac() + `có ba cạnh a = ${this.ma}, b = ${this.mb}
            , c = ${this.mc}. có chu vi = ${this.perimeter()}, diện tích = ${this.acreage()}
        `;
    }
}

// let test = new triangle(2, 2, 2);
// console.log(test.toString())