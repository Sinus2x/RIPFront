import { Header } from "components/Header";
import { COLORS } from "constants/colors";
import { ContainerStyled, FooterStyled, MainLayoutStyled } from "./MainLayout.style";
import { MainLayoutProps } from "./MainLayout.types";

export const MainLayout = ({ children, bgColor }: MainLayoutProps) => {
    return (
        <MainLayoutStyled bgColor={bgColor ?? COLORS.BackgroundMain}>
            <Header />
            <ContainerStyled>
                {children}
                <FooterStyled>2022, ©Record Store</FooterStyled>
            </ContainerStyled>
        </MainLayoutStyled>
    );
};
