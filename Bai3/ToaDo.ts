export class ToaDo
{
    private ten: string;
    private x: number;
    private y: number;

    constructor(ten: string, x: number, y: number)
    {
        this.ten = ten;
        this.x = x;
        this.y = y;
    }

    // 
    getTen(): string
    {
        return this.ten;
    }
    setTen(ten: string)
    {
        this.ten = ten;
    }
    getX(): number
    {
        return this.x;
    }
    setX(x: number)
    {
        this.x = x;
    }
    getY(): number
    {
        return this.y;
    }
    setY(y: number)
    {
        this.y = y;
    }
    // 
    toString(): string
    {
        return `${this.ten}(${this.x}; ${this.y})`;
    }
}
