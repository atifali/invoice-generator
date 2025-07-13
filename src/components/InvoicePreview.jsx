import React from "react";

function InvoicePreview({
    values = {
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
    }
}) {
    return (
        <div className="bg-base-100 border border-base-300 rounded-lg shadow p-8 max-w-2xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    {values.companyLogo ? (
                        <img src={values.companyLogo} alt="Company Logo" className="h-12 w-12 object-contain rounded" />
                    ) : (
                        <div className="h-12 w-12 bg-base-200 rounded flex items-center justify-center text-xl font-bold text-base-content/40">
                            {values.companyName?.[0] || "C"}
                        </div>
                    )}
                </div>
                <div className="text-right">
                    <div className="text-2xl font-bold">{values.companyName}</div>
                    <div className="text-sm">{values.companyAddress}</div>
                    <div className="text-sm">{values.companyCity}, {values.companyPostal}, {values.companyCountry}</div>
                </div>
            </div>

            {/* Invoice Info */}
            <div className="mb-8">
                <div className="flex flex-wrap gap-8">
                    <div>
                        <div className="font-semibold">Receipt#</div>
                        <div>{values.receipt}</div>
                    </div>
                    <div>
                        <div className="font-semibold">Issued Date</div>
                        <div>{values.issuedDate}</div>
                    </div>
                    <div>
                        <div className="font-semibold">Paid Date</div>
                        <div>{values.paidDate}</div>
                    </div>
                </div>
            </div>

            {/* Customer Info */}
            <div className="mb-8">
                <div className="font-bold mb-2">Billed To</div>
                <div className="text-base">{values.customerName}</div>
                <div className="text-sm">{values.customerEmail}</div>
                <div className="text-sm">{values.customerAddress}</div>
                <div className="text-sm">{values.customerCity}, {values.customerPostal}, {values.customerCountry}</div>
            </div>

            {/* Invoice Items */}
            <div className="mb-8">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{values.itemDetails}</td>
                                <td>{values.quantity}</td>
                                <td>${Number(values.amountPaid).toLocaleString()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Payment Details */}
            <div className="mb-8">
                <div className="font-bold mb-2">Payment Details</div>
                <div className="flex flex-wrap gap-8">
                    <div>
                        <div className="font-semibold">Type</div>
                        <div>{values.paymentType}</div>
                    </div>
                    <div>
                        <div className="font-semibold">Last 4 Digits</div>
                        <div>{values.last4}</div>
                    </div>
                    <div>
                        <div className="font-semibold">Amount Paid</div>
                        <div>${Number(values.amountPaid).toLocaleString()}</div>
                    </div>
                </div>
            </div>

            {/* Additional Info */}
            <div className="mb-4">
                <div className="font-bold mb-2">Additional Information</div>
                <div className="flex flex-wrap gap-8">
                    <div>
                        <div className="font-semibold">{values.customFieldName || "Custom Field"}</div>
                        <div>{values.customFieldValue}</div>
                    </div>
                    <div>
                        <div className="font-semibold">Contact Email</div>
                        <div>{values.contactEmail}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InvoicePreview;
