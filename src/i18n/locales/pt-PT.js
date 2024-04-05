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
		disclaimer: {
			message: 'Este website não é um restaurante real. É um website de demonstração criado como projeto pessoal.',
			understood: 'Entendi'
		},
		reservation: {
			title: 'Dia {{day}} de {{month}}',
			person: 'pessoa',
			people: 'pessoas',
			time: 'Hora',
			number: 'Pessoas',
			book: 'Reservar',
			cancel: 'Cancelar'
		},
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
			search: 'Pesquise pelo nome',
			sashimi: {
				tuna: {
					name: 'Sashimi de atum',
					description: 'Fatias frescas de atum.',
					ingredients: ['Atum'],
				},
				salmon: {
					name: 'Sashimi de salmão',
					description: 'Fatias frescas de salmão.',
					ingredients: ['Salmão'],
				},
				butterfish: {
					name: 'Sashimi de peixe manteiga',
					description: 'Fatias frescas de peixe.',
					ingredients: ['Peixe manteiga'],
				},
			},
			nigiri: {
				tuna: {
					name: 'Nigiri de atum',
					description: 'Fatias frescas de atum servidas sobre arroz de sushi prensado à mão.',
					ingredients: ['Atum', 'Arroz'],
				},
				salmon: {
					name: 'Nigiri de salmão',
					description: 'Fatias frescas de salmão servidas sobre arroz de sushi prensado à mão.',
					ingredients: ['Salmão', 'Arroz'],
				},
				butterfish: {
					name: 'Nigiri de peixe manteiga',
					description: 'Fatias frescas de peixe manteiga servidas sobre arroz de sushi prensado à mão.',
					ingredients: ['Peixe Manteiga', 'Arroz'],
				},
				shrimp: {
					name: 'Nigiri de camarão',
					description: 'Camarão fresco servido sobre arroz de sushi prensado à mão.',
					ingredients: ['Camarão', 'Arroz'],
				},
				unagi: {
					name: 'Nigiri de enguia',
					description: 'Enguia fresca servida sobre arroz de sushi prensado à mão.',
					ingredients: ['Enguia', 'Arroz'],
				}
			},
			maki: {
				tuna: {
					name: 'Maki de atum',
					description: 'Atum fresco envolto em alga e arroz de sushi.',
					ingredients: ['Atum', 'Alga', 'Arroz'],
				},
				salmon: {
					name: 'Maki de salmão',
					description: 'Salmão fresco envolto em alga e arroz de sushi.',
					ingredients: ['Salmão', 'Alga', 'Arroz'],
				},
				shrimp: {
					name: 'Maki de camarão',
					description: 'Camarão fresco envolto em alga e arroz de sushi.',
					ingredients: ['Camarão', 'Alga', 'Arroz'],
				},
				unagi: {
					name: 'Maki de enguia',
					description: 'Enguia fresca envolta em alga e arroz de sushi.',
					ingredients: ['Enguia', 'Alga', 'Arroz'],
				},
				avocado: {
					name: 'Maki de abacate',
					description: 'Abacate fresco envolto em alga e arroz de sushi.',
					ingredients: ['Abacate', 'Alga', 'Arroz'],
				},
				cucumber: {
					name: 'Maki de pepino',
					description: 'Pepino fresco envolto em alga e arroz de sushi.',
					ingredients: ['Pepino', 'Alga', 'Arroz'],
				},
			},
			gunkan: {
				tuna: {
					name: 'Gunkan de atum',
					description: 'Atum fresco envolto em alga e arroz de sushi.',
					ingredients: ['Atum', 'Alga', 'Arroz'],
				},
				salmon: {
					name: 'Gunkan de salmão',
					description: 'Salmão fresco envolto em alga e arroz de sushi.',
					ingredients: ['Salmão', 'Alga', 'Arroz'],
				},
			},
			temaki: {
				tuna: {
					name: 'Temaki de atum',
					description: 'Cone enrolado de alga recheado com atum e arroz de sushi.',
					ingredients: ['Atum', 'Alga', 'Arroz'],
				},
				salmon: {
					name: 'Temaki de salmão',
					description: 'Cone enrolado de alga recheado com salmão e arroz de sushi.',
					ingredients: ['Salmão', 'Alga', 'Arroz'],
				},
				tempura: {
					name: 'Temaki de tempura',
					description: 'Cone enrolado de alga recheado com camarão tempura e arroz de sushi.',
					ingredients: ['Camarão Tempura', 'Alga', 'Arroz'],
				},
			}
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