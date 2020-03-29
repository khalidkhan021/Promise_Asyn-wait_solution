//these approaches as callback
// getCustomer(1, (customer) => {
//   console.log('Customer: ', customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log('Top movies: ', movies);
//       sendEmail(customer.email, movies, () => {
//         console.log('Email sent...')
//       });
//     });
//   }
// });

//step1: create function using promise
function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ 
        id: 1, 
        name: 'JohnWick021', 
        isGold: true, 
        email: 'email' 
      });
    }, 4000);  
  });
}

function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
    }, 4000);
  });
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  });
}

//step2: create function using asyn/awit as below:
async function notifyCustomer() {
  const customer = await getCustomer(1);
  console.log('Customer: ', customer);
  if (customer.isGold) {
    const movies = await getTopMovies();
    console.log('Top movies: ', movies);
    await sendEmail(customer.email, movies);
    console.log('Email sent...');
  }
}
notifyCustomer();

//what are the benefit of asyn/awit ??
//Its helps to  never used nested ".then", 
//means getCustomer(1).then({res=>getTopMovie(res).then(res=>sendEmail(customer.email, movies).then(call catch))}}).......etc



