import React from "react";
import Termekek from "../Components/Public/Termekek";
import Kosar from "../Components/Public/Kosar";
import { KosarProvider } from "../Contexts/KosarContext";

function Public() {
  return (
    <div>
      <main className="row">
        <article className="">
          <KosarProvider>
            <Kosar />
            <Termekek />
          </KosarProvider>
        </article>
      </main>
    </div>
  );
}

export default Public;
