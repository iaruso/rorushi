const today = new Date();
const threeDaysLater = new Date(today.getTime() + (3 * 24 * 60 * 60 * 1000));
const month = String(threeDaysLater.getMonth() + 1).padStart(2, '0');
const day = String(threeDaysLater.getDate()).padStart(2, '0');
const formattedDate = `${month}/${day}`;

export default {
  translations: {
    banner: `Get 20% off your first online order until ${formattedDate}.`,
    nav: {
      home: 'Home',
      menu: 'Menu',
      services: 'Services',
      contacts: 'Contacts'
    },
		home: {
			about: {
				intro: 'Nestled in the heart of Porto, our restaurant is a haven for sushi lovers.',
				description: 'Indulge in our all-you-can-eat dining experience, offering an array of options meticulously crafted by our Japanese chef, Takashi Yamamoto, with over 40 years of expertise.'
			},
			reservation: "Make a reservation",
			details: {
				lunch: {
					title: "Lunch",
					time: "12pm - 3pm",
					price: "16€ (drinks included)"
				},
				dinner: {
					title: "Dinner / Weekend / Holidays",
					time: "8pm - 11pm",
					price: "20€ (drinks not included)"
				},
				kids: {
					title: "Kids",
					price: "8€ (drinks not included)"
				}
			}
		}
  }
}