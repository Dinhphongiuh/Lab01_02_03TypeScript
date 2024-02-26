import {HocVien} from './HocVien';

function main(): void
{
    const HocVien1 = new HocVien('Nguyễn Văn Tèo', 2000, {'Toan': 8, 'Ly': 7, 'Hoa': 6, 'Anh': 8, 'Van': 9});
    const HocVien2 = new HocVien('Nguyễn Văn Tý', 2000, {'Toan': 6, 'Ly': 7, 'Hoa': 8, 'Anh': 7, 'Van': 9});
    const HocVien3 = new HocVien('Nguyễn Thị Nở', 2000, {'Toan': 5, 'Ly': 5, 'Hoa': 5, 'Anh': 8, 'Van': 9});
    const HocVien4 = new HocVien('Nguyễn Văn B ', 2000, {'Toan': 4, 'Ly': 5, 'Hoa': 4, 'Anh': 8, 'Van': 9});

    const danhSachHocVien: HocVien[] = [HocVien1, HocVien2, HocVien3, HocVien4];

    const soLuongLamLuanVan = danhSachHocVien.filter(hocVien => hocVien.isLamLuanVanTotNghiep()).length;
    console.log('số lượng học viên làm luận văn tốt nghiệp: ', soLuongLamLuanVan);

    const soLuongThiTotNghiep = danhSachHocVien.filter(hocVien => hocVien.isTHiTotNghiep()).length;
    console.log('Số lượng học viên thi tốt nghiệp: ', soLuongThiTotNghiep);

    const hocVienThiLai = danhSachHocVien.filter(hocVien => hocVien.isThiLai());
    hocVienThiLai.forEach(hocVien => {
        const monThiLai = Object.keys(hocVien.getdiemMonHoc()).filter(mon => hocVien.getdiemMonHoc()[mon] < 5);
        console.log(`${hocVien.gethoTen()} phải thi lại môn: ${monThiLai.join(', ')}`);
    });
}

main()