import Header from "./components/Header";
import InvoiceForm from "./components/InvoiceForm";
import InvoicePreview from "./components/InvoicePreview";

function App() {
  return (
    <>
      <Header />
      <div className="p-4 flex gap-4 w-screen">
        <InvoiceForm className="" />
        <InvoicePreview className="" />
      </div>
    </>
  )
}

export default App;
