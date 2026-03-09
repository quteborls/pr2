/**
 * Практическая работа
 * Тема: Методы массивов в JavaScript
 */

// Исходные данные
const prices = [1200, 3400, 560, 999, 2500, 4100, 800, 1500];
const categories = ["телефон", "ноутбук", "наушники", "телефон", "планшет", "ноутбук", "наушники"];
const discounts = [10, 0, 15, 5, 20, 0, 10];

// =====================================================
// 1. Группировка товаров по категориям
// =====================================================
const groupedByCategory = categories.reduce((result, category, index) => {
    if (!result[category]) {
        result[category] = [];
    }
    result[category].push({
        price: prices[index],
        discount: discounts[index] || 0
    });
    return result;
}, {});

console.log("Товары по категориям:", groupedByCategory);

// =====================================================
// 2. Расчет средней цены по категориям
// =====================================================
const averagePriceByCategory = Object.entries(groupedByCategory).reduce((result, [category, items]) => {
    const total = items.reduce((sum, item) => sum + item.price, 0);
    result[category] = total / items.length;
    return result;
}, {});

console.log("Средняя цена по категориям:", averagePriceByCategory);

// =====================================================
// 3. Создание массива объектов товаров
// =====================================================
const products = prices.map((price, index) => ({
    price: price,
    category: categories[index],
    discount: discounts[index] || 0
}));

console.log("Массив объектов товаров:", products);

// =====================================================
// 4. Фильтрация дорогих товаров с учетом скидки
// =====================================================
const expensiveDiscounted = products
    .filter(product => product.price > 2000)
    .map(product => ({
        ...product,
        priceWithDiscount: product.price - (product.price * product.discount) / 100
    }));

console.log("Дорогие товары со скидкой:", expensiveDiscounted);

// =====================================================
// 5. Сортировка по цене со скидкой
// =====================================================
const sortedByDiscountedPrice = [...products].sort((a, b) => {
    const priceA = a.price - (a.price * a.discount) / 100;
    const priceB = b.price - (b.price * b.discount) / 100;
    return priceA - priceB;
});

console.log("Сортировка по цене со скидкой:", sortedByDiscountedPrice);

// =====================================================
// 6. Подсчет общей суммы со скидкой
// =====================================================
const totalWithDiscount = products.reduce((sum, product) => {
    const discountedPrice = product.price - (product.price * product.discount) / 100;
    return sum + discountedPrice;
}, 0);

console.log("Общая сумма со скидкой:", totalWithDiscount);
