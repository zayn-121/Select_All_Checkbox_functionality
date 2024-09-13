import React from "react";

const SelectAll = () => {
  return (
    <React.Fragment>
      <section>
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
                  <input type="checkbox" className="w-4 h-4" />
                  <label className="ml-2">Select All</label>
                </div>
                <div>
                  <input type="checkbox" className="w-4 h-4" />
                  <label className="ml-2">Red </label>
                </div>
                <div>
                  <input type="checkbox" className="w-4 h-4" />
                  <label className="ml-2">Green </label>
                </div>
                <div>
                  <input type="checkbox" className="w-4 h-4" />
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
