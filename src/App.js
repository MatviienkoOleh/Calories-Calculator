import { useEffect, useState } from "react";
import "./App.css";
import Calculator from "./components/Calculator/Calculator";
import CalculatorResult from "./components/CalculatorResult/CalculatorResult";
import FoodDiet from "./components/FoodDiet/FoodDiet";

function App() {
  const [characteristics, setCharacteristics] = useState({
    gender: "",
    weight: 0,
    age: 0,
    height: 0,
    futureWeight: 0,
    goal: "",
    activity: "",
  });
  const [normalCalories, setNormalCalories] = useState(0);
  const [normalKDj, setNormalKDj] = useState(0);
  const [riseCalories, setRiseCalories] = useState(0);
  const [riseKDj, setRiseKDj] = useState(0);
  const [declineCalories, setDeclineCalories] = useState(0);
  const [declineKDj, setDeclineKDj] = useState(0);
  const [typeDiet, setTypeDiet] = useState({
    protein: 0,
    carbs: 0,
    fat: 0,
    type: "",
    show: false,
  });
  const [diet, setDiet] = useState({
    protein: "",
    carbs: "",
    proteinPerServing: 0,
    carbsPerServing: 0,
  });

  const generateDiet = () => {
    if (typeDiet.type === "normal") {
      setTypeDiet({
        ...typeDiet,
        protein: Math.round((normalCalories * 0.15) / 4),
        carbs: Math.round((normalCalories * 0.55) / 4),
        fat: Math.round((normalCalories * 0.3) / 9),
        show: true,
      });
    }
    if (typeDiet.type === "rise") {
      setTypeDiet({
        ...typeDiet,
        protein: Math.round((riseCalories * 0.3) / 4),
        carbs: Math.round((riseCalories * 0.5) / 4),
        fat: Math.round((riseCalories * 0.2) / 9),
        show: true,
      });
    }
    if (typeDiet.type === "decline") {
      setTypeDiet({
        ...typeDiet,
        protein: Math.round((declineCalories * 0.5) / 4),
        carbs: Math.round((declineCalories * 0.3) / 4),
        fat: Math.round((declineCalories * 0.2) / 9),
        show: true,
      });
    }
  };
  const getGender = (event) => {
    event.preventDefault();
    let newObj = { ...characteristics };
    newObj.gender = event.target.value;
    setCharacteristics(newObj);
  };
  const handleChangeTypeDiet = ({ target: { value, id } }) => {
    setTypeDiet({ ...typeDiet, [id]: value });
  };
  const handlerChange = ({ target: { value, id } }) => {
    setCharacteristics({ ...characteristics, [id]: value });
  };
  const handleChangeDiet = ({ target: { value, id } }) => {
    setDiet({ ...diet, [id]: value });
  };
  const caloriesCount = () => {
    const { weight, height, age, gender, activity } = characteristics;
    let result = 0;
    if (gender === "man") {
      result = Math.round(
        (66.5 +
          13.75 * Number(weight) +
          5.003 * Number(height) -
          6.775 * Number(age)) *
          Number(activity)
      );
    }
    if (gender === "girl") {
      result = Math.round(
        (655.1 +
          9.563 * Number(weight) +
          1.85 * Number(height) -
          4.676 * Number(age)) *
          Number(activity)
      );
    }
    let rateOfResult = Math.round((result * 10) / 100);

    let riseCal = result + rateOfResult;
    let declineCal = result - rateOfResult;

    let newNormalKDJ = Math.round(result * 4.1868);
    let newRiseKDJ = Math.round(riseCal * 4.1868);
    let newDeclineKDJ = Math.round(declineCal * 4.1868);

    setNormalCalories(result);
    setRiseCalories(riseCal);
    setDeclineCalories(declineCal);

    setNormalKDj(newNormalKDJ);
    setRiseKDj(newRiseKDJ);
    setDeclineKDj(newDeclineKDJ);
  };

  useEffect(() => {
    if (diet.protein === "fish") {
      let newObj = {
        ...diet,
        proteinPerServing: Math.round(((typeDiet.protein - 30) / 20 / 5) * 100),
      };
      setDiet(newObj);
    }
    if (diet.protein === "pork") {
      let newObj = {
        ...diet,
        proteinPerServing: Math.round(((typeDiet.protein - 30) / 23 / 5) * 100),
      };
      setDiet(newObj);
    }
    if (diet.protein === "beef") {
      let newObj = {
        ...diet,
        proteinPerServing: Math.round(((typeDiet.protein - 30) / 26 / 5) * 100),
      };
      setDiet(newObj);
    }
    if (diet.protein === "chicken") {
      let newObj = {
        ...diet,
        proteinPerServing: Math.round(((typeDiet.protein - 30) / 25 / 5) * 100),
      };
      setDiet(newObj);
    }
  }, [typeDiet.protein, diet.protein]);

  useEffect(() => {
    if (diet.carbs === "rice") {
      let newObj = {
        ...diet,
        carbsPerServing: Math.round(((typeDiet.carbs - 70) / 70 / 4) * 100),
      };
      setDiet(newObj);
    }
    if (diet.carbs === "bulgur") {
      let newObj = {
        ...diet,
        carbsPerServing: Math.ceil(((typeDiet.carbs - 70) / 60 / 4) * 100),
      };
      setDiet(newObj);
    }
    if (diet.carbs === "buckwheat") {
      let newObj = {
        ...diet,
        carbsPerServing: Math.ceil(((typeDiet.carbs - 70) / 72 / 4) * 100),
      };
      setDiet(newObj);
    }
    if (diet.carbs === "spaghetti") {
      let newObj = {
        ...diet,
        carbsPerServing: Math.ceil(((typeDiet.carbs - 70) / 32 / 4) * 100),
      };
      setDiet(newObj);
    }
  }, [typeDiet.carbs, diet.carbs]);

  useEffect(() => {
      caloriesCount();
  }, [characteristics, caloriesCount]);

  return (
    <div className="main_Wrapper">
      <section className="calculator_Section">
        <Calculator
          characteristics={characteristics}
          handlerChange={handlerChange}
          getGender={getGender}
        />
        <CalculatorResult
          handleChangeTypeDiet={handleChangeTypeDiet}
          normalCalories={normalCalories}
          riseCalories={riseCalories}
          declineCalories={declineCalories}
          normalKDj={normalKDj}
          riseKDj={riseKDj}
          declineKDj={declineKDj}
          generateDiet={generateDiet}
          typeOfDiet={typeDiet}
        />
      </section>
      <section
        style={{ display: typeDiet.show ? "block" : "none" }}
        className="food_Diet_Section"
      >
        <FoodDiet
          diet={diet}
          typeDiet={typeDiet}
          handleChangeDiet={handleChangeDiet}
        />
      </section>
    </div>
  );
}

export default App;
