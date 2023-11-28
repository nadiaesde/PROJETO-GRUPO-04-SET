    document.addEventListener('DOMContentLoaded', function () {
    const carContainer = document.querySelector('.car-container');
    const lapCounter = document.querySelector('.lap-counter');
    const carSound = document.getElementById('carSound');

    const maxRepeat = 100; // Defina o número máximo de repetições desejado
    let repeatCount = 0;

   lapCounter.textContent = `Carro - ${repeatCount}`;

    // Atualiza o texto do contador de voltas inicial
    updateLapCounter();

  
    // Inicia a animação quando a página é carregada
    startAnimation();

    function updateLapCounter() {
      // Atualiza o texto do contador de voltas
      lapCounter.textContent = `Carro`; // - ${repeatCount + 1}`;
    }
  
    function startAnimation() {

      // Move o carro da esquerda para fora da tela
      console.log('start abunatuib: carro - ${repeatCount}'); //******************** */
      carContainer.style.left = '-100%';
      carContainer.style.visibility = 'visible';
      
      // Chama a próxima etapa da animação após um breve atraso (Movimento para o Centro)
      setTimeout(() => moveToCenter(), 2000); // Aumentei o tempo para 5 segundos
    }
  
    function moveToCenter() {
      console.log(`Move to Center: Carro - ${repeatCount}`); //******************** */      
      carContainer.style.visibility = 'visible';
      carContainer.style.left = '50%';
      setTimeout(() => moveRight(), 10000); // Aumentei o tempo para 5 segundos
      setTimeout(() => showCarWashElements(), 2000);

    }
  
    function moveRight() {
      console.log(`Move Right: Carro - ${repeatCount}`);
      carContainer.style.left = '100%';
      repeatCount++;
  
      if (repeatCount < maxRepeat) {
        setTimeout(() => returnToLeft(), 2000); // Aumentei o tempo para 5 segundos

      } else {
        // Após o último movimento para a direita, inicia a contagem quando retornar à esquerda
        setTimeout(() => setLapCounter(), 2000); // Aumentei o tempo para 5 segundos
      }
    }
  
    function returnToLeft() {
      console.log(`Return to Left: Carro - ${repeatCount}`);
      carContainer.style.left = '-100%';
      carContainer.style.visibility = 'hidden';
      setTimeout(() => moveToCenter(), 2000); // Aumentei o tempo para 5 segundos
    }
  
    function setLapCounter() {
      console.log( `Set Lap Counter: Carro - ${repeatCount + 1}`);

//      lapCounter.textContent = `Carro - ${repeatCount + 1}`; //******************************************** */

      updateLapCounter();
      setTimeout(() => {
        // Zera o contador e reinicia a animação
        repeatCount = 0;
        startAnimation();
      }, 2000);

      // Atualiza o texto do contador de voltas
      lapCounter.textContent = `Carro`; // - ${repeatCount + 1}`;
      
      // Reinicia a animação após a contagem de voltas
//********************** */      setTimeout(() => startAnimation(), 2000); // Aumentei o tempo para 5 segundos
    }

    function showCarWashElements() {
      const carWash = document.querySelector('.car-wash');
      carWash.style.visibility = 'visible';
      
      // Adicione a lógica para mover os empregados para uma posição visível
      // Você pode usar setTimeout e animações CSS semelhantes às usadas para o carro
    }
  

  });
  
