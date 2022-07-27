import {StyledGeolocation} from "./styled";
import {useSelector} from "react-redux";
import {selectCity, selectCountry} from "../../../store/Selectors";

function Geolocation(){
  const city = useSelector(selectCity)
  const country = useSelector(selectCountry)
  return <StyledGeolocation>
    {city}
    <div>{country}</div>
  </StyledGeolocation>
}
export default Geolocation
