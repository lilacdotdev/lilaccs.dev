import Button from "./components/Button";

const App = () => {
  return (
    <>
      <div>
        <h1 className="text-main-1">Welcome to Lilaccs.dev!</h1>
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
          <Button className="bg-stone-600">
            Test
          </Button>
        </div>
      </div>
    </>
  );
};

export default App;