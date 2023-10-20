import { FC } from "react";
import { TaskBlock } from "../../components/TaskBlock/TaskBlock";
import { Counters } from "../../components/Counters/Counters";

export const MainPage: FC = () => {
  return (
    <>
      <TaskBlock
        title="Задание Артема"
        text="Реализовать:"
        liFirst="Кнопку Удалить все счетчики"
        liSecond="Кнопку на каждом счетчике Удалить счетчик"
        liThird="Кнопку на каждом счетчике Обнулить счетчик"
        liFourth="Сделать так чтобы нельзя было на счетчике уйти в минус"
        liFifth="При изменении числа на каждом счетчике писало, четное оно или нет"
        liSixth="При клике на счетчик не должна срабатывать перерисовка на остальных"
      >
        <Counters />
      </TaskBlock>
    </>
  );
};
