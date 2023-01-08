import { render, screen , act, waitFor, within } from "@testing-library/react";
import LocationCards from '../../components/LocationCards'
import Home from "../../pages";
import { QueryClient, QueryClientProvider, useInfiniteQuery } from '@tanstack/react-query';
import CarouselCard from "../../components/CarouselCard";
import getAllMockHotels from '../axios'


const queryClient = new QueryClient();



const data = {
    pages: [
        {
            "createdAt": "2023-01-06T16:15:33.660Z",
            "location": " KG 213 ST, Remera, Kigali, Rwanda ",
            "days": "Jan 20 - 29",
            "price": "$95 night",
            "isNew": false,
            "rating": 3.2,
            "locationImages": [
                {
                    "id": 1,
                    "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/158334742.jpg?k=82f0f963610dc9eee43998081dbc9dc604bb70effcd3a111dabfe69e33c00ae5&o=&hp=1"
                },
                {
                    "id": 2,
                    "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/155604684.jpg?k=d4ee3f470b1acb9b08db31fa41df6f8f51c050c0b5fdc461e452e0a52210736d&o=&hp=1"
                },
                {
                    "id": 3,
                    "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/158535025.jpg?k=00eac2d1b05baea5f7585fdb237b8f2b37eb01d7448c070f62dcc4436a7b0e33&o=&hp=1"
                },
                {
                    "id": 4,
                    "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/170507658.jpg?k=3228a011da2793208655a774cdf7c2620a4fabb2b1ed679f11e49180c2bc2342&o=&hp=1"
                },
                {
                    "id": 5,
                    "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/134315996.jpg?k=fdec83973c09f945e4a25923238a1666336c57b74d3a33bcd0e1fab0d8823b72&o=&hp=1"
                }
            ],
            "name": "Five to Five Hotel",
            "review": 20,
            "category": "Three star",
            "description": "Located in the Remera area and 5 minutes' walk from Amahoro Stadium, Five to Five Hotel in Kigali features a restaurant, free WiFi throughout the property and private parking. A free airport shuttle service is available.The rooms have city views and are equipped with satellite TV and a balcony. The beds are draped with a mosquito net.The restaurant serves local and international cuisine and drinks can be enjoyed on the rooftop terrace. Room service is available.The property has a 24-hour front desk, a concierge service, a business center and meeting facilities.Kigali International Airport is within 10 minutes' drive while Kigali Convention center is 2.3 mi away. Genocide memorial is 5.2 mi from the property.Couples in particular like the location – they rated it 8.9 for a two-person trip.",
            "id": "9"
        },
        {
            "createdAt": "2023-01-07T09:57:52.846Z",
            "location": "KG201st, Airport Road, Kigali, Rwanda ",
            "days": "Jan 02 - March 29",
            "price": "$275 night",
            "isNew": false,
            "rating": 3.2,
            "locationImages": [
                {
                    "id": 1,
                    "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/163776793.jpg?k=ad3ebf69bc7ace92f1aaeeac063111700410b9464e9ad36f25c448142489dd6a&o=&hp=1"
                },
                {
                    "id": 2,
                    "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/163775763.jpg?k=01a348ef41a2ba16c4d33091647d4e39f3f40475b766b933461a917745eb8ec9&o=&hp=1"
                },
                {
                    "id": 3,
                    "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/159357056.jpg?k=8257403d1cac697338d509155e94668b8696ac2fff066ae7a93c1ab7d260465b&o=&hp=1"
                },
                {
                    "id": 4,
                    "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/66766445.jpg?k=473bbf8495d92e217c3f01fa6ed1834a8ab6202a5d06c82be378a06d224f36d2&o=&hp=1"
                },
                {
                    "id": 5,
                    "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/163792198.jpg?k=b60373037b61b7b86bf4e6beb9928ebe7c4f3c63a9adb3698136392a63d669c5&o=&hp=1"
                }
            ],
            "name": "Hotel Chez Lando",
            "review": 20,
            "category": "Three star",
            "description": "Located within the bustling business district of Remera, Hotel Chez Lando offers accommodations in Kigali. This hotel is located within 1.9 mi of Kigali International Airport and offers free WiFi.Each of the rooms at Hotel Chez Lando features a balcony with views of the manicured gardens, and is equipped with a mini-bar, flat-screen TV and a laptop safe. The private bathrooms are fitted with a bath and a shower, and free toiletries are provided for your comfort.Enjoy a meal at the lively Chez Lando Grill, popular among locals and tourists alike for its Rwandan barbecue specialties. La Fringale Restaurant offers formal dining with a variety of dishes and a selection of South African and French wines.Hotel Chez Lando has a 24-hour front desk, and offers guests complimentary airport shuttles. Laundry services are available at a surcharge, and free private parking is available on site.The Kigali Genocide Memorial is 5 mi from Hotel Chez Lando while Kigali Convention center is 1.9 mi away.Couples in particular like the location – they rated it 8.9 for a two-person trip.",
            "id": "10"
        },
        {
            "createdAt": "2023-01-07T06:26:03.961Z",
            "location": "KG 552 Street, Kigali, Rwanda ",
            "days": "Jan 12 - 19",
            "price": "$975 night",
            "isNew": false,
            "rating": 8.5,
            "locationImages": [
                {
                    "id": 1,
                    "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/78100614.jpg?k=5b5e0553a932804328b7b5ab7c5552784a36ff258375b6d3e9f736accf26539b&o=&hp=1"
                },
                {
                    "id": 2,
                    "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/78472613.jpg?k=136094541014634e7c7c3b3c296ef086d6a8eb8bf3f1f47c1790318fa2cefacd&o=&hp=1"
                },
                {
                    "id": 3,
                    "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/104993021.jpg?k=79dbb2bec52b3947b8ee634e5fcaf37aa63e6550a0183a1dd7b6ef0c4ecba219&o=&hp=1"
                },
                {
                    "id": 4,
                    "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/78126613.jpg?k=b2051edfc018168a3028dc8530f023e67ce630ac716dd3dfa3c1c8db99518d8c&o=&hp=1"
                },
                {
                    "id": 5,
                    "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/78422311.jpg?k=b36c50d38b3facff6b586981f6d3945b86969f62202f7b7d5d8276dc8dac8bb4&o=&hp=1"
                }
            ],
            "name": "The Manor Hotel",
            "review": 460,
            "category": "Four star",
            "description": "Located in Kigali, The Manor Hotel provides free WiFi throughout the property. Featuring an outdoor swimming pool, this hotel has air-conditioned rooms with a private bathroom. The restaurant serves international and seafood dishes, as well as Chinese and steakhouse cuisine.All guest rooms in the hotel are feature with a kettle. The Manor offers some rooms with pool views, and every room is fitted with a terrace. At the accommodations, every room includes a flat-screen TV with satellite channels.Asian and halal breakfast options are available daily at The Manor Hotel.In the wellness area you will find a sauna. You can play billiards at this 4-star hotel, and car hire is available.Languages spoken at the reception include English and French.Kigali International Community School is an 11-minute walk from the hotel, while La Galette Supermarket is a 13-minute walk from the property.Couples in particular like the location – they rated it 8.5 for a two-person trip.",
            "id": "11"
        }
    ]
}


describe('Home', () => {
    it('fetches data and passes it to LocationCards', async () => {
      let data, isLoading, isError, error;
  
      act(() => {
        // Call the useInfiniteQuery hook
        const result = useInfiniteQuery(["hotels_infinite"], getAllMockHotels, {
          getNextPageParam: (_lastPage, pages) => {
            if (pages.length < 6) {
              return pages.length + 1;
            } else {
              return undefined;
            }
          },
        });
        // Destructure the returned values
        data = result.data;
        isLoading = result.isLoading;
        isError = result.isError;
        error = result.error;
      });
  
      // Assert that the data was fetched successfully
      expect(data).toBeDefined();
      expect(isLoading).toBe(false);
      expect(isError).toBe(false);
      expect(error).toBe(null);
  
      // Render the LocationCards component
      render(<LocationCards data={data} error={error} isLoading={isLoading} isError={isError} />);
  
      // Assert that the data was passed correctly to LocationCards
      const locationCards = screen.getByTestId('location-cards');
      expect(locationCards).toHaveProp('data', data);
      expect(locationCards).toHaveProp('error', error);
      expect(locationCards).toHaveProp('isLoading', isLoading);
      expect(locationCards).toHaveProp('isError', isError);
    });
  });
describe('Home', () => {
    it('renders a heading', () => {
      render(
        <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
  
      )
  
      const heading = screen.getByRole('heading', {
        name: /Hotel&Co/i,
      })
  
      expect(heading).toBeInTheDocument()
    })
  })



//   location card
describe("LocationCard", () => {
    it('renders the correct props', () => {
        const data = {
            pages: [
                {
                    "createdAt": "2023-01-06T16:15:33.660Z",
                    "location": " KG 213 ST, Remera, Kigali, Rwanda ",
                    "days": "Jan 20 - 29",
                    "price": "$95 night",
                    "isNew": false,
                    "rating": 3.2,
                    "locationImages": [
                        {
                            "id": 1,
                            "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/158334742.jpg?k=82f0f963610dc9eee43998081dbc9dc604bb70effcd3a111dabfe69e33c00ae5&o=&hp=1"
                        },
                        {
                            "id": 2,
                            "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/155604684.jpg?k=d4ee3f470b1acb9b08db31fa41df6f8f51c050c0b5fdc461e452e0a52210736d&o=&hp=1"
                        },
                        {
                            "id": 3,
                            "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/158535025.jpg?k=00eac2d1b05baea5f7585fdb237b8f2b37eb01d7448c070f62dcc4436a7b0e33&o=&hp=1"
                        },
                        {
                            "id": 4,
                            "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/170507658.jpg?k=3228a011da2793208655a774cdf7c2620a4fabb2b1ed679f11e49180c2bc2342&o=&hp=1"
                        },
                        {
                            "id": 5,
                            "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/134315996.jpg?k=fdec83973c09f945e4a25923238a1666336c57b74d3a33bcd0e1fab0d8823b72&o=&hp=1"
                        }
                    ],
                    "name": "Five to Five Hotel",
                    "review": 20,
                    "category": "Three star",
                    "description": "Located in the Remera area and 5 minutes' walk from Amahoro Stadium, Five to Five Hotel in Kigali features a restaurant, free WiFi throughout the property and private parking. A free airport shuttle service is available.The rooms have city views and are equipped with satellite TV and a balcony. The beds are draped with a mosquito net.The restaurant serves local and international cuisine and drinks can be enjoyed on the rooftop terrace. Room service is available.The property has a 24-hour front desk, a concierge service, a business center and meeting facilities.Kigali International Airport is within 10 minutes' drive while Kigali Convention center is 2.3 mi away. Genocide memorial is 5.2 mi from the property.Couples in particular like the location – they rated it 8.9 for a two-person trip.",
                    "id": "9"
                },
                {
                    "createdAt": "2023-01-07T09:57:52.846Z",
                    "location": "KG201st, Airport Road, Kigali, Rwanda ",
                    "days": "Jan 02 - March 29",
                    "price": "$275 night",
                    "isNew": false,
                    "rating": 3.2,
                    "locationImages": [
                        {
                            "id": 1,
                            "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/163776793.jpg?k=ad3ebf69bc7ace92f1aaeeac063111700410b9464e9ad36f25c448142489dd6a&o=&hp=1"
                        },
                        {
                            "id": 2,
                            "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/163775763.jpg?k=01a348ef41a2ba16c4d33091647d4e39f3f40475b766b933461a917745eb8ec9&o=&hp=1"
                        },
                        {
                            "id": 3,
                            "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/159357056.jpg?k=8257403d1cac697338d509155e94668b8696ac2fff066ae7a93c1ab7d260465b&o=&hp=1"
                        },
                        {
                            "id": 4,
                            "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/66766445.jpg?k=473bbf8495d92e217c3f01fa6ed1834a8ab6202a5d06c82be378a06d224f36d2&o=&hp=1"
                        },
                        {
                            "id": 5,
                            "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/163792198.jpg?k=b60373037b61b7b86bf4e6beb9928ebe7c4f3c63a9adb3698136392a63d669c5&o=&hp=1"
                        }
                    ],
                    "name": "Hotel Chez Lando",
                    "review": 20,
                    "category": "Three star",
                    "description": "Located within the bustling business district of Remera, Hotel Chez Lando offers accommodations in Kigali. This hotel is located within 1.9 mi of Kigali International Airport and offers free WiFi.Each of the rooms at Hotel Chez Lando features a balcony with views of the manicured gardens, and is equipped with a mini-bar, flat-screen TV and a laptop safe. The private bathrooms are fitted with a bath and a shower, and free toiletries are provided for your comfort.Enjoy a meal at the lively Chez Lando Grill, popular among locals and tourists alike for its Rwandan barbecue specialties. La Fringale Restaurant offers formal dining with a variety of dishes and a selection of South African and French wines.Hotel Chez Lando has a 24-hour front desk, and offers guests complimentary airport shuttles. Laundry services are available at a surcharge, and free private parking is available on site.The Kigali Genocide Memorial is 5 mi from Hotel Chez Lando while Kigali Convention center is 1.9 mi away.Couples in particular like the location – they rated it 8.9 for a two-person trip.",
                    "id": "10"
                },
                {
                    "createdAt": "2023-01-07T06:26:03.961Z",
                    "location": "KG 552 Street, Kigali, Rwanda ",
                    "days": "Jan 12 - 19",
                    "price": "$975 night",
                    "isNew": false,
                    "rating": 8.5,
                    "locationImages": [
                        {
                            "id": 1,
                            "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/78100614.jpg?k=5b5e0553a932804328b7b5ab7c5552784a36ff258375b6d3e9f736accf26539b&o=&hp=1"
                        },
                        {
                            "id": 2,
                            "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/78472613.jpg?k=136094541014634e7c7c3b3c296ef086d6a8eb8bf3f1f47c1790318fa2cefacd&o=&hp=1"
                        },
                        {
                            "id": 3,
                            "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/104993021.jpg?k=79dbb2bec52b3947b8ee634e5fcaf37aa63e6550a0183a1dd7b6ef0c4ecba219&o=&hp=1"
                        },
                        {
                            "id": 4,
                            "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/78126613.jpg?k=b2051edfc018168a3028dc8530f023e67ce630ac716dd3dfa3c1c8db99518d8c&o=&hp=1"
                        },
                        {
                            "id": 5,
                            "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/78422311.jpg?k=b36c50d38b3facff6b586981f6d3945b86969f62202f7b7d5d8276dc8dac8bb4&o=&hp=1"
                        }
                    ],
                    "name": "The Manor Hotel",
                    "review": 460,
                    "category": "Four star",
                    "description": "Located in Kigali, The Manor Hotel provides free WiFi throughout the property. Featuring an outdoor swimming pool, this hotel has air-conditioned rooms with a private bathroom. The restaurant serves international and seafood dishes, as well as Chinese and steakhouse cuisine.All guest rooms in the hotel are feature with a kettle. The Manor offers some rooms with pool views, and every room is fitted with a terrace. At the accommodations, every room includes a flat-screen TV with satellite channels.Asian and halal breakfast options are available daily at The Manor Hotel.In the wellness area you will find a sauna. You can play billiards at this 4-star hotel, and car hire is available.Languages spoken at the reception include English and French.Kigali International Community School is an 11-minute walk from the hotel, while La Galette Supermarket is a 13-minute walk from the property.Couples in particular like the location – they rated it 8.5 for a two-person trip.",
                    "id": "11"
                }
            ]
        }
        const error = 'Error message';
        const isLoading = false;
        const isError = true;
      
        render(<LocationCards data={data} error={error} isLoading={isLoading} isError={isError} />);
      
        // const dataProp = screen.getByTestId('location-cards-data');
        // const errorProp = screen.getByTestId('location-cards-error');
        // const isLoadingProp = screen.getByTestId('location-cards-is-loading');
        // const isErrorProp = screen.getByTestId('location-cards-is-error');
      

        
        // expect(dataProp).toHaveTextContent(JSON.stringify(data));
        // expect(errorProp).toHaveTextContent(error);
        // expect(isLoadingProp).toHaveTextContent(String(isLoading));
        // expect(isErrorProp).toHaveTextContent(String(isError));
      });
         
      
      
})

//  COURSEL CARD TEST

describe("carouselCard", () => {
    it('renders the correct props', () => {
        const location = 
                {
                    "createdAt": "2023-01-06T16:15:33.660Z",
                    "location": " KG 213 ST, Remera, Kigali, Rwanda ",
                    "days": "Jan 20 - 29",
                    "price": "$95 night",
                    "isNew": false,
                    "rating": 3.2,
                    "locationImages": [
                        {
                            "id": 1,
                            "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/158334742.jpg?k=82f0f963610dc9eee43998081dbc9dc604bb70effcd3a111dabfe69e33c00ae5&o=&hp=1"
                        },
                        {
                            "id": 2,
                            "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/155604684.jpg?k=d4ee3f470b1acb9b08db31fa41df6f8f51c050c0b5fdc461e452e0a52210736d&o=&hp=1"
                        },
                        {
                            "id": 3,
                            "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/158535025.jpg?k=00eac2d1b05baea5f7585fdb237b8f2b37eb01d7448c070f62dcc4436a7b0e33&o=&hp=1"
                        },
                        {
                            "id": 4,
                            "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/170507658.jpg?k=3228a011da2793208655a774cdf7c2620a4fabb2b1ed679f11e49180c2bc2342&o=&hp=1"
                        },
                        {
                            "id": 5,
                            "url": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/134315996.jpg?k=fdec83973c09f945e4a25923238a1666336c57b74d3a33bcd0e1fab0d8823b72&o=&hp=1"
                        }
                    ],
                    "name": "Five to Five Hotel",
                    "review": 20,
                    "category": "Three star",
                    "description": "Located in the Remera area and 5 minutes' walk from Amahoro Stadium, Five to Five Hotel in Kigali features a restaurant, free WiFi throughout the property and private parking. A free airport shuttle service is available.The rooms have city views and are equipped with satellite TV and a balcony. The beds are draped with a mosquito net.The restaurant serves local and international cuisine and drinks can be enjoyed on the rooftop terrace. Room service is available.The property has a 24-hour front desk, a concierge service, a business center and meeting facilities.Kigali International Airport is within 10 minutes' drive while Kigali Convention center is 2.3 mi away. Genocide memorial is 5.2 mi from the property.Couples in particular like the location – they rated it 8.9 for a two-person trip.",
                    "id": "9"
                }
               
      
        render(<CarouselCard location={location}/>);
      
        const dataProp = screen.getByTestId('carousel-cards-data');  
        expect(dataProp).toHaveTextContent("Five to Five Hotel");
      });
         
      
      
})
  
  

// describe("location data should be in location card component and it should be 4 for first render as per limit", () => {
//     it('should render location cards', async () => {
//         render(
//             <QueryClientProvider client={queryClient}>
//          <Home />
//       </QueryClientProvider>
//         );
//         const locationCard=  await screen.findByTestId("data-items-location-0");     
//            expect(locationCard).toBeInTheDocument();
//     });
 
// })