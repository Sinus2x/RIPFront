export const getPageTitle = (path: string) => {
    switch (true) {
        case path === "/":
            return "Главная";
        case path.includes("product"):
            return "Страница продукта";
        case path.includes("auth"):
            return "Авторизация";
        case path.includes("user"):
            return "Личный кабинет";
        case path.includes("cart"):
            return "Корзина";
        case path.includes("order"):
            return "Заказы";
        default:
            return "Главная";
    }
};
