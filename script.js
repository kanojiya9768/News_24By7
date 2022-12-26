//api is taken from newsdata.io

// fetch data here 
let fetch_news = () => {
  let url = `https://newsdata.io/api/1/news?apikey=pub_14946d19ecfc01c45a43c13754ed6c864932b&q=bjp`;

  fetch(url).then((res) => {
    return res.json();
  }).then((data) => {
    let data_array = data.results;
    console.log(data_array);

    //show the data on screen
    default_data_on_load(data_array);
  }).catch(err => {
    console.log('error aaya tha news nahi mili');
  })

}




//show data on load
let default_data_on_load = (data) => {

  let screen_data = ``;

  //loop throught array response
  data.map((res) => {
    let time = new Date(res.pubDate).toDateString();

    let description = ` <p id='description'>${res.description}</p>`;

    let img_if_available = ` <img src=${res.image_url} alt='errorimg'>}`;

    let img_if_not_available = ` <img src='https://mixkit.imgix.net/video-templates/preview/mixkit-news-logo-reveal-784-1.jpg?q=80&auto=format%2Ccompress' alt='errorimg'>}`;



    screen_data += ` <div id='new_holder'>
    
          <div id='image_new'>
           <!--// for description checking whether available or not -->
            ${res.image_url ? img_if_available : img_if_not_available}
          </div>

      <div id='news_data'>
         <a href='#' id="title">${res.title}</a>

         <!--// for description checking whether available or not -->
          ${res.description ? description : 'Description not available.'}
          
         <a href=${res.link} id="link_to_news">Read More</a>
      </div>

    <p id='data_of_news'>${time}</p>
    </div>`
  });


  document.getElementById('news_container').innerHTML = screen_data;

}

















//fetch data on search btn clicked
document.getElementById('search_btn').addEventListener('click', (e) => {
  e.preventDefault();

  fetch_api_on_form_submit();

})




//fetch data on search
document.getElementById('searchbox').addEventListener('submit', (e) => {
  e.preventDefault();

  fetch_api_on_form_submit();

})


let fetch_api_on_form_submit = () => {
  //fetch here
  let search_text = document.getElementById('search_news').value;

  let url = `https://newsdata.io/api/1/news?apikey=pub_14946d19ecfc01c45a43c13754ed6c864932b&q=${search_text}`;

  //pass searching url to fetch_on_search function
  fetch_on_search(url);
}





//fetch real data on search here
let fetch_on_search = (url) => {

  fetch(url).then((res) => {
    return res.json();
  }).then((data) => {
    let data_array = data.results;
    console.log(data_array);

    //show the data on screen
    default_data_on_load(data_array);
  }).catch(err => {
    console.log('error aaya tha news nahi mili');
  })
  
}


//show default data on load
fetch_news();
