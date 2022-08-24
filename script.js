// Selectorleri seçtim

let questionDOM=document.querySelector(".question");
let cardBodyDOM=document.querySelector(".card-body")
let ulDOM=document.querySelector("#list");
let buttonDOM=document.querySelectorAll(".alt");
let liDOM=document.querySelectorAll(".choise");

// Soru sayaçları ve doğru yanlış sayaçları oluşturdum.
let counter=0;
let trueCounter=0;
let falseCounter=0;

// Soruların içerisinde array olarak saklandığı obje oluşturdum.
let questions=
[
  {
    question:"Where is the capital city of the Turkey ?",
    answer:["Konya","Istanbul","Ankara","Izmir"],
    correctAnswer:2,
  },
  {
    question:"What is the world's most populated country?",
    answer:["India","China","Russia","China"],
    correctAnswer:1,
  },
  {
    question:"What is the World's Smallest Country?",
    answer:["Vatican City","Monaco","Luxembourg","Lichtenstein"],
    correctAnswer:0,
  },
  {
    question:"In which country is the world's highest waterfall?",
    answer:["Venezuela","Brazil","South Africa","USA"],
    correctAnswer:0,
  },
  {
    question:"What is the capital city of Australia?",
    answer:["Sydney","Adelaide","Canberra","Melbourne"],
    correctAnswer:2,
  },
  {
    question:"What country has the greatest number of active volcanoes?",
    answer:["Indonesia","Italy","Japan","Philippines"],
    correctAnswer:0,
  },
  {
    question:"Where was the hottest temperature ever recorded ?",
    answer:["India","Peru","Mexico","Libya"],
    correctAnswer:3,
  },
  {
    question:"Which currency is used in Spain? ",
    answer:["Dollar","Euro","Pound","Lira"],
    correctAnswer:1,
  },
  {
    question:"How many stars are on the flag of the United States? ",
    answer:["45","47","49","50"],
    correctAnswer:3,
  },
  {
    question:"In which country was Pablo Picasso born? ",
    answer:["Spain","Italy","Mexico","Germany"],
    correctAnswer:0,
  },
]

// Buttonlara click eventi verdim.
buttonDOM.forEach(element => {
  element.addEventListener("click",function(e)
  {    
    // Son soruya gelince yapacaklarımı kontrol ettiğim if yapısı.
    if(counter==questions.length-1)
    {

      // Eğer tıklanan şıkın içeriği ile sorular objesindeki sorunun doğru cevabı eşitse doğru sayısını bir arttır değilse yanlış sayısını bir arttır.
      e.target.innerHTML==questions[counter].answer[questions[counter].correctAnswer]?trueCounter++:falseCounter++;
      
      // Sorular bittiğinde ekrana gelen görselin içeriği
      questionDOM.innerHTML=`<h1 style="font-size:50px;" class="h1"><strong> Score Board</strong> </h1>`;

      cardBodyDOM.classList.add("score-board");

      ulDOM.innerHTML=`<strong style="color:#7FB77E">Number of Correct Answers:${trueCounter}</strong>
      <strong style="color:#E64848"> Number of Wrong Answers:${falseCounter}</strong>`

      ulDOM.classList.add("score");
      
    }
    // Eğer tıklanan şık ile sorunun doğru cevabı uyuşuyorsa bu if yapısı çalışacak.
    else if(e.target.innerHTML==questions[counter].answer[questions[counter].correctAnswer])
    {
      //Eğer doğruysa soru counterını bir arttırdıkki diğer soruya geçebilelim.
      counter++;
      // Doğru sayısını da arttırdık.
      trueCounter++;
      // Diğer soruları ekrana getiren fonksiyonu çağırdım.
      updateQuestion();        
    }
        
    // Eğer bu koşullardan birine girmiyorsa yanlış işaretlenmiştir. Diğer soruyu görmek için counterı bir arttırıyoruz ve yanlış sayısını da bir arttıyoruz.Bir de soruyu güncelliyoruz fonksiyon ile.
    else
    {
      counter++;
      falseCounter++;
      updateQuestion();
    }  
  });
})

updateQuestion()

// Sorunun görüneceği yeri dinamik olarak değiştirmeyi sağlayan fonksiyon.
function updateQuestion()
{
  questionDOM.innerHTML=`${questions[counter].question}`

  // Şıkları foreach yardımıyla ekrana getirmeyi sağladım.
  liDOM.forEach((element,index)=> {
    element.innerHTML=`${questions[counter].answer[index]}`
  });
}