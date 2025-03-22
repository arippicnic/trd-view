"use client";

import { useRef, useEffect } from "react";

type TProps = {
  id: string;
};
export default function Chart({ id }: TProps) {
  const isRef = useRef<HTMLDivElement | null>(null);
  const srciptData = `new TradingView.widget({
      "autosize": true,
      "symbol": "${`BINANCE:${id}USDT`}",
      "interval": "60",
      "timezone": "Asia/Jakarta",
      "theme": "dark",
      "style": "1",
      "locale": "id",
      "enable_publishing": false,
       "save_image": false,
      "hide_legend": true,
      "container_id": "${`tradingview_view_${id}`}"
  });`;

  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = srciptData;
    if (!isRef.current) {
      return;
    }

    isRef.current.appendChild(script);
    return () => {
      isRef.current?.removeChild(script);
    };
  }, [srciptData]);

  return (
    <>
      <div className="tradingview-widget-container" ref={isRef}>
        <div className={"h-[100vh]"} id={`tradingview_view_${id}`}></div>
      </div>
    </>
  );
}
