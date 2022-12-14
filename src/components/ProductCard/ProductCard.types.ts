import { Product } from "generated/types";

export type ProductCardProps = Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    "ref"
> & {
    product: Product;
    inCart?: boolean;
};

export enum Genre {
    ROCK = "Rock",
    METAL = "Metal",
    ROCK_N_ROLL = "Rock'n'Roll",
    HARD_ROCK = "Hard Rock",
    HEAVY_METAL = "Heavy Metal",
}
