import { StatusEnum } from "generated/types";

export const getLabel = (count: number) => {
    switch (true) {
        case count > 10 && count < 15:
            return "товаров";
        case count % 10 === 1:
            return "товар";
        case count % 10 === 0 || count % 10 >= 5:
            return "товаров";
        default:
            return "товара";
    }
};

export const getStatusLabel = (status: StatusEnum) => {
    switch (status) {
        case StatusEnum.ordered:
            return "На рассмотрении...";
        case StatusEnum.approved:
            return "В доставке";
        case StatusEnum.picked_up:
            return "Доставлен";
        default:
            return "Отклонен";
    }
};

export const getButtonLabel = (status: StatusEnum) => {
    switch (status) {
        case StatusEnum.ordered:
            return "В обработке...";
        case StatusEnum.approved:
            return "Подтвержден";
        case StatusEnum.picked_up:
            return "Доставлен";
        default:
            return "Отклонен";
    }
};
