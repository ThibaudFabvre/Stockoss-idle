import { useAppSelector } from "./app/hooks";
import { List, RessourceCollector, Stat } from "./components";
import { RessourceTypes, selectRobotState } from "./features/robots/robotsSlice";


function App() {
  const robotState = useAppSelector(selectRobotState);
  const { availableRobots, occupiedRobots, ressources } = robotState;
  const formatedRessources = Object.entries(ressources);

  return (
    <div>
      <List header={'Robots'}>
          <Stat name={'Available Robots'} value={String(availableRobots)} />
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
