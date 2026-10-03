'use client';

import React, { createContext, useState } from 'react';

export const WorkoutContext = createContext({
  myPlanWorkouts: [],
  savedWorkouts: [],
  addToMyPlan: () => {},
  addToSaved: () => {},
  setMyPlanWorkouts: () => {},
  setSavedWorkouts: () => {},
});

const WorkoutProvider = ({ children }) => {
  const [myPlanWorkouts, setMyPlanWorkouts] = useState([]);
  const [savedWorkouts, setSavedWorkouts] = useState([]);

  const addToMyPlan = (workout) => {
    setMyPlanWorkouts((prev) => {
      const exists = prev.some((item) => String(item.id) === String(workout.id));
      if (exists) return prev;
      return [...prev, workout];
    });
  };

  const addToSaved = (workout) => {
    setSavedWorkouts((prev) => {
      const exists = prev.some((item) => String(item.id) === String(workout.id));
      if (exists) return prev;
      return [...prev, workout];
    });
  };

  const sharedData = {
    myPlanWorkouts,
    savedWorkouts,
    addToMyPlan,
    addToSaved,
    setMyPlanWorkouts,
    setSavedWorkouts,
  };

  return (
    <WorkoutContext.Provider value={sharedData}>
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;





// 'use client';

// import React, { createContext} from 'react';
// import { useState } from 'react';


// export const WorkoutContext = createContext(
//     {
//         workouts: [],
//         setWorkouts: () => {},
//     }
// );

// const WorkoutProvider = ({children}) => {
// const [workouts, setWorkouts] = useState([]);

// const sharedData = {
//   workouts,
//   setWorkouts,
// };
//     return <WorkoutContext.Provider value={sharedData}>
//         {children}
//      </WorkoutContext.Provider>;
// };

// export default WorkoutProvider;