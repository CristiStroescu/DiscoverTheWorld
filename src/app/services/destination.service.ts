import { Injectable } from '@angular/core';
import { Destination } from '../models/destination.model';

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  constructor() {}
  arrayOfDestinations: Destination[] = [
    {
      name: 'Amsterdam, Netherlands',
      image: '/assets/images/amsterdam.jpg',
      description:
        'Amsterdam, city and port, western Netherlands, located on the IJsselmeer and connected to the North Sea. It is the capital and the principal commercial and financial centre of the Netherlands.',
    },
    {
      name: 'Barcelona, Spain',
      image: '/assets/images/barcelona.jpg',
      description:
        "Barcelona is the capital of the autonomous community of Catalonia, and it's renowned for its art and culture, stunning architecture, amazing selection of world-class dining opportunities, exceptional nightlife options and numerous water activities on the Mediterranean Sea.",
    },
    {
      name: 'Berlin, Germany',
      image: '/assets/images/berlin.jpg',
      description:
        "Berlin is the capital and chief urban center of Germany. Berlin was the capital of Prussia and then, from 1871, of a unified Germany. Though partitioned into East and West Berlin after World War II, the reunification of East and West Germany led to Berlin's reinstatement as the all-German capital in 1990.",
    },
    {
      name: 'Crete, Greece',
      image: '/assets/images/crete.jpg',
      description:
        'Crete is the fifth largest island in the Mediterranean and the largest of the islands forming part of modern Greece. It is relatively long and narrow, stretching for 160 miles (260 km) on its east-west axis and varying in width from 7.5 to 37 miles (12 to 60 km).',
    },
    {
      name: 'Lisbon, Portugal',
      image: '/assets/images/lisbon.jpg',
      description:
        'Lisbon is the capital and the largest city of Portugal. With over 20 centuries of History, this city located on the 7 hills has more than 500,000 inhabitants. Lisbon shows multiple contrasts between the historical and modern, combining different cultures, trends and lifestyles.',
    },
    {
      name: 'London, England',
      image: '/assets/images/london.jpg',
      description:
        'London is the capital and largest city of England and the United Kingdom, with a population of just under 9 million. It stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea, and has been a major settlement for two millennia. The City of London, its ancient core and financial centre, was founded by the Romans as "Londinium" and retains its medieval boundaries.'
    },
    {
      name: 'Paris, France',
      image: '/assets/images/paris.jpg',
      description:
        'Paris is a city of dreamers, dreaming of magic and creativity, a haven for top famous artists. The magic of its lights, high-rise buildings, beauty of art and blatant fashion attract many different types of artists. Paris is famous for the most famous fashion designers in the world.',
    },
    {
      name: 'Rome, Italy',
      image: '/assets/images/rome.jpg',
      description:
        'Rome is often referred to as the City of Seven Hills due to its geographic location, and also as the "Eternal City". Rome is generally considered to be the "cradle of Western civilization and Christian culture", and the centre of the Catholic Church.',
    },
  ];
}
