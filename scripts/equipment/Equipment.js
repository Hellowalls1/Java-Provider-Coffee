export const Equipment = (equipmentObject) => {
    return `
    <section class="equipmentInfo">
        <div>${equipmentObject.id}</div>
        <div>${equipmentObject.serialNumber}</div>
        <div>${equipmentObject.model}</div>
        <div>${equipmentObject.isFunctional}</div>
        <div>${equipmentObject.isUnderWarranty}</div>
    </section>
     `
    }