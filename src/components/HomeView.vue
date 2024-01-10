<template>
    <div>
      <!-- Navigation Bar -->
      <nav>
        <router-link to="/about"><button>O NAS</button></router-link>
        <router-link to="/trips"><button>OFERTA</button></router-link>
        <router-link to="/login"><button>LOGOWANIE</button></router-link>
      </nav>
  
      <!-- Main Content -->
      <main>
        <div class="background-image-container">
          <h1 style="text-align: center;">JUST TRAVEL</h1>
          <div style="text-align: center;">
            <router-link to="/reservations"><button>DOKONAJ REZERWACJI!</button></router-link>
          </div>
        </div>
      </main>
  
      <!-- Footer -->
      <footer>
        <p>Skontaktuj się:</p>
        <p>Email: contact@justravel.com</p>
        <p>Telefon: 61-420-1235</p>
        <p>Adres: ul. Podróżnicza 21/37, Poznań</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeView',
  };
  </script>

  <style scoped>
    .background-image-container {
    background-image: url('../assets/background.jpg'); /* Adjust the path as needed */
    background-size: cover;
    background-position: center;
    text-align: center;
    padding: 150px 0; /* Increased padding */
}

.background-image-container h1 {
  color: rgb(0, 0, 0); /* Ensures text is readable on the image */
  font-size: 5em; /* Larger font size */
  font-weight: bold; /* Bold font weight */
}
  .background-image-container button {
    color: rgb(0, 0, 0); /* Ensures text is readable on the image */
}

</style>