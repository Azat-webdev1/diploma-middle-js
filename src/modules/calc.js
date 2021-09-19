const calc = () => {
  const calcBlock = document.querySelector('#calc'),//блок калькулятора
    calcType = document.querySelector('#calc-type'),//селект1
    calcTypeMaterial = document.querySelector('#calc-type-material'),//селект2
    calcInput = document.querySelector('#calc-input'),//площадь
    calcSelectAll = document.querySelectorAll('select.form-control'),//очистка инпутов
    totalValue = document.getElementById('calc-total');//итог

  const countSum = () => {
    let total = 0;
      
    const typeValue = calcType.options[calcType.selectedIndex].value;
    const typeValueMaterial = calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value;
    let calcInputValue = calcInput.value;
      
    total = typeValue * typeValueMaterial * calcInputValue;
    totalValue.value = +total.toFixed(1);
  };

  const setListener = (element, type, handler) => {
    if (!element) {
      return;
    }
    element.addEventListener(type, handler);
    return () => {
      element.removeEventListener(type, handler);
    };
  };

  setListener(calcBlock, 'change', (e) => {
    let target = e.target;
    if (target.matches('#calc-type') || target.matches('#calc-type-material') ||
    target.matches('#calc') || target.matches('#calc-input')) {
      countSum();
    }
  });

  calcSelectAll.forEach((elem) => {
    setListener(elem , 'change', (e) => {
      let target = e.target;
      if (target.selectedIndex === -1) {
        calcInput.value = '';
        totalValue.value = '';
        calcTypeMaterial.value = '--';
        calcType.value = '--';
      }
    });
  });
  
  const inputCalc = () => {
    setListener(calcBlock, 'input', (e) => {
      e.target.value = e.target.value.replace(/[^\d\.]/g, '');
    });
  };
  inputCalc();

};

export default calc;