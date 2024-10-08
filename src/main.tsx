import "@radix-ui/themes/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./index.css";

import { Theme } from "@radix-ui/themes";
import i18next from "i18next";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "~/core/store/store.ts";

import { I18nextProvider } from "react-i18next";
import global_en from "~/core/translations/en/global.json";
import global_vi from "~/core/translations/vi/global.json";
import { Loading } from "./core/components/index.ts";

i18next.init({
    interpolation: { escapeValue: false },
    lng: "vi",
    resources: {
        en: {
            global: global_en,
        },
        vi: {
            global: global_vi,
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <React.Fragment>
            <Provider store={store}>
                <PersistGate loading={<Loading />} persistor={persistor}>
                    <React.Suspense fallback={<>loading...</>}>
                        <Theme>
                            <I18nextProvider i18n={i18next}>
                                <App />
                            </I18nextProvider>
                        </Theme>
                    </React.Suspense>
                </PersistGate>
            </Provider>
        </React.Fragment>
    </React.StrictMode>,
);
