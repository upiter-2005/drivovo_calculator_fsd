import { CarData } from "@/shared/types/carAcf";

export function sortCars(
  arr: CarData[],
  order: string
): CarData[] {
  const result = [...arr]; // копируем, чтобы не мутировать исходный массив

  const compare = (a: CarData, b: CarData) => {
    const aVal = Number(a.acf.calculator_props.car_price_ex_showroom);
    const bVal = Number(b.acf.calculator_props.car_price_ex_showroom);

    if (aVal === bVal) return 0;
    const isAsc = order === 'asc';
    return (aVal < bVal ? -1 : 1) * (isAsc ? 1 : -1);
  };

  for (let i = 0; i < result.length - 1; i++) {
    let idx = i;
    for (let j = i + 1; j < result.length; j++) {
      if (compare(result[j], result[idx]) < 0) {
        idx = j;
      }
    }

    if (idx !== i) {
      [result[i], result[idx]] = [result[idx], result[i]];
    }
  }


  return result;
}
