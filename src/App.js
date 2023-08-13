import './App.css';
import { FilmItem } from './components/basic/FilmItem/FilmItem';
import { Header } from './components/basic/header/Header';
import { LeftSideBar } from './components/basic/LeftSideBar/LeftSideBar';


export const App = () => {
  const data = [
    {
      id:0,
      name:"Форсаж 9",
      imageURL:"https://fanart.tv/detailpreview/fanart/movies/9799/movieposter/the-fast-and-the-furious-59dfede831967.jpg",
      rating:3.2,
      description:"Доминик вновь покоряет Эверест, на этот раз на самокате. Но ведь важно, не что под копотом, а кто за рулем. Доминик вновь покоряет Эверест, на этот раз на самокате. Но ведь важно, не что под..."
    },
    {
      id:1,
      name:"Форсаж 5",
      imageURL: "https://w-dog.ru/wallpapers/7/1/532886024368324/forsazh-5-fast-five-otlichnyj-film-blokbaster-vin-dizel-pol-uoker-duejn-dzhonson-muzhiki-s-oruzheem-mashina-uvernutsya-zaryadnoe-ustrojstvo-dodzh-chardzher.jpg",
      rating:4.5,
      description:"Доминик вновь покоряет Эверест, на этот раз на самокате. Но ведь важно, не что под копотом, а кто за рулем. Доминик вновь покоряет Эверест, на этот раз на самокате. Но ведь важно, не что под..."
    },
    {
      id:2,
      name:"Душа",
      imageURL: "https://cdn.flickeringmyth.com/wp-content/uploads/2020/03/soul-disney-pixar.jpg",
      rating:5.0,
      description:"Доминик вновь покоряет Эверест, на этот раз на самокате. Но ведь важно, не что под копотом, а кто за рулем. Доминик вновь покоряет Эверест, на этот раз на самокате. Но ведь важно, не что под..."
    },
    {
      id:3,
      name:"Движение вверх",
      imageURL: "https://www.slamdunk.ru/uploads/monthly_2018_10/output_1138x640.jpg.bab8f041f378af421e75479dbf6f323f.jpg",
      rating:0.5,
      description:"Доминик вновь покоряет Эверест, на этот раз на самокате. Но ведь важно, не что под копотом, а кто за рулем. Доминик вновь покоряет Эверест, на этот раз на самокате. Но ведь важно, не что под..."
    },

  ]
  return (
    <div className="App">
      <Header/>
      <section className="FilmItemDiv">
        {
          data.map(el=>{
            return <FilmItem data = {el}/> 
          })
        }
      </section>
      <LeftSideBar/>
    </div>
  );
}
