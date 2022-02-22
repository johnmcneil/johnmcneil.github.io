import React from 'react';
import PlaceOption from './PlaceOption';


export default function SelectCityUsa({
    stateUsaCodes = [],
    cityUsaData = {},
    cityUsaCodes = [],
    stateUsaProps = {}
}) {
    console.log("cityUsaProps", cityUsaProps);
    getCitiesOfThisState = function(thisState, cityUsaData) {
        cityUsaData.filter();      
    })
    return (
        <select
            {...cityUsaProps}
            name="city"
            placeholder="city"
            >
        {
            stateUsaCodes.map((stateUsa) => (
                <PlaceOption {...stateUsa} />
            ))
        }
        </select>
    )
}