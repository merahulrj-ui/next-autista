"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type CurrencyCode = "EUR" | "USD" | "INR" | "GBP";

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  name: string;
  rateFromEUR: number;
}

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  EUR: { code: "EUR", symbol: "€", name: "Euro", rateFromEUR: 1 },
  USD: { code: "USD", symbol: "$", name: "US Dollar", rateFromEUR: 1.08 },
  INR: { code: "INR", symbol: "₹", name: "Indian Rupee", rateFromEUR: 90 },
  GBP: { code: "GBP", symbol: "£", name: "British Pound", rateFromEUR: 0.85 },
};

interface CurrencyContextType {
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
  formatPrice: (amountInEUR: number) => string;
  currencyConfig: CurrencyConfig;
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: "EUR",
  setCurrency: () => {},
  formatPrice: (amount) => `€${amount}`,
  currencyConfig: CURRENCIES.EUR,
});

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("EUR");

  useEffect(() => {
    // 1. Check saved preference
    const saved = localStorage.getItem("site_currency") as CurrencyCode | null;
    if (saved && CURRENCIES[saved]) {
      setCurrencyState(saved);
      return;
    }

    // 2. Real-Time IP Geolocation Lookup
    async function detectCurrencyByIp() {
      try {
        const res = await fetch("https://api.country.is");
        if (res.ok) {
          const data = await res.json();
          const country = (data.country || "").toUpperCase();

          if (country === "IN") {
            setCurrencyState("INR");
            localStorage.setItem("site_currency", "INR");
          } else if (country === "GB") {
            setCurrencyState("GBP");
            localStorage.setItem("site_currency", "GBP");
          } else if (
            ["IT", "FR", "DE", "ES", "AT", "NL", "BE", "PT", "GR", "IE", "FI"].includes(country)
          ) {
            setCurrencyState("EUR");
            localStorage.setItem("site_currency", "EUR");
          } else {
            // Default for US, CA, AU, and others
            setCurrencyState("USD");
            localStorage.setItem("site_currency", "USD");
          }
        }
      } catch {
        // Fallback to EUR
        setCurrencyState("EUR");
      }
    }

    detectCurrencyByIp();
  }, []);

  const setCurrency = (code: CurrencyCode) => {
    if (CURRENCIES[code]) {
      setCurrencyState(code);
      localStorage.setItem("site_currency", code);
    }
  };

  const formatPrice = (amountInEUR: number): string => {
    const config = CURRENCIES[currency];
    const converted = amountInEUR * config.rateFromEUR;

    if (currency === "INR") {
      // Round to clean hundreds for luxury tours
      const rounded = Math.round(converted / 100) * 100;
      return `₹${rounded.toLocaleString("en-IN")}`;
    }

    if (currency === "EUR") {
      return `€${amountInEUR}`;
    }

    if (currency === "USD") {
      return `$${Math.round(converted)}`;
    }

    if (currency === "GBP") {
      return `£${Math.round(converted)}`;
    }

    return `${config.symbol}${Math.round(converted)}`;
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        formatPrice,
        currencyConfig: CURRENCIES[currency],
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
