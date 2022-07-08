import { createContext, useContext, useState } from 'react';

export interface GlobalProviderProps {
  children: JSX.Element;
}
export interface DataGlobalStateInterface {
  navIsActive: boolean;
  setNavIsActive: (value: boolean) => void;
}

export interface GlobalStateInterface {
  globalState: DataGlobalStateInterface;
}

export function createCtx<GlobalStateInterface>() {
  const ctx = createContext<GlobalStateInterface | undefined>(undefined);
  function useCtx() {
    const c = useContext(ctx);
    if (!c) throw new Error('useCtx must be inside a Provider with a value');
    return c;
  }
  return [useCtx, ctx.Provider] as const;
}

export const [useGlobalContext, CtxProvider] =
  createCtx<GlobalStateInterface>();

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [navIsActive, setNavIsActive] = useState<boolean>(false);

  const dataGlobalState: DataGlobalStateInterface = {
    navIsActive,
    setNavIsActive,
  };

  const globalState: GlobalStateInterface = {
    globalState: dataGlobalState,
  };

  return <CtxProvider value={globalState}>{children}</CtxProvider>;
};
