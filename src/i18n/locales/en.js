const today = new Date();
const threeDaysLater = new Date(today.getTime() + (3 * 24 * 60 * 60 * 1000));
const month = String(threeDaysLater.getMonth() + 1).padStart(2, '0');
const day = String(threeDaysLater.getDate()).padStart(2, '0');
const formattedDate = `${month}/${day}`;

export default {
  translations: {
		meta: {
			description: 'Discover the essence of traditional sushi at Rorushi. Immerse yourself in the art of Japanese culinary mastery with our authentic and carefully crafted rolls. Delight your taste buds with the purity of flavors and the freshest ingredients. Experience the timeless elegance of sushi at Rorushi, where tradition comes alive in every bite.',
		},
    banner: `Get 20% off your online reservation until ${formattedDate}.`,
		disclaimer: {
			message: 'This website is not a real restaurant. It is a demo website created as a personal project.',
			understood: 'Understood'
		},
    reservation: {
			title: 'On {{month}} {{day}}',
			person: 'person',
			people: 'people',
			time: 'Time',
			number: 'Guests',
			book: 'Book now',
			cancel: 'Cancel'
		},
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
					description: 'Indulge in fresh sushi prepared by our chef with over 30 years of experience'
				},
				service: {
					title: 'Service',
					description: 'Dine in at the restaurant with our all-you-can-eat option or place an order for takeout'
				},
				environment: {
					title: 'Environment',
					description: 'Join us in minimizing waste (we charge €0.50 for each piece of sushi wasted)'
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
			search: 'Search by name',
			sashimi: {
				tuna: {
					name: 'Tuna sashimi',
					description: 'Fresh slices of tuna.',
					ingredients: ['Tuna'],
				},
				salmon: {
					name: 'Salmon sashimi',
					description: 'Fresh slices of salmon.',
					ingredients: ['Salmon'],
				},
				butterfish: {
					name: 'Butterfish sashimi',
					description: 'Fresh slices of butterfish.',
					ingredients: ['Butterfish'],
				},
			},
			nigiri: {
				tuna: {
					name: 'Tuna nigiri',
					description: 'Fresh tuna slices served over hand-pressed sushi rice.',
					ingredients: ['Tuna', 'Rice'],
				},
				salmon: {
					name: 'Salmon nigiri',
					description: 'Fresh salmon slices served over hand-pressed sushi rice.',
					ingredients: ['Salmon', 'Rice'],
				},
				butterfish: {
					name: 'Butterfish nigiri',
					description: 'Fresh butterfish slices served over hand-pressed sushi rice.',
					ingredients: ['Butterfish', 'Rice'],
				},
				shrimp: {
					name: 'Shrimp nigiri',
					description: 'Fresh shrimp served over hand-pressed sushi rice.',
					ingredients: ['Shrimp', 'Rice'],
				},
				unagi: {
					name: 'Unagi nigiri',
					description: 'Fresh eel served over hand-pressed sushi rice.',
					ingredients: ['Eel', 'Rice'],
				}
			},
			maki: {
				tuna: {
					name: 'Tuna maki',
					description: 'Fresh tuna wrapped in seaweed and sushi rice.',
					ingredients: ['Tuna', 'Seaweed', 'Rice'],
				},
				salmon: {
					name: 'Salmon maki',
					description: 'Fresh salmon wrapped in seaweed and sushi rice.',
					ingredients: ['Salmon', 'Seaweed', 'Rice'],
				},
				shrimp: {
					name: 'Shrimp maki',
					description: 'Fresh shrimp wrapped in seaweed and sushi rice.',
					ingredients: ['Shrimp', 'Seaweed', 'Rice'],
				},
				unagi: {
					name: 'Unagi maki',
					description: 'Fresh eel wrapped in seaweed and sushi rice.',
					ingredients: ['Eel', 'Seaweed', 'Rice'],
				},
				avocado: {
					name: 'Avocado maki',
					description: 'Fresh avocado wrapped in seaweed and sushi rice.',
					ingredients: ['Avocado', 'Seaweed', 'Rice'],
				},
				cucumber: {
					name: 'Cucumber maki',
					description: 'Fresh cucumber wrapped in seaweed and sushi rice.',
					ingredients: ['Cucumber', 'Seaweed', 'Rice'],
				},
			},
			gunkan: {
				tuna: {
					name: 'Tuna gunkan',
					description: 'Fresh tuna wrapped in seaweed and sushi rice.',
					ingredients: ['Tuna', 'Seaweed', 'Rice'],
				},
				salmon: {
					name: 'Salmon gunkan',
					description: 'Fresh salmon wrapped in seaweed and sushi rice.',
					ingredients: ['Salmon', 'Seaweed', 'Rice'],
				},
			},
			temaki: {
				tuna: {
					name: 'Tuna temaki',
					description: 'Hand-rolled cone of seaweed filled with tuna and sushi rice.',
					ingredients: ['Tuna', 'Seaweed', 'Rice'],
				},
				salmon: {
					name: 'Salmon temaki',
					description: 'Hand-rolled cone of seaweed filled with salmon and sushi rice.',
					ingredients: ['Salmon', 'Seaweed', 'Rice'],
				},
				tempura: {
					name: 'Tempura temaki',
					description: 'Hand-rolled cone of seaweed filled with tempura shrimp and sushi rice.',
					ingredients: ['Tempura shrimp', 'Seaweed', 'Rice'],
				},
			}
		},
		services: {
			reservation: {
				title: 'Reservation',
				description: 'Book a table in our restaurant' 
			},
			delivery: {
				title: 'Delivery',
				description: 'Have it delivered to your home',
				status: 'Unavailable'
			},
			partner: {
				title: 'Partner deliveries',
				description: 'Place your order in one of ordering apps'
			},
			takeaway: {
				title: 'Take away',
				description: 'Contact us and collect your order'
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