<template>
    <div class="list-of-trips">
      <h1 class="title">MIEJSCA, KTÓRE MOŻESZ Z NAMI ODWIEDZIĆ: </h1>
      <div class="tours">
        <div class="tour-tile" v-for="tour in tours" :key="tour.tourId">
          <h2>{{ tour.name }}</h2>
          <p>{{ tour.description }}</p>
          <p><strong>Początek:</strong> {{ tour.startdate }}</p>
          <p><strong>Koniec:</strong> {{ tour.enddate }}</p>
          <p><strong>Cena:</strong> {{ tour.price }}PLN</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ListOfTrips',
    data() {
      return {
        tours: [] // This will hold the tours data
      };
    },
    mounted() {
       // Replace 'http://localhost:8080/tours' with your actual API endpoint
    fetch('http://localhost:8080/tours')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        this.tours = data;
      })
      .catch(error => {
        this.error = error.message;
        console.error('There was a problem fetching the tours data:', error);
      });
    }
  };
  </script>
  
  <style scoped>
    .list-of-trips {
      text-align: center;
    }
    .tour-tile {
      border: 1px solid #ccc;
      margin-bottom: 20px;
      padding: 15px;
    }
    .title {
      margin-bottom: 20px;
    }
  </style>
  