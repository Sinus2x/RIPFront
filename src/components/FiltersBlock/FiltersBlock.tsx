import { BlockStyled, FiltersBlockStyled, FiltersTooltipStyled } from "components/FiltersBlock/FiltersBlock.style";
import { Input } from "components/Input";
import React, { useCallback, useState } from "react";
import { CheckboxCustom } from "components/CheckboxCustom";
import { useAppDispatch, useAppSelector } from "store";
import { getSearchProductListAction } from "store/products/products.actions";

export const FiltersBlock = () => {
    const [search, setSearch] = useState("");
    const dispatch = useAppDispatch();
    const [checkedBrand, setCheckedBrand] = useState<string>("");
    const { availableGenres } = useAppSelector((store) => store.product);

    const handleSearchChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value);
            dispatch(getSearchProductListAction(`?search=${e.target.value}`));
        },
        [dispatch]
    );

    const handleBrandChange = useCallback(
        (brand: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.checked) {
                setCheckedBrand(brand);
                dispatch(getSearchProductListAction(`?brand=${brand}`));
            } else {
                setCheckedBrand("");
                dispatch(getSearchProductListAction(undefined));
            }
        },
        [dispatch]
    );

    return (
        <FiltersBlockStyled>
            <Input placeholder="Поиск" isSearch value={search} onChange={handleSearchChange} />
            <FiltersTooltipStyled>
                {!!availableGenres?.length && <h4>Жанр</h4>}

                <BlockStyled>
                    {availableGenres?.map((brand, index) => (
                        <CheckboxCustom
                            label={brand}
                            key={index}
                            onChange={handleBrandChange(brand ?? "")}
                            checked={brand === checkedBrand}
                        />
                    ))}
                </BlockStyled>
            </FiltersTooltipStyled>
        </FiltersBlockStyled>
    );
};
