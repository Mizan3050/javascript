const quotesEl = document.querySelector(".quotes");
const loaderEl = document.querySelector(".loader");

const getQuotes = async (page, limit) => {
  const API_URL = `https://api.javascripttutorial.net/v1/quotes/?page=${page}&limit=${limit}`;
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`An error occurred: ${response.status}`);
  }

  return await response.json();
};

const showQuotes = (quotes) => {
  quotes.forEach((quote) => {
    const quoteEl = document.createElement("blockquote");
    quoteEl.classList.add("quote");

    quoteEl.innerHTML = `
        <span>${quote.id})</span>
        ${quote.quote}
        <footer>${quote.author}</footer>
        `;
    quotesEl.appendChild(quoteEl);
  });
};

const showLoader = () => {
  loaderEl.classList.add("show");
};

const hideLoader = () => {
  loaderEl.classList.remove("show");
};

let currentPage = 1;
let total = 0;
let limit = 10;

const hasMoreQoutes = (page, limit, total) => {
  const startIndex = (page - 1) * limit + 1;
  return total === 0 || startIndex < total;
};

const loadQuotes = async (page, limit) => {
  showLoader();
  /*   setTimeout(async () => { */
  try {
    if (hasMoreQoutes(page, limit, total)) {
      const response = await getQuotes(page, limit);
      showQuotes(response.data);
      total = response.total;
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    hideLoader();
  }
  /*   }
  , 500); */
};

window.addEventListener("scroll", (e) => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  console.log(scrollHeight, scrollTop, clientHeight);

  if (
    scrollHeight - scrollTop - clientHeight < 1 &&
    hasMoreQoutes(currentPage, limit, total)
  ) {
    currentPage++;
    loadQuotes(currentPage, limit);
  }
});

loadQuotes(currentPage, limit);
