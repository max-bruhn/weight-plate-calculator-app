import React, { createContext } from 'react';
import { useImmerReducer } from 'use-immer';

// css
import 'normalize.css';
import './App.css';
import './../../tailwind.generated.css';
import Header from '../Header/Header';
import Content from '../Content/Content';

type StateContextType = {
  useMetric: boolean;
};

const StateContext = createContext<StateContextType | undefined>(undefined);
const DispatchContext = createContext<any>(undefined);

const App: React.FC = () => {
  const initialState = {
    useMetric: true,
  };

  const ourReducer = (draft: any, action: any) => {
    switch (action.type) {
      case 'useMetric':
        draft.useMetric = action.value;
        return;

      default:
        return;
    }
  };

  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

  return (
    <>
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <div className="bg-darker min-w-screen min-h-screen text-light">
            <div className="container mx-auto">
              <Header />
              <Content />
            </div>
          </div>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </>
  );
};

export default App;
