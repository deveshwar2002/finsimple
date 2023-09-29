// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
    
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            [
              "Apple",
              "AAPL|1D|INR"
            ],
            [
              "Google",
              "GOOGL|1D|INR"
            ],
            [
              "Microsoft",
              "MSFT|1D|INR"
            ],
            [
              "NASDAQ:CSCO|1D|INR"
            ],
            [
              "EUREX:BACF1!|1D|INR"
            ],
            [
              "NASDAQ:ADBE|1D|INR"
            ],
            [
              "NASDAQ:NVDA|1D|INR"
            ],
            [
              "NASDAQ:AMZN|1D|INR"
            ],
            [
              "AMEX:BEEP|1D|INR"
            ],
            [
              "NASDAQ:TSLA|1D|INR"
            ],
            [
              "NYSE:JPM|1D|INR"
            ],
            [
              "NYSE:HSBC|1D|INR"
            ],
            [
              "NASDAQ:META|1D|INR"
            ],
            [
              "NYSE:LLY|1D|INR"
            ],
            [
              "NYSE:TSM|1D|INR"
            ],
            [
              "NYSE:UNH|1D|INR"
            ],
            [
              "NYSE:PG|1D|INR"
            ],
            [
              "NYSE:HD|1D|INR"
            ],
            [
              "NASDAQ:BOF|1D|INR"
            ],
            [
              "NASDAQ:COST|1D|INR"
            ],
            [
              "NYSE:TM|1D|INR"
            ],
            [
              "NYSE:BAC|1D|INR"
            ],
            [
              "NYSE:NVS|1D|INR"
            ],
            [
              "NYSE:TMO|1D|INR"
            ],
            [
              "NYSE:CRM|1D|INR"
            ],
            [
              "NYSE:MCD|1D|INR"
            ],
            [
              "NYSE:LIN|1D|INR"
            ],
            [
              "NASDAQ:NFLX|1D|INR"
            ],
            [
              "NYSE:SAP|1D|INR"
            ]
          ],
          "chartOnly": false,
          "width": 1520,
          "height": 500,
          "locale": "in",
          "colorTheme": "dark",
          "autosize": false,
          "showVolume": true,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "Trebuchet MS, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "candlesticks",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineType": 0,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ],
          "upColor": "#22ab94",
          "downColor": "#f7525f",
          "borderUpColor": "#22ab94",
          "borderDownColor": "#f7525f",
          "wickUpColor": "#22ab94",
          "wickDownColor": "#f7525f"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container}>
           <center> <h1>Stock Market Live </h1></center>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"><a href="https://in.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
    </div>
  );
}

export default memo(TradingViewWidget);
