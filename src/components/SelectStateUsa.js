import React from 'react';
import PlaceOption from './PlaceOption';


export default function SelectStateUsa({
    stateUsaCodes = [],
    stateUsaProps = {}
}) {
    console.log("stateUsaProps", stateUsaProps);
    return (
        <select
            {...stateUsaProps}
            name="country"
            placeholder="country"
            >
        {
            stateUsaCodes.map((stateUsa) => (
                <PlaceOption {...stateUsa} />
            ))
        }
        </select>
    )
}