import tower1 from '../assets/img1.jpg'
import tower2 from '../assets/img2.jpg'
import tower3 from '../assets/img3.jpg'
export const data = {
  towers: [
    {
      id: 1,
      name: 'Tower 1',
      address: '123 Main St, City',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
      image: tower1,
      floors: [
        {
          id: 1,
          name: 'Floor 1',
          apartments: [
            {
              id: '1-A1',
              unitType: '1BHK',
              area: '600 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/04/39/44/33/240_F_439443377_KMbvGadRff7ucfTqJdAJ0kwLwp88hxHr.jpg'
            },
            {
              id: '1-A2',
              unitType: '1BHK',
              area: '300 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/05/58/28/39/240_F_558283914_DbhElEI71hUSh2MNtJbscvqboopFC41j.jpg'
            },
            {
              id: '1-A3',
              unitType: '1BHK',
              area: '800 sqft',
              rooms: 4,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t3.ftcdn.net/jpg/06/39/42/46/240_F_639424665_YGf5eZXs70GJQyKRHYS51uxg4daD8LFL.jpg'
            }
          ],
          image:
            'https://t4.ftcdn.net/jpg/04/39/67/81/240_F_439678138_BSMyaz6kvq9z68i9qjmooP0ovYA5N7OP.jpg'
        },
        {
          id: 2,
          name: 'Floor 2',
          apartments: [
            {
              id: '2-A1',
              unitType: '2BHK',
              area: '800 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/04/62/81/35/240_F_462813515_06tnNd4cDhFNNCAGt30kr4kqnErBGBKF.jpg'
            },
            {
              id: '2-A2',
              unitType: '2BHK',
              area: '800 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/02/22/47/41/240_F_222474111_L5iQLfgPGz0SYjNqH3trBHlZaAnuaapl.jpg'
            },
            {
              id: '2-A3',
              unitType: '2BHK',
              area: '800 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/02/72/52/61/240_F_272526128_HRF7dRsL7E3RiPP6XCUqvCgVrDay8xhF.jpg'
            }
          ],
          image:
            'https://t3.ftcdn.net/jpg/14/88/19/80/240_F_1488198066_w68Zi3gKgDsGwTMYgIqmyoOuMkXgj2FF.jpg'
        },
        {
          id: 3,
          name: 'Floor 3',
          apartments: [
            {
              id: '3-A1',
              unitType: '3BHK',
              area: '1000 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/04/83/82/09/240_F_483820922_zj1cHFelOilU8m3Dw96F73H9MASaO8TA.jpg'
            },
            {
              id: '3-A2',
              unitType: '3BHK',
              area: '1000 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t3.ftcdn.net/jpg/02/59/31/98/240_F_259319855_SUVL8MCpgqbLGynHrYhUGGzGFzutBvBU.jpg'
            }
          ],
          image:
            'https://t4.ftcdn.net/jpg/14/88/19/79/240_F_1488197949_Squtj5z5W9kiUnLrO2UI9MaCdl4LG5Ng.jpg'
        },
        {
          id: 4,
          name: 'Floor 4',
          apartments: [
            {
              id: '4-A1',
              unitType: 'Studio',
              area: '400 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/04/60/56/43/240_F_460564314_zZQ74SMg0WBmgg1la485FQJnZCVFNl8S.jpg'
            },
            {
              id: '4-A2',
              unitType: 'Studio',
              area: '400 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/02/08/76/79/240_F_208767949_6LChIqVQhLU4uN15wSweKkbH0ufNp1fm.jpg'
            },
            {
              id: '4-A2',
              unitType: 'Studio',
              area: '400 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/01/82/95/21/240_F_182952149_uRgkP4Eu4juoqkzYSbKElBCz9EyF5nsp.jpg'
            }
          ],
          image:
            'https://t3.ftcdn.net/jpg/12/85/10/10/240_F_1285101041_kYSZr8XzzGMJzaFz1XFQxmPgSifgYQjE.jpg'
        },
        {
          id: 5,
          name: 'Floor 5',
          apartments: [
            {
              id: '5-A1',
              unitType: '1BHK',
              area: '600 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/09/43/24/73/240_F_943247331_Ml0Gl0ovix5FpWfabDmLZhmFQipyxYrn.jpg'
            },
            {
              id: '5-A2',
              unitType: '1BHK',
              area: '600 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t3.ftcdn.net/jpg/03/60/46/44/240_F_360464434_nBakyPQGXS5J3jGVKrSxodvxUUcfuF1Y.jpg'
            },
            {
              id: '5-A3',
              unitType: '1BHK',
              area: '600 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/03/63/64/35/240_F_363643519_GY0uwy4frw42ppInAUkffmopdV89bu2h.jpg'
            },
            {
              id: '5-A4',
              unitType: '1BHK',
              area: '600 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/02/94/54/55/240_F_294545573_CfGs7KrpTh8EpDAUER34IaujIZe5WwcZ.jpg'
            }
          ],
          image:
            'https://t3.ftcdn.net/jpg/15/14/54/64/240_F_1514546446_hzeqC7NVO9WKwxF9ycQjZmH7QyQMpOI8.jpg'
        },
        {
          id: 6,
          name: 'Floor 6',
          apartments: [
            {
              id: '6-A1',
              unitType: '3BHK',
              area: '1000 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/05/35/55/17/240_F_535551786_e1tE0MTASm85Dn3pdJg1gePIrM2otFrV.jpg'
            },
            {
              id: '6-A2',
              unitType: '3BHK',
              area: '1000 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t3.ftcdn.net/jpg/03/48/06/74/240_F_348067415_PmFzkSJzPMXwni4RhmnB2Zji3TmA0pUF.jpg'
            },
            {
              id: '6-A3',
              unitType: '1BHK',
              area: '600 sqft',
              rooms: 1,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t3.ftcdn.net/jpg/03/19/41/56/240_F_319415634_yuRdJRbEulVh1X1IwrpK0L1pu4EveMyS.jpg'
            },
            {
              id: '6-A4',
              unitType: '1BHK',
              area: '600 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/04/37/14/67/240_F_437146725_btw7RkVUuW62qAtOeZHyvsnkwhmHfHa7.jpg'
            }
          ],
          image:
            'https://t3.ftcdn.net/jpg/14/88/19/78/240_F_1488197897_327Q2hv0V0TJHZkOWTLAS1Atj1ffkQTZ.jpg'
        },
        {
          id: 7,
          name: 'Floor 7',
          apartments: [
            {
              id: '7-A1',
              unitType: '3BHK',
              area: '1000 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/05/35/55/17/240_F_535551786_e1tE0MTASm85Dn3pdJg1gePIrM2otFrV.jpg'
            },
            {
              id: '7-A2',
              unitType: '3BHK',
              area: '1000 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t3.ftcdn.net/jpg/03/48/06/74/240_F_348067415_PmFzkSJzPMXwni4RhmnB2Zji3TmA0pUF.jpg'
            }
          ],
          image:
            'https://t4.ftcdn.net/jpg/14/05/61/71/240_F_1405617103_MvPhIX6ePOaXzFDfWQEhaxcmdoKMlf5R.jpg'
        },
        {
          id: 8,
          name: 'Floor 8',
          apartments: [
            {
              id: '8-A1',
              unitType: 'Studio',
              area: '400 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/05/35/55/17/240_F_535551786_e1tE0MTASm85Dn3pdJg1gePIrM2otFrV.jpg'
            },
            {
              id: '8-A2',
              unitType: 'Studio',
              area: '400 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/01/70/05/89/240_F_170058942_0NvVD2jjquhQX1WrcXSdS4AKf7FpfGFW.jpg'
            }
          ],
          image:
            'https://t4.ftcdn.net/jpg/13/44/43/29/240_F_1344432977_lUGzasGuVd1aHLWwqT1M9co6m7d9xeUP.jpg'
        },
        {
          id: 9,
          name: 'Floor 9',
          apartments: [
            {
              id: '9-A1',
              unitType: '1BHK',
              area: '600 sqft',
              rooms: 1,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t3.ftcdn.net/jpg/03/19/41/56/240_F_319415634_yuRdJRbEulVh1X1IwrpK0L1pu4EveMyS.jpg'
            },
            {
              id: '9-A2',
              unitType: '1BHK',
              area: '600 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/04/37/14/67/240_F_437146725_btw7RkVUuW62qAtOeZHyvsnkwhmHfHa7.jpg'
            },
            {
              id: '9-A3',
              unitType: '1BHK',
              area: '600 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/02/78/17/87/240_F_278178764_e67Im31Vl1oqDypVOmqpLYkP1nxl04DV.jpg'
            }
          ],
          image:
            'https://t3.ftcdn.net/jpg/14/88/19/84/240_F_1488198419_CgOxfsEPK5wAY1SKRJpBiOShXJBiWyma.jpg'
        },
        {
          id: 10,
          name: 'Floor 10',
          apartments: [
            {
              id: '10-A1',
              unitType: '2BHK',
              area: '800 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/04/31/33/17/240_F_431331748_TFe7AmvZmtzwdMGrTkIZjntrnnLICblW.jpg'
            },
            {
              id: '10-A2',
              unitType: '2BHK',
              area: '800 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/04/31/33/17/240_F_431331748_TFe7AmvZmtzwdMGrTkIZjntrnnLICblW.jpg'
            },
            {
              id: '10-A3',
              unitType: '2BHK',
              area: '800 sqft',
              rooms: 1,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t3.ftcdn.net/jpg/03/02/57/98/240_F_302579819_0YuVrmAur2IZyiUNq56Nr5dNz6S1mr2d.jpg'
            },
            {
              id: '10-A4',
              unitType: '2BHK',
              area: '800 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t3.ftcdn.net/jpg/00/40/78/90/240_F_40789095_AHh75o0ikOgPVx4SwEki8ryb406B5Kp5.jpg'
            }
          ],
          image:
            'https://t4.ftcdn.net/jpg/12/26/25/69/240_F_1226256938_oraQ4OmFAWJRWv4TVdDkIwKklLsImV4U.jpg'
        }
      ]
    },
    {
      id: 2,
      name: 'Tower 2',
      address: '123 Main St, City',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
      image: tower2,
      floors: [
        {
          id: 1,
          name: 'Floor 1',
          apartments: [
            {
              id: '1-A1',
              unitType: '1BHK',
              area: '600 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/04/39/44/33/240_F_439443377_KMbvGadRff7ucfTqJdAJ0kwLwp88hxHr.jpg'
            },
            {
              id: '1-A2',
              unitType: '1BHK',
              area: '300 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/05/58/28/39/240_F_558283914_DbhElEI71hUSh2MNtJbscvqboopFC41j.jpg'
            },
            {
              id: '1-A3',
              unitType: '1BHK',
              area: '800 sqft',
              rooms: 4,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t3.ftcdn.net/jpg/06/39/42/46/240_F_639424665_YGf5eZXs70GJQyKRHYS51uxg4daD8LFL.jpg'
            }
          ],
          image:
            'https://t4.ftcdn.net/jpg/04/39/67/81/240_F_439678138_BSMyaz6kvq9z68i9qjmooP0ovYA5N7OP.jpg'
        },
        {
          id: 2,
          name: 'Floor 2',
          apartments: [
            {
              id: '2-A1',
              unitType: '2BHK',
              area: '800 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/04/62/81/35/240_F_462813515_06tnNd4cDhFNNCAGt30kr4kqnErBGBKF.jpg'
            },
            {
              id: '2-A2',
              unitType: '2BHK',
              area: '800 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/02/22/47/41/240_F_222474111_L5iQLfgPGz0SYjNqH3trBHlZaAnuaapl.jpg'
            },
            {
              id: '2-A3',
              unitType: '2BHK',
              area: '800 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/02/72/52/61/240_F_272526128_HRF7dRsL7E3RiPP6XCUqvCgVrDay8xhF.jpg'
            }
          ],
          image:
            'https://t3.ftcdn.net/jpg/14/88/19/80/240_F_1488198066_w68Zi3gKgDsGwTMYgIqmyoOuMkXgj2FF.jpg'
        },
        {
          id: 3,
          name: 'Floor 3',
          apartments: [
            {
              id: '3-A1',
              unitType: '3BHK',
              area: '1000 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/04/83/82/09/240_F_483820922_zj1cHFelOilU8m3Dw96F73H9MASaO8TA.jpg'
            },
            {
              id: '3-A2',
              unitType: '3BHK',
              area: '1000 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t3.ftcdn.net/jpg/02/59/31/98/240_F_259319855_SUVL8MCpgqbLGynHrYhUGGzGFzutBvBU.jpg'
            }
          ],
          image:
            'https://t4.ftcdn.net/jpg/14/88/19/79/240_F_1488197949_Squtj5z5W9kiUnLrO2UI9MaCdl4LG5Ng.jpg'
        },
        {
          id: 4,
          name: 'Floor 4',
          apartments: [
            {
              id: '4-A1',
              unitType: 'Studio',
              area: '400 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/04/60/56/43/240_F_460564314_zZQ74SMg0WBmgg1la485FQJnZCVFNl8S.jpg'
            },
            {
              id: '4-A2',
              unitType: 'Studio',
              area: '400 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/02/08/76/79/240_F_208767949_6LChIqVQhLU4uN15wSweKkbH0ufNp1fm.jpg'
            },
            {
              id: '4-A2',
              unitType: 'Studio',
              area: '400 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/01/82/95/21/240_F_182952149_uRgkP4Eu4juoqkzYSbKElBCz9EyF5nsp.jpg'
            }
          ],
          image:
            'https://t3.ftcdn.net/jpg/12/85/10/10/240_F_1285101041_kYSZr8XzzGMJzaFz1XFQxmPgSifgYQjE.jpg'
        },
        {
          id: 5,
          name: 'Floor 5',
          apartments: [
            {
              id: '5-A1',
              unitType: '1BHK',
              area: '600 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/09/43/24/73/240_F_943247331_Ml0Gl0ovix5FpWfabDmLZhmFQipyxYrn.jpg'
            },
            {
              id: '5-A2',
              unitType: '1BHK',
              area: '600 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t3.ftcdn.net/jpg/03/60/46/44/240_F_360464434_nBakyPQGXS5J3jGVKrSxodvxUUcfuF1Y.jpg'
            },
            {
              id: '5-A3',
              unitType: '1BHK',
              area: '600 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/03/63/64/35/240_F_363643519_GY0uwy4frw42ppInAUkffmopdV89bu2h.jpg'
            },
            {
              id: '5-A4',
              unitType: '1BHK',
              area: '600 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/02/94/54/55/240_F_294545573_CfGs7KrpTh8EpDAUER34IaujIZe5WwcZ.jpg'
            }
          ],
          image:
            'https://t3.ftcdn.net/jpg/15/14/54/64/240_F_1514546446_hzeqC7NVO9WKwxF9ycQjZmH7QyQMpOI8.jpg'
        },
        {
          id: 6,
          name: 'Floor 6',
          apartments: [
            {
              id: '6-A1',
              unitType: '3BHK',
              area: '1000 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/05/35/55/17/240_F_535551786_e1tE0MTASm85Dn3pdJg1gePIrM2otFrV.jpg'
            },
            {
              id: '6-A2',
              unitType: '3BHK',
              area: '1000 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t3.ftcdn.net/jpg/03/48/06/74/240_F_348067415_PmFzkSJzPMXwni4RhmnB2Zji3TmA0pUF.jpg'
            },
            {
              id: '6-A3',
              unitType: '1BHK',
              area: '600 sqft',
              rooms: 1,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t3.ftcdn.net/jpg/03/19/41/56/240_F_319415634_yuRdJRbEulVh1X1IwrpK0L1pu4EveMyS.jpg'
            },
            {
              id: '6-A4',
              unitType: '1BHK',
              area: '600 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/04/37/14/67/240_F_437146725_btw7RkVUuW62qAtOeZHyvsnkwhmHfHa7.jpg'
            }
          ],
          image:
            'https://t3.ftcdn.net/jpg/14/88/19/78/240_F_1488197897_327Q2hv0V0TJHZkOWTLAS1Atj1ffkQTZ.jpg'
        },
        {
          id: 7,
          name: 'Floor 7',
          apartments: [
            {
              id: '7-A1',
              unitType: '3BHK',
              area: '1000 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/05/35/55/17/240_F_535551786_e1tE0MTASm85Dn3pdJg1gePIrM2otFrV.jpg'
            },
            {
              id: '7-A2',
              unitType: '3BHK',
              area: '1000 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t3.ftcdn.net/jpg/03/48/06/74/240_F_348067415_PmFzkSJzPMXwni4RhmnB2Zji3TmA0pUF.jpg'
            }
          ],
          image:
            'https://t4.ftcdn.net/jpg/14/05/61/71/240_F_1405617103_MvPhIX6ePOaXzFDfWQEhaxcmdoKMlf5R.jpg'
        },
        {
          id: 8,
          name: 'Floor 8',
          apartments: [
            {
              id: '8-A1',
              unitType: 'Studio',
              area: '400 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/05/35/55/17/240_F_535551786_e1tE0MTASm85Dn3pdJg1gePIrM2otFrV.jpg'
            },
            {
              id: '8-A2',
              unitType: 'Studio',
              area: '400 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/01/70/05/89/240_F_170058942_0NvVD2jjquhQX1WrcXSdS4AKf7FpfGFW.jpg'
            }
          ],
          image:
            'https://t4.ftcdn.net/jpg/13/44/43/29/240_F_1344432977_lUGzasGuVd1aHLWwqT1M9co6m7d9xeUP.jpg'
        },
        {
          id: 9,
          name: 'Floor 9',
          apartments: [
            {
              id: '9-A1',
              unitType: '1BHK',
              area: '600 sqft',
              rooms: 1,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t3.ftcdn.net/jpg/03/19/41/56/240_F_319415634_yuRdJRbEulVh1X1IwrpK0L1pu4EveMyS.jpg'
            },
            {
              id: '9-A2',
              unitType: '1BHK',
              area: '600 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/04/37/14/67/240_F_437146725_btw7RkVUuW62qAtOeZHyvsnkwhmHfHa7.jpg'
            },
            {
              id: '9-A3',
              unitType: '1BHK',
              area: '600 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/02/78/17/87/240_F_278178764_e67Im31Vl1oqDypVOmqpLYkP1nxl04DV.jpg'
            }
          ],
          image:
            'https://t3.ftcdn.net/jpg/14/88/19/84/240_F_1488198419_CgOxfsEPK5wAY1SKRJpBiOShXJBiWyma.jpg'
        },
        {
          id: 10,
          name: 'Floor 10',
          apartments: [
            {
              id: '10-A1',
              unitType: '2BHK',
              area: '800 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/04/31/33/17/240_F_431331748_TFe7AmvZmtzwdMGrTkIZjntrnnLICblW.jpg'
            },
            {
              id: '10-A2',
              unitType: '2BHK',
              area: '800 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/04/31/33/17/240_F_431331748_TFe7AmvZmtzwdMGrTkIZjntrnnLICblW.jpg'
            },
            {
              id: '10-A3',
              unitType: '2BHK',
              area: '800 sqft',
              rooms: 1,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t3.ftcdn.net/jpg/03/02/57/98/240_F_302579819_0YuVrmAur2IZyiUNq56Nr5dNz6S1mr2d.jpg'
            },
            {
              id: '10-A4',
              unitType: '2BHK',
              area: '800 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t3.ftcdn.net/jpg/00/40/78/90/240_F_40789095_AHh75o0ikOgPVx4SwEki8ryb406B5Kp5.jpg'
            }
          ],
          image:
            'https://t4.ftcdn.net/jpg/12/26/25/69/240_F_1226256938_oraQ4OmFAWJRWv4TVdDkIwKklLsImV4U.jpg'
        }
      ]
    },
    {
      id: 3,
      name: 'Tower 3',
      address: '123 Main St, City',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
      image: tower3,
      floors: [
        {
          id: 1,
          name: 'Floor 1',
          apartments: [
            {
              id: '1-A1',
              unitType: '1BHK',
              area: '600 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/04/39/44/33/240_F_439443377_KMbvGadRff7ucfTqJdAJ0kwLwp88hxHr.jpg'
            },
            {
              id: '1-A2',
              unitType: '1BHK',
              area: '300 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/05/58/28/39/240_F_558283914_DbhElEI71hUSh2MNtJbscvqboopFC41j.jpg'
            },
            {
              id: '1-A3',
              unitType: '1BHK',
              area: '800 sqft',
              rooms: 4,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t3.ftcdn.net/jpg/06/39/42/46/240_F_639424665_YGf5eZXs70GJQyKRHYS51uxg4daD8LFL.jpg'
            }
          ],
          image:
            'https://t4.ftcdn.net/jpg/04/39/67/81/240_F_439678138_BSMyaz6kvq9z68i9qjmooP0ovYA5N7OP.jpg'
        },
        {
          id: 2,
          name: 'Floor 2',
          apartments: [
            {
              id: '2-A1',
              unitType: '2BHK',
              area: '800 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/04/62/81/35/240_F_462813515_06tnNd4cDhFNNCAGt30kr4kqnErBGBKF.jpg'
            },
            {
              id: '2-A2',
              unitType: '2BHK',
              area: '800 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/02/22/47/41/240_F_222474111_L5iQLfgPGz0SYjNqH3trBHlZaAnuaapl.jpg'
            },
            {
              id: '2-A3',
              unitType: '2BHK',
              area: '800 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/02/72/52/61/240_F_272526128_HRF7dRsL7E3RiPP6XCUqvCgVrDay8xhF.jpg'
            }
          ],
          image:
            'https://t3.ftcdn.net/jpg/14/88/19/80/240_F_1488198066_w68Zi3gKgDsGwTMYgIqmyoOuMkXgj2FF.jpg'
        },
        {
          id: 3,
          name: 'Floor 3',
          apartments: [
            {
              id: '3-A1',
              unitType: '3BHK',
              area: '1000 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/04/83/82/09/240_F_483820922_zj1cHFelOilU8m3Dw96F73H9MASaO8TA.jpg'
            },
            {
              id: '3-A2',
              unitType: '3BHK',
              area: '1000 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t3.ftcdn.net/jpg/02/59/31/98/240_F_259319855_SUVL8MCpgqbLGynHrYhUGGzGFzutBvBU.jpg'
            }
          ],
          image:
            'https://t4.ftcdn.net/jpg/14/88/19/79/240_F_1488197949_Squtj5z5W9kiUnLrO2UI9MaCdl4LG5Ng.jpg'
        },
        {
          id: 4,
          name: 'Floor 4',
          apartments: [
            {
              id: '4-A1',
              unitType: 'Studio',
              area: '400 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/04/60/56/43/240_F_460564314_zZQ74SMg0WBmgg1la485FQJnZCVFNl8S.jpg'
            },
            {
              id: '4-A2',
              unitType: 'Studio',
              area: '400 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/02/08/76/79/240_F_208767949_6LChIqVQhLU4uN15wSweKkbH0ufNp1fm.jpg'
            },
            {
              id: '4-A2',
              unitType: 'Studio',
              area: '400 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/01/82/95/21/240_F_182952149_uRgkP4Eu4juoqkzYSbKElBCz9EyF5nsp.jpg'
            }
          ],
          image:
            'https://t3.ftcdn.net/jpg/12/85/10/10/240_F_1285101041_kYSZr8XzzGMJzaFz1XFQxmPgSifgYQjE.jpg'
        },
        {
          id: 5,
          name: 'Floor 5',
          apartments: [
            {
              id: '5-A1',
              unitType: '1BHK',
              area: '600 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/09/43/24/73/240_F_943247331_Ml0Gl0ovix5FpWfabDmLZhmFQipyxYrn.jpg'
            },
            {
              id: '5-A2',
              unitType: '1BHK',
              area: '600 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t3.ftcdn.net/jpg/03/60/46/44/240_F_360464434_nBakyPQGXS5J3jGVKrSxodvxUUcfuF1Y.jpg'
            },
            {
              id: '5-A3',
              unitType: '1BHK',
              area: '600 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/03/63/64/35/240_F_363643519_GY0uwy4frw42ppInAUkffmopdV89bu2h.jpg'
            },
            {
              id: '5-A4',
              unitType: '1BHK',
              area: '600 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/02/94/54/55/240_F_294545573_CfGs7KrpTh8EpDAUER34IaujIZe5WwcZ.jpg'
            }
          ],
          image:
            'https://t3.ftcdn.net/jpg/15/14/54/64/240_F_1514546446_hzeqC7NVO9WKwxF9ycQjZmH7QyQMpOI8.jpg'
        },
        {
          id: 6,
          name: 'Floor 6',
          apartments: [
            {
              id: '6-A1',
              unitType: '3BHK',
              area: '1000 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/05/35/55/17/240_F_535551786_e1tE0MTASm85Dn3pdJg1gePIrM2otFrV.jpg'
            },
            {
              id: '6-A2',
              unitType: '3BHK',
              area: '1000 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t3.ftcdn.net/jpg/03/48/06/74/240_F_348067415_PmFzkSJzPMXwni4RhmnB2Zji3TmA0pUF.jpg'
            },
            {
              id: '6-A3',
              unitType: '1BHK',
              area: '600 sqft',
              rooms: 1,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t3.ftcdn.net/jpg/03/19/41/56/240_F_319415634_yuRdJRbEulVh1X1IwrpK0L1pu4EveMyS.jpg'
            },
            {
              id: '6-A4',
              unitType: '1BHK',
              area: '600 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/04/37/14/67/240_F_437146725_btw7RkVUuW62qAtOeZHyvsnkwhmHfHa7.jpg'
            }
          ],
          image:
            'https://t3.ftcdn.net/jpg/14/88/19/78/240_F_1488197897_327Q2hv0V0TJHZkOWTLAS1Atj1ffkQTZ.jpg'
        },
        {
          id: 7,
          name: 'Floor 7',
          apartments: [
            {
              id: '7-A1',
              unitType: '3BHK',
              area: '1000 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/05/35/55/17/240_F_535551786_e1tE0MTASm85Dn3pdJg1gePIrM2otFrV.jpg'
            },
            {
              id: '7-A2',
              unitType: '3BHK',
              area: '1000 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t3.ftcdn.net/jpg/03/48/06/74/240_F_348067415_PmFzkSJzPMXwni4RhmnB2Zji3TmA0pUF.jpg'
            }
          ],
          image:
            'https://t4.ftcdn.net/jpg/14/05/61/71/240_F_1405617103_MvPhIX6ePOaXzFDfWQEhaxcmdoKMlf5R.jpg'
        },
        {
          id: 8,
          name: 'Floor 8',
          apartments: [
            {
              id: '8-A1',
              unitType: 'Studio',
              area: '400 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/05/35/55/17/240_F_535551786_e1tE0MTASm85Dn3pdJg1gePIrM2otFrV.jpg'
            },
            {
              id: '8-A2',
              unitType: 'Studio',
              area: '400 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/01/70/05/89/240_F_170058942_0NvVD2jjquhQX1WrcXSdS4AKf7FpfGFW.jpg'
            }
          ],
          image:
            'https://t4.ftcdn.net/jpg/13/44/43/29/240_F_1344432977_lUGzasGuVd1aHLWwqT1M9co6m7d9xeUP.jpg'
        },
        {
          id: 9,
          name: 'Floor 9',
          apartments: [
            {
              id: '9-A1',
              unitType: '1BHK',
              area: '600 sqft',
              rooms: 1,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t3.ftcdn.net/jpg/03/19/41/56/240_F_319415634_yuRdJRbEulVh1X1IwrpK0L1pu4EveMyS.jpg'
            },
            {
              id: '9-A2',
              unitType: '1BHK',
              area: '600 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/04/37/14/67/240_F_437146725_btw7RkVUuW62qAtOeZHyvsnkwhmHfHa7.jpg'
            },
            {
              id: '9-A3',
              unitType: '1BHK',
              area: '600 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/02/78/17/87/240_F_278178764_e67Im31Vl1oqDypVOmqpLYkP1nxl04DV.jpg'
            }
          ],
          image:
            'https://t3.ftcdn.net/jpg/14/88/19/84/240_F_1488198419_CgOxfsEPK5wAY1SKRJpBiOShXJBiWyma.jpg'
        },
        {
          id: 10,
          name: 'Floor 10',
          apartments: [
            {
              id: '10-A1',
              unitType: '2BHK',
              area: '800 sqft',
              rooms: 2,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/04/31/33/17/240_F_431331748_TFe7AmvZmtzwdMGrTkIZjntrnnLICblW.jpg'
            },
            {
              id: '10-A2',
              unitType: '2BHK',
              area: '800 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t4.ftcdn.net/jpg/04/31/33/17/240_F_431331748_TFe7AmvZmtzwdMGrTkIZjntrnnLICblW.jpg'
            },
            {
              id: '10-A3',
              unitType: '2BHK',
              area: '800 sqft',
              rooms: 1,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t3.ftcdn.net/jpg/03/02/57/98/240_F_302579819_0YuVrmAur2IZyiUNq56Nr5dNz6S1mr2d.jpg'
            },
            {
              id: '10-A4',
              unitType: '2BHK',
              area: '800 sqft',
              rooms: 3,
              description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod doloribus, a tempora accusamus, nemo quas mollitia modi corporis aliquid veritatis deserunt debitis nesciunt error magnam nam? Rerum iste nihil eveniet.',
              image:
                'https://t3.ftcdn.net/jpg/00/40/78/90/240_F_40789095_AHh75o0ikOgPVx4SwEki8ryb406B5Kp5.jpg'
            }
          ],
          image:
            'https://t4.ftcdn.net/jpg/12/26/25/69/240_F_1226256938_oraQ4OmFAWJRWv4TVdDkIwKklLsImV4U.jpg'
        }
      ]
    }
  ]
  // floors: {
  //   id: 1,
  //   towerId: '1',
  //   towerName: 'Tower 1',
  //   floorsDetail: [
  //     {
  //       id: 1,
  //       name: 'Floor 1',
  //       apartments: [
  //         {
  //           id: '1-A1',
  //           unitType: '1BHK',
  //           area: '650 sqft',
  //           rooms: 1,
  //           image: 'https://picsum.photos/200/150?random=1'
  //         },
  //         {
  //           id: '1-A2',
  //           unitType: '2BHK',
  //           area: '950 sqft',
  //           rooms: 2,
  //           image: 'https://picsum.photos/200/150?random=2'
  //         },
  //         {
  //           id: '1-A3',
  //           unitType: '3BHK',
  //           area: '1250 sqft',
  //           rooms: 3,
  //           image: 'https://picsum.photos/200/150?random=3'
  //         },
  //         {
  //           id: '1-A4',
  //           unitType: 'Studio',
  //           area: '450 sqft',
  //           rooms: 0,
  //           image: 'https://picsum.photos/200/150?random=4'
  //         }
  //       ]
  //     },
  //     {
  //       id: 2,
  //       name: 'Floor 2',
  //       apartments: [
  //         {
  //           id: '2-A1',
  //           unitType: '1BHK',
  //           area: '620 sqft',
  //           rooms: 1,
  //           image: 'https://picsum.photos/200/150?random=5'
  //         },
  //         {
  //           id: '2-A2',
  //           unitType: '2BHK',
  //           area: '900 sqft',
  //           rooms: 2,
  //           image: 'https://picsum.photos/200/150?random=6'
  //         },
  //         {
  //           id: '2-A3',
  //           unitType: '3BHK',
  //           area: '1200 sqft',
  //           rooms: 3,
  //           image: 'https://picsum.photos/200/150?random=7'
  //         },
  //         {
  //           id: '2-A4',
  //           unitType: 'Studio',
  //           area: '400 sqft',
  //           rooms: 0,
  //           image: 'https://picsum.photos/200/150?random=8'
  //         }
  //       ]
  //     },
  //     {
  //       id: 3,
  //       name: 'Floor 3',
  //       apartments: [
  //         {
  //           id: '3-A1',
  //           unitType: '1BHK',
  //           area: '670 sqft',
  //           rooms: 1,
  //           image: 'https://picsum.photos/200/150?random=9'
  //         },
  //         {
  //           id: '3-A2',
  //           unitType: '2BHK',
  //           area: '920 sqft',
  //           rooms: 2,
  //           image: 'https://picsum.photos/200/150?random=10'
  //         },
  //         {
  //           id: '3-A3',
  //           unitType: '3BHK',
  //           area: '1300 sqft',
  //           rooms: 3,
  //           image: 'https://picsum.photos/200/150?random=11'
  //         },
  //         {
  //           id: '3-A4',
  //           unitType: 'Studio',
  //           area: '430 sqft',
  //           rooms: 0,
  //           image: 'https://picsum.photos/200/150?random=12'
  //         }
  //       ]
  //     },
  //     {
  //       id: 4,
  //       name: 'Floor 4',
  //       apartments: [
  //         {
  //           id: '4-A1',
  //           unitType: '1BHK',
  //           area: '600 sqft',
  //           rooms: 1,
  //           image: 'https://picsum.photos/200/150?random=13'
  //         },
  //         {
  //           id: '4-A2',
  //           unitType: '2BHK',
  //           area: '880 sqft',
  //           rooms: 2,
  //           image: 'https://picsum.photos/200/150?random=14'
  //         },
  //         {
  //           id: '4-A3',
  //           unitType: '3BHK',
  //           area: '1150 sqft',
  //           rooms: 3,
  //           image: 'https://picsum.photos/200/150?random=15'
  //         },
  //         {
  //           id: '4-A4',
  //           unitType: 'Studio',
  //           area: '410 sqft',
  //           rooms: 0,
  //           image: 'https://picsum.photos/200/150?random=16'
  //         }
  //       ]
  //     },
  //     {
  //       id: 5,
  //       name: 'Floor 5',
  //       apartments: [
  //         {
  //           id: '5-A1',
  //           unitType: '1BHK',
  //           area: '680 sqft',
  //           rooms: 1,
  //           image: 'https://picsum.photos/200/150?random=17'
  //         },
  //         {
  //           id: '5-A2',
  //           unitType: '2BHK',
  //           area: '940 sqft',
  //           rooms: 2,
  //           image: 'https://picsum.photos/200/150?random=18'
  //         },
  //         {
  //           id: '5-A3',
  //           unitType: '3BHK',
  //           area: '1280 sqft',
  //           rooms: 3,
  //           image: 'https://picsum.photos/200/150?random=19'
  //         },
  //         {
  //           id: '5-A4',
  //           unitType: 'Studio',
  //           area: '420 sqft',
  //           rooms: 0,
  //           image: 'https://picsum.photos/200/150?random=20'
  //         }
  //       ]
  //     },
  //     {
  //       id: 6,
  //       name: 'Floor 6',
  //       apartments: [
  //         {
  //           id: '6-A1',
  //           unitType: '1BHK',
  //           area: '640 sqft',
  //           rooms: 1,
  //           image: 'https://picsum.photos/200/150?random=21'
  //         },
  //         {
  //           id: '6-A2',
  //           unitType: '2BHK',
  //           area: '910 sqft',
  //           rooms: 2,
  //           image: 'https://picsum.photos/200/150?random=22'
  //         },
  //         {
  //           id: '6-A3',
  //           unitType: '3BHK',
  //           area: '1220 sqft',
  //           rooms: 3,
  //           image: 'https://picsum.photos/200/150?random=23'
  //         },
  //         {
  //           id: '6-A4',
  //           unitType: 'Studio',
  //           area: '440 sqft',
  //           rooms: 0,
  //           image: 'https://picsum.photos/200/150?random=24'
  //         }
  //       ]
  //     },
  //     {
  //       id: 7,
  //       name: 'Floor 7',
  //       apartments: [
  //         {
  //           id: '7-A1',
  //           unitType: '1BHK',
  //           area: '660 sqft',
  //           rooms: 1,
  //           image: 'https://picsum.photos/200/150?random=25'
  //         },
  //         {
  //           id: '7-A2',
  //           unitType: '2BHK',
  //           area: '930 sqft',
  //           rooms: 2,
  //           image: 'https://picsum.photos/200/150?random=26'
  //         },
  //         {
  //           id: '7-A3',
  //           unitType: '3BHK',
  //           area: '1260 sqft',
  //           rooms: 3,
  //           image: 'https://picsum.photos/200/150?random=27'
  //         },
  //         {
  //           id: '7-A4',
  //           unitType: 'Studio',
  //           area: '415 sqft',
  //           rooms: 0,
  //           image: 'https://picsum.photos/200/150?random=28'
  //         }
  //       ]
  //     },
  //     {
  //       id: 8,
  //       name: 'Floor 8',
  //       apartments: [
  //         {
  //           id: '8-A1',
  //           unitType: '1BHK',
  //           area: '630 sqft',
  //           rooms: 1,
  //           image: 'https://picsum.photos/200/150?random=29'
  //         },
  //         {
  //           id: '8-A2',
  //           unitType: '2BHK',
  //           area: '890 sqft',
  //           rooms: 2,
  //           image: 'https://picsum.photos/200/150?random=30'
  //         },
  //         {
  //           id: '8-A3',
  //           unitType: '3BHK',
  //           area: '1180 sqft',
  //           rooms: 3,
  //           image: 'https://picsum.photos/200/150?random=31'
  //         },
  //         {
  //           id: '8-A4',
  //           unitType: 'Studio',
  //           area: '405 sqft',
  //           rooms: 0,
  //           image: 'https://picsum.photos/200/150?random=32'
  //         }
  //       ]
  //     },
  //     {
  //       id: 9,
  //       name: 'Floor 9',
  //       apartments: [
  //         {
  //           id: '9-A1',
  //           unitType: '1BHK',
  //           area: '675 sqft',
  //           rooms: 1,
  //           image: 'https://picsum.photos/200/150?random=33'
  //         },
  //         {
  //           id: '9-A2',
  //           unitType: '2BHK',
  //           area: '960 sqft',
  //           rooms: 2,
  //           image: 'https://picsum.photos/200/150?random=34'
  //         },
  //         {
  //           id: '9-A3',
  //           unitType: '3BHK',
  //           area: '1300 sqft',
  //           rooms: 3,
  //           image: 'https://picsum.photos/200/150?random=35'
  //         },
  //         {
  //           id: '9-A4',
  //           unitType: 'Studio',
  //           area: '425 sqft',
  //           rooms: 0,
  //           image: 'https://picsum.photos/200/150?random=36'
  //         }
  //       ]
  //     },
  //     {
  //       id: 10,
  //       name: 'Floor 10',
  //       apartments: [
  //         {
  //           id: '10-A1',
  //           unitType: '1BHK',
  //           area: '610 sqft',
  //           rooms: 1,
  //           image: 'https://picsum.photos/200/150?random=37'
  //         },
  //         {
  //           id: '10-A2',
  //           unitType: '2BHK',
  //           area: '870 sqft',
  //           rooms: 2,
  //           image: 'https://picsum.photos/200/150?random=38'
  //         },
  //         {
  //           id: '10-A3',
  //           unitType: '3BHK',
  //           area: '1160 sqft',
  //           rooms: 3,
  //           image: 'https://picsum.photos/200/150?random=39'
  //         },
  //         {
  //           id: '10-A4',
  //           unitType: 'Studio',
  //           area: '400 sqft',
  //           rooms: 0,
  //           image: 'https://picsum.photos/200/150?random=40'
  //         }
  //       ]
  //     },
  //     {
  //       id: 11,
  //       name: 'Floor 11',
  //       apartments: [
  //         {
  //           id: '11-A1',
  //           unitType: '1BHK',
  //           area: '690 sqft',
  //           rooms: 1,
  //           image: 'https://picsum.photos/200/150?random=41'
  //         }
  //       ]
  //     }
  //   ]
  // }
}
