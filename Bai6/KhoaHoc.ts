import { HocVien } from "./HocVien";

export class KhoaHoc
{
    tenKhoaHoc: string;
    ngayMoKhoaHoc: string;
    thoiGianHoc: string;
    danhSachHocVien: HocVien[];

    constructor(tenKhoaHoc: string, ngayMoKhoaHoc: string, thoiGianHoc: string)
    {
        this.tenKhoaHoc = tenKhoaHoc;
        this.ngayMoKhoaHoc = ngayMoKhoaHoc;
        this.thoiGianHoc = thoiGianHoc;
        this.danhSachHocVien = [];
    }

    themHocVien(hocVien: HocVien): void
    {
        if (this.danhSachHocVien.length < 20)
        {
            this.danhSachHocVien.push(hocVien);
        }
        else
        {
            console.log('Khoá Học Đầy!!');
        }
    }

    timHocVien(hoTen: string): HocVien | undefined
    {
        return this.danhSachHocVien.find(hocVien => hocVien.gethoTen() === hoTen);
    }

    kiemTraKetThucKhoaHoc(): boolean
    {
        const ngayHienTai = new Date();
        const ngayKetThuc = new Date(this.ngayMoKhoaHoc);
        ngayKetThuc.setMonth(ngayKetThuc.getMonth() + parseInt(this.thoiGianHoc));
        return ngayHienTai >= ngayKetThuc;
    }

    kiemTraBatDauKhoaHoc(): boolean
    {
        const ngayHienTai = new Date();
        const ngayMo = new Date(this.ngayMoKhoaHoc);
        return ngayHienTai < ngayMo;
    }
}