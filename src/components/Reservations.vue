<template>
    <div class="reservations">
      <h1>DOKONAJ REZERWACJI</h1>
      <form @submit.prevent="submitReservation">
        <!-- Customer Details Section -->
      <section>
        <h2>Dane klienta</h2>
        <input type="text" placeholder="First Name" v-model="customer.firstName" />
        <input type="text" placeholder="Last Name" v-model="customer.lastName" />
        <input type="text" placeholder="Address" v-model="customer.address" />
        <input type="tel" placeholder="Phone Number" v-model="customer.phoneNumber" />
        <input type="email" placeholder="Email" v-model="customer.email" />
      </section>
  
        <!-- Tour Selection Section -->
        <section>
          <h2>Wybierz wycieczkę</h2>
          <select v-model="reservation.tourId">
            <option v-for="tour in tours" :key="tour.tourId" :value="tour.tourId">
              {{ tour.name }} ({{ tour.price }}PLN)
            </option>
          </select>
          <input type="number" placeholder="Number of People" v-model.number="reservation.numberOfPeople" />
        </section>
  
        <!-- Total Price Calculation -->
        <div>
          <p>Całkowita cena: {{ totalPrice }}PLN</p>
        </div>
  
        <!-- Reservation Button -->
        <button type="submit">POTWIERDŹ REZERWACJĘ</button>
      </form>
    </div>
  </template>
  
 <script>
export default {
  name: 'Reservation',
  data() {
    return {
      tours: [],
      customer: {
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: '',
        email: ''
      },
      reservation: {
        tourId: null,
        reservationDate: null,
        numberOfPeople: 0,
      },
      error: null
    };
  },
  mounted() {
    this.fetchTours();
  },
  methods: {
    fetchTours() {
      fetch('http://localhost:8080/tours') // Zastąp tym właściwym URL do API
        .then(response => response.json())
        .then(data => {
          this.tours = data;
        })
        .catch(error => {
          this.error = 'Błąd podczas ładowania wycieczek: ' + error.message;
        });
    },
    submitReservation() {
      this.createCustomer()
        .then(customer => {
          this.createReservation(customer);
        })
        .catch(error => {
          this.error = 'Błąd podczas tworzenia klienta: ' + error.message;
        });
    },
    createCustomer() {
      return fetch('http://localhost:8080/api/customers', { // Zastąp właściwym URL do API
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.customer)
      })
      .then(response => response.json());
    },
    createReservation(customer) {
      const selectedTour = this.tours.find(tour => tour.tourId === this.reservation.tourId);

    if (!selectedTour) {
        throw new Error('Nie znaleziono wybranej wycieczki');
    }
      const reservationData = {
        customerId: customer.id,
        tourId: this.reservation.tourId,
        reservationDate: selectedTour.startDate,
        numberOfPeople: this.reservation.numberOfPeople,
      };

      fetch('http://localhost:8080/api/reservations', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Błąd podczas tworzenia rezerwacji');
        }
        return response.json();
      })
      .then(reservation => {
        // Obsługa sukcesu - np. wyświetlenie komunikatu lub przekierowanie
      })
      .catch(error => {
        this.error = 'Błąd podczas tworzenia rezerwacji: ' + error.message;
      });
    }
  },
  computed: {
    totalPrice() {
      const selectedTour = this.tours.find(tour => tour.tourId === this.reservation.tourId);
      return selectedTour ? selectedTour.price * this.reservation.numberOfPeople : 0;
    }
  }
};
</script>

  
  <style scoped>
    .reservations {
      text-align: center;
    }
    form {
      margin-top: 20px;
    }
    section {
      margin-bottom: 20px;
    }
  </style>
  