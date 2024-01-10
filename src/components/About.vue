<template>
    <div class="about-us">
      <h1>O naszej firmie</h1>
      
      <section>
        <h2>Nasza Misja</h2>
        <p>"Tworzymy niezapomniane doświadczenia podróżnicze, łącząc pasję do odkrywania świata z indywidualnym podejściem do każdego klienta. Naszym celem jest zapewnienie inspirujących i bezproblemowych wypraw, które wzbogacają życie i poszerzają horyzonty."</p>
      </section>
  
      <section>
        <h2>Nasza drużyna</h2>
        <p>Poznajcie oddane osoby które sprawiają, że nasze marzenia podróżnicze mogą się spełnić. Nasz zespół to zróżnicowana grupa ekspertów podróży, którzy pasjonują się tworzeniem niezapomnianych wycieczek.</p>
        <!-- Example of additional content - Team Members -->
        <div class="team-members">
          <div class="member">
            <img src="../assets/aneta.png" alt="Member Name" class="custom-image">
            <h3>Aneta Gołębiewska</h3>
            <p>Aneta jest menedżerką ds. relacji z klientem w firmie. Odpowiada za bezpośredni kontakt z klientami, dbając o to, aby ich potrzeby były spełniane na każdym etapie współpracy. Jest także odpowiedzialna za rozwiązywanie wszelkich problemów oraz za utrzymywanie wysokiego poziomu satysfakcji klientów.</p>
          </div>
          <!-- Repeat for other members -->
          <div class="member">
            <img src="../assets/marcin.png" alt="Member Name" class="custom-image">
            <h3>Norbert Świtek</h3>
            <p>Norbert pracuje jako analityk rynku w firmie. Jego głównym zadaniem jest analizowanie trendów rynkowych, konkurencji i preferencji klientów. Dzięki jego analizom firma może lepiej dostosowywać swoje produkty i usługi do potrzeb rynku oraz efektywniej planować strategie marketingowe.</p>
          </div>
          <!--  -->
          <div class="member">
            <img src="../assets/krzystof.png" alt="Member Name" class="custom-image">
            <h3>Krzysztof Krawczyk</h3>
            <p>Krzysztof zajmuje stanowisko specjalisty ds. logistyki. Odpowiada za planowanie i koordynowanie wszelkich kwestii logistycznych związanych z podróżami – od rezerwacji lotów i hoteli po organizację transportu na miejscu. Jego rola jest kluczowa w zapewnieniu płynnego i bezproblemowego przebiegu podróży klientów.</p>
          </div>
        </div>
      </section>
  
      <section>
        <h2>Nasza Historia</h2>
        <p>Założona dekadę temu przez grupę zapalonych podróżników, "Globetrotter Inc." szybko stała się znana jako firma, która przekształca marzenia o podróżach w rzeczywistość. Początkowo skoncentrowana na egzotycznych destynacjach, firma rozwinęła swoją ofertę, oferując teraz wyprawy na wszystkie kontynenty. Kluczowym momentem w historii firmy było wprowadzenie innowacyjnej aplikacji mobilnej, która umożliwiała klientom personalizowanie swoich wycieczek. Sukces tego narzędzia przyczynił się do znacznego wzrostu popularności "JUST TRAVEL.". Wizją firmy jest nie tylko organizowanie podróży, ale tworzenie niezapomnianych doświadczeń. Zespół "Globetrotter Inc." składa się z doświadczonych podróżników, którzy dzielą się swoją wiedzą i pasją, pomagając klientom odkrywać nieznane zakątki świata. Niedawno firma rozszerzyła swoją działalność, oferując zrównoważone i ekologiczne wyjazdy, wspierając lokalne społeczności i promując odpowiedzialny turystyk. W odpowiedzi na rosnącą świadomość ekologiczną, "Globetrotter Inc." angażuje się w projekty ochrony środowiska. Mimo swojego dynamicznego rozwoju, firma pozostała wierna swoim korzeniom, kładąc nacisk na indywidualne podejście do każdego klienta. Historia "Globetrotter Inc." jest dowodem na to, że pasja i innowacyjność mogą zmienić sposób, w jaki ludzie doświadczają świata.</p>

      </section>
  
      <section>
        <h2>Skontaktuj się z nami</h2>
        <p>Masz pytanie lub potrzebujesz pomocy? Nasi specjaliści z chęcią udzielą Państwu pomocy poprzez formy kontatku podane niżej:</p>
        <!-- Contact Details -->
        <p>Email: contact@ourcompany.com</p>
        <p>Telefon: 123-456-7890</p>
        <p>Adres: 123 Travel St, Adventure City</p>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutUs'
  };
  </script>
  
  <style scoped>
.custom-image {
  width: 100%; /* This will make the image responsive */
  max-width: 400px; /* Maximum width */
  height: auto; /* Maintain the aspect ratio */
}

  .about-us {
    text-align: center;
    padding: 20px;
    color: #333; /* Dark gray text for readability */
    background-color: #f4f4f4; /* Light gray background to match global style */
  }
  
  .about-us h2 {
    color: #333;
    margin-top: 1em;
    margin-bottom: 0.5em;
    font-size: 1.5em; /* Slightly larger for section titles */
  }
  
  .about-us p {
    line-height: 1.6;
    margin-bottom: 1em;
    max-width: 800px; /* Limiting width for better readability */
    margin-left: auto;
    margin-right: auto;
  }
  
  /* Styling for any specific elements like lists, quotes, etc. */
  .about-us ul {
    text-align: left;
    margin-top: 1em;
    list-style-type: disc; /* Example of list style */
    padding-left: 1.5em;
  }
  
  .about-us blockquote {
    text-align: left;
    font-style: italic;
    margin: 1em 0;
    padding: 0.5em 1em;
    border-left: 4px solid #aaa; /* Example of blockquote style */
    background-color: #eee;
  }
  
  /* Responsive adjustments */
  @media screen and (max-width: 768px) {
    .about-us p, .about-us ul, .about-us blockquote {
      padding-left: 1em;
      padding-right: 1em;
    }
  }
  </style>
  