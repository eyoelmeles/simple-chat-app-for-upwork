// import Head from "next/head";
// import Image from "next/image";
import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.css";
import ChatWrapper from "@/feature/chat/pages/chat";
import { useGetMessagesQuery } from "@/feature/chat/store/chat.query";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../store/app.store";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Provider store={store}>
      <ChatWrapper />
    </Provider>
  );
}
