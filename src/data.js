import jinJiang from "./assets/landing/jin-jiang.jpg";
import comeAlong from "./assets/landing/come-along.jpg";
import kirin from "./assets/landing/kirin.jpg";
import dinesty from "./assets/landing/dinesty.jpg";
import chefTony from "./assets/landing/chef-tony.jpg";
import sunSuiWah from "./assets/landing/sun-sui-wah.jpg";
import peaceful from "./assets/landing/peaceful.jpg";
import meetFresh from "./assets/landing/meet-fresh.jpg";
import dynasty from "./assets/landing/dynasty-seafood.jpg";

export default [
  {
    name: "Burnaby",
    restaurants: [
      {
        id: "jin-jiang",
        name: "Jin Jiang Shanghainese",
        tagLine: "The best baos you can get.",
        numStars: 5,
        numUserRatings: 25,
        img: jinJiang,
        publishDate: "February 10, 2019",
        text: "My family goes here religiously. If my grandparents approve of this place, then it's got the real good stuff. Overall very well-rounded place, when we go out with the family, we usually got a pot of Westlake Beef Soup and a ton of baos.",
        coordinates: {lat: 49.224202, lng: -122.985459},
        zoom: 15,
        address: "5411 Kingsway<br>Burnaby BC V5H 2G1<br>Canada"
      },
        {
        id: "come-along",
        name: "Come Along Restaurant",
        tagLine: "The only place that will give me a bucket of tau foo fah.",
        numStars: 3,
        numUserRatings: 18,
        img: comeAlong,
        publishDate: "October 1, 2019",
        text: "They're a little more on the pricy side despite being in Burnaby. I honestly just go there for the tau foo fah, because it's the only place that serves it in a bucket (big tofu eater if you haven't noticed).",
        coordinates: {lat: 49.239348, lng: -123.053166},
        zoom: 15,
        address: "2550 Kingsway<br>Vancouver BC V5R 5H2<br>Canada"
      },
      {
        id: "kirin",
        name: "Kirin Seafood Restaurant",
        tagLine: "Har gaw and veggie dumplings done on point.",
        numStars: 4,
        numUserRatings: 30,
        img: kirin,
        publishDate: "September 23, 2019",
        text: "Another place that my family goes to regularly. You need a reservation or they won't even look at you (quite literally). If you manage to get in though, they are one of the consistently good chinese places in all of Vancouver.",
        coordinates: {lat: 49.260687, lng: -123.115481},
        zoom: 15,
        address: "City Square <br>555 W 12th Ave #201<br>Vancouver BC V5Z 3X7<br>Canada"
      }
    ] 
  },

  {
    name: "Downtown",
    restaurants: [
      {
        id: "peaceful",
        name: "Peaceful Restaurant",
        tagLine: "One-stop shop for wonton noodles.",
        numStars: 3,
        numUserRatings: 21,
        img: peaceful,
        publishDate: "February 17, 2019",
        text: "Little chinese place that's good for running in and out for wonton noodles. Ton of specials so it's convenient if you're desperate for take-out.",
        coordinates: {lat: 49.282810, lng: -123.115409},
        zoom: 15,
        address: "602 Seymour St<br>Vancouver BC V6B 3K3 <br>Canada"
      },
      {
        id: "dynasty",
        name: "Dynasty Seafood",
        tagLine: "I could probably eat a basket of their chive dumplings.",
        numStars: 4,
        numUserRatings: 30,
        img: dynasty,
        publishDate: "September 23, 2019",
        text: "Only managed to come here once since it's a bit out of the way, but otherwise probably around same quality as Kirin (so you need that reservation). Their shrimp/chive dumplings are hecking good.",
        coordinates: {lat: 49.263763, lng: -123.121624},
        zoom: 15,
        address: "108-777 W Broadway<br>Vancouver BC V5Z 4J7 <br>Canada"
      },
        {
        id: "meet-fresh",
        name: "Meet Fresh",
        tagLine: "For your Tau Foo Fah fix.",
        numStars: 4,
        numUserRatings: 18,
        img: meetFresh,
        publishDate: "October 1, 2019",
        text: "More of a chinese dessert shop, but they've got it all. Black jelly, shaved ice, boba, and tau foo fah - all good, though pricy because of the downtown location.",
        coordinates: {lat: 49.286247, lng: -123.127910},
        zoom: 15,
        address: "1232 Robson St <br>Vancouver BC V6E 1C2<br>Canada"
      },
    ] 
  },

  {
    name: "Richmond",
    restaurants: [
      {
        id: "chef-tonys",
        name: "Chef Tony's",
        tagLine: "The all around go-to place for consistent, quality dim sum.",
        numStars: 4,
        numUserRatings: 33,
        img: chefTony,
        publishDate: "May 15, 2019",
        text: "The equivalent of Kirin/Dynasty in the Richmond area. Hard to book but consistently high quality.",
        coordinates: {lat: 49.180401, lng: -123.136192},
        zoom: 15,
        address: "4600 No 3 Rd #101 <br>Richmond BC V6X 2C2 <br>Canada"
      },
      {
        id: "dinesty",
        name: "Dinesty Dumpling House",
        tagLine: "For thos xiao long baos done right.",
        numStars: 5,
        numUserRatings: 51,
        img: dinesty,
        publishDate: "February 9, 2019",
        text: "The made-in-Vancouver version of Din Tai Fung. I can eat a whole basket of those xiao long baos.",
        coordinates: {lat: 49.172261, lng: -123.135870},
        zoom: 15,
        address: "8111, 160 Ackroyd Rd #160 <br>Richmond BC V6X 3J9<br>Canada"
      },
      {
        id: "sun-sui-wah",
        name: "Sun Sui Wah",
        tagLine: "Where to get that gai-lan in oyster sauce.",
        numStars: 3,
        numUserRatings: 25,
        img: sunSuiWah,
        publishDate: "July 29, 2019",
        text: "If you're on your way to/from the airport, this is a good place to stop by. They have really good veggies for some reason.",
        coordinates: {lat: 49.178075, lng:-123.135780},
        zoom: 15,
        address: "4940 No 3 Rd<br>Richmond BC V6X 3A5<br>Canada"
      }
    ] 
  }

];

