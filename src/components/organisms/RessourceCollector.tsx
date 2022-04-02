import { useState } from "react";
import { useEffect } from "react";
import { FC } from "react";
import { useAppDispatch, useInterval } from "../../app/hooks";
import { addRessource, allocateRobot, deallocateRobot, RessourceTypes } from "../../features/robots/robotsSlice";
import Button from "../atoms/Button";

type Props = {
    ressourceType: RessourceTypes;
    ressourceAmount: number;
    allocatedRobots: number;
    timeToGenerateRessource: number;
}


const RessourceCollector : FC<Props> = ({ ressourceType, ressourceAmount, allocatedRobots, timeToGenerateRessource }) => {
    const [intervalIsActive, setIntervalIsActive] = useState(false);
    const dispatch = useAppDispatch();
    const callback = () => { 
        for(let i = 0; i < allocatedRobots; i++) {
            dispatch(addRessource({ ressourceType }));
        }
    };
    
    useEffect(() => {
        if(allocatedRobots === 0 ) {
            setIntervalIsActive(false);
        } else {
            setIntervalIsActive(true);
        }
    }, [allocatedRobots]);
    
    useInterval({ callback, delay: intervalIsActive ? timeToGenerateRessource : null });

    return (
        <div> 
            <span>{ressourceType}</span>
            <p>Amount : {ressourceAmount}</p>
            <span>Robots : {allocatedRobots} </span>
            <Button text={'-'} onClick={() => { dispatch(deallocateRobot(ressourceType))}}/>
            <Button text={'+'} onClick={() => { dispatch(allocateRobot({ ressourceType }))}}/>
        </div>
    )
};

export default RessourceCollector;