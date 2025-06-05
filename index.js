import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./i18n";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store";
import MainRoutes from "./routes";
import { unstable_batchedUpdates } from "react-dom";
unstable_batchedUpdates(() => {
  console.error = () => {};
});

class ErrorBoundary extends React.Component {
  componentDidCatch(error) {
    if (error.message.includes("ToastContainer")) {
      return;
    }
  }

  render() {
    return this.props.children;
  }
}

const Root = () => {
  return (
    <div className='App'>
      <Provider store={store}>
        <MainRoutes />
      </Provider>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary>
    <Root />
  </ErrorBoundary>
);

serviceWorker.unregister();
