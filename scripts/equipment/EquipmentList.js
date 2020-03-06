import { Equipment } from "./Equipment.js";
import { useEquipment } from "./equipmentDataProvider.js";

const contentTarget = document.querySelector(".equipment")

export const EquipmentList = () => {
    const equipmentArray = useEquipment()

    for (const equipmentObject of equipmentArray) {
        const equipmentHTML = Equipment(equipmentObject)
        contentTarget.innerHTML += equipmentHTML
    }
}

