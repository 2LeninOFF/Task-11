import React, { useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";

const UseRefExercise = () => {
    const blockRef = useRef("Блок");
    const [otherState, setOtherState] = useState(false);
    const handleClickSizeAndText = () => {
        setOtherState(!otherState);
        blockRef.current.style.height = "150px";
        blockRef.current.style.width = "80px";
        blockRef.current = "Text";
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={blockRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>{blockRef.current}</small>
            </div>

            <button className="btn btn-secondary" onClick={handleClickSizeAndText}>
                Изменить содержимое и размеры
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
