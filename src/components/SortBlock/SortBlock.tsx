import React, { useCallback, useState } from "react";
import { CheckboxCustom } from "components/CheckboxCustom";
import { useAppDispatch } from "store";
import { SortBlockStyled, SortTooltipStyled } from "./SortBlock.style";
import { SortBlockProps } from "./SortBlock.types";
import { getAllOrdersAction, getOrdersAction } from "store/order/order.actions";

import { FcGenericSortingAsc } from "@react-icons/all-files/fc/FcGenericSortingAsc";

const SORT_OPTIONS = [
    { label: "По дате создания", value: "order_date" },
    { label: "По дате подтверждения", value: "approval_date" },
    { label: "По дате доставки", value: "pickup_date" },
] as const;

export const SortBlock = ({ isStaff }: SortBlockProps) => {
    const dispatch = useAppDispatch();
    const [checkedSort, setCheckedSort] = useState<string>("");

    const handleSortChange = useCallback(
        (sort: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.checked) {
                setCheckedSort(sort);

                if (isStaff) {
                    dispatch(getAllOrdersAction(`?ordering=${sort}`));
                } else {
                    dispatch(getOrdersAction(`?ordering=${sort}`));
                }
            } else {
                setCheckedSort("");

                if (isStaff) {
                    dispatch(getAllOrdersAction(undefined));
                } else {
                    dispatch(getOrdersAction(undefined));
                }
            }
        },
        [dispatch, isStaff]
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
        </SortBlockStyled>
    );
};
