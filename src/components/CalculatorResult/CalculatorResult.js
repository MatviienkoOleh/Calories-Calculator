import React from "react";
import "./CalculatorResult.css";
import ViewResult from "../ViewResult/ViewResult";

const CalculatorResult = (props) => {
  const {
    typeOfDiet,
    normalCalories,
    riseCalories,
    declineCalories,
    normalKDj,
    riseKDj,
    declineKDj,
    generateDiet,
    handleChangeTypeDiet,
  } = props;

  return (
    <div className="wrapper_Result">
      <h1 className="calculator_Result_Header">Ваш результат</h1>
      <p className="calculator_Result_paragraph">
        Калькулятор калорий вычислил для вас данный результат благодаря расчету
        вашего базального метаболизма и индекса массы тела на основании заданной
        вами информации. Однако, данный результат является теоретическим. Для
        более точных расчетов рекомендуем проконсультироваться с соответствующим
        врачом.
      </p>
      <h2 className="calculator_Result_Header">
        Ваш базовый обмен веществ составляет:
      </h2>
      <ViewResult calories={normalCalories} KDJ={normalKDj} />
      <p className="calculator_Result_paragraph">
        Базовый обмен веществ - это энергия, которую ваше тело должно
        вырабатывать для поддержания жизненных функций в состоянии покоя, то
        есть без какой-либо активности.
      </p>
      <h2 className="calculator_Result_Header">
        Рекомендуемая дневная норма калорий для набора мышечной массы
      </h2>
      <ViewResult calories={riseCalories} KDJ={riseKDj} />
      <h2 className="calculator_Result_Header">
        Рекомендуемая дневная норма калорий для похудания
      </h2>
      <ViewResult calories={declineCalories} KDJ={declineKDj} />
      <div className="calculator_button_section">
        <div className="box">
          <select
            id="type"
            value={typeOfDiet.type}
            onChange={handleChangeTypeDiet}
          >
            <option>Выберите цель</option>
            <option value="normal">Поддержание</option>
            <option value="rise">Набор массы</option>
            <option value="decline">Снижение веса</option>
          </select>
        </div>
        <button onClick={generateDiet} className="button-15">
          Diet
        </button>
      </div>
    </div>
  );
};

export default CalculatorResult;

