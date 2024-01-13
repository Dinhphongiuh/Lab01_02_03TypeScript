import { Vehicle } from "./Vehicle";

function main()
{
    const xe = new Vehicle("Nguyễn Thu Loan", "Future Neo", 350000000.00, 100);
    const xe1 = new Vehicle("Lê Minh Tính", "Ford Ranger", 350000000.00, 3000);
    const xes: Vehicle[] = [];
    xes.push(xe);
    xes.push(xe1);
    
    console.log(' Tên chủ xe         Loại xe                Dung tích             Trị giá           thuế phải nộp');
    console.log('============================================================================================================')

    for (const xee of xes)
    {
        console.log(`${xee.getChuXe()}       ${xee.getLoaiXe()}             ${xee.getDungLuongXyLanh()}               ${xee.getTriGiaXe()}           ${xe.thuePhaiNop()}`)
    }
}

main()