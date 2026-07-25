import { useEffect } from "react";

import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Info,
  X,
} from "lucide-react";

import { useSnackbar } from "../../context/SnackbarContext";

const styles = {

  success: {

    bg: "bg-green-600",

    icon: CheckCircle2,

  },

  error: {

    bg: "bg-red-600",

    icon: XCircle,

  },

  warning: {

    bg: "bg-amber-500",

    icon: AlertTriangle,

  },

  info: {

    bg: "bg-sky-600",

    icon: Info,

  },

} as const;

export default function Snackbar() {

  const {

    snackbar,

    closeSnackbar,

  } = useSnackbar();

  useEffect(() => {

    if (!snackbar.open) {

      return;

    }

    const timer = setTimeout(

      closeSnackbar,

      4000

    );

    return () => clearTimeout(timer);

  }, [

    snackbar.open,

    closeSnackbar,

  ]);

  if (!snackbar.open) {

    return null;

  }

  const config =

    styles[snackbar.severity];

  const Icon = config.icon;
    return (

    <div className="pointer-events-none fixed right-6 top-6 z-[9999]">

      <div
        className={`pointer-events-auto flex min-w-[340px] max-w-md items-center gap-4 rounded-2xl ${config.bg} px-5 py-4 text-white shadow-2xl transition-all duration-300 animate-in slide-in-from-right`}
      >

        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/20">

          <Icon size={22} />

        </div>

        <div className="flex-1">

          <p className="font-semibold capitalize">

            {snackbar.severity}

          </p>

          <p className="mt-1 text-sm leading-6 text-white/90">

            {snackbar.message}

          </p>

        </div>

        <button
          type="button"
          onClick={closeSnackbar}
          aria-label="Close notification"
          className="rounded-full p-1 transition hover:bg-white/20"
        >

          <X size={18} />

        </button>

      </div>

    </div>

  );
}
