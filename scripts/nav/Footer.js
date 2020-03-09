import { ContactList } from "./contact/ContactList.js";
import { yearEstablished } from "./YearEstablished.js";
import { BusinessName } from "./BusinessName.js";



const contentTarget = document.querySelector("#java__footer")

export const Footer = () => {
    const businessHTML = BusinessName()
    const yearEstablishedHTML = yearEstablished()
    const contactListHTML = ContactList()

    contentTarget.innerHTML = `
        ${contactListHTML}
        ${businessHTML}
        ${yearEstablishedHTML}
    `
}