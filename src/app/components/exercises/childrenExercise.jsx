import React, { useState, useEffect } from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

let a = 0;
const Component = ({ children }) => {
    const [data, setData] = useState({});
    useEffect(() => {}, [data]);
    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    return React.Children.map(children, (child) => {
        a = a + 0.5;
        const config = {
            ...child.props,
            onChange: handleChange,
            value: data[child.props.name] || "",
            children: `${a}. ${children.props.children}`
        };
        console.log("Тестим: ", children.props.children);
        console.log("Выводим: ", React.cloneElement(child, config));

        return React.cloneElement(child, config);
    });
};
Component.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>

            <Component>
                <div>Компонент списка</div>
            </Component>
            <Component>
                <div>Компонент списка</div>
            </Component>
            <Component>
                <div>Компонент списка</div>
            </Component>
        </CollapseWrapper>
    );
};

export default ChildrenExercise;
