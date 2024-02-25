const today = new Date();
const threeDaysLater = new Date(today.getTime() + (3 * 24 * 60 * 60 * 1000));
const month = String(threeDaysLater.getMonth() + 1).padStart(2, '0');
const day = String(threeDaysLater.getDate()).padStart(2, '0');
const formattedDate = `${month}/${day}`;

export default {
  translations: {
    banner: `Get 20% off your online reservation until ${formattedDate}.`,
    nav: {
      home: 'Home',
      menu: 'Menu',
      services: 'Services',
      contacts: 'Contacts'
    },
		footer: {
			terms: 'Terms and conditions'
		},
		home: {
			location: "Our location",
			about: {
				intro: 'Nestled in the heart of Porto, our restaurant is a haven for sushi lovers.',
				description: 'Indulge in our all-you-can-eat dining experience, offering an array of options meticulously crafted by our Japanese chef, Takashi Yamamoto, with over 30 years of expertise.'
			},
			reservation: "Make a reservation",
			details: {
				lunch: {
					title: "Lunch",
					time: "12pm - 3pm",
					price: "16€",
					drinks: "(drinks included)"
				},
				dinner: {
					title: "Dinner",
					time: "8pm - 11pm",
					price: "20€",
					drinks: "(drinks not included)"
				},
				kids: {
					title: "Kids",
					age: "(under 12)",
					price: "8€",
					drinks: "(drinks not included)"
				},
				takeaway: {
					title: "Take away",
					details: "(16 pieces)",
					price: "10€",
					drinks: "(drinks not included)"
				}
			}
		},
		menu: {

		},
		services: {
			reservation: {
				title: "Reservation",
				description: "Book a table in our restaurant." 
			},
			delivery: {
				title: "Delivery",
				description: "Have it delivered to your home.",
				status: "Temporarily unavailable"
			},
			partner: {
				title: "Partner deliveries",
				description: "Place your order in one of the following apps."
			},
			takeaway: {
				title: "Take away",
				description: "Contact us and collect your order."
			}
		},
		contacts: {

		}
  }
}