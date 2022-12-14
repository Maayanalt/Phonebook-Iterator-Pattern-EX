import createPhonebook from "./Phonebook";
import Contact from "./Contact";

const yellowPages = createPhonebook();
yellowPages.add(
  new Contact(204512367, "Anna", "Efraim-Zur 4, Ashkelon", ["0534715872"])
);
yellowPages.add(
  new Contact(304852196, "Tim", "Haonot 8, Ashkelon", ["0529048372"])
);
yellowPages.add(
  new Contact(745896213, "Linoy", "Ben Gurion 4, Mikve Israel", ["04-6824245"])
);
yellowPages.add(
  new Contact(204587268, "Maayan", "Nissan 4, Ashkelon", ["06-6745218"])
);
yellowPages.add(
  new Contact(208152375, "Shir", "Daniel 7, Rehovot", ["0535492357"])
);
yellowPages.add(
  new Contact(205621478, "Roi", "Iyar 11, Tzfat", ["0526478135"])
);
yellowPages.add(
  new Contact(306578125, "Lital", "Hertzel 2, Beit Shemesh", ["0526478135"])
);
yellowPages.add(
  new Contact(301542387, "Aviv", "Yoseftal 32, Bat Yam", ["0545124789"])
);
yellowPages.add(
  new Contact(402135768, "Maayan", "Balfur 11, Rishon Lezion", ["0535492351"])
);
yellowPages.add(
  new Contact(404321576, "Maayan", "Bar-Kohva 30, Yavne", ["08-6542341"])
);
yellowPages.add(
  new Contact(201478965, "Lital", "Barnea 5, Yavne", ["08-6342341"])
);

console.log(yellowPages.size);

yellowPages.add(
  new Contact(211547896, "Anna", "Emek Hefer 10, Ashdod", ["06-6854231"])
);
yellowPages.add(
  new Contact(245697896, "Koral", "Yerushalaim 7, Tel Aviv", ["05-4712306"])
);
console.log(yellowPages.size);

yellowPages.addPhone(201478965, "08-6714245");
const contactsWithSameName = yellowPages.get("Maayan");
let lastContact;
if (contactsWithSameName) {
  for (const contact of contactsWithSameName) {
    yellowPages.addPhone(contact.id, "0525359291");
    lastContact = contact;
  }
}

if (lastContact) yellowPages.remove(lastContact.id);
console.log(yellowPages.size);

for (const contact of yellowPages) {
  console.log(contact);
}
