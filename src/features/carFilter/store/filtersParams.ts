export interface FilterItem {
  key: string,
  label: string
}

interface IFilterParams {
  brands: FilterItem[],
  type: FilterItem[],
  patrol: FilterItem[],
  discount: FilterItem[],
  available: FilterItem[],
}

export const filtersParams: IFilterParams =
  {
      brands: [
    { key: 'audi', label: 'Audi' },
    { key: 'BMW', label: 'BMW' },
    { key: 'Cupra', label: 'Cupra' },
    { key: 'Hyundai', label: 'Hyundai' },
    { key: 'Lexus', label: 'Lexus' },
    { key: 'Mercedes-Benz', label: 'Mercedes-Benz' },
    { key: 'Peugeot', label: 'Peugeot' },
    { key: 'Porsche', label: 'Porsche' },
    { key: 'Skoda', label: 'Skoda' },
    { key: 'Toyota', label: 'Toyota' },
    { key: 'Volvo', label: 'Volvo' },
    { key: 'VW', label: 'VW' },
  ],
  type: [
    { key: 'suv', label: 'Позашляховик' },
    { key: 'sedan', label: 'Седан' },
    { key: 'universal', label: 'Універсал' },
  ],
  patrol: [
    { key: 'gasoline: Бензин', label: 'Бензин' },
    { key: 'diesel: Дизель', label: 'Дизель' },
    { key: 'electro: Electro', label: 'Electro' },
    { key: 'gybrid: Гибрид', label: 'Гибрид' },
  ],
  discount: [
    { key: 'discount: Discount', label: 'Зі знижкою' },
  ],
  available: [
    { key: 'aval: Доступно', label: 'Одразу доступно' },
  ],

  }
