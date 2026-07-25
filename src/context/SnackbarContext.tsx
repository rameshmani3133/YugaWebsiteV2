import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

import type {
  ReactNode,
} from "react";

export type SnackbarSeverity =
  | "success"
  | "error"
  | "warning"
  | "info";

interface SnackbarState {
  open: boolean;
  message: string;
  severity: SnackbarSeverity;
}

interface SnackbarContextType {
  snackbar: SnackbarState;
  showSuccess: (message: string) => void;
  showError: (message: string) => void;
  showWarning: (message: string) => void;
  showInfo: (message: string) => void;
  closeSnackbar: () => void;
}

const SnackbarContext = createContext<
  SnackbarContextType | undefined
>(undefined);

const initialState: SnackbarState = {
  open: false,
  message: "",
  severity: "info",
};

export function SnackbarProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [snackbar, setSnackbar] =
    useState(initialState);
      const show = (
    severity: SnackbarSeverity,
    message: string
  ) => {

    setSnackbar({

      open: true,

      severity,

      message,

    });

  };

  const closeSnackbar = () => {

    setSnackbar((previous) => ({

      ...previous,

      open: false,

    }));

  };

  const value = useMemo(

    () => ({

      snackbar,

      showSuccess: (message: string) =>
        show("success", message),

      showError: (message: string) =>
        show("error", message),

      showWarning: (message: string) =>
        show("warning", message),

      showInfo: (message: string) =>
        show("info", message),

      closeSnackbar,

    }),

    [snackbar]

  );

  return (

    <SnackbarContext.Provider value={value}>

      {children}

    </SnackbarContext.Provider>

  );
  }

export function useSnackbar() {

  const context = useContext(SnackbarContext);

  if (!context) {

    throw new Error(

      "useSnackbar must be used within SnackbarProvider"

    );

  }

  return context;

}