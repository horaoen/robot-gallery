import React, { PropsWithChildren, useState } from "react";

interface AppcontextValue {
  username: string;
  shoppringCart: {
    items: {
      id: number;
      name: string;
    }[];
  };
}
const defaultContextValue: AppcontextValue = {
  username: "horaoen",
  shoppringCart: { items: [] },
};

export const appContext = React.createContext(defaultContextValue);
export const appSetStateContext = React.createContext<
  React.Dispatch<React.SetStateAction<AppcontextValue>>
  | undefined
>(undefined);

export const AppStateProvider: React.FC<PropsWithChildren<{}>> = (props) => {
  const [state, setState] = useState(defaultContextValue);

  return (
    <appContext.Provider value={state}>
      <appSetStateContext.Provider
        value={setState}
      >
        {props.children}
      </appSetStateContext.Provider>
    </appContext.Provider>
  );
};

