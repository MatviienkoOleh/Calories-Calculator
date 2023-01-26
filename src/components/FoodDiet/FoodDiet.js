import React, { useEffect, useState } from "react";
import "./FoodDiet.css";

const FoodDiet = (props) => {
  const { diet, typeDiet, handleChangeDiet } = props;
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");

  useEffect(() => {
    if (diet.protein === "fish") {
      setProtein("Рыба");
    } else if (diet.protein === "beef") {
      setProtein("Говядина");
    } else if (diet.protein === "pork") {
      setProtein("Свинина");
    } else if (diet.protein === "chicken") {
      setProtein("Курица");
    };

    if (diet.carbs === "rice") {
      setCarbs("Рис");
    } else if (diet.carbs === "spaghetti") {
      setCarbs("Спагетти");
    } else if (diet.carbs === "bulgur") {
      setCarbs("Булгур");
    } else if (diet.carbs === "buckwheat") {
      setCarbs("Гречка");
    };
  }, [diet.protein, diet.carbs]);

  return (
    <div className="wrapper_Diet">
      <section className="wrapper_Diet_Section_One">
        <div className="daily_Meal">
          <h1 className="wrapper_Diet_Section_Header">
            {typeDiet.type === "normal"
              ? "Процентное соотношение БЖУ для поддержания форми"
              : null}
            {typeDiet.type === "rise"
              ? "Процентное соотношение БЖУ для набора массы"
              : null}
            {typeDiet.type === "decline"
              ? "Процентное соотношение БЖУ для похудения"
              : null}
          </h1>
          <div className="wrapper_Diet_Section_One_Block">
            <div className="diet_Info">
              <span className="diet_Font">&#128308; белки:</span>
              <span className="diet_Font">&#128309; углеводи:</span>
              <span className="diet_Font">&#128993; жири:</span>
            </div>
            <div className="diet_Info">
              <span className="diet_Font">{typeDiet.protein} г</span>
              <span className="diet_Font">{typeDiet.carbs} г</span>
              <span className="diet_Font">{typeDiet.fat} г</span>
            </div>
            <div className="diet_Info">
              <span className="diet_Font">
                {typeDiet.type === "normal" ? "15%" : null}
                {typeDiet.type === "rise" ? "30%" : null}
                {typeDiet.type === "decline" ? "50%" : null}
              </span>
              <span className="diet_Font">
                {typeDiet.type === "normal" ? "55%" : null}
                {typeDiet.type === "rise" ? "50%" : null}
                {typeDiet.type === "decline" ? "30%" : null}
              </span>
              <span className="diet_Font">
                {typeDiet.type === "normal" ? "30%" : null}
                {typeDiet.type === "rise" ? "20%" : null}
                {typeDiet.type === "decline" ? "20%" : null}
              </span>
            </div>
          </div>
        </div>
        <p className="daily_Meal_Paragraph">
          БЖУ — это баланс необходимых веществ.Это те вещества, которые мы
          получаем из пищи и которые наш организм использует для своих нужд. Из
          белков состоят мышцы, в жирах много полезных кислот, а углеводы
          являются основным источником энергии.
        </p>
        <h1 className="daily_Meal_Paragraph_Two">
          Cоздайте свое личное дневное меню на сегодня.
        </h1>
      </section>
      <section className="wrapper_Diet_Section_Select_Menu">
        <div className="box">
          <select value={diet.protein} id="protein" onChange={handleChangeDiet}>
            <option>Белки</option>
            <option value="fish">Рыба</option>
            <option value="beef">Гавядина</option>
            <option value="pork">Свинина</option>
            <option value="chicken">Курица</option>
          </select>
        </div>
        <div className="box">
          <select value={diet.carbs} id="carbs" onChange={handleChangeDiet}>
            <option>Углеводы</option>
            <option value="rice">Рис</option>
            <option value="spaghetti">Спагетти</option>
            <option value="bulgur">Булгур</option>
            <option value="buckwheat">Гречка</option>
          </select>
        </div>
      </section>
      <section className="wrapper_Diet_Section_Two">
        <h1 className="wrapper_Diet_Section_Header margin_Top">Daily Menu</h1>
        <div className="diet_Per_Servings">
          <div>
            <div className="diet_Per_Serving_Block">
              <h3 className="diet_Per_Serving_Header">08:00 am</h3>
              <span className="diet_Block_list">
                &#128308; {diet.proteinPerServing}г {protein}
              </span>
              <span className="diet_Block_list">&#128309; 100г овсянки</span>
            </div>
          </div>
          <div>
            <div className="diet_Per_Serving_Block">
              <h3 className="diet_Per_Serving_Header">10:00 am</h3>
              <span className="diet_Block_list">
                &#128308; {diet.proteinPerServing}г {protein}
              </span>
              <span className="diet_Block_list">
                &#128309; {diet.carbsPerServing}г {carbs}
              </span>
              <span>&#128994; 150г овощи</span>
            </div>
          </div>
          <div>
            <div className="diet_Per_Serving_Block">
              <h3 className="diet_Per_Serving_Header">12:00 am</h3>
              <span className="diet_Block_list">
                &#128308; {diet.proteinPerServing}г {protein}
              </span>
              <span className="diet_Block_list">
                &#128309; {diet.carbsPerServing}г {carbs}
              </span>
              <span className="diet_Block_list">&#128994; 150г овощи</span>
            </div>
          </div>
          <div>
            <div className="diet_Per_Serving_Block">
              <h3 className="diet_Per_Serving_Header">14:00 pm</h3>
              <span className="diet_Block_list">
                &#128308; {diet.proteinPerServing}г {protein}
              </span>
              <span className="diet_Block_list">
                &#128309; {diet.carbsPerServing}г {carbs}
              </span>
              <span className="diet_Block_list">&#128994; 150г овощи</span>
            </div>
          </div>
          <div>
            <div className="diet_Per_Serving_Block">
              <h3 className="diet_Per_Serving_Header">16:00 pm</h3>
              <span className="diet_Block_list">
                &#128308; {diet.proteinPerServing}г {protein}
              </span>
              <span className="diet_Block_list">
                &#128309; {diet.carbsPerServing}г {carbs}
              </span>
              <span className="diet_Block_list">&#128994; 150г овощи</span>
            </div>
          </div>
          <div>
            <div className="diet_Per_Serving_Block">
              <h3 className="diet_Per_Serving_Header">18:00 pm</h3>
              <span className="diet_Block_list">&#128308; 200г творог</span>
            </div>
          </div>
        </div>
        <p className="daily_Meal_Paragraph margin_Top">
          Рацион питания — набор рекомендуемых потребителю блюд и изделий,
          скомплектованных по видам приема пищи в соответствии с требованиями
          рационального питания. Формула правильного, здорового питания
          достаточно проста, так как включает всего лишь две составляющие,
          находящиеся в прямой зависимости друг от друга. Суть ее такова:
          энергетическая ценность пищи (измеряемая в калориях) должна
          соответствовать затратам энергии организмом. Всем известно, если
          человек много ест, но мало двигается, его нерастраченная энергия
          превращается в лишний вес. Значит, в поддержании нормального веса
          имеет значение образ жизни, род занятий, пол, физиологические данные,
          физическая активность. Но каждый человек может придерживаться простых
          правил.
        </p>
      </section>
    </div>
  );
};

export default FoodDiet;
