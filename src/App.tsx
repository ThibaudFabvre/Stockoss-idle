import { useAppDispatch, useAppSelector } from "./app/hooks";
import { List, Stat } from "./components";
import Button from "./components/atoms/Button";
import { allocateRobot, deallocateRobot, RessourceTypes, selectRobotState } from "./features/robots/robotsSlice";


function App() {
  const robotState = useAppSelector(selectRobotState);
  const dispatch = useAppDispatch();
  const { availableRobots, occupiedRobots, ressources } = robotState;
  const formatedRessources = Object.entries(ressources);
  return (
    <div>
      <List header={'Stats'}>
          {formatedRessources.map((item, index) => {
            return <Stat key={index} name={item[0]} value={String(item[1].allocatedRobots)} />;
          })}
          <Stat name={'Available Robots'} value={String(availableRobots)} />
          <Stat name={'Occupied Robots'} value={String(occupiedRobots)} />
      </List>
      <List header={'Control Pannel'}>
          {formatedRessources.map((item, index) => {
            return  (
              <div key={'div' + index}> 
                <span key={'span' + index}>{item[0]}</span>
                <Button key={'button-one' + index} text={'-'} onClick={() => { dispatch(deallocateRobot(item[0] as RessourceTypes))}}/>
                <Button key={'button-two' + index} text={'+'} onClick={() => { dispatch(allocateRobot({ ressourceType: item[0] as RessourceTypes}))}}/>
              </div>
            )
          })}
      </List>
    </div>
  );
}

export default App;
