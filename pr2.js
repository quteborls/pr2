/**
 * Практическая работа
 * Тема: Методы массивов в JavaScript
 */

// Исходные данные
const prices = [1200, 3400, 560, 999, 2500, 4100, 800, 1500];
const categories = ["телефон", "ноутбук", "наушники", "телефон", "планшет", "ноутбук", "наушники"];
const discounts = [10, 0, 15, 5, 20, 0, 10];

// =====================================================
// 1. Перебор массива (forEach)
// =====================================================
prices.forEach(price => {
  console.log(`Цена товара: ${price} ₽`);
});

// =====================================================
// 2. Преобразование массива (map)
// =====================================================
const pricesWithDiscount = prices.map((price, index) => {
  const discount = discounts[index] ?? 0;
  return price - (price * discount) / 100;
});

console.log("Цены со скидкой:", pricesWithDiscount);

// =====================================================
// 3. Фильтрация массива (filter)
// =====================================================
const expensivePrices = prices.filter(price => price > 2000);

console.log("Дорогие товары:", expensivePrices);

// =====================================================
// 4. Поиск элемента (find)
// =====================================================
const firstVeryExpensive = prices.find(price => price > 4000);

console.log("Первая цена больше 4000:", firstVeryExpensive);

// =====================================================
// 5. Проверка условий (some, every)
// =====================================================
const hasCheapProducts = prices.some(price => price < 1000);
const allPricesPositive = prices.every(price => price > 0);

console.log("Есть ли дешёвые товары:", hasCheapProducts);
console.log("Все ли цены положительные:", allPricesPositive);

// =====================================================
// 6. Сортировка массива (sort)
// =====================================================
const sortedPrices = [...prices].sort((a, b) => a - b);

console.log("Отсортированные цены:", sortedPrices);

// =====================================================
// 7. Работа с несколькими массивами (reduce)
// =====================================================
const totalPrice = prices.reduce((sum, price) => sum + price, 0);

console.log("Общая стоимость:", totalPrice);

// =====================================================
// 8. Работа со строками в массиве
// =====================================================
const uniqueCategories = categories.reduce((result, category) => {
  if (!result.includes(category)) {
    result.push(category);
  }
  return result;
}, []);

console.log("Уникальные категории:", uniqueCategories);

// =====================================================
// 9. Дополнительное задание
// =====================================================
prices.pop();        // удалить последний элемент
prices.push(1800);   // добавить новую цену

const categoriesCopy = [...categories];

console.log("Копия категорий:", categoriesCopy);