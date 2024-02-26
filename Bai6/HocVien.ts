export class HocVien
{
    private hoTen: string;
    private diaChi: string;
    private soDienThoai: string;

    constructor(hoTen: string, diaChi: string, soDienThoai: string)
    {
        this.hoTen = hoTen;
        this.diaChi = diaChi;
        this.soDienThoai = soDienThoai;
    }

    // 
    gethoTen()
    {
        return this.hoTen;
    }

    sethoTen(hoTen: string)
    {
        this.hoTen = hoTen;
    }

    getdiaChi()
    {
        return this.diaChi;
    }

    setdiaChi(diaChi: string)
    {
        this.diaChi = diaChi;
    }

    getsoDienThoai()
    {
        return this.soDienThoai;
    }

    setsoDienThoai(soDienThoai: string)
    {
        this.soDienThoai = soDienThoai;
    }
}