import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export type RessourceTypes =  'foobar'|'bar'|'foo';

export interface Ressource {
  amount: number;
  timeToGenerate: number,
  allocatedRobots: number;
}

export interface RobotsState {
  ressources: {
    foobar: Ressource;
    bar: Ressource;
    foo: Ressource;
  }
  availableRobots: number;
  occupiedRobots: number;
}

const initialState: RobotsState = {
  ressources: {
    foobar: {
      amount:0,
      timeToGenerate: 2000,
      allocatedRobots:0,
    },
    bar: {
      amount:0,
      timeToGenerate: Math.random() * (2 - 0.5) * 1000,
      allocatedRobots:0,
    },
    foo:{
      amount:0,
      timeToGenerate: 1000,
      allocatedRobots:0,
    }, 
  },
  availableRobots: 2,
  occupiedRobots: 0,
};


export const robotsSlice = createSlice({
  name: 'robots',
  initialState,
  reducers: {
    occupyRobot: (state, action: PayloadAction<{ ressourceType: RessourceTypes }>) => {
      const { ressourceType } = action.payload;

      if(state.ressources[ressourceType].allocatedRobots > 0) {
        state.ressources[ressourceType].allocatedRobots--;
        state.occupiedRobots++;
      }
    },
  
    allocateRobot: (state, action: PayloadAction<{ ressourceType: RessourceTypes }>) => {
      const { ressourceType } = action.payload;

      if(state.availableRobots > 0) {
        state.ressources[ressourceType].allocatedRobots ++;
        state.availableRobots --;
      }
    },
    makeRobotAvailable (state) {
      if(state.occupiedRobots > 0) {
          state.availableRobots ++;
          state.occupiedRobots --;
      }
    },
    buyRobot (state) {
      if(state.ressources.foobar.amount >= 3 && state.ressources.foo.amount >= 6) {
        state.availableRobots ++;
      }
    },
    addRessource (state, action: PayloadAction<{ ressourceType: RessourceTypes }>) {
      if(state.ressources[action.payload.ressourceType].allocatedRobots > 0) {
        switch(action.payload.ressourceType) {
          case 'foobar':
            if(state.ressources.bar.amount >= 1 && state.ressources.foo.amount >= 1) {
                if(Math.random()*(100 - 0) >= 40) {
                  state.ressources.foobar.amount ++;
                  state.ressources.bar.amount --;
                  state.ressources.foo.amount --;
                } else {
                  state.ressources.foo.amount --;
                }
            };
            break;
          case 'bar':
            state.ressources.bar.amount++;
            break;
          default: 
            state.ressources.foo.amount++;
            break;

        }
      }
    }
  },

  extraReducers: (builder) => {
  },
});

export const { addRessource, buyRobot, makeRobotAvailable, allocateRobot, occupyRobot } = robotsSlice.actions;

export const selectRobotState = (state: RootState) => state.robots;

export const deallocateRobot = (oldRessource: RessourceTypes): AppThunk => async (
  dispatch,
  getState
) => {
  const { ressources } = selectRobotState(getState());

  if(ressources[oldRessource].allocatedRobots > 0) {
    dispatch(occupyRobot({ressourceType: oldRessource }));
    await new Promise((resolve) => setTimeout(resolve, 5000));
    dispatch(makeRobotAvailable());
  }
}

export default robotsSlice.reducer;
