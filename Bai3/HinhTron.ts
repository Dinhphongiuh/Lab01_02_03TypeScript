import { ToaDo } from "./ToaDo";

class HinhTron
{
    private tam: ToaDo;
    private banKinh: number;

    constructor(tam: ToaDo, banKin: number)
    {
        this.tam = tam;
        this.banKinh = banKin;        
    }

    getTam(): ToaDo
    {
        return this.tam;
    }

    setTam(tam: ToaDo)
    {
        this.tam = tam;
    }

    getBanKinh(): number
    {
        return this.banKinh;
    }

    setBanKinh(banKinh: number)
    {
        this.banKinh = banKinh;
    }
    // 
    tinhChuVi(): number
    {
        return 2 * Math.PI * this.banKinh;
    }
    tinhDienTich()
    {
        return Math.PI * this.banKinh * this.banKinh;
    }

    xuatThongTin(): string
    {
        return `Hình tròn tâm ${this.tam.getTen()}(${this.tam.getX()}; ${this.tam.getY()}), với bán kính ${this.banKinh} có diện tích và chu vi lần lượt là ${this.tinhDienTich()} và ${this.tinhChuVi()}`;
    }   
}

const td = new ToaDo("O", 5, 5);
const hinhTron = new HinhTron(td, 10.5);

console.log(hinhTron.xuatThongTin());