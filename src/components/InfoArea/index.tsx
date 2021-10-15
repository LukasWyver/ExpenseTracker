import * as C from "./styles";
import {
  BsArrowLeftSquareFill,
  BsCalendar3,
  BsArrowRightSquareFill,
} from "react-icons/all";
import { formatCurrentMonth } from "../../helpers/dateFilter";

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
};

export const InfoArea = ({ currentMonth, onMonthChange }: Props) => {
  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={handlePrevMonth}>
          <BsArrowLeftSquareFill />
        </C.MonthArrow>
        <C.MonthTitle>
          <BsCalendar3 size={18} style={{ paddingRight: "10" }} />
          {formatCurrentMonth(currentMonth)}
        </C.MonthTitle>
        <C.MonthArrow onClick={handleNextMonth}>
          <BsArrowRightSquareFill />
        </C.MonthArrow>
      </C.MonthArea>
      <C.ResumeArea>...</C.ResumeArea>
    </C.Container>
  );
};
