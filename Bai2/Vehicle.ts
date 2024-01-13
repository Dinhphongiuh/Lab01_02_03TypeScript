export class Vehicle
{
    private chuXe: string;
    private loaiXe: string;
    private triGiaXe: number;
    private dungLuongXyLanh: number;

    constructor(chuXe: string, loaiXe: string, triGiaXe: number, dungLuongXyLanh: number)
    {
        this.chuXe = chuXe;
        this.loaiXe = loaiXe;
        this.triGiaXe = triGiaXe;
        this.dungLuongXyLanh = dungLuongXyLanh;
    }

    // 
    getChuXe(): string
    {
        return this.chuXe;
    }

    setChuXe(chuXe: string)
    {
        this.chuXe = chuXe;
    }

    getLoaiXe(): string
    {
        return this.loaiXe;
    }

    setLoaiXe(loaiXe: string)
    {
        this.loaiXe = loaiXe;
    }

    getTriGiaXe(): number
    {
        return this.triGiaXe;
    }

    setTriGiaXe(triGiaXe: number)
    {
        this.triGiaXe = triGiaXe;
    }

    getDungLuongXyLanh(): number
    {
        return this.dungLuongXyLanh;
    }

    setDungLuongXyLanh(dungLuongXyLanh: number)
    {
        this.dungLuongXyLanh = dungLuongXyLanh;
    }

    thuePhaiNop(): number
    {
        let thue: number;
        if (this.dungLuongXyLanh < 100)
            thue = 0.01;
        else if (this.dungLuongXyLanh >= 100 && this.dungLuongXyLanh <= 200)
            thue = 0.03;
        else
            thue = 0.05;
        return this.triGiaXe * thue;
    }

    toString(): string
    {
        return `chuXe: ${this.chuXe}, loại xe: ${this.loaiXe}, trị giá xe: ${this.triGiaXe}, dung Lượng xy lanh: ${this.dungLuongXyLanh}`;
    }
}