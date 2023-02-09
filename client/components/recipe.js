import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const MealDetail = ({ match }) => {
  const [meal, setMeal] = useState({});
  
  const [searchParams] = useSearchParams();
  const getMeal = async () => {
    const res = await axios.get(`https://api.spoonacular.com/recipes/${searchParams.get("recipeId")}/information?apiKey=67f2eb38dc7441189476c0fd3fb74863`)
      setMeal(res.data);
  };

  useEffect(() => {
   getMeal ();
    
  }, [searchParams]);

  return (
    <div className='mealCard'>

      <div className='mealHeader'>
        <div className='mealBookmarkIcon'>
          <a href="#"><i className="fa fa-heart-o"></i></a>
        </div>
        <img src={meal.image} alt={meal.title} />
      </div>
      
      <div className='mealFooter'>
        <h1 className='mealTitle'>{meal.title}</h1>
        <i className="fa fa-clock-o"> {meal.readyInMinutes} Mins</i>
        <i className="fa fa-users"> Serves {meal.servings} </i>
        <div className='mealFooterHeaders'>Meal Summary: </div>
        <p className='mealFooterText' dangerouslySetInnerHTML={{__html: meal.summary}}></p>
        <div className='mealFooterHeaders'>Meal Instructions: </div>
        <p className='mealFooterText' dangerouslySetInnerHTML={{__html: meal.instructions}}></p>

        <div className='mealFooterHeaders'>Conforming Diets: </div>
        <div className='mealFooterTags'>
          {meal?.diets?.map((diet) => (
            <div>{diet}</div>
          ))}
        </div>

        <div className='mealFooterHeaders'>Cuisine: </div>
        <div className='mealFooterTags'>
          {meal?.cuisines?.map((cuisine) => (
            <div>{cuisine}</div>
          ))}
        </div>
      </div>
      
      <div className='cookItButton'>
        <button >Cook It!</button>
      </div>
    </div>
  );
};

export default MealDetail;


