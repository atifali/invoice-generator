function InvoiceForm({ values, setValues }) {
    // Handle all input changes, including file input for logo and dynamic items
    const handleChange = (e) => {
        const { name, value, type, files, dataset } = e.target;
        if (dataset.idx !== undefined) {
            // Item row change
            const idx = Number(dataset.idx);
            const updatedItems = values.items.map((item, i) =>
                i === idx ? { ...item, [name]: value } : item
            );
            setValues({ ...values, items: updatedItems });
        } else if (type === "file") {
            const file = files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (ev) => {
                    setValues({ ...values, [name]: ev.target.result });
                };
                reader.readAsDataURL(file);
            }
        } else {
            setValues({ ...values, [name]: value });
        }
    };

    const handleAddItem = () => {
        setValues({
            ...values,
            items: [...values.items, { itemDetails: "", quantity: "1", price: "" }]
        });
    };

    const handleRemoveItem = (idx) => {
        setValues({
            ...values,
            items: values.items.filter((_, i) => i !== idx)
        });
    };

    return (
        <div className="bg-base-100 border border-base-300 rounded-lg shadow p-8">
            <form className="space-y-8" onSubmit={e => e.preventDefault()}>
                {/* Invoice Details */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Invoice Details</h2>
                    <div className="flex flex-wrap gap-4">
                        <div className="form-control w-40">
                            <label className="label">
                                <span className="label-text">Receipt#</span>
                            </label>
                            <input type="text" name="receipt" className="input input-bordered" required value={values.receipt} onChange={handleChange} />
                        </div>
                        <div className="form-control w-40">
                            <label className="label">
                                <span className="label-text">Issued Date</span>
                            </label>
                            <input type="date" name="issuedDate" className="input input-bordered" required value={values.issuedDate} onChange={handleChange} />
                        </div>
                        <div className="form-control w-40">
                            <label className="label">
                                <span className="label-text">Paid Date</span>
                            </label>
                            <input type="date" name="paidDate" className="input input-bordered" value={values.paidDate} onChange={handleChange} />
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
                            <input
                                type="file"
                                name="companyLogo"
                                accept="image/*"
                                className="file-input file-input-bordered"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-control flex-1 min-w-52">
                            <label className="label">
                                <span className="label-text">Company Name</span>
                            </label>
                            <input type="text" name="companyName" className="input input-bordered" required value={values.companyName} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-4">
                        <div className="form-control flex-1 min-w-40">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" name="companyAddress" className="input input-bordered" required value={values.companyAddress} onChange={handleChange} />
                        </div>
                        <div className="form-control w-40">
                            <label className="label">
                                <span className="label-text">City</span>
                            </label>
                            <input type="text" name="companyCity" className="input input-bordered" required value={values.companyCity} onChange={handleChange} />
                        </div>
                        <div className="form-control w-40">
                            <label className="label">
                                <span className="label-text">Postal Code</span>
                            </label>
                            <input type="text" name="companyPostal" className="input input-bordered" required value={values.companyPostal} onChange={handleChange} />
                        </div>
                        <div className="form-control w-40">
                            <label className="label">
                                <span className="label-text">Country</span>
                            </label>
                            <input type="text" name="companyCountry" className="input input-bordered" required value={values.companyCountry} onChange={handleChange} />
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
                            <input type="text" name="customerName" className="input input-bordered" required value={values.customerName} onChange={handleChange} />
                        </div>
                        <div className="form-control flex-1 min-w-40">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="customerEmail" className="input input-bordered" required value={values.customerEmail} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-4">
                        <div className="form-control flex-1 min-w-40">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text" name="customerAddress" className="input input-bordered" required value={values.customerAddress} onChange={handleChange} />
                        </div>
                        <div className="form-control w-40">
                            <label className="label">
                                <span className="label-text">City</span>
                            </label>
                            <input type="text" name="customerCity" className="input input-bordered" required value={values.customerCity} onChange={handleChange} />
                        </div>
                        <div className="form-control w-40">
                            <label className="label">
                                <span className="label-text">Postal Code</span>
                            </label>
                            <input type="text" name="customerPostal" className="input input-bordered" required value={values.customerPostal} onChange={handleChange} />
                        </div>
                        <div className="form-control w-40">
                            <label className="label">
                                <span className="label-text">Country</span>
                            </label>
                            <input type="text" name="customerCountry" className="input input-bordered" required value={values.customerCountry} onChange={handleChange} />
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
                            <input type="number" name="amountPaid" className="input input-bordered" required value={values.amountPaid} onChange={handleChange} />
                        </div>
                        <div className="form-control w-40">
                            <label className="label">
                                <span className="label-text">Payment Type</span>
                            </label>
                            <input type="text" name="paymentType" className="input input-bordered" required value={values.paymentType} onChange={handleChange} />
                        </div>
                        <div className="form-control w-40">
                            <label className="label">
                                <span className="label-text">Last 4 Digits</span>
                            </label>
                            <input type="text" name="last4" maxLength={4} className="input input-bordered" required value={values.last4} onChange={handleChange} />
                        </div>
                    </div>
                </div>

                {/* Invoice Items */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Invoice Items</h2>
                    <div className="flex flex-col gap-4">
                        {values.items.map((item, idx) => (
                            <div className="flex flex-wrap gap-4 items-end" key={idx}>
                                <div className="form-control flex-1 min-w-40">
                                    <label className="label">
                                        <span className="label-text">Item Details</span>
                                    </label>
                                    <input
                                        className="input input-bordered"
                                        required
                                        type="text"
                                        name="itemDetails"
                                        data-idx={idx}
                                        value={item.itemDetails}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-control w-32">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input
                                        min="1"
                                        className="input input-bordered"
                                        required
                                        type="number"
                                        name="quantity"
                                        data-idx={idx}
                                        value={item.quantity}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-control w-32">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input
                                        min="0"
                                        className="input input-bordered"
                                        required
                                        type="number"
                                        name="price"
                                        data-idx={idx}
                                        value={item.price}
                                        onChange={handleChange}
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-error btn-sm mt-6"
                                    onClick={() => handleRemoveItem(idx)}
                                    disabled={values.items.length === 1}
                                    title="Remove item"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            className="btn btn-outline btn-primary mt-2"
                            onClick={handleAddItem}
                        >
                            + Add Item
                        </button>
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
                            <input type="text" name="customFieldName" className="input input-bordered" value={values.customFieldName} onChange={handleChange} />
                        </div>
                        <div className="form-control flex-1 min-w-40">
                            <label className="label">
                                <span className="label-text">Custom Field Value</span>
                            </label>
                            <input type="text" name="customFieldValue" className="input input-bordered" value={values.customFieldValue} onChange={handleChange} />
                        </div>
                        <div className="form-control flex-1 min-w-40">
                            <label className="label">
                                <span className="label-text">Contact Email</span>
                            </label>
                            <input type="email" name="contactEmail" className="input input-bordered" value={values.contactEmail} onChange={handleChange} />
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
