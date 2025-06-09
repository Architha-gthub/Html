const books=[
    {
      "id": 1,
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "publication_year": 1960,
      "genre": [
        "Fiction",
        "Classic"
      ],
      "description": "A classic novel depicting racial injustice in the American South.",
      "cover_image": "https://cdn2.penguin.com.au/covers/original/9781784870799.jpg",
      price: 14.99,
  rating: 4.8,
  favorite: false,
  isBestseller: true
    
    },
    {
      "id": 2,
      "title": "1984",
      "author": "George Orwell",
      "publication_year": 1949,
      "genre": [
        "Dystopian",
        "Science Fiction"
      ],
      "description": "A dystopian novel portraying a totalitarian society.",
      "cover_image": "https://m.media-amazon.com/images/I/61hvQXKkLML._SL1500_.jpg",
      price: 16.99,
  rating: 4.5,
  favorite: false,
  isBestseller: true
    },
    {
      "id": 3,
      "title": "Pride and Prejudice",
      "author": "Jane Austen",
      "publication_year": 1813,
      "genre": [
        "Classic",
        "Romance"
      ],
      "description": "A classic novel exploring themes of love, marriage, and social norms.",
      "cover_image": "https://janeausteninvermont.wordpress.com/files/2009/12/book-cover-pp-comic-hc.jpg",
      price: 24.99,
  rating: 4.3,
  favorite: false
    },
    {
      "id": 4,
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "publication_year": 1925,
      "genre": [
        "Fiction",
        "Classic"
      ],
      "description": "A tale of the American Dream, wealth, and love during the Roaring Twenties.",
      "cover_image": "https://m.media-amazon.com/images/I/61OTNorhqVS._AC_SY879_.jpg",
      price: 20.99,
  rating: 4.0,
  favorite: false
    },
    {
      "id": 5,
      "title": "Moby-Dick",
      "author": "Herman Melville",
      "publication_year": 1851,
      "genre": [
        "Fiction",
        "Adventure"
      ],
      "description": "The epic tale of Captain Ahab's obsession with the white whale.",
    //   "cover_image": "https://i.etsystatic.com/25126483/r/il/c20236/2886857600/il_1080xN.2886857600_dac7.jpg"
             "cover_image" :"https://m.media-amazon.com/images/I/81XS2mY6qfL._AC_SF480,480_.jpg",
             price: 10.99,
  rating: 4.0,
  favorite: false
    },
    {
      "id": 6,
      "title": "The Lord of the Rings",
      "author": "J.R.R. Tolkien",
      "publication_year": 1954,
      "genre": [
        "Fantasy",
        "Adventure"
      ],
      "description": "An epic fantasy saga about the quest to destroy the One Ring.",
      "cover_image": "https://cdn.dc5.ro/img-prod/1817832475-0.jpeg",
      price: 5.99,
  rating: 4.8,
  favorite: false,
  isBestseller: true
    },
    {
      "id": 7,
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "publication_year": 1951,
      "genre": [
        "Fiction",
        "Coming-of-age"
      ],
      "description": "A classic coming-of-age novel following Holden Caulfield's journey.",
      "cover_image": "https://d3525k1ryd2155.cloudfront.net/h/974/763/1123763974.0.x.jpg",
      price: 11.00,
  rating: 4.1,
  favorite: false
    },
    {
      "id": 8,
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "publication_year": 1937,
      "genre": [
        "Fantasy",
        "Adventure"
      ],
      "description": "The prequel to The Lord of the Rings, following Bilbo Baggins' journey.",
      "cover_image": "https://m.media-amazon.com/images/I/9163qgo9qCL._SY425_.jpg",
      price: 9.57,
  rating: 4.7,
  favorite: false,
  isBestseller: true
    },
    {
      "id": 9,
      "title": "One Hundred Years of Solitude",
      "author": "Gabriel Garcia Marquez",
      "publication_year": 1967,
      "genre": [
        "Magical Realism",
        "Literary Fiction"
      ],
      "description": "A multi-generational saga of the Buendía family in the fictional town of Macondo.",
      "cover_image": "https://m.media-amazon.com/images/I/81oAEEwxBWL._SY466_.jpg",
      price: 17.77,
  rating: 4.0,
  favorite: false
    },
    {
      "id": 10,
      "title": "War and Peace",
      "author": "Leo Tolstoy",
      "publication_year": 1869,
      "genre": [
        "Historical Fiction",
        "Epic"
      ],
      "description": "A monumental work depicting the events of Russian society during the Napoleonic era.",
      "cover_image": "https://m.media-amazon.com/images/I/41h+cYhbL9L._SY466_.jpg",
      price: 14.99,
  rating: 4.8,
  favorite: false,
  isBestseller: true
    },
    {
      "id": 11,
      "title": "The Odyssey",
      "author": "Homer",
      "publication_year": "8th century BCE",
      "genre": [
        "Epic",
        "Mythology"
      ],
      "description": "An ancient Greek epic poem recounting Odysseus' ten-year journey home after the Trojan War.",
      "cover_image": "https://m.media-amazon.com/images/I/61H2AYD2r+L._SY466_.jpg",
      price: 9.14,
  rating: 4.4,
  favorite: false
    },
    {
      "id": 12,
      "title": "The Divine Comedy",
      "author": "Dante Alighieri",
      "publication_year": "1320",
      "genre": [
        "Epic",
        "Poetry"
      ],
      "description": "An epic poem that follows the journey of the soul through Hell, Purgatory, and Heaven.",
      "cover_image": "https://m.media-amazon.com/images/I/81IgKZdePtL._SY385_.jpg",
      price: 19.99,
  rating: 4.8,
  favorite: false,
  isBestseller: true
    },
    {
      "id": 13,
      "title": "The Brothers Karamazov",
      "author": "Fyodor Dostoevsky",
      "publication_year": 1880,
      "genre": [
        "Classic",
        "Philosophical Fiction"
      ],
      "description": "A complex novel exploring themes of spirituality, morality, and human nature.",
      "cover_image": "https://m.media-amazon.com/images/I/81ES-ZV3j9L._SL1500_.jpg",
      price: 14.99,
  rating: 4.5,
  favorite: false
    },
    {
      "id": 14,
      "title": "Crime and Punishment",
      "author": "Fyodor Dostoevsky",
      "publication_year": 1866,
      "genre": [
        "Classic",
        "Psychological Fiction"
      ],
      "description": "A psychological thriller revolving around guilt, conscience, and redemption.",
      "cover_image": "https://m.media-amazon.com/images/I/81d-GOsc78L._SY466_.jpg",
      price: 13.56,
  rating: 4.2,
  favorite: false
    },
    {
      "id": 15,
      "title": "The Picture of Dorian Gray",
      "author": "Oscar Wilde",
      "publication_year": 1890,
      "genre": [
        "Gothic",
        "Philosophical Fiction"
      ],
      "description": "A novel about a man whose portrait ages while he retains his youth and beauty.",
      "cover_image": "https://m.media-amazon.com/images/I/81NLU+xZbWL._SL1500_.jpg",
      price: 14.77,
  rating: 4.4,
  favorite: false
    },
    {
      "id": 16,
      "title": "Brave New World",
      "author": "Aldous Huxley",
      "publication_year": 1932,
      "genre": [
        "Dystopian",
        "Science Fiction"
      ],
      "description": "A dystopian vision of a future society obsessed with pleasure and conformity.",
      "cover_image": "https://m.media-amazon.com/images/I/81LJQHit3pL._SL1500_.jpg",
      price: 14.99,
  rating: 4.8,
  favorite: false,
  isBestseller: true
    },
    {
      "id": 17,
      "title": "The Count of Monte Cristo",
      "author": "Alexandre Dumas",
      "publication_year": 1844,
      "genre": [
        "Adventure",
        "Historical Fiction"
      ],
      "description": "An adventure novel of revenge, love, and redemption set in the early 19th century.",
      "cover_image": "https://m.media-amazon.com/images/I/812-aMjtblL._SL1500_.jpg",
      price: 16.76,
  rating: 4.7,
  favorite: false,
  isBestseller: true
    },
    {
      "id": 18,
      "title": "Anna Karenina",
      "author": "Leo Tolstoy",
      "publication_year": 1877,
      "genre": [
        "Classic",
        "Romance"
      ],
      "description": "A tragic love story set against the backdrop of Russian high society.",
      "cover_image": "https://m.media-amazon.com/images/I/81MGByQHUBL._SL1500_.jpg",
      price: 17.77,
  rating: 4.6,
  favorite: false
    },
    {
      "id": 19,
      "title": "The Alchemist",
      "author": "Paulo Coelho",
      "publication_year": 1988,
      "genre": [
        "Fiction",
        "Philosophical"
      ],
      "description": "A philosophical novel about a shepherd boy's journey to find his personal legend.",
      "cover_image": "https://m.media-amazon.com/images/I/61HAE8zahLL._SY466_.jpg",
      price: 15.11,
  rating: 4.0,
  favorite: false
    },
    {
      "id": 20,
      "title": "The Adventures of Huckleberry Finn",
      "author": "Mark Twain",
      "publication_year": 1884,
      "genre": [
        "Adventure",
        "Satire"
      ],
      "description": "A satirical novel following Huck Finn's journey down the Mississippi River.",
      "cover_image": "https://m.media-amazon.com/images/I/71OqZTVqWHL._SY342_.jpg",
      price: 20.00,
  rating: 4.2,
  favorite: false
    },
    {
      "id": 21,
      "title": "The Iliad",
      "author": "Homer",
      "publication_year": "8th century BCE",
      "genre": [
        "Epic",
        "Mythology"
      ],
      "description": "An ancient Greek epic poem about the Trojan War and the hero Achilles.",
      "cover_image": "https://m.media-amazon.com/images/I/61-VO696SDL._SY466_.jpg",
      price: 12.33,
  rating: 4.9,
  favorite: false,
  isBestseller: true
    },
    {
      "id": 22,
      "title": "The Lord of the Rings",
      "author": "J.R.R. Tolkien",
      "publication_year": 1954,
      "genre": [
        "Fantasy",
        "Adventure"
      ],
      "description": "A thrilling epic about the quest to destroy the One Ring and save Middle-earth from the dark lord Sauron.",
      "cover_image": "https://m.media-amazon.com/images/I/81PmnwLtDDL._SL1500_.jpg",
      price: 9.77,
  rating: 4.9,
  favorite: false,
  isBestseller: true
    },
    {
      "id": 23,
      "title": "Don Quixote",
      "author": "Miguel de Cervantes",
      "publication_year": 1605,
      "genre": [
        "Classic",
        "Satire"
      ],
      "description": "A satirical novel about a deluded knight and his faithful squire, Sancho Panza.",
      "cover_image": "https://m.media-amazon.com/images/I/713s72Q68BL._SY466_.jpg",
      price: 10.19,
  rating: 4.0,
  favorite: false
    },
    {
      "id": 24,
      "title": "Frankenstein",
      "author": "Mary Shelley",
      "publication_year": 1818,
      "genre": [
        "Gothic",
        "Science Fiction"
      ],
      "description": "A novel about the creation of a monster and the consequences of playing god.",
      "cover_image": "https://m.media-amazon.com/images/I/81qkk3JbpnL._SL1500_.jpg",
      price: 19.20,
  rating: 4.0,
  favorite: false
    },
    {
      "id": 25,
      "title": "Alice's Adventures in Wonderland",
      "author": "Lewis Carroll",
      "publication_year": 1865,
      "genre": [
        "Fantasy",
        "Children's Literature"
      ],
      "description": "A whimsical tale about a girl named Alice who falls into a magical world.",
      "cover_image": "https://m.media-amazon.com/images/I/91g+7nUffpL._SL1500_.jpg",
      price: 16.84,
  rating: 4.1,
  favorite: false
    },
    {
      "id": 26,
      "title": "The Little Prince",
      "author": "Antoine de Saint-Exupéry",
      "publication_year": 1943,
      "genre": [
        "Fable",
        "Children's Literature"
      ],
      "description": "A philosophical novella about a young prince's journey through the universe.",
      "cover_image": "https://m.media-amazon.com/images/I/518icKzhFjL._SL1000_.jpg",
      price: 14.99,
  rating: 4.1,
  favorite: false
    },
    {
      "id": 27,
      "title": "The Book Thief",
      "author": "Markus Zusak",
      "publication_year": 2005,
      "genre": [
        "Historical Fiction",
        "War"
      ],
      "description": "A story of a girl living in Nazi Germany, narrated by Death.",
      "cover_image": "https://m.media-amazon.com/images/I/91JGwQlnu7L._SL1500_.jpg",
      price: 8.99,
  rating: 4.3,
  favorite: false
    },
    {
      "id": 28,
      "title": "Slaughterhouse-Five",
      "author": "Kurt Vonnegut",
      "publication_year": 1969,
      "genre": [
        "Satire",
        "Science Fiction"
      ],
      "description": "An anti-war novel that mixes science fiction and dark humor.",
      "cover_image": "https://m.media-amazon.com/images/I/81VuxYiOouL._AC_UY327_FMwebp_QL65_.jpg",
      price: 7.99,
  rating: 4.8,
  favorite: false,
  isBestseller: true
    },
    {
      "id": 29,
      "title": "The Grapes of Wrath",
      "author": "John Steinbeck",
      "publication_year": 1939,
      "genre": [
        "Historical Fiction",
        "Social Commentary"
      ],
      "description": "A novel about the plight of migrant workers during the Great Depression.",
      "cover_image": "https://m.media-amazon.com/images/I/81cfi11p2aL._SL1500_.jpg",
      price: 11.51,
  rating: 4.5,
  favorite: false
    },
    {
      "id": 30,
      "title": "Fahrenheit 451",
      "author": "Ray Bradbury",
      "publication_year": 1953,
      "genre": [
        "Dystopian",
        "Science Fiction"
      ],
      "description": "A dystopian novel depicting a future society where books are banned.",
      "cover_image": "https://m.media-amazon.com/images/I/51nMGooRHlL._SY425_.jpg",
      price: 18.55,
  rating: 4.9,
  favorite: false,
  isBestseller: true
    },
    {
      "id": 31,
      "title": "The Lord of the Flies",
      "author": "William Golding",
      "publication_year": 1954,
      "genre": [
        "Dystopian",
        "Psychological Fiction"
      ],
      "description": "A novel about a group of British boys stranded on an uninhabited island.",
      "cover_image": "https://m.media-amazon.com/images/I/71-WP1T-bjL._SY466_.jpg",
      price: 17.11,
  rating: 4.0,
  favorite: false
    },
    {
      "id": 32,
      "title": "The Hitchhiker's Guide to the Galaxy",
      "author": "Douglas Adams",
      "publication_year": 1979,
      "genre": [
        "Science Fiction",
        "Comedy"
      ],
      "description": "A comedic science fiction series about the misadventures of Arthur Dent.",
      "cover_image": "https://m.media-amazon.com/images/I/81P7xwyD7qL._SY385_.jpg",
      price: 15.77,
  rating: 4.6,
  favorite: false
    },
    {
      "id": 33,
      "title": "A Tale of Two Cities",
      "author": "Charles Dickens",
      "publication_year": 1859,
      "genre": [
        "Historical Fiction",
        "Classic"
      ],
      "description": "A historical novel set during the French Revolution, exploring themes of sacrifice and resurrection.",
      "cover_image": "https://m.media-amazon.com/images/I/91RHb8rXTML._SL1500_.jpg",
      price: 21.1,
  rating: 4.4,
  favorite: false
    },
    {
      "id": 34,
      "title": "The Chronicles of Narnia",
      "author": "C.S. Lewis",
      "publication_year": 1950,
      "genre": [
        "Fantasy",
        "Children's Literature"
      ],
      "description": "A series of fantasy novels set in the magical land of Narnia.",
      "cover_image": "https://m.media-amazon.com/images/I/61jt9n+snyL._SL1000_.jpg",
      price: 22.11,
  rating: 4.6,
  favorite: false
    },
    {
      "id": 35,
      "title": "The Handmaid's Tale",
      "author": "Margaret Atwood",
      "publication_year": 1985,
      "genre": [
        "Dystopian",
        "Feminist Fiction"
      ],
      "description": "A dystopian novel set in a totalitarian society where women are subjugated.",
      "cover_image": "https://m.media-amazon.com/images/I/41NEBgrZjjL.jpg",
      price: 9.77,
  rating: 4.3,
  favorite: false
    },
    {
      "id": 36,
      "title": "The Name of the Rose",
      "author": "Umberto Eco",
      "publication_year": 1980,
      "genre": [
        "Historical Fiction",
        "Mystery"
      ],
      "description": "A medieval mystery novel set in an Italian monastery.",
      "cover_image": "https://m.media-amazon.com/images/I/8116+Fd8+XL._SL1500_.jpg",
      price: 19.88,
  rating: 4.2,
  favorite: false
    },
    {
      "id": 37,
      "title": "The Trial",
      "author": "Franz Kafka",
      "publication_year": 1925,
      "genre": [
        "Absurdist Fiction",
        "Existential"
      ],
      "description": "A surreal novel exploring themes of guilt, law, and justice.",
      "cover_image": "https://m.media-amazon.com/images/I/51SQI1N-9XL._SY445_SX342_.jpg",
      price: 22.99,
  rating: 4.8,
  favorite: false,
  isBestseller: true
    },
    {
      "id": 38,
      "title": "The Kite Runner",
      "author": "Khaled Hosseini",
      "publication_year": 2003,
      "genre": [
        "Historical Fiction",
        "Drama"
      ],
      "description": "A novel about friendship, redemption, and the impact of war in Afghanistan.",
      "cover_image": "https://m.media-amazon.com/images/I/81IzbD2IiIL._SY466_.jpg",
      price: 25.1,
  rating: 4.0,
  favorite: false
    },
    {
      "id": 39,
      "title": "The Pillars of the Earth",
      "author": "Ken Follett",
      "publication_year": 1989,
      "genre": [
        "Historical Fiction",
        "Adventure"
      ],
      "description": "An epic historical novel set in 12th-century England, centered around the construction of a cathedral.",
      "cover_image": "https://th.bing.com/th/id/OIP.EI5xJ13nh0ujTjQP0Vka9AHaEl?rs=1&pid=ImgDetMain",
      price: 27.17,
  rating: 4.3,
  favorite: false
    },
    {
      "id": 40,
      "title": "The Shadow of the Wind",
      "author": "Carlos Ruiz Zafón",
      "publication_year": 2001,
      "genre": [
        "Mystery",
        "Gothic"
      ],
      "description": "A mystery novel set in post-war Barcelona, revolving around a forgotten book and its author.",
      "cover_image": "https://m.media-amazon.com/images/I/911-t2Bi+6L._SY466_.jpg",
      price: 26.77,
  rating: 4.8,
  favorite: false,
  isBestseller: true
    },
    {
      "id": 41,
      "title": "The Secret Garden",
      "author": "Frances Hodgson Burnett",
      "publication_year": 1911,
      "genre": [
        "Children's Literature",
        "Classic"
      ],
      "description": "A classic children's novel about a young girl who discovers a hidden garden.",
      "cover_image": "https://m.media-amazon.com/images/I/71LNna+OuAL._SY342_.jpg",
      price: 30.11,
  rating: 4.8,
  favorite: false,
  isBestseller: true
    },
    {
      "id": 42,
      "title": "The Giver",
      "author": "Lois Lowry",
      "publication_year": 1993,
      "genre": [
        "Dystopian",
        "Young Adult"
      ],
      "description": "A dystopian novel about a society with strict control over emotions and memories.",
      "cover_image": "https://m.media-amazon.com/images/I/710dON3UBEL._SY466_.jpg",
      price: 25.00,
  rating: 4.5,
  favorite: false
    },
    {
      "id": 43,
      "title": "The Metamorphosis",
      "author": "Franz Kafka",
      "publication_year": 1915,
      "genre": [
        "Absurdist Fiction",
        "Existential"
      ],
      "description": "A novella about a man who wakes up one morning transformed into a giant insect.",
      "cover_image": "https://m.media-amazon.com/images/I/71mDu0JCqzL._SY385_.jpg",
      price: 14.99,
  rating: 4.8,
  favorite: false,
  isBestseller: true
    },
    {
      "id": 44,
      "title": "Gone with the Wind",
      "author": "Margaret Mitchell",
      "publication_year": 1936,
      "genre": [
        "Historical Fiction",
        "Romance"
      ],
      "description": "A historical novel set during the American Civil War, centered around Scarlett O'Hara.",
      "cover_image": "https://m.media-amazon.com/images/I/91gkmi4GuxL._SL1500_.jpg",
      price: 15.99,
  rating: 4.0,
  favorite: false,
  isBestseller: true
    },
    {
      "id": 45,
      "title": "The Wind in the Willows",
      "author": "Kenneth Grahame",
      "publication_year": 1908,
      "genre": [
        "Children's Literature",
        "Fantasy"
      ],
      "description": "A children's novel about the adventures of anthropomorphic animals.",
      "cover_image": "https://m.media-amazon.com/images/I/71Al+l14-BL._SL1500_.jpg",
      price: 12.66,
  rating: 4.0,
  favorite: false
    },
    {
      "id": 46,
      "title": "Dracula",
      "author": "Bram Stoker",
      "publication_year": 1897,
      "genre": [
        "Gothic",
        "Horror"
      ],
      "description": "A Gothic horror novel about the vampire Count Dracula's attempt to move to England.",
      "cover_image": "https://m.media-amazon.com/images/I/71Kd711EvFL._SY425_.jpg",
      price: 27.12,
  rating: 4.9,
  favorite: false,
  isBestseller: true
    },
    {
      "id": 47,
      "title": "The Call of the Wild",
      "author": "Jack London",
      "publication_year": 1903,
      "genre": [
        "Adventure",
        "Nature"
      ],
      "description": "An adventure novel about a domestic dog's life in the wilds of the Yukon.",
      "cover_image": "https://m.media-amazon.com/images/I/61J3QzXCrHL._SL1000_.jpg",
      price: 23.51,
  rating: 4.0,
  favorite: false
    },
    {
      "id": 48,
      "title": "The Stand",
      "author": "Stephen King",
      "publication_year": 1978,
      "genre": [
        "Horror",
        "Post-Apocalyptic"
      ],
      "description": "A post-apocalyptic horror novel about a deadly pandemic and its aftermath.",
      "cover_image": "https://m.media-amazon.com/images/I/81DLzi1g+yL._SL1500_.jpg",
      price: 13.77,
  rating: 4.1,
  favorite: false
    },
    {
      "id": 49,
      "title": "The Color Purple",
      "author": "Alice Walker",
      "publication_year": 1982,
      "genre": [
        "Fiction",
        "Historical"
      ],
      "description": "A novel about the life of African-American women in the Southern United States.",
      "cover_image": "https://m.media-amazon.com/images/I/61y-b4SUdCL._SY445_SX342_.jpg",
      price: 13.00,
  rating: 4.0,
  favorite: false
    },
    {
      "id": 50,
      "title": "The Silmarillion",
      "author": "J.R.R. Tolkien",
      "publication_year": 1977,
      "genre": [
        "Fantasy",
        "Mythopoeia"
      ],
      "description": "A collection of mythopoeic stories about the history of Middle-earth.",
      "cover_image": "https://m.media-amazon.com/images/I/41Ph1KaIIpL._SY522_.jpg",
      price: 15.77,
  rating: 4.5,
  favorite: false
    }
  ]