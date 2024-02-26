export class HocVien
{
    private hoTen: string;
    private namSinh: number;
    private diemMonHoc: {[monHoc: string]: number};

    constructor(hoTen: string, namSinh: number, diemMonHoc: {[monHoc: string]: number})
    {
        this.hoTen = hoTen;
        this.namSinh = namSinh;
        this.diemMonHoc = diemMonHoc;
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

    getnamSinh()
    {
        return this.namSinh;
    }

    setnamSinh(namSinh: number)
    {
        this.namSinh = namSinh;
    }

    getdiemMonHoc()
    {
        return this.diemMonHoc;
    }

    setdiemMonHoc(diemMonHoc: {[monHoc: string]: number})
    {
        this.diemMonHoc = diemMonHoc;
    }

    // 

    isLamLuanVanTotNghiep(): boolean
    {
        const diemTrungBinh = this.tinhDiemTrungBinh();
        return diemTrungBinh > 7 && !Object.values(this.diemMonHoc).some(diem => diem < 5);
    }

    isTHiTotNghiep(): boolean
    {
        const diemTrungBinh = this.tinhDiemTrungBinh();
        return diemTrungBinh <= 7 && !Object.values(this.diemMonHoc).some(diem => diem <5 )
    }

    tinhDiemTrungBinh(): number
    {
        const sum = Object.values(this.diemMonHoc).reduce((total, diem) => total + diem, 0);
        return sum / Object.keys(this.diemMonHoc).length;
    }

    isThiLai(): boolean
    {
        return Object.values(this.diemMonHoc).some(diem => diem < 5);
    }
}
