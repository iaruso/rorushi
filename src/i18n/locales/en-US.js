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
			menu: 'Explore menu',
			reservation: 'Book a table',
			details: {
				quality: {
					title: 'Quality',
					description: 'Indulge in fresh sushi prepared by our chef with over 30 years of experience.'
				},
				service: {
					title: 'Service',
					description: 'Dine in at the restaurant with our all-you-can-eat option or place an order for takeout.'
				},
				environment: {
					title: 'Environment',
					description: 'Join us in minimizing waste. We charge €0.50 for each piece of sushi wasted.'
				}
			},
			pricing: {
				lunch: {
					title: 'Lunch',
					time: '12pm - 3pm',
					price: '16€',
					drinks: '(drinks included)'
				},
				dinner: {
					title: 'Dinner',
					time: '8pm - 11pm',
					price: '20€',
					drinks: '(drinks not included)'
				},
				kids: {
					title: 'Kids',
					age: '(under 12)',
					price: '8€',
					drinks: '(drinks not included)'
				},
				takeaway: {
					title: 'Take away',
					details: '(16 pieces)',
					price: '10€',
					drinks: '(drinks not included)'
				}
			}
		},
		menu: {

		},
		services: {
			reservation: {
				title: 'Reservation',
				description: 'Book a table in our restaurant.' 
			},
			delivery: {
				title: 'Delivery',
				description: 'Have it delivered to your home.',
				status: 'Unavailable'
			},
			partner: {
				title: 'Partner deliveries',
				description: 'Place your order in one of ordering apps.'
			},
			takeaway: {
				title: 'Take away',
				description: 'Contact us and collect your order.'
			}
		},
		contacts: {
			address: 'Address',
			phone: 'Telephone',
			opening_hours: 'Opening hours',
			details: {
				days: 'Every day from 12pm to 3pm and 8pm to 11pm.',
				services: 'Take away every day from 12:30pm to 3pm and 8pm to 10:30pm.'
			}
		}
  }
}