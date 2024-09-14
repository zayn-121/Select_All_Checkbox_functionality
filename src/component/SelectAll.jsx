import React, { useState } from "react";

const SelectAll = () => {
  const [items, setItems] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setIsChecked(!isChecked) && setItems([...items])
    } else {
      setIsChecked(!isChecked) && setItems([])
    }
  };
  const haldleItemSelection = (e) => {
    const value = e.target.value;
    // console.log(value)
    const checked = e.target.checked;
    // console.log(checked)
    if (checked) {
      setItems([...items, value]);
    } else {
      setItems(items.filter((item) => item !== value));
    }
  };
  console.log("items", items);
  return (
    <React.Fragment>
      <section className="absolute top-2/4 left-2/4 translate-x--1/2 translate-y--1/2 ">
        <form>
          <div className="bg-white shadow  w-auto h-auto p-4">
            {/* header */}
            <div>
              <p className="text-center text-2xl font-bold">
                Select All Checkbox
              </p>
            </div>

            {/* body */}
            <div>
              <div>
                <div>
                  <input
                    type="checkbox"
                    value="Select All"
                    onChange={handleSelectAll}
                    checked={isChecked}
                    className="w-4 h-4"
                  />
                  <label className="ml-2">Select All</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value="Red"
                    checked={isChecked}
                    className="w-4 h-4"
                    onChange={haldleItemSelection}
                  />
                  <label className="ml-2">Red </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value="Green"
                    checked={isChecked} 
                    className="w-4 h-4"
                    onChange={haldleItemSelection}
                  />
                  <label className="ml-2">Green </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    value="Blue"
                    checked={isChecked}
                    className="w-4 h-4"
                    onChange={haldleItemSelection}
                  />
                  <label className="ml-2">Blue </label>
                </div>
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
