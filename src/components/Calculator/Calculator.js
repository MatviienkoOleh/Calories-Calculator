import React from "react";
import "./Calculator.css";

const Calculator = (props) => {
  const { getGender, handlerChange, characteristics } = props;

  return (
    <form className="calculator_wrapper">
      <h1 className="calculator_wrapper_header">Калькулятор калорий</h1>
      <p className="calculator_wrapper_paragraph">
        Заполните информацию о себе, и, благодаря калькулятору калорий, вы
        узнаете ваш базовый обмен веществ, индекс массы тела и ежедневную норму
        калорий в соответствии с вашей целью - похудеть, быть в форме или
        набрать мышечную массу.
      </p>
      <div className="input_Blocks">
        <div className="selector_Block">
          <div className="buttons_Block">
            <button
              style={
                characteristics.gender === "man" ? { color: "black" } : null
              }
              className="button-15"
              id="gender"
              value="man"
              onClick={getGender}
            >
              Мужчина
            </button>
            <button
              style={
                characteristics.gender === "girl" ? { color: "black" } : null
              }
              className="button-15"
              id="gender"
              value="girl"
              onClick={getGender}
            >
              Женщина
            </button>
          </div>
        </div>
        <div className="input_Block">
          <label className="input_Block_Label" htmlFor="weight">
            Вес{" "}
            <span
              style={
                characteristics.weight.length >= 1
                  ? { display: "none" }
                  : { color: "red" }
              }
            >
              &times;
            </span>
          </label>
          <input
            onChange={handlerChange}
            id="weight"
            type="range"
            min="40"
            max="150"
            placeholder="Type your weight"
          />
          <div className="calculator_Result">
            {characteristics.weight
              ? " " + characteristics.weight + " кг"
              : " 0 кг"}
          </div>
        </div>
        <div className="input_Block">
          <label className="input_Block_Label" htmlFor="age">
            Возраст{" "}
            <span
              style={
                characteristics.age.length >= 1
                  ? { display: "none" }
                  : { color: "red" }
              }
            >
              &times;
            </span>
          </label>
          <input
            onChange={handlerChange}
            id="age"
            type="range"
            min="12"
            max="100"
            placeholder="Type your age"
          />
          <div className="calculator_Result">
            {characteristics.age
              ? " " + characteristics.age + " лет"
              : " 0 лет"}
          </div>
        </div>
        <div className="input_Block">
          <label className="input_Block_Label" htmlFor="height">
            Рост{" "}
            <span
              style={
                characteristics.height.length >= 1
                  ? { display: "none" }
                  : { color: "red" }
              }
            >
              &times;
            </span>
          </label>
          <input
            onChange={handlerChange}
            id="height"
            type="range"
            min="120"
            max="220"
            placeholder="Type your height"
          />
          <div className="calculator_Result">
            {characteristics.height
              ? " " + characteristics.height + " см"
              : " 0 см"}
          </div>
        </div>
        <div className="selector_Block">
          <label className="input_Block_Label" htmlFor="activity">
            Образ жизни{" "}
            <span
              style={
                characteristics.activity.length >= 1
                  ? { display: "none" }
                  : { color: "red" }
              }
            >
              &times;
            </span>
          </label>
          <select
            className="input_Blocks_Selector"
            id="activity"
            value={characteristics.activity}
            onChange={handlerChange}
          >
            <option value="1.2">майже немає активності</option>
            <option value="1.375">помірні навантаження</option>
            <option value="1.55">тренування 3-5 разів на тиждень</option>
            <option value="1.725">інтенсивні навантаження</option>
            <option value="1.9">професійні спортсмени</option>
          </select>
          <div className="calculator_Result"></div>
        </div>
      </div>
    </form>
  );
};

export default Calculator;
