"use client";

import { StatsigProvider } from "statsig-react";

export default function StatsigProviderWrapper({ children }) {
  return (
    <StatsigProvider
      sdkKey={process.env.NEXT_PUBLIC_STATSIG_CLIENT_KEY}
      user={{ userID: "user_" + Math.random() }}
    >
      {children}
    </StatsigProvider>
  );
}
