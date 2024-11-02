"use client";
import HomepageView from "@/packages/homepage/view";
import { store } from "@/store/state";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <HomepageView />{" "}
    </Provider>
  );
}
