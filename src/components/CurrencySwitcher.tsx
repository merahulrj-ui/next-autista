"use client";

import React, { useState, useEffect, useRef } from "react";
import { Coins, ChevronDown } from "lucide-react";
import { useCurrency, CURRENCIES, CurrencyCode } from "@/context/CurrencyContext";

export default function CurrencySwitcher() {
  const { currency, setCurrency, currencyConfig } = useCurrency();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Click outside to auto-close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const handleSelect = (code: CurrencyCode) => {
    setCurrency(code);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-amber-200 text-xs font-semibold border border-amber-500/30 transition-all shadow-xs hover:border-amber-400 cursor-pointer"
        aria-label="Change Currency"
        aria-expanded={open}
      >
        <span className="font-bold text-amber-300">{currencyConfig.symbol}</span>
        <span className="uppercase font-bold tracking-wide">{currencyConfig.code}</span>
        <ChevronDown
          className={`w-3 h-3 text-amber-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 rounded-2xl bg-white shadow-2xl border border-slate-200 py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
          <div className="text-[10px] uppercase font-bold text-slate-400 px-3 py-1 border-b border-slate-100">
            Select Currency
          </div>
          {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => {
            const item = CURRENCIES[code];
            const isSelected = currency === code;
            return (
              <button
                key={code}
                type="button"
                onClick={() => handleSelect(code)}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-amber-50 text-amber-900 font-bold"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-bold text-amber-600 w-4 text-center">{item.symbol}</span>
                  <span>{item.code}</span>
                </div>
                <span className="text-[10px] text-slate-400 font-normal">{item.name}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
