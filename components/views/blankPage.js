// ${state.eventSearch
//   .map(event => {
//     return `
//     <tr><td>${event.eventName}${event.eventDate}${event.eventTime}</td><td>Seat Info</td><td>Vendor</td><td>Price</td>
//     `
//   }).join("")}

//   <p class="written-content" id="contact-input-name"><label>Name:&nbsp;</label><input type="text" name="name" placeholder="Enter Name" class="contact-input"/></p>
// <p class="written-content" id="contact-input-email"><label>Email:&nbsp;</label><input type="email" name=
// "email" placeholder="Enter Email" class="contact-input"/></p>
// <p class="written-content" id="contact-input-phone"><label>Phone:&nbsp;</label><input type="phone" name="phone" placeholder="Enter Phone Number (optional)" class="contact-input"/></p>
// <p class="written-content" id="contact-input-text"><label></label><textarea id="contact-input-text" name="free-text"text-align="center" cols="60" rows="10" placeholder="Tell us a little bit about your inquiry."></textarea></p>
// <div id="contact-submit-button" ><button type="submit">Submit</button></div>
// using this file for keeping my non-working code and so it can be worked on.

                // console.log(response.data._embedded.events[0].name);
                // store.Events.eventSearch.name = response.data._embedded.events[0].name ;
                // console.log(store.Events.eventSearch.name);
                // store.Events.eventSearch.eventDate = response.data._embedded.events[0].dates.start.localDate ;
                // console.log(store.Events.eventSearch.eventDate);
                // store.Events.eventSearch.eventTime = response.data._embedded.events[0].dates.start.localTime ;
                // console.log(store.Events.eventSearch.eventTime);
                // store.Events.eventSearch.eventUrl = response.data._embedded.events[0].url ;
                // console.log(store.Events.eventSearch.eventUrl);
                // store.Events.eventSearch.performer = response.data._embedded.events[0]._embedded.attractions[0].name ;
                // console.log(store.Events.eventSearch.performer);


function randomSection() {
  min = 100 ;
  max = 400 ;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomRow() {
  min = 1 ;
  max = 40 ;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomSeat() {
  min = 1 ;
  max = 20 ;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomSection());
console.log(randomRow());
console.log(randomSeat());

//

TM = url;
SG = url;

const promiseTM = axios.get(TM);
const promiseSG = axios.get(SG);

// Promise.allSettled([promiseTM, promiseSG,...]).then.then(response => {
//   store.Events.eventSearchSG = {};
//   console.log(response.data);
//   store.Events.eventSearchSG = response.data.events;
//   done();
// })

Promise.allSettled([promiseTM, promiseSG])
  .then(results => {
    const response1 = results[0].status === 'fulfilled' ? results[0].value.data : null;
    const response2 = results[1].status === 'fulfilled' ? results[1].value.data : null;
    const error1 = results[0].status === 'rejected' ? results[0].reason : null;
    const error2 = results[1].status === 'rejected' ? results[1].reason : null;
    const eventSearchTM = { response: response1, error: error1 };
    const eventSearchSG = { response: response2, error: error2 };
    console.log('API call 1 result:', eventSearchTM);
    console.log('API call 2 result:', eventSearchSG);
  });


    // axios
        //   .get(
        //     // add in API url when I have it, don't forget to read over .then statement and correct if necessary
        //     `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.TM_API_KEY}`
        //   )
        //   .then(response => {
        //     console.log(response.data);
        //     done();
        //   });

  // case "Events":
          //   axios
          //     .get(
          //       // add in API url when I have it, don't forget to read over .then statement and correct if necessary
          //       `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.TM_API_KEY}&size=10`
          //     )
              // .then(response => {
              //   store.Events.eventSearchTM = {};
              //   console.log(response.data);
              //   store.Events.eventSearchTM = response.data._embedded.events;
              //   // console.log(response.data._embedded.events[0].name);
              //   // store.Events.eventSearch.name = response.data._embedded.events[0].name ;
              //   // console.log(store.Events.eventSearch.name);
              //   // store.Events.eventSearch.eventDate = response.data._embedded.events[0].dates.start.localDate ;
              //   // console.log(store.Events.eventSearch.eventDate);
              //   // store.Events.eventSearch.eventTime = response.data._embedded.events[0].dates.start.localTime ;
              //   // console.log(store.Events.eventSearch.eventTime);
              //   // store.Events.eventSearch.eventUrl = response.data._embedded.events[0].url ;
              //   // console.log(store.Events.eventSearch.eventUrl);
              //   // store.Events.eventSearch.performer = response.data._embedded.events[0]._embedded.attractions[0].name ;
              //   // console.log(store.Events.eventSearch.performer);
              //   console.log(store.Events.eventSearchTM);
              //   done();
              // })
              // .catch (
              //   (err) => {
              //     console.log(err);
              //     done();
              //   }
              // );
              // break;
          // case "Events":
          //     axios
          //       .get(
          //           // add in API url when I have it, don't forget to read over .then statement and correct if necessary
          //           `https://api.seatgeek.com/2/events?client_id=${process.env.SEATGEEK_CLIENT_ID}&client_secret=${process.env.SEATGEEK_CLIENT_SECRET}`
          //         )
          //       .then(response => {
          //           store.Events.eventSearchSG = {};
          //           console.log(response.data);
          //           store.Events.eventSearchSG = response.data.events;
          //           done();
          //         })
          //         .catch (
          //           (err) => {
          //             console.log(err);
          //             done();
          //           }
          //         );
