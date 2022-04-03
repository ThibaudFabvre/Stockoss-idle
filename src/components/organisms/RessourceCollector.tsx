import { useState } from "react";
import { useEffect } from "react";
import { FC } from "react";
import { useAppDispatch, useInterval } from "../../app/hooks";
import { addRessource, allocateRobot, deallocateRobot, RessourceTypes } from "../../features/robots/robotsSlice";
import Button from "../atoms/Button";
import { SDiv, SWrapper } from "./RessourceCollector.style";

type Props = {
    ressourceType: RessourceTypes;
    ressourceAmount: number;
    allocatedRobots: number;
    timeToGenerateRessource: number;
    availableRobots: number;
}


const RessourceCollector : FC<Props> = ({ ressourceType, ressourceAmount, allocatedRobots, timeToGenerateRessource, availableRobots }) => {
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
        <SDiv> 
            <Button color={'red'} disabled={!allocatedRobots} text={'-'} onClick={() => { dispatch(deallocateRobot(ressourceType))}}/>
            <SWrapper>
                <span>Ressource : {ressourceType}</span>
                <p>Amount : {ressourceAmount}</p>
                <span>Allocated Robots : {allocatedRobots} </span>
            </SWrapper>
            <Button color={'green'} disabled={!availableRobots} text={'+'} onClick={() => { dispatch(allocateRobot({ ressourceType }))}}/>
        </SDiv>
    )
};

export default RessourceCollector;