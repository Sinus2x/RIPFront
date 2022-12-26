import { StyledButtons, StyledMainInfo, StyledOrderCard, StyledProducts } from "./OrderCard.style";
import Moment from "moment";
import React, { useCallback, useMemo, useState } from "react";

import { OrderCardProps } from "./OrderCard.types";
import { getLabel, getStatusLabel } from "./OrderCard.utils";
import { Button } from "components/Button";
import { StatusEnum } from "generated/types";
import { useAppDispatch } from "store";
import { changeOrderStatusAction } from "store/order/order.actions";
import { Link } from "react-router-dom";
import { ProductCard } from "components/ProductCard";

export const OrderCard = ({ order, isStaff = false, ...props }: OrderCardProps) => {
    const dispatch = useAppDispatch();
    const [expanded, setExpanded] = useState(false);

    const totalSum = useMemo(
        () => order.products?.reduce((prev, current) => prev + Number(current?.price), 0),
        [order.products]
    );

    const handleButtonClick = useCallback(
        (isCancel?: boolean, isPickedUp?: boolean) => {
            switch (true) {
                case isStaff && !!isCancel:
                    dispatch(changeOrderStatusAction({ id: order.id ?? 0, status: StatusEnum.rejected }));
                    break;
                case isStaff && !isCancel && !isPickedUp:
                    dispatch(changeOrderStatusAction({ id: order.id ?? 0, status: StatusEnum.approved }));
                    break;
                case isStaff && !isCancel && isPickedUp:
                    dispatch(changeOrderStatusAction({ id: order.id ?? 0, status: StatusEnum.picked_up }));
                    break;
            }
        },
        [dispatch, isStaff, order.id]
    );

    const renderButton = useMemo(() => {
        switch (true) {
            case isStaff && order.status === StatusEnum.ordered:
                return (
                    <>
                        <Button onClick={() => handleButtonClick()}>Подтвердить</Button>
                        <Button styleType="link" onClick={() => handleButtonClick(true)}>
                            Отклонить
                        </Button>
                    </>
                );

            case isStaff && order.status === StatusEnum.approved:
                return (
                    <>
                        <Button onClick={() => handleButtonClick(false, true)}>Подтвердить доставку</Button>
                    </>
                );

            default:
                return null;
        }
    }, [handleButtonClick, isStaff, order.status]);

    return (
        <StyledOrderCard {...props} disabled={order.status === StatusEnum.rejected}>
            <StyledMainInfo>
                <div>
                    <span>
                        {order.products?.length} {getLabel(order.products?.length ?? 0)} на сумму{" "}
                        <strong>{totalSum}</strong> ₽ {isStaff && `от пользователя ${order.user?.username}`}
                    </span>
                    <p>
                        Статус:{" "}
                        <span>
                            <strong>{getStatusLabel(order.status)}</strong>
                        </span>
                    </p>
                    <p>
                        Создан {Moment(order.order_date).format("DD.MM.YYYY")}{" "}
                        {Moment(order.order_date).format("HH:mm")}
                    </p>
                    {order.status === StatusEnum.approved && (
                        <p>
                            Подтвержден {Moment(order.approval_date).format("DD.MM.YYYY")}{" "}
                            {Moment(order.approval_date).format("HH:mm")}
                        </p>
                    )}
                    {order.status === StatusEnum.picked_up && (
                        <>
                            <p>
                                Подтвержден {Moment(order.approval_date).format("DD.MM.YYYY")}{" "}
                                {Moment(order.approval_date).format("HH:mm")}
                            </p>
                            <p>
                                Доставлен {Moment(order.pickup_date).format("DD.MM.YYYY")}{" "}
                                {Moment(order.pickup_date).format("HH:mm")}
                            </p>
                        </>
                    )}
                </div>
                <StyledButtons>{renderButton}</StyledButtons>
            </StyledMainInfo>
            {!expanded && (
                <div className="see-all" onClick={() => setExpanded(true)}>
                    <span>Подробнее</span>
                    <span className="material-symbols-outlined">expand_more</span>
                </div>
            )}
            {expanded && (
                <div className="expanded">
                    <StyledProducts>
                        {order.products?.map((product) => (
                            <Link to={`/products/${product.id}`}>
                                <ProductCard key={product.id} product={product} />
                            </Link>
                        ))}
                    </StyledProducts>

                    <div className="see-all" onClick={() => setExpanded(false)}>
                        <span>Свернуть</span>
                        <span className="material-symbols-outlined">expand_less</span>
                    </div>
                </div>
            )}
        </StyledOrderCard>
    );
};
