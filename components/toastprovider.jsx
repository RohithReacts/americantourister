"use client";

import { createContext, useContext, useState } from "react";
import { X, CheckCircle, AlertCircle, Info, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ToastContext = createContext(null);

const variants = {
  success: {
    icon: <CheckCircle className="w-6 h-6 text-green-500" />,
    title: "Success",
    color: "from-green-400 to-green-600",
  },
  error: {
    icon: <XCircle className="w-6 h-6 text-red-500" />,
    title: "Error",
    color: "from-red-400 to-red-600",
  },
  warning: {
    icon: <AlertCircle className="w-6 h-6 text-yellow-500" />,
    title: "Warning",
    color: "from-yellow-400 to-yellow-600",
  },
  info: {
    icon: <Info className="w-6 h-6 text-blue-500" />,
    title: "Info",
    color: "from-blue-400 to-blue-600",
  },
};

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = (type, message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => removeToast(id), 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider
      value={{
        success: (msg) => addToast("success", msg),
        error: (msg) => addToast("error", msg),
        warning: (msg) => addToast("warning", msg),
        info: (msg) => addToast("info", msg),
      }}
    >
      {children}

      {/* Toast Stack */}
      <div className="fixed bottom-8 right-8 flex flex-col space-y-3 z-50 sm:space-y-4 sm:right-6 sm:bottom-6">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 50, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.95 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              whileHover={{ scale: 1.03, x: -5 }}
              className="backdrop-blur-md bg-white/80 dark:bg-neutral-800/70 border border-gray-200 dark:border-gray-700 shadow-xl rounded-2xl p-4 flex items-start space-x-3 max-w-sm w-full relative overflow-hidden"
            >
              {/* Icon */}
              <div className="flex-shrink-0 mt-1">
                {variants[toast.type].icon}
              </div>

              {/* Text */}
              <div className="flex-1">
                <p className="font-semibold text-gray-800 dark:text-gray-100">
                  {variants[toast.type].title}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-snug">
                  {toast.message}
                </p>

                {/* Progress bar */}
                <div className="h-1 mt-3 bg-gray-200/60 dark:bg-gray-700/50 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-1 bg-gradient-to-r ${variants[toast.type].color}`}
                    initial={{ width: "100%" }}
                    animate={{ width: 0 }}
                    transition={{ duration: 4, ease: "linear" }}
                  />
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={() => removeToast(toast.id)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
