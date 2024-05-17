const perguntas = [
    {
      pergunta: "In the pizza day, who made the best pizza?",
      respostas: [
        "Ivan",
        "Bex",
        "Liv"
      ],
      correta: 0,
    },
    {
      pergunta: "Who snores more?",
      respostas: [
        "Sophia",
        "Ollie",
        "Rom"
      ],
      correta: 1,
    },
    {
      pergunta: "How many hair does Ollie have per square centimetre?",
      respostas: [
        "1000",
        "550",
        "25.000"
      ],
      correta: 2,
    },
    {
      pergunta: "What is Sophia's favourite drink?",
      respostas: [
        "Coffee",
        "Tea",
        "Horlicks"
      ],
      correta: 0,
    },
    {
      pergunta: "How many time can UK fit into Brazil?",
      respostas: [
        "35",
        "27",
        "41"
      ],
      correta: 1,
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  // Looping
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
   for(let resposta of item.respostas) {
     const dt = quizItem.querySelector('dl dt').cloneNode(true)
     dt.querySelector('span').textContent = resposta
     dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
     dt.querySelector('input').value = item.respostas.indexOf(resposta)
     dt.querySelector('input').onchange = (event) => {
       const estaCorreta = event.target.value == item.correta
  
       corretas.delete(item)
       if(estaCorreta) {
        corretas.add(item) 
       }
       mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
     }
  
  
     quizItem.querySelector('dl').appendChild(dt)
  
   }
  
  quizItem.querySelector('dl dt').remove()
  
  
  
  // coloca pergunta na tela
  quiz.appendChild(quizItem)
  }
  
