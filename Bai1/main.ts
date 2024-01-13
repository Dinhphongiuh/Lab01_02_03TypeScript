import {triangle} from './triangle';

function main(): void
{
    const triangles: triangle[] = [
        new triangle(3, 4, 5),
        new triangle(2, 2, 3),
        new triangle(3, 3, 3),
    ];

    console.log("Thông tin tam giác: ");
    console.log("--------------------------------------------------------------------------")
    console.log("| cạnh 1 | cạnh 2 | cạnh 3 | loại           | chu vi | diện tích |");
    console.log("--------------------------------------------------------------------------");
    for (const triangle of triangles)
    {
        console.log(`| ${triangle.getMa()}      | ${triangle.getMb()}      | ${triangle.getMc()}      | ${triangle.loaiTamGiac()}| ${triangle.perimeter()} |  ${triangle.acreage()}`)
    }
}

main()