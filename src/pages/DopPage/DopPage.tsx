import { FC } from "react";
import { TaskBlock } from "../../components/TaskBlock/TaskBlock";

export const DopPage: FC = () => {
  return (
    <>
      <TaskBlock
        title="Задание на React.cloneElement"
        text="Создайте новый компонент HighlightText, который будет принимать свойство color и использовать React.cloneElement, чтобы окрасить текст в указанный цвет."
      />
    </>
  );
};
