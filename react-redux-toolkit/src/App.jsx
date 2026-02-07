import FAQAccordion from "./Components/Accordion/FAQAccordion";
import CounterComponent from "./Features/Counter/CounterComponent";
import PostsComponent from "./Features/Posts/PostsComponent";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center gap-4">
        {/* <h1 className="text-3xl font-bold text-cyan-600">Counter App</h1>
        <CounterComponent />
        <PostsComponent /> */}
        <FAQAccordion />
      </div>
    </>
  );
}

export default App;
