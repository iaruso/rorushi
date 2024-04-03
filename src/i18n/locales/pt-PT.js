const today = new Date();
const threeDaysLater = new Date(today.getTime() + (3 * 24 * 60 * 60 * 1000));
const month = String(threeDaysLater.getMonth() + 1).padStart(2, '0');
const day = String(threeDaysLater.getDate()).padStart(2, '0');
const formattedDate = `${day}/${month}`;

export default {
  translations: {
		meta: {
			description: 'Descubra a essência do sushi tradicional no Rorushi. Mergulhe na arte da mestria culinária japonesa com os nossos rolos autênticos e cuidadosamente elaborados. Delicie o seu paladar com a pureza dos sabores e os ingredientes mais frescos. Experimente a elegância intemporal do sushi no Rorushi, onde a tradição ganha vida em cada dentada.'
		},
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
			menu: 'Explore o menu',
			reservation: 'Reserve uma mesa',
			details: {
				quality: {
					title: 'Qualidade',
					description: 'Desfrute de sushi fresco preparado pelo chef com mais de 30 anos de experiência'
				},
				service: {
					title: 'Serviço',
					description: 'Desfrute de uma refeição rodízio ou faça uma encomenda para levar para casa'
				},
				environment: {
					title: 'Ambiente',
					description: 'Ajude-nos a reduzir o desperdício (0,50€ por cada peça desperdiçada)'
				}
			},
			pricing: {
				lunch: {
					title: 'Almoço',
					time: '12:00 - 15:00',
					price: '15€',
					drinks: '(bebidas incluídas)'
				},
				dinner: {
					title: 'Jantar',
					time: '20:00 - 23:00',
					price: '20€',
					drinks: '(bebidas não incluídas)'
				},
				kids: {
					title: 'Crianças',
					age: '(Menos de 12)',
					price: '8€',
					drinks: '(bebidas não incluídas)'
				},
				takeaway: {
					title: 'Take away',
					details: '(16 peças)',
					price: '10€',
					drinks: '(bebidas não incluídas)'
				}
			}
		},
		menu: {

		},
		services: {
			reservation: {
				title: 'Reserva',
				description: 'Reserve uma mesa no nosso restaurante' 
			},
			delivery: {
				title: 'Encomenda',
				description: 'Faça encomenda à sua casa',
				status: 'Indisponível'
			},
			partner: {
				title: 'Serviços de entrega',
				description: 'Faça a sua encomenda numa das aplicações de entrega'
			},
			takeaway: {
				title: 'Take away',
				description: 'Contacte-nos e recolha a sua encomenda'
			}
		},
		contacts: {
			address: 'Morada',
			phone: 'Contacto telefónico',
			opening_hours: 'Horário de funcionamento',
			details: {
				days: 'Todos os dias das 12:00 às 15:00 e 20:00 às 23:00.',
				services: 'Serviço de take away todos os dias das 12:30 às 15:00 e 20:00 às 22:30.'
			}
		}
  }
}