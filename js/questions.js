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
        photoText: "⛪ St.Thomas Church, Brightside.",
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
        photoTitle: "💍 Wedding Record",
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
        photoTitle: "💍Kevin Bacon & Kyra Sedgwick married on 4 September 1988",
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
            "Dancing Queen – Abba",
            "Mull Of Kintyre – Wings",
            "Bohemian Rhapsody – Queen",
            "Under The Moon Of Love – Showaddywaddy"
        ],
        correct: 0,
        audio: "audio/dancingqueen.mp3",
         manualNext: true,   

    image: "images/quiz/dancingqueen.jpg",
    revealImageAfterAnswer: true,
    photoTitle: "🎵 Dancing Queen",
    photoText: "This was ABBA's 4th Number 1 single in the UK. It was also the 1st single to be released from their 4th studio album, 'Arrival'.",
    },
    { 
    round: "👨‍👩‍👧 Family",
    question: "Diane once drove off in her Mini. Much to the amusement of passers-by, what had she accidentally left on the roof?",
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
        photoText: "She must have been a steady driver! 😄",
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
    question: "Which song from Kylie Minogue's debut album reached number one in the UK in 1988?",
   answers: [
            "The Loco-Motion",
            "Got to Be Certain",
            "Je ne sais pas pourquoi",
            "I Should Be So Lucky"
        ],
        correct: 3,
        image: "images/quiz/kylie.jpg", 
        photoTitle: "🎶 I Should Be So Lucky spent 5 weeks at number one.",
        photoText: "The 3 other songs peaked at number two",
        revealImageAfterAnswer: true
    },
{ 
    round: "👨‍👩‍👧 Family",
    question: "What nautical term means the left-hand side of a boat when facing forwards?",
   answers: [
            "Starboard",
            "Port",
            "Bow",
            "Stern"
        ],
        correct: 1,
        image: "images/quiz/boat.jpg", 
        photoTitle: "🚣 Ahoy, shipmates!",
        revealImageAfterAnswer: true
    },


{ 
    round: "👨‍👩‍👧 Family",
    question: "Which actor played Batman in the 1989 film Batman?",
   answers: [
            "Michael Keaton",
            "Christian Bale",
            "Christian Slater",
            "Val Kilmer"
        ],
        correct: 0,
        image: "images/quiz/batman.jpg", 
        photoTitle: "🦇 The Dynamic Duo!",
        revealImageAfterAnswer: true
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
    answers: [
        "300",
        "600",
        "1,500",
        "5,000"
    ],
    correct: 2,
    image: "images/quiz/lilo.jpg",
    photoTitle: "🏖️ And most of them went into this lilo! 😄",
    photoText: "Inflation was a problem back then too",
    revealImageAfterAnswer: true
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
    photoText: "📜 A very proud graduation day.",
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
    
    photoTitle: " 🍼 Oscar Maximo Walsh 24 January 2025",
    
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
    question: "In 1920, Which country won the last Olympic tug-of-war gold medal?",
    answers: [
        "USA",
        "France",
        "Sweden",
        "Great Britain"
    ],
    correct: 3,
    image: "images/quiz/tug.jpg",

    photoTitle: "🏅 Andrew and Robert going for gold",
    photoText: "Tug-of-war was an event at five Olympic Games between 1900 and 1920.",
    revealImageAfterAnswer: true
},  
{
        round: "🏖️ Holidays",
    question: "How is a traditional pedalo powered?",
    answers: [
        "A small motor",
        "Pedals turned by the passengers",
        "Wind power",
        "Hand-operated paddles"
    ],
    correct: 1,
    image: "images/quiz/pedalo.jpg",
    photoTitle: "🚤 Pedal Power!",
    revealImageAfterAnswer: true
},  
{
        round: "🏖️ Holidays",
    question: "What is guaranteed on a British caravan holiday?",

    answers: [
        "Wall-to-wall sunshine",
        "Peace and quiet",
        "At least one day of rain",
        "An empty beach"
        ],
        correct: 2,
    image: "images/quiz/caravan.jpg",
    photoTitle: "🌞 It usually rains",
    photoText: "But not today!",
    revealImageAfterAnswer: true
},  
{
        round: "🏖️ Holidays",
    question: "Which Japanese company made its first complete motorcycle in 1949",
    answers: [
        "Yamaha",
        "Suzuki",
        "Kawasaki",
        "Honda"
    ],
    correct: 3,
    image: "images/quiz/honda.jpg",
    photoTitle: "🏍️ Born to be Wild!",
    photoText: "Andrew aged 5.",
    revealImageAfterAnswer: true
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
    photoTitle: "🏖️ Sandblasted on the beach in Fuerteventura",
    
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
   photoTitle: "🌴Morocco, September 2025",
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
        question: "In which year did Diane & Robert celebrate their 'Crystal' wedding anniversary?",
        answers: [
            "1981",
            "1986",
            "1991",
            "1996"
        ],
        correct: 2,
        
    image: "images/quiz/web.jpg",
    revealImageAfterAnswer: true,

    photoTitle: "🌐 The World Wide Web became publicly accessible in 1991",  
    photoText: "⚽ Also, Sheffield Wednesday won the League Cup, beating Manchester United 1–0 at Wembley.  Booooo",
    showPhotoTitleAfterAnswer: true
},  
{ 
    round: "📅 Guess the Year",
    question: "Can you guess which year this is?  Hint: It was the year the Channel Tunnel opened.",
    image: "images/quiz/1994.jpg",
    caption: "📸🧀 Smile Kevin - say cheese!",
    answers: [
        "1993",
        "1994",
        "1995",
        "1996"
    ],
    correct: 1
},
{ 
    round: "📅 Guess the Year",
    question: "Which year did Kevin and Dawn get married? Hint: Robbie Williams went to number 1 with Millenium in this year.",
    image: "images/quiz/kevinwedding.jpg",
    
    answers: [
        "1996",
        "1997",
        "1998",
        "1999"
    ],
    correct: 2,
    photoTitle: "🌴 Grenada 1998",
    photoText: "🍹 Anyone for a rum punch?",
    
    showPhotoTitleAfterAnswer: true,
     audio: "audio/calypso.mp3",    
         manualNext: true,   
},
{ 
    round: "📅 Guess the Year",
    question: "Which year is this?",
    image: "images/quiz/babylois.jpg",
    caption: "🧸 The youngest member of the family arrives.",
    answers: [
        "2002",
        "2003",
        "2004",
        "2005"
    ],
    correct: 1,
    photoTitle: "🍼🧸 Hello Lois!",
    photoText: "🧸 A second grandchild arrives",
     showPhotoTitleAfterAnswer: true
},
{ 
    round: "📅 Guess the Year",
    question: "Which year is this?",
    image: "images/quiz/boxing-day-2006.jpg",
    caption: "🎄 Boxing Day with the family",

    
    revealImageAfterAnswer: true,
    revealImage: "images/quiz/family2.jpg",
   
    
    answers: [
        "2004",
        "2005",
        "2006",
        "2007"
    ],
    correct: 2
},
{
 round: "📅 Guess the Year",
     question: "Which year is this?",
   
    image: "images/quiz/treadmill.jpg",
    revealVideo: "videos/treadmill1.mp4",
    revealImage: "images/quiz/treadmill2.jpg",

    photoTitle: "🎉 January 2008",
    photoText: "🎂 Lois' 5th Birthday",

     answers: [
        "2005",
        "2006",
        "2007",
        "2008"
    ],
    correct: 3,

},
{
    round: "📅 Guess the Year",
    question: "What year was this school photo taken?",

    image: "images/quiz/school.jpg",

    revealImageAfterAnswer: true,
    revealImage: "images/quiz/schoolanswer.jpg",
   
    answers: [
        
        "2009",
        "2010",
        "2011",
        "2012"
    ],

    correct: 2,

     photoTitle: "📷 Calendar girls.",
    
},
{
    round: "📅 Guess the Year",
    question: "What year was this photo taken? Hint: It was the year of the London Olympics and the Queen's Diamond Jubilee.",

    image: "images/quiz/2012.jpg",

    answers: [
        
        "2011",
        "2012",
        "2013",
        "2014"
    ],

    correct: 1,
     photoTitle: "📅 2012",
     photoText: "🥇 At the 2012 London Olympics Team GB finished third in the medal table winning 65 medals (29 gold, 17 silver, and 19 bronze).",
     showPhotoTitleAfterAnswer: true,
},
{
    round: "📅 Guess the Year",
    question: "What year was this day at the races?",

    image: "images/quiz/races.jpg",
caption: "🧺 Picnic at the racecourse",

    revealImageAfterAnswer: true,
    revealImage: "images/quiz/races2.jpg",
    
    answers: [
        
        "2012",
        "2014",
        "2016",
        "2018"
    ],

    correct: 2,
    
    photoTitle: "🍾🥂 July 2016.",
    showPhotoTitleAfterAnswer: true,

     photoText: "🏇 Celebrating Keith & Anne's Golden Anniversary (50 years together)",
    
},
{
    round: "📅 Guess the Year",
    question: "This was Boxing Day in which year? Hint: 👑 The Queen and Prince Philip had celebrated their Diamond Anniversary in November",

    image: "images/quiz/facepaint.jpg",
    
    answers: [
        
        "2007",
        "2011",
        "2014",
        "2018"
    ],

    correct: 0,
    
    photoTitle: "🐈‍⬛ Auditioning for 'Cats' the Musical",
    showPhotoTitleAfterAnswer: true,
    
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
    question: "Can you name this Rihanna song from 2012?",
    answers: [
        "Diamonds",
        "Like a Diamond",
        "Diamond Heart",
        "Diamonds are a Girl's Best Friend"
    ],
    correct: 0,

    audioQuestion: "audio/rihanna-intro.mp3",
    audioAnswer: "audio/rihanna-answer.mp3",
    audioFull: "audio/rihanna-full.mp3",
    image: "images/quiz/rihanna.jpg",
    revealImageAfterAnswer: true,
    photoTitle: "🎵 This song became one of Rihanna's biggest worldwide hits",
    photoText: "💎 'Diamonds' was written by Australian singer-songwriter Sia, who reportedly wrote the lyrics in just 14 minutes"
},
{
 round: "🎵 Music Round",
    question: "Taylor Swift's song 'Lover' has become a popular choice for which type of celebration?",
    answers: [
        "Birthday parties",
        "Graduation ceremonies",
        "Christmas parties",
        "Wedding first dances"
    ],
    correct: 3,

    audioQuestion: "audio/lover-intro.mp3",
    audioAnswer: "audio/lover-answer.mp3",
    audioFull: "audio/lover-full.mp3",
    image: "images/quiz/lover.jpg",
    revealImageAfterAnswer: true,
    photoTitle: "👩‍❤️‍💋‍👨 Taylor Swift – Lover (2019)",
    photoText: "🎬 'Lover' featured on the soundtrack of the 2022 TV series 'The Summer I Turned Pretty'"
},
{
    round: "✅ True or False",
    type: "truefalse",

    question: "This baby is Andrew.",

    image: "images/quiz/babylaura.jpg",

    revealImageAfterAnswer: true,
    revealImage: "images/quiz/babyandrew.jpg",
   
    answers: [
        "True",
        "False"
    ],

    correct: 1,

     photoTitle: "🧸 No that was Laura. This is Andrew's baby photo.",
    photoText: "🍼 Hello Andrew!",
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
    round: "✅ True or False",
    type: "truefalse",
    question: "Anne & Keith's car in this photo is a Hillman Imp.",
    answers: [
        "True",
        "False"
    ],
    correct: 1,
    image: "images/quiz/anglia.jpg",
    photoTitle: "🚗 They did own a Hillman Imp, but this is a Ford Anglia",
    showPhotoTitleAfterAnswer: true
},
{
    round: "✅ True or False",
    type: "truefalse",
    question: "In 1982 Keith & Anne owned a green car.",
    answers: [
        "True",
        "False"
    ],
correct: 0,

    image: "images/quiz/cortina.jpg",
    revealImageAfterAnswer: true,

    photoTitle: "🚗 Their dark green Ford Cortina",
     showPhotoTitleAfterAnswer: true
},
{
    round: "✅ True or False",
    type: "truefalse",

    question: "Enjoying 'Sundowners' in Kenya in 2016",

    image: "images/quiz/sundowner.jpg",

    answers: [
        "True",
        "False"
    ],

    correct: 1,

    photoTitle: "🐘 No. This safari was in Zimbabwe.",
    photoText: "🥂 What a way to spend an evening. Cheers!",
    
    showPhotoTitleAfterAnswer: true
},
   {
     round: "✅ True or False",
    type: "truefalse",

    question: "This was Laura's 3rd Birthday",

    image: "images/quiz/laura3cake.jpg",

    revealImageAfterAnswer: true,
    revealImage: "images/quiz/laura3.jpg",
   
    answers: [
        "True",
        "False"
    ],

    correct: 0,
        
     photoTitle: "🎁🎈 In the garden at Ramsey 4th September 2004",
    
},
{
     round: "✅ True or False",
    type: "truefalse",

    question: "This ancient site is in Peru",

    image: "images/quiz/mexico.jpg",

    revealImageAfterAnswer: true,
    revealImage: "images/quiz/mexico2.jpg",
   
    answers: [
        "True",
        "False"
    ],

    correct: 1,
        
    photoTitle: "🌵🏛️ Mexico 2015",
    photoText: "🚤 They also took a speedboat ride through the Sumidero Canyon.",
},
{
    round: "✅ True or False",
    type: "truefalse",
    question: "Anne & Keith visited the Isle of Man in 2019 with Peter & Janet.",

    answers: [
        "True",
        "False"
    ],

    correct: 0,

    image: "images/quiz/man.jpg",
    revealImageAfterAnswer: true,
    photoTitle: "Isle of Man 2019",
    photoText: "🏍️ Anne & Keith on the Isle of Man with Peter & Janet",
    showPhotoTitleAfterAnswer: true
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
  
     question: "Also on a raspberry theme.. How many pieces of rasberry did Oscar throw after this clip?",
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
    question: "🚆 Which famous Swiss train is this?",
  
    image: "images/quiz/glacierexpress.jpg",
  
    revealImageAfterAnswer: true,
    revealImage: "images/quiz/glacierview.jpg",
   
    answers: [
        "Eurostar",
        "GoldenPass Express",
        "Bernina Express",
        "Glacier Express"
    ],

    correct: 3,

    photoTitle: "🚞 Views from the Glacier Express",
        
},
{
   round: "❤️ Diane and Robert in 2026",
    question: "🚆 Which mountain did Keith & Anne 'climb' on 28th July 2026?",
  
    image: "images/quiz/matterhorn.jpg",
  
        answers: [
        "Eiger",
        "Jungfrau",
        "Matterhorn",
        "Mont Blanc"
    ],

    correct: 2,

   photoTitle: "🏔️ The Matterhorn – climbed by train!",
    photoText: "🚂 The famous Gornergrat Railway took them to one of Switzerland's most spectacular viewpoints.",
     showPhotoTitleAfterAnswer: true,    
},
 {
    round: "❤️ Diane and Robert in 2026",
    question: "❤️ On 30th July 2026, how many days had Anne & Keith been married? (You may use a calculator!)",
  
    image: "images/quiz/switzerland.jpg",
  
    answers: [
        "21,900 days",
        "21,915 days",
        "21,920 days",
        "22,000 days"
    ],

    correct: 1,

    photoTitle: "💎 60 wonderful years • 21,915 days • A lifetime of love, laughter and memories ❤️",
    photoText: "That's: 60 × 365 = 21,900, plus 15 leap days = 21,915 days!",
    
    showPhotoTitleAfterAnswer: true,
        
},
];