import React, { useState } from "react";
import Header from "./components/Header";
import InvoiceForm from "./components/InvoiceForm";
import InvoicePreview from "./components/InvoicePreview";

const initialValues = {
  receipt: "INV-0001",
  issuedDate: "2024-07-12",
  paidDate: "2024-07-13",
  companyLogo: "",
  companyName: "Acme Corp",
  companyAddress: "123 Main St",
  companyCity: "Metropolis",
  companyPostal: "12345",
  companyCountry: "USA",
  customerName: "John Doe",
  customerEmail: "john@example.com",
  customerAddress: "456 Elm St",
  customerCity: "Gotham",
  customerPostal: "67890",
  customerCountry: "USA",
  amountPaid: "500",
  paymentType: "Credit Card",
  last4: "1234",
  itemDetails: "Web Design Services",
  quantity: "1",
  customFieldName: "Project Code",
  customFieldValue: "WD2024",
  contactEmail: "support@acme.com"
};

function App() {
  const [formValues, setFormValues] = useState(initialValues);

  return (
    <>
      <Header />
      <div className="p-4 flex gap-4">
        <div className="flex-1">
          <InvoiceForm values={formValues} setValues={setFormValues} />
        </div>
        <div className="flex-1">
          <InvoicePreview values={formValues} />
        </div>
      </div>
    </>
  );
}

export default App;
