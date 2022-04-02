import { useAppDispatch, useAppSelector } from "./app/hooks";
import { Button, List, RessourceCollector, Stat } from "./components";
import { buyRobot, RessourceTypes, selectRobotState } from "./features/robots/robotsSlice";


function App() {
  const robotState = useAppSelector(selectRobotState);
  const dispatch = useAppDispatch();
  const { availableRobots, occupiedRobots, ressources } = robotState;
  const formatedRessources = Object.entries(ressources);

  return (
    <div>
      <List header={'Robots'}>
          <Stat name={'Available Robots'} value={String(availableRobots)} />
          <Button text={'+'} onClick={() => { dispatch(buyRobot())}}/>
          <Stat name={'Occupied Robots'} value={String(occupiedRobots)} />
      </List>
      <List header={'Control Pannel'}>
          {formatedRessources.map((item, index) => { 
            return (
              <RessourceCollector 
                key={index} 
                ressourceType={item[0] as RessourceTypes}
                ressourceAmount={item[1].amount}
                allocatedRobots={item[1].allocatedRobots} 
                timeToGenerateRessource={item[1].timeToGenerate}
              />
              );
          })}
      </List>
    </div>
  );
}

export default App;
