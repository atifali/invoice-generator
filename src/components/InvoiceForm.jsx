function InvoiceForm() {
    return (
        <div className="bg-base-100 border border-base-300 rounded-lg shadow p-8">
            <form className="space-y-8">
                {/* Invoice Details */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Invoice Details</h2>
                    <div className="flex flex-wrap gap-4">
                        <div className="form-control w-40">
                            <label className="label">
                                <span className="label-text">Receipt#</span>
                            </label>
                            <input type="text" name="receipt" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-40">
                            <label className="label">
                                <span className="label-text">Issued Date</span>
                            </label>
                            <input type="date" name="issuedDate" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-40">
                            <label className="label">
                                <span className="label-text">Paid Date</span>
                            </label>
                            <input type="date" name="paidDate" className="input input-bordered" />
                        </div>
                    </div>
                </div>

                {/* Company Details */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Company Details</h2>
                    <div className="flex flex-wrap gap-4 items-end">
                        <div className="form-control w-52">
                            <label className="label">
                                <span className="label-text">Company Logo</span>
                            </label>
                            <input type="file" name="companyLogo" accept="image/*" className="file-input file-input-bordered" />
                        </div>
                        <div className="form-control flex-1 min-w-52">
                            <label className="label">
                                <span className="label-text">Company Name</span>
                            </label>
                            <input type="text" name="companyName" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-4">
                        <div className="form-control flex-1 min-w-40">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" name="companyAddress" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-40">
                            <label className="label">
                                <span className="label-text">City</span>
                            </label>
                            <input type="text" name="companyCity" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-40">
                            <label className="label">
                                <span className="label-text">Postal Code</span>
                            </label>
                            <input type="text" name="companyPostal" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-40">
                            <label className="label">
                                <span className="label-text">Country</span>
                            </label>
                            <input type="text" name="companyCountry" className="input input-bordered" required />
                        </div>
                    </div>
                </div>

                {/* Customer Details */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Customer Details</h2>
                    <div className="flex flex-wrap gap-4">
                        <div className="form-control flex-1 min-w-40">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="customerName" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1 min-w-40">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="customerEmail" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-4">
                        <div className="form-control flex-1 min-w-40">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" name="customerAddress" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-40">
                            <label className="label">
                                <span className="label-text">City</span>
                            </label>
                            <input type="text" name="customerCity" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-40">
                            <label className="label">
                                <span className="label-text">Postal Code</span>
                            </label>
                            <input type="text" name="customerPostal" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-40">
                            <label className="label">
                                <span className="label-text">Country</span>
                            </label>
                            <input type="text" name="customerCountry" className="input input-bordered" required />
                        </div>
                    </div>
                </div>

                {/* Payment Details */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Payment Details</h2>
                    <div className="flex flex-wrap gap-4">
                        <div className="form-control w-40">
                            <label className="label">
                                <span className="label-text">Amount Paid</span>
                            </label>
                            <input type="number" name="amountPaid" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-40">
                            <label className="label">
                                <span className="label-text">Payment Type</span>
                            </label>
                            <input type="text" name="paymentType" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-40">
                            <label className="label">
                                <span className="label-text">Last 4 Digits</span>
                            </label>
                            <input type="text" name="last4" maxLength={4} className="input input-bordered" required />
                        </div>
                    </div>
                </div>

                {/* Invoice Item */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Invoice Item</h2>
                    <div className="flex flex-wrap gap-4">
                        <div className="form-control flex-1 min-w-40">
                            <label className="label">
                                <span className="label-text">Item Details</span>
                            </label>
                            <input type="text" name="itemDetails" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-40">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" name="quantity" min={1} className="input input-bordered" required />
                        </div>
                    </div>
                </div>

                {/* Additional Information */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Additional Information</h2>
                    <div className="flex flex-wrap gap-4">
                        <div className="form-control flex-1 min-w-40">
                            <label className="label">
                                <span className="label-text">Custom Field Name</span>
                            </label>
                            <input type="text" name="customFieldName" className="input input-bordered" />
                        </div>
                        <div className="form-control flex-1 min-w-40">
                            <label className="label">
                                <span className="label-text">Custom Field Value</span>
                            </label>
                            <input type="text" name="customFieldValue" className="input input-bordered" />
                        </div>
                        <div className="form-control flex-1 min-w-40">
                            <label className="label">
                                <span className="label-text">Contact Email</span>
                            </label>
                            <input type="email" name="contactEmail" className="input input-bordered" />
                        </div>
                    </div>
                </div>

                <div className="pt-4">
                    <button type="submit" className="btn btn-primary w-full">Print Invoice</button>
                </div>
            </form>
        </div>
    )
}

export default InvoiceForm;
