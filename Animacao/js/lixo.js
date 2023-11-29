// document.addEventListener('DOMContentLoaded', function () {
//     const carContainer = document.querySelector('.car-container');
//     const maxRepeat = 5; // Defina o número máximo de repetições desejado
//     let repeatCount = 1;
  
//     // Inicia a animação quando a página é carregada
//     startAnimation();
  
//     function startAnimation() {
//       // Move o carro da esquerda para fora da tela
//       carContainer.style.left = '-100%';
//       carContainer.style.visibility = 'visible'; // Torna o carro visível
  
//       // Chama a próxima etapa da animação após um breve atraso (Movimento para o Centro)
//       setTimeout(() => moveToCenter(), 5000);
//     }
  
//     function moveToCenter() {
//         carContainer.style.visibility = 'visible'; // Torna o carro visível              
//       // Move o carro para o centro da tela
//       carContainer.style.left = '50%';
  
//       // Chama a próxima etapa da animação após um breve atraso (Movimento para a Direita)
//       setTimeout(() => moveRight(), 5000);
//     }
  
//     function moveRight() {
//       // Move o carro para a direita para fora da tela
//       carContainer.style.left = '100%';
  
//       // Incrementa o contador de repetições
//       repeatCount++;
  
//       // Verifica a condição para reiniciar a animação ou encerrar
//       if (repeatCount < maxRepeat) {
//         // Chama a próxima etapa da animação após um breve atraso (Retorno para a Esquerda)
//         setTimeout(() => returnToLeft(), 5000);
//       } else {
//         // Encerra a animação após o número máximo de repetições
//         console.log('Animação encerrada');
//       }
//     }
  
//     function returnToLeft() {
//       // Move o carro de volta para a esquerda para fora da tela
//       carContainer.style.left = '-100%';
//       carContainer.style.visibility = 'hidden'; // Oculta o carro
  
//       // Chama a próxima etapa da animação após um breve atraso (Movimento para o Centro)
//       setTimeout(() => moveToCenter(), 2000);
//     }

//   });
  


  // document.addEventListener('DOMContentLoaded', function () {
  //   const carContainer = document.querySelector('.car-container');
  //   const lapCounter = document.querySelector('.lap-counter');
  //   const maxRepeat = 5; // Defina o número máximo de repetições desejado
  //   let repeatCount = 0;
  
  //   // Inicia a animação quando a página é carregada
  //   startAnimation();
  
  //   function startAnimation() {
  //     // Move o carro da esquerda para fora da tela
  //     carContainer.style.left = '-100%';
  //     carContainer.style.visibility = 'visible';
  
  //     // Chama a próxima etapa da animação após um breve atraso (Movimento para o Centro)
  //     setTimeout(() => moveToCenter(), 5000); // Aumentei o tempo para 5 segundos
  //   }
  
  //   function moveToCenter() {
  //     carContainer.style.visibility = 'visible';
  //     carContainer.style.left = '50%';
  
  //     setTimeout(() => moveRight(), 5000); // Aumentei o tempo para 5 segundos
  //   }
  
  //   function moveRight() {
  //     carContainer.style.left = '100%';
  
  //     repeatCount++;
  
  //     if (repeatCount < maxRepeat) {
  //       setTimeout(() => returnToLeft(), 5000); // Aumentei o tempo para 5 segundos
  //     } else {
  //       // Após o último movimento para a direita, inicia a contagem quando retornar à esquerda
  //       setTimeout(() => setLapCounter(), 5000); // Aumentei o tempo para 5 segundos
  //     }
  //   }
  
  //   function returnToLeft() {
  //     carContainer.style.left = '-100%';
  //     carContainer.style.visibility = 'hidden';
  
  //     setTimeout(() => moveToCenter(), 5000); // Aumentei o tempo para 5 segundos
  //   }
  
  //   function setLapCounter() {
  //     // Atualiza o texto do contador de voltas
  //     lapCounter.textContent = `Carro: ${repeatCount + 1}`;
      
  //     // Reinicia a animação após a contagem de voltas
  //     setTimeout(() => startAnimation(), 5000); // Aumentei o tempo para 5 segundos
  //   }
  // });
