import ReactGA from "react-ga4";

export const initializeAnalytics = () => {
  ReactGA.initialize("G-WRMPDWE7GB"); 
};

export const trackPageView = (url) => {
  ReactGA.send({ hitType: "pageview", page: url });
};
