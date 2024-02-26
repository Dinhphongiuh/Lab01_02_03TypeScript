import { HocVien } from "./HocVien";
import { KhoaHoc } from "./KhoaHoc";
import { TrungTamDaoTao } from "./TrungTamDaoTao";

function main(): void
{
    console.log('test')

    const trungTam = new TrungTamDaoTao();

    const khoaHoc1 = new KhoaHoc('Khoa Hoc A', '2024-12-01', '6');
    const khoaHoc2 = new KhoaHoc('Khoa Hoc B', '2024-05-01', '3');
    const khoaHoc3 = new KhoaHoc('Khoa Hoc C', '2024-07-01', '12');

    trungTam.themKhoaHoc(khoaHoc1);
    trungTam.themKhoaHoc(khoaHoc2);
    trungTam.themKhoaHoc(khoaHoc3);

    const hocVien1 = new HocVien('Nguyễn Văn A', '123 ABC', '0123456789');
    const hocVien2 = new HocVien('Nguyễn Văn B', '345 ABC', '0123456788');

    khoaHoc1.themHocVien(hocVien1);
    khoaHoc1.themHocVien(hocVien2);

    console.log('Thông tin học viên khoá học A');
    console.log(khoaHoc1.danhSachHocVien);

    const hocVienTimKiem = 'Nguyễn Văn B';
    const khoaHocTimKiem = trungTam.timHocVienTrongKhoaHoc(hocVienTimKiem);
    if (khoaHocTimKiem)
    {
        if (khoaHocTimKiem.kiemTraKetThucKhoaHoc())
            console.log(`${hocVienTimKiem} đã từng học khoá học: ${khoaHocTimKiem.tenKhoaHoc}`)
        else if (khoaHocTimKiem.kiemTraBatDauKhoaHoc())
            console.log(`${hocVienTimKiem} đã đăng ký học khoá học: ${khoaHocTimKiem.tenKhoaHoc}`)
        else
            console.log(`${hocVienTimKiem} đang học khoá học: ${khoaHocTimKiem.tenKhoaHoc}`)
    }
    else 
    {
        console.log(`${hocVienTimKiem} chưa từng học khoá học`)
    }
}

main()