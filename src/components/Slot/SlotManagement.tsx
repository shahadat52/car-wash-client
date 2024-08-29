import { useState } from "react";
import SlotTable from "./SlotTable";
import CreateSlotModal from "./CreateSlotModal";

const SlotManagement = () => {
    const [slotController, setSlotController] = useState(false)
    return (
        <div>
            <button
                className="mt-5 ml-5 bg-primary hover:bg-[#36518f] text-white font-bold py-2 px-4 rounded mb-4"
                onClick={() => setSlotController(true)}
            >
                Create Slot
            </button>
            {
                slotController && <CreateSlotModal setSlotController={setSlotController} />
            }
            <SlotTable />
        </div>
    );
};

export default SlotManagement;