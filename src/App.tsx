import "./app.css";
import type { Component } from "solid-js";
import { Banner, Features, Footer, Header, Hero } from "./layout";

const App: Component = () => {
  return (
    <div class="pt-16">
      <Header />
      <div class="grid gap-32">
        <main class="grid gap-24 lg:gap-0">
          <h1 class="sr-only">Insure</h1>
          <Hero />
          <div class="grid gap-38">
            <Features />
            <Banner />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
