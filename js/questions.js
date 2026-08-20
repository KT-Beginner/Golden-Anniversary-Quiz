const questions = [
    {
        round: "💍 Wedding Day",
        question: "What year did Diane and Robert get married?",
        answers: [
            "1975",
            "1976",
            "1977",
            "1978"
        ],
        correct: 1,
        audio: "audio/bells.mp3",
         manualNext: true,   

        image: "images/quiz/wedding.jpg",
        photoTitle: "💍 Wedding Day 4th September 1976",
        photoText: "⛪ St.Thomas Church",
        revealImageAfterAnswer: true
    },
    {
        round: "💍 Wedding Day",
        question: "How old were the Happy Couple on their wedding day?",
        answers: [
            "Robert was 20 and Diane was 21",
            "Robert was 22 and Diane was 21",
            "Robert was 22 and Diane was 23",
            "Robert was 23 and Diane was 24"
        ],
        correct: 2,
        image: "images/quiz/certificate.jpg",
        photoTitle: "💍 Wedding Record on sheffieldindexers.com",
        revealImageAfterAnswer: true
    },
    {
        round: "💍 Wedding Day",
        question: "Which of these celebrity couples share Diane & Robert’s wedding anniversary of 4th September?",
        answers: [
            "Kevin Bacon & Kyra Sedgwick",
            "David Beckham & Victoria Adams",
            "Prince William & Catherine Middleton",
            "Paul McCartney & Linda Eastman"
        ],
        correct: 0,
        image: "images/quiz/bacon.jpg",
        photoTitle: "💍Kevin Bacon & Kyra Sedgwick married on 4th September 1988",
        photoText: "🥂 Diane & Robert got there first!",
        revealImageAfterAnswer: true
    },
    {
        round: "💍 Wedding Day",
        question: "While Diane & Robert were getting married, Sheffield United were playing Southampton. What was the final score?",
        answers: [
            "Southampton 2–0 Sheffield United",
            "Southampton 1–1 Sheffield United",
            "Southampton 0–1 Sheffield United",
            "Southampton 2–2 Sheffield United"
        ],
        correct: 1,
        image: "images/quiz/united.jpg",
        photoTitle: "⚽ A point for the Blades — and a perfect match for Diane & Robert! 🥂",
        revealImageAfterAnswer: true
    },
    {
        round: "💍 Wedding Day",
        question: "Which song was at Number 1 in the UK charts on 4th September 1976?",
        answers: [
            "Dancing Queen – ABBA",
            "Mull Of Kintyre – Wings",
            "Bohemian Rhapsody – Queen",
            "Under The Moon Of Love – Showaddywaddy"
        ],
        correct: 0,
        audio: "audio/dancingqueen.mp3",
         manualNext: true,   

    image: "images/quiz/dancingqueen.jpg",
    revealImageAfterAnswer: true,
    photoTitle: "🎵 Dancing Queen - ABBA were famous for their extravagant costumes",
    photoText: "Swedish law meant costumes could be deducted against tax so long as they were so outrageous they could not possibly be worn on the street",
    },
    { 
    round: "👨‍👩‍👧 Family",
    question: "Diane once drove off in her Mini. What had she accidentally left on the roof, much to the amusement of passers-by?",
   answers: [
            "A bag of shopping",
            "A handbag",
            "A basket bag",
            "A pair of shoes"
        ],
        correct: 2,
        audio: "audio/bennyhill.mp3",
         manualNext: true,   
        image: "images/quiz/mini.jpg", 
        photoTitle: "🧺 It was still on the roof when Diane arrived",
        photoText: "She must be a steady driver! 😄",
        revealImageAfterAnswer: true
    },
     { 
    round: "👨‍👩‍👧 Family",
    question: "What colour was Andrew's first car?",
   answers: [
            "Green",
            "White",
            "Black",
            "Red"
        ],
        correct: 3,
        image: "images/quiz/andrewcar.jpg", 
        photoTitle: "🚗 Andrew's Red Car Registration : TOY11",
        photoText: "Watch out, Lewis Hamilton!",
        revealImageAfterAnswer: true
    },
{
    round: "👨‍👩‍👧 Family",
    question: "Where was this photograph taken?",
    answers: [
        "Beacon Way",
        "Earl Marshall Road",
        "Smithy Carr Avenue",
        "Stuart Grove"
    ],
    correct: 1,

    image: "images/quiz/diane1985.jpg",

    photoTitle: "🍼 Hello Laura!",
    photoText: "🧸 A new addition to the family",

    showPhotoTitleAfterAnswer: true
},
    {
    round: "👨‍👩‍👧 Family",
    
    question: "What famous toy was released internationally in 1980?",

    image: "images/quiz/toys.jpg",

    revealImageAfterAnswer: true,
    revealImage: "images/quiz/rubikscube.jpg",
   
    answers: [
        "Rubik’s Cube",
        "Space Hopper",
        "Etch A Sketch",
        "Simon"
    ],

    correct: 0,
    photoTitle: "The Rubik’s cube has approximately 43 quintillion possible combinations",
    photoText: "🏖️'And Robert thought he’d solve it before going home…' 😄",
},
{
    round: "👨‍👩‍👧 Family",
    
    question: "What was the name of this family dog?",

    image: "images/quiz/pepper2.jpg",

    revealImageAfterAnswer: true,
    revealImage: "images/quiz/pepper.jpg",
       
    answers: [
        "Sabre",
        "Muttley",
        "Pepper",
        "Snoopy"
    ],

    correct: 2,   

     photoTitle: "🦴 Pepper Ness",
},
 
{ 
    round: "👨‍👩‍👧 Family",
    question: "Which actor played Batman in the 1989 film Batman?",
    
     image: "images/quiz/dellboy.jpg",

    revealImageAfterAnswer: true,
    revealImage: "images/quiz/batman.jpg",

   answers: [
            "Michael Keaton",
            "Christian Bale",
            "Christian Slater",
            "Val Kilmer"
        ],
        correct: 0,
         
        photoTitle: "🦇 The Dynamic Duo!",
        
    },


    {
        round: "👨‍👩‍👧 Family",
       question: "Which famous prison was once considered almost impossible to escape from?",
   
    image: "images/quiz/alcatraz.jpg",
    revealVideo: "videos/jail.mp4",
    revealImage: "images/quiz/jail2.jpg",

    photoTitle: "🔒 Alcatraz had nothing on this safety gate!",
    photoText: "36 men made 14 escape attempts from Alcatraz between 1934 and 1963.  Oscar's already checking for weaknesses in the perimeter… 😄",

     answers: [
        "Devil's Island",
        "Robben Island",
        "Spike Island",
        "Alcatraz"
    ],
    correct: 3,

},
{
     round: "👨‍👩‍👧 Family",
    question: "Approximately how many breaths might a toddler take in an hour?",
     image: "images/quiz/toddler.jpg",
    revealImage: "images/quiz/lilo.jpg",
    revealImageAfterAnswer: true,
    answers: [
        "300",
        "600",
        "1,500",
        "5,000"
    ],
    correct: 2,
    
    photoTitle: "🏖️ And most of them went into this lilo! 😄",
    photoText: "Inflation was a problem back then too",
    
},
{
     round: "👨‍👩‍👧 Family",
question: "At which University did Laura complete her Master's in Teaching and Learning?",
    image: "images/quiz/graduation.jpg",
    
    answers: [
        "University of Sheffield",
        "Durham University",
        "Sheffield Hallam University",
        "University of Leeds"
    ],
    correct: 2,

    photoTitle: "🎓 Mastered It!",
    photoText: "📜 A very proud Graduation Day",
   showPhotoTitleAfterAnswer: true,
},
{
    round: "👨‍👩‍👧 Family",
    question: "What does Oscar's middle name Maximo mean in Spanish?",

    image: "images/quiz/oscar.jpg",

    revealImageAfterAnswer: true,
    revealImage: "images/quiz/oscar2.jpg",
    
    answers: [
        
        "Greatest",
        "Brave one",
        "Beloved one",
        "Little warrior",
    ],

    correct: 0,
    
    photoTitle: " 🍼 Oscar Maximo Walsh 24th January 2025",
    
    showPhotoTitleAfterAnswer: true,

     photoText: "🧸 Welcome to the world Oscar!",
    
},  
{
    round: "👨‍👩‍👧 Family",
    question: "Who is the 'odd one out' in this photo?",

    image: "images/quiz/laura40.jpg",

    revealImageAfterAnswer: true,
    revealImage: "images/quiz/laura402.jpg",
    
    answers: [
        
        "Laura",
        "Kai",
        "Elise",
        "Robert"
    ],

    correct: 2,
    
    photoTitle: "🎂 Laura's 40th, 15th June 2025",
    
    showPhotoTitleAfterAnswer: true,

     photoText: "🍾 Elise wasn't actually there. We added her to the photo!",
    
},
{
    round: "👨‍👩‍👧 Family",
    question: "Laura's 40th Birthday also coincided with which other occasion?",

    image: "images/quiz/fathersday.jpg",
   
    answers: [
        
        "Mother's Day",
        "Father's Day",
        "Grandparents' Day",
        "Siblings Day"
    ],

    correct: 1,
    
    photoTitle: "👨 Father's Day, June 2025",
    
    showPhotoTitleAfterAnswer: true,
    
},
{
    round: "👨‍👩‍👧 Family",
    question: "Who was Oscar meeting for the very first time in this festive photo?",

    image: "images/quiz/santa1.jpg",

    revealImageAfterAnswer: true,
    revealImage: "images/quiz/santa2.jpg",
    
    answers: [
        
        "A Christmas Elf",
        "A Snowman",
        "Santa",  
        "Rudolph",
    ],

    correct: 2,
    
    photoTitle: "🎅 Ho Ho... NO!",
      
     photoText: "🎄 11 months old — and deciding whether Santa could be trusted!",
    
},

    {
        round: "🏖️ Holidays",
    question: "Which famous Venetian landmark can be seen behind Robert and Andrew?",
    image: "images/quiz/venice.jpg",
    
    answers: [
        "St Mark's Basilica",
        "Rialto Bridge",
        "Santa Maria della Salute",
        "San Giorgio Maggiore"
    ],
    correct: 0,

    photoTitle: "⛪ Venice, September 1983",
    photoText: "🐦 Feeding time in St Mark's Square.  This Venice tradition was banned in 2008",
   showPhotoTitleAfterAnswer: true,
},    
{
        round: "🏖️ Holidays",
    question: "In 1920, which country won the last Olympic tug-of-war gold medal?",
    image: "images/quiz/1920rings.jpg",
    revealImage: "images/quiz/tug.jpg",
    revealImageAfterAnswer: true,

    answers: [
        "USA",
        "France",
        "Sweden",
        "Great Britain"
    ],
    correct: 3,
    

    photoTitle: "🏅 Andrew and Robert going for Gold",
    photoText: "Tug-of-war was an event at five Olympic Games between 1900 and 1920",
   
},  
{
        round: "🏖️ Holidays",
    question: "How is a traditional pedalo powered?",
    image: "images/quiz/pedalohire.jpg",
revealImage: "images/quiz/pedalo.jpg",
 revealImageAfterAnswer: true,

    answers: [
        "A small motor",
        "Foot pedals",
        "Wind power",
        "Hand-operated paddles"
    ],
    correct: 1,
    
    photoTitle: "🚤 Pedal Power in Ibiza ",
    
},  
{
        round: "🏖️ Holidays",
    question: "What is guaranteed on a British caravan holiday?",
image: "images/quiz/eastcoast.jpg",
revealImage: "images/quiz/caravan.jpg",
 revealImageAfterAnswer: true,

    answers: [
        "Wall-to-wall sunshine",
        "Peace and quiet",
        "At least one day of rain",
        "An empty beach"
        ],
        correct: 2,
    
    photoTitle: "🌞 It usually rains",
    photoText: "But not today!",
   
},  
{
        round: "🏖️ Holidays",
    question: "Which Japanese company made its first complete motorcycle in 1949?",
image: "images/quiz/vintagehonda.jpg",
revealImage: "images/quiz/honda.jpg",
 revealImageAfterAnswer: true,


    answers: [
        "Yamaha",
        "Suzuki",
        "Kawasaki",
        "Honda"
    ],
    correct: 3,
    
    photoTitle: "🏍️ Born to be Wild!",
    photoText: "Andrew aged 5",
    
},  
{
        round: "🏖️ Holidays",
    question: "Where was this photo taken?",
     image: "images/quiz/train.jpg",

     revealImageAfterAnswer: true,
    revealImage: "images/quiz/postcard.jpg",
       
    answers: [
        "Great Yarmouth",
        "Skegness",
        "Majora",
        "Ingoldmells"
    ],
    correct: 1,
   
    photoTitle: "🚂 1980s postcard from Skegness",
},  
{
        round: "🏖️ Holidays",
    question: "Robert and Andrew's T-shirts give a big clue — which year was this holiday?",
    image: "images/quiz/ibiza.jpg",
    
    revealImageAfterAnswer: true,
    revealImage: "images/quiz/cardibiza.jpg",

    answers: [
        "1986",
        "1988",
        "1990",
        "1992"
    ],
    correct: 2,
    
   photoTitle: "⚔️ 1st Division — Here We Come!",
    photoText: "The Blades were going up… and Robert & Andrew were ready! ⚽"
},
{
        round: "🏖️ Holidays",
    question: "Where was this holiday? Hint : renowned for its strong trade winds, windsurfing and spectacular sand dunes?",
    image: "images/quiz/pool.jpg",
    
    revealImageAfterAnswer: true,
    revealImage: "images/quiz/ventura.jpg",
    
   
    answers: [
        "Fuerteventura",
        "Tenerife",
        "Lanzarote",
        "La Palma"
    ],
    correct: 0,
    photoTitle: "🏖️ Fuerteventura - sand everywhere!",
    
},

{
        round: "🏖️ Holidays",
    question: "👕 We've blanked out Andrew's shirt. What was the original design?",
    image: "images/quiz/shirt1.jpg",
    
    revealImageAfterAnswer: true,
    revealImage: "images/quiz/shirt2.jpg",
    answers: [
        "Red with yellow flowers",
        "Animal from The Muppet Show",
        "Scooby-Doo",
        "Marvel superheroes"
    ],
    correct: 1,
    audio: "audio/muppets.mp3",
         manualNext: true,   
   photoTitle: "🌴Morocco September 2025",
    photoText: "🥁 AN-I-MAL! AN-I-MAL!",
},
{ 
    round: "📅 Guess the Year",
    question: "The LEGO building figure was launched in 1974.  What year were they equipped with moveable limbs and simple facial expressions?",
    image: "images/quiz/lego.jpg",
     revealImageAfterAnswer: true,
    revealImage: "images/quiz/lego2.jpg",
    
    answers: [
        "1978",
        "1979",
        "1980",
        "1981"
    ],
    correct: 0,
    photoTitle: "🧱 The next generation of LEGO builders",
     
},
{ 
    round: "📅 Guess the Year",
    question: "Which year did Kylie Minogue's song 'I Should Be So Lucky' reach number 1 in the UK?",
    image: "images/quiz/kyliealbum.jpg",
     revealImageAfterAnswer: true,
    revealImage: "images/quiz/kylie.jpg",
   answers: [
            "1987",
            "1988",
            "1989",
            "1990"
        ],
        correct: 1,
        photoTitle: "🩷 'Step Back in Time'… when Kylie hats were essential fashion", 
                
        revealImageAfterAnswer: true
    },

{ 
    round: "📅 Guess the Year",
    question: "Sky Television launched in the UK the same year as this holiday. Can you remember when?",
    image: "images/quiz/pollensa1.jpg",
     revealImageAfterAnswer: true,
    revealImage: "images/quiz/pollensa2.jpg",
    
    answers: [
        "1987",
        "1988",
        "1989",
        "1990"
    ],
    correct: 2,
    photoTitle: "🏖️ Puerto Pollensa 1989",
     
},
{
     round: "📅 Guess the Year",
        question: "In which year did Diane & Robert celebrate their 'Ruby' wedding anniversary?",
         image: "images/quiz/ruby.jpg",
     revealImageAfterAnswer: true,
    revealImage: "images/quiz/olympicteam.jpg",
        answers: [
            "2006",
            "2011",
            "2016",
            "2021"
        ],
        correct: 2,
        

    photoTitle: "🥇  Serving Up a Golden Summer! 2016",  
    photoText: "🎾 Andy Murray lifted the Wimbledon trophy and struck gold in Rio, as Team GB celebrated an incredible 67 Olympic medals",
    showPhotoTitleAfterAnswer: true
},  
{
     round: "📅 Guess the Year",
        question: "The Children in Need Rickshaw Challenge began in which year?",
         image: "images/quiz/pudsey.jpg",
     revealImageAfterAnswer: true,
    revealImage: "images/quiz/rickshaw.jpg",

        answers: [
            "1981",
            "1991",
            "2001",
            "2011"
        ],
        correct: 3,
        
    photoTitle: "🧸 The BBC challenge began in 2011, when Matt Baker rode a rickshaw from Edinburgh to London",  
    photoText: "🚲 The Ness Family completed their challenge years before",
    showPhotoTitleAfterAnswer: true
},
{
 round: "🎵 Music Round",
    question: "'How Deep Is Your Love' by the Bee Gees featured on the soundtrack of which famous 1977 film?",
    answers: [
        "Grease",
        "Footloose",
        "Dirty Dancing",
        "Saturday Night Fever"
    ],
    correct: 3,

    audioQuestion: "audio/beegees-intro.mp3",
    audioAnswer: "audio/beegees-answer.mp3",
    audioFull: "audio/beegees-full.mp3",
    image: "images/quiz/beegees.jpg",
    revealImageAfterAnswer: true,
    photoTitle: "🎤 How Deep Is Your Love",
    photoText: "This became one of the Bee Gees' biggest hits."
},
{
 round: "🎵 Music Round",
    question: "This song from 1983 is particularly appropriate for the quiz.  What was the band?",
    answers: [
        "Duran Duran",
        "ABC",
        "Spandau Ballet",
        "Human League"
    ],
    correct: 2,

    audioQuestion: "audio/gold-intro.mp3",
    audioAnswer: "audio/gold-answer.mp3",
    audioFull: "audio/gold-full.mp3",
    image: "images/quiz/gold.jpg",
    revealImageAfterAnswer: true,
    photoTitle: "🎤 Spandau Ballet - Gold",
    photoText: "🎬 Gary Kemp has said that when he wrote “Gold” he was trying to write something like a James Bond theme"
},
{
 round: "🎵 Music Round",
    question: "This song by Huey Lewis & The News was the theme song from which blockbuster film from the year Laura was born?",
    answers: [
        "Ghostbusters",
        "Top Gun",
        "Back to the Future",
        "The Goonies"
    ],
    correct: 2,

    audioQuestion: "audio/poweroflove-intro.mp3",
    audioAnswer: "audio/poweroflove-answer.mp3",
    audioFull: "audio/poweroflove-full.mp3",
    image: "images/quiz/poweroflove.jpg",
    revealImageAfterAnswer: true,
    photoTitle: "🍿 Back to the Future, 1985",
    photoText: "🎬 Huey Lewis himself appears as the school audition judge who rejects the band for being 'too darn loud!'"
},
{
 round: "🎵 Music Round",
    question: "This song spent 15 consecutive weeks at No. 1 in the UK after featuring on the soundtrack of which Hugh Grant film?",
    answers: [
        "Notting Hill",
        "Four Weddings and a Funeral",
        "Bridget Jones’s Diary",
        "Love Actually"
    ],
    correct: 1,

    audioQuestion: "audio/wetwetwet-intro.mp3",
    audioAnswer: "audio/wetwetwet-answer.mp3",
    audioFull: "audio/loveisallaroundmix.mp3",
    image: "images/quiz/4weddings.jpg",
    revealImageAfterAnswer: true,
    photoTitle: "Wet Wet Wet's biggest hit",
    photoText: "First recorded by the Troggs and later parodied by Bill Nighy in Love Actually.  Play Full Clip to hear them all"
},
{
 round: "🎵 Music Round",
    question: "Here's one Laura might remember. Who was this band?",
    answers: [
        "Hanson",
        "The Jacksons",
        "McFly",
        "Boyzone"
    ],
    correct: 0,

    audioQuestion: "audio/mmmbop-intro.mp3",
    audioAnswer: "audio/mmmbop-answer.mp3",
    audioFull: "audio/mmmbop-full.mp3",
    image: "images/quiz/hanson.jpg",
    revealImageAfterAnswer: true,
    photoTitle: "🎵 MMMBop.  In 1997 Hanson became the youngest group ever to have a UK No.1 album",
    photoText: "🎸 Isaac, Taylor & Zac Hanson still perform together today"
},
{
 round: "🎵 Music Round",
    question: "And here's one Oscar MMMight bop to. What is the name of the song?",
     image: "images/quiz/golden.jpg",
    answers: [
        "Up, Up, Up",
        "Demon Hunters",
        "Now I'm Shining",
        "Golden"
    ],
    correct: 3,

    audioQuestion: "audio/golden-intro.mp3",
    revealVideo: "videos/golden.mp4",
    revealImage: "images/quiz/goldenend.jpg",
    audioFull: "audio/golden-full.mp3",
   
    revealImageAfterAnswer: true,
    photoTitle: "🎵 HUNTR/X – “Golden” (2025)",
    photoText: "🎬 From the K-pop Demon Hunters animated film. Still a bit scary for Oscar we think!"
},
{
    round: "✅ True or False",
    type: "truefalse",

    question: "This baby is Andrew",

    image: "images/quiz/babylaura.jpg",

    revealImageAfterAnswer: true,
    revealImage: "images/quiz/babyandrew.jpg",
   
    answers: [
        "True",
        "False"
    ],

    correct: 1,

     photoTitle: "🧸 No it was Laura. This is Andrew's baby photo",
    photoText: "🍼 Hello Andrew!",
},
{ 
    round: "✅ True or False",
    type: "truefalse",

    question: "The nautical term 'Starboard' means the left-hand side of a boat when facing forwards",

    image: "images/quiz/port.jpg",

    revealImageAfterAnswer: true,
    revealImage: "images/quiz/boat.jpg",

   answers: [
            "True",
            "False"
        ],
        correct: 1,
       
        photoTitle: "🚣 Ahoy, shipmates!  Port is left",
        photoText: " 🦆 🦆 'We’re just trying not to hit the ducks!'",
        
    },


{
        round: "✅ True or False",
        type: "truefalse",

        question: "Fatboy Slim headlined the first day of Tramlines 2026",

        image: "images/quiz/tramlines.jpg",

    revealImageAfterAnswer: true,
    revealImage: "images/quiz/tramlines2.jpg",

        answers: [
        "True",
        "False"
    ],
        correct: 0,
  

        photoTitle: "🎵 Fatboy Slim",
        photoText: "😄 But Oscar was the star of the show ⭐",
        revealImageAfterAnswer: true
    },
{
    round: "✅ True or False",
    type: "truefalse",
    question: "This photo was taken at Diane's 60th Birthday party.",
    
    image: "images/quiz/diane60.jpg",  
    revealImageAfterAnswer: true,
    revealImage: "images/quiz/diane602.jpg",

    answers: [
        "True",
        "False"
    ],
    correct: 0,

    photoTitle: "🎂 September 2012",
    photoText: " 🕯️ Happy 60th Birthday Diane!",
    
},

{
    round: "🎬 What Happened Next?",
    type: "video",

    question: "How many times did Oscar 'peekaboo'?",

    startImage: "images/quiz/peekaboo1.jpg",
    video: "videos/peekaboo1.mp4",
    endImage: "images/quiz/peekaboo2.jpg",

    revealVideo: "videos/peekaboo2.mp4",
    revealImage: "images/quiz/peekaboo3.jpg",

    photoTitle: "🫣 3 times... eventually!",
    
    answers: [
        "Two",
        "Three",
        "Four",
        "Five"
    ],

    correct: 1,
    
    explanation: "..."
},
{
    round: "🎬 What Happened Next?",
    
    question: "What did Oscar do next?",

    startImage: "images/quiz/raspberry1.jpg",
    revealVideo: "videos/raspberry.mp4",
    revealImage: "images/quiz/raspberry2.jpg",

    photoTitle: "😮 Well, that's what he thought of that",
    photoText: "How cheeky! 😂",

    answers: [
        "He sneezed",
        "He hiccupped",
        "He blew a raspberry",
        "He stuck his tongue out"
    ],

    correct: 2,
    
    explanation: "..."
},

{
  round: "🎬 What Happened Next?",
  
     question: "Also on a raspberry theme.. How many pieces of raspberry did Oscar throw after this clip?",
     type: "video",

    startImage: "images/quiz/throwing1.jpg",
    video: "videos/throwing1.mp4",
    endImage: "images/quiz/throwing2.jpg",

    revealVideo: "videos/throwing2.mp4",
    revealImage: "images/quiz/throwing3.jpg",
    photoTitle: "😒 Not hungry today",
    photoText: "Gran & Grandad teaching me bad habits! 😂",

     answers: [
        "One",
        "Two",
        "Three",
        "None - he ate them all"
    ],
    correct: 2,

},

{
    round: "❤️ Diane and Robert in 2026",
    question: "What are Bluey's mum and dad called?",

    image: "images/quiz/bluey.jpg",

    revealImageAfterAnswer: true,
    revealImage: "images/quiz/bluey2.jpg",
    
    answers: [
        
        "Coco & Rusty",
        "Laura & Matthew",
        "Chilli & Bandit",  
        "Diane & Robert",
    ],

    correct: 2,
    
    photoTitle: "🐾 For Real Life!",
      
     photoText: "💙 Bluey bringing the generations together",
    
},
{
    round: "❤️ Diane and Robert in 2026",
    question: "Which Spanish sports personality was born in Mallorca?",

    image: "images/quiz/mallorcacartoon.jpg",
    caption: "🏖️ Mallorca family holiday 2026",

    revealImageAfterAnswer: true,
    revealImage: "images/quiz/nadal.jpg",
    
    answers: [
        
        "Seve Ballesteros",
        "Carlos Alcaraz",
        "Fernando Alonso",  
        "Rafael Nadal",
    ],

    correct: 3,
    
    photoTitle: "🎾 Tennis star Rafael Nadal was born in Manacor, Mallorca, in 1986",
      
     photoText: "😄 Rafa had his work cut out with this lot!",
    
},
{
    round: "❤️ Diane and Robert in 2026",
    question: "Generations of children have had their feet measured in Clarks — but when was the famous Clarks children's foot-measuring gauge introduced?",

    image: "images/quiz/firstshoes.jpg",

    revealImageAfterAnswer: true,
    revealImage: "images/quiz/firstshoes2.jpg",
    
    answers: [
        
        "1925",
        "1935",
        "1945",  
        "1955",
    ],

    correct: 2,
    
    photoTitle: "👟 Little feet, big milestone — My first Clarks",
      
     photoText: "New shoes, new adventures!",
    
},
 {
    round: "❤️ Diane and Robert in 2026",
    question: "❤️ On 4th September 2026, how many days have Diane & Robert been married? (You may use a calculator!)",
  
    image: "images/quiz/dianerobert.jpg",  
    
    revealImageAfterAnswer: true,
    revealImage: "images/quiz/anniversarytoast.jpg",
  
    answers: [
        "18,250 days",
        "18,262 days",
        "18,263 days",
        "18,270 days"
    ],

    correct: 1,

    photoTitle: "💛 50 wonderful years • 18,262 days • A lifetime of love, laughter and memories 💛",
    photoText: "That's: 50 × 365 = 18,250, plus 12 leap days = 18,262 days!",
    
    showPhotoTitleAfterAnswer: true,
        
},
];