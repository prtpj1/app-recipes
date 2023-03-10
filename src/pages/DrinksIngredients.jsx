import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MyContext from '../contexts/MyContext';
import { getIngredientsDrinks, searchDrink } from '../services/TheCockTailDBAPI';

function DrinksIngredients() {
  const [drinks12, setDrinks12] = useState([]);

  const { setData } = useContext(MyContext);

  const doze = 12;
  const fetchDrinks = async () => {
    const { drinks } = await getIngredientsDrinks();
    const drinkOnly = drinks.map((drink) => drink.strIngredient1);
    setDrinks12(drinkOnly.filter((element, index) => index < doze));
  };

  const imgDrinks = (name) => {
    const url = `https://www.thecocktaildb.com/images/ingredients/${name}-Small.png`;
    return url;
  };

  const history = useHistory();
  const filterDrink = async (url, typeSearch, name) => {
    const { drinks } = (await searchDrink(url, typeSearch, name));
    console.log(drinks);
    setData({ searchResult: [...drinks], typePage: 'drinks' });
    history.push('/drinks');
  };

  useEffect(() => {
    fetchDrinks();
    imgDrinks();
  }, []);
  return (
    <div className="ingridients_main_container">
      <Header title="Explore Ingredients" />
      <div className="ingridients_card_container">
        { drinks12.length > 0 && (
          drinks12.map((drink, index) => (
            <button
              className="ingridients_card"
              type="button"
              data-testid={ `${index}-ingredient-card` }
              key={ index }
              onClick={ () => filterDrink('filter', 'i', drink) }
            >
              <img
                className="ingridients_card_img"
                src={ imgDrinks(drink) }
                alt={ drink }
                data-testid={ `${index}-card-img` }
              />
              <div
                className="ingridients_card_title"
                data-testid={ `${index}-card-name` }
              >
                { drink }

              </div>
            </button>
          ))
        )}
      </div>
      <Footer existeFooter="true" />
    </div>
  );
}

export default DrinksIngredients;
