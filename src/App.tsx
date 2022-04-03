import { SGameContainer, STotalRobots } from "./App.style";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { Button, List, RessourceCollector, Stat } from "./components";
import { buyRobot, RessourceTypes, selectRobotState } from "./features/robots/robotsSlice";


function App() {
  const robotState = useAppSelector(selectRobotState);
  const dispatch = useAppDispatch();
  const { availableRobots, occupiedRobots, ressources } = robotState;
  const formatedRessources = Object.entries(ressources);

  let totalRobots = availableRobots + occupiedRobots;
  formatedRessources.forEach((ressource) => {
    totalRobots += ressource[1].allocatedRobots;
  });

  return (

    totalRobots < 20 ? (
    <SGameContainer>
      <List header={'Robots'}>
          <STotalRobots>{totalRobots}</STotalRobots>
      </List>
      <List header={'Control Pannel'}>
          <Stat name={'Available Robots'} value={String(availableRobots)}>
            { ressources.foobar.amount >= 3 &&  ressources.foo.amount >= 6 ? 
                <Button style={{ marginLeft: 10 }} color={'yellow'} text={'Buy'} onClick={() => { dispatch(buyRobot())}}/> 
                : 
                null
            }
          </Stat>
          <Stat name={'Occupied Robots'} value={String(occupiedRobots)} />
          {formatedRessources.map((item, index) => { 
            return (
              <RessourceCollector 
                key={index} 
                ressourceType={item[0] as RessourceTypes}
                ressourceAmount={item[1].amount}
                allocatedRobots={item[1].allocatedRobots} 
                timeToGenerateRessource={item[1].timeToGenerate}
                availableRobots={availableRobots}
              />
              );
          })}
      </List>
    </SGameContainer>
    ) :(
      <>
        <span>YOU WON ! &#129409; </span>
      </>
    )
  );
}

export default App;
