import { useState, useCallback, useMemo } from "react";

type UseToggleReturn = {
  status: boolean;
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
};

const useToggle = (initialState: boolean = false): UseToggleReturn => {
  const [status, setStatus] = useState<boolean>(initialState);

  const toggle = useCallback(() => {
    setStatus((prevStatus) => !prevStatus);
  }, []);

  const setFalse = useCallback(() => {
    setStatus(false);
  }, []);

  const setTrue = useCallback(() => {
    setStatus(true);
  }, []);

  const values = useMemo(
    () => ({
      status,
      toggle,
      setTrue,
      setFalse,
    }),
    [status, toggle, setFalse, setTrue]
  );

  return values;
};

export default useToggle;
