import { KhoaHoc } from "./KhoaHoc";

export class TrungTamDaoTao
{
    danhSachKhoaHoc: KhoaHoc[];

    constructor()
    {
        this.danhSachKhoaHoc = [];
    }

    themKhoaHoc(khoaHoc: KhoaHoc): void
    {
        this.danhSachKhoaHoc.push(khoaHoc);
    }

    timKhoaHoc(tenKhoaHoc: string): KhoaHoc | undefined
    {
        return this.danhSachKhoaHoc.find(khoaHoc => khoaHoc.tenKhoaHoc === tenKhoaHoc);
    }

    timHocVienTrongKhoaHoc(tenHocVien: string): KhoaHoc | undefined
    {
        for (const khoaHoc of this.danhSachKhoaHoc)
        {
            if (khoaHoc.timHocVien(tenHocVien))
            {
                return khoaHoc;
            }
        }
        return undefined;
    }   

    danhSachKhoaHocChuaKetThuc(): KhoaHoc[]
    {
        return this.danhSachKhoaHoc.filter(KhoaHoc => !KhoaHoc.kiemTraKetThucKhoaHoc());
    }

    danhSachKhoaHocChuaBatDau(): KhoaHoc[]
    {
        return this.danhSachKhoaHoc.filter(khoaHoc => khoaHoc.kiemTraBatDauKhoaHoc());
    }
}