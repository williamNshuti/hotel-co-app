const mockResponse = {
  pages: [
    {
      createdAt: "2023-01-07T09:57:52.846Z",
      location: "KG201st, Airport Road, Kigali, Rwanda ",
      days: "Jan 02 - March 29",
      price: "$275 night",
      isNew: false,
      rating: 3.2,
      locationImages: [
        {
          id: 1,
          url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/163776793.jpg?k=ad3ebf69bc7ace92f1aaeeac063111700410b9464e9ad36f25c448142489dd6a&o=&hp=1",
        },
        {
          id: 2,
          url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/163775763.jpg?k=01a348ef41a2ba16c4d33091647d4e39f3f40475b766b933461a917745eb8ec9&o=&hp=1",
        },
        {
          id: 3,
          url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/159357056.jpg?k=8257403d1cac697338d509155e94668b8696ac2fff066ae7a93c1ab7d260465b&o=&hp=1",
        },
        {
          id: 4,
          url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/66766445.jpg?k=473bbf8495d92e217c3f01fa6ed1834a8ab6202a5d06c82be378a06d224f36d2&o=&hp=1",
        },
        {
          id: 5,
          url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/163792198.jpg?k=b60373037b61b7b86bf4e6beb9928ebe7c4f3c63a9adb3698136392a63d669c5&o=&hp=1",
        },
      ],
      name: "Hotel Chez Lando",
      review: 20,
      category: "Three star",
      description:
        "Located within the bustling business district of Remera, Hotel Chez Lando offers accommodations in Kigali. This hotel is located within 1.9 mi of Kigali International Airport and offers free WiFi.Each of the rooms at Hotel Chez Lando features a balcony with views of the manicured gardens, and is equipped with a mini-bar, flat-screen TV and a laptop safe. The private bathrooms are fitted with a bath and a shower, and free toiletries are provided for your comfort.Enjoy a meal at the lively Chez Lando Grill, popular among locals and tourists alike for its Rwandan barbecue specialties. La Fringale Restaurant offers formal dining with a variety of dishes and a selection of South African and French wines.Hotel Chez Lando has a 24-hour front desk, and offers guests complimentary airport shuttles. Laundry services are available at a surcharge, and free private parking is available on site.The Kigali Genocide Memorial is 5 mi from Hotel Chez Lando while Kigali Convention center is 1.9 mi away.Couples in particular like the location – they rated it 8.9 for a two-person trip.",
      id: "10",
    },
  ],
};

export default {
  getAllMockHotels: jest.fn().mockResolvedValue(mockResponse),
};
