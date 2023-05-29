import React from "react";
import SimpleComponent from "./simpleComponent";
import CardWrapper from "../common/Card";

const isAuth = localStorage.getItem("auth");
const withFunctions = (Inside) => {
    const onLogin = () => {
        localStorage.setItem("auth", "token");
    };

    const onLogOut = () => {
        localStorage.removeItem("auth");
    };
    const WithFunctions = () => {
        return (
            <CardWrapper>
                <Inside
                    onLogin={onLogin}
                    onLogOut={onLogOut}
                    isAuth={isAuth}
                />
            </CardWrapper>
        );
    };
    return WithFunctions;
};

const ComponentWithHoc = withFunctions(SimpleComponent);

export default ComponentWithHoc;
