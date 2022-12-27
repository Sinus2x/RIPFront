import React, { useCallback, useState } from "react";
import { CheckboxCustom } from "components/CheckboxCustom";
import { useAppDispatch } from "store";
import { SortBlockStyled, SortTooltipStyled } from "./SortBlock.style";
import { SortBlockProps } from "./SortBlock.types";
import { getAllOrdersAction, getOrdersAction } from "store/order/order.actions";

import { FcGenericSortingAsc } from "@react-icons/all-files/fc/FcGenericSortingAsc";
import { StatusEnum } from "generated/types";

const SORT_OPTIONS = [
    { label: "По дате создания", value: "order_date" },
    { label: "По дате подтверждения", value: "approval_date" },
    { label: "По дате доставки", value: "pickup_date" },
] as const;

const STATUS_OPTIONS = [
    { label: "На рассмотрении...", value: StatusEnum.ordered },
    { label: "В доставке", value: StatusEnum.approved },
    { label: "Доставлен", value: StatusEnum.picked_up },
    { label: "Отклонен", value: StatusEnum.rejected },
] as const;

export const SortBlock = ({ isStaff }: SortBlockProps) => {
    const dispatch = useAppDispatch();
    const [checkedSort, setCheckedSort] = useState<string>("");
    const [checkedFilter, setCheckedFilter] = useState<string>("");

    const handleSortChange = useCallback(
        (sort: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
            setCheckedSort(e.target.checked ? sort : "");

            const query = e.target.checked
                ? checkedFilter
                    ? `?status=${checkedFilter}&ordering=${sort}`
                    : `?ordering=${sort}`
                : checkedFilter
                ? `?status=${checkedFilter}`
                : undefined;

            const action = isStaff ? getAllOrdersAction : getOrdersAction;

            dispatch(action(query));
        },
        [checkedFilter, dispatch, isStaff]
    );

    const handleFilterChange = useCallback(
        (status: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
            setCheckedFilter(e.target.checked ? status : "");

            const query = e.target.checked
                ? checkedSort
                    ? `?status=${status}&ordering=${checkedSort}`
                    : `?status=${status}`
                : checkedSort
                ? `?ordering=${checkedSort}`
                : undefined;

            const action = isStaff ? getAllOrdersAction : getOrdersAction;

            dispatch(action(query));
        },
        [checkedSort, dispatch, isStaff]
    );

    return (
        <SortBlockStyled>
            <SortTooltipStyled>
                <h3>
                    Сортировка <FcGenericSortingAsc />
                </h3>
                <div className="options">
                    {SORT_OPTIONS?.map(({ label, value }, index) => (
                        <CheckboxCustom
                            label={label}
                            key={index}
                            onChange={handleSortChange(value)}
                            checked={value === checkedSort}
                        />
                    ))}
                </div>
            </SortTooltipStyled>

            <SortTooltipStyled>
                <h3>Фильтр</h3>
                <div className="options">
                    Статус:
                    {STATUS_OPTIONS?.map(({ label, value }, index) => (
                        <CheckboxCustom
                            label={label}
                            key={index}
                            onChange={handleFilterChange(value)}
                            checked={value === checkedFilter}
                        />
                    ))}
                </div>
            </SortTooltipStyled>
        </SortBlockStyled>
    );
};
