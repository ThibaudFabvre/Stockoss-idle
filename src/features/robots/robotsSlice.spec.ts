import robotsReducer, {
  RobotsState,
  occupyRobot,
  allocateRobot,
  makeRobotAvailable,
  buyRobot,
} from './robotsSlice';

describe("[robots] model", () => {

  describe( "occupyRobot() should:", () => {


      it('- [ FAIL ]  to remove robot from ressource if ressource allocatedRobots was 0', () => {
        const initialState: RobotsState = {
          ressources: {
            foobar: {
              amount:0,
              allocatedRobots:0,
            },
            bar: {
              amount:0,
              allocatedRobots:0,
            },
            foo:{
              amount:0,
              allocatedRobots:0,
            }, 
          },
          availableRobots: 2,
          occupiedRobots: 0,
        };
    
        const actual = robotsReducer(initialState, occupyRobot({ressourceType: 'foobar'}));

        expect(actual.ressources.foobar.allocatedRobots).toBe(0);
      });
      it('- [ SUCCEED ] in increasing occupiedRobots count if ressource allocatedRobots were above 0', () => {
        const initialState: RobotsState = {
          ressources: {
            foobar: {
              amount:0,
              allocatedRobots:1,
            },
            bar: {
              amount:0,
              allocatedRobots:0,
            },
            foo:{
              amount:0,
              allocatedRobots:0,
            }, 
          },
          availableRobots: 2,
          occupiedRobots: 0,
        };
    
        const actual = robotsReducer(initialState, occupyRobot({ressourceType: 'foobar'}));
        expect(actual.occupiedRobots).toBe(1);
      });
      it('- [ SUCCEED ] in removing one robot if ressource allocatedRobots was above 0', () => {
        const initialState: RobotsState = {
          ressources: {
            foobar: {
              amount:0,
              allocatedRobots:1,
            },
            bar: {
              amount:0,
              allocatedRobots:0,
            },
            foo:{
              amount:0,
              allocatedRobots:0,
            }, 
          },
          availableRobots: 2,
          occupiedRobots: 0,
        };
    
        const actual = robotsReducer(initialState, occupyRobot({ressourceType: 'foobar'}));
        expect(actual.ressources.foobar.allocatedRobots).toBe(0);
      });
  });

  describe("allocateRobot() should:", () => {
      it('- [ SUCCEED ] in allocating robot to ressource if available robots count is superior to 0', () => {
        const initialState: RobotsState = {
          ressources: {
            foobar: {
              amount:0,
              allocatedRobots:0,
            },
            bar: {
              amount:0,
              allocatedRobots:0,
            },
            foo:{
              amount:0,
              allocatedRobots:0,
            }, 
          },
          availableRobots: 2,
          occupiedRobots: 0,
        };
    
        const actual = robotsReducer(initialState, allocateRobot({ressourceType: 'foobar'}));
          expect(actual.ressources.foobar.allocatedRobots).toBe(1);
      });
      it('- [ SUCCEED ] in decreasing available robots count if available robots count is superior to 0', () => {
        const initialState: RobotsState = {
          ressources: {
            foobar: {
              amount:0,
              allocatedRobots:0,
            },
            bar: {
              amount:0,
              allocatedRobots:0,
            },
            foo:{
              amount:0,
              allocatedRobots:0,
            }, 
          },
          availableRobots: 2,
          occupiedRobots: 0,
        };
    
        const actual = robotsReducer(initialState, allocateRobot({ressourceType: 'foobar'}));
          expect(actual.availableRobots).toBe(1);
      });
      it('- [ FAIL ]  to decrease available robots count if available robots count is equal to 0 ', () => {
        const initialState: RobotsState = {
          ressources: {
            foobar: {
              amount:0,
              allocatedRobots:0,
            },
            bar: {
              amount:0,
              allocatedRobots:0,
            },
            foo:{
              amount:0,
              allocatedRobots:0,
            }, 
          },
          availableRobots: 0,
          occupiedRobots: 0,
        };
    
        const actual = robotsReducer(initialState, allocateRobot({ressourceType: 'foobar'}));
        expect(actual.availableRobots).toBe(0);
      });
      it('- [ FAIL ]  to allocate robot to ressource if available robots count is equal to 0', () => {
        const initialState: RobotsState = {
          ressources: {
            foobar: {
              amount:0,
              allocatedRobots:0,
            },
            bar: {
              amount:0,
              allocatedRobots:0,
            },
            foo:{
              amount:0,
              allocatedRobots:0,
            }, 
          },
          availableRobots: 0,
          occupiedRobots: 0,
        };
    
        const actual = robotsReducer(initialState, allocateRobot({ressourceType: 'foobar'}));
        expect(actual.ressources.foobar.allocatedRobots).toBe(0);
      });
  });

  describe("makeRobotAvailable() should:", () => {


      it('- [ SUCCEED ] in making robot available if occupiedRobots count is higher then 0', () => {
        const initialState: RobotsState = {
          ressources: {
            foobar: {
              amount:0,
              allocatedRobots:1,
            },
            bar: {
              amount:0,
              allocatedRobots:0,
            },
            foo:{
              amount:0,
              allocatedRobots:0,
            }, 
          },
          availableRobots: 2,
          occupiedRobots: 1,
        };
    
        const actual = robotsReducer(initialState, makeRobotAvailable());
          expect(actual.availableRobots).toBe(3);
      });
      it('- [ SUCCEED ] in decreasing occupied robots count if occupiedRobots count is higher then 0', () => {
        const initialState: RobotsState = {
          ressources: {
            foobar: {
              amount:0,
              allocatedRobots:1,
            },
            bar: {
              amount:0,
              allocatedRobots:0,
            },
            foo:{
              amount:0,
              allocatedRobots:0,
            }, 
          },
          availableRobots: 2,
          occupiedRobots: 1,
        };
    
        const actual = robotsReducer(initialState, makeRobotAvailable());
          expect(actual.occupiedRobots).toBe(0);
      });
      it('- [ FAIL ]  to decrease the occupied robots count if occupiedRobots count is equal to 0', () => {
        const initialState: RobotsState = {
          ressources: {
            foobar: {
              amount:0,
              allocatedRobots:1,
            },
            bar: {
              amount:0,
              allocatedRobots:0,
            },
            foo:{
              amount:0,
              allocatedRobots:0,
            }, 
          },
          availableRobots: 2,
          occupiedRobots: 0,
        };
    
        const actual = robotsReducer(initialState, makeRobotAvailable());
        expect(actual.occupiedRobots).toBe(0);
      });
      it('- [ FAIL ]  to increase the available robots count if occupiedRobots count is equal to 0', () => {
        const initialState: RobotsState = {
          ressources: {
            foobar: {
              amount:0,
              allocatedRobots:1,
            },
            bar: {
              amount:0,
              allocatedRobots:0,
            },
            foo:{
              amount:0,
              allocatedRobots:0,
            }, 
          },
          availableRobots: 2,
          occupiedRobots: 0,
        };
    
        const actual = robotsReducer(initialState, makeRobotAvailable());
        expect(actual.availableRobots).toBe(2);
      })
  });
  
});