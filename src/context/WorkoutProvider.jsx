'use client';

import React, { createContext} from 'react';
import { useState } from 'react';


export const WorkoutContext = createContext(
    {
        workouts: [],
        setWorkouts: () => {},
    }
);

const WorkoutProvider = ({children}) => {
const [workouts, setWorkouts] = useState([]);

const sharedData = {
  workouts,
  setWorkouts,
};
    return <WorkoutContext.Provider value={sharedData}>
        {children}
     </WorkoutContext.Provider>;
};

export default WorkoutProvider;