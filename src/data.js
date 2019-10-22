import comeAlong from "./assets/landing/come-along.jpg";
import jinJiang from "./assets/landing/jin-jiang.jpg";
import kirin from "./assets/landing/kirin.jpg";
import dinesty from "./assets/landing/dinesty.jpg";
import chefTony from "./assets/landing/chef-tony.jpg";
import sunSuiWah from "./assets/landing/sun-sui-wah.jpg";

export default [
  {
    name: "Burnaby",
    restaurants: [
      {
        id: "jin-jiang",
        name: "Jin Jiang Shanghainese Restaurant",
        tagLine: "The best baos you can get.",
        numStars: 4,
        img: jinJiang
      },
      {
        id: "come-along",
        name: "Come Along Restaurant",
        tagLine: "For your Tau Foo Fah fix.",
        numStars: 3,
        img: comeAlong
      },
      {
        id: "kirin",
        name: "Kirin Seafood Restaurant",
        tagLine: "Har gaw and veggie dumplings done on point.",
        numStars: 4,
        img: kirin
      }
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
        img: chefTony
      },
      {
        id: "dinesty",
        name: "Dinesty",
        tagLine: "For thos xiao long baos done right.",
        numStars: 3,
        img: dinesty
      },
      {
        id: "sun-sui-wah",
        name: "Sun Sui Wah",
        tagLine: "Where to get that gai-lan in oyster sauce.",
        numStars: 4,
        img: sunSuiWah
      }
    ] 
  }

];

