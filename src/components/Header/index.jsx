import {StyledHeader} from "./styled";
import Date from "./Date";
import Geolocation from "./Geolocation";
import Service from "./WeatherSerivce";

function Header(){
  return <StyledHeader>
    <Date/>
    <Geolocation/>
    <Service/>
  </StyledHeader>
}
export default Header;
