import React, { useState } from "react";

const SelectAll = () => {
  const itemsList = ["Red", "Green", "Blue"]; // List of items
  const [selectedItems, setSelectedItems] = useState([]); // Tracks selected items
  const [isAllSelected, setIsAllSelected] = useState(false); // Tracks if all items are selected

  // Handle "Select All" checkbox
  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    if (checked) {
      // If checked, select all items
      setSelectedItems(itemsList);
      setIsAllSelected(true);
    } else {
      // If unchecked, deselect all items
      setSelectedItems([]);
      setIsAllSelected(false);
    }
  };

  // Handle individual item selection
  const handleItemSelection = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, value]);
    } else {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((item) => item !== value)
      );
    }
  };

  // Update "Select All" state if all individual items are selected/deselected
  React.useEffect(() => {
    if (selectedItems.length === itemsList.length) {
      setIsAllSelected(true);
    } else {
      setIsAllSelected(false);
    }
  }, [selectedItems]);

  console.log("Selected items:", selectedItems);

  // Handle form submission
  const handleSubmit = (e) =>{
    e.preventDefault();
    alert(selectedItems);
  }

  return (
    <React.Fragment>
      <section className="absolute top-2/4 left-2/4 translate-x--1/2 translate-y--1/2">
        <form onSubmit={handleSubmit}>
          <div className="bg-white shadow w-auto h-auto p-4">
            {/* header */}
            <div>
              <p className="text-center text-2xl font-bold">Select All Checkbox</p>
            </div>

            {/* body */}
            <div>
              <div>
                {/* Select All Checkbox */}
                <div>
                  <input
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={isAllSelected}
                    className="w-4 h-4"
                  />
                  <label className="ml-2">Select All</label>
                </div>

                {/* Individual Item Checkboxes */}
                {itemsList.map((item) => (
                  <div key={item}>
                    <input
                      type="checkbox"
                      value={item}
                      checked={selectedItems.includes(item)}
                      onChange={handleItemSelection}
                      className="w-4 h-4"
                    />
                    <label className="ml-2">{item}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </React.Fragment>
  );
};

export default SelectAll;
