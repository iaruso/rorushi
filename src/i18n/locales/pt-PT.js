const today = new Date();
const threeDaysLater = new Date(today.getTime() + (3 * 24 * 60 * 60 * 1000));
const month = String(threeDaysLater.getMonth() + 1).padStart(2, '0');
const day = String(threeDaysLater.getDate()).padStart(2, '0');
const formattedDate = `${day}/${month}`;

export default {
  translations: {
		banner: `Obtenha 20% de desconto numa reserva online até ${formattedDate}.`,
		nav: {
			home: 'Início',
			menu: 'Menu',
			services: 'Serviços',
			contacts: 'Contactos'
		},
		footer: {
			terms: 'Termos e condições'
		},
		home: {
			location: "Localização",
			about: {
				intro: 'Localizado no centro do Porto, o nosso restaurante é um paraíso para os amantes de sushi.',
				description: 'Delicie-se com a nossa experiência gastronómica "all-you-can-eat", que oferece uma variedade de opções meticulosamente elaboradas pelo chefe japonês, Takashi Yamamoto, com mais de 30 anos de experiência.'
			},
			reservation: "Faça uma reserva",
			details: {
				lunch: {
					title: "Almoço",
					time: "12:00 - 15:00",
					price: "15€",
					drinks: "(bebidas incluídas)"
				},
				dinner: {
					title: "Jantar",
					time: "20:00 - 23:00",
					price: "20€",
					drinks: "(bebidas não incluídas)"
				},
				kids: {
					title: "Crianças",
					age: "(Menos de 12)",
					price: "8€",
					drinks: "(bebidas não incluídas)"
				},
				takeaway: {
					title: "Take away",
					details: "(16 peças)",
					price: "10€",
					drinks: "(bebidas não incluídas)"
				}
			}
		},
		menu: {

		},
		services: {
			reservation: {
				title: "Reserva",
				description: "Reserve uma mesa no nosso restaurante." 
			},
			delivery: {
				title: "Encomenda",
				description: "Faça encomenda à sua casa.",
				status: "Serviço indisponível"
			},
			partner: {
				title: "Serviços de entrega",
				description: "Faça a sua encomenda numa das seguintes aplicações."
			},
			takeaway: {
				title: "Take away",
				description: "Contacte-nos e recolha a sua encomenda."
			}
		},
		contacts: {

		}
  }
}