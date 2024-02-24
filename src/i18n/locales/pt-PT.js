const today = new Date();
const threeDaysLater = new Date(today.getTime() + (3 * 24 * 60 * 60 * 1000));
const month = String(threeDaysLater.getMonth() + 1).padStart(2, '0');
const day = String(threeDaysLater.getDate()).padStart(2, '0');
const formattedDate = `${day}/${month}`;

export default {
  translations: {
		banner: `Obtenha 20% de desconto na sua primeira encomenda online até ${formattedDate}.`,
		nav: {
			home: 'Início',
			menu: 'Menu',
			services: 'Serviços',
			contacts: 'Contactos'
		},
		home: {
			about: {
				intro: 'Localizado no centro do Porto, o nosso restaurante é um paraíso para os amantes de sushi.',
				description: 'Delicie-se com a nossa experiência gastronómica "all-you-can-eat", que oferece uma variedade de opções meticulosamente elaboradas pelo chefe japonês, Takashi Yamamoto, com mais de 40 anos de experiência.'
			},
			reservation: "Faça uma reserva",
			details: {
				lunch: {
					title: "Almoço",
					time: "12:00 - 15:00",
					price: "15€ (bebidas incluídas)"
				},
				dinner: {
					title: "Jantar / Fim-de-semana / Feriados",
					time: "20:00 - 23:00",
					price: "20€ (bebidas não incluídas)"
				},
				kids: {
					title: "Crianças",
					price: "8€ (bebidas não incluídas)"
				}
			}
		}
  }
}