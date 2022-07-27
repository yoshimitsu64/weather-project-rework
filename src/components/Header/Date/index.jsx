import {StyledDate} from "./styled";
import {hours,minutes,calendarDate} from "../../../constants";

function Date(){
  return <StyledDate>
    {hours}:{minutes}
    <div>{calendarDate}</div>
  </StyledDate>
}
export default Date;
